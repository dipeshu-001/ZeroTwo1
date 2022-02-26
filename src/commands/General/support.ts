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
      ` _*✨WELL, IF THAT WAS THE CASE THEN  ✨*_\n _*ZERO TWO SUPPORT GROUP*_:   https://chat.whatsapp.com/Fnk9vRRcSS8L22L8Bq1GyZ   🛡 NSFW 🛡 https://chat.whatsapp.com/KC43a4UytJZ00XE0WXVz7v `,

      MessageType.text
    );

    return void M.reply("Sent you a personal message regarding this.");
  };
}
