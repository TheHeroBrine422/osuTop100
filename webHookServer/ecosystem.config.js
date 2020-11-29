module.exports = {
  apps : [{
    name: 'osuTop100WebHook',
    script: '/home/caleb/osuTop100/webHookServer/webHookServer.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
  }],
};
