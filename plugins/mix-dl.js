const { cmd } = require('../command');
const axios = require('axios');

cmd({
  pattern: "fb",
  alias: ["facebook", "fb3", "fbdl"],
  desc: "Download Facebook videos",
  category: "download",
  filename: __filename
}, async (conn, m, store, { from, q, reply }) => {
  try {
    if (!q || !q.startsWith("https://")) {
      return reply("*`Need a valid Facebook URL!`*");
    }

    await conn.sendMessage(from, { react: { text: '⏳', key: m.key } });

    const apiUrl = `https://lance-frank-asta.onrender.com/api/downloader?url=${encodeURIComponent(q)}`;
    const { data } = await axios.get(apiUrl);

    if (!data?.content?.status || !data?.content?.data?.result?.length) {
      throw new Error("Invalid API response or no video found.");
    }

    let videoData = data.content.data.result.find(v => v.quality === "HD") || 
                    data.content.data.result.find(v => v.quality === "SD");

    if (!videoData) {
      throw new Error("No valid video URL found.");
    }

    await conn.sendMessage(from, {
      video: { url: videoData.url },
      caption: `📥 *𝗟𝗨𝗖𝗜𝗙𝗘𝗥 𝗠𝗗 𝗙𝗕 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥🚀*\n\n*𝗤𝗨𝗔𝗟𝗜𝗧𝗬•${videoData.quality}*\n\n🔗 *🧑‍💻⃝𝙇𝙐𝘾𝙄𝙁𝙀𝙍 𝙈𝘿➝💥*`
    }, { quoted: m });

  } catch (error) {
    console.error("FB Download Error:", error);

    // Send error details to bot owner
    const ownerNumber = conn.user.id.split(":")[0] + "@s.whatsapp.net";
    await conn.sendMessage(ownerNumber, {
      text: `⚠️ *FB Downloader Error!*\n\n📍 *Group/User:* ${from}\n💬 *Query:* ${q}\n❌ *Error:* ${error.message || error}`
    });

    // Notify the user
    reply("❌ *Error:* Unable to process the request. Please try again later.");
  }
});


cmd({
    pattern: "insta3",
    alias: ["igdl3", "reel3", "ig2", "instadl3"],
    desc: "Download Instagram reels or image posts",
    category: "downloader",
    react: "⏳",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("Please provide an Instagram post or reel link.");
        if (!q.includes("instagram.com")) return reply("Invalid Instagram link.");

        const apiUrl = `https://delirius-apiofc.vercel.app/download/igv2?url=${q}`;
        const { data } = await axios.get(apiUrl);

        if (!data.status || !data.data) {
            await react("❌"); 
            return reply("Failed to fetch Instagram media.");
        }

        const { username, fullname, caption, likes, comments, followed, download } = data.data;

        const captionText = `📥 𝗟𝗨𝗖𝗜𝗙𝗘𝗥 𝗠𝗗 𝗜𝗡𝗦𝗧𝗔 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥🚀*` +
                            `📸 *𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 𝗣𝗢𝗦𝗧* 📸\n\n` +
                            `👤 *𝗨𝗦𝗘𝗥* ${fullname} (@${username})\n` +
                            `❤️ *𝗟𝗜𝗞𝗘𝗦:* ${likes}\n💬 *Comments:* ${comments}\n👥 *𝗙𝗢𝗟𝗟𝗢𝗪𝗥𝗦:* ${followed}\n` +
                            `📝 *𝗖𝗔𝗣𝗧𝗜𝗢𝗡:*\n${caption || "🧑‍💻⃝𝙇𝙐𝘾𝙄𝙁𝙀𝙍 𝙈𝘿➝💥."}`;

        for (const media of download) {
            if (media.type === "image") {
                await conn.sendMessage(from, {
                    image: { url: media.url },
                    caption: captionText,
                    contextInfo: { mentionedJid: [m.sender] }
                }, { quoted: mek });
            } else if (media.type === "video") {
                await conn.sendMessage(from, {
                    video: { url: media.url },
                    caption: captionText,
                    contextInfo: { mentionedJid: [m.sender] }
                }, { quoted: mek });
            }
        }

        await react("✅"); // React after successfully sending media
    } catch (e) {
        console.error("Error in Instagram downloader command:", e);
        await react("❌");
        reply(`An error occurred: ${e.message}`);
    }
});


cmd({
    pattern: "tiktok",
    alias: ["ttdl", "tk", "tiktokdl", "tt"],
    desc: "Download TikTok video without watermark",
    category: "downloader",
    react: "🎵",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply }) => {
    try {
        if (!q) return reply("Please provide a TikTok video link.");
        if (!q.includes("tiktok.com")) return reply("Invalid TikTok link.");
        
        reply("*_📥 𝗟𝗨𝗖𝗜𝗙𝗘𝗥 𝗠𝗗 𝗧𝗜𝗞𝗧𝗢𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗥 🚀_*");
        
        const apiUrl = `https://apis.davidcyriltech.my.id/download/tiktok?url=${q}`;
        const { data } = await axios.get(apiUrl);
        
        if (!data.status || !data.data) return reply("Failed to fetch TikTok video.");
        
        const { title, like, comment, share, author, meta } = data.data;
        const videoUrl = meta.media.find(v => v.type === "video").org;
        
        const caption = `🎵 *-𝗟𝗨𝗖𝗜𝗘𝗙𝗥 𝗠𝗗 𝗧𝗜𝗞𝗧𝗢𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥-* 🎵\n\n` +
                        `👤 *𝗨𝗦𝗘𝗥:* ${author.nickname} (@${author.username})\n` +
                        `📖 *𝗧𝗜𝗧𝗟𝗘:* ${title}\n` +
                        `👍 *𝗟𝗜𝗞𝗘𝗦:* ${like}\n💬 *COMMENTS:* ${comment}\n🔁 *𝗦𝗛𝗔𝗥𝗘𝗦:* ${share}\n\n 🧑‍💻⃝𝙇𝙐𝘾𝙄𝙁𝙀𝙍 𝙈𝘿➝💥`;
        
        await conn.sendMessage(from, {
            video: { url: videoUrl },
            caption: caption,
            contextInfo: { mentionedJid: [m.sender] }
        }, { quoted: mek });
        
    } catch (e) {
        console.error("Error in TikTok downloader command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
          
