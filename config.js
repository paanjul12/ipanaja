import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6283861639366', 'ipan', true],
] //Numeros de owner 

global.mods = ['6283861639366'] 
global.prems = ['6283861639366']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'ElainaBotz\n\n\n\nPunya Ipan\n\n\n\njangan di curiii\n\n\n\nYg nyuri dosa\n\n\n\nFollow : @ipaan_ae\nSubscribe : ipan motz\n\n\n\nElainaBotz-MD' 
global.author = '@ipaan_ae' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/ipaan_ae\n' 
global.dygp = 'https://www.instagram.com/ipaan_ae'
global.fgsc = 'https://www.instagram.com/ipaan_ae' 
global.fgyt = 'https://www.instagram.com/ipaan_ae'
global.fgpyp = 'https://www.instagram.com/ipaan_ae'
global.fglog = 'https://i.ibb.co/Csp01NQ/nero-thumbnail.jpg'

//daefault https://i.ibb.co/Csp01NQ/nero-thumbnail.jpg 

global.wait = '*⌛ Sabar tod masih loading....*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})