const fs = require('fs')
const fsExtra = require('fs-extra')

const path = 'C:/Users/rodri/AppData/Roaming/SERVCore SmartClient Web/Cache'

if (fs.existsSync(path)) {
    fsExtra.remove(path, err => {
        console.log(err)
    })
    console.log("Cache limpado com sucesso!")
}else{
    console.log("nao existe")
}

//taskkill /IM "servcore-sc-web.exe" /F