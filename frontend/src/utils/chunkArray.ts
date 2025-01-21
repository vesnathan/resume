interface Props<T> {
  array: T[];
  size: number;
}

export const chunkArray = <T>({ array, size }: Props<T>): T[][] => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size),
  );
};
