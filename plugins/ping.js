const config = require('../config')
let fs = require('fs')
const os = require("os")
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "ping2",
    react: "🔖",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping2',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '*_𝗟𝗨𝗖𝗜𝗙𝗘𝗥 𝗠𝗗 𝗣𝗜𝗡𝗚 🧩..._*'  }, { quoted: mek } )
var final = new Date().getTime();
await conn.sendMessage(from, { delete: ping.key })
return await conn.sendMessage(from , { text: '*🧑‍💻⃝𝙇𝙐𝘾𝙄𝙁𝙀𝙍 𝙈𝘿 𝙋𝙄𝙉𝙂➝💥*\n *' + (final - inital) + ' ms* '  }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "ping3",
    react: "♻️",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*_🪄𝙋𝙄𝙉𝙂𝙄𝙉𝙂..._*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `*⚠️ 𝙎𝙋𝙀𝙀𝘿 𝙇𝙄𝙂𝙃𝙏𝙉𝙄𝙉𝙂... : ${ping}ms*`}, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
