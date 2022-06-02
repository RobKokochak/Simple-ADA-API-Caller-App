const axios = require('axios'); // getting an error that require is not defined... not sure

const bearerToken = 'Bearer eyJraWQiOiJaYmJJZXZIQ3F4RmdhV0Rva2RVQ1ZUTUhcL1N3U1dMaHlpR0hwdnJzVGdiMD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMWMxNDVhYi03ZTVhLTQwMGYtYjg5Ny05MmIzMWMyMGM5MDAiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTJfeWc3cXp6S3pUX0dvb2dsZSIsImFkbWluLWV1IiwiYWRtaW4tbmEiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfeWc3cXp6S3pUIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiM2Y2cGw4b3V0N2tmamRncTFobmIxMzJrbDYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU0MTg0NTI4LCJleHAiOjE2NTQyNzA5MjgsImlhdCI6MTY1NDE4NDUyOCwianRpIjoiNTMyMDgyMTItNTUyZi00YzVlLWJhNzEtNmYwMGI3MDk0YTc0IiwidXNlcm5hbWUiOiJHb29nbGVfMTA0OTQyMTc3ODMzOTU1NzAyMjg4In0.A0v83t9biqPa0po39w4_HGukH5L77_n00F3UQQv9kchOOsnTqgKK0ntXABSFDfNJPYn2jS4DbOoWoCJ3DfFJIBJ-kEBkA1p5e0RwooQQ4HiHeuF-Lwlkvvr-beVgQv0FyfjbGgZ95IiSaX9ZTZuDTNL3iJvt-FvV8DfT0adlJELb1K0A6s06EUhRi-UOMoUXRc6aE0UypTPerOPopM5CIlNFjD3dxzQd5qFxInBKvYVvzRcU0fzw6STQ8-Qc-UEnqxoEdmzzi3DkEbPkW1gYMykVTEcIxCJWrev8LBKw4caBP_XqVDwPuCajKR4fxqAg95vCEJ-iEQx9mKIGlM5WpQ';
const adaBaseUrl = 'https://api.dev.alldataapp.com';
const vin = "1C4SDJET7KC500079";
const enterBtn = document.getElementById('enterBtn');

const displayOp = (operation) => {
    const opDiv = document.getElementById("result");
    opDiv.appendChild(operation);
}

const getSelectedOperation = () => {
    const selectedOperation = document.getElementById('operations').value;
    return selectedOperation;
}

const getOpInfo = async () => {
    const operation = getSelectedOperation();
    let opEndpoint;
    if (operation === "getLastKnown") {
        opEndpoint = `/v1/vin/${vin}/data/lastknown`;
    }
    else if (operation === "vinDetails") {
        opEndpoint = `/v1/vin/${vin}`;
    }
    const urlToFetch = `${adaBaseUrl}${opEndpoint}`;

    let h = new Headers();
    h.append('Accept', '/*/');
    h.append('Authorization', bearerToken);

    let req = {
        method: 'GET',
        url: urlToFetch,
        headers: {
            'Authorization': bearerToken
        }
    }

    axios(req)
    .then(function (response) {
        displayOp(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    })

    // try {
    //     const response = await fetch(urlToFetch);
    //     if (response.ok) {
    //         const jsonResponse = await response.json();
    //         const response = jsonResponse.results;
    //         return response;
    //     }
    // } catch (error) {
    //     console.log(error);
    // }
} 

const showOpResult = async () => {
    const result = document.getElementById('result');
    if (result.childNodes.length > 0) {
        // write function for clearing the old result away
    }
    const info = await getOpInfo();
    displayOp(info);
}

enterBtn.onclick = showOpResult;

// From Andrew - filtering will be an issue to work through
// hit up albert

// look at on demand request