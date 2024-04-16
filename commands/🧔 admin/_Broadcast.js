/*CMD
  command: /Broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🧔 admin
  answer: Kirimkan Pesan untuk di Siarkan

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
if (user.telegramid == admin){
Bot.setProperty("adminBroadcast", message)
Bot.runAll({
    command: "broadcast_2"
})
Bot.sendMessage("✅Message sent to all active members")
}else{
Bot.sendMessage("you are not allowed to use this")
}
