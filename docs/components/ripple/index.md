# Ripple 水波纹指令

<span color="#409EFF">`v-ripple`</span> 指令 用于用户动作交互场景, 可以应用于任何块级元素

### 使用

用户 可以在组件 或者 HTML 元素上任意使用 <span color="#409EFF">`v-ripple`</span> 指令 使用基本的 <span color="#409EFF">`v-ripple`</span> 指令， `v-ripple` 接收 一个对象

###

<div class="ripple-htmlElement" v-ripple="{ duration: 0.5 }">HTML元素 中使用 v-ripple</div>


:::demo 
```vue
<template>
    <div class="ripple-button">
        <div class="ripple-htmlElement" v-ripple="{ duration: 0.5 }">HTML元素 中使用 v-ripple</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  setup() {
    return {
    }
  }
})
</script>
<style scoped>
.ripple-button {
    display: flex;
}
</style>
```
:::

### 其他

### 自定义色彩

###

您可以通过修改文本颜色来动态改变 <span color="#409EFF">Ripple</span> 的颜色 默认 Ripple 颜色 跟随文本 颜色

###

<ul><li v-for="item in [{color: '#409EFF', text: '这是一条 Primary 涟漪'}, {color: '#67C23A', text: '这是一条 Success 涟漪'}, {color: '#E6A23C', text: '这是一条 Warning 涟漪'}, {color: '#F56C6C', text: '这是一条 Danger 涟漪'}, {color: '#909399', text: '这是一条 Info 涟漪'}]" :style="{ color: item.color }" ><div class="ripple-changeTextColor"  v-ripple="{ duration: 0.39 }">{{ item.text }}</div></li></ul>

###

当然 我们也可以 自己定义我们 想要的颜色

###

<ul><li v-for="(item, index) in [{color: '#409EFF', text: '这是一条 Primary 涟漪'}, {color: '#67C23A', text: '这是一条 Success 涟漪'}, {color: '#E6A23C', text: '这是一条 Warning 涟漪'}, {color: '#F56C6C', text: '这是一条 Danger 涟漪'}, {color: '#909399', text: '这是一条 Info 涟漪'}]" :style="{ color: item.color }" ><div class="ripple-changeTextColor"  v-ripple="{ duration: 0.39, color: `${item.color.slice(0, 4)}` }">{{ item.text }}</div></li></ul>

###

### 我们还可以应用 于 其他组件 
### 例如 Button

:::demo 
```vue
<template>
    <div class="ripple-button">
        <d-button class="button" bsStyle="common" v-ripple="{ color: 'red', duration: 0.1, easing: 'linear' }">common</d-button>
        <d-button class="button" bsStyle="common" v-ripple="{  color: 'blue', duration: 0.3, easing: 'ease-in' }">common</d-button>
        <d-button class="button" bsStyle="common" v-ripple="{  color: '#fba', duration: 0.6, easing: 'ease-out' }">common</d-button>
        <d-button class="button" bsStyle="common" v-ripple="{  color: '#abf', duration: 1, easing: 'ease-in-out' }">common</d-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  setup() {
    return {
    }
  }
})
</script>
<style scoped>
.ripple-button {
    display: flex;
}
</style>
```
:::
### 例如 Icon

:::demo 
```vue
<template>
    <div class="ripple-button">
        <d-icon class="ripple-icon" name="emoji" v-ripple></d-icon>
        <d-icon class="ripple-icon" name="right" v-ripple color="#3dcca6"></d-icon>
        <d-icon class="ripple-icon" name="error" v-ripple color="#f95f5b"></d-icon>
        <d-icon class="ripple-icon" name="ban" v-ripple color="#f95f5b" size="24px"></d-icon>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  setup() {
    return {
    }
  }
})
</script>
<style scoped>
.ripple-button {
    display: flex;
}
.ripple-icon {
    padding： 25px;
}
</style>
```
:::
<style scoped>
.ripple-htmlElement {
    width: 600px;
    height: 150px; 
    background-color: #eee; 
    text-align: center; 
    line-height: 150px;
    border: 1px solid #eee50;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important;
    user-select: none;
}
.ripple-changeTextColor {
    display: block;
    padding: 10px 15px;
    user-select: none;
}
</style>

### API

|    参数     |   类型   |   默认    | 说明                     | 跳转 Demo                         | 全局配置项 |
| :---------: | :------: | :-------: | :----------------------- | --------------------------------- | --------- |
|    color     | `string` |    #00050     | 可选，默认当前文本颜色  |             |
|    initial-opacity     | `number` |  0.1   | 可选，初始交互效果透明度大小     |             |
|    final-opacity     | `number` |  0.1   | 可选，结束交互效果长按透明度大小    |    |
|    duration     | `number` |  0.4s   | 可选，持续时间    |    |
|    easing    | `string` | ease-out | 可选，缓动动画    |              |
|    delay-time    | `number` | 75ms | 可选，延迟debouceTime时间后调用 |

