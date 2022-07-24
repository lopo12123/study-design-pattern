//! 懒汉式
class LazyStyle3 {
    private constructor() {
    }

    private static instance: LazyStyle3

    public static getInstance() {
        if (!this.instance) {
            // 加锁后再次判断
            // 此处应加锁, 但ts不支持
            if (!this.instance) {
                this.instance = new LazyStyle3()
            }
        }

        return this.instance
    }
}

// 使用
(() => {
    const ins1 = LazyStyle3.getInstance()
    const ins2 = LazyStyle3.getInstance()

    console.log(ins1 === ins2)
    // true
})()