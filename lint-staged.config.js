module.exports = {
  '*.{js,tsx}': [
    (files) => files.map((file) => `eslint ${file} --fix`),
    'git add',
  ],
};
