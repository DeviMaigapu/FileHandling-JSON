const JSONFileHandler = require('./index'); 
const newData = {
  "name": "Bob",
  "age": 29,
  "gender": "Male",
  "Qualification": "M.Tech"
  
}
//writing data into json file

JSONFileHandler.WriteJSONFile("data.json", newData);

//reading data from json file 
const jsondata = JSONFileHandler.ReadJSONFile("data.json");
console.log(jsondata);

//appending field to json file

//JSONFileHandler.AppendFieldToJSONFile("data.json", "city","newyork");

//updating value of the field in json file

//JSONFileHandler.UpdateJSONFile("data.json", 'age', 30);

//delete field from json file

//JSONFileHandler.DeleteFieldFromJSON("data.json","gender");


//deleting json file

JSONFileHandler.deleteJSONFile("data.json");

