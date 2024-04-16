/*CMD
  command: /Ban
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
if(user.telegramid == admin){
Bot.sendMessageToChatWithId(message, "You Have Been Banned By Owner")
var ba = 
Libs.ResourcesLib.anotherUserRes("balance",""+message+"")
Bot.setProperty("Balance"+message+"",ba.value(), "string")
ba.add(-ba.value())
Bot.sendMessage("User "+message+" Has Been Banned")
Bot.setProperty("Ban"+message+"", "Ban", "string")
}else{
Bot.sendMessage("You Are Not Admin")
}
