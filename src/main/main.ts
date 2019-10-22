import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";

let win: Electron.BrowserWindow | null;

const createWindow = () => {
    win = new BrowserWindow({
        width: 960,
        height: 540,
        frame: true,
        resizable: true,
        fullscreenable: false,
    });

    // win.setMenu(null);

    win.loadFile(path.join(__dirname, "index.html"));

    win.webContents.openDevTools();

    win.on("closed", () => {
        win = null;
    });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if(win === null) {
        createWindow();
    }
});
