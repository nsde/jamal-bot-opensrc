'use strict';
const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = "De!";
const token = "ODA3MzczOTgyNDExNTIyMDgw.YB3DnQ.Zjk82JnKFOY65DxMuZDmo33zhzg";

const mysql = require("mysql");
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
    con.query("SHOW TABLES", console.log);


});
let sql;



/*con.on('error', function(err) {
  console.log(err.code);
  con.connect(err => {
    if(err) throw err;
    console.log("Connected To Database!");
    con.query("SHOW TABLES", console.log);


});
});*/



bot.on("ready", () => {
    console.log('Der Bot ist nun aktiv')
    
    con.query(`SELECT * FROM Counting WHERE server = '566311931174977536'`, (err, rows) => {
      if(err) throw err;
      var add = rows[0].nummer2;
console.log(add);
       f = ''+add;
      // f = ''+4254; 
       console.log(f);

    });
    if(1 < 70){
      //let deepthroater =  message.guild.roles.cache.find((r) => r.id == "811308167312310384");
      AlleRollen.setItem("1", "811308167312310384");
    //     let deepthroat =  message.guild.roles.cache.find((r) => r.id == "810867968669122592");
         AlleRollen.setItem("2", "810867968669122592");
    //     let saftig =  message.guild.roles.cache.find((r) => r.id == "810867745138147339");
         AlleRollen.setItem("3", "810867745138147339");
    //     let Konsument =  message.guild.roles.cache.find((r) => r.id == "806249624477892628");
         AlleRollen.setItem("4", "806249624477892628");
    //     let DJ =  message.guild.roles.cache.find((r) => r.id == "805468116376879105");
         AlleRollen.setItem("5", "805468116376879105");
    //     let godzillaarmy =  message.guild.roles.cache.find((r) => r.id == "804687585389576255");
         AlleRollen.setItem("6", "804687585389576255");
    //     let monkearmy =  message.guild.roles.cache.find((r) => r.id == "804687429273255936");
         AlleRollen.setItem("7", "804687429273255936");
    //     let Zivilist =  message.guild.roles.cache.find((r) => r.id == "738166654579769398");
         AlleRollen.setItem("8", "738166654579769398");
    //     let influencer =  message.guild.roles.cache.find((r) => r.id == "808747963005927453");
         AlleRollen.setItem("9", "808747963005927453");
    //     let Streamer =  message.guild.roles.cache.find((r) => r.id == "738166085756518472");
         AlleRollen.setItem("10", "738166085756518472");
    //     let Zitatrat =  message.guild.roles.cache.find((r) => r.id == "772866877520609330");
         AlleRollen.setItem("11", "772866877520609330");
    //     let Julian =  message.guild.roles.cache.find((r) => r.id == "796783125802778635");
         AlleRollen.setItem("12", "796783125802778635");
    //     let monke =  message.guild.roles.cache.find((r) => r.id == "803938408924840026");
         AlleRollen.setItem("13", "803938408924840026");
    //     let nosiris1  =  message.guild.roles.cache.find((r) => r.id == "738166493891788870");
         AlleRollen.setItem("14", "738166493891788870");
    //     let osiris2 =  message.guild.roles.cache.find((r) => r.id == "738166576100016158");
         AlleRollen.setItem("15", "738166576100016158");
    //     let penner =  message.guild.roles.cache.find((r) => r.id == "772796199270744094");
         AlleRollen.setItem("16", "772796199270744094");
    //     let junkie =  message.guild.roles.cache.find((r) => r.id == "803939687881900042");
         AlleRollen.setItem("17", "803939687881900042");
    //     let geierr =  message.guild.roles.cache.find((r) => r.id == "738165766750339118");
         AlleRollen.setItem("18", "738165766750339118");
    //     let bruhplayer =  message.guild.roles.cache.find((r) => r.id == "738168309450801214");
    //     AlleRollen.setItem("19", "738168309450801214");
    //     let advancedplayer =  message.guild.roles.cache.find((r) => r.id == "738167850820304947");
     //    AlleRollen.setItem("20", "738167850820304947");
     //  let schwitzer =  message.guild.roles.cache.find((r) => r.id == "738165647904735253");
         AlleRollen.setItem("21", "738165647904735253");
   //      let versuchkanin =  message.guild.roles.cache.find((r) => r.id == "738165457600643102");
         AlleRollen.setItem("22", "738165457600643102");
   //      let goodplayer =  message.guild.roles.cache.find((r) => r.id == "738167848450654311");
         AlleRollen.setItem("23", "738167848450654311");
   //      let simp =  message.guild.roles.cache.find((r) => r.id == "807347397545295893");
         AlleRollen.setItem("24", "807347397545295893");
   //      let egoist =  message.guild.roles.cache.find((r) => r.id == "809844245916811315");
         AlleRollen.setItem("25", "809844245916811315");
   //      let krasserdude =  message.guild.roles.cache.find((r) => r.id == "725644608817594369");
         AlleRollen.setItem("26", "725644608817594369");
   //      let proplayer =  message.guild.roles.cache.find((r) => r.id == "738167647845220373");
         AlleRollen.setItem("27", "738167647845220373");
   //      let epic =  message.guild.roles.cache.find((r) => r.id == "738167478969958540");
         AlleRollen.setItem("28", "738167478969958540");
   //      let ccreator =  message.guild.roles.cache.find((r) => r.id == "738167207250493512");
         AlleRollen.setItem("29", "738167207250493512");
   //      let jamal =  message.guild.roles.cache.find((r) => r.id == "738165327208382526");
         AlleRollen.setItem("30", "738165327208382526");
   //      let zitatneuling =  message.guild.roles.cache.find((r) => r.id == "771746486534144001");
         AlleRollen.setItem("31", "771746486534144001");
   //      let milchmann =  message.guild.roles.cache.find((r) => r.id == "810644243272958032");
         AlleRollen.setItem("32", "810644243272958032");
   //      let häschen =  message.guild.roles.cache.find((r) => r.id == "810898112176455750");
         AlleRollen.setItem("33", "810898112176455750");
// 
 //        let skilledcreat =  message.guild.roles.cache.find((r) => r.id == "738167382236987393");
         AlleRollen.setItem("34", "738167382236987393");
 //        let zitatlehr =  message.guild.roles.cache.find((r) => r.id == "771747194481934358");
         AlleRollen.setItem("35", "771747194481934358");
 //        let entertainer =  message.guild.roles.cache.find((r) => r.id == "772469144876220417");
         AlleRollen.setItem("36", "772469144876220417");
 //        let schwarzk =  message.guild.roles.cache.find((r) => r.id == "780444449455996988");
         AlleRollen.setItem("37", "780444449455996988");
 //        let vortex =  message.guild.roles.cache.find((r) => r.id == "807323291760197652");
         AlleRollen.setItem("38", "807323291760197652");
 //        let ultIrgend =  message.guild.roles.cache.find((r) => r.id == "738164668975153202");
         AlleRollen.setItem("39", "738164668975153202");
         
//         let hacker =  message.guild.roles.cache.find((r) => r.id == "810462641541742593");
         AlleRollen.setItem("40", "810462641541742593");
//         let zitatmeist =  message.guild.roles.cache.find((r) => r.id == "771747967375114260");
         AlleRollen.setItem("41", "771747967375114260");
//         let zodiac =  message.guild.roles.cache.find((r) => r.id == "738165238926671882");
         AlleRollen.setItem("42", "738165238926671882");
//         let lost =  message.guild.roles.cache.find((r) => r.id == "807322175589318708");
         AlleRollen.setItem("43", "807322175589318708");
//         let banane =  message.guild.roles.cache.find((r) => r.id == "809844601505972264");
         AlleRollen.setItem("44", "809844601505972264");
//         let unsym =  message.guild.roles.cache.find((r) => r.id == "807322604439732244");
         AlleRollen.setItem("45", "807322604439732244");
//         let cringe =  message.guild.roles.cache.find((r) => r.id == "803940379509391410");
         AlleRollen.setItem("46", "803940379509391410");
//         let gestLeg =  message.guild.roles.cache.find((r) => r.id == "803938930906365962");
         AlleRollen.setItem("47", "803938930906365962");
//         let lebenLeg =  message.guild.roles.cache.find((r) => r.id == "725644917417967627");
         AlleRollen.setItem("48", "725644917417967627");
//         let zuhälter =  message.guild.roles.cache.find((r) => r.id == "772469685940649996");
         AlleRollen.setItem("49", "772469685940649996");
//         let dealer =  message.guild.roles.cache.find((r) => r.id == "807324385404387338");
         AlleRollen.setItem("50", "807324385404387338");
//         let psycho =  message.guild.roles.cache.find((r) => r.id == "772468900327063572");
         AlleRollen.setItem("51", "772468900327063572");
//         let soziopath =  message.guild.roles.cache.find((r) => r.id == "807323676869525535");
         AlleRollen.setItem("52", "807323676869525535");
//         let verified =  message.guild.roles.cache.find((r) => r.id == "803941502237671434");
         AlleRollen.setItem("53", "803941502237671434");
         
 //        let stripper =  message.guild.roles.cache.find((r) => r.id == "809843408025157632");
         AlleRollen.setItem("54", "809843408025157632");
 //        let zitatlegende =  message.guild.roles.cache.find((r) => r.id == "771748685154353193");
         AlleRollen.setItem("55", "771748685154353193");
 //        let judge =  message.guild.roles.cache.find((r) => r.id == "807618754665381918");
         AlleRollen.setItem("56", "807618754665381918");
        AlleRollen.setItem("57", "771623021025689610");
 //        let manager =  message.guild.roles.cache.find((r) => r.id == "807323649434452041");
         AlleRollen.setItem("58", "807323649434452041");
 //        let sup =  message.guild.roles.cache.find((r) => r.id == "807323015481524275");
         AlleRollen.setItem("59", "807323015481524275");
 //        let elite =  message.guild.roles.cache.find((r) => r.id == "803940877130399785");
         AlleRollen.setItem("60", "803940877130399785");
 //        let veteran =  message.guild.roles.cache.find((r) => r.id == "808689728764510269");
         AlleRollen.setItem("61", "808689728764510269");
 //        let contentcreat =  message.guild.roles.cache.find((r) => r.id == "808690081778106368");
         AlleRollen.setItem("62", "808690081778106368");
 //        let respectedMemb =  message.guild.roles.cache.find((r) => r.id == "808694261062303754");
         AlleRollen.setItem("63", "808694261062303754");
 //        let bl =  message.guild.roles.cache.find((r) => r.id == "808694672636903434");
         AlleRollen.setItem("64", "808694672636903434");
          AlleRollen.setItem("20", "808694870491136051");
         AlleRollen.setItem("19", "808695151081685063");
  }
    
    bot.user.setActivity('Type §help for help', {type: 'STREAMING'}).catch(console.error)

})


/*bot.on('messageDelete', messageDelete => {
  
  console.log("4");
  if(messageDelete.author.bot == false){
    
    console.log("5");
  if(messageDelete.channel.id == '807326959679176724'){
    
    console.log("6");
  let channel = messageDelete.channel;
  var a = parseInt(f);
  var b = a-1;
  var c = b+'';
  if(messageDelete.content == c){
  channel.send("<@"+messageDelete.author.id+ "> => "+messageDelete.content); 
  }
  }
}

});*/

bot.on('message', async message =>{

    

  var SET = "";
    
    let args = message.content.split(" ");
    if(message.channel.id === '827514965996339222'){
      switch(args[0]){

        case "!verify":
          message.delete({ timeout: 1 })
          const taggedUser2 = message.mentions.members.first();
          let Suro =  message.guild.roles.cache.find((r) => r.id == "827515886927478805");
          let Mitglied =  message.guild.roles.cache.find((r) => r.id == "827516317476061195");
          taggedUser2.roles.remove(Mitglied);
          taggedUser2.roles.add(Suro);
          message.channel.send("Neuer Spieler: \n<@"+taggedUser2.id+">.");
                                                  
        break;
           
        default:
          if(message.author.bot){

          }else{
            message.delete({ timeout: 1 })
          }
      }
      
    }else if(message.channel.id === '827514965996339223'){
      switch(args[0]){

        case "]verify":
           message.delete({ timeout: 1 })
          const exampleEmbed = new Discord.MessageEmbed()
          .setColor('#ffa600')
          .setTitle('Verify')
          .setAuthor(message.author.username+'')
          .setDescription('DM <@466596723297484810>')
          .setThumbnail('https://i.imgur.com/wSTFkRM.png')
          
          .addField('Verifizieren', 'Damit ich verifizieren kann ob du ein Member vom Projekt bist, schick mir bitte ein Screenshot (Wie Bild oben) um zu beweisen, dass der Account dir gehört.', true)
          
          .setTimestamp()
          .setFooter(''+message.author.username+'');
        
                
                message.channel.send(exampleEmbed);
                break;
        default:
          if(message.author.bot){

          }else{
            message.delete({ timeout: 1 })
          }
      }
      
    }else if(message.channel.id === '807326959679176724'){
        //message.channel.lastMessage;
        // Deal with command
        let sunde =  message.guild.roles.cache.find((r) => r.id == "772467882508156928");




        con.query(`SELECT * FROM verwarntimes WHERE id = '`+ message.author.id+`'`, (err, rows) => {
            if(err) throw err;
            
           
                if(rows.length >= 1){      
                    let alteUhr = rows[0].ms;
                    const timen = BigInt(alteUhr);
                    
                    if(BigInt(Date.now()-300000) >= timen){
                        if (message.member.roles.cache.has(sunde.id)) {
                            message.member.roles.remove(sunde);
                            }  
                        sql = `DELETE FROM verwarntimes WHERE id = '`+ message.author.id+`'`;
                       
                        switch(args[0]){
                            case "IUz8z8dsfwf<BIZ(z78&":
                                message.delete({ timeout: 1 });
                                message.member.roles.remove(sunde);
                            break;
                            case f:

                                    if(message.author.tag != lastUser.tag){
                                        
                                       // if(myTable.getItem(message.author.tag) >= 5){
                                       //     message.delete({ timeout: 1 })
                                       //     message.author.send("Du bist verwarnt! Du kannst nicht mehr in #counting schreiben. Bitte melde dich bei @Deniz#5879");
                                       // }else{
                                
                                            
                                
                                
                                        con.query(`SELECT * FROM Counting WHERE server = '`+message.guild.id+`'`, (err, rows) => {
                                        if(err) throw err;
                                        
                                
                                
                                            
                                    
                                        
                    
                                        let nummer = rows[0].nummer2;
                                            
                                        if(f == "4000" || f == "5000" || f == "6000"|| f == "7000"|| f == "8000"|| f == "9000"
                                        || f == "10000"|| f == "11000"|| f == "12000"|| f == "13000"|| f == "14000"|| f == "15000"
                                        || f == "20000"|| f == "25000"|| f == "30000"|| f == "40000"|| f == "50000"|| f == "60000"|| f == "69420"){
                                            message.pin();
                                        }
                                        var test = args[0].split('');
                      for(var o = 0; o < 10 ; o++) {
                        let t = o+1;
 

}
                                            g = parseInt(f, 10)+1;
                                            f = ''+g;
                                            
                                            console.log(""+f);
                                            sql = `UPDATE Counting SET nummer2 = `+f+` WHERE server = '`+message.guild.id+`'`;
                                             lastUser = message.author;
                                             lastUser = message.author;
                                             con.query(sql);
                                
                                
                                });
                                   
                                    //sql = `UPDATE nummber set nummber = `+a+` `;
                                    
                                        
                                }else{var warns = myTable.getItem(message.author.tag);
                                    
                                    message.delete({ timeout: 1 })}


                                    break;
                                
                    
                    
                                    default:
                                      
                                        message.delete({ timeout: 1 }) //Supposed to delete message
                                        if(myTable.getItem(message.author.tag)){
                                        var warns = myTable.getItem(message.author.tag);
                                            myTable.setItem(message.author.tag, warns+1);
                                            
                                        }else{myTable.setItem(message.author.tag, 1);console.log('Code 7')}
                                    
                                    
                                        if((myTable.getItem(message.author.tag) >= 3) && (myTable.getItem(message.author.tag) <= 3)){
                                            
                                            con2.query(`SELECT * FROM verwarnungen WHERE id = '`+ message.author.id+`'`, (err, rows) => {
                                                if(err) throw err;
                                                console.log(''+message.author.id);
                                                console.log("code 8");
                                                    if(rows < 1){
                                                        sql = `INSERT INTO verwarnungen VALUES ('`+ message.author.id+`', 1)`;
                                                        con.query(sql);
                                                         bot.channels.cache.get("807619390279254047").send("*Name:* <@" + message.author.id + "> \n*Grund für Sündenbock*: Spam in <#807326959679176724> \n*Dauer*:  5 Minuten (nach 5 Minuten !Sündenbock in <#773446927710552094>).");
                                                        myTable.setItem(message.author.tag, 0);
                                                        con.query(sql);
                                                    lastUser = message.author;

                                                    if (!(message.member.roles.cache.has(sunde.id))) {
                                                        message.member.roles.add(sunde);
                                                        }  
                                                        console.log("code 9");
                                                        sql = `INSERT INTO playerrolle (id) VALUES ('`+message.author.id+`')`;
                                                        con.query(sql, console.log);
                                                        let gasd = "";
                                                        for(var i = 1; i < 66; i++){
                                      
                                                          var a = AlleRollen.getItem(''+i);
                                                          let abc =  message.guild.roles.cache.find((r) => r.id == a);
                                                        
                                                          if(1 < 2){
                                                          if(i == 1){ 
                                                             SET = "a"; 
                                                            }else if(i == 2){ 
                                                             SET = "b";  }else if(i == 3){ 
                                                             SET = "c";  }else if(i == 4){ 
                                                             SET = "d"; }else if(i == 5){
                                                              
                                                             SET = "e";  }else if(i == 6){
                                                             SET = "f"; }else if(i == 7){
                                                             SET = "g"; }else if(i == 8){
                                                             SET = "h"; }else if(i == 9){
                                                              SET = "i"; }else if(i == 10){
                                                               SET = "j";  }else if(i == 11){
                                                              SET= "k"; }else if(i == 12){
                                                               SET = "l"; }else if(i == 13){
                                                             SET = "m";  }else if(i == 14){
                                                              SET = "n"; }else if(i == 15){
                                                                SET = "o"; }else if(i == 16){
                                                                  SET = "p";  }else if(i == 17){
                                                                    SET = "q";  }else if(i == 18){
                                                                      SET = "r";  }else if(i == 19){
                                                                        SET = "s"; }else if(i == 20){
                                                                          SET = "t";  }else if(i == 21){
                                                                            SET = "u";  }else if(i == 22){
                                                                              SET = "v"; }else if(i == 23){
                                                                                SET = "w";  }else if(i == 24){
                                                                                  SET = "x";  }else if(i == 25){
                                                                                    SET = "y"; }else if(i == 26){
                                                                                      SET = "z";}else if(i == 27){
                                                                                        SET = "aa"; }else if(i == 28){
                                                                                          SET = "ab"; }else if(i == 29){
                                                                                            SET = "ac";}else if(i == 30){
                                                                                              SET = "ad"; }else if(i == 31){
                                                                                                SET = "ae";  }else if(i == 32){
                                                                                                  SET = "af";  }else if(i == 33){
                                                                                                    SET = "ag"; }else if(i == 34){
                                                                                                      SET = "ah"; }else if(i == 35){
                                                                                                        SET = "ai"; }else if(i == 36){
                                                                                                          SET = "aj"; }else if(i == 37){
                                                               SET = "ak"; }else if(i == 38){
                                                                SET = "al"; }else if(i == 39){
                                                                  SET = "am"; }else if(i == 40){
                                                                    SET = "an";}else if(i == 41){
                                                                      SET = "ao";}else if(i == 42){
                                                                        SET = "ap";}else if(i == 43){
                                                                          SET = "aq"; }else if(i == 44){
                                                                            SET = "ar"; }else if(i == 45){
                                                                              SET = "ass";}else if(i == 46){
                                                                                SET = "at"; }else if(i == 47){
                                                                                  SET = "au";}else if(i == 48){
                                                                                    SET = "av"; }else if(i == 49){
                                                                                      SET = "aw"; }else if(i == 50){
                                                                                        SET = "ax";}else if(i == 51){
                                                                                          SET = "ay";  }else if(i == 52){
                                                                                            SET = "az";}else if(i == 53){
                                                                                              SET = "ba";}else if(i == 54){
                                                                                                SET = "bb"; }else if(i == 55){
                                                                                                  SET = "bc";}else if(i == 56){
                                                                                                    SET = "bd"; }else if(i == 57){
                                                                                                      SET = "be";}else if(i == 58){
                                                                                                        SET = "bf";}else if(i == 59){
                                                                                                          SET = "bg";}else if(i == 60){
                                                                                                            SET = "bh";}else if(i == 61){
                                                                                                              SET = "bi";}else if(i == 62){
                                                                                                                SET = "bj"; }else if(i == 63){
                                                                                                                  SET = "bk"; }else if(i == 64){
                                                                                                                    SET = "bl";}else if(i == 65){
                                                                                                                      SET = "bm"; }else if(i == 66){
                                                                                                                        SET = "bn"; }else if(i == 67){
                                                                                                                          SET = "bo";}else if(i == 68){
                                                                                                                            SET = "bp";}else if(i == 69){
                                                                                                                              SET = "bq"; }else if(i == 70){
                                                                                                                                SET = "br";}else if(i == 71){
                                                                                                                                  SET = "bs";}    }         
                    
                                                          if(message.member.roles.cache.has(abc.id)){
                                                            
                                                            sql = `UPDATE playerrolle SET `+SET+`=`+a+` WHERE id='`+message.author.id+`'`;
                                                            message.member.roles.remove(abc);
                                                            
                                                          }else {
                                                            sql = `UPDATE playerrolle SET `+SET+`='0' WHERE id='`+message.author.id+`'`;
                                                          } 
                                                          console.log(i+" penis "+SET);
                                                          con.query(sql);
                                                        
                                                      }     
                                    console.log("code 10");
                                                    const time = Date.now()+300000;
                                                    const times = ''+time;
                                                    
                                                    sql = `INSERT INTO verwarntimes (id, ms) VALUES ('`+ message.author.id+`', '`+times+`')`;
                                                    con.query(sql);
                                                    
                                                    
                                                    }else{
                                                        let warnings = rows[0].number;
                                                    
                                               vb = parseInt(warnings, 10)+1;
                                                  vb2 = ''+vb;
                                                  bot.channels.cache.get("807619390279254047").send("*Name:* <@" + message.author.id + "> \n*Grund für Sündenbock*: Spam in <#807326959679176724> \n*Dauer*:  5 Minuten (nach 5 Minuten !Sündenbock in <#773446927710552094>).");
                                                  myTable.setItem(message.author.tag, 0);
                                                  sql = `INSERT INTO playerrolle (id) VALUES ('`+message.author.id+`')`;
                                                        con.query(sql);
                                                        let gasd = "";
                                                        for(var i = 1; i < 66; i++){
                                      
                                                          var a = AlleRollen.getItem(''+i);
                                                          let abc =  message.guild.roles.cache.find((r) => r.id == a);
                                                        
                                                          if(1 < 2){
                                                          if(i == 1){ 
                                                             SET = "a"; 
                                                            }else if(i == 2){ 
                                                             SET = "b";  }else if(i == 3){ 
                                                             SET = "c";  }else if(i == 4){ 
                                                             SET = "d"; }else if(i == 5){
                                                              
                                                             SET = "e";  }else if(i == 6){
                                                             SET = "f"; }else if(i == 7){
                                                             SET = "g"; }else if(i == 8){
                                                             SET = "h"; }else if(i == 9){
                                                              SET = "i"; }else if(i == 10){
                                                               SET = "j";  }else if(i == 11){
                                                              SET= "k"; }else if(i == 12){
                                                               SET = "l"; }else if(i == 13){
                                                             SET = "m";  }else if(i == 14){
                                                              SET = "n"; }else if(i == 15){
                                                                SET = "o"; }else if(i == 16){
                                                                  SET = "p";  }else if(i == 17){
                                                                    SET = "q";  }else if(i == 18){
                                                                      SET = "r";  }else if(i == 19){
                                                                        SET = "s"; }else if(i == 20){
                                                                          SET = "t";  }else if(i == 21){
                                                                            SET = "u";  }else if(i == 22){
                                                                              SET = "v"; }else if(i == 23){
                                                                                SET = "w";  }else if(i == 24){
                                                                                  SET = "x";  }else if(i == 25){
                                                                                    SET = "y"; }else if(i == 26){
                                                                                      SET = "z";}else if(i == 27){
                                                                                        SET = "aa"; }else if(i == 28){
                                                                                          SET = "ab"; }else if(i == 29){
                                                                                            SET = "ac";}else if(i == 30){
                                                                                              SET = "ad"; }else if(i == 31){
                                                                                                SET = "ae";  }else if(i == 32){
                                                                                                  SET = "af";  }else if(i == 33){
                                                                                                    SET = "ag"; }else if(i == 34){
                                                                                                      SET = "ah"; }else if(i == 35){
                                                                                                        SET = "ai"; }else if(i == 36){
                                                                                                          SET = "aj"; }else if(i == 37){
                                                               SET = "ak"; }else if(i == 38){
                                                                SET = "al"; }else if(i == 39){
                                                                  SET = "am"; }else if(i == 40){
                                                                    SET = "an";}else if(i == 41){
                                                                      SET = "ao";}else if(i == 42){
                                                                        SET = "ap";}else if(i == 43){
                                                                          SET = "aq"; }else if(i == 44){
                                                                            SET = "ar"; }else if(i == 45){
                                                                              SET = "ass";}else if(i == 46){
                                                                                SET = "at"; }else if(i == 47){
                                                                                  SET = "au";}else if(i == 48){
                                                                                    SET = "av"; }else if(i == 49){
                                                                                      SET = "aw"; }else if(i == 50){
                                                                                        SET = "ax";}else if(i == 51){
                                                                                          SET = "ay";  }else if(i == 52){
                                                                                            SET = "az";}else if(i == 53){
                                                                                              SET = "ba";}else if(i == 54){
                                                                                                SET = "bb"; }else if(i == 55){
                                                                                                  SET = "bc";}else if(i == 56){
                                                                                                    SET = "bd"; }else if(i == 57){
                                                                                                      SET = "be";}else if(i == 58){
                                                                                                        SET = "bf";}else if(i == 59){
                                                                                                          SET = "bg";}else if(i == 60){
                                                                                                            SET = "bh";}else if(i == 61){
                                                                                                              SET = "bi";}else if(i == 62){
                                                                                                                SET = "bj"; }else if(i == 63){
                                                                                                                  SET = "bk"; }else if(i == 64){
                                                                                                                    SET = "bl";}else if(i == 65){
                                                                                                                      SET = "bm"; }else if(i == 66){
                                                                                                                        SET = "bn"; }else if(i == 67){
                                                                                                                          SET = "bo";}else if(i == 68){
                                                                                                                            SET = "bp";}else if(i == 69){
                                                                                                                              SET = "bq"; }else if(i == 70){
                                                                                                                                SET = "br";}else if(i == 71){
                                                                                                                                  SET = "bs";}    }         
                    
                                                          if(message.member.roles.cache.has(abc.id)){
                                                            
                                                            sql = `UPDATE playerrolle SET `+SET+`=`+a+` WHERE id='`+message.author.id+`'`;
                                                            message.member.roles.remove(abc);
                                                            
                                                          }else {
                                                            sql = `UPDATE playerrolle SET `+SET+`='0' WHERE id='`+message.author.id+`'`;
                                                          } 
                                                          console.log(i+" penis "+SET);
                                                          con.query(sql);
                                                        
                                                      }   
                                                  
                                                  
                                                  
                                                  /////////////////////////////////////////////

                                                                                                            
                    
                    
                                                   // sql2 = `UPDATE verwarnungen SET number = `+vb2+` WHERE id = '`+ message.author.id+`'`;
                                                    con.query(sql);
                                                    lastUser = message.author;
                                                    if (!(message.member.roles.cache.has(sunde.id))) {
                                                        message.member.roles.add(sunde);
                                                        }                                      
                                                    const time = Date.now()+300000;
                                                    const times = ''+time;
                                                    
                                                    sql = `INSERT INTO verwarntimes (id, ms) VALUES ('`+ message.author.id+`', '`+times+`')`;
                                                    
                                                    con.query(sql);
                    
                    
                    
                                                }
                                                     
                                                
                                                
                                        });
                                          
                                        }
                                        
                                       
                                        
                        
                                break;
                                }



                        
                    }else {
                        
                             
                    message.delete({ timeout: 1 });

                    }
                    
                }else {
                    
                 switch(args[0]){
                  case f:
                    console.log("code 6");

                      if(message.author.tag != lastUser.tag){
                          
                         // if(myTable.getItem(message.author.tag) >= 5){
                         //     message.delete({ timeout: 1 })
                         //     message.author.send("Du bist verwarnt! Du kannst nicht mehr in #counting schreiben. Bitte melde dich bei @Deniz#5879");
                         // }else{
                  
                              
                  
                  
                          con.query(`SELECT * FROM Counting WHERE server = '`+message.guild.id+`'`, (err, rows) => {
                          if(err) throw err;
                          
                              
                          if(f == "4000" || f == "5000" || f == "6000"|| f == "7000"|| f == "8000"|| f == "9000"
                          || f == "10000"|| f == "11000"|| f == "12000"|| f == "13000"|| f == "14000"|| f == "15000"
                          || f == "20000"|| f == "25000"|| f == "30000"|| f == "40000"|| f == "50000"|| f == "60000"|| f == "69420"){
                              message.pin();
                          }
                          
                        var test = args[0].split('');
                      for(var o = 0; o < 10 ; o++) {
                        let t = o+1;

}
                              let g = parseInt(f, 10)+1;
                              f = ''+g;
                              sql = `UPDATE Counting SET nummer2 = `+f+` WHERE server = '`+message.guild.id+`'`;
                               lastUser = message.author;
                               lastUser = message.author;
                               con.query(sql);
                  
            
            });
               
                //sql = `UPDATE nummber set nummber = `+a+` `;
                
                    
            }else{var warns = myTable.getItem(message.author.tag);
                
                message.delete({ timeout: 1 })}
                
                break;
            


                default:
                  if(message.author.bot == false){
                    
                    message.delete({ timeout: 1 }) //Supposed to delete message
                    if(myTable.getItem(message.author.tag)){
                    var warns = myTable.getItem(message.author.tag);
                        myTable.setItem(message.author.tag, warns+1);
                        
                    }else{myTable.setItem(message.author.tag, 1);}
                
                
                    if((myTable.getItem(message.author.tag) >= 3) && (myTable.getItem(message.author.tag) <= 3)){
                        
                        con2.query(`SELECT * FROM verwarnungen WHERE id = '`+ message.author.id+`'`, (err, rows) => {
                            if(err) throw err;
                            
                                if(rows < 1){
                                    sql = `INSERT INTO verwarnungen VALUES ('`+ message.author.id+`', 1)`;
                                    con.query(sql);
                                    bot.channels.cache.get("807619390279254047").send("*Name:* <@" + message.author.id + "> \n*Grund für Sündenbock*: Spam in <#807326959679176724> \n*Dauer*:  5 Minuten (nach 5 Minuten !Sündenbock in <#773446927710552094>).");
                                    myTable.setItem(message.author.tag, 0);
                                    con.query(sql);
                                lastUser = message.author;
                                if (!(message.member.roles.cache.has(sunde.id))) {
                                    message.member.roles.add(sunde);
                                    }
                                    sql = `INSERT INTO playerrolle (id) VALUES ('`+message.author.id+`')`;
                                                        con.query(sql, console.log);
                                                        let gasd = "";
                                                        for(var i = 1; i < 65; i++){
                                      
                                                          var a = AlleRollen.getItem(''+i);
                                                          let abc =  message.guild.roles.cache.find((r) => r.id == a);
                                                        
                                                          if(1 < 2){
                                                          if(i == 1){ 
                                                             SET = "a"; 
                                                            }else if(i == 2){ 
                                                             SET = "b";  }else if(i == 3){ 
                                                             SET = "c";  }else if(i == 4){ 
                                                             SET = "d"; }else if(i == 5){
                                                              
                                                             SET = "e";  }else if(i == 6){
                                                             SET = "f"; }else if(i == 7){
                                                             SET = "g"; }else if(i == 8){
                                                             SET = "h"; }else if(i == 9){
                                                              SET = "i"; }else if(i == 10){
                                                               SET = "j";  }else if(i == 11){
                                                              SET= "k"; }else if(i == 12){
                                                               SET = "l"; }else if(i == 13){
                                                             SET = "m";  }else if(i == 14){
                                                              SET = "n"; }else if(i == 15){
                                                                SET = "o"; }else if(i == 16){
                                                                  SET = "p";  }else if(i == 17){
                                                                    SET = "q";  }else if(i == 18){
                                                                      SET = "r";  }else if(i == 19){
                                                                        SET = "s"; }else if(i == 20){
                                                                          SET = "t";  }else if(i == 21){
                                                                            SET = "u";  }else if(i == 22){
                                                                              SET = "v"; }else if(i == 23){
                                                                                SET = "w";  }else if(i == 24){
                                                                                  SET = "x";  }else if(i == 25){
                                                                                    SET = "y"; }else if(i == 26){
                                                                                      SET = "z";}else if(i == 27){
                                                                                        SET = "aa"; }else if(i == 28){
                                                                                          SET = "ab"; }else if(i == 29){
                                                                                            SET = "ac";}else if(i == 30){
                                                                                              SET = "ad"; }else if(i == 31){
                                                                                                SET = "ae";  }else if(i == 32){
                                                                                                  SET = "af";  }else if(i == 33){
                                                                                                    SET = "ag"; }else if(i == 34){
                                                                                                      SET = "ah"; }else if(i == 35){
                                                                                                        SET = "ai"; }else if(i == 36){
                                                                                                          SET = "aj"; }else if(i == 37){
                                                               SET = "ak"; }else if(i == 38){
                                                                SET = "al"; }else if(i == 39){
                                                                  SET = "am"; }else if(i == 40){
                                                                    SET = "an";}else if(i == 41){
                                                                      SET = "ao";}else if(i == 42){
                                                                        SET = "ap";}else if(i == 43){
                                                                          SET = "aq"; }else if(i == 44){
                                                                            SET = "ar"; }else if(i == 45){
                                                                              SET = "ass";}else if(i == 46){
                                                                                SET = "at"; }else if(i == 47){
                                                                                  SET = "au";}else if(i == 48){
                                                                                    SET = "av"; }else if(i == 49){
                                                                                      SET = "aw"; }else if(i == 50){
                                                                                        SET = "ax";}else if(i == 51){
                                                                                          SET = "ay";  }else if(i == 52){
                                                                                            SET = "az";}else if(i == 53){
                                                                                              SET = "ba";}else if(i == 54){
                                                                                                SET = "bb"; }else if(i == 55){
                                                                                                  SET = "bc";}else if(i == 56){
                                                                                                    SET = "bd"; }else if(i == 57){
                                                                                                      SET = "be";}else if(i == 58){
                                                                                                        SET = "bf";}else if(i == 59){
                                                                                                          SET = "bg";}else if(i == 60){
                                                                                                            SET = "bh";}else if(i == 61){
                                                                                                              SET = "bi";}else if(i == 62){
                                                                                                                SET = "bj"; }else if(i == 63){
                                                                                                                  SET = "bk"; }else if(i == 64){
                                                                                                                    SET = "bl";}else if(i == 65){
                                                                                                                      SET = "bm"; }else if(i == 66){
                                                                                                                        SET = "bn"; }else if(i == 67){
                                                                                                                          SET = "bo";}else if(i == 68){
                                                                                                                            SET = "bp";}else if(i == 69){
                                                                                                                              SET = "bq"; }else if(i == 70){
                                                                                                                                SET = "br";}else if(i == 71){
                                                                                                                                  SET = "bs";}    }         
                    
                                                          if(message.member.roles.cache.has(abc.id)){
                                                            
                                                            sql = `UPDATE playerrolle SET `+SET+`=`+a+` WHERE id='`+message.author.id+`'`;
                                                            message.member.roles.remove(abc);
                                                            
                                                          }else {
                                                            sql = `UPDATE playerrolle SET `+SET+`='0' WHERE id='`+message.author.id+`'`;
                                                          } 
                                                          console.log(i+" penis "+SET);
                                                          con.query(sql);
                                                        
                                                      }  
                                const time = Date.now()+300000;
                                const times = ''+time;
                                console.log("code 15");
                                sql = `INSERT INTO verwarntimes (id, ms) VALUES ('`+ message.author.id+`', '`+times+`')`;
                                
                                con.query(sql);
                                
                                }else{
                                    let warnings = rows[0].number;
                                
                                    vb = parseInt(warnings, 10)+1;
                                    vb2 = ''+vb;
                                    bot.channels.cache.get("807619390279254047").send("*Name:* <@" + message.author.id + "> \n*Grund für Sündenbock*: Spam in <#807326959679176724> \n*Dauer*:  5 Minuten (nach 5 Minuten !Sündenbock in <#773446927710552094>).");
                                    myTable.setItem(message.author.tag, 0);
                              


                                sql = `UPDATE verwarnungen SET number = `+vb2+` WHERE id = '`+ message.author.id+`'`;
                                con.query(sql);
                                lastUser = message.author;
                                if (!(message.member.roles.cache.has(sunde.id))) {
                                    message.member.roles.add(sunde);
                                }     
                                    sql = `INSERT INTO playerrolle (id) VALUES ('`+message.author.id+`')`;
                                    con.query(sql);
                                    let gasd = "";
                                    
                                    for(var i = 1; i < 65; i++){
                                      
                                      var a = AlleRollen.getItem(''+i);
                                      let abc =  message.guild.roles.cache.find((r) => r.id == a);
                                    
                                      if(1 < 2){
                                      if(i == 1){ 
                                         SET = "a"; 
                                        }else if(i == 2){ 
                                         SET = "b";  }else if(i == 3){ 
                                         SET = "c";  }else if(i == 4){ 
                                         SET = "d"; }else if(i == 5){
                                          
                                         SET = "e";  }else if(i == 6){
                                         SET = "f"; }else if(i == 7){
                                         SET = "g"; }else if(i == 8){
                                         SET = "h"; }else if(i == 9){
                                          SET = "i"; }else if(i == 10){
                                           SET = "j";  }else if(i == 11){
                                          SET= "k"; }else if(i == 12){
                                           SET = "l"; }else if(i == 13){
                                         SET = "m";  }else if(i == 14){
                                          SET = "n"; }else if(i == 15){
                                            SET = "o"; }else if(i == 16){
                                              SET = "p";  }else if(i == 17){
                                                SET = "q";  }else if(i == 18){
                                                  SET = "r";  }else if(i == 19){
                                                    SET = "s"; }else if(i == 20){
                                                      SET = "t";  }else if(i == 21){
                                                        SET = "u";  }else if(i == 22){
                                                          SET = "v"; }else if(i == 23){
                                                            SET = "w";  }else if(i == 24){
                                                              SET = "x";  }else if(i == 25){
                                                                SET = "y"; }else if(i == 26){
                                                                  SET = "z";}else if(i == 27){
                                                                    SET = "aa"; }else if(i == 28){
                                                                      SET = "ab"; }else if(i == 29){
                                                                        SET = "ac";}else if(i == 30){
                                                                          SET = "ad"; }else if(i == 31){
                                                                            SET = "ae";  }else if(i == 32){
                                                                              SET = "af";  }else if(i == 33){
                                                                                SET = "ag"; }else if(i == 34){
                                                                                  SET = "ah"; }else if(i == 35){
                                                                                    SET = "ai"; }else if(i == 36){
                                                                                      SET = "aj"; }else if(i == 37){
                                           SET = "ak"; }else if(i == 38){
                                            SET = "al"; }else if(i == 39){
                                              SET = "am"; }else if(i == 40){
                                                SET = "an";}else if(i == 41){
                                                  SET = "ao";}else if(i == 42){
                                                    SET = "ap";}else if(i == 43){
                                                      SET = "aq"; }else if(i == 44){
                                                        SET = "ar"; }else if(i == 45){
                                                          SET = "ass";}else if(i == 46){
                                                            SET = "at"; }else if(i == 47){
                                                              SET = "au";}else if(i == 48){
                                                                SET = "av"; }else if(i == 49){
                                                                  SET = "aw"; }else if(i == 50){
                                                                    SET = "ax";}else if(i == 51){
                                                                      SET = "ay";  }else if(i == 52){
                                                                        SET = "az";}else if(i == 53){
                                                                          SET = "ba";}else if(i == 54){
                                                                            SET = "bb"; }else if(i == 55){
                                                                              SET = "bc";}else if(i == 56){
                                                                                SET = "bd"; }else if(i == 57){
                                                                                  SET = "be";}else if(i == 58){
                                                                                    SET = "bf";}else if(i == 59){
                                                                                      SET = "bg";}else if(i == 60){
                                                                                        SET = "bh";}else if(i == 61){
                                                                                          SET = "bi";}else if(i == 62){
                                                                                            SET = "bj"; }else if(i == 63){
                                                                                              SET = "bk"; }else if(i == 64){
                                                                                                SET = "bl";}else if(i == 65){
                                                                                                  SET = "bm"; }else if(i == 66){
                                                                                                    SET = "bn"; }else if(i == 67){
                                                                                                      SET = "bo";}else if(i == 68){
                                                                                                        SET = "bp";}else if(i == 69){
                                                                                                          SET = "bq"; }else if(i == 70){
                                                                                                            SET = "br";}else if(i == 71){
                                                                                                              SET = "bs";}    }         

                                      if(message.member.roles.cache.has(abc.id)){
                                        
                                        sql = `UPDATE playerrolle SET `+SET+`=`+a+` WHERE id='`+message.author.id+`'`;
                                        message.member.roles.remove(abc);
                                        
                                      }else {
                                        sql = `UPDATE playerrolle SET `+SET+`='0' WHERE id='`+message.author.id+`'`;
                                      } 
                                      console.log(i+" penis "+SET);
                                      con.query(sql);
                                    
                                  }                         
                                const time = Date.now()+300000;
                                const times = ''+time;
                                
                                sql = `INSERT INTO verwarntimes (id, ms) VALUES ('`+ message.author.id+`', '`+times+`')`;
                                console.log("code 17");
                                con.query(sql);


                            }
                                 
                            
                            
                    });
                      
                    }
                    
                   
                    
                  }
            break;
             }
            }
        });
                 
            
    
        
      }else if(message.channel.id === '807619390279254047'){
        
        let sunde =  message.guild.roles.cache.find((r) => r.id == "772467882508156928");
        switch(args[0]){

          case "*warn":
             message.delete({ timeout: 1 })
          var message5 = " ";
          var a1 = 0;
          var Zeit = 0;
          var BanSuffix = " ";
          if(message.mentions.members.first()){
          var taggedUser2 = message.mentions.members.first();
          }else {const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffa600')
            .setTitle('Nutzung *warn')
            .setURL('https://www.thisworldthesedays.com/command-description-userdeniz1.html')
            .setAuthor(message.author.username+'')
            .setDescription('*warn @(user) (Dauer z.B. 14m oder 5h) (Begründung)')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            
            .addField('.', 'Bitte bei Problemen <@466596723297484810> DMen!', true)
            .addField('Gültige Dauern', 'Tag - D; Stunde - h; Minute - m; sekunde - s', true)
            .setTimestamp()
            .setFooter(''+message.author.username+'');
          
                  
                  message.channel.send(exampleEmbed);break;}

          if(args.length <= 2){
            
            
            const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#ffa600')
	.setTitle('Nutzung *warn')
	.setURL('https://www.thisworldthesedays.com/command-description-userdeniz1.html')
	.setAuthor(message.author.username+'')
	.setDescription('*warn @(user) (Dauer z.B. 14m oder 5h) (Begründung)')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
  .addField('Gültige Dauern', 'Tag - D; Stunde - h; Minute - m; sekunde - s', true)
	
	.addField('.', 'Bitte bei Problemen <@466596723297484810> DMen!', true)
	.setTimestamp()
	.setFooter(''+message.author.username+'');

        
        message.channel.send(exampleEmbed);

            break;
          }


          var penim = '';
          var penis='';
          
          var test = args[2].split('');
          for(jj = 0; jj < test.length; jj++){
          if(isInt(test[jj])){
          penim = penim + '' + test[jj]
          
          }else if(test[jj] == "m"){
            BanSuffix = "Minuten";
            Zeit = penis*60000;
            a1 === 1;
            jj == 9999;
          }else if(test[jj] == "s"){
            a1 === 2;
            BanSuffix = "Sekunden";
            Zeit = penis*1000;
            jj == 9999;
          }else if(test[jj] == "h"){
            a1 === 3;
            BanSuffix = "Stunden";
            Zeit = penis*3600000;
            jj == 9999;
          }else if(test[jj] == "d"){
            a1 === 4;
            BanSuffix = "Tage";
            Zeit = penis*86400000;
            jj == 9999;
          }else{
            const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#ffa600')
      .setTitle('Nutzung *warn')
      .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO')
      .setAuthor(message.author.username+'')
      .setDescription('*warn @(user) (Dauer z.B. 14m oder 5h) (Begründung)')
      .setThumbnail('https://i.imgur.com/wSTFkRM.png')
      
      .addField('.', 'Bitte bei Problemen <@466596723297484810> DMen!', true)
      .addField('Gültige Dauern', 'Tag - D; Stunde - h; Minute - m; sekunde - s', true)
      .setTimestamp()
      .setFooter('<@'+message.author.id+'>');
    
            
            message.channel.send(exampleEmbed);
    
            console.log("code 5");
            break;
          }
          penis = parseInt(penim);
          }
          var LogNRNR;
          con.query(`SELECT * FROM maxLogNR WHERE server = 'Kaan'`, (err, rows) => {
            if(err) throw err;
            LogNR = rows[0].lognr;
            LogNRNR = parseInt(LogNR);
            
            sql = `Update maxLogNR set lognr = '`+(LogNRNR+1)+`' WHERE server = 'Kaan'`;
            con.query(sql, console.log);
          });
          const time = Date.now()+Zeit;
          const times = ''+time;
          
          console.log(Zeit);
          console.log(time);
          console.log(times);
          console.log(taggedUser2.id);
          sql = `INSERT INTO verwarntimes (id, ms) VALUES ('`+ taggedUser2.id+`', '`+times+`')`;
          con.query(sql, console.log);

      for( aii = 3; aii < args.length; aii++){
        message5 = message5 + args[aii] + " ";
    } 
    
    

      con2.query(`SELECT * FROM verwarnungen WHERE id = '`+ taggedUser2.id+`'`, (err, rows) => {
        if(err) throw err;
        
        
            if(rows < 1){
                sql = `INSERT INTO verwarnungen VALUES ('`+taggedUser2.id+`', 1)`;
                con.query(sql);
                bot.channels.cache.get("807619390279254047").send("**WARNING - Log Nummer "+(LogNR)+"**\n*Name:* <@" + taggedUser2.id + "> \n*Grund für Sündenbock*:"+message5+" \n*Dauer*: "+penim+" " + BanSuffix +" (nach Ablauf der Zeit !Sündenbock in <#773446927710552094>).");
                var benim = penis;
                
                var cur = new Date();
                
            console.log(""+LogNRNR);
            
                sql = `INSERT INTO logswarnungen(log_id, id_player, dauer, grund, id_mod, datum, uhrzeit)
                VALUES ('`+LogNR+`','`+taggedUser2.id+`','`+penim+` `+BanSuffix+`','`+message5+`','`+message.author.id+`','`+cur. getDate()+"."+(cur. getMonth() + 1)+"."+cur.getFullYear()+`','`+cur. getHours()+":"+cur. getMinutes()+`');`;
                myTable.setItem(taggedUser2.tag, 0);
                con.query(sql);
            if (!(taggedUser2.roles.cache.has(sunde.id))) {
                message.member.roles.add(sunde);
                }
                sql = `INSERT INTO playerrolle (id) VALUES ('`+taggedUser2.id+`')`;
                                    con.query(sql);
                                    let gasd = "";
                for(var i = 1; i < 65; i++){
                                      
                  var a = AlleRollen.getItem(''+i);
                  let abc =  message.guild.roles.cache.find((r) => r.id == a);
                
                  if(1 < 2){
                  if(i == 1){ 
                     gasd = "a"; 
                    }else if(i == 2){ 
                      gasd = "b";  }else if(i == 3){ 
                        gasd = "c";  }else if(i == 4){ 
                          gasd = "d"; }else if(i == 5){
                      
                            gasd = "e";  }else if(i == 6){
                              gasd = "f"; }else if(i == 7){
                                gasd = "g"; }else if(i == 8){
                                  gasd = "h"; }else if(i == 9){
                                    gasd = "i"; }else if(i == 10){
                                      gasd = "j";  }else if(i == 11){
                                        gasd= "k"; }else if(i == 12){
                                          gasd = "l"; }else if(i == 13){
                                            gasd = "m";  }else if(i == 14){
                                              gasd = "n"; }else if(i == 15){
                                                gasd = "o"; }else if(i == 16){
                                                  gasd = "p";  }else if(i == 17){
                                                    gasd = "q";  }else if(i == 18){
                                                      gasd = "r";  }else if(i == 19){
                                                        gasd = "s"; }else if(i == 20){
                                                          gasd = "t";  }else if(i == 21){
                                                            gasd = "u";  }else if(i == 22){
                                                              gasd = "v"; }else if(i == 23){
                                                                gasd = "w";  }else if(i == 24){
                                                                  gasd = "x";  }else if(i == 25){
                                                                    gasd = "y"; }else if(i == 26){
                                                                      gasd = "z";}else if(i == 27){
                                                                        gasd = "aa"; }else if(i == 28){
                                                                          gasd = "ab"; }else if(i == 29){
                                                                            gasd = "ac";}else if(i == 30){
                                                                              gasd = "ad"; }else if(i == 31){
                                                                                gasd = "ae";  }else if(i == 32){
                                                                                  gasd = "af";  }else if(i == 33){
                                                                                    gasd = "ag"; }else if(i == 34){
                                                                                      gasd = "ah"; }else if(i == 35){
                                                                                        gasd = "ai"; }else if(i == 36){
                                                                                          gasd = "aj"; }else if(i == 37){
                       gasd = "ak"; }else if(i == 38){
                        gasd = "al"; }else if(i == 39){
                          gasd = "am"; }else if(i == 40){
                            gasd = "an";}else if(i == 41){
                              gasd = "ao";}else if(i == 42){
                                gasd = "ap";}else if(i == 43){
                                  gasd = "aq"; }else if(i == 44){
                                    gasd = "ar"; }else if(i == 45){
                                      gasd = "ass";}else if(i == 46){
                                        gasd = "at"; }else if(i == 47){
                                          gasd = "au";}else if(i == 48){
                                            gasd = "av"; }else if(i == 49){
                                              gasd = "aw"; }else if(i == 50){
                                                gasd = "ax";}else if(i == 51){
                                                  gasd = "ay";  }else if(i == 52){
                                                    gasd = "az";}else if(i == 53){
                                                      gasd = "ba";}else if(i == 54){
                                                        gasd = "bb"; }else if(i == 55){
                                                          gasd = "bc";}else if(i == 56){
                                                            gasd = "bd"; }else if(i == 57){
                                                              gasd = "be";}else if(i == 58){
                                                                gasd = "bf";}else if(i == 59){
                                                                  gasd = "bg";}else if(i == 60){
                                                                    gasd = "bh";}else if(i == 61){
                                                                      gasd = "bi";}else if(i == 62){
                                                                        gasd = "bj"; }else if(i == 63){
                                                                          gasd = "bk"; }else if(i == 64){
                                                                            gasd = "bl";}else if(i == 65){
                                                                              gasd = "bm"; }else if(i == 66){
                                                                                gasd = "bn"; }else if(i == 67){
                                                                                  gasd = "bo";}else if(i == 68){
                                                                                    gasd = "bp";}else if(i == 69){
                                                                                      gasd = "bq"; }else if(i == 70){
                                                                                        gasd = "br";}else if(i == 71){
                                                                                          gasd = "bs";}    }         

                  if(taggedUser2.roles.cache.has(abc.id)){
                    
                    sql = `UPDATE playerrolle SET `+gasd+`=`+a+` WHERE id='`+taggedUser2.id+`'`;
                    taggedUser2.roles.remove(abc);
                    
                  }else {
                    sql = `UPDATE playerrolle SET `+gasd+`='0' WHERE id='`+taggedUser2.id+`'`;
                  } 
                  console.log(i+" penis "+gasd);
                  con.query(sql);
                
              }  
            const time = Date.now()+Zeit;
            const times = ''+time;
            console.log(times);
            sql = `INSERT INTO verwarntimes (id, ms) VALUES ('`+ taggedUser2.id+`', '`+times+`')`;
            
            con.query(sql);
            
            }else{
                let warnings = rows[0].number;
            
                vb = parseInt(warnings, 10)+1;
                vb2 = ''+vb;
                bot.channels.cache.get("807619390279254047").send("**WARNING - Log Nummer "+(LogNR)+"**\n*Name:* <@" + taggedUser2.id + "> \n*Grund für Sündenbock:* "+message5+" \n*Dauer*: "+penim+" " + BanSuffix +" (nach Ablauf der Zeit !Sündenbock in <#773446927710552094>).\n*Aufgetragen von:* <@"+message.author.id+">");
                myTable.setItem(taggedUser2.tag, 0);
          
                var cur = new Date();
                sql = `INSERT INTO logswarnungen(log_id, id_player, dauer, grund, id_mod, datum, uhrzeit)
                VALUES ('`+LogNR+`','`+taggedUser2.id+`','`+penim+` `+BanSuffix+`','`+message5+`','`+message.author.id+`','`+cur. getDate()+"."+(cur. getMonth() + 1)+"."+cur. getFullYear()+`','`+cur. getHours()+":"+cur. getMinutes()+`');`;
                con.query(sql);


            sql = `UPDATE verwarnungen SET number = `+vb2+` WHERE id = '`+ taggedUser2.id+`'`;
            con.query(sql);
            if (!(taggedUser2.roles.cache.has(sunde.id))) {
              taggedUser2.roles.add(sunde);
            }     
            console.log("hi");
                sql = `INSERT INTO playerrolle (id) VALUES ('`+taggedUser2.id+`')`;
                con.query(sql);
                let gasd = "";
                for(var i = 1; i < 65; i++){
                                      
                  var a = AlleRollen.getItem(''+i);
                  let abc =  message.guild.roles.cache.find((r) => r.id == a);
                
                  if(1 < 2){
                  if(i == 1){ 
                     gasd = "a"; 
                    }else if(i == 2){ 
                      gasd = "b";  }else if(i == 3){ 
                        gasd = "c";  }else if(i == 4){ 
                          gasd = "d"; }else if(i == 5){
                      
                            gasd = "e";  }else if(i == 6){
                              gasd = "f"; }else if(i == 7){
                                gasd = "g"; }else if(i == 8){
                                  gasd = "h"; }else if(i == 9){
                                    gasd = "i"; }else if(i == 10){
                                      gasd = "j";  }else if(i == 11){
                                        gasd= "k"; }else if(i == 12){
                                          gasd = "l"; }else if(i == 13){
                                            gasd = "m";  }else if(i == 14){
                                              gasd = "n"; }else if(i == 15){
                                                gasd = "o"; }else if(i == 16){
                                                  gasd = "p";  }else if(i == 17){
                                                    gasd = "q";  }else if(i == 18){
                                                      gasd = "r";  }else if(i == 19){
                                                        gasd = "s"; }else if(i == 20){
                                                          gasd = "t";  }else if(i == 21){
                                                            gasd = "u";  }else if(i == 22){
                                                              gasd = "v"; }else if(i == 23){
                                                                gasd = "w";  }else if(i == 24){
                                                                  gasd = "x";  }else if(i == 25){
                                                                    gasd = "y"; }else if(i == 26){
                                                                      gasd = "z";}else if(i == 27){
                                                                        gasd = "aa"; }else if(i == 28){
                                                                          gasd = "ab"; }else if(i == 29){
                                                                            gasd = "ac";}else if(i == 30){
                                                                              gasd = "ad"; }else if(i == 31){
                                                                                gasd = "ae";  }else if(i == 32){
                                                                                  gasd = "af";  }else if(i == 33){
                                                                                    gasd = "ag"; }else if(i == 34){
                                                                                      gasd = "ah"; }else if(i == 35){
                                                                                        gasd = "ai"; }else if(i == 36){
                                                                                          gasd = "aj"; }else if(i == 37){
                       gasd = "ak"; }else if(i == 38){
                        gasd = "al"; }else if(i == 39){
                          gasd = "am"; }else if(i == 40){
                            gasd = "an";}else if(i == 41){
                              gasd = "ao";}else if(i == 42){
                                gasd = "ap";}else if(i == 43){
                                  gasd = "aq"; }else if(i == 44){
                                    gasd = "ar"; }else if(i == 45){
                                      gasd = "ass";}else if(i == 46){
                                        gasd = "at"; }else if(i == 47){
                                          gasd = "au";}else if(i == 48){
                                            gasd = "av"; }else if(i == 49){
                                              gasd = "aw"; }else if(i == 50){
                                                gasd = "ax";}else if(i == 51){
                                                  gasd = "ay";  }else if(i == 52){
                                                    gasd = "az";}else if(i == 53){
                                                      gasd = "ba";}else if(i == 54){
                                                        gasd = "bb"; }else if(i == 55){
                                                          gasd = "bc";}else if(i == 56){
                                                            gasd = "bd"; }else if(i == 57){
                                                              gasd = "be";}else if(i == 58){
                                                                gasd = "bf";}else if(i == 59){
                                                                  gasd = "bg";}else if(i == 60){
                                                                    gasd = "bh";}else if(i == 61){
                                                                      gasd = "bi";}else if(i == 62){
                                                                        gasd = "bj"; }else if(i == 63){
                                                                          gasd = "bk"; }else if(i == 64){
                                                                            gasd = "bl";}else if(i == 65){
                                                                              gasd = "bm"; }else if(i == 66){
                                                                                gasd = "bn"; }else if(i == 67){
                                                                                  gasd = "bo";}else if(i == 68){
                                                                                    gasd = "bp";}else if(i == 69){
                                                                                      gasd = "bq"; }else if(i == 70){
                                                                                        gasd = "br";}else if(i == 71){
                                                                                          gasd = "bs";}    }         

                  if(taggedUser2.roles.cache.has(abc.id)){
                    
                    sql = `UPDATE playerrolle SET `+gasd+`=`+a+` WHERE id='`+taggedUser2.id+`'`;
                    taggedUser2.roles.remove(abc);
                    
                  }else {
                    sql = `UPDATE playerrolle SET `+gasd+`='0' WHERE id='`+taggedUser2.id+`'`;
                  } 
                  
                  con.query(sql);
                
              }  
            }  
             
        
        
});
break;

case "*log":
       message.delete({ timeout: 1 })
       
       var LogNR;
       var LogNRNR;
       var break1 = 1;
       var eingabe = parseInt(args[1]);
       var eingabeargs1 = args[1];
       console.log("4");
if(args.length >= 1 || args.length <= 1 ){
  console.log(eingabe);
       con.query(`SELECT * FROM maxlognr WHERE server = 'Kaan'`, (err, rows) => {
        if(err) throw err;
        LogNR = rows[0].lognr;
        LogNRNR = parseInt(LogNR);
        
       var eingabe = parseInt(args[1]);
       console.log("code 1");
        if(eingabe > 0 && eingabe < LogNRNR){

          console.log("code 2");

        }else{
LogNRNR == LogNRNR-1;
          console.log("code 3");
          const exampleEmbed = new Discord.MessageEmbed()
          .setColor('#ffa600')
          .setTitle('Nutzung *log')
          .setURL('https://www.thisworldthesedays.com/command-description-userdeniz1.html')
          .setAuthor(message.author.username+'')
          .setDescription('*log (**gültige** Log nummer) ')
          .setThumbnail('https://i.imgur.com/wSTFkRM.png')
          
          .addField('.', 'Max Log NR ist '+LogNRNR+'!', false)
          .addField('.', 'Bitte bei Problemen <@466596723297484810> DMen!', false)
          .setTimestamp()
          .setFooter(''+message.author.username+'');
        break1=2;
                
                message.channel.send(exampleEmbed);

        }
        
       console.log("code 4");
      });
      if(break1 = 1){
        console.log(args[1]);
      con.query(`SELECT * FROM logswarnungen WHERE log_id = '`+args[1]+`'`, (err, rows) => {
        if(err) throw err;
        console.log(rows[0].id_player);
        var id_player = rows[0].id_player;
       var grund= rows[0].grund;
       var dauer= rows[0].dauer;
       var datum= rows[0].datum;
       var uhrzeit= rows[0].uhrzeit;
       var id_mod= rows[0].id_mod; 

       console.log("code 5");
       
             con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
              if(err) throw err;
              if(rows.length >= 1){
                let language = rows[0].lang;
                if(language == "de"){
                  const exampleEmbed = new Discord.MessageEmbed()
       .setColor('#ffa600')
       .setTitle('Log Nummer '+args[1]+':')
       .setURL('https://www.thisworldthesedays.com/command-description-userdeniz1.html')
       .setAuthor(message.author.username+'')
       .setDescription('Verwarnter User: <@'+id_player+'>')
       .addField('Grund:', grund, false)
       .addField('Dauer:', dauer, false)
       .addField('Verwarnzeit:', 'Am '+datum+' um '+uhrzeit, false)
       .addField('Verwarnt von:', '<@'+id_mod+'>', false)
       .setTimestamp()
       .setFooter(''+message.author.username+'');
        message.channel.send(exampleEmbed);
            
                }else if(language == "en"){
                  const exampleEmbed = new Discord.MessageEmbed()
       .setColor('#ffa600')
       .setTitle('Log Number '+args[1]+':')
       .setURL('https://www.thisworldthesedays.com/command-description-userdeniz1.html')
       .setAuthor(message.author.username+'')
       .setDescription('Warned User: <@'+id_player+'>')
       .addField('Reason:', grund, false)
       .addField('Duration:', dauer, false)
       .addField('Warntime:', 'On the '+datum+' at '+uhrzeit, false)
       .addField('Warned moderator:', '<@'+id_mod+'>', false)
       .setTimestamp()
       .setFooter(''+message.author.username+'');
        message.channel.send(exampleEmbed);  
            
                }
             }else{
              const exampleEmbed = new Discord.MessageEmbed()
       .setColor('#ffa600')
       .setTitle('Log Number '+args[1]+':')
       .setURL('https://www.thisworldthesedays.com/command-description-userdeniz1.html')
       .setAuthor(message.author.username+'')
       .setDescription('Warned User: <@'+id_player+'>')
       .addField('Reason:', grund, false)
       .addField('Duration:', dauer, false)
       .addField('Warntime:', 'On the '+datum+' at '+uhrzeit, false)
       .addField('Warned moderator:', '<@'+id_mod+'>', false)
       .setTimestamp()
       .setFooter(''+message.author.username+'');
        message.channel.send(exampleEmbed);  
              message.channel.send('(No Language set! "§lang" as a Administrator!)').then(msg => msg.delete({timeout: 10000}));
             }
            })
      });
    }
  
  }else {

    console.log("code 7");
   
  con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
    if(err) throw err;
        if(rows.length >= 1){
          let language = rows[0].lang;
          if(language == "de"){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffa600')
            .setTitle('Nutzung *log')
            .setURL('https://www.thisworldthesedays.com/command-description-userdeniz1.html')
            .setAuthor(message.author.username+'')
            .setDescription('*log (Log nummer)')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            
            .addField('.', 'Bitte bei Problemen <@466596723297484810> DMen!', false)
            .setTimestamp()
            .setFooter(''+message.author.username+'');
            message.channel.send(exampleEmbed);
          break1=2;                               
          }else if(language == "en"){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffa600')
            .setTitle('Using *log')
            .setURL('https://www.thisworldthesedays.com/command-description-userdeniz1.html')
            .setAuthor(message.author.username+'')
            .setDescription('*log (Log number)')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            
            .addField('.', 'Problems? DM <@466596723297484810>!', false)
            .setTimestamp()
            .setFooter(''+message.author.username+'');
            message.channel.send(exampleEmbed);
          break1=2;                                    
          }
       }else{
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffa600')
            .setTitle('Using *log')
            .setURL('https://www.thisworldthesedays.com/command-description-userdeniz1.html')
            .setAuthor(message.author.username+'')
            .setDescription('*log (Log number)')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            
            .addField('.', 'Problems? DM <@466596723297484810>!', false)
            .setTimestamp()
            .setFooter(''+message.author.username+'');
            message.channel.send(exampleEmbed);
          break1=2;                                    
                                                               
        message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
       }
      });

  }
break;
default:

  break;
}


    }else if(message.channel.id === '773446927710552094'){
        let sunde =  message.guild.roles.cache.find((r) => r.id == "772467882508156928");
        
        console.log("bis hierhin");
        
        switch(args[0]){
            case "!Sündenbock":
                console.log("sünde");
                if (message.member.roles.cache.has(sunde.id)) {
        con.query(`SELECT * FROM verwarntimes WHERE id = '`+ message.author.id+`'`, (err, rows1) => {
            if(err) throw err;

            console.log("code 1");
            
           
                if(rows1.length >= 1){
                    let alteUhr = rows1[0].ms;
                    const timen = BigInt(alteUhr);
                    
                    if(BigInt(Date.now()) >= timen){
                        
                            message.member.roles.remove(sunde);
                            
                            
                            con.query(`SELECT * FROM playerrolle WHERE id = '`+ message.author.id+`'`, (err, rows) => {
                                if(err) throw err; 
                                let gasd2 = rows[0].a;
                                if(rows[0].id == message.author.id){
                                for (var i = 1; i <= 70; i++) {
                                    
                                    
                                    
                                    if(1 < 2){
                                    if(i == 1) {
                                            }else if(i == 2){  gasd2 = rows[0].b;
                                  }else if(i == 3){  gasd2 = rows[0].c;
                                  }else if(i == 4){  gasd2 = rows[0].d;
                              }else if(i == 5){  gasd2 = rows[0].e;
                          }else if(i == 6){  gasd2 = rows[0].f;
                      }else if(i == 7){  gasd2 = rows[0].g;
                  }else if(i == 8){  gasd2 = rows[0].h;
              }else if(i == 9){  gasd2 = rows[0].i;
          }else if(i == 10){  gasd2 = rows[0].j;
      }else if(i == 11){  gasd2 = rows[0].k;
  }else if(i == 12){  gasd2 = rows[0].l;
}else if(i == 13){  gasd2 = rows[0].m;
    }else if(i == 14){  gasd2 = rows[0].n;
  }else if(i == 15){  gasd2 = rows[0].o;
}else if(i == 16){  gasd2 = rows[0].p;
}else if(i == 17){  gasd2 = rows[0].q;
}else if(i == 18){  gasd2 = rows[0].r;
}else if(i == 19){  gasd2 = rows[0].s;
}else if(i == 20){  gasd2 = rows[0].t;
}else if(i == 21){  gasd2 = rows[0].u;
}else if(i == 22){  gasd2 = rows[0].v;
}else if(i == 23){  gasd2 = rows[0].w;
}else if(i == 24){  gasd2 = rows[0].x;
}else if(i == 25){  gasd2 = rows[0].y;
}else if(i == 26){  gasd2 = rows[0].z;
}else if(i == 27){ gasd2 = rows[0].aa;
}else if(i == 28){ gasd2 = rows[0].ab;
}else if(i == 29){ gasd2 = rows[0].ac;
}else if(i == 30){ gasd2 = rows[0].ad;
}else if(i == 31){ gasd2 = rows[0].ae;
}else if(i == 32){ gasd2 = rows[0].af;
}else if(i == 33){ gasd2 = rows[0].ag;
}else if(i == 34){ gasd2 = rows[0].ah;
}else if(i == 35){ gasd2 = rows[0].ai;
}else if(i == 36){ gasd2 = rows[0].aj;
}else if(i == 37){ gasd2 = rows[0].ak;
}else if(i == 38){ gasd2 = rows[0].al;
}else if(i == 39){ gasd2 = rows[0].am;
}else if(i == 40){ gasd2 = rows[0].an;
}else if(i == 41){ gasd2 = rows[0].ao;
}else if(i == 42){ gasd2 = rows[0].ap;
}else if(i == 43){ gasd2 = rows[0].aq;
}else if(i == 44){ gasd2 = rows[0].ar;
}else if(i == 45){ gasd2 = rows[0].as;
}else if(i == 46){ gasd2 = rows[0].at;
}else if(i == 47){ gasd2 = rows[0].au;
}else if(i == 48){ gasd2 = rows[0].av;
}else if(i == 49){ gasd2 = rows[0].aw;
}else if(i == 50){ gasd2 = rows[0].ax;
}else if(i == 51){ gasd2 = rows[0].ay;
}else if(i == 52){ gasd2 = rows[0].az;
}else if(i == 53){ gasd2 = rows[0].ba;
}else if(i == 54){ gasd2 = rows[0].bb;
}else if(i == 55){ gasd2 = rows[0].bc;
}else if(i == 56){ gasd2 = rows[0].bd;
}else if(i == 57){ gasd2 = rows[0].be;
}else if(i == 58){ gasd2 = rows[0].bf;
}else if(i == 59){ gasd2 = rows[0].bg;
}else if(i == 60){ gasd2 = rows[0].bh;
}else if(i == 61){ gasd2 = rows[0].bi;
}else if(i == 62){ gasd2 = rows[0].bj;
}else if(i == 63){ gasd2 = rows[0].bk;
}else if(i == 64){ gasd2 = rows[0].bl;
}else if(i == 65){ gasd2 = rows[0].bm;
}else if(i == 66){ gasd2 = rows[0].bn;
}else if(i == 67){ gasd2 = rows[0].bo;
}else if(i == 68){ gasd2 = rows[0].bp;
}else if(i == 69){ gasd2 = rows[0].bq;
}else if(i == 70){ gasd2 = rows[0].br;
}else if(i == 71){ gasd2 = rows[0].bs;
          }}

          if(gasd2 == "0"){

          }else if(gasd2 == null){


          }else{
              let abc =  message.guild.roles.cache.find((r) => r.id == ""+gasd2);
              if(!(message.member.roles.cache.has(abc.id))){
              message.member.roles.add(abc);
          }
          }
       }
        }
                            });
                        sql = `DELETE FROM verwarntimes WHERE id = '`+ message.author.id+`'`;
                        
                        con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                          if(err) throw err;
                              if(rows.length >= 1){
                                let language = rows[0].lang;
                                if(language == "de"){
                                  message.channel.send("ok, bist entwarnt.");                                     
                                }else if(language == "en"){
                                  message.channel.send("ok, you're not warned anymore.");                                     
                                }
                             }else{
                              message.channel.send("ok, you're not warned anymore.");                                      
                                                                                     
                              message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                             }
                            });
                        con.query(sql)
                        sql = `DELETE FROM playerrolle WHERE id = '`+ message.author.id+`'`;
                        con.query(sql)
                   }else {
                        
                        
                        const timen1 = Number(timen);
                        
                        const left = Date.now() - timen1;
                        var sec = left / 1000 * -1;
                        if(sec > 600){
                        sec = sec / 60;
                        if(sec > 120){
                          sec = sec / 60;
                          if(sec > 24){
                            sec = sec / 24;
                            secs = parseInt(sec);
                            con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                              if(err) throw err;
                                  if(rows.length >= 1){
                                    let language = rows[0].lang;
                                    if(language == "de"){
                                      message.channel.send("Du bist noch für "+ secs + " Tage verwarnt!");                                     
                                    }else if(language == "en"){
                                      message.channel.send("Your warn is lasting for further "+ secs + " days!");                                     
                                    }
                                 }else{
                                  message.channel.send("Your warn is lasting for further "+ secs + " days!");                                     
                                                                                         
                                  message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                                 }
                                });
    
                          
                          }else{
                            secs = parseInt(sec);
                            con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                              if(err) throw err;
                                  if(rows.length >= 1){
                                    let language = rows[0].lang;
                                    if(language == "de"){
                                      message.channel.send("Du bist noch für "+ secs + " Stunden verwarnt!");                                     
                                    }else if(language == "en"){
                                      message.channel.send("Your warn is lasting for further "+ secs + " hours!");                                     
                                    }
                                 }else{
                                  message.channel.send("Your warn is lasting for further "+ secs + " hours!");                                     
                                                                                         
                                  message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                                 }
                                });
                            }
                        }else{
                          secs = parseInt(sec);
                          con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                            if(err) throw err;
                                if(rows.length >= 1){
                                  let language = rows[0].lang;
                                  if(language == "de"){
                                    message.channel.send("Du bist noch für "+ secs + " Minuten verwarnt!");                                     
                                  }else if(language == "en"){
                                    message.channel.send("Your warn is lasting for further "+ secs + " minutes!");                                     
                                  }
                               }else{
                                message.channel.send("Your warn is lasting for further "+ secs + " minutes!");                                     
                                                                                       
                                message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                               }
                              });
                          }
                        }else{
    
                          secs = parseInt(sec);
                          con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                            if(err) throw err;
                                if(rows.length >= 1){
                                  let language = rows[0].lang;
                                  if(language == "de"){
                                    message.channel.send("Du bist noch für "+ secs + " Sekunden verwarnt!");                                     
                                  }else if(language == "en"){
                                    message.channel.send("Your warn is lasting for further "+ secs + " Seconds!");                                     
                                  }
                               }else{
                                message.channel.send("Your warn is lasting for further "+ secs + " Seconds!");                                     
                                                                                       
                                message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                               }
                              });
                            }
                          

                    }
                    
                }else {

                 
            }
        });
      }else{
        con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
          if(err) throw err;
              if(rows.length >= 1){
                let language = rows[0].lang;
                if(language == "de"){
                  message.channel.send("Du bist garnicht verwarnt! Die Rolle als bot beherrscht du besser als ich.");                                     
                }else if(language == "en"){
                  message.channel.send("You're not warned! Such a bot...");                                     
                }
             }else{
              message.channel.send("You're not warned! Such a bot...");                                   
                                                                     
              message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
             }
            });
          }
            break;
            case "!sündenbock":
                console.log("sünde");
        con.query(`SELECT * FROM verwarntimes WHERE id = '`+ message.author.id+`'`, (err, rows1) => {
            if(err) throw err;

            console.log("code 1");
            
           
                if(rows1.length >= 1){
                    let alteUhr = rows1[0].ms;
                    const timen = BigInt(alteUhr);
                    
                    if(BigInt(Date.now()) >= timen){
                        
                        
                            message.member.roles.remove(sunde);
                            
                            con.query(`SELECT * FROM playerrolle WHERE id = '`+ message.author.id+`'`, (err, rows) => {
                                if(err) throw err; 
                                
                            let gasd2 = rows[0].a;
                                
                                for (var i = 1; i <= 70; i++) {
                                    
                                    
                                    
                                    if(1 < 2){
                                    if(i == 1) {
                                            }else if(i == 2){  gasd2 = rows[0].b;
                                  }else if(i == 3){  gasd2 = rows[0].c;
                                  }else if(i == 4){  gasd2 = rows[0].d;
                              }else if(i == 5){  gasd2 = rows[0].e;
                          }else if(i == 6){  gasd2 = rows[0].f;
                      }else if(i == 7){  gasd2 = rows[0].g;
                  }else if(i == 8){  gasd2 = rows[0].h;
              }else if(i == 9){  gasd2 = rows[0].i;
          }else if(i == 10){  gasd2 = rows[0].j;
      }else if(i == 11){  gasd2 = rows[0].k;
  }else if(i == 12){  gasd2 = rows[0].l;
}else if(i == 13){  gasd2 = rows[0].m;
    }else if(i == 14){  gasd2 = rows[0].n;
  }else if(i == 15){  gasd2 = rows[0].o;
}else if(i == 16){  gasd2 = rows[0].p;
}else if(i == 17){  gasd2 = rows[0].q;
}else if(i == 18){  gasd2 = rows[0].r;
}else if(i == 19){  gasd2 = rows[0].s;
}else if(i == 20){  gasd2 = rows[0].t;
}else if(i == 21){  gasd2 = rows[0].u;
}else if(i == 22){  gasd2 = rows[0].v;
}else if(i == 23){  gasd2 = rows[0].w;
}else if(i == 24){  gasd2 = rows[0].x;
}else if(i == 25){  gasd2 = rows[0].y;
}else if(i == 26){  gasd2 = rows[0].z;
}else if(i == 27){ gasd2 = rows[0].aa;
}else if(i == 28){ gasd2 = rows[0].ab;
}else if(i == 29){ gasd2 = rows[0].ac;
}else if(i == 30){ gasd2 = rows[0].ad;
}else if(i == 31){ gasd2 = rows[0].ae;
}else if(i == 32){ gasd2 = rows[0].af;
}else if(i == 33){ gasd2 = rows[0].ag;
}else if(i == 34){ gasd2 = rows[0].ah;
}else if(i == 35){ gasd2 = rows[0].ai;
}else if(i == 36){ gasd2 = rows[0].aj;
}else if(i == 37){ gasd2 = rows[0].ak;
}else if(i == 38){ gasd2 = rows[0].al;
}else if(i == 39){ gasd2 = rows[0].am;
}else if(i == 40){ gasd2 = rows[0].an;
}else if(i == 41){ gasd2 = rows[0].ao;
}else if(i == 42){ gasd2 = rows[0].ap;
}else if(i == 43){ gasd2 = rows[0].aq;
}else if(i == 44){ gasd2 = rows[0].ar;
}else if(i == 45){ gasd2 = rows[0].as;
}else if(i == 46){ gasd2 = rows[0].at;
}else if(i == 47){ gasd2 = rows[0].au;
}else if(i == 48){ gasd2 = rows[0].av;
}else if(i == 49){ gasd2 = rows[0].aw;
}else if(i == 50){ gasd2 = rows[0].ax;
}else if(i == 51){ gasd2 = rows[0].ay;
}else if(i == 52){ gasd2 = rows[0].az;
}else if(i == 53){ gasd2 = rows[0].ba;
}else if(i == 54){ gasd2 = rows[0].bb;
}else if(i == 55){ gasd2 = rows[0].bc;
}else if(i == 56){ gasd2 = rows[0].bd;
}else if(i == 57){ gasd2 = rows[0].be;
}else if(i == 58){ gasd2 = rows[0].bf;
}else if(i == 59){ gasd2 = rows[0].bg;
}else if(i == 60){ gasd2 = rows[0].bh;
}else if(i == 61){ gasd2 = rows[0].bi;
}else if(i == 62){ gasd2 = rows[0].bj;
}else if(i == 63){ gasd2 = rows[0].bk;
}else if(i == 64){ gasd2 = rows[0].bl;
}else if(i == 65){ gasd2 = rows[0].bm;
}else if(i == 66){ gasd2 = rows[0].bn;
}else if(i == 67){ gasd2 = rows[0].bo;
}else if(i == 68){ gasd2 = rows[0].bp;
}else if(i == 69){ gasd2 = rows[0].bq;
}else if(i == 70){ gasd2 = rows[0].br;
}else if(i == 71){ gasd2 = rows[0].bs;
          }}

          if(gasd2 == "0"){

          }else if(gasd2 == null){


          }else{
              let abc =  message.guild.roles.cache.find((r) => r.id == ""+gasd2);
              if(!(message.member.roles.cache.has(abc.id))){
              message.member.roles.add(abc);
          }
          }
       }
                            
                            
                            
                    
                            
                            
                            });
                        sql = `DELETE FROM verwarntimes WHERE id = '`+ message.author.id+`'`;
                        con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                          if(err) throw err;
                              if(rows.length >= 1){
                                let language = rows[0].lang;
                                if(language == "de"){
                                  message.channel.send("ok, bist entwarnt.");                                     
                                }else if(language == "en"){
                                  message.channel.send("ok, you're not warned anymore.");                                     
                                }
                             }else{
                              message.channel.send("ok, you're not warned anymore.");                                      
                                                                                     
                              message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                             }
                            });
                        con.query(sql, console.log)
                        sql = `DELETE FROM playerrolle WHERE id = '`+ message.author.id+`'`;
                        con.query(sql, console.log)
                   }else {
                        
                        
                    const timen1 = Number(timen);
                        
                    const left = Date.now() - timen1;
                    var sec = left / 1000 * -1;
                    if(sec > 600){
                    sec = sec / 60;
                    if(sec > 120){
                      sec = sec / 60;
                      if(sec > 24){
                        sec = sec / 24;
                        secs = parseInt(sec);
                        con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                          if(err) throw err;
                              if(rows.length >= 1){
                                let language = rows[0].lang;
                                if(language == "de"){
                                  message.channel.send("Du bist noch für "+ secs + " Tage verwarnt!");                                     
                                }else if(language == "en"){
                                  message.channel.send("Your warn is lasting for further "+ secs + " days!");                                     
                                }
                             }else{
                              message.channel.send("Your warn is lasting for further "+ secs + " days!");                                     
                                                                                     
                              message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                             }
                            });

                      
                      }else{
                        secs = parseInt(sec);
                        con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                          if(err) throw err;
                              if(rows.length >= 1){
                                let language = rows[0].lang;
                                if(language == "de"){
                                  message.channel.send("Du bist noch für "+ secs + " Stunden verwarnt!");                                     
                                }else if(language == "en"){
                                  message.channel.send("Your warn is lasting for further "+ secs + " hours!");                                     
                                }
                             }else{
                              message.channel.send("Your warn is lasting for further "+ secs + " hours!");                                     
                                                                                     
                              message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                             }
                            });
                        }
                    }else{
                      secs = parseInt(sec);
                      con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                        if(err) throw err;
                            if(rows.length >= 1){
                              let language = rows[0].lang;
                              if(language == "de"){
                                message.channel.send("Du bist noch für "+ secs + " Minuten verwarnt!");                                     
                              }else if(language == "en"){
                                message.channel.send("Your warn is lasting for further "+ secs + " minutes!");                                     
                              }
                           }else{
                            message.channel.send("Your warn is lasting for further "+ secs + " minutes!");                                     
                                                                                   
                            message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                           }
                          });
                      }
                    }else{

                      secs = parseInt(sec);
                      con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                        if(err) throw err;
                            if(rows.length >= 1){
                              let language = rows[0].lang;
                              if(language == "de"){
                                message.channel.send("Du bist noch für "+ secs + " Sekunden verwarnt!");                                     
                              }else if(language == "en"){
                                message.channel.send("Your warn is lasting for further "+ secs + " Seconds!");                                     
                              }
                           }else{
                            message.channel.send("Your warn is lasting for further "+ secs + " Seconds!");                                     
                                                                                   
                            message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                           }
                          });
                      
                      }

                    }
                    
                }else {
                 
            }
        });
      

            break;
            
            
            
            default:
                break;

        }

    }else if(message.channel.id === '810585353836429372' || message.channel.id === '811252428178980924' ){
        let vv123v = Math.random() * 13;
        let BlackJack1bis13 = parseInt(''+vv123v);
        switch(args[0]){
            case "blackjack":
            
            break;
        }



    }else if(message.channel.id === '806274946913271808'){
        let move =  message.guild.roles.cache.find((r) => r.id == "811587684460003348");
        switch(args[0]){
            
            case "=move":
                console.log("Code 2");
                if(message.member.roles.cache.has(move.id) || message.author.username == "!Đeniz") {
                    
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
                
                console.log("Code 4");
                if(message.member.roles.cache.has(move.id) || message.author.username == "!Đeniz") {
                    
                console.log("Code 5");
                    
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
      case ""+Prefix+"LANG":
        console.log("code 1");
        
        
  if(message.member.hasPermission("ADMINISTRATOR") || message.author.username == "!Deniz" || message.member.roles.cache.find(r => r.name === "Mod") || message.member.roles.cache.find(r => r.name === "Moderator")){
  
        if(args[1].toUpperCase() == "DE" || args[1].toUpperCase() == "DEUTSCH" ){
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
              message.channel.send('Super! Die Serversprache wurde auf Deutsch gestellt!').then(msg => msg.delete({timeout: deleteTime}));
        }else if(args[1].toUpperCase() == "EN" || args[1].toUpperCase() == "ENGLISH" ){
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
              message.channel.send('The Serverlanguage is now set to English!').then(msg => msg.delete({timeout: deleteTime}));
        }else{
          message.channel.send("This Language is not supported! \nSupported Languages until now are: \nGerman - DE \nEnglish - EN");
        }
        }
      break;

case ""+Prefix+"LEVEL":
  
if(message.member.hasPermission("ADMINISTRATOR") || message.author.username == "!Deniz" || message.member.roles.cache.find(r => r.name === "Mod") || message.member.roles.cache.find(r => r.name === "Moderator")){
  if(args.length == 3){
  con.query(`SELECT * FROM RollenFürLevel WHERE levelrang = '`+args[1]+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows) => {
    if(err) throw err;
       if(rows.length >= 1){
        
        if(message.mentions.roles.size == 1){
        let rolle = message.mentions.roles.first();
        sql = `DELETE FROM RollenFürLevel WHERE levelrang = '`+args[1]+`' AND server_id = '`+message.guild.id+`';`;
              
        con.query(sql);
        sql = `INSERT INTO RollenFürLevel (rollen_id, levelrang, server_id) VALUES ('`+rolle.id+`', `+args[1]+`,'`+message.guild.id+`');`;
        con.query(sql)
        con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
          if(err) throw err;
              if(rows.length >= 1){
                let language = rows[0].lang;
                if(language == "de"){
                  message.channel.send("Perfekt! Jeder mit dem Level "+args[1]+" bekommt nun die Rolle <@&"+rolle.id+">.");
                }else if(language == "en"){
                  message.channel.send("Perfekt! Now everyone with the Level "+args[1]+" will get the Role <@&"+rolle.id+">.");
                }
             }else{
              message.channel.send("Perfekt! Now everyone with the Level "+args[1]+" will get the Role <@&"+rolle.id+">.");
              message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
             }
            });
       }else{
        con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
          if(err) throw err;
              if(rows.length >= 1){
                let language = rows[0].lang;
                if(language == "de"){
                  message.channel.send("Bitte Pinge eine Rolle! \n(§level 5 @...).");
                }else if(language == "en"){
                  message.channel.send("Please mention a role! \n(§level 5 @...).");
                }
             }else{
              message.channel.send("Please mention a role! \n(§level 5 @...).");
              message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
             }
            });
      }
      }else{
        if(message.mentions.roles.size == 1){
        let rolle = message.mentions.roles.first();
        
  console.log(rolle.id);
        sql = `INSERT INTO RollenFürLevel (rollen_id, levelrang, server_id) VALUES ('`+rolle.id+`', `+args[1]+`,'`+message.guild.id+`');`;
        con.query(sql)
        con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
          if(err) throw err;
              if(rows.length >= 1){
                let language = rows[0].lang;
                if(language == "de"){
                  message.channel.send("Perfekt! Jeder mit dem Level "+args[1]+" bekommt nun die Rolle <@&"+rolle.id+">.");
                }else if(language == "en"){
                  message.channel.send("Perfekt! Now everyone with the Level "+args[1]+" will get the Role <@&"+rolle.id+">.");
                }
             }else{
              message.channel.send("Perfekt! Now everyone with the Level "+args[1]+" will get the Role <@&"+rolle.id+">.");
              message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
             }
            });
       
       }else{
        con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
          if(err) throw err;
              if(rows.length >= 1){
                let language = rows[0].lang;
                if(language == "de"){
                  message.channel.send("Bitte Pinge eine Rolle! \n(§level 5 @...).");
                }else if(language == "en"){
                  message.channel.send("Please mention a role! \n(§level 5 @...).");
                }
             }else{
              message.channel.send("Please mention a role! \n(§level 5 @...).");
              message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
             }
            });
      }
       
    }
      });
    }else{
      con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
        if(err) throw err;
            if(rows.length >= 1){
              let language = rows[0].lang;
              if(language == "de"){
                message.channel.send("Bitte wähle ein gültiges Level und Pinge eine Rolle! \n(§level 5 @...)");              }else if(language == "en"){
                message.channel.send("Please select a valid Level and mention a role! \n(§level 5 @...)");              }
           }else{
            message.channel.send("Please select a valid Level and mention a role! \n(§level 5 @...)");            message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
           }
          });
      
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
  con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
    if(err) throw err;
        if(rows.length >= 1){
          let language = rows[0].lang;
          if(language == "de"){
            message.channel.send("User nicht gefunden. (Wenn du deine XP wissen, schreibe NUR §leveling!)").then(msg => msg.delete({timeout: deleteTime}));

          }else if(language == "en"){
            message.channel.send("User not found. (If you want to know your XP, you just need to type §leveling!)").then(msg => msg.delete({timeout: deleteTime}));

          }
       }else{
        message.channel.send("User not found. (If you want to know your XP, you just need to type §leveling!)").then(msg => msg.delete({timeout: deleteTime}));

        message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
       }
      });
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
                    con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                      if(err) throw err;
                          if(rows.length >= 1){
                            let language = rows[0].lang;
                            if(language == "de"){
                              message.channel.send("Der Spieler <@"+taggesUsa.id+"> ist Level "+Level+" mit "+Experience+"/"+(200+(200*Level))+" XP.").then(msg => msg.delete({timeout: deleteTime}));

                            }else if(language == "en"){
                              message.channel.send("The User <@"+taggesUsa.id+"> is level "+Level+" with "+Experience+"/"+(200+(200*Level))+" XP.").then(msg => msg.delete({timeout: deleteTime}));

                            }
                         }else{
                          message.channel.send("The User <@"+taggesUsa.id+"> is level "+Level+" with "+Experience+"/"+(200+(200*Level))+" XP.").then(msg => msg.delete({timeout: deleteTime}));

                          message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                         }
                        });
                      }
              }else{

            
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
                    con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                      if(err) throw err;
                          if(rows.length >= 1){
                            let language = rows[0].lang;
                            if(language == "de"){
                              message.channel.send("Du bist Level "+Level+" mit "+Experience+"/"+(200+(200*Level))+" XP.").then(msg => msg.delete({timeout: deleteTime}));

                            }else if(language == "en"){
                              message.channel.send("You're level "+Level+" with "+Experience+"/"+(200+(200*Level))+" XP.").then(msg => msg.delete({timeout: deleteTime}));

                            }
                         }else{
                          message.channel.send("You're level "+Level+" with "+Experience+"/"+(200+(200*Level))+" XP.").then(msg => msg.delete({timeout: deleteTime}));

                          message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                         }
                        });
                      }
                    
            }else if(rows.length == 1){
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
                      con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                        if(err) throw err;
                            if(rows.length >= 1){
                              let language = rows[0].lang;
                              if(language == "de"){
                                message.channel.send("Du bist Level "+Level+" mit "+Experience+"/"+(200+(200*Level))+" XP.").then(msg => msg.delete({timeout: deleteTime}));
  
                              }else if(language == "en"){
                                message.channel.send("You're level "+Level+" with "+Experience+"/"+(200+(200*Level))+" XP.").then(msg => msg.delete({timeout: deleteTime}));
  
                              }
                           }else{
                            message.channel.send("You're level "+Level+" with "+Experience+"/"+(200+(200*Level))+" XP.").then(msg => msg.delete({timeout: deleteTime}));
  
                            message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                           }
                          });

                        }


            
            break;
            case ""+Prefix+"HELP":
              con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                if(err) throw err;
                    if(rows.length >= 1){
                      let language = rows[0].lang;
                      if(language == "de"){
                        message.channel.send("```PREFIX: § \n \nlevel: Nur für Menschen mit der Rolle 'Moderator' oder als Admin verfügbar. \nStelle ein, ab welchem Level man welche Rolle bekommt (Nutzung: §level 5 @{Level5RollePingen}) \n \nleveling: Sieh, auf welchem Level du bist (oder jemand anderes.) §leveling {@Spieler} \n \nlang: Setze die Sprache auf deinem Server```.");

                      }else if(language == "en"){
                        message.channel.send("```PREFIX: § \n \nlevel: Only available for people with the role named 'moderator' or as admin. \nSetup with level a player will get which role (usage: §level 5 @ {Level5RollePingen}) \n \nleveling: See what level you are (or someone else.) §leveling {@player} \n \nlang : Set the language of the bot on your server```");

                      }
                   }else{
                    message.channel.send("`PREFIX: § \n \nlevel: Only available for people with the role named 'moderator' or as admin. \nSetup with level a player will get which role (usage: §level 5 @ {Level5RollePingen}) \n \nleveling: See what level you are (or someone else.) §leveling {@player} \n \nlang : Set the language of the bot on your server```");

                    message.channel.send('(No Language set! "§lang" as an Administrator!)');
                   }
                  });

              break;
      default:

        break; 

  }


      if(!message.author.bot){
        let b1 = 0;
        con.query(`SELECT * FROM Leveling WHERE player_id = '`+message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows) => {
          if(err) throw err;
                      

             if(rows.length >= 1){
               console.log("test1");
              let XP = rows[0].xplevel;
              console.log("test2");
              let Gained = Math.floor(Math.random() * 20);
              console.log("test3");
              let Gained10bis30 = Gained + 10;
              console.log("test4");
              let XPneu = (parseInt(XP)) + Gained10bis30;
              console.log("test5");
              
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
                                      sql = `INSERT INTO LevelCooldown (player_id, cooldown, server_id) VALUES ('`+ message.author.id+`', `+COOLDOWN+`,'`+message.guild.id+`');`;
                                      COOLDOWN = 0;
                                      con.query(sql)
                                      
                                      let b = parseInt(LevelNR);
                                      b1 = b;


                                      if(XPneu >= (200+(200*b))){
                                        con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                                          if(err) throw err;
                                              if(rows.length >= 1){
                                                let language = rows[0].lang;
                                                if(language == "de"){
                                                  message.channel.send('Glückwunsch, <@'+message.author.id+'>! Du hast Level '+(b+1)+' erreicht!').then(msg => msg.delete({timeout: deleteTime}));
                                                       
                                                }else if(language == "en"){
                                                  message.channel.send('Congratulation, <@'+message.author.id+'>! You reached Level '+(b+1)+'!').then(msg => msg.delete({timeout: deleteTime}));
                                                       
                                                }
                                             }else{
                                              message.channel.send('Congratulation, <@'+message.author.id+'>! You reached Level '+(b+1)+'!').then(msg => msg.delete({timeout: deleteTime}));
                                                                       
                                              message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                                             }
                                            });
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
                                      
                                      sql = `INSERT INTO LevelCooldown (player_id, cooldown, server_id) VALUES ('`+ message.author.id+`', '`+COOLDOWN+`','`+message.guild.id+`');`;
                                      COOLDOWN = 0;
                                      con.query(sql)
                                      
                                     
                                      con.query(sql);

              });
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
                              if(b >= 5){
                                let LevelRolle2 = message.guild.roles.cache.find((r) => r.id == "808752092927623179");
                              if (LevelRolle2 != null && !message.member.roles.cache.has(LevelRolle2)) {
                              message.member.roles.add(LevelRolle2);
                              }
                              }
                            }

                          });

                        }
                        
              XP = 0;
              
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