const { google } = require('googleapis');
const path = require('path');

const sheets = google.sheets('v4');

// Path to your service account key file
const keyFilePath = path.join(__dirname, '../vast-dock-421512-32208a5e997b.json');

const auth = new google.auth.GoogleAuth({
  keyFile: keyFilePath, // Path to your JSON key file
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sendToGoogleSpreadsheet = async (formData) => {
  try {
    const authClient = await auth.getClient();
    const spreadsheetId = '1wiNlrjaqt2IL85BvebEdFixroMyjZXPV0cKrRMOQLpE'; // Replace with your actual Spreadsheet ID
    const range = 'Sheet1!A1'; // Replace with your actual sheet name and range
    const valueInputOption = 'RAW';

    const resource = {
      values: [
        Object.values(formData), // Transform formData to an array of values
      ],
    };

    const response = await sheets.spreadsheets.values.append({
      auth: authClient,
      spreadsheetId,
      range,
      valueInputOption,
      resource,
    });

    if (response.status !== 200) {
      throw new Error('Failed to send data to Google Spreadsheet');
    }

    console.log('Data sent successfully to Google Spreadsheet');
  } catch (error) {
    console.error('Error sending data to Google Spreadsheet:', error);
  }
};

module.exports = { sendToGoogleSpreadsheet };
