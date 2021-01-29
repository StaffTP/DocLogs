const {MessageEmbed} = require('discord.js');
module.exports=async(guild, message, user) => {
    const fetchedLogs = await guild.fetchAuditLogs({
        limit: 1,
        type: 'MEMBER_BAN_ADD',
    });
    const channel = guild.channel.cache.find(ch=>ch.name==="doc-logs")
    const banLog = fetchedLogs.entries.first();
    if (!banLog) return console.log(`${user.tag} was banned but an error occured.`)


    const { executor, target } = banLog;

    if(target.id === user.id) {
        channel.send(`${target.tag} was banned by ${executor.tag}`)
        

    }
}