module.exports = {
  apps: [
    {
      name: "moallemyad",
      script: "npx",
      args: "tsx server/index.ts",
      cwd: "/opt/moallemyad",
      env: {
        NODE_ENV: "production",
        PORT: 80,
        // Use external persistent data path on server
        DATA_PATH: "/var/lib/moallemyad/data.json",
        // Same JWT secret used in deployment
        JWT_SECRET: "a42bc2a17e555786b7f64c550f5162fce9c0fe1726a3fe95b6cf20a2531fc8d6"
      }
    }
  ]
};


