import {spawn} from 'child_process';

//You will put the string taken from the input in this variable
let user_input = 'continuous sneezing,shivering,chills'

// Below inline function for processing user input to correct form by removing any leading and trailing blanks, extra commas and also replacing whitespaces in the string with underscore to match the input of the model
const processString = (input) => {
    input = input.replace(/,+/g, ',').replace(/^,|,$/g, '');
    const sections = input.split(',');
    const processedSections = sections.map(section => {
        section = section.trim();
        section = section.replace(/\s+/g, '_');
        return section
    });
    return processedSections.join(',');
};

user_input = processString(user_input)

let options = {
    args: [user_input]
};    

// Executing python script directly
const pythonProcess = spawn('python', ['./main.py',options.args]);

pythonProcess.stdout.on('data', (data) => {
    try {
        const jsonData = JSON.parse(data);
        console.log('JSON response:', jsonData);
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});

pythonProcess.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
});

pythonProcess.on('close', (code) => {
    console.log(`Python script exited with code ${code}`);
});