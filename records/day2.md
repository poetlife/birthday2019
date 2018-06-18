# 预处理命令

## 定义和使用宏

### 没有参数的宏

```C
#include <stdio.h>

# define MAX 100
# define INFO "Uozoyo best lover"
int main(){
  printf("the integer is %d, the string is %s", MAX, INFO);
}
```

输出如下：

```c
the integer is 100, the string is Uozoyo best lover
```

### 带参数的宏

```c
#include <stdio.h>

# define MAX 100
# define INFO "Uozoyo best lover"
# define print(num, name) printf("the integer is %d, the string is %s", num, name)
int main(){
  print(MAX, INFO);
}
```

输出和上一节相同。

#### 可选参数

使用省略号`...`表示可选参数。

```C
# define var_print(...) printf("%s variable arguments is %s %s\n",__func__, __VA_ARGS__)

int main(){
      var_print("peng", "xiong");
}
```

输出为`main variable arguments is peng xiong`,其中`__VA_ARGS__`是将剩下的所有的参数都传递进去。

#### 字符串化运算符

`#`被称为**字符串化运算符(stringify operator)**，因为它会把宏调用时的实参转化为字符串。

```C
# define printDBL(exp) printf(#exp "=%f ", exp) // 字符串化运算符#
int main(){
     printDBL(atan(1.0)*4);
}
```

输出为`atan(1.0)*4=3.141593`

#### 记号粘贴运算符

**token-pasting operator**会把左右操作数结合在一起，作为一个记号。

```c
# define TEXT_A "hello world, uozoyo."  // 记号黏贴运算符
# define msg(x) printf(TEXT_ ## x)
int main(){
  msg(A);  // 相当于printf(TEXT_A);
}
```

输出为` hello world, uozoyo.`。

### 在宏内使用宏

宏不可以递归的展开。

### 宏的作用域和重新定义

`undef`

## 泛型宏

```C
// Generic selection ----------BUG--------------not solved
# define peng_l(x) printf("i love u forever longtime double")
# define peng_f(x) printf("i love u forever float")
# define uozoyo(x) _Generic((x),\
  long double: peng_l,\
  float: peng_f,\
  default: peng_f)(x)
```

这里写出来的代码时有问题的

有哥们实现了泛型栈，那个的话，就是可行的。https://blog.csdn.net/lovemylife1234/article/details/54918192

## 条件式编译

```c
# if defined(__GNUC__)
  #pragma message("gunc")
# else
  #pragma message("not gunc")
#endif
```

编译出来的信息为

```
C:\Users\Administrator\Desktop>gcc test.c
test.c:5:11: note: #pragma message: gunc
   #pragma message("gunc")
           ^~~~~~~
```

## 定义行号

```c
# line 2000 "uozoyo.c"  // 改变行号和文件名，这里其实可以和__LINE__和__FILE__对应
int main(){
  printf("file: %s ",__FILE__);
  printf("line: %d",__LINE__);
}
```

输出如下：`file: uozoyo.c line: 2016`即改变了原来的文件名和行数。

## 生成错误消息

```C
# ifndef __STDC__  // 生成错误信息
  # error "this compiler doesn't conform to the ANSI C standard."
#endif
```

生成错误信息并退出。

## `#pragma`命令

## `#_pragma`运算符

## 预定义的宏

