const {app, BrowserWindow, Menu} = require("electron")

let windowApp;

const createWindowApp = () => {
     windowApp = new BrowserWindow({
          width: 700, 
          height: 500,
          icon: __dirname + "/img/iconMIREA.jpg"
     })

     windowApp.loadFile("./index.html")

     //windowApp.webContents.openDevTools()

     Menu.setApplicationMenu(null)  

     windowApp.on("close", () => {
          windowApp = null
     })
}

app.on("ready", createWindowApp)

app.on("window-all-closed", () => {
     if(process.platform != "darwin")
     app.quit();
})

app.on("activate", () => {
     if(windowApp === null) createWindowApp()
})