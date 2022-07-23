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


#[test]
fn liskov_substitution_example() {
    let mut rect = Rectangle::new(6, 8);

    rect.print();
    // width: 6, height: 8

    while rect.get_width() < rect.get_height() {
        rect.set_width(rect.get_width() + 1);
    }

    rect.print();
    // width: 8, height: 8
}