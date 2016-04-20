SystemJS.config({
  baseURL: __dirname + "/",
  trace: true,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "electron-quick-start/": "src/"
  }
});
