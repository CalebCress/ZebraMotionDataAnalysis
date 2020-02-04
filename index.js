const rp = require('request-promise');
const fs = require('fs');

const options = {
    uri: 'https://www.thebluealliance.com/api/v3/match/2019cc_f1m1/zebra_motionworks',
    qs: {
        access_token: '461j8WDWWysm5UgVJkwtLvefN223ZPFChDFiQUpkmeGCBM4pYVCChJqUTCiUjZtM' // -> uri + '?access_token=xxxxx%20xxxxx'
    },
    headers: {
        'User-Agent': 'Request-Promise',
        'X-TBA-Auth-Key' : '461j8WDWWysm5UgVJkwtLvefN223ZPFChDFiQUpkmeGCBM4pYVCChJqUTCiUjZtM'
    },
    json: true // Automatically parses the JSON string in the response
};

rp(options)
    .then(function (response) {
        let json = response;
        json = JSON.stringify(json);
        fs.writeFileSync('file.json', json)
    })
    .catch(function (err) {
        console.log(err);
    });
