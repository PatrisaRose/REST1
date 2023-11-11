import { AdatLeiro } from "../AdatLeiro.js";

export default class UrlapView {
  constructor(szuloELem) {
    this.AdatLeiro = AdatLeiro;
    this.szuloELem = szuloELem;
    this.htmlOsszerak();
  }
  htmlOsszerak() {
    let txt = "<form>";
    txt += `
        <div class="form-group">
        <label for="id">${this.AdatLeiro[key]}</label>
        <input type="number" class="form-control" id="id">
        </div>
        `;
    txt += `<button type="submit" class="btn btn-default">Submit</button>`;
    txt += "</form>";
    this.szuloELem.append(txt);
  }
}
