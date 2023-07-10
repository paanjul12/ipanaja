let handler = async ( m ) => {
  m.reply('Hello!')
}

handler.command = /^(cek)$/i

export default handler