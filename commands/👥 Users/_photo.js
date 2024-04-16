/*CMD
  command: /photo
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👥 Users
  answer: *🏞 Kirimkan kepadaku Foto bersama Caption untuk dikirimkan ke Admin.*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.sendPhoto({
chat_id: 7009373177, //edit admin tgid
photo: request.photo[0].file_id,
caption: "*📥 PESAN MASUK DARI:\n\n👤 User =* ["+user.first_name+"](tg://user?id="+user.telegramid+")\n\n*🌁 Caption Foto = \n\n"+request.caption+"*",
parse_mode: "Markdown" })
Bot.sendMessage("*🌁 Gambar telah terkirim ke Admin.*")
