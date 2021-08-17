#!/user/bin/env node
const {execSync} = require('child_process');
const runCommand = command =>{
  try {
    execSync(`${command}`, {stdio:'inherit'});
    return true;
  }catch (e) {
    console.error(`Failed to execute ${command}`,e);
    return false;
  }
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/HermesKeng/Webpack-Demo ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`💡 Clone the repository with the name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(-1);

console.log(`🔧 Installing dependencies for ${repoName}`);
const installDeps = runCommand(installDepsCommand);
if(!installDeps) process.exit(-1);

console.log(`🎉 Congratulations`);
console.log(`cd ${repoName} && npm start`);


