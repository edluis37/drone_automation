/*
  Based On  
	Rzye Tello
	http://www.ryzerobotics.com
Luis Amaya Software Developer, written for educational purposes only.
UK -london/ 2022

*/

const readline = require('readline'),
  rl = readline.createInterface(process.stdin, process.stdout),
  prefix = 'LA-welcome_to_drone_club_&_robotics> ';


var PORT = 8889;
var HOST = '192.168.10.1';

const dgram = require('dgram');
const client = dgram.createSocket('udp4');

client.bind(8001);

client.on('message', (msg,info) => {
	console.log('Data received from server : ' + msg.toString());
	rl.prompt();
});								


console.log('---------------------------------------');
console.log('T Drone Command Console');
console.log('---------------------------------------');

rl.on('line', (input) => {
  commandStr = input.trim();
  switch(commandStr) {
    case 'lol':
	  client.close();
	  rl.close();
      break;
    default:
      console.log(`Command: ${commandStr}`);
      client.send(commandStr, 0, commandStr.length, PORT, HOST, function(err, bytes) {
		  if (err) throw err;
		});
      break;
  }
}).on('close', function() {
  console.log('Exiting Command Line: see-you-next-time!');
  process.exit(0);
});

console.log(prefix + 'Enter Commands.');
rl.setPrompt(prefix, prefix.length);
rl.prompt();

