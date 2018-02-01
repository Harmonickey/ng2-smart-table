import { Row } from "lib/data-set/row";

export interface ViewCell {
  value: string | number;
  rowData: any;
  row: Row;
}
