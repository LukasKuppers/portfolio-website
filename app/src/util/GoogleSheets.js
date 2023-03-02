import axios from 'axios';

// The sheet is public, so this isn't a big deal
const KEY = 'AIzaSyCXkA23LzBdx5ywUObyg0nAo9MpX-UziYI';
const SHEETS_API_ENDPOINT = 'https://sheets.googleapis.com';
const SPREADSHEET_ID = '1-WimflwtcXox3iJqiP9lOMXap2r-Gw9iemmZA26XGIg';

const getSpreadsheetDataAsJson = async (range) => {
    const requestString = generateValuesGetRequestString(range);
    try {
        const response = await axios.get(requestString);
        return convertRowsToJson(response.data.values);
    } catch (error) {
        console.error(error);
    }
};

const generateValuesGetRequestString = (range) => {
    return `${SHEETS_API_ENDPOINT}/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${KEY}`;
};

const convertRowsToJson = (rawRows) => {
    if (!rawRows || rawRows.length < 2) {
        console.log('GoogleSheets: fetched sheet has no data');
    }
    const headerValues = rawRows[0];
    const rows = [];
    for (let i = 1; i < rawRows.length; i++) {
        const row = rawRows[i];
        const jsonRow = {};
        
        for (let j = 0; j < headerValues.length; j++) {
            jsonRow[headerValues[j]] = row[j];
        }
        rows.push(jsonRow);
    }
    return rows;
};

export default getSpreadsheetDataAsJson;
