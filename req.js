
const yargs = require('yargs');
const geocode = require('./geocode');

var commands = yargs
     .option({
         a:{
            demand:true,
            alias:'address',
            describe:'Address Need',
            string:true
         }    
     })
     .help()
     .alias('help','h')
     .argv;


geocode.geocode(commands.a,(errorMsg,Results)=>{
  if(errorMsg)
  {
    console.log(errorMsg);
  }
  else
   {
    console.log(JSON.stringify(Results,undefined,2));
   }
});      