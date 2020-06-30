interface IRangeSetProps {
  intervals: number[]
}

export default class RangeSet {

  private constructor(private props: IRangeSetProps) {
    this.props = props
  }

  private static compareMax = (a: number, b: number) => a - b;

  private static compareDublicate =
    (element: number, position: number, self: number[]) =>
      self.indexOf(element) == position;

  private get orderedInterval(): number[] {
    return this.props.intervals
      .sort(RangeSet.compareMax)
      .filter(RangeSet.compareDublicate);
  }


  get value(): number[][] {
    if (this.orderedInterval.length <= 1) return [this.orderedInterval];
    let stack: number[] = [];
    let result: number[][] = [];
    this.orderedInterval.forEach((element, index, self) => {
      const next = () => self[index + 1];

      if ((element === next() - 1)) {
        if (stack.length < 1) stack.push(element);
        return;
      }
      result.push([...stack, element])
      stack = []

    })
    return result
  }

  static create(props: IRangeSetProps): RangeSet {
    return new RangeSet(props);
  }


}