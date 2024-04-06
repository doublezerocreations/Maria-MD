const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['94765714446']
global.ownername = "💙𓆩‎✘𝕯𝖆𝖘𝖚𝖓 𝕯𝖚𝖑𝖆𝖗𝖆𝖐𝖆✘𓆪_✰"//owner name
global.ytname = "YT: Double Zero Creations"
global.socialm = "Facebook: Dasun Dularaka"
global.location = "Sri Lankan"

global.botname = 'ᴅᴏᴜʙʟᴇ-ᴢᴇʀᴏᴹᴰ' //name of the bot

//sticker details
global.stickername = '💙𓆩‎✘𝕯𝖆𝖘𝖚𝖓 𝕯𝖚𝖑𝖆𝖗𝖆𝖐𝖆✘𓆪_✰'
global.packname = 'Sticker By'
global.author = 'Double Zero Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Double Zero Creations"

//theme link
global.link = 'https://whatsapp.com/channel/0029VaImo5ZG3R3qjKOdyr1I'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🎀 Double Zero Bot 🎀*\n\n*🧩 Facebook:* \nhttps://facebook.com/double.zero.creations/\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by my owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-6/423714807_721700460102970_5690121493739821910_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFmR9GM29XEmsNSUgLsFoUQGO-tVC54haIY761ULniFotPa22__4xrOVxqUKbThUJgdp6TI9pIEul14d710QMjx&_nc_ohc=jw4uC9ErVyIAX9tKX7V&_nc_zt=23&_nc_ht=scontent.fcmb4-2.fna&oh=00_AfAi7FmhP8jMPFdqQd_yI16KGp5QOEyZcTVq-7hUUJV31g&oe=65FFBEE5')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
