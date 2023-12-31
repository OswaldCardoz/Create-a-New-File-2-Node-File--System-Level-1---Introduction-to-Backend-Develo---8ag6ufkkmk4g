const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
    //Write your code here
    //Don't change function name
    try {
        // Use fs.access to check if the file already exists
        await fs.access(fileName);

        // If the access check is successful, the file already exists
        console.log(`${fileName} already exists. Skipping write operation`);
    } catch (error) {
        // If the access check fails, the file does not exist, so create it
        try {
            await fs.writeFile(fileName, fileContent, 'utf-8');
            console.log(`File ${fileName} created and data written successfully!`);
        } catch (writeError) {
            console.error(`Error writing to file ${fileName}: ${writeError.message}`);
        }
    }
  
};
module.exports =  writeFile ;
