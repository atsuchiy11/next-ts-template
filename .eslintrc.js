module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    settings: {
        react: { version: "detect"}
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            "jsx": true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],    
    plugins: [
        "react",,
        "@typescript-eslint",
    ],
    rules: {
        // prettierのルール
        "semi": [2, "always"],
        "prettier/prettier": ["error", {
            "semi": true,
            "singleQuote": true,
            "trailingComma": "all",
            "printWidth": 100,
        }],
        // reactのカスタムルール
        "react/prop-types": "off", // TSなので不要
        "react/react-in-jsx-scope": "off", // v17からReactはグローバル
        // その他
        "@typescript-eslint/no-this-alias": "off",
        "@typescript-eslint/no-explicit-any": "off"
    }
};
