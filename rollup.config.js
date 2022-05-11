import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: [
    {
      file: "./dist/bundle.js",
      exports: "auto",
      format: "cjs",
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    terser(),
    babel({
      exclude: "node_modules/**",
    }),
  ],
};
