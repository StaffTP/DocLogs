const {MessageEmbed, Message} = require('discord.js');
module.exports=async(message, member) => {
  const fetchedlogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "MEMBER_KICK",
  });
    const channel = message.guild.channels.cache.find(ch=>ch.name==="doc-logs")
    const kickLog = fetchedlogs.entries.first();
    if(!channel) return;

    if(!kickLog) {
      const embed = new MessageEmbed()
      .setTitle(`${member.user.tag} | Member Left :rocket:`)
      .setDescription('**__Information__**')
      .addField(`${member.user.tag} has left **Doc Designs**`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true}))
      .setTimestamp()
      .setFooter(`${member.user.tag}'s ID: ${member.user.id}`);
      channel.send(embed)
      
    }
    const { executor, target } = kickLog;

    if(target.id === member.id){
      const kickedembed = new MessageEmbed()
      .setTitle(`${member.user.tag} | Member Kicked :pushpin: `)
      .setDescription('**__Punishment Information__**')
      .addField('**User**', `${member.user.tag} was kicked!`, true)
      .addField('**Staff Member**', `${executor.tag}`, true)
      .setTimestamp()
      .setFooter(`${member.user.tag}'s ID: ${member.user.id}`);
      channel.send(kickedembed)
    } else {
      const unknownleft = new MessageEmbed()
      .setTitle(`${member.user.tag} | Member Left :rocket:`)
      .setDescription('**__Information__**')
      .addField('ERROR:', `Unable to grab leave reason for ${member.user.tag}!`)
      .setTimestamp()
      .setFooter(`${member.user.tag}'s ID: ${member.user.id}`);
      channel.send(unknownleft);
    }


}