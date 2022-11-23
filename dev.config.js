module.exports = {
  apps: [
    {
      name: "devops-nodejs",
      script: "./index.js",
      env_development: {
        NODE_ENV: "development",
      },
    },
  ],
};
