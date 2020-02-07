module.exports = {
  name: 'component-harnesses-jest-cypress',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/component-harnesses-jest-cypress',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
