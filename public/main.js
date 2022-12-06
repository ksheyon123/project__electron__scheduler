const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

const url = require("url");
const path = require("path");

let win;

const compilePath = isDev
  ? "http://127.0.0.1:3000"
  : url.format({
      pathname: path.join(__dirname, "./index.html"),
      protocol: "file:",
      slashes: true,
    });

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 800,
  });

  win.loadURL(compilePath);
  win.webContents.openDevTools({ mode: "detach" });
  return win;
};

app.on("ready", () => {
  win = createWindow();
  win.show();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    const win = createWindow();
    win.show();
  }
});
