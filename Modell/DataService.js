export default class DataService {
  constructor() {
    console.log("DataService");
    axios.defaults.baseURL = "http://127.0.0.1:8000/api";
  }

  getData(vegpont, callback) {
    axios
      .get(vegpont)
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data);
        //console.log(response.data.irok) <-- Listában jelenítjük meg az irok adatait;
        callback(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  postData() {}

  putData() {}

  deleteData(vegpont, id, hibaCallback) {
    axios
      .delete(vegpont + "/" + id)
      .then(function (response) {
        callback(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        hibaCallback(error);
      })
      .finally(function () {
        // always executed
      });
  }
}
