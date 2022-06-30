require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');

const bot = new Telegraf(process.env.BOT_TOKEN || 8080)
bot.start((ctx) => {
   ctx.reply(`Привет ${ctx.message.from.first_name}`)
   console.log(ctx.message)
})
bot.help((ctx) => ctx.reply('Напиши /bot '))
bot.hears('/bot', async (ctx) => {

async function request() {
    try {
        const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/1/")
        const data = await response.json()   
             ctx.reply('response.status')
        for (let i = 1; i <= 1; i++) {
            score_dealer = data.items.results[i].results.score_dealer
            score_player = data.items.results[i].results.score_player
            // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
            ctx.reply("игрок " + score_player + " "+ score_dealer +" дилер");
        }

    } catch (err) {
         ctx.reply(err);
            ctx.reply('fait');
    }
}
function good() {
    ctx.reply( "Вы запустили Бота на стратегию «Мегабот» ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
     ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin"); 
    ctx.reply('Бот отслежки запущен!')
    global.time = setInterval(request, 4000)
  
 }
 good()
}
)
bot.hears('/end', async (ctx) => {

    try {
       clearInterval(time);
       ctx.reply("Пока");
    } catch (err) {
       ctx.reply("Пока");
    }
 })
 
 bot.launch()
