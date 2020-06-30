import { iteratee } from "lodash"
import mapInterval from "./IntervalMap";
import RangeSet from "./RangeSet";

const sum = (a: number, b: number) => a + b;

describe('Range', () => {

  it('should be able range set', () => {
    const intervals = mapInterval('100,100, 101, 102, 103, 104, 105, 110, 111, 113, 114, 115, 150')
    const rangeSet = RangeSet.create({ intervals })

    expect(rangeSet).toHaveProperty('value');
    expect(rangeSet.value).toHaveLength(4);
    expect(rangeSet.value[0]).toStrictEqual([100, 101, 102, 103, 104, 105]);
    expect(rangeSet.value[1]).toStrictEqual([110, 111]);
    expect(rangeSet.value[2]).toStrictEqual([113, 114, 115]);
    expect(rangeSet.value[3]).toStrictEqual([150]);

  })
})