const simpleGit = require('simple-git');

const git = simpleGit();

git.add('.')
  .commit('Auto commit: Update changes')
  .push('origin', 'main', (err) => {
    if (err) {
      console.error('Error pushing changes:', err);
    } else {
      console.log('Changes pushed to remote repository.');
    }
  });
