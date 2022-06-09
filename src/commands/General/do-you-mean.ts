import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '',
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/c23e83009dfd74c841c00.mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `𝐈𝐭'𝐬 𝐓𝐨𝐨 𝐐𝐮𝐢𝐭𝐞 𝐃𝐚𝐫𝐥𝐢𝐧𝐠 𝐃𝐢𝐝 𝐘𝐨𝐮 𝐌𝐞𝐚𝐧 ${this.client.config.prefix}𝐇𝐞𝐥𝐩? \n` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
