use std::ops::Deref;

trait Shape {
    fn get_width(&self) -> u32;
    fn set_width(&mut self, width: u32);
    fn get_height(&self) -> u32;
    fn set_height(&mut self, height: u32);
    fn print(&self);
}

struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    pub fn new(width: u32, height: u32) -> Rectangle {
        Rectangle { width, height }
    }
}

impl Shape for Rectangle {
    fn get_width(&self) -> u32 {
        self.width
    }

    fn set_width(&mut self, width: u32) {
        self.width = width;
    }

    fn get_height(&self) -> u32 {
        self.height
    }

    fn set_height(&mut self, height: u32) {
        self.height = height;
    }

    fn print(&self) {
        println!("width: {}, height: {}", self.get_width(), self.get_height());
    }
}

struct Square {
    width: u32,
    height: u32,
}

impl Square {
    pub fn new(size: u32) -> Square {
        Square {
            width: size,
            height: size,
        }
    }
}

impl Shape for Square {
    fn get_width(&self) -> u32 {
        self.width
    }

    fn set_width(&mut self, width: u32) {
        self.width = width;
        self.height = width;
    }

    fn get_height(&self) -> u32 {
        self.height
    }

    fn set_height(&mut self, height: u32) {
        self.width = height;
        self.height = height;
    }

    fn print(&self) {
        println!("width: {}, height: {}", self.get_width(), self.get_height());
    }
}

fn resize(shape: Box<impl Shape>) {
    let mut shape = shape.deref();

    shape.print();

    while shape.get_width() <= shape.get_height() {
        shape.set_width(shape.get_width() + 1);
    }

    shape.print();
}

#[test]
fn liskov_substitution_example() {
    let mut rect = Rectangle::new(6, 8);
    let mut square = Square::new(6);

    // 正确
    resize(Box::new(rect));
    // width: 6, height: 8
    // width: 8, height: 8

    // 死循环
    resize(Box::new(square));
}