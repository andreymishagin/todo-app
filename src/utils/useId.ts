interface Item {
  id: number;
  [x: string]: any;
}

export function useId<T extends Item>(array: T[]): number {
  if (array.length <= 0) return 1;
  const biggestId = Math.max(...array.map((item: T) => item.id));
  return biggestId + 1;
}
