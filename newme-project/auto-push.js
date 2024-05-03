const { exec } = require('child_process');

// Function to execute shell commands
const executeCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error}`);
        reject(error);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
};

// Install npm dependencies and push to GitHub
const installAndPush = async () => {
  try {
    console.log('Step 1: Installing npm dependencies...');
    await executeCommand('npm install');

    console.log('Step 2: Adding changes to the staging area...');
    await executeCommand('git add .');

    console.log('Step 3: Committing changes...');
    await executeCommand('git commit -m "Auto commit: Update dependencies"');

    console.log('Step 4: Pushing changes to GitHub...');
    await executeCommand('git push origin master');

    console.log('Changes pushed to GitHub successfully.');
  } catch (error) {
    console.error('Error:', error);
  }
};

// Execute the installAndPush function
installAndPush();
