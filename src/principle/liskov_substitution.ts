class Rectangle {
    private _width: number
    get width() {
        return this._width
    }

    private _height: number
    get height() {
        return this._height
    }

    setWidth(width: number) {
        this._width = width
    }

    setHeight(height: number) {
        this._height = height
    }

    constructor(w: number, h: number) {
        this._width = w
        this._height = h
    }

    print() {
        console.log(`width: ${this._width}, height: ${this._height}`)
    }
}

class Square extends Rectangle {
    setWidth(width: number) {
        super.setWidth(width)
        super.setHeight(width)
    }

    setHeight(height: number) {
        super.setWidth(height)
        super.setHeight(height)
    }

    constructor(size: number) {
        super(size, size);
    }

    print() {
        super.print();
    }
}

const resize = (shape: Rectangle) => {
    shape.print()

    while (shape.width <= shape.height) {
        shape.setWidth(shape.width + 1)
    }

    shape.print()
}

// test
(() => {

    let rect = new Rectangle(6, 8);
    let square = new Square(6)

    // 正确
    resize(rect)
    // width: 6, height: 8
    // width: 8, height: 8

    // 死循环
    resize(square)
})()