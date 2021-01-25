module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    // 关闭eslin和prettier冲突的格式相关规则
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.js", "*.ts"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "warn",
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
