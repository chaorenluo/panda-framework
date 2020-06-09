var fs = require('fs');
var resolve = require('path').resolve;
var packages=resolve(__dirname+'../../../packages');
var root=resolve(__dirname+'../../../');

var componentArray={};
// componentArray[item]=`./packages/${item}/index.js`
var data=fs.readdirSync(packages);
data.forEach(item=>{
  if(item!="theme-chalk"){
    componentArray[item]=`./packages/${item}/index.js`
  }
});

let a=fs.writeFileSync(root+"/components.json",JSON.stringify(componentArray))
console.log(a,root+"components.json")