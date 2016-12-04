var serialport = require('serialport');
var portName = '/dev/ttyACM1';
var sp = new serialport.SerialPort(portName, {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false,
    parser: serialport.parsers.readline("\r\n")
});

module.exports = {
  get_temp: function () {
    sp.on('data', function(input) {
        return input;
    });
  }
};
