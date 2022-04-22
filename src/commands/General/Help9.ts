import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help9',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help9 (command_name)`,
            dm: true,
            aliases: ['h9']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/57a5a9615d1982a4f9bb1.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `━━━━❰ 𝐍𝐬𝐟𝐰 𝐋𝐢𝐬𝐭 ❱━━━━
──────────────
🍒 ${this.client.config.prefix}ᴀɴᴀʟ
🍒 ${this.client.config.prefix}ʙʟᴏᴡᴊᴏʙ
🍒 ${this.client.config.prefix}ɴꜱꜰᴡᴅᴏᴜᴊɪɴ
🍒 ${this.client.config.prefix}ɴꜱꜰᴡʟᴏʟɪ
🍒 ${this.client.config.prefix}ɴꜱꜰᴡᴘᴀᴘᴇʀ
🍒 ${this.client.config.prefix}ᴛʜɪɢʜꜱ
🍒 ${this.client.config.prefix}ʜᴇɴᴛᴀɪ
🍒 ${this.client.config.prefix}ᴍᴀɪᴅ
🍒 ${this.client.config.prefix}ᴍᴀꜱᴛᴜʀʙᴀᴛɪᴏɴ
🍒 ${this.client.config.prefix}ɴᴄᴏᴅᴇ
🍒 ${this.client.config.prefix}ɴꜱꜰᴡ-ᴡᴀɪꜰᴜ
🍒 ${this.client.config.prefix}ɴꜱꜰᴡᴊᴏᴋᴇ
🍒 ${this.client.config.prefix}ɴꜱꜰᴡ-ɴᴇᴋᴏ
🍒 ${this.client.config.prefix}ᴘᴜꜱꜱʏ
🍒 ${this.client.config.prefix}ᴛʀᴀᴘ
──────────────` }
        )
    }
}
