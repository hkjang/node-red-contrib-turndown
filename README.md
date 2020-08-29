Turndown NodeRED Node
=====================

Install
-------

`npm install -g node-red-contrib-turndown`

Usage
-----

Expects a <b>msg.payload</b> with html string

## parameter example

```json
msg = {};
msg.payload = '<ul>'
msg.payload += '  <li>Coffee</li>'
msg.payload += '  <li>Tea</li>'
msg.payload += '  <li>Milk</li>'
msg.payload += '</ul>'
return msg;
```
<a href="https://www.buymeacoffee.com/gagagiga" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

## response
```json
*   Coffee
*   Tea
*   Milk
```

## sample flow

Flows can be imported and exported from the editor using their JSON format, making it very easy to share flows with others.

- Importing flows - pasting in the flow JSON directly
- Menu - Import - Clipboard - Ctrl+v - Import button 

```json
[{"id":"16dfa21a.3f416e","type":"inject","z":"f4f9470c.ca80e8","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":100,"y":80,"wires":[["f2bfa294.631ff"]]},{"id":"18978777.2678e9","type":"turndown","z":"f4f9470c.ca80e8","name":"Parse HTML to markdown","x":510,"y":80,"wires":[["1ca02f43.6ec151"]]},{"id":"1ca02f43.6ec151","type":"debug","z":"f4f9470c.ca80e8","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":750,"y":80,"wires":[]},{"id":"f2bfa294.631ff","type":"function","z":"f4f9470c.ca80e8","name":"","func":"msg = {};\nmsg.payload = '<ul>'\nmsg.payload += '  <li>Coffee</li>'\nmsg.payload += '  <li>Tea</li>'\nmsg.payload += '  <li>Milk</li>'\nmsg.payload += '</ul>'\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":280,"y":80,"wires":[["18978777.2678e9"]]}]

```
