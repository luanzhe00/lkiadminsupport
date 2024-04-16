/*CMD
  command: /RemoveAdmin
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

if (user.telegramid == 7009373177){
Bot.sendMessageToChatWithId(""+message+"", "*Owner Demoted You*")
Bot.sendMessage(message+" Demoted")
Bot.setProperty("admin"+message+"","demote","string")
}else{
Bot.sendMessage("You have to Become Owner")
}
