import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help5',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help5 (command_name)`,
            dm: true,
            aliases: ['h5']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/290c974459471b6256810.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `━━━━❰ 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐯𝐞 𝐋𝐢𝐬𝐭 ❱━━━━
──────────────
⛩️ ${this.client.config.prefix}calculator
⛩️ ${this.client.config.prefix}crypto
⛩️ ${this.client.config.prefix}element
⛩️ ${this.client.config.prefix}trivia
⛩️ ${this.client.config.prefix}urbandictionary
⛩️ ${this.client.config.prefix}weather

 🎐 Grate Hours Ahead 🎐
──────────────` }
        )
    }
}
