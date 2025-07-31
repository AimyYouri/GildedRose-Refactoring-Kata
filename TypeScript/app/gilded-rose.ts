export enum ItemType {
  Normal = 0,
  Legendary = 1,
  Conjured = 2
}

export enum QualityBehavior {
  // quality decreases at the normal rate.
  Normal = 0,

  // quality increases instead of decreases.
  Reverse = 1,

  // quality decreases twice as fast.
  TwiceAsFast = 2
}

export class ItemFactory {
  static CreateNormalItem(name : string, sellingDays : number, quality : number) : NormalItem {
    return new NormalItem(name, sellingDays, quality);
  }

  static CreateConjuredItem(name : string, sellingDays : number, quality : number, qualityBehavior? : QualityBehavior) : ConjuredItem {
    return new ConjuredItem(name, sellingDays, quality);
  }

  static CreateLegendaryItem(name : string, sellingDays : number, quality : number, qualityBehavior? : QualityBehavior) : LegendaryItem {
    return new LegendaryItem(name, sellingDays, quality);
  }
}

// should not be modified.
export class Item {
  name: string;
  sellingDays: number;
  quality: number;

  constructor(name : string, sellingDays : number, quality : number) {
    this.name = name;
    this.sellingDays = sellingDays;
    this.quality = quality;
  }
}

export abstract class BaseItem extends Item {
  type: ItemType;
  qualityBehavior: QualityBehavior;

  constructor(name : string, sellingDays : number, quality : number, type : ItemType, qualityBehavior? : QualityBehavior) {
    super(name, sellingDays, quality);

    this.type = type;
    this.qualityBehavior = qualityBehavior ?? QualityBehavior.Normal;
  }

  increaseQuality() {
    if(this.quality > 50)
      return;

    this.quality++;
  } 

  decreaseQuality() {
    this.quality--;
  }
}

export class NormalItem extends BaseItem {
  constructor(name : string, sellingDays : number, quality : number) {
    super(name, sellingDays, quality, ItemType.Normal);
  }
}

export class LegendaryItem extends BaseItem {
  constructor(name : string, sellingDays : number, quality : number, qualityBehavior? : QualityBehavior) {
    super(name, sellingDays, quality, ItemType.Legendary, qualityBehavior);
  }
 }

export class ConjuredItem extends BaseItem { 
  constructor(name : string, sellingDays : number, quality : number, qualityBehavior? : QualityBehavior) {
    super(name, sellingDays, quality, ItemType.Conjured, qualityBehavior);
  }
}

export class GildedRose {
  items: Array<BaseItem>;

  constructor(items = [] as Array<BaseItem>) {
    this.items = items;
  }

  updateQuality() {
    // handle normal items.
    this.handleNormalItems(this.items.filter(item => item instanceof NormalItem));

    // handle conjured items.
    this.handleConjuredItems(this.items.filter(item => item instanceof ConjuredItem));

    // handle legendary items.
    this.handleLegendaryItems(this.items.filter(item => item instanceof LegendaryItem));

    // for (let i = 0; i < this.items.length; i++) {
    //   if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //     if (this.items[i].quality > 0) {
    //       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //         this.items[i].quality = this.items[i].quality - 1
    //       }
    //     }
    //   } else {
    //     if (this.items[i].quality < 50) {
    //       this.items[i].quality = this.items[i].quality + 1
    //       if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].sellingDays < 11) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1
    //           }
    //         }
    //         if (this.items[i].sellingDays < 6) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //     this.items[i].sellingDays = this.items[i].sellingDays - 1;
    //   }
    //   if (this.items[i].sellingDays < 0) {
    //     if (this.items[i].name != 'Aged Brie') {
    //       if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].quality > 0) {
    //           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //             this.items[i].quality = this.items[i].quality - 1
    //           }
    //         }
    //       } else {
    //         this.items[i].quality = 0 // if backstage pass
    //       }
    //     } else {
    //       if (this.items[i].quality < 50) {
    //         this.items[i].quality = this.items[i].quality + 1
    //       }
    //     }
    //   }
    // }

    return this.items;
  }

  handleBaseItem(item : BaseItem) {
      
  }

  handleNormalItems(items = [] as Array<NormalItem>) {
    items.forEach(item => {
      this.handleBaseItem(item);

      // add logic here for normal items.
    });
  }

  handleConjuredItems(items = [] as Array<ConjuredItem>) {
    items.forEach(item => {
      this.handleBaseItem(item);

      // add logic here for conjured items.
    });
  }

  handleLegendaryItems(items = [] as Array<LegendaryItem>) {
    items.forEach(item => {
      // add logic here for legendary items;
    });
  }
}

