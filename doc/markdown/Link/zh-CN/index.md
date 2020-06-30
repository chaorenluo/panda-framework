
# Link 文字链接


##### 文字超链接


##  基础用法

##### 基础的文字链接用法。

:::demo
```html
<template>
  <pa-link href="https://element.eleme.io" target="_blank">默认链接</pa-link>
  <pa-link type="primary">主要链接</pa-link>
  <pa-link type="success">成功链接</pa-link>
  <pa-link type="warning">警告链接</pa-link>
  <pa-link type="danger">危险链接</pa-link>
  <pa-link type="info">信息链接</pa-link>
</template>
```
:::

##  禁用状态

##### 文字链接不可用状态。

:::demo
```html
<template>
  <pa-link disabled>默认链接</pa-link>
  <pa-link type="primary" disabled>主要链接</pa-link>
  <pa-link type="success" disabled>成功链接</pa-link>
  <pa-link type="warning" disabled>警告链接</pa-link>
  <pa-link type="danger" disabled>危险链接</pa-link>
  <pa-link type="info" disabled>信息链接</pa-link>
</template>
```
:::

##  下划线

##### 文字链接下划线。

:::demo
```html
<template>
   <pa-link :underline="false">无下划线</pa-link>
  <pa-link>有下划线</pa-link>
</template>
```
:::


##  图标

##### 带图标的文字链接可增强辨识度。

:::demo
```html
<template>
  <pa-link icon="pa-icon-edit">编辑</pa-link>
  <pa-link>查看<i class="pa-icon-view pa-icon--right"></i> </pa-link>
</template>
```
:::

## API

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
type | 类型 | string | primary / success / warning / danger / info/ | default
disabled | 是否禁用 | boolean | -| false
href | 链接 | string | - | -
icon | 图标 | string | - | -
underline | 是否有下划线 | boolean | - | true
click | 点击事件 | function | - | -
