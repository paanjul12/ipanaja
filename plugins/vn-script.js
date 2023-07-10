import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${sc.getRandom()}`, "sc.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(.sc|.script|.scrip|#sc|#script|#scrip)$/i;
handler.command = new RegExp()

export default handler;

const sc = [
"./vn/sc.mp3",
"./vn/sc1.mp3",
"./vn/sc2.mp3",
"./vn/sc3.mp3",
]