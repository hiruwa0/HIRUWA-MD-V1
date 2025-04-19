const { cmd, commands } = require('../command');

cmd({
    pattern: "hack",
    desc: "Simulates a dangerous and realistic hacking operation.",
    category: "fun",
    react: "💀",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const steps = [
            '🕶️ *Initializing Lucifer Exploit Framework...*',
            '💀 *Bypassing firewalls...*',
            '🌐 *Establishing SSH tunnel to target...*',
            '🔍 *Searching for vulnerabilities...*',
            '💾 *Injecting payload into system memory...*',
            '📡 *Accessing internal networks...*',
            '',
            '```> sudo breach -u root -p ********```',
            '`[ACCESS GRANTED]` ✅',
            '',
            '📁 *Extracting sensitive files...*',
            '   - passwords.txt',
            '   - camera_logs.zip',
            '   - bank_details.csv',
            '',
            '⚠️ *Deploying zero-day exploit...*',
            '💣 *Remote system compromised.*',
            '',
            '```[██████              ] 30%``` ⏳',
            '```[██████████          ] 50%``` ⏳',
            '```[████████████████    ] 75%``` ⏳',
            '```[████████████████████] 100%``` ✅',
            '',
            '🔓 *System Root Access Achieved.*',
            '🧠 *Cloning database...*',
            '🔄 *Uploading data to secure darknet node...*',
            '',
            '*👁️ Target: USERS*',
            '*📍 Location: SRI LANKA*',
            '*💬 WhatsApp Chat Logs Extracted...*',
            '*📷 Private Media Recovered...*',
            '*💳 Bank PIN: 4321 (decrypted)*',
            '',
            '☠️ *Operation: BLACKFANG Complete.*',
            '🧬 *System will self-destruct in 5 seconds...*',
            '',
            '⚠️ *WARNING:* This simulation is for entertainment purposes only.',
            '🔐 *Be ethical. Stay safe.*'
        ];

        for (const line of steps) {
            await conn.sendMessage(from, { text: line }, { quoted: mek });
            await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 700));
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});
