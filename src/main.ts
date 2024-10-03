const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  const indexHTML = path.join(__dirname + "/index.html");
  win
    .loadFile(indexHTML)
    .then(() => {
      // IMPLEMENT FANCY STUFF HERE
    })
    .catch((e: any) => console.error(e));
}
app.on('ready', () => {
  console.log("App is ready");
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})