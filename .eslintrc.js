module.exports = {
  extends: ['taro/react', "plugin:react-hooks/recommended"],
  plugins: [
    "react-hooks"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}

