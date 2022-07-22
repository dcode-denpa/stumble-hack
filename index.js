const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const fs = require('fs');
function turu(ms) {return new Promise(resolve => setTimeout(resolve, ms));}
const StumbleHack = (auth) => new Promise((resolve, reject) => {fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {method: 'GET',headers: {'authorization': auth}}).then(res => res.text()).then(data => {resolve(data);}).catch(err => {reject(err);});});
(async() => {
console.log(chalk.black(`${chalk.cyan(`░██████╗████████╗██╗░░░██╗███╗░░░███╗██████╗░██╗░░░░░███████╗  ██╗░░██╗░█████╗░░█████╗░██╗░░██╗
██╔════╝╚══██╔══╝██║░░░██║████╗░████║██╔══██╗██║░░░░░██╔════╝  ██║░░██║██╔══██╗██╔══██╗██║░██╔╝
╚█████╗░░░░██║░░░██║░░░██║██╔████╔██║██████╦╝██║░░░░░█████╗░░  ███████║███████║██║░░╚═╝█████═╝░
░╚═══██╗░░░██║░░░██║░░░██║██║╚██╔╝██║██╔══██╗██║░░░░░██╔══╝░░  ██╔══██║██╔══██║██║░░██╗██╔═██╗░
██████╔╝░░░██║░░░╚██████╔╝██║░╚═╝░██║██████╦╝███████╗███████╗  ██║░░██║██║░░██║╚█████╔╝██║░╚██╗
╚═════╝░░░░╚═╝░░░░╚═════╝░╚═╝░░░░░╚═╝╚═════╝░╚══════╝╚══════╝  ╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝`)} ${chalk.bgWhite('Script By : Denis Putra [ @dcodedenpa ]')}`))
while (true) {
const result = await StumbleHack(fs.readFileSync('./auth.json'));
if (!result) { console.log(chalk.red('Authentication Code Not Valid!'));
break;
const data = JSON.parse(result);
console.log(chalk.bgBlack(`${chalk.yellow(`Id : ${data.User.Id} - Version : ${data.User.Version} - Username : ${data.User.Username} - Country : ${data.User.Country}`)}\n${chalk.magenta(`Jam : ${moment().format('HH:mm:ss')}`)} | ${chalk.blue(`Sukses Menambahkan Trophy : ${data.User.SkillRating}`)} | ${chalk.green(`Sukses Menambahkan Crown : ${data.User.Crowns}`)}`));
await turu(1000);
} else if (result == 'BANNED') { console.log(chalk.bgRed('BANNED!!!'));
break;
} else if (result == 'SERVER_ERROR' || result.includes('User path limit exceeded')) {
continue;
} else { console.log(chalk.bgRed('ERROR!!!'));
break;}}})();