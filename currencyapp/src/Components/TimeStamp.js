import 'react-moment';


var now = new Date().toLocaleString("en-US");
now = new Date(now);
console.log('Now it is '+now.toLocaleString());

var asiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"});
asiaTime = new Date(asiaTime);
console.log('Asia time: '+asiaTime.toLocaleString())

var ukTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
ukTime = new Date(ukTime);
console.log('UK time: '+ukTime.toLocaleString())

var nYTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
nYTime = new Date(nYTime);
console.log('USA time: '+nYTime.toLocaleString())

var noLaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_Orleans"});
noLaTime = new Date(noLaTime);
console.log('USA time: '+noLaTime.toLocaleString())

var arizonaTime = new Date().toLocaleString("en-US", {timeZone: "America/Arizona"});
arizonaTime = new Date(arizonaTime);
console.log('USA time: '+arizonaTime.toLocaleString())

var indiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
indiaTime = new Date(indiaTime);
console.log('India time: '+indiaTime.toLocaleString())

var parisTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Paris"});
parisTime = new Date(parisTime);
console.log('Paris time: '+parisTime.toLocaleString());

var athensTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Athens"});
athensTime = new Date(athensTime);
console.log('Santorini time: '+athensTime.toLocaleString());

var romeTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Rome"});
romeTime = new Date(romeTime);
console.log('Rome time: '+romeTime.toLocaleString());