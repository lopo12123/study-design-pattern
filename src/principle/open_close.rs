use std::ops::Deref;

/// region abstract skin
pub trait AbstractSkin {
    fn display(&self) -> ();
}
// endregion

// region skin - default
pub struct DefaultSkin {}

impl AbstractSkin for DefaultSkin {
    fn display(&self) {
        println!("using default skin.");
    }
}
// endregion

// region skin - 1
pub struct MySkin1 {}

impl AbstractSkin for MySkin1 {
    fn display(&self) {
        println!("using my skin 1.");
    }
}
// endregion

// region player
pub struct Player {
    skin: Box<dyn AbstractSkin>,
}

impl Player {
    pub fn new(skin: Box<dyn AbstractSkin>) -> Player {
        Player { skin }
    }

    pub fn set_skin(&mut self, skin: Box<dyn AbstractSkin>) {
        self.skin = skin;
    }

    fn display(&self) {
        self.skin.deref().display();
    }
}
// endregion

pub fn open_close_example() {
    let default_skin = DefaultSkin {};
    let skin1 = MySkin1 {};

    let mut player1 = Player::new(Box::new(default_skin));

    player1.display();
    // using default skin.

    player1.set_skin(Box::new(skin1));
    player1.display();
    // using my skin 1.
}
