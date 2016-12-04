var TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
var token = '316551319:AAFr--eGJfAfa0_TrTh53uUKVrLFWcUo-IE';

// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, function (msg, match) {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  var chatId = msg.chat.id;
  var resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

var date = new Date();

var serialport = require('serialport');
var portName = '/dev/ttyACM1';
var temp_value = 0;
var sp = new serialport.SerialPort(portName, {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false,
    parser: serialport.parsers.readline("\r\n")
});

sp.on('data', function(input) {
    temp_value = input;
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', function (msg) {
  date = new Date();
  console.log('Message received :D - ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

  );
  var chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Welcome to yo homies temperature bot \n Bove\'s room is sitting at -> Cº ' +
  temp_value + ' \n Thanks for asking nigga!');
});
