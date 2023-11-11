import { AdatLeiro } from "../AdatLeiro.js";

export default class UrlapView{
    constructor(szuloELem){
        this.szuloELem = szuloELem;
        this.htmlOsszerak();
    }
    htmlOsszerak(){
        let txt = "<form>"
        txt += `
        <label>${this.AdatLeiro[key]}</label>˙
        `
        txt += `<button type="submit" class="btn btn-default">Submit</button>`
        txt += "</form>"
    }
}