<script setup lang="ts">
import VueDemoEditor from "./editor/";
import "prismjs/themes/prism-tomorrow.min.css";
/**
 * 基础用法
 */
const code = `<Icon icon="copy" />`;
import Icon from "./editor/icon.vue";
const success = () => {};
</script>

<template>
   <div class="rc-doc">
      <main>
         <VueDemoEditor
            :code="code"
            :components="{ Icon: Icon }"
            :success="success"
         ></VueDemoEditor>
      </main>
   </div>
</template>

<style lang="scss" scoped>
html,
body {
   margin: 0;
   padding: 0;
}
</style>

