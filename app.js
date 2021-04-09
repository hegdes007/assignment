const CSVToJSON = require("csvtojson")
const fs = require("fs");

CSVToJSON().fromFile("./customer_data_one.csv").then( source => {
    var json = JSON.stringify(source);
    fs.writeFileSync('data_one.json', json)
});

CSVToJSON().fromFile("./customer_data_two.csv").then( source => {
    var json = JSON.stringify(source);
    fs.writeFileSync('data_two.json', json)
});

var json1 = require('./data_one.json');
var json2 = require('./data_two.json');

let data= json2.concat(json1);

data = data.filter((obj, pos, arr) => {
    return arr.map(mapObj =>
          mapObj.first_name).indexOf(obj.first_name) == pos;
    });

const alphabeticalOrder = data.sort ( (a,b) =>
a.first_name > b.first_name ? 1:-1
);

var final_data = JSON.stringify(alphabeticalOrder);

fs.writeFileSync('final_data.json', final_data)