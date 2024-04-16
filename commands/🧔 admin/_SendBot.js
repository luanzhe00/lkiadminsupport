/*CMD
  command: /SendBot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🧔 admin
  answer: Kirimkan Gmail ‼️

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == 7009373177){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done Bot Sent To "+message)
}else{
Bot.sendMessage("You Are Not An Admin")
}
