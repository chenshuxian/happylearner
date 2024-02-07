module.exports = {
    apps: [{
      name: "happylearner", // 你的應用名稱
      script: "npm run start", // 你的啟動腳本文件
      watch: ["public"], // 監控 public 目錄
      ignore_watch: ["node_modules"], // 忽略 node_modules 目錄
      watch_options: {
        "followSymlinks": false
      }
    }]
  };