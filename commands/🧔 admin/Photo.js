/*CMD
  command: Photo
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 🧔 admin

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var pto = options.photo
var cap = options.caption
Api.sendPhoto({
photo: pto,
caption: "*🌌 Admin Photo Broadcast. #photo\n➖➖➖➖➖➖➖➖➖➖➖➖\n"+cap+"*"})
