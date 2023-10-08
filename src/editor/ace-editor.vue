<template>
   <layout :source="false" @copy-click="copy">
      <template #preview>
         <div ref="editor" :style="editorStyle"></div>
      </template>
   </layout>
</template>

<script setup lang="ts">
import { onBeforeUnmount, watch, ref, onMounted, Ref, computed } from "vue";
import ace from "ace-builds";
import layout from "./layout.vue";
ace.config.set("basePath", "/ace-builds/src-min-noconflict");

const editor: Ref<HTMLElement | ""> = ref("");

const props = defineProps({
   code: String,
   theme: { type: String, default: "monokai" },
   mode: { type: String, default: "typescript" },
   fontSize: { type: Number, default: 14 }
});
const theme = computed(() => {
   switch (props.theme) {
      case "dark":
         return "monokai";
      case "light":
         return "xcode";
   }
});
const emits = defineEmits(["update:code", "copyClick"]);

let instance: ace.Ace.Editor | null = null;
const initEditor = () => {
   instance = ace.edit(editor.value);
   instance.setTheme(`ace/theme/${theme.value}`);
   instance.setPrintMarginColumn(-1);
   instance.getSession().setMode(`ace/mode/${props.mode}`);
   instance.setFontSize(props.fontSize);
   instance.getSession().setUseWrapMode(false);

   instance.on("change", () => {
      emits("update:code", instance?.getValue());
   });

   instance.setValue(props.code || "", -1);
};

const destroyEditor = () => {
   instance?.destroy();
};

onMounted(() => {
   initEditor();
});

watch(
   () => props.theme + props.mode + props.fontSize,
   () => {
      destroyEditor();
      initEditor();
   }
);

onBeforeUnmount(() => {
   destroyEditor();
});

const copy = () => {
   emits("copyClick");
};

const editorStyle = {
   width: "100%",
   height: "300px"
};
</script>

