const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const remote = electron.remote;
const dialog = electron.dialog;
var Datastore = require('nedb')
db = {};
db.users = new Datastore('data/users.db');
db.products = new Datastore('data/productos.db');
db.maestros = new Datastore('data/maestros.db');

// You need to load each database (here we do it asynchronously)
db.users.loadDatabase();
db.products.loadDatabase();
db.maestros.loadDatabase();

var base_dir = app.getAppPath();
console.log(base_dir);
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {



  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1024, height: 600,frame: false})

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/cliente/index.html`)

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
  
    mainWindow = null
  })
}


const ipc = require('electron').ipcMain
ipc.on('closeWin', function (event) {
  mainWindow.close();
})
ipc.on('reload', function (event) {
  mainWindow.reload();
})
ipc.on('dev', function (event) {
  mainWindow.webContents.toggleDevTools();
})
ipc.on('asynchronous-message', function (event, arg) {
  event.sender.send('asynchronous-reply', 'pong')
})
ipc.on('tallas', function (event, arg) {
  db.maestros.findOne({ _id: 'tallas' }, function (err, doc) {
     event.sender.send('getTallas', doc);
  });
})
ipc.on('maestros', function (event, query,sendEvent) {
  db.maestros.find(query, function (err, doc) {
     event.sender.send(sendEvent, doc);
  });
})
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
