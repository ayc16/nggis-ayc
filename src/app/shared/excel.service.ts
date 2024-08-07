import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import { WorkSheet } from 'xlsx';
@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  constructor() { }

  ExportDataExcel(datas: any[], columnDefs: any[], title: string) {
    let exportColumns: any[] = [];
    exportColumns.push(columnDefs);
    //exportColumns.push(columnDefs.map(({ headerName }) => headerName));

    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet([]);
      xlsx.utils.sheet_add_aoa(worksheet, exportColumns);
      this.autoFitColumns(worksheet, exportColumns);
      //Starting in the second row to avoid overriding and skipping headers
      xlsx.utils.sheet_add_json(worksheet, datas, {
        origin: 'A2',
        skipHeader: true,
      });

      //const worksheet = xlsx.utils.json_to_sheet(this.datas); -  to add just json with default header
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, title);
    });
  }
  autoFitColumns(worksheet: WorkSheet, exportColumns: any[]) {

    // let objectMaxLength: any = [];

    // exportColumns.map((arr) => {
    //   Object.keys(arr).map((key) => {
    //     let value = arr[key] === null ? '' : arr[key];
    //     let len = value.length > 10 ? value.length : 10;
    //     objectMaxLength[key] =
    //       objectMaxLength[key] >= len ? objectMaxLength[key] : len;
    //   });
    // });

    // let worksheetCols = objectMaxLength.map((w: any) => {
    //   return { width: w };
    // });
    // worksheet['!cols'] = worksheetCols;

    let objectMaxLength: any = [];

    exportColumns.map((arr) => {
      arr.map((key: any) => {
        let len = key.length > 10 ? key.length : 10;
        objectMaxLength[key] =
          objectMaxLength[key] >= len ? objectMaxLength[key] : len;
      });
    });

    let worksheetCols: any = [];
    Object.keys(objectMaxLength).map((key) => {
      let value = objectMaxLength[key] === null ? 10 : objectMaxLength[key];
      worksheetCols.push({ 'width': value });
    });

    worksheet['!cols'] = worksheetCols;
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_' + new Date().toLocaleDateString() + EXCEL_EXTENSION
    );
  }
}

