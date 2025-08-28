function Ze(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var Ee = { exports: {} }, E = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function ot() {
  if (We) return E;
  We = 1;
  var f = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), L = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), s = Symbol.iterator;
  function n(t) {
    return t === null || typeof t != "object" ? null : (t = s && t[s] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var p = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, w = Object.assign, $ = {};
  function I(t, o, d) {
    this.props = t, this.context = o, this.refs = $, this.updater = d || p;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(t, o) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, t, o, "setState");
  }, I.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function Y() {
  }
  Y.prototype = I.prototype;
  function U(t, o, d) {
    this.props = t, this.context = o, this.refs = $, this.updater = d || p;
  }
  var H = U.prototype = new Y();
  H.constructor = U, w(H, I.prototype), H.isPureReactComponent = !0;
  var ie = Array.isArray, j = { H: null, A: null, T: null, S: null, V: null }, ne = Object.prototype.hasOwnProperty;
  function oe(t, o, d, y, _, P) {
    return d = P.ref, {
      $$typeof: f,
      type: t,
      key: o,
      ref: d !== void 0 ? d : null,
      props: P
    };
  }
  function B(t, o) {
    return oe(
      t.type,
      o,
      void 0,
      void 0,
      void 0,
      t.props
    );
  }
  function X(t) {
    return typeof t == "object" && t !== null && t.$$typeof === f;
  }
  function ce(t) {
    var o = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(d) {
      return o[d];
    });
  }
  var M = /\/+/g;
  function ee(t, o) {
    return typeof t == "object" && t !== null && t.key != null ? ce("" + t.key) : o.toString(36);
  }
  function Q() {
  }
  function V(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(Q, Q) : (t.status = "pending", t.then(
          function(o) {
            t.status === "pending" && (t.status = "fulfilled", t.value = o);
          },
          function(o) {
            t.status === "pending" && (t.status = "rejected", t.reason = o);
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
  function W(t, o, d, y, _) {
    var P = typeof t;
    (P === "undefined" || P === "boolean") && (t = null);
    var v = !1;
    if (t === null) v = !0;
    else
      switch (P) {
        case "bigint":
        case "string":
        case "number":
          v = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case f:
            case i:
              v = !0;
              break;
            case m:
              return v = t._init, W(
                v(t._payload),
                o,
                d,
                y,
                _
              );
          }
      }
    if (v)
      return _ = _(t), v = y === "" ? "." + ee(t, 0) : y, ie(_) ? (d = "", v != null && (d = v.replace(M, "$&/") + "/"), W(_, o, d, "", function(G) {
        return G;
      })) : _ != null && (X(_) && (_ = B(
        _,
        d + (_.key == null || t && t.key === _.key ? "" : ("" + _.key).replace(
          M,
          "$&/"
        ) + "/") + v
      )), o.push(_)), 1;
    v = 0;
    var z = y === "" ? "." : y + ":";
    if (ie(t))
      for (var O = 0; O < t.length; O++)
        y = t[O], P = z + ee(y, O), v += W(
          y,
          o,
          d,
          P,
          _
        );
    else if (O = n(t), typeof O == "function")
      for (t = O.call(t), O = 0; !(y = t.next()).done; )
        y = y.value, P = z + ee(y, O++), v += W(
          y,
          o,
          d,
          P,
          _
        );
    else if (P === "object") {
      if (typeof t.then == "function")
        return W(
          V(t),
          o,
          d,
          y,
          _
        );
      throw o = String(t), Error(
        "Objects are not valid as a React child (found: " + (o === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : o) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return v;
  }
  function K(t, o, d) {
    if (t == null) return t;
    var y = [], _ = 0;
    return W(t, y, "", "", function(P) {
      return o.call(d, P, _++);
    }), y;
  }
  function te(t) {
    if (t._status === -1) {
      var o = t._result;
      o = o(), o.then(
        function(d) {
          (t._status === 0 || t._status === -1) && (t._status = 1, t._result = d);
        },
        function(d) {
          (t._status === 0 || t._status === -1) && (t._status = 2, t._result = d);
        }
      ), t._status === -1 && (t._status = 0, t._result = o);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var Z = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var o = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(o)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function ue() {
  }
  return E.Children = {
    map: K,
    forEach: function(t, o, d) {
      K(
        t,
        function() {
          o.apply(this, arguments);
        },
        d
      );
    },
    count: function(t) {
      var o = 0;
      return K(t, function() {
        o++;
      }), o;
    },
    toArray: function(t) {
      return K(t, function(o) {
        return o;
      }) || [];
    },
    only: function(t) {
      if (!X(t))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return t;
    }
  }, E.Component = I, E.Fragment = h, E.Profiler = T, E.PureComponent = U, E.StrictMode = R, E.Suspense = c, E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j, E.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
      return j.H.useMemoCache(t);
    }
  }, E.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  }, E.cloneElement = function(t, o, d) {
    if (t == null)
      throw Error(
        "The argument must be a React element, but you passed " + t + "."
      );
    var y = w({}, t.props), _ = t.key, P = void 0;
    if (o != null)
      for (v in o.ref !== void 0 && (P = void 0), o.key !== void 0 && (_ = "" + o.key), o)
        !ne.call(o, v) || v === "key" || v === "__self" || v === "__source" || v === "ref" && o.ref === void 0 || (y[v] = o[v]);
    var v = arguments.length - 2;
    if (v === 1) y.children = d;
    else if (1 < v) {
      for (var z = Array(v), O = 0; O < v; O++)
        z[O] = arguments[O + 2];
      y.children = z;
    }
    return oe(t.type, _, void 0, void 0, P, y);
  }, E.createContext = function(t) {
    return t = {
      $$typeof: L,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: k,
      _context: t
    }, t;
  }, E.createElement = function(t, o, d) {
    var y, _ = {}, P = null;
    if (o != null)
      for (y in o.key !== void 0 && (P = "" + o.key), o)
        ne.call(o, y) && y !== "key" && y !== "__self" && y !== "__source" && (_[y] = o[y]);
    var v = arguments.length - 2;
    if (v === 1) _.children = d;
    else if (1 < v) {
      for (var z = Array(v), O = 0; O < v; O++)
        z[O] = arguments[O + 2];
      _.children = z;
    }
    if (t && t.defaultProps)
      for (y in v = t.defaultProps, v)
        _[y] === void 0 && (_[y] = v[y]);
    return oe(t, P, void 0, void 0, null, _);
  }, E.createRef = function() {
    return { current: null };
  }, E.forwardRef = function(t) {
    return { $$typeof: N, render: t };
  }, E.isValidElement = X, E.lazy = function(t) {
    return {
      $$typeof: m,
      _payload: { _status: -1, _result: t },
      _init: te
    };
  }, E.memo = function(t, o) {
    return {
      $$typeof: u,
      type: t,
      compare: o === void 0 ? null : o
    };
  }, E.startTransition = function(t) {
    var o = j.T, d = {};
    j.T = d;
    try {
      var y = t(), _ = j.S;
      _ !== null && _(d, y), typeof y == "object" && y !== null && typeof y.then == "function" && y.then(ue, Z);
    } catch (P) {
      Z(P);
    } finally {
      j.T = o;
    }
  }, E.unstable_useCacheRefresh = function() {
    return j.H.useCacheRefresh();
  }, E.use = function(t) {
    return j.H.use(t);
  }, E.useActionState = function(t, o, d) {
    return j.H.useActionState(t, o, d);
  }, E.useCallback = function(t, o) {
    return j.H.useCallback(t, o);
  }, E.useContext = function(t) {
    return j.H.useContext(t);
  }, E.useDebugValue = function() {
  }, E.useDeferredValue = function(t, o) {
    return j.H.useDeferredValue(t, o);
  }, E.useEffect = function(t, o, d) {
    var y = j.H;
    if (typeof d == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return y.useEffect(t, o);
  }, E.useId = function() {
    return j.H.useId();
  }, E.useImperativeHandle = function(t, o, d) {
    return j.H.useImperativeHandle(t, o, d);
  }, E.useInsertionEffect = function(t, o) {
    return j.H.useInsertionEffect(t, o);
  }, E.useLayoutEffect = function(t, o) {
    return j.H.useLayoutEffect(t, o);
  }, E.useMemo = function(t, o) {
    return j.H.useMemo(t, o);
  }, E.useOptimistic = function(t, o) {
    return j.H.useOptimistic(t, o);
  }, E.useReducer = function(t, o, d) {
    return j.H.useReducer(t, o, d);
  }, E.useRef = function(t) {
    return j.H.useRef(t);
  }, E.useState = function(t) {
    return j.H.useState(t);
  }, E.useSyncExternalStore = function(t, o, d) {
    return j.H.useSyncExternalStore(
      t,
      o,
      d
    );
  }, E.useTransition = function() {
    return j.H.useTransition();
  }, E.version = "19.1.1", E;
}
var pe = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
pe.exports;
var ze;
function ut() {
  return ze || (ze = 1, (function(f, i) {
    process.env.NODE_ENV !== "production" && (function() {
      function h(e, r) {
        Object.defineProperty(k.prototype, e, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              r[0],
              r[1]
            );
          }
        });
      }
      function R(e) {
        return e === null || typeof e != "object" ? null : (e = ye && e[ye] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function T(e, r) {
        e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
        var a = e + "." + r;
        Pe[a] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          r,
          e
        ), Pe[a] = !0);
      }
      function k(e, r, a) {
        this.props = e, this.context = r, this.refs = Ae, this.updater = a || Ne;
      }
      function L() {
      }
      function N(e, r, a) {
        this.props = e, this.context = r, this.refs = Ae, this.updater = a || Ne;
      }
      function c(e) {
        return "" + e;
      }
      function u(e) {
        try {
          c(e);
          var r = !1;
        } catch {
          r = !0;
        }
        if (r) {
          r = console;
          var a = r.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a.call(
            r,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            l
          ), c(e);
        }
      }
      function m(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === Je ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case t:
            return "Fragment";
          case d:
            return "Profiler";
          case o:
            return "StrictMode";
          case v:
            return "Suspense";
          case z:
            return "SuspenseList";
          case fe:
            return "Activity";
        }
        if (typeof e == "object")
          switch (typeof e.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), e.$$typeof) {
            case ue:
              return "Portal";
            case _:
              return (e.displayName || "Context") + ".Provider";
            case y:
              return (e._context.displayName || "Context") + ".Consumer";
            case P:
              var r = e.render;
              return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case O:
              return r = e.displayName || null, r !== null ? r : m(e.type) || "Memo";
            case G:
              r = e._payload, e = e._init;
              try {
                return m(e(r));
              } catch {
              }
          }
        return null;
      }
      function s(e) {
        if (e === t) return "<>";
        if (typeof e == "object" && e !== null && e.$$typeof === G)
          return "<...>";
        try {
          var r = m(e);
          return r ? "<" + r + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function n() {
        var e = A.A;
        return e === null ? null : e.getOwner();
      }
      function p() {
        return Error("react-stack-top-frame");
      }
      function w(e) {
        if (me.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning) return !1;
        }
        return e.key !== void 0;
      }
      function $(e, r) {
        function a() {
          Le || (Le = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            r
          ));
        }
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function I() {
        var e = m(this.type);
        return $e[e] || ($e[e] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), e = this.props.ref, e !== void 0 ? e : null;
      }
      function Y(e, r, a, l, g, C, b, D) {
        return a = C.ref, e = {
          $$typeof: Z,
          type: e,
          key: r,
          props: C,
          _owner: g
        }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
          enumerable: !1,
          get: I
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
          value: b
        }), Object.defineProperty(e, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: D
        }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
      }
      function U(e, r) {
        return r = Y(
          e.type,
          r,
          void 0,
          void 0,
          e._owner,
          e.props,
          e._debugStack,
          e._debugTask
        ), e._store && (r._store.validated = e._store.validated), r;
      }
      function H(e) {
        return typeof e == "object" && e !== null && e.$$typeof === Z;
      }
      function ie(e) {
        var r = { "=": "=0", ":": "=2" };
        return "$" + e.replace(/[=:]/g, function(a) {
          return r[a];
        });
      }
      function j(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (u(e.key), ie("" + e.key)) : r.toString(36);
      }
      function ne() {
      }
      function oe(e) {
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
          default:
            switch (typeof e.status == "string" ? e.then(ne, ne) : (e.status = "pending", e.then(
              function(r) {
                e.status === "pending" && (e.status = "fulfilled", e.value = r);
              },
              function(r) {
                e.status === "pending" && (e.status = "rejected", e.reason = r);
              }
            )), e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
            }
        }
        throw e;
      }
      function B(e, r, a, l, g) {
        var C = typeof e;
        (C === "undefined" || C === "boolean") && (e = null);
        var b = !1;
        if (e === null) b = !0;
        else
          switch (C) {
            case "bigint":
            case "string":
            case "number":
              b = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case Z:
                case ue:
                  b = !0;
                  break;
                case G:
                  return b = e._init, B(
                    b(e._payload),
                    r,
                    a,
                    l,
                    g
                  );
              }
          }
        if (b) {
          b = e, g = g(b);
          var D = l === "" ? "." + j(b, 0) : l;
          return De(g) ? (a = "", D != null && (a = D.replace(Ue, "$&/") + "/"), B(g, r, a, "", function(re) {
            return re;
          })) : g != null && (H(g) && (g.key != null && (b && b.key === g.key || u(g.key)), a = U(
            g,
            a + (g.key == null || b && b.key === g.key ? "" : ("" + g.key).replace(
              Ue,
              "$&/"
            ) + "/") + D
          ), l !== "" && b != null && H(b) && b.key == null && b._store && !b._store.validated && (a._store.validated = 2), g = a), r.push(g)), 1;
        }
        if (b = 0, D = l === "" ? "." : l + ":", De(e))
          for (var S = 0; S < e.length; S++)
            l = e[S], C = D + j(l, S), b += B(
              l,
              r,
              a,
              C,
              g
            );
        else if (S = R(e), typeof S == "function")
          for (S === e.entries && (Ye || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Ye = !0), e = S.call(e), S = 0; !(l = e.next()).done; )
            l = l.value, C = D + j(l, S++), b += B(
              l,
              r,
              a,
              C,
              g
            );
        else if (C === "object") {
          if (typeof e.then == "function")
            return B(
              oe(e),
              r,
              a,
              l,
              g
            );
          throw r = String(e), Error(
            "Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return b;
      }
      function X(e, r, a) {
        if (e == null) return e;
        var l = [], g = 0;
        return B(e, l, "", "", function(C) {
          return r.call(a, C, g++);
        }), l;
      }
      function ce(e) {
        if (e._status === -1) {
          var r = e._result;
          r = r(), r.then(
            function(a) {
              (e._status === 0 || e._status === -1) && (e._status = 1, e._result = a);
            },
            function(a) {
              (e._status === 0 || e._status === -1) && (e._status = 2, e._result = a);
            }
          ), e._status === -1 && (e._status = 0, e._result = r);
        }
        if (e._status === 1)
          return r = e._result, r === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            r
          ), "default" in r || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            r
          ), r.default;
        throw e._result;
      }
      function M() {
        var e = A.H;
        return e === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), e;
      }
      function ee() {
      }
      function Q(e) {
        if (_e === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7);
            _e = (f && f[r]).call(
              f,
              "timers"
            ).setImmediate;
          } catch {
            _e = function(l) {
              xe === !1 && (xe = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var g = new MessageChannel();
              g.port1.onmessage = l, g.port2.postMessage(void 0);
            };
          }
        return _e(e);
      }
      function V(e) {
        return 1 < e.length && typeof AggregateError == "function" ? new AggregateError(e) : e[0];
      }
      function W(e, r) {
        r !== he - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), he = r;
      }
      function K(e, r, a) {
        var l = A.actQueue;
        if (l !== null)
          if (l.length !== 0)
            try {
              te(l), Q(function() {
                return K(e, r, a);
              });
              return;
            } catch (g) {
              A.thrownErrors.push(g);
            }
          else A.actQueue = null;
        0 < A.thrownErrors.length ? (l = V(A.thrownErrors), A.thrownErrors.length = 0, a(l)) : r(e);
      }
      function te(e) {
        if (!Ce) {
          Ce = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do {
                A.didUsePromise = !1;
                var l = a(!1);
                if (l !== null) {
                  if (A.didUsePromise) {
                    e[r] = a, e.splice(0, r);
                    return;
                  }
                  a = l;
                } else break;
              } while (!0);
            }
            e.length = 0;
          } catch (g) {
            e.splice(0, r + 1), A.thrownErrors.push(g);
          } finally {
            Ce = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var Z = Symbol.for("react.transitional.element"), ue = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), _ = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), ye = Symbol.iterator, Pe = {}, Ne = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(e) {
          T(e, "forceUpdate");
        },
        enqueueReplaceState: function(e) {
          T(e, "replaceState");
        },
        enqueueSetState: function(e) {
          T(e, "setState");
        }
      }, je = Object.assign, Ae = {};
      Object.freeze(Ae), k.prototype.isReactComponent = {}, k.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, r, "setState");
      }, k.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      var F = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, ge;
      for (ge in F)
        F.hasOwnProperty(ge) && h(ge, F[ge]);
      L.prototype = k.prototype, F = N.prototype = new L(), F.constructor = N, je(F, k.prototype), F.isPureReactComponent = !0;
      var De = Array.isArray, Je = Symbol.for("react.client.reference"), A = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, me = Object.prototype.hasOwnProperty, Me = console.createTask ? console.createTask : function() {
        return null;
      };
      F = {
        react_stack_bottom_frame: function(e) {
          return e();
        }
      };
      var Le, Ie, $e = {}, et = F.react_stack_bottom_frame.bind(
        F,
        p
      )(), tt = Me(s(p)), Ye = !1, Ue = /\/+/g, He = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var r = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(r)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, xe = !1, _e = null, he = 0, ve = !1, Ce = !1, qe = typeof queueMicrotask == "function" ? function(e) {
        queueMicrotask(function() {
          return queueMicrotask(e);
        });
      } : Q;
      F = Object.freeze({
        __proto__: null,
        c: function(e) {
          return M().useMemoCache(e);
        }
      }), i.Children = {
        map: X,
        forEach: function(e, r, a) {
          X(
            e,
            function() {
              r.apply(this, arguments);
            },
            a
          );
        },
        count: function(e) {
          var r = 0;
          return X(e, function() {
            r++;
          }), r;
        },
        toArray: function(e) {
          return X(e, function(r) {
            return r;
          }) || [];
        },
        only: function(e) {
          if (!H(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        }
      }, i.Component = k, i.Fragment = t, i.Profiler = d, i.PureComponent = N, i.StrictMode = o, i.Suspense = v, i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = A, i.__COMPILER_RUNTIME = F, i.act = function(e) {
        var r = A.actQueue, a = he;
        he++;
        var l = A.actQueue = r !== null ? r : [], g = !1;
        try {
          var C = e();
        } catch (S) {
          A.thrownErrors.push(S);
        }
        if (0 < A.thrownErrors.length)
          throw W(r, a), e = V(A.thrownErrors), A.thrownErrors.length = 0, e;
        if (C !== null && typeof C == "object" && typeof C.then == "function") {
          var b = C;
          return qe(function() {
            g || ve || (ve = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(S, re) {
              g = !0, b.then(
                function(ae) {
                  if (W(r, a), a === 0) {
                    try {
                      te(l), Q(function() {
                        return K(
                          ae,
                          S,
                          re
                        );
                      });
                    } catch (nt) {
                      A.thrownErrors.push(nt);
                    }
                    if (0 < A.thrownErrors.length) {
                      var rt = V(
                        A.thrownErrors
                      );
                      A.thrownErrors.length = 0, re(rt);
                    }
                  } else S(ae);
                },
                function(ae) {
                  W(r, a), 0 < A.thrownErrors.length && (ae = V(
                    A.thrownErrors
                  ), A.thrownErrors.length = 0), re(ae);
                }
              );
            }
          };
        }
        var D = C;
        if (W(r, a), a === 0 && (te(l), l.length !== 0 && qe(function() {
          g || ve || (ve = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), A.actQueue = null), 0 < A.thrownErrors.length)
          throw e = V(A.thrownErrors), A.thrownErrors.length = 0, e;
        return {
          then: function(S, re) {
            g = !0, a === 0 ? (A.actQueue = l, Q(function() {
              return K(
                D,
                S,
                re
              );
            })) : S(D);
          }
        };
      }, i.cache = function(e) {
        return function() {
          return e.apply(null, arguments);
        };
      }, i.captureOwnerStack = function() {
        var e = A.getCurrentStack;
        return e === null ? null : e();
      }, i.cloneElement = function(e, r, a) {
        if (e == null)
          throw Error(
            "The argument must be a React element, but you passed " + e + "."
          );
        var l = je({}, e.props), g = e.key, C = e._owner;
        if (r != null) {
          var b;
          e: {
            if (me.call(r, "ref") && (b = Object.getOwnPropertyDescriptor(
              r,
              "ref"
            ).get) && b.isReactWarning) {
              b = !1;
              break e;
            }
            b = r.ref !== void 0;
          }
          b && (C = n()), w(r) && (u(r.key), g = "" + r.key);
          for (D in r)
            !me.call(r, D) || D === "key" || D === "__self" || D === "__source" || D === "ref" && r.ref === void 0 || (l[D] = r[D]);
        }
        var D = arguments.length - 2;
        if (D === 1) l.children = a;
        else if (1 < D) {
          b = Array(D);
          for (var S = 0; S < D; S++)
            b[S] = arguments[S + 2];
          l.children = b;
        }
        for (l = Y(
          e.type,
          g,
          void 0,
          void 0,
          C,
          l,
          e._debugStack,
          e._debugTask
        ), g = 2; g < arguments.length; g++)
          C = arguments[g], H(C) && C._store && (C._store.validated = 1);
        return l;
      }, i.createContext = function(e) {
        return e = {
          $$typeof: _,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, e.Provider = e, e.Consumer = {
          $$typeof: y,
          _context: e
        }, e._currentRenderer = null, e._currentRenderer2 = null, e;
      }, i.createElement = function(e, r, a) {
        for (var l = 2; l < arguments.length; l++) {
          var g = arguments[l];
          H(g) && g._store && (g._store.validated = 1);
        }
        if (l = {}, g = null, r != null)
          for (S in Ie || !("__self" in r) || "key" in r || (Ie = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), w(r) && (u(r.key), g = "" + r.key), r)
            me.call(r, S) && S !== "key" && S !== "__self" && S !== "__source" && (l[S] = r[S]);
        var C = arguments.length - 2;
        if (C === 1) l.children = a;
        else if (1 < C) {
          for (var b = Array(C), D = 0; D < C; D++)
            b[D] = arguments[D + 2];
          Object.freeze && Object.freeze(b), l.children = b;
        }
        if (e && e.defaultProps)
          for (S in C = e.defaultProps, C)
            l[S] === void 0 && (l[S] = C[S]);
        g && $(
          l,
          typeof e == "function" ? e.displayName || e.name || "Unknown" : e
        );
        var S = 1e4 > A.recentlyCreatedOwnerStacks++;
        return Y(
          e,
          g,
          void 0,
          void 0,
          n(),
          l,
          S ? Error("react-stack-top-frame") : et,
          S ? Me(s(e)) : tt
        );
      }, i.createRef = function() {
        var e = { current: null };
        return Object.seal(e), e;
      }, i.forwardRef = function(e) {
        e != null && e.$$typeof === O ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof e != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          e === null ? "null" : typeof e
        ) : e.length !== 0 && e.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), e != null && e.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var r = { $$typeof: P, render: e }, a;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return a;
          },
          set: function(l) {
            a = l, e.name || e.displayName || (Object.defineProperty(e, "name", { value: l }), e.displayName = l);
          }
        }), r;
      }, i.isValidElement = H, i.lazy = function(e) {
        return {
          $$typeof: G,
          _payload: { _status: -1, _result: e },
          _init: ce
        };
      }, i.memo = function(e, r) {
        e == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          e === null ? "null" : typeof e
        ), r = {
          $$typeof: O,
          type: e,
          compare: r === void 0 ? null : r
        };
        var a;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return a;
          },
          set: function(l) {
            a = l, e.name || e.displayName || (Object.defineProperty(e, "name", { value: l }), e.displayName = l);
          }
        }), r;
      }, i.startTransition = function(e) {
        var r = A.T, a = {};
        A.T = a, a._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var l = e(), g = A.S;
          g !== null && g(a, l), typeof l == "object" && l !== null && typeof l.then == "function" && l.then(ee, He);
        } catch (C) {
          He(C);
        } finally {
          r === null && a._updatedFibers && (e = a._updatedFibers.size, a._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), A.T = r;
        }
      }, i.unstable_useCacheRefresh = function() {
        return M().useCacheRefresh();
      }, i.use = function(e) {
        return M().use(e);
      }, i.useActionState = function(e, r, a) {
        return M().useActionState(
          e,
          r,
          a
        );
      }, i.useCallback = function(e, r) {
        return M().useCallback(e, r);
      }, i.useContext = function(e) {
        var r = M();
        return e.$$typeof === y && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), r.useContext(e);
      }, i.useDebugValue = function(e, r) {
        return M().useDebugValue(e, r);
      }, i.useDeferredValue = function(e, r) {
        return M().useDeferredValue(e, r);
      }, i.useEffect = function(e, r, a) {
        e == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var l = M();
        if (typeof a == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return l.useEffect(e, r);
      }, i.useId = function() {
        return M().useId();
      }, i.useImperativeHandle = function(e, r, a) {
        return M().useImperativeHandle(e, r, a);
      }, i.useInsertionEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), M().useInsertionEffect(e, r);
      }, i.useLayoutEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), M().useLayoutEffect(e, r);
      }, i.useMemo = function(e, r) {
        return M().useMemo(e, r);
      }, i.useOptimistic = function(e, r) {
        return M().useOptimistic(e, r);
      }, i.useReducer = function(e, r, a) {
        return M().useReducer(e, r, a);
      }, i.useRef = function(e) {
        return M().useRef(e);
      }, i.useState = function(e) {
        return M().useState(e);
      }, i.useSyncExternalStore = function(e, r, a) {
        return M().useSyncExternalStore(
          e,
          r,
          a
        );
      }, i.useTransition = function() {
        return M().useTransition();
      }, i.version = "19.1.1", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(pe, pe.exports)), pe.exports;
}
var Ge;
function Se() {
  return Ge || (Ge = 1, process.env.NODE_ENV === "production" ? Ee.exports = ot() : Ee.exports = ut()), Ee.exports;
}
var st = Se();
const it = /* @__PURE__ */ Ze(st);
var Re = { exports: {} }, x = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function at() {
  if (Fe) return x;
  Fe = 1;
  var f = Se();
  function i(c) {
    var u = "https://react.dev/errors/" + c;
    if (1 < arguments.length) {
      u += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++)
        u += "&args[]=" + encodeURIComponent(arguments[m]);
    }
    return "Minified React error #" + c + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function h() {
  }
  var R = {
    d: {
      f: h,
      r: function() {
        throw Error(i(522));
      },
      D: h,
      C: h,
      L: h,
      m: h,
      X: h,
      S: h,
      M: h
    },
    p: 0,
    findDOMNode: null
  }, T = Symbol.for("react.portal");
  function k(c, u, m) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: T,
      key: s == null ? null : "" + s,
      children: c,
      containerInfo: u,
      implementation: m
    };
  }
  var L = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function N(c, u) {
    if (c === "font") return "";
    if (typeof u == "string")
      return u === "use-credentials" ? u : "";
  }
  return x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R, x.createPortal = function(c, u) {
    var m = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!u || u.nodeType !== 1 && u.nodeType !== 9 && u.nodeType !== 11)
      throw Error(i(299));
    return k(c, u, null, m);
  }, x.flushSync = function(c) {
    var u = L.T, m = R.p;
    try {
      if (L.T = null, R.p = 2, c) return c();
    } finally {
      L.T = u, R.p = m, R.d.f();
    }
  }, x.preconnect = function(c, u) {
    typeof c == "string" && (u ? (u = u.crossOrigin, u = typeof u == "string" ? u === "use-credentials" ? u : "" : void 0) : u = null, R.d.C(c, u));
  }, x.prefetchDNS = function(c) {
    typeof c == "string" && R.d.D(c);
  }, x.preinit = function(c, u) {
    if (typeof c == "string" && u && typeof u.as == "string") {
      var m = u.as, s = N(m, u.crossOrigin), n = typeof u.integrity == "string" ? u.integrity : void 0, p = typeof u.fetchPriority == "string" ? u.fetchPriority : void 0;
      m === "style" ? R.d.S(
        c,
        typeof u.precedence == "string" ? u.precedence : void 0,
        {
          crossOrigin: s,
          integrity: n,
          fetchPriority: p
        }
      ) : m === "script" && R.d.X(c, {
        crossOrigin: s,
        integrity: n,
        fetchPriority: p,
        nonce: typeof u.nonce == "string" ? u.nonce : void 0
      });
    }
  }, x.preinitModule = function(c, u) {
    if (typeof c == "string")
      if (typeof u == "object" && u !== null) {
        if (u.as == null || u.as === "script") {
          var m = N(
            u.as,
            u.crossOrigin
          );
          R.d.M(c, {
            crossOrigin: m,
            integrity: typeof u.integrity == "string" ? u.integrity : void 0,
            nonce: typeof u.nonce == "string" ? u.nonce : void 0
          });
        }
      } else u == null && R.d.M(c);
  }, x.preload = function(c, u) {
    if (typeof c == "string" && typeof u == "object" && u !== null && typeof u.as == "string") {
      var m = u.as, s = N(m, u.crossOrigin);
      R.d.L(c, m, {
        crossOrigin: s,
        integrity: typeof u.integrity == "string" ? u.integrity : void 0,
        nonce: typeof u.nonce == "string" ? u.nonce : void 0,
        type: typeof u.type == "string" ? u.type : void 0,
        fetchPriority: typeof u.fetchPriority == "string" ? u.fetchPriority : void 0,
        referrerPolicy: typeof u.referrerPolicy == "string" ? u.referrerPolicy : void 0,
        imageSrcSet: typeof u.imageSrcSet == "string" ? u.imageSrcSet : void 0,
        imageSizes: typeof u.imageSizes == "string" ? u.imageSizes : void 0,
        media: typeof u.media == "string" ? u.media : void 0
      });
    }
  }, x.preloadModule = function(c, u) {
    if (typeof c == "string")
      if (u) {
        var m = N(u.as, u.crossOrigin);
        R.d.m(c, {
          as: typeof u.as == "string" && u.as !== "script" ? u.as : void 0,
          crossOrigin: m,
          integrity: typeof u.integrity == "string" ? u.integrity : void 0
        });
      } else R.d.m(c);
  }, x.requestFormReset = function(c) {
    R.d.r(c);
  }, x.unstable_batchedUpdates = function(c, u) {
    return c(u);
  }, x.useFormState = function(c, u, m) {
    return L.H.useFormState(c, u, m);
  }, x.useFormStatus = function() {
    return L.H.useHostTransitionStatus();
  }, x.version = "19.1.1", x;
}
var q = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function ct() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && (function() {
    function f() {
    }
    function i(s) {
      return "" + s;
    }
    function h(s, n, p) {
      var w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        i(w);
        var $ = !1;
      } catch {
        $ = !0;
      }
      return $ && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && w[Symbol.toStringTag] || w.constructor.name || "Object"
      ), i(w)), {
        $$typeof: u,
        key: w == null ? null : "" + w,
        children: s,
        containerInfo: n,
        implementation: p
      };
    }
    function R(s, n) {
      if (s === "font") return "";
      if (typeof n == "string")
        return n === "use-credentials" ? n : "";
    }
    function T(s) {
      return s === null ? "`null`" : s === void 0 ? "`undefined`" : s === "" ? "an empty string" : 'something with type "' + typeof s + '"';
    }
    function k(s) {
      return s === null ? "`null`" : s === void 0 ? "`undefined`" : s === "" ? "an empty string" : typeof s == "string" ? JSON.stringify(s) : typeof s == "number" ? "`" + s + "`" : 'something with type "' + typeof s + '"';
    }
    function L() {
      var s = m.H;
      return s === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), s;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var N = Se(), c = {
      d: {
        f,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
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
    }, u = Symbol.for("react.portal"), m = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), q.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, q.createPortal = function(s, n) {
      var p = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return h(s, n, null, p);
    }, q.flushSync = function(s) {
      var n = m.T, p = c.p;
      try {
        if (m.T = null, c.p = 2, s)
          return s();
      } finally {
        m.T = n, c.p = p, c.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, q.preconnect = function(s, n) {
      typeof s == "string" && s ? n != null && typeof n != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        k(n)
      ) : n != null && typeof n.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        T(n.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        T(s)
      ), typeof s == "string" && (n ? (n = n.crossOrigin, n = typeof n == "string" ? n === "use-credentials" ? n : "" : void 0) : n = null, c.d.C(s, n));
    }, q.prefetchDNS = function(s) {
      if (typeof s != "string" || !s)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          T(s)
        );
      else if (1 < arguments.length) {
        var n = arguments[1];
        typeof n == "object" && n.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          k(n)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          k(n)
        );
      }
      typeof s == "string" && c.d.D(s);
    }, q.preinit = function(s, n) {
      if (typeof s == "string" && s ? n == null || typeof n != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        k(n)
      ) : n.as !== "style" && n.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        k(n.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        T(s)
      ), typeof s == "string" && n && typeof n.as == "string") {
        var p = n.as, w = R(p, n.crossOrigin), $ = typeof n.integrity == "string" ? n.integrity : void 0, I = typeof n.fetchPriority == "string" ? n.fetchPriority : void 0;
        p === "style" ? c.d.S(
          s,
          typeof n.precedence == "string" ? n.precedence : void 0,
          {
            crossOrigin: w,
            integrity: $,
            fetchPriority: I
          }
        ) : p === "script" && c.d.X(s, {
          crossOrigin: w,
          integrity: $,
          fetchPriority: I,
          nonce: typeof n.nonce == "string" ? n.nonce : void 0
        });
      }
    }, q.preinitModule = function(s, n) {
      var p = "";
      if (typeof s == "string" && s || (p += " The `href` argument encountered was " + T(s) + "."), n !== void 0 && typeof n != "object" ? p += " The `options` argument encountered was " + T(n) + "." : n && "as" in n && n.as !== "script" && (p += " The `as` option encountered was " + k(n.as) + "."), p)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          p
        );
      else
        switch (p = n && typeof n.as == "string" ? n.as : "script", p) {
          case "script":
            break;
          default:
            p = k(p), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              p,
              s
            );
        }
      typeof s == "string" && (typeof n == "object" && n !== null ? (n.as == null || n.as === "script") && (p = R(
        n.as,
        n.crossOrigin
      ), c.d.M(s, {
        crossOrigin: p,
        integrity: typeof n.integrity == "string" ? n.integrity : void 0,
        nonce: typeof n.nonce == "string" ? n.nonce : void 0
      })) : n == null && c.d.M(s));
    }, q.preload = function(s, n) {
      var p = "";
      if (typeof s == "string" && s || (p += " The `href` argument encountered was " + T(s) + "."), n == null || typeof n != "object" ? p += " The `options` argument encountered was " + T(n) + "." : typeof n.as == "string" && n.as || (p += " The `as` option encountered was " + T(n.as) + "."), p && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        p
      ), typeof s == "string" && typeof n == "object" && n !== null && typeof n.as == "string") {
        p = n.as;
        var w = R(
          p,
          n.crossOrigin
        );
        c.d.L(s, p, {
          crossOrigin: w,
          integrity: typeof n.integrity == "string" ? n.integrity : void 0,
          nonce: typeof n.nonce == "string" ? n.nonce : void 0,
          type: typeof n.type == "string" ? n.type : void 0,
          fetchPriority: typeof n.fetchPriority == "string" ? n.fetchPriority : void 0,
          referrerPolicy: typeof n.referrerPolicy == "string" ? n.referrerPolicy : void 0,
          imageSrcSet: typeof n.imageSrcSet == "string" ? n.imageSrcSet : void 0,
          imageSizes: typeof n.imageSizes == "string" ? n.imageSizes : void 0,
          media: typeof n.media == "string" ? n.media : void 0
        });
      }
    }, q.preloadModule = function(s, n) {
      var p = "";
      typeof s == "string" && s || (p += " The `href` argument encountered was " + T(s) + "."), n !== void 0 && typeof n != "object" ? p += " The `options` argument encountered was " + T(n) + "." : n && "as" in n && typeof n.as != "string" && (p += " The `as` option encountered was " + T(n.as) + "."), p && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        p
      ), typeof s == "string" && (n ? (p = R(
        n.as,
        n.crossOrigin
      ), c.d.m(s, {
        as: typeof n.as == "string" && n.as !== "script" ? n.as : void 0,
        crossOrigin: p,
        integrity: typeof n.integrity == "string" ? n.integrity : void 0
      })) : c.d.m(s));
    }, q.requestFormReset = function(s) {
      c.d.r(s);
    }, q.unstable_batchedUpdates = function(s, n) {
      return s(n);
    }, q.useFormState = function(s, n, p) {
      return L().useFormState(s, n, p);
    }, q.useFormStatus = function() {
      return L().useHostTransitionStatus();
    }, q.version = "19.1.1", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), q;
}
var Ve;
function ft() {
  if (Ve) return Re.exports;
  Ve = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (i) {
        console.error(i);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (f(), Re.exports = at()) : Re.exports = ct(), Re.exports;
}
var lt = ft();
const dt = /* @__PURE__ */ Ze(lt);
var pt = Object.defineProperty, yt = (f, i, h) => i in f ? pt(f, i, { enumerable: !0, configurable: !0, writable: !0, value: h }) : f[i] = h, Oe = (f, i, h) => yt(f, typeof i != "symbol" ? i + "" : i, h);
const gt = {
  stringify: (f) => f ? "true" : "false",
  parse: (f) => /^[ty1-9]/i.test(f)
}, mt = {
  stringify: (f) => f.name,
  parse: (f, i, h) => {
    const R = (() => {
      if (typeof window < "u" && f in window)
        return window[f];
      if (typeof global < "u" && f in global)
        return global[f];
    })();
    return typeof R == "function" ? R.bind(h) : void 0;
  }
}, _t = {
  stringify: (f) => JSON.stringify(f),
  parse: (f) => JSON.parse(f)
}, ht = {
  stringify: (f) => `${f}`,
  parse: (f) => parseFloat(f)
}, vt = {
  stringify: (f) => f,
  parse: (f) => f
}, ke = {
  string: vt,
  number: ht,
  boolean: gt,
  function: mt,
  json: _t
};
function Et(f) {
  return f.replace(
    /([a-z0-9])([A-Z])/g,
    (i, h, R) => `${h}-${R.toLowerCase()}`
  );
}
const be = Symbol.for("r2wc.render"), Te = Symbol.for("r2wc.connected"), se = Symbol.for("r2wc.context"), J = Symbol.for("r2wc.props");
function Rt(f, i, h) {
  var R, T, k;
  i.props || (i.props = f.propTypes ? Object.keys(f.propTypes) : []), i.events || (i.events = []);
  const L = Array.isArray(i.props) ? i.props.slice() : Object.keys(i.props), N = Array.isArray(i.events) ? i.events.slice() : Object.keys(i.events), c = {}, u = {}, m = {}, s = {};
  for (const p of L) {
    c[p] = Array.isArray(i.props) ? "string" : i.props[p];
    const w = Et(p);
    m[p] = w, s[w] = p;
  }
  for (const p of N)
    u[p] = Array.isArray(i.events) ? {} : i.events[p];
  class n extends HTMLElement {
    constructor() {
      super(), Oe(this, k, !0), Oe(this, T), Oe(this, R, {}), Oe(this, "container"), i.shadow ? this.container = this.attachShadow({
        mode: i.shadow
      }) : this.container = this, this[J].container = this.container;
      for (const w of L) {
        const $ = m[w], I = this.getAttribute($), Y = c[w], U = Y ? ke[Y] : null;
        U != null && U.parse && I && (this[J][w] = U.parse(I, $, this));
      }
      for (const w of N)
        this[J][w] = ($) => {
          const I = w.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(I, { detail: $, ...u[w] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(s);
    }
    connectedCallback() {
      this[Te] = !0, this[be]();
    }
    disconnectedCallback() {
      this[Te] = !1, this[se] && h.unmount(this[se]), delete this[se];
    }
    attributeChangedCallback(w, $, I) {
      const Y = s[w], U = c[Y], H = U ? ke[U] : null;
      Y in c && H != null && H.parse && I && (this[J][Y] = H.parse(I, w, this), this[be]());
    }
    [(k = Te, T = se, R = J, be)]() {
      this[Te] && (this[se] ? h.update(this[se], this[J]) : this[se] = h.mount(
        this.container,
        f,
        this[J]
      ));
    }
  }
  for (const p of L) {
    const w = m[p], $ = c[p];
    Object.defineProperty(n.prototype, p, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[J][p];
      },
      set(I) {
        this[J][p] = I;
        const Y = $ ? ke[$] : null;
        if (Y != null && Y.stringify) {
          const U = Y.stringify(I, w, this);
          this.getAttribute(w) !== U && this.setAttribute(w, U);
        } else
          this[be]();
      }
    });
  }
  return n;
}
function Ot(f, i, h, R = {}) {
  function T(N, c, u) {
    const m = i.createElement(c, u);
    if ("createRoot" in h) {
      const s = h.createRoot(N);
      return s.render(m), {
        container: N,
        root: s,
        ReactComponent: c
      };
    }
    if ("render" in h)
      return h.render(m, N), {
        container: N,
        ReactComponent: c
      };
    throw new Error("Invalid ReactDOM instance provided.");
  }
  function k({ container: N, root: c, ReactComponent: u }, m) {
    const s = i.createElement(u, m);
    if (c) {
      c.render(s);
      return;
    }
    if ("render" in h) {
      h.render(s, N);
      return;
    }
  }
  function L({ container: N, root: c }) {
    if (c) {
      c.unmount();
      return;
    }
    if ("unmountComponentAtNode" in h) {
      h.unmountComponentAtNode(N);
      return;
    }
  }
  return Rt(f, R, { mount: T, unmount: L, update: k });
}
var we = { exports: {} }, le = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function bt() {
  if (Ke) return le;
  Ke = 1;
  var f = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function h(R, T, k) {
    var L = null;
    if (k !== void 0 && (L = "" + k), T.key !== void 0 && (L = "" + T.key), "key" in T) {
      k = {};
      for (var N in T)
        N !== "key" && (k[N] = T[N]);
    } else k = T;
    return T = k.ref, {
      $$typeof: f,
      type: R,
      key: L,
      ref: T !== void 0 ? T : null,
      props: k
    };
  }
  return le.Fragment = i, le.jsx = h, le.jsxs = h, le;
}
var de = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function Tt() {
  return Xe || (Xe = 1, process.env.NODE_ENV !== "production" && (function() {
    function f(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === ce ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case $:
          return "Fragment";
        case Y:
          return "Profiler";
        case I:
          return "StrictMode";
        case j:
          return "Suspense";
        case ne:
          return "SuspenseList";
        case X:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case w:
            return "Portal";
          case H:
            return (t.displayName || "Context") + ".Provider";
          case U:
            return (t._context.displayName || "Context") + ".Consumer";
          case ie:
            var o = t.render;
            return t = t.displayName, t || (t = o.displayName || o.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case oe:
            return o = t.displayName || null, o !== null ? o : f(t.type) || "Memo";
          case B:
            o = t._payload, t = t._init;
            try {
              return f(t(o));
            } catch {
            }
        }
      return null;
    }
    function i(t) {
      return "" + t;
    }
    function h(t) {
      try {
        i(t);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var d = o.error, y = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return d.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          y
        ), i(t);
      }
    }
    function R(t) {
      if (t === $) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === B)
        return "<...>";
      try {
        var o = f(t);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function T() {
      var t = M.A;
      return t === null ? null : t.getOwner();
    }
    function k() {
      return Error("react-stack-top-frame");
    }
    function L(t) {
      if (ee.call(t, "key")) {
        var o = Object.getOwnPropertyDescriptor(t, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function N(t, o) {
      function d() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      d.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: d,
        configurable: !0
      });
    }
    function c() {
      var t = f(this.type);
      return K[t] || (K[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function u(t, o, d, y, _, P, v, z) {
      return d = P.ref, t = {
        $$typeof: p,
        type: t,
        key: o,
        props: P,
        _owner: _
      }, (d !== void 0 ? d : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: v
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function m(t, o, d, y, _, P, v, z) {
      var O = o.children;
      if (O !== void 0)
        if (y)
          if (Q(O)) {
            for (y = 0; y < O.length; y++)
              s(O[y]);
            Object.freeze && Object.freeze(O);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else s(O);
      if (ee.call(o, "key")) {
        O = f(t);
        var G = Object.keys(o).filter(function(ye) {
          return ye !== "key";
        });
        y = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", ue[O + y] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          y,
          O,
          G,
          O
        ), ue[O + y] = !0);
      }
      if (O = null, d !== void 0 && (h(d), O = "" + d), L(o) && (h(o.key), O = "" + o.key), "key" in o) {
        d = {};
        for (var fe in o)
          fe !== "key" && (d[fe] = o[fe]);
      } else d = o;
      return O && N(
        d,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), u(
        t,
        O,
        P,
        _,
        T(),
        d,
        v,
        z
      );
    }
    function s(t) {
      typeof t == "object" && t !== null && t.$$typeof === p && t._store && (t._store.validated = 1);
    }
    var n = Se(), p = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), $ = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), H = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), ce = Symbol.for("react.client.reference"), M = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = Object.prototype.hasOwnProperty, Q = Array.isArray, V = console.createTask ? console.createTask : function() {
      return null;
    };
    n = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var W, K = {}, te = n.react_stack_bottom_frame.bind(
      n,
      k
    )(), Z = V(R(k)), ue = {};
    de.Fragment = $, de.jsx = function(t, o, d, y, _) {
      var P = 1e4 > M.recentlyCreatedOwnerStacks++;
      return m(
        t,
        o,
        d,
        !1,
        y,
        _,
        P ? Error("react-stack-top-frame") : te,
        P ? V(R(t)) : Z
      );
    }, de.jsxs = function(t, o, d, y, _) {
      var P = 1e4 > M.recentlyCreatedOwnerStacks++;
      return m(
        t,
        o,
        d,
        !0,
        y,
        _,
        P ? Error("react-stack-top-frame") : te,
        P ? V(R(t)) : Z
      );
    };
  })()), de;
}
var Qe;
function wt() {
  return Qe || (Qe = 1, process.env.NODE_ENV === "production" ? we.exports = bt() : we.exports = Tt()), we.exports;
}
var St = wt();
function At({ label: f = "Clique aqui", alertContent: i = "Você clicou!" }) {
  return /* @__PURE__ */ St.jsx(
    "button",
    {
      style: { padding: "8px 16px", borderRadius: "8px", cursor: "pointer" },
      onClick: () => alert(i),
      children: f
    }
  );
}
const Ct = Ot(At, it, dt);
customElements.define("my-button", Ct);
