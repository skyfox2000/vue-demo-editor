# vue-demo-编辑器

## 项目功能 🔨

一个基于 vue-live 的 Vue 组件,用于实时编辑和演示组件。专为组件文档中轻松展示组件而设计。

## 特性

- 自定义布局和样式,针对组件演示进行了优化
- 增加切换显示源代码和复制代码按钮
- 支持浅色和深色主题
- 实时编辑组件演示代码
- 轻松配置组件依赖
- 复制成功回调函数
- 使用 PrismJS 进行语法高亮

## 安装使用步骤

### 安装

你可以使用 npm 或 yarn 来安装 `vue-demo-editor`:

```bash
npm install vue-demo-editor
# 或者
yarn add vue-demo-editor
```

## 使用

```vue
<template>
  <vue-demo-editor
    :code="demoCode" 
    :components="Components"
    theme="light"
    @success="onCopySuccess"
  />
</template>

<script>
import VueDemoEditor from 'vue-demo-editor'
import * as Components from "your-component-kit"

export default {
  components: {
    VueDemoEditor 
  },
  data() {
    return {
      demoCode: `
        <template>
          <button @click="count++">
            点击了 {{ count }} 次
          </button>
        </template>
        
        <script>
        export default {
          data() {
            return {
              count: 0
            }
          }
        }
        </script>
      `,
    }
  },
  methods: {
    onCopySuccess() {
      console.log('代码已复制到剪贴板')
    }
  }
}
</script>
```

## 属性

| 参数       | 说明                       | 类型     | 必填项 | 默认值  |
| ---------- | -------------------------- | -------- | ------ | ------- |
| theme      | 主题风格,`light` 或 `dark` | String   | 否     | `light` |
| code       | 要展示的演示代码           | String   | 是     | -       |
| components | 演示需要注册的组件         | Object   | 是     | -       |
| success    | 复制成功的回调函数         | Function | 是     | -       |


## 自定义样式

默认的语法高亮主题是 `prismjs/themes/prism-coy.min.css`。你可以通过导入其他 PrismJS 主题来自定义:

```js
import 'prismjs/themes/prism-dark.css' 
```

## Git commit ⻛格指南

- feat: 增加新功能
- fix: 修复问题
- style: 代码⻛格相关⽆影响运⾏结果的
- perf: 优化/性能提升
- refactor: 重构
- revert: 撤销修改
- test: 测试相关
- docs: ⽂档/注释
- chore: 依赖更新/脚⼿架配置修改等
- ci: 持续集成

## 许可证

该项目基于 MIT 许可证进行分发。更多详情请参阅 [LICENSE](LICENSE) 文件。
