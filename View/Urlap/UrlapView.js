import { AdatLeiro } from "../AdatLeiro.js";

export default class UrlapView {
  constructor(szuloElem) {
    this.AdatLeiro = AdatLeiro;
    this.szuloElem = szuloElem;
    this.htmlOsszerak();
  }
  htmlOsszerak() {
    let tipus = "number";
    let txt = "<form>";
    for (const key in AdatLeiro) {
      if (key === "nev") {
        tipus = "text";
      } else {
        tipus = "number";
      }

      txt += `
        <div class="form-group">
        <label for="${key}">${this.AdatLeiro[key]}:</label>
        <input type="${tipus}" class="form-control" id="${key}">
        </div>
        `;
    }

    txt += `<button type="submit" class="btn btn-outline-success">Submit</button>`;
    txt += "</form>";
    this.szuloElem.append(txt);
  }
}
