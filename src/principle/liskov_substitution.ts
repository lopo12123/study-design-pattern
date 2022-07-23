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

(() => {
    let rect = new Rectangle(6, 8);

    const resize = (rect: Rectangle) => {
        rect.print()
        // width: 6, height: 8

        while (rect.width < rect.height) {
            rect.setWidth(rect.width + 1)
        }

        rect.print()
        // width: 8, height: 8
    }

    resize(rect)
})()