module.exports = {
  apps : [{
    name: 'osuTop100',
    script: '/home/caleb/osuTop100/server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
  }],
};
