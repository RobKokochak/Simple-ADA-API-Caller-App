var axios = require('axios');

const bearerToken = 'Bearer eyJraWQiOiJaYmJJZXZIQ3F4RmdhV0Rva2RVQ1ZUTUhcL1N3U1dMaHlpR0hwdnJzVGdiMD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMWMxNDVhYi03ZTVhLTQwMGYtYjg5Ny05MmIzMWMyMGM5MDAiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTJfeWc3cXp6S3pUX0dvb2dsZSIsImFkbWluLWV1IiwiYWRtaW4tbmEiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfeWc3cXp6S3pUIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiM2Y2cGw4b3V0N2tmamRncTFobmIxMzJrbDYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU0MTg0NTI4LCJleHAiOjE2NTQyNzA5MjgsImlhdCI6MTY1NDE4NDUyOCwianRpIjoiNTMyMDgyMTItNTUyZi00YzVlLWJhNzEtNmYwMGI3MDk0YTc0IiwidXNlcm5hbWUiOiJHb29nbGVfMTA0OTQyMTc3ODMzOTU1NzAyMjg4In0.A0v83t9biqPa0po39w4_HGukH5L77_n00F3UQQv9kchOOsnTqgKK0ntXABSFDfNJPYn2jS4DbOoWoCJ3DfFJIBJ-kEBkA1p5e0RwooQQ4HiHeuF-Lwlkvvr-beVgQv0FyfjbGgZ95IiSaX9ZTZuDTNL3iJvt-FvV8DfT0adlJELb1K0A6s06EUhRi-UOMoUXRc6aE0UypTPerOPopM5CIlNFjD3dxzQd5qFxInBKvYVvzRcU0fzw6STQ8-Qc-UEnqxoEdmzzi3DkEbPkW1gYMykVTEcIxCJWrev8LBKw4caBP_XqVDwPuCajKR4fxqAg95vCEJ-iEQx9mKIGlM5WpQ';
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