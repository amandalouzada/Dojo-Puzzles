interface IRangeSetProps {
  intervals: number[]
}

export default class RangeSet {

  private constructor(private props: IRangeSetProps) {
    this.props = props
  }

  get value(): number[] {
    if (this.props.intervals.length <= 1) return this.props.intervals;
    this.props.intervals = this.props.intervals.sort(RangeSet.compareMaxFn).filter(RangeSet.compareDublicateFn);
    let stack: any[] = [];
    let result: any[] = [];
    this.props.intervals.forEach((a, index) => {
      if ((a === this.props.intervals[index + 1] - 1)) {
        stack.push(a)
      } else {
        result.push([...stack, a])
        stack = []
      }
    })
    return result
  }

  static create(props: IRangeSetProps): RangeSet {
    return new RangeSet(props);
  }

  private static compareMaxFn = (a: number, b: number) => a - b;

  private static compareDublicateFn =
    (element: number, position: number, self: number[]) =>
      self.indexOf(element) == position;
}