### Design Pattern

#### Overview

![overview](./assets/overview.png "overview of design patterns")

- 创建者模式: 用于描述"如何创建对象", 它的主要特点是"将对象的创建与使用分离"
- 结构型模式: 用于描述如何将类或对象按某种布局组成更大的结构
- 行为型模式: 用于描述类或对象之间如何相互协作共同完成单个对象无法单独完成的任务, 以及怎样分配职责

#### UML 图

> 类图

- 使用包含 `类名`, `属性` 和 `方法` 且带有分割线的矩形表示
- 属性/方法名称前使用符号表示其可见性
    - `+`: `public`
    - `-`: `private`
    - `#`: `protected`
- 属性的完整表示方式: `可见性 名称 : 类型 [ = 缺省值]`
- 方法的完整表示方式: `可见性 名称(参数列表) [ : 缺省值]`

![basic uml example](./assets/uml/basic.png "basic uml example")

> 类与类之间关系

- 关联关系: 对象之间的一种引用关系, 用于表示一类对象与另一类对象之间的联系
    - 单向关联  
      ![单向关联](./assets/uml/one-way-association.png "one-way-association")
    - 双向关联  
      ![双向关联](./assets/uml/two-way-association.png "two-way-association")
    - 自关联  
      ![自关联](./assets/uml/self-association.png "self-association")
- 聚合关系: 是关联关系的一种, 是强关联关系, 是整体和部分的关系(部分可以脱离整体而存在)  
  ![聚合关系](./assets/uml/aggregation.png "aggregation")
- 组合关系: 表示整体与部分的关系, 但它是一种更强烈的聚合关系(部分不能脱离整体而存在)  
  ![组合关系](./assets/uml/combination.png "combination")
- 依赖关系: 是一种使用关系, 它是对象之间耦合度最弱的一种关联方式, 是临时性的关联  
  ![依赖关系](./assets/uml/dependent.png "dependent")
- 继承关系: 是对象之间耦合度最大的一种关系, 表示一般与特殊的关系, 是父类与子类之间的关系
  ![继承关系](./assets/uml/inherit.png "inherit")
- 实现关系: 是接口与实现类之间的关系, 类实现了接口, 类中的操作实现了接口中所声明的所有抽象操作  
  ![实现关系](./assets/uml/accomplish.png "accomplish")

#### 软件设计原则

> 开闭原则 `Open Close Principle`

- 对扩展开放, 对修改关闭
- 在程序需要进行扩展时, 不能去修改原有的代码, 实现热插拔效果.
- 使用接口和抽象类
- 实例([typescript](./src/principle/open_close.ts), [rust](./src/principle/open_close.rs))

> 里氏代换原则 `Liskov Substitution Principle`

- 任何基类可以出现的地方, 子类一定可以出现.
    - 通俗理解: 子类可以扩展父类的功能, 但不能改变父类原有的功能
    - 即: 子类继承父类时, 除添加新的方法完成新的功能外, 尽量不要重写父类的方法
- 实例([typescript](./src/principle/liskov_substitution.ts), [rust](./src/principle/liskov_substitution.rs))
    - 正方形继承长方形却无法适用 `resize` 方法, 违反里氏代换原则

> 依赖倒转原则 `Dependence Inversion Principle`

- 高层模块不应该依赖低层模块, 两者都应该依赖其抽象
- 抽象不应该依赖细节, 细节应该依赖抽象
- 即: 对抽象进行编程, 不要对实现进行编程, 以降低客户与实现模块之间的耦合
- 实例([typescript](./src/principle/dependence_inversion.ts))
    - 组装电脑的部件需要依赖于抽象而不是具体(此处指具体品牌)

> 接口隔离原则 `Interface Segregation Principle`

- 客户端不应该被迫依赖于它不使用的方法: 一个类对另一个类的依赖应该建立在最小的接口上
- 实例([typescript](./src/principle/interface_segregation.ts))

> 迪米特法则

- 最少知识原则: 如果两个软件实体无需通信, 那么就不应当发生直接的互相调用, 可以通过第三方转发该调用
- 目的: 降低类之间的耦合度, 提高模块的相对独立性

> 合成复用原则

- 尽量先使用组合或者聚合等关联关系来实现, 其次才考虑使用继承关系来实现
- 采用继承复用的缺点
    - 破坏了类的封装性. 因为继承会将父类的实现细节暴露给子类, 父类对子类是透明的, 所以这种复用又称为'白箱'复用
    - 子类与父类的耦合度高. 父类的实现的任何改变都会导致子类的实现发生改变, 这不利于类的扩展和维护
    - 限制了复用的灵活性. 从父类继承而来的实现是静态的, 在编译时已经定义, 在运行时不可能发生变化
- 采用组合或聚合复用的优点
    - 维持了类的封装性. 因为成分对象的内部细节是新对象看不见的, 所以这种复用又称为'黑箱'复用
    - 对象间耦合度低. 可以在类的成员位置声明抽象
    - 复用的灵活性高. 这种复用可以在运行时动态进行, 新对象可以动态地引用与成分对象类型相同的对象

#### 设计模式 - 创建者模式

- 单例模式
- 工厂方法模式
- 抽象工程模式
- 原型模式
- 建造者模式

> 单例模式

- 饿汉式: 类加载就会导致该单实例对象被创建
    - [静态变量方式](./src/pattern/singleton/HungaryStyle1.ts)
    - [静态代码块方式](./src/pattern/singleton/HungaryStyle2.ts)
    - 枚举方式
- 懒汉式: 类加载不会导致该单实例对象被创建, 而是首次使用该对象时才会创建
    - [方式1(线程不安全)](./src/pattern/singleton/LazyStyle1_2.ts)
    - [方式2(使用同步锁)](./src/pattern/singleton/LazyStyle1_2.ts)
    - [方式3(双重检查锁)](./src/pattern/singleton/LazyStyle3.ts)
    - 方式4(静态内部类)
- 破坏单例模式
    - 序列化/反序列化
    - 反射

> 工厂模式

--- 

不写了, 没必要.
