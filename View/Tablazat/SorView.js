export default class SorView {
  #obj = {};
  constructor(index, obj, szuloElem) {
    this.index = index;
    this.#obj = obj;
    this.szuloElem = szuloElem;
    console.log(this.#obj);
    this.htmlOsszerak();
    //megfogjuk a törlés gombot
    this.torlesElem = this.szuloElem.find(".torles:last");
    console.log(this.torlesElem);
    this.torlesElem.on("click", () => {
      this.trigger("sorTorles");
    });
  }

  trigger(e) {
    const esemenyem = new CustomEvent(e, { detail: this.#obj.id });
    window.dispatchEvent(esemenyem);
  }

  htmlOsszerak() {
    let txt = "<tr>";

    for (const key in this.#obj) {
      txt += `<td>${this.#obj[key]}</td>`;
    }
    txt += `<td><button class="torles">X</button></td>`;
    txt += "</tr>";
    this.szuloElem.append(txt);
  }
}
