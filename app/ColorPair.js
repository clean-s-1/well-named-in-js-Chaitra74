export class ColorPair {
    constructor(majorColor, minorColor) {
      this.majorColor = majorColor;
      this.minorColor = minorColor;
    }

    formatColorPair() {
        return `Major Color:${this.majorColor},Minor Color:${this.minorColor}`;
    }
  }
