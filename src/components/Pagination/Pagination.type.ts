export interface IPaginationProps {
  page: number;
  next: null | string;
  prev: null | string;
  onAction: (value: string) => void;
}
