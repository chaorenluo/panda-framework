
# Radio 单选框 


##### 在一组备选项中进行单选


####  基础用法

##### 由于选项默认可见，不宜过多.

:::demo  要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。
```html
<template>
    <pa-radio v-model="radio" @input="changeVal"  label="1">备选项</pa-radio>
  <pa-radio v-model="radio" label="2">备选项</pa-radio>
</template>
<script>
  export default{
    data:function(){
      return {
        radio:"1",
      }
    },
    methods:{
      changeVal(val){
        console.log(val,'---2');
      }
    }
  }
</script>
```
:::


####  禁用状态

##### 单选框不可用的状态。



:::demo  只要在el-radio元素中设置disabled属性即可，它接受一个Boolean，true为禁用。
```html
<template>
  <pa-radio v-model="radio" disabled  label="禁用">备选项</pa-radio>
  <pa-radio v-model="radio"  disabled label="选中且禁用">备选项</pa-radio>
</template>
<script>
  export default{
    data:function(){
      return {
        radio:"选中且禁用",
      }
    }
  }
</script>
```
:::


####  单选框组

##### 适用于在多个互斥的选项中选择的场景



:::demo  结合pa-radio-group元素和子元素pa-radio可以实现单选组，在pa-radio-group中绑定v-model，在pa-radio中设置好label即可，无需再给每一个pa-radio绑定变量，另外，还提供了change事件来响应变化，它会传入一个参数value。
```html
<template>
  <pa-radio-group v-model="radio" >
    <pa-radio    label="1">备选项</pa-radio>
    <pa-radio    label="2">备选项</pa-radio>
    <pa-radio    label="3">备选项</pa-radio>
  </pa-radio-group>
</template>
<script>
  export default{
    data:function(){
      return {
        radio:"1",
      }
    }
  }
</script>
```
:::


####  带有边框

##### 适用于在多个互斥的选项中选择的场景



:::demo 设置border属性可以渲染为带有边框的单选框。
```html
<template>
<div>
    <pa-radio v-model="radio1" label="1" border>备选项1</pa-radio>
    <pa-radio v-model="radio1" label="2" border>备选项2</pa-radio>
  </div>
  <div style="margin-top: 20px">
    <pa-radio v-model="radio2" label="1" border size="medium">备选项1</pa-radio>
    <pa-radio v-model="radio2" label="2" border size="medium">备选项2</pa-radio>
  </div>
  <div style="margin-top: 20px">
    <pa-radio-group v-model="radio3" size="small">
      <pa-radio label="1" border>备选项1</pa-radio>
      <pa-radio label="2" border disabled>备选项2</pa-radio>
    </pa-radio-group>
  </div>
  <div style="margin-top: 20px">
    <pa-radio-group v-model="radio4" size="mini" disabled>
      <pa-radio label="1" border>备选项1</pa-radio>
      <pa-radio label="2" border>备选项2</pa-radio>
    </pa-radio-group>
  </div>
</template>
<script>
  export default{
   data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1'
      };
   }
  }
</script>
```
:::


####  按钮样式

##### 按钮样式的单选组合。



:::demo  只需要把pa-radio元素换成pa-radio-button元素即可，此外，Panda 还提供了size属性。
```html
<template>
  <div>
    <pa-radio-group v-model="radio1">
      <pa-radio-button label="上海"></pa-radio-button>
      <pa-radio-button label="北京"></pa-radio-button>
      <pa-radio-button label="广州"></pa-radio-button>
      <pa-radio-button label="深圳"></pa-radio-button>
    </pa-radio-group>
  </div>
  <div style="margin-top: 20px">
    <pa-radio-group v-model="radio2" size="medium">
      <pa-radio-button label="上海" ></pa-radio-button>
      <pa-radio-button label="北京"></pa-radio-button>
      <pa-radio-button label="广州"></pa-radio-button>
      <pa-radio-button label="深圳"></pa-radio-button>
    </pa-radio-group>
  </div>
  <div style="margin-top: 20px">
    <pa-radio-group v-model="radio3" size="small">
      <pa-radio-button label="上海"></pa-radio-button>
      <pa-radio-button label="北京" disabled ></pa-radio-button>
      <pa-radio-button label="广州"></pa-radio-button>
      <pa-radio-button label="深圳"></pa-radio-button>
    </pa-radio-group>
  </div>
  <div style="margin-top: 20px">
    <pa-radio-group v-model="radio4" disabled size="mini">
      <pa-radio-button label="上海"></pa-radio-button>
      <pa-radio-button label="北京"></pa-radio-button>
      <pa-radio-button label="广州"></pa-radio-button>
      <pa-radio-button label="深圳"></pa-radio-button>
    </pa-radio-group>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1'
      };
    }
  }
</script>
```
:::

## API

| Property | Description | Type |
| :--- | :--- | :--- | :--- |


