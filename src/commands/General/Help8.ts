import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help8',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help8 (command_name)`,
            dm: true,
            aliases: ['h8']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/de198efe3213f900f9721.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `━━━━❰ 𝐆𝐚𝐦𝐞𝐬 𝐋𝐢𝐬𝐭 ❱━━━━
──────────────
⛩️ ${this.client.config.prefix}activate
⛩️ ${this.client.config.prefix}close
⛩️ ${this.client.config.prefix}deactivate
⛩️ ${this.client.config.prefix}delete
⛩️ ${this.client.config.prefix}demote
⛩️ ${this.client.config.prefix}everyone
⛩️ ${this.client.config.prefix}groupchange
⛩️ ${this.client.config.prefix}open
⛩️ ${this.client.config.prefix}promote
⛩️ ${this.client.config.prefix}purge
⛩️ ${this.client.config.prefix}remove
⛩️ ${this.client.config.prefix}revoke

 🎐 Grate Hours Ahead 🎐
──────────────` }
        )
    }
}
