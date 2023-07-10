import { promises, readFileSync } from 'fs'
import fetch from "node-fetch"
let handler = async (m, { conn, args, text, usedPrefix, command, isROwner, isCreator }) => {
//
 let data = JSON.parse(readFileSync('./lib/database/ppcouple/ppcouple.json'))
 let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '*cowok*', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '*cewek*', m)
}

handler.help = ['ppcpv2']
handler.tags = ['internet', 'anime']
handler.command = /^(pp(cpv2|couplev2))$/i
handler.limit = true
handler.diamond = true

export default handler