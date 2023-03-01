import getSpreadsheetRows from "./GoogleSheets";

const TECHNICAL_PROJECTS_SHEET_ID = 'technical-projects';

const DynamicData = {
    getTechnicalProjectsData: async () => {
        const allRows = await getSpreadsheetRows(TECHNICAL_PROJECTS_SHEET_ID);
        if (!allRows || allRows.length <= 1) {
            console.log('DynamicData:getTechnicalProjectsData: spreadsheet is empty');
            return [];
        }
        allRows.shift();
        return allRows;
    }
}

export default DynamicData;
