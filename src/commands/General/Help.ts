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
            'https://telegra.ph/file/90c8d596818e948cc6a82.mp4','https://telegra.ph/file/ff95de880cf258150fe84.mp4','https://telegra.ph/file/3bb24cecc8094ff80e928.mp4','https://telegra.ph/file/c90a9df1b1e5e43ee340b.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `

❤️(> W <)❤️ Kon'nichiwa watashi wa *${M.sender.username}* I'm  ZeroTwodesu!

🎐 ɪꜰ ʏᴏᴜ ʜᴀᴠᴇ ᴀɴʏ ɪꜱꜱᴜᴇꜱ ᴡɪᴛʜ ᴛʜᴇ ʙᴏᴛ ᴏʀ ᴀɴʏ ᴇʀʀᴏʀ ᴛʜᴇɴ ᴄᴏɴᴛᴀᴄᴛ ʙᴏᴛ ᴏᴡɴᴇʀ. ᴛʏᴘᴇ " ${this.client.config.prefix}ᴏᴡɴᴇʀ " ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ!

 ᴘʀᴇꜰɪx: ${this.client.config.prefix}
 ᴅᴇᴠʟᴏᴘᴇʀ: Toshiro
 Owner: wa.me/+919609900020

〘 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 𝑳𝑰𝑺𝑻 〙

────────────────

🧧 ${this.client.config.prefix}h1 🧧
🧧 ${this.client.config.prefix}h2 🧧
🧧 ${this.client.config.prefix}h3 🧧
🧧 ${this.client.config.prefix}h4 🧧
🧧 ${this.client.config.prefix}h5 🧧
🧧 ${this.client.config.prefix}h6 🧧
🧧 ${this.client.config.prefix}h7 🧧
🧧 ${this.client.config.prefix}h8 🧧
🧧 ${this.client.config.prefix}h9 🧧

───────────────
🎐-𝐙 𝐞 𝐫 𝐨 𝐓 𝐰 𝐨-🎐
┌────────────┈❀
│   ゼロツー❤️
└────────────┈❀
🚀 *USER Exp*: *${(await this.client.getUser(user)).Xp || 0}*  ` }

        )
    }
}
