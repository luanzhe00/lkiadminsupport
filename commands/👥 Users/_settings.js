/*CMD
  command: /settings
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 👥 Users

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
if (user.telegramid == admin){
var button = [
[{title: "📤Buka Disini", command: "/AdminPanel"}]
];
Bot.sendInlineKeyboard(button, "Welcome ["+user.first_name+"](tg://user?id="+user.telegramid+")")
}else{
Bot.sendMessage("Anda bukan Admin")
}
