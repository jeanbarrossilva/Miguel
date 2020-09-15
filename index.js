const discord = require('discord.js')
const key = require('./key')
const commands = require('./commands')

const bot = new discord.Client()

bot.on('ready', () => {
    console.log('Online!')
})

bot.login(key.token)
commands.initFor(bot, "-")