export class RegExHelper {
  private content: string;

  constructor() {;
  }
  setText(text: string) {
    this.content=text
  }
  removeHeader() {
    const text = this.content;
    var result: string = text.replace(/^---[\s\S]*?^---/m, "");
    this.content = result;
  }

  removeCode() {
    const text = this.content;
    var result: string = text.replace(/```[\s\S]*?```/m, "");
    this.content = result;
  }

  removeLinks() {
    const text = this.content;
    var result: string = text.replace(/!/g, "");
    result = result.replace(/(?<=\[\[)[^\|\]]+(?=\|.*?\]\])/g, "");
    result = result.replace(/\([^)]*\)/gm, "");
    result = result.replace(/[\[\]]/g, "");
    this.content = result;
  }

  removeSpecialCharacters() {
    const text = this.content;
    var result: string = text.replace(/[*_#><():|"~`'{}]/g, "");
    this.content = result;
  }

  getcleanContent() {
    this.removeHeader();
    this.removeCode();
    this.removeLinks();
    this.removeSpecialCharacters();
    return this.content;
  }
}
