
module.exports = {
  name: 'gvo-j-test',
  preset: './jest.config.js',
  coverageDirectory: './coverage/app/gvo-j-test',
  snapshotSerializers: [
      'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
      'jest-preset-angular/build/AngularSnapshotSerializer.js',
      'jest-preset-angular/build/HTMLCommentSerializer.js'
  ],
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html']
};
