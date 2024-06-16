import {
  defineConfig,
  presetUno,
  presetIcons,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
  transformerCompileClass,
  transformerAttributifyJsx,
} from "unocss";

export default defineConfig({
  // https://unocss.dev/guide/extracting
  // Try to handle .css file.
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        /src\/.*\.(s?css|[jt]sx?)$/,
        // /\.module\.css/,
        // This one not work might because it's filesystem based.
        // "src/**/*.css",
      ],
    },
    // filesystem: ["src/**/*.css"],
    //   // filesystem: ["src/**/*.{css}"],
    //   // filesystem: ["src/**/*.{tsx}"],
    //   // filesystem: ["src/**/*.css", "src/**/*.tsx"],
    //   // },
  },
  presets: [
    presetUno(),
    presetAttributify({
      prefix: "un-",
      prefixedOnly: true,
    }),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
  // Seems no need.
  transformers: [
    transformerCompileClass(),
    transformerVariantGroup({
      separators: [":"],
    }),
    transformerDirectives({
      applyVariable: ["--at-apply", "--uno-apply", "--uno"],
    }),
  ],

  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
});
