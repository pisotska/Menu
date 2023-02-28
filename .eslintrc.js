module.exports = {
  extends: [
    "react-app", "react-app/jest",
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "react/forbid-prop-types": 0,
    "react/prop-types": 0,
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  }
}
