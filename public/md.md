Rust 复杂类型的赋值，可以称为所有权转移或者移动 (move)，就像是浅拷贝，同时让第一个变量失效。当所有者 (变量) 离开作用域范围时，这个值将被丢弃(drop)

```Rust
let s1 = String::from("hello");
let s2 = s1; // 移动

println!("{}, world!", s1); // 编译错误，use of moved value: `s1`
println!("{}, world!", s2);
```

# 元组

长度固定，类型顺序固定的组合元素。

```Rust
fn main() {
    let tup: (i32, f64, u8) = (500, 6.4, 1);
    let s1 = String::from("hello");
    let (s2, len) = calculate_length(&s1); // 使用模式匹配解构元组
    let res = calculate_length(&s1); // 使用.下标来访问
    println!("The length of '{}' is {} \n", s2, len);
    print!("The length of '{}' is {} \n",res.0, res.1);
}

fn calculate_length(s: &str) -> (&str, usize) { // 函数返回一个元组
    let length = s.len(); 
    (s, length)
}
```

# 数组

类型相同的组合元素

## 固定数组Array

长度固定，速度很快

```Rust
let arr1:[u8; 3] = [1,2,3];
let arr2 = ["hello", "world"]

println!("{:?}",arr1); // [1,2,3]
println!("{:?}",arr2); // ["hello", "world"]

let s1: &[i32] = &arr1[1..2]; // 数组切片&[T]
println!("{:?}",s1);// [2]
```

数组类型容易跟数组切片混淆，`[T;n]` 描述了一个数组的类型，而 [T] 描述了切片的类型， 因为切片是运行期的数据结构，它的长度无法在编译期得知，因此不能用 `[T;n]` 的形式去描述
在实际开发中，使用最多的是数组切片 [T]，我们往往通过引用的方式去使用 &[T]，因为后者有固定的类型大小

## 动态数组vecter

长度可变，`Vector`,`HashMap`都是标准库封装的类型，它们底层的数据都存储在内存堆上，然后通过一个存储在栈中的引用类型来访问，可以动态扩展

跟结构体一样，`Vector`类型在超出作用域范围后，会被自动删除，内部的元素也会被删除

```Rust
let mut arr1 = Vec::new(); // 实例化vector对象，
let mut arr2 = vec![1,2,4]; // 使用宏实例化对象，并且同时初始化元素
arr2.push(3) // 添加元素

// 读取元素，下标或者.get()
fn main() {
    let arr2 = vec![1,2,4]; // 使用宏实例化对象，并且同时初始化元素
    let arr3 = vec!["welcome","hello"];
    let first = arr2[0];
    let first_s = arr3[0];
    match arr2.get(1) { // 通过get()访问，不会越界报错
        Some(k) => println!("第二个元素是 {k}"),
        None => println!("去你的第二个元素，根本没有！"),
    }
}
```

vector 元素的所有权：如果 Vector 的元素类型是复杂类型，不能直接 arr[0] 来赋值

```Rust
fn vector() {
    let mut arr1 = vec![String::from("hello"), String::from("world")];
    // let a = arr1[0]; // 会编译错误，有两种解决1.使用引用 2.通过remove(),pop发生所有权转移
    let a = arr1.remove(0); // 会把元素所有权转移给a,同时元素会移动填充0下标，元素多的时候会消耗性能，vec长度也会变化
    let b = &arr1[0]; // 直接引用， 如果需要得到String, b.to_string()会生成新的Stringd对象
    println!("{:?}", arr1);
    println!("{}", b);
    println!("{}", a);
}

/**
["world"]
world
hello
```

# 字符串

## &str

字符串字面值被硬编码进程序里。不可变。没有所有权的数据类型是 `slice`。slice 允许你引用集合中一段连续的元素序列，而不用引用整个集合。`&str`本质上是`slice`

变量 `s` 绑定到了一个字符串字面值，这个字符串值是硬编码进程序代码中的。这个变量从声明的点开始直到当前**作用域**结束时都是有效的。

```Rust

{                      // s 在这里无效, 它尚未声明
    let s = "hello";   // 从此处起，s 是有效的
    // 使用 s
}                      // 此作用域已结束，s 不再有效
```

换句话说，这里有两个重要的时间点：

- 当 `s` **进入作用域** 时，它就是有效的。

- 这一直持续到它 **离开作用域** 为止。

目前为止，变量是否有效与作用域的关系跟其他编程语言是类似的。现在我们在此基础上介绍 `String` 类型。

## String

Rust 有第二个字符串类型，`String`。这个类型被分配到堆上，所以能够存储在编译时未知大小的文本。可以使用 `from` 函数基于字符串字面值来创建 `String`

这两个冒号（`::`）是运算符，允许将特定的 `from` 函数置于 `String` 类型的命名空间（namespace）下，而不需要使用类似 `string_from` 这样的名字。在第五章的 [“方法语法”（“Method Syntax”）](https://rust.bootcss.com/ch05-03-method-syntax.html#method-syntax) 部分会着重讲解这个语法而且在第七章的 [“路径用于引用模块树中的项”](https://rust.bootcss.com/ch07-03-paths-for-referring-to-an-item-in-the-module-tree.html) 中会讲到模块的命名空间。

就字符串字面值来说，我们在编译时就知道其内容，所以文本被直接硬编码进最终的可执行文件中。这使得字符串字面值快速且高效。不过这些特性都只得益于字符串字面值的不可变性。不幸的是，我们不能为了每一个在编译时大小未知的文本而将一块内存放入二进制文件中，并且它的大小还可能随着程序运行而改变。

对于 `String` 类型，为了支持一个可变，可增长的文本片段，需要在堆上分配一块在编译时未知大小的内存来存放内容。这意味着：

- 必须在运行时向操作系统请求内存。

- 需要一个当我们处理完 `String` 时将内存返回给操作系统的方法。

第一部分由我们完成：当调用 `String::from` 时，它的实现 (*implementation(实现)*) 请求其所需的内存。这在编程语言中是非常通用的。

然而，第二部分实现起来就各有区别了。在有 **垃圾回收**（*garbage collector*，*GC*）的语言中， GC 记录并清除不再使用的内存，而我们并不需要关心它。没有 GC 的话，识别出不再使用的内存并调用代码显式释放就是我们的责任了，跟请求内存的时候一样。从历史的角度上说正确处理内存回收曾经是一个困难的编程问题。如果忘记回收了会浪费内存。如果过早回收了，将会出现无效变量。如果重复回收，这也是个 bug。我们需要精确的为一个 `allocate` 配对一个 `free`。

Rust 采取了一个不同的策略：内存在拥有它的变量离开作用域后就被自动释放。下面是示例 4-1 中作用域例子的一个使用 `String` 而不是字符串字面值的版本：

```Rust

{
    let s = String::from("hello"); // 从此处起，s 是有效的

    // 使用 s
}                                  // 此作用域已结束，
                                   // s 不再有效
```

这是一个将 `String` 需要的内存返回给操作系统的很自然的位置：当 `s` 离开作用域的时候。当变量离开作用域，Rust 为我们调用一个特殊的函数。这个函数叫做 `drop`，在这里 `String` 的作者可以放置释放内存的代码。Rust 在结尾的 `}` 处自动调用 `drop`。

> 注意：在 C++ 中，这种 item 在生命周期结束时释放资源的模式有时被称作 **资源获取即初始化**（*Resource Acquisition Is Initialization (RAII)*）。如果你使用过 RAII 模式的话应该对 Rust 的 `drop` 函数并不陌生。

这个模式对编写 Rust 代码的方式有着深远的影响。现在它看起来很简单，不过在更复杂的场景下代码的行为可能是不可预测的，比如当有多个变量使用在堆上分配的内存时。现在让我们探索一些这样的场景。

切片允许你引用集合中部分连续的元素序列，而不是引用整个集合，切片本质也是引用。rust 有两种切片，分别是字符串切片 & str, 数组切片

切片只有两个字段

1. `ptr`：这是一个指向切片首元素的原始指针。它的类型是 `*const T`。

2. `len`：这是切片的长度。它的类型是 `usize`。

特点：切片只是对数据的部分引用，而且长度固定，可以通过切片获取新的切片。

```Rust
let s1 = String::from("hello");
let s2: &str = &s1[1..3]; // 字符串切片的类型标识是&str, s2是一个切片，切片对象包含指针和len,指针指向第二个元素，长度是2
print!("{} \n",s2) // el
```

字符串字面量也是切片

```Rust
let s: &str = "hello";//编译器在编译的时候直接将字符串字面量以硬编码的方式写入程序的二进制文件中，当程序被加载时，字符串字面量保存中Read Only Memory 字段中。如果有两个相同的字面量，他们的地址相同
```

Rust 在语言级别，只有一种字符串类型： `str`，它通常是以引用类型出现 `&str`，但是在标准库里，还有多种不同用途的字符串类型，其中使用最广的即是 `String`类型。`str`类型是硬编码进可执行文件，也无法被修改，但是 `String` 则是一个可增长、可改变且具有所有权的 `UTF-8` 编码字符串，`String` 类型是变长的，所以需要在堆上分配。

pointer ：heap 中值的内存地址
length ：当前值的长度、当前元素个数。
capacity ：当前缓冲区的容量，可以容纳元素的个数，当前字符串的长度超过当前分配的 capacity 会重新分配内存，会将当前字符串拷贝到新分配的内存中。

```Rust
// 字符串切片转String
let s = String::from("hello,world");
let s1 = "hello,world".to_string();// 当我们调用 &str 的 to_string 方法时，实际上就是创建一个新的 String 对象，其内容是 &str 的深拷贝。
// String转&str
let s = String::from("hello,world");
print!("String={}\n", s);
print!("&str={} \n", &s); // 所有元素
print!("&str={} \n", &s[1..3]); // 只要下标1-2的元素
```

# 结构体

由多个类型组合在一起，有结构体名称，有字段

如果要修改结构体字段，必须声明为可变类型

实例化结构体，必须为每个字段赋值（不然编译报错）

```Rust
struct User {
    active: bool,
    username: String,
    id: u64,
}
fn main() {
    let mut user1 = User{ // 实例化结构体，必须为每个字段赋值
        active:true,
        username:String::from("aaa"),
        id:1
    };
    user1.username = String::from("bbb"); // 修改结构体
    print!("{},{},{} \n", user1.active, user1.username, user1.id);
}
```

# 枚举

假设我们要处理 `IP`地址。目前被广泛使用的两个主要IP标准`IPv4`和`IPv6`。可以通过在代码中定义一个 `IpAddrKind` 枚举来表现这个概念并列出可能的 IP 地址类型，`V4` 和 `V6`。这被称为枚举的 **成员**（*variants*）：

```Rust
enum IpAddrKind {
    V4,
    V6,
}
//创建实例
let four = IpAddrKind::V4;
let six = IpAddrKind::V6;
```

枚举的成员位于其标识符的命名空间中，并使用两个冒号分开。这么设计的益处是现在 `IpAddrKind::V4` 和 `IpAddrKind::V6` 都是 `IpAddrKind` 类型的。例如，接着可以定义一个函数来获取任何 `IpAddrKind`：

```Rust
fn route(ip_type: IpAddrKind) { }
//调用
route(IpAddrKind::V4);
route(IpAddrKind::V6);
```

```Rust
enum IpAddrKind {
    V4,
    V6,
}

struct IpAddr {
    kind: IpAddrKind,
    address: String,
}

let home = IpAddr {
    kind: IpAddrKind::V4,
    address: String::from("127.0.0.1"),
};

let loopback = IpAddr {
    kind: IpAddrKind::V6,
    address: String::from("::1"),
};
```

我们可以使用一种更简洁的方式来表达相同的概念，仅仅使用枚举并将数据直接放进每一个枚举成员而不是将枚举作为结构体的一部分。`IpAddr` 枚举的新定义表明了 `V4` 和 `V6` 成员都关联了 `String` 值：

```PowerShell

enum IpAddr {
    V4(String),
    V6(String),
}

let home = IpAddr::V4(String::from("127.0.0.1"));

let loopback = IpAddr::V6(String::from("::1"));
```

用枚举替代结构体还有另一个优势：每个成员可以处理不同类型和数量的数据。IPv4 版本的 IP 地址总是含有四个值在 0 和 255 之间的数字部分。如果我们想要将 `V4` 地址存储为四个 `u8` 值而 `V6` 地址仍然表现为一个 `String`，这就不能使用结构体了。枚举则可以轻易处理的这个情况：

```Rust
enum IpAddr {
    V4(u8, u8, u8, u8),
    V6(String),
}

let home = IpAddr::V4(127, 0, 0, 1);

let loopback = IpAddr::V6(String::from("::1"));
```

这些代码展示了使用枚举来存储两种不同 IP 地址的几种可能的选择。然而，事实证明存储和编码 IP 地址实在是太常见了以致标准库提供了一个开箱即用的定义！让我们看看标准库是如何定义 `IpAddr` 的：它正有着跟我们定义和使用的一样的枚举和成员，不过它将成员中的地址数据嵌入到了两个不同形式的结构体中，它们对不同的成员的定义是不同的：

```Rust

struct Ipv4Addr {
    // --snip--
}

struct Ipv6Addr {
    // --snip--
}

enum IpAddr {
    V4(Ipv4Addr),
    V6(Ipv6Addr),
}
```

这些代码展示了可以将任意类型的数据放入枚举成员中：例如字符串、数字类型或者结构体。甚至可以包含另一个枚举！另外，标准库中的类型通常并不比你设想出来的要复杂多少。

注意虽然标准库中包含一个 `IpAddr` 的定义，仍然可以创建和使用我们自己的定义而不会有冲突，因为我们并没有将标准库中的定义引入作用域。第七章会讲到如何导入类型。

```Rust
enum Message {
    Quit,//没有关联任何数据
    Move { x: i32, y: i32 },//一个匿名结构体
    Write(String),//包含单独一个 String
    ChangeColor(i32, i32, i32),//
}

struct QuitMessage; // 类单元结构体
struct MoveMessage {
    x: i32,
    y: i32,
}
struct WriteMessage(String); // 元组结构体
struct ChangeColorMessage(i32, i32, i32); // 元组结构体
```

结构体和枚举还有另一个相似点：就像可以使用 `impl` 来为结构体定义方法那样，也可以在枚举上定义方法。这是一个定义于我们 `Message` 枚举上的叫做 `call` 的方法：

```Rust
impl Message {
    fn call(&self) {
        // 在这里定义方法体
    }
}

let m = Message::Write(String::from("hello"));
m.call();
```

方法体使用了 `self` 来获取调用方法的值。这个例子中，创建了一个值为 `Message::Write(String::from("hello"))` 的变量 `m`，而且这就是当 `m.call()` 运行时 `call` 方法中的 `self` 的值。

[Option枚举](https://flowus.cn/1f78f575-c234-469a-a609-7f33fd02c2ab)

[Hash](%E5%A4%8D%E5%90%88%E7%B1%BB%E5%9E%8B+c99cdc2f-d156-4894-8b29-bd7c0b0ef543/Hash%2048b1652a-9ee3-40a8-99c4-d894b0340dc6.md)



