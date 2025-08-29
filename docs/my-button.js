const Me = globalThis || void 0 || self;
function Et(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var ft = { exports: {} }, Y = ft.exports = {}, J, ee;
function He() {
  throw new Error("setTimeout has not been defined");
}
function xe() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? J = setTimeout : J = He;
  } catch {
    J = He;
  }
  try {
    typeof clearTimeout == "function" ? ee = clearTimeout : ee = xe;
  } catch {
    ee = xe;
  }
})();
function lt(s) {
  if (J === setTimeout)
    return setTimeout(s, 0);
  if ((J === He || !J) && setTimeout)
    return J = setTimeout, setTimeout(s, 0);
  try {
    return J(s, 0);
  } catch {
    try {
      return J.call(null, s, 0);
    } catch {
      return J.call(this, s, 0);
    }
  }
}
function Rt(s) {
  if (ee === clearTimeout)
    return clearTimeout(s);
  if ((ee === xe || !ee) && clearTimeout)
    return ee = clearTimeout, clearTimeout(s);
  try {
    return ee(s);
  } catch {
    try {
      return ee.call(null, s);
    } catch {
      return ee.call(this, s);
    }
  }
}
var oe = [], ge = !1, pe, Le = -1;
function Tt() {
  !ge || !pe || (ge = !1, pe.length ? oe = pe.concat(oe) : Le = -1, oe.length && dt());
}
function dt() {
  if (!ge) {
    var s = lt(Tt);
    ge = !0;
    for (var a = oe.length; a; ) {
      for (pe = oe, oe = []; ++Le < a; )
        pe && pe[Le].run();
      Le = -1, a = oe.length;
    }
    pe = null, ge = !1, Rt(s);
  }
}
Y.nextTick = function(s) {
  var a = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var g = 1; g < arguments.length; g++)
      a[g - 1] = arguments[g];
  oe.push(new pt(s, a)), oe.length === 1 && !ge && lt(dt);
};
function pt(s, a) {
  this.fun = s, this.array = a;
}
pt.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Y.title = "browser";
Y.browser = !0;
Y.env = {};
Y.argv = [];
Y.version = "";
Y.versions = {};
function ue() {
}
Y.on = ue;
Y.addListener = ue;
Y.once = ue;
Y.off = ue;
Y.removeListener = ue;
Y.removeAllListeners = ue;
Y.emit = ue;
Y.prependListener = ue;
Y.prependOnceListener = ue;
Y.listeners = function(s) {
  return [];
};
Y.binding = function(s) {
  throw new Error("process.binding is not supported");
};
Y.cwd = function() {
  return "/";
};
Y.chdir = function(s) {
  throw new Error("process.chdir is not supported");
};
Y.umask = function() {
  return 0;
};
var Ot = ft.exports;
const F = /* @__PURE__ */ Et(Ot);
function yt(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Ce = { exports: {} }, E = {}, tt;
function bt() {
  if (tt) return E;
  tt = 1;
  var s = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), L = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), i = Symbol.iterator;
  function n(t) {
    return t === null || typeof t != "object" ? null : (t = i && t[i] || t["@@iterator"], typeof t == "function" ? t : null);
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
  function U() {
  }
  U.prototype = I.prototype;
  function H(t, o, d) {
    this.props = t, this.context = o, this.refs = $, this.updater = d || p;
  }
  var x = H.prototype = new U();
  x.constructor = H, w(x, I.prototype), x.isPureReactComponent = !0;
  var ye = Array.isArray, j = { H: null, A: null, T: null, S: null, V: null }, ce = Object.prototype.hasOwnProperty;
  function fe(t, o, d, y, _, P) {
    return d = P.ref, {
      $$typeof: s,
      type: t,
      key: o,
      ref: d !== void 0 ? d : null,
      props: P
    };
  }
  function K(t, o) {
    return fe(
      t.type,
      o,
      void 0,
      void 0,
      void 0,
      t.props
    );
  }
  function Z(t) {
    return typeof t == "object" && t !== null && t.$$typeof === s;
  }
  function he(t) {
    var o = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(d) {
      return o[d];
    });
  }
  var M = /\/+/g;
  function se(t, o) {
    return typeof t == "object" && t !== null && t.key != null ? he("" + t.key) : o.toString(36);
  }
  function te() {
  }
  function Q(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(te, te) : (t.status = "pending", t.then(
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
  function z(t, o, d, y, _) {
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
            case s:
            case a:
              v = !0;
              break;
            case h:
              return v = t._init, z(
                v(t._payload),
                o,
                d,
                y,
                _
              );
          }
      }
    if (v)
      return _ = _(t), v = y === "" ? "." + se(t, 0) : y, ye(_) ? (d = "", v != null && (d = v.replace(M, "$&/") + "/"), z(_, o, d, "", function(V) {
        return V;
      })) : _ != null && (Z(_) && (_ = K(
        _,
        d + (_.key == null || t && t.key === _.key ? "" : ("" + _.key).replace(
          M,
          "$&/"
        ) + "/") + v
      )), o.push(_)), 1;
    v = 0;
    var G = y === "" ? "." : y + ":";
    if (ye(t))
      for (var T = 0; T < t.length; T++)
        y = t[T], P = G + se(y, T), v += z(
          y,
          o,
          d,
          P,
          _
        );
    else if (T = n(t), typeof T == "function")
      for (t = T.call(t), T = 0; !(y = t.next()).done; )
        y = y.value, P = G + se(y, T++), v += z(
          y,
          o,
          d,
          P,
          _
        );
    else if (P === "object") {
      if (typeof t.then == "function")
        return z(
          Q(t),
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
  function X(t, o, d) {
    if (t == null) return t;
    var y = [], _ = 0;
    return z(t, y, "", "", function(P) {
      return o.call(d, P, _++);
    }), y;
  }
  function ie(t) {
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
  var re = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var o = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(o)) return;
    } else if (typeof F == "object" && typeof F.emit == "function") {
      F.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function le() {
  }
  return E.Children = {
    map: X,
    forEach: function(t, o, d) {
      X(
        t,
        function() {
          o.apply(this, arguments);
        },
        d
      );
    },
    count: function(t) {
      var o = 0;
      return X(t, function() {
        o++;
      }), o;
    },
    toArray: function(t) {
      return X(t, function(o) {
        return o;
      }) || [];
    },
    only: function(t) {
      if (!Z(t))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return t;
    }
  }, E.Component = I, E.Fragment = g, E.Profiler = b, E.PureComponent = H, E.StrictMode = R, E.Suspense = f, E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j, E.__COMPILER_RUNTIME = {
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
        !ce.call(o, v) || v === "key" || v === "__self" || v === "__source" || v === "ref" && o.ref === void 0 || (y[v] = o[v]);
    var v = arguments.length - 2;
    if (v === 1) y.children = d;
    else if (1 < v) {
      for (var G = Array(v), T = 0; T < v; T++)
        G[T] = arguments[T + 2];
      y.children = G;
    }
    return fe(t.type, _, void 0, void 0, P, y);
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
        ce.call(o, y) && y !== "key" && y !== "__self" && y !== "__source" && (_[y] = o[y]);
    var v = arguments.length - 2;
    if (v === 1) _.children = d;
    else if (1 < v) {
      for (var G = Array(v), T = 0; T < v; T++)
        G[T] = arguments[T + 2];
      _.children = G;
    }
    if (t && t.defaultProps)
      for (y in v = t.defaultProps, v)
        _[y] === void 0 && (_[y] = v[y]);
    return fe(t, P, void 0, void 0, null, _);
  }, E.createRef = function() {
    return { current: null };
  }, E.forwardRef = function(t) {
    return { $$typeof: N, render: t };
  }, E.isValidElement = Z, E.lazy = function(t) {
    return {
      $$typeof: h,
      _payload: { _status: -1, _result: t },
      _init: ie
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
      _ !== null && _(d, y), typeof y == "object" && y !== null && typeof y.then == "function" && y.then(le, re);
    } catch (P) {
      re(P);
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
var Re = { exports: {} };
Re.exports;
var rt;
function wt() {
  return rt || (rt = 1, (function(s, a) {
    F.env.NODE_ENV !== "production" && (function() {
      function g(e, r) {
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
        return e === null || typeof e != "object" ? null : (e = Te && e[Te] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function b(e, r) {
        e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
        var c = e + "." + r;
        qe[c] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          r,
          e
        ), qe[c] = !0);
      }
      function k(e, r, c) {
        this.props = e, this.context = r, this.refs = $e, this.updater = c || We;
      }
      function L() {
      }
      function N(e, r, c) {
        this.props = e, this.context = r, this.refs = $e, this.updater = c || We;
      }
      function f(e) {
        return "" + e;
      }
      function u(e) {
        try {
          f(e);
          var r = !1;
        } catch {
          r = !0;
        }
        if (r) {
          r = console;
          var c = r.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return c.call(
            r,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            l
          ), f(e);
        }
      }
      function h(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === mt ? null : e.displayName || e.name || null;
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
          case G:
            return "SuspenseList";
          case _e:
            return "Activity";
        }
        if (typeof e == "object")
          switch (typeof e.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), e.$$typeof) {
            case le:
              return "Portal";
            case _:
              return (e.displayName || "Context") + ".Provider";
            case y:
              return (e._context.displayName || "Context") + ".Consumer";
            case P:
              var r = e.render;
              return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case T:
              return r = e.displayName || null, r !== null ? r : h(e.type) || "Memo";
            case V:
              r = e._payload, e = e._init;
              try {
                return h(e(r));
              } catch {
              }
          }
        return null;
      }
      function i(e) {
        if (e === t) return "<>";
        if (typeof e == "object" && e !== null && e.$$typeof === V)
          return "<...>";
        try {
          var r = h(e);
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
        if (be.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning) return !1;
        }
        return e.key !== void 0;
      }
      function $(e, r) {
        function c() {
          Ve || (Ve = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            r
          ));
        }
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
      function I() {
        var e = h(this.type);
        return Ke[e] || (Ke[e] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), e = this.props.ref, e !== void 0 ? e : null;
      }
      function U(e, r, c, l, m, C, O, D) {
        return c = C.ref, e = {
          $$typeof: re,
          type: e,
          key: r,
          props: C,
          _owner: m
        }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
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
          value: O
        }), Object.defineProperty(e, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: D
        }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
      }
      function H(e, r) {
        return r = U(
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
      function x(e) {
        return typeof e == "object" && e !== null && e.$$typeof === re;
      }
      function ye(e) {
        var r = { "=": "=0", ":": "=2" };
        return "$" + e.replace(/[=:]/g, function(c) {
          return r[c];
        });
      }
      function j(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (u(e.key), ye("" + e.key)) : r.toString(36);
      }
      function ce() {
      }
      function fe(e) {
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
          default:
            switch (typeof e.status == "string" ? e.then(ce, ce) : (e.status = "pending", e.then(
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
      function K(e, r, c, l, m) {
        var C = typeof e;
        (C === "undefined" || C === "boolean") && (e = null);
        var O = !1;
        if (e === null) O = !0;
        else
          switch (C) {
            case "bigint":
            case "string":
            case "number":
              O = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case re:
                case le:
                  O = !0;
                  break;
                case V:
                  return O = e._init, K(
                    O(e._payload),
                    r,
                    c,
                    l,
                    m
                  );
              }
          }
        if (O) {
          O = e, m = m(O);
          var D = l === "" ? "." + j(O, 0) : l;
          return Ge(m) ? (c = "", D != null && (c = D.replace(Xe, "$&/") + "/"), K(m, r, c, "", function(ae) {
            return ae;
          })) : m != null && (x(m) && (m.key != null && (O && O.key === m.key || u(m.key)), c = H(
            m,
            c + (m.key == null || O && O.key === m.key ? "" : ("" + m.key).replace(
              Xe,
              "$&/"
            ) + "/") + D
          ), l !== "" && O != null && x(O) && O.key == null && O._store && !O._store.validated && (c._store.validated = 2), m = c), r.push(m)), 1;
        }
        if (O = 0, D = l === "" ? "." : l + ":", Ge(e))
          for (var S = 0; S < e.length; S++)
            l = e[S], C = D + j(l, S), O += K(
              l,
              r,
              c,
              C,
              m
            );
        else if (S = R(e), typeof S == "function")
          for (S === e.entries && (Qe || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Qe = !0), e = S.call(e), S = 0; !(l = e.next()).done; )
            l = l.value, C = D + j(l, S++), O += K(
              l,
              r,
              c,
              C,
              m
            );
        else if (C === "object") {
          if (typeof e.then == "function")
            return K(
              fe(e),
              r,
              c,
              l,
              m
            );
          throw r = String(e), Error(
            "Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return O;
      }
      function Z(e, r, c) {
        if (e == null) return e;
        var l = [], m = 0;
        return K(e, l, "", "", function(C) {
          return r.call(c, C, m++);
        }), l;
      }
      function he(e) {
        if (e._status === -1) {
          var r = e._result;
          r = r(), r.then(
            function(c) {
              (e._status === 0 || e._status === -1) && (e._status = 1, e._result = c);
            },
            function(c) {
              (e._status === 0 || e._status === -1) && (e._status = 2, e._result = c);
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
      function se() {
      }
      function te(e) {
        if (we === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7);
            we = (s && s[r]).call(
              s,
              "timers"
            ).setImmediate;
          } catch {
            we = function(l) {
              Je === !1 && (Je = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var m = new MessageChannel();
              m.port1.onmessage = l, m.port2.postMessage(void 0);
            };
          }
        return we(e);
      }
      function Q(e) {
        return 1 < e.length && typeof AggregateError == "function" ? new AggregateError(e) : e[0];
      }
      function z(e, r) {
        r !== Se - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), Se = r;
      }
      function X(e, r, c) {
        var l = A.actQueue;
        if (l !== null)
          if (l.length !== 0)
            try {
              ie(l), te(function() {
                return X(e, r, c);
              });
              return;
            } catch (m) {
              A.thrownErrors.push(m);
            }
          else A.actQueue = null;
        0 < A.thrownErrors.length ? (l = Q(A.thrownErrors), A.thrownErrors.length = 0, c(l)) : r(e);
      }
      function ie(e) {
        if (!Ye) {
          Ye = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var c = e[r];
              do {
                A.didUsePromise = !1;
                var l = c(!1);
                if (l !== null) {
                  if (A.didUsePromise) {
                    e[r] = c, e.splice(0, r);
                    return;
                  }
                  c = l;
                } else break;
              } while (!0);
            }
            e.length = 0;
          } catch (m) {
            e.splice(0, r + 1), A.thrownErrors.push(m);
          } finally {
            Ye = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var re = Symbol.for("react.transitional.element"), le = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), _ = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), _e = Symbol.for("react.activity"), Te = Symbol.iterator, qe = {}, We = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(e) {
          b(e, "forceUpdate");
        },
        enqueueReplaceState: function(e) {
          b(e, "replaceState");
        },
        enqueueSetState: function(e) {
          b(e, "setState");
        }
      }, ze = Object.assign, $e = {};
      Object.freeze($e), k.prototype.isReactComponent = {}, k.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, r, "setState");
      }, k.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      var B = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, Oe;
      for (Oe in B)
        B.hasOwnProperty(Oe) && g(Oe, B[Oe]);
      L.prototype = k.prototype, B = N.prototype = new L(), B.constructor = N, ze(B, k.prototype), B.isPureReactComponent = !0;
      var Ge = Array.isArray, mt = Symbol.for("react.client.reference"), A = {
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
      }, be = Object.prototype.hasOwnProperty, Fe = console.createTask ? console.createTask : function() {
        return null;
      };
      B = {
        react_stack_bottom_frame: function(e) {
          return e();
        }
      };
      var Ve, Be, Ke = {}, gt = B.react_stack_bottom_frame.bind(
        B,
        p
      )(), ht = Fe(i(p)), Qe = !1, Xe = /\/+/g, Ze = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var r = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(r)) return;
        } else if (typeof F == "object" && typeof F.emit == "function") {
          F.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, Je = !1, we = null, Se = 0, Ae = !1, Ye = !1, et = typeof queueMicrotask == "function" ? function(e) {
        queueMicrotask(function() {
          return queueMicrotask(e);
        });
      } : te;
      B = Object.freeze({
        __proto__: null,
        c: function(e) {
          return M().useMemoCache(e);
        }
      }), a.Children = {
        map: Z,
        forEach: function(e, r, c) {
          Z(
            e,
            function() {
              r.apply(this, arguments);
            },
            c
          );
        },
        count: function(e) {
          var r = 0;
          return Z(e, function() {
            r++;
          }), r;
        },
        toArray: function(e) {
          return Z(e, function(r) {
            return r;
          }) || [];
        },
        only: function(e) {
          if (!x(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        }
      }, a.Component = k, a.Fragment = t, a.Profiler = d, a.PureComponent = N, a.StrictMode = o, a.Suspense = v, a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = A, a.__COMPILER_RUNTIME = B, a.act = function(e) {
        var r = A.actQueue, c = Se;
        Se++;
        var l = A.actQueue = r !== null ? r : [], m = !1;
        try {
          var C = e();
        } catch (S) {
          A.thrownErrors.push(S);
        }
        if (0 < A.thrownErrors.length)
          throw z(r, c), e = Q(A.thrownErrors), A.thrownErrors.length = 0, e;
        if (C !== null && typeof C == "object" && typeof C.then == "function") {
          var O = C;
          return et(function() {
            m || Ae || (Ae = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(S, ae) {
              m = !0, O.then(
                function(me) {
                  if (z(r, c), c === 0) {
                    try {
                      ie(l), te(function() {
                        return X(
                          me,
                          S,
                          ae
                        );
                      });
                    } catch (vt) {
                      A.thrownErrors.push(vt);
                    }
                    if (0 < A.thrownErrors.length) {
                      var _t = Q(
                        A.thrownErrors
                      );
                      A.thrownErrors.length = 0, ae(_t);
                    }
                  } else S(me);
                },
                function(me) {
                  z(r, c), 0 < A.thrownErrors.length && (me = Q(
                    A.thrownErrors
                  ), A.thrownErrors.length = 0), ae(me);
                }
              );
            }
          };
        }
        var D = C;
        if (z(r, c), c === 0 && (ie(l), l.length !== 0 && et(function() {
          m || Ae || (Ae = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), A.actQueue = null), 0 < A.thrownErrors.length)
          throw e = Q(A.thrownErrors), A.thrownErrors.length = 0, e;
        return {
          then: function(S, ae) {
            m = !0, c === 0 ? (A.actQueue = l, te(function() {
              return X(
                D,
                S,
                ae
              );
            })) : S(D);
          }
        };
      }, a.cache = function(e) {
        return function() {
          return e.apply(null, arguments);
        };
      }, a.captureOwnerStack = function() {
        var e = A.getCurrentStack;
        return e === null ? null : e();
      }, a.cloneElement = function(e, r, c) {
        if (e == null)
          throw Error(
            "The argument must be a React element, but you passed " + e + "."
          );
        var l = ze({}, e.props), m = e.key, C = e._owner;
        if (r != null) {
          var O;
          e: {
            if (be.call(r, "ref") && (O = Object.getOwnPropertyDescriptor(
              r,
              "ref"
            ).get) && O.isReactWarning) {
              O = !1;
              break e;
            }
            O = r.ref !== void 0;
          }
          O && (C = n()), w(r) && (u(r.key), m = "" + r.key);
          for (D in r)
            !be.call(r, D) || D === "key" || D === "__self" || D === "__source" || D === "ref" && r.ref === void 0 || (l[D] = r[D]);
        }
        var D = arguments.length - 2;
        if (D === 1) l.children = c;
        else if (1 < D) {
          O = Array(D);
          for (var S = 0; S < D; S++)
            O[S] = arguments[S + 2];
          l.children = O;
        }
        for (l = U(
          e.type,
          m,
          void 0,
          void 0,
          C,
          l,
          e._debugStack,
          e._debugTask
        ), m = 2; m < arguments.length; m++)
          C = arguments[m], x(C) && C._store && (C._store.validated = 1);
        return l;
      }, a.createContext = function(e) {
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
      }, a.createElement = function(e, r, c) {
        for (var l = 2; l < arguments.length; l++) {
          var m = arguments[l];
          x(m) && m._store && (m._store.validated = 1);
        }
        if (l = {}, m = null, r != null)
          for (S in Be || !("__self" in r) || "key" in r || (Be = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), w(r) && (u(r.key), m = "" + r.key), r)
            be.call(r, S) && S !== "key" && S !== "__self" && S !== "__source" && (l[S] = r[S]);
        var C = arguments.length - 2;
        if (C === 1) l.children = c;
        else if (1 < C) {
          for (var O = Array(C), D = 0; D < C; D++)
            O[D] = arguments[D + 2];
          Object.freeze && Object.freeze(O), l.children = O;
        }
        if (e && e.defaultProps)
          for (S in C = e.defaultProps, C)
            l[S] === void 0 && (l[S] = C[S]);
        m && $(
          l,
          typeof e == "function" ? e.displayName || e.name || "Unknown" : e
        );
        var S = 1e4 > A.recentlyCreatedOwnerStacks++;
        return U(
          e,
          m,
          void 0,
          void 0,
          n(),
          l,
          S ? Error("react-stack-top-frame") : gt,
          S ? Fe(i(e)) : ht
        );
      }, a.createRef = function() {
        var e = { current: null };
        return Object.seal(e), e;
      }, a.forwardRef = function(e) {
        e != null && e.$$typeof === T ? console.error(
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
        var r = { $$typeof: P, render: e }, c;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return c;
          },
          set: function(l) {
            c = l, e.name || e.displayName || (Object.defineProperty(e, "name", { value: l }), e.displayName = l);
          }
        }), r;
      }, a.isValidElement = x, a.lazy = function(e) {
        return {
          $$typeof: V,
          _payload: { _status: -1, _result: e },
          _init: he
        };
      }, a.memo = function(e, r) {
        e == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          e === null ? "null" : typeof e
        ), r = {
          $$typeof: T,
          type: e,
          compare: r === void 0 ? null : r
        };
        var c;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return c;
          },
          set: function(l) {
            c = l, e.name || e.displayName || (Object.defineProperty(e, "name", { value: l }), e.displayName = l);
          }
        }), r;
      }, a.startTransition = function(e) {
        var r = A.T, c = {};
        A.T = c, c._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var l = e(), m = A.S;
          m !== null && m(c, l), typeof l == "object" && l !== null && typeof l.then == "function" && l.then(se, Ze);
        } catch (C) {
          Ze(C);
        } finally {
          r === null && c._updatedFibers && (e = c._updatedFibers.size, c._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), A.T = r;
        }
      }, a.unstable_useCacheRefresh = function() {
        return M().useCacheRefresh();
      }, a.use = function(e) {
        return M().use(e);
      }, a.useActionState = function(e, r, c) {
        return M().useActionState(
          e,
          r,
          c
        );
      }, a.useCallback = function(e, r) {
        return M().useCallback(e, r);
      }, a.useContext = function(e) {
        var r = M();
        return e.$$typeof === y && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), r.useContext(e);
      }, a.useDebugValue = function(e, r) {
        return M().useDebugValue(e, r);
      }, a.useDeferredValue = function(e, r) {
        return M().useDeferredValue(e, r);
      }, a.useEffect = function(e, r, c) {
        e == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var l = M();
        if (typeof c == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return l.useEffect(e, r);
      }, a.useId = function() {
        return M().useId();
      }, a.useImperativeHandle = function(e, r, c) {
        return M().useImperativeHandle(e, r, c);
      }, a.useInsertionEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), M().useInsertionEffect(e, r);
      }, a.useLayoutEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), M().useLayoutEffect(e, r);
      }, a.useMemo = function(e, r) {
        return M().useMemo(e, r);
      }, a.useOptimistic = function(e, r) {
        return M().useOptimistic(e, r);
      }, a.useReducer = function(e, r, c) {
        return M().useReducer(e, r, c);
      }, a.useRef = function(e) {
        return M().useRef(e);
      }, a.useState = function(e) {
        return M().useState(e);
      }, a.useSyncExternalStore = function(e, r, c) {
        return M().useSyncExternalStore(
          e,
          r,
          c
        );
      }, a.useTransition = function() {
        return M().useTransition();
      }, a.version = "19.1.1", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(Re, Re.exports)), Re.exports;
}
var nt;
function Ie() {
  return nt || (nt = 1, F.env.NODE_ENV === "production" ? Ce.exports = bt() : Ce.exports = wt()), Ce.exports;
}
var St = Ie();
const At = /* @__PURE__ */ yt(St);
var ke = { exports: {} }, q = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ot;
function Ct() {
  if (ot) return q;
  ot = 1;
  var s = Ie();
  function a(f) {
    var u = "https://react.dev/errors/" + f;
    if (1 < arguments.length) {
      u += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var h = 2; h < arguments.length; h++)
        u += "&args[]=" + encodeURIComponent(arguments[h]);
    }
    return "Minified React error #" + f + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function g() {
  }
  var R = {
    d: {
      f: g,
      r: function() {
        throw Error(a(522));
      },
      D: g,
      C: g,
      L: g,
      m: g,
      X: g,
      S: g,
      M: g
    },
    p: 0,
    findDOMNode: null
  }, b = Symbol.for("react.portal");
  function k(f, u, h) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: b,
      key: i == null ? null : "" + i,
      children: f,
      containerInfo: u,
      implementation: h
    };
  }
  var L = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function N(f, u) {
    if (f === "font") return "";
    if (typeof u == "string")
      return u === "use-credentials" ? u : "";
  }
  return q.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R, q.createPortal = function(f, u) {
    var h = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!u || u.nodeType !== 1 && u.nodeType !== 9 && u.nodeType !== 11)
      throw Error(a(299));
    return k(f, u, null, h);
  }, q.flushSync = function(f) {
    var u = L.T, h = R.p;
    try {
      if (L.T = null, R.p = 2, f) return f();
    } finally {
      L.T = u, R.p = h, R.d.f();
    }
  }, q.preconnect = function(f, u) {
    typeof f == "string" && (u ? (u = u.crossOrigin, u = typeof u == "string" ? u === "use-credentials" ? u : "" : void 0) : u = null, R.d.C(f, u));
  }, q.prefetchDNS = function(f) {
    typeof f == "string" && R.d.D(f);
  }, q.preinit = function(f, u) {
    if (typeof f == "string" && u && typeof u.as == "string") {
      var h = u.as, i = N(h, u.crossOrigin), n = typeof u.integrity == "string" ? u.integrity : void 0, p = typeof u.fetchPriority == "string" ? u.fetchPriority : void 0;
      h === "style" ? R.d.S(
        f,
        typeof u.precedence == "string" ? u.precedence : void 0,
        {
          crossOrigin: i,
          integrity: n,
          fetchPriority: p
        }
      ) : h === "script" && R.d.X(f, {
        crossOrigin: i,
        integrity: n,
        fetchPriority: p,
        nonce: typeof u.nonce == "string" ? u.nonce : void 0
      });
    }
  }, q.preinitModule = function(f, u) {
    if (typeof f == "string")
      if (typeof u == "object" && u !== null) {
        if (u.as == null || u.as === "script") {
          var h = N(
            u.as,
            u.crossOrigin
          );
          R.d.M(f, {
            crossOrigin: h,
            integrity: typeof u.integrity == "string" ? u.integrity : void 0,
            nonce: typeof u.nonce == "string" ? u.nonce : void 0
          });
        }
      } else u == null && R.d.M(f);
  }, q.preload = function(f, u) {
    if (typeof f == "string" && typeof u == "object" && u !== null && typeof u.as == "string") {
      var h = u.as, i = N(h, u.crossOrigin);
      R.d.L(f, h, {
        crossOrigin: i,
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
  }, q.preloadModule = function(f, u) {
    if (typeof f == "string")
      if (u) {
        var h = N(u.as, u.crossOrigin);
        R.d.m(f, {
          as: typeof u.as == "string" && u.as !== "script" ? u.as : void 0,
          crossOrigin: h,
          integrity: typeof u.integrity == "string" ? u.integrity : void 0
        });
      } else R.d.m(f);
  }, q.requestFormReset = function(f) {
    R.d.r(f);
  }, q.unstable_batchedUpdates = function(f, u) {
    return f(u);
  }, q.useFormState = function(f, u, h) {
    return L.H.useFormState(f, u, h);
  }, q.useFormStatus = function() {
    return L.H.useHostTransitionStatus();
  }, q.version = "19.1.1", q;
}
var W = {}, ut;
function kt() {
  return ut || (ut = 1, F.env.NODE_ENV !== "production" && (function() {
    function s() {
    }
    function a(i) {
      return "" + i;
    }
    function g(i, n, p) {
      var w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        a(w);
        var $ = !1;
      } catch {
        $ = !0;
      }
      return $ && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && w[Symbol.toStringTag] || w.constructor.name || "Object"
      ), a(w)), {
        $$typeof: u,
        key: w == null ? null : "" + w,
        children: i,
        containerInfo: n,
        implementation: p
      };
    }
    function R(i, n) {
      if (i === "font") return "";
      if (typeof n == "string")
        return n === "use-credentials" ? n : "";
    }
    function b(i) {
      return i === null ? "`null`" : i === void 0 ? "`undefined`" : i === "" ? "an empty string" : 'something with type "' + typeof i + '"';
    }
    function k(i) {
      return i === null ? "`null`" : i === void 0 ? "`undefined`" : i === "" ? "an empty string" : typeof i == "string" ? JSON.stringify(i) : typeof i == "number" ? "`" + i + "`" : 'something with type "' + typeof i + '"';
    }
    function L() {
      var i = h.H;
      return i === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), i;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var N = Ie(), f = {
      d: {
        f: s,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s
      },
      p: 0,
      findDOMNode: null
    }, u = Symbol.for("react.portal"), h = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), W.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, W.createPortal = function(i, n) {
      var p = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return g(i, n, null, p);
    }, W.flushSync = function(i) {
      var n = h.T, p = f.p;
      try {
        if (h.T = null, f.p = 2, i)
          return i();
      } finally {
        h.T = n, f.p = p, f.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, W.preconnect = function(i, n) {
      typeof i == "string" && i ? n != null && typeof n != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        k(n)
      ) : n != null && typeof n.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        b(n.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        b(i)
      ), typeof i == "string" && (n ? (n = n.crossOrigin, n = typeof n == "string" ? n === "use-credentials" ? n : "" : void 0) : n = null, f.d.C(i, n));
    }, W.prefetchDNS = function(i) {
      if (typeof i != "string" || !i)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          b(i)
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
      typeof i == "string" && f.d.D(i);
    }, W.preinit = function(i, n) {
      if (typeof i == "string" && i ? n == null || typeof n != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        k(n)
      ) : n.as !== "style" && n.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        k(n.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        b(i)
      ), typeof i == "string" && n && typeof n.as == "string") {
        var p = n.as, w = R(p, n.crossOrigin), $ = typeof n.integrity == "string" ? n.integrity : void 0, I = typeof n.fetchPriority == "string" ? n.fetchPriority : void 0;
        p === "style" ? f.d.S(
          i,
          typeof n.precedence == "string" ? n.precedence : void 0,
          {
            crossOrigin: w,
            integrity: $,
            fetchPriority: I
          }
        ) : p === "script" && f.d.X(i, {
          crossOrigin: w,
          integrity: $,
          fetchPriority: I,
          nonce: typeof n.nonce == "string" ? n.nonce : void 0
        });
      }
    }, W.preinitModule = function(i, n) {
      var p = "";
      if (typeof i == "string" && i || (p += " The `href` argument encountered was " + b(i) + "."), n !== void 0 && typeof n != "object" ? p += " The `options` argument encountered was " + b(n) + "." : n && "as" in n && n.as !== "script" && (p += " The `as` option encountered was " + k(n.as) + "."), p)
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
              i
            );
        }
      typeof i == "string" && (typeof n == "object" && n !== null ? (n.as == null || n.as === "script") && (p = R(
        n.as,
        n.crossOrigin
      ), f.d.M(i, {
        crossOrigin: p,
        integrity: typeof n.integrity == "string" ? n.integrity : void 0,
        nonce: typeof n.nonce == "string" ? n.nonce : void 0
      })) : n == null && f.d.M(i));
    }, W.preload = function(i, n) {
      var p = "";
      if (typeof i == "string" && i || (p += " The `href` argument encountered was " + b(i) + "."), n == null || typeof n != "object" ? p += " The `options` argument encountered was " + b(n) + "." : typeof n.as == "string" && n.as || (p += " The `as` option encountered was " + b(n.as) + "."), p && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        p
      ), typeof i == "string" && typeof n == "object" && n !== null && typeof n.as == "string") {
        p = n.as;
        var w = R(
          p,
          n.crossOrigin
        );
        f.d.L(i, p, {
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
    }, W.preloadModule = function(i, n) {
      var p = "";
      typeof i == "string" && i || (p += " The `href` argument encountered was " + b(i) + "."), n !== void 0 && typeof n != "object" ? p += " The `options` argument encountered was " + b(n) + "." : n && "as" in n && typeof n.as != "string" && (p += " The `as` option encountered was " + b(n.as) + "."), p && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        p
      ), typeof i == "string" && (n ? (p = R(
        n.as,
        n.crossOrigin
      ), f.d.m(i, {
        as: typeof n.as == "string" && n.as !== "script" ? n.as : void 0,
        crossOrigin: p,
        integrity: typeof n.integrity == "string" ? n.integrity : void 0
      })) : f.d.m(i));
    }, W.requestFormReset = function(i) {
      f.d.r(i);
    }, W.unstable_batchedUpdates = function(i, n) {
      return i(n);
    }, W.useFormState = function(i, n, p) {
      return L().useFormState(i, n, p);
    }, W.useFormStatus = function() {
      return L().useHostTransitionStatus();
    }, W.version = "19.1.1", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), W;
}
var st;
function Pt() {
  if (st) return ke.exports;
  st = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (F.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (a) {
        console.error(a);
      }
    }
  }
  return F.env.NODE_ENV === "production" ? (s(), ke.exports = Ct()) : ke.exports = kt(), ke.exports;
}
var Nt = Pt();
const jt = /* @__PURE__ */ yt(Nt);
var Dt = Object.defineProperty, Mt = (s, a, g) => a in s ? Dt(s, a, { enumerable: !0, configurable: !0, writable: !0, value: g }) : s[a] = g, Pe = (s, a, g) => Mt(s, typeof a != "symbol" ? a + "" : a, g);
const Lt = {
  stringify: (s) => s ? "true" : "false",
  parse: (s) => /^[ty1-9]/i.test(s)
}, It = {
  stringify: (s) => s.name,
  parse: (s, a, g) => {
    const R = (() => {
      if (typeof window < "u" && s in window)
        return window[s];
      if (typeof Me < "u" && s in Me)
        return Me[s];
    })();
    return typeof R == "function" ? R.bind(g) : void 0;
  }
}, $t = {
  stringify: (s) => JSON.stringify(s),
  parse: (s) => JSON.parse(s)
}, Yt = {
  stringify: (s) => `${s}`,
  parse: (s) => parseFloat(s)
}, Ut = {
  stringify: (s) => s,
  parse: (s) => s
}, Ue = {
  string: Ut,
  number: Yt,
  boolean: Lt,
  function: It,
  json: $t
};
function Ht(s) {
  return s.replace(
    /([a-z0-9])([A-Z])/g,
    (a, g, R) => `${g}-${R.toLowerCase()}`
  );
}
const Ne = Symbol.for("r2wc.render"), je = Symbol.for("r2wc.connected"), de = Symbol.for("r2wc.context"), ne = Symbol.for("r2wc.props");
function xt(s, a, g) {
  var R, b, k;
  a.props || (a.props = s.propTypes ? Object.keys(s.propTypes) : []), a.events || (a.events = []);
  const L = Array.isArray(a.props) ? a.props.slice() : Object.keys(a.props), N = Array.isArray(a.events) ? a.events.slice() : Object.keys(a.events), f = {}, u = {}, h = {}, i = {};
  for (const p of L) {
    f[p] = Array.isArray(a.props) ? "string" : a.props[p];
    const w = Ht(p);
    h[p] = w, i[w] = p;
  }
  for (const p of N)
    u[p] = Array.isArray(a.events) ? {} : a.events[p];
  class n extends HTMLElement {
    constructor() {
      super(), Pe(this, k, !0), Pe(this, b), Pe(this, R, {}), Pe(this, "container"), a.shadow ? this.container = this.attachShadow({
        mode: a.shadow
      }) : this.container = this, this[ne].container = this.container;
      for (const w of L) {
        const $ = h[w], I = this.getAttribute($), U = f[w], H = U ? Ue[U] : null;
        H != null && H.parse && I && (this[ne][w] = H.parse(I, $, this));
      }
      for (const w of N)
        this[ne][w] = ($) => {
          const I = w.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(I, { detail: $, ...u[w] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(i);
    }
    connectedCallback() {
      this[je] = !0, this[Ne]();
    }
    disconnectedCallback() {
      this[je] = !1, this[de] && g.unmount(this[de]), delete this[de];
    }
    attributeChangedCallback(w, $, I) {
      const U = i[w], H = f[U], x = H ? Ue[H] : null;
      U in f && x != null && x.parse && I && (this[ne][U] = x.parse(I, w, this), this[Ne]());
    }
    [(k = je, b = de, R = ne, Ne)]() {
      this[je] && (this[de] ? g.update(this[de], this[ne]) : this[de] = g.mount(
        this.container,
        s,
        this[ne]
      ));
    }
  }
  for (const p of L) {
    const w = h[p], $ = f[p];
    Object.defineProperty(n.prototype, p, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[ne][p];
      },
      set(I) {
        this[ne][p] = I;
        const U = $ ? Ue[$] : null;
        if (U != null && U.stringify) {
          const H = U.stringify(I, w, this);
          this.getAttribute(w) !== H && this.setAttribute(w, H);
        } else
          this[Ne]();
      }
    });
  }
  return n;
}
function qt(s, a, g, R = {}) {
  function b(N, f, u) {
    const h = a.createElement(f, u);
    if ("createRoot" in g) {
      const i = g.createRoot(N);
      return i.render(h), {
        container: N,
        root: i,
        ReactComponent: f
      };
    }
    if ("render" in g)
      return g.render(h, N), {
        container: N,
        ReactComponent: f
      };
    throw new Error("Invalid ReactDOM instance provided.");
  }
  function k({ container: N, root: f, ReactComponent: u }, h) {
    const i = a.createElement(u, h);
    if (f) {
      f.render(i);
      return;
    }
    if ("render" in g) {
      g.render(i, N);
      return;
    }
  }
  function L({ container: N, root: f }) {
    if (f) {
      f.unmount();
      return;
    }
    if ("unmountComponentAtNode" in g) {
      g.unmountComponentAtNode(N);
      return;
    }
  }
  return xt(s, R, { mount: b, unmount: L, update: k });
}
var De = { exports: {} }, ve = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var it;
function Wt() {
  if (it) return ve;
  it = 1;
  var s = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function g(R, b, k) {
    var L = null;
    if (k !== void 0 && (L = "" + k), b.key !== void 0 && (L = "" + b.key), "key" in b) {
      k = {};
      for (var N in b)
        N !== "key" && (k[N] = b[N]);
    } else k = b;
    return b = k.ref, {
      $$typeof: s,
      type: R,
      key: L,
      ref: b !== void 0 ? b : null,
      props: k
    };
  }
  return ve.Fragment = a, ve.jsx = g, ve.jsxs = g, ve;
}
var Ee = {}, at;
function zt() {
  return at || (at = 1, F.env.NODE_ENV !== "production" && (function() {
    function s(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === he ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case $:
          return "Fragment";
        case U:
          return "Profiler";
        case I:
          return "StrictMode";
        case j:
          return "Suspense";
        case ce:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case w:
            return "Portal";
          case x:
            return (t.displayName || "Context") + ".Provider";
          case H:
            return (t._context.displayName || "Context") + ".Consumer";
          case ye:
            var o = t.render;
            return t = t.displayName, t || (t = o.displayName || o.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case fe:
            return o = t.displayName || null, o !== null ? o : s(t.type) || "Memo";
          case K:
            o = t._payload, t = t._init;
            try {
              return s(t(o));
            } catch {
            }
        }
      return null;
    }
    function a(t) {
      return "" + t;
    }
    function g(t) {
      try {
        a(t);
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
        ), a(t);
      }
    }
    function R(t) {
      if (t === $) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === K)
        return "<...>";
      try {
        var o = s(t);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function b() {
      var t = M.A;
      return t === null ? null : t.getOwner();
    }
    function k() {
      return Error("react-stack-top-frame");
    }
    function L(t) {
      if (se.call(t, "key")) {
        var o = Object.getOwnPropertyDescriptor(t, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function N(t, o) {
      function d() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      d.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: d,
        configurable: !0
      });
    }
    function f() {
      var t = s(this.type);
      return X[t] || (X[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function u(t, o, d, y, _, P, v, G) {
      return d = P.ref, t = {
        $$typeof: p,
        type: t,
        key: o,
        props: P,
        _owner: _
      }, (d !== void 0 ? d : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: f
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
        value: G
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function h(t, o, d, y, _, P, v, G) {
      var T = o.children;
      if (T !== void 0)
        if (y)
          if (te(T)) {
            for (y = 0; y < T.length; y++)
              i(T[y]);
            Object.freeze && Object.freeze(T);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else i(T);
      if (se.call(o, "key")) {
        T = s(t);
        var V = Object.keys(o).filter(function(Te) {
          return Te !== "key";
        });
        y = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", le[T + y] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          y,
          T,
          V,
          T
        ), le[T + y] = !0);
      }
      if (T = null, d !== void 0 && (g(d), T = "" + d), L(o) && (g(o.key), T = "" + o.key), "key" in o) {
        d = {};
        for (var _e in o)
          _e !== "key" && (d[_e] = o[_e]);
      } else d = o;
      return T && N(
        d,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), u(
        t,
        T,
        P,
        _,
        b(),
        d,
        v,
        G
      );
    }
    function i(t) {
      typeof t == "object" && t !== null && t.$$typeof === p && t._store && (t._store.validated = 1);
    }
    var n = Ie(), p = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), $ = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), x = Symbol.for("react.context"), ye = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), ce = Symbol.for("react.suspense_list"), fe = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), he = Symbol.for("react.client.reference"), M = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, se = Object.prototype.hasOwnProperty, te = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    n = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var z, X = {}, ie = n.react_stack_bottom_frame.bind(
      n,
      k
    )(), re = Q(R(k)), le = {};
    Ee.Fragment = $, Ee.jsx = function(t, o, d, y, _) {
      var P = 1e4 > M.recentlyCreatedOwnerStacks++;
      return h(
        t,
        o,
        d,
        !1,
        y,
        _,
        P ? Error("react-stack-top-frame") : ie,
        P ? Q(R(t)) : re
      );
    }, Ee.jsxs = function(t, o, d, y, _) {
      var P = 1e4 > M.recentlyCreatedOwnerStacks++;
      return h(
        t,
        o,
        d,
        !0,
        y,
        _,
        P ? Error("react-stack-top-frame") : ie,
        P ? Q(R(t)) : re
      );
    };
  })()), Ee;
}
var ct;
function Gt() {
  return ct || (ct = 1, F.env.NODE_ENV === "production" ? De.exports = Wt() : De.exports = zt()), De.exports;
}
var Ft = Gt();
function Vt({ label: s = "Clique aqui", alertContent: a = "Você clicou!" }) {
  return /* @__PURE__ */ Ft.jsx(
    "button",
    {
      style: { padding: "8px 16px", borderRadius: "8px", cursor: "pointer" },
      onClick: () => alert(a),
      children: s
    }
  );
}
typeof window < "u" && typeof Me > "u" && (window.global = window);
typeof F > "u" && (window.process = {
  env: {
    NODE_ENV: "production"
  }
});
const Bt = qt(Vt, At, jt);
customElements.define("my-button", Bt);
