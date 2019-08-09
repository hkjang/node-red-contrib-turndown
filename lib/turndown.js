module.exports = function (RED) {
  var TurndownService = require('turndown');
  var turndownService = new TurndownService();

  function Turndown(config) {
    RED.nodes.createNode(this, config);
    var self = this;
    this.on('input', function(msg) {
      msg.payload = turndownService.turndown(msg.payload);
      self.send(msg);
    });
  }

  RED.nodes.registerType('turndown', Turndown);

};
