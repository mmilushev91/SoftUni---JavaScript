function solution() {
  class Balloon {
    constructor(color, gasWeight) {
      this.color = color;
      this.gasWeight = gasWeight;
    }
  }

  class PartyBalloon extends Balloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength) {
      super(color, gasWeight);
      this.ribbonColor = ribbonColor;
      this.ribbonLength = ribbonLength;
      this._ribbon = {
        color: this.ribbonColor,
        length: this.ribbonLength,
      };
    }

    get ribbon() {
      return this._ribbon;  // Getter for the ribbon property
    }
  }

  class BirthdayBalloon extends PartyBalloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
      // Calling PartyBalloon's constructor
      super(color, gasWeight, ribbonColor, ribbonLength);
      this._text = text;  // Store the text in a private member
    }

    get text() {
      return this._text;  // Getter for the text property
    }
  }

  return {
    Balloon: Balloon,
    PartyBalloon: PartyBalloon,
    BirthdayBalloon: BirthdayBalloon,
  };
}
