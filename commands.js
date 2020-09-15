exports.initFor = (bot, prefix) => {
    bot.on('message', message => {
        if (message.content.startsWith(prefix)) {
            let args = message.content.substring(prefix.length).split(' ')
            
            switch (args[0]) {
                case 'meajuda':
                    message.reply('so digita \"-pergunta\" e faz uma pergunta mano')
                    break
                case 'pergunta':
                    args.shift()

                    let question = args.join(' ')
                    let answer = answerFor(question)

                    if (question !== '') {
                        message.reply(answer)
                        console.log(`Answered \"${answer}\" to @${message.author.username}'s question \"${question}\".`)
                    }
            }
        }
    })
}

function answerFor(question) {
    let responses = ['sim', 'nao']
    let answer = (isRelatedToMiguel(question) ? responses[0] : responses[Math.floor(Math.random() * responses.length)])
    
    return answer
}

function isRelatedToMiguel(question) {
    let keywords = ['bonito', 'burro', 'gay', 'lindo', 'viado']
    return keywords.some(keyword => question.includes(keyword))
}