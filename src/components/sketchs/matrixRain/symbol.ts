import p5 from "p5";


const getRandomSymbol = () => {
    return String.fromCharCode(0x30A0 + Math.round(Math.random() * 96));
}

const getRandomNumber = (max: number, min: number = 10) => {
    return Math.floor(Math.random() * max) + min;
}

const Y_OFFSET = 20;

const checkMouseHover = (itemX: number, itemY: number, mouseX: number, mouseY:number) => {
    return mouseX >= itemX && mouseX <= itemX + 30 && mouseY >= itemY && mouseY <= itemY + 30;
}

class Symbol {
    
    position: p5.Vector;
    velocity: p5.Vector; 
    symbol: string;
    randomChange: number;
    tail: Array<Symbol>;
    lastSymbol: string;
    constructor(p5: p5, isHead: boolean = true) {
        this.initSymbol(p5);
        if(isHead) {
            this.tail = new Array(getRandomNumber(25));
            for(let i = 0; i < this.tail.length; i++) {
                this.tail[i] = new Symbol(p5, false);
            }
        }
    }

    initSymbol(p5: p5) {
        this.symbol = getRandomSymbol();
        this.randomChange = 0;
        this.position = p5.createVector(Math.random() * p5.width, -100);
        this.velocity = p5.createVector(0, Math.random() * 1.5 + 1.4);
       
    }

    update(p5: p5, isHead: boolean = true) {
        if(isHead) {
            this.position.add(this.velocity);
            this.randomChange = Math.random();

            if(this.randomChange > 0.998){
                this.symbol = getRandomSymbol();
                this.tail.forEach((e, i) => setTimeout(() => {
                    e.lastSymbol = e.symbol;
                    e.symbol = getRandomSymbol();
                    p5.fill(0, 200, 0);
                }, 75 * i))
            } 

            if(this.position.y > p5.height + this.tail.length * Y_OFFSET * this.velocity.y / 2){
                this.initSymbol(p5);
            } 
        }
    }
    draw(p5: p5) {
        p5.textSize(Math.round(this.velocity.y * 10));
        if(this.tail) {
            for(let i = 0; i < this.tail.length; i++) {
                const calculatedY = this.position.y - (Y_OFFSET * this.velocity.y / 2 * i)
                if(checkMouseHover(this.position.x, calculatedY, p5.mouseX, p5.mouseY)) {
                    p5.fill(200, 200, 200);
                } else {
                    const alpha =  255 - (220 / this.tail.length  * i);
                    const alphaOffset = this.tail[i].lastSymbol !== this.tail[i].symbol ? alpha + 100: alpha;
                    p5.fill(0, 200, 0, alphaOffset);
                    this.tail[i].lastSymbol = this.tail[i].symbol;
                }
                p5.text(this.tail[i].symbol, this.position.x, calculatedY);
                
            } 
        }
    }
}

export default Symbol;

