import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import svgrPlugin from 'vite-plugin-svgr'

// const reactRefresh = require("@vitejs/plugin-react-refresh");
const reactSvgPlugin = require("vite-plugin-react-svg");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
});
