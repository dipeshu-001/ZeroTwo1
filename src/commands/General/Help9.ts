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
🍒 ${this.client.config.prefix}anal
🍒 ${this.client.config.prefix}animepaper
🍒 ${this.client.config.prefix}blowjob
🍒 ${this.client.config.prefix}maid
🍒 ${this.client.config.prefix}masturbation
🍒 ${this.client.config.prefix}nsfwdoujin
🍒 ${this.client.config.prefix}nhentai
🍒 ${this.client.config.prefix}nsfwkitsune
🍒 ${this.client.config.prefix}nsfwpaper
🍒 ${this.client.config.prefix}nsfwneko
🍒 ${this.client.config.prefix}nsfwwaifu
🍒 ${this.client.config.prefix}pussy
🍒 ${this.client.config.prefix}thighs
🍒 ${this.client.config.prefix}seggs

 🎐 Grate Hours Ahead 🎐
──────────────` }
        )
    }
}
