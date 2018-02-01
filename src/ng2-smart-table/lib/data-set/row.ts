import { Cell } from './cell';
import { Column } from './column';
import { DataSet } from './data-set';

export class Row {

  isSelected: boolean = false;
  isInEditing: boolean = false;
  cells: Array<Cell> = [];

  showDetails: boolean = false;
  detailsSource: any;
  detailsSettings: any;

  renderComponent: any = null;

  constructor(public index: number, protected data: any, protected settings: any, protected _dataSet: DataSet) {
    this.process();
  }

  toggleDetails(details: any): void {
    if (!this.detailsSource && details && details.data) {
      this.detailsSource = details.data;
      if (details.settings) {
        this.detailsSettings = details.settings;
      }
    }
    this.showDetails = !this.showDetails;
  }

  getCell(column: Column): Cell {
    return this.cells.find(el => el.getColumn() === column);
  }

  getCells() {
    return this.cells;
  }

  getData(): any {
    return this.data;
  }

  getIsSelected(): boolean {
    return this.isSelected;
  }

  getNewData(): any {
    const values = Object.assign({}, this.data);
    this.getCells().forEach((cell) => values[cell.getColumn().id] = cell.newValue);
    return values;
  }

  setData(data: any): any {
    this.data = data;
    this.process();
  }

  process() {
    this.cells = [];
    this.renderComponent = this.settings['renderComponent'];
    this._dataSet.getColumns().forEach((column: Column) => {
      const cell = this.createCell(column);
      this.cells.push(cell);
    });
  }

  createCell(column: Column): Cell {
    const defValue = (column as any).settings.defaultValue ? (column as any).settings.defaultValue : '';
    const value = typeof this.data[column.id] === 'undefined' ? defValue : this.data[column.id];
    return new Cell(value, this, column, this._dataSet);
  }
}
