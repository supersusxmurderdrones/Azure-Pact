import { logger } from '../utils/logger.js';


export const botConfig = {
  // =========================
  // BOT PRESENCE (what users see under the bot name)
  // =========================
  // `status` options:
  // - "online"    = green dot
  // - "idle"      = yellow moon
  // - "dnd"       = red do-not-disturb
  // - "invisible" = appears offline
  presence: {
    // Current online state shown on Discord.
    status: "online",

    // Activity lines shown under the bot name.
    // `type` number mapping from Discord:
    // 0 = Playing
    // 1 = Streaming
    // 2 = Listening
    // 3 = Watching
    // 4 = Custom
    // 5 = Competing
    activities: [
      {
        // Text users will see (example: "Playing /help | Titan Bot").
        name: "Super Sus 1.76.24.031",
        // Activity type number (0 = Playing).
        type: 0, 
      },
    ],
  },

  // =========================
  // COMMAND BEHAVIOR
  // =========================
const { EmbedBuilder } = require('discord.js');

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.get('<#1494602033095770214>');

    const embed = new EmbedBuilder()
        .setColor('#00c8ff')
        .setTitle('**Welcome**')
         .setDescription(`Welcome to Supersus_X_Murderdrones Community! Ready to roll ${member}?`)
        .setThumbnail(member.user.displayAvatarURL());

    channel.send({ embeds: [embed] });
});
