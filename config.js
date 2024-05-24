const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_27_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3NyxcbiAgICAgICAgODMsXG4gICAgICAgIDExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMyLFxuICAgICAgICA2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDExNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjI1LFxuICAgICAgICA5MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDk0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5LFxuICAgICAgICA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDcxLFxuICAgICAgICA4NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDk1LFxuICAgICAgICAxODksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkyLFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTczLFxuICAgICAgICA3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDY2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDgzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY1LFxuICAgICAgICA0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTExLFxuICAgICAgICA2NixcbiAgICAgICAgMjA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSEpWRk1HZVdPeXpDTHE1NHFLb20vOFNXQVhkclJJQ0MzUjBMb1Bkdy9SVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcyNTM1ODEyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkI5RUQ3NUYyQzkwMTc3NzhFNkFERDZGMUJDNDA1QzJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NTY0NDUxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MjUzNTgxMjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcxMERBQjkxOEQyMTRFNDI1ODc1RTVBQTlEMTkyQ0NEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjU2NDQ1MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3Mk95YzR2R1NBbVNNZ2JjTlFGVS1nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjljNmU0YWQ3LThlYmEtNDMwYy04MDFiLWM0ZTE0YjU5MWJjNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OSxcbiAgICAgIDIzMCxcbiAgICAgIDEsXG4gICAgICAxOTgsXG4gICAgICA2NyxcbiAgICAgIDE4NixcbiAgICAgIDQ3LFxuICAgICAgMjA3LFxuICAgICAgMSxcbiAgICAgIDIzMixcbiAgICAgIDE2NSxcbiAgICAgIDI0MyxcbiAgICAgIDI0NSxcbiAgICAgIDIxNixcbiAgICAgIDE2MSxcbiAgICAgIDQ4LFxuICAgICAgMjgsXG4gICAgICAyMCxcbiAgICAgIDE5MSxcbiAgICAgIDE5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICAxMDEsXG4gICAgICAxOTcsXG4gICAgICAxMixcbiAgICAgIDExNixcbiAgICAgIDI1LFxuICAgICAgODQsXG4gICAgICA1NixcbiAgICAgIDE2MyxcbiAgICAgIDE1MCxcbiAgICAgIDEzNixcbiAgICAgIDEwMyxcbiAgICAgIDExNSxcbiAgICAgIDI0MixcbiAgICAgIDEwLFxuICAgICAgNTUsXG4gICAgICA1LFxuICAgICAgMjA0LFxuICAgICAgMTI0LFxuICAgICAgMTQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQ5UUdYRzE1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcyNTM1ODEyMzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTg5MjYxNTgyOTkzMzg6N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJIYWNrZXJfQy5FLk9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNdWYvYlVERU56andySUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJUOXpNbzZOZFo0ekgzNFNIUmcyTXBjb29vQVdGN2hqMlRtRjUwczQ3UXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZlZxVlRiWTdsUWdOZEdaVk83SnBmV2ljT2ZLSjJIUzhSY3piZUtMb1JXOGllSTRMMDdja2k0aGJ0Nzc3UTJRM2JhUGs5YURQV2pwMHZ5TXVPUmkyREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQmVBRUo3NGNqNVgwbVI1akxQV0pxa2NCbHIwd3A3VDYrTUZCUE1XY3U1ei81aHlvTEprUWI1eEZVaGpHVzFMSVg2NHBLc3JGTWQvMWdQeTlPUk9jQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MjUzNTgxMjM6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY1NjQ0NDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPTHNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9Mcy5qc29uIjogIntcImtleURhdGFcIjpcInkvSmJlRkQ1LzYxdzdKc09VOUlNRW1YeGIwSlBGbHFjYVF5SEhSYWZqUjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTE4NTA3NDY2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
