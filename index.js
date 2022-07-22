const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const fs = require('fs');
const StumbleHack = (auth) => new Promise((resolve, reject) => {fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {method: 'GET',headers: {'authorization': auth}}).then(res => res.text()).then(data => {resolve(data);}).catch(err => {reject(err);});});
(async() => {
console.clear();
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
} else if (result.includes('User')) {
const data = JSON.parse(result);
const trophy = data.User.SkillRating;
const crown = data.User.Crowns;
console.log(chalk.bgBlack(`${chalk.yellow(`Id : ${data.User.Id} - Version : ${data.User.Version} - Username : ${data.User.Username} - Country : ${data.User.Country}`)}\n${chalk.magenta(`Time : ${moment().format('HH:mm:ss')}`)} | ${chalk.blue(`Success Added Trophy : ${trophy}`)} | ${chalk.green(`Success Added Crown : ${crown}`)}`));
} else if (result == 'BANNED') { console.log(chalk.bgRed('BANNED!!!'));
break;
} else { console.log(chalk.bgRed('ERROR!!!'));
break;}}})();