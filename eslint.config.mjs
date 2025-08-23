import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Ignore generated code from linting
  {
    ignores: [
      "src/generated/**",
    ],
  },
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
  // Disable unused vars checks for both JS and TS
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": "off",
  // Disable unused expressions checks
  "no-unused-expressions": "off",
  "@typescript-eslint/no-unused-expressions": "off",
  // Allow aliasing `this` (e.g., const self = this)
  "@typescript-eslint/no-this-alias": "off",
    },
  },
];

export default eslintConfig;
