/*CMD
  command: 📊 Statistics
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var user = Libs.ResourcesLib.anotherChatRes("user", "global")
var payout = Libs.ResourcesLib.anotherChatRes("withdraw", "global")
var graphpic = "https://quickchart.io/chart?bkg=white&c={type:%27bar%27,data:{labels:[''],datasets:[{label:%27Total-Users%27,data:["+user.value()+"]},{label:%27Total-Payment%27,data:["+payout.value()+"]}]}}"
Api.sendPhoto({
photo: graphpic,
caption: "*📊 Bot Live Statistics\n\n👥 Users = "+user.value()+" Users\n\n📤 Withdraw = "+payout.value()+" Rs\n\n⚜ Share And Support Us ⚜*",
parse_mode: "markdown"
})
