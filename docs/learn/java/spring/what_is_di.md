# 什么是DI（依赖注入）？

## 什么是依赖注入

依赖注入（Dependency Injection，DI）的实现原理是通过将对象的依赖关系的创建和管理工作交给外部的一个容器来实现的。

容器负责创建对象并将其依赖关系解析为它们所需的实例。

这些实例可以通过容器配置文件或编程方式配置。

## 实现方式

依赖注入通常有以下三种方式：

1. 构造函数注入（Constructor Injection）：通过构造函数将依赖项注入到类中

```java
public class MyClass {
    private MyDependency myDependency;
    
    public MyClass(MyDependency myDependency) {
        this.myDependency = myDependency;
    }
}
```

2. Setter方法注入（Setter Injection）：通过公共Setter方法将依赖项注入到类中

```java
public class MyClass {
  private MyDependency myDependency;
  
  public void setMyDependency(MyDependency myDependency) {
    this.myDependency = myDependency;
  }
}
```

3. 接口注入（Interface Injection）：通过实现接口将依赖项注入到类中

```java
public interface DependencyInjector {
  void inject(MyClass myClass);
}

public class MyClass implements Injectable {
  private MyDependency myDependency;
  
  @Override
  public void injectDependency(MyDependency myDependency) {
    this.myDependency = myDependency;
  }
}
```
