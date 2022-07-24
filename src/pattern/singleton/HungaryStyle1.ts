//! 饿汉式 - 静态变量方式
class HungaryStyle1 {
    // 私有构造方法: 避免外部构造
    private constructor() {
    }

    // 在本类中创建本类对象
    private static instance = new HungaryStyle1()

    //
    public static getInstance() {
        return this.instance
    }
}

// 使用
(() => {
    const ins1 = HungaryStyle1.getInstance()
    const ins2 = HungaryStyle1.getInstance()

    console.log(ins1 === ins2)
    // true
})()