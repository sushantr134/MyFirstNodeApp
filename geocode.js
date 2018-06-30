const req = require('request');

module.exports.geocode = (address,callback)=>{
    
 var inp_add = encodeURIComponent(address);
req({url:`https://maps.googleapis.com/maps/api/geocode/json?address=${inp_add}`,json:true},(error,response,body)=>{
   
if(error)
{
  callback('Unable to Connect With apI',undefined);
}
else if(body.status === 'ZERO_RESULTS')
{
  callback("Unable to Find input Address ",undefined);
}
else{
  callback(undefined,`Address : ${body.results[0].formatted_address}`);
  callback(undefined,`Latitude : ${body.results[0].geometry.location.lat}`);
  callback(undefined,`Longitude : ${body.results[0].geometry.location.lng}`);
}
});
};