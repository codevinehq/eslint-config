module.exports = {
    env: {
        node: true,
        browser: true,
        jest: true,
    },
    parser: 'babel-eslint',
    extends: ['airbnb', 'prettier', 'prettier/react'],
    plugins: ['jest', 'prettier'],
    rules: {
        'no-underscore-dangle': 0,
        'consistent-return': 0,
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                tabWidth: 4,
            },
        ],
        'no-multiple-empty-lines': [
            2,
            {
                max: 1,
            },
        ],
        'react/prop-types': 1,
        'react/jsx-filename-extension': 0,
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['**/test.js', '**/*.test.js'],
            },
        ],
    },
};
