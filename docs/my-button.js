function ot(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var G = { exports: {} }, s = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q;
function pt() {
  if (Q) return s;
  Q = 1;
  var o = Symbol.for("react.transitional.element"), c = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), T = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), n = Symbol.for("react.suspense"), e = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), m = Symbol.iterator;
  function N(t) {
    return t === null || typeof t != "object" ? null : (t = m && t[m] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var v = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, g = Object.assign, b = {};
  function C(t, r, u) {
    this.props = t, this.context = r, this.refs = b, this.updater = u || v;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(t, r) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, t, r, "setState");
  }, C.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function A() {
  }
  A.prototype = C.prototype;
  function w(t, r, u) {
    this.props = t, this.context = r, this.refs = b, this.updater = u || v;
  }
  var x = w.prototype = new A();
  x.constructor = w, g(x, C.prototype), x.isPureReactComponent = !0;
  var W = Array.isArray, d = { H: null, A: null, T: null, S: null, V: null }, V = Object.prototype.hasOwnProperty;
  function U(t, r, u, i, p, E) {
    return u = E.ref, {
      $$typeof: o,
      type: t,
      key: r,
      ref: u !== void 0 ? u : null,
      props: E
    };
  }
  function it(t, r) {
    return U(
      t.type,
      r,
      void 0,
      void 0,
      void 0,
      t.props
    );
  }
  function q(t) {
    return typeof t == "object" && t !== null && t.$$typeof === o;
  }
  function st(t) {
    var r = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(u) {
      return r[u];
    });
  }
  var X = /\/+/g;
  function Y(t, r) {
    return typeof t == "object" && t !== null && t.key != null ? st("" + t.key) : r.toString(36);
  }
  function F() {
  }
  function ct(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(F, F) : (t.status = "pending", t.then(
          function(r) {
            t.status === "pending" && (t.status = "fulfilled", t.value = r);
          },
          function(r) {
            t.status === "pending" && (t.status = "rejected", t.reason = r);
          }
        )), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw t.reason;
        }
    }
    throw t;
  }
  function k(t, r, u, i, p) {
    var E = typeof t;
    (E === "undefined" || E === "boolean") && (t = null);
    var a = !1;
    if (t === null) a = !0;
    else
      switch (E) {
        case "bigint":
        case "string":
        case "number":
          a = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case o:
            case c:
              a = !0;
              break;
            case l:
              return a = t._init, k(
                a(t._payload),
                r,
                u,
                i,
                p
              );
          }
      }
    if (a)
      return p = p(t), a = i === "" ? "." + Y(t, 0) : i, W(p) ? (u = "", a != null && (u = a.replace(X, "$&/") + "/"), k(p, r, u, "", function(lt) {
        return lt;
      })) : p != null && (q(p) && (p = it(
        p,
        u + (p.key == null || t && t.key === p.key ? "" : ("" + p.key).replace(
          X,
          "$&/"
        ) + "/") + a
      )), r.push(p)), 1;
    a = 0;
    var j = i === "" ? "." : i + ":";
    if (W(t))
      for (var R = 0; R < t.length; R++)
        i = t[R], E = j + Y(i, R), a += k(
          i,
          r,
          u,
          E,
          p
        );
    else if (R = N(t), typeof R == "function")
      for (t = R.call(t), R = 0; !(i = t.next()).done; )
        i = i.value, E = j + Y(i, R++), a += k(
          i,
          r,
          u,
          E,
          p
        );
    else if (E === "object") {
      if (typeof t.then == "function")
        return k(
          ct(t),
          r,
          u,
          i,
          p
        );
      throw r = String(t), Error(
        "Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return a;
  }
  function L(t, r, u) {
    if (t == null) return t;
    var i = [], p = 0;
    return k(t, i, "", "", function(E) {
      return r.call(u, E, p++);
    }), i;
  }
  function ft(t) {
    if (t._status === -1) {
      var r = t._result;
      r = r(), r.then(
        function(u) {
          (t._status === 0 || t._status === -1) && (t._status = 1, t._result = u);
        },
        function(u) {
          (t._status === 0 || t._status === -1) && (t._status = 2, t._result = u);
        }
      ), t._status === -1 && (t._status = 0, t._result = r);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var Z = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var r = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(r)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function at() {
  }
  return s.Children = {
    map: L,
    forEach: function(t, r, u) {
      L(
        t,
        function() {
          r.apply(this, arguments);
        },
        u
      );
    },
    count: function(t) {
      var r = 0;
      return L(t, function() {
        r++;
      }), r;
    },
    toArray: function(t) {
      return L(t, function(r) {
        return r;
      }) || [];
    },
    only: function(t) {
      if (!q(t))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return t;
    }
  }, s.Component = C, s.Fragment = f, s.Profiler = h, s.PureComponent = w, s.StrictMode = y, s.Suspense = n, s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d, s.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
      return d.H.useMemoCache(t);
    }
  }, s.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  }, s.cloneElement = function(t, r, u) {
    if (t == null)
      throw Error(
        "The argument must be a React element, but you passed " + t + "."
      );
    var i = g({}, t.props), p = t.key, E = void 0;
    if (r != null)
      for (a in r.ref !== void 0 && (E = void 0), r.key !== void 0 && (p = "" + r.key), r)
        !V.call(r, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && r.ref === void 0 || (i[a] = r[a]);
    var a = arguments.length - 2;
    if (a === 1) i.children = u;
    else if (1 < a) {
      for (var j = Array(a), R = 0; R < a; R++)
        j[R] = arguments[R + 2];
      i.children = j;
    }
    return U(t.type, p, void 0, void 0, E, i);
  }, s.createContext = function(t) {
    return t = {
      $$typeof: T,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: O,
      _context: t
    }, t;
  }, s.createElement = function(t, r, u) {
    var i, p = {}, E = null;
    if (r != null)
      for (i in r.key !== void 0 && (E = "" + r.key), r)
        V.call(r, i) && i !== "key" && i !== "__self" && i !== "__source" && (p[i] = r[i]);
    var a = arguments.length - 2;
    if (a === 1) p.children = u;
    else if (1 < a) {
      for (var j = Array(a), R = 0; R < a; R++)
        j[R] = arguments[R + 2];
      p.children = j;
    }
    if (t && t.defaultProps)
      for (i in a = t.defaultProps, a)
        p[i] === void 0 && (p[i] = a[i]);
    return U(t, E, void 0, void 0, null, p);
  }, s.createRef = function() {
    return { current: null };
  }, s.forwardRef = function(t) {
    return { $$typeof: _, render: t };
  }, s.isValidElement = q, s.lazy = function(t) {
    return {
      $$typeof: l,
      _payload: { _status: -1, _result: t },
      _init: ft
    };
  }, s.memo = function(t, r) {
    return {
      $$typeof: e,
      type: t,
      compare: r === void 0 ? null : r
    };
  }, s.startTransition = function(t) {
    var r = d.T, u = {};
    d.T = u;
    try {
      var i = t(), p = d.S;
      p !== null && p(u, i), typeof i == "object" && i !== null && typeof i.then == "function" && i.then(at, Z);
    } catch (E) {
      Z(E);
    } finally {
      d.T = r;
    }
  }, s.unstable_useCacheRefresh = function() {
    return d.H.useCacheRefresh();
  }, s.use = function(t) {
    return d.H.use(t);
  }, s.useActionState = function(t, r, u) {
    return d.H.useActionState(t, r, u);
  }, s.useCallback = function(t, r) {
    return d.H.useCallback(t, r);
  }, s.useContext = function(t) {
    return d.H.useContext(t);
  }, s.useDebugValue = function() {
  }, s.useDeferredValue = function(t, r) {
    return d.H.useDeferredValue(t, r);
  }, s.useEffect = function(t, r, u) {
    var i = d.H;
    if (typeof u == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return i.useEffect(t, r);
  }, s.useId = function() {
    return d.H.useId();
  }, s.useImperativeHandle = function(t, r, u) {
    return d.H.useImperativeHandle(t, r, u);
  }, s.useInsertionEffect = function(t, r) {
    return d.H.useInsertionEffect(t, r);
  }, s.useLayoutEffect = function(t, r) {
    return d.H.useLayoutEffect(t, r);
  }, s.useMemo = function(t, r) {
    return d.H.useMemo(t, r);
  }, s.useOptimistic = function(t, r) {
    return d.H.useOptimistic(t, r);
  }, s.useReducer = function(t, r, u) {
    return d.H.useReducer(t, r, u);
  }, s.useRef = function(t) {
    return d.H.useRef(t);
  }, s.useState = function(t) {
    return d.H.useState(t);
  }, s.useSyncExternalStore = function(t, r, u) {
    return d.H.useSyncExternalStore(
      t,
      r,
      u
    );
  }, s.useTransition = function() {
    return d.H.useTransition();
  }, s.version = "19.1.1", s;
}
var K;
function ut() {
  return K || (K = 1, G.exports = pt()), G.exports;
}
var yt = ut();
const dt = /* @__PURE__ */ ot(yt);
var z = { exports: {} }, S = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt;
function _t() {
  if (tt) return S;
  tt = 1;
  var o = ut();
  function c(n) {
    var e = "https://react.dev/errors/" + n;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + n + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f() {
  }
  var y = {
    d: {
      f,
      r: function() {
        throw Error(c(522));
      },
      D: f,
      C: f,
      L: f,
      m: f,
      X: f,
      S: f,
      M: f
    },
    p: 0,
    findDOMNode: null
  }, h = Symbol.for("react.portal");
  function O(n, e, l) {
    var m = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: m == null ? null : "" + m,
      children: n,
      containerInfo: e,
      implementation: l
    };
  }
  var T = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function _(n, e) {
    if (n === "font") return "";
    if (typeof e == "string")
      return e === "use-credentials" ? e : "";
  }
  return S.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y, S.createPortal = function(n, e) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      throw Error(c(299));
    return O(n, e, null, l);
  }, S.flushSync = function(n) {
    var e = T.T, l = y.p;
    try {
      if (T.T = null, y.p = 2, n) return n();
    } finally {
      T.T = e, y.p = l, y.d.f();
    }
  }, S.preconnect = function(n, e) {
    typeof n == "string" && (e ? (e = e.crossOrigin, e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null, y.d.C(n, e));
  }, S.prefetchDNS = function(n) {
    typeof n == "string" && y.d.D(n);
  }, S.preinit = function(n, e) {
    if (typeof n == "string" && e && typeof e.as == "string") {
      var l = e.as, m = _(l, e.crossOrigin), N = typeof e.integrity == "string" ? e.integrity : void 0, v = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
      l === "style" ? y.d.S(
        n,
        typeof e.precedence == "string" ? e.precedence : void 0,
        {
          crossOrigin: m,
          integrity: N,
          fetchPriority: v
        }
      ) : l === "script" && y.d.X(n, {
        crossOrigin: m,
        integrity: N,
        fetchPriority: v,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0
      });
    }
  }, S.preinitModule = function(n, e) {
    if (typeof n == "string")
      if (typeof e == "object" && e !== null) {
        if (e.as == null || e.as === "script") {
          var l = _(
            e.as,
            e.crossOrigin
          );
          y.d.M(n, {
            crossOrigin: l,
            integrity: typeof e.integrity == "string" ? e.integrity : void 0,
            nonce: typeof e.nonce == "string" ? e.nonce : void 0
          });
        }
      } else e == null && y.d.M(n);
  }, S.preload = function(n, e) {
    if (typeof n == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
      var l = e.as, m = _(l, e.crossOrigin);
      y.d.L(n, l, {
        crossOrigin: m,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0,
        type: typeof e.type == "string" ? e.type : void 0,
        fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0,
        referrerPolicy: typeof e.referrerPolicy == "string" ? e.referrerPolicy : void 0,
        imageSrcSet: typeof e.imageSrcSet == "string" ? e.imageSrcSet : void 0,
        imageSizes: typeof e.imageSizes == "string" ? e.imageSizes : void 0,
        media: typeof e.media == "string" ? e.media : void 0
      });
    }
  }, S.preloadModule = function(n, e) {
    if (typeof n == "string")
      if (e) {
        var l = _(e.as, e.crossOrigin);
        y.d.m(n, {
          as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
          crossOrigin: l,
          integrity: typeof e.integrity == "string" ? e.integrity : void 0
        });
      } else y.d.m(n);
  }, S.requestFormReset = function(n) {
    y.d.r(n);
  }, S.unstable_batchedUpdates = function(n, e) {
    return n(e);
  }, S.useFormState = function(n, e, l) {
    return T.H.useFormState(n, e, l);
  }, S.useFormStatus = function() {
    return T.H.useHostTransitionStatus();
  }, S.version = "19.1.1", S;
}
var et;
function vt() {
  if (et) return z.exports;
  et = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (c) {
        console.error(c);
      }
  }
  return o(), z.exports = _t(), z.exports;
}
var Et = vt();
const mt = /* @__PURE__ */ ot(Et);
var gt = Object.defineProperty, Rt = (o, c, f) => c in o ? gt(o, c, { enumerable: !0, configurable: !0, writable: !0, value: f }) : o[c] = f, M = (o, c, f) => Rt(o, typeof c != "symbol" ? c + "" : c, f);
const ht = {
  stringify: (o) => o ? "true" : "false",
  parse: (o) => /^[ty1-9]/i.test(o)
}, Tt = {
  stringify: (o) => o.name,
  parse: (o, c, f) => {
    const y = (() => {
      if (typeof window < "u" && o in window)
        return window[o];
      if (typeof global < "u" && o in global)
        return global[o];
    })();
    return typeof y == "function" ? y.bind(f) : void 0;
  }
}, Ct = {
  stringify: (o) => JSON.stringify(o),
  parse: (o) => JSON.parse(o)
}, Ot = {
  stringify: (o) => `${o}`,
  parse: (o) => parseFloat(o)
}, St = {
  stringify: (o) => o,
  parse: (o) => o
}, B = {
  string: St,
  number: Ot,
  boolean: ht,
  function: Tt,
  json: Ct
};
function At(o) {
  return o.replace(
    /([a-z0-9])([A-Z])/g,
    (c, f, y) => `${f}-${y.toLowerCase()}`
  );
}
const $ = Symbol.for("r2wc.render"), I = Symbol.for("r2wc.connected"), D = Symbol.for("r2wc.context"), P = Symbol.for("r2wc.props");
function wt(o, c, f) {
  var y, h, O;
  c.props || (c.props = o.propTypes ? Object.keys(o.propTypes) : []), c.events || (c.events = []);
  const T = Array.isArray(c.props) ? c.props.slice() : Object.keys(c.props), _ = Array.isArray(c.events) ? c.events.slice() : Object.keys(c.events), n = {}, e = {}, l = {}, m = {};
  for (const v of T) {
    n[v] = Array.isArray(c.props) ? "string" : c.props[v];
    const g = At(v);
    l[v] = g, m[g] = v;
  }
  for (const v of _)
    e[v] = Array.isArray(c.events) ? {} : c.events[v];
  class N extends HTMLElement {
    constructor() {
      super(), M(this, O, !0), M(this, h), M(this, y, {}), M(this, "container"), c.shadow ? this.container = this.attachShadow({
        mode: c.shadow
      }) : this.container = this, this[P].container = this.container;
      for (const g of T) {
        const b = l[g], C = this.getAttribute(b), A = n[g], w = A ? B[A] : null;
        w != null && w.parse && C && (this[P][g] = w.parse(C, b, this));
      }
      for (const g of _)
        this[P][g] = (b) => {
          const C = g.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(C, { detail: b, ...e[g] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(m);
    }
    connectedCallback() {
      this[I] = !0, this[$]();
    }
    disconnectedCallback() {
      this[I] = !1, this[D] && f.unmount(this[D]), delete this[D];
    }
    attributeChangedCallback(g, b, C) {
      const A = m[g], w = n[A], x = w ? B[w] : null;
      A in n && x != null && x.parse && C && (this[P][A] = x.parse(C, g, this), this[$]());
    }
    [(O = I, h = D, y = P, $)]() {
      this[I] && (this[D] ? f.update(this[D], this[P]) : this[D] = f.mount(
        this.container,
        o,
        this[P]
      ));
    }
  }
  for (const v of T) {
    const g = l[v], b = n[v];
    Object.defineProperty(N.prototype, v, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[P][v];
      },
      set(C) {
        this[P][v] = C;
        const A = b ? B[b] : null;
        if (A != null && A.stringify) {
          const w = A.stringify(C, g, this);
          this.getAttribute(g) !== w && this.setAttribute(g, w);
        } else
          this[$]();
      }
    });
  }
  return N;
}
function bt(o, c, f, y = {}) {
  function h(_, n, e) {
    const l = c.createElement(n, e);
    if ("createRoot" in f) {
      const m = f.createRoot(_);
      return m.render(l), {
        container: _,
        root: m,
        ReactComponent: n
      };
    }
    if ("render" in f)
      return f.render(l, _), {
        container: _,
        ReactComponent: n
      };
    throw new Error("Invalid ReactDOM instance provided.");
  }
  function O({ container: _, root: n, ReactComponent: e }, l) {
    const m = c.createElement(e, l);
    if (n) {
      n.render(m);
      return;
    }
    if ("render" in f) {
      f.render(m, _);
      return;
    }
  }
  function T({ container: _, root: n }) {
    if (n) {
      n.unmount();
      return;
    }
    if ("unmountComponentAtNode" in f) {
      f.unmountComponentAtNode(_);
      return;
    }
  }
  return wt(o, y, { mount: h, unmount: T, update: O });
}
var J = { exports: {} }, H = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rt;
function Pt() {
  if (rt) return H;
  rt = 1;
  var o = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function f(y, h, O) {
    var T = null;
    if (O !== void 0 && (T = "" + O), h.key !== void 0 && (T = "" + h.key), "key" in h) {
      O = {};
      for (var _ in h)
        _ !== "key" && (O[_] = h[_]);
    } else O = h;
    return h = O.ref, {
      $$typeof: o,
      type: y,
      key: T,
      ref: h !== void 0 ? h : null,
      props: O
    };
  }
  return H.Fragment = c, H.jsx = f, H.jsxs = f, H;
}
var nt;
function jt() {
  return nt || (nt = 1, J.exports = Pt()), J.exports;
}
var Nt = jt();
function xt({ label: o = "Clique aqui", alertContent: c = "Você clicou!" }) {
  return /* @__PURE__ */ Nt.jsx(
    "button",
    {
      style: { padding: "8px 16px", borderRadius: "8px", cursor: "pointer" },
      onClick: () => alert(c),
      children: o
    }
  );
}
typeof process > "u" && (global.process = {
  env: {
    NODE_ENV: "production"
  }
});
const Dt = bt(xt, dt, mt);
customElements.define("my-button", Dt);
