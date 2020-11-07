export interface TableProps<T> {
  data: T[];
  headers: Partial<Record<keyof T, string>>;
  showOrder?: boolean;
}
