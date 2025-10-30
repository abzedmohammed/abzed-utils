import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  build: {
    lib: {
      entry: "src/index.js",
      name: "AbzedUtils",
      fileName: (format) => `abzed-utils.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react-redux",
        "react-router-dom",
        "@tanstack/react-query",
        "antd",
        "use-debounce",
        "react-phone-number-input",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-redux": "ReactRedux",
          "react-router-dom": "ReactRouterDOM",
          "@tanstack/react-query": "ReactQuery",
          antd: "antd",
          "use-debounce": "UseDebounce",
          "react-phone-number-input": "ReactPhoneNumberInput",
        },
      },
    },
  },
  optimizeDeps: {
    exclude: [
      "react",
      "react-dom",
      "react-redux",
      "react-router-dom",
      "@tanstack/react-query",
      "antd",
      "use-debounce",
      "react-phone-number-input",
    ],
  },
});
