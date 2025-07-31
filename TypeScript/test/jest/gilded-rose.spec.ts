import { BaseItem, GildedRose, NormalItem, ItemFactory } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([
      ItemFactory.CreateNormalItem("Apple Pie Slice", 4, 4)
    ]);
     
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Apple Pie Slice');
  });
});
