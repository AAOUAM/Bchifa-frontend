export class Doc {
  static id: number = 0; // Static ID that will increment with each new document
  file!: File;
  name!: string;
  doctype!: string;
  date!: Date;
  id!: number; // Instance-specific ID

  constructor(name: string, doctype: string, file: File) {
    this.id = Doc.id++; // Increment static id and assign to instance
    this.name = name;
    this.doctype = doctype;
    this.file = file;
    this.date = new Date(); // Automatically set the current date
  }
}
