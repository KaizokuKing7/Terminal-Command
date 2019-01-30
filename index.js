const terminalCommands = require('./terminal-commands');
const fs = require('fs');

terminalCommands.touch('hello.txt','Hello world');
terminalCommands.mkdir('newfolder');
terminalCommands.ls();