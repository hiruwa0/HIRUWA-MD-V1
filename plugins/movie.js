const axios = require('axios');
const { cmd } = require('../command');
const config = require('../config'); // Ensure your API key is in config

// Command to fetch movie details
cmd({
    pattern: "movie",
    desc: "Fetch detailed information about a movie.",
    category: "utility",
    react: "🎞️",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const movieName = args.join(' ');
        if (!movieName) {
            return reply("📽️ Please provide the name of the movie.");
        }

        const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${config.OMDB_API_KEY}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data.Response === "False") {
            return reply("! Movie not found.");
        }

        const movieInfo = `
*🎬 𝗟𝗨𝗖𝗜𝗙𝗘𝗥 𝗠𝗗 𝗠𝗢𝗩𝗜𝗘 𝗜𝗡𝗙𝗢 🎬*

*🔖 ᴛɪᴛʟᴇ:* ${data.Title}
*🗓️ ʏᴇᴀʀ:* ${data.Year}
*📈 ʀᴀᴛᴇᴅ:* ${data.Rated}
*📥 ʀᴇʟᴇᴀꜱᴇᴅ:* ${data.Released}
*📟 ʀᴜɴᴛɪᴍᴇ:* ${data.Runtime}
*📄 ɢᴇɴʀᴇ:* ${data.Genre}
*📽️ ᴅɪʀᴇᴄᴛᴏʀ:* ${data.Director}
*📑 ᴡʀɪᴛᴇʀ:* ${data.Writer}
*🧑‍🤝‍🧑 ᴀᴄᴛᴏʀꜱ:* ${data.Actors}
*🌍 ʟᴀɴɢᴜᴀɢᴇ:* ${data.Language}
*🌍 ᴄᴏᴜɴᴛʀʏ:* ${data.Country}
*🏆 ᴀᴡᴀʀᴅꜱ:* ${data.Awards}
*📊 ɪᴍᴅʙ ʀᴀᴛɪɴɢ:* ${data.imdbRating}
`;

        const imageUrl = data.Poster && data.Poster !== 'N/A' ? data.Poster : config.ALIVE_IMG;

        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: `${movieInfo}\n> 🧑‍💻⃝𝙇𝙐𝘾𝙄𝙁𝙀𝙍 𝙈𝘿➝💥`
        }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`❌ Error: ${e.message}`);
    }
});
