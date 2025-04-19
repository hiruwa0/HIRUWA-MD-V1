const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const axios = require('axios');

function isEnabled(value) {
    // Function to check if a value represents a "true" boolean state
    return value && value.toString().toLowerCase() === "true";
}

cmd({
    pattern: "env",
    alias: ["setting", "allvar"],
    desc: "Settings of bot",
    category: "menu",
    react: "🛠️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        // Define the settings message with the correct boolean checks
        let envSettings = `╭━━━〔 𝗟𝗨𝗖𝗜𝗙𝗘𝗥 𝗠𝗗 🥵🖤* 〕━━━┈⊷
┃▸╭───────────
┃▸┃๏ *𝗘𝗡𝗩 𝗦𝗘𝗧𝗧𝗜𝗡𝗚 🛠️*
┃▸└───────────···๏
╰────────────────┈⊷
╭━━〔 *Enabled Disabled* 〕━━┈⊷
┇๏ *𝗔𝗨𝗧𝗢 𝗥𝗘𝗔𝗗 𝗦𝗧𝗔𝗧𝗨𝗦:* ${isEnabled(config.AUTO_READ_STATUS) ? "𝗘𝗡𝗔𝗕𝗟𝗘𝗗 ✅" : "𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗 ❌"}
┇๏ *𝗔𝗨𝗧𝗢 𝗦𝗧𝗔𝗧𝗨𝗦 𝗥𝗘𝗣𝗟𝗬:* ${isEnabled(config.AUTO_STATUS_REPLY) ? "𝗘𝗡𝗔𝗕𝗟𝗘𝗗 ✅" : "𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗 ❌"}
┇๏ *𝗔𝗨𝗧𝗢 𝗥𝗘𝗣𝗟𝗬:* ${isEnabled(config.AUTO_REPLY) ? "𝗘𝗡𝗔𝗕𝗟𝗘𝗗 ✅" : "𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗 ❌"}
┇๏ *𝗔𝗨𝗧𝗢 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦:* ${isEnabled(config.AUTO_STICKER) ? "𝗘𝗡𝗔𝗕𝗟𝗘𝗗 ✅" : "𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗 ❌"}
┇๏ *𝗔𝗨𝗧𝗢 𝗩𝗢𝗜𝗖𝗘:* ${isEnabled(config.AUTO_VOICE) ? "𝗘𝗡𝗔𝗕𝗟𝗘𝗗 ✅" : "𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗 ❌"}
┇๏ *𝗢𝗪𝗡𝗘𝗥 𝗥𝗘𝗔𝗖𝗧:* ${isEnabled(config.OWNER_REACT) ? "𝗘𝗡𝗔𝗕𝗟𝗘𝗗 ✅" : "𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗 ❌"}
┇๏ *𝗛𝗘𝗔𝗥𝗧 𝗥𝗘𝗔𝗖𝗧:* ${isEnabled(config.HEART_REACT) ? "𝗘𝗡𝗔𝗕𝗟𝗘𝗗 ✅" : "𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗 ❌"}
┇๏ *𝗔𝗨𝗧𝗢 𝗥𝗘𝗔𝗖𝗧:* ${isEnabled(config.AUTO_REACT) ? "𝗘𝗡𝗔𝗕𝗟𝗘𝗗 ✅" : "𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗 ❌"}
┇๏ *𝗔𝗡𝗧𝗜-𝗟𝗜𝗡𝗞:* ${isEnabled(config.ANTI_LINK) ? "𝗘𝗡𝗔𝗕𝗟𝗘𝗗 ✅" : "𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗 ❌"}
┇๏ *𝗔𝗡𝗧𝗜-𝗕𝗔𝗗 𝗪𝗢𝗥𝗗𝗦:* ${isEnabled(config.ANTI_BAD) ? "𝗘𝗡𝗔𝗕𝗟𝗘𝗗 ✅" : "𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗 ❌"}
┇๏ *𝗔𝗨𝗧𝗢 𝗧𝗬𝗣𝗜𝗡𝗚:* ${isEnabled(config.AUTO_TYPING) ? "𝗘𝗡𝗔𝗕𝗟𝗘𝗗 ✅" : "𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗 ❌"}
┇๏ *𝗔𝗨𝗧𝗢 𝗥𝗘𝗖𝗢𝗥𝗗𝗜𝗡𝗚:* ${isEnabled(config.FAKE_RECORDING) ? "𝗘𝗡𝗔𝗕𝗟𝗘𝗗 ✅" : "𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗 ❌"}
┇๏ *𝗔𝗟𝗪𝗔𝗬𝗦 𝗢𝗡𝗟𝗜𝗡𝗘:* ${isEnabled(config.ALWAYS_ONLINE) ? "𝗘𝗡𝗔𝗕𝗟𝗘𝗗 ✅" : "𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗 ❌"}
┇๏ *𝗖𝗨𝗥𝗥𝗥𝗡𝗧𝗟𝗘𝗬 𝗦𝗧𝗔𝗧𝗨𝗦:* ${isEnabled(config.CURRENT_STATUS) ? "𝗘𝗡𝗔𝗕𝗟𝗘𝗗 ✅" : "𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗 ❌"}
┇๏ *𝗥𝗘𝗔𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘:* ${isEnabled(config.READ_MESSAGE) ? "𝗘𝗡𝗔𝗕𝗟𝗘𝗗 ✅" : "𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗 ❌"}
╰━━━━━━━━━━━━──┈⊷
> ${config.CAPTION}`;

        // Send message with an image
        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/x04f5n.jpg' }, // Image URL
                caption: envSettings,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363402653537145@newsletter',
                        newsletterName: "🧑‍💻⃝𝙇𝙐𝘾𝙄𝙁𝙀𝙍 𝙈𝘿 𝙏𝙀𝘾𝙃➝💥",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send an audio file
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/Awais-star-a11y/TESTING-REPO/raw/refs/heads/main/VID-20250118-WA0022.mp3' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.log(error);
        reply(`Error: ${error.message}`);
    }
});
