import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['h']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/90c8d596818e948cc6a82.mp4','https://telegra.ph/file/ff95de880cf258150fe84.mp4','https://telegra.ph/file/3bb24cecc8094ff80e928.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `

(❤️ω❤️) Kon'nichiwa watashi wa *${M.sender.username}* I'm ZeroTwo 🍭 desu!

🏮 ɪꜰ ʏᴏᴜ ʜᴀᴠᴇ ᴀɴʏ ɪꜱꜱᴜᴇꜱ ᴡɪᴛʜ ᴛʜᴇ ʙᴏᴛ ᴏʀ ᴀɴʏ ᴇʀʀᴏʀ ᴛʜᴇɴ ᴄᴏɴᴛᴀᴄᴛ ʙᴏᴛ ᴏᴡɴᴇʀ. ᴛʏᴘᴇ " ${this.client.config.prefix}ᴏᴡɴᴇʀ " ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ!

🌟 ᴘʀᴇꜰɪx: ${this.client.config.prefix}
────────────────
━━━━❰🧣𝐂𝐡𝐚𝐫𝐚𝐜𝐭𝐞𝐫𝐬🧣❱━━━━
🍁 aliases: h1
⛩️ Description: This Command will Redirect To Character Menu!
🎐 Usage: ${this.client.config.prefix}h1

━━━━❰🧣𝐂𝐨𝐝𝐢𝐧𝐠🧣❱━━━━
🍁 aliases: h2
⛩️ Description: This Command will Redirect To Coding Menu!
🎐 Usage: ${this.client.config.prefix}h2

━━━━❰🧣𝐃𝐞𝐯🧣❱━━━━
🍁 aliases: h3
⛩️ Description: This Command will Redirect To Dev Menu!
🎐 Usage: ${this.client.config.prefix}h3

━━━━❰🧣𝐄𝐜𝐨𝐧𝐨𝐦𝐲🧣❱━━━━
🍁 aliases: h4
⛩️ Description: This Command will Redirect To Economy Menu!
🎐 Usage: ${this.client.config.prefix}h4

━━━━❰🧣𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐯𝐞🧣❱━━━━
🍁 aliases: h5
⛩️ Description: Thia Command will Redirect To Educative Menu!
🎐 Usage: ${this.client.config.prefix}h5

━━━━❰🧣𝐅𝐮𝐧🧣❱━━━━
🍁 aliases: h6
⛩️ Description: This Command will Redirect To Fun Menu!
🎐 Usage: ${this.client.config.prefix}h6

━━━━❰🧣𝐆𝐚𝐦𝐞𝐬🧣❱━━━━
🍁 aliases: h7
⛩️ Description: This Command will Redirect To Games Menu!
🎐 Usage:  ${this.client.config.prefix}h7

━━━━❰🧣𝐌𝐨𝐝𝐫𝐚𝐭𝐢𝐨𝐧🧣❱━━━━
🍁 aliases: h8
⛩️ Description: This Command Will Redirect To Moderation Menu! 
🎐 Usage: ${this.client.config.prefix}h8

━━━━❰🧣𝐍𝐬𝐟𝐰🧣❱━━━━
🍁 aliases: h9
⛩️ Description: This Command will Redirect To Nsfw Menu!
🎐 Usage: ${this.client.config.prefix}h9

━━━━❰🧣𝐏𝐨𝐤𝐞𝐦𝐨𝐧🧣❱━━━━
🍁 aliases: h10
⛩️ Description: This Command will Redirect To Pokemon Menu!
🎐 Usage: ${this.client.config.prefix}h10

━━━━❰🧣𝐔𝐭𝐢𝐥𝐬🧣❱━━━━
🍁 aliases: h11
⛩️ Description: This Command Will Redirect To Utils Menu!
🎐 Usage: ${this.client.config.prefix}h11

━━━━❰🧣𝐖𝐞𝐞𝐛🧣❱━━━━
🍁 aliases: h12
⛩️ Description: This Command Will Redirect To Weeb Menu!
🎐 Usage: ${this.client.config.prefix}h12

━━━━❰🧣𝐌𝐮𝐬𝐢𝐜🧣❱━━━━
🍁 aliases: h13
⛩️ Description: This Command will Redirect To Music Menu!
🎐 Usage: ${this.client.config.prefix}h13

━━━━❰🧣𝐌𝐞𝐝𝐢𝐚🧣❱━━━━
🍁 aliases: h14
⛩️ Description: This Command will Redirect To Media Menu! 
🎐 Usage: ${this.client.config.prefix}h14

━━━━❰🧣𝐘𝐨𝐮𝐓𝐮𝐛𝐞🧣❱━━━━
🍁 aliases: h15
⛩️ Description: This Command Will Redirect To YouTube Menu! 
🎐 Usage: ${this.client.config.prefix}h15

───────────────
┌────────────┈❀
│   ゼロツー❤️
└────────────┈❀
📒 *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }
        )
    }
}
