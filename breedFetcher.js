const args =  process.argv.slice(2)[0]; 
console.log(args);
const request = require("request");
request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode);
    const data = JSON.parse(body);
    // console.log(data);
    console.log(typeof data);
    if (response && response.statusCode === 404) {
        console.log("request error, page not found");
    }
    if (data[0] === undefined) {
        console.log("No such cat exists");
    } else {
        console.log(data[0]['description']);
    }
});