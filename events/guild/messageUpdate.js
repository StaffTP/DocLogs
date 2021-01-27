const {MessageEmbed} = require('discord.js')
module.exports=async(oldMessage,newMessage)=>{
    let embed = new MessageEmbed()
    .setTitle(`${newMessage.author.tag} | **Message Edited** :pencil:`)
    .setDescription('**__Message Information__**')
    .setColor('GREEN')
    .addField('Before',oldMessage.content,true)
    .addField('After',newMessage.content,true)
    .setThumbnail(newMessage.author.avatarURL({dynamic: true}))
    .setFooter(`${newMessage.author.tag}'s ID: ${newMessage.author.id}`)
    .setTimestamp();
    console.log('Message Edit log added')
    let channel = oldMessage.guild.channels.cache.find(ch=>ch.name==="doc-logs")
    if(!channel)return;
    channel.send(embed)
}