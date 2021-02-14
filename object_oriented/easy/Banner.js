class Banner {
  constructor(message, fixedLength = Infinity) {
    this.message = message;
    this.fixedLength = fixedLength;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    let toRepeat = this.message.length > this.fixedLength ? this.fixedLength : this.message.length;
    return `+-${'-'.repeat(toRepeat)}-+`
  }

  emptyLine() {
    let toRepeat = this.message.length > this.fixedLength ? this.fixedLength : this.message.length;
    return `| ${' '.repeat(toRepeat)} |`
  }

  messageLine() {
    if (this.message.length > this.fixedLength) {
      let message = this.message.split('');
      let returnMessage = '';
      while (message.length > 0) {
        let messagePiece = message.splice(0, this.fixedLength).join('');
        if (messagePiece.length === this.fixedLength) returnMessage += `| ${messagePiece} |\n`;
        else returnMessage += `| ${messagePiece}${' '.repeat(this.fixedLength - messagePiece.length)} |`;
      }

      return returnMessage;
    }
    return `| ${this.message} |`;
  }
}

// Complete this class so that the test cases shown below work as intended. You are free to add any properties you need.

// You may assume that the input will always fit in your terminal window.

// Test Cases

let banner1 = new Banner('To boldly go where no one has gone before.', 13);
banner1.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

let banner2 = new Banner('');
banner2.displayBanner();
// +--+
// |  |
// |  |
// |  |
// +--+
