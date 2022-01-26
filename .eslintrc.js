const { createEslint } = require('@vitus-labs/tools-lint')

module.exports = createEslint({
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-invalid-html-attribute': 'off',
  },
})
