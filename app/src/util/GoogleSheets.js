import axios from 'axios';

// The sheet is public, so this isn't a big deal
const KEY = 'AIzaSyCXkA23LzBdx5ywUObyg0nAo9MpX-UziYI';
const SHEETS_API_ENDPOINT = 'https://sheets.googleapis.com';
const SPREADSHEET_ID = '1-WimflwtcXox3iJqiP9lOMXap2r-Gw9iemmZA26XGIg';

const getSpreadsheetRows = async (range) => {
    const requestString = generateValuesGetRequestString(range);
    try {
        const response = await axios.get(requestString);
        return response.data.values;
    } catch (error) {
        console.error(error);
    }
};

const generateValuesGetRequestString = (range) => {
    return `${SHEETS_API_ENDPOINT}/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${KEY}`;
};

export default getSpreadsheetRows;
