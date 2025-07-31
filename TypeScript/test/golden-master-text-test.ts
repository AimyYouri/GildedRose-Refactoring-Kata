import { ItemFactory, GildedRose, QualityBehavior } from '../app/gilded-rose';

console.log("OMGHAI!")

const items = [
  ItemFactory.CreateNormalItem("+5 Dexterity Vest", 10, 20),
  ItemFactory.CreateConjuredItem("Aged Brie", 2, 0, QualityBehavior.Reverse),
  ItemFactory.CreateNormalItem("Elixir of the Mongoose", 5, 7),
  ItemFactory.CreateLegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80),
  ItemFactory.CreateLegendaryItem("Sulfuras, Hand of Ragnaros", -1, 80),
  ItemFactory.CreateNormalItem("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  ItemFactory.CreateNormalItem("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  ItemFactory.CreateNormalItem("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  ItemFactory.CreateConjuredItem("Conjured Mana Cake", 3, 6)];

const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
    days = +process.argv[2];
  }

for (let i = 0; i < days + 1; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.forEach(element => {
    console.log(element.name + ', ' + element.sellingDays + ', ' + element.quality);

  });
  console.log();
  gildedRose.updateQuality();
}
