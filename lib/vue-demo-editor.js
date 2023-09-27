import { defineComponent as p, openBlock as h, createElementBlock as y, createElementVNode as _, ref as C, renderSlot as g, createVNode as v, withDirectives as w, vShow as b, normalizeClass as k, unref as x } from "vue";
import { VueLive as S } from "vue-live";
window._iconfont_svg_string_4268235 = '<svg><symbol id="icon-copy" viewBox="0 0 1024 1024"><path d="M751.365 153.361l254.25 237.45 0.448 633.189H253.018V907.986H86.048c-37.618 0-68.115-30.499-68.115-68.124V68.129C17.933 30.509 48.43 0.005 86.048 0.005h611.875c37.612 0 68.11 30.503 68.11 68.124v68.124l-77.962-0.07v-38.27c0-12.591-10.22-22.732-22.735-22.732l-552.458 0.072c-12.592 0-22.73 10.215-22.73 22.73V805.55c0 12.586 10.138 22.734 22.73 22.734h140.14V657.273h0.46l-0.46-504.247 498.347 0.335z m-27.694 45.504v229.204h235.327L723.671 198.865zM300.086 657.273V978.16h658.912V473.912H676.607V198.865h-376.52v458.408z m569.678-32.854h-473.24v-47.286h473.24v47.286z m0 94.6h-473.24v-47.295h473.24v47.296z m0 94.574h-473.24v-47.287h473.24v47.287z"  ></path></symbol><symbol id="icon-code" viewBox="0 0 1024 1024"><path d="M153.770667 517.558857l200.387047-197.241905L302.86019 268.190476 48.761905 518.290286l254.439619 243.614476 50.590476-52.833524-200.021333-191.512381zM658.285714 320.316952L709.583238 268.190476l254.098286 250.09981L709.241905 761.904762l-50.590476-52.833524 200.021333-191.512381L658.285714 320.316952z m-112.981333-86.186666L393.99619 785.554286l70.534096 19.358476 151.30819-551.399619-70.534095-19.358476z"  ></path></symbol></svg>', function(o) {
  var e = (e = document.getElementsByTagName("script"))[e.length - 1], n = e.getAttribute("data-injectcss"), e = e.getAttribute("data-disable-injectsvg");
  if (!e) {
    var c, i, d, l, r, a = function(s, t) {
      t.parentNode.insertBefore(s, t);
    };
    if (n && !o.__iconfont__svg__cssinject__) {
      o.__iconfont__svg__cssinject__ = !0;
      try {
        document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
      } catch (s) {
        console && console.log(s);
      }
    }
    c = function() {
      var s, t = document.createElement("div");
      t.innerHTML = o._iconfont_svg_string_4268235, (t = t.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", t = t, (s = document.body).firstChild ? a(t, s.firstChild) : s.appendChild(t));
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(c, 0) : (i = function() {
      document.removeEventListener("DOMContentLoaded", i, !1), c();
    }, document.addEventListener("DOMContentLoaded", i, !1)) : document.attachEvent && (d = c, l = o.document, r = !1, m(), l.onreadystatechange = function() {
      l.readyState == "complete" && (l.onreadystatechange = null, u());
    });
  }
  function u() {
    r || (r = !0, d());
  }
  function m() {
    try {
      l.documentElement.doScroll("left");
    } catch {
      return void setTimeout(m, 50);
    }
    u();
  }
}(window);
const z = ["xlink:href"], L = /* @__PURE__ */ p({
  __name: "icon",
  props: {
    /**
     * 图标
     */
    icon: String
  },
  emits: [
    /**
     * 点击事件
     * @emits
     * @name click
     * @summary 图标按钮点击时触发的事件
     */
    "click"
  ],
  setup(o, { emit: n }) {
    const e = o, c = () => {
      n("click");
    };
    return (i, d) => (h(), y("svg", {
      class: "re-icon clickable",
      "aria-hidden": "true",
      onClick: c
    }, [
      _("use", {
        "xlink:href": "#icon-" + e.icon
      }, null, 8, z)
    ]));
  }
});
const E = (o, n) => {
  const e = o.__vccOpts || o;
  for (const [c, i] of n)
    e[c] = i;
  return e;
}, f = /* @__PURE__ */ E(L, [["__scopeId", "data-v-c5c5dd28"]]), V = { class: "preview-code" }, A = { class: "preview" }, B = { class: "toolbar" }, M = { class: "source-code" }, N = /* @__PURE__ */ p({
  __name: "layout",
  emits: ["copyClick"],
  setup(o, { emit: n }) {
    const e = C(!1), c = () => {
      e.value = !e.value;
    }, i = () => {
      n("copyClick");
    };
    return (d, l) => (h(), y("div", V, [
      _("div", null, [
        _("div", A, [
          g(d.$slots, "preview")
        ]),
        _("div", B, [
          v(f, {
            icon: "copy",
            onClick: i,
            style: { "font-size": "20px" }
          }),
          v(f, {
            icon: "code",
            onClick: c,
            style: { "font-size": "26px", margin: "0px 0 0 10px" }
          })
        ]),
        w(_("div", M, [
          g(d.$slots, "editor")
        ], 512), [
          [b, e.value]
        ])
      ])
    ]));
  }
});
const j = /* @__PURE__ */ p({
  __name: "vue-demo-editor",
  props: {
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
      required: !0
    },
    /**
     * 组件演示代码依赖
     */
    components: {
      type: Object,
      required: !0
    },
    /**
     * 复制成功提示方法
     */
    success: {
      type: Function,
      required: !0
    }
  },
  setup(o) {
    const n = o, e = (i, d) => {
      var u, m, s;
      if (navigator.userAgent.match("iPad") || navigator.userAgent.match("iPhone") || navigator.userAgent.match("iPod")) {
        var r = document.createRange();
        r.selectNode(document.body), (u = window == null ? void 0 : window.getSelection()) == null || u.removeAllRanges(), (m = window == null ? void 0 : window.getSelection()) == null || m.addRange(r), document.execCommand("copy"), (s = window == null ? void 0 : window.getSelection()) == null || s.removeAllRanges();
      } else {
        var a = document.createElement("textarea");
        a.value = i, document.body.appendChild(a), a.select(), document.execCommand("copy"), document.body.removeChild(a);
      }
      d && d();
    }, c = () => {
      e(n.code, () => {
        n.success && n.success("代码复制成功");
      });
    };
    return (i, d) => (h(), y("div", {
      class: k(n.theme)
    }, [
      v(x(S), {
        editorProps: {
          lineNumbers: !0
        },
        code: n.code,
        layout: N,
        components: { ...o.components },
        onCopyClick: c
      }, null, 8, ["code", "components"])
    ], 2));
  }
});
export {
  j as default
};
