import DataService from "../Modell/DataService.js";
import TablaView from "../View/Tablazat/TablaView.js";
import UrlapView from "../View/Urlap/UrlapView.js";

export default class Controller{
    constructor(){
        this.dataService = new DataService();

        this.dataService.getData("adatok.json", this.megjelenit /*<--callback függvény*/)
       new UrlapView($(".urlap"));
    }

    megjelenit(lista){
        //console.log(lista);
        //Példányosítjuk a view-t Táblázatot
        new TablaView(lista, $(".adatok"))
    }
}