<template>
  <ul class="icon-list">
    <li
      v-for="(v,i) in iconArray"
      :key="i"
      class="icon-body"
    >
      <pa-icon :icon="iconArray[i]" />
      <p
        class="icon-name"
      >
        pa-icon-{{ v }}
      </p>
    </li>
  </ul>
</template>

<script>
import IconArray from '../../util/icon.json';

export default {
  name: 'IconList',
  data () {
    return {
      iconArray: IconArray
    };
  },
  mounted () {
    console.log(this.iconArray);
  }
};
</script>

<style scoped>
.icon-list{
overflow: hidden;
    list-style: none;
    padding: 0!important;
    display:flex;
    flex-wrap: wrap;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
}
.icon-body{

    width:165px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 18px;
}
.icon-name{
  padding-top:10px;
  font-size:10px !important;
}
.icon-body:hover,.icon-name:hover{
  color: #409EFF;
}

</style>
