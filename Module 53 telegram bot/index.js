const TelegramBot  = require ("node-telegram-bot-api");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config(); 

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN,{polling:true});

// bot.on("message",(option)=>{
//     console.log("Message received on the bot", option)

//     bot.sendMessage(option.chat.id,"hello,i am a bot. i am here , how can i help you....");
// });

bot.onText(/\/joke/,async(option)=>{
    const response=await axios.get("https://official-joke-api.appspot.com/random_joke");

    console.log(response.data)
    const setup = response.data.setup;
    const punchline = response.data.punchline;
    bot.sendMessage(option.chat.id, setup +" , " + punchline);
});