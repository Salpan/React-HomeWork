import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
    {
        files: ['src/**/*.{js,mjs,cjs,jsx}'],
        rules: {
            'no-undef': 'off',
            'react/react-in-jsx-scope': 'off',
        },
    },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
];
