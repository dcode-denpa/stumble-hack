const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');
function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}

const GoStumble = (auth) => new Promise((resolve, reject) => {fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {method: 'GET',headers: {'authorization': auth}}).then(res => res.text()).then(data => {resolve(data);}).catch(err => {reject(err);});});

(async () => {

const result1 = await GoStumble('{"DeviceId":"a7a5873661aa6adaf5c538499f0219ed","GoogleId":"","FacebookId":"","Token":"tnWNn7Md5_m9nMBlgfEp0U3Oy2jDty14","Timestamp":1658413890,"Hash":"01b5446ff68d93c42e306d145b689df77c58538a"}');
const data1 = JSON.parse(result1);
console.log(chalk.cyan(`
░██████╗████████╗██╗░░░██╗███╗░░░███╗██████╗░██╗░░░░░███████╗  ██╗░░██╗░█████╗░░█████╗░██╗░░██╗
██╔════╝╚══██╔══╝██║░░░██║████╗░████║██╔══██╗██║░░░░░██╔════╝  ██║░░██║██╔══██╗██╔══██╗██║░██╔╝
╚█████╗░░░░██║░░░██║░░░██║██╔████╔██║██████╦╝██║░░░░░█████╗░░  ███████║███████║██║░░╚═╝█████═╝░
░╚═══██╗░░░██║░░░██║░░░██║██║╚██╔╝██║██╔══██╗██║░░░░░██╔══╝░░  ██╔══██║██╔══██║██║░░██╗██╔═██╗░
██████╔╝░░░██║░░░╚██████╔╝██║░╚═╝░██║██████╦╝███████╗███████╗  ██║░░██║██║░░██║╚█████╔╝██║░╚██╗
╚═════╝░░░░╚═╝░░░░╚═════╝░╚═╝░░░░░╚═╝╚═════╝░╚══════╝╚══════╝  ╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝
`))
console.log('Script by : Denis Putra [ @dcodedenpa ]')
console.log(chalk.red(`\nId : ${data1.User.Id}\nVersion : ${data1.User.Version}\nUsername : ${data1.User.Username}\nCountry : ${data1.User.Country}\nRegion : ${data1.User.Region}\nExperience : ${data1.User.Experience}\nCreated : ${data1.User.Created}\nLastLogin : ${data1.User.LastLogin}\n`))

  
while (true) {
const result = await GoStumble('{"DeviceId":"a7a5873661aa6adaf5c538499f0219ed","GoogleId":"","FacebookId":"","Token":"tnWNn7Md5_m9nMBlgfEp0U3Oy2jDty14","Timestamp":1658413890,"Hash":"01b5446ff68d93c42e306d145b689df77c58538a"}');
if (!result) { console.log(chalk.red(`\rAuthentication Code Not Valid!`));
break;
} else if (result.includes('User')) {
const data = JSON.parse(result);
const trophy = data.User.SkillRating;
const crown = data.User.Crowns;
console.log(chalk.bgBlack(`\r${chalk.yellow(`Jam : ${moment().format('HH:mm:ss')}`)} | ${chalk.blue(`Sukses Menambahkan Trophy : ${trophy}`)} | ${chalk.green(`Sukses Menambahkan Crown : ${crown}`)}`));
await sleep(6000);
} else if (result == 'BANNED') { console.log(chalk.bgRed(`BANNED!!!`));
break;}}})();