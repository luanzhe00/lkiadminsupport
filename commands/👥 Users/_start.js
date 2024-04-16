/*CMD
  command: /start
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

var button = [
[{title: "ℹ Ketentuan", command: "/alasan"}],[{title: "📨Pesan", command: "/send"},{title: "🖼Foto", command: "/photo"}],[{title: "📄Format", command: "/format"}]
];
Bot.sendInlineKeyboard(button, "*Admin Support Group LKI* \n\nHalo ["+user.first_name+"](tg://user?id="+user.telegramid+"), \nSelamat datang di *Admin Support Group LKI* \nSilahkan Klik Tombol dibawah ini: \n\n*📨Pesan* - Mengirim pesan Anda ke Admin \n*🖼Foto* - Mengirim Foto dan Teks Anda ke Admin \n*📄Format* - Menampilkan Format Registrasi Group LKI")

var new_user = User.getProperty ("new_user")
if(!new_user){ 
Bot.sendMessageToChatWithId(6183470890, "🚦𝗠𝗲𝗺𝗯𝗲𝗿🚦\n\n⚜ 𝗣𝗲𝗻𝗴𝗴𝘂𝗻𝗮 = "+user.first_name + " "+user.last_name +"\n🔰 𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲 = @"+user.username+"\n🆔 𝗜𝗗 = ` "+user.telegramid+" `\n🏳 𝗕𝗮𝗵𝗮𝘀𝗮 = "+user.language_code +"\n📛 𝗣𝗿𝗼𝗳𝗶𝗹 = ["+user.first_name +"](tg://user?id="+user.telegramid+")")

Bot.sendMessageToChatWithId(7009373177, "🚦𝗠𝗲𝗺𝗯𝗲𝗿🚦\n\n⚜ 𝗣𝗲𝗻𝗴𝗴𝘂𝗻𝗮 = "+user.first_name + " "+user.last_name +"\n🔰 𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲 = @"+user.username+"\n🆔 𝗜𝗗 = ` "+user.telegramid+" `\n🏳 𝗕𝗮𝗵𝗮𝘀𝗮 = "+user.language_code +"\n📛 𝗣𝗿𝗼𝗳𝗶𝗹 = ["+user.first_name +"](tg://user?id="+user.telegramid+")")
User.setProperty ("new_user",true,"boolean")
}
