<script setup lang="ts">
// import "prismjs/themes/prism-tomorrow.min.css";
import "prismjs/themes/prism-coy.min.css";
// import "prismjs/themes/prism.min.css";
import { VueLive } from "vue-live";
import AceEditor from "./ace-editor.vue";
import layout from "./layout.vue";
const props = defineProps({
   /**
    * 显示模式
    * Vue: 编辑Vue组件
    * Code: 显示代码
    */
   mode: {
      type: String,
      default: "Vue"
   },
   /**
    * 风格：
    * light：浅色
    * dark：深色
    */
   theme: {
      type: String,
      default: "light"
   },
   /**
    * 组件演示代码
    */
   code: {
      type: String,
      required: true
   },
   /**
    * 组件演示代码依赖组件配置
    * 一般建议将所需的组件一次性配置进去
    */
   components: {
      type: Object,
      required: true
   },
   /**
    * 复制成功后的回调方法
    */
   success: {
      type: Function,
      required: true
   }
});

const copyToClipboard = (text: string, callback?: () => void) => {
   let isiOS =
      navigator.userAgent.match("iPad") ||
      navigator.userAgent.match("iPhone") ||
      navigator.userAgent.match("iPod");
   if (isiOS) {
      // iOS设备复制文本
      var range = document.createRange();
      range.selectNode(document.body);

      window?.getSelection()?.removeAllRanges();
      window?.getSelection()?.addRange(range);
      document.execCommand("copy");
      window?.getSelection()?.removeAllRanges();
   } else {
      // Android设备复制文本
      var textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
   }

   if (callback) callback();
};

const handleCopyClick = () => {
   copyToClipboard(props.code, () => {
      if (props.success) {
         props.success("代码复制成功");
      }
   });
};
</script>
<template>
   <div style="width: 99%" :class="props.theme">
      <VueLive
         v-if="mode === 'Vue'"
         :editorProps="{
            lineNumbers: true
         }"
         :code="props.code"
         :layout="layout"
         :components="{ ...components }"
         @copy-click="handleCopyClick"
      >
      </VueLive>
      <AceEditor
         v-else
         :theme="props.theme"
         :code="props.code"
         @copy-click="handleCopyClick"
      ></AceEditor>
   </div>
</template>

<style lang="scss">
.light .prism-editor-wrapper {
   /** 编辑器基本样式控制 */
   color: #333;
   background: #fff;
}

.light .VueLive-LineNumbers pre .line:before {
   /** 控制行号的样式，颜色，宽度 */
   color: #818181;
   padding-right: 8px;
   left: -3rem;
   background-color: #f0f0f0;
}
.dark .prism-editor-wrapper {
   /** 编辑器基本样式控制 */
   color: #c4c4c4;
   background: #313131;
}

.dark .VueLive-LineNumbers pre .line:before {
   /** 控制行号的样式，颜色，宽度 */
   color: #a3a3a3;
   padding-right: 8px;
   left: -3rem;
   background-color: #555555;
}
</style>

