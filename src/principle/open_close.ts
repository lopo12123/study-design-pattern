/// 例子: 人物换肤

/**
 * @description 抽象类
 */
abstract class AbstractSkin {
    public abstract display(): void
}

/**
 * @description 默认皮肤
 */
class DefaultSkin extends AbstractSkin {
    public display(): void {
        console.log('using default skin.')
    }
}

/**
 * @description 自定义皮肤1
 */
class MySkin1 extends AbstractSkin {
    public display() {
        console.log('using my skin 1.')
    }
}

/**
 * @description 人物
 */
class Player {
    private skin: AbstractSkin | null = null;

    public setSkin(skin: AbstractSkin) {
        this.skin = skin
    }

    public display() {
        if (!this.skin) console.log('no skin yet!')
        else this.skin.display()
    }
}


// test
(() => {
    const defaultSkin = new DefaultSkin()
    const mySkin1 = new MySkin1()
    const player = new Player()

    player.display()
// no skin yet!

    player.setSkin(defaultSkin)
    player.display()
// using default skin.

    player.setSkin(mySkin1)
    player.display()
// using my skin 1.
})()