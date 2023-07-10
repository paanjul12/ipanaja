function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:@ipaan_ae\nitem1.TEL;waid=6283861639366:6283861639366\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;My Web:https://instagram.com/ipaan_ae\nEMAIL;Email Owner:xxxxx@gmail.com\nORG: NOT A BOT + NOT CALL\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler