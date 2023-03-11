import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      typescript(),
      postcss({
        plugins: [],
        minimize: true,
      }),
      external(),
      resolve(),
      commonjs(),
      babel({ extensions: [".tsx"], babelHelpers: "bundled" }),
      terser(),
    ],
    external: ['react'],
  },
];
