import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help4',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help4 (command_name)`,
            dm: true,
            aliases: ['h4']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/22c7411a4d63f78735408.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `━━━━❰ 𝐄𝐜𝐨𝐧𝐨𝐦𝐲 𝐋𝐢𝐬𝐭 ❱━━━━
──────────────
⛩️ ${this.client.config.prefix}bank
⛩️ ${this.client.config.prefix}daily
⛩️ ${this.client.config.prefix}deposit
⛩️ ${this.client.config.prefix}gamble
⛩️ ${this.client.config.prefix}give
⛩️ ${this.client.config.prefix}rob
⛩️ ${this.client.config.prefix}slot
⛩️ ${this.client.config.prefix}wallet
⛩️ ${this.client.config.prefix}withdraw
   
 🎐 Grate Hours Ahead 🎐
──────────────` }
        )
    }
}
