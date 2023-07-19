
// Hi, welcome to challenge one
// you will have to read the green lines in order to have a better comprehention for this code


const readline = require('readline'),
// * This code imports the readline module and assigns it to the variable readline.

rl = readline.createInterface(process.stdin, process.stdout), 
// * It creates an interface using readline.createInterface() that reads input from process.stdin and writes output to process.stdout.

prefix = 'LA-welcome_to_drone_club_&_robotics> '; 
// * The variable prefix is set to the string value 'LA-welcome_to_drone_club_&_robotics> '.


var PORT = 8889; 
var HOST = '192.168.10.1'; 

// * These lines define variables PORT and HOST with values 8889 and '192.168.10.1', respectively.


const dgram = require('dgram'); 
const client = dgram.createSocket('udp4'); 

// * This code imports the dgram module, which provides support for UDP (User Datagram Protocol) network communication.
// * It creates a UDP socket client using dgram.createSocket('udp4').



client.bind(8001); 

// * The UDP socket client is bound to listen on port 8001.



client.on('message', (msg,info) => { 
    console.log('Data received from server : ' + msg.toString()); 
    rl.prompt(); }); 

// * This sets up an event listener for the UDP socket client to handle incoming messages.
// * When a message is received, it logs the received data as a string and prompts the readline interface to accept further input.



console.log('---------------------------------------'); 
console.log('T Drone Command Console'); 
console.log('---------------------------------------'); 

// * These lines output some console messages for display purposes.



rl.on('line', (input) => { 
    commandStr = input.trim(); 
    switch(commandStr) { 
        case 'lol':
            console.log('Command: land');
            client.send('land', 0, 4, PORT, HOST, function (err, bytes) {
              if (err) throw err;
            });
              client.close();
              rl.close();
              break;
              case 'cool':
                console.log('Command: takeoff');
                client.send('takeoff', 0, 7, PORT, HOST, function (err, bytes) {
                  if (err) throw err;
                });
        
              //WRITE YOUR CODE HERE!...... 
    default: 
    console.log(`Command: ${commandStr}`); 
    client.send(commandStr, 0, commandStr.length, PORT, HOST, function(err, bytes) { if (err) throw err; }); 
    break; } }).on('close', function() { 
    console.log('Exiting Command Line: see-you-next-time!'); 
    process.exit(0); });

//  * This sets up an event listener for the readline interface rl to handle user input.
//  * When a line of input is received, it trims any leading or trailing whitespace and assigns it to the variable commandStr.
//  * It then checks the value of commandStr using a switch statement:
//  * If commandStr is 'lol', it closes the UDP socket client, closes the readline interface rl, and exits the program.
//  * Otherwise, it logs the command string and sends it as a UDP message to the server specified by HOST and PORT.



console.log(prefix + 'Input command to start the SDK mode.'); 
rl.setPrompt(prefix, prefix.length); 
rl.prompt(); 

// * These lines output a console message indicating that the user should enter commands.
// * It sets the prompt for the readline interface to prefix and its length.
// * Finally, it prompts the readline interface to accept user input.
