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

> 合成复用原则
