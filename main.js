const Discord = require('discord.js');

const client = new Discord.Client()

const fs = require('fs');

const prefix = '-';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const activities_list = [
    "Your logs!", 
    "Doc Designs",
    "Tristan's Repository", 
    "Discord.js Library!",
    "Your Messages!"
    ]; // array

client.on('ready', () => {
    console.log('logged in')
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]), { type: 'WATCHING' }; // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});

client.on('message', message => {
    if(message.member != null && message.member.hasPermission('KICK_MEMBERS'));
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'backendping'){
        client.commands.get('backendping').execute(message, args, Discord)
    }
});

client.on('messageUpdate',async(oldMessage,newMessage)=>{
    require('./events/guild/messageUpdate.js')(oldMessage,newMessage)
})

client.on('messageDelete',async(message)=>{
    require('./events/guild/messageDelete.js')(message)
})


client.login('ODAzNjQyNDI0MzMzMzAzODQ4.YBAwVA.G_k3-I_KgKOGfnccCcKesm0Nc70');