const {MessageEmbed} = require('discord.js')
module.exports=async(oldMessage,newMessage)=>{
    let embed = new MessageEmbed()
    .setTitle(`${message.author.tag} | **Message Deleted** :pencil:`)
    .setDescription('**__Message Information__**')
    .setColor('GREEN')
    .addField('Before',oldMessage.content,true)
    .addField('After',newMessage.content,true)
    .setThumbnail(message.author.avatarURL({dynamic: true}))
    .setFooter(`${message.author.tag}'s ID: ${message.author.id}`)
    .setTimestamp();
    console.log('Message Edit log added')
    let channel = message.guild.channels.cache.find(ch=>ch.name==="doc-logs")
    if(!channel)return;
    channel.send(embed)
}