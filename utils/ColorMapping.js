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
      "bg-zinc-50",
      "bg-primary-900",
      "bg-secondary-500",
      "bg-tertiary-500",
      "bg-quaternary-500",
    ];
    this.textOptions = ["text-black", "text-black", "text-white"];
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
}
