import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import request from "../../lib/request";

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
            'https://telegra.ph/file/90c8d596818e948cc6a82.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,contextInfo:{externalAdReply:{
title: "ZeroTwo🍭 Bot" , 
body: "𝐙𝐞𝐫𝐨𝐓𝐰𝐨 𝐁𝐨𝐭𝐭𝐨 𝐛𝐲 𝕋𝕠𝕤𝕙𝕚𝕣𝕠", 
thumbnail: await request.buffer("https://dk2dv4ezy246u.cloudfront.net/widgets/sLUVOcJh5uA_large.jpg") 
}
}
            mimetype: Mimetype.gif,
            caption: `

(❤️ω❤️) Konnichiwa👋🏻 *${M.sender.username}* I Am ZeroTwo 🍭

🚀 ɪꜰ ʏᴏᴜ ʜᴀᴠᴇ ᴀɴʏ ɪꜱꜱᴜᴇꜱ ᴡɪᴛʜ ᴛʜᴇ ʙᴏᴛ ᴏʀ ᴀɴʏ ᴇʀʀᴏʀ ᴛʜᴇɴ ᴄᴏɴᴛᴀᴄᴛ ʙᴏᴛ ᴏᴡɴᴇʀ. ᴛʏᴘᴇ " ${this.client.config.prefix}ᴏᴡɴᴇʀ " ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ!

🌟 ᴘʀᴇꜰɪx - ${this.client.config.prefix}
────────────────
━━━━❰ 𝐂𝐡𝐚𝐫𝐚𝐜𝐭𝐞𝐫𝐬 ❱━━━━

🎉 Description: This Command will Redirect To Character Menu!
🏮 Usage: ${this.client.config.prefix}h1

━━━━❰ 𝐂𝐨𝐝𝐢𝐧𝐠 ❱━━━━

🎉 Description: This Command will Redirect To Coding Menu!
🏮 Usage: ${this.client.config.prefix}h2

━━━━❰ 𝐃𝐞𝐯 ❱━━━━

🎉 Description: This Command will Redirect To Dev Menu!
🏮 Usage: ${this.client.config.prefix}h3

━━━━❰ 𝐄𝐜𝐨𝐧𝐨𝐦𝐲 ❱━━━━

🎉 Description: This Command will Redirect To Economy Menu!
🏮 Usage: ${this.client.config.prefix}h4

━━━━❰ 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐯𝐞 ❱━━━━

🎉 Description: Thia Command will Redirect To Educative Menu!
🏮 Usage: ${this.client.config.prefix}h5

━━━━❰ 𝐅𝐮𝐧 ❱━━━━

🎉 Description: This Command will Redirect To Fun Menu!
🏮 Usage: ${this.client.config.prefix}h6

━━━━❰ 𝐆𝐚𝐦𝐞𝐬 ❱━━━━

🎉 Description: This Command will Redirect To Games Menu!
🏮 Usage:  ${this.client.config.prefix}h7

━━━━❰ 𝐌𝐨𝐝𝐫𝐚𝐭𝐢𝐨𝐧 ❱━━━━

🎉 Description: This Command Will Redirect To Moderation Menu! 
🏮 Usage: ${this.client.config.prefix}h8

━━━━❰ 𝐍𝐬𝐟𝐰 ❱━━━━

🎉 Description: This Command will Redirect To Nsfw Menu!
🏮 Usage: ${this.client.config.prefix}h9

━━━━❰ 𝐏𝐨𝐤𝐞𝐦𝐨𝐧 ❱━━━━

🎉 Description: This Command will Redirect To Pokemon Menu!
🏮 Usage: ${this.client.config.prefix}h10

━━━━❰ 𝐔𝐭𝐢𝐥𝐬 ❱━━━━

🎉 Description: This Command Will Redirect To Utils Menu!
🏮 Usage: ${this.client.config.prefix}h11

━━━━❰ 𝐖𝐞𝐞𝐛 ❱━━━━

🎉 Description: This Command Will Redirect To Weeb Menu!
🏮 Usage: ${this.client.config.prefix}h12

━━━━❰ 𝐌𝐮𝐬𝐢𝐜 ❱━━━━

🎉 Description: This Command will Redirect To Music Menu!
🏮 Usage: ${this.client.config.prefix}h13

━━━━❰ 𝐌𝐞𝐝𝐢𝐚 ❱━━━━

🎉 Description: This Command will Redirect To Media Menu! 
🏮 Usage: ${this.client.config.prefix}h14

━━━━❰ 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 ❱━━━━

🎉 Description: This Command Will Redirect To YouTube Menu! 
🏮 Usage: ${this.client.config.prefix}h15

───────────────
┌────────────┈❀
│   ゼロツー❤️
└────────────┈❀
📒 *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }
        )
    }
}
