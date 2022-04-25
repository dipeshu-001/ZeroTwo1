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
      ` _*_\n _*🍁𝐐𝐮𝐚𝐧𝐭𝐮𝐦 ℝ𝕖𝕒𝕝𝕞 𝚂𝚞𝚙𝚙𝚘𝚛𝚝🍁*_:  https://chat.whatsapp.com/EHnFXOU8jfYJcnS3JXcKgz`,

      MessageType.text
    );

    return void M.reply("Sent you a personal message regarding this.");
  };
}
