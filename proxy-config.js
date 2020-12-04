// https://stackoverflow.com/questions/56149987/getting-around-blocked-by-cors-policy-error-in-angular-app-running-local-insta

const path = "/proxy_path/*";
const proxy = "/proxy_path/";

const pathRewrite = {};
pathRewrite["^" + proxy.slice(0, -1)] = "";

const configs = {
  target: "http://localhost:4200",
  secure: false,
  changeOrigin: true,
  pathRewrite,
  logLevel: "debug",
};

const PROXY_CONFIG = {};
PROXY_CONFIG[path] = configs;

module.exports = PROXY_CONFIG;

// Run this in terminal
// ng serve --host 0.0.0.0 --disable-host-check --proxy-config ./proxy-config.js
