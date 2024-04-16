/*CMD
  command: /AddAdmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🧔 admin
  answer: Kirimkan ID Telegramnya. ✍️

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
if (user.telegramid == admin){
Bot.sendMessageToChatWithId(""+message+"", "*Anda sudah menjadi Admin*")
Bot.sendMessage(message+" Promoted")
Bot.setProperty("admin"+message+"",""+message+"","string")
}else{
Bot.sendMessage("You have to Become Owner")
}
