import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help3',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help3 (command_name)`,
            dm: true,
            aliases: ['h3']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/8781204ed2c380055fd95.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `━━━━❰ 𝐃𝐞𝐯 𝐋𝐢𝐬𝐭 ❱━━━━
──────────────
⛩️ ${this.client.config.prefix}addgold
⛩️ ${this.client.config.prefix}addmod
⛩️ ${this.client.config.prefix}ban
⛩️ ${this.client.config.prefix}broadcast
⛩️ ${this.client.config.prefix}disable
⛩️ ${this.client.config.prefix}enable
⛩️ ${this.client.config.prefix}eval
⛩️ ${this.client.config.prefix}join
⛩️ ${this.client.config.prefix}leave
⛩️ ${this.client.config.prefix}removemod
⛩️ ${this.client.config.prefix}setprefix
⛩️ ${this.client.config.prefix}status
⛩️ ${this.client.config.prefix}switch
⛩️ ${this.client.config.prefix}unban
──────────────` }
        )
    }
}
