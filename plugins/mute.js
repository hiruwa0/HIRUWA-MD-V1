const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "mute",	
    alias: ["lock","lock2"],
    react: "🔒",
    desc: "mute group.",
    category: "group",
    filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
if (!isOwner || !isAdmins) return;


if (!m.isGroup) return reply(mg.onlygroup);
if (!isBotAdmins) return reply(mg.needbotadmins);     
            await conn.groupSettingUpdate(m.chat, "announcement")
           const mass = await conn.sendMessage(m.chat, { text: '*𝗚𝗥𝗢𝗨𝗣 𝗖𝗛𝗔𝗧 𝗠𝗨𝗧𝗘𝗗 𝗕𝗬 𝗟𝗨𝗖𝗜𝗙𝗘𝗥 𝗠𝗗* 🔒' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '🔒', key: mass.key } });
} catch(e) {
console.log(e);
reply('*𝗣𝗟𝗘𝗔𝗦𝗘 𝗚𝗜𝗩𝗘 𝗠𝗘 𝗔𝗗𝗠𝗜𝗡 𝗥𝗢𝗟𝗘❗👻*')    
} 
})

cmd({
    pattern: "unmute",	
    alias: ["unlock"],
    react: "🔓",
    desc: "unmute group.",
    category: "group",
    filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
if (!isOwner || !isAdmins) return;


if (!m.isGroup) return reply(mg.onlygroup);
if (!isBotAdmins) return reply(mg.needbotadmins);     
            await conn.groupSettingUpdate(m.chat, "not_announcement")
           const mass = await conn.sendMessage(m.chat, { text: '*𝗚𝗥𝗢𝗨𝗣𝗘 𝗖𝗛𝗔𝗧 𝗨𝗡𝗠𝗨𝗧𝗘𝗗 𝗟𝗨𝗖𝗜𝗙𝗘𝗥 𝗠𝗗* 🔓' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '🔓', key: mass.key } });
} catch(e) {
console.log(e);
reply('*𝗣𝗟𝗘𝗔𝗦𝗘 𝗚𝗜𝗩𝗘 𝗠𝗘 𝗔𝗗𝗠𝗜𝗡 𝗥𝗢𝗟𝗘❗👻*')    
} 
})

