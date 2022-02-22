import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "support",
      aliases: ["support"],
      description: "Gets the support group links",
      category: "general",
      usage: `${client.config.prefix}Support`,
      baseXp: 10,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    await this.client.sendMessage(
      M.sender.jid,
      ` _*I'M FROM 𝕋ℍ𝔼 𝔻𝔸ℝ𝕂 🚀*\n\n
        _*CR-BOT NEWS*_:https://chat.whatsapp.com/\n\n 
        _*WELCOME TO THE DARK*_:https://chat.whatsapp.com/\n\n
        _*CR-BOT CASINO*_:https://chat.whatsapp.com/\n\n 
        _*CR-BOT NSFW*_:https://chat.whatsapp.com/
        _*CR-BOT QUIZ*_:https://chat.whatsapp.com/`,

      MessageType.text
    );

    return void M.reply("Sent you the Group Link in personal message");
  };
}
