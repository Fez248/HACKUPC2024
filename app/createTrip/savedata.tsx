const fs=require("fs");

export const saveDataToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data));
    console.log('Data saved successfully');
  } catch (error) {
    console.error('Error saving data:', error);
  }
}
