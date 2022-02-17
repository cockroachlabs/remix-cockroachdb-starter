/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  serverBuildTarget: "netlify",
  server: "./server.js",
  ignoredRouteFiles: [".*"]
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildDirectory: "netlify/functions/server/build",
  // publicPath: "/build/",
  // devServerPort: 8002
};
