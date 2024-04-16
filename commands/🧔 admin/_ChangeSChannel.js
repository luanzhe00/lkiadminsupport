/*CMD
  command: /ChangeSChannel
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🧔 admin
  answer: Kirimkan Username Channel untuk Memulai

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
Bot.setProperty("@LexZbio", message, "string")
Bot.sendMessage("Start Channel set to "+message)
}else{
Bot.sendMessage("You Are Not An Admin")
}
