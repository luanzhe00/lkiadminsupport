/*CMD
  command: /UnBan
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
Bot.sendMessageToChatWithId(message, "You Have Been UnBanned By Owner")
var ba = 
Libs.ResourcesLib.anotherUserRes("balance",""+message+"")
var bbal = Bot.getProperty("Balance"+message)
ba.add(+bbal)
Bot.sendMessage("User "+message+" Has Been UnBanned")
Bot.setProperty("Ban"+message, "UnBan", "string")
}else{
Bot.sendMessage("You Are Not Admin")
}
