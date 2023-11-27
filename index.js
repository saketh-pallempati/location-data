const arr = require('./locations')

const axios = require('axios');
const cheerio = require('cheerio');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: 'out.csv',
    header: [
        { id: 'from', title: 'FromCity' },
        { id: 'to', title: 'ToCity' },
        { id: 'distance', title: 'Distance' },
    ]
});


const processElement = async (element1, arr) => {
    const data = [];
    for (let j = 0; j < arr.length; j++) {
        const element2 = arr[j];
        const params = {
            vr: 'sehest',
            fromlat: element1.lat,
            fromlng: element1.long,
            tolat: element2.lat,
            tolng: element2.long,
            fromplace: element1.place,
            toplace: element2.place
        };
        await axios.get("https://distancecalculator.globefeed.com/India_Distance_Result.asp", { params })
            .then(res => {
                const $ = cheerio.load(res.data);
                const requiredText = $('#straightDist').text();
                const ans = requiredText.split('/');
                const distance = ans[0].replace('km', '').trim();
                const obj = {
                    "from": element1.place,
                    "to": element2.place,
                    "distance": distance
                };
                data.push(obj);
            })
            .catch(err => {
                console.error(err);
            });
    }
    return csvWriter.writeRecords(data);
};

const processArray = async (arr) => {
    for (let index = 0; index < arr.length; index++) {
        const element1 = arr[index];
        await processElement(element1, arr);
        console.log(`Done for ${element1.place}`)
    }
};

processArray(arr).then(() => console.log('All done!'));