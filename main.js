/*
 * @Author: nhsoft.wh
 * @Date: 2024-01-15 13:56:38
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2024-01-15 14:02:38
 * @Description: file content
 */
const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});
