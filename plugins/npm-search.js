const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "npmstalk",
    alias: ["npm", "npmpackage"],
    desc: "Get details of an NPM package",
    category: "tools",
    react: "📦",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("Please provide an NPM package name.\nExample: `.npmstalk fs-extra`");

        const apiUrl = `https://api.vreden.my.id/api/npmstalk?query=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data.status || !data.result) {
            await react("❌");
            return reply(`NPM package *${q}* not found.`);
        }

        const result = data.result;
        const repo = result.repository ? result.repository : "Not available";
        const npmUrl = `https://www.npmjs.com/package/${result.name}`;

        const text = `🧩*𝗟𝗨𝗖𝗜𝗙𝗘𝗥 𝗠𝗗 𝗡𝗣𝗠 𝗦𝗘𝗔𝗥𝗖𝗛*🧩\n\n` +
                     `🔰 *𝗡𝗣𝗠 𝗣𝗔𝗖𝗞𝗔𝗚𝗘:* ${result.name}\n` +
                     `📄 *𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡:* ${result.description || "No description available"}\n` +
                     `⏸️ *𝗟𝗔𝗦𝗧 𝗩𝗘𝗥𝗦𝗜𝗢𝗡:* ${result["dist-tags"]?.latest || "Unknown"}\n` +
                     `🪪 *𝗟𝗜𝗖𝗘𝗡𝗦𝗘:* ${result.license || "Unknown"}\n` +
                     `🪩 *𝗥𝗘𝗣𝗢𝗦𝗜𝗧𝗢𝗥𝗬:* ${repo}\n` +
                     `🔗 *𝗡𝗣𝗠 𝗨𝗥𝗟:* ${npmUrl}`;

        await conn.sendMessage(from, { text }, { quoted: mek });
        await react("✅"); // React after successful response
    } catch (e) {
        console.error("Error in npmstalk command:", e);
        await react("❌");
        reply("An error occurred while fetching NPM package details.");
    }
});
