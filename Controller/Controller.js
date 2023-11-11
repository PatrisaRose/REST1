import DataService from "../Modell/DataService.js";
import TablaView from "../View/Tablazat/TablaView.js";

export default class Controller{
    constructor(){
        this.dataService = new DataService();

        this.dataService.getData("adatok.json", this.megjelenit /*<--callback függvény*/)
    }

    megjelenit(lista){
        //console.log(lista);
        //Példányosítjuk a view-t Táblázatot
        new TablaView(lista, $(".adatok"))
    }
}