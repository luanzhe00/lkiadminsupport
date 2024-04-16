/*CMD
  command: /brphoto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🧔 admin
  answer: *🌌 Kirimkan Foto Anda dan Caption untuk Siaran.*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

//Edit Your Telegram Id. 
var admin = Bot.getProperty("admin"+user.telegramid)
if (user.telegramid == admin){
Bot.runAll({ 
command: "Photo",
for_chats: "private-chats",
options: {photo: request.photo[0].file_id, caption: request.caption}
})
Bot.sendMessage("*🌌 Foto dikirimkan ke semua Pengguna.*")
}else{
Bot.sendMessage("*⛔️ Anda bukan Admin.*")
}
