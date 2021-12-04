const axios = require('axios');
const { Client, Intents } = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
require('dotenv').config()

const usdApi = 'https://freecurrencyapi.net/api/v2/latest?apikey=59c27950-4ec8-11ec-bec3-0d99f558cdaa&base_currency=USD'
const eurApi = 'https://freecurrencyapi.net/api/v2/latest?apikey=59c27950-4ec8-11ec-bec3-0d99f558cdaa&base_currency=EUR'
const gbpApi = 'https://freecurrencyapi.net/api/v2/latest?apikey=59c27950-4ec8-11ec-bec3-0d99f558cdaa&base_currency=GBP'
const btcApi = 'https://freecurrencyapi.net/api/v2/latest?apikey=59c27950-4ec8-11ec-bec3-0d99f558cdaa&base_currency=BTC'
const ethApi = 'https://freecurrencyapi.net/api/v2/latest?apikey=59c27950-4ec8-11ec-bec3-0d99f558cdaa&base_currency=ETH'
const jpyApi = 'https://freecurrencyapi.net/api/v2/latest?apikey=59c27950-4ec8-11ec-bec3-0d99f558cdaa&base_currency=JPY'

client.on('ready',()=>{
    console.log("Logged")
})



client.on('message', msg => {
    if (msg.content.toLowerCase() === 'info') {
        msg.reply('Dolar,Euro,Sterlin,Yen,BTC,ETH, Parametrelerini kullanın')
    }
    else if ( msg.content.toLowerCase() === "ekonomi nasıl"){
        let ekonomiMessage = [
            "Eyi eyi eskiden biz Yağ tüp guyruğuna girerdik yeğenim sen bilmen o günleri",
            "Herkesin 5 evi 5 arabası var. Benim yok ama eyi eyi ekonomi",
            "Millet iş beğenmiyor yeğenim ekonomi çok iyi",
            "SEN FEDÖCÜMÜSÜN SEN FEDOCÜSÜNNN ",
            "VERGİNİ ÖDÜYOSUNN !!!",
            "TELEFUNUNU ÇIKART",
            "VATAN HAİNİ KÜRTAJ YAPİYE BURDA VALLA 155İ ARARIN",
            "HERŞEY ÇOK PAHALI AMA REİSİMİZ BAŞIMIZDAN EKSİK OLMASIN",
            "Dolar 15 lira 20 lira olucak diye topladılar dolar 12 liraya düştü şimdi kara kara düşünüyorlar."
        ]

        let messageService = ekonomiMessage[Math.floor(Math.random()*ekonomiMessage.length)] 

        msg.reply(messageService)
    }
    else if (msg.content.toLowerCase() === 'usd' || msg.content === 'dolar') {
        axios.get(usdApi).then(response => {
            var satis = response.data.data.TRY;
            msg.reply(`1 ${response.data.query.base_currency} = ` + satis.toFixed(2) + " TL " + " ŞAHLANIYORUZ OSMANLININ AYAK SESLERİ!")
        })
    }
    else if (msg.content.toLowerCase() === 'euro' ) {
        axios.get(eurApi).then(response => {
            var satis = response.data.data.TRY;
            msg.reply(`1 ${response.data.query.base_currency} = ` +satis.toFixed(2) + " TRY " + " Almanya bizi kıskanıyor.") 
        }) 
    }
    else if (msg.content.toLowerCase() === 'sterlin') {
        axios.get(gbpApi).then(response => {
            var satis = response.data.data.TRY;
            msg.reply(`1 ${response.data.query.base_currency} = ` +satis.toFixed(2) + " TRY " + "ezanlarımızı susturamayacaksınız.Milletimizi bölemeyeceksiniz.")
        })
    }
    else if (msg.content.toLowerCase() === 'yen') {
        axios.get(jpyApi).then(response => {
            var satis = response.data.data.TRY;
            msg.reply(`1 ${response.data.query.base_currency} = ` +satis.toFixed(2) + " TRY " + "ezanlarımızı susturamayacaksınız.Milletimizi bölemeyeceksiniz.")
        })
    }
    else if (msg.content.toLowerCase() === 'btc') {
        axios.get(btcApi).then(response => {
            var satis = response.data.data.TRY;
            msg.reply(`1 ${response.data.query.base_currency} = ` +satis.toFixed(2) + " TRY " + " BTC Balon kardeşim sakın ha gireyim deme")
        })
    }
    else if (msg.content.toLowerCase() === 'eth') {
        axios.get(ethApi).then(response => {
            var satis = response.data.data.TRY;
            msg.reply(`1 ${response.data.query.base_currency} = ` +satis.toFixed(2)+ " TRY " + " Mining bitiyor.Ekran kartları hep ellerinde patlıcak kardeşim")
        })
    }
    else if (msg.content.toLowerCase() == '!clear') {
        async function wipe() {
            var msg_size = 100;
            while (msg_size == 100) {
                await msg.channel.bulkDelete(100)
            .then(messages => msg_size = messages.size)
            .catch(console.error);
            } 
        }
        wipe()
    }
})



client.login(process.env.TOKEN)