const fs = require('fs');

var title = process.argv[2];
var body = process.argv[3];
let arr = [];
var note = {title,
                body};
        try {
        {var data = fs.readFileSync('jsonfile.json');
        arr = JSON.parse(data);
        console.log(arr);}
        }catch (e){ }

    var dup = arr.filter(()=>note.title === title);    
if(dup.length === 0)
{
    arr.push(note);
    fs.writeFileSync('jsonfile.json',JSON.stringify(arr));
  
}
  console.log(dup.length);
//console.log(readnote());