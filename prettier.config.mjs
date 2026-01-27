import prettierPluginTailwindcss from "prettier-plugin-tailwindcss";

/** @type {import("prettier").Config} */
export default {
  plugins: [prettierPluginTailwindcss],
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  endOfLine: "lf",
};
