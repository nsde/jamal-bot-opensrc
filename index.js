'use strict';
const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = "De!";
const token = "ODA3MzczOTgyNDExNTIyMDgw.YB3DnQ.Zjk82JnKFOY65DxMuZDmo33zhzg";

const mysql = require("mysql");
const { format } = require("path");
"Code 5";
var version = '1.3.1';

let lastUser = Discord.User = '';
var f;
var verwarnungen2;
var verwarnungen;
var vb;
var deleteTime = 20000;
let CooldownLevel = 45000;
var vb2;
var Prefix = "§";







function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

function resetBot(channel) {
  // send channel a message that you're resetting bot [optional]
  channel.send('Resetting...')
  .then(msg => client.destroy())
  .then(() => client.login(token));
}

class HashTable {

    table = new Array(300)
    hastString
setItem = (key, value) => {
    
    this.table[key] = value;

};
getItem = (key) => {
    
    return this.table[key];
};
}

const myTable = new HashTable();
const AlleRollen = new HashTable();

var con = mysql.createConnection({
       host: "db4free.net",
       user: "denizcakmak",
       password: "Deniz11&9",
       database: "jamalbot"
});

con.connect(err => {
    if(err) throw err;
    console.log("Connected To Database!");


});
let sql;




bot.on("ready", () => {
  
    console.log('Der Bot ist nun aktiv')

    
    bot.user.setActivity('Type '+Prefix+'help for help', {type: 'STREAMING'}).catch(console.error)

})


bot.on("guildCreate", guild => {
  console.log("Hallo");
  con.query(`SELECT * FROM Servers WHERE server = '`+guild.id+`';`, (err, rows) => {
    if(err) throw err;
    
        if(rows.length >= 1){
        }else{
          sql = `INSERT INTO Servers (server) VALUES ('`+guild.id+`');`;
                      
          
          con.query(sql);
       }
      });

  });

bot.on('message', async message =>{

  function SpracheUndSendMessagePerms(frage, deutschh, englischh) {
    if(message.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) {
     +
      con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
        if(err) throw err;
        
            if(rows.length >= 1){
              
              let language = rows[0].lang;
              if(language == "de"){
                
                if(frage == 1){
                  
                message.channel.send(deutschh).then(msg => msg.delete({timeout: deleteTime}));
                }else{
                message.channel.send(deutschh);
                
                }
                  
              }else if(language == "en"){
                if(frage == 1){
                  message.channel.send(englischh).then(msg => msg.delete({timeout: deleteTime}));
                }else{
                message.channel.send(englischh);
                }    
              }
           }else{
           
            if(frage == 1){
              message.channel.send(englischh).then(msg => msg.delete({timeout: deleteTime}));
            }else{
            message.channel.send(englischh);
            }  
            
            message.channel.send('(No Language set! "'+Prefix+'lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
           }
          });

    }else {
      const randomChannel = message.guild.channels.cache.find(channel => 
        channel.type === "text" && channel.permissionsFor(bot.user).has("SEND_MESSAGES") && channel.permissionsFor(bot.user).has("VIEW_CHANNEL"));

        con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
          if(err) throw err;
              if(rows.length >= 1){
                let language = rows[0].lang;
                if(language == "de"){
                  randomChannel.send("Entschuldigen für Störung, aber Jamal bräuchte die Berechtigung SEND_MESSAGES in allen Channeln, <@"+message.guild.ownerID+">.");
                       
                }else if(language == "en"){
                  randomChannel.send("Sorry for disturb, but Jamal would like to get the permission SEND_MESSAGES in all channel, <@"+message.guild.ownerID+">.");
                       
                }
             }else{
             
              randomChannel.send("Sorry for disturb, but Jamal would like to get the permission SEND_MESSAGES in all channel, <@"+message.guild.ownerID+">.");
              
              randomChannel.send('(No Language set! "'+Prefix+'lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
             }
            });

    }
  }
    

  var SET = "";
    
    let args = message.content.split(" ");
    if(message.channel.id === '806274946913271808'){
        let move =  message.guild.roles.cache.find((r) => r.id == "811587684460003348");
        switch(args[0]){
            
            case "=move":
                console.log("Code 2");
                if(message.member.roles.cache.has(move.id) || message.author.username == "Deniz") {
                    
                console.log("Code 3");
                    if(message.mentions.members){
                const taggedUser = message.mentions.members.first();
                if(taggedUser.voice.channel){
                taggedUser.voice.setChannel('811569789758603305');
                }
              }
                }
            break;
                
            case "=unmove":
                
                if(message.member.roles.cache.has(move.id) || message.author.username == "Deniz") {
                    
            var ab = message.member.voice.channelID;
            const taggedUser2 = message.mentions.members.first();
            if(taggedUser2.voice.channel){
                taggedUser2.voice.setChannel(ab);
                }
                }
            break;
            case "=loeschen":
                
            if(message.mentions){
              const taggedUser2 = message.mentions.members.first();
              const tagid = taggedUser2.id;
              message.channel.send("Lösch dich <@"+tagid+">");
              }
            break;
            
            
            default:
              
                break;

        }
    
    
    
    
    
    
    
    
    
    
    
    
   
    // Among US Turnier "Fynni Bro" [de] - danach ein wenig Schach - 00.15

   /* }else if(message.channel.id === '807740332207898693' || message.channel.id === '807740332207898693' || message.channel.id === '807740332207898693'){
        var args1 = args[0].toUpperCase;
        switch(args1){

case "'BLACKJACK":
    let xx = Math.random() * 52;
    let DeckRandomKarte = parseInt(''+xx);


            




    break;
case Prefix:
    break;

    }
        
    
    
    
    
    */
    
    
    
    }else if(message.channel.id === '811675941746114594'){
        let roole =  message.guild.roles.cache.find((r) => r.id == "811675301213634611");
        let av =  message.guild.roles.cache.find((r) => r.id == "811675521564934184");
        let roo123123le =  message.guild.roles.cache.find((r) => r.id == "811675523327328286");
        let r123oole =  message.guild.roles.cache.find((r) => r.id == "811675526653280297");
        let ro123ole =  message.guild.roles.cache.find((r) => r.id == "811675528905490492");
        let gdsf =  message.guild.roles.cache.find((r) => r.id == "811675531736383549");
        let asfw =  message.guild.roles.cache.find((r) => r.id == "811675532592283710");
        let roo124le =  message.guild.roles.cache.find((r) => r.id == "811675527621771305");
        let roo234le =  message.guild.roles.cache.find((r) => r.id == "811675529736224768");
        let roo123le =  message.guild.roles.cache.find((r) => r.id == "811675531132403772");
        let asdsgeff =  message.guild.roles.cache.find((r) => r.id == "811676196944740383");
        let roo1asar323le =  message.guild.roles.cache.find((r) => r.id == "811675908527357952");
        let roo12shav3le =  message.guild.roles.cache.find((r) => r.id == "811675534194901083");
        let roodfs123le =  message.guild.roles.cache.find((r) => r.id == "811676356571299860");

       

let xv = Math.random() * 14;
let xvv = parseInt(''+xv);

if(xvv==1){
    if (message.member.roles.cache.has(roole.id)) {
        message.member.roles.remove(roole);
        }else{
            message.member.roles.add(roole);
        }
        

}else if(xvv==2){
    if (message.member.roles.cache.has(av.id)) {
        message.member.roles.remove(av);
        }else{
            message.member.roles.add(av);
        }
}else if(xvv==3){
    if (message.member.roles.cache.has(roo123123le.id)) {
        message.member.roles.remove(roo123123le);
        }else{
            message.member.roles.add(roo123123le);
        }
}else if(xvv==4){
    if (message.member.roles.cache.has(r123oole.id)) {
        message.member.roles.remove(r123oole);
        }else{
            message.member.roles.add(r123oole);
        }
}else if(xvv==5){
    if (message.member.roles.cache.has(ro123ole.id)) {
        message.member.roles.remove(ro123ole);
        }else{
            message.member.roles.add(ro123ole);
        }
}else if(xvv==6){
    if (message.member.roles.cache.has(gdsf.id)) {
        message.member.roles.remove(gdsf);
        }else{
            message.member.roles.add(gdsf);
        }
}else if(xvv==7){
    if (message.member.roles.cache.has(asfw.id)) {
        message.member.roles.remove(asfw);
        }else{
            message.member.roles.add(asfw);
        }
}else if(xvv==8){
    if (message.member.roles.cache.has(roo124le.id)) {
        message.member.roles.remove(roo124le);
        }else{
            message.member.roles.add(roo124le);
        }
}else if(xvv==9){
    if (message.member.roles.cache.has(roo234le.id)) {
        message.member.roles.remove(roo234le);
        }else{
            message.member.roles.add(roo234le);
        }
}else if(xvv==10){
    if (message.member.roles.cache.has(roo123le.id)) {
        message.member.roles.remove(roo123le);
        }else{
            message.member.roles.add(roo123le);
        }
}else if(xvv==11){
    if (message.member.roles.cache.has(asdsgeff.id)) {
        message.member.roles.remove(asdsgeff);
        }else{
            message.member.roles.add(asdsgeff);
        }
}else if(xvv==12){
    if (message.member.roles.cache.has(roo1asar323le.id)) {
        message.member.roles.remove(roo1asar323le);
        }else{
            message.member.roles.add(roo1asar323le);
        }
}else if(xvv==13){
    if (message.member.roles.cache.has(roo12shav3le.id)) {
        message.member.roles.remove(roo12shav3le);
        }else{
            message.member.roles.add(roo12shav3le);
        }
}else if(xvv==14){
    if (message.member.roles.cache.has(roodfs123le.id)) {
        message.member.roles.remove(roodfs123le);
        }else{
            message.member.roles.add(roodfs123le);
        }
}



    }
    
    switch(args[0].toUpperCase()){
      case ""+Prefix+"COUNTING":
  if(message.member.hasPermission("ADMINISTRATOR") || message.member.id === "466596723297484810"  || message.member.roles.cache.find(r => r.name.toUpperCase() === "MOD") || message.member.roles.cache.find(r => r.nametoUpperCase() === "MODERATOR")){
    if(args[1].toUpperCase() === "SET"){
      
SpracheUndSendMessagePerms(1, "Super! Dies ist nun der Counting Channel!", "Perfect, this is now the counting channel!")

con.query(`SELECT * FROM CountingChannel WHERE server = '`+message.guild.id+`';`, (err, rows) => {
            if(err) throw err;

                if(rows.length >= 1){
                  sql = `DELETE FROM CountingChannel WHERE server = '`+message.guild.id+`';`;
                  con.query(sql);
                  sql = `INSERT INTO CountingChannel (server, channel_id) VALUES ('`+message.guild.id+`', '`+message.channel.id+`');`;
                  con.query(sql)
                  //
                  
               }else{
                sql = `INSERT INTO CountingChannel (server, channel_id) VALUES ('`+message.guild.id+`', '`+message.channel.id+`');`;
                  con.query(sql)
               }
              });
    }else if(args[1].toUpperCase() === "OFF"){
      
      SpracheUndSendMessagePerms(1, "Der Counting-Channel ist aus!", "The counting channel is off!")
      
      con.query(`SELECT * FROM CountingChannel WHERE server = '`+message.guild.id+`';`, (err, rows) => {
                  if(err) throw err;
      
                      if(rows.length >= 1){
                        sql = `DELETE FROM CountingChannel WHERE server = '`+message.guild.id+`';`;
                        con.query(sql);
                        
                        //
                        
                     }
                    });
          }else{
      
 if(BigInt(args[1]) != null){
  let newNumber = parseInt(args[1]);
  if(newNumber <= 1000000 || message.member.id === "466596723297484810"){

   con.query(`SELECT * FROM Counting WHERE server = '`+message.guild.id+`'`, (err, rows) => {
                 if(err) throw err;
                 
         
                 if(rows.length >= 1){

  sql = `DELETE FROM Counting WHERE server = '`+message.guild.id+`'`;
                                             
  con.query(sql);

  sql = `INSERT INTO Counting (nummer2, server) VALUES ('`+newNumber+`', '`+message.guild.id+`');`;
   
   con.query(sql);
  }else{
    sql = `INSERT INTO Counting (nummer2, server) VALUES ('`+newNumber+`', '`+message.guild.id+`');`;
   
    con.query(sql);


  }



                 });

                 con.query(`SELECT * FROM CountingChannel WHERE server = '`+message.guild.id+`';`, (err, rows3) => {
                  if(err) throw err;
                      if(rows3.length >= 1){
                        if(rows3[0].channel_id === message.channel.id){
          
//SpracheUndSendMessagePerms(0, "Der Counting-Fortschritt ist nun auf "+newNumber, "The Counting-Progress is set to "+newNumber);
                        }else{
          
SpracheUndSendMessagePerms(1, "Der Counting-Fortschritt ist nun auf "+newNumber, "The Counting-Progress is set to "+newNumber);
                        }
                      }
                    });
}else{
  SpracheUndSendMessagePerms(0, "Diese Zahl ist zu groß! Bitte wenden sie sich an @Deniz#5879!", 
  "This number is too big , please contact @Deniz#5879!");
}
 }


    }

    con.query(`SELECT * FROM CountingChannel WHERE server = '`+message.guild.id+`';`, (err, rows3) => {
      if(err) throw err;
          if(rows3.length >= 1){
            if(rows3[0].channel_id === message.channel.id){

            }else {}
    if((message.channel.permissionsFor(bot.user).has("MANAGE_MESSAGES"))) {

      message.delete({ timeout: 1 });

    }else {
      const randomChannel = message.guild.channels.cache.find(channel => 
       channel.type === "text" && channel.permissionsFor(bot.user).has("SEND_MESSAGES") && channel.permissionsFor(bot.user).has("VIEW_CHANNEL"));

       con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
         if(err) throw err;
             if(rows.length >= 1){
               let language = rows[0].lang;
               if(language == "de"){
                 randomChannel.send("Entschuldigen für Störung, aber Jamal bräuchte die Berechtigung MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
                      
               }else if(language == "en"){
                 randomChannel.send("Sorry for disturb, but Jamal would like to get the permission MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
                      
               }
            }else{
            
             randomChannel.send("Sorry for disturb, but Jamal would like to get the permission MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");

             randomChannel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
            }
           });
           
 }   
}

});

      }
      break;

      case ""+Prefix+"LANG":
        
        
        if(message.member.hasPermission("ADMINISTRATOR") || message.member.id === "466596723297484810"  || message.member.roles.cache.find(r => r.name.toUpperCase() === "MOD") || message.member.roles.cache.find(r => r.toUpperCase() === "MODERATOR")){
  
        if(args[1].toUpperCase() === "DE" || args[1].toUpperCase() === "DEUTSCH" ){
          con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
            if(err) throw err;
                if(rows.length >= 1){
                  sql = `DELETE FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`;
                  con.query(sql);
                  sql = `INSERT INTO SpracheServer (lang, server_id) VALUES ('de', '`+message.guild.id+`');`;
                  con.query(sql)
                  //
                  
               }else{
                sql = `INSERT INTO SpracheServer (lang, server_id) VALUES ('de', '`+message.guild.id+`');`;
                con.query(sql)
               }
              });

              if(message.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) {

                message.channel.send('Super! Die Serversprache wurde auf Deutsch gestellt!');

              }else {
                const randomChannel = message.guild.channels.cache.find(channel => 
                  channel.type === "text" && channel.permissionsFor(bot.user).has("SEND_MESSAGES") && channel.permissionsFor(bot.user).has("VIEW_CHANNEL"));
                  console.log(randomChannel);
                  randomChannel.send('Super! Die Serversprache wurde auf Deutsch gestellt!');
                  randomChannel.send("Entschuldigen für Störung, aber Jamal bräuchte die Berechtigung SEND_MESSAGES in allen Channeln, <@"+message.guild.ownerID+">.");
                                 

              }


              
        }else if(args[1].toUpperCase() === "EN" || args[1].toUpperCase() === "ENGLISH" ){
          con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
            if(err) throw err;
                if(rows.length >= 1){
                  sql = `DELETE FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`;
                  con.query(sql);
                  sql = `INSERT INTO SpracheServer (lang, server_id) VALUES ('en', '`+message.guild.id+`');`;
                  con.query(sql)
                  
               }else{
                sql = `INSERT INTO SpracheServer (lang, server_id) VALUES ('en', '`+message.guild.id+`');`;
                con.query(sql)
               }
              });
              
              if(message.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) {
                message.channel.send('The Serverlanguage is now set to English!');

              }else {
                const randomChannel = message.guild.channels.cache.find(channel => 
                  channel.type === "text" && channel.permissionsFor(bot.user).has("SEND_MESSAGES") && channel.permissionsFor(bot.user).has("VIEW_CHANNEL"));
                  randomChannel.send('The Serverlanguage is now set to English!');
                  randomChannel.send("Sorry for disturb, but Jamal would like to get the permission SEND_MESSAGES in all channel, <@"+message.guild.ownerID+">.");
                                 

              }

        }else{
          message.channel.send("This Language is not supported! \nSupported Languages until now are: \nGerman - DE \nEnglish - EN");
        }
        }
      break;

case ""+Prefix+"LEVEL":
  
  if(message.member.hasPermission("ADMINISTRATOR") || message.member.id === "466596723297484810" || message.member.roles.cache.find(r => r.name.toUpperCase() === "MOD") || message.member.roles.cache.find(r => r.toUpperCase() === "MODERATOR")){
    if(args.length === 3){
  con.query(`SELECT * FROM RollenFürLevel WHERE levelrang = '`+args[1]+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows) => {
    if(err) throw err;
       if(rows.length >= 1){
        
        if(message.mentions.roles.size == 1){
        let rolle = message.mentions.roles.first();
        sql = `DELETE FROM RollenFürLevel WHERE levelrang = '`+args[1]+`' AND server_id = '`+message.guild.id+`';`;
              
        con.query(sql);
        sql = `INSERT INTO RollenFürLevel (rollen_id, levelrang, server_id) VALUES ('`+rolle.id+`', `+args[1]+`,'`+message.guild.id+`');`;
        con.query(sql)


SpracheUndSendMessagePerms(0, "Perfekt! Jeder mit dem Level "+args[1]+" bekommt nun die Rolle <@&"+rolle.id+">.", "Perfekt! Now everyone with the Level "+args[1]+" will get the Role <@&"+rolle.id+">.")

        
 }else{
   
                SpracheUndSendMessagePerms(0, "Bitte schreibe "+Prefix+"help für weitere Hilfe!", "Please write "+Prefix+"help for more information!");

        }
      }else{
        if(message.mentions.roles.size == 1){
        let rolle = message.mentions.roles.first();
        
        sql = `INSERT INTO RollenFürLevel (rollen_id, levelrang, server_id) VALUES ('`+rolle.id+`', `+args[1]+`,'`+message.guild.id+`');`;
        con.query(sql)
        SpracheUndSendMessagePerms(0, "Perfekt! Jeder mit dem Level "+args[1]+" bekommt nun die Rolle <@&"+rolle.id+">.", "Perfekt! Now everyone with the Level "+args[1]+" will get the Role <@&"+rolle.id+">.")

       
       }else{


        SpracheUndSendMessagePerms(0, "Bitte schreibe "+Prefix+"help für weitere Hilfe!", "Please write "+Prefix+"help for more information!");

      }
       
    }
      });
    }else if(args.length === 2){
      if(args[1].toUpperCase() === "ON"){
        con.query(`SELECT * FROM Togglelevel WHERE server = '`+message.guild.id+`';`, (err, rows) => {
          if(err) throw err;
             if(rows.length >= 1){
               if(rows[0].status === "on"){
                SpracheUndSendMessagePerms(0, "Das Levelsystem ist zu dem Zeitpunkt aktiviert!", "The leveling-system is currently active!");
                
               }else{
               sql = `DELETE FROM Togglelevel WHERE server = '`+message.guild.id+`';`;
               con.query(sql)
               sql = `INSERT INTO Togglelevel (server, status) VALUES ('`+message.guild.id+`', "on");`;
               con.query(sql)
               SpracheUndSendMessagePerms(0, "Das Levelsystem wurde nun aktiviert!", "The leveling-system is now activated!");
               }
             
            }else{
              sql = `DELETE FROM Togglelevel WHERE server = '`+message.guild.id+`';`;
        con.query(sql)
        sql = `INSERT INTO Togglelevel (server, status) VALUES ('`+message.guild.id+`', "on");`;
        con.query(sql)
        SpracheUndSendMessagePerms(0, "Das Levelsystem wurde nun aktiviert!", "The leveling-system is now activated!");
            }

          });

      }else if(args[1].toUpperCase() === "OFF"){
        con.query(`SELECT * FROM Togglelevel WHERE server = '`+message.guild.id+`';`, (err, rows) => {
          if(err) throw err;
             if(rows.length >= 1){
               if(rows[0].status === "off"){
                SpracheUndSendMessagePerms(0, "Das Levelsystem ist zu dem Zeitpunkt deaktiviert!", "The leveling-system is currently deactived!");
                
               }else{
               sql = `DELETE FROM Togglelevel WHERE server = '`+message.guild.id+`';`;
               con.query(sql)
               sql = `INSERT INTO Togglelevel (server, status) VALUES ('`+message.guild.id+`', "off");`;
               con.query(sql)
               SpracheUndSendMessagePerms(0, "Das Levelsystem wurde nun deaktiviert!", "The leveling-system is now deactivated!");
               }
             
            }else{
              sql = `DELETE FROM Togglelevel WHERE server = '`+message.guild.id+`';`;
        con.query(sql)
        sql = `INSERT INTO Togglelevel (server, status) VALUES ('`+message.guild.id+`', "off");`;
        con.query(sql)
        SpracheUndSendMessagePerms(0, "Das Levelsystem wurde nun deaktiviert!", "The leveling-system is now deactivated!");
            }

          });
      }


    }else{
      SpracheUndSendMessagePerms(0, "Bitte schreibe "+Prefix+"help für weitere Hilfe!", "Please write "+Prefix+"help for more information!");

    }
    
  }
break;

          case ""+Prefix+"LEVELING":
            if(args.length == 2){
              if(message.mentions.members.size == 1){
                

                
                let taggesUsa = message.mentions.members.first();
                if(taggesUsa == null){
                  taggesUsa = bot.users.find(user => user.username == args[1]);

                }
if(taggesUsa == null){
  SpracheUndSendMessagePerms(0, "User nicht gefunden. (Wenn du deine XP wissen, schreibe NUR §leveling!)", "User not found. (If you want to know your XP, you just need to type §leveling!)");
  
}else{
                let Level = 0;
            let Experience = 0;
 
                
            con.query(`SELECT * FROM LevelingLEVEL WHERE player_id = '`+taggesUsa.id+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows2) => {
              if(err) throw err;
                 if(rows2.length >= 1){
                  Level = rows2[0].levelvoll;
                  
                  
                 }
                 
                });
                con.query(`SELECT * FROM Leveling WHERE player_id = '`+taggesUsa.id+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows) => {
                  if(err) throw err;
                      if(rows.length >= 1){
                      Experience = rows[0].xplevel;
                     
                     }
                    });
                    
                    con.query(`SELECT * FROM Leveling WHERE player_id = '`+taggesUsa.id+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows) => {
                      if(err) throw err;
                      SpracheUndSendMessagePerms(0, "Der Spieler <@"+taggesUsa.id+"> ist Level "+Level+" mit "+Experience+"/"+(200+(200*Level))+" XP.",
                      "The User <@"+taggesUsa.id+"> is level "+Level+" with "+Experience+"/"+(200+(200*Level))+" XP.");
                      
                    
                  });
                  
              }
                       }
                    
            }else if(rows.length === 1){
              let Level = 0;
              let Experience = 0;
  
              con.query(`SELECT * FROM LevelingLEVEL WHERE player_id = '`+message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows2) => {
                if(err) throw err;
                   if(rows2.length >= 1){
                    Level = rows2[0].levelvoll;
                   }
  
                  });
                  
                  con.query(`SELECT * FROM Leveling WHERE player_id = '`+message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows) => {
                    if(err) throw err;
                        if(rows.length >= 1){
                        Experience = rows[0].xplevel;
                       }
                      });
                      
                      SpracheUndSendMessagePerms(0, "Du bist Level "+Level+" mit "+Experience+"/"+(200+(200*Level))+" XP.",
                    "You're level "+Level+" with "+Experience+"/"+(200+(200*Level))+" XP.");

                        }else{

                          let Level = 0;
                          let Experience = 0;
               console.log("code 1");
                              
                          con.query(`SELECT * FROM LevelingLEVEL WHERE player_id = '`+taggesUsa.id+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows2) => {
                            if(err) throw err;
                               if(rows2.length >= 1){
                                Level = rows2[0].levelvoll;
                                console.log(Level);
                                
                               }
              
                              });
                              
                              con.query(`SELECT * FROM Leveling WHERE player_id = '`+taggesUsa.id+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows) => {
                                if(err) throw err;
                                    if(rows.length >= 1){
                                    Experience = rows[0].xplevel;
                                    console.log(Experience);
                                   }
                                  });
                                  
              
                                  SpracheUndSendMessagePerms(0, "Der Spieler <@"+taggesUsa.id+"> ist Level "+Level+" mit "+Experience+"/"+(200+(200*Level))+" XP.",
                                  "The User <@"+taggesUsa.id+"> is level "+Level+" with "+Experience+"/"+(200+(200*Level))+" XP.");
                                }          

   break;
            case ""+Prefix+"HELP":

              SpracheUndSendMessagePerms(0, 
                "```PREFIX: "+Prefix+" \n \n{} = Ping , [] = Argumente (auch optional), () = Argumente (Eingabe erfordert), ~: Für User mit Admin-Perms oder User mit einer Rolle namens Mod(erator) "+
                        "\n \n~...level (LevelNr) (@role):Stelle ein, ab welchem Level man welche Rolle bekommt (Beispiel: "+Prefix+"level 5 {@Level5})"+
                        "\n~...level (on/off): Stelle das Leveling-System ein/aus! (Standart: Aktiv)"+
                        "\n...leveling {@User}: Sieh, auf welchem Level du bist (oder jemand anderes.)"+
                        "\n~...counting (set/off|[Nummer]): Setze diesen Channel zum Counting Channel deines Servers oder setze den Counting-Fortschritt \n(ab 1 MIO müsste @Deniz#5879 kontaktiert werden). "+
                       
                        "\n~...clearchat (Anzahl): Lösche eine gewisse Anzahl an Nachrichten in einem Channel. "+
                        
                        "\n~...lang: Setze die Sprache auf deinem Server. (Beispiel: "+Prefix+"lang de)"+
                        
                        "\n \nJOKE COMMANDS:"+
                        "\n \n...pp @{player}: Checke die Schw*nzlänge von... dir oder einem User "+
                        "\n...lauch @{player}: Zu wieviel Prozent bist du/jemand anderes ein Lauch?``` ",
                
                "```PREFIX: "+Prefix+"\n \n{} = Ping, [] = Argument (also optional), () = Argument (needed), ~: for user with Admins-perms or User with a role named Mod(erator)  "+
                        "\n \n~...level (LevelNo) (@role): Setup with level a player will get which role (usage: "+Prefix+"level 5 {@Level5})"+
                        "\n~...level (on/off): De/activate the leveling system! (usually active)"+
                        "\n...leveling {@user}: See what level you are (or someone else.)"+
                        "\n~...counting (set/off|[number]): Set this channel to your Counting Channel in this Servers or set the Counting-Progress \n(You need to contact @Deniz#5879 to set the Progress over 1 mio). "+
                        "\n~...clearchat (number): Delete a specific amount of messages in a channel. "+
                        "\n~...lang : Set the language of the bot on your server. (usage: "+Prefix+"lang de)"+
                        "\n \nJOKE COMMANDS:"+
                       
                        "\n \n...pp {@user}: Check the length of a co*k of you or a user "+
                        
                        " \n...lauch @{player}: To which percentage are you/a user a leek?``` "
                        );




              break;
              case ""+Prefix+"JAMAL":
                
                    
                    if(message.mentions.members.size >= 1){
                const taggedUser = message.mentions.members.first();
                message.channel.send("Super, <@"+taggedUser.id+"> 👍 👍 👍 👍");
              }else {
               message.channel.send("Super, <@"+message.author.id+"> 👍 👍 👍 👍");}
              break;

              case ""+Prefix+"LAUCH":
                

                    if(message.mentions.members.size >= 1){
                const taggedUser = message.mentions.members.first();
               // if(taggedUser.id == "466596723297484810"){
                //  message.channel.send("🥬Der User <@"+taggedUser.id+"> ist zu 0% ein Lauch.🥬");
                //}else{

                  let Gained = Math.floor(Math.random() * 100);
                  let XPneu = (parseInt(Gained));
                  SpracheUndSendMessagePerms(0, "🥬Der User <@"+taggedUser.id+"> ist zu "+XPneu+"% ein Lauch.🥬",
                  "🥬The User <@"+taggedUser.id+"> has a "+XPneu+"% possibility to be a leek.🥬");

                  
              //}
              }else {
               // if(message.author.id == "466596723297484810"){
               //   message.channel.send("🥬Du bist zu 0% ein Lauch.🥬");
               // }else{

                let Gained = Math.floor(Math.random() * 100);
                let XPneu = (parseInt(Gained));
                SpracheUndSendMessagePerms(0, "🥬Du bist zu "+XPneu+"% ein Lauch.🥬",
                "🥬You have a "+XPneu+"% possibility to be a leek.🥬");
              }
                //}
              break;

              case ""+Prefix+"PP":
                
                      if(message.mentions.members.size >= 1){
                  const taggedUser = message.mentions.members.first();
                  if(taggedUser.id == "466596723297484810"){
                    SpracheUndSendMessagePerms(0, "🍆<@"+taggedUser.id+">'s pp ist 25cm groß.🍆",
                    "🍆<@"+taggedUser.id+">'s pp is 25cm big.🍆");
                  }else{
  
                    let Gained = Math.floor(Math.random() * 20);
                    let XPneu = (parseInt(Gained));
                    SpracheUndSendMessagePerms(0, "🍆<@"+taggedUser.id+">'s pp ist "+XPneu+"cm groß.🍆",
                    "🍆<@"+taggedUser.id+">'s pp is "+XPneu+"cm big.🍆");

                }
                }else {
                  if(message.author.id == "466596723297484810"){
                    

                    SpracheUndSendMessagePerms(0, "🍆Dein pp ist 25cm groß.🍆", "🍆Your pp is 25cm big.🍆");
                  }else{
  
                    let Gained = Math.floor(Math.random() * 20);
                    let XPneu = (parseInt(Gained));
                    SpracheUndSendMessagePerms(0, "🍆Dein pp ist "+XPneu+"cm groß.🍆", "🍆Your pp is "+XPneu+"cm big.🍆");
                  
                  }
                  }
                break;

                case ""+Prefix+"FYNNDERWAHRE":
                  SpracheUndSendMessagePerms(0, "Wahre Finns werden mit **y** geschrieben!", "The real Finns are written with a **y**!");
                break;
                case ""+Prefix+"CLEARCHAT":
  
                  if(message.member.hasPermission("ADMINISTRATOR") || message.member.id === "466596723297484810" || message.member.roles.cache.find(r => r.name.toUpperCase() === "MOD") || message.member.roles.cache.find(r => r.toUpperCase() === "MODERATOR")){
                    if(args.length === 2 && isInt(args[1])){
                    if((message.channel.permissionsFor(bot.user).has("MANAGE_MESSAGES"))) {
let a = parseInt(args[1])+1;
let messages = await message.channel.messages.fetch({ limit: a}) // Fetch last 100 messages

message.channel.bulkDelete(messages, true);
                    }else {
                      const randomChannel = message.guild.channels.cache.find(channel => 
                       channel.type === "text" && channel.permissionsFor(bot.user).has("SEND_MESSAGES") && channel.permissionsFor(bot.user).has("VIEW_CHANNEL"));
                
                       con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                         if(err) throw err;
                             if(rows.length >= 1){
                               let language = rows[0].lang;
                               if(language == "de"){
                                 randomChannel.send("Entschuldigen für Störung, aber Jamal bräuchte die Berechtigung MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
                                      
                               }else if(language == "en"){
                                 randomChannel.send("Sorry for disturb, but Jamal would like to get the permission MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
                                      
                               }
                            }else{
                            
                             randomChannel.send("Sorry for disturb, but Jamal would like to get the permission MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
                
                             randomChannel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                            }
                           });
                          }
                 }else{

                  SpracheUndSendMessagePerms(0, "Nutze Clearchat [nummer]!", "Use Clearchat [number]!")
                 }

                  }
                    break;                
      default:

        break; 
       
        


  }
  
//counting anfang

          con.query(`SELECT * FROM CountingChannel WHERE server = '`+message.guild.id+`';`, (err, rows3) => {
       if(err) throw err;
           if(rows3.length >= 1){
             if(rows3[0].channel_id === message.channel.id){
               con.query(`SELECT * FROM Counting WHERE server = '`+message.guild.id+`'`, (err, rows) => {
                 if(err) throw err;
                 
         
                 if(rows.length >= 1){
                   let AktuelleNr = rows[0].nummer2;
                   

                   if(BigInt(AktuelleNr) != null){ 

                    let g1 = BigInt(AktuelleNr).toString();
                         let g = parseInt(g1)+1;   

                    if(args[0] === ""+AktuelleNr+""){

                     
                     f = ''+g;
                     
                     sql = `DELETE FROM Counting WHERE server = '`+message.guild.id+`'`;
                      
                     con.query(sql);

                     sql = `INSERT INTO Counting (nummer2, server) VALUES ('`+f+`', '`+message.guild.id+`');`;
                      
                      lastUser = message.author.id;
                      con.query(sql);
                    }else {
                      
                     if((message.channel.permissionsFor(bot.user).has("MANAGE_MESSAGES"))) {

                       message.delete({ timeout: 1 });
      
                     }else {
                       const randomChannel = message.guild.channels.cache.find(channel => 
                        channel.type === "text" && channel.permissionsFor(bot.user).has("SEND_MESSAGES") && channel.permissionsFor(bot.user).has("VIEW_CHANNEL"));
      
                        con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                          if(err) throw err;
                              if(rows.length >= 1){
                                let language = rows[0].lang;
                                if(language == "de"){
                                  randomChannel.send("Entschuldigen für Störung, aber Jamal bräuchte die Berechtigung MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
                                       
                                }else if(language == "en"){
                                  randomChannel.send("Sorry for disturb, but Jamal would like to get the permission MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
                                       
                                }
                             }else{
                             
                              randomChannel.send("Sorry for disturb, but Jamal would like to get the permission MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
      
                              randomChannel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                             }
                            });
      
                    }
                   }
                  }else{
                    if((message.channel.permissionsFor(bot.user).has("MANAGE_MESSAGES"))) {
  
                      message.delete({ timeout: 1 });
     
                    }else {
                      const randomChannel = message.guild.channels.cache.find(channel => 
                       channel.type === "text" && channel.permissionsFor(bot.user).has("SEND_MESSAGES") && channel.permissionsFor(bot.user).has("VIEW_CHANNEL"));
     
                       con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                         if(err) throw err;
                             if(rows.length >= 1){
                               let language = rows[0].lang;
                               if(language == "de"){
                                 randomChannel.send("Entschuldigen für Störung, aber Jamal bräuchte die Berechtigung MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
                                      
                               }else if(language == "en"){
                                 randomChannel.send("Sorry for disturb, but Jamal would like to get the permission MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
                                      
                               }
                            }else{
                            
                             randomChannel.send("Sorry for disturb, but Jamal would like to get the permission MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
     
                             randomChannel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                            }
                           });
     
                   
                          }
                    sql = `INSERT INTO Counting (nummer2, server) VALUES ('1', '`+message.guild.id+`');`;
                        
                        con.query(sql);
                   }

                 }else{
                  if((message.channel.permissionsFor(bot.user).has("MANAGE_MESSAGES"))) {

                    message.delete({ timeout: 1 });
   
                  }else {
                    const randomChannel = message.guild.channels.cache.find(channel => 
                     channel.type === "text" && channel.permissionsFor(bot.user).has("SEND_MESSAGES") && channel.permissionsFor(bot.user).has("VIEW_CHANNEL"));
   
                     con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                       if(err) throw err;
                           if(rows.length >= 1){
                             let language = rows[0].lang;
                             if(language == "de"){
                               randomChannel.send("Entschuldigen für Störung, aber Jamal bräuchte die Berechtigung MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
                                    
                             }else if(language == "en"){
                               randomChannel.send("Sorry for disturb, but Jamal would like to get the permission MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
                                    
                             }
                          }else{
                          
                           randomChannel.send("Sorry for disturb, but Jamal would like to get the permission MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
   
                           randomChannel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                          }
                         });
   
                 
                        }
                  sql = `INSERT INTO Counting (nummer2, server) VALUES ('1', '`+message.guild.id+`');`;
                      
                      con.query(sql);
                 }
         
         });
             }
            }
         });



//counting ende

//leveing anfang
      if(!message.author.bot){
        let b1 = 0;

        con.query(`SELECT * FROM Togglelevel WHERE server = '`+message.guild.id+`';`, (err, rows) => {
          if(err) throw err;
             if(rows.length >= 1){
               if(rows[0].status === "off"){
                
               }else{
              


        con.query(`SELECT * FROM Leveling WHERE player_id = '`+message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows) => {
          if(err) throw err;
                      

             if(rows.length >= 1){
              let XP = rows[0].xplevel;
              let Gained = Math.floor(Math.random() * 20);
              let Gained10bis30 = Gained + 10;
              let XPneu = (parseInt(XP)) + Gained10bis30;
              
              con.query(`SELECT * FROM LevelingLEVEL WHERE player_id = '`+message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows2) => {
                if(err) throw err;
                   if(rows2.length >= 1){
                    let LevelNR = rows2[0].levelvoll;
                    con.query(`SELECT * FROM LevelCooldown WHERE player_id = '`+ message.author.id+`' AND server_id LIKE '`+message.guild.id+`'`, (err, rows1) => {
                      if(err) throw err;
                      
                       if(rows1.length >= 1){
                              let alteUhr = rows1[0].cooldown;
                              let timen = BigInt(alteUhr);
                              if(BigInt(Date.now()) >= timen){
                                  
                                      let CooldownLevel = rows1[0].cooldown; 
                                      sql = `DELETE FROM LevelCooldown WHERE player_id = '`+ message.author.id+`' AND server_id = '`+message.guild.id+`';`;
                                     
                                      con.query(sql)
                                      let COOLDOWN = Date.now()+CooldownLevel;
                                      sql = `Delete from LevelCooldown WHERE player_id = '`+ message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`;
                                      con.query(sql)
                                      sql = `INSERT INTO LevelCooldown (player_id, cooldown, server_id) VALUES ('`+ message.author.id+`', `+COOLDOWN+`,'`+message.guild.id+`');`;
                                      COOLDOWN = 0;
                                      con.query(sql)
                                      
                                      let b = parseInt(LevelNR);
                                      b1 = b;


                                      if(XPneu >= (200+(200*b))){


                                        SpracheUndSendMessagePerms(1, 'Glückwunsch, <@'+message.author.id+'>! Du hast Level '+(b+1)+' erreicht!', 
                                        'Congratulation, <@'+message.author.id+'>! You reached Level '+(b+1)+'!');
                                        


                                        sql = `UPDATE Leveling SET xplevel = `+(XPneu-(200+(200*b)))+` WHERE player_id = '`+message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`;
                                      con.query(sql);
                                      sql = `DELETE FROM LevelingLEVEL WHERE player_id = '`+message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`;
                                      con.query(sql);
                                    sql = `INSERT INTO LevelingLEVEL (player_id, levelvoll, server_id) VALUES ('`+message.author.id+`', `+(b+1)+`,'`+message.guild.id+`');`;
                                        con.query(sql);
                                      }else {
                                        sql = `UPDATE Leveling SET xplevel = `+XPneu+` WHERE player_id = '`+message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`;
                                      con.query(sql);

                                      }





                                     
                                  }
                                
                                  }else{
                                    sql = `INSERT INTO LevelCooldown (player_id, cooldown, server_id) VALUES ('`+ message.author.id+`', 0,'`+message.guild.id+`');`;
                                    con.query(sql)
                                  }
                                      });

                  }else {
                                      sql = `INSERT INTO LevelingLEVEL (player_id, levelvoll, server_id) VALUES ('`+message.author.id+`', 0,'`+message.guild.id+`');`;
                                        con.query(sql);
                                     }
                                      let COOLDOWN = Date.now()+CooldownLevel;
                                      sql = `Delete from LevelCooldown WHERE player_id = '`+ message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`;
                                      con.query(sql)
                                      sql = `INSERT INTO LevelCooldown (player_id, cooldown, server_id) VALUES ('`+ message.author.id+`', '`+COOLDOWN+`','`+message.guild.id+`');`;
                                      COOLDOWN = 0;
                                      con.query(sql)
                                      
                                     
                                      con.query(sql);

              });
              XP = 0;
            }else{
              sql = `Insert into Leveling values ("`+message.author.id+`", 15, "`+message.guild.id+`");`;
                      
              con.query(sql);
            }
                        });


                  
                        for(let a = 1; a <= b1; a++) {
                          con.query(`SELECT * FROM RollenFürLevel WHERE levelrang = `+b1+` AND server_id = '`+message.guild.id+`'`, (err, rows3) => {
                            if(err) throw err;
                            if(rows3.length >= 1){
                              let ROLLENID = rows3[0].rollen_id;
                              let LevelRolle = message.guild.roles.cache.find((r) => r.id == ""+ROLLENID);
                              if (LevelRolle != null && !message.member.roles.cache.has(LevelRolle)) {
                              message.member.roles.add(LevelRolle);
                              }
                             
                            }

                          });

                        }
                        
                      }
                    }else {
                      sql = `INSERT INTO Togglelevel (server, status) VALUES ('`+message.guild.id+`', "on");`;
                      con.query(sql);
                    }
                    });
              
      }

      
      

});

bot.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.partial) { //this whole section just checks if the reaction is partial
      try {
          await reaction.fetch(); //fetches reaction because not every reaction is stored in the cache
      } catch (error) {
          console.error('Fetching message failed: ', error);
          return;
      }
  }
  if (!user.bot) {
      if (reaction.emoji.id == "831149456325345310") { //if the user reacted with the right emoji

          const role = reaction.message.guild.roles.cache.find(r => r.id === "738166493891788870"); //finds role you want to assign (you could also user .name instead of .id)

          const { guild } = reaction.message //store the guild of the reaction in variable

          const member = guild.members.cache.find(member => member.id === user.id); //find the member who reacted (because user and member are seperate things)

          member.roles.add(role); //assign selected role to member

      }
  }
})

   

bot.login(token)





//INSERT INTO verwarntimes (id, ms) VALUES ('`+ message.author.id+`', '`+times+`')
/* `*Name: *` + message.author.tag + ` \n*Grund für Sündenbock*: **5** mal Spam in #counting \n*Dauer*: 5 bis 10 Minuten, zum runterkommen` */



// const ser = client.users.cache.find(user => user.id === 'USER-ID');

// if (<Message>.mentions.members.size) { // or message.mentions.members.size > 0
  //DO STUFF
//}

/*con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
  if(err) throw err;
  if(rows.length >= 1){
    let language = rows[0].lang;
    if(language == "de"){
      message.channel.send("Bitte wähle ein gültiges Level und Pinge eine Rolle! \n(§level 5 @...)");  

    }else if(language == "en"){
      message.channel.send("Please select a valid Level and mention a role! \n(§level 5 @...)");  

    }
 }else{
  message.channel.send("You're level "+Level+" with "+Experience+"/"+(200+(200*a))+" XP.").then(msg => msg.delete({timeout: 20000}));
  
  message.channel.send('(No Language set! "§lang" as a Administrator!)').then(msg => msg.delete({timeout: 10000}));
 }
});*/