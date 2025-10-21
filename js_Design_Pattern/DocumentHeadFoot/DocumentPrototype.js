import Document from "./Document.js";

export default class DocumentPrototype {
  constructor(proto) {
    this.proto = proto;
  }

  clone() {
    return new Document(
      this.proto.header,
      this.proto.footer,
      this.proto.pages,
      this.proto.text
    );
  }
}
