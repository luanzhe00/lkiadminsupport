/*CMD
  command: /send
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Kirimkan pesan kepada Admin✍ 

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Automatic fix
var msg;

// Automatic fix
var msg;

var admin_chat = Bot.getProperty("admin_chat");

if(!admin_chat){
  Bot.sendMessage("Sorry. Bot have not admin now");
  return // exit
}

var user_link = Libs.commonLib.getLinkFor(user)

msg = "📥 PESAN MASUK: " + user_link +
     "\n\n" +
      message +
     "\n\nbalas pesan tekan 👉: /reply" + user.telegramid;


Bot.sendMessageToChatWithId(
  admin_chat, msg
);

/*
Api.forwardMessage({ 
 chat_id: admin_chat,
 message_id: request.message_id
});
*/

Bot.sendMessage("Pesan Terkirim ✅");


