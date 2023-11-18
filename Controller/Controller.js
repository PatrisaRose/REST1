import DataService from "../Modell/DataService.js";
import TablaView from "../View/Tablazat/TablaView.js";
import UrlapView from "../View/Urlap/UrlapView.js";

export default class Controller {
  constructor() {
    this.dataService = new DataService();

    this.dataService.getData(
      "/flights",
      this.megjelenit /*<--callback függvény*/
    );
    new UrlapView($(".urlap"));
    $(window).on("sorTorles", (e) => {
      console.log(e.detail);
      this.dataService.deleteData("/flights", e.detail, this.hibaCallback);
    });
  }

  hibaCallback(err){
    let hiba = err.response.status;
    switch (hiba) {
      case 500:
        alert("Hivatkozva van az adatokra!!")
        break;
    
      default:
        break;
    }
  }

  megjelenit(lista) {
    //console.log(lista);
    //Példányosítjuk a view-t Táblázatot
    new TablaView(lista, $(".adatok"));
  }
}
