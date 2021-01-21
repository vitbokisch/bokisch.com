module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "styled-components",
      {
        displayName: true,
        minify: true,
        pure: true,
        ssr: true,
        preprocess: false,
      },
    ],
  ],
};
