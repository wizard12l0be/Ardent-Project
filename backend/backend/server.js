import app from "./app.js";
import cloudinary from "cloudinary";
import express from 'express';
import { spawn } from 'child_process';
import cors from 'cors';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});

//Code for the model in the server
app.use(cors());
app.use(express.json());

app.post('/process', (req, res) => {
  let user_input = req.body.input;

  // Process the string as defined
  const processString = (input) => {
    input = input.replace(/,+/g, ',').replace(/^,|,$/g, '');
    const sections = input.split(',');
    const processedSections = sections.map(section => {
      section = section.trim();
      section = section.replace(/\s+/g, '_');
      return section;
    });
    return processedSections.join(',');
  };

  user_input = processString(user_input);

  // Execute the Python script
  const pythonProcess = spawn('python', ['./python/main.py', user_input]);

  let scriptOutput = '';

  pythonProcess.stdout.on('data', (data) => {
    scriptOutput += data.toString();
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
    if (!res.headersSent) {
      res.status(500).send(`Error: ${data}`);
    }
  });

  pythonProcess.on('close', (code) => {
    console.log(`Python script exited with code ${code}`);
    if (!res.headersSent) {
      try {
        const jsonData = JSON.parse(scriptOutput);
        res.json(jsonData);
      } catch (error) {
        res.status(500).send('Error parsing JSON');
      }
    }
  });
});
