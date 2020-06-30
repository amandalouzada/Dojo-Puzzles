import RangeSet from "./RangeSet";

import input from '../config/getInput';
import mapInterval from "./IntervalMap";

const intervals = mapInterval(input)

const rangeSet = RangeSet.create({ intervals })

console.log(rangeSet.value)

