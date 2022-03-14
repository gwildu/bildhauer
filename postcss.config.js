module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    "doiuse",
    [
      "postcss-custom-media",
      {
        importFrom: ["./src/styles/custom-media.css"],
      },
    ],
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
          "nesting-rules": true,
        },
      },
    ],
  ],
};
