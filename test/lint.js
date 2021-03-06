const lint = require('mocha-eslint');

const paths = [
  'app/js/src/**/*.js',
  'app/js/src/**/*.js',
  'deploy/**/*.js',
  'migrations/*.js',
  'test/**/*.js',
];

const options = {
  formatter: 'stylish',
  alwaysWarn: true,
  strict: true,
  contextName: 'ESLint'
};

lint(paths, options);
