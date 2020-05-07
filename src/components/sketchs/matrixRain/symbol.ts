import p5 from "p5";

const getRandomSymbol = () => {
    return String.fromCharCode(0x30A0 + Math.round(Math.random() * 90));
}

const getRandomNumber = (max: number, min: number = 10) => {
    return Math.floor(Math.random() * max) + min;
}

const Y_OFFSET = 21;

class Symbol {
    
    position: p5.Vector;
    velocity: p5.Vector; 
    symbol: string;
    tail: Array<Symbol>;
    constructor(p5: p5, positionX: number, isHead: boolean = true) {
        this.symbol = getRandomSymbol();
        this.initSymbol(p5, positionX);
        if(isHead) {
            this.velocity = p5.createVector(0, Math.random() * 4 + 4);
            this.tail = new Array(getRandomNumber(p5.width / 100));
            for(let i = 0; i < this.tail.length; i++) {
                this.tail[i] = new Symbol(p5, positionX, false);
            }
        }
    }

    initSymbol(p5: p5, positionX: number) {
        this.position = p5.createVector(positionX, -Math.random() * 500);
    }
    update(p5: p5, isHead: boolean = true) {
        if(Math.random() > 0.95){
            this.symbol = getRandomSymbol();
        } 
        if(isHead) {
            this.position.add(this.velocity);
            if(this.position.y > p5.height + this.tail.length * Y_OFFSET){
                this.initSymbol(p5, this.position.x);
            } 
        }
    }
    draw(p5: p5) {
        p5.fill(180, 255, 180);
        p5.text(this.symbol, this.position.x, this.position.y);
        if(this.tail) {
            for(let i = 0; i < this.tail.length; i++) {
                this.tail[i].update(p5, false);
                const calculatedY = this.position.y - (Y_OFFSET *  i) - 20
                const alpha =  255 - (5 * i);
                if(i < 2) {
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

