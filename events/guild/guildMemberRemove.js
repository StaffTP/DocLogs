const {MessageEmbed} = require('discord.js');
module.exports=async(message) => {
    let channel = message.guild.channels.cache.find(ch=>ch.name==="doc-logs")
    const logs = await member.guild.fetchAuditLogs({ limit: 1, type: 'MEMBER_KICK' });
    const log = logs.entries.first();
    if (Date.now() - log.createdTimestamp < 5000) {
       channel.send(`${member.user.tag} was kicked by ${log.executor.tag}.`);
      } else {
        channel.send(`${member.user.tag} left the guild.`);
      }
}