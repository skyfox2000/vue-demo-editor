<script setup lang="ts">
import "./iconfont.js";
const props = defineProps({
   /**
    * 图标
    */
   icon: String
});

// 定义组件发出的事件
const emits = defineEmits([
   /**
    * 点击事件
    * @emits
    * @name click
    * @summary 图标按钮点击时触发的事件
    */
   "click"
]);
const onClicked = () => {
   emits("click");
};
</script>
<template>
   <svg class="re-icon clickable" aria-hidden="true" @click="onClicked">
      <use :xlink:href="'#icon-' + props.icon"></use>
   </svg>
</template>

<style lang="scss" scoped>
.re-icon {
   margin: 5px 0;
   width: 1em;
   height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
.re-icon.clickable:hover {
   color: deepskyblue;
}

.clickable {
   cursor: pointer;
}
</style>

