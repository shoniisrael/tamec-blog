export class ColorMapping {
  constructor() {
    this.colorsArray = [
      { key: "Blanco", value: "white" },
      { key: "Gris", value: "zinc" },
      { key: "Celeste", value: "primary" },
      { key: "Naranja", value: "secondary" },
      { key: "Morado", value: "tertiary" },
      { key: "Amarillo", value: "quaternary"}
    ];
    this.opacityArray = ["100", "300", "500", "700", "900"];
  }

  getValue(keyColor="", keyOpacity=1) {
    keyColor= keyColor.replace(/\s/g, "");
    const itemColor = this.colorsArray.find(item => item.key === keyColor);
    const color=itemColor ? itemColor.value : "white";
    if (color === "white") {
      return color;
    }
    const itemOpacity = this.opacityArray[keyOpacity-1];
    return color + "-" + itemOpacity;
  }
}
