# DRONE CLUB - BY LUIS A.

The code in this repo is based on the Tello.js source file distributed along with the Tello SDK.

Developed and tested using v8.11.1 of node.js

- You may need to import the got package with npm (just in case is needed.)
______________ 
NOTE: Enjoy programming Tello but always be careful in flying low ambiant light conditions.
______________


# 1. Usage: node t_c_l.js

the readline feature used here has command history so that the up and down arrow keys can be used to find and then re-execute commands in the current session.


Added a mission file interpreter that reads in mission files (samples included in project) and flies them.

# . node t_Mission.js

This code took some patient experimentation to get working and is **even more experimental**. It relies on the async/await feature of node.js to allow tello commands to be sent to the tello via the normal udp socket and then check for a response. There is a delay pattern built in as well so that the next command is not sent to the tello until a delay of about 5 seconds has elapsed. This makes it more likely that the tello has had enough time to execute the command. The user is prompted for a tello Mission file name and you can run multiple missions without turning off the tello.

# let's have fun! 