module.exports = {
    extends: ['plugin:react/recommended'],
    parserOptions: {
        ecmaVersion: 5,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        es6: true,
        node: true
    },
    rules: {
        "no-console": 0,
        "no-unused-vars": 0
    }
};
