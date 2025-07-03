export interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
}
export interface TableConfig {
  sortable?: boolean;
  filterable?: boolean;
  paginated?: boolean;
}
export type SortDirection = 'asc' | 'desc';
