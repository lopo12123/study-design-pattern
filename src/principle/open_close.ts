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
    private skin: AbstractSkin;

    public setSkin(skin: AbstractSkin) {
        this.skin = skin
    }

    public display() {
        this.skin.display()
    }
}
