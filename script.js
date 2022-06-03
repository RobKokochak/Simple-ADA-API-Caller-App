var axios = require('axios');

// paste your Bearer token here, format 'Bearer {token}'
const bearerToken = 'Bearer ';
// ------------------------------

const adaBaseUrl = 'https://api.dev.alldataapp.com';
const vin = "1C4SDJET7KC500079";
const enterBtn = document.getElementById('enterBtn');

const updateDiv = (data) => {
    const dataDiv = document.getElementById("result");
    const opText = document.createElement('p');
    opText.innerHTML = data;
    dataDiv.appendChild(opText);
}

const getSelectedOp = () => {
    const selectedOp = document.getElementById('operations').value;
    return selectedOp;
}

const populateOpData = () => {
    const operation = getSelectedOp();
    let opEndpoint;
    if (operation === "vinDetails") {
        opEndpoint = `/v1/vin/${vin}`;
    }
    else if (operation === "getLastKnown") {
        opEndpoint = `/v1/vin/${vin}/data/lastknown`;
    }
    const urlToFetch = `${adaBaseUrl}${opEndpoint}`;

    var config = {
        method: 'get',
        url: urlToFetch,
        headers: { 
          'Authorization': bearerToken
        },
        data : ''
      };
      
      axios(config)
      .then(function (response) {
        updateDiv(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
        updateDiv('Error - data not fetched.');
      });
} 

const updatePage = () => {
    const resultDiv = document.getElementById('result');
    if (resultDiv.childNodes.length > 0) {
        // write function for clearing the old result away when enter button is hit again
    }
    populateOpData();
}

enterBtn.onclick = updatePage;

// From Andrew - look at the 'on demand' request - will be useful later