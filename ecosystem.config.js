module.exports = {
  apps: [
    {
      name: "bmcargo",
      exec_mode: "cluster",
      instances: 1,
      script: "./node_modules/nuxt/bin/nuxt.mjs",
      args: "start",
      port: 8810,
    },
  ],
};
