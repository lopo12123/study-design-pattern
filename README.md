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

- 关联关系
    - 单向关联  
      ![单向关联](./assets/uml/one-way-association.png "单向关联")
    - 双向关联  
      ![双向关联](./assets/uml/two-way-association.png "双向关联")
    - 自关联  
      ![自关联](./assets/uml/self-association.png "自关联")
- 聚合关系
- 组合关系
- 依赖关系
- 继承关系
- 实现关系
