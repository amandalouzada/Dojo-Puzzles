const mapInterval = (input: string): number[] => {
  return input.replace(/ /g, '').split(',').map(Number);
}
export default mapInterval;