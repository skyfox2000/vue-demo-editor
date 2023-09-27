declare const _default: import("vue").DefineComponent<{
    /**
     * 风格：
     * light：浅色
     * dark：深色
     */
    theme: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 组件演示代码
     */
    code: {
        type: StringConstructor;
        required: true;
    };
    /**
     * 组件演示代码依赖
     */
    components: {
        type: ObjectConstructor;
        required: true;
    };
    /**
     * 复制成功提示方法
     */
    success: {
        type: FunctionConstructor;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * 风格：
     * light：浅色
     * dark：深色
     */
    theme: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 组件演示代码
     */
    code: {
        type: StringConstructor;
        required: true;
    };
    /**
     * 组件演示代码依赖
     */
    components: {
        type: ObjectConstructor;
        required: true;
    };
    /**
     * 复制成功提示方法
     */
    success: {
        type: FunctionConstructor;
        required: true;
    };
}>>, {
    theme: string;
}, {}>;
export default _default;
