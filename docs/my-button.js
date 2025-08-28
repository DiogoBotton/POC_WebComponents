import le from "react";
import ge from "react-dom";
const W = globalThis || void 0 || self;
function _e(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var fe = { exports: {} }, s = fe.exports = {}, _, A;
function Q() {
  throw new Error("setTimeout has not been defined");
}
function Z() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? _ = setTimeout : _ = Q;
  } catch {
    _ = Q;
  }
  try {
    typeof clearTimeout == "function" ? A = clearTimeout : A = Z;
  } catch {
    A = Z;
  }
})();
function de(r) {
  if (_ === setTimeout)
    return setTimeout(r, 0);
  if ((_ === Q || !_) && setTimeout)
    return _ = setTimeout, setTimeout(r, 0);
  try {
    return _(r, 0);
  } catch {
    try {
      return _.call(null, r, 0);
    } catch {
      return _.call(this, r, 0);
    }
  }
}
function Ae(r) {
  if (A === clearTimeout)
    return clearTimeout(r);
  if ((A === Z || !A) && clearTimeout)
    return A = clearTimeout, clearTimeout(r);
  try {
    return A(r);
  } catch {
    try {
      return A.call(null, r);
    } catch {
      return A.call(this, r);
    }
  }
}
var k = [], Y = !1, N, J = -1;
function Oe() {
  !Y || !N || (Y = !1, N.length ? k = N.concat(k) : J = -1, k.length && pe());
}
function pe() {
  if (!Y) {
    var r = de(Oe);
    Y = !0;
    for (var t = k.length; t; ) {
      for (N = k, k = []; ++J < t; )
        N && N[J].run();
      J = -1, t = k.length;
    }
    N = null, Y = !1, Ae(r);
  }
}
s.nextTick = function(r) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var o = 1; o < arguments.length; o++)
      t[o - 1] = arguments[o];
  k.push(new me(r, t)), k.length === 1 && !Y && de(pe);
};
function me(r, t) {
  this.fun = r, this.array = t;
}
me.prototype.run = function() {
  this.fun.apply(null, this.array);
};
s.title = "browser";
s.browser = !0;
s.env = {};
s.argv = [];
s.version = "";
s.versions = {};
function S() {
}
s.on = S;
s.addListener = S;
s.once = S;
s.off = S;
s.removeListener = S;
s.removeAllListeners = S;
s.emit = S;
s.prependListener = S;
s.prependOnceListener = S;
s.listeners = function(r) {
  return [];
};
s.binding = function(r) {
  throw new Error("process.binding is not supported");
};
s.cwd = function() {
  return "/";
};
s.chdir = function(r) {
  throw new Error("process.chdir is not supported");
};
s.umask = function() {
  return 0;
};
var ke = fe.exports;
const K = /* @__PURE__ */ _e(ke);
var Se = Object.defineProperty, je = (r, t, o) => t in r ? Se(r, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[t] = o, M = (r, t, o) => je(r, typeof t != "symbol" ? t + "" : t, o);
const xe = {
  stringify: (r) => r ? "true" : "false",
  parse: (r) => /^[ty1-9]/i.test(r)
}, Ce = {
  stringify: (r) => r.name,
  parse: (r, t, o) => {
    const m = (() => {
      if (typeof window < "u" && r in window)
        return window[r];
      if (typeof W < "u" && r in W)
        return W[r];
    })();
    return typeof m == "function" ? m.bind(o) : void 0;
  }
}, Pe = {
  stringify: (r) => JSON.stringify(r),
  parse: (r) => JSON.parse(r)
}, Ne = {
  stringify: (r) => `${r}`,
  parse: (r) => parseFloat(r)
}, Le = {
  stringify: (r) => r,
  parse: (r) => r
}, H = {
  string: Le,
  number: Ne,
  boolean: xe,
  function: Ce,
  json: Pe
};
function Ye(r) {
  return r.replace(
    /([a-z0-9])([A-Z])/g,
    (t, o, m) => `${o}-${m.toLowerCase()}`
  );
}
const F = Symbol.for("r2wc.render"), q = Symbol.for("r2wc.connected"), P = Symbol.for("r2wc.context"), O = Symbol.for("r2wc.props");
function $e(r, t, o) {
  var m, f, h;
  t.props || (t.props = r.propTypes ? Object.keys(r.propTypes) : []), t.events || (t.events = []);
  const T = Array.isArray(t.props) ? t.props.slice() : Object.keys(t.props), c = Array.isArray(t.events) ? t.events.slice() : Object.keys(t.events), l = {}, j = {}, w = {}, b = {};
  for (const u of T) {
    l[u] = Array.isArray(t.props) ? "string" : t.props[u];
    const i = Ye(u);
    w[u] = i, b[i] = u;
  }
  for (const u of c)
    j[u] = Array.isArray(t.events) ? {} : t.events[u];
  class C extends HTMLElement {
    constructor() {
      super(), M(this, h, !0), M(this, f), M(this, m, {}), M(this, "container"), t.shadow ? this.container = this.attachShadow({
        mode: t.shadow
      }) : this.container = this, this[O].container = this.container;
      for (const i of T) {
        const v = w[i], E = this.getAttribute(v), y = l[i], R = y ? H[y] : null;
        R != null && R.parse && E && (this[O][i] = R.parse(E, v, this));
      }
      for (const i of c)
        this[O][i] = (v) => {
          const E = i.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(E, { detail: v, ...j[i] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(b);
    }
    connectedCallback() {
      this[q] = !0, this[F]();
    }
    disconnectedCallback() {
      this[q] = !1, this[P] && o.unmount(this[P]), delete this[P];
    }
    attributeChangedCallback(i, v, E) {
      const y = b[i], R = l[y], $ = R ? H[R] : null;
      y in l && $ != null && $.parse && E && (this[O][y] = $.parse(E, i, this), this[F]());
    }
    [(h = q, f = P, m = O, F)]() {
      this[q] && (this[P] ? o.update(this[P], this[O]) : this[P] = o.mount(
        this.container,
        r,
        this[O]
      ));
    }
  }
  for (const u of T) {
    const i = w[u], v = l[u];
    Object.defineProperty(C.prototype, u, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[O][u];
      },
      set(E) {
        this[O][u] = E;
        const y = v ? H[v] : null;
        if (y != null && y.stringify) {
          const R = y.stringify(E, i, this);
          this.getAttribute(i) !== R && this.setAttribute(i, R);
        } else
          this[F]();
      }
    });
  }
  return C;
}
function Ie(r, t, o, m = {}) {
  function f(c, l, j) {
    const w = t.createElement(l, j);
    if ("createRoot" in o) {
      const b = o.createRoot(c);
      return b.render(w), {
        container: c,
        root: b,
        ReactComponent: l
      };
    }
    if ("render" in o)
      return o.render(w, c), {
        container: c,
        ReactComponent: l
      };
    throw new Error("Invalid ReactDOM instance provided.");
  }
  function h({ container: c, root: l, ReactComponent: j }, w) {
    const b = t.createElement(j, w);
    if (l) {
      l.render(b);
      return;
    }
    if ("render" in o) {
      o.render(b, c);
      return;
    }
  }
  function T({ container: c, root: l }) {
    if (l) {
      l.unmount();
      return;
    }
    if ("unmountComponentAtNode" in o) {
      o.unmountComponentAtNode(c);
      return;
    }
  }
  return $e(r, m, { mount: f, unmount: T, update: h });
}
var U = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ie;
function De() {
  if (ie) return I;
  ie = 1;
  var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function o(m, f, h) {
    var T = null;
    if (h !== void 0 && (T = "" + h), f.key !== void 0 && (T = "" + f.key), "key" in f) {
      h = {};
      for (var c in f)
        c !== "key" && (h[c] = f[c]);
    } else h = f;
    return f = h.ref, {
      $$typeof: r,
      type: m,
      key: T,
      ref: f !== void 0 ? f : null,
      props: h
    };
  }
  return I.Fragment = t, I.jsx = o, I.jsxs = o, I;
}
var D = {}, ue;
function Me() {
  return ue || (ue = 1, K.env.NODE_ENV !== "production" && (function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Te ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case v:
          return "Fragment";
        case y:
          return "Profiler";
        case E:
          return "StrictMode";
        case be:
          return "Suspense";
        case ve:
          return "SuspenseList";
        case ye:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case i:
            return "Portal";
          case $:
            return (e.displayName || "Context") + ".Provider";
          case R:
            return (e._context.displayName || "Context") + ".Consumer";
          case he:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Ee:
            return n = e.displayName || null, n !== null ? n : r(e.type) || "Memo";
          case ee:
            n = e._payload, e = e._init;
            try {
              return r(e(n));
            } catch {
            }
        }
      return null;
    }
    function t(e) {
      return "" + e;
    }
    function o(e) {
      try {
        t(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var a = n.error, d = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), t(e);
      }
    }
    function m(e) {
      if (e === v) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === ee)
        return "<...>";
      try {
        var n = r(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function f() {
      var e = V.A;
      return e === null ? null : e.getOwner();
    }
    function h() {
      return Error("react-stack-top-frame");
    }
    function T(e) {
      if (re.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function c(e, n) {
      function a() {
        te || (te = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function l() {
      var e = r(this.type);
      return ne[e] || (ne[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function j(e, n, a, d, x, g, G, X) {
      return a = g.ref, e = {
        $$typeof: u,
        type: e,
        key: n,
        props: g,
        _owner: x
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function w(e, n, a, d, x, g, G, X) {
      var p = n.children;
      if (p !== void 0)
        if (d)
          if (we(p)) {
            for (d = 0; d < p.length; d++)
              b(p[d]);
            Object.freeze && Object.freeze(p);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(p);
      if (re.call(n, "key")) {
        p = r(e);
        var L = Object.keys(n).filter(function(Re) {
          return Re !== "key";
        });
        d = 0 < L.length ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}", se[p + d] || (L = 0 < L.length ? "{" + L.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          p,
          L,
          p
        ), se[p + d] = !0);
      }
      if (p = null, a !== void 0 && (o(a), p = "" + a), T(n) && (o(n.key), p = "" + n.key), "key" in n) {
        a = {};
        for (var B in n)
          B !== "key" && (a[B] = n[B]);
      } else a = n;
      return p && c(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), j(
        e,
        p,
        g,
        x,
        f(),
        a,
        G,
        X
      );
    }
    function b(e) {
      typeof e == "object" && e !== null && e.$$typeof === u && e._store && (e._store.validated = 1);
    }
    var C = le, u = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), $ = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), be = Symbol.for("react.suspense"), ve = Symbol.for("react.suspense_list"), Ee = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), ye = Symbol.for("react.activity"), Te = Symbol.for("react.client.reference"), V = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = Object.prototype.hasOwnProperty, we = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    C = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var te, ne = {}, oe = C.react_stack_bottom_frame.bind(
      C,
      h
    )(), ae = z(m(h)), se = {};
    D.Fragment = v, D.jsx = function(e, n, a, d, x) {
      var g = 1e4 > V.recentlyCreatedOwnerStacks++;
      return w(
        e,
        n,
        a,
        !1,
        d,
        x,
        g ? Error("react-stack-top-frame") : oe,
        g ? z(m(e)) : ae
      );
    }, D.jsxs = function(e, n, a, d, x) {
      var g = 1e4 > V.recentlyCreatedOwnerStacks++;
      return w(
        e,
        n,
        a,
        !0,
        d,
        x,
        g ? Error("react-stack-top-frame") : oe,
        g ? z(m(e)) : ae
      );
    };
  })()), D;
}
var ce;
function Fe() {
  return ce || (ce = 1, K.env.NODE_ENV === "production" ? U.exports = De() : U.exports = Me()), U.exports;
}
var qe = Fe();
function Ue({ label: r = "Clique aqui", alertContent: t = "Você clicou!" }) {
  return /* @__PURE__ */ qe.jsx(
    "button",
    {
      style: { padding: "8px 16px", borderRadius: "8px", cursor: "pointer" },
      onClick: () => alert(t),
      children: r
    }
  );
}
typeof window < "u" && typeof W > "u" && (window.global = window);
typeof K > "u" && (window.process = {
  env: {
    NODE_ENV: "production"
  }
});
const We = Ie(Ue, le, ge);
customElements.define("my-button", We);
