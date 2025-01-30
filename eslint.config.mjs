import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next"),
  {
    overrides: [
      {
        files: ["*.js", "*.jsx"],
        parser: "espree", // إجبار ESLint على عدم استخدام TypeScript
      },
    ],
  },
];

export default eslintConfig;
