module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    plugins: ["react", "react-hooks", "@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier", "plugin:prettier/recommended"],
    rules: {
        "prettier/prettier": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"]
    },
    ignorePatterns: ["node_modules/*"],
    globals: {
        React: true,
        JSX: true,
    }
};
