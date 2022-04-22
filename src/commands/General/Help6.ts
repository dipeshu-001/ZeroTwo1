import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help6',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help6 (command_name)`,
            dm: true,
            aliases: ['h6']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/af10b5cf6e2a7145ef86e.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `━━━━❰ 𝐅𝐮𝐧 𝐋𝐢𝐬𝐭 ❱━━━━
──────────────
⛩️️ ${this.client.config.prefix}fact
⛩️ ${this.client.config.prefix}jail
⛩️ ${this.client.config.prefix}joke
⛩️ ${this.client.config.prefix}quote
⛩️ ${this.client.config.prefix}rip
⛩️ ${this.client.config.prefix}react
⛩️ ${this.client.config.prefix}ship
⛩️ ${this.client.config.prefix}trash
⛩️ ${this.client.config.prefix}trigger
⛩️ ${this.client.config.prefix}wanted
⛩️ ${this.client.config.prefix}why
⛩️ ${this.client.config.prefix}gleaderboard
⛩️ ${this.client.config.prefix}chat

 🎐 Grate Hours Ahead 🎐
──────────────` }
        )
    }
}
