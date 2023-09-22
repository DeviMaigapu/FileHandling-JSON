const fs = require ("fs");
const JSONFileHandler = {
  //Read data in JSON file
    ReadJSONFile: function (filePath) {
        try {
          const data = fs.readFileSync(filePath, 'utf8');
          return JSON.parse(data);
        } catch (error) {
        console.log("ERROR IN READING FILE" +error);
        }
      },
    
      // Write data to JSON file
      WriteJSONFile: function (filePath, data) {
        try {
          const jsonData = JSON.stringify(data, null, 2);
          fs.writeFileSync(filePath, jsonData, 'utf8');
          console.log("File WRITTEN SUCCESSFULLY!!!");
        } catch (error) {
          console.log("ERROR IN WRITING DATA " +error);
        }
      },

      //Append field to JSON File
      AppendFieldToJSONFile: function(filepath,fieldName, fieldValue) {
        try {
            const jsonData = JSON.parse(fs.readFileSync(filepath, 'utf8'));
            
            jsonData[fieldName] = fieldValue;
        
            fs.writeFileSync(filepath, JSON.stringify(jsonData, null, 2), 'utf8');
          } catch (error) {
            throw new Error(`Error appending field to JSON file: ${error.message}`);
          }
        },

      //Update value in the JSON file
      UpdateJSONFile: function(filepath,key,newValue) {
        try {
          const jsonData = JSON.parse(fs.readFileSync(filepath, 'utf8'));
          
          if (jsonData.hasOwnProperty(key)) {
            jsonData[key] = newValue;
      
            fs.writeFileSync(filepath, JSON.stringify(jsonData, null, 2), 'utf8');
            console.log("UPDATED SUCCESSFULLY!!!");
          } else {
            throw new Error(`Key "${key}" does not exist in the JSON data.`);
          }
        } catch (error) {
          throw new Error(`Error updating JSON value: ${error.message}`);
        }

      },

    //Delete field from JSON File
      DeleteFieldFromJSON: function(filepath,fieldName) {
        try {
          const jsonData = JSON.parse(fs.readFileSync(filepath, 'utf8'));
      
          if (jsonData.hasOwnProperty(fieldName)) {
            delete jsonData[fieldName];
      
            fs.writeFileSync(filepath, JSON.stringify(jsonData, null, 2), 'utf8');
            console.log("FIELD DELETED SUCCESSFULLY!!!")
          } else {
            throw new Error(`Field "${fieldName}" does not exist in the JSON data.`);
          }
        } catch (error) {
          throw new Error(`Error deleting field from JSON file: ${error.message}`);
        }
      },

      //Delete JSON File
      deleteJSONFile: function(filepath) {
        try{
            fs.unlinkSync(filepath);
            console.log("FILE DELETED SUCCESSFULLY!!!");
        } catch(err){
            console.log("ERROR IN DELETING FILE " +err);
        }
      }
    
    }

module.exports = JSONFileHandler;