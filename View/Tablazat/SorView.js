export default class SorView {
  #obj = {};
  constructor(index, obj, szuloElem) {
    this.index = index;
    this.#obj = obj;
    this.szuloElem = szuloElem;
    console.log(this.#obj);
    this.htmlOsszerak();
  }
  htmlOsszerak() {
    let txt = "<tr>";

    for (const key in this.#obj) {
      txt += `<td>${this.#obj[key]}</td>`;
    }

    txt += "</tr>";
    this.szuloElem.append(txt);
  }
}
