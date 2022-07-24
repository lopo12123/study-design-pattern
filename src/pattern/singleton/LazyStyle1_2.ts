//! 懒汉式
//! 此方式线程不安全
class LazyStyle1_2 {
    private constructor() {
    }

    // 声明此类型的变量
    private static instance: LazyStyle1_2

    // 对外提供访问方式
    // 语言支持则可在此加上同步锁, 即可线程安全
    public static getInstance() {
        if (!this.instance) this.instance = new LazyStyle1_2()
        return this.instance
    }
}

// 使用
(() => {
    const ins1 = LazyStyle1_2.getInstance()
    const ins2 = LazyStyle1_2.getInstance()

    console.log(ins1 === ins2)
    // true
})()