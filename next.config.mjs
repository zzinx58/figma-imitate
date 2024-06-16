/** @type {import('next').NextConfig} */

import autoImport from "unplugin-auto-import/webpack";
// import FastGlob from "fast-glob";
// import ReactDOMServer from "react-dom/server";
// import next from "next/image";
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.myqcloud.com",
      },
    ],
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    config.plugins.push(
      autoImport({
        imports: [
          // (down) Preset of AutoImport.
          "react",
          {
            from: "react",
            imports: ["ComponentProps"],
            type: true,
          },
          // (down) Default Import demonstration.
          // {
          //   "react-dom/server": [["default", "ReactDOMServer"]], // import { default as ReactDOMServer } from 'react-dom/server',
          // },

          // Element Import.
          {
            next: [""],
            "next/link": [["default", "Link"]],
            "next/image": [["default", "Image"]],
            "next/image": [["default", "NextImage"]],
            // "next/image": [["*", "Image"]],
            "next/script": [["default", "Script"]],
            "next/navigation": ["redirect"],
            "next/server": ["NextRequest", "NextResponse", "userAgent"],
            "next/og": ["ImageResponse"],
          },

          // Type AutoImport demonstration.
          {
            from: "next",
            imports: ["Metadata", "ResolvingMetadata"],
            type: true,
          },

          // AutoImport Local Files;
          {
            from: "./src/constants/unocss.ts",
            imports: ["UnoAttriesObj", "KeyOfUnoAttri", "AttributifyNames"],
            type: true,
          },
        ],
        dirs: ["./src/utils", "./src/constants"],
        // include: [/\.[tj]sx?$/],
        // dirs: [...FastGlob.sync(["./src/utils/**"], { onlyDirectories: true })],
      }),
    );
    return config;
  },
};

export default nextConfig;
