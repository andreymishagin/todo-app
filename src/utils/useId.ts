export function useId(array: number[]): number {
  if (array.length <= 0) return 1;
  const biggestId = Math.max(...array);
  return biggestId + 1;
}
