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
      ` _*WELL, THAT BEING THE CASE THEN, 🚀*\n\n
        _*DREADED-BOT NEWS*_:https://Pending/\n\n 
        _*WELCOME TO THE DARK*_:Pending/\n\n
        _*DREADED-BOT CASINO AND QUIZ*_:Pending/\n\n 
        _*DREADED-BOT NSFW*_:Pending.../
        _*WELCOME AND FOLLOW RULES*_/`,

      MessageType.text
    );

    return void M.reply("Sent you the Group Links in personal message");
  };
}
