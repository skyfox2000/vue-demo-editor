<template>
   <div class="preview-code">
      <div>
         <!-- 预览区域 -->
         <div class="preview">
            <slot name="preview"></slot>
         </div>
         <div class="toolbar">
            <Icon icon="copy" @click="copy" style="font-size: 20px"></Icon>
            <Icon
               icon="code"
               @click="toggle"
               style="font-size: 26px; margin: 0px 0 0 10px"
            />
         </div>
         <div class="source-code" v-show="showSourceCode">
            <slot name="editor"></slot>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Icon from "./icon.vue";

const emits = defineEmits(["copyClick"]);

const showSourceCode = ref(false); // 控制源代码显示或隐藏的状态
const toggle = () => {
   showSourceCode.value = !showSourceCode.value;
};

const copy = () => {
   emits("copyClick");
};
</script>

<style lang="scss">
@import url("./vuelive.css");

.re-icon {
   color: #999;
}

.preview-code {
   display: flex;
   flex-direction: column; /* 上下结构 */
   width: 100%;
   margin: 30px auto;
   border-radius: 5px;
   border: 1px solid #ccc;
   box-shadow: 0 0 3px #ccc;
}

.preview {
   padding: 15px;
   background-color: #fff;
   border-radius: 5px 5px 0 0;
   border-bottom: 1px solid #ccc;
}

.source-code {
   border-top: 1px solid #ccc;
   padding: 0;
   text-align: left;
   border-radius: 0 0 5px 5px;
   min-height: 300px;
   max-height: 300px;
}

.prism-editor-wrapper {
   /** 编辑器基本样式控制 */
   padding: 0;
   box-sizing: border-box;
   // font-family: "Helvetica Neue", Helvetica, monospace;
   font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
   font-size: 14px;
   line-height: 1.5;
   height: 300px;
   max-height: 300px;
}

.VueLive-LineNumbers.prism-editor-wrapper pre.prism-editor__editor,
.VueLive-LineNumbers.prism-editor-wrapper textarea.prism-editor__textarea {
   /** 控制行的样式，左侧空白，禁止编辑器框显示 */
   padding-left: 3rem;
   outline: none;
}

.toolbar {
   display: flex;
   text-align: center;
   flex-direction: row;
   justify-content: center;
   align-items: center;
}

button {
   background-color: #007bff;
   color: #fff;
   border: none;
   border-radius: 5px;
   padding: 5px 10px;
   cursor: pointer;
}
</style>

