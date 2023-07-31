// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')
const tiktok = require("./baseikal/download/tiktok")
const facebook = require("./baseikal/download/facebook")
const instagram = require("./baseikal/download/instagram")
const twitter = require("./baseikal/download/twitter")


//MODULNYA BY HW
global.baileys = require('@whiskeysockets/baileys') 
global.adiwajshing = require('@adiwajshing/baileys') 

global.gr = 'https://chat.whatsapp.com/BBpfgNHUUgAGeBk0k8fMR4'
global.ig = '@alisya_675' // ubah aja
global.email = 'alisyarif675@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Gallade' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['628991341381'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.botname = 'GalladeBotz' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'Bot Whatsapp' // ubah aja ini nama sticker
global.author = '© GalladeBotz' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 200
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})