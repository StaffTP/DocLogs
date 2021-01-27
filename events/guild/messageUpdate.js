const {MessageEmbed} = require('discord.js')
module.exports=async(oldMessage,newMessage)=>{
    let embed = new MessageEmbed()
    .setTitle(`${oldMessage.author.tag} | **Message Edited** :pencil:`)
    .setDescription('**__Message Information__**')
    .setColor('GREEN')
    .addField(`Channel ID:`,`<#${oldMessage.channel.id}>`, false)
    .addField('Before',oldMessage.content,true)
    .addField('After',newMessage.content,true)
    .setThumbnail(oldMessage.author.avatarURL({dynamic: true}))
    .setFooter(`${oldMessage.author.tag}'s ID: ${newMessage.author.id}`)
    .setTimestamp();
    console.log('Message Edit log added')
    let channel = oldMessage.guild.channels.cache.find(ch=>ch.name==="doc-logs")
    if(!channel)return;
    channel.send(embed)
}