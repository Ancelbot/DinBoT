let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'*PLATAFORMAS GENERADAS ✅*\n\n*Estas son las siguiente plataformas generadas de hoy 👇🏼*\n\n*DISNEY PLUS 💙*\n\n💌biancaterata@gmail.com\n🔑Pinklipstick12\n\n💌arribasaa@gmail.com\n🔑Tidechair1924\n\n💌parish21@gmail.com\n🔑Pari221m\n\n💌pcamier1109@gmail.com\n🔑Asse1109\n\n💌evanssheldon0@gmail.com\n🔑Westwood94\n\n💌jjeranko@gmail.com\n🔑Theproud11\n\n*HBO MAX 💜*\n\n💌brayanbarreto132@gmail.com\n🔑Bray26B2003\n\n💌bosio.manuella@gmail.com\n🔑2022106496@Manuela\n\n💌benrogaqi@gmail.com\n🔑Martin1105\n\n💌benjaelguezabal752@gmail.com\n🔑benja2014\n\n💌beatrizestefania.valdes@gmail.com\n🔑21dejulio\n\n*START PLUS 🧡*\n\n💌hbazanm@gmail.com\n🔑Hermenegildo1950%%\n\n💌isaac_dan89@hotmail.com\n🔑Morris03'},  { quoted: m })
}
handler.help = ['pagina']
handler.tags = ['info']
handler.command = /^plataformas$/i
export default handler
