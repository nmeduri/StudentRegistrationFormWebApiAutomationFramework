import fs from "fs";
import { parse } from "csv-parse/sync";

export class CsvHelper {
  static readCSV(filePath: string): Record<string, string>[] {
    return parse(fs.readFileSync(filePath, "utf-8"), {
      // this method returns record after read data from csv file
      columns: true, //first row as header
      skip_empty_lines: true,
      trim: true,
    }) as Record<string, string>[]; // this is kind of Map data structure to keep records read from csv.
  }
}
