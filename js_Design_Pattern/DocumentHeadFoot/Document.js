export default class Document {
  constructor(header, footer, pages, text) {
    this.header = header;
    this.footer = footer;
    this.pages = pages;
    this.text = text;
  }

  show() {
    console.log("Header:", this.header);
    console.log("Footer:", this.footer);
    console.log("Pages:", this.pages);
    console.log("Text:", this.text);
    console.log("-------------------");
  }
}
