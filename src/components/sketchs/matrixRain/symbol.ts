// import p5 from "p5";
// import { isBoolean } from "util";

// const getRandomSymbol = () => {
//   return String.fromCharCode(0x30a0 + Math.round(Math.random() * 90));
// };

// const getRandomNumber = (max: number, min: number = 10) => {
//   return Math.floor(Math.random() * max) + min;
// };

// const Y_OFFSET = 21;

// class Symbol {
//   position: p5.Vector;
//   symbol: string;
//   tail: Array<Symbol>;
//   shouldGlow: boolean;
//   shadeOffset: number;
//   rainSpeed: number;
//   changeOffset: number;

//   constructor(
//     p5: p5,
//     isMobile: boolean,
//     positionX: number,
//     isHead: boolean = true
//   ) {
//     this.symbol = getRandomSymbol();
//     this.initSymbol(p5, positionX, isMobile);
//     this.shadeOffset = 0;
//     if (isHead) {
//       this.tail = new Array(Math.floor(p5.height / 22));
//       this.shadeOffset = getRandomNumber(255, 120);
//       for (let i = 0; i < this.tail.length; i++) {
//         this.tail[i] = new Symbol(p5, isMobile, positionX, false);
//         this.tail[i].changeOffset = Math.random() * 10;
//       }
//     }
//   }

//   initSymbol(p5: p5, positionX: number, isMobile: boolean) {
//     this.position = p5.createVector(positionX, p5.height - Y_OFFSET - 20);
//     this.shadeOffset = getRandomNumber(255, 100);
//     this.rainSpeed = isMobile
//       ? getRandomNumber(80, 50)
//       : getRandomNumber(50, 20);
//   }
//   update(p5: p5) {
//     const changeSymbol = Math.random() > 0.99;

//     for (let i = this.tail.length - 1; i >= 0; i--) {
//       const calculatedY = this.position.y - Y_OFFSET * i - 20;
//       if (p5.frameCount % 2 == 0)
//         this.tail[i].shadeOffset -= getRandomNumber(10, 4);
//       if (changeSymbol) {
//         setTimeout(() => {
//           this.tail[i].shouldGlow = true;
//           this.tail[i].symbol = getRandomSymbol();
//           this.tail[i].shadeOffset = getRandomNumber(350, 100);
//           this.tail[i].changeOffset = Math.random() * 8;
//         }, 6000 - i * this.rainSpeed);
//       }
//       if (this.tail[i].shouldGlow) {
//         p5.strokeWeight(2);
//         p5.stroke(255, 100);
//         p5.fill(255, 100);
//         this.tail[i].shouldGlow = false;
//       } else {
//         p5.strokeWeight(0.2);
//         p5.stroke(80, 255, 80, this.tail[i].shadeOffset);
//         p5.fill(80, 255, 80, this.tail[i].shadeOffset);
//       }
//       if (Math.random() > this.tail[i].changeOffset) {
//         this.tail[i].symbol = getRandomSymbol();
//       }
//       p5.text(this.tail[i].symbol, this.position.x, calculatedY);
//     }
//   }
// }

// export default Symbol;
import p5 from "p5";

const getRandomSymbol = () => {
  return String.fromCharCode(0x30a0 + Math.round(Math.random() * 90));
};

const getRandomNumber = (max: number, min: number = 10) => {
  return Math.floor(Math.random() * max) + min;
};

const Y_OFFSET = 21;

class Symbol {
  position: p5.Vector;
  velocity: p5.Vector;
  symbol: string;
  tail: Array<Symbol>;
  constructor(p5: p5, positionX: number, isHead: boolean = true) {
    this.symbol = getRandomSymbol();
    this.initSymbol(p5, positionX);
    if (isHead) {
      this.velocity = p5.createVector(0, Math.random() * 4 + 4);
      this.tail = new Array(getRandomNumber(p5.width / 100));
      for (let i = 0; i < this.tail.length; i++) {
        this.tail[i] = new Symbol(p5, positionX, false);
      }
    }
  }

  initSymbol(p5: p5, positionX: number) {
    this.position = p5.createVector(positionX, -Math.random() * 500);
  }
  update(p5: p5, isHead: boolean = true) {
    if (Math.random() > 0.95) {
      this.symbol = getRandomSymbol();
    }
    if (isHead) {
      this.position.add(this.velocity);
      if (this.position.y > p5.height + this.tail.length * Y_OFFSET) {
        this.initSymbol(p5, this.position.x);
      }
    }
  }
  draw(p5: p5) {
    p5.fill(180, 255, 180);
    p5.text(this.symbol, this.position.x, this.position.y);
    if (this.tail) {
      for (let i = 0; i < this.tail.length; i++) {
        this.tail[i].update(p5, false);
        const calculatedY = this.position.y - Y_OFFSET * i - 20;
        const alpha = 255 - 5 * i;
        if (i < 2) {
          p5.fill(120, 255, 120, alpha * 3);
        } else {
          p5.fill(80, 255, 80, alpha);
        }
        p5.text(this.tail[i].symbol, this.position.x, calculatedY);
      }
    }
  }
}

export default Symbol;
