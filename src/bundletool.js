const helper = require('./helper');

/*
opts: {
  bundlePath string required
  outputPath string required
  overwrite boolean optional
  localTesting boolean optional
}
*/

const bundletool = function bundletool(opts) {
  const bundletoolPath = helper.checkIfBundletoolExists();

  if (!opts.bundlePath && !opts.outputPath) {
    console.log('Bundletool: requires bundlePath and outputPath to function');
    process.exit(1); // return with err code
  }

  const optsArgs = [];
  optsArgs.push('-jar');
  optsArgs.push(bundletoolPath);
  optsArgs.push('build-apks');
  optsArgs.push(`--bundle=${opts.bundlePath}`);
  optsArgs.push(`--output=${opts.outputPath}`);
  optsArgs.push('--overwrite');
  optsArgs.push('--mode=universal');

  if (bundletoolPath) {
    // spawn process with user arguments
    helper.spawnProcess(`/usr/bin/java`, optsArgs);
  } else {
    // download the binary and then start the process with user args

  }
};

module.exports.bundletool = bundletool;
