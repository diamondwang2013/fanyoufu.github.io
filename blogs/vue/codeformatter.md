# vue 代码规范

[官方推荐](https://cn.vuejs.org/v2/style-guide/index.html)

要有自己的一套科学的，固定的代码风格。可以从官方推荐的风格的基础上再次编辑。

## 组件命名

### 基本要求

- 单文件名使用大驼峰命名法。如：ItemList.vue
- 单文件名与组件名保持一致。
- 组件名中的单词尽量完整。ItemList.vue 要比 ItList.vue 好

## 父子组件

- 如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上：子组件名字中带上父组件的信息。
  如:
  - Item.vue （父组件）
  - ItemButton.vue （子组件）
  - ItemInput.vue （子组件）

## 公共组件

- 公共组件加 Common 前缀。如：CommonButton.vue

### 单文件组件中顶级元素的顺序

```
<template>/* ... */</template>
<script>/* ... */</script>
<style>/* ... */</style>
```

### 组件中 options 的顺序

```
export default MyComponent{
    // 1. 输入参数
    props:{},
    components:{},

    // 2. 本地信息
    data:{},
    computed:{},

    // 3. 方法
    methods:{},

    // 4. 事件
    created(){},
    mounted(){},
    watch:{},
}
```

### data 数据项 的命名

正常命名

```
data(){
	return {
		dataTable: []
	}
}
```

注意：
减少放在data中的数据项。一放其中，就会增加监听开销。如果数据只是从接口中取出，并显示，而没有修改，编辑之类的操作，则可以使用Object.freeze()。
### 普通成员变量的命令

为了在多个方法中“共享数据”，在名称的前面加_ .

```
created(){
	this._tableName = "niaho"
}
```
### props 的命名

加前缀 p。这样可以与 data()中的数据项区别开。
例如：

```
props:{
    pTitleName:{type:String,default:""}
}
```

### computed 的命名

加前缀 c。这样可以与 data()中的数据项区别开。
例如：

```
computed:{
    cTitle(){
        return this.title + "[" + this.pTitleName +"]"
    }
}
```

### 私有数据的命名

在 components 的内部，希望数据在不同的方法中共用。例如

```
methods:{
    m1(){
        this.titleName = 'a'
    },
    m2(){
        this.titleName = 'b'
    }
},
```

如果你看到上面的代码，你认为 titleName 是如如何挂载在 this 对象上的呢？ 有两个方法：

```
data(){return {titleName: ''}}
```

这是一个典型的做法，也是数据驱动视图的核心所在：当 titleName 发生变化时，视图会刷新。

还有一种写法：

```
created(){
    this.titleName = ''
}
```

此时 titleName 就只是一个  普通的成员属性：但它的值发生变化时，视图会更新。如果是这种情况，把它的名字前加\_.

这样我们有三个与 title 相关的数据了：

- this.\_titleName: 私有成员
- this.title : 在 data()中的数据
- this.pTitleName： props 中的数据
- this.cTitle： 计算属性

### methods 的命名

可以把 methods 中的函数项分成两类：

- 事件响应函数:加`前缀h`。
- 其他

举个例子：页面上有个按钮，点击之后获取数据，然后加工数据，给本地数据项赋值。

```
<template>
<div>
    <button @click="hClick"></button>
</div>
</template>
<script>
    methods:{
        hClick(){
            API.GETXXXData().then(rs=>{

                this.initData(rs);
            })
        },
        initData(data){
            ....
            return ...;
        }
    }
</script>
```

### methods 拆到单独的文件中

index.vue

```
import mFunc from './index.vue.js'

export default{
    methods:{
        ...mFunc,
        method2:{
            this.method1();
        }
    }
}
```

index.vue.js

```
export default {
    method1:{}
}
```

### Mixin 相关的命名

#### 文件组织

尽可能把全部的 mixin 放在一个文件夹中：

```

-mixin
--mixinTable.js
--mininBasic.js

```

#### mixin 文件名的命名格式为：mixin+名词.js。

如：
mixinTable.js

其中所有的设置项 统一加前缀`mx`。

- 如果是计算属性，则前缀是`mxc`
- 如果是 props,则前缀是`mxp`：

```

export default{
props:{
mxpTitleName:{type:String ,default:""}
},
computed:{
mxcTitle(){}
},
methods:{
mxTableMethod1(){

        },
    }

}
```
