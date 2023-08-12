export class ColorMapping {
  constructor() {
    this.colorsArray = [
      "Blanco",
      "Gris",
      "Celeste",
      "Naranja",
      "Morado",
      "Amarillo",
    ];
    this.bgOptions = [
      "bg-white",
      "bg-gray-50",
      "bg-primary-dark",
      "bg-secondary",
      "bg-tertiary-dark",
      "bg-quaternary-dark",
    ];
    this.colorName = [
      "white",
      "black",
      "primary",
      "secondary",
      "tertiary",
      "quaternary",
    ];
    this.textOptions = [
      "text-black",
      "text-black",
      "text-white",
      "text-black",
      "text-white",
      "text-black",
    ];
    this.opacityArray = ["100", "300", "500", "700", "900"];
  }

  getTextColor(keyColor) {
    keyColor = keyColor || "Blanco";
    keyColor = keyColor.replace(/\s/g, "");
    return this.textOptions[this.colorsArray.indexOf(keyColor)] || "text-black";
  }

  getBgColor(keyColor) {
    keyColor = keyColor || "Blanco";
    keyColor = keyColor.replace(/\s/g, "");
    return this.bgOptions[this.colorsArray.indexOf(keyColor)] || "bg-white";
  }

  getColorName(keyColor) {
    keyColor = keyColor || "Blanco";
    keyColor = keyColor.replace(/\s/g, "");
    return this.colorName[this.colorsArray.indexOf(keyColor)] || "bg-white";
  }
}
