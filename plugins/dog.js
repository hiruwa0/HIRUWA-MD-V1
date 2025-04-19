const axios = require('axios');
const { cmd, commands } = require('../command');

cmd({
    pattern: "dog",
    desc: "Fetch a random dog image.",
    category: "fun",
    react: "🐶",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://dog.ceo/api/breeds/image/random`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.message }, caption: '𝗟𝗨𝗖𝗜𝗙𝗘𝗥 𝗠𝗗 𝗗𝗢𝗚 𝗣𝗜𝗖 📂 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 📥\n\n\n> *𝗕𝗬 𝗟𝗨𝗖𝗜𝗙𝗘𝗥 𝗠𝗗 🛠️*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`Error Fetching Dog Image: ${e.message}`);
    }
});
