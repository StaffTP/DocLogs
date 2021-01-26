const {MessageEmbed} = require('discord.js')
module.exports=async(message)=>{
    let embed = new MessageEmbed()
    .setTitle(`${message.author.tag} | **Message Deleted** :no_entry:`)
    .setDescription('**__Message Information__**')
    .addField(`Channel ID:`,`<#${message.channel.id}>`, true)
    .addField(`Deleted Content:`,message.content)
    .setColor('#F20606')
    .setThumbnail(message.author.avatarURL({dynamic: true}))
    .setFooter(`${message.author.tag}'s ID: ${message.author.id}`)
    .setTimestamp();
    console.log('Message Delete log added')
    let channel = message.guild.channels.cache.find(ch=>ch.name==="doc-logs")
    if(!channel)return;
    channel.send(embed)
}