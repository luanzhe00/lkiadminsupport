/*CMD
  command: /AdminPanel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
if (user.telegramid == admin){
var button = [
[{title: "🎙️Broadcast", command: "/Broadcast"}],[{title: "⚠️Ban", command: "/Ban"},{title: "🔓Unban", command: "/UnBan"}],[{title: "📤Send Message", command: "/SendMsg"}],[{title: "💡Change Start Channel",command: "/ChangeSChannel"}],[{title:"➕Add Admin", command: "/AddAdmin"},{title: "➖ Admin", command: "/RemoveAdmin"}],[{title:"🖼B.Foto", command: "/brphoto"}],[{title:"📤Send Bot", command: "/SendBot"}]
];
Bot.sendInlineKeyboard(button, "*ADMIN PANEL* \nHalo ["+user.first_name+"](tg://user?id="+user.telegramid+"), \nSelamat datang di Admin Panel \nSilahkan pilih salah satu menu dibawah ini")
}else{
Bot.sendMessage("Anda bukan Admin")
}
