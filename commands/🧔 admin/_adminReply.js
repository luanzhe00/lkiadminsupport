/*CMD
  command: /adminReply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🧔 admin
  answer: Kirimkan Pesan Anda.✍

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var tgid = options.tgid;

var msg = "*Answer from admin:* " + "\n" + message + "\n\nBalas pesan tekan👉: /send";
Bot.sendMessageToChatWithId(tgid, msg);

Bot.sendMessage("Pesan Terkirim ✅")
