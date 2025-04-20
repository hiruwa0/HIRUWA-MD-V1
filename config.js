const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "MALVIN-XD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05HSkF0akcyemhpSWhnUWJBL2grQURXbDZWMUVORFlmbTZjcE9ha3UyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEE4UHZtVTdXVUo0aFduczg3eUZtQU96VjA5NGUxdjZNR0hUaEJNb2JRVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQWNtakV2RkFTTDUwenJzdU9Xdi9DL2lOQktMazFaL0ptSnRJamtYRzF3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOTUUxVU1hODJqMVl4MkVTNTdMTVR1Uzg1N2xEbFpiRjB2K2xONjNxN1hRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNBYXlUNnZrUFA5SlJZR3I5V2ZzbDg4TUVqaEpzbjZvNEJjaE56YWxGa3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZteFdVaHo0Q3psSFN0RThGOGlqUWtQbVRKOTJJb3ZVOWZoVmt6ZXdNd3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU9ybW84azRIV01BcThrQVdDMkk5bm1pbU5nUjg1cXdxOW5DNjR3NWJXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVlFTkduZmx4aUw3di9lSkxlNHpaVWlTQTZ1SVdHOHBwdFgzNHg0QU1VND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InUwUG5KUDZjdXdyeVZSWFBhUG1uSDFXNE14THRkTjZPNmFvc1VUd2RSMGtHMnI1Rm4vekREVkh4RkJML1d3SUZkazYxcHpmTGl2VlBvMDM0SnNVVmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc1LCJhZHZTZWNyZXRLZXkiOiJ3L2Y0czg0L3o1VGp4TE5xeXNmRGZHaUlmcXRvUnJ3aEVLcjZaeDR1UDhNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzA0MzQ5ODAxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBMkE5REFFNDNBMjQ3QUU3NzFEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDUxMzUzMjN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlhEc3VmalVpVGh1V3pzWlAzX25YYnciLCJwaG9uZUlkIjoiMWQyMTdjNjUtMTkwNi00OThiLTg0NmItMjNlOWE0M2I5ZWVlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk3ZmF0MXZlcENVazROeUs3MnI3Nms0Y1pEbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0VU5BcHNESngwNDB1WGFZZlBia09PczJrL0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWTVMTjg5UkYiLCJtZSI6eyJpZCI6Ijk0NzA0MzQ5ODAxOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU0hPUCBCWSBIaVJVV0Eg76O/In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJZlc0cHdHRU12TmtzQUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2U2FhaldYMmZ2dEExcGxIOW5mSklVbVhLRTVaMnI1ZG1rSTJtWmhWbkRRPSIsImFjY291bnRTaWduYXR1cmUiOiJ4TlZoaktvelBPRmdiaFhlY0VSRWxkUEhxZ0EvQVlSbUVuTWo1NUkvdG9nakVpVVM2UmVuUGNrcElIenRQOFFQTjdWTXJPcFlhZitKK2RaenArbG5qZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTFRLZ0JrR254Zi9NNzFOSnZubW9LaDc3ZDVxdzJuZUF4WTJJNFJYRUgrNjNlRk5RWVVvTUdVdVNXcnViNXhjZ2tIMDB1U05CTVFDVEFpUkJoWlRSamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwNDM0OTgwMToxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVrbW1vMWw5bjc3UU5hWlIvWjN5U0ZKbHloT1dkcStYWnBDTnBtWVZadzAifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDUxMzUzMTgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUDVCIn0=",
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",
    CAPTION: process.env.CAPTION || "*🧑‍💻⃝𝙃𝙞𝙍𝙐𝙒𝘼 𝙈𝘿 𝙏𝙀𝘾𝙃➝💥*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "private",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTHOR: (process.env.PACK_INFO?.split(';') || [])[0] || '🧑‍💻⃝𝙃𝙞𝙍𝙐𝙒𝘼 𝙈𝘿 𝙏𝙀𝘾𝙃➝💥',
    PACKNAME: (process.env.PACK_INFO?.split(';') || [])[1] || '94704349801',
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/x04f5n.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M AWAIS-MD WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "false",
    ANTI_BAD: process.env.ANTI_BAD || "false",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "🧑‍💻⃝𝙃𝙞𝙍𝙐𝙒𝘼 𝙈𝘿➝💥",
    ANTI_VV: process.env.ANTI_VV || "true",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // change it to 'same' if you want to resend deleted message in same chat
    DEV: process.env.DEV || "94704349801", //replace with your whatsapp number
    AUTOLIKESTATUS: process.env.AUTOLIKESTATUS || "true",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`*𝗔𝗨𝗧𝗢 𝗦𝗧𝗔𝗧𝗨𝗦 𝗦𝗘𝗘𝗡 𝗕𝗬 𝗕𝗢𝗧 𝗛𝗶𝗥𝗨𝗪𝗔-𝗠𝗗🪄`*`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
    };
    
