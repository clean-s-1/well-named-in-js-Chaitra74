export class ColorPair {
    constructor(majorColor, minorColor) {
      this.majorColor = majorColor;
      this.minorColor = minorColor;
    }

    formatColorPair() {
        return `MajorColor:${this.majorColor},MinorColor:${this.minorColor}`;
    }
  }