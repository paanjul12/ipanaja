import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `
♡  ∩_∩
（„• ֊ •„)♡
┏ • UU • - • - • - • ღ❦ღ┓
   Nama : 
   Umur : 
   Asal :
┗ღ❦ღ • - • - • - • - • - ┛

ElainaBoyz-MD
`
m.reply(krtu)
}
  handler.help = ['intro']
  handler.tags = ['main']
  handler.command = /^(intro)$/i
  
  export default handler
 