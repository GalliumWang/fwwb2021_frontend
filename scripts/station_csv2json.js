
var parse = require('csv-parse');
var fs = require("fs");

// TODO:set json type in header

async function loadCsvData(filePath){
    var data;

    let dataPromise = new Promise(function(resolve,reject){

        var filePathArray=filePath.split("/");
        var fileName=filePathArray[filePathArray.length-1];
    
        var parser = parse({columns: true}, function (err, records) {
            console.log(`csv data file (${fileName}) loaded`);
            resolve(records);
        });

        fs.createReadStream(__dirname+filePath).pipe(parser);

    });

    var data=await dataPromise;
    return data;
}

var stationData=[];
loadCsvData("/tempData/station.csv").then((result)=>{
    // for(i in result){

    // }
    result.sort((a, b) => (a["线路"] > b["线路"]) ? 1 : -1);
    // for(i of result){
    //     console.log(i);
    // }
    fs.writeFile("station.json", JSON.stringify(result, null, 4),function (err) {
        if (err) return console.log(err);
        console.log('Hello');
      });
});