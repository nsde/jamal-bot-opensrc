'use strict';
const Discord = require("discord.js");
const { stat } = require("fs");
const bot = new Discord.Client();
const PREFIX = "De!";
const token = "ODA3MzczOTgyNDExNTIyMDgw.YB3DnQ.Zjk82JnKFOY65DxMuZDmo33zhzg";

const puppeteer = require("puppeteer");
const mysql = require("mysql");
const { format, parse } = require("path");
const { unregisterCustomQueryHandler } = require("puppeteer");
const { type } = require("os");
"Code 5";
var version = '1.3.1';

let lastUser = Discord.User = '';
var f;
var deleteTime = 30000;
let CooldownLevel = 15000;
var Prefix = "§";
var levelingAmount = 200;







function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}


class HashTable {

    table = new Array(100)
    hastString
setItem = (key, value) => {
    
    this.table[key] = value;

};
getItem = (key) => {
    
    return this.table[key];
};
getArray = (irgendwas) => {
    
  return this.table.length;
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


  con.query(`SELECT * FROM Moderation WHERE server = '`+message.guild.id+`';`, (err, rows3) => {
    if(err) throw err;
        if(rows3.length >= 1){
          for(let a = 0; a < rows3.length; a++){
            let myRole = message.guild.roles.cache.get(rows3[a].role);
          if(myRole != undefined){
         }else if(typeof rows3[a].role === 'string' && rows3[a].role != undefined){
          sql = `DELETE FROM Moderation WHERE server = '`+message.guild.id+`' AND role = '`+rows3[a].role+`'`;
                      
          con.query(sql);
          console.log(rows3[a].role)
        }
}
}
});
      

  let status = "0";
  let title = "";
  let modrechte = false;


function TestRechte(){

  if(message.member.hasPermission("ADMINISTRATOR") /*|| message.member.id === "466596723297484810"*/ || message.guild.ownerID === message.author.id ){
      modrechte= true;
                    
  }else {
    con.query(`SELECT * FROM Moderation WHERE server = '`+message.guild.id+`';`, (err, rows3) => {
    if(err) throw err;
    console.log("1");
        if(rows3.length >= 1){
          let a2 = 1;
          for(let a = 0; a < rows3.length; a++){
            
            let myRole = message.guild.roles.cache.get(rows3[a].role);

            if(myRole != undefined){
              console.log(myRole.id);
            for(let num = 0; num <= 100 ; num++){
              
              if (message.member.roles.cache.has(myRole.id)) {
                
            if(a2 === 1){
              a2 = 2;
              
    modrechte = true;
            }
          }
          }
        }else if(typeof rows3[a].role === 'string' && rows3[a].role != undefined){
          sql = `DELETE FROM Moderation WHERE server = '`+message.guild.id+`' AND role = '`+rows3[a].role+`'`;
                      
          con.query(sql);
          console.log(rows3[a].role)
        }

  
           }
           console.log(a2);

if(a2 === 1){
  modrechte = false;
}

        }else{
          modrechte = false;
        }




      });

    }
}

  function SpracheUndSendMessagePerms(frage, deutschh, englischh) {
    
    if(message.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) {
      
      con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
        if(err) throw err;
        
            if(rows.length >= 1){
              
              let language = rows[0].lang;
              if(language == "de"){
                
                if(frage == "1"){
                  
                message.channel.send(deutschh).then(msg => msg.delete({timeout: deleteTime}));
                }else{
                message.channel.send(deutschh);
                
                }
                  
              }else if(language == "en"){
                if(frage == "1"){
                  message.channel.send(englischh).then(msg => msg.delete({timeout: deleteTime}));
                }else{
                message.channel.send(englischh);
                }    
              }
           }else{
           
            if(frage == "1"){
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
if(randomChannel != undefined){
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
}

    function DeleteMessage(anzahl){

      if((message.channel.permissionsFor(bot.user).has("MANAGE_MESSAGES"))) {

        let a = parseInt(anzahl);
        
        message.channel.bulkDelete(a);

      }else {

        SpracheUndSendMessagePerms("0", "Entschuldigen für Störung, aber Jamal bräuchte die Berechtigung MANAGE_MESSAGES, <@"+message.guild.ownerID+">.",
        "Sorry for disturb, but Jamal would like to get the permission MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");

        }
    }
  var SET = "";
    let args = message.content.split(" ");
    
    if(!message.author.bot){

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
        TestRechte();
        con.query(`SELECT * FROM Moderation;`, (err, rows3) => {
          if(err) throw err;

        if(modrechte == true){
        
          if(args.length >= 2){
    if(args[1].toUpperCase() === "SET"){
      
SpracheUndSendMessagePerms("1", "Super! Dies ist nun der Counting Channel!", "Perfect, this is now the counting channel!")

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
      
      SpracheUndSendMessagePerms("1", "Der Counting-Channel ist aus!", "The counting channel is off!")
      
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
          
SpracheUndSendMessagePerms("1", "Der Counting-Fortschritt ist nun auf "+newNumber, "The Counting-Progress is set to "+newNumber);
                        }
                      }
                    });
}else{
  SpracheUndSendMessagePerms("0", "Diese Zahl ist zu groß! Bitte wenden sie sich an @Deniz#5879!", 
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
    }
  });
      break;

      case ""+Prefix+"LANG":
        case ""+Prefix+"LANGUAGE":
        
        TestRechte();
                    con.query(`SELECT * FROM Moderation;`, (err, rows3) => {
                      if(err) throw err;

                    if(modrechte == true){
                    
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
      });
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


SpracheUndSendMessagePerms("0", "Perfekt! Jeder mit dem Level "+args[1]+" bekommt nun die Rolle <@&"+rolle.id+">.", "Perfekt! Now everyone with the Level "+args[1]+" will get the Role <@&"+rolle.id+">.")

        
 }else{
   
                SpracheUndSendMessagePerms("0", "Bitte schreibe "+Prefix+"help für weitere Hilfe!", "Please write "+Prefix+"help for more information!");

        }
      }else{
        if(message.mentions.roles.size == 1){
        let rolle = message.mentions.roles.first();
        
        sql = `INSERT INTO RollenFürLevel (rollen_id, levelrang, server_id) VALUES ('`+rolle.id+`', `+args[1]+`,'`+message.guild.id+`');`;
        con.query(sql)
        SpracheUndSendMessagePerms("0", "Perfekt! Jeder mit dem Level "+args[1]+" bekommt nun die Rolle <@&"+rolle.id+">.", "Perfekt! Now everyone with the Level "+args[1]+" will get the Role <@&"+rolle.id+">.")

       
       }else{


        SpracheUndSendMessagePerms("0", "Bitte schreibe "+Prefix+"help für weitere Hilfe!", "Please write "+Prefix+"help for more information!");

      }
       
    }
      });
    }else if(args.length === 2){
      if(args[1].toUpperCase() === "ON"){
        con.query(`SELECT * FROM Togglelevel WHERE server = '`+message.guild.id+`';`, (err, rows) => {
          if(err) throw err;
             if(rows.length >= 1){
               if(rows[0].status === "on"){
                SpracheUndSendMessagePerms("0", "Das Levelsystem ist zu dem Zeitpunkt aktiviert!", "The leveling-system is currently active!");
                
               }else{
               sql = `DELETE FROM Togglelevel WHERE server = '`+message.guild.id+`';`;
               con.query(sql)
               sql = `INSERT INTO Togglelevel (server, status) VALUES ('`+message.guild.id+`', "on");`;
               con.query(sql)
               SpracheUndSendMessagePerms("0", "Das Levelsystem wurde nun aktiviert!", "The leveling-system is now activated!");
               }
             
            }else{
              sql = `DELETE FROM Togglelevel WHERE server = '`+message.guild.id+`';`;
        con.query(sql)
        sql = `INSERT INTO Togglelevel (server, status) VALUES ('`+message.guild.id+`', "on");`;
        con.query(sql)
        SpracheUndSendMessagePerms("0", "Das Levelsystem wurde nun aktiviert!", "The leveling-system is now activated!");
            }

          });

      }else if(args[1].toUpperCase() === "OFF"){
        con.query(`SELECT * FROM Togglelevel WHERE server = '`+message.guild.id+`';`, (err, rows) => {
          if(err) throw err;
             if(rows.length >= 1){
               if(rows[0].status === "off"){
                SpracheUndSendMessagePerms("0", "Das Levelsystem ist zu dem Zeitpunkt deaktiviert!", "The leveling-system is currently deactived!");
                
               }else{
               sql = `DELETE FROM Togglelevel WHERE server = '`+message.guild.id+`';`;
               con.query(sql)
               sql = `INSERT INTO Togglelevel (server, status) VALUES ('`+message.guild.id+`', "off");`;
               con.query(sql)
               SpracheUndSendMessagePerms("0", "Das Levelsystem wurde nun deaktiviert!", "The leveling-system is now deactivated!");
               }
             
            }else{
              sql = `DELETE FROM Togglelevel WHERE server = '`+message.guild.id+`';`;
        con.query(sql)
        sql = `INSERT INTO Togglelevel (server, status) VALUES ('`+message.guild.id+`', "off");`;
        con.query(sql)
        SpracheUndSendMessagePerms("0", "Das Levelsystem wurde nun deaktiviert!", "The leveling-system is now deactivated!");
            }

          });
      }


    }else{
      SpracheUndSendMessagePerms("0", "Bitte schreibe "+Prefix+"help für weitere Hilfe!", "Please write "+Prefix+"help for more information!");

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
  SpracheUndSendMessagePerms("0", "User nicht gefunden. (Wenn du deine XP wissen, schreibe NUR §leveling!)", "User not found. (If you want to know your XP, you just need to type §leveling!)");
  
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
                      SpracheUndSendMessagePerms("0", "Der Spieler <@"+taggesUsa.id+"> ist Level "+Level+" mit "+Experience+"/"+(levelingAmount+(levelingAmount*Level))+" XP.",
                      "The User <@"+taggesUsa.id+"> is level "+Level+" with "+Experience+"/"+(levelingAmount+(levelingAmount*Level))+" XP.");
                      
                    
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
                      
                      SpracheUndSendMessagePerms("0", "Du bist Level "+Level+" mit "+Experience+"/"+(levelingAmount+(levelingAmount*Level))+" XP.",
                    "You're level "+Level+" with "+Experience+"/"+(levelingAmount+(levelingAmount*Level))+" XP.");

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
                                  
              
                                  SpracheUndSendMessagePerms("0", "Der Spieler <@"+taggesUsa.id+"> ist Level "+Level+" mit "+Experience+"/"+(levelingAmount+(levelingAmount*Level))+" XP.",
                                  "The User <@"+taggesUsa.id+"> is level "+Level+" with "+Experience+"/"+(levelingAmount+(levelingAmount*Level))+" XP.");
                                }          

   break;
            case ""+Prefix+"HELP":

              SpracheUndSendMessagePerms("0", 
                "```PREFIX: "+Prefix+" \n \n{} = Ping , [] = Argumente (auch optional), () = Argumente (Eingabe erfordert), ~: Für User mit Admin-Perms oder Mod-Perms ("+Prefix+"mod roles)! "+
                "\n \n~...mod (add/remove) {@role}: Füge ein Rolle hinzu, welche die ~-Commands bedienen können, oder entferne eine Rolle! "+
                "\n...mod roles: Lasse dir anzeigen, welche Rollen die Rechte auf ~-Commands haben! "+
                        "\n \n~...level (LevelNr) (@role):Stelle ein, ab welchem Level man welche Rolle bekommt (Beispiel: "+Prefix+"level 5 {@Level5})"+
                        "\n~...level (on/off): Stelle das Leveling-System ein/aus! (Standart: Aktiv)"+
                        "\n...leveling {@User}: Sieh, auf welchem Level du bist (oder jemand anderes.)"+
                        "\n \n~...counting (set/off|[Nummer]): Setze diesen Channel zum Counting Channel deines Servers oder setze den Counting-Fortschritt \n(ab 1 MIO müsste @Deniz#5879 kontaktiert werden). "+
                       
                        "\n~...clearchat/cc (Anzahl): Lösche eine gewisse Anzahl an Nachrichten in einem Channel. "+
                        
                        "\n~...lang: Setze die Sprache auf deinem Server. (Beispiel: "+Prefix+"lang de)"+
                        "\n...embed: Erstelle ein Custom Embed! (Folge die Schritte, die dir der Bot sagt!)"+
                        "\n(Schreibe 'cancel' um die Generation abzubrechen!)"+
//oder warte 20 Sekunden
                        "\n \nJOKE COMMANDS:"+
                        "\n \n...pp @{player}: Checke die Schw*nzlänge von... dir oder einem User "+
                        "\n...lauch @{player}: Zu wieviel Prozent bist du/jemand anderes ein Lauch?``` ",
                
                "```PREFIX: "+Prefix+"\n \n{} = Ping, [] = Argument (also optional), () = Argument (needed), ~: for user with Admins-perms or Mod-Perms ("+Prefix+"mod roles)!  "+
                "\n \n~...mod (add/remove) {@role}: Add a role, which has the permission to execute the ~-Commands, or remove this role! "+
                "\n...mod roles: Show, which roles have the permission to execute the ~-Commands!"+
                        "\n \n~...level (LevelNo) (@role): Setup with level a player will get which role (usage: "+Prefix+"level 5 {@Level5})"+
                        "\n~...level (on/off): De/activate the leveling system! (usually active)"+
                        "\n...leveling {@user}: See what level you are (or someone else.)"+
                        "\n \n~...counting (set/off|[number]): Set this channel to your Counting Channel in this Servers or set the Counting-Progress \n(You need to contact @Deniz#5879 to set the Progress over 1 mio). "+
                        "\n~...clearchat/cc (amount): Delete a specific amount of messages in a channel. "+
                        "\n~...lang : Set the language of the bot on your server. (usage: "+Prefix+"lang de)"+
                        "\n...embed: Create a Custom Embed! (Follow the steps the bot is saying to you!)"+
                        "\n(Type 'cancel' to cancel the generation!)"+
                        //or wait 20 seconds  
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
                  SpracheUndSendMessagePerms("0", "🥬Der User <@"+taggedUser.id+"> ist zu "+XPneu+"% ein Lauch.🥬",
                  "🥬The User <@"+taggedUser.id+"> has a "+XPneu+"% possibility to be a leek.🥬");

                  
              //}
              }else {
               // if(message.author.id == "466596723297484810"){
               //   message.channel.send("🥬Du bist zu 0% ein Lauch.🥬");
               // }else{

                let Gained = Math.floor(Math.random() * 100);
                let XPneu = (parseInt(Gained));
                SpracheUndSendMessagePerms("0", "🥬Du bist zu "+XPneu+"% ein Lauch.🥬",
                "🥬You have a "+XPneu+"% possibility to be a leek.🥬");
              }
                //}
              break;

              case ""+Prefix+"PP":
                
                      if(message.mentions.members.size >= 1){
                  const taggedUser = message.mentions.members.first();
                  if(taggedUser.id == "466596723297484810"){
                    SpracheUndSendMessagePerms("0", "🍆<@"+taggedUser.id+">'s pp ist 25cm groß.🍆",
                    "🍆<@"+taggedUser.id+">'s pp is 25cm big.🍆");
                  }else{
  
                    let Gained = Math.floor(Math.random() * 20);
                    let XPneu = (parseInt(Gained));
                    SpracheUndSendMessagePerms("0", "🍆<@"+taggedUser.id+">'s pp ist "+XPneu+"cm groß.🍆",
                    "🍆<@"+taggedUser.id+">'s pp is "+XPneu+"cm big.🍆");

                }
                }else {
                  if(message.author.id == "466596723297484810"){
                    

                    SpracheUndSendMessagePerms("0", "🍆Dein pp ist 25cm groß.🍆", "🍆Your pp is 25cm big.🍆");
                  }else{
  
                    let Gained = Math.floor(Math.random() * 20);
                    let XPneu = (parseInt(Gained));
                    SpracheUndSendMessagePerms("0", "🍆Dein pp ist "+XPneu+"cm groß.🍆", "🍆Your pp is "+XPneu+"cm big.🍆");
                  
                  }
                  }
                break;
                
           
               
                case ""+Prefix+"RESET":
                  if(message.author.id == "466596723297484810"){
                   
                  client.destroy();
                  }
            break;

                case ""+Prefix+"FYNNDERWAHRE":
                  SpracheUndSendMessagePerms("0", "Wahre Finns werden mit **y** geschrieben!", "The real Finns are written with a **y**!");
                break;
                case ""+Prefix+"CLEARCHAT":
                  case ""+Prefix+"CC":
  
                  TestRechte();
                    con.query(`SELECT * FROM Moderation;`, (err, rows3) => {
                      if(err) throw err;

                    if(modrechte == true){
                     if(args.length === 2 && isInt(args[1])){
                      let a = parseInt(args[1])+1;
                      if(a >= 1 && a <= 99){
                      DeleteMessage(a);
                      }else{
                        SpracheUndSendMessagePerms("0", "Bitte wähle eine Zahl zwischen 1 und 99!", "Please select a number between 1 and 99!")
                      }


                 }else{

                  SpracheUndSendMessagePerms("0", "Nutze Clearchat [Anzahl]!", "Use Clearchat [amount]!")
                 }

                  }
                });
                    break;                
     
                    case ""+Prefix+"EMBED":
                
                      if(args.length == 1){
                        con.query(`SELECT * FROM EmbedGen WHERE server = '`+message.guild.id+`' AND player_id = '`+message.author.id+`' AND channelsend_id = '`+message.channel.id+`';`, (err, rows3) => {
                          if(err) throw err;
                              if(rows3.length >= 1){

                        }else{

                          if(message.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) {
                           status = "1";
                                                    }
                          SpracheUndSendMessagePerms("1", "Bitte Pinge den Channel, in dem dieser Embed reingesendet werden soll, <@"+message.author.id+">!", "Please mention a channel, where this Embed should be sent to, <@"+message.author.id+">!");
                          

                        }
                      
                    });

                  }


                break;
                case ""+Prefix+"MOD":
                  
                  if(message.mentions.roles.size == 1 && args[1].toUpperCase() === "ADD"){

                    TestRechte();
                    con.query(`SELECT * FROM Moderation;`, (err, rows3) => {
                      if(err) throw err;

                    if(modrechte == true){
                    
                    let modrole = message.mentions.roles.first();
                    
                    con.query(`SELECT * FROM Moderation WHERE server = '`+message.guild.id+`' AND role = '`+modrole.id+`';`, (err, rows3) => {
                      if(err) throw err;
                          if(rows3.length >= 1){
                            SpracheUndSendMessagePerms("1", "Diese Rolle ist schon eine Moderations-Rolle!", "This roles is alrady added as a moderation role!")
                            
                          }else {
                            sql = `INSERT INTO Moderation (server, role) VALUES ('`+message.guild.id+`', '`+modrole.id+`');`;
                      
                            con.query(sql);
                            SpracheUndSendMessagePerms("1", "Perfekt! Diese Rolle kann nun auf die Mod-Commands von Jamal zugreifen!", 
                            "Perfect! This role is now allowed to use the moderation-commands of Jamal!")
                            }
                        });
                      }

                    });
                  }else if(message.mentions.roles.size == 1 && args[1].toUpperCase() === "REMOVE"){

                    
                    TestRechte();
                    con.query(`SELECT * FROM Moderation;`, (err, rows3) => {
                      if(err) throw err;

                    if(modrechte == true){
                    
                    let modrole2 = message.mentions.roles.first();
                    
                    con.query(`SELECT * FROM Moderation WHERE server = '`+message.guild.id+`' AND role = '`+modrole2.id+`';`, (err, rows3) => {
                      if(err) throw err;
                          if(rows3.length >= 1){
                            sql = `DELETE FROM Moderation WHERE server = '`+message.guild.id+`' AND role = '`+modrole2.id+`';`;
                      
                            con.query(sql);
                            SpracheUndSendMessagePerms("1", "Diese Rolle wurde nun von den Moderations-Rollen entfernt!", 
                            "This role is now removed of the moderation-roles!");
                          }else {
                            SpracheUndSendMessagePerms("1", "Diese Rolle ist nicht eingespeichert!",
                            "This role ist not saved as a Moderation-Role!");
                            
                            }
                        });
                      }
                    });


                  }else if(args.length === 2 && args[1].toUpperCase() === "ROLES"){ 

                    con.query(`SELECT * FROM Moderation WHERE server = '`+message.guild.id+`';`, (err, rows3) => {
                      if(err) throw err;
                          if(rows3.length >= 1){
                            let ab = "";
                            for(let a = 0; a < rows3.length; a++){
                              ab = ab + "<@&"+rows3[a].role+"> \n";
                            }
                            
                             
                            SpracheUndSendMessagePerms("0", "Folgende Rollen haben die Berechtigungen für die Moderations-Commands: \n"+ab,
                             "Following roles have the permission to use the Moderation-Commands: \n"+ab)

                          }else {
                            
                console.log("4");
                    SpracheUndSendMessagePerms("0", "Es sind keine Moderationsrollen eingestellt!", "There are no Moderation-roles saved!")



                          }
                        });

                  }else{
                    SpracheUndSendMessagePerms("0", "Bitte markiere nur eine Rolle, um diese als Moderations-Rolle hinzuzufügen!",
                    "Please mention a role, to add it to the Moderation-roles!")
                  }


            break;

                    default:break; 
       
        

  }
}
//counting anfang

          con.query(`SELECT * FROM CountingChannel WHERE server = '`+message.guild.id+`';`, (err, rows3) => {
       if(err) throw err;
           if(rows3.length >= 1){
             if(rows3[0].channel_id === message.channel.id){
               if(!(lastUser === message.author.id)){
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

                      if((message.channel.permissionsFor(bot.user).has("MANAGE_CHANNELS"))) {
                        message.channel.setTopic("Aktuelle Zahl: "+f);
                        }else{
                            const randomChannel = message.guild.channels.cache.find(channel => 
                            channel.type === "text" && channel.permissionsFor(bot.user).has("SEND_MESSAGES") && channel.permissionsFor(bot.user).has("VIEW_CHANNEL"));
                            if(randomChannel != undefined){
                            con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                              if(err) throw err;
                                  if(rows.length >= 1){
                                    let language = rows[0].lang;
                                    if(language == "de"){
                                      randomChannel.send("Entschuldigen für Störung, aber Jamal bräuchte die Berechtigung MANAGE_CHANNELS, <@"+message.guild.ownerID+">.");
                                           
                                    }else if(language == "en"){
                                      randomChannel.send("Sorry for disturb, but Jamal would like to get the permission MANAGE_CHANNELS, <@"+message.guild.ownerID+">.");
                                           
                                    }
                                 }else{
                                 
                                  randomChannel.send("Sorry for disturb, but Jamal would like to get the permission MANAGE_CHANNELS, <@"+message.guild.ownerID+">.");
          
                                  randomChannel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                                 }
                                });
                              }
  
                        }

                    }else {
                      
                      DeleteMessage(1);

                   }
                  }else{
                    if((message.channel.permissionsFor(bot.user).has("MANAGE_MESSAGES"))) {
  
                      message.delete({ timeout: 1 });

                     

                    }else {
                      const randomChannel = message.guild.channels.cache.find(channel => 
                       channel.type === "text" && channel.permissionsFor(bot.user).has("SEND_MESSAGES") && channel.permissionsFor(bot.user).has("VIEW_CHANNEL"));
                       if(randomChannel != undefined){
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
                    sql = `INSERT INTO Counting (nummer2, server) VALUES ('1', '`+message.guild.id+`');`;
                        
                        con.query(sql);
                   }

                 }else{
                  DeleteMessage(1);

                  sql = `INSERT INTO Counting (nummer2, server) VALUES ('1', '`+message.guild.id+`');`;
                      
                      con.query(sql);
                 }
                
         });
             }else{
              DeleteMessage(1);
             }
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


                                      if(XPneu >= (levelingAmount+(levelingAmount*b))){


                                        SpracheUndSendMessagePerms(1, 'Glückwunsch, <@'+message.author.id+'>! Du hast Level '+(b+1)+' erreicht!', 
                                        'Congratulation, <@'+message.author.id+'>! You reached Level '+(b+1)+'!');
                                        


                                        sql = `UPDATE Leveling SET xplevel = `+(XPneu-(levelingAmount+(levelingAmount*b)))+` WHERE player_id = '`+message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`;
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
//lvling ende

//Embed start
      if(!message.author.bot){
      con.query(`SELECT * FROM EmbedGen WHERE server = '`+message.guild.id+`' AND player_id = '`+message.author.id+`' AND channelsend_id = '`+message.channel.id+`';`, (err, rows3) => {
        if(err) throw err;
            if(rows3.length >= 1){
              let status2 = rows3[0].status;
              if(status2 === "1"){
                if(args.length === 1){
                if(message.mentions.channels.size === 1){
                  let channelid3 = message.mentions.channels.first();
                  if(channelid3.permissionsFor(message.author).has("SEND_MESSAGES")){

                    if(message.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) {
                      status = "2";
                    }
                    
                  SpracheUndSendMessagePerms("1", "Perfekt! Was soll nun als Titel dort stehen, <@"+message.author.id+">?", "Perfect! What should the title be, <@"+message.author.id+">?")
                  
                    
                  }else{
                    SpracheUndSendMessagePerms("1", "Entschuldige, aber du musst einen Channel pingen, in dem du Rechte hast, reinzuschreiben!",
                    "I am sorry, but you need to mention a channel, where you have the permission to send messages!");
                    
                  sql = `DELETE FROM EmbedGen WHERE server = '`+message.guild.id+`' AND player_id = '`+message.author.id+`' AND channelsend_id = "`+message.channel.id+`";`;
                      
                  con.query(sql);
                  }


                  }else{

                  DeleteMessage(1);
                  SpracheUndSendMessagePerms("1", "Embed-Generation gecancelled! Bitte Pinge nächstes mal einfach nur einen Channel, <@"+message.author.id+">!",
                  "Embed-Generation cancelled! Please mention only a channel next time, <@"+message.author.id+">!");

                  sql = `DELETE FROM EmbedGen WHERE server = '`+message.guild.id+`' AND player_id = '`+message.author.id+`' AND channelsend_id = "`+message.channel.id+`";`;
                      
                  con.query(sql);
                }
              }else{
                
                sql = `DELETE FROM EmbedGen WHERE server = '`+message.guild.id+`' AND player_id = '`+message.author.id+`' AND channelsend_id = "`+message.channel.id+`";`;
                      
                con.query(sql);
                SpracheUndSendMessagePerms("1", "Embed-Generation gecancelled! Bitte Pinge nächstes mal einfach nur einen Channel, <@"+message.author.id+">!",
                "Embed-Generation cancelled! Please mention only a channel next time, <@"+message.author.id+">!");
                
  sql = `DELETE FROM EmbedGen WHERE server = '`+message.guild.id+`' AND player_id = '`+message.author.id+`' AND channelsend_id = "`+message.channel.id+`";`;
                      
  con.query(sql);
              }
              
              }else if(status2 === "2"){
if(args[0] != "cancel"){
               for(let a = 0; a < args.length; a++){
                 title = title + args[a] + " ";
               }

               
               if(message.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) {
                status = "3";
              }
                SpracheUndSendMessagePerms("1", "Alles klar! Jetzt musst du nur noch eingeben, was der Text sein soll, <@"+message.author.id+">!",
                "All right! Now, in this last step, you need to write the text, <@"+message.author.id+">!")
            }else{

          SpracheUndSendMessagePerms("1", "Embed-Generation gecancelled!", "Embed-Generation cancelled!");
              sql = `DELETE FROM EmbedGen WHERE server = '`+message.guild.id+`' AND player_id = '`+message.author.id+`' AND channelsend_id = "`+message.channel.id+`";`;
                      
              con.query(sql);

              if((message.channel.permissionsFor(bot.user).has("MANAGE_MESSAGES"))) {
                


                let a = message.channel.messages.fetch({ limit: 100 });
                (async function() { 
                   let KA;
                   KA = await a;
                   let a2 = 0;
                   let msg1;let msg2;let msg3;
                   
                   for(let a = 0; a < 100; a++){
                     if(a2 < 3){
                     if(KA.array()[a].author.id == message.author.id){
                   a2++;
                   if(a2===1){
                     msg1 = KA.array()[a];
   
                   }else if(a2===2){
                     msg2 = KA.array()[a];
   
                   }else if(a2===3){
                     msg3 = KA.array()[a];
   
                   }
                   
                     }
                 
                 }
                   }
 
                   msg1.delete();msg2.delete();msg3.delete();
   
                 })();
              }else {
        
                SpracheUndSendMessagePerms("0", "Entschuldigen für Störung, aber Jamal bräuchte die Berechtigung MANAGE_MESSAGES, <@"+message.guild.ownerID+">.",
                "Sorry for disturb, but Jamal would like to get the permission MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
        
                }



            }
              }else if(status2 === "3"){
                

                if(args[0] != "cancel"){


                  for(let a = 0; a < args.length; a++){
                    title = title + args[a] + " ";
                  }
                  if(message.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) {
                    status = "4";
                  }
                }else{

                SpracheUndSendMessagePerms("1", "Embed-Generation gecancelled!", "Embed-Generation cancelled!");
                      
                sql = `DELETE FROM EmbedGen WHERE server = '`+message.guild.id+`' AND player_id = '`+message.author.id+`' AND channelsend_id = "`+message.channel.id+`";`;
                              
                con.query(sql);
                      if((message.channel.permissionsFor(bot.user).has("MANAGE_MESSAGES"))) {
                        
                        let a = message.channel.messages.fetch({ limit: 100 });
                        (async function() { 
                           let KA;
                           KA = await a;
                           let a2 = 0;
                           let msg1;let msg2;let msg3;let msg4;
                           
                           for(let a = 0; a < 100; a++){
                             if(a2 < 4){
                             if(KA.array()[a].author.id == message.author.id){
                           a2++;
                           if(a2===1){
                             msg1 = KA.array()[a];
           
                           }else if(a2===2){
                             msg2 = KA.array()[a];
           
                           }else if(a2===3){
                             msg3 = KA.array()[a];
           
                           }else if(a2===4){
                            msg4 = KA.array()[a];
          
                          }
                           
                             }
                         
                         }
                           }
         
                           msg1.delete();msg2.delete();msg3.delete();msg4.delete();
           
                         })();
                      }else {
                
                        SpracheUndSendMessagePerms("0", "Entschuldigen für Störung, aber Jamal bräuchte die Berechtigung MANAGE_MESSAGES, <@"+message.guild.ownerID+">.",
                        "Sorry for disturb, but Jamal would like to get the permission MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
                
                        }
                   }
                

               }

      }
    
  });
}

con.query(`SELECT * FROM EmbedGen WHERE server = '`+message.guild.id+`' AND player_id = '`+message.author.id+`' AND channelsend_id = '`+message.channel.id+`';`, (err, rows3) => {
  if(err) throw err;
  
if(status === "1"){
  
  sql = `INSERT INTO EmbedGen (server, status, player_id, channelsend_id) VALUES ('`+message.guild.id+`', '1','`+message.author.id+`' , '`+message.channel.id+`');`;
  con.query(sql);
}else if(status === "2"){

  
  sql = `DELETE FROM EmbedGen WHERE server = '`+message.guild.id+`' AND player_id = '`+message.author.id+`' AND channelsend_id = "`+message.channel.id+`";`;
                      
  con.query(sql);
  let channelid = message.mentions.channels.first().id;
  sql = `INSERT INTO EmbedGen (server, status,player_id, channelsend_id, channel_id) VALUES ('`+message.guild.id+`', '2','`+message.author.id+`' , '`+message.channel.id+`', '`+channelid+`');`;
  con.query(sql);
}else if(status === "3"){

  
  con.query(`SELECT * FROM EmbedGen WHERE server = '`+message.guild.id+`' AND player_id = '`+message.author.id+`' AND channelsend_id = '`+message.channel.id+`';`, (err, rows3) => {
    if(err) throw err;
        if(rows3.length >= 1){
let channelidd = rows3[0].channel_id;

sql = `DELETE FROM EmbedGen WHERE server = '`+message.guild.id+`' AND player_id = '`+message.author.id+`'  AND channelsend_id = "`+message.channel.id+`";`;
                      
con.query(sql);
          sql = `INSERT INTO EmbedGen (server, status, player_id, channelsend_id, channel_id, title) VALUES ('`+message.guild.id+`', '3','`+message.author.id+`', '`+message.channel.id+`', '`+channelidd+`', '`+title+`');`;
          con.query(sql);
        }
      });
}else if(status === "4"){

  
  con.query(`SELECT * FROM EmbedGen WHERE server = '`+message.guild.id+`' AND player_id = '`+message.author.id+`' AND channelsend_id = '`+message.channel.id+`';`, (err, rows3) => {
    if(err) throw err;
        if(rows3.length >= 1){
let channelidd = rows3[0].channel_id;
let titlee = rows3[0].title;


const exampleEmbed = new Discord.MessageEmbed()
.setColor('#ff0000')
	.setTitle(titlee)
	.setDescription(title)
  
	.setFooter('Created by '+message.author.tag);

  
    if(message.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) {
      
      con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
        if(err) throw err;
        
            if(rows.length >= 1){
              let channel = message.guild.channels.cache.get(channelidd)
              
                channel.send(exampleEmbed);
            }else{
              let channel = message.guild.channels.cache.get(channelidd)
                channel.send(exampleEmbed);
                channel.send('(No Language set! "'+Prefix+'lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
           }
          });

    }else {
      const randomChannel = message.guild.channels.cache.find(channel => 
        channel.type === "text" && channel.permissionsFor(bot.user).has("SEND_MESSAGES") && channel.permissionsFor(bot.user).has("VIEW_CHANNEL"));
        if(randomChannel != undefined){
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

sql = `DELETE FROM EmbedGen WHERE server = '`+message.guild.id+`' AND player_id = '`+message.author.id+`' AND channelsend_id = "`+message.channel.id+`";`;
                      
con.query(sql);

        }
      });
}

});

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