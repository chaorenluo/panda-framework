
# button 


### 基础用法

:::demo 按钮基础用法
```html
<template>
  <pa-button >默认按钮</pa-button>
  <pa-button type="primary">主要按钮</pa-button>
    <pa-button type="success">成功按钮</pa-button>
  <pa-button type="info">信息按钮</pa-button>
  <pa-button type="warning">警告按钮</pa-button>
  <pa-button type="danger">危险按钮</pa-button>
  <div style="margin-top: 10px">
      <pa-button plain>朴素按钮</pa-button>
  <pa-button type="primary" plain>主要按钮</pa-button>
  <pa-button type="success" plain>成功按钮</pa-button>
  <pa-button type="info" plain>信息按钮</pa-button>
  <pa-button type="warning" plain>警告按钮</pa-button>
  <pa-button type="danger" plain>危险按钮</pa-button>
  </div>
  <div style="margin-top: 10px">
   <pa-button round>圆角按钮</pa-button>
  <pa-button type="primary" round>主要按钮</pa-button>
  <pa-button type="success" round>成功按钮</pa-button>
  <pa-button type="info" round>信息按钮</pa-button>
  <pa-button type="warning" round>警告按钮</pa-button>
  <pa-button type="danger" round>危险按钮</pa-button>
  </div>
</template>
```
:::

### 禁用状态

:::demo 按钮不可用状态。

```html
<template>
  <pa-button disabled>默认按钮</pa-button>
  <pa-button type="primary" disabled>主要按钮</pa-button>
    <pa-button type="success" disabled>成功按钮</pa-button>
  <pa-button type="info" disabled>信息按钮</pa-button>
  <pa-button type="warning" disabled>警告按钮</pa-button>
  <pa-button type="danger" disabled>危险按钮</pa-button>
  <div style="margin-top: 10px">
      <pa-button plain disabled>朴素按钮</pa-button>
  <pa-button type="primary" plain disabled>主要按钮</pa-button>
  <pa-button type="success" plain disabled>成功按钮</pa-button>
  <pa-button type="info" plain disabled>信息按钮</pa-button>
  <pa-button type="warning" plain disabled>警告按钮</pa-button>
  <pa-button type="danger" plain disabled>危险按钮</pa-button>
  </div>

</template>
```
:::

### 不同尺寸


:::demo Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

```html
<template>
  <pa-button>默认按钮</pa-button>
  <pa-button size="medium">中等按钮</pa-button>
  <pa-button size="small">小型按钮</pa-button>
  <pa-button size="mini">超小按钮</pa-button>
  <div style="margin-top: 10px">
    <pa-button round>默认按钮</pa-button>
    <pa-button size="medium" round>中等按钮</pa-button>
    <pa-button size="small" round>小型按钮</pa-button>
    <pa-button size="mini" round>超小按钮</pa-button>
  </div>

</template>
```
:::

### 文字按钮


:::demo 没有边框和背景色的按钮。

```html
<template>
  <pa-button type="text">文字按钮</pa-button>
  <pa-button type="text" disabled>文字按钮</pa-button>

</template>
```
:::

### 图标按钮


:::demo 带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

```html
<template>
  <pa-button type="primary" icon="pa-icon-edit"></pa-button>
  <pa-button type="primary" icon="pa-icon-share"></pa-button>
  <pa-button type="primary" icon="pa-icon-search"></pa-button>
  <pa-button type="primary" icon="pa-icon-search">搜索</pa-button>
  <pa-button type="primary">上传<i class="p-icon-upload p-icon--right"></i></pa-button>
  
</template>
```
:::

### 加载中



:::demo 点击按钮后进行数据加载操作，在按钮上显示加载状态。

```html
<template>
  <pa-button type="primary" :loading="true">加载中</pa-button>
</template>
```
:::


### 按钮组

:::demo 点以按钮组的方式出现，常用于多项类似操作。

```html
<template>
  <pa-button-group>
    <pa-button type="primary">上一页</pa-button>
    <pa-button type="primary">下一页</pa-button>
  </pa-button-group>
  <pa-button-group>
  <pa-button type="primary" icon="pa-icon-edit"></pa-button>
  <pa-button type="primary" icon="pa-icon-share"></pa-button>
  <pa-button type="primary" icon="pa-icon-search"></pa-button>
</pa-button-group>
</template>
```
:::


## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
size |尺寸|string|medium/small/mini|-
type |类型|	string|	primary / success / warning / danger / info / text|	—
plain	|是否朴素按钮|	boolean|	—|	false
round	|是否圆角按钮|	boolean|	—|	false
circle|	是否圆形按钮|	boolean|	—|	false
loading	|是否加载中状态|	boolean|	—	|false
disabled|	是否禁用状态|	boolean|	—	|false
icon|	图标类名|	string|	—|	—
autofocus|	是否默认聚焦|	boolean	|—|	false
native-type|	原生 type 属性|	string|	button / submit / reset	|button
