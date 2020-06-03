# Button 按钮
按钮用于开始一个即时操作。

## 何时使用
标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

### 按钮类型
:::demo 按钮有五种类型：默认按钮、主按钮、链接按钮、幽灵按钮、微妙按钮。
```html
<template>
  <p-button type="default">
    Default
  </p-button>
  <p-button type="primary" @click="handleClick">
    Primary
  </p-button>
  <p-button type="link">
    Link
  </p-button>
  <p-button type="ghost">
    Ghost
  </p-button>
  <p-button type="subtle">
    subtle
  </p-button>
</template>

<script>
export default {
  methods: {
    handleClick () {
      alert('panda')
    }
  }
}
</script>

```
:::

### 图标按钮

:::demo 当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。
```html
<template>
  <p-button><p-icon name="icon-home" /></p-button>
  <p-button icon="icon-home" type="primary"/>
</template>
```
:::


### 按钮组合

:::demo 可以将多个 Button 放入 n-button-group 容器中。
```html
<template>
  <p-button-group>
    <p-button type="primary">Primary 1</p-button>
    <p-button type="primary">Primary 2</p-button>
  </p-button-group>
  <p-button-group>
    <p-button>Default 1</p-button>
    <p-button>Default 2</p-button>
  </p-button-group>
</template>
```
:::

### 按钮尺寸

:::demo 按钮尺寸可以分为 lg md sm xs
```html
<template>
  <p-button type="primary" size="lg" >
    lg
  </p-button>
  <p-button type="primary" size="md">
    md
  </p-button>
  <p-button type="primary" size="sm">
    sm
  </p-button>
  <p-button type="primary" size="xs">
    xs
  </p-button>
</template>
```
:::

### 按钮加载中状态
:::demo 
```html
<template>
  <p-button type="primary"   loading/>
  <p-button type="default" loading />
  <p-button type="link" loading />
  <p-button type="ghost" loading />
   <p-button type="subtle" loading />
</template>
```
:::

### 按钮尺寸

:::demo 按钮禁用状态
```html
<template>
  <p-button type="default" disabled  >
    lg
  </p-button>
  <p-button type="primary" disabled>
    Primary
  </p-button>
  <p-button type="link" disabled>
    Link
  </p-button>
  <p-button type="ghost" disabled>
    Ghost
  </p-button>
  <p-button type="subtle" disabled>
    subtle
  </p-button>
   <p-button type="primary" >
    <p-icon name="icon-bug-report" /> subtle
  </p-button>
</template>
```
:::


### 自定义组合按钮

:::demo 
```html
<template>
  <p-button type="default"   >
    <p-icon name="icon-qrcode" /> subtle
  </p-button>
  <p-button type="link" >
   <p-icon name="icon-scan" /> subtle
  </p-button>
  <p-button type="ghost" >
    <p-icon name="icon-cut" /> subtle
  </p-button>
  <p-button type="subtle" >
    <p-icon name="icon-gift" /> subtle
  </p-button>
   <p-button type="primary" >
    <p-icon name="icon-scan" /> 
  </p-button>
</template>
```
:::

### 圆角按钮

:::demo 
```html
<template>
  <p-button type="primary" round icon="icon-qrcode"   />
  <p-button type="primary" round  icon="icon-scan" />
  
  <p-button type="primary" round  icon="icon-gift" />
  <p-button type="primary" round icon="icon-scan" />
</template>
```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 按钮类型，可选择值`default`,`primary`,`link`,`ghost`,`delicate` | String | default |
| icon | 图标按钮，可选择和图标的值一样 | String |  |
| loading    | 是否为加载状态 | Boolean     | false |
| disabled    | 禁用状态 | Boolean     | false |
| click    | 点击事件 | Function     |  |
| size    | 按钮大小，可选值`lg`,`md`,`sm`,`xs` | String     |  |
| round    | 圆角按钮 | Boolean     | false |