const { cmd } = require("../command");
const axios = require("axios");
const fs = require("fs");

cmd({
  pattern: "fluxai",
  alias: ["flux", "imagine"],
  react: "🚀",
  desc: "Generate an image using AI.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, { q, reply }) => {
  try {
    if (!q) return reply("Please provide a prompt for the image.");

    await reply(" *𝗖𝗥𝗘𝗔𝗧𝗜𝗡𝗚 𝗜𝗠𝗔𝗚𝗜𝗡𝗘 ...*");

    const apiUrl = `https://api.siputzx.my.id/api/ai/flux?prompt=${encodeURIComponent(q)}`;

    const response = await axios.get(apiUrl, { responseType: "arraybuffer" });

    if (!response || !response.data) {
      return reply("Error: The API did not return a valid image. Try again later.");
    }

    const imageBuffer = Buffer.from(response.data, "binary");

    await conn.sendMessage(m.chat, {
      image: imageBuffer,
      caption: `💸 *𝗜𝗠𝗔𝗚𝗜𝗡𝗘 𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗘𝗗 𝗕𝗬 𝗟𝗨𝗖𝗜𝗙𝗘𝗥 𝗠𝗗* 🚀\n✨ 𝗣𝗥𝗢𝗠𝗢𝗧: *${q}*`
    });

  } catch (error) {
    console.error("FluxAI Error:", error);
    reply(`An error occurred: ${error.response?.data?.message || error.message || "Unknown error"}`);
  }
});

cmd({
  pattern: "stablediffusion",
  alias: ["sdiffusion", "imagine2"],
  react: "🚀",
  desc: "Generate an image using AI.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, { q, reply }) => {
  try {
    if (!q) return reply("𝗣𝗟𝗘𝗔𝗦𝗘 𝗣𝗥𝗢𝗩𝗜𝗗𝗘 𝗔 𝗣𝗥𝗢𝗠𝗢𝗧 𝗙𝗢𝗥 𝗧𝗛𝗘 𝗜𝗠𝗔𝗚𝗜𝗡𝗘.");

    await reply("> *𝗖𝗥𝗘𝗔𝗧𝗜𝗡𝗚 𝗜𝗠𝗔𝗚𝗜𝗡𝗘 ...🔥*");

    const apiUrl = `https://api.siputzx.my.id/api/ai/stable-diffusion?prompt=${encodeURIComponent(q)}`;

    const response = await axios.get(apiUrl, { responseType: "arraybuffer" });

    if (!response || !response.data) {
      return reply("Error: The API did not return a valid image. Try again later.");
    }

    const imageBuffer = Buffer.from(response.data, "binary");

    await conn.sendMessage(m.chat, {
      image: imageBuffer,
      caption: `💸 *𝗜𝗠𝗔𝗚𝗜𝗡𝗘 𝗚𝗘𝗡𝗔𝗥𝗔𝗧𝗘𝗗 𝗕𝗬 𝗟𝗨𝗖𝗜𝗙𝗘𝗥 𝗠𝗗*🚀\n✨ 𝗣𝗥𝗢𝗠𝗢𝗧: *${q}*`
    });

  } catch (error) {
    console.error("FluxAI Error:", error);
    reply(`An error occurred: ${error.response?.data?.message || error.message || "Unknown error"}`);
  }
});

cmd({
  pattern: "stabilityai",
  alias: ["stability", "imagine3"],
  react: "🚀",
  desc: "Generate an image using AI.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, { q, reply }) => {
  try {
    if (!q) return reply("Please provide a prompt for the image.");

    await reply("> *𝗖𝗥𝗘𝗔𝗧𝗜𝗠𝗚 𝗜𝗠𝗔𝗚𝗜𝗡𝗘 ...🔥*");

    const apiUrl = `https://api.siputzx.my.id/api/ai/stabilityai?prompt=${encodeURIComponent(q)}`;

    const response = await axios.get(apiUrl, { responseType: "arraybuffer" });

    if (!response || !response.data) {
      return reply("Error: The API did not return a valid image. Try again later.");
    }

    const imageBuffer = Buffer.from(response.data, "binary");

    await conn.sendMessage(m.chat, {
      image: imageBuffer,
      caption: `💸 *𝗜𝗠𝗔𝗚𝗜𝗡𝗘 𝗚𝗘𝗡𝗔𝗥𝗘𝗧𝗗 𝗕𝗬 𝗟𝗨𝗖𝗜𝗙𝗘𝗥 𝗠𝗗*🚀\n✨ 𝗣𝗥𝗢𝗠𝗢𝗧: *${q}*`
    });

  } catch (error) {
    console.error("FluxAI Error:", error);
    reply(`An error occurred: ${error.response?.data?.message || error.message || "Unknown error"}`);
  }
});
