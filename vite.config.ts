/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssPresetEnv from "postcss-preset-env";
import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";
import tailwindcssNesting from "tailwindcss/nesting";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    include: ["src/test/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    coverage: {
      provider: "istanbul",
    },
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssImport(),
        tailwindcssNesting(),
        tailwindcss(),
        postcssPresetEnv(),
      ],
    },
  },
  resolve: {
    alias: [
      {
        find: /^@mui\/icons-material\/(.*)/,
        replacement: "@mui/icons-material/esm/$1",
      },
    ],
  },
});
