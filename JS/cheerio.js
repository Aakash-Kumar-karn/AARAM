const request= require('request')

const cheerio = require('cheerio')


console.log('Before')

request('https://www.worldometers.info/coronavirus/', cb);

function cb(err, response,html){
    if(err){
        console.log(error)
    }else{
        handlehtml(html)
    }
}

function handlehtml(html){
let setTool = cheerio.load(html);

let contentArr = setTool('.maincounter-number span')
// for(let i = 0 ; i< contentarr.length ; i++){
//     let data = setTool(contentarr[i]).text()
//     console.log(data)
// }

       let totalCases = setTool(contentArr[0]).text()
       let totalDeaths = setTool(contentArr[1]).text()
       let totalRecovered = setTool(contentArr[2]).text()


       console.log('Total Cases->  ' + totalCases)
       console.log('Total Deaths->  ' + totalDeaths)
       console.log('Total Recovered->  ' + totalRecovered)


 }