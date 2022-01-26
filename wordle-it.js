this.wordle = this.wordle || {}, this.wordle.bundle = function(e) {
  "use strict";

  function a(e) {
      return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
      } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
  }

  function s(e, a) {
      if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
  }

  function t(e, a) {
      for (var s = 0; s < a.length; s++) {
          var t = a[s];
          t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
      }
  }

  function o(e, a, s) {
      return a && t(e.prototype, a), s && t(e, s), e
  }

  function r(e, a, s) {
      return a in e ? Object.defineProperty(e, a, {
          value: s,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[a] = s, e
  }

  function n(e, a) {
      if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(a && a.prototype, {
          constructor: {
              value: e,
              writable: !0,
              configurable: !0
          }
      }), a && l(e, a)
  }

  function i(e) {
      return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
  }

  function l(e, a) {
      return (l = Object.setPrototypeOf || function(e, a) {
          return e.__proto__ = a, e
      })(e, a)
  }

  function d() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
      } catch (e) {
          return !1
      }
  }

  function u(e, a, s) {
      return (u = d() ? Reflect.construct : function(e, a, s) {
          var t = [null];
          t.push.apply(t, a);
          var o = new(Function.bind.apply(e, t));
          return s && l(o, s.prototype), o
      }).apply(null, arguments)
  }

  function c(e) {
      var a = "function" == typeof Map ? new Map : void 0;
      return (c = function(e) {
          if (null === e || (s = e, -1 === Function.toString.call(s).indexOf("[native code]"))) return e;
          var s;
          if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== a) {
              if (a.has(e)) return a.get(e);
              a.set(e, t)
          }

          function t() {
              return u(e, arguments, i(this).constructor)
          }
          return t.prototype = Object.create(e.prototype, {
              constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
              }
          }), l(t, e)
      })(e)
  }

  function p(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
  }

  function m(e, a) {
      return !a || "object" != typeof a && "function" != typeof a ? p(e) : a
  }

  function h(e) {
      var a = d();
      return function() {
          var s, t = i(e);
          if (a) {
              var o = i(this).constructor;
              s = Reflect.construct(t, arguments, o)
          } else s = t.apply(this, arguments);
          return m(this, s)
      }
  }

  function y(e, a) {
      return function(e) {
          if (Array.isArray(e)) return e
      }(e) || function(e, a) {
          var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null == s) return;
          var t, o, r = [],
              n = !0,
              i = !1;
          try {
              for (s = s.call(e); !(n = (t = s.next()).done) && (r.push(t.value), !a || r.length !== a); n = !0);
          } catch (e) {
              i = !0, o = e
          } finally {
              try {
                  n || null == s.return || s.return()
              } finally {
                  if (i) throw o
              }
          }
          return r
      }(e, a) || b(e, a) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
  }

  function g(e) {
      return function(e) {
          if (Array.isArray(e)) return f(e)
      }(e) || function(e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
      }(e) || b(e) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
  }

  function b(e, a) {
      if (e) {
          if ("string" == typeof e) return f(e, a);
          var s = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0
      }
  }

  function f(e, a) {
      (null == a || a > e.length) && (a = e.length);
      for (var s = 0, t = new Array(a); s < a; s++) t[s] = e[s];
      return t
  }
  var k = document.createElement("template");
  k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
  var v = function(e) {
      n(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), r(p(e = a.call(this)), "_letter", ""), r(p(e), "_state", "empty"), r(p(e), "_animation", "idle"), r(p(e), "_last", !1), r(p(e), "_reveal", !1), e.attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "last",
          set: function(e) {
              this._last = e
          }
      }, {
          key: "connectedCallback",
          value: function() {
              var e = this;
              this.shadowRoot.appendChild(k.content.cloneNode(!0)), this.$tile = this.shadowRoot.querySelector(".tile"), this.$tile.addEventListener("animationend", (function(a) {
                  "PopIn" === a.animationName && (e._animation = "idle"), "FlipIn" === a.animationName && (e.$tile.dataset.state = e._state, e._animation = "flip-out"), "FlipOut" === a.animationName && (e._animation = "idle", e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
                      bubbles: !0,
                      composed: !0
                  }))), e._render()
              })), this._render()
          }
      }, {
          key: "attributeChangedCallback",
          value: function(e, a, s) {
              switch (e) {
                  case "letter":
                      if (s === a) break;
                      var t = "null" === s ? "" : s;
                      this._letter = t, this._state = t ? "tbd" : "empty", this._animation = t ? "pop" : "idle";
                      break;
                  case "evaluation":
                      if (!s) break;
                      this._state = s;
                      break;
                  case "reveal":
                      this._animation = "flip-in", this._reveal = !0
              }
              this._render()
          }
      }, {
          key: "_render",
          value: function() {
              this.$tile && (this.$tile.textContent = this._letter, ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state), (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
          }
      }], [{
          key: "observedAttributes",
          get: function() {
              return ["letter", "evaluation", "reveal"]
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-tile", v);
  var w = document.createElement("template");
  w.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(6, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
  var x = function(e) {
      n(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), (e = a.call(this)).attachShadow({
              mode: "open"
          }), e._letters = "", e._evaluation = [], e._length, e
      }
      return o(t, [{
          key: "evaluation",
          get: function() {
              return this._evaluation
          },
          set: function(e) {
              var a = this;
              this._evaluation = e, this.$tiles && this.$tiles.forEach((function(e, s) {
                  e.setAttribute("evaluation", a._evaluation[s]), setTimeout((function() {
                      e.setAttribute("reveal", "")
                  }), 300 * s)
              }))
          }
      }, {
          key: "connectedCallback",
          value: function() {
              var e = this;
              this.shadowRoot.appendChild(w.content.cloneNode(!0)), this.$row = this.shadowRoot.querySelector(".row");
              for (var a = function(a) {
                      var s = document.createElement("game-tile"),
                          t = e._letters[a];
                      (t && s.setAttribute("letter", t), e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]), setTimeout((function() {
                          s.setAttribute("reveal", "")
                      }), 100 * a));
                      a === e._length - 1 && (s.last = !0), e.$row.appendChild(s)
                  }, s = 0; s < this._length; s++) a(s);
              this.$tiles = this.shadowRoot.querySelectorAll("game-tile"), this.addEventListener("animationend", (function(a) {
                  "Shake" === a.animationName && e.removeAttribute("invalid")
              }))
          }
      }, {
          key: "attributeChangedCallback",
          value: function(e, a, s) {
              switch (e) {
                  case "letters":
                      this._letters = s || "";
                      break;
                  case "length":
                      this._length = parseInt(s, 10);
                      break;
                  case "win":
                      if (null === s) {
                          this.$tiles.forEach((function(e) {
                              e.classList.remove("win")
                          }));
                          break
                      }
                      this.$tiles.forEach((function(e, a) {
                          e.classList.add("win"), e.style.animationDelay = "".concat(100 * a, "ms")
                      }))
              }
              this._render()
          }
      }, {
          key: "_render",
          value: function() {
              var e = this;
              this.$row && this.$tiles.forEach((function(a, s) {
                  var t = e._letters[s];
                  t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
              }))
          }
      }], [{
          key: "observedAttributes",
          get: function() {
              return ["letters", "length", "invalid", "win"]
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-row", x);
  var z = document.createElement("template");
  z.innerHTML = "\n  <slot></slot>\n";
  var j = "darkTheme",
      S = "colorBlindTheme",
      _ = function(e) {
          n(t, e);
          var a = h(t);

          function t() {
              var e;
              s(this, t), r(p(e = a.call(this)), "isDarkTheme", !1), r(p(e), "isColorBlindTheme", !1), e.attachShadow({
                  mode: "open"
              });
              var o = JSON.parse(window.localStorage.getItem(j)),
                  n = window.matchMedia("(prefers-color-scheme: dark)").matches,
                  i = JSON.parse(window.localStorage.getItem(S));
              return !0 === o || !1 === o ? e.setDarkTheme(o) : n && e.setDarkTheme(!0), !0 !== i && !1 !== i || e.setColorBlindTheme(i), e
          }
          return o(t, [{
              key: "setDarkTheme",
              value: function(e) {
                  var a = document.querySelector("body");
                  e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"), this.isDarkTheme = e, window.localStorage.setItem(j, JSON.stringify(e))
              }
          }, {
              key: "setColorBlindTheme",
              value: function(e) {
                  var a = document.querySelector("body");
                  e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"), this.isColorBlindTheme = e, window.localStorage.setItem(S, JSON.stringify(e))
              }
          }, {
              key: "connectedCallback",
              value: function() {
                  var e = this;
                  this.shadowRoot.appendChild(z.content.cloneNode(!0)), this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                      var s = a.detail,
                          t = s.name,
                          o = s.checked;
                      switch (t) {
                          case "dark-theme":
                              return void e.setDarkTheme(o);
                          case "color-blind-theme":
                              return void e.setColorBlindTheme(o)
                      }
                  }))
              }
          }]), t
      }(c(HTMLElement));

  function q(e, a) {
      return e === a || e != e && a != a
  }

  function E(e, a) {
      for (var s = e.length; s--;)
          if (q(e[s][0], a)) return s;
      return -1
  }
  customElements.define("game-theme-manager", _);
  var A = Array.prototype.splice;

  function L(e) {
      var a = -1,
          s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s;) {
          var t = e[a];
          this.set(t[0], t[1])
      }
  }
  L.prototype.clear = function() {
      this.__data__ = [], this.size = 0
  }, L.prototype.delete = function(e) {
      var a = this.__data__,
          s = E(a, e);
      return !(s < 0) && (s == a.length - 1 ? a.pop() : A.call(a, s, 1), --this.size, !0)
  }, L.prototype.get = function(e) {
      var a = this.__data__,
          s = E(a, e);
      return s < 0 ? void 0 : a[s][1]
  }, L.prototype.has = function(e) {
      return E(this.__data__, e) > -1
  }, L.prototype.set = function(e, a) {
      var s = this.__data__,
          t = E(s, e);
      return t < 0 ? (++this.size, s.push([e, a])) : s[t][1] = a, this
  };
  var T = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global,
      I = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
      C = T || I || Function("return this")(),
      M = C.Symbol,
      O = Object.prototype,
      R = O.hasOwnProperty,
      $ = O.toString,
      P = M ? M.toStringTag : void 0;
  var N = Object.prototype.toString;
  var H = M ? M.toStringTag : void 0;

  function G(e) {
      return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : H && H in Object(e) ? function(e) {
          var a = R.call(e, P),
              s = e[P];
          try {
              e[P] = void 0;
              var t = !0
          } catch (e) {}
          var o = $.call(e);
          return t && (a ? e[P] = s : delete e[P]), o
      }(e) : function(e) {
          return N.call(e)
      }(e)
  }

  function D(e) {
      var s = a(e);
      return null != e && ("object" == s || "function" == s)
  }

  function B(e) {
      if (!D(e)) return !1;
      var a = G(e);
      return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a
  }
  var F, W = C["__core-js_shared__"],
      Y = (F = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "";
  var J = Function.prototype.toString;
  var U = /^\[object .+?Constructor\]$/,
      X = Function.prototype,
      K = Object.prototype,
      V = X.toString,
      Q = K.hasOwnProperty,
      Z = RegExp("^" + V.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

  function ee(e) {
      return !(!D(e) || (a = e, Y && Y in a)) && (B(e) ? Z : U).test(function(e) {
          if (null != e) {
              try {
                  return J.call(e)
              } catch (e) {}
              try {
                  return e + ""
              } catch (e) {}
          }
          return ""
      }(e));
      var a
  }

  function ae(e, a) {
      var s = function(e, a) {
          return null == e ? void 0 : e[a]
      }(e, a);
      return ee(s) ? s : void 0
  }
  var se = ae(C, "Map"),
      te = ae(Object, "create");
  var oe = Object.prototype.hasOwnProperty;
  var re = Object.prototype.hasOwnProperty;

  function ne(e) {
      var a = -1,
          s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s;) {
          var t = e[a];
          this.set(t[0], t[1])
      }
  }

  function ie(e, s) {
      var t, o, r = e.__data__;
      return ("string" == (o = a(t = s)) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== t : null === t) ? r["string" == typeof s ? "string" : "hash"] : r.map
  }

  function le(e) {
      var a = -1,
          s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s;) {
          var t = e[a];
          this.set(t[0], t[1])
      }
  }
  ne.prototype.clear = function() {
      this.__data__ = te ? te(null) : {}, this.size = 0
  }, ne.prototype.delete = function(e) {
      var a = this.has(e) && delete this.__data__[e];
      return this.size -= a ? 1 : 0, a
  }, ne.prototype.get = function(e) {
      var a = this.__data__;
      if (te) {
          var s = a[e];
          return "__lodash_hash_undefined__" === s ? void 0 : s
      }
      return oe.call(a, e) ? a[e] : void 0
  }, ne.prototype.has = function(e) {
      var a = this.__data__;
      return te ? void 0 !== a[e] : re.call(a, e)
  }, ne.prototype.set = function(e, a) {
      var s = this.__data__;
      return this.size += this.has(e) ? 0 : 1, s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a, this
  }, le.prototype.clear = function() {
      this.size = 0, this.__data__ = {
          hash: new ne,
          map: new(se || L),
          string: new ne
      }
  }, le.prototype.delete = function(e) {
      var a = ie(this, e).delete(e);
      return this.size -= a ? 1 : 0, a
  }, le.prototype.get = function(e) {
      return ie(this, e).get(e)
  }, le.prototype.has = function(e) {
      return ie(this, e).has(e)
  }, le.prototype.set = function(e, a) {
      var s = ie(this, e),
          t = s.size;
      return s.set(e, a), this.size += s.size == t ? 0 : 1, this
  };

  function de(e) {
      var a = this.__data__ = new L(e);
      this.size = a.size
  }
  de.prototype.clear = function() {
      this.__data__ = new L, this.size = 0
  }, de.prototype.delete = function(e) {
      var a = this.__data__,
          s = a.delete(e);
      return this.size = a.size, s
  }, de.prototype.get = function(e) {
      return this.__data__.get(e)
  }, de.prototype.has = function(e) {
      return this.__data__.has(e)
  }, de.prototype.set = function(e, a) {
      var s = this.__data__;
      if (s instanceof L) {
          var t = s.__data__;
          if (!se || t.length < 199) return t.push([e, a]), this.size = ++s.size, this;
          s = this.__data__ = new le(t)
      }
      return s.set(e, a), this.size = s.size, this
  };
  var ue = function() {
      try {
          var e = ae(Object, "defineProperty");
          return e({}, "", {}), e
      } catch (e) {}
  }();

  function ce(e, a, s) {
      "__proto__" == a && ue ? ue(e, a, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
      }) : e[a] = s
  }

  function pe(e, a, s) {
      (void 0 !== s && !q(e[a], s) || void 0 === s && !(a in e)) && ce(e, a, s)
  }
  var me, he = function(e, a, s) {
          for (var t = -1, o = Object(e), r = s(e), n = r.length; n--;) {
              var i = r[me ? n : ++t];
              if (!1 === a(o[i], i, o)) break
          }
          return e
      },
      ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
      ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
      be = ge && ge.exports === ye ? C.Buffer : void 0,
      fe = be ? be.allocUnsafe : void 0;
  var ke = C.Uint8Array;

  function ve(e, a) {
      var s, t, o = a ? (s = e.buffer, t = new s.constructor(s.byteLength), new ke(t).set(new ke(s)), t) : e.buffer;
      return new e.constructor(o, e.byteOffset, e.length)
  }
  var we = Object.create,
      xe = function() {
          function e() {}
          return function(a) {
              if (!D(a)) return {};
              if (we) return we(a);
              e.prototype = a;
              var s = new e;
              return e.prototype = void 0, s
          }
      }();
  var ze, je, Se = (ze = Object.getPrototypeOf, je = Object, function(e) {
          return ze(je(e))
      }),
      _e = Object.prototype;

  function qe(e) {
      var a = e && e.constructor;
      return e === ("function" == typeof a && a.prototype || _e)
  }

  function Ee(e) {
      return null != e && "object" == a(e)
  }

  function Ae(e) {
      return Ee(e) && "[object Arguments]" == G(e)
  }
  var Le = Object.prototype,
      Te = Le.hasOwnProperty,
      Ie = Le.propertyIsEnumerable,
      Ce = Ae(function() {
          return arguments
      }()) ? Ae : function(e) {
          return Ee(e) && Te.call(e, "callee") && !Ie.call(e, "callee")
      },
      Me = Array.isArray;

  function Oe(e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
  }

  function Re(e) {
      return null != e && Oe(e.length) && !B(e)
  }
  var $e = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
      Pe = $e && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
      Ne = Pe && Pe.exports === $e ? C.Buffer : void 0,
      He = (Ne ? Ne.isBuffer : void 0) || function() {
          return !1
      },
      Ge = Function.prototype,
      De = Object.prototype,
      Be = Ge.toString,
      Fe = De.hasOwnProperty,
      We = Be.call(Object);
  var Ye = {};
  Ye["[object Float32Array]"] = Ye["[object Float64Array]"] = Ye["[object Int8Array]"] = Ye["[object Int16Array]"] = Ye["[object Int32Array]"] = Ye["[object Uint8Array]"] = Ye["[object Uint8ClampedArray]"] = Ye["[object Uint16Array]"] = Ye["[object Uint32Array]"] = !0, Ye["[object Arguments]"] = Ye["[object Array]"] = Ye["[object ArrayBuffer]"] = Ye["[object Boolean]"] = Ye["[object DataView]"] = Ye["[object Date]"] = Ye["[object Error]"] = Ye["[object Function]"] = Ye["[object Map]"] = Ye["[object Number]"] = Ye["[object Object]"] = Ye["[object RegExp]"] = Ye["[object Set]"] = Ye["[object String]"] = Ye["[object WeakMap]"] = !1;
  var Je = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
      Ue = Je && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
      Xe = Ue && Ue.exports === Je && T.process,
      Ke = function() {
          try {
              var e = Ue && Ue.require && Ue.require("util").types;
              return e || Xe && Xe.binding && Xe.binding("util")
          } catch (e) {}
      }(),
      Ve = Ke && Ke.isTypedArray,
      Qe = Ve ? function(e) {
          return function(a) {
              return e(a)
          }
      }(Ve) : function(e) {
          return Ee(e) && Oe(e.length) && !!Ye[G(e)]
      };

  function Ze(e, a) {
      if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a) return e[a]
  }
  var ea = Object.prototype.hasOwnProperty;

  function aa(e, a, s) {
      var t = e[a];
      ea.call(e, a) && q(t, s) && (void 0 !== s || a in e) || ce(e, a, s)
  }
  var sa = /^(?:0|[1-9]\d*)$/;

  function ta(e, s) {
      var t = a(e);
      return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || "symbol" != t && sa.test(e)) && e > -1 && e % 1 == 0 && e < s
  }
  var oa = Object.prototype.hasOwnProperty;

  function ra(e, a) {
      var s = Me(e),
          t = !s && Ce(e),
          o = !s && !t && He(e),
          r = !s && !t && !o && Qe(e),
          n = s || t || o || r,
          i = n ? function(e, a) {
              for (var s = -1, t = Array(e); ++s < e;) t[s] = a(s);
              return t
          }(e.length, String) : [],
          l = i.length;
      for (var d in e) !a && !oa.call(e, d) || n && ("length" == d || o && ("offset" == d || "parent" == d) || r && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
      return i
  }
  var na = Object.prototype.hasOwnProperty;

  function ia(e) {
      if (!D(e)) return function(e) {
          var a = [];
          if (null != e)
              for (var s in Object(e)) a.push(s);
          return a
      }(e);
      var a = qe(e),
          s = [];
      for (var t in e)("constructor" != t || !a && na.call(e, t)) && s.push(t);
      return s
  }

  function la(e) {
      return Re(e) ? ra(e, !0) : ia(e)
  }

  function da(e) {
      return function(e, a, s, t) {
          var o = !s;
          s || (s = {});
          for (var r = -1, n = a.length; ++r < n;) {
              var i = a[r],
                  l = t ? t(s[i], e[i], i, s, e) : void 0;
              void 0 === l && (l = e[i]), o ? ce(s, i, l) : aa(s, i, l)
          }
          return s
      }(e, la(e))
  }

  function ua(e, a, s, t, o, r, n) {
      var i = Ze(e, s),
          l = Ze(a, s),
          d = n.get(l);
      if (d) pe(e, s, d);
      else {
          var u, c = r ? r(i, l, s + "", e, a, n) : void 0,
              p = void 0 === c;
          if (p) {
              var m = Me(l),
                  h = !m && He(l),
                  y = !m && !h && Qe(l);
              c = l, m || h || y ? Me(i) ? c = i : Ee(u = i) && Re(u) ? c = function(e, a) {
                  var s = -1,
                      t = e.length;
                  for (a || (a = Array(t)); ++s < t;) a[s] = e[s];
                  return a
              }(i) : h ? (p = !1, c = function(e, a) {
                  if (a) return e.slice();
                  var s = e.length,
                      t = fe ? fe(s) : new e.constructor(s);
                  return e.copy(t), t
              }(l, !0)) : y ? (p = !1, c = ve(l, !0)) : c = [] : function(e) {
                  if (!Ee(e) || "[object Object]" != G(e)) return !1;
                  var a = Se(e);
                  if (null === a) return !0;
                  var s = Fe.call(a, "constructor") && a.constructor;
                  return "function" == typeof s && s instanceof s && Be.call(s) == We
              }(l) || Ce(l) ? (c = i, Ce(i) ? c = da(i) : D(i) && !B(i) || (c = function(e) {
                  return "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e))
              }(l))) : p = !1
          }
          p && (n.set(l, c), o(c, l, t, r, n), n.delete(l)), pe(e, s, c)
      }
  }

  function ca(e, a, s, t, o) {
      e !== a && he(a, (function(r, n) {
          if (o || (o = new de), D(r)) ua(e, a, n, s, ca, t, o);
          else {
              var i = t ? t(Ze(e, n), r, n + "", e, a, o) : void 0;
              void 0 === i && (i = r), pe(e, n, i)
          }
      }), la)
  }

  function pa(e) {
      return e
  }

  function ma(e, a, s) {
      switch (s.length) {
          case 0:
              return e.call(a);
          case 1:
              return e.call(a, s[0]);
          case 2:
              return e.call(a, s[0], s[1]);
          case 3:
              return e.call(a, s[0], s[1], s[2])
      }
      return e.apply(a, s)
  }
  var ha = Math.max;
  var ya = ue ? function(e, a) {
          return ue(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: (s = a, function() {
                  return s
              }),
              writable: !0
          });
          var s
      } : pa,
      ga = Date.now;
  var ba = function(e) {
      var a = 0,
          s = 0;
      return function() {
          var t = ga(),
              o = 16 - (t - s);
          if (s = t, o > 0) {
              if (++a >= 800) return arguments[0]
          } else a = 0;
          return e.apply(void 0, arguments)
      }
  }(ya);

  function fa(e, a) {
      return ba(function(e, a, s) {
          return a = ha(void 0 === a ? e.length - 1 : a, 0),
              function() {
                  for (var t = arguments, o = -1, r = ha(t.length - a, 0), n = Array(r); ++o < r;) n[o] = t[a + o];
                  o = -1;
                  for (var i = Array(a + 1); ++o < a;) i[o] = t[o];
                  return i[a] = s(n), ma(e, this, i)
              }
      }(e, a, pa), e + "")
  }
  var ka, va = (ka = function(e, a, s) {
          ca(e, a, s)
      }, fa((function(e, s) {
          var t = -1,
              o = s.length,
              r = o > 1 ? s[o - 1] : void 0,
              n = o > 2 ? s[2] : void 0;
          for (r = ka.length > 3 && "function" == typeof r ? (o--, r) : void 0, n && function(e, s, t) {
                  if (!D(t)) return !1;
                  var o = a(s);
                  return !!("number" == o ? Re(t) && ta(s, t.length) : "string" == o && s in t) && q(t[s], e)
              }(s[0], s[1], n) && (r = o < 3 ? void 0 : r, o = 1), e = Object(e); ++t < o;) {
              var i = s[t];
              i && ka(e, i, t, r)
          }
          return e
      }))),
      wa = "gameState",
      xa = {
          boardState: null,
          evaluations: null,
          rowIndex: null,
          solution: null,
          gameStatus: null,
          lastPlayedTs: null,
          lastCompletedTs: null,
          restoringFromLocalStorage: null,
          hardMode: !1
      };

  function za() {
      var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
      return JSON.parse(e)
  }

  function ja(e) {
      var a = za();
      ! function(e) {
          window.localStorage.setItem(wa, JSON.stringify(e))
      }(va(a, e))
  }
  var Sa = document.createElement("template");
  Sa.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Il gioco si fa duro</div>\n          <div class="description">Ogni lettera nota deve essere usata nei tentativi successivi</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Tema nero</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Colori ad alto contrasto</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Feedback</div>\n        </div>\n        <div class="control">\n          <a href="https://github.com/edogimo/wordle-it/issues/new" target="blank" title="github.com/edogimo/wordle-it">Github</a>\n          |\n          <a href="https://twitter.com/intent/tweet?screen_name=pietroppeter" target="blank" title="@pietroppeter">Twitter creatore originale</a>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div id="footnote">\n    <div id="puzzle-number"></div>\n    <div id="hash"></div>\n  <div>\n';
  var _a = function(e) {
      n(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), r(p(e = a.call(this)), "gameApp", void 0), e.attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "connectedCallback",
          value: function() {
              var e, a = this;
              this.shadowRoot.appendChild(Sa.content.cloneNode(!0)), this.shadowRoot.querySelector("#hash").textContent = null === (e = window.wordle) || void 0 === e ? void 0 : e.hash, this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset), this.shadowRoot.addEventListener("game-switch-change", (function(e) {
                  e.stopPropagation();
                  var s = e.detail,
                      t = s.name,
                      o = s.checked,
                      r = s.disabled;
                  a.dispatchEvent(new CustomEvent("game-setting-change", {
                      bubbles: !0,
                      composed: !0,
                      detail: {
                          name: t,
                          checked: o,
                          disabled: r
                      }
                  })), a.render()
              })), this.render()
          }
      }, {
          key: "render",
          value: function() {
              var e = document.querySelector("body");
              e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""), e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
              var a = za();
              a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""), a.hardMode || "IN_PROGRESS" !== a.gameStatus || 0 === a.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"), this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-settings", _a);
  var qa = document.createElement("template");
  qa.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
  var Ea = function(e) {
      n(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), r(p(e = a.call(this)), "_duration", void 0), e.attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "connectedCallback",
          value: function() {
              var e = this;
              this.shadowRoot.appendChild(qa.content.cloneNode(!0));
              var a = this.shadowRoot.querySelector(".toast");
              a.textContent = this.getAttribute("text"), this._duration = this.getAttribute("duration") || 1e3, "Infinity" !== this._duration && setTimeout((function() {
                  a.classList.add("fade")
              }), this._duration), a.addEventListener("transitionend", (function(a) {
                  e.parentNode.removeChild(e)
              }))
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-toast", Ea);
  var Aa = ['vitava', 'assona', 'scille', 'falche', 'venaci', 'cabilo', 'tintin', 'recili', 'sicula', 'sberni', 'telata', 'pogalo', 'purine', 'ccclxi', 'sgarza', 'pauesi', 'uscesi', 'cinema', 'piazzo', 'tronai', 'assali', 'figuli', 'rapace', 'nerume', 'ramage', 'pigiar', 'dogavi', 'conghe', 'sitita', 'safari', 'triosi', 'mcxxvi', 'rinomi', 'radone', 'gemica', 'vorato', 'tanato', 'chatto', 'aquari', 'taravi', 'svetta', 'murano', 'gheghi', 'didima', 'steppo', 'ialini', 'aurita', 'gaggio', 'atolli', 'tucani', 'fugare', 'rodico', 'oirese', 'orsini', 'rafidi', 'estato', 'avviva', 'auguro', 'birrai', 'numidi', 'avveri', 'roraci', 'carici', 'iazigi', 'vinota', 'pipaie', 'lenoni', 'rasevi', 'orarsi', 'mugico', 'meassi', 'rosivi', 'anello', 'ertevi', 'giugni', 'esitai', 'ovatti', 'factum', 'rugati', 'inibii', 'ideare', 'raduno', 'gazala', 'busche', 'mclvii', 'limita', 'ergete', 'sagivo', 'innato', 'iodata', 'cattai', 'papero', 'picene', 'inputi', 'cxcvii', 'turaco', 'detrar', 'didimi', 'lellar', 'tarpea', 'parlai', 'minala', 'tomato', 'gaming', 'scriva', 'pashtu', 'lutavi', 'orarti', 'salvie', 'pratio', 'plorai', 'porrai', 'spresi', 'scorar', 'giunge', 'stirpo', 'vitrei', 'spacci', 'oliato', 'nodosa', 'oziami', 'gennai', 'nucata', 'attivo', 'capito', 'sottai', 'vanali', 'cernei', 'gruzzo', 'suaria', 'stupra', 'daziai', 'surger', 'vaiata', 'atimia', 'parava', 'poggia', 'libavi', 'perita', 'desala', 'dolere', 'impese', 'olfate', 'deviai', 'reculi', 'sclamo', 'undici', 'fusata', 'sorori', 'sperma', 'ioduro', 'grugna', 'grammi', 'sepion', 'esordi', 'platee', 'litica', 'peroro', 'comuni', 'boleri', 'comuno', 'decadi', 'smorti', 'rudero', 'frisio', 'arbane', 'traimi', 'usuali', 'semaio', 'tossir', 'mdxxxv', 'visate', 'binale', 'gipeto', 'riusai', 'riotti', 'acridi', 'pluvie', 'vogava', 'dicati', 'gnidio', 'sciamo', 'stogai', 'fondar', 'avviai', 'ondino', 'zolfar', 'ordini', 'qzerty', 'oziamo', 'alluda', 'perori', 'tesesi', 'bacolo', 'mudano', 'bitume', 'fregai', 'caciai', 'comuna', 'ripiti', 'barbio', 'priamo', 'nivali', 'varale', 'clxxiv', 'dorrai', 'nudala', 'unizzo', 'sturai', 'cablai', 'ansime', 'pedati', 'ricadi', 'vitine', 'orbaci', 'slembo', 'svotai', 'esegui', 'dracme', 'padesi', 'orarla', 'fragne', 'lanoso', 'fugone', 'navate', 'remane', 'lavabi', 'stiesi', 'peocio', 'spermi', 'annuso', 'grafie', 'occisa', 'ghiare', 'ritiro', 'pavane', 'glioma', 'astrae', 'mucchi', 'layout', 'bufaci', 'sistri', 'lascar', 'trapor', 'fecale', 'sarghi', 'mearne', 'rivani', 'stosci', 'bracca', 'cadevi', 'orrore', 'spresa', 'turavi', 'argini', 'fritte', 'erpeti', 'cineta', 'medino', 'cmxlix', 'giudia', 'cobite', 'franse', 'oceani', 'svagar', 'spagli', 'ormata', 'mohawk', 'gualco', 'lividi', 'prechi', 'vinate', 'userai', 'russar', 'pedule', 'spiumo', 'angeli', 'desolo', 'gualde', 'meonia', 'tarpei', 'ertani', 'varaci', 'vogula', 'sporne', 'radiai', 'tropee', 'oblare', 'rubale', 'smuori', 'sdanne', 'bataie', 'spurie', 'kuanza', 'latiti', 'giobbo', 'bimana', 'dragai', 'cloche', 'tucano', 'fatati', 'dogali', 'samara', 'iodaci', 'dateti', 'notali', 'ricada', 'tonale', 'arcavo', 'lumaco', 'dulcis', 'enunci', 'gangli', 'ricolo', 'svapai', 'cineto', 'sebben', 'leccon', 'adduai', 'incubi', 'lavica', 'pausai', 'schiva', 'fintar', 'galego', 'risale', 'zigalo', 'debita', 'cumula', 'topaie', 'untino', 'ossida', 'entine', 'sprone', 'towers', 'bitter', 'scotch', 'tutalo', 'cdlxix', 'tomami', 'bateau', 'datati', 'minare', 'dccxci', 'divida', 'eupnee', 'recula', 'congri', 'pendie', 'orsine', 'volpai', 'elodia', 'adusto', 'ambite', 'durone', 'astato', 'sfaldi', 'zebrai', 'scafar', 'semmai', 'vogato', 'anotia', 'punica', 'canopo', 'calmai', 'pregna', 'allelo', 'sponde', 'misuri', 'prince', 'manici', 'sviene', 'tipona', 'oliavi', 'giobba', 'canard', 'antina', 'oneide', 'colpir', 'remava', 'preani', 'dogaci', 'infuno', 'estera', 'folder', 'barili', 'mixino', 'erpete', 'posare', 'barbie', 'salivo', 'purare', 'tarpai', 'parcai', 'broili', 'attale', 'traodi', 'decedi', 'lisale', 'paridi', 'salata', 'sfasci', 'coobar', 'cosano', 'vuotar', 'tilomi', 'venoso', 'ardore', 'vilire', 'bietta', 'algici', 'scindi', 'rabidi', 'damoni', 'alinea', 'tubala', 'scampi', 'ooforo', 'mccxii', 'critti', 'arerei', 'nubili', 'efesia', 'monosi', 'belalo', 'ridete', 'zonesi', 'mcmxlv', 'svolse', 'rolini', 'ferrei', 'caglio', 'carpet', 'begola', 'ripiva', 'atleta', 'morami', 'quitai', 'manine', 'venere', 'fisavi', 'quadre', 'graste', 'mononi', 'funere', 'svelga', 'bibbie', 'mmlxii', 'impuro', 'arrena', 'sfiati', 'iemali', 'tostai', 'binodo', 'bacaia', 'mohair', 'dimore', 'olisce', 'spoppa', 'oppiar', 'scorza', 'payene', 'doravi', 'impact', 'agisce', 'eburno', 'dotano', 'serino', 'gruidi', 'terreo', 'angone', 'ombrai', 'aprici', 'spenna', 'donino', 'pevera', 'eglino', 'sudava', 'langhe', 'alleai', 'lutali', 'arrosi', 'unioni', 'sapono', 'dolcii', 'stiate', 'fausto', 'salava', 'lavale', 'decide', 'sdinne', 'meteci', 'gnauli', 'mogani', 'denoti', 'zinnia', 'ammori', 'pesale', 'dragon', 'decano', 'piemia', 'idrolo', 'filane', 'arazzi', 'grulle', 'raguni', 'schivo', 'arreco', 'ugnata', 'indiar', 'carato', 'morona', 'rifasi', 'vigoro', 'grugno', 'vamene', 'sfollo', 'ancoro', 'punger', 'giulia', 'sfotti', 'covane', 'faxavi', 'spruna', 'binare', 'acervi', 'begavi', 'aggera', 'coccia', 'intina', 'sedava', 'ottica', 'tentai', 'yucche', 'dumose', 'talami', 'averlo', 'quinta', 'sudata', 'vicesi', 'gerita', 'pierio', 'tacite', 'boiate', 'sbafar', 'grasce', 'remale', 'corcai', 'camena', 'gliali', 'rotavo', 'aviani', 'smilzo', 'casali', 'triamo', 'sabbia', 'evinse', 'nativi', 'fliace', 'salili', 'labrum', 'nefari', 'situai', 'fluite', 'caditi', 'dolane', 'eccidi', 'parrai', 'acetar', 'lumala', 'buffer', 'fidata', 'papagi', 'tagico', 'stinga', 'sgamai', 'trolli', 'offrir', 'tosati', 'adirsi', 'algore', 'soppor', 'chaise', 'menola', 'dlxxxv', 'mirato', 'voluta', 'renavi', 'appose', 'rodane', 'naiade', 'bronci', 'cenami', 'vocivo', 'spaino', 'floppy', 'creale', 'ecoidi', 'tosane', 'nichel', 'bolidi', 'mugola', 'oreria', 'futili', 'trugli', 'rinoti', 'sigani', 'bundle', 'ascosi', 'livree', 'rurali', 'duravo', 'ignudi', 'blocco', 'tatare', 'coiami', 'peneio', 'sfasai', 'nights', 'tirino', 'ammodo', 'stinai', 'rullai', 'indure', 'fusavi', 'delude', 'fruiti', 'estesi', 'accula', 'schema', 'sonoro', 'legata', 'budini', 'sabota', 'indice', 'smunto', 'piovvi', 'unirai', 'venula', 'colane', 'rilodo', 'traevi', 'avalvi', 'report', 'arealo', 'truzza', 'smolli', 'pudore', 'torosi', 'razzia', 'celibi', 'mdxxvi', 'erbale', 'errati', 'pigmea', 'erlang', 'potano', 'gasavo', 'getulo', 'sondar', 'gagati', 'fiutar', 'sdraia', 'auditi', 'scarpi', 'innevo', 'diruti', 'casini', 'astili', 'vertei', 'sbosco', 'ariano', 'lagoso', 'egioco', 'riluci', 'scorna', 'strass', 'ridite', 'nascer', 'risiti', 'binomi', 'petami', 'ortese', 'zaffai', 'trarti', 'adotto', 'sheqel', 'bevuto', 'eteria', 'rimena', 'classa', 'svogli', 'muffin', 'mcccxx', 'testai', 'covone', 'osarli', 'florei', 'astilo', 'destro', 'mentre', 'fluiti', 'medica', 'notaie', 'classi', 'inetti', 'causai', 'peschi', 'rorida', 'delata', 'teucra', 'tropea', 'prandi', 'vivevi', 'ardiri', 'friend', 'scordi', 'embolo', 'ostola', 'attesa', 'gitali', 'colalo', 'spongo', 'rescue', 'epatta', 'piombo', 'quatta', 'ziesco', 'solaio', 'bitubo', 'tardai', 'ponilo', 'capace', 'tauoni', 'boxare', 'moncai', 'grampo', 'debbia', 'zoppie', 'adrone', 'volito', 'schifo', 'bucata', 'cimare', 'vapori', 'osculo', 'vagivo', 'morrei', 'telano', 'dicevo', 'sacchi', 'agnato', 'aunese', 'canone', 'fatelo', 'farete', 'levalo', 'dilato', 'vacuai', 'tumola', 'tepido', 'podure', 'capano', 'acarpi', 'esigei', 'iseana', 'necati', 'invasa', 'sbatta', 'tacila', 'baiano', 'delimo', 'porcai', 'ottavi', 'natici', 'rigela', 'gomena', 'iberna', 'senile', 'eriche', 'cadici', 'sformo', 'tifane', 'membri', 'risano', 'picare', 'darasa', 'allusa', 'sbollo', 'baiana', 'defeco', 'sfendo', 'landra', 'mdccxl', 'ciarle', 'nitrii', 'aliavi', 'spetri', 'pacche', 'dianzi', 'vaiaia', 'legale', 'ledila', 'scirpi', 'leniva', 'mirica', 'gasino', 'gitene', 'bigari', 'aderse', 'beveri', 'rufolo', 'ormane', 'angere', 'ranghi', 'meleti', 'gustar', 'recimi', 'famose', 'desini', 'vediti', 'dotaci', 'lottai', 'ancili', 'casato', 'lesiva', 'focidi', 'intero', 'fimine', 'mcmxli', 'sbosca', 'smalto', 'patici', 'cacate', 'pogane', 'federi', 'orlalo', 'cagali', 'focene', 'euzono', 'trassa', 'avvivo', 'empidi', 'duttor', 'nomare', 'calumo', 'nugolo', 'binesi', 'pompai', 'rumavi', 'sinese', 'tronar', 'scirro', 'scalfo', 'stente', 'reputi', 'lanara', 'aucube', 'mimici', 'agrari', 'cadeva', 'cdlxxv', 'latrar', 'riarso', 'lapido', 'ossami', 'cougar', 'sanava', 'vimalo', 'oocita', 'smonta', 'terrei', 'avvidi', 'tramar', 'dalica', 'quinte', 'sirima', 'aborri', 'mmxlix', 'alnici', 'faxavo', 'illesa', 'rodino', 'caftan', 'palane', 'vistai', 'olfino', 'divise', 'dirima', 'crimen', 'glauco', 'neutre', 'tofane', 'aviano', 'espiar', 'radura', 'rumini', 'mcccxi', 'golene', 'teucre', 'anciso', 'sfuoca', 'cclxvi', 'correa', 'gessar', 'mazdei', 'rimule', 'sfilza', 'osmose', 'sfocai', 'davamo', 'flagri', 'untivi', 'cufica', 'godile', 'eczemi', 'regime', 'derisa', 'orditi', 'zurlai', 'vodesi', 'rorese', 'onrano', 'aerare', 'vanite', 'malico', 'bulati', 'stinta', 'vernar', 'brinci', 'adibii', 'soboli', 'rugavi', 'onrala', 'camere', 'artato', 'pirosi', 'dhimmi', 'svuole', 'egagro', 'duruma', 'baiesi', 'uiguro', 'jockey', 'rogala', 'desiri', 'burina', 'gretta', 'roggio', 'bionde', 'tanghi', 'raialo', 'negavo', 'alzala', 'stoica', 'infamo', 'gelata', 'guniti', 'piscia', 'landau', 'larice', 'cerini', 'tavole', 'merore', 'avesse', 'cafoni', 'sballo', 'orrito', 'eteree', 'pareli', 'acqueo', 'energy', 'vomiti', 'guairi', 'onorar', 'divano', 'riavvi', 'tuguri', 'infame', 'scasse', 'aborre', 'emiche', 'patrie', 'pelavi', 'iacuta', 'caduco', 'aruaca', 'dating', 'duplex', 'morene', 'crotte', 'boxati', 'affuma', 'untosi', 'lenese', 'cianze', 'pappai', 'ungeva', 'simile', 'lentar', 'maschi', 'navati', 'refusi', 'cyborg', 'iodalo', 'imboli', 'sberno', 'pogaci', 'cresca', 'averci', 'angevo', 'smolla', 'rigosi', 'valora', 'dunese', 'rigala', 'dccvii', 'adonti', 'satire', 'audito', 'erboro', 'cccxcv', 'adoreo', 'ritiri', 'blatta', 'stomia', 'vacate', 'emails', 'ungimi', 'scarno', 'alzino', 'adunco', 'sciavo', 'abenti', 'tosali', 'ghetta', 'unghie', 'morder', 'ronchi', 'tagali', 'cadano', 'barese', 'buscai', 'toppai', 'pomeli', 'bureau', 'pavoni', 'vidimi', 'famava', 'pingue', 'fraudi', 'chiesi', 'sgusti', 'emazia', 'staffa', 'potavo', 'cerilo', 'cucivo', 'ghibli', 'fragna', 'quante', 'reflue', 'posale', 'strado', 'arditi', 'falese', 'dovuto', 'salita', 'garrii', 'bifidi', 'sbasso', 'tutelo', 'tatuar', 'zigani', 'recisi', 'decisa', 'neppur', 'patita', 'cevano', 'zelati', 'molaci', 'patani', 'immoli', 'altina', 'altica', 'orlale', 'rutuli', 'alacri', 'cimice', 'vaiati', 'sfocar', 'bomato', 'peneie', 'urlalo', 'riarse', 'tutano', 'duetti', 'foiolo', 'agerai', 'sdegni', 'spoeto', 'arrisa', 'comedy', 'cardai', 'pinesi', 'dormir', 'lecizi', 'destri', 'pavone', 'evolsi', 'svenie', 'rabbui', 'ripide', 'ampere', 'ridico', 'pensar', 'pilavi', 'tosese', 'riapro', 'esibii', 'erbato', 'pattar', 'fasano', 'sporci', 'xcviii', 'rastro', 'rogano', 'aspiro', 'cacala', 'lanina', 'aprila', 'permei', 'mdlxxx', 'ifugai', 'binava', 'ripesa', 'saporo', 'ratear', 'tonava', 'gorghi', 'sduchi', 'mutili', 'azonio', 'eucera', 'mitigo', 'rasile', 'kimoni', 'mattai', 'snasai', 'iterai', 'oblane', 'suzzai', 'anneri', 'irpino', 'petava', 'teodie', 'sentir', 'covile', 'bulare', 'dietim', 'focose', 'svende', 'ratite', 'sodata', 'savesi', 'olmeti', 'veggia', 'seneci', 'agiste', 'fremer', 'dipelo', 'svuoti', 'varrai', 'bearle', 'moneti', 'addoga', 'foconi', 'aziaco', 'ottano', 'cisali', 'votito', 'belata', 'infila', 'soralo', 'nicene', 'calaza', 'velesi', 'sbatti', 'spreca', 'cimane', 'ammala', 'ortali', 'armami', 'sballa', 'inasta', 'crespe', 'rutula', 'levare', 'inveli', 'farina', 'assisi', 'zarini', 'listar', 'succia', 'diviso', 'nugola', 'orinar', 'mcmliv', 'sfogai', 'caroli', 'pofana', 'spiche', 'renani', 'sdenti', 'sbaula', 'trisma', 'mearlo', 'redova', 'aghino', 'cumene', 'arrido', 'resovi', 'donate', 'tiella', 'oliava', 'ululai', 'pacate', 'avvito', 'ossosi', 'fotone', 'spreso', 'azoico', 'accora', 'loista', 'quidam', 'raugea', 'puglie', 'sburro', 'ossute', 'scevro', 'escile', 'adiuvo', 'storia', 'inerba', 'frimai', 'rimuto', 'cuccio', 'casina', 'usator', 'smogli', 'natami', 'oliare', 'tutare', 'infusa', 'vendei', 'scismi', 'basidi', 'chiuse', 'zumala', 'retati', 'felpai', 'stupir', 'mcmxiv', 'aurala', 'sterni', 'orcina', 'branco', 'gannir', 'agamia', 'sparii', 'motore', 'candir', 'fabbro', 'triavi', 'partii', 'cagano', 'cumbia', 'arsoci', 'mauser', 'velavi', 'otaria', 'ruppie', 'zelata', 'tuonai', 'triaci', 'bisaya', 'pogrom', 'ardevi', 'ricina', 'snobba', 'storto', 'albiti', 'seduca', 'desedo', 'assedî', 'stoino', 'dcxxiv', 'sperai', 'spiane', 'poderi', 'comodi', 'afrore', 'ierico', 'oblito', 'scremo', 'giucca', 'puntel', 'surfar', 'fummar', 'reduci', 'datimi', 'vedute', 'mdclix', 'capere', 'udirle', 'sterro', 'fumigo', 'rasoli', 'virane', 'cuocer', 'ricche', 'gelava', 'porose', 'pitico', 'covare', 'zigoma', 'squash', 'creali', 'adempi', 'foglia', 'glissa', 'fremii', 'spolpi', 'usuria', 'ciaone', 'nonano', 'aprico', 'vitavo', 'solavo', 'coobai', 'sfibra', 'odisse', 'durava', 'gliale', 'murala', 'crucca', 'abrase', 'aplite', 'zimasi', 'jobber', 'scacco', 'sganci', 'sitano', 'odiare', 'dietra', 'svelsi', 'molavi', 'ortani', 'batava', 'addino', 'drizze', 'emular', 'feijoa', 'milita', 'poncio', 'sedare', 'altari', 'cofana', 'sdarai', 'doravo', 'negane', 'serpei', 'limati', 'tipico', 'pinolo', 'barolo', 'sokori', 'consto', 'beammo', 'liccio', 'yazide', 'scucia', 'minace', 'modano', 'ideali', 'agissi', 'cosimi', 'angamo', 'sfatta', 'zonino', 'cornei', 'tegame', 'scalvo', 'troppi', 'oblala', 'velcri', 'immote', 'arnini', 'verone', 'bedano', 'issano', 'minaci', 'spazia', 'sorbir', 'getula', 'maluso', 'gagate', 'adisco', 'guitto', 'cosavo', 'pubici', 'luposo', 'negron', 'occisi', 'vogavi', 'targhe', 'ulcere', 'libame', 'belale', 'gibaio', 'iatesi', 'prugni', 'uzbeca', 'nodosi', 'cxxvii', 'aulito', 'vespai', 'ovante', 'preana', 'armesi', 'ambage', 'dicami', 'aguati', 'relego', 'crucco', 'dumosi', 'empili', 'carrai', 'togato', 'pesata', 'zotica', 'compri', 'zonata', 'cecero', 'defeda', 'dotami', 'scopia', 'ansimo', 'sfondo', 'semaie', 'frotta', 'ozioso', 'cristo', 'bomber', 'urtalo', 'orbati', 'tiravi', 'moncar', 'muffai', 'sereno', 'dittea', 'belato', 'aliato', 'vasaro', 'pecche', 'gerani', 'cafone', 'resoli', 'orzati', 'claudi', 'pipavi', 'danuna', 'cenone', 'oliere', 'traini', 'povesi', 'zinali', 'cianca', 'marina', 'second', 'svuota', 'arroli', 'virano', 'bastai', 'baschi', 'penati', 'incaci', 'rireso', 'boxale', 'lodati', 'relais', 'orassi', 'ciarda', 'vacane', 'levame', 'osmite', 'putida', 'untene', 'odirsi', 'gemuta', 'vanati', 'anaria', 'tuareg', 'alieni', 'tufavo', 'lascia', 'adimar', 'mirali', 'evelte', 'rialzo', 'tunica', 'vigora', 'sborsa', 'clonai', 'badgia', 'cmlxix', 'girete', 'sudino', 'sbraci', 'colani', 'limala', 'isodio', 'proavo', 'slanci', 'tenero', 'deludi', 'scarni', 'cdxcvi', 'invoca', 'nolesi', 'oleati', 'smezzi', 'avanie', 'sudala', 'spuzza', 'pepala', 'furavo', 'posole', 'sparlo', 'stinge', 'quesii', 'mitilo', 'rivide', 'brevio', 'raiane', 'scorge', 'urtaci', 'imbola', 'ciazio', 'oranti', 'labbro', 'escuti', 'aquila', 'ercole', 'arguti', 'pigidi', 'copiar', 'espada', 'sfizio', 'plotti', 'apprui', 'donale', 'matici', 'quitto', 'favole', 'ardire', 'sturbo', 'tarali', 'vagalo', 'adoree', 'frugar', 'canaie', 'uvaceo', 'drenar', 'tufosi', 'scippa', 'ricado', 'rinica', 'mondai', 'maceri', 'notari', 'tutine', 'ifugaa', 'cicuta', 'pepare', 'ruttai', 'quanta', 'yesman', 'pedala', 'scippo', 'cutter', 'inerme', 'scorai', 'texano', 'chiusa', 'flippo', 'buicci', 'elafro', 'slarga', 'legati', 'untore', 'cafona', 'svaghi', 'ramati', 'basici', 'necali', 'ertoli', 'govesi', 'smotta', 'puszta', 'sfrata', 'orobii', 'risoti', 'loconi', 'vilali', 'genali', 'racemo', 'tarsia', 'ottime', 'meante', 'smusai', 'arcidi', 'libica', 'aiutai', 'cimato', 'rimale', 'eutrio', 'anemia', 'spauro', 'erboso', 'scalzi', 'merita', 'dormii', 'jivaro', 'pedota', 'lobbia', 'lucori', 'fenoli', 'opiano', 'sdarle', 'rifino', 'tabica', 'cerala', 'forame', 'abiosi', 'povero', 'stalle', 'tesoro', 'arbori', 'ruinar', 'prunai', 'potami', 'rocket', 'ortiva', 'castri', 'dazino', 'ceppar', 'fedane', 'rososi', 'vaiaie', 'moneto', 'entina', 'risego', 'giocar', 'ovista', 'aloina', 'arbora', 'eletti', 'lavalo', 'furino', 'traine', 'sbrego', 'redalo', 'nevosa', 'morfee', 'azzero', 'ignami', 'fasata', 'palato', 'kwanza', 'finita', 'impeso', 'attelo', 'setolo', 'todina', 'oziate', 'requie', 'peposa', 'somalo', 'pipare', 'pippai', 'repili', 'pagava', 'ammaro', 'walser', 'arroso', 'venami', 'topino', 'sodami', 'necalo', 'ecceda', 'pescai', 'imbuii', 'ponevi', 'mcmlii', 'melino', 'alloca', 'venera', 'verole', 'stivar', 'mccxix', 'spycam', 'ugnale', 'truppe', 'cinomi', 'aliano', 'guachi', 'fugati', 'impuri', 'sgassa', 'sbotto', 'giulie', 'mdxlix', 'bonbon', 'petale', 'risvii', 'mudaci', 'acaule', 'manoso', 'resolo', 'sagole', 'scanni', 'dimuta', 'tesser', 'scurar', 'spuzzo', 'scuole', 'decede', 'pegola', 'satiro', 'caruga', 'glasse', 'fluati', 'locane', 'gemina', 'basoli', 'conina', 'guaite', 'zigaci', 'menato', 'faroto', 'zonali', 'minami', 'ispane', 'sedure', 'esulai', 'borosa', 'balena', 'illude', 'bacato', 'fomite', 'volagi', 'mirane', 'tonate', 'lodane', 'riceda', 'iesino', 'stingo', 'irrora', 'mutoni', 'danari', 'calchi', 'idealo', 'sodala', 'gomone', 'rodeva', 'sdarla', 'statti', 'panaia', 'duriti', 'segato', 'abbaio', 'vision', 'anidra', 'cubana', 'trulle', 'imenee', 'ettaro', 'rodava', 'timidi', 'astrai', 'druido', 'picara', 'mcdxcv', 'deaera', 'debbio', 'sognar', 'incola', 'ottavo', 'vaglia', 'sporco', 'iodane', 'olismi', 'numana', 'vasari', 'odiavi', 'granar', 'bucava', 'laidai', 'vilita', 'umilia', 'oziati', 'farcii', 'bagoba', 'sdarne', 'cimbre', 'attico', 'necate', 'gestii', 'pososa', 'palini', 'ertala', 'teneri', 'pesavi', 'zunesi', 'noceva', 'spedai', 'giunga', 'votire', 'scorte', 'estesa', 'trista', 'granii', 'creola', 'apogeo', 'limite', 'sloggi', 'ornava', 'begavo', 'salici', 'remote', 'sgarze', 'carcar', 'piaste', 'mirici', 'isperi', 'fumose', 'iridea', 'persea', 'taccia', 'gemilo', 'cmlxiv', 'sgolai', 'foggio', 'lisaci', 'monasa', 'divini', 'conidi', 'torria', 'fumoso', 'aspate', 'lovali', 'bulane', 'iridee', 'sviamo', 'infima', 'allibi', 'dirimi', 'meerei', 'nulese', 'tallii', 'destre', 'molate', 'ollari', 'spossa', 'tempio', 'ripara', 'rumava', 'ditino', 'conize', 'cultri', 'spalar', 'raptus', 'vinose', 'turbar', 'cerava', 'lofoti', 'secate', 'unicum', 'dolesi', 'briose', 'sartie', 'fisima', 'escori', 'sinidi', 'fiasco', 'sminar', 'brenta', 'iazidi', 'rosbif', 'seduce', 'azioni', 'sviata', 'crebre', 'intela', 'dosava', 'litati', 'filate', 'derive', 'pallar', 'domini', 'dicono', 'starti', 'coprii', 'ciurli', 'ditoni', 'aggese', 'biocco', 'tarmar', 'lurche', 'plusie', 'dirime', 'sbecca', 'ugnaci', 'ernico', 'sapevo', 'cretto', 'etesia', 'oogoni', 'lunula', 'culaci', 'creino', 'ureica', 'ipetro', 'rotary', 'silite', 'olfata', 'locche', 'osanna', 'sfende', 'attuar', 'lxxxii', 'cadmeo', 'polare', 'device', 'raiali', 'zombie', 'dorare', 'gabbia', 'adibir', 'lamano', 'liston', 'immura', 'zalofo', 'falsar', 'rullio', 'milesi', 'sdesti', 'raiamo', 'giorni', 'tirane', 'gridar', 'mimano', 'arsale', 'bruire', 'rituri', 'vimaci', 'pulese', 'zelavi', 'musata', 'ignora', 'zumare', 'scucio', 'repimi', 'molala', 'romeno', 'covaci', 'sgomma', 'alcuna', 'gomiti', 'reflua', 'pacier', 'acaica', 'riarmo', 'eloqui', 'adotta', 'applet', 'mixane', 'libali', 'nurses', 'rigali', 'invien', 'vivace', 'impune', 'rodalo', 'solano', 'lumere', 'banina', 'prudei', 'sforar', 'perula', 'scansa', 'tuning', 'samesi', 'pilami', 'farine', 'dcxlvi', 'zufoli', 'diarie', 'pelava', 'grasta', 'sporto', 'venota', 'ungule', 'brucea', 'nasava', 'secavo', 'rapidi', 'pranzi', 'replay', 'eusini', 'setati', 'paduli', 'nieghi', 'vocito', 'bufare', 'geoide', 'elisir', 'rizobi', 'sanale', 'olirti', 'vacava', 'decimo', 'trighe', 'fonati', 'spompo', 'sdoler', 'strofa', 'ramavi', 'tanami', 'telici', 'menata', 'venino', 'ritoni', 'lupara', 'mutare', 'soffio', 'odimmo', 'corsia', 'mutali', 'ginnai', 'regger', 'ansavo', 'mimuli', 'roffie', 'erompe', 'modica', 'abbile', 'mucidi', 'measte', 'mogano', 'gioito', 'mcccix', 'riforo', 'tufalo', 'genalo', 'sezzai', 'lunate', 'boites', 'basute', 'rattar', 'gonesi', 'autori', 'papere', 'nitore', 'esilia', 'everso', 'tanavo', 'alpino', 'peponi', 'capavi', 'tirava', 'gualca', 'gonfio', 'alauda', 'nomini', 'vorate', 'carice', 'revers', 'mangui', 'tanchi', 'sdilli', 'succhi', 'cclvii', 'poetar', 'venata', 'musava', 'ignito', 'arusso', 'parafo', 'coenti', 'penosi', 'woofer', 'onusto', 'icario', 'itteri', 'school', 'luposa', 'zirlar', 'suideo', 'coltro', 'ottima', 'vedrai', 'patano', 'macero', 'pedano', 'trauma', 'lineto', 'ripita', 'boruca', 'ricevo', 'mofete', 'formio', 'mcmvii', 'austro', 'fruivo', 'fallii', 'lumale', 'ponghi', 'spelar', 'piacer', 'quagga', 'gromme', 'spaesa', 'raffie', 'eleati', 'starar', 'unirci', 'temete', 'single', 'radila', 'prismi', 'spicca', 'cupreo', 'azzimo', 'zumaci', 'bufoni', 'oziosa', 'baiale', 'opiana', 'cavare', 'muffii', 'alialo', 'petavi', 'impeci', 'ruinai', 'logout', 'papali', 'puglia', 'gabesi', 'plinto', 'mmlxvi', 'pigmeo', 'sterpa', 'ammari', 'evitte', 'sculta', 'cagale', 'odirei', 'griqua', 'fusone', 'vincer', 'sanami', 'secaci', 'ammeti', 'oleavo', 'starle', 'spessa', 'tesoti', 'cadere', 'smotti', 'ronzai', 'brogia', 'lepori', 'cenava', 'pomeri', 'chiosa', 'desman', 'palale', 'putavo', 'starei', 'spelde', 'ormate', 'filato', 'ascesa', 'ergone', 'diaria', 'scleri', 'lattee', 'ragnar', 'emazie', 'lambda', 'loader', 'lesure', 'ciarpi', 'vicina', 'tabici', 'rapida', 'celzio', 'monera', 'tignai', 'marnai', 'boleti', 'insega', 'idumee', 'yogica', 'rodati', 'tanala', 'pososi', 'merite', 'sfalso', 'canina', 'lipoma', 'abboni', 'aranci', 'odiano', 'deseda', 'pilaci', 'favica', 'careno', 'cacine', 'cococo', 'mutaci', 'twitti', 'mdcccv', 'beiamo', 'immuro', 'proeva', 'cassia', 'pluvio', 'fiamma', 'braire', 'irrida', 'renina', 'inusta', 'rumigo', 'musivi', 'ditelo', 'fidate', 'fidino', 'ossuta', 'uxoria', 'mafiar', 'citisi', 'vilivo', 'faceva', 'euzone', 'gorghe', 'medesi', 'zelesi', 'piloni', 'immani', 'ilvati', 'miravo', 'quadra', 'bianco', 'maonie', 'dottar', 'sudate', 'vagoli', 'viride', 'pinete', 'loggia', 'fondue', 'xerobi', 'iazide', 'varata', 'abdica', 'brutto', 'givamo', 'sfregi', 'skillo', 'enfiar', 'restie', 'vacati', 'setter', 'inusti', 'verrei', 'imbasa', 'ricuso', 'girane', 'augura', 'ancide', 'oberai', 'mutino', 'cimasa', 'calere', 'vomere', 'ballar', 'lavavo', 'invaia', 'disiri', 'cosale', 'mdcxvi', 'stolta', 'innevi', 'moment', 'fonone', 'svolti', 'famino', 'eccoci', 'scagno', 'nganja', 'gannii', 'drammi', 'facole', 'benino', 'rabona', 'infere', 'ugnate', 'cetani', 'piarla', 'sorabi', 'luresi', 'fumida', 'quitti', 'ossuto', 'assido', 'mmxciv', 'sapida', 'bratta', 'rugumo', 'ascoso', 'malfar', 'dadino', 'sfendi', 'ustoli', 'culaco', 'miresi', 'flange', 'melami', 'casoso', 'perule', 'impruo', 'pineni', 'remoto', 'trusci', 'bearla', 'errava', 'sozzon', 'incula', 'bionda', 'picide', 'riempi', 'tonfai', 'lignei', 'lipidi', 'cibaci', 'vulgar', 'guaiti', 'preari', 'muerte', 'pipino', 'ulmici', 'putiti', 'status', 'rugano', 'ierica', 'gepida', 'seppia', 'alleva', 'dietro', 'ottopo', 'epurai', 'sugano', 'movevi', 'oleino', 'odorai', 'redala', 'mdcxcv', 'rizena', 'nomato', 'vagoni', 'brullo', 'scevra', 'emulga', 'storti', 'nottai', 'oocito', 'indomo', 'batalo', 'cuprei', 'lastre', 'sbeffi', 'alissi', 'avalli', 'cevese', 'musala', 'mayday', 'lander', 'mdclii', 'famosa', 'mdviii', 'allude', 'litate', 'orlavo', 'aliava', 'salire', 'tregua', 'scuoto', 'nonani', 'sciane', 'sgarar', 'vogate', 'sciita', 'pabuli', 'giunte', 'cosala', 'talent', 'adorea', 'vagaci', 'skeito', 'gestor', 'niente', 'slider', 'malati', 'parata', 'regino', 'mostai', 'oliane', 'evirai', 'elbano', 'seguii', 'yuppie', 'taciti', 'addici', 'lavavi', 'solfai', 'seloni', 'storie', 'baiuli', 'piloro', 'nasata', 'rifido', 'risate', 'sdiamo', 'rifidi', 'frisar', 'iatrea', 'motivo', 'cdxvii', 'skilla', 'visoni', 'aspidi', 'immaga', 'frison', 'nucati', 'papaye', 'trofie', 'filter', 'placar', 'opiane', 'agresi', 'sbrici', 'decani', 'riccon', 'sbraca', 'mosano', 'breuco', 'datino', 'alvine', 'peiesi', 'novene', 'ereggo', 'inteli', 'lumaci', 'aggira', 'cariai', 'thetan', 'stappi', 'nerbai', 'narrar', 'baioso', 'labore', 'fusaio', 'inarri', 'franci', 'eguali', 'enorme', 'mmxxiv', 'stonda', 'polari', 'patosi', 'ratesi', 'furavi', 'cricca', 'aversa', 'burghe', 'mclxxv', 'topati', 'sterco', 'frecce', 'strion', 'votavi', 'somnio', 'lxxxix', 'ertole', 'echino', 'topica', 'oofagi', 'adisti', 'scolmo', 'staffi', 'vedeva', 'trucci', 'deboli', 'canteo', 'oscena', 'ciccar', 'evader', 'orzava', 'dischi', 'setina', 'orrita', 'musone', 'riride', 'armoni', 'locata', 'riebbi', 'sporre', 'tallio', 'rovana', 'orsina', 'idalgo', 'urlale', 'oblalo', 'rivado', 'palpar', 'minuge', 'design', 'osmosa', 'moglie', 'corife', 'dramme', 'sfatti', 'auriti', 'cupide', 'rasole', 'marzie', 'sadici', 'coprir', 'repere', 'trasla', 'mdcccx', 'litura', 'picate', 'spinai', 'usante', 'idumea', 'pipite', 'sprovo', 'pipale', 'fornir', 'acrale', 'gobidi', 'ricava', 'propor', 'mugnai', 'sifnio', 'bacami', 'vivono', 'dralon', 'votavo', 'arsire', 'nebbio', 'truffi', 'abissi', 'limoli', 'denota', 'abrogo', 'lamati', 'targar', 'sdando', 'ateneo', 'parale', 'sverso', 'clefti', 'catino', 'cresci', 'pitica', 'nonese', 'riorni', 'habeas', 'frugai', 'udirti', 'sghiai', 'boaria', 'idoneo', 'mozabi', 'virghe', 'giudio', 'lagnar', 'cineti', 'gialle', 'eluivo', 'addami', 'quarks', 'mazzio', 'damavo', 'avermi', 'curavi', 'saette', 'ripeti', 'tagike', 'opiata', 'bosane', 'latino', 'crambi', 'ansati', 'bistro', 'magari', 'zigoto', 'bomata', 'slemba', 'sgurai', 'cimose', 'algine', 'covate', 'solari', 'emioni', 'serial', 'vergar', 'datate', 'basate', 'greppo', 'menapi', 'rifuse', 'skypai', 'sapote', 'pauese', 'tacchi', 'sudano', 'bardar', 'capami', 'biopic', 'mdcxxv', 'versai', 'nolano', 'nasaci', 'suturo', 'piegai', 'estine', 'alalia', 'romana', 'ometta', 'sfrato', 'mearci', 'biolco', 'docete', 'calceo', 'razzar', 'viliva', 'frissi', 'boards', 'rasoni', 'cessai', 'sgravo', 'mosana', 'gregge', 'libaci', 'risica', 'svasso', 'tessei', 'fisano', 'walkie', 'ungici', 'statuo', 'spiino', 'spersa', 'pagode', 'ferasi', 'corili', 'lordar', 'retaci', 'artica', 'riergo', 'romano', 'caboti', 'pietre', 'quieto', 'cucini', 'sperdo', 'indaga', 'penica', 'scodar', 'nomala', 'nuvola', 'learda', 'albico', 'dilima', 'cazzia', 'amebei', 'trilla', 'pienar', 'lacchi', 'avvela', 'matico', 'ideine', 'nogati', 'smorir', 'corani', 'orando', 'agiata', 'graffe', 'rivien', 'ciuchi', 'frasca', 'roseto', 'faxata', 'stupor', 'lavoro', 'sferra', 'buboli', 'corona', 'somite', 'ricavi', 'aitami', 'grillo', 'avessi', 'tisane', 'milord', 'pomoso', 'penane', 'varalo', 'negali', 'abside', 'scocco', 'aerine', 'torrio', 'erogar', 'tipine', 'uvetta', 'coiate', 'agenzi', 'tenevi', 'mudavo', 'andata', 'gibaia', 'rosini', 'sorino', 'pampas', 'sbarro', 'abolii', 'rasoia', 'toresi', 'oliami', 'tirale', 'telare', 'canate', 'elisci', 'mutuar', 'cateti', 'aftosi', 'vacalo', 'sfumai', 'becero', 'svuoto', 'omnium', 'incido', 'sporca', 'scurii', 'orarci', 'zigoti', 'morane', 'ansate', 'ledine', 'ramalo', 'giravi', 'visive', 'forali', 'bucato', 'ignude', 'scuoio', 'anfesi', 'tarale', 'sporga', 'zietti', 'gitele', 'cavolo', 'nepete', 'baroli', 'folade', 'lofidi', 'cogito', 'irrumi', 'figura', 'cracka', 'rivolo', 'penule', 'ardila', 'elgone', 'graduo', 'negava', 'sdegna', 'laccio', 'repevo', 'gufate', 'tardar', 'flauta', 'melici', 'scansi', 'unnico', 'flambi', 'sbocca', 'malghe', 'ceduti', 'magava', 'lanuti', 'rumori', 'renosi', 'animai', 'ridili', 'brasar', 'tesene', 'kusasi', 'targhi', 'piagge', 'augure', 'balteo', 'piarmi', 'schisi', 'dccxix', 'scroto', 'tacana', 'mutavi', 'malide', 'kamala', 'moravo', 'altura', 'negare', 'vanane', 'spiale', 'ripite', 'indova', 'mponde', 'ennese', 'tesili', 'natala', 'solavi', 'carpii', 'borzoi', 'assuma', 'cabili', 'tanker', 'sanavi', 'braito', 'balzar', 'picato', 'dubbio', 'gelare', 'polipi', 'ursidi', 'musico', 'valeva', 'bombii', 'glabro', 'aspira', 'belami', 'musini', 'fletti', 'pessia', 'opliti', 'velava', 'cagavo', 'ondose', 'flotte', 'ricopi', 'bitube', 'zumalo', 'unirei', 'covavi', 'giudii', 'favule', 'infido', 'cmxvii', 'pirite', 'donano', 'sfammi', 'zollai', 'compie', 'impupa', 'sbuzzi', 'crebri', 'ccxlii', 'panaie', 'dxxxiv', 'fedina', 'cinire', 'euzoni', 'dinghy', 'focane', 'ertoci', 'perone', 'devote', 'scirri', 'ignoto', 'soffri', 'monaco', 'menino', 'eoceni', 'mcmlix', 'digamo', 'irizza', 'eterea', 'amassi', 'prassi', 'novare', 'casati', 'ponili', 'favare', 'trucie', 'snobbo', 'grunge', 'infusi', 'ioidee', 'colore', 'singol', 'mietei', 'places', 'ibicee', 'poppar', 'issesi', 'indite', 'guappa', 'boccai', 'fasino', 'iatini', 'coisca', 'iguana', 'pineto', 'impano', 'gudeni', 'necavi', 'sproni', 'titubi', 'aderii', 'untati', 'tubare', 'insite', 'writer', 'renano', 'mirare', 'cerqua', 'ghiere', 'rapato', 'beando', 'ranula', 'fragra', 'ricini', 'bisavo', 'ancona', 'scossi', 'poiesi', 'gufare', 'coupon', 'regalo', 'dcclxx', 'ootipo', 'ninfea', 'borghi', 'dccliv', 'auriga', 'arcami', 'parare', 'sciate', 'fidavo', 'croate', 'perder', 'kazaka', 'poppai', 'sinide', 'venote', 'eolina', 'privai', 'pelami', 'pubica', 'dinghi', 'prillo', 'fragri', 'zonare', 'decini', 'fragni', 'friggo', 'biasmo', 'vagami', 'colata', 'cazzio', 'eluder', 'gitoti', 'istmia', 'bercio', 'rodese', 'surali', 'dosano', 'marsch', 'aerati', 'plauso', 'telson', 'ootipi', 'oplete', 'consci', 'seller', 'barino', 'ascese', 'ferrea', 'tomini', 'afgane', 'ricimo', 'rosemi', 'impanî', 'vitoni', 'datosi', 'tagiko', 'grafia', 'zinnar', 'savoia', 'issati', 'cadevo', 'guasto', 'dettai', 'petulo', 'traode', 'taffia', 'tumoli', 'angoli', 'racket', 'sitata', 'neroli', 'aitavo', 'loffar', 'rasone', 'mainar', 'reputa', 'ccxcvi', 'vogami', 'mcdliv', 'elisio', 'spiedo', 'ammeta', 'cibreo', 'feriti', 'cigolo', 'capare', 'rialti', 'velavo', 'dclxxi', 'situle', 'remise', 'smilza', 'vogalo', 'focosa', 'meglio', 'vigono', 'vagiva', 'crespa', 'covava', 'forale', 'blindo', 'dovese', 'nocesi', 'kotoki', 'alette', 'purghi', 'cioppa', 'civets', 'nitori', 'melaci', 'cubavi', 'igiene', 'iudica', 'tomalo', 'sparse', 'acacie', 'doraci', 'elbana', 'creoli', 'gaetti', 'iliade', 'giudei', 'smagli', 'riputo', 'avalla', 'limiti', 'colpii', 'nasare', 'cacche', 'areica', 'stonai', 'indora', 'urtare', 'inveii', 'micini', 'radure', 'quotar', 'buiore', 'libino', 'menava', 'cascai', 'tulesi', 'potato', 'vorami', 'gelino', 'ardilo', 'cadusi', 'pasqui', 'tamisi', 'enfant', 'blouse', 'svelti', 'mimavo', 'adonto', 'vadosa', 'incile', 'bomati', 'stream', 'dorane', 'marcio', 'lagosi', 'istane', 'obliai', 'alliga', 'onnese', 'cioppe', 'gelido', 'sdoppi', 'baleni', 'pulcra', 'acuita', 'carabi', 'tinnio', 'camavo', 'alzali', 'raglia', 'scurir', 'folato', 'mudata', 'ruderi', 'sedane', 'augnai', 'lesghi', 'doblar', 'ccxcix', 'butani', 'associ', 'rabico', 'cimosi', 'lodole', 'arpone', 'astuta', 'zelala', 'pagato', 'truzzo', 'dclxxv', 'elceto', 'poccio', 'ungevi', 'sduole', 'binavo', 'svesto', 'variar', 'elbani', 'cromia', 'fallar', 'truzzi', 'kagora', 'abduce', 'lisali', 'erbese', 'radono', 'tesimi', 'sorcio', 'traiti', 'adulto', 'gazebi', 'rapare', 'bollai', 'mccxvi', 'saggio', 'solida', 'goffri', 'famosi', 'ciuche', 'visaci', 'grembo', 'pugile', 'fatato', 'redari', 'anelar', 'vagina', 'adusar', 'setola', 'ramavo', 'covami', 'desire', 'citino', 'felina', 'ciecai', 'rigane', 'aliese', 'amache', 'bigino', 'rovaio', 'averti', 'badgio', 'mixami', 'sicari', 'qwerty', 'ponile', 'urlavi', 'mastri', 'punite', 'zoomai', 'bielle', 'oriane', 'odirla', 'velalo', 'barchi', 'miasmi', 'rubidi', 'fresai', 'vinaie', 'codale', 'udirci', 'semute', 'crosto', 'emonie', 'affami', 'radule', 'visori', 'solino', 'vinote', 'tebani', 'scerne', 'acanto', 'domite', 'regini', 'badare', 'sporgo', 'velona', 'recali', 'risolo', 'guazze', 'blemme', 'sugata', 'visale', 'ararne', 'aitati', 'mescei', 'worker', 'bicona', 'pirone', 'azzeri', 'binato', 'speech', 'intino', 'irruma', 'basico', 'acanti', 'pippar', 'lodava', 'comari', 'rabida', 'tabico', 'pelobi', 'tacimi', 'enarri', 'epopea', 'semite', 'arrolo', 'caluma', 'damale', 'dogaie', 'freisa', 'levano', 'cancri', 'stoico', 'putami', 'voiles', 'bufato', 'sodica', 'barrai', 'storte', 'prioni', 'sgabeo', 'paludi', 'peccio', 'piansi', 'essene', 'esulti', 'igrina', 'melavi', 'sudare', 'cxlvii', 'olfale', 'amando', 'bosine', 'epizoi', 'ortite', 'venosa', 'ergano', 'stecca', 'cubati', 'unenti', 'fredde', 'ditemi', 'ranfio', 'pireni', 'figaro', 'senufo', 'patulo', 'pranso', 'avella', 'ridomi', 'rabula', 'fanese', 'lanidi', 'armavi', 'osando', 'pogale', 'gospel', 'strigo', 'saputi', 'ertolo', 'rutina', 'ribosi', 'cialde', 'peculi', 'arboro', 'svoler', 'nomava', 'morgen', 'bubato', 'campii', 'setate', 'purini', 'sorano', 'emesso', 'pipiar', 'gauder', 'patois', 'amator', 'urgano', 'sporlo', 'genite', 'notati', 'cosate', 'rubine', 'nachos', 'adepte', 'pimple', 'remaio', 'recala', 'emende', 'radici', 'esondo', 'udenti', 'natati', 'eccole', 'natale', 'sommai', 'giacca', 'bimare', 'lesina', 'idroma', 'indire', 'crebra', 'cinedi', 'culdee', 'datavi', 'manata', 'dalico', 'morina', 'amasti', 'iodino', 'superi', 'alluce', 'istare', 'rosali', 'bearne', 'amparo', 'calumi', 'melati', 'arcali', 'vacano', 'anella', 'minima', 'cnidie', 'perdei', 'hacker', 'elobie', 'pemana', 'flanai', 'igbira', 'ovario', 'limavo', 'sagome', 'svasar', 'lupini', 'ventre', 'arzesi', 'baiava', 'moneta', 'cresce', 'odirvi', 'erario', 'majors', 'venoto', 'follia', 'litavi', 'sviale', 'riputa', 'idroni', 'spagna', 'rafano', 'silici', 'chirie', 'orfane', 'ennesi', 'ripuoi', 'prasma', 'gitile', 'dxxxvi', 'cxciii', 'silvio', 'carnai', 'mondar', 'adroma', 'osceni', 'rigale', 'grulli', 'graffo', 'obrizo', 'agnati', 'domano', 'aetide', 'laniai', 'stadie', 'fumare', 'bovini', 'unente', 'dcclix', 'spruno', 'tipule', 'fields', 'clanga', 'fusomi', 'ulular', 'furati', 'lamaci', 'jivara', 'alacce', 'canuti', 'ammiri', 'cevani', 'caldeo', 'putito', 'bucavi', 'sognai', 'edotte', 'incavi', 'pumino', 'ceceno', 'guelfe', 'ingioi', 'acolia', 'cavavo', 'mdcxxi', 'canapa', 'arneis', 'unirla', 'censir', 'allusi', 'scotte', 'fusami', 'bituba', 'bresca', 'idiote', 'cucivi', 'cubata', 'necava', 'evello', 'rocche', 'borrii', 'nucale', 'mcmxci', 'attuai', 'ricede', 'eguale', 'mimaci', 'simidi', 'retore', 'nasami', 'anario', 'sconco', 'veline', 'future', 'felpar', 'fidava', 'oleate', 'posavo', 'ascaro', 'ciabai', 'sorava', 'ceraci', 'lucrar', 'imenio', 'vanare', 'sagite', 'gonese', 'dosaci', 'ghetto', 'quello', 'fatava', 'plichi', 'schise', 'utello', 'zarosa', 'scolio', 'tisici', 'bombar', 'doppia', 'ondavo', 'aberra', 'causar', 'pensee', 'potava', 'cubami', 'urania', 'gerite', 'sasseo', 'secale', 'datori', 'rimati', 'rorate', 'areati', 'mofeta', 'ciulle', 'spiree', 'polivo', 'scolpo', 'gallar', 'prozii', 'contre', 'cembre', 'ramane', 'scisse', 'tesava', 'sturar', 'slamar', 'oblino', 'ranche', 'indino', 'vasale', 'riunsi', 'cagane', 'fichus', 'snebbi', 'braghi', 'culalo', 'sporsi', 'sedili', 'sdatti', 'finche', 'caduca', 'cerano', 'previa', 'sborni', 'siculi', 'gitone', 'moroso', 'indovi', 'innero', 'avocar', 'nudavi', 'motosi', 'sfidai', 'agimmo', 'sdarmi', 'coatte', 'divien', 'sfarei', 'rabici', 'oleosa', 'dances', 'rancar', 'timica', 'parafa', 'eskimo', 'cisale', 'fonare', 'dolmen', 'mobile', 'rotoni', 'rissar', 'beggia', 'museum', 'filmai', 'sterno', 'cdlxxx', 'adorei', 'sfagni', 'alcova', 'mcdxvi', 'untovi', 'assedi', 'eventi', 'stando', 'scroll', 'panata', 'messia', 'lesolo', 'cicche', 'emonia', 'boiata', 'gasose', 'ertovi', 'voltai', 'recita', 'yazida', 'sdigli', 'sodaci', 'redima', 'celtii', 'oliate', 'verrai', 'usatti', 'insalo', 'trollo', 'nogale', 'rigoso', 'urlava', 'vivaio', 'astemi', 'rosoti', 'sbrano', 'pulcro', 'dictum', 'palona', 'coyote', 'balata', 'cetina', 'inerbi', 'vaiato', 'fellow', 'ileiti', 'secati', 'vapiti', 'aikido', 'guaste', 'furori', 'ananke', 'impura', 'volsci', 'temine', 'kairos', 'appesi', 'rilima', 'velala', 'solati', 'rapava', 'nomali', 'lesene', 'lesive', 'dodici', 'aurane', 'ecoico', 'pipita', 'casual', 'rivivo', 'guerci', 'foladi', 'cueste', 'gerese', 'trucio', 'cimali', 'adirei', 'basola', 'focato', 'largai', 'assono', 'livore', 'cambra', 'pickup', 'timide', 'begale', 'afache', 'sorbii', 'calure', 'mccxli', 'avello', 'rotami', 'gelavi', 'asiana', 'cabrio', 'ronfio', 'random', 'tregge', 'amicai', 'erraci', 'sanita', 'vacavo', 'pigmee', 'setini', 'asiaci', 'novese', 'rampai', 'odirci', 'orzala', 'onuste', 'tosaci', 'ascete', 'bubaci', 'mucati', 'brulla', 'risoci', 'slumar', 'cuschi', 'futile', 'sufici', 'visano', 'rediga', 'rasati', 'meriar', 'fonino', 'egioci', 'domani', 'ciulla', 'uncini', 'osmoso', 'stevie', 'mandia', 'onrino', 'puravi', 'pagino', 'baiani', 'pareri', 'taighe', 'alogie', 'regimi', 'stamno', 'issese', 'sgrani', 'ceravi', 'ccclvi', 'semema', 'ergevo', 'biremi', 'godano', 'bijoux', 'triare', 'biarco', 'uigure', 'jungla', 'slacci', 'murino', 'smorte', 'lobulo', 'furono', 'sbavai', 'sposai', 'peloni', 'slenta', 'funeri', 'genale', 'calata', 'olfali', 'sapeva', 'dicali', 'minalo', 'rifida', 'ground', 'astici', 'agents', 'privar', 'abento', 'negavi', 'estrez', 'raffio', 'solato', 'boxavi', 'domare', 'pidgin', 'gaggia', 'camuno', 'fannia', 'anoici', 'navese', 'iodate', 'alzami', 'albate', 'boxata', 'agiano', 'semate', 'meriai', 'iacuti', 'sfamai', 'geenne', 'doccia', 'solale', 'esposi', 'sbendi', 'velaci', 'pesaci', 'nepeta', 'sfonda', 'culati', 'tesate', 'subset', 'barrio', 'zopoli', 'jesine', 'camusi', 'brevia', 'barava', 'ritmai', 'ondale', 'scerpo', 'renami', 'pagare', 'coloni', 'lavino', 'caneli', 'abnego', 'arsole', 'partum', 'sanati', 'ascree', 'girali', 'scolte', 'bazuca', 'crepai', 'rapate', 'geriti', 'vessel', 'barata', 'avviso', 'odioso', 'cardar', 'sobole', 'macola', 'novato', 'nature', 'giunta', 'istorî', 'gerboa', 'bikini', 'cccxci', 'pedina', 'dosavo', 'calura', 'stanga', 'serina', 'codolo', 'fiesta', 'vitesi', 'flangi', 'ricuce', 'vaniar', 'buglio', 'sdesse', 'pagane', 'patria', 'siliti', 'rimixo', 'citata', 'pieghe', 'rumate', 'kasher', 'incaro', 'dolosa', 'ussita', 'latori', 'albori', 'snidai', 'optate', 'volvei', 'mirrai', 'spanai', 'cdxcix', 'lemici', 'retano', 'coirlo', 'farnie', 'satura', 'addopo', 'boxane', 'nomico', 'tonder', 'haikai', 'cagata', 'cuddie', 'spinge', 'stridi', 'cuculo', 'ottili', 'scuota', 'immuta', 'locona', 'stayer', 'stanai', 'derapa', 'muffir', 'rifuma', 'ordito', 'ceroso', 'temilo', 'vocine', 'stanza', 'leviti', 'urlami', 'alloga', 'poltre', 'eculei', 'vimane', 'centro', 'inermi', 'larari', 'boario', 'sostai', 'biolca', 'idumei', 'boxate', 'vintor', 'capeva', 'orbavi', 'egenza', 'agisco', 'divide', 'panava', 'spenge', 'tandem', 'etopee', 'sbanda', 'eculeo', 'reagii', 'oblavo', 'volalo', 'argute', 'attuti', 'mxciii', 'bruzio', 'putale', 'dolose', 'lesiti', 'origli', 'coisse', 'raugeo', 'rutilo', 'arsasi', 'tassai', 'eddici', 'smerai', 'boiara', 'mdxlvi', 'affumo', 'adirti', 'cafiso', 'nateti', 'buiosi', 'durali', 'canoni', 'urinar', 'sokora', 'cadile', 'udisse', 'ormano', 'puraci', 'crepes', 'credei', 'maccai', 'murice', 'palava', 'raguna', 'sancir', 'istato', 'protii', 'sitite', 'moplen', 'copale', 'nomata', 'dioica', 'dotavo', 'kobret', 'figulo', 'dovrai', 'rimosi', 'sparla', 'manobo', 'algosi', 'viuzzo', 'votali', 'untici', 'libani', 'cigana', 'cinese', 'bronco', 'piumar', 'crespo', 'scassi', 'roteai', 'recedi', 'manona', 'galano', 'gelane', 'coirci', 'celiti', 'adesai', 'facere', 'cinice', 'lastex', 'unisse', 'slatti', 'tuffai', 'uomini', 'cosato', 'solita', 'strigi', 'olirai', 'alerei', 'zeismo', 'fobici', 'illuni', 'ambire', 'nestai', 'filini', 'favoso', 'suolai', 'velade', 'dclxiv', 'senone', 'lodino', 'vagane', 'zabibi', 'laureo', 'mediai', 'sgobbo', 'canape', 'baular', 'esequi', 'ondane', 'casino', 'santon', 'fenici', 'artale', 'retrai', 'ibibia', 'moggio', 'riduci', 'rubava', 'opacai', 'rotato', 'todaro', 'zenith', 'calale', 'jingle', 'tomaci', 'adamas', 'estino', 'rinota', 'turbai', 'smorba', 'sellar', 'peziza', 'ometti', 'eppure', 'people', 'seenni', 'dolare', 'bocche', 'giachi', 'fabico', 'rideva', 'emessa', 'agonie', 'folaga', 'aloine', 'tufala', 'rugalo', 'situar', 'usanti', 'picari', 'unteci', 'celavo', 'bevile', 'frogia', 'bulami', 'salvai', 'seduto', 'elabri', 'glotte', 'turalo', 'arresa', 'roveri', 'dotalo', 'baiulo', 'muniva', 'kosher', 'licori', 'sidama', 'pendei', 'volume', 'sfarzi', 'vinato', 'ertane', 'tights', 'inalbi', 'ceride', 'varani', 'pesare', 'stuolo', 'rasaci', 'uniche', 'sventa', 'gazane', 'accapo', 'latria', 'levata', 'rubber', 'gemeva', 'lavali', 'vedasi', 'sileno', 'vapolo', 'monere', 'godesi', 'medele', 'pandit', 'elgeye', 'cariba', 'vomici', 'novata', 'punita', 'ridati', 'uiguri', 'urlino', 'sganno', 'spaghi', 'zufolo', 'turava', 'cimano', 'vivilo', 'galene', 'carpai', 'radiar', 'urtato', 'loggai', 'inibir', 'pashto', 'virili', 'cdlxii', 'sudari', 'nimico', 'acuite', 'resomi', 'falene', 'dubbie', 'culami', 'riloca', 'regine', 'ariosi', 'radori', 'goresi', 'battei', 'stelli', 'desiar', 'aitano', 'fascio', 'bannai', 'sorare', 'bariti', 'affili', 'tarlar', 'polese', 'alvino', 'franta', 'appura', 'ibalai', 'sciata', 'bosani', 'amarsi', 'mangia', 'inalbo', 'palchi', 'crucia', 'avelti', 'sugalo', 'marker', 'guacco', 'naiadi', 'arpono', 'smessa', 'gruide', 'mucine', 'pienai', 'inviai', 'fandom', 'cediti', 'adimmo', 'quanto', 'pervie', 'vedova', 'genare', 'cavale', 'sciati', 'rediti', 'surfai', 'vogare', 'soffra', 'cascio', 'glutea', 'wagons', 'leanze', 'pietra', 'cincin', 'cilizi', 'leppar', 'marane', 'atrici', 'agisci', 'agoste', 'ghiadi', 'catodo', 'eresse', 'ararli', 'ugnino', 'ellese', 'ansiti', 'riseco', 'gottar', 'affoca', 'boraci', 'peonio', 'usciti', 'coceva', 'deviro', 'ortane', 'arsati', 'impilo', 'pavano', 'calaze', 'angelo', 'paguro', 'rosata', 'trofei', 'libato', 'aerato', 'mucoso', 'omesso', 'ghiera', 'fobica', 'salini', 'rupini', 'dcciii', 'turale', 'duella', 'strami', 'stupii', 'mariti', 'olimpo', 'pelino', 'squero', 'riponi', 'dicane', 'decima', 'canoro', 'anidri', 'vagone', 'felice', 'vomivo', 'triere', 'lupoma', 'badino', 'pirici', 'afrori', 'sbuffa', 'fidare', 'rivano', 'remaci', 'librar', 'spaiar', 'cmxxii', 'diurni', 'velico', 'apiari', 'nomati', 'viuzze', 'vanata', 'collar', 'voglia', 'omagua', 'nubile', 'kotoka', 'miccio', 'svenni', 'cagato', 'indizi', 'mutami', 'gestir', 'rivola', 'rapivi', 'ridica', 'onrava', 'ramaie', 'pupona', 'mendai', 'nevato', 'onagro', 'ospiti', 'senale', 'grallo', 'cernia', 'empire', 'caccio', 'cubebi', 'pacala', 'bufava', 'potare', 'rigose', 'zeloso', 'arbana', 'gazami', 'accuri', 'misura', 'occupi', 'cacchi', 'autore', 'urenti', 'ideata', 'editto', 'kirsch', 'egagre', 'cesare', 'amiche', 'azolla', 'riveda', 'ispiri', 'avvale', 'fugaci', 'inveri', 'alture', 'vacelo', 'olfavi', 'fedare', 'svagai', 'flotto', 'mpondi', 'bilica', 'musate', 'nolani', 'ancóra', 'culata', 'flegga', 'mearmi', 'pentir', 'smirar', 'tunnel', 'poliva', 'sbrani', 'tifule', 'pregni', 'fasori', 'ccviii', 'rimasi', 'binami', 'adulti', 'tinnii', 'oriesi', 'badavi', 'febbri', 'arando', 'istami', 'nivale', 'tussah', 'pelati', 'osanti', 'osanni', 'ausili', 'ricrei', 'timona', 'flanar', 'pruovo', 'fregar', 'cibavi', 'redaci', 'locami', 'ballon', 'votive', 'derubi', 'rogate', 'opposi', 'bacche', 'densai', 'caveau', 'nasona', 'arsito', 'minuto', 'lirici', 'turnai', 'vocina', 'vanano', 'recete', 'deliri', 'ocelot', 'citati', 'fibule', 'solimo', 'faxati', 'sborra', 'gliela', 'regoli', 'fiocco', 'proave', 'zufola', 'barbon', 'copies', 'giacer', 'papage', 'pezize', 'oppone', 'basuti', 'tipini', 'limami', 'adente', 'arpese', 'aurito', 'triate', 'franca', 'civada', 'euteri', 'frigge', 'potuta', 'stamni', 'ipoide', 'rodila', 'irrori', 'altine', 'baculi', 'penavi', 'ganghe', 'genati', 'menalo', 'sanate', 'whisky', 'brusco', 'cometa', 'giulio', 'ridava', 'arsene', 'rovane', 'ribevo', 'orzare', 'gratin', 'intasi', 'inneva', 'imbaco', 'aulita', 'bacavo', 'rasoio', 'aquosi', 'smosta', 'scorso', 'fisalo', 'balchi', 'puliga', 'impupi', 'croste', 'intono', 'rigodi', 'recine', 'salpar', 'ciprio', 'arnino', 'beggio', 'incara', 'piatir', 'lucono', 'focate', 'ciccai', 'tomata', 'murane', 'parada', 'accade', 'rubato', 'faenza', 'abbila', 'curino', 'velane', 'imponi', 'bricio', 'venire', 'esciso', 'medley', 'evacui', 'sparta', 'olmese', 'gitoli', 'untume', 'branda', 'etesii', 'rissoe', 'alleli', 'gazano', 'adenie', 'gattai', 'cuocia', 'nassie', 'abrade', 'acedia', 'cosava', 'pacino', 'decile', 'temute', 'senati', 'tenrec', 'contri', 'sgarzi', 'coding', 'stoppo', 'setoli', 'begala', 'solere', 'celale', 'olfava', 'imbeva', 'ferole', 'bigini', 'setone', 'incelo', 'triala', 'estruo', 'ostica', 'pedari', 'lontra', 'gamico', 'olirla', 'forava', 'atroci', 'iniqua', 'stichi', 'nessun', 'smerci', 'litici', 'panama', 'getica', 'ritaro', 'panici', 'ledano', 'lodata', 'dilani', 'marene', 'rufole', 'intime', 'sorosi', 'idrico', 'elette', 'mocovi', 'macoli', 'fedate', 'smuoia', 'amarre', 'hitter', 'taxodi', 'piegar', 'patite', 'musive', 'chiude', 'banali', 'petite', 'lisavo', 'bruiti', 'tranci', 'inosso', 'cacaci', 'redato', 'erotti', 'arriso', 'sfilzi', 'salati', 'infilo', 'brande', 'solalo', 'sbadii', 'storno', 'usurai', 'datemi', 'adnati', 'ruteno', 'lesemi', 'coente', 'retalo', 'vibice', 'sodico', 'basavi', 'gitosi', 'ertana', 'istino', 'tesale', 'punire', 'uggiar', 'albumi', 'ghigno', 'ariate', 'odrisi', 'disuma', 'veneri', 'bovaro', 'lavine', 'orrivi', 'sapori', 'citara', 'osarsi', 'pierre', 'subbie', 'brocci', 'kitsch', 'emessi', 'torneo', 'dietai', 'rorano', 'lesosi', 'picnic', 'preano', 'natimi', 'circhi', 'becche', 'sciora', 'ancudi', 'inuste', 'derisi', 'legnai', 'liberi', 'murati', 'doagio', 'mcccli', 'liture', 'ertomi', 'pipati', 'iaculi', 'oleina', 'rogito', 'volpon', 'rapalo', 'invisa', 'ursine', 'amigos', 'armano', 'retuse', 'galbeo', 'ultore', 'sbitto', 'deroga', 'titoli', 'empite', 'gioita', 'aliane', 'sgambi', 'aconzi', 'radoni', 'ardile', 'nicese', 'cibavo', 'damino', 'folcer', 'prilli', 'venati', 'gabole', 'uveali', 'scruta', 'macuba', 'orride', 'ciurmo', 'peneia', 'tirata', 'nasoni', 'sativi', 'sfogno', 'reucci', 'decapa', 'render', 'inches', 'putter', 'viacce', 'fluida', 'mammee', 'misuro', 'zumava', 'addopa', 'modale', 'alcole', 'momese', 'contea', 'aclini', 'bevera', 'serafi', 'inaura', 'immiti', 'nodose', 'dosala', 'sonino', 'solute', 'bottai', 'scatto', 'covale', 'saziai', 'vallar', 'avallo', 'fidami', 'olisco', 'sputai', 'crassi', 'udiate', 'dogato', 'curalo', 'retale', 'dunosa', 'litale', 'bairam', 'blasta', 'libalo', 'manone', 'drizzi', 'ulnari', 'svolga', 'venoti', 'fumido', 'radili', 'bufino', 'traila', 'bullet', 'cimava', 'suture', 'texana', 'altrui', 'smorzi', 'polana', 'bivero', 'morali', 'nudaci', 'tufato', 'sirena', 'lustri', 'moscia', 'gioiai', 'rasili', 'nucleo', 'odiala', 'allupo', 'ripelo', 'togale', 'ottria', 'indios', 'manate', 'dolala', 'mearti', 'preppy', 'wilaya', 'coking', 'predio', 'destra', 'doleva', 'scosci', 'ormato', 'optare', 'plaids', 'panano', 'aspina', 'spugne', 'empito', 'pastai', 'slumai', 'bacare', 'avvien', 'eucere', 'micina', 'dunosi', 'dotate', 'licito', 'ninnai', 'rodevo', 'mixalo', 'ficaia', 'esilio', 'touche', 'elodea', 'turami', 'diruta', 'amaste', 'astice', 'stucca', 'buzzer', 'nudale', 'denudi', 'ceromi', 'disvio', 'piovre', 'concia', 'fiamme', 'estate', 'castro', 'cetera', 'sedavi', 'grocca', 'celebi', 'tuello', 'velici', 'strasa', 'ciuffo', 'cdlxiv', 'indugi', 'echide', 'milese', 'scoiai', 'facies', 'disano', 'cumini', 'untali', 'cerque', 'pleura', 'dolami', 'trieca', 'cubici', 'spengo', 'riapre', 'canala', 'osmica', 'timone', 'ercoli', 'linnee', 'ancone', 'poltro', 'girale', 'puzzai', 'fifone', 'appago', 'ginger', 'nerico', 'spetti', 'baiami', 'tratta', 'telali', 'ripida', 'grigio', 'sedimi', 'pinose', 'visato', 'sfatto', 'gesseo', 'toasts', 'bufera', 'unirmi', 'bifide', 'turato', 'osmico', 'poiane', 'brinda', 'stonii', 'recane', 'rapini', 'avelte', 'temuta', 'scelta', 'cecubo', 'bacile', 'ccxxiv', 'potalo', 'bruivo', 'geyser', 'metopi', 'dolavo', 'essedi', 'novalo', 'molali', 'daorsa', 'volere', 'lodare', 'zigata', 'equaci', 'ricuse', 'zipolo', 'sicana', 'calvai', 'sciale', 'fataci', 'alaese', 'usarla', 'putrir', 'funata', 'domale', 'iguane', 'ferito', 'briffa', 'labile', 'nevaio', 'vagate', 'nailon', 'parrei', "avant'", 'gemere', 'ritone', 'riviva', 'evelli', 'mbundu', 'sugoso', 'spurgo', 'adiste', 'rigoli', 'ombrie', 'gestro', 'culaca', 'pelele', 'molini', 'quanti', 'monade', 'palate', 'sagiva', 'adirvi', 'cassie', 'dopali', 'apuana', 'aggero', 'gronde', 'eunuca', 'ririda', 'codoli', 'beerai', 'stereo', 'ottrio', 'segugi', 'gradar', 'deiste', 'pedidi', 'vedove', 'vanami', 'cangio', 'crenai', 'vociar', 'oplite', 'ramami', 'cruore', 'ritemi', 'recava', 'lattai', 'fratta', 'astine', 'sfioro', 'ricamo', 'cesana', 'bratti', 'nasale', 'googli', 'loiche', 'bolina', 'mafino', 'belane', 'acorne', 'sariga', 'smorta', 'cavala', 'donava', 'allise', 'natola', 'estubo', 'redito', 'collie', 'finder', 'mdlxxv', 'server', 'litobi', 'godevi', 'sonori', 'rumour', 'putane', 'squame', 'orlala', 'euanti', 'igrine', 'coirai', 'ramoso', 'starts', 'opiato', 'zelale', 'tedeum', 'fringe', 'timori', 'nausee', 'tornio', 'sbarri', 'lepide', 'agirne', 'camole', 'stilbo', 'lebbre', 'enopli', 'assiri', 'ignavo', 'rispia', 'nutrie', 'zumavo', 'vengio', 'ascose', 'scorpi', 'grassi', 'guatai', 'rombar', 'rimedi', 'artati', 'efiree', 'pregia', 'frigni', 'grisbi', 'vorrei', 'segata', 'doppio', 'rutata', 'indoro', 'vapola', 'lesasi', 'scocca', 'graffi', 'funaie', 'emigro', 'catodi', 'smaghi', 'noccio', 'indica', 'revoco', 'unirsi', 'vitati', 'brezel', 'ardiva', 'aprile', 'capala', 'cubino', 'cevana', 'oleose', 'naïves', 'odiosi', 'vitano', 'ipogeo', 'cubate', 'toreri', 'redige', 'hedges', 'tepidi', 'damone', 'damami', 'aurali', 'idumeo', 'mollar', 'lolite', 'lodato', 'grondi', 'istmie', 'emungi', 'ditali', 'omelia', 'iodavo', 'puppai', 'aldino', 'hobbit', 'purati', 'diruto', 'quiete', 'rilega', 'euante', 'briffo', 'emanai', 'pesano', 'voguli', 'adonta', 'pelali', 'ccxcii', 'baconi', 'sciape', 'supina', 'maître', 'dclxix', 'torque', 'boiler', 'elfico', 'patino', 'ideano', 'issami', 'pulque', 'congro', 'clicco', 'fiocca', 'centum', 'baiaci', 'ancien', 'chioda', 'sdogli', 'aritmi', 'miccia', 'premia', 'venare', 'visiti', 'grazio', 'repine', 'tafani', 'mccxlv', 'redare', 'mieter', 'sculto', 'lodavi', 'avanza', 'cencio', 'scusso', 'festai', 'apriva', 'foiose', 'shifto', 'adulta', 'dotata', 'script', 'prompt', 'tungur', 'franga', 'pigola', 'logici', 'fucila', 'incoia', 'alesar', 'robone', 'vestii', 'stages', 'barano', 'incito', 'lumina', 'fisica', 'rivive', 'abolir', 'gialla', 'sodalo', 'smasso', 'racemi', 'mxxxii', 'severa', 'orarle', 'incori', 'severe', 'vigila', 'assodo', 'rifumi', 'scilla', 'elmata', 'lintea', 'filava', 'colavo', 'hazara', 'shaker', 'slitte', 'cracco', 'fluato', 'mdccxv', 'optale', 'chiuso', 'armese', 'sdicci', 'amasia', 'scorci', 'empimi', 'kenzie', 'tegami', 'seduli', 'purino', 'lisati', 'gliene', 'urbici', 'boxaci', 'musivo', 'elgeyi', 'angeva', 'terone', 'bozzar', 'piarle', 'arcese', 'setoni', 'franto', 'celalo', 'panavi', 'motive', 'lanine', 'escici', 'irrumo', 'ciotti', 'bordai', 'regnar', 'scirpo', 'tesato', 'doblai', 'palone', 'cxxxix', 'ocrese', 'sciolo', 'pressa', 'tisica', 'teucro', 'capite', 'occido', 'fregni', 'fondai', 'bangio', 'goloso', 'mudane', 'stroma', 'piante', 'culoni', 'odirlo', 'ideona', 'mcclxx', 'facevi', 'morrai', 'topaii', 'adegui', 'fogate', 'pistie', 'piroli', 'sfalle', 'recevi', 'palpai', 'occidi', 'aspino', 'estive', 'otiche', 'palino', 'kagoro', 'murare', 'bolgia', 'ordivo', 'smodar', 'lenita', 'inambu', 'modana', 'indori', 'instia', 'proteo', 'bifere', 'incise', 'tebano', 'spezza', 'sciupi', 'pilati', 'emunti', 'sfagno', 'sfondi', 'cionco', 'arenar', 'recusa', 'zignai', 'triplo', 'talchi', 'cesene', 'dorino', 'anomia', 'vanavi', 'daunie', 'dervis', 'tecche', 'tonala', 'dimuti', 'invisi', 'baiavo', 'mbunda', 'zeriba', 'fedavo', 'scalpi', 'celiai', 'lincio', 'iodale', 'apiato', 'uditor', 'nunzio', 'acedie', 'alcove', 'derima', 'pirico', 'vasame', 'derivo', 'eroder', 'piogge', 'brocce', 'fibula', 'sufiti', 'ansano', 'pilese', 'sonate', 'usarti', 'vertex', 'ammaio', 'geloni', 'optati', 'basiti', 'svelar', 'zipoli', 'lasese', 'manale', 'immune', 'pilare', 'guarii', 'amelie', 'grommo', 'grufar', 'crucis', 'angore', 'paggio', 'tepori', 'umiche', 'cavavi', 'sdruci', 'crollo', 'giungo', 'setata', 'everti', 'eriger', 'fumali', 'ccclxv', 'actine', 'sfarzo', 'rumble', 'brutti', 'spasmi', 'forums', 'rateli', 'menole', 'rasolo', 'lapide', 'ferire', 'afagie', 'saziar', 'amplio', 'empile', 'addona', 'sedata', 'maglia', 'visone', 'sbirro', 'zeismi', 'campus', 'iatino', 'derido', 'misera', 'bugnai', 'baciai', 'inputs', 'tetani', 'olfala', 'aracee', 'vimala', 'raitar', 'aironi', 'ricimi', 'cifrar', 'piotai', 'secava', 'evochi', 'haruri', 'smergo', 'sfaldo', 'timico', 'istali', 'lxxxiv', 'annidi', 'pesami', 'busvie', 'fasaci', 'esempi', 'spular', 'aprite', 'rosimi', 'renala', 'podice', 'dealer', 'ceduta', 'nasato', 'pulito', 'panace', 'trusts', 'fittar', 'rivoto', 'regola', 'meetup', 'limavi', 'fenice', 'miniar', 'codoni', 'ipomee', 'austri', 'incide', 'ciacca', 'arazzo', 'ulnare', 'traeva', 'agirei', 'bilobo', 'mlviii', 'vogule', 'risole', 'tumore', 'bosone', 'urgici', 'ulster', 'remixo', 'pagoda', 'ladino', 'velate', 'malori', 'furali', 'pitali', 'tomare', 'epilli', 'rombai', 'quotai', 'sherpa', 'tafana', 'filano', 'achira', 'cidoni', 'nevati', 'semuta', 'riseca', 'pernio', 'fatela', 'vocino', 'murali', 'inondo', 'rumeno', 'apparo', 'invera', 'zonano', 'risega', 'incoro', 'osassi', 'hybris', 'setali', 'tipici', 'progne', 'lesici', 'esegue', 'cagoni', 'cetile', 'ficati', 'pospor', 'sheikh', 'duerni', 'sfibbi', 'herpes', 'artate', 'intani', 'pesavo', 'rosato', 'nuotar', 'fiotta', 'aurosa', 'lumata', 'magico', 'scendi', 'nipple', 'regnai', 'equipe', 'addali', 'urgeva', 'sangui', 'smozza', 'amarri', 'avario', 'elessi', 'scemai', 'eringi', 'illini', 'averso', 'vagati', 'emacia', 'remora', 'apione', 'camuna', 'morava', 'eccomi', 'solcai', 'sborda', 'sbeffo', 'sailer', 'ditate', 'livori', 'cuccia', 'tumidi', 'purane', 'untolo', 'alluno', 'binali', 'remino', 'coxali', 'ergere', 'rasovi', 'images', 'arameo', 'loiste', 'sborsi', 'acaico', 'fumari', 'fraghe', 'corone', 'loisti', 'spanto', 'pompon', 'sirici', 'funale', 'tusane', 'banner', 'mashup', 'damine', 'amlira', 'anervi', 'guasti', 'cobego', 'segosi', 'abitar', 'aurite', 'scuoti', 'rogavi', 'svesci', 'bituma', 'corozo', 'aerava', 'morula', 'tallir', 'calice', 'sugava', 'druidi', 'repile', 'virose', 'topine', 'cromie', 'nocevo', 'postai', 'ceffai', 'spaura', 'barnum', 'sfitte', 'litino', 'cdxliv', 'fusori', 'fedaci', 'tringa', 'cefali', 'fedata', 'buceri', 'zenana', 'robino', 'acanzi', 'archeo', 'polite', 'avorni', 'bluffs', 'teorbe', 'cipria', 'patene', 'lavaci', 'grivne', 'bilico', 'tubavi', 'xilano', 'ornate', 'ziraie', 'aberri', 'tonici', 'figure', 'svanir', 'pneumi', 'mappar', 'ansiar', 'rancho', 'stinar', 'tonare', 'argali', 'tifare', 'miaulo', 'rotesi', 'cherry', 'apposi', 'spasti', 'sfiori', 'cxliii', 'fatano', 'ctonia', 'naviga', 'fumosi', 'gettai', 'tubini', 'famoso', 'aitava', 'vogaci', 'scorni', 'dorico', 'natine', 'fresie', 'coglia', 'uriste', 'middle', 'colcai', 'giochi', 'evolvi', 'boxato', 'satana', 'rifumo', 'jesino', 'abitua', 'oliamo', 'renaci', 'mitili', 'butile', 'vipera', 'caribo', 'vagavi', 'smassi', 'cesena', 'mozabe', 'vergei', 'ripigi', 'solfar', 'ialina', 'dronti', 'irriti', 'velari', 'tonavi', 'viveur', 'rapper', 'vocate', 'pipaia', 'mucosi', 'circei', 'rasomi', 'bruzia', 'rugata', 'caspia', 'timbri', 'carpio', 'torqui', 'libami', 'assesi', 'gititi', 'biadai', 'artata', 'innati', 'intoni', 'cucire', 'bevuta', 'grandi', 'pardon', 'lucana', 'lushai', 'anfore', 'fabulo', 'taccar', 'svampi', 'culone', 'penero', 'suarie', 'mecche', 'floppi', 'ospite', 'lesura', 'alobie', 'retavo', 'seuesi', 'piasti', 'barche', 'rasero', 'goffro', 'cagona', 'vedovo', 'livide', 'sbuffi', 'pregne', 'ordiva', 'onfalo', 'tenare', 'rigemi', 'muting', 'valium', 'aliseo', 'politi', 'cecidi', 'tifale', 'quelli', 'svenda', 'rosoni', 'salume', 'farmer', 'notavi', 'lestra', 'ficate', 'cmlxxi', 'storta', 'chicco', 'cavedi', 'delusa', 'agosta', 'cremai', 'risele', 'larghi', 'tifaci', 'natisi', 'orbate', 'robbio', 'lovale', 'eoliti', 'mdxliv', 'gitana', 'biella', 'ortica', 'gemiti', 'annida', 'stizzo', 'elfici', 'semita', 'radore', 'rimani', 'uniste', 'talari', 'sfinai', 'auleta', 'vimare', 'artino', 'eccita', 'tenevo', 'orlane', 'spinte', 'nudata', 'piglio', 'lercio', 'usaste', 'rimuta', 'piasse', 'negate', 'ricavo', 'triava', 'legane', 'fruste', 'bavari', 'rasure', 'rinico', 'vaneai', 'gabini', 'oliste', 'immota', 'addopi', 'uzzate', 'rubalo', 'enoici', 'leiesi', 'stupro', 'issata', 'urtavo', 'cullai', 'rasene', 'sbocco', 'ascisc', 'bramii', 'spendi', 'latici', 'mccciv', 'smucci', 'imputo', 'alagli', 'rostii', 'venuta', 'schive', 'viella', 'bifida', 'boxalo', 'marana', 'tempie', 'scuoce', 'polder', 'lavala', 'copiai', 'sfolla', 'strida', 'infici', 'schivi', 'dcccxx', 'anosia', 'ferace', 'pemane', 'riurta', 'rogalo', 'coniza', 'puniti', 'usarli', 'ellera', 'cappio', 'murder', 'rumala', 'reculo', 'metato', 'eterie', 'rodimi', 'tubale', 'frigna', 'recale', 'rorane', 'sbauli', 'femico', 'svelse', 'vogali', 'ornato', 'additi', 'ciocie', 'careli', 'spleni', 'olirsi', 'glutee', 'giallo', 'tebana', 'stante', 'gommai', 'kermes', 'nebule', 'bovile', 'segone', 'veduto', 'stingi', 'aremme', 'cembra', 'clange', 'iodica', 'adular', 'faremo', 'accesa', 'macule', 'dressa', 'weight', 'tupaie', 'bernie', 'fonami', 'repilo', 'catone', 'longue', 'fennec', 'frodai', 'utente', 'fisavo', 'ricino', 'agenzo', 'borico', 'rugato', 'sbarra', 'bubare', 'urgili', 'liftai', 'ursina', 'tufose', 'arilli', 'cuculi', 'piaroa', 'oleano', 'arbore', 'davate', 'smista', 'serale', 'zephir', 'apsidi', 'noveri', 'ripeta', 'orgoni', 'guitta', 'freddi', 'storne', 'tifoso', 'irsute', 'eluire', 'zampar', 'eccito', 'femore', 'maglio', 'creavi', 'bobbai', 'ananas', 'allevo', 'sbanco', 'balano', 'fonica', 'remore', 'badalo', 'cucici', 'ignudo', 'desino', 'uscita', 'noodle', 'nitrai', 'supini', 'enigmi', 'versoi', 'iliaci', 'tubati', 'sdarti', 'falchi', 'zigomi', 'intaso', 'brindi', 'necala', 'fiatar', 'lironi', 'vapole', 'dimisi', 'orzami', 'estoni', 'culavo', 'blende', 'spugni', 'avaria', 'slombo', 'rabide', 'tanche', 'grande', 'adunca', 'iastii', 'togali', 'forbir', 'conico', 'fidane', 'nasate', 'flagga', 'broilo', 'nomadi', 'spetro', 'spenta', 'rigiro', 'brachi', 'litoti', 'rosale', 'etisie', 'estima', 'carena', 'coiaio', 'rutate', 'scolpa', 'svotar', 'ornane', 'accede', 'gemevi', 'sunesi', 'mageno', 'gabale', 'repano', 'kagore', 'utelli', 'bramme', 'lenite', 'tuboli', 'untalo', 'mdcciv', 'levane', 'lanuta', 'palali', 'erbesi', 'oziane', 'fianco', 'radimi', 'sferzi', 'repudi', 'cupree', 'stilli', 'aguzza', 'siepar', 'offesi', 'osarvi', 'denego', 'polane', 'sgargi', 'aglifa', 'orlate', 'dirubi', 'scalza', 'sbassa', 'glotta', 'varali', 'funali', 'gravai', 'leccia', 'dcxvii', 'savari', 'ripilo', 'derimo', 'brinar', 'inaspa', 'ortano', 'sicane', 'sponda', 'avarie', 'anthem', 'renici', 'soliti', 'corame', 'zebrar', 'odisti', 'pinche', 'rovina', 'crashi', 'sparte', 'cascer', 'leccar', 'menoma', 'bucalo', 'balito', 'manobi', 'loggar', 'sapino', 'smarri', 'sgarbi', 'condir', 'abbine', 'rinese', 'stizza', 'ardono', 'gravar', 'volate', 'redole', 'vivant', 'antesi', 'spruni', 'intese', 'yogico', 'apiata', 'guasca', 'cimazi', 'patule', 'gemini', 'moccio', 'arridi', 'cialda', 'irpini', 'mcccxc', 'futuri', 'ridori', 'adirci', 'cadmie', 'riceve', 'piceno', 'cinzie', 'surfer', 'stazzo', 'berrei', 'soniti', 'stogli', 'sedete', 'campai', 'refilo', 'elgeyo', 'elicer', 'aragne', 'velaie', 'delega', 'sfalsi', 'rimare', 'barane', 'gabbar', 'ramuto', 'pianin', 'glieli', 'ceraia', 'coorti', 'lisata', 'angari', 'penace', 'fumano', 'altera', 'gonadi', 'zonavi', 'tavolo', 'giurai', 'albesi', 'pontai', 'locavi', 'angoni', 'negata', 'lobbie', 'arcuai', 'ramosi', 'pilono', 'stores', 'mixala', 'ploceo', 'gotici', 'vocavi', 'imboni', 'piazzi', 'capate', 'riunge', 'timoni', 'snudar', 'deludo', 'plebeo', 'orarvi', 'olirci', 'abolle', 'passii', 'latero', 'legavi', 'dipano', 'misere', 'sgasar', 'visure', 'metese', 'dramma', 'guanci', 'cencri', 'riparo', 'salari', 'inseto', 'votala', 'tetide', 'ussari', 'tubulo', 'arreni', 'sedano', 'harari', 'fatami', 'genami', 'racano', 'sbirba', 'famala', 'bugole', 'coresi', 'riersi', 'donala', 'ungula', 'anamni', 'ricovo', 'triera', 'cassai', 'statue', 'addala', 'termos', 'granfi', 'elbane', 'vedili', 'rosate', 'issato', 'balneo', 'mcdlxi', 'poesie', 'rasavo', 'vilale', 'bugnun', 'riarda', 'ostina', 'utopia', 'anatre', 'rumami', 'cocchi', 'defedi', 'brighi', 'tubona', 'nudava', 'uccisi', 'binala', 'nutrir', 'poacee', 'paioli', 'svivar', 'vivrai', 'spiate', 'gruzzi', 'diluir', 'pometo', 'aitate', 'slitti', 'galeri', 'mirava', 'biconi', 'disagi', 'immagi', 'negaci', 'lidici', 'tataro', 'scendo', 'durane', 'aiutar', 'bastir', 'salico', 'glasso', 'cerico', 'bostik', 'esonda', 'scremi', 'stendi', 'impalo', 'coirei', 'panala', 'saturo', 'madide', 'malaga', 'inziga', 'assiro', 'lugana', 'eseguo', 'cicini', 'cringe', 'voceri', 'suzzar', 'mccxiv', 'ornare', 'triati', 'zecche', 'macchi', 'ridoto', 'sieste', 'elvese', 'aplomb', 'ricalo', 'sfatte', 'pressi', 'bulina', 'calcia', 'manchi', 'kazake', 'vastai', 'cullar', 'idrasi', 'banker', 'bonesi', 'sembra', 'zittir', 'invali', 'grance', 'rigidi', 'panale', 'minavo', 'rudite', 'copata', 'palesa', 'smiela', 'spassi', 'dcxliv', 'orasse', 'poiana', 'uguale', 'cerati', 'tinche', 'luccio', 'immelo', 'obrogo', 'calazi', 'casier', 'segano', 'sbandi', 'spendo', 'tusche', 'nastia', 'abcasi', 'fusasi', 'pativi', 'penino', 'favola', 'maiori', 'lanosa', 'cripto', 'urtica', 'spinto', 'baione', 'caccia', 'addono', 'moveva', 'stesti', 'vedica', 'imbavi', 'felini', 'piarde', 'lenzar', 'laidar', 'rotori', 'riungi', 'peonia', 'nonesi', 'codato', 'perora', 'storci', 'dedale', 'cercai', 'quorum', 'secala', 'ontosa', 'elabro', 'datano', 'proeve', 'artare', 'grezza', 'stremo', 'rubare', 'burini', 'sdrogo', 'sviati', 'eboidi', 'invase', 'updato', 'silemi', 'idrici', 'notalo', 'alzavo', 'leviga', 'ratine', 'tramai', 'sficco', 'carole', 'brixia', 'riresa', 'rigare', 'rugosi', 'bevono', 'sketch', 'ripido', 'venule', 'dacico', 'eretta', 'urside', 'uggito', 'sbirra', 'decina', 'lesbia', 'finali', 'insala', 'sigari', 'normai', 'ararlo', 'cimami', 'dogado', 'faxino', 'avalve', 'umiste', 'fatata', 'levese', 'risata', 'cubica', 'stilbi', 'bonobi', 'skylab', 'sperde', 'cucito', 'cerale', 'spoppi', 'guasta', 'scordo', 'imenea', 'models', 'lustra', 'spasmo', 'guazzo', 'orzale', 'cerare', 'drillo', 'amaidi', 'artavo', 'mancar', 'rutine', 'interi', 'eusine', 'ritubo', 'mclxiv', 'albica', 'zonuri', 'visite', 'pepale', 'doline', 'lumaie', 'quassi', 'iprite', 'muravi', 'stucco', 'mutone', 'aleute', 'triami', 'sloghi', 'cabrai', 'ertesi', 'biking', 'clasto', 'alista', 'giunsi', 'essedo', 'ciulai', 'fonato', 'roller', 'raiati', 'ritano', 'yachts', 'illuda', 'peseta', 'omeosi', 'rivale', 'nevico', 'attami', 'delato', 'simica', 'riatta', 'breaks', 'apriti', 'sanico', 'rigalo', 'gioiar', 'vedevi', 'lentie', 'meseta', 'gnaulo', 'memoro', 'albedo', 'pinaie', 'orbite', 'orbalo', 'inzigo', 'mirteo', 'ficata', 'alisti', 'errato', 'titini', 'ippari', 'spalle', 'spento', 'emioli', 'ungare', 'erompi', 'alvina', 'untele', 'disire', 'audace', 'avvoca', 'annodi', 'biluce', 'pavesi', 'sfarsi', 'uggiva', 'natura', 'follie', 'ostino', 'lasche', 'gaudei', 'beveva', 'untate', 'ofidio', 'semole', 'ortose', 'floppa', 'iugeri', 'corilo', 'smalta', 'cadete', 'optavi', 'roralo', 'pagata', 'erompa', 'ravvii', 'batton', 'aliste', 'pinzar', 'orfano', 'scioro', 'cuciti', 'fatavi', 'onravo', 'crocee', 'lumaio', 'resine', 'lupine', 'gitoci', 'thonet', 'accuro', 'meconi', 'gemmar', 'inarro', 'licosa', 'arpica', 'sugate', 'cumana', 'ribere', 'azoici', 'parevi', 'crebro', 'mcxxxi', 'ardere', 'albore', 'sdurii', 'fiosso', 'baloge', 'loschi', 'crocia', 'aeraci', 'dlviii', 'cenati', 'sacrai', 'lucchi', 'ducato', 'fabuli', 'parodo', 'ripela', 'patemi', 'affuso', 'aliare', 'lamato', 'nausea', 'frisai', 'ponzar', 'gufano', 'pratii', 'esalto', 'capria', 'sfighe', 'pipavo', 'lontre', 'bovidi', 'salace', 'dindio', 'baglio', 'redigo', 'calaci', 'docili', 'loisir', 'cinedo', 'ecloga', 'aleuta', 'genane', 'dccxiv', 'vanivi', 'celane', 'mirate', 'dovete', 'macino', 'nemica', 'cavese', 'cepole', 'banale', 'lineti', 'udente', 'andina', 'spiano', 'limona', 'svecci', 'canuta', 'comodo', 'dubito', 'inveir', 'meliga', 'radumi', 'spelli', 'sterzo', 'sperar', 'riorno', 'sfilzo', 'buccia', 'lectio', 'oppili', 'istavi', 'brucii', 'sharar', 'svolar', 'ossido', 'abbaca', 'arcesi', 'rierga', 'venero', 'fugava', 'canine', 'escidi', 'strobo', 'bevole', 'eletta', 'tomane', 'zamuca', 'risive', 'unirti', 'baiati', 'ungila', 'webcam', 'esisti', 'ledici', 'alfuro', 'emanar', 'olimmo', 'sbirbi', 'plebee', 'terrai', 'femori', 'mdxxiv', 'vinche', 'occiso', 'safeno', 'vigeva', 'uzbeka', 'tanale', 'mdxxix', 'adatta', 'canter', 'effati', 'untavo', 'inalba', 'lutare', 'spesse', 'iridei', 'enarca', 'bufata', 'ustosa', 'mixava', 'braivo', 'fisate', 'cobeua', 'arzese', 'cavoli', 'sidame', 'mcxcvi', 'lessar', 'gudese', 'cerule', 'rimina', "virtu'", 'devono', 'neccio', 'prugna', 'cenuri', 'meagli', 'paglie', 'granai', 'vedovi', 'shocks', 'sipari', 'nasone', 'gemmeo', 'unisex', 'nagane', 'totela', 'insidi', 'edituo', 'alpina', 'penaci', 'ngonde', 'ugnala', 'devoti', 'sforno', 'belino', 'cedule', 'tester', 'cerchi', 'giusta', 'pedino', 'subiva', 'center', 'canese', 'anfibi', 'urlona', 'permea', 'mmxcix', 'netini', 'minuii', 'canati', 'senari', 'cedrai', 'mixate', 'inulte', 'inizio', 'libano', 'nerveo', 'rosina', 'mohavi', 'botolo', 'diredo', 'allodi', 'amarmi', 'casata', 'blinde', 'marena', 'rigiri', 'indoli', 'crotta', 'elongo', 'leardo', 'glabra', 'azolle', 'pallet', 'pogesi', 'riurlo', 'lavina', 'salvar', 'sicosi', 'travet', 'finora', 'nocino', 'sfesse', 'gurkha', 'venale', 'segate', 'dclvii', 'aculei', 'movida', 'escorî', 'alando', 'innovo', 'baluci', 'carabo', 'elafri', 'pathos', 'maiale', 'rubone', 'pelame', 'bracco', 'agogno', 'ottuse', 'garghe', 'onraci', 'creato', 'tifavi', 'ruggir', 'asciti', 'confli', 'mimesi', 'posati', 'tonalo', 'pander', "quell'", 'lateri', 'cernie', 'medito', 'lingio', 'tanica', 'celava', 'mmxxxi', 'spatri', 'godets', 'subite', 'parsec', 'nomate', 'cotono', 'carchi', 'armale', 'cheque', 'scolli', 'gasane', 'igieni', 'shahid', 'otturi', 'aringo', 'ornami', 'parcar', "quest'", 'guaita', 'temaki', 'raccai', 'ippica', 'grommi', 'dinamo', 'alluma', 'ficaie', 'martin', 'lounge', 'tubali', 'domali', 'peiese', 'redini', 'spurio', 'ervese', 'mazici', 'cumulo', 'strana', 'gemili', 'amurca', 'voltoi', 'copion', 'servir', 'rubane', 'sudaci', 'melava', 'seduco', 'svialo', 'fruito', 'racing', 'uggita', 'locava', 'tegoli', 'metano', 'efesio', 'fuetto', 'svelai', 'lagune', 'norica', 'mediar', 'sdirci', 'occupa', 'emunsi', 'basite', 'occhia', 'enimma', 'donaci', 'frulli', 'lellai', 'susani', 'ciance', 'cibava', 'narici', 'tomate', 'vilavi', 'orarie', 'variai', 'venavo', 'ficchi', 'dclxxx', 'rasavi', 'zigote', 'manuca', 'radilo', 'invide', 'totali', 'vivete', 'evinta', 'dclxvi', 'ancate', 'fotine', 'regali', 'nuxesi', 'tubami', 'acuito', 'valute', 'frusci', 'zigate', 'burian', 'tannar', 'staffe', 'stappo', 'diauli', 'brezza', 'calzai', 'favino', 'insani', 'tamaro', 'oliera', 'sgusci', 'potale', 'guatti', 'untili', 'angina', 'minati', 'avvedi', 'uggivo', 'icarie', 'scazzo', 'bossee', 'bandii', 'milady', 'nilgai', 'tastar', 'rimose', 'accana', 'snello', 'raponi', 'bavero', 'cebide', 'mafica', 'barrii', 'visava', 'sifoni', 'vanale', 'chicle', 'aritmo', 'esteri', 'afille', 'caicco', 'tirone', 'valilo', 'mandie', 'ludico', 'sdirvi', 'bellai', 'boxami', 'cuochi', 'diriga', 'ispani', 'kanaki', 'arcare', 'dolute', 'hereri', 'digita', 'urgila', 'sbasir', 'acerre', 'musona', 'abduci', 'xilemi', 'stallo', 'scelte', 'rumena', 'erbari', 'camesi', 'torear', 'pipaci', 'indidi', 'compro', 'cocevi', 'gnaula', 'addite', 'rierta', 'mdxlii', 'solone', 'barite', 'market', 'stille', 'cerumi', 'sbuffo', 'sdossa', 'ciuffi', 'traoda', 'indoma', 'triale', 'traevo', 'gretti', 'emetta', 'posava', 'furore', 'fliaci', 'ubicai', 'crocio', 'spalma', 'inluia', 'kodiak', 'putide', 'mudali', 'cabila', 'attrar', 'rapane', 'arbano', 'fremei', 'paralo', 'scalda', 'disana', 'areole', 'ariste', 'paiono', 'clorai', 'eresie', 'nocivo', 'visini', 'cucilo', 'palavi', 'ducali', 'tradii', 'agende', 'vaglio', 'leuche', 'raggia', 'recati', 'untasi', 'risana', 'erbite', 'dopavi', 'lattar', 'lacche', 'sudici', 'mucche', 'panche', 'adduco', 'crazie', 'salala', 'istate', 'eluite', 'gasano', 'petato', 'cappar', 'cadono', 'ertili', 'triaca', 'dogala', 'ghirbe', 'sdilla', 'putavi', 'pepalo', 'fecero', 'osseta', 'tarala', 'saponi', 'pinosi', "rista'", 'sedute', 'celero', 'bollii', 'poster', 'poculo', 'trappe', 'steady', 'kharia', 'acresi', 'tidali', 'cinira', 'tosava', 'asciar', 'genate', 'ideina', 'eccone', 'esorti', 'cinipi', 'volala', 'onrata', 'stette', 'domaci', 'datine', 'stutar', 'obliar', 'pelota', 'mitici', 'invero', 'ortana', 'metolo', 'untine', 'ritari', 'farnia', 'tifoni', 'vicino', 'zirlii', 'udisti', 'anomie', 'elodee', 'betica', 'cedole', 'plorar', 'mollai', 'subivi', 'ledete', 'esuvia', 'salivi', 'sedici', 'piropo', 'miceli', 'alisea', 'untomi', 'boxali', 'morose', 'coopti', 'trarle', 'plusia', 'nasuti', 'roveti', 'indiai', 'amanze', 'balene', 'idilli', 'petala', 'clonar', 'scalea', 'attini', 'burger', 'poneva', 'tabida', 'salesi', 'soglia', 'hammām', 'mearli', 'sciare', 'smussi', 'trarvi', 'retico', 'iodosi', 'rimiri', 'ceridi', 'aliami', 'freezi', 'untala', 'incubo', 'traits', 'mirata', 'grappa', 'tacici', 'lumali', 'tosami', 'spaeso', 'fronte', 'ledili', 'abiura', 'mmxlii', 'morale', 'posaci', 'ricrea', 'ubichi', 'goblin', 'nencia', 'sitino', 'nerite', 'gorbie', 'office', 'branca', 'cadimi', 'panico', 'citalo', 'safene', 'sfilai', 'taggai', 'tufese', 'assumi', 'eskimi', 'ubiero', 'odialo', 'metani', 'ritace', 'fusevi', 'raugee', 'fucato', 'ultime', 'butene', 'volare', 'smotto', 'renato', 'gabine', 'lagopo', 'pemani', 'lusche', 'simili', 'huarpe', 'acuzie', 'deissi', 'guelfo', 'vedevo', 'sisaro', 'porcon', 'selfai', 'potage', 'tromba', 'tracie', 'datoli', 'ostolo', 'trasli', 'molcii', 'fionda', 'untile', 'favara', 'latteo', 'ottini', 'scolta', 'poncif', 'vacare', 'eolica', 'amarla', 'ridavo', 'irpine', 'uristi', 'spiega', 'tutino', 'usurar', 'puliva', 'smezzo', 'pelosa', 'sfurio', 'stolte', 'refluo', 'mmlxiv', 'panica', 'vignai', 'montar', 'libbre', 'tuschi', 'castra', 'algali', 'megere', 'solali', 'dccxlv', 'bigaro', 'topate', 'issalo', 'giovar', 'rosine', 'rotoli', 'radeva', 'nodale', 'onerar', 'limine', 'scribi', 'weblog', 'azalea', 'eusino', 'tudera', 'dacron', 'rizzar', 'redata', 'turaci', 'dotino', 'spremi', 'veduti', 'antico', 'smiley', 'osmici', 'pelini', 'dlxxxi', 'raiano', 'arrote', 'somari', 'disfar', 'sinico', 'ormala', 'citane', 'umidii', 'uxorie', 'orlata', 'pulcre', 'manina', 'spreco', 'aninga', 'nottue', 'cencro', 'segnar', 'ravvio', 'fronda', 'arrise', 'lutano', 'xlviii', 'oblate', 'pipali', 'empiti', 'luvaro', 'rogiti', 'sporta', 'funame', 'cufici', 'smerda', 'gitolo', 'focone', 'vagine', 'dogavo', 'clviii', 'broche', 'alpini', 'chopes', 'astila', 'rinata', 'tusano', 'purgai', 'lagene', 'suvvia', 'chioma', 'befana', 'linkai', 'stinto', 'sbirci', 'confla', 'diploi', 'enfasi', 'acceso', 'sciano', 'agirle', 'rifasa', 'alisso', 'ammide', 'subivo', 'chiare', 'poculi', 'sduoli', 'canelo', 'piurie', 'oscuro', 'cerone', 'cordai', 'fusoci', 'mescer', 'gliari', 'educar', 'zooeci', 'totani', 'spiato', 'sagace', 'terron', 'dioico', 'solava', 'snodai', 'bretto', 'attivi', 'trizio', 'sgasso', 'stenuo', 'datura', 'fraudo', 'beasti', 'melone', 'divaga', 'olirvi', 'segale', 'sadico', 'rostri', 'mimali', 'grossa', 'cuboni', 'bufala', 'bidoni', 'capavo', 'arrida', 'caspii', 'giravo', 'formar', 'celoma', 'ustolo', 'dicano', 'dilimo', 'cdlxxi', 'stento', 'lumavo', 'spizza', 'dolevo', 'cecano', 'sfarla', 'vanato', 'labaro', 'capiti', 'alzava', 'bruite', 'tifati', 'raiata', 'abbina', 'esondi', 'immolo', 'algida', 'frusco', 'nodali', 'ovulai', 'unenni', 'pescar', 'areico', 'ondata', 'guasco', 'occupo', 'esegua', 'gluteo', 'toupet', 'pinoli', 'svezzi', 'libavo', 'arseci', 'mdxciv', 'magica', 'pulcri', 'stigie', 'ungari', 'cimala', 'riardo', 'valile', 'sfolti', 'lebbra', 'rental', 'voluti', 'comica', 'vexata', 'enanti', 'stoini', 'parano', 'grifar', 'gigaro', 'zelose', 'scelsi', 'stimma', 'suacie', 'hafnio', 'lumaia', 'discoi', 'rimica', 'ippico', 'slungo', 'varano', 'novala', 'crosta', 'oppila', 'attimi', 'gazavo', 'fusivi', 'cetere', 'melene', 'scouts', 'durame', 'faveto', 'cedono', 'cromar', 'asiaca', 'tecali', 'prezza', 'pecchi', 'ibisco', 'boriai', 'taravo', 'condii', 'offesa', 'brigar', 'cccxli', 'xenopo', 'iugulo', 'romani', 'abrado', 'zippai', 'smocci', 'malleo', 'trolla', 'divido', 'lesbie', 'libero', 'dedica', 'sedavo', 'ratele', 'acceda', 'scasai', "alcun'", 'oociti', 'stabia', 'ascidi', 'untoli', 'spiavi', 'bugule', 'plocei', 'minute', 'musare', 'aulete', 'theory', 'irideo', 'creolo', 'vegane', 'issare', 'villan', 'adenti', 'cerosa', 'glandi', 'omelie', 'sporti', 'empila', 'scalar', 'lxxiii', 'insito', 'setino', 'amlire', 'visiva', 'estuar', 'rimuro', 'norite', 'cmlxxx', 'duglia', 'inmino', 'stuoie', 'scemar', 'esodio', 'mummia', 'alzaia', 'voyeur', 'chitai', 'yankee', 'nunzie', 'citali', 'smuore', 'rovino', 'fetola', 'natata', 'espero', 'rictus', 'fritto', 'ririsa', 'defila', 'oofago', 'linkar', 'mantra', 'manato', 'vibici', 'finish', 'afrosi', 'ronzio', 'petate', 'gelese', 'potata', 'rorido', 'bovare', 'zotici', 'manque', 'adisci', 'potute', 'prezzi', 'istoni', 'figule', 'grigie', 'pecten', 'ciotte', 'passir', 'rogava', 'sgorgo', 'ignavi', 'brusio', 'agerei', 'litami', 'genala', 'tenari', 'cabina', 'poponi', 'tavola', 'spalli', 'batate', 'garosi', 'recila', 'puzzon', 'novali', 'mcxxix', 'rotese', 'ottile', 'zimosi', 'merope', 'rugali', 'resami', 'glossa', 'adepti', 'oblati', 'cupola', 'irrido', 'suidei', 'lampar', 'attici', 'sbriga', 'ceceri', 'cxxxii', 'gemito', 'storsi', 'risiva', 'casose', 'sverno', 'cetili', 'sbardi', 'svilio', 'marron', 'gironi', 'igroma', 'sbafai', 'taguan', 'ambiai', 'fritti', 'merino', 'incube', 'bavaro', 'spesai', 'aocchi', 'orario', 'diligo', 'ugrica', 'alammo', 'fetole', 'orzavi', 'fusili', 'mcccxv', 'lipasi', 'spegne', 'emulgo', 'gazebo', 'tagghi', 'alligo', 'garrir', 'storce', 'tumula', 'decino', 'dinaro', 'tornei', 'svista', 'radine', 'sorani', 'ovoidi', 'rienfî', 'pirata', 'aliavo', 'ghiaia', 'lodale', 'focide', 'aprivi', 'agamie', 'depilo', 'famano', 'barale', 'mazzia', 'daremo', 'stendo', 'sonora', 'fusile', 'valige', 'sessai', 'guscio', 'smorii', 'estina', 'racani', 'oidici', 'afelio', 'doloro', 'varane', 'oriamo', 'tifose', 'trasti', 'abasia', 'erbori', 'soraci', 'guaimi', 'grezzo', 'abduco', 'camuso', 'dimere', 'barmen', 'router', 'bavosa', 'resile', 'amenza', 'stemmi', 'missai', 'maxima', 'ladron', 'locano', 'rinici', 'novino', 'utopie', 'prasmi', 'litote', 'appare', 'milote', 'camber', 'lesovi', 'sorala', 'redavo', 'ergila', 'telone', 'priora', 'zelano', 'molide', 'elitre', 'cxxiii', 'sprays', 'mclxix', 'arrogi', 'viorna', 'coimmo', 'gradii', 'barato', 'gitivi', 'mitema', 'micchi', 'volani', 'raitro', 'cazzar', 'gratis', 'medela', 'rienfi', 'bracci', 'domavi', 'colmar', 'inossi', 'belate', 'fallai', 'folchi', 'infide', 'etesio', 'salaci', 'quetai', 'vapora', 'fucsia', 'pesche', 'necano', 'efedre', 'mimose', 'stenui', 'brexit', 'ondare', 'esedra', 'rispio', 'cimale', 'secchi', 'ccxxxv', 'prilla', 'iodano', 'resone', 'pisane', 'uremia', 'arsala', 'cclxix', 'grembi', 'lorica', 'sifnia', 'tutori', 'capali', 'recisa', 'vrisee', 'contee', 'grezze', 'sfarti', 'colini', 'sbucar', 'gazato', 'cumano', 'smarca', 'ferina', 'livero', 'alzare', 'fransi', 'piatto', 'spumar', 'mdccxi', 'anfibo', 'riapri', 'rifili', 'fascia', 'gavoni', 'sfuggi', 'fisico', 'scozia', 'bucini', 'flessi', 'guelfa', 'stocks', 'eredar', 'cestai', 'arcani', 'tronca', 'eolite', 'osaste', 'empine', 'frappa', 'spegli', 'guance', 'duravi', 'lipide', 'cdliii', 'brogli', 'macere', 'ciechi', 'quarto', 'renalo', 'sugato', 'fonate', 'gustai', 'alalie', 'mucide', 'gitane', 'damate', 'ostini', 'pigale', 'alisee', 'dotale', 'sobrio', 'aramea', 'gabbei', 'rosovi', 'cigani', 'babbea', 'arsevi', 'ascito', 'incoai', 'tifici', 'siconi', 'fluore', 'menate', 'motosa', 'smunge', 'alluci', 'aulivi', 'latere', 'alzane', 'operai', 'critta', 'smagri', 'senoni', 'idioti', 'nocevi', 'arresi', 'bilobe', 'rogita', 'albino', 'dcccxi', 'mearle', 'abazie', 'sciori', 'pedone', 'smagar', 'scerbi', 'redino', 'mandai', 'restai', 'litigo', 'impelo', 'spinar', 'decedo', 'cancro', 'survey', 'viorne', 'diurna', 'aliati', 'terzia', 'papule', 'oirate', 'legaci', 'linnea', 'rinega', 'oceano', 'requia', 'rilimo', 'fiorar', 'basane', 'ledeva', 'musiva', 'lisami', 'ambito', 'lucere', 'nsenga', 'potori', 'rapami', 'cogiti', 'urbica', 'lodali', 'cagala', 'nevola', 'adware', 'gabali', 'raggio', 'carelo', 'cengia', 'viveri', 'teodem', 'gasoso', 'annosa', 'rasoti', 'ducere', 'latita', 'lamuti', 'nasalo', 'pinace', 'cannai', 'spargo', 'cavidi', 'lanugo', 'eruppe', 'inseno', 'bibule', 'deleto', 'grolle', 'vaniti', 'omesse', 'update', 'essere', 'cagone', 'sanese', 'oleica', 'crassa', 'dxliii', 'ciurme', 'sciava', 'eletto', 'iuguli', 'nevate', 'switch', 'gittai', 'miasma', 'gremio', 'crabro', 'ararsi', 'fidavi', 'ungile', 'infera', 'tovese', 'vantar', 'previi', 'sfilze', 'egloga', 'partes', 'binube', 'affamo', 'prezze', 'scalci', 'niccio', 'sbraga', 'meteco', 'evitta', 'zigene', 'sbruco', 'spallo', 'bottom', 'resite', 'belano', 'semici', 'votale', 'carico', 'aderba', 'limosa', 'gaudio', 'ultima', 'foiosa', 'nagana', 'lotica', 'cccxxx', 'focosi', 'lepore', 'cenalo', 'riotto', 'salese', 'tarino', 'terbii', 'giurar', 'impari', 'baiata', 'riamai', 'abbili', 'delego', 'deduco', 'cretta', 'domina', 'rumati', 'esitar', 'retini', 'zincar', 'batata', 'massai', 'tiraci', 'posino', 'fucini', 'fatici', 'correo', 'osante', 'dolche', 'stivai', 'turare', 'aggesi', 'meando', 'somnia', 'natavi', 'traete', 'fisava', 'bubali', 'rogati', 'mcclxi', 'antele', 'sdamar', 'vaiolo', 'glassi', 'bragia', 'miloto', 'scerna', 'trarsi', 'argino', 'cimbra', 'notava', 'borina', 'mixers', 'morfei', 'uzzese', 'tanali', 'rosomi', 'aitino', 'invasi', 'agiami', 'zelava', 'amimia', 'avania', 'tomale', 'alluna', 'alleno', 'lamali', 'nomavi', 'genici', 'diligi', 'volchi', 'sfitti', 'smanti', 'ondine', 'riunta', 'arguto', 'elobia', 'gemete', 'spaesi', 'donato', 'estuba', 'nasavi', 'scevri', 'docmio', 'areali', 'agiala', 'spelte', 'sfoggi', 'polita', 'ortivi', 'grinzo', 'horrea', 'urgete', 'verola', 'smilze', 'verina', 'forane', 'elgeya', 'vitata', 'ponimi', 'lecita', 'agitar', 'correi', 'rapide', 'censua', 'svitar', 'ormavo', 'tapine', 'notala', 'shunto', 'slalom', 'covata', 'arbani', 'segona', 'orezze', 'forati', 'cimini', 'sugaie', 'abbuio', 'augite', 'arasse', 'rocchi', 'locala', 'tregue', 'stanar', 'coscia', 'susane', 'amebeo', 'epeira', 'posala', 'picani', 'deriva', 'sodale', 'neopro', 'purano', 'furami', 'slatta', 'latice', 'losche', 'cerate', 'rotini', 'bubami', 'navesi', 'vallea', 'segali', 'rorava', 'orbene', 'narese', 'oblami', 'adusai', 'vomivi', 'grazia', 'dolata', 'dirami', 'sicura', 'batola', 'remoti', 'nudate', 'riesco', 'inceli', 'sverla', 'aitale', 'malidi', 'gotata', 'inside', 'guaine', 'inceda', 'bazzon', 'rosesi', 'pepite', 'gratti', 'sirese', 'bromio', 'sbordo', 'storca', 'piagai', 'bestie', 'questo', 'labili', 'napalm', 'oremus', 'ansato', 'papino', 'giraci', 'accori', 'amente', 'bierre', 'evelta', 'quando', 'bodini', 'quater', 'altini', 'banine', 'mixaci', 'incora', 'disusa', 'toroso', 'sfasar', 'virate', 'culino', 'rating', 'marano', 'cedete', 'divori', 'pokoma', 'chiome', 'aurato', 'family', 'usbeca', 'sgambo', 'vimava', 'nolane', 'ursoni', 'compos', 'buttar', 'ungaro', 'cecami', 'emunte', 'arcale', 'sviano', 'eniani', 'gufati', 'nutrii', 'dativo', 'sature', 'bibace', 'lamavi', 'spolpe', 'sassei', 'elmati', 'recido', 'untiti', 'chiesa', 'sonava', 'lorari', 'ponzai', 'redimi', 'guaime', 'odigli', 'smammo', 'senali', 'livera', 'sitate', 'ghiara', 'epiche', 'tanger', 'rodali', 'certai', 'vilite', 'telane', 'iridar', 'armeni', 'docile', 'sgurar', 'zittio', 'lancio', 'riveli', 'finiti', 'plinti', 'dxlvii', 'briffi', 'batoli', 'spezie', 'aulivo', 'educai', 'tragga', 'buteni', 'educer', 'zignar', 'dilami', 'olande', 'alcuno', 'edotti', 'resimi', 'purale', 'anisti', 'mudino', 'strego', 'panini', 'rimami', 'poggio', 'inaspi', 'depuro', 'stigmi', 'coirle', 'sfalsa', 'rizomi', 'ornala', 'emulsa', 'arenai', 'chiamo', 'nasute', 'mpondo', 'erteci', 'claque', 'ritesa', 'datela', 'unirli', 'oidico', 'moloch', 'boriva', 'culare', 'paglia', 'famuli', 'nuxese', 'farota', 'raiaci', 'topini', 'casoni', 'avanti', 'starlo', 'boruro', 'guatto', 'imputa', 'mammar', 'snella', 'nudami', 'tetico', 'ialino', 'remake', 'lumini', 'sunese', 'faille', 'bottar', 'indaco', 'eusina', 'soglio', 'adorai', 'falasa', 'ghindo', 'gratto', 'impipa', 'albite', 'smosci', 'achiri', 'zelalo', 'morule', 'feroce', 'donalo', 'idrese', 'pelote', 'blando', 'binodi', 'aurava', 'famami', 'sagita', 'capota', 'lotoso', 'sfissa', 'volale', 'minora', 'ripaga', 'federo', 'smazzo', 'creala', 'suacia', 'casula', 'abbuia', 'gufata', 'innera', 'artaci', 'hahnio', 'donnea', 'carnet', 'sarago', 'datale', 'inonda', 'cclxii', 'drilli', 'vogulo', 'estubi', 'urlali', 'gitami', 'rugghi', 'silvia', 'pubere', 'tarara', 'ignote', 'perizi', 'tagika', 'kitara', 'ristia', 'abigeo', 'sciupa', 'tetris', 'merito', 'destar', 'diesar', 'ticchi', 'agiavo', 'langue', 'disumo', 'mutava', 'getuli', 'secalo', 'paiano', 'riposa', 'cimavo', 'dipeso', 'flutti', 'penosa', 'chinea', 'dacica', 'ignota', 'riconi', 'talmud', 'abraso', 'djembe', 'attimo', 'begami', 'litigi', 'strico', 'alanti', 'latiri', 'persee', 'ultimo', 'macula', 'sapere', 'culaio', 'areava', 'torule', 'slenti', 'sverli', 'lesone', 'modulo', 'bemina', 'araldi', 'amorfe', 'timono', 'lotico', 'celavi', 'assola', 'pogavi', 'pascei', 'tender', 'pepava', 'chioso', 'allupi', 'odenti', 'crauti', 'donavi', 'patema', 'cimosa', 'pannar', 'peyote', 'ofiura', 'coming', 'cobola', 'madori', 'tenace', 'begolo', 'bulini', 'babbeo', 'fasare', 'trojan', 'eccola', 'belala', 'nutria', 'lesoli', 'pisano', 'dicavi', 'svampo', 'mcdlix', 'valori', 'valina', 'mudato', 'nippli', 'ergili', 'flutto', 'eserti', 'arredo', 'spense', 'rizene', 'mischi', 'troppe', 'cecato', 'lagoni', 'lisolo', 'osammo', 'ormale', 'dinari', 'impila', 'osanno', 'urbico', 'ruteni', 'bolide', 'erniai', 'ampari', 'gluone', 'berlic', 'mucosa', 'bifera', 'crepar', 'beceri', 'baerie', 'derubo', 'bricie', 'dorrei', 'ocelli', 'ninfei', 'caleno', 'modico', 'nerbar', 'maiore', 'cubato', 'petavo', 'mutilo', 'ottusa', 'ormami', 'risoli', 'teston', 'amento', 'stagna', 'instar', 'cdxxii', 'taggar', 'spogli', 'nodoso', 'adorna', 'vocalo', 'vanumi', 'nomalo', 'necton', 'ovisti', 'velano', 'favaio', 'pegole', 'evolse', 'istori', 'celebe', 'public', 'ritira', 'carene', 'posata', 'scogli', 'falera', 'sodici', 'zabibo', 'sicani', 'forata', 'fanali', 'pianti', 'merger', 'fisane', 'pingui', 'ladine', 'pelalo', 'gerghi', 'cimoso', 'busoni', 'dialer', 'veltri', 'ricchi', 'voglio', 'compia', 'cowboy', 'rotaia', 'gemile', 'mucici', 'nucato', 'vomeri', 'filoso', 'kaonde', 'saliti', 'bilama', 'ubiqua', 'menome', 'volute', 'doario', 'ispide', 'stirpe', 'lunati', 'fedano', 'morbus', 'dirigi', 'averto', 'introi', 'fleggo', 'insali', 'fugate', 'legavo', 'guglia', 'coxite', 'pavidi', 'orbano', 'gufaci', 'stampo', 'narina', 'folate', 'dolica', 'levati', 'datesi', 'varavo', 'troupe', 'rianno', 'speleo', 'moksha', 'repiti', 'vatene', 'lodalo', 'mdlxvi', 'ondano', 'smozzi', 'ramine', 'oliati', 'urtale', 'sopore', 'stappa', 'negalo', 'scoppi', 'curvar', 'viraci', 'pender', 'aftosa', 'arieta', 'vivere', 'boogie', 'cenobi', 'acuire', 'bassar', 'quadri', 'esseno', 'kagori', 'marese', 'garoso', 'radume', 'primai', 'ridimi', 'abradi', 'aizzar', 'equese', 'shaykh', 'pieria', 'presce', 'sarong', 'befane', 'pepato', 'istala', 'solivi', 'mattia', 'ponevo', 'totale', 'ardito', 'spigai', 'gelali', 'perine', 'stetti', 'fratte', 'godute', 'rimata', 'rissoa', 'pepini', 'sitava', 'prezzo', 'adroni', 'rimase', 'uggite', 'colali', 'riggia', 'pokome', 'fugato', 'grotti', 'focati', 'labbri', 'requio', 'secura', 'coroni', 'lamalo', 'ibalao', 'curali', 'nogali', 'batida', 'fermio', 'parali', 'riocai', 'rubano', 'bronza', 'bacalo', 'nomane', 'doluto', 'inciso', 'decapi', 'tomaie', 'aprono', 'abulia', 'erravi', 'truono', 'blazer', 'aborti', 'ronfai', 'ottone', 'clipeo', 'rimema', 'oblata', 'mutolo', 'gavine', 'flessa', 'caduta', 'traghi', 'metoli', 'ambivi', 'assist', 'pisani', 'venine', 'pedato', 'dotato', 'ottico', 'ooteca', 'transo', 'titine', 'ardici', 'ypriti', 'baiala', 'novava', 'usanze', 'illiri', 'guardi', 'pinoso', 'tiralo', 'huarpi', 'liniti', 'grotte', 'venate', 'armaci', 'natone', 'tifavo', 'accada', 'assoli', 'piotte', 'impepa', 'vitare', 'viroso', 'susano', 'figuro', 'cuccai', 'tanuki', 'sclera', 'rogaci', 'mdxcvi', 'zigena', 'tudero', 'eretti', 'giurie', 'favoli', 'toponi', 'strofe', 'sbozza', 'sprema', 'diploe', 'remare', 'pacata', 'rieder', 'centra', 'atteso', 'equava', 'raguno', 'veltro', 'vivine', 'esteti', 'invise', 'givate', 'grivna', 'rettai', 'menaci', 'sultan', 'schedi', 'boccar', 'melala', 'mimale', 'frecci', 'lucrai', 'loffio', 'oolite', 'spiare', 'salpai', 'zigati', 'tondar', 'pilala', 'sfoghi', 'optima', 'reseca', 'atelie', 'stalli', 'foravo', 'suonai', 'ugnavo', 'migali', 'ardivi', 'vagite', 'durata', 'cabota', 'stimmi', 'tuffar', 'sciali', 'golena', 'capino', 'faccio', 'brucio', 'arrola', 'alzano', 'silani', 'sdammi', 'fifoni', 'riccio', 'mcclvi', 'adenia', 'canuto', 'orbiti', 'smegma', 'ramuli', 'lesche', 'passai', 'selaci', 'covili', 'arator', 'opiate', 'mcclxv', 'meropi', 'ristai', 'ircano', 'langui', 'uriese', 'baiali', 'rapine', 'voravi', 'psilli', 'divimi', 'piovra', 'mclxvi', 'gelivi', 'setosi', 'ciprie', 'cenato', 'andini', 'ceneri', 'costai', 'fumato', 'optata', 'difila', 'limato', 'trofia', 'vagita', 'strabi', 'tonchi', 'foodie', 'verghi', 'rotino', 'risimi', 'risili', 'tricot', 'rosino', 'monchi', 'vilino', 'antemi', 'uniate', 'limale', 'priami', 'starsi', 'africo', 'dilaga', 'rosami', 'godono', 'falsai', 'rasano', 'dacite', 'traggo', 'andito', 'supero', 'holmio', 'pagami', 'ridare', 'coatta', 'dolavi', 'grappi', 'satira', 'coirvi', 'endice', 'capati', 'ferodo', 'fiotti', 'fonemi', 'ramale', 'novete', 'normar', 'fatele', 'annate', 'limulo', 'cileno', 'onrare', 'spossi', 'indici', 'adirai', 'nappar', 'beccar', 'giaina', 'volavo', 'barici', 'visivo', 'clisma', 'riopto', 'niloti', 'lidico', 'cavona', 'mazica', 'gender', 'fresia', 'conato', 'acquea', 'omilia', 'scissi', 'bruiva', 'baggeo', 'stinsi', 'riunga', 'puntar', 'podere', 'ansima', 'seduci', 'sitavo', 'favolo', 'nocivi', 'ramosa', 'seguir', 'pedale', 'grughi', 'vociva', 'vacali', 'greche', 'arseti', 'uzzati', 'chillo', 'evinto', 'bacane', 'jodler', 'invaga', 'rifate', 'opponi', 'penavo', 'aguzze', 'addano', 'vilava', 'cavane', 'incusi', 'famulo', 'volleo', 'cazzon', 'avvivi', 'cugini', 'todino', 'visata', 'trailo', 'ghezzi', 'camalo', 'penice', 'favosa', 'asseta', 'freeza', 'eversi', 'canuri', 'levavi', 'ceroma', 'suites', 'barone', 'megera', 'muccia', 'scarsa', 'ricali', 'piammo', 'dolchi', 'zonati', 'abaton', 'subito', 'sessar', 'litavo', 'placet', 'dovuti', 'teacee', 'senapa', 'tratti', 'oncosi', 'inusto', 'algosa', 'diesel', 'virala', 'giobbi', 'gufavi', 'lurchi', 'recuse', 'tutati', 'logico', 'spiedi', 'bulano', 'sanala', 'laridi', 'culano', 'stesar', 'virole', 'resero', 'fiotto', 'affogo', 'buacci', 'ilvate', 'rancai', 'imbuco', 'stanno', 'tarmai', 'fidale', 'tapsia', 'armate', 'lavava', 'illuse', 'volami', 'balate', 'dindin', 'fianca', 'svaria', 'tuboni', 'magavi', 'tufavi', 'parete', 'stenie', 'zoster', 'ramaci', 'pirani', 'buffai', 'fanghe', 'viglia', 'bateca', 'abbini', 'camali', 'leccio', 'urtoni', 'marzia', 'frauda', 'forano', 'dcclii', 'potevo', 'pepaci', 'bigato', 'schifi', 'papaya', 'puliti', 'lautal', 'epizoo', 'odiamo', 'ortale', 'stoffe', 'rimasa', 'aeroso', 'acquee', 'madame', 'tutava', 'inviti', 'sodava', 'fittai', 'corano', 'ornale', 'swatti', 'attive', 'dolici', 'recedo', 'sbrago', 'tresca', 'curtis', 'idrobi', 'lacero', 'escolo', 'clxxii', 'sterne', 'orfana', 'cmlxii', 'corate', 'ramato', 'esculo', 'rasisi', 'prence', 'cribro', 'beagle', 'mmcvii', 'sbitta', 'gelose', 'votano', 'golosa', 'miraci', 'aperta', 'rialzi', 'azotai', 'paanga', 'imposi', 'sbucci', 'spompi', 'aporia', 'sbavar', 'paravo', 'picche', 'grippi', 'trofeo', 'sranan', 'rivoti', 'dorate', 'fintai', 'gradui', 'dcxlii', 'decane', 'scalva', 'posami', 'rinato', 'meschi', 'punghe', 'numera', 'mcdlxx', 'sudane', 'fletto', 'spenga', 'batoci', 'tonati', 'ccclix', 'tutaci', 'mentis', 'brioso', 'crambe', 'copali', 'ipogei', 'angami', 'sfessa', 'negala', 'logghi', 'violai', 'adirlo', 'pulsar', 'cabalo', 'rupina', 'navali', 'azteco', 'armeno', 'largii', 'pelosi', 'patagi', 'zappai', 'innari', 'esenta', 'incede', 'fusovi', 'urtava', 'hammam', 'temile', 'aerosi', 'frolla', 'limuli', 'kamale', 'patuli', 'lesami', 'passar', 'tifula', 'ciglia', 'sitire', 'uccido', 'rubaci', 'covoni', 'molata', 'bevevo', 'smelai', 'sedati', 'narcos', 'uvacei', 'zeribe', 'gualda', 'erniar', 'quitte', 'lanose', 'olezzo', 'sculte', 'varavi', 'notato', 'begava', 'micino', 'nilgau', 'auravi', 'nomaci', 'stenti', 'aquile', 'zeppar', 'mudate', 'delete', 'griffe', 'slargo', 'sgozza', 'espila', 'scusse', 'rosone', 'notaci', 'alisma', 'necato', 'lanato', 'sdissi', 'celeri', 'ghinde', 'plenum', 'impupo', 'cimolo', 'deponi', 'cmxxvi', 'gasava', 'coxale', 'barena', 'resaci', 'ospita', 'cenavi', 'storna', 'fasavo', 'resini', 'cigola', 'pacali', 'polini', 'mcmxxx', 'tonali', 'rapala', 'glocal', 'misero', 'magene', 'mccxci', 'sbirre', 'stiese', 'atelia', 'omucci', 'donneo', 'secure', 'dovesi', 'sdiano', 'somaro', 'impero', 'nettai', 'coissi', 'belati', 'smunti', 'ledevo', 'iodura', 'parate', 'pianar', 'nevali', 'cerise', 'osseti', 'adesar', 'guappi', 'cccxlv', 'coclea', 'dolope', 'eroica', 'milieu', 'rateai', 'flatus', 'cacico', 'armala', 'tutavo', 'derise', 'smotte', 'cacava', 'orbato', 'moriva', 'lodala', 'depore', 'navato', 'stagli', 'nunzia', 'damato', 'bubati', 'rizina', 'vanava', 'refuta', 'fetide', 'rettar', 'covano', 'fateci', 'torosa', 'fidala', 'panaci', 'acorme', 'temano', 'asolai', 'toboga', 'rutica', 'baobab', 'vagola', 'mcclix', 'cosata', 'cinesi', 'pineti', 'goditi', 'gangia', 'repeva', 'salavi', 'paluda', 'abrada', 'riurto', 'rugale', 'frenai', 'nociva', 'imbuca', 'basato', 'plotta', 'utenze', 'arella', 'triano', 'fluoro', 'pesalo', 'nevaia', 'dritta', 'ondali', 'crocei', 'suario', 'gudeno', 'doveri', 'prosit', 'striga', 'rapali', 'bumper', 'traile', 'locali', 'target', 'ritrai', 'ancore', 'mdxcix', 'monomi', 'rotear', 'bubano', 'sgonfi', 'ohmico', 'monili', 'papago', 'resino', 'telavo', 'vitice', 'ostice', 'frollo', 'spolpo', 'triari', 'vocita', 'unisco', 'rolesi', 'spoppo', 'rinoma', 'fumana', 'achivi', 'sdiate', 'girono', 'saloon', 'ertivi', 'marine', 'pacano', 'resisi', 'pausar', 'sudati', 'ciperi', 'tuderi', 'goccia', 'nocive', 'dipoli', 'escara', 'buffet', 'barrel', 'baliva', 'dilavi', 'genato', 'eumene', 'cccvii', 'uscere', 'bische', 'bisavi', 'adunar', 'etiche', 'mcdxii', 'adulai', 'rugane', 'doralo', 'mixano', 'esizio', 'kümmel', 'sparsi', 'etidio', 'rosavi', 'finivo', 'bussar', 'razzii', 'zuccai', 'rodili', 'godere', 'gralli', 'vitato', 'cccxvi', 'smuova', 'cugino', 'sgarzo', 'amarlo', 'entica', 'smossa', 'cotale', 'oliano', 'erebie', 'annomi', 'cubito', 'viziai', 'pesoli', 'cazzai', 'pianga', 'vagare', 'dasipi', 'pedane', 'nevoso', 'semuto', 'pipato', 'scussi', 'eredai', 'genano', 'rosole', 'mucida', 'mutila', 'recere', 'giovin', 'piarti', 'rufoli', 'anfani', 'spengi', 'carata', 'tubone', 'ontani', 'entrar', 'capato', 'evacuo', 'beator', 'ondaci', 'scingo', 'venite', 'uccida', 'sfalda', 'boresi', 'silene', 'erteti', 'torcia', 'doloso', 'cahier', 'suggio', 'coioti', 'dipeli', 'banjos', 'braivi', 'dromia', 'trarne', 'biosce', 'nervee', 'agisse', 'sperse', 'disiro', 'averno', 'peposi', 'oppida', 'aitala', 'nomica', 'lelegi', 'votane', 'evulso', 'ramaio', 'caduna', 'tosano', 'esseri', 'bacati', 'pativa', 'lamber', 'gialda', 'fausti', 'egioca', 'splene', 'osasti', 'equata', 'culavi', 'efebeo', 'tipino', 'planar', 'trilli', 'albese', 'orzino', 'stammi', 'sigaro', 'starno', 'uguali', 'stirpi', 'caduti', 'facula', 'levava', 'siepai', 'tutore', 'rasici', 'spring', 'pomosa', 'udirvi', 'arpona', 'curate', 'allumi', 'glorio', 'mcdxxv', 'evoica', 'prette', 'succio', 'snooze', 'previe', 'sberci', 'arvali', 'domane', 'sporla', 'cortea', 'smurar', 'dadini', 'aerobi', 'scinse', 'unirne', 'eroici', 'bypass', 'fruiva', 'gariga', 'monaca', 'khamti', 'trends', 'polani', 'bearmi', 'redita', 'ignaro', 'upload', 'girone', 'sfinir', 'scalfi', 'dianto', 'asello', 'spiamo', 'coriza', 'traici', 'pegasi', 'pepali', 'anatri', 'andare', 'orbino', 'sfotto', 'bilobi', 'stighi', 'greppi', 'penico', 'groppi', 'daorse', 'scorie', 'gasate', 'vamelo', 'coirli', 'moplah', 'galate', 'cicchi', 'kenosi', 'rivivi', 'radevi', 'trozza', 'ondina', 'mesica', 'gabola', 'soleil', 'aderbo', 'aeravo', 'pupale', 'insane', 'curale', 'cavava', 'calala', 'levito', 'rapido', 'chinai', 'haruro', 'scinsi', 'murina', 'sapevi', 'bissar', 'corago', 'adatto', 'ripoti', 'googol', 'murgia', 'vegete', 'afonie', 'tegola', 'riteso', 'basano', 'tagete', 'biotte', 'dadoni', 'curavo', 'smerla', 'morare', 'sviste', 'angine', 'evoici', 'peridi', 'lunare', 'sekani', 'pecili', 'vegani', 'apatie', 'lottar', 'lintee', 'bononi', 'favate', 'unsero', 'voralo', 'porrei', 'plagia', 'segoso', 'memori', 'doping', 'mutata', 'puppar', 'qeniti', 'caroto', 'dimori', 'gourde', 'noceti', 'fugale', 'presta', 'ladano', 'logoro', 'desoli', 'sparsa', 'funera', 'neutro', 'vimino', 'addice', 'omagre', 'becera', 'resche', 'bonone', 'linceo', 'mudava', 'sabino', 'datane', 'timici', 'dccclx', 'muraci', 'piassi', 'indico', 'ragadi', 'czarde', 'sopiva', 'istati', 'vadosi', 'valghe', 'condro', 'chetar', 'orerie', 'trasto', 'vorali', 'boriar', 'raspai', 'offeso', 'velese', 'sabati', 'invola', 'lisalo', 'grugai', 'sugose', 'segoni', 'chiudo', 'uzbeco', 'inerii', 'ancise', 'accadi', 'zenane', 'elleni', 'traino', 'trendy', 'petuli', 'mcdlxv', 'ansami', 'pireno', 'deaeri', 'crossa', 'perese', 'critto', 'sgallo', 'corozi', 'annusa', 'sorale', 'sballi', 'istigo', 'sagena', 'spanso', 'ruppia', 'pueblo', 'tidale', 'tancar', 'spente', 'adisse', 'sgobba', 'eresia', 'smoggi', 'graspo', 'passim', 'nocchi', 'meonie', 'esorna', 'brucee', 'pirano', 'pagaie', 'ridile', 'fresar', 'duerno', 'fanghi', 'biasse', 'stasar', 'spider', 'boiare', 'ovetto', 'telami', 'equato', 'altana', 'aiuoli', 'cinica', 'saluta', 'mioide', 'adirli', 'dimoio', 'ellere', 'cafisi', 'giudie', 'olezzi', 'cosche', 'vimati', 'nacqui', 'serrai', 'mcmxcv', 'stones', 'gliele', 'effugi', 'franar', 'plagio', 'pondai', 'comini', 'fonava', 'ugnolo', 'incida', 'penata', 'sgalla', 'fodera', 'bittar', 'urbani', 'estivo', 'amasse', 'pelone', 'soleva', 'vanghe', 'eoline', 'ciullo', 'yogurt', 'alarne', 'zirlio', 'ricena', 'acetii', 'potane', 'aiughe', 'bavara', 'veggio', 'vanghi', 'bubava', 'rollai', 'iugali', 'escisa', 'egizio', 'tafano', 'tenuto', 'fisato', 'ramini', 'fischi', 'purava', 'areavi', 'timoma', 'smanio', 'butano', 'smurai', 'decisi', 'sdento', 'ibibie', 'sigano', 'reseci', 'stigai', 'orobio', 'paciar', 'elmese', 'scinde', 'busone', 'esatti', 'anelai', 'erpico', 'musavi', 'techno', 'virale', 'guadai', 'cedine', 'taceva', 'novavo', 'monche', 'bergli', 'putido', 'mudale', 'vinoso', 'redamo', 'licose', 'resasi', 'calane', 'repete', 'stipai', 'mlxvii', 'lattea', 'grecar', 'odiste', 'delibi', 'cenemi', 'mitica', 'scorda', 'stemma', 'issaci', 'estivi', 'brigai', 'cuscus', 'ustola', 'tufino', 'fabici', 'quella', 'oblali', 'ariana', 'mlxiii', 'lapidi', 'snelle', 'menavo', 'ferino', 'aliesi', 'sagiti', 'rumalo', 'dotali', 'civaia', 'rilimi', 'monete', 'dataci', 'frutti', 'sedula', 'oreggi', 'disira', 'beaste', 'crampo', 'picion', 'triane', 'invito', 'recuso', 'crafen', 'rigolo', 'soviet', 'sbrami', 'relata', 'penali', 'silana', 'incero', 'cesoie', 'gheppi', 'livese', 'dinego', 'ungano', 'pianai', 'pneuma', 'pretto', 'becere', 'stozzo', 'todine', 'empita', 'bugino', 'sanalo', 'sonane', 'cotona', 'rufola', 'iodato', 'deride', 'ispano', 'merlai', 'usarci', 'telala', 'ciospo', 'infula', 'celaci', 'foravi', 'kippur', 'annega', 'rabido', 'renane', 'pierai', 'giocai', 'risene', 'mencio', 'moralo', 'mimate', 'stilai', 'irrite', 'armato', 'orlavi', 'elgona', 'dativi', 'frizza', 'spiala', 'fabbri', 'rimaci', 'ferivo', 'riviri', 'infimo', 'raditi', 'caduto', 'allena', 'sciola', 'minger', 'arponi', 'iodico', 'grocco', 'esculi', 'esumar', 'powers', 'epeire', 'limare', 'equalo', 'cabrei', 'evelle', 'tutela', 'zambre', 'impali', 'mimato', 'fibbie', 'riddar', 'figona', 'riurla', 'eietta', 'ninfeo', 'onrate', 'manoba', 'annoma', 'annoto', 'penuti', 'orbaco', 'casbah', 'cotoni', 'isiace', 'datali', 'smunte', 'campos', 'pironi', 'diktat', 'gricce', 'issate', 'acuivi', 'empori', 'zigava', 'sangue', 'zigami', 'pelane', 'cipree', 'emigra', 'purata', 'mister', 'statua', 'adonio', 'cmlxxv', 'sdisse', 'perina', 'ingoia', 'sdolgo', 'menadi', 'ciompi', 'petula', 'ragani', 'vocato', 'camato', 'cubale', 'beerei', 'incuse', 'coiame', 'sepidi', 'menare', 'goduta', 'rileva', 'larici', 'papaga', 'diliga', 'scardo', 'lamesi', 'peroni', 'sbolgi', 'spinti', 'dorato', 'oblavi', 'logica', 'piange', 'trench', 'coiare', 'usciva', 'gelati', 'faxaci', 'sabini', 'ledile', 'sopite', 'melata', 'mimare', 'oretta', 'toupie', 'disumi', 'scrofe', 'mellei', 'medium', 'gastri', 'irizzi', 'iulche', 'mmliii', 'aftoso', 'svenir', 'tempre', 'borino', 'rigata', 'scasar', 'coarta', 'mammea', 'pofane', 'orator', 'mcxcix', 'sterri', 'roboro', 'orette', 'saloli', 'bipede', 'aletta', 'miralo', 'sailor', 'putire', 'fatevi', 'dolman', 'curaro', 'peltro', 'disiar', 'bombir', 'lavati', 'tranar', 'divoro', 'colugo', 'alarla', 'rovosa', 'cuddia', 'focili', 'osella', 'ronzar', 'emunse', 'classo', 'maiala', 'illesi', 'vimate', 'pilosa', 'reggia', 'alarmi', 'sinoli', 'trinci', 'fenica', 'skippi', 'deputo', 'venute', 'asiane', 'morfeo', 'ragnai', 'edafon', 'bullom', 'ondoso', 'ridano', 'gasato', 'cacare', 'tiburi', 'disamo', 'zifidi', 'pagavi', 'deputi', 'fuhrer', 'orzavo', 'bufano', 'riurli', 'smagro', 'grondo', 'aurico', 'focani', 'tanava', 'abcasa', 'carota', 'filtra', 'menade', 'ccciii', 'torace', 'nobeli', 'sbadir', 'arsele', 'infili', 'invano', 'ideale', 'ernino', 'risino', 'puzzar', 'amasio', 'durite', 'tetano', 'sufita', 'morbio', 'depuri', 'brulle', 'tifano', 'arsami', 'esumai', 'godici', 'cenema', 'gestri', 'neocon', 'eccedi', 'lasico', 'crocea', 'odirli', 'adepto', 'piangi', 'begalo', 'sbrigo', 'focata', 'mostre', 'temeva', 'gorese', 'targai', 'mutile', 'molese', 'osagli', 'elogia', 'mearla', 'alluvi', 'aliena', 'svezza', 'carola', 'sterra', 'ornaci', 'gavina', 'dirgli', 'emerga', 'lucina', 'scanto', 'fimini', 'casosa', 'rasava', 'albano', 'frenar', 'fatale', 'tonano', 'harure', 'dorala', 'grulla', 'rutule', 'haussa', 'cavone', 'immoti', 'furaci', 'langua', 'borori', 'lesimi', 'telica', 'dccxcv', 'acquis', 'mimavi', 'basino', 'reciso', 'mirice', 'varchi', 'baleno', 'gonfie', 'sudori', 'raiate', 'retard', 'intima', 'brunch', 'eparco', 'galera', 'disane', 'ziesca', 'sbieca', 'snudai', 'sagomi', 'sminai', 'aperse', 'cofano', 'iodoso', 'sidami', 'sedime', 'avvisi', 'rigelo', 'escava', 'colale', 'scrino', 'osseto', 'pipane', 'sblusi', 'aerano', 'aringa', 'adergo', 'cibane', 'nocese', 'sbalzo', 'cubico', 'urbano', 'ritoso', 'scuote', 'ricoli', 'sfuria', 'remixi', 'ambagi', 'cerosi', 'rabbuî', 'lucido', 'eietti', 'povese', 'fecola', 'sdarci', 'binata', 'votate', 'mirino', 'curcas', 'aerino', 'benesi', 'visare', 'hazard', 'addure', 'fecali', 'ofiasi', 'andrei', 'loculo', 'sgabbi', 'badane', 'schini', 'junior', 'turati', 'spenni', 'svezzo', 'figate', 'sfrano', 'esecra', 'rovosi', 'latiro', 'senese', 'escoli', 'nepidi', 'alcani', 'hentai', 'rivari', 'alzale', 'nonari', 'idresi', 'sfiata', 'venane', 'bigoli', 'gemimi', 'enante', 'divago', 'rosari', 'allevi', 'malizi', 'pieesi', 'sborro', 'agosto', 'bigama', 'krypto', 'filaci', 'rotava', 'lastra', 'cecino', 'scelto', 'scuffi', 'prurir', 'sedeva', 'orciai', 'review', 'denega', 'sibila', 'magone', 'agirti', 'lappai', 'teglie', 'mccxxv', 'sdraie', 'boomer', 'pacati', 'provai', 'crespi', 'nosema', 'guigge', 'accise', 'issino', 'pipaio', 'imbona', 'zoomar', 'spella', 'rigide', 'libido', 'spreme', 'scisti', 'rotata', 'gamete', 'lulesi', 'tesivi', 'tritai', 'mixali', 'glielo', 'purala', 'adesso', 'sforzo', 'urlata', 'ruotai', 'ossoso', 'pisana', 'puccia', 'avrete', 'alarsi', 'truzze', 'escido', 'ridavi', 'smosse', 'tócchi', 'rumare', 'tossii', 'domalo', 'piarli', 'luasso', 'orlava', 'batave', 'obrizi', 'puggia', 'isarco', 'osarle', 'patine', 'sducai', 'ripete', 'zelese', 'ranchi', 'eliaca', 'sbasii', 'imbavo', 'adelfi', 'alcidi', 'fregno', 'iatine', 'covati', 'lignea', 'fatene', 'odiate', 'remixa', 'rasosi', 'tacche', 'ordita', 'svendo', 'elmato', 'peccai', 'riunti', 'skunks', 'issala', 'pacare', 'svento', 'tackle', 'drogar', 'spalco', 'teisti', 'rinego', 'ertaci', 'bovide', 'asceti', 'mainai', 'fasami', 'miopia', 'scevre', 'genita', 'kippah', 'averse', 'liveri', 'andate', 'melare', 'fiondi', 'mirano', 'carnei', 'titese', 'subbia', 'alarci', 'sfinii', 'vitone', 'tirati', 'asepsi', 'fendei', 'retate', 'sciuro', 'scroci', 'scoria', 'spello', 'vortex', 'minali', 'ertavi', 'veruno', 'ordine', 'melina', 'tutane', 'acacia', 'nitrar', 'ceralo', 'spicci', 'ciucci', 'durate', 'grucce', 'pagine', 'stormo', 'tenete', 'sfridi', 'frinii', 'feijoe', 'verdii', 'smetta', 'invado', 'gliomi', 'spazzo', 'chieda', 'sitali', 'navigo', 'surale', 'zonala', 'bipara', 'resevi', 'tubate', 'strofi', 'obduri', 'rigole', 'idropi', 'dovevo', 'gemici', 'avervi', 'cafire', 'ottoni', 'gavone', 'emulge', 'stirai', 'avvedo', 'alitar', 'nepide', 'rivali', 'pedica', 'tosala', 'sbaulo', 'sclero', 'coline', 'pamela', 'crosci', 'sterna', 'sodavi', 'datato', 'incita', 'involo', 'giunco', 'aitalo', 'rumore', 'arenti', 'sdirei', 'stolsi', 'moenia', 'licita', 'titano', 'aviane', 'sudale', 'ureide', 'zemesi', 'tesoli', 'correr', 'dcclvi', 'avemmo', 'notula', 'marcii', 'ledevi', 'volati', 'invaso', 'dimero', 'razzio', 'scappo', 'sgarai', 'trosce', 'filami', 'inebri', 'potavi', 'sicure', 'cortes', 'borati', 'elogio', 'system', 'tacine', 'tesino', 'agirmi', 'putalo', 'follai', 'mixavi', 'risini', 'forbii', 'bavose', 'brahui', 'bevano', 'stoppi', 'sfolli', 'agiato', 'tristo', 'trogli', 'sfolta', 'flussa', 'double', 'mcviii', 'cumane', 'oreade', 'lingue', 'olmaia', 'garbai', 'natava', 'donavo', 'evirar', 'mdcliv', 'amoreo', 'colora', 'renica', 'lutalo', 'aziono', 'gazavi', 'flirts', 'guappo', 'renava', 'falica', 'oziaco', 'chefir', 'salino', 'datasi', 'virino', 'deridi', 'fusoli', 'sagina', 'beffai', 'antica', 'lanata', 'unnica', 'trappo', 'ceruli', 'tonato', 'esopee', 'vivici', 'vanivo', 'glisso', 'imbaso', 'insila', 'gaette', 'appruo', 'blobba', 'scarti', 'screma', 'mmxcii', 'cafile', 'fannie', 'odiati', 'aveste', 'basare', 'rotolo', 'zigolo', 'confar', 'cavali', 'pokomi', 'vilaci', 'scorga', 'plance', 'notori', 'cecene', 'appone', 'bacaie', 'alarti', 'vicini', 'pasque', 'inscia', 'smallo', 'cassar', 'aponie', 'inalar', 'dccxvi', 'barare', 'cosine', 'sortir', 'cutina', 'fatavo', 'lisina', 'dasoti', 'librai', 'netino', 'aderga', 'lamino', 'erbosa', 'volato', 'incoli', 'svacco', 'lesine', 'clamar', 'frullo', 'solare', 'asside', 'gialli', 'ccxvii', 'darete', 'insedi', 'begaci', 'ialine', 'federa', 'rodica', 'scende', 'sverze', 'corteo', 'grasso', 'nevaie', 'ladaka', 'mammai', 'natile', 'ninnar', 'agialo', 'inumai', 'frappo', 'alisme', 'sorali', 'doluta', 'borrai', 'gualdo', 'cerino', 'sitiva', 'gelato', 'impepo', 'vassoi', 'chiodi', 'anitra', 'tappar', 'sdetta', 'stipsi', 'escise', 'uscivo', 'oscuri', 'acolie', 'slunga', 'tesasi', 'dedico', 'domain', 'ciucco', 'acrani', 'gordio', 'bagher', 'appeni', 'nasati', 'camune', 'odirti', 'lurida', 'glutei', 'invadi', 'inculi', 'vinile', 'allaga', 'unizza', 'sgarbo', 'sgabei', 'ripivi', 'iodali', 'inulto', 'onfali', 'semini', 'roditi', 'asseti', 'aratro', 'evitai', 'urtano', 'pierei', 'kololo', 'acarpe', 'abrasi', 'iodati', 'natevi', 'armavo', 'vanavo', 'esiguo', 'rushes', 'fletta', 'fluata', 'minata', 'svampa', 'salare', 'calavo', 'mattar', 'pogava', 'parole', 'nudano', 'pomato', 'afilla', 'iodare', 'bombai', 'crotti', 'abitui', 'navoni', 'pelose', 'rollio', 'mostro', 'piango', 'urtavi', 'storco', 'falcio', 'galere', 'biacca', 'fegato', 'sputar', 'cecare', 'dindon', 'fucati', 'scanno', 'fruire', 'carube', 'durino', 'piloti', 'piccar', 'imbaca', 'cribra', 'mafici', 'padani', 'vengia', 'stizzi', 'squali', 'sfalci', 'effusi', 'calato', 'romito', 'aventi', 'malari', 'untare', 'waziri', 'sdogar', 'sgelai', 'volano', 'talled', 'iucche', 'mignon', 'liscia', 'aitali', 'toschi', 'sciure', 'semola', 'niceni', 'sfarai', 'catena', 'solito', 'manosa', 'orrida', 'locchi', 'spiani', 'scaldi', 'lauree', 'pavesa', 'joypad', 'lovers', 'gongri', 'effuse', 'ferule', 'buiori', 'arcate', 'venano', 'pomate', 'coiari', 'andavi', 'nuocer', 'racchi', 'recami', 'scolar', 'pepino', 'cantar', 'guitte', 'rotalo', 'accani', 'riresi', 'firmar', 'invelo', 'bueggi', 'nodulo', 'odirmi', 'dogate', 'murato', 'funghi', 'codali', 'mappai', 'strage', 'tesone', 'bilici', 'sberna', 'mucica', 'cacina', 'pirica', 'bevimi', 'arassi', 'nescio', 'rodevi', 'rabule', 'spegni', 'zarose', 'occaso', 'pepose', 'ormati', 'sedalo', 'essuda', 'carnee', 'urista', 'svigno', 'roravi', 'patena', 'sporse', 'selfar', 'fatate', 'corata', 'capalo', 'unisci', 'frodar', 'smania', 'barrir', 'sorore', 'aspata', 'cadine', 'rosolo', 'zigare', 'ombrio', 'chance', 'ordino', 'gluten', 'cuciva', 'agenza', 'dcxcix', 'stromi', 'salale', 'rauche', 'fading', 'leiese', 'azygos', 'coffee', 'dispor', 'durati', 'supine', 'basalo', 'trioni', 'orlino', 'imbasi', 'infidi', 'piombi', 'atonie', 'pulegi', 'ricusa', 'nitida', 'murate', 'riluca', 'lanosi', 'penare', 'sbanca', 'cmxcvi', 'aurica', 'lardai', 'redati', 'mccxxx', 'mimami', 'mirrar', 'ognuno', 'rognar', 'sapota', 'attaci', 'minoro', 'linteo', 'devano', 'pollar', 'ruspar', 'malare', 'disani', 'valuti', 'pepate', 'rumato', 'domami', 'airone', 'manide', 'dioici', 'baroni', 'ecoica', 'scollo', 'amputa', 'vilato', 'ormaie', 'grinta', 'sugale', 'spelei', 'manneo', 'kappao', 'eufoni', 'pillai', 'velali', 'sanavo', 'pagaci', 'raider', 'dcxciv', 'cdlvii', 'torose', 'comiti', 'letami', 'mdccli', 'rasura', 'sedala', 'stenta', 'encore', 'lumalo', 'quinti', 'stolti', 'forese', 'venivo', 'prurii', 'googla', 'tepali', 'damati', 'chiosi', 'impeti', 'oleari', 'melali', 'fiatai', 'titino', 'tratto', 'triodo', 'istiga', 'infero', 'action', 'spilla', 'lutino', 'algide', 'tradir', 'urgiti', 'scommi', 'custom', 'esopei', 'trombo', 'cotina', 'vagale', 'rifori', 'anoica', 'pirene', 'monito', 'pesane', 'cilici', 'valevi', 'attane', 'famate', 'vacala', 'fenato', 'pareva', 'zarina', 'serque', 'zambra', 'etnico', 'arbuto', 'cumoli', 'ospito', 'focaie', 'patico', 'zelato', 'pesage', 'avatar', 'attica', 'resoti', 'bevute', 'segavo', 'sterpe', 'panate', 'eruche', 'cmxliv', 'genero', 'rivada', 'driadi', 'rizoma', 'unaria', 'oscino', 'pedini', 'animus', 'cembro', 'saetta', 'rialto', 'bucano', 'sterpo', 'dopati', 'adorni', 'cerche', 'daorsi', 'agency', 'citate', 'sgassi', 'guaiva', 'muridi', 'gelivo', 'adorne', 'faldai', 'ponila', 'googlo', 'abbono', 'casine', 'paschi', 'dative', 'vittor', 'flysch', 'attore', 'ritura', 'mearsi', 'arammo', 'turnar', 'spiace', 'portai', 'puncio', 'bimbon', 'protei', 'nogate', 'oliaci', 'datele', 'gitala', 'lambii', 'ammore', 'pesati', 'etnica', 'flotta', 'postar', 'virati', 'alzaie', 'leppai', 'spanne', 'melton', 'sfibro', 'goleai', 'vocivi', 'langur', 'dcxxii', 'orzalo', 'granfe', 'lisano', 'sinica', 'biassi', 'canaia', 'squeri', 'modani', 'druida', 'starna', 'bovili', 'vampar', 'comare', 'topazi', 'sapore', 'colite', 'delire', 'alobia', 'gialua', 'compio', 'cmxxiv', 'claxon', 'piarlo', 'natole', 'volava', 'solami', 'dicevi', 'perivo', 'aziaci', 'inerir', 'vagato', 'pirena', 'stress', 'aeravi', 'ridono', 'esorto', 'vogane', 'coirmi', 'zitone', 'fienai', 'plebei', 'raseti', 'patrio', 'esatto', 'sucidi', 'fateli', 'amenze', 'forgia', 'bibulo', 'cerulo', 'fusion', 'prozio', 'urlare', 'statui', 'spiovo', 'seppur', 'flyers', 'domala', 'ustoso', 'sanali', 'genino', 'apache', 'zietto', 'risine', 'timbre', 'isolar', 'magate', 'allume', 'redivo', 'coppia', 'eptani', 'sdosso', 'ancude', 'ranfie', 'flambo', 'sonano', 'piaghi', 'nubilo', 'attuta', 'dongle', 'rigola', 'vilare', 'spuria', 'ridine', 'remami', 'premer', 'giucco', 'infuni', 'remano', 'sitare', 'securi', 'floreo', 'puravo', 'tinger', 'banani', 'afasie', 'navale', 'bareni', 'stesso', 'divana', 'imbolo', 'acormi', 'strani', 'degnar', 'trieri', 'paride', 'palagi', 'franco', 'brosce', 'frusta', 'chiusi', 'svizia', 'tranai', 'pomere', 'infino', 'tutolo', 'osmeri', 'amebee', 'nicesi', 'delima', 'tubero', 'rifusa', 'vescia', 'ostata', 'frangi', 'obdura', 'escono', 'iastia', 'spersi', 'spolpa', 'coluri', 'itrana', 'fusemi', 'pilalo', 'cedola', 'gretto', 'distar', 'abituo', 'bunker', 'mussar', 'aberro', 'ambiar', 'argive', 'adelfa', 'danese', 'gitasi', 'abrasa', 'murena', 'volpar', 'beacon', 'getico', 'lassai', 'venina', 'smunse', 'vaceli', 'ghigne', 'blobbi', 'spadai', 'panalo', 'bastii', 'iugale', 'legate', 'duraci', 'oliala', 'murene', 'usurpo', 'cecava', 'ottino', 'ridilo', 'sepide', 'mdcccl', 'ceraio', 'addomi', 'spiana', 'legger', 'modero', 'grugni', 'bavare', 'temili', 'maraca', 'domati', 'novena', 'rumali', 'rigati', 'desali', 'diurne', 'desuma', 'spanti', 'smungo', 'visala', 'clamai', 'stello', 'pepata', 'rimate', 'durale', 'arsiva', 'piagar', 'spanio', 'onorai', 'vaccai', 'fusero', 'foraci', 'sedali', 'cantra', 'plasmi', 'grullo', 'fruita', 'iogurt', 'essudi', 'sfarmi', 'templo', 'lodano', 'gomito', 'decoro', 'smorto', 'senato', 'erbali', 'freghe', 'natoti', 'signor', 'acroma', 'calena', 'adduce', 'ostava', 'ciampe', 'citini', 'itrano', 'avvisa', 'capiva', 'separi', 'bemine', 'clxiii', 'puggio', 'sembri', 'sicuri', 'cetine', 'vogavo', 'sbando', 'bircia', 'oirati', 'visito', 'beauty', 'morire', 'sferro', 'lagopi', 'forvio', 'semiti', 'lisine', 'bucate', 'tumida', 'sgusta', 'tubere', 'secano', 'eretar', 'gessei', 'tubuli', 'eluati', 'ognora', 'scerse', 'dispai', 'endici', 'scarpa', 'transi', 'aurose', 'carusi', 'fedeli', 'nemico', 'ellene', 'culice', 'sverna', 'rodala', 'godilo', 'proevo', 'affisi', 'radere', 'piaggi', 'sodane', 'pirati', 'dolali', 'trombi', 'rocker', 'cattar', 'canove', 'deluse', 'cruise', 'barbar', 'elenco', 'tresco', 'lumino', 'scorzi', 'bovese', 'orcine', 'bigolo', 'espiro', 'pessie', 'gabala', 'ondato', 'gemmai', 'marani', 'punito', 'susini', 'sudore', 'acuiti', 'sviami', 'piscio', 'gheghe', 'bluffo', 'sciura', 'trivie', 'fruite', 'melica', 'brucai', 'bronce', 'dumosa', 'scudai', 'risoda', 'eddica', 'geldra', 'baravo', 'impure', 'rugaci', 'classe', 'rigido', 'lesivo', 'donali', 'ramare', 'ertiti', 'etiope', 'ostami', 'ossuti', 'ordina', 'spiona', 'coseni', 'oleata', 'papula', 'novizi', 'ridora', 'restio', 'birdie', 'bistri', 'cubebe', 'cucili', 'trinai', 'dogrib', 'sucido', 'cibati', 'vagire', 'figlie', 'iessee', 'ulcera', 'ottave', 'risosi', 'pianta', 'mammon', 'palmer', 'furane', 'logore', 'suonar', 'gauche', 'rufiya', 'sampan', 'gallai', 'filari', 'pesala', 'datoti', 'severo', 'calare', 'blenda', 'bibite', 'rutile', 'sitavi', 'congas', 'muover', 'barrar', 'scroti', 'camite', 'capote', 'carnea', 'cinici', 'orlato', 'socchi', 'tesovi', 'smover', 'vilivi', 'casare', 'chatta', 'tufoso', 'clizia', 'buttai', 'stasai', 'boccio', 'ponere', 'acquai', 'empivi', 'aurosi', 'avelto', 'striai', 'vivida', 'mdciii', 'urango', 'onrale', 'nebula', 'mponda', 'infoca', 'capivi', 'vicoli', 'solata', 'echidi', 'mutulo', 'freezo', 'dopalo', 'tatami', 'cottoi', 'stiano', 'sonata', 'rugare', 'lamina', 'straba', 'gazale', 'esista', 'retici', 'rogane', 'cataro', 'fusisi', 'pedoti', 'tenone', 'moduli', 'pugnar', 'tirami', 'spugna', 'gabalo', 'calidi', 'leggio', 'primer', 'lische', 'reggae', 'giudea', 'spinga', 'griffa', 'curvai', 'raschi', 'osculi', 'reboot', 'morala', 'rosati', 'casate', 'mimane', 'vedere', 'pontar', 'tappai', 'cedula', 'silfio', 'rodere', 'arasti', 'igniti', 'sfinge', 'rirido', 'gasavi', 'penate', 'sacche', 'mestar', 'pilota', 'chalet', 'datolo', 'tuberi', 'nogami', 'zittar', 'destai', 'vivide', 'divisi', 'pasqua', 'covato', 'riposo', 'ondosa', 'cortei', 'parodi', 'demoni', 'puralo', 'basava', 'gamica', 'emulgi', 'cmxxxi', 'assoni', 'ammina', 'bossea', 'ambiva', 'paffia', 'cesoia', 'uffete', 'avvelo', 'aponia', 'bearli', 'saioni', 'rimane', 'tignar', 'amorfi', 'fretta', 'verdir', 'sevizi', 'farcir', 'rotone', 'pecilo', 'temici', 'tumolo', 'udimmo', 'clxxix', 'redali', 'thamud', 'famata', 'sviaci', 'fugalo', 'issane', 'povere', 'amarro', 'addane', 'ugelli', 'pagaia', 'cimate', 'irrise', 'rignar', 'parami', 'ramava', 'spessi', 'allego', 'solivo', 'anfese', 'colina', 'export', 'serafo', 'delusi', 'vicari', 'votiva', 'stollo', 'laurea', 'ditone', 'obriza', 'adugni', 'radile', 'dolina', 'tabula', 'ugnano', 'adisce', 'tirare', 'fiochi', 'gliare', 'furava', 'udiste', 'tritar', 'sfarlo', 'sdanti', 'scotti', 'dosalo', 'pipalo', 'kiwani', 'teroni', 'cecalo', 'miravi', 'conide', 'coiote', 'indusi', 'sonalo', 'prozia', 'dilefi', 'emetti', 'molare', 'usuari', 'olmeca', 'assina', 'albina', 'grette', 'unarii', 'argano', 'denari', 'cmliii', 'seiuga', 'comics', 'stessi', 'datile', 'datavo', 'elisia', 'emulai', 'rimini', 'magnai', 'olfavo', 'optano', 'ciocia', 'ulimii', 'laurei', 'coirla', 'olisci', 'fileni', 'acromi', 'ovovia', 'sfitto', 'lezzai', 'augnar', 'tanano', 'chiama', 'dcclxv', 'bagobo', 'tastai', 'droghi', 'putite', 'soluti', 'navone', 'cesure', 'ernesi', 'oriate', 'abasie', 'irpina', 'spillo', 'badate', 'facile', 'vadano', 'obroga', 'ifugao', 'anosie', 'unione', 'limosi', 'auxine', 'filati', 'seitan', 'esedre', 'atteli', 'gremii', 'spacca', 'famavi', 'evacua', 'meruli', 'razzie', 'inetto', 'ironie', 'bmovie', 'achire', 'ugnali', 'urlate', 'mirtea', 'mixavo', 'rilava', 'rapale', 'ulimir', 'rotati', 'attavo', 'ancata', 'agitai', 'vocive', 'iaculo', 'zopolo', 'rupine', 'uveite', 'usasti', 'dopino', 'sperdi', 'degnai', 'quiche', 'soddur', 'nestar', 'groups', 'ostano', 'vacche', 'faglia', 'retori', 'zigoli', 'nastra', 'spesar', 'veccia', 'appari', 'mascon', 'cafiri', 'eterei', 'gufino', 'sleghi', 'renose', 'levesi', 'annose', 'oppiai', 'galata', 'annego', 'sestai', 'cdxxxv', 'monadi', 'toccar', 'zigana', 'blocca', 'ondala', 'aliali', 'ironia', 'saluto', 'ridoro', 'dogare', 'romici', 'fumosa', 'mehari', 'fugali', 'rifila', 'tocche', 'vitali', 'copino', 'elvesi', 'rapivo', 'calami', 'notino', 'olente', 'agiare', 'nerica', 'fusaie', 'vilami', 'sapete', 'astina', 'mutane', 'tordai', 'fiacco', 'parser', 'revoca', 'sventi', 'russai', 'dimoia', 'lecite', 'allogo', 'sducar', 'vigano', 'dicalo', 'equala', 'monase', 'jesini', 'taiyal', 'oziale', 'marona', 'ispiro', 'tamari', 'orfico', 'lupaie', 'resele', 'mirale', 'olirle', 'biseco', 'cumani', 'magala', 'cerazi', 'rigava', 'spanar', 'estini', 'remoli', 'sagnai', 'casara', 'sabbie', 'oragli', 'fluiva', 'outfit', 'alunna', 'nassia', 'raduni', 'caglia', 'settai', 'denuda', 'rorala', 'aracea', 'dosane', 'esalta', 'segami', 'affiso', 'eolici', 'deposi', 'cosare', 'magare', 'balivo', 'scalze', 'finger', 'tirali', 'saputa', 'safena', 'anidre', "trent'", 'stacci', 'sabato', 'fiossi', 'adugna', 'dubbia', 'retava', 'libala', 'allure', 'urlaci', 'ringhi', 'ilvato', 'nasuta', 'pipine', 'flaggo', 'coiaie', 'arreso', 'arcano', 'rasasi', 'goccio', 'fidano', 'carpar', 'gialuo', 'pioidi', 'nastro', 'avviar', 'rimeno', 'immeli', 'rovose', 'idrato', 'gonade', 'tosoni', 'tifate', 'malgar', 'querce', 'sitito', 'ruvida', 'dottor', 'pialli', 'appaia', 'derime', 'pipari', 'disami', 'amoree', 'ceceni', 'adiamo', 'adirne', 'lavane', 'sfossi', 'rubina', 'vinata', 'strame', 'ibalaa', 'tipono', 'stonio', 'rotaci', 'gonidi', 'corneo', 'sciama', 'teleri', 'sparar', 'donane', 'judoki', 'rimala', 'colono', 'bricia', 'oblava', 'fedele', 'sancta', 'difeso', 'astori', 'scrima', 'annoso', 'ordire', 'sverzo', 'zitoni', 'scorti', 'recilo', 'acromo', 'acerbi', 'mimalo', 'risvio', 'detrai', 'amiamo', 'ovatto', 'vostro', 'esecro', 'acetai', 'erbita', 'cicadi', 'scarne', 'imprui', 'pioppi', 'globes', 'pawnee', 'logora', 'ipogee', 'egizie', 'fasala', 'putrii', 'gregne', 'troika', 'aprano', 'arelle', 'segoli', 'libane', 'pupari', 'cassio', 'aurate', 'nougat', 'vacato', 'risaie', 'barami', 'opleti', 'serper', 'tupelo', 'fresco', 'roseti', 'borire', 'rabbia', 'bevola', 'malese', 'boston', 'frinir', 'bulava', 'biacco', 'vilati', 'spazio', 'scazza', 'sitaci', 'udirlo', 'melano', 'ternai', 'amanza', 'diredi', 'copuli', 'infuna', 'mcclii', 'latini', 'oeuvre', 'uccisa', 'iessea', 'sfamar', 'arcala', 'faleci', 'ommisi', 'flosci', 'vicolo', 'cedici', 'bramma', 'scerpi', 'mxxvii', 'vasaio', 'spazzi', 'letica', 'cccxiv', 'scolai', 'spicco', 'rideau', 'premio', 'radete', 'ditteo', 'ancora', 'raiami', 'atenei', 'polire', 'scinti', 'epigei', 'salumi', 'terona', 'sfenda', 'gratta', 'pelure', 'malava', 'iatina', 'attila', 'coatto', 'esperi', 'ortosi', 'ittiti', 'avvera', 'zonari', 'desume', 'assoda', 'facola', 'forche', 'ondula', 'lobari', 'estrua', 'segane', 'amerai', 'risali', 'viario', 'vidimo', 'snervi', 'inviso', 'colera', 'arsemi', 'tosolo', 'forato', 'recipe', 'gelide', 'mosani', 'linone', 'nipplo', 'urgono', 'recevo', 'spasma', 'lapito', 'biglie', 'afasia', 'deciso', 'acquei', 'svolgi', 'sbrodi', 'girata', 'spelda', 'basivo', 'ridere', 'meloni', 'tantra', 'scusai', 'mixoma', 'cartai', 'eschia', 'ritrar', 'codiar', 'vacuum', 'fraine', 'iettai', 'boschi', 'travel', 'tanfar', 'petits', 'stufai', 'arsivo', 'bavere', 'sfrisi', 'zamuco', 'culini', 'sofore', 'pedalo', 'aborra', 'flusso', 'cevesi', 'vivevo', 'mcmxii', 'famaci', 'ondulo', 'ladako', 'esatta', 'tapiro', 'etnici', 'cupida', 'pavori', 'equami', 'gremir', 'cigoli', 'acervo', 'riloda', 'curato', 'grolla', 'skippa', 'pittar', 'olmaie', 'adorar', 'userei', 'consti', 'mcxlvi', 'aucuba', 'tanfai', 'cogoli', 'corale', 'coarto', 'emette', 'mitile', 'pesole', 'annodo', 'novera', 'aviari', 'begums', 'drogai', 'natosi', 'oppure', 'ambula', 'pulesi', 'rigavi', 'bicone', 'armati', 'salite', 'muleta', 'indove', 'scorta', 'affusa', 'podezi', 'demica', 'mirini', 'mcxvii', 'lamavo', 'cedile', 'aperto', 'civile', 'gabbri', 'latrie', 'burlar', 'temere', 'falere', 'tufale', 'adunai', 'ricuci', 'timers', 'arcavi', 'scanso', 'ririse', 'jabots', 'cenali', 'mdcclx', 'rinoto', 'lupina', 'biseca', 'mining', 'ciurmi', 'ertemi', 'efedra', 'pesali', 'spanni', 'saione', 'odorar', 'riceno', 'diarco', 'rotate', 'bulavo', 'videro', 'mellee', 'cambia', 'cmxlvi', 'sdirle', 'fragno', 'induce', 'scrive', 'immela', 'filosa', 'razzai', 'spetta', 'aziaca', 'cimavi', 'sparli', 'fonavo', 'zombai', 'sdirai', 'alzate', 'gitemi', 'iolite', 'bieche', 'muggii', 'bagobi', 'equini', 'medina', 'pelano', 'fattor', 'riceva', 'ligiar', 'grongo', 'cadmia', 'effusa', 'output', 'assili', 'verace', 'badati', 'guaymi', 'sganni', 'cubava', 'minino', 'sugavo', 'palesi', 'ridici', 'murami', 'bulale', 'golate', 'ambino', 'seriar', 'morano', 'baltei', 'katana', 'aiuolo', 'pesola', 'herero', 'ciacco', 'temoli', 'aulire', 'stoppe', 'spiove', 'spansi', 'ovvero', 'spremo', 'soluta', 'nitide', 'melato', 'adotti', 'syngas', 'issavi', 'qenita', 'tedino', 'ammise', 'olorar', 'dilata', 'chiavo', 'tarate', 'snodar', 'alberi', 'asiani', 'master', 'untale', 'alaude', 'ritese', 'optava', 'bagnar', 'nebbia', 'yamana', 'sanato', 'risola', 'istero', 'gibaii', 'vacuar', 'consta', 'attiro', 'spandi', 'ortesi', 'giteci', 'manose', 'cacata', 'dolcia', 'atleti', 'velati', 'tondei', 'pigole', 'newton', 'tinaia', 'posola', 'appaio', 'vibrai', 'potete', 'oleato', 'eluiti', 'rolino', 'ischio', 'pomosi', 'aitato', 'viziar', 'segose', 'vessar', 'datata', 'fusate', 'veprai', 'vigere', 'saltar', 'ormava', 'garzai', 'penici', 'gitole', 'soduce', 'scovai', 'arrivi', 'accedo', 'faggio', 'gabina', 'poesia', 'cesani', 'cennar', 'smirai', 'cinghi', 'danzai', 'attare', 'segaci', 'arnese', 'pepavo', 'toccai', 'cieche', 'dopano', 'lepadi', 'libale', 'scrivi', 'scopre', 'ricusi', 'colpar', 'luridi', 'savane', 'manosi', 'damaci', 'pogata', 'storse', 'sdarei', 'nocini', 'emendi', 'aprica', 'cdxcii', 'dargua', 'ombria', 'colpai', 'avelta', 'larghe', 'gemico', 'abbica', 'arroge', 'camese', 'pudici', 'diacci', 'famati', 'stondi', 'tesali', 'tomava', 'ghinea', 'popola', 'addogo', 'biondo', 'esalar', 'sfalli', 'gudena', 'vodese', 'mozzar', 'burnus', 'drizza', 'dotane', 'decapo', 'tufate', 'lasica', 'gufavo', 'vicane', 'funami', 'radice', 'scorro', 'scabro', 'anteli', 'spelai', 'aptera', 'rambla', 'arnina', 'letamo', 'ristar', 'arussi', 'rifece', 'reflex', 'impubi', 'sudalo', 'gelosi', 'binalo', 'dosale', 'risisi', 'mimica', 'maroni', 'uffici', 'fiammi', 'giunse', 'inputo', 'aiduco', 'barica', 'sgommo', 'tracce', 'tesero', 'ansane', 'mousse', 'dotare', 'tusani', 'agogna', 'cargos', 'bataia', 'biparo', 'aeralo', 'topata', 'ioidea', 'natovi', 'bolini', 'pistia', 'ararti', 'forami', 'tepees', 'ligino', 'fusore', 'sapini', 'iettar', 'temila', 'decana', 'serbar', 'lordai', 'untemi', 'templi', 'zanche', 'recare', 'mollii', 'ararvi', 'vuelta', 'scippi', 'bridge', 'focale', 'pagala', 'limini', 'mannee', 'limnea', 'davano', 'gemino', 'dimmer', 'mmviii', 'ispana', 'caldai', 'sbarbo', 'nicena', 'cavito', 'pisola', 'pipala', 'scoiar', 'brovar', 'fregne', 'inulta', 'stanti', 'evocar', 'accaso', 'parere', 'acerbe', 'danaro', 'depone', 'oppilo', 'remico', 'zollar', 'rorata', 'filata', 'urtane', 'baggei', 'sfagli', 'secavi', 'gaschi', 'spenso', 'addava', 'aramei', 'diteci', 'piaffo', 'oidica', 'cibami', 'erudii', 'disino', 'bevilo', 'alucce', 'navajo', 'treagi', 'ararle', 'ornata', 'celato', 'orbata', 'trombe', 'brutta', 'temidi', 'kashan', 'texane', 'aerane', 'nudali', 'averne', 'glicol', 'tironi', 'somale', 'gancio', 'spioni', 'fuseti', 'dolato', 'scalpo', 'cmxxix', 'fognai', 'mobili', 'notare', 'uncina', 'grinza', 'meanti', 'mosche', 'casari', 'senhal', 'nausei', 'marini', 'aitata', 'ficcar', 'strabo', 'vaporo', 'osarla', 'mafico', 'posate', 'rudesi', 'volita', 'osarci', 'cavesi', 'kiefer', 'grigia', 'demici', 'areavo', 'natino', 'temevo', 'tacqui', 'rasele', 'volgar', 'fonder', 'folici', 'zuppai', 'orbito', 'barbai', 'sprova', 'becher', 'omiana', 'kolola', 'agiali', 'ostali', 'malawi', 'lenivo', 'vimale', 'edotta', 'opiani', 'pigmei', 'lebeti', 'labbia', 'putidi', 'sanata', 'ricevi', 'damare', 'scelse', 'tenere', 'killer', 'venava', 'olmeto', 'fidati', 'lavori', 'spagne', 'nogano', 'fidato', 'camati', 'riarma', "quand'", 'moschi', 'dolate', 'agiale', 'virali', 'ossese', 'fabica', 'abbati', 'sapona', 'asciai', 'abripi', 'pilane', 'papini', 'andine', 'biutai', 'valiti', 'sfogna', 'parevo', 'frinio', 'onusti', 'sblusa', 'mlxxxv', 'rapiti', 'bagoli', 'walzer', 'riunii', 'boriti', 'risati', 'addale', 'biloba', 'silver', 'gnocco', 'sorbar', 'accusa', 'compra', 'sodare', 'bovara', 'dccclv', 'ricima', 'derivi', 'segalo', 'mirtei', 'vocane', 'picidi', 'cumeni', 'bitumi', 'oleoso', 'edipeo', 'fuochi', 'notule', 'sepali', 'metope', 'valore', 'ritmar', 'dentar', 'invida', 'ircina', 'verine', 'fibbia', 'clango', 'dorica', 'lussai', 'prugno', 'murini', 'empide', 'emione', 'korana', 'biotti', 'scrini', 'cdxxvi', 'gioghi', 'salane', 'immane', 'previo', 'etesie', 'rapata', 'restii', 'algica', 'mimati', 'novate', 'tonemi', 'rotore', 'errate', 'licore', 'lutavo', 'mansio', 'scanna', 'entasi', 'giorno', 'frisse', 'benese', 'pulita', 'spoeta', 'parute', 'vimano', 'sbarba', 'relati', 'banche', 'trappi', 'oblite', 'voleri', 'picano', 'tesala', 'equano', 'bruito', 'bravar', 'orbare', 'oblast', 'ripidi', 'sdette', 'vagano', 'angora', 'estone', 'pupone', 'infule', 'rigode', 'burchi', 'lamami', 'aratri', 'bucane', 'mitico', 'bufale', 'onesta', 'avvede', 'sitale', 'sversa', 'natano', 'clxxxi', 'lattei', 'patula', 'ranfia', 'resole', 'sapute', 'rifugi', 'ovetti', 'tuelli', 'riluce', 'pelago', 'saggie', 'magami', 'omacci', 'kicker', 'rigoni', 'issavo', 'accodo', 'equale', 'antela', 'anatra', 'allevî', 'nevone', 'ornali', 'colona', 'beccai', 'dimidi', 'usaggi', 'rumano', 'strati', 'fottii', 'alitai', 'svolge', 'menomi', 'redire', 'lavora', 'patiti', 'caviti', 'chiodo', 'tempus', 'ngondi', 'risasi', 'gufami', 'codice', 'sedule', 'croata', 'ircana', 'priono', 'osarmi', 'cagate', 'tsamai', 'gabbai', 'risemi', 'salalo', 'fogata', 'merche', 'smalti', 'solghi', 'deista', 'tiorbe', 'dianti', 'pussai', 'sicule', 'truffo', 'cdxxix', 'comune', 'cicale', 'cicala', 'pianse', 'molato', 'stupri', 'cooler', 'fonavi', 'sorghi', 'espone', 'sgozzo', 'optami', 'conine', 'ideate', 'larvai', 'intora', 'irizzo', 'guizzi', 'viaria', 'smozzo', 'begate', 'uzzesi', 'incuoi', 'nudalo', 'crenno', 'sbroda', 'fervei', 'cevane', 'esopea', 'aziona', 'mixato', 'afrose', 'picata', 'funero', 'mcdxiv', 'notami', 'ardano', 'didime', 'ciecar', 'membra', 'assolo', 'agnini', 'tartan', 'urgile', 'diosio', 'dlxxii', 'velada', 'datelo', 'resavi', 'venavi', 'miglio', 'taniti', 'ribeca', 'frolli', 'conflo', 'smodai', 'biline', 'smangi', 'olirlo', 'arerai', 'badato', 'pannai', 'marnar', 'brunir', 'guaina', 'mesoni', 'ponera', 'nitidi', 'cadmea', 'mannea', 'caprie', 'ansaci', 'azotar', 'valila', 'giubba', 'vollea', 'temolo', 'edusse', 'cibata', 'lesaci', 'sbucai', 'culaie', 'agiate', 'shorts', 'odiata', 'mutato', 'lanute', 'ramulo', 'capini', 'operar', 'scuola', 'acarpa', 'ardete', 'divari', 'erpici', 'sbassi', 'arsili', 'mmlxxi', 'hurrah', 'ghiaie', 'piallo', 'zoecio', 'presti', 'folica', 'ctonio', 'kololi', 'desiro', 'basket', 'quinto', 'orfica', 'bearci', 'micete', 'lupaia', 'gueffa', 'vamici', 'reagir', 'vinili', 'navata', 'icarii', 'rubala', 'arcato', 'annoti', 'sdarli', 'godrei', 'ravano', 'aglifo', 'dolosi', 'melodo', 'litava', 'notuli', 'morave', 'tenera', 'flippa', 'aloide', 'parafe', 'deviri', 'incidi', 'canute', 'brindo', 'frulla', 'untato', 'tablet', 'lumavi', 'crosti', 'everta', 'invago', 'caldee', 'purgar', 'redava', 'dosino', 'mutole', 'infuso', 'lydite', 'masuri', 'sgommi', 'famavo', 'grippo', 'scapai', 'bisomi', 'derapo', 'rituba', 'arguii', 'vomito', 'zurlar', 'ernese', 'ungilo', 'census', 'arrosa', 'scazzi', 'schemi', 'eserta', 'sanaci', 'svigna', 'imparo', 'ramata', 'onrali', 'altero', 'smisto', 'recise', 'teatro', 'oliavo', 'flamba', 'refuti', 'edipea', 'annali', 'griche', 'amarle', 'inauro', 'markup', 'cecubi', 'vasche', 'rubini', 'aerali', 'algina', 'sbaffi', 'turchi', 'vedano', 'rimpor', 'innata', 'sanare', 'rivelo', 'swatto', 'boxset', 'damala', 'remica', 'luassi', 'smegmi', 'ileale', 'taralo', 'appeso', 'imbuto', 'equity', 'girati', 'libico', 'eptano', 'muffar', 'ridato', 'vuotai', 'stripe', 'restar', 'produr', 'renoso', 'invaio', 'baiare', 'mudare', 'cunama', 'bacaio', 'giarda', 'musano', 'momesi', 'mutate', 'narrai', 'mcmxvi', 'carolo', 'fumoir', 'dritte', 'hiatus', 'salive', 'fabule', 'risoni', 'smorsa', 'ergici', 'lumane', 'potala', 'oleaci', 'quelle', 'vitreo', 'ureasi', 'roboni', 'ancile', 'sbecco', 'ribaci', 'health', 'ciocci', 'pecore', 'anarie', 'alleni', 'grugar', 'abcaso', 'aniste', 'appuro', 'dcccix', 'inezia', 'agiamo', 'drizzo', 'genico', 'evelto', 'sancii', 'beagli', 'sentai', 'lirico', 'mxliii', 'acorie', 'basito', 'verter', 'visalo', 'astaci', 'sfatar', 'avesti', 'moderi', 'fender', 'sfochi', 'esorai', 'equide', 'andavo', 'sonali', 'retare', 'opinar', 'ipogea', 'rifoli', 'forate', 'zigzag', 'ansino', 'allora', 'manili', 'iesina', 'oppidi', 'cacona', 'roresi', 'secato', 'recusi', 'tubato', 'fiammo', 'recall', 'traili', 'ferini', 'groppe', 'brenne', 'dcccxv', 'sfogar', 'vinari', 'compii', 'provar', 'vilala', 'psille', 'suerte', 'pruder', 'corcar', 'sorami', 'stride', 'adimai', 'ricama', 'albani', 'padine', 'scolla', 'tomali', 'liguri', 'fodere', 'mirami', 'flosce', 'culdea', 'elleno', 'resemi', 'humour', 'ecidio', 'votino', 'lungar', 'crusca', 'alasti', 'titesi', 'sapide', 'mangue', 'cabreo', 'teista', 'ischia', 'indago', 'vivrei', 'ionone', 'flemma', 'sfreni', 'lascio', 'panati', 'cdlxvi', 'zelavo', 'sanito', 'argiva', 'sciapi', 'lisavi', 'cerali', 'ghirba', 'diario', 'arcana', 'capita', 'attira', 'trovar', 'brezzo', 'bautta', 'fusele', 'cullei', 'masses', 'macini', 'endica', 'solaci', 'scalpa', 'esulto', 'mudati', 'peplum', 'polino', 'stomie', 'abbiti', 'agrese', 'ducare', 'ladake', 'scolma', 'incava', 'plaude', 'quieta', 'mostra', 'binuba', 'ancida', 'sgrana', 'teneva', 'idonea', 'tanati', 'acheni', 'ziacci', 'crenar', 'bulata', 'blindi', 'coniar', 'fedali', 'calano', 'cestir', 'pialle', 'defedo', 'gelala', 'narice', 'ciucce', 'elivia', 'fanoni', 'emunto', 'vasaia', 'sorane', 'gassai', 'murine', 'empilo', 'emetto', 'elenca', 'badile', 'bounce', 'verdee', 'bufone', 'munger', 'cubano', 'sbeffa', 'ostato', 'teatri', 'ratini', 'velino', 'adesca', 'travio', 'rimmel', 'tanalo', 'gepidi', 'alcune', 'aramee', 'litala', 'dottai', 'sdegno', 'naresi', 'rattai', 'quagli', 'avvino', 'inceri', 'alfine', 'alloro', 'sbaffa', 'tesile', 'canore', 'attavi', 'iatese', 'canapi', 'curari', 'telalo', 'uzbeke', 'alassi', 'estese', 'evinca', 'godila', 'vinosi', 'scappi', 'pipava', 'retato', 'bluray', 'inurbo', 'cosima', 'minato', 'rodite', 'vocavo', 'cenino', 'sfingi', 'lxviii', 'sfalla', 'oleava', 'naupli', 'sdorar', 'parala', 'doglia', 'vagavo', 'magati', 'fusato', 'cinipe', 'leseti', 'urgere', 'mirtee', 'runica', 'ferivi', 'sberti', 'adidas', 'venete', 'codici', 'cicade', 'solate', 'mitosi', 'vameli', 'impeli', 'ormoni', 'tumulo', 'canidi', 'labbra', 'queste', 'evelti', 'irrigo', 'ornavo', 'olivai', 'lavici', 'poloni', 'parche', 'vinaio', 'zumali', 'dolico', 'curala', 'frizzi', 'panami', 'masque', 'saetto', 'divima', 'ciarla', 'bevila', 'riunto', 'osarlo', 'bavoso', 'abelie', 'radium', 'ircino', "quart'", 'vomiva', 'lecito', 'crucio', 'turese', 'eleate', 'imbuti', 'borato', 'mescia', 'ducalo', 'lagide', 'tuorlo', 'rubami', 'sicuro', 'adirar', 'menala', 'strike', 'alesai', 'ecista', 'alensi', 'mallet', 'bruzie', 'fanone', 'plugin', 'ruggii', 'alerti', 'flegmi', 'scomma', 'ascreo', 'ofridi', 'sfarli', 'solima', 'smollo', 'alteri', 'gossip', 'straso', 'temuti', 'driver', 'sdonni', 'bitmap', 'ispidi', 'berrai', 'atropo', 'scinto', 'tycoon', 'papiro', 'vitate', 'chakra', 'esigui', 'vossie', 'tratte', 'scozie', 'brammi', 'locone', 'lenone', 'omette', 'bobino', 'palami', 'fasava', 'esento', 'emigri', 'rabbie', 'popolo', 'kotoko', 'kabuki', 'optino', 'badili', 'celati', 'tapino', 'pacalo', 'cdxxiv', 'spirto', 'potuti', 'sbuzza', 'molari', 'bemini', 'dolora', 'ancisi', 'anurie', 'buscar', 'onerai', 'poccia', 'votato', 'cappai', 'aliate', 'filala', 'armalo', 'ussaro', 'danesi', 'ellena', 'flagro', 'ruvide', 'spalti', 'spanda', 'ambivo', 'saturi', 'bibuli', 'filavo', 'drappi', 'smazzi', 'scifto', 'testor', 'addica', 'scambi', 'polesi', 'fratai', 'divisa', 'allupa', 'muggir', 'triduo', 'minane', 'bibaci', 'cafiro', 'somali', 'lofide', 'mucina', 'shifta', 'eparca', 'largir', 'sistro', 'enimmi', 'satini', 'bronzo', 'lodavo', 'triavo', 'sativa', 'begare', 'lucean', 'lucano', 'numeri', 'pedona', 'dirham', 'lepida', 'falcia', 'eciste', 'tracio', 'sprono', 'domine', 'patate', 'trinar', 'mutati', 'uzbeko', 'adorno', 'liscio', 'sitami', 'roncai', 'bluffa', 'tenute', 'adonar', 'ibrida', 'popoli', 'acline', 'slitto', 'tupaia', 'verste', 'oleico', 'falcai', 'limnee', 'mutano', 'cimata', 'paceri', 'chiose', 'osarne', 'gluoni', 'atlete', 'annomo', 'brecci', 'begali', 'neanch', 'nasala', 'ccxliv', 'renova', 'ormalo', 'frotte', 'pacato', 'tassia', 'ruboni', 'batolo', 'dogata', 'cabeza', 'dipnoo', 'cecati', 'triopi', 'litata', 'zeugmi', 'impili', 'andari', 'bileni', 'scinte', 'fenati', 'oirata', 'social', 'redigi', 'cosime', 'resosi', 'mulari', 'svisai', 'nogavo', 'diluvi', 'eleggi', 'recavo', 'spansa', 'filose', 'bucali', 'annuir', 'scopra', 'udiamo', 'miopie', 'aviana', 'rascia', 'multai', 'vinosa', 'assidi', 'zolfai', 'scabre', 'fiorai', 'nervea', 'rialza', 'pestai', 'lecani', 'sugati', 'slogai', 'alpaca', 'capaci', 'calche', 'rebbia', 'dovari', 'coiara', 'scossa', 'aguzzo', 'pipata', 'framea', 'necavo', 'golose', 'dorano', 'gibese', 'rodaci', 'mcdxix', 'rigame', 'mediti', 'stanzi', 'arista', 'dilati', 'galati', 'repila', 'sfogli', 'stoiar', 'ronzii', 'attrae', 'dionee', 'mutalo', 'theatr', 'cubala', 'creami', 'civade', 'eserte', 'sbarda', 'ibibio', 'disvii', 'eniane', 'zonami', 'acusmi', 'eddico', 'pomose', 'anorak', 'fugona', 'cedimi', 'cosimo', 'rutico', 'feltra', 'stazze', 'sterza', 'secami', 'cintar', 'filets', 'ormone', 'muscle', 'sgasai', 'scadde', 'focena', 'abazia', 'crazia', 'mcmxxi', 'raiala', 'boiari', 'decida', 'mdxcii', 'riorna', 'mmlxxv', 'ludici', 'intoro', 'soldai', 'telava', 'papiri', 'sonami', 'colare', 'salami', 'estere', 'trullo', "quant'", 'cedevo', 'banchi', 'rabbio', 'sformi', 'scorri', 'biasci', 'shunta', 'culali', 'rotola', 'dividi', 'stoffa', 'ontica', 'zittii', 'ghiado', 'rinate', 'finivi', 'vilano', 'sorbai', 'gazati', 'nodini', 'attati', 'limoso', 'cardia', 'sfesso', 'nekton', 'poroso', 'mentii', 'guarir', 'lincei', 'trinco', 'cecali', 'ridire', 'viravi', 'alieno', 'telero', 'sfrisa', 'eroghi', 'avvini', 'eccoli', 'acajou', 'ulivai', 'idioma', 'fucsie', 'spande', 'lutane', 'fragro', 'alcuni', 'ergile', 'attedi', 'ruvidi', 'ducava', 'mugolo', 'alonai', 'estuai', 'gabbeo', 'redane', 'sifone', 'solido', 'alludo', 'copulo', 'stella', 'lutami', 'renana', 'rucola', 'affusi', 'lutata', 'egeria', 'foschi', 'fatico', 'albagi', 'oziato', 'canino', 'stessa', 'smesso', 'novaci', 'pregno', 'fusimi', 'lesero', 'enigma', 'attedî', 'aruaco', 'sposta', 'scudar', 'oirato', 'oppido', 'lucani', 'zillai', 'digito', 'scinco', 'ovular', 'remato', 'tiravo', 'comici', 'lamala', 'scrina', 'tapina', 'fedain', 'spread', 'riaver', 'orbavo', 'volumi', 'romene', 'facevo', 'equane', 'frocio', 'levale', 'fognar', 'lercia', 'negher', 'bulaci', 'copula', 'scrofa', 'untori', 'sfisso', 'visino', 'jivari', 'moravi', 'offici', 'temuru', 'dimoro', 'annoia', 'basuta', 'scarpe', 'sdillo', 'usarsi', 'bronzi', 'oserai', 'ardimi', 'mdlxiv', 'reputo', 'cafira', 'baiona', 'donati', 'teiera', 'badano', 'fiacca', 'parchi', 'negale', 'ferola', 'grabbi', 'impuni', 'cornee', 'sdirti', 'spizzi', 'menale', 'oliata', 'innate', 'balire', 'lentia', 'egregi', 'avorio', 'sbendo', 'svolio', 'bavera', 'quetar', 'devori', 'resesi', 'largar', 'fasalo', 'tentar', 'studio', 'avveni', 'pregar', 'fillio', 'bacata', 'girare', 'gelale', 'figuri', 'novela', 'gialui', 'dacici', 'arsivi', 'begati', 'tonaca', 'zelosa', 'affama', 'adromi', 'notata', 'rodata', 'bacino', 'amerei', 'buiose', 'vociti', 'ripito', 'tacile', 'bandai', 'disusi', 'baravi', 'vocala', 'dxviii', 'sgamar', 'ficcai', 'rorale', 'ontosi', 'direna', 'ungara', 'vegeto', 'lisala', 'tenure', 'motori', 'bramar', 'redami', 'sborso', 'zumato', 'saloni', 'pipami', 'lutaci', 'sicano', 'putali', 'apiate', 'bovine', 'cedere', 'parlar', 'acuiva', 'obduro', 'umetto', 'dipesi', 'sdiede', 'dunoso', 'scersi', 'sbarca', 'paiolo', 'patana', 'ulmico', 'tomolo', 'spingi', 'mcmlvi', 'condom', 'fretto', 'gnocca', 'triste', 'placai', 'badami', 'abisso', 'famedi', 'mastra', 'palaie', 'propri', 'crismi', 'cagati', 'romite', 'limaci', 'tediar', 'mazdea', 'notaio', 'inviar', 'eserto', 'untata', 'sodavo', 'paella', 'aurora', 'pialla', 'mcxiii', 'bubino', 'sciara', 'cenuro', 'solevi', 'difesa', 'sviavo', 'diruba', 'intesi', 'afilli', 'sterpi', 'urloni', 'visati', 'faenze', 'cefalo', 'moresi', 'sculti', 'ledono', 'quinci', 'pofano', 'putala', 'dicaci', 'orriti', 'salama', 'binavi', 'topona', 'rosica', 'censui', 'svelte', 'ondate', 'manali', 'mxxxix', 'rucole', 'popone', 'traina', 'betico', 'humico', 'scopai', 'rugami', 'odendo', 'metilo', 'agnine', 'texani', 'aliaci', 'ilvata', 'cerato', 'eccome', 'setine', 'benefa', 'erbose', 'oiresi', 'spalca', 'priore', 'pogare', 'smungi', 'natalo', 'cedeva', 'primis', 'poscia', 'ruvido', 'fatali', 'risiko', 'anelli', 'smesse', 'bendar', 'varici', 'ccliii', 'bororo', 'varala', 'vedrei', 'sbolla', 'opiche', 'cubiti', 'timing', 'deliba', 'piagli', 'pilosi', 'vorava', 'curami', 'ceraso', 'urtami', 'inerbo', 'somiti', 'risazi', 'pocket', 'novesi', 'monemi', 'bretti', 'stigli', 'sbrodo', 'cdxciv', 'sciaci', 'urlati', 'spicce', 'catgut', 'cenale', 'putato', 'stigio', 'pelate', 'ulceri', 'gonfia', 'abbilo', 'colcos', 'drenai', 'ertale', 'jupons', 'glauca', 'ficoni', 'fotici', 'riposi', 'espiri', 'sudest', 'untaci', 'pitone', 'loglio', 'gomona', 'thembu', 'brusca', 'ardite', 'sviino', 'udendo', 'aerosa', 'usagli', 'bomate', 'gufava', 'tesano', 'assile', 'snasar', 'osarti', 'adugno', 'negato', 'ondati', 'terger', 'ostavi', 'jojoba', 'datari', 'attiri', 'maturi', 'sfrego', 'lamata', 'droide', 'addoni', 'tenore', 'quesir', 'spoeti', 'spighe', 'blande', 'dativa', 'asseto', 'furace', 'stirpa', 'alcoli', 'ruglia', 'auraci', 'aragli', 'insilo', 'smorsi', 'calene', 'fulger', 'eccolo', 'spauri', 'ergevi', 'stadio', 'prasme', 'senufa', 'fellah', 'arsolo', 'dedala', 'rotali', 'orzali', 'cagalo', 'marami', 'cibato', 'ibicei', 'milion', 'capona', 'taglio', 'sadica', 'semino', 'gittar', 'cammei', 'buduma', 'smanie', 'nomici', 'baccai', 'valici', 'orbami', 'segnai', 'giugno', 'longhi', 'dedito', 'cennai', 'acrili', 'truche', 'cugine', 'cebidi', 'patina', 'riamar', 'ansare', 'saglia', 'sitivo', 'legala', 'averla', 'filino', 'bulato', 'cimese', 'crocco', 'cupole', 'linoso', 'dolcir', 'culala', 'risodi', 'tendar', 'peleli', 'varava', 'culale', 'divina', 'semuti', 'zeccai', 'generi', 'smosti', 'vinoto', 'stinse', 'cibate', 'vitame', 'iemale', 'pavona', 'riduce', 'mutale', 'dracma', 'iodose', 'sanica', 'bearsi', 'sferri', 'bruzii', 'tutata', 'sbaffo', 'galena', 'civese', 'capava', 'funaio', 'direda', 'ugnane', 'irroga', 'sarchi', 'limola', 'algoso', 'giocon', 'gaetto', 'sdenta', 'tradur', 'osmero', 'scruti', 'ramute', 'nesese', 'ciarli', 'solidi', 'daimon', 'sdirne', 'picura', 'taffio', 'arsane', 'spigar', 'cuocio', 'reader', 'recede', 'servii', 'iazige', 'forgio', 'uscese', 'iseani', 'teoria', 'giunca', 'risivo', 'errano', 'lagose', 'geniti', 'pabbio', 'lesesi', 'abbici', 'glabre', 'naturo', 'setose', 'mcxlii', 'desiai', 'bulico', 'cursus', 'arredi', 'emunta', 'rafide', 'pavore', 'ellesi', 'cagavi', 'organa', 'dosato', 'guigna', 'periti', 'levita', 'affumi', 'rosese', 'fresca', 'pleure', 'strica', 'minano', 'spante', 'sciuga', 'mdliii', 'equine', 'dopala', 'vagile', 'arroto', 'siculo', 'frange', 'matcha', 'oviste', 'corner', 'inning', 'gongro', 'petati', 'smicci', 'ribuca', 'impose', 'vimato', 'scoops', 'frango', 'famare', 'ondosi', 'udirei', 'piarci', 'solini', 'inaspo', 'patata', 'zarino', 'auxina', 'zaffar', 'sbramo', 'riseti', 'mescio', 'chifel', 'zonese', 'genava', 'navaja', 'podici', 'gatton', 'ratelo', 'zincai', 'quadro', 'tesosi', 'brente', 'gitale', 'smusar', 'agrumi', 'mageni', 'caspio', 'sbrinz', 'nitido', 'grammo', 'infama', 'spuzze', 'scarna', 'baiavi', 'dilige', 'folati', 'zimino', 'nottar', 'sitato', 'pelale', 'livido', 'mdlxii', 'aguato', 'fluivo', 'posato', 'scalei', 'zonane', 'sbrini', 'inette', 'impesi', 'finito', 'bitini', 'fiordi', 'dxxxix', 'ripoto', 'funate', 'inarca', 'duello', 'noveto', 'odiato', 'actina', 'cadmei', 'sinici', 'cringi', 'spenda', 'refici', 'dcxxvi', 'bisava', 'amigas', 'ambita', 'lardar', 'ontano', 'frughi', 'celera', 'deejay', 'oscini', 'xerosi', 'soliva', 'areano', 'retami', 'rumane', 'equate', 'iugero', 'serqua', 'irradi', 'crunch', 'kwacha', 'cessar', 'incaco', 'sbolle', 'mcccii', 'mcciii', 'blasma', 'xileni', 'libata', 'hamada', 'favuli', 'vomica', 'vedico', 'vamiti', 'splash', 'necata', 'sconca', 'aurici', 'canata', 'eretto', 'apponi', 'munivi', 'sgarra', 'sazino', 'pilava', 'semang', 'nitrir', 'tutala', 'bacaci', 'palano', 'direni', 'mdcxiv', 'pososo', 'grotta', 'lasesi', 'godrai', 'setato', 'merori', 'quarta', 'alasse', 'favore', 'gradir', 'quasar', 'zumate', 'agnina', 'lobare', 'giambi', 'scenda', 'carcai', 'ceraie', 'scagli', 'musalo', 'posero', 'lumami', 'biffar', 'taluno', 'ottimi', 'bevuti', 'finite', 'tracci', 'difese', 'ficone', 'bornio', 'tegole', 'koilon', 'numide', 'rimise', 'plotto', 'cdxlii', 'scucii', 'deviar', 'cumolo', 'stormi', 'bevete', 'auleti', 'ugello', 'fisime', 'arsoti', 'telati', 'pegaso', 'scotta', 'penato', 'dunesi', 'micche', 'rivedi', 'azzima', 'incili', 'maravi', 'rinite', 'aselli', 'bilina', 'mcxliv', 'sverlo', 'epatte', 'tiptap', 'retica', 'isarca', 'pulite', 'praxis', 'paveso', 'aghini', 'levigo', 'venosi', 'rebbio', 'bacili', 'frappi', 'veloci', 'venuti', 'durami', 'mazdeo', 'online', 'creavo', 'matchi', 'nogavi', 'idiota', 'fonali', 'invido', 'airbus', 'futuro', 'fobico', 'teismi', 'artami', 'mdclvi', 'trialo', 'ritine', 'emonio', 'vegana', 'dalton', 'oraria', 'strini', 'rivoga', 'moliti', 'babbei', 'emerge', 'telnet', 'faxali', 'carema', 'tirano', 'cacino', 'ondalo', 'bucino', 'bionti', 'cotili', 'lobata', 'putano', 'aquoso', 'calino', 'neutri', 'ormaci', 'macolo', 'zalofi', 'kelvin', 'piegan', 'mesata', 'aralie', 'semica', 'lirone', 'sgrumo', 'basali', 'smuove', 'sitala', 'epoche', 'mxcvii', 'uniamo', 'seriai', 'litato', 'gasare', 'spiali', 'demand', 'sbagli', 'movete', 'paperi', 'enormi', 'figone', 'canora', 'tueggi', 'refill', 'tipina', 'consai', 'secoli', 'regami', 'nasano', 'igromi', 'balogi', 'nevole', 'imbevo', 'copeco', 'ioduri', 'catana', 'mmxxxv', 'polene', 'caspie', 'basica', 'mentir', 'fretti', 'efirea', 'smerdo', 'inseti', 'pomero', 'alante', 'fiutai', 'iseano', 'aerami', 'ardori', 'sbozzo', 'accoro', 'teseti', 'decade', 'oziosi', 'fetori', 'sederi', 'pipila', 'measti', 'floema', 'soccio', 'situla', 'ammali', 'issava', 'sturbi', 'avvali', 'troike', 'infime', 'dittei', 'suasso', 'zotico', 'ripeso', 'curuli', 'hippie', 'retali', 'velaio', 'illusa', 'pedana', 'celibe', 'humici', 'fomiti', 'buboni', 'velena', 'auliva', 'ricine', 'foioso', 'sonale', 'morosa', 'puccio', 'gazava', 'caveat', 'dirigo', 'atropi', 'cacone', 'arsovi', 'retrar', 'rotare', 'dressi', 'cantor', 'svolle', 'gemuto', 'azzime', 'captar', 'piovve', 'volche', 'forino', 'riniti', 'aulici', 'triade', 'sprint', 'lobati', 'fisici', 'crosso', 'import', 'audaci', 'opinai', 'cupido', 'noiosa', 'zumino', 'deduca', 'ripota', 'dcccii', 'migale', 'materi', 'gabbie', 'fedava', 'aderge', 'ardita', 'conati', 'spammo', 'ialiti', 'mclxxi', 'chemio', 'dilago', 'resili', 'dopate', 'griffi', 'murari', 'ricala', 'anemie', 'radano', 'esente', 'arcaci', 'fratto', 'sagivi', 'recite', 'sumera', 'arrapa', 'ernica', 'ridevi', 'rimura', 'erpice', 'coccio', 'retusa', 'immago', 'contra', 'eccoti', 'sporte', 'areate', 'lodate', 'culava', 'sbocci', 'certar', 'coltri', 'fumata', 'fusoti', 'plaudo', 'cocker', 'mandei', 'votiti', 'inolio', 'valuto', 'orlaci', 'cabali', 'mandee', 'guitti', 'bircio', 'ciulli', 'mimava', 'ghezzo', 'dicale', 'toriti', 'digami', 'corree', 'stinco', 'ertasi', 'bacali', 'rigamo', 'fidaci', 'ustose', 'ramuta', 'rilavo', 'iliaco', 'flagra', 'gitisi', 'dritto', 'musati', 'rasata', 'rimisi', 'aranti', 'visavi', 'kuskus', 'toppar', 'rodato', 'nevica', 'framee', 'sommar', 'fosche', 'guanto', 'natasi', 'pelala', 'sdirmi', 'illese', 'ombrar', 'meduse', 'altore', 'rubino', 'vietar', 'lofote', 'slogar', 'banane', 'areola', 'bouffe', 'führer', 'esteso', 'muccio', 'vedile', 'floemi', 'pascal', 'esular', 'oziata', 'sonico', 'petino', 'zonula', 'rosoli', 'agiati', 'cavato', 'betula', 'getter', 'archea', 'idruri', 'fornii', 'stragi', 'segati', 'umboni', 'apuane', 'rutese', 'sniffo', 'tswana', 'esorta', 'viarie', 'lapsus', 'oppino', 'ugrico', 'marcir', 'guanti', 'itrani', 'mitreo', 'sconta', 'erette', 'meator', 'sorati', 'fedayn', 'abbaia', 'bobine', 'ferita', 'tennis', 'allega', 'dilava', 'cigane', 'magena', 'amagli', 'nativa', 'balivi', 'giteti', 'chiari', 'tacili', 'tetici', 'argine', 'dolava', 'fucino', 'cadmee', 'calavi', 'fixing', 'sporli', 'maldir', 'ranule', 'fetida', 'dinega', 'illeso', 'uveiti', 'vitino', 'malore', 'tacque', 'rafani', 'userid', 'furbon', 'milota', 'risvia', 'rubbio', 'ammuti', 'evulsi', 'ammusa', 'rimano', 'dentro', 'sniffa', 'dccxxx', 'zompai', 'unisce', 'noveta', 'ertile', 'volali', 'tacilo', 'nogala', 'scinga', 'veejay', 'stazzi', 'lengua', 'cmxiii', 'lavate', 'sugaci', 'colati', 'renale', 'damali', 'domese', 'devoto', 'deluso', 'pallai', 'torici', 'tumuli', 'soglie', 'stillo', 'aleuto', 'sgrumi', 'papale', 'floppo', 'ardine', 'arroti', 'nuvole', 'stonar', 'tonavo', 'masore', 'avance', 'ritubi', 'amputo', 'triodi', 'vimata', 'calcar', 'votava', 'rosele', 'rogato', 'fisali', 'vogati', 'aprire', 'lapazi', 'saetti', 'esigua', 'asados', 'skater', 'sifnie', 'sonica', 'stozzi', 'rasivi', 'intelo', 'lunata', 'ipoidi', 'ergeva', 'ricreo', 'mmxxvi', 'ditono', 'mutico', 'mxlvii', 'ideala', 'muravo', 'unirle', 'circee', 'oleane', 'toreai', 'falesa', 'cdviii', 'sfinar', 'sperso', 'olfalo', 'lenesi', 'zecchi', 'vilavo', 'attero', 'rivede', 'loffie', 'escare', 'automa', 'issopi', 'astute', 'osmosi', 'rimici', 'mmxvii', 'fonaci', 'giusti', 'rosaio', 'uvaggi', 'sdutti', 'smelar', 'coirti', 'olmesi', 'attate', 'cigano', 'illati', 'carote', 'chiami', 'curare', 'datili', 'votata', 'incedi', 'paloni', 'laccar', 'sedile', 'attuto', 'cultro', 'nolari', 'zumami', 'rumine', 'avvena', 'usurpa', 'rilevo', 'cianza', 'ruditi', 'recano', 'pabulo', 'genesi', 'getule', 'ronche', 'flemme', 'cibino', 'raitai', 'faldar', 'sodate', 'taccio', 'averle', 'impara', 'risudo', 'sucide', 'colato', 'beffar', 'nostra', 'supera', 'boiaro', 'nerino', 'esarca', 'cecane', 'dolcie', 'ternar', 'tosalo', 'virola', 'grabba', 'coirsi', 'pulone', 'bigati', 'enervo', 'achiro', 'tagiki', 'piropi', 'rosico', 'dorava', 'ririsi', 'secolo', 'mollir', 'rotale', 'buyout', 'eocene', 'ignoro', 'coltra', 'rigosa', 'orezza', 'comito', 'cecala', 'anobio', 'elmesi', 'riorla', 'vibrar', 'gemila', 'atonia', 'fisami', 'pavide', 'quitta', 'glabri', 'sedate', 'fottei', 'sufite', 'achiva', 'fracco', 'irriga', 'favoni', 'aculeo', 'belavo', 'sargia', 'onesti', 'ambulo', 'pogese', 'piazza', 'dumeto', 'molino', 'xxviii', 'abbado', 'drinks', 'baiose', 'motard', 'sburri', 'bubale', 'mozaba', 'litiga', 'varate', 'dolano', 'cripte', 'cacali', 'bautte', 'natato', 'curule', 'rounds', 'prendo', 'perale', 'spigli', 'cetano', 'colala', 'cromai', 'lirata', 'cuprea', 'boarie', 'adelfe', 'gufale', 'riseci', 'fylfot', 'karman', 'smiles', 'esigue', 'fugavo', 'gemine', 'melodi', 'piazze', 'zimini', 'radica', 'riochi', 'malusa', 'soffia', 'sbieco', 'aldosi', 'risile', 'acrile', 'ventar', 'ritaci', 'acoria', 'amorfa', 'solete', 'melate', 'trivio', 'cosami', 'ritema', 'living', 'dedure', 'dolalo', 'sembro', 'spurar', 'camava', 'bagobe', 'sfarle', 'dopaci', 'sciato', 'mccliv', 'ubiquo', 'sfissi', 'securo', 'alcano', 'cembri', 'morata', 'legali', 'civaie', 'idonee', 'orrire', 'afgano', 'erbosi', 'jakudn', 'sierre', 'bidone', 'sesino', 'domavo', 'galero', 'veglie', 'avvina', 'tutali', 'funaia', 'acauli', 'rifini', 'groppa', 'vizino', 'cinzia', 'ruschi', 'tattoo', 'annoda', 'zonule', 'rodate', 'uxorio', 'ceduto', 'seenne', 'trismo', 'rasesi', 'sedami', 'acarpo', 'inscio', 'udirai', 'udrete', 'pollai', 'saighe', 'costei', 'lasici', 'spregi', 'olisti', 'riteme', 'velaia', 'ultimi', 'redove', 'xenopi', 'molito', 'gudesi', 'sfessi', 'dumoso', 'ontose', 'smarra', 'daziar', 'scruto', 'kurnai', 'radula', 'pondar', 'ziacce', 'strada', 'immise', 'esecri', 'pilote', 'aiuole', 'zannai', 'bolesi', 'vedete', 'arengo', 'tonaci', 'doppie', 'datore', 'unteti', 'pilali', 'esarco', 'pellai', 'pacchi', 'pestar', 'ohmici', 'clxxxv', 'balera', 'rapavo', 'ribevi', 'raseci', 'miscea', 'crebbi', 'ariosa', 'spegna', 'ciarpe', 'tatari', 'magolo', 'noccia', 'alvini', 'maglie', 'fusesi', 'boleto', 'bratto', 'pigoli', 'feraci', 'fuggir', 'avviti', 'sciapa', 'pranza', 'mclxxx', 'lesevi', 'immite', 'sitter', 'ipetri', 'grampi', 'equidi', 'ahinoi', 'vinali', 'desalo', 'genavi', 'regate', 'cornac', 'furare', 'totano', 'orezzo', 'ommise', 'bubata', 'regati', 'risaia', 'settar', 'tesisi', 'stacco', 'vietai', 'zirlai', 'batavo', 'mdxxii', 'umisti', 'notaro', 'paiute', 'psiche', 'ersero', 'ideavi', 'pilona', 'camene', 'obsedi', 'salato', 'nelson', 'genera', 'valghi', 'demani', 'bruita', 'sagoma', 'agrafe', 'mullah', 'peltri', 'bubavo', 'smacca', 'creole', 'cucita', 'glissi', 'necaci', 'cosati', 'aporie', 'ghezza', 'torite', 'sfolte', 'comati', 'inezie', 'crasso', 'resici', 'calali', 'brogio', 'temevi', 'annido', 'luttar', 'salvia', 'bhakti', 'fernet', 'vitree', 'rotano', 'lettre', 'magali', 'molano', 'brocco', 'rimeni', 'raspio', 'sumeri', 'inarra', 'camita', 'fasane', 'ocello', 'bolero', 'fasici', 'arsina', 'redimo', 'bailey', 'prisma', 'sgesso', 'attese', 'estero', 'oleare', 'dimera', 'linosi', 'serpai', 'rugate', 'oblato', 'invela', 'repici', 'legame', 'magaci', 'olisse', 'handle', 'capoto', 'fregio', 'riebbe', 'oserei', 'nocque', 'metila', 'zonaci', 'bloggo', 'cecavo', 'zeccar', 'cccxxi', 'sileni', 'datami', 'pregai', 'slogan', 'organo', 'elione', 'vanalo', 'abiuro', 'fedami', 'ebbene', 'braite', 'zonavo', 'scucir', 'cesari', 'tomano', 'specie', 'accura', 'gradai', 'peresi', 'pronte', 'begane', 'tosare', 'amitto', 'erbiti', 'elisse', 'puparo', 'arieto', 'sficca', 'patron', 'incoar', 'cinete', 'ornino', 'vecchi', 'secane', 'chiuda', 'ammalî', 'anditi', 'flotti', 'esiger', 'rotule', 'jacket', 'basche', 'scifti', 'pervia', 'oriese', 'mimico', 'sopivo', 'prisca', 'mcmlxi', 'ammara', 'inedia', 'strali', 'dicate', 'scacci', 'coendo', 'musaci', 'resala', 'corego', 'aversi', 'denoto', 'sdarsi', 'sbenda', 'sodati', 'mcccxl', 'ioliti', 'limole', 'eversa', 'skypar', 'usarmi', 'amnios', 'amarli', 'ignava', 'camice', 'canapo', 'mcdxli', 'flirta', 'sprovi', 'frigga', 'nosemi', 'lincea', 'desola', 'levala', 'radico', 'scagge', 'pogato', 'pistor', 'putsch', 'gronda', 'abbiam', 'ririso', 'alcool', 'miglia', 'molcir', 'guglie', 'agiane', 'listai', 'mugghi', 'cucite', 'feriva', 'ibidem', 'biferi', 'risone', 'natica', 'golato', 'retane', 'dlxxix', 'pecoro', 'sgarro', 'lancia', 'insena', 'debole', 'smalli', 'cacavo', 'benzoe', 'ledere', 'forala', 'spurga', 'rotula', 'sbuchi', 'uscite', 'brighe', 'escavo', 'numani', 'malora', 'arcati', 'tesiti', 'slento', 'bipare', 'mutola', 'fredda', 'litani', 'fucina', 'bucami', 'tanare', 'ustori', 'minate', 'intuir', 'luride', 'panino', 'binati', 'slembi', 'gelaci', 'bosano', 'eruppi', 'leuchi', 'nomine', 'ideati', 'spumai', 'meleto', 'fritta', 'indovo', 'roride', 'mannei', 'termia', 'cabale', 'ventun', 'parcer', 'dirupo', 'fargli', 'bandir', 'mxxxvi', 'azzera', 'appuri', 'cerane', 'bellar', 'rostir', 'ditela', 'faveti', 'merghi', 'temuto', 'dicchi', 'mccclv', 'ardica', 'zonaro', 'estati', 'essudo', 'dorale', 'citano', 'saliva', 'datare', 'muglia', 'smosto', 'salila', 'balzai', 'smorzo', 'ranide', 'tiorba', 'topici', 'rosura', 'svolgo', 'canato', 'apliti', 'favini', 'vocali', 'scerbo', 'camera', 'lunato', 'dipese', 'alzata', 'ottura', 'vanala', 'nettar', 'insita', 'ornalo', 'somara', 'tarata', 'risico', 'rodale', 'viliti', 'citala', 'smieli', 'cdxlix', 'goduti', 'inopie', 'pomolo', 'favico', 'onralo', 'vinale', 'paiola', 'rugumi', 'furale', 'apogei', 'piemie', 'rutena', 'effige', 'irride', 'impone', 'gotate', 'vanino', 'lilium', 'rosaci', 'corize', 'faceto', 'trarlo', 'sequel', 'cuponi', 'numero', 'risono', 'enagre', 'abachi', 'traslo', 'brumai', 'telugu', 'vorrai', 'olfato', 'filali', 'achivo', 'tonane', 'dargli', 'allibo', 'matcho', 'moggia', 'cibali', 'vitami', 'dolore', 'grappe', 'ostare', 'accasi', 'amitti', 'abbate', 'patere', 'desumo', 'arsita', 'ossidi', 'beluga', 'dubita', 'valine', 'badavo', 'numano', 'timido', 'lodola', 'fucine', 'arnine', 'schisa', 'scanta', 'mitene', 'egagri', 'notate', 'canela', 'prisco', 'ciarpa', 'paresi', 'buduco', 'orzola', 'bungee', 'lapiti', 'fumica', 'faroti', 'scarse', 'legume', 'ialite', 'ramino', 'isolai', 'veleni', 'spensi', 'falico', 'mimosa', 'kazaca', 'mercar', 'musici', 'briosi', 'ertone', 'zoppar', 'furano', 'ritosa', 'madras', 'dimane', 'nostri', 'baggee', 'appesa', 'brillo', 'canaio', 'vasino', 'intimi', 'finiva', 'dovuta', 'bonsai', 'muniti', 'spugno', 'rabica', 'slitta', 'dicace', 'bacale', 'novati', 'celiar', 'trucca', 'cateto', 'serine', 'cerume', 'sufica', 'ugrici', 'fasate', 'cantre', 'apuano', 'affilo', 'sozzar', 'scalai', 'priapi', 'aliene', 'brughi', 'bifune', 'azimut', 'aliala', 'errane', 'irsuti', 'caldea', 'risala', 'minava', 'topaia', 'ifugae', 'calvar', 'fetido', 'fatala', 'imperi', 'bulavi', 'dasota', 'coniai', 'famato', 'fonico', 'moloni', 'spilli', 'baveri', 'bevone', 'edipee', 'uscier', 'betici', 'tediai', 'igloos', 'gasaci', 'poteri', 'aralia', 'ergilo', 'toques', 'palalo', 'arcame', 'lestre', 'vocaci', 'risesi', 'arroga', 'cincia', 'cecini', 'smarco', 'scorto', 'ferreo', 'filone', 'ferale', 'ittita', 'arpico', 'cerami', 'urgimi', 'sanino', 'decine', 'pruina', 'palaia', 'bogare', 'serico', 'aurale', 'crabri', 'tegolo', 'ladies', 'otarde', 'boxano', 'guigne', 'sfalde', 'flirto', 'biette', 'crampi', 'opache', 'oraste', 'saldai', 'pavani', 'escort', 'scorgi', 'pedate', 'taglie', 'surimi', 'pometi', 'riarsi', 'zuccon', 'sbruca', 'nebbie', 'stampe', 'accado', 'smuoio', 'mdccci', 'ascosa', 'ruttar', 'magale', 'fitine', 'cochon', 'vagili', 'atropa', 'assume', 'altare', 'adatte', 'vegano', 'scafai', 'dedita', 'condur', 'stolza', 'ornati', 'renine', 'calmar', 'catane', 'kitsai', 'caribe', 'bugiai', 'fumidi', 'sdirli', 'snidar', 'adagio', 'flesse', 'mucose', 'fotoni', 'umidir', 'gelavo', 'annaso', 'brette', 'fedato', 'rimiro', 'iridai', 'biasmi', 'morosi', 'armava', 'ertene', 'monoso', 'vandea', 'rapano', 'taluna', 'pogate', 'estrue', 'trials', 'sifona', 'canopi', 'ritara', 'ccxxix', 'sudoku', 'zarosi', 'jammer', 'equino', 'mcxxxv', 'limone', 'vanesi', 'nihilo', 'appaga', 'anarii', 'minale', 'gialue', 'velone', 'solive', 'record', 'budino', 'tornea', 'genere', 'olgesi', 'eterne', 'viveva', 'astiai', 'nuance', 'vimami', 'sifnii', 'salano', 'bigiai', 'calcai', 'ultras', 'yoghin', 'valevo', 'utenti', 'creata', 'sgotto', 'blenni', 'sbrama', 'triadi', 'staffo', 'frappe', 'cibari', 'pappar', 'incusa', 'focile', 'binese', 'erebia', 'medese', 'scorzo', 'letame', 'feroci', 'ricola', 'groppo', 'sgrati', 'celami', 'dopata', 'closet', 'sopire', 'damava', 'teiste', 'tranne', 'secare', 'rutali', 'belare', 'spunta', 'symbol', 'legava', 'starne', 'bushel', 'aderte', 'mcdvii', 'timolo', 'otturo', 'basuto', 'zigavo', 'borite', 'acuivo', 'atopia', 'divora', 'iatali', 'flauti', 'labour', 'gelone', 'cofani', 'orlare', 'scodai', 'renard', 'rigeli', 'cansar', 'biscia', 'simulo', 'natane', 'riceni', 'magavo', 'recidi', 'caponi', 'madama', 'soffro', 'nuotai', 'stagni', 'pamele', 'bevine', 'aprimi', 'ratino', 'borrar', 'flocca', 'nostro', 'capire', 'piniti', 'amicar', 'pirolo', 'mummie', 'tridui', 'dateli', 'bucavo', 'sharai', 'urtali', 'sverza', 'astino', 'babaco', 'resede', 'basita', 'lawata', 'inauri', 'elissi', 'flirti', 'dosali', 'difesi', 'pratia', 'measse', 'incuba', 'immuto', 'zonuro', 'palaci', 'armino', 'acorni', 'acutii', 'angola', 'ondava', 'dovrei', 'evinci', 'ariose', 'magona', 'scalvi', 'memora', 'rugala', 'artali', 'cripti', 'rimali', 'robori', 'bragie', 'asiaco', 'bugola', 'pomati', 'issali', 'stolto', 'citavi', 'shasta', 'mutasi', 'evinte', 'cateni', 'tisana', 'abigei', 'polano', 'snervo', 'minuti', 'biarca', 'sberle', 'scelgo', 'solver', 'andrai', 'lunari', 'sciole', 'renino', 'figoni', 'lidite', 'ashram', 'invidi', 'mangio', 'aulica', 'follow', 'blinis', 'fumala', 'colobi', 'fregna', 'ipetra', 'pervio', 'sinesi', 'iacuto', 'sburra', 'melleo', 'boxing', 'efirei', 'notaia', 'caddie', 'pisoli', 'lesomi', 'volger', 'patica', 'lutava', 'trebbi', 'incisa', 'bounty', 'veruna', 'rasemi', 'ccclii', 'blobbo', 'begoli', 'sagola', 'vanate', 'teschi', 'sbrino', 'dosami', 'gitesi', 'natron', 'tronco', 'ungono', 'scuoci', 'membro', 'vocini', 'miseri', 'onesto', 'sferzo', 'trecco', 'orerei', 'fedino', 'escudo', 'catini', 'ciccia', 'vespri', 'cruori', 'assiti', 'cogolo', 'sdutto', 'areche', 'torica', 'sugala', 'irriso', 'oleici', 'ardivo', 'ciospi', 'rosasi', 'areala', 'ormaia', 'svergo', 'pemano', 'castel', 'natare', 'fecole', 'meonio', 'valica', 'abbona', 'gramai', 'vedilo', 'culate', 'idrari', 'scisma', 'inique', 'addico', 'bobbar', 'amimie', 'adopra', 'attava', 'brucar', 'fratel', 'ertano', 'humica', 'arrisi', 'debito', 'albere', 'ponies', 'archei', 'pieghi', 'cdxiii', 'borivi', 'poniti', 'sdacci', 'aitavi', 'biglia', 'ambate', 'rogavo', 'banzai', 'mlxxii', 'potino', 'varcai', 'andava', 'orzate', 'inguai', 'lichen', 'dature', 'ferrai', 'nudavo', 'baffon', 'bozzai', 'nomino', 'adegua', 'proevi', 'rutale', 'setale', 'robbie', 'lignee', 'riotte', 'motose', 'ripudi', 'remigo', 'pubico', 'ronfia', 'famule', 'eccede', 'tesati', 'allisa', 'prelia', 'emendo', 'bacchi', 'nenfro', 'levali', 'imbeve', 'datovi', 'polono', 'stigar', 'gitano', 'basolo', 'fumati', 'impana', 'stinti', 'ammeto', 'redine', 'loffai', 'nefeli', 'uccidi', 'meiamo', 'turata', 'lipomi', 'istalo', 'miscee', 'stozza', 'pigolo', 'prasio', 'mclxii', 'calcei', 'blinda', 'camici', 'abenta', 'stremi', 'levate', 'oriolo', 'raglai', 'gipeti', 'sorabe', 'unendo', 'blandi', 'tufesi', 'albana', 'tafone', 'iliadi', 'sugavi', 'swatta', 'manuco', 'fedalo', 'rifilo', 'mcxcii', 'trochi', 'sforzi', 'assumo', 'bipolo', 'istata', 'esatte', 'fonala', 'sitane', 'dromie', 'pesato', 'forvii', 'corica', 'guerii', 'climax', 'guerre', 'ideato', 'marcia', 'arcane', 'dcxxxi', 'papati', 'indole', 'scingi', 'vitese', 'gelano', 'ermini', 'rudere', 'mcxxii', 'reseti', 'friggi', 'raspii', 'fluita', 'cedano', 'tageti', 'urtico', 'ignita', 'virare', 'almeno', 'pigron', 'foiosi', 'keirin', 'pranzo', 'mafiai', 'fluide', 'mencia', 'svetti', 'vagala', 'vallee', 'divimo', 'fumava', 'levaci', 'imatio', 'porosi', 'ertati', 'guelfi', 'gómena', 'turavo', 'infoco', 'pudori', 'gadget', 'babbee', 'calamo', 'damavi', 'orzano', 'equina', 'eupnea', 'triage', 'zannar', 'fregia', 'sdonna', 'gloria', 'impipi', 'attala', 'avvide', 'decimi', 'eregge', 'smerli', 'ozelot', 'prende', 'bestia', 'scaffi', 'iessei', 'riusar', 'forzai', 'comico', 'espili', 'everte', 'fraina', 'olfati', 'furiar', 'stenda', 'vasami', 'crasse', 'shunti', 'matite', 'ducevi', 'grilla', 'impani', 'anoico', 'bufalo', 'flussi', 'untevi', 'offizi', 'incole', 'mdclxx', 'geloso', 'magane', 'sciupo', 'ramina', 'sbatte', 'averte', 'grazie', 'uvette', 'esenti', 'clinch', 'gelalo', 'parade', 'stidde', 'rinvio', 'topone', 'illusi', 'inedie', 'rizzai', 'yogici', 'nickel', 'boruri', 'quieti', 'letale', 'minime', 'tracco', 'paffie', 'intano', 'cubaci', 'sviate', 'buiosa', 'tesavi', 'corifa', 'fitina', 'idrata', 'stampa', 'araste', 'farcia', 'nastie', 'buesse', 'lanate', 'gitimi', 'pagavo', 'dedalo', 'trinca', 'ontoso', 'crouch', 'zipola', 'volsca', 'lincia', 'vomico', 'valoro', 'mataco', 'geenna', 'venato', 'acusma', 'pelato', 'crotto', 'levato', 'lassar', 'appena', 'giuste', 'abbino', 'ostate', 'votite', 'ertine', 'tifami', 'sabine', 'cerili', 'accodi', 'micron', 'ripone', 'dovute', 'begato', 'alarli', 'borivo', 'raffar', 'rodete', 'protio', 'assiso', 'remiga', 'adiuvi', 'winner', 'labori', 'redavi', 'inurbi', 'comoda', 'basole', 'scopro', 'player', 'piparo', 'quarzo', 'inurba', 'geldre', 'lobate', 'riesce', 'ramate', 'gotica', 'tanino', 'ertici', 'burlon', 'armare', 'scegli', 'trotto', 'rivoca', 'involi', 'pedici', 'travia', 'lesena', 'dilimi', 'potere', 'queens', 'zelami', 'zumata', 'imbono', 'duetto', 'safeni', 'brille', 'chiava', 'fasali', 'wakash', 'regato', 'aerale', 'golden', 'nasali', 'aldina', 'scavai', 'baiese', 'urtata', 'dcliii', 'omilie', 'bobini', 'lenivi', 'aloidi', 'furani', 'tubaci', 'arrays', 'muschi', 'scelga', 'giovai', 'erpica', 'gabese', 'ducaci', 'rognai', 'brasai', 'spiovi', 'strade', "ultim'", 'aleggi', 'addaci', 'soriti', 'bricca', 'acutir', 'mixing', 'cecale', 'litico', 'ciarpo', 'eurite', 'panari', 'sestar', 'entrai', 'voraci', 'lanide', 'riarar', 'remigi', 'velale', 'fisare', 'gessee', 'editor', 'sedevo', 'pecari', 'arpesi', 'alacre', 'mdclxi', 'tenuta', 'verune', 'ortivo', 'idruro', 'idalie', 'lagidi', 'caciar', 'adduca', 'deleta', 'tarato', 'tesare', 'ibride', 'riddai', 'votita', 'urgevo', 'filmar', 'ghetti', 'sposso', 'boxino', 'cesano', 'minimo', 'sellai', 'teacea', 'digest', 'tonica', 'shifti', 'svilii', 'corsie', 'minimi', 'roiesi', 'fumate', 'nulesi', 'abdico', 'scatta', 'ragion', 'tigrai', 'garzon', 'dorici', 'condor', 'depose', 'meriti', 'coiaia', 'aleuti', 'shogun', 'indoor', 'govese', 'tanite', 'lanino', 'ispira', 'cristi', 'giungi', 'raccar', 'rutesi', 'doresi', 'dcccli', 'errale', 'frigno', 'everse', 'tiloma', 'carpir', 'piarda', 'snerva', 'aritma', 'sfiato', 'etiopi', 'diarca', 'veglia', 'idalia', 'mcxlix', 'impube', 'nogane', 'atrope', 'scarpo', 'intana', 'iugula', 'iatale', 'anatro', 'rifuso', 'trecci', 'cammin', 'grufai', 'cenata', 'ferula', 'nibbio', 'stilla', 'palavo', 'untesi', 'svenne', 'lucane', 'svengo', 'volsco', 'trance', 'teflon', 'cammeo', 'fatare', 'tacita', 'sitcom', 'bovoli', 'laride', 'plasma', 'volaci', 'sialie', 'lucine', 'agnino', 'imenei', 'inleio', 'faseli', 'dharma', 'tonema', 'curane', 'bodino', 'fagali', 'sposti', 'spoils', 'tarpeo', 'catara', 'cenosi', 'solcar', 'aggere', 'profit', 'bulalo', 'saline', 'carbon', 'coluro', 'spanse', 'gregna', 'pinaia', 'gridio', 'evitar', 'riduco', 'capata', 'fisale', 'stinte', 'placca', 'annusi', 'roveto', 'ossina', 'tilosi', 'ideami', 'arreno', 'melode', 'recida', 'rigano', 'alloco', 'circeo', 'zigala', 'guidai', 'terzio', 'urtone', 'sabina', 'chicca', 'legano', 'marmai', 'recata', 'faxare', 'buffar', 'vateli', 'volata', 'padana', 'tarami', 'perivi', 'agente', 'smerdi', 'torico', 'fagare', 'scisto', 'usuale', 'sacrar', 'spanno', 'saremo', 'camavi', 'macina', 'derida', 'sodure', 'salimi', 'schede', 'ebbero', 'civica', 'edussi', 'risalo', 'iterar', 'celala', 'muglio', 'attori', 'fiscal', 'oselle', 'varica', 'gasami', 'votati', 'inarco', 'grinzi', 'posali', 'cubani', 'vatele', 'turano', 'musics', 'impeto', 'iastio', 'casaro', 'ibrido', 'cilena', 'secali', 'gringo', 'dammar', 'cumuli', 'faxala', 'snobbi', 'venala', 'faxami', 'bifasi', 'vorata', 'uretra', 'passio', 'agosti', 'dccxxv', 'sedato', 'indide', 'cantei', 'pavida', 'fluire', 'veneto', 'saluti', 'biondi', 'erompo', 'inondi', 'stesai', 'adoppi', 'licidi', 'vitina', 'mattie', 'scussa', 'disama', 'pecori', 'zittai', 'cocete', 'limoni', 'eterno', 'fedavi', 'cibale', 'cansai', 'studia', 'triato', 'drappa', 'semico', 'tulese', 'lusone', 'rimari', 'ruguma', 'gramma', 'rasato', 'zelane', 'addire', 'ossame', 'starni', 'paravi', 'nocqui', 'sagire', 'agiara', 'eluato', 'rogata', 'eterna', 'strige', 'elibus', 'croato', 'resiti', 'servai', 'morato', 'polito', 'nucali', 'arsavi', 'didimo', 'prozie', 'avieri', 'sconce', 'bienne', 'fusala', 'vangar', 'isiaca', 'cuesta', 'ipomea', 'simico', 'usceri', 'amorfo', 'pendia', 'verdea', 'tarare', 'ugnalo', 'limava', 'sviato', 'usseri', 'acrome', 'agrume', 'pipate', 'erotta', 'spalai', 'coisco', 'sempre', 'musoni', 'rasalo', 'carine', 'scader', 'furala', 'telaci', 'putati', 'viravo', 'quindi', 'mearvi', 'tubava', 'cagare', 'ladani', 'sfanne', 'byebye', 'chiame', 'mitrei', 'piatti', 'ratese', 'rifusi', 'gâteau', 'padina', 'colchi', 'truffe', 'mortai', 'aitaci', 'scotio', 'ziette', 'checca', 'raitri', 'votivi', 'peonie', 'maquis', 'girato', 'ingoio', 'rimula', 'pinene', 'vagava', 'femica', 'sedani', 'peccar', 'outing', 'esponi', 'refolo', 'atroce', 'veraci', 'vivaci', 'pavese', 'rosene', 'gaudia', 'ohmica', 'nolare', 'immuti', 'covavo', 'beeper', 'borora', 'spione', 'pilino', 'clowns', 'aduste', 'udirli', 'menhir', 'catene', 'secata', 'cibano', 'morati', 'duceva', 'sfotta', 'grilli', 'fumane', 'esalti', 'svassi', 'tufali', 'rigori', 'donari', 'ramano', 'canini', 'scozzo', 'uriche', 'limolo', 'fileno', 'peluto', 'riocar', 'ponete', 'sgocci', 'affido', 'erravo', 'rapavi', 'regimo', 'errare', 'grechi', 'censii', 'lemure', 'tacete', 'sugosa', 'colava', 'insino', 'pinyin', 'baresi', 'libici', 'rigeme', 'addalo', 'bucati', 'baiosa', 'steche', 'efebia', 'absidi', 'navero', 'alfura', 'saputo', 'tremar', 'scusar', 'cibare', 'pipini', 'agenti', 'orfani', 'basiva', 'abroga', 'sborre', 'soling', 'dafnie', 'cadeau', 'truoni', 'banana', 'sorato', 'pugnai', 'avulsi', 'screzi', 'bramir', 'cities', 'menano', 'cerica', 'rodano', 'sbobbe', 'prelio', 'mccvii', 'crisma', 'zarine', 'marcie', 'encomi', 'ungere', 'eroine', 'rosici', 'gameti', 'mucato', 'stimai', 'ubieri', 'favata', 'opachi', 'sofora', 'vulnus', 'borose', 'pilato', 'tettar', 'usarlo', 'clorar', 'gasata', 'equesi', 'damalo', 'lesini', 'sukuma', 'sugare', 'tassie', 'piotta', 'fuetti', 'bodies', 'dadone', 'sinodi', 'soldar', 'sterzi', 'timbro', 'sorabo', 'braiti', 'aviera', 'delati', 'dimise', 'dedali', 'cipero', 'camion', 'vocero', 'guidar', 'valere', 'veniva', 'sclama', 'merini', 'piaghe', 'geoidi', 'putate', 'mosane', 'eluita', 'evocai', 'serrar', 'stirar', 'svolta', 'carche', 'gnucca', 'mdxvii', 'ccxciv', 'sonare', 'deduce', 'pilaga', 'vicano', 'stogar', 'virosa', 'vilate', 'dotavi', 'fugavi', 'susina', 'menami', 'nodino', 'eccovi', 'filoni', 'avenue', 'serali', 'emersa', 'abbaco', 'colaci', 'tutele', 'remati', 'raiavi', 'appeno', 'fluido', 'giudee', 'forare', 'averta', 'andino', 'podura', 'petano', 'bubola', 'stands', 'saprai', 'cucine', 'addato', 'affoga', 'gazali', 'federe', 'biosio', 'sortii', 'sbarbi', 'remate', 'perite', 'aggelo', 'sgozzi', 'tiponi', 'pataca', 'algico', 'salavo', 'marmar', 'sorsai', 'sforai', 'bubate', 'usarle', 'sottar', 'astrar', 'voleva', 'smanta', 'sirime', 'coarti', 'dcxiii', 'zelino', 'gazino', 'zeugma', 'ungili', 'simici', 'orzata', 'svelle', 'unisca', 'cmxcii', 'rifina', 'pulsai', 'emenda', 'evento', 'gruppi', 'scolmi', 'contro', 'ugnavi', 'noismo', 'stampi', 'pelare', 'annasi', 'vastar', 'fusosi', 'muesli', 'ditata', 'tepide', 'espiai', 'indura', 'ragano', 'bionte', 'doglio', 'vigile', 'inolia', 'emerse', 'dosare', 'retina', 'spenti', 'dipela', 'lesoti', 'prendi', 'olgese', 'assisa', 'solvei', 'jivare', 'binubi', 'lagnon', 'anfano', 'sciiti', 'dunose', 'aderti', 'ansavi', 'gentil', 'bollar', 'sudavo', 'sgravi', 'emulse', 'sgessa', 'rubali', 'stagne', 'gomita', 'belava', 'fiordo', 'avelle', 'ureidi', 'onusta', 'aletti', 'telale', 'career', 'insana', 'anarco', 'luoghi', 'banato', 'vasali', 'penale', 'vocale', 'portar', 'natavo', 'invoco', 'guazzi', 'progni', 'domiti', 'trotta', 'ditola', 'sumero', 'stizze', 'tabidi', 'amplia', 'vivido', 'preghi', 'sfocia', 'pronto', 'celata', 'eptodi', 'gastro', 'cremar', 'teodia', 'fluori', 'segava', 'cosali', 'inopia', 'laiche', 'petare', 'zigali', 'diaulo', 'gudene', 'alfane', 'arsone', 'fetali', 'sperda', 'mdcxlv', 'bonobo', 'menavi', 'rositi', 'vanire', 'riatto', 'scozza', 'bemino', 'localo', 'alarlo', 'padule', 'donnei', 'tutale', 'tufami', 'atroca', 'nomade', 'ciaoni', 'gepido', 'ruzzar', 'marcai', 'liquor', 'teucri', 'asceso', 'celere', 'dorema', 'olanda', 'estata', 'visami', 'teurgi', 'errori', 'bulali', 'ipetre', 'ruvesi', 'abripa', 'letama', 'ircane', 'pareti', 'cultor', 'telavi', 'favori', 'papera', 'otarie', 'bearti', 'oleosi', 'badale', 'giubbe', 'bifore', 'smalla', 'ansava', 'skeiti', 'urrita', 'nacque', 'rumeni', 'sdurir', 'scinta', 'asinai', 'piuria', 'idrati', 'apioni', 'navaho', 'fathom', 'votalo', 'mitrie', 'donami', 'uigura', 'untisi', 'guaito', 'elenio', 'limane', 'steste', 'natene', 'binari', 'bricco', 'squama', 'risavi', 'rinvia', 'pazzio', 'uzzata', 'samese', 'sinora', 'cicero', 'pagani', 'fummai', 'epopee', 'bubane', 'tauone', 'riardi', 'giusto', 'cdxxxi', 'ispido', 'galbei', 'zampai', 'petaso', 'rigodo', 'baiate', 'stecco', 'triope', 'favela', 'clizie', 'strazi', 'resene', 'gazaci', 'sbafon', 'mucido', 'questa', 'vidima', 'erotto', 'recavi', 'rogale', 'aragna', 'pesolo', 'astiar', 'suppor', 'legami', 'odiosa', 'ofride', 'tudere', 'espilo', 'ureici', 'naming', 'nappai', 'pepane', 'pensai', 'melico', 'sgrata', 'stalla', 'velite', 'cabile', 'retino', 'sbozzi', 'ciceri', 'rimira', 'ardevo', 'incoio', 'gadide', 'alunni', 'sferze', 'sviava', 'jesina', 'furche', 'faxato', 'picaro', 'fiacre', 'armadi', 'cugina', 'ducane', 'peposo', 'betili', 'taglia', 'roccia', 'bagola', 'tabulo', 'pepati', 'eosine', 'unissi', 'putita', 'focese', 'bucaci', 'aulite', 'basati', 'sbarre', 'lirica', 'dietri', 'cambio', 'ridoma', 'camper', 'scinge', 'avveda', 'ostile', 'bazaar', 'evinsi', 'tufata', 'vocami', 'tarpar', 'albini', 'resort', 'femici', 'scosto', 'trarla', 'vimini', 'uncico', 'ionico', 'clangi', 'naturi', 'occise', 'airbag', 'sturba', 'cavaci', 'iunior', 'spesso', 'sclami', 'begano', 'nugole', 'elevai', 'daunio', 'ripari', 'solala', 'coliti', 'bevevi', 'focaia', 'resina', 'gialde', 'solchi', 'pusher', 'clivia', 'rumavo', 'aftose', 'mutala', 'smanto', 'dosavi', 'smagio', 'soduci', 'uncino', 'sberto', 'vogale', 'delira', 'eboide', 'zuresi', 'drongo', 'scioli', 'punivi', 'ostici', 'pylori', 'ceravo', 'induri', 'varcar', 'subiti', 'limata', 'omagra', 'cretti', 'frutto', 'regima', 'molita', 'manidi', 'policy', 'sdalla', 'pacavo', 'badata', 'malusi', 'fatina', 'sfosso', 'cosini', 'quegli', 'sfuggo', 'sganna', 'strino', 'raffia', 'cagaci', 'cocevo', 'ditele', 'ruspai', 'rostro', 'gibaie', 'filtri', 'guizzo', 'spicei', 'ferine', 'uccide', 'zonale', 'rovere', 'ligula', 'scagna', 'voodoo', 'scopie', 'lavabo', 'palati', 'acquar', 'cagava', 'sdolse', 'lupomi', 'fondua', 'plughi', 'norici', 'luschi', 'zelate', 'molite', 'fratti', 'metter', 'areata', 'sciame', 'devora', 'virato', 'pomaio', 'grippa', 'corchi', 'skinny', 'trebbo', 'putivo', 'unarie', 'predai', 'volley', 'smetti', 'plauda', 'fornai', 'geisha', 'zappar', 'deschi', 'zinale', 'accusi', 'novale', 'tituba', 'uplink', 'svello', 'fronti', 'minavi', 'ceffar', 'bovari', 'peccia', 'scopar', 'fieese', 'fabula', 'ordite', 'poetai', 'brucia', 'padane', 'selcio', 'letali', 'omessa', 'creano', 'zinchi', 'nassii', 'scalmo', 'bovino', 'celite', 'bipala', 'genica', 'risovi', 'issopo', 'golata', 'vimali', 'niella', 'edotto', 'necron', 'fliaco', 'trieco', 'sdolga', 'cellai', 'kotoke', 'accano', 'secche', 'ottava', 'filler', 'doceta', 'rilevi', 'sentar', 'navigi', 'piroga', 'blonda', 'bigami', 'cecche', 'guerir', 'olorai', 'ovviar', 'cacano', 'rosume', 'laschi', 'cotile', 'areici', 'vocano', 'posavi', 'temono', 'ibicea', 'gemevo', 'cavalo', 'chiavi', 'timore', 'anione', 'plutei', 'svitai', 'ecisti', 'inluio', 'ritani', 'pagati', 'eterni', 'bevere', 'regata', 'mulcii', 'zanate', 'morivo', 'rifeci', 'eleggo', 'sfrega', 'ascesi', 'bucina', 'dimani', 'pinese', 'hunter', 'ghezze', 'paguri', 'versta', 'orbali', 'piarsi', 'rauchi', 'adobes', 'auroso', 'lobuli', 'stagno', 'baseno', 'abnega', 'magici', 'ladina', 'lupose', 'arsura', 'olezza', 'rivira', 'eriani', 'marame', 'camuni', 'pentii', 'morbie', 'vaioli', 'macusi', 'chitar', 'volino', 'arsosi', 'lastri', 'basini', 'nogaci', 'banjar', 'sedevi', 'mutuli', 'rovano', 'creste', 'baiamo', 'magoni', 'quatte', 'amante', 'muralo', 'rugavo', 'iatree', 'usammo', 'ulvite', 'cenavo', 'lavato', 'lagosa', 'suassi', 'sloops', 'educhi', 'viglio', 'tomati', 'negano', 'dccxii', 'elivie', 'vicine', 'gitili', 'bacone', 'freddo', 'sgalli', 'shatzu', 'spedii', 'vitici', 'mdccii', 'annuii', 'mastre', 'sdetto', 'sanane', 'brutte', 'morate', 'vedimi', 'esalai', 'seccia', 'latina', 'bogara', 'sconci', 'pinaci', 'cucchi', 'chinee', 'egenze', 'ignuda', 'foglie', 'istava', 'etopea', 'badava', 'dlxxiv', 'sopori', 'tarsie', 'quarte', 'atraci', 'faglie', 'ariani', 'abadie', 'timeli', 'vaiate', 'dovere', 'strain', 'affoco', 'amelli', 'velame', 'picana', 'sforza', 'sfrani', 'pulivi', 'casule', 'vagata', 'bipedi', 'pelute', 'bastia', 'cumino', 'scampo', 'cobole', 'pogali', 'giralo', 'spezzi', 'adiuva', 'temiti', 'sfocio', 'dogame', 'putino', 'frolle', 'rubate', 'desumi', 'nevoni', 'lemuri', 'pirchi', 'munivo', 'fargna', 'lurker', 'iodala', 'turane', 'parure', 'velcro', 'litare', 'sferza', 'pogavo', 'abulie', 'garose', 'venali', 'pacesi', 'padano', 'orzole', 'kenzia', 'obliti', 'pallia', 'aptero', 'edurre', 'notale', 'ccxxvi', 'creane', 'yazidi', 'motivi', 'nogata', 'annota', 'kolole', 'renate', 'godeva', 'balani', 'niello', 'diacri', 'rancio', 'cedili', 'turala', 'refuto', 'tepore', 'fusine', 'lebbio', 'fisata', 'casera', 'bacala', 'tetica', 'herera', 'sboffi', 'cucino', 'fauste', 'pigiai', 'paline', 'tussor', 'zumane', 'frisia', 'titubo', 'oramai', 'salilo', 'orango', 'semata', 'piglia', 'tifato', 'ovanti', 'harura', 'sucida', 'cccxii', 'limate', 'bolese', 'assese', 'dxxiii', 'sniffi', 'stocco', 'mucico', 'rividi', 'cucila', 'nubila', 'coopta', 'albasi', 'alaggi', 'cerula', 'lustre', 'corpus', 'pilose', 'onrato', 'penami', 'recato', 'oziose', 'orbane', 'radome', 'spegno', 'risomi', 'eluiva', 'onrati', 'pseudo', 'esisto', 'mercai', 'format', 'tapini', 'babies', 'lutale', 'molcer', 'spezia', 'visita', 'abitai', 'tufava', 'gessai', 'illato', 'cenane', 'irridi', 'emesse', 'dcccvi', 'smagra', 'ordura', 'decime', 'mdcxix', 'giglio', 'gazare', 'jumper', 'smosso', 'cintai', 'albero', 'pomoli', 'rutati', 'spunte', 'induca', 'mihrab', 'rovoso', 'lingua', 'istmio', 'pupali', 'bacoli', 'sdirlo', 'satina', 'mozabo', 'sudami', 'ormare', 'mxviii', 'attano', 'scotto', 'concio', 'rinesi', 'pagana', 'ispida', 'quatti', 'starvi', 'fononi', 'coscio', 'caucus', 'nielli', 'bonese', 'yakusa', 'aprilo', 'stesse', 'arsici', 'ergono', 'pilano', 'ditale', 'butino', 'omosex', 'stiamo', 'platea', 'ascari', 'aletto', 'teaser', 'covalo', 'pagaio', 'optato', 'aspiri', 'arsesi', 'addavi', 'orrido', 'curati', 'gioire', 'vapoli', 'indolo', 'drappo', 'tirchi', 'sorese', 'omento', 'mcdlii', 'votare', 'ricade', 'monaci', 'torchi', 'fatino', 'dolaci', 'coisci', 'spazza', 'nogalo', 'peluta', 'tifata', 'shimmy', 'nudati', 'sleppa', 'amelia', 'orzaci', 'ciompo', 'stoici', 'serene', 'locavo', 'avremo', 'idrate', 'sfarne', 'dosati', 'borici', 'miaula', 'errata', 'czarda', 'peneri', 'gitavi', 'dccxli', 'adugge', 'spasta', 'ertisi', 'evoico', 'caschi', 'munito', 'raglio', 'velare', 'amarra', 'gitati', 'stacca', 'scanti', 'golosi', 'marino', 'lupare', 'esprit', 'umanai', 'french', 'lograr', 'fluivi', 'dolale', 'arsimi', 'forint', 'retrae', 'ciukci', 'animar', 'rimixa', 'pascer', 'nucate', 'nasino', 'dettar', 'lutato', 'navera', 'motiva', 'mmciii', 'clivie', 'andana', 'onrane', 'girino', 'bleffa', 'sdolsi', 'spelta', 'batter', 'scuoia', 'invada', 'ovoide', 'palata', 'ventri', 'ghette', 'tusana', 'mdccxx', 'barzoi', 'tirate', 'trotti', 'beiate', 'inerte', 'panare', 'potali', 'tuorli', 'dicala', 'incute', 'sedaci', 'falici', 'solite', 'eolico', 'olfare', 'uretre', 'scalca', 'diesis', 'apside', 'matesi', 'nuncio', 'geresi', 'dotati', 'aprine', 'aurati', 'varice', 'gasalo', 'cdxlvi', 'mlxxvi', 'salaia', 'nescie', 'sfidar', 'fasati', 'sugaia', 'litano', 'folata', 'pagali', 'virile', 'rampar', 'rapaio', 'uzzolo', 'licere', 'balere', 'vagito', 'optaci', 'remata', 'telate', 'dopava', 'altori', 'libito', 'makers', 'togata', 'olfaci', 'borore', 'blasmi', 'adelfo', 'borine', 'amputi', 'attrai', 'angevi', 'saniti', 'alense', 'rimosa', 'rierti', 'rizine', 'svendi', 'adepta', 'decora', 'tuteli', 'dilavo', 'metile', 'trappa', 'scorsi', 'affini', 'senior', 'rubona', 'immuri', 'risuda', 'aguzzi', 'terrir', 'ittici', 'veruni', 'uremie', 'greggi', 'erbati', 'novano', 'spiaci', 'ocrosi', 'stilar', 'vocata', 'zigosi', 'stanca', 'basivi', 'ubicar', 'ladaki', 'diurno', 'empier', 'pronao', 'ditevi', 'dcviii', 'astuto', 'grisou', 'alluse', 'insano', 'veglio', 'assodi', 'spedir', 'mudavi', 'aurata', 'strong', 'mancai', 'liquar', 'durona', 'rodami', 'tovesi', 'mastio', 'velini', 'riloga', 'domita', 'tesata', 'patito', 'litali', 'sememi', 'ruglio', 'unenne', 'remota', 'flocco', 'planai', 'rodiar', 'amorei', 'atipie', 'unirlo', 'odiane', 'catare', 'decili', 'kasbah', 'mesone', 'pieese', 'centre', 'cosane', 'cubali', 'pipiai', 'karate', 'rorato', 'visali', 'argivo', 'pevere', 'niobio', 'lavata', 'rodono', 'savese', 'famale', 'stradi', 'stende', 'gemuti', 'erbora', 'evviva', 'osmiti', 'tigrar', 'kulaki', 'adasti', 'ramuti', 'polche', 'unario', 'ufizio', 'afagia', 'franai', 'musume', 'gallio', 'cambre', 'parato', 'fenico', 'hadith', 'aurare', 'trillo', 'risona', 'coglie', 'irrisa', 'visual', 'novane', 'bifase', 'rodavi', 'ormino', 'sdarvi', 'lidica', 'datole', 'scalco', 'potrai', 'ostane', 'alliso', 'sufico', 'artese', 'nateci', 'gitovi', 'babeli', 'ammisi', 'limali', 'risina', 'epurar', 'paruta', 'riabbi', 'serena', 'ooliti', 'girala', 'teglia', 'commis', 'cimbri', 'affila', 'caduno', 'ospizi', 'buzzon', 'recici', 'camini', 'scrivo', 'pacere', 'anitre', 'ciurla', 'reseco', 'varico', 'chador', 'arsine', 'urlato', 'lobato', 'notavo', 'pazzia', 'bambin', 'assida', 'olirei', 'scarso', 'vivile', 'mumble', 'esorar', 'thrash', 'rasine', 'cordis', 'segavi', 'attela', 'titani', 'offset', 'ovolai', 'spicee', 'udissi', 'brandy', 'briosa', 'riudir', 'filona', 'lemico', 'istavo', 'shalom', 'careni', 'morese', 'foderi', 'dimeri', 'covola', 'urtala', 'tanita', 'azteca', 'irrita', 'togate', 'odiale', 'mulina', 'fidalo', 'godevo', 'banini', 'alfana', 'bucine', 'limono', 'bifuel', 'bucare', 'derapi', 'pomari', 'pacava', 'treppi', 'infida', 'borrir', 'mikado', 'sfotte', 'pransa', 'stuoia', 'rimato', 'tubano', 'barsoi', 'pigali', 'cabrar', 'elegie', 'cubane', 'ciular', 'riapra', 'vulgai', 'ossose', 'anista', 'pizzar', 'falcar', 'tesoci', 'polipo', 'effato', 'affare', 'rifare', 'badaci', 'arsiti', 'diremo', 'goduto', 'calici', 'imitar', 'sapido', 'kiwano', 'empiva', 'fimino', 'pactum', 'uranie', 'sgelar', 'ccxiii', 'borace', 'fetale', 'sugali', 'vacata', 'cimeli', 'atteri', 'afonia', 'luceva', 'pokomo', 'mcliii', 'risami', 'cxxxiv', 'pedula', 'epigee', 'datici', 'tesavo', 'molale', 'croton', 'sudice', 'emboli', 'senapi', 'dirubo', 'drives', 'senona', 'sleppe', 'capoti', 'morone', 'molesi', 'mmxxii', 'ileali', 'lotosi', 'epizoa', 'tracia', 'tundra', 'zemese', 'dimeno', 'entico', 'famane', 'duroni', 'cavita', 'guaivo', 'mitria', 'adisca', 'artico', 'schizo', 'picure', 'addata', 'annosi', 'dopale', 'spedar', 'fasico', 'prugne', 'pumini', 'botrio', 'marcar', 'grasse', 'evitto', 'ussero', 'sfanga', 'assine', 'eietto', 'quarzi', 'munite', 'maresi', 'camusa', 'focesi', 'osceno', 'suolar', 'bocchi', 'ovovie', 'gerito', 'atroco', 'famula', 'cubare', 'venivi', 'stigia', 'abripo', 'esorno', 'follar', 'melari', 'enerva', 'avanzi', 'ammidi', 'euriti', 'alaste', 'pallio', 'imputi', 'impepi', 'olenti', 'dcxlix', 'aggiro', 'alarvi', 'terbio', 'focano', 'bayram', 'frusto', 'reciti', 'farote', 'redate', 'geiger', 'grezzi', 'risaci', 'native', 'rigira', 'granfa', 'sbarco', 'corion', 'siglar', 'ispera', 'opacar', 'vadoso', 'crealo', 'temide', 'vermut', 'proemi', 'untoti', 'lumava', 'aurami', 'eliaci', 'citale', 'tosone', 'rediva', 'dipesa', 'istmii', 'urtino', 'pliche', 'trabea', 'tubino', 'zoppai', 'rosumi', 'sbordi', 'depila', 'lineai', 'sprona', 'duchea', 'voluto', 'starai', 'dilamo', 'tornai', 'orarli', 'cavano', 'evella', 'dolevi', 'fenolo', 'sopiti', 'sleali', 'datene', 'rodani', 'luposi', 'assale', 'instai', 'scarto', 'sfatai', 'cavate', 'nomina', 'minori', 'attali', 'cedrar', 'lisare', 'odiami', 'fonale', 'silice', 'cianci', 'lacera', 'cmxciv', 'rimavi', 'ciacci', 'mcmlxv', 'smorbo', 'fetish', 'cengio', 'tocchi', 'onissi', 'budget', 'escida', 'plausi', 'persie', 'venalo', 'incaca', 'tonfar', 'lepidi', 'necare', 'ramala', 'ontici', 'felide', 'camave', 'brovai', 'fusite', 'rirese', 'pomice', 'rigato', 'caladi', 'desira', 'dafnia', 'pofani', 'figari', 'aliale', 'paleso', 'onagri', 'cosavi', 'imbigi', 'urlala', 'libare', 'futura', 'valzer', 'benzoi', 'pativo', 'girami', 'euanta', 'andato', 'zonalo', 'pazzie', 'nemesi', 'tesici', 'lesati', 'avanzo', 'dolese', 'brando', 'debiti', 'vostra', 'godese', 'sative', 'bucero', 'orlali', 'sudavi', 'barono', 'nerumi', 'umilio', 'ararci', 'penula', 'glassa', 'sobria', 'spetra', 'glosse', 'oziavo', 'ararla', 'parati', 'coltre', 'zucche', 'truppa', 'favici', 'fumiga', 'mefite', 'soffre', 'fumino', 'sgusto', 'locati', 'clxxvi', 'durare', 'untavi', 'elmate', 'munita', 'gaffes', 'velato', 'abbimi', 'imbava', 'codati', 'impela', 'sfrena', 'trismi', 'omiane', 'novami', 'faselo', 'pietas', 'lucore', 'cubone', 'aperte', 'mdclxv', 'ribeva', 'godete', 'mmxiii', 'nicchi', 'spialo', 'puponi', 'melesi', 'cerata', 'basala', 'adopro', 'oriana', 'esorni', 'rorare', 'eniali', 'credit', 'vedono', 'iastie', 'cresco', 'evolva', 'breuca', 'alfuri', 'ziraia', 'adusti', 'cicali', 'orbita', 'sdorai', 'cement', 'sandre', 'rivuoi', 'amichi', 'fusaia', 'ramali', 'auguri', 'siigli', 'cionca', 'sparso', 'scerpa', 'assire', 'terrea', 'veduta', 'rumiga', 'efendi', 'pedata', 'negati', 'aetidi', 'scovar', 'timoli', 'terghi', 'lavare', 'dogano', 'ultori', 'deisti', 'offese', 'editio', 'slegai', 'cribri', 'renare', 'lessia', 'semaia', 'vapore', 'rinati', 'spelea', 'tacevo', 'vostri', 'lavami', 'guatar', 'moghul', 'scalee', 'esibir', 'kazaco', 'smonto', 'topico', 'iodici', 'becchi', 'romita', 'tapiri', 'tosino', 'sdamai', 'uscire', 'sbobba', 'irsuta', 'tesevi', 'oliale', 'lampai', 'lisane', 'ecoici', 'lumare', 'spalla', 'pepano', 'enfiai', 'svolsi', 'ciocce', 'colica', 'fucata', 'doluti', 'mmxcvi', 'lascai', 'assone', 'rivedo', 'gneiss', 'aquosa', 'iberni', 'licite', 'vasara', 'satino', 'tosesi', 'mutoli', 'gofero', 'smunta', 'kazako', 'rasale', 'vagivi', 'adesco', 'eptodo', 'preghe', 'locono', 'lappar', 'spumea', 'fonici', 'corono', 'effuso', 'tufare', 'armene', 'udirne', 'mandea', 'tubavo', 'roiese', 'pedoto', 'irsuto', 'irroro', 'lamava', 'sorite', 'tronfi', 'inumar', 'arguir', 'acceco', 'unimmo', 'dirute', 'feluca', 'infimi', 'sialia', 'leseci', 'scoino', 'svinai', 'aerate', 'faccia', 'corico', 'sativo', 'fiorir', 'bufali', 'stanco', 'albume', 'timida', 'macine', 'inseni', 'fasale', 'steppe', 'medusa', 'aritme', 'sonavo', 'uscito', 'galega', 'cognac', 'smisti', 'oblaci', 'venuto', 'verghe', 'pluvia', 'adagia', 'grinze', 'meiosi', 'senesi', 'sonala', 'rigema', 'stibio', 'marosi', 'ausoni', 'avendo', 'ionica', 'incuto', 'rischi', 'esimer', 'refili', 'supino', 'fionde', 'gioiti', 'arnica', 'appeal', 'foyers', 'artane', 'sappia', 'fedati', 'parane', 'imitai', 'orarmi', 'redivi', 'busvia', 'tundre', 'fetidi', 'mobber', 'rondai', 'enarra', 'trucco', 'annata', 'bugiar', 'remavo', 'belghe', 'almuzi', 'attera', 'batali', 'vivili', 'sibili', 'fiondo', 'salali', 'fermar', 'pianto', 'emulso', 'ottale', 'balbai', 'ioidei', 'essena', 'astate', 'welter', 'fotico', 'bolari', 'citami', 'sodali', 'rudese', 'giunto', 'rotala', 'lurese', 'balite', 'salaie', 'bubone', 'patane', 'rosero', 'votami', 'aragno', 'starci', 'toraci', 'arusse', 'melavo', 'tannai', 'daunia', 'romice', 'colori', 'pregio', 'mallei', 'fusici', 'voliti', 'salone', 'hummus', 'tenaci', 'astati', 'plazer', 'papier', 'egerie', 'lacere', 'madida', 'cuffie', 'vilata', 'romper', 'silema', 'fidali', 'imbevi', 'sostar', 'ratiti', 'lavano', 'unghia', 'lussar', 'ferodi', 'espose', 'citaci', 'durato', 'premei', 'uvacee', 'pacera', 'crauto', 'aerata', 'araldo', 'gelami', 'stemmo', 'affida', 'limino', 'persia', 'lacuna', 'equare', 'debite', 'alzati', 'inculo', 'tacere', 'irrisi', 'guinar', 'nativo', 'subita', 'lustro', 'romane', 'patire', 'client', 'putava', 'junker', 'xxxvii', 'lirati', 'fugane', 'trarli', 'tumide', 'trojka', 'dolati', 'tosate', 'spasto', 'tirato', 'ancido', 'resivi', 'smuovo', 'zietta', 'contar', 'strips', 'conino', 'gadidi', 'zombar', 'idalio', 'spizzo', 'phylum', 'mishmi', 'rigavo', 'lebete', 'agrore', 'supply', 'grotto', 'bifora', 'libate', 'baioni', 'periva', 'gioite', 'vitala', 'addita', 'raffai', 'barona', 'dirama', 'cuoiai', 'mixine', 'cmviii', 'burlai', 'sciino', 'doveva', 'aptere', 'rilavi', 'crossi', 'odiose', 'tesina', 'curava', 'lotosa', 'etereo', 'penoso', 'dicasi', 'cocoon', 'dclxii', 'ferrar', 'rutulo', 'diceva', 'mmlvii', 'ustosi', 'agiaci', 'mdlxxi', 'tufati', 'niccia', 'gitomi', 'niubbi', 'rifaso', 'sgobbi', 'peggio', 'natemi', 'amello', 'suarii', 'tremai', 'zelosi', 'zagara', 'mxxxiv', 'rasami', 'vanear', 'estimi', 'scarda', 'tarpan', 'ostalo', 'oleale', 'locare', 'idrica', 'strega', 'rouges', 'paffio', 'cavati', 'troppa', 'batole', 'cacalo', 'dinero', 'sbatto', 'tonico', 'guazza', 'adeguo', 'sposar', 'create', 'spargi', 'ligule', 'aliata', 'pomata', 'sumere', 'tholos', 'ranidi', 'usanza', 'pacane', 'trulli', 'inmiar', 'fonema', 'maculi', 'garosa', 'vistar', 'mistia', 'geomio', 'iridio', 'ciurlo', 'betule', 'vanaci', 'pinite', 'entici', 'spalto', 'peloso', 'creaci', 'eniano', 'jungle', 'ducata', 'bantam', 'ungine', 'frigia', 'placco', 'areato', 'civesi', 'gorgia', 'cicino', 'nencio', 'ierici', 'noiare', 'spassa', 'scassa', 'ceppai', 'biotta', 'rasino', 'mdlxix', 'sorche', 'triali', 'noceto', 'soluto', 'vischi', 'lettor', 'semine', 'pilate', 'mdcxci', 'plebea', 'effigi', 'lesisi', 'ispero', 'ipriti', 'dicare', 'acaici', 'holder', 'ribeve', 'negozi', 'uggiai', 'matusa', 'escuto', 'cucimi', 'fotona', 'tenori', 'attino', 'adiate', 'papato', 'offrii', 'rusche', 'tomoli', 'depili', 'densar', 'spreto', 'tomaia', 'ugnare', 'rubati', 'scelti', 'eriana', 'ambiti', 'iesine', 'clasti', 'pavana', 'patini', 'sonito', 'dcxxix', 'aizzai', 'rattan', 'seggio', 'tielle', 'sgorbi', 'tesele', 'paiwan', 'relato', 'rapite', 'basale', 'lincee', 'intuii', 'ulcero', 'anuria', 'canvas', 'doctor', 'quarti', 'cangia', 'trader', 'scores', 'enzima', 'bacano', 'backup', 'bacavi', 'emungo', 'manghi', 'iliaca', 'tomino', 'trojke', 'magata', 'piatte', 'twitto', 'ravvia', 'zelali', 'gufato', 'vergai', 'teiere', 'dolopi', 'stigma', 'transa', 'rogare', 'decado', 'egagra', 'dlxvii', 'macole', 'dcxxxv', 'fotica', 'codini', 'putiva', 'zoppia', 'vanito', 'cinque', 'limose', 'rissai', 'buessa', 'gepide', 'creava', 'dxxvii', 'baraci', 'annero', 'abiure', 'tosavo', 'rastri', 'litalo', 'latrai', 'ossari', 'acculi', 'brache', 'lunule', 'malato', 'efireo', 'sporle', 'agirci', 'lusori', 'stevia', 'insula', 'drachi', 'cenala', 'frisie', 'parodî', 'colere', 'attili', 'libera', 'bufami', 'riding', 'feccia', 'mcdxci', 'sedino', 'ariete', 'sfugge', 'nomano', 'nilota', 'atimie', 'cccxix', 'faceti', 'stazza', 'arsero', 'aerose', 'aurino', 'ascita', 'lisava', 'enoica', 'devira', 'dicata', 'ritina', 'orinai', 'lediti', 'stufar', 'spunto', 'storni', 'vangai', 'tondai', 'robbia', 'manica', 'inizia', 'vamele', 'cesura', 'ducevo', 'epizoe', 'pepita', 'altere', 'vacale', 'ileite', 'pisolo', 'cerasa', 'tifosa', 'dromos', 'bifido', 'banano', 'agenda', 'gotico', 'aiuola', 'erutta', 'mcdxlv', 'madidi', 'ghigna', 'dimena', 'solimi', 'pipara', 'avocai', 'figata', 'zigavi', 'risivi', 'nevici', 'cacato', 'fucate', 'recito', 'serbai', 'oziano', 'ometto', 'spinse', 'spunti', 'raiale', 'gineri', 'trozze', 'frigio', 'dopavo', 'scorce', 'tubing', 'tofana', 'obrize', 'fumalo', 'corami', 'utopii', 'pittai', 'roridi', 'olirli', 'ccclxx', 'sdirla', 'isiaci', 'adopri', 'strema', 'dresso', 'galibi', 'amorea', 'ciuffa', 'adduar', 'corali', 'deduci', 'cookie', 'coiste', 'cadrei', 'albine', 'lusoni', 'musami', 'mlxxxi', 'ovatte', 'diteca', 'occida', 'sitivi', 'ignori', 'fottio', 'savana', 'bigame', 'retuso', 'strobi', 'urbana', 'emersi', 'redola', 'poacea', 'ballad', 'spritz', 'spanna', 'biechi', 'scabra', 'affine', 'vigilo', 'sobrie', 'parola', 'lambir', 'ropali', 'cuocon', 'renavo', 'tutoli', 'cacati', 'blemma', 'linaio', 'sartia', 'svesta', 'zelote', 'ciucca', 'morfea', 'mlxxix', 'memore', 'gottai', 'poteva', 'empici', 'degree', 'menane', 'carneo', 'barati', 'bearlo', 'bubala', 'ercini', 'landre', 'brezze', 'nugoli', 'utopio', 'optavo', 'raglan', 'belali', 'nevose', 'ferver', 'tarane', 'riarde', 'mendar', 'pintor', 'addare', 'talora', 'disuso', 'lutala', 'acerbo', 'alisei', 'ulmica', 'blazar', 'dopane', 'calava', 'sepalo', 'xenobi', 'addati', 'orgone', 'seccai', 'dorali', 'season', 'cuoche', 'sfarci', 'kuruba', 'slamai', 'bossei', 'nescia', 'sbolli', 'decori', 'ursini', 'ovviai', 'eschio', 'simuli', 'gromma', 'lagnai', 'striar', 'lizzai', 'vividi', 'editar', 'escomi', 'remici', 'nudare', 'aspide', 'droghe', 'pagate', 'esteta', 'bibula', 'resati', 'vocare', 'scosti', 'melese', 'stolzo', 'minugi', 'punivo', 'palare', 'ligneo', 'scerni', 'torcer', 'foggia', 'calalo', 'torero', 'virami', 'mccclx', 'vender', 'iberno', 'leader', 'nuncia', 'nipoti', 'sandhi', 'fluito', 'pitale', 'sporvi', 'astuti', 'aprili', 'smusse', 'pattai', 'editui', 'astaco', 'reseda', 'allumo', 'fargne', 'zonate', 'bravai', 'uniati', 'tumori', 'fasato', 'tifino', 'odiali', 'afillo', 'maiden', 'mature', 'arbuti', 'olimpi', 'bigiar', 'lanche', 'coltan', 'sodano', 'sesami', 'cmxxxv', 'pierie', 'crolli', 'ossesi', 'vinchi', 'alobio', 'dcccxc', 'mmxxix', 'toglie', 'argots', 'capale', 'atopie', 'bugnar', 'pronai', 'potuto', 'paciai', 'distai', 'piando', 'deleti', 'lucide', 'floree', 'ibalae', 'lesole', 'oliali', 'timomi', 'xilosi', 'cumbie', 'lesino', 'scriba', 'anturi', 'euanto', 'lutate', 'guaivi', 'eluito', 'necami', 'volevi', 'summit', 'romena', 'alluso', 'foglio', 'sdante', 'acrese', 'tunger', 'musato', 'rapaci', 'vitini', 'norico', 'orioli', 'puniva', 'arnesi', 'recalo', 'eczema', 'bimani', 'decuri', 'scosse', 'sgotta', 'nuvoli', 'orbava', 'keeper', 'bruchi', 'datiti', 'riopta', 'scalzo', 'rutato', 'paiate', 'spiati', 'separa', 'scaffo', 'accedi', 'codiai', 'spando', 'masora', 'xilene', 'zefiro', 'uggivi', 'bramai', 'camiti', 'inferi', 'musane', 'retata', 'sponte', 'pomici', 'bagolo', 'receda', 'osiate', 'ceroni', 'braita', 'risodo', 'molava', 'gelidi', 'ammoni', 'purina', 'zephyr', 'vacami', 'oofaga', 'divino', 'sugger', 'averni', 'fieesi', 'bistra', 'urlavo', 'emunge', 'senufi', 'naveri', 'zonava', 'riunir', 'miniai', 'mudami', 'tripli', 'smorso', 'usurio', 'indome', 'furalo', 'urlane', 'agiaro', 'peptoe', 'gazalo', 'duchee', 'ripeli', 'sodino', 'patera', 'inputa', 'fatica', 'mussai', 'magnum', 'morine', 'cashes', 'nocete', 'polivi', 'aurano', 'rivela', 'sherry', 'mixare', 'vicana', 'scipai', 'mutica', 'gladio', 'occide', 'cupone', 'caroti', 'spiego', 'meline', 'sereni', 'arvale', 'baggea', 'steppa', 'sassea', 'afgani', 'curaci', 'fugami', 'merchi', 'omiani', 'elegge', 'tesane', 'smilzi', 'viuzzi', 'pipina', 'squamo', 'ritesi', 'tabido', 'sleale', 'empiei', 'intori', 'saprei', 'picati', 'feltro', 'cerase', 'preset', 'vatelo', 'uriesi', 'ergine', 'renaio', 'orfici', 'allori', 'colcar', 'incuta', 'adirmi', 'gasale', 'biutar', 'ragade', 'ungete', 'sdille', 'sparga', 'tipula', 'depura', 'picchi', 'bifuni', 'moroni', 'dumeti', 'borica', 'vociai', 'spiuma', 'spompa', 'sorata', 'agisti', 'zumavi', 'granir', 'siluri', 'botole', 'minore', 'solane', 'mixage', 'niceno', 'amenti', 'stolse', 'sonato', 'disvia', 'sanano', 'jogger', 'refuso', 'vorino', 'migrar', 'arreda', 'abolla', 'flippi', 'bacini', 'natali', 'piatta', 'eroico', 'rugosa', 'fumami', 'lodami', 'intera', 'penano', 'mitemi', 'batavi', 'zelota', 'rifora', 'bovolo', 'apteri', 'candii', 'gioivo', 'piloto', 'groggy', 'famali', 'svelto', 'onisco', 'vantai', 'sirice', 'papaie', 'corici', 'scocci', 'tubera', 'droidi', 'abiuri', 'mitrai', 'bulica', 'latito', 'urlano', 'schife', 'oblale', 'turali', 'ircine', 'sassee', 'lumate', 'fasavi', 'mdxiii', 'scoter', 'malino', 'avulsa', 'armali', 'cecate', 'frante', 'magalo', 'vinati', 'cactus', 'antera', 'cosina', 'immisi', 'purali', 'rubata', 'tebane', 'leggii', 'eumeni', 'spalmi', 'erbito', 'fulcri', 'guizza', 'carica', 'serici', 'numane', 'istaci', 'rigone', 'impaci', 'apiati', 'dogadi', 'svanii', 'cavino', 'sagaci', 'panato', 'favose', 'guerra', 'saltai', 'automi', 'susana', 'herere', 'alcali', 'culona', 'recile', 'uvaria', 'mcmxxv', 'lambei', 'armata', 'letizi', 'petata', 'esergo', 'smielo', 'veneta', 'setosa', 'tomavo', 'issale', 'fermai', 'serata', 'scatti', 'ballai', 'mdccvi', 'piaffi', 'innovi', 'eccedo', 'levino', 'coolie', 'bufate', 'cofosi', 'equali', 'vitavi', 'scisso', 'ossine', 'celate', 'musali', 'creare', 'saboti', 'sverga', 'deaero', 'citare', 'gitaci', 'mcmlxx', 'dosate', 'riatti', 'sgarri', 'lisino', 'strane', 'togati', 'delizi', 'holter', 'squami', 'anidro', 'fimosi', 'lagone', 'speoti', 'biveri', 'retusi', 'ittico', 'tracer', 'accidi', 'duagio', 'civili', 'sposto', 'riecco', 'picena', 'manati', 'musale', 'topina', 'aerina', 'notulo', 'nilote', 'somare', 'troica', 'bescio', 'orbace', 'bescia', 'coiaro', 'milite', 'ladini', 'furata', 'quatto', 'murata', 'oleami', 'mudalo', 'nottua', 'canide', 'zelaci', 'regina', 'bylina', 'gemmea', 'rimavo', 'sdemmo', 'dopato', 'amammo', 'gobide', 'cogens', 'sticks', 'arrivo', 'attere', 'elider', 'intubi', 'sfitta', 'malica', 'teismo', 'lulese', 'gueffe', 'ghigni', 'vorare', 'houthi', 'ciglio', 'chiara', 'baluba', 'sagini', 'spiono', 'spirti', 'stuoli', 'tepalo', 'petasi', 'gigolo', 'deismi', 'cinico', 'remavi', 'dartos', 'vossia', 'grigli', 'colavi', 'areane', 'penuri', 'atollo', 'lepido', 'bregma', 'abbadi', 'sciala', 'bendai', 'sbitti', 'cloaca', 'vulghi', 'rilodi', 'cantai', 'emacio', 'manobe', 'uggire', 'zurese', 'turesi', 'driade', 'ciurma', 'algidi', 'psochi', 'lagena', 'rosile', 'curata', 'cepola', 'calide', 'spirea', 'rugava', 'scaffa', 'sfuoco', 'citato', 'trassi', 'stolgo', 'pesate', 'basavo', 'alzato', 'fausta', 'gasala', 'comato', 'codate', 'tacito', 'bregmi', 'illuso', 'incari', 'urgevi', 'culdei', 'bruivi', 'frizzo', 'auravo', 'tassar', 'arillo', 'scasso', 'sapone', 'nogato', 'sondai', 'tavoli', 'tifico', 'ugnoli', 'aitare', 'ammalo', 'genito', 'ecoide', 'vacene', 'rivogo', 'zaroso', 'domino', 'esseni', 'cracko', 'ostico', 'eriano', 'spreti', 'incuti', 'avveli', 'vetero', 'cuccar', 'purami', 'valico', 'ambone', 'eroina', 'orzato', 'sonaci', 'dasoto', 'squaws', 'ussiti', 'derogo', 'agorai', 'spiumi', 'ibridi', 'appaci', 'spille', 'lineup', 'gruppo', 'giarde', 'cibrei', 'proava', 'vandee', 'mozzai', 'piaffa', 'cavata', 'acciai', 'logori', 'occhio', 'intesa', 'fanesi', 'sforma', 'scolpi', 'bonari', 'redama', 'velica', 'puntai', 'smazza', 'rigami', 'piover', 'pedice', 'uranio', 'ventai', 'coloro', 'assise', 'madore', 'smette', 'aglifi', 'culato', 'ioideo', 'oscula', 'urgilo', 'orobia', 'datisi', 'meammo', 'coatti', 'civico', 'erutti', 'visura', 'raugei', 'dipana', 'slegar', 'affino', 'stanze', 'skeita', 'plesso', 'zagare', 'dateci', 'rosili', 'editai', 'auralo', 'idromi', 'starla', 'aperti', 'pigino', 'tarsio', 'ischie', 'avulso', 'tufosa', 'vorati', 'inalai', 'radino', 'sdalli', 'conici', 'natiti', 'zillar', 'incuso', 'desedi', 'laptop', 'caldei', 'scorse', 'redite', 'resedi', 'ursone', 'birchi', 'senape', 'lentai', 'inossa', 'orbale', 'loffia', 'sfarvi', 'perali', 'urente', 'suturi', 'usarvi', 'umanar', 'andati', 'lavico', 'sfolto', 'pioide', 'emergi', 'mcdlvi', 'retavi', 'elceti', 'picane', 'ghinee', 'ducati', 'spumeo', 'escide', 'nerina', 'ccxlix', 'untami', 'viaggi', 'vitale', 'mutuai', 'xilolo', 'tonari', 'ridata', 'libris', 'subbio', 'vorace', 'zigale', 'cosaci', 'frigie', 'bagnai', 'ditole', 'bireme', 'necane', 'kernel', 'alliba', 'rumaci', 'triata', 'dedite', 'ignave', 'volghi', 'cofane', 'egizia', 'riloco', 'citiso', 'cascar', 'spulci', 'chatti', 'faxale', 'pilale', 'untone', 'ronfar', 'voravo', 'arussa', 'coxiti', 'lxxvii', 'sdutta', 'sdimmi', 'odirle', 'sidamo', 'rasate', 'satiri', 'enduro', 'rigore', 'iodavi', 'orrori', 'vorano', 'trarza', 'vipere', 'pepami', 'vasini', 'peptoi', 'bibita', 'grabbo', 'uvacea', 'appore', 'azzimi', 'regamo', 'trarre', 'livida', 'trippa', 'endico', 'fedala', 'dasote', 'cadute', 'dittee', 'ravana', 'risani', 'rapito', 'nolese', 'botola', 'vaiola', 'orasti', 'artici', 'alogia', 'lotici', 'raiare', 'ungiti', 'lamale', 'mammut', 'silvie', 'sagari', 'papers', 'yoruba', 'ardili', 'trophy', 'divani', 'fatemi', 'adastî', 'ritrae', 'titola', 'linose', 'varato', 'smessi', 'dritti', 'segare', 'aggela', 'bucala', 'pomelo', 'medita', 'mirati', 'affari', 'estiva', 'untumi', 'ertimi', 'storpi', 'scurai', 'alaesi', 'solani', 'boline', 'ferali', 'enoico', 'raduna', 'pugili', 'ansimi', 'vrisea', 'erbate', 'efebie', 'lotose', 'shunts', 'lumato', 'figlio', 'lungai', 'lumano', 'matria', 'mitrio', 'ambuli', 'boxala', 'vedila', 'fagara', 'borito', 'cinger', 'attata', 'butili', 'clipei', 'cecaci', 'oxford', 'creder', 'rosoci', 'maculo', 'comate', 'untano', 'iatrei', 'molane', 'orrivo', 'baiane', 'dicesi', 'retail', 'catari', 'tonami', 'eliaco', 'tisico', 'spezzo', 'rogami', 'corese', 'magano', 'lanati', 'pendii', 'lisate', 'pilone', 'lamese', 'spulai', 'rimuti', 'smossi', 'diedra', 'faxate', 'spumee', 'orrite', 'leciti', 'dirige', 'teocon', 'cotone', 'baliti', 'tosato', 'foralo', 'vernai', 'abissa', 'codone', 'rotaie', 'ludica', 'rosevi', 'renata', 'vinila', 'cenere', 'prepor', 'urinai', 'mudala', 'cosino', 'ciabar', 'rinomo', 'artalo', 'rimoso', 'bezoar', 'intere', 'equati', 'stokes', 'reduce', 'cclxxv', 'vatela', 'strano', 'scinda', 'babele', 'getici', 'clismi', 'stabbi', 'abusai', 'abcase', 'selace', 'oziare', 'smunsi', "nient'", 'bardai', 'sagino', 'numida', 'valimi', 'gibesi', 'sparai', 'vestir', 'giuoco', 'linoni', 'rollii', 'betilo', 'filalo', 'vomero', 'sfiora', 'usarne', 'colino', 'gitici', 'tempro', 'febbre', 'blasti', 'rullar', 'empivo', 'angolo', 'sbrina', 'morgue', 'odissi', 'adergi', 'oziava', 'manche', 'cachet', 'azalee', 'attalo', 'fronde', 'severi', 'carele', 'ricedi', 'puberi', 'cerasi', 'maroso', 'dionea', 'laceri', 'brunii', 'stenia', 'mimata', 'plaghe', 'viavai', 'sibilo', 'libere', 'dehors', 'snevar', 'morivi', 'addome', 'coisce', 'virago', 'toraja', 'andria', 'delate', 'eniana', 'calate', 'feltri', 'allear', 'smussa', 'ardeva', 'tifosi', 'orante', 'filosi', 'chiaro', 'trarmi', 'defeca', 'fuseci', 'oleavi', 'scavar', 'algose', 'salame', 'pacese', 'brecce', 'dxciii', 'tarlai', 'rierge', 'neccia', 'eluvio', 'ciampa', 'bipari', 'istale', 'tesemi', 'scheda', 'modici', 'leanza', 'fimina', 'aborro', 'lessai', 'avochi', 'odiavo', 'spanci', 'odiava', 'ostili', 'menati', 'monema', 'ugnato', 'coppie', 'aulico', 'azigos', 'aliamo', 'binano', 'ucciso', 'naisco', 'edipei', 'perito', 'girini', 'storio', 'populi', 'bufati', 'lamine', 'corsoi', 'ittero', 'disiai', 'ciarlo', 'mcccvi', 'spingo', 'matrie', 'servar', 'basaci', 'tanate', 'mcdxxx', 'rattor', 'cimaci', 'seuese', 'unnici', 'molalo', 'aggeli', 'sagito', 'ghenga', 'nudato', 'selcia', 'gommar', 'saperi', 'emerso', 'tipica', 'capone', 'laniar', 'salito', 'amarti', 'faxava', 'orsono', 'dolino', 'temimi', 'impipo', 'resale', 'nervei', 'riarsa', 'cmxcix', 'ravani', 'spensa', 'fusolo', 'decada', 'rapina', 'sforni', 'piumai', 'cifrai', 'elegia', 'bubavi', 'bernia', 'smamma', 'pronta', 'insiti', 'arrogo', 'gabino', 'molavo', 'manila', 'mugoli', 'saggia', 'allato', 'ridoni', 'traodo', 'canali', 'telato', 'ittite', 'galghi', 'chiudi', 'sokore', 'gemmee', 'incela', 'asceta', 'istano', 'zippar', 'gessea', 'fotter', 'fumale', 'rugose', 'divine', 'lemica', 'legumi', 'todini', 'afrosa', 'sudali', 'eureka', 'militi', 'benone', 'felidi', 'lanaro', 'cedila', 'codina', 'dirimo', 'cnidia', 'barman', 'ostale', 'predar', 'bretta', 'mutria', 'oliari', 'insili', 'duetta', 'fusaci', 'figula', 'demone', 'presse', 'cecena', 'rimuri', 'gelive', 'questi', 'conica', 'bulate', 'diradi', 'belaci', 'fuggii', 'legare', 'oscene', 'lograi', 'fasore', 'dalici', 'dccciv', 'arinia', 'emiono', 'renovo', 'ereggi', 'nogare', 'codata', 'draghe', 'virava', 'vostre', 'bacate', 'innova', 'diteco', 'scempi', 'prenzi', 'cxviii', 'cclxiv', 'scalfa', 'otarda', 'bimane', 'genaci', 'permeo', 'fucile', 'priapo', 'dovevi', 'consce', 'volavi', 'alcide', 'sciavi', 'facete', 'croceo', 'andane', 'domato', 'calcio', 'cacavi', 'apuani', 'pinzai', 'raiato', 'oberar', 'renali', 'esuvie', 'cimase', 'binane', 'tufaci', 'assito', 'simula', 'licene', 'esimei', 'palais', 'selfie', 'apachi', 'bosini', 'rosure', 'nerita', 'capivo', 'uccise', 'agogni', 'luvari', 'rettor', 'canile', 'fonane', 'erbata', 'ostati', 'sdessi', 'torese', 'riarai', 'maturo', 'ridota', 'tomala', 'faxano', 'azoica', 'fugoni', 'baccar', 'buioso', 'cotali', 'ignite', 'gelosa', 'cabala', 'insule', 'tempri', 'sentii', 'amarne', 'detrae', 'bigamo', 'girano', 'gemono', 'rapiva', 'iononi', 'truffa', 'escavi', 'iulchi', 'raspar', 'ettari', 'fusati', 'renosa', 'alerai', 'sbalza', 'blatte', 'xoanon', 'evince', 'devoro', 'triple', 'urriti', 'refoli', 'ligiai', 'sukkot', 'tubolo', 'pivots', 'spleen', 'fugace', 'covole', 'sbuzzo', 'yazido', 'moscai', 'payena', 'sitalo', 'madera', 'cresta', 'agiava', 'florea', 'sfugga', 'riezza', 'manico', 'kevlar', 'pelavo', 'salile', 'rumale', 'vocava', 'rigaci', 'pinchi', 'damane', 'nocche', 'erogai', 'doodle', 'svolai', 'tutate', 'nassio', 'evulse', 'iodami', 'tubata', 'fugala', 'domava', 'balboa', 'guappe', 'estimo', 'arrapi', 'areami', 'lodaci', 'ugnami', 'macaco', 'denudo', 'avente', 'aborto', 'agendo', 'eslege', 'regolo', 'rabone', 'sarete', 'rurale', "quint'", 'ciocca', 'firmai', 'tirage', 'coirne', 'cavide', 'calida', 'basire', 'brilla', 'camino', 'mcxxiv', 'arsisi', 'sgrato', 'efebei', 'marlin', 'riesca', 'titina', 'arreca', 'vessai', 'albera', 'sdallo', 'colmai', 'viados', 'roggia', 'sitone', 'osasse', 'rewind', 'ribuco', 'noveti', 'mastro', 'artala', 'imprua', 'skilli', 'cerisi', 'sozzai', 'tifica', 'ulviti', 'medici', 'atrica', 'gufane', 'dxcvii', 'nuclei', 'ocresi', 'odente', 'cucile', 'cannar', 'ecciti', 'guerce', 'sferir', 'bufere', 'ductus', 'coisti', 'pinaio', 'arsite', 'irrito', 'caruba', 'armane', 'pellet', 'sponga', 'papaia', 'rodesi', 'veneti', 'bimari', 'datomi', 'braide', 'valete', 'liftar', 'cotini', 'misure', 'diramo', 'contai', 'allago', 'salate', 'zinnie', 'oziaci', 'lesivi', 'pilavo', 'pizzai', 'cimoli', 'amicon', 'levami', 'tempon', 'rosisi', 'costar', 'rovani', 'genavo', 'giuggi', 'vilito', 'orezzi', 'rasala', 'orammo', 'acerba', 'crocce', 'viralo', 'bubolo', 'wafers', 'fucilo', 'tutato', 'ccxlvi', 'mazdee', 'camuse', 'nevosi', 'festar', 'calido', 'solide', 'flegma', 'stoggi', 'odirai', 'melena', 'banino', 'gridii', 'rupino', 'snipes', 'bonona', 'latine', 'rancia', 'sbotta', 'piceni', 'lapida', 'sdogai', 'inulti', 'dimora', 'cacale', 'svacca', 'spuzzi', 'colone', 'ridice', 'astore', 'cranio', 'laccai', 'pilori', 'riviro', 'cartel', 'cenano', 'tanavi', 'duglie', 'fotina', 'allide', 'dietre', 'trarci', 'pluteo', 'sdazia', 'cateno', 'kaiser', 'trenta', 'mdccix', 'cesane', 'mapper', 'domate', 'gazate', 'perire', 'ondami', 'veleno', 'rasali', 'sviali', 'rigoda', 'ugnati', 'ertami', 'rollar', 'spinta', 'posane', 'erbaio', 'artesi', 'ciccio', 'quokka', 'putivi', 'murici', 'modula', 'accisa', 'bifero', 'svella', 'scampa', 'bagigi', 'tutavi', 'giuoca', 'tagica', 'mesero', 'lenire', 'recide', 'narine', 'potati', 'siesta', 'ponici', 'loppio', 'urtate', 'smerlo', 'felici', 'gabbro', 'durano', 'ammaia', 'lamare', 'musica', 'tarava', 'scotii', 'nasuto', 'ricovi', 'pagini', 'licide', 'ansiai', 'giremo', 'utenza', 'amarvi', 'sciugo', 'ostoli', 'rilego', 'filtro', 'malate', 'malgai', 'merlar', 'usbeco', 'ideone', 'avelli', 'sfilar', 'prione', 'varino', 'miceti', 'movevo', 'ollare', 'brinai', 'cagami', 'bibbia', 'oscure', 'echini', 'locate', 'rodavo', 'formai', 'pedine', 'soccer', 'penava', 'mccxxi', 'svenga', 'defoli', 'lolita', 'attesi', 'varami', 'zompar', 'slomba', 'anotie', 'ripago', 'aviare', 'escuta', 'ircini', 'bibbio', 'cedevi', 'iodava', 'aderbi', 'soraba', 'potrei', 'pransi', 'nimica', 'addate', 'sisari', 'petali', 'volevo', 'uscivi', 'viator', 'rimava', 'cafila', 'liceva', 'rumene', 'cedute', 'pulche', 'gitevi', 'anfana', 'blasto', 'teorba', 'affina', 'immoto', 'impera', 'rubavo', 'sdirsi', 'deputa', 'campar', 'campir', 'olialo', 'tutina', 'errami', 'puzzle', 'armena', 'dlxiii', 'valido', 'celano', 'ticket', 'svenar', 'tapsie', 'doceti', 'muslim', 'cubalo', 'leccai', 'stanne', 'sonici', 'wapiti', 'ussite', 'turino', 'bienni', 'zeppai', 'mmlxix', 'igname', 'rapita', 'scorgo', 'avvero', 'baiato', 'spiceo', 'evolve', 'rapire', 'fiches', 'meerai', 'anzese', 'fonata', 'altino', 'olfami', 'jonici', 'ottani', 'sapidi', 'viuzza', 'arance', 'bitubi', 'restia', 'noismi', 'begata', 'vinaia', 'lenzai', 'fiorii', 'asolar', 'arinie', 'gasati', 'arsaci', 'rubavi', 'rimino', 'volant', 'segolo', 'sgrido', 'tesole', 'avveno', 'laccia', 'intini', 'scalmi', 'orobie', 'rovini', 'serica', 'nomami', 'dasipo', 'rogali', 'putare', 'vaniai', 'aggiri', 'scorze', 'trecca', 'compor', 'indomi', 'mesici', 'sacher', 'pruine', 'sfossa', 'insego', 'decise', 'lessie', 'viviti', 'bimano', 'ideavo', 'rodilo', 'dubiti', 'apolli', 'coclee', 'eunuco', 'calori', 'soduca', 'xilema', 'gasosi', 'elaidi', 'volane', 'ubiqui', 'schino', 'paraci', 'ottopi', 'roffia', 'arsile', 'scopri', 'acculo', 'rivoco', 'baseni', 'catoni', 'marche', 'tuonar', 'soravo', 'valili', 'cubavo', 'laguna', 'scabri', 'intuba', 'lesavi', 'atrico', 'crochi', 'biogas', 'cccliv', 'geliva', 'posano', 'adissi', 'peones', 'cripta', 'sedulo', 'ritemo', 'xilani', 'adnato', 'tosale', 'lapite', 'mdcxii', 'urrite', 'adoppî', 'cogita', 'dxxxii', 'canova', 'casone', 'citavo', 'slatto', 'usiamo', 'charts', 'punici', 'olisca', 'incedo', 'velami', 'milito', 'oppose', 'artava', 'orlano', 'diedro', 'rimemi', 'abelia', 'sgrano', 'skibus', 'zanata', 'emergo', 'fusole', 'kazaki', 'muride', 'auliti', 'taccai', 'bodoni', 'gioiva', 'pagano', 'jonica', 'ornavi', 'aunesi', 'ammuta', 'zigomo', 'soravi', 'neutra', 'gioino', 'reflui', 'scaddi', 'cimesi', 'anzesi', 'disfai', 'noioso', 'marchi', 'panzer', 'infuri', 'dcxcii', 'derimi', 'dirupi', 'cenare', 'pussar', 'gunite', 'svelli', 'ripore', 'pagale', 'sciapo', 'paffii', 'sagnar', 'comata', 'incera', 'cucina', 'impala', 'usassi', 'iniquo', 'raiavo', 'macera', 'porger', 'lucidi', 'caleva', 'roncar', 'stondo', 'tatara', 'estrae', 'domata', 'tonino', 'sdraio', 'lutati', 'dogalo', 'immuni', 'tamtam', 'stocca', 'scagni', 'labari', 'lunghi', 'dolete', 'estete', 'spende', 'compre', 'datava', 'azione', 'franti', 'digiti', 'pulivo', 'egenti', 'bevici', 'botoli', 'aderir', 'spammi', 'evitti', 'hangar', 'scifta', 'prosai', 'lxxxvi', 'filavi', 'binino', 'uffizi', 'spirai', 'teurgo', 'pratie', 'untoci', 'dogami', 'aldolo', 'sgridi', 'angarî', 'struma', 'areaci', 'annona', 'meseri', 'doremi', 'polena', 'dogati', 'tabide', 'arrese', 'dopare', 'miloti', 'merdon', 'magnar', 'sberta', 'panavo', 'lumaca', 'ancisa', 'bedani', 'frette', 'basami', 'ditini', 'accuse', 'spalmo', 'bianca', 'ninfee', 'recaci', 'sudato', 'libati', 'mojito', 'dogana', 'ostaci', 'scosta', 'mancia', 'nomale', 'cmxlii', 'scardi', 'gridai', 'dumper', 'teseci', 'ittrio', 'scarsi', 'rosane', 'celino', 'ariamo', 'eburni', 'nipote', 'paludo', 'olendo', 'grifai', 'trenai', 'cedilo', 'estasi', 'munghi', 'tantum', 'sopito', 'ramaia', 'ionici', 'viridi', 'rivota', 'caiaco', 'priori', 'erutto', 'turame', 'cotica', 'smerar', 'talkie', 'regale', 'velvet', 'bosoni', 'olirmi', 'mccxcv', 'urtati', 'riunse', 'risudi', 'sconto', 'mixale', 'emulsi', "disfa'", 'zigane', 'scipar', 'rierto', 'tamiso', 'uggiti', 'enunzi', 'ferite', 'poncho', 'strine', 'clxvii', 'sanesi', 'noduli', 'svolto', 'multar', 'voglie', 'caconi', 'pesava', 'cccxxv', 'natomi', 'esulta', 'lizzar', 'impesa', 'abbico', 'gamici', 'dicato', 'pompar', 'orarlo', 'nenfri', 'pelata', 'elisie', 'riccia', 'violar', 'sfacci', 'procoi', 'detona', 'brulli', 'galani', 'vedine', 'quitar', 'ziucci', 'detoni', 'caprai', 'ungevo', 'cmlvii', 'egente', 'erotte', 'elevar', 'sutura', 'pavido', 'brenna', 'voltar', 'sbotti', 'adulte', 'sagrar', 'livrea', 'sfrati', 'tatuai', 'vorale', 'tenoni', 'pesino', 'abduca', 'godili', 'negami', 'remolo', 'rullii', 'ernici', 'urlone', 'coorte', 'coopto', 'rapone', 'antine', 'lesbio', 'chiedi', 'paiuti', 'intubo', 'spiami', 'ureico', 'strina', 'judoka', 'pimpla', 'riders', 'metili', 'datala', 'teorie', 'assira', 'trulla', 'esimia', 'umetti', 'attato', 'arsure', 'horror', 'digama', 'pacami', 'enfino', 'angela', 'urgine', 'censuo', 'stenua', 'deruba', 'pineta', 'bleffi', 'bizona', 'illate', 'feline', 'usatto', 'sboffo', 'riezze', 'peduli', 'tornar', 'smassa', 'crenni', 'vitaci', 'mulare', 'poltra', 'circea', 'misagi', 'abusar', 'idrope', 'larvar', 'prenze', 'foresi', 'pirato', 'desina', 'binder', 'agrori', 'dotava', 'ditene', 'scarta', 'aviere', 'scerno', 'pitoni', 'tosoli', 'volver', 'lurido', 'duelli', 'inasti', 'bucale', 'vomire', 'ircani', 'braiva', 'diedri', 'inneri', 'divere', 'sagrai', 'vicese', 'renati', 'simide', 'grappo', 'enrico', 'morite', 'miauli', 'piloso', 'escimi', 'timine', 'ducami', 'nastri', 'veloce', 'sfreno', 'separo', 'ortive', 'esopeo', 'radevo', 'boxers', 'incisi', 'rasare', 'gitani', 'gradua', 'crocca', 'svesti', 'colico', 'sugosi', 'everto', 'melale', 'notane', 'apprua', 'ciprea', 'locato', 'pedani', 'molati', 'ridate', 'kaputt', 'svelta', 'vasaie', 'bassai', 'zunese', 'lanare', 'spinsi', 'epigea', 'pirili', 'borese', 'vasare', 'ansito', 'svapar', 'zufole', 'zuppar', 'varrei', 'aderta', 'zigano', 'difili', 'scolii', 'dannai', 'ammiro', 'ducavo', 'alpine', 'vicani', 'riputi', 'dorati', 'mutrie', 'scappa', 'presto', 'mostri', 'sedere', 'palese', 'samare', 'infami', 'boxavo', 'pronti', 'sparto', 'udirla', 'colici', 'learde', 'furate', 'pudica', 'rasane', 'vogala', 'starli', 'legnar', 'rierte', 'rifolo', 'crucci', 'ittica', 'elonga', 'sdroga', 'ducala', 'estasî', 'boccia', 'tripla', 'intona', 'daorso', 'predir', 'fisino', 'acrali', 'disdir', 'outlet', 'malici', 'deluda', 'blogga', 'sborri', 'flette', 'sconti', 'umista', 'lidesi', 'fasica', 'ottona', 'malesi', 'sgessi', 'acazio', 'bouffi', 'beviti', 'lapins', 'ammira', 'oreadi', 'onnesi', 'option', 'matura', 'ellino', 'ringoi', 'lintei', 'sparge', 'coseno', 'bufavo', 'allele', 'covino', 'ratina', 'risici', 'ubiera', 'aquose', 'bosseo', 'datone', 'regala', 'vedici', 'genomi', 'maonia', 'cerose', 'solevo', 'sincro', 'odiaci', 'brezzi', 'averli', 'algale', 'alonar', 'zonato', 'lumati', 'citava', 'renico', 'versar', 'noiosi', 'cracca', 'idroli', 'sbirbo', 'ammuto', 'infoio', 'cibori', 'cadmio', 'chiede', 'africa', 'damina', 'filare', 'accoda', 'dronte', 'abadia', 'affidi', 'badala', 'bisomo', 'gnorri', 'malghi', 'basata', 'unirvi', 'ligure', 'recate', 'pecora', 'nasavo', 'fusale', 'seduta', 'orbala', 'macaca', 'niubbo', 'yakuza', 'sferii', 'algori', 'esimio', 'analda', 'fusane', 'onravi', 'bevili', 'agisca', 'purato', 'rapino', 'bufavi', 'rosala', 'balbar', 'apollo', 'banati', 'vanita', 'rodare', 'borini', 'eressi', 'evulsa', 'tepida', 'spetto', 'ripeto', 'errore', 'agiavi', 'torcio', 'alludi', 'sberla', 'finire', 'vallai', 'elfica', 'metodi', 'danzar', 'cimbro', 'smetto', 'pipano', 'apatia', 'iseane', 'zinnai', 'xxxiii', 'stoiai', 'adnata', 'iesseo', 'isiaco', 'pedali', 'sitoni', 'nostoc', 'pogami', 'uzbeki', 'bovina', 'riungo', 'tutami', 'baiosi', 'vocati', 'riudii', 'sopivi', 'gelesi', 'lidese', 'olissi', 'vivano', 'bolino', 'cenaci', 'lisoli', 'bobina', 'partir', 'sonchi', 'orlati', 'infuse', 'zeloti', 'estrai', 'panali', 'baculo', 'resane', 'ursino', 'sfrido', 'goffra', 'screen', 'attiva', 'cornea', 'virosi', 'ostavo', 'fanale', 'svisar', 'troppo', 'decido', 'zifide', 'tabuli', 'tornii', 'metodo', 'povera', 'binubo', 'dentai', 'barbet', 'eriane', 'rodiai', 'dannar', 'svelgo', 'pipili', 'pogala', 'erinni', 'volete', 'logoff', 'ottono', 'ondavi', 'cornai', 'topato', 'damata', 'cardio', 'ottuso', 'bluffi', 'focali', 'mitena', 'ginkgo', 'moshav', 'scozzi', 'canghe', 'tostar', 'datalo', 'sforna', 'udirsi', 'fisala', 'cacumi', 'bizone', 'svenia', 'lacune', 'evolvo', 'buduca', 'rinvii', 'compir', 'annale', 'garage', 'dilama', 'ascite', 'runici', 'ficato', 'supere', 'latore', 'global', 'vitalo', 'roseci', 'chente', 'argina', 'sfumar', 'obblia', 'timele', 'sbavon', 'aldoli', 'sversi', 'termie', 'avvita', 'preste', 'gualdi', 'ignare', 'badali', 'optane', 'equavo', 'fegati', 'mandeo', 'cavami', 'bondei', 'piccia', 'iatreo', 'enagra', 'escano', 'tendai', 'riesci', 'congio', 'salina', 'aggeri', 'bustai', 'colbac', 'cclxxi', 'aprivo', 'alzaci', 'fonano', 'arrapo', 'cufico', 'fucili', 'spumei', 'nataci', 'equavi', 'schifa', 'eslegi', 'evinco', 'elaide', 'escopi', 'molami', 'broker', 'anioni', 'adnate', 'fugano', 'isteri', 'stempi', 'spania', 'votivo', 'uveale', 'aduggi', 'unisti', 'caligo', 'legalo', 'smammi', 'ebetai', 'traber', 'omaggi', 'vogata', 'crolla', 'curano', 'motoso', 'folico', 'spacco', 'setoso', 'cotino', 'acorma', 'annera', 'camola', 'tombai', 'talamo', 'ansale', 'ducavi', 'mesico', 'nauseo', 'rōmaji', 'leardi', 'crebbe', 'potaci', 'sugane', 'nobile', 'rolese', 'vegeti', 'schiso', 'mistio', 'soresi', 'thrill', 'iodosa', 'mcdxxi', 'sfallo', 'grader', 'maggio', 'ripili', 'spelee', 'selone', 'tonata', 'rorino', 'risevi', 'gasali', 'fallir', 'spighi', 'tetidi', 'moscio', 'estrui', 'tupeli', 'ertele', 'ridomo', 'natesi', 'aragni', 'visore', 'svolli', 'leniti', 'colate', 'grassa', 'chiedo', 'fluate', 'arsomi', 'starmi', 'grossi', 'covali', 'saldar', 'oziavi', 'rosola', 'redano', 'aucupi', 'sharia', 'pedete', 'ripper', 'licena', 'mandar', 'zumale', 'idonei', 'giunti', 'figlia', 'micine', 'mdxxxi', 'ienidi', 'eburna', 'montai', 'romeni', 'inasto', 'rotavi', 'sititi', 'sposte', 'beante', 'silane', 'riarmi', 'redime', 'marone', 'siresi', 'uvarie', 'annoio', 'troiai', 'plaudi', 'apersi', 'balita', 'mdcxli', 'stadia', 'ammusi', 'sciami', 'ebetar', 'xiloli', 'accese', 'blemmo', 'natele', 'fumide', 'usando', 'pacale', 'cecavi', 'sviala', 'ammine', 'amboni', 'riorli', 'paddle', 'testar', 'pasquo', 'dopami', 'tubalo', 'coiamo', 'olfano', 'skippo', 'serate', 'scorra', 'vagolo', 'blemmi', 'glorie', 'nerine', 'mmxlvi', 'tsughe', 'demico', 'arante', 'scuter', 'avacci', 'stidda', 'sparir', 'adendo', 'ghinda', 'bubalo', 'mmxliv', 'goferi', 'ignara', 'vivimi', 'canale', 'smorbi', 'ziucce', 'spasso', 'scorsa', 'litane', 'draghi', 'munire', 'moniti', 'culaia', 'blonde', 'iesini', 'dengue', 'sodato', 'illune', 'tosola', 'recono', 'hockey', 'zumati', 'medico', 'aerini', 'sbraco', 'svolte', 'ruzzai', 'bateia', 'biffai', 'cimici', 'trenar', 'torula', 'faglio', 'adirle', 'linite', 'siluro', 'aglife', 'piotar', 'emunga', 'lecchi', 'ducale', 'esosio', 'ofiure', 'domesi', 'telaio', 'segosa', 'vinoti', 'molone', 'rierse', 'spormi', 'lezzar', 'evinti', 'tomaio', 'nasica', 'giuria', 'ingioî', 'ertosi', 'missar', 'trucia', 'carini', 'tesomi', 'africi', 'tesolo', 'potevi', 'amasie', 'piccai', 'ostala', 'olismo', 'knödel', 'matero', 'eburne', 'ergiti', 'sgrava', 'asiago', 'svenai', 'tubane', 'rondes', 'mirala', 'inteso', 'grosso', 'finale', 'morino', 'mazico', 'flesso', 'nidore', 'covala', 'svario', 'kefiah', 'vagali', 'street', 'felino', 'olmeco', 'escisi', 'teloni', 'amarci', 'noiose', 'cocche', 'elgoni', 'legato', 'cenoni', 'aurore', 'iniqui', 'bipoli', 'augiti', 'telico', 'minuir', 'bannar', 'rasimi', 'invale', 'gioivi', 'piomba', 'subire', 'modali', 'freghi', 'beassi', 'pedeti', 'languo', 'inerti', 'accesi', 'clicca', 'esciti', 'artavi', 'chiese', 'senufe', 'velina', 'avvoco', 'rumata', 'yoicks', 'addazi', 'omenti', 'stimar', 'guardo', 'riopti', 'invade', 'spicea', 'gazata', 'vaiaio', 'sdazio', 'tomavi', 'lepade', 'saboto', 'culleo', 'ccxxii', 'anisto', 'medine', 'liditi', 'ibiceo', 'secret', 'ricova', 'riergi', 'nemici', 'lisato', 'telino', 'scialo', 'copule', 'bulino', 'baeria', 'ordivi', 'affisa', 'buccio', 'saglie', 'itrane', 'grange', 'funger', 'adersi', 'zumano', 'magoli', 'invita', 'areale', 'dolori', 'natoci', 'deceda', 'lamate', 'caboto', 'sinodo', 'udirmi', 'limalo', 'svilir', 'bitumo', 'dirado', 'ramose', 'piriti', 'ubiere', 'caleni', 'civici', 'lesoci', 'dimuto', 'ruotar', 'cimati', 'susine', 'acormo', 'pranse', 'spiata', 'pulica', 'fatalo', 'mdcxxx', 'tosche', 'rigemo', 'tasche', 'libiti', 'antere', 'lastro', 'strabe', 'errino', 'deliro', 'gettar', 'bosana', 'imbuir', 'comete', 'lanari', 'delibo', 'fattoi', 'mulino', 'baialo', 'presai', 'sbardo', 'pancia', 'rasiti', 'dorese', 'tesami', 'ergimi', 'sirene', 'bastie', 'ricami', 'pitici', 'proavi', 'nobili', 'brandi', 'osiamo', 'garbar', 'pacaci', 'arcata', 'scaldo', 'spirar', 'refila', 'purate', 'bongos', 'escute', 'untava', 'rodici', 'chetai', 'sandra', 'diluii', 'invece', 'donata', 'altane', 'tenuti', 'casale', 'letico', 'spiavo', 'dirupa', 'smezza', 'enarro', 'fioche', 'algido', 'sfrana', 'grills', 'salute', 'beasse', 'casosi', 'gasoli', 'vielle', 'oscura', 'mixomi', 'gaufre', 'ornano', 'tiglio', 'pagina', 'litaci', 'morena', 'mulcir', 'esimie', 'barile', 'rimalo', 'direte', 'tarano', 'arguta', 'dotala', 'illuvi', 'areino', 'seppio', 'sapora', 'giudeo', 'borsai', 'dorami', 'preane', 'ammuso', 'psilla', 'posose', 'celomi', 'mioidi', 'cifosi', 'caribi', 'imeneo', 'fedine', 'fluidi', 'veroni', 'cosalo', 'modera', 'girgli', 'tinaie', 'sfango', 'avulse', 'liquai', 'glande', 'snevai', 'artano', 'petaci', 'risero', 'cacami', 'ripila', 'ripose', 'ertoti', 'induco', 'intasa', 'schedo', 'marito', 'beanti', 'gemano', 'vitrea', 'palina', 'mesate', 'strido', 'tifone', 'rodile', 'dogane', 'sgrida', 'tinnir', 'svigni', 'vimavo', 'tarpee', 'limano', 'alnico', 'alarle', 'illudo', 'uzzato', 'pillar', 'ottusi', 'oneste', 'fulcro', 'nasini', 'smunga', 'timina', 'ledimi', 'lanuto', 'terrii', 'cupidi', 'butini', 'argivi', 'onrami', 'carati', 'bussai', 'umbone', 'culdeo', 'rigida', 'porche', 'fiasca', 'digame', 'metopa', 'sample', 'golear', 'vespro', 'fatine', 'canori', 'zigato', "gliel'", 'riurti', 'infine', 'sisero', 'piatii', 'retine', 'baciar', 'volari', 'cileni', 'gomene', 'marita', 'ascrea', 'deriso', 'mimala', 'sonati', 'sifono', 'bidono', 'usiate', 'dicavo', 'raiava', 'sonore', 'inetta', 'spaiai', 'eliomi', 'genoma', 'ippici', 'carela', 'plasmo', 'aspine', 'sesini', 'robora', 'pilata', 'giambo', 'lilion', 'alzavi', 'addavo', 'tettai', 'ciotto', 'ciarde', 'vomite', 'lirato', 'liutai', 'risane', 'aspini', 'guarda', 'bellum', 'setole', 'tombar', 'silura', 'comizi', 'riotta', 'agiari', 'gemmei', 'arcalo', 'mimino', 'titolo', 'geishe', 'ukiyoe', 'uggino', 'denaro', 'fissai', 'canari', 'albata', 'astile', 'occasi', 'rorali', 'livesi', 'ferree', 'sartio', 'polone', 'frusti', 'versus', 'albane', 'wasabi', 'anfora', 'ritosi', 'datevi', 'roravo', 'iacute', 'bevoni', 'ontico', 'femmes', 'zefiri', 'bevero', 'baulai', 'guaire', 'ricedo', 'micosi', 'arsoli', 'porgli', 'sdetti', 'borita', 'mulini', 'sesamo', 'vanume', 'ciocco', 'colobo', 'access', 'nogava', 'canyon', 'pudico', 'cablar', 'levavo', 'mundio', 'noriti', 'fautor', 'calore', 'bearvi', 'garzar', 'nolana', 'necale', 'barene', 'genata', 'ognuna', 'ancidi', 'epigeo', 'scosso', 'devien', 'pereti', 'relega', 'oleala', 'addito', 'vadose', 'tempia', 'spechi', 'salolo', 'merlot', 'oziaca', 'ossete', 'esiste', 'tufano', 'organi', 'ridila', 'erudir', 'piarvi', 'ararmi', 'facili', 'ghindi', 'ienide', 'illata', 'binate', 'biotto', 'merdai', 'dietar', 'strale', 'scerba', 'fugapi', 'accuso', 'vorala', 'fumaci', 'orriva', 'sbirri', 'cenate', 'tirala', 'vacele', 'busker', 'salica', 'potate', 'palude', 'sciuri', 'mixati', 'rignai', 'dorata', 'maccar', 'fenile', 'sfibri', 'sorsar', 'stoppa', 'cutine', 'sviare', 'varech', 'sfriso', 'punico', 'boxeur', 'sdoghi', 'belavi', 'stolli', 'bonghi', 'salice', 'diesai', 'vetrai', 'brocca', 'sveste', 'sfogni', 'fodero', 'focoso', 'casere', 'lumera', 'monile', 'svieni', 'filale', 'sagene', 'vegeta', 'antitg', 'sedale', 'vivila', 'pereto', 'sbrana', 'gigari', 'ascrei', 'enerve', 'cicute', 'rasoci', 'libava', 'migrai', 'murava', 'nerini', 'novero', 'ideino', 'captai', 'aderto', 'annone', 'blanda', 'bolare', 'talune', 'brusii', 'scepsi', 'bugula', 'efesie', 'celtio', 'marzio', 'sclere', 'burino', 'croati', 'annasa', 'mcdiii', 'litchi', 'amiate', 'cancan', 'orridi', 'updati', 'delimi', 'ubique', 'minbar', 'pinosa', 'sgruma', 'sverzi', 'votaci', 'rugoso', 'tesalo', 'predon', 'dcclxi', 'bollir', 'mcmiii', 'ibibii', 'ambata', 'pagalo', 'ideane', 'crasha', 'fremir', 'prosar', 'staggi', 'timbra', 'notano', 'veliti', 'efimni', 'dappoi', 'codino', 'fumavi', 'trivia', 'ruvese', 'obblio', 'tosata', 'sagomo', 'cercar', 'erader', 'gómene', 'ergoni', 'garghi', 'locale', 'lenito', 'celare', 'dogava', 'dccxxi', 'fetore', 'cacume', 'esfoli', 'rumina', 'spiava', 'plessi', 'savers', 'poveri', 'strume', 'bordar', 'dipolo', 'graspi', 'vomita', 'gasosa', 'scorre', 'botton', 'barico', 'twitta', 'renovi', 'onduli', 'cozzai', 'sgorga', 'detono', 'panane', 'dogale', 'rorati', 'godimi', 'iudico', 'amanti', 'cinzio', 'vigore', 'dunque', 'rutene', 'direno', 'sdutte', 'svetto', 'svegli', 'lapaco', 'ossibi', 'girava', 'usasse', 'copate', 'culici', 'vampai', 'magato', 'parafi', 'amebea', 'inleia', 'sierra', 'seduti', 'trovai', 'putaci', 'stipar', 'cacini', 'arieti', 'longhe', 'difilo', 'tecale', 'orerai', 'forzar', 'elegga', 'golati', 'binaci', 'afgana', 'nevale', 'sporge', 'balnei', 'retala', 'ducano', 'conche', 'ducate', 'plachi', 'somala', 'rigate', 'varare', 'defilo', 'riduca', 'trasso', 'nuvolo', 'strato', 'accasa', 'rutili', 'oblano', 'ctonie', 'carter', 'ridoti', 'sgamba', 'tancai', 'burrai', 'bentos', 'godine', 'pepavi', 'spanta', 'sbalzi', 'relate', 'incavo', 'mirese', 'codine', 'nugace', 'dcxcvi', 'lirate', 'unizzi', 'mixata', 'appara', 'estrar', 'siseri', 'tritio', 'ottali', 'prenda', 'stolga', 'maison', 'vacela', 'sciite', 'cibala', 'bastar', 'adirla', 'bovesi', 'colano', 'soduco', 'fedale', 'tuxedo', 'atipia', 'inciti', 'sdagli', 'nugaci', 'vaniva', 'linosa', 'spenno', 'silano', 'bittai', 'ormali', 'cnidio', 'melane', 'rimixi', 'escine', 'pastor', 'ugnava', 'sireni', 'etisia', 'furato', 'musavo', 'cestii', 'seccar', 'adatti', 'pogati', 'usurpi', 'cerici', 'elesse', 'mescal', 'graffa', 'posalo', 'notizi', 'braghe', 'common', 'ideava', 'cracki', 'elioni', 'lucida', 'ginnar', 'fugata', 'dediti', 'bareno', 'klimax', 'rimico', 'mcmxix', 'vollei', 'fissar', 'tictac', 'ormavi', 'loculi', 'cicalo', 'tempra', 'pacion', 'venose', 'lunghe', 'menali', 'smacco', 'cuffia', 'sditti', 'decidi', 'abbada', 'scissa', 'pesete', 'riridi', 'smorza', 'luttai', 'foioli', 'enzimi', 'nesesi', 'padron', 'libbra', 'tafoni', 'malata', 'mohave', 'pittor', 'pilesi', 'bosino', 'vinilo', 'falena', 'olealo', 'ciotta', 'alzalo', 'molidi', 'vogano', 'viagra', 'polona', 'argani', 'mitrar', 'bercia', 'receva', 'antodi', 'sviavi', 'scapar', 'ridona', 'comode', 'eschie', 'dicava', 'peluti', 'gelida', 'aldini', 'metati', 'burine', 'ranger', 'diteli', 'appese', 'slombi', 'cariar', 'traumi', 'soloni', 'perlai', 'window', 'tornir', 'smarro', 'susino', 'minuta', 'pipilo', 'ordure', 'vagiti', 'barate', 'vimavi', 'nasane', 'tintor', 'matita', 'runico', 'cecata', 'stoghi', 'micado', 'boxava', 'ripire', 'segala', 'lepcia', 'celali', 'vacaci', 'ansata', 'scaleo', 'volage', 'dosata', 'orlami', 'cimino', 'maiali', 'puloni', 'spurai', 'ovatta', 'bulala', 'pretti', 'turate', 'istone', 'oblita', 'sokoro', 'limito', 'arriva', 'arrota', 'faxalo', 'canili', 'alluni', 'jonico', 'riorlo', 'domito', 'arcuar', 'cilene', 'mlxxiv', 'sinolo', 'oplita', 'costui', 'icaria', 'areare', 'afroso', 'petalo', 'madido', 'cabine', 'mitiga', 'sparti', 'tesine', 'arcava', 'dogaia', 'sdarlo', 'grinte', 'stango', 'canele', 'glosso', 'ignari', 'tesori', 'damano', 'ababua', 'misses', 'tumido', 'omiano', 'tlaspi', 'eliche', 'source', 'faceta', 'oofori', 'ascino', 'asadas', 'bisave', 'urbane', 'sdossi', 'yprite', 'sitati', 'tanata', 'fisaci', 'mdcclv', 'pedoni', 'oleine', 'locaci', 'vigili', 'sporgi', 'guadar', 'chintz', 'flauto', 'untimi', 'devota', 'idiomi', 'daciti', 'paiamo', 'sbluso', 'casona', 'fifona', 'cimalo', 'resoci', 'adduci', 'grosse', 'liciti', 'redale', 'eluivi', 'doglie', 'dcccxl', 'nomavo', 'tacevi', 'sopita', 'todari', 'poltri', 'clefta', 'datoci', 'ipnosi', 'enervi', 'trabee', 'clinic', 'udremo', 'asiano', 'meiate', 'bissai', 'griffo', 'ancori', 'famalo', 'vilalo', 'agirsi', 'ripesi', 'lupino', 'donare', 'turche', 'nostre', 'sdiedi', 'caliga', 'gramar', 'svizio', 'buglia', 'eosina', 'robini', 'rutila', 'acerra', 'cibalo', 'calati', 'mdccxc', 'mutavo', 'bacava', 'valida', 'brilli', 'gorbia', 'metesi', 'svivai', 'pelaci', 'guinai', 'chinar', 'colami', 'sdanno', 'paiole', 'carina', 'bdelli', 'squalo', 'arioso', 'agonia', 'pogano', 'terree', 'intimo', 'chilli', 'scrime', 'moraci', 'comino', 'ponine', 'rondar', 'varati', 'seppie', 'induci', 'kimono', 'sorate', 'svasai', 'tosavi', 'cotine', 'cadrai', 'mellea', 'semina', 'gricci', 'taraci', 'scorno', 'diedre', 'mdlvii', 'ledilo', 'caruso', 'rivoli', 'bavosi', 'snelli', 'virata', 'dipnoi', 'buschi', 'opiati', 'illudi', 'melalo', 'ccxxxi', 'gassar', 'sorger', 'widget', 'ideaci', 'cozzar', 'mxxiii', 'pacavi', 'stutai', 'dimeni', 'omessi', 'dlxxvi', 'scindo', 'acetir', 'menomo', 'bosina', 'smusso', 'perdio', 'presso', 'mmlxxx', 'racers', 'trasse', 'senili', 'tristi', 'fusiti', 'visavo', 'eretai', 'bleffo', 'jersey', 'irrogo', 'brasca', 'editti', 'agirai', 'kouros', 'umetta', 'gaucho', 'cricco', 'stolzi', 'mestai', 'fumavo', 'inmiai', 'parino', 'posche', 'cxxxvi', 'doccio', 'forvia', 'ottimo', 'achive', 'smagai', 'alunne', 'fonesi', 'favosi', 'guairo', 'sonavi', 'sabbio', 'grecai', 'cobiti', 'acceca', 'furiai', 'condri', 'spreta', 'dipani', 'stelle', 'andrii', 'rizidi', 'sfanno', 'girate', 'cclxxx', 'musino', 'natate', 'eregga', 'vacavi', 'ignoti', 'rodine', 'faeton', 'visivi', 'algere', 'zelare', 'siglai', 'speoto', 'calzar', 'pretta', 'rituro', 'bidona', 'ossosa', 'focana', 'vigori', 'blasmo', 'smuovi', 'palala', 'smonti', 'rapati', 'linear', 'romiti', 'gelate', 'luglio', 'induro', 'nevata', 'cerner', 'adusta', 'arride', 'allisi', 'verger', 'sugami', 'alunno', 'astata', 'cuiavi', 'deismo', 'obiter', 'riditi', 'mimulo', 'oofore', 'infoia', 'morbia', 'canesi', 'tifava', 'murale', 'immola', 'brusir', 'sdalle', 'espira', 'validi', 'arcide', 'eledon', 'unitor', 'tanaci', 'steppi', 'qenite', 'gaetta', 'oofora', 'untole', 'ortiti', 'adonai', 'archee', 'trippe', 'svolii', 'carino', 'ariane', 'ervesi', 'fatane', 'facule', 'trecce', 'padese', 'sverni', 'cmlxvi', 'svinar', 'arente', 'fruivi', 'tralci', 'payoff', 'vimine', 'putata', 'rabuli', 'gemute', 'amaide', 'pulire', 'uzzoli', 'prenci', 'spiova', 'garden', 'gitine', 'anchor', 'ennari', 'orzane', 'aldine', 'penose', 'pendio', 'mefiti', 'ripivo', 'laonde', 'defili', 'riunte', 'oleali', 'braida', 'givano', 'repono', 'tesaci', 'purghe', 'capono', 'spezio', 'elitra', 'alerte', 'velata', 'mdcvii', 'morini', 'piombe', 'tarati', 'centri', 'spamma', 'agirvi', 'repevi', 'nudino', 'chiave', 'novavi', 'ridevo', 'fenili', 'elodie', 'updata', 'sviane', 'ottici', 'aerala', 'porosa', 'biadar', 'coraio', 'frutta', 'valuta', 'glossi', 'vamela', 'fonalo', 'orsino', 'sgolar', 'dragar', 'rorami', 'sdonno', 'sdeste', 'alfure', 'taluni', 'nidori', 'regole', 'fumico', 'cornar', 'mcxciv', 'talare', 'lamini', 'fisati', 'crasho', 'rumino', 'dirada', 'sgotti', 'rovine', 'mutici', 'gabber', 'topaio', 'creati', 'pioppo', 'valide', 'charme'],
      La = ["sparta"], //TODO what is this?
      Ta = "present",
      Ia = "correct",
      Ca = "absent";
  var Ma = {
      unknown: 0,
      absent: 1,
      present: 2,
      correct: 3
  };

  function Oa(e, a) {
      var s = {};
      return e.forEach((function(e, t) {
          if (a[t])
              for (var o = 0; o < e.length; o++) {
                  var r = e[o],
                      n = a[t][o],
                      i = s[r] || "unknown";
                  Ma[n] > Ma[i] && (s[r] = n)
              }
      })), s
  }
  var Ra = new Date(2021, 1, 1, 0, 0, 0, 0);

  function $a(e, a) {
      var s = new Date(e),
          t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
      return Math.floor(t / 864e5)
  }

  function Pa(e) {
      var a, s = Na(e);
      return a = s % Aa.length, Aa[a]
  }

  function Na(e) {
      return $a(Ra, e)
  }
  var Ha, Ga = "abcdefghijklmnopqrstuvwxyz";

  function Da() {
      dataLayer.push(arguments)
  }
  window.dataLayer = window.dataLayer || [], Da("js", new Date);
  Da("config", "G-2SSGMHY3NP", {
      app_version: null === (Ha = window.wordle) || void 0 === Ha ? void 0 : Ha.hash,
      debug_mode: !1
  });
  var Ba = [].concat(g(Ga.split("").slice(13)), g(Ga.split("").slice(0, 13)));

  function Fa(e) {
      for (var a = "", s = 0; s < e.length; s++) {
          var t = Ga.indexOf(e[s]);
          a += t >= 0 ? Ba[t] : "_"
      }
      return a
  }
  var Wa = "statistics",
      Ya = "fail",
      Ja = {
          currentStreak: 0,
          maxStreak: 0,
          guesses: r({
              1: 0,
              2: 0,
              3: 0,
              4: 0,
              5: 0,
              6: 0
          }, Ya, 0),
          winPercentage: 0,
          gamesPlayed: 0,
          gamesWon: 0,
          averageGuesses: 0
      };

  function Ua() {
      var e = window.localStorage.getItem(Wa) || JSON.stringify(Ja);
      return JSON.parse(e)
  }

  function Xa(e) {
      var a = e.isWin,
          s = e.isStreak,
          t = e.numGuesses,
          o = Ua();
      a ? (o.guesses[t] += 1, s ? o.currentStreak += 1 : o.currentStreak = 1) : (o.currentStreak = 0, o.guesses.fail += 1), o.maxStreak = Math.max(o.currentStreak, o.maxStreak), o.gamesPlayed += 1, o.gamesWon += a ? 1 : 0, o.winPercentage = Math.round(o.gamesWon / o.gamesPlayed * 100), o.averageGuesses = Math.round(Object.entries(o.guesses).reduce((function(e, a) {
              var s = y(a, 2),
                  t = s[0],
                  o = s[1];
              return t !== Ya ? e += t * o : e
          }), 0) / o.gamesWon),
          function(e) {
              window.localStorage.setItem(Wa, JSON.stringify(e))
          }(o)
  }
  var Ka = document.createElement("template");
  Ka.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help" class="icon">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         PAR🇮🇹LE\n        </div>\n        <div class="menu">\n          <button id="settings" class="icon">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
  var Va = document.createElement("template");
  Va.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
  var Qa = "IN_PROGRESS",
      Za = "WIN",
      es = "FAIL",
      as = ["Baro o fortunato?", "Magnifico", "Notevole", "Ottimo", "Non male", "Per un pelo!"],
      ss = function(e) {
          n(t, e);
          var a = h(t);

          function t() {
              var e;
              s(this, t), r(p(e = a.call(this)), "tileIndex", 0), r(p(e), "rowIndex", 0), r(p(e), "solution", void 0), r(p(e), "boardState", void 0), r(p(e), "evaluations", void 0), r(p(e), "canInput", !0), r(p(e), "gameStatus", Qa), r(p(e), "letterEvaluations", {}), r(p(e), "$board", void 0), r(p(e), "$keyboard", void 0), r(p(e), "$game", void 0), r(p(e), "today", void 0), r(p(e), "lastPlayedTs", void 0), r(p(e), "lastCompletedTs", void 0), r(p(e), "hardMode", void 0), r(p(e), "dayOffset", void 0), e.attachShadow({
                  mode: "open"
              }), e.today = new Date;
              var o = za();
              return e.lastPlayedTs = o.lastPlayedTs, !e.lastPlayedTs || $a(new Date(e.lastPlayedTs), e.today) >= 1 ? (e.boardState = new Array(6).fill(""), e.evaluations = new Array(6).fill(null), e.solution = Pa(e.today), e.dayOffset = Na(e.today), e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.restoringFromLocalStorage = !1, ja({
                  rowIndex: e.rowIndex,
                  boardState: e.boardState,
                  evaluations: e.evaluations,
                  solution: e.solution,
                  gameStatus: e.gameStatus
              }), Da("event", "level_start", {
                  level_name: Fa(e.solution)
              })) : (e.boardState = o.boardState, e.evaluations = o.evaluations, e.rowIndex = o.rowIndex, e.solution = o.solution, e.dayOffset = Na(e.today), e.letterEvaluations = Oa(e.boardState, e.evaluations), e.gameStatus = o.gameStatus, e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.gameStatus !== Qa && (e.canInput = !1), e.restoringFromLocalStorage = !0), e
          }
          return o(t, [{
              key: "evaluateRow",
              value: function() {
                  if (6 === this.tileIndex && !(this.rowIndex >= 6)) {
                      var e, a = this.$board.querySelectorAll("game-row")[this.rowIndex],
                          s = this.boardState[this.rowIndex];
                      if (e = s, !La.includes(e) && !Aa.includes(e)) return a.setAttribute("invalid", ""), void this.addToast("Non nella lista di parole");
                      if (this.hardMode) {
                          var t = function(e, a, s) {
                                  if (!e || !a || !s) return {
                                      validGuess: !0
                                  };
                                  for (var t = 0; t < s.length; t++)
                                      if (s[t] === Ia && e[t] !== a[t]) return {
                                          validGuess: !1,
                                          errorMessage: "".concat((o = t + 1, r = void 0, n = void 0, r = ["th", "st", "nd", "rd"], n = o % 100, o + (r[(n - 20) % 10] || r[n] || r[0])), " letter must be ").concat(a[t].toUpperCase())
                                      };
                                  for (var o, r, n, i = {}, l = 0; l < s.length; l++)[Ia, Ta].includes(s[l]) && (i[a[l]] ? i[a[l]] += 1 : i[a[l]] = 1);
                                  var d = e.split("").reduce((function(e, a) {
                                      return e[a] ? e[a] += 1 : e[a] = 1, e
                                  }), {});
                                  for (var u in i)
                                      if ((d[u] || 0) < i[u]) return {
                                          validGuess: !1,
                                          errorMessage: "Guess must contain ".concat(u.toUpperCase())
                                      };
                                  return {
                                      validGuess: !0
                                  }
                              }(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
                              o = t.validGuess,
                              r = t.errorMessage;
                          if (!o) return a.setAttribute("invalid", ""), void this.addToast(r || "Non valido quando il gioco si fa duro")
                      }
                      var n = function(e, a) {
                          for (var s = Array(a.length).fill(Ca), t = Array(a.length).fill(!0), o = Array(a.length).fill(!0), r = 0; r < e.length; r++) e[r] === a[r] && o[r] && (s[r] = Ia, t[r] = !1, o[r] = !1);
                          for (var n = 0; n < e.length; n++) {
                              var i = e[n];
                              if (t[n])
                                  for (var l = 0; l < a.length; l++) {
                                      var d = a[l];
                                      if (o[l] && i === d) {
                                          s[n] = Ta, o[l] = !1;
                                          break
                                      }
                                  }
                          }
                          return s
                      }(s, this.solution);
                      this.evaluations[this.rowIndex] = n, this.letterEvaluations = Oa(this.boardState, this.evaluations), a.evaluation = this.evaluations[this.rowIndex], this.rowIndex += 1;
                      var i = this.rowIndex >= 6,
                          l = n.every((function(e) {
                              return "correct" === e
                          }));
                      if (i || l) Xa({
                          isWin: l,
                          isStreak: !!this.lastCompletedTs && 1 === $a(new Date(this.lastCompletedTs), new Date),
                          numGuesses: this.rowIndex
                      }), ja({
                          lastCompletedTs: Date.now()
                      }), this.gameStatus = l ? Za : es, Da("event", "level_end", {
                          level_name: Fa(this.solution),
                          num_guesses: this.rowIndex,
                          success: l
                      });
                      this.tileIndex = 0, this.canInput = !1, ja({
                          rowIndex: this.rowIndex,
                          boardState: this.boardState,
                          evaluations: this.evaluations,
                          solution: this.solution,
                          gameStatus: this.gameStatus,
                          lastPlayedTs: Date.now()
                      })
                  }
              }
          }, {
              key: "addLetter",
              value: function(e) {
                  this.gameStatus === Qa && (this.canInput && (this.tileIndex >= 6 || (this.boardState[this.rowIndex] += e, this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]), this.tileIndex += 1)))
              }
          }, {
              key: "removeLetter",
              value: function() {
                  if (this.gameStatus === Qa && this.canInput && !(this.tileIndex <= 0)) {
                      this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                      var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                      this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"), e.removeAttribute("invalid"), this.tileIndex -= 1
                  }
              }
          }, {
              key: "submitGuess",
              value: function() {
                  if (this.gameStatus === Qa && this.canInput) {
                      if (6 !== this.tileIndex) return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Non abbastanza lettere");
                      this.evaluateRow()
                  }
              }
          }, {
              key: "addToast",
              value: function(e, a) {
                  var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                      t = document.createElement("game-toast");
                  t.setAttribute("text", e), a && t.setAttribute("duration", a), s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
              }
          }, {
              key: "sizeBoard",
              value: function() {
                  var e = this.shadowRoot.querySelector("#board-container"),
                      a = Math.min(Math.floor(e.clientHeight * (6 / 6)), 350),
                      s = 6 * Math.floor(a / 6);
                  this.$board.style.width = "".concat(a, "px"), this.$board.style.height = "".concat(s, "px")
              }
          }, {
              key: "showStatsModal",
              value: function() {
                  var e = this.$game.querySelector("game-modal"),
                      a = document.createElement("game-stats");
                  this.gameStatus === Za && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex), a.gameApp = this, e.appendChild(a), e.setAttribute("open", "")
              }
          }, {
              key: "showHelpModal",
              value: function() {
                  var e = this.$game.querySelector("game-modal");
                  e.appendChild(document.createElement("game-help")), e.setAttribute("open", "")
              }
          }, {
              key: "connectedCallback",
              value: function() {
                  var e = this;
                  this.shadowRoot.appendChild(Ka.content.cloneNode(!0)), this.$game = this.shadowRoot.querySelector("#game"), this.$board = this.shadowRoot.querySelector("#board"), this.$keyboard = this.shadowRoot.querySelector("game-keyboard"), this.sizeBoard(), this.lastPlayedTs || setTimeout((function() {
                      return e.showHelpModal()
                  }), 100);
                  for (var a = 0; a < 6; a++) {
                      var s = document.createElement("game-row");
                      s.setAttribute("letters", this.boardState[a]), s.setAttribute("length", 6), this.evaluations[a] && (s.evaluation = this.evaluations[a]), this.$board.appendChild(s)
                  }
                  this.$game.addEventListener("game-key-press", (function(a) {
                      var s = a.detail.key;
                      "←" === s || "Backspace" === s ? e.removeLetter() : "↵" === s || "Enter" === s ? e.submitGuess() : Ga.includes(s.toLowerCase()) && e.addLetter(s.toLowerCase())
                  })), this.$game.addEventListener("game-last-tile-revealed-in-row", (function(a) {
                      e.$keyboard.letterEvaluations = e.letterEvaluations, e.rowIndex < 7 && (e.canInput = !0);
                      var s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                      (a.path || a.composedPath && a.composedPath()).includes(s) && ([Za, es].includes(e.gameStatus) && (e.restoringFromLocalStorage ? e.showStatsModal() : (e.gameStatus === Za && (s.setAttribute("win", ""), e.addToast(as[e.rowIndex - 1], 2e3)), e.gameStatus === es && e.addToast(e.solution.toUpperCase(), 1 / 0), setTimeout((function() {
                          e.showStatsModal()
                      }), 2500))), e.restoringFromLocalStorage = !1)
                  })), this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                      var s = a.detail,
                          t = s.name,
                          o = s.checked,
                          r = s.disabled;
                      switch (t) {
                          case "hard-mode":
                              return void(r ? e.addToast("Si può attivare 'il gioco si fa duro' solo all'inizio di una partita", 1500, !0) : (e.hardMode = o, ja({
                                  hardMode: o
                              })))
                      }
                  })), this.shadowRoot.getElementById("settings").addEventListener("click", (function(a) {
                      var s = e.$game.querySelector("game-page"),
                          t = document.createTextNode("Impostazioni");
                      s.appendChild(t);
                      var o = document.createElement("game-settings");
                      o.setAttribute("slot", "content"), o.gameApp = e, s.appendChild(o), s.setAttribute("open", "")
                  })), this.shadowRoot.getElementById("help").addEventListener("click", (function(a) {
                      var s = e.$game.querySelector("game-page"),
                          t = document.createTextNode("Come giocare");
                      s.appendChild(t);
                      var o = document.createElement("game-help");
                      o.setAttribute("page", ""), o.setAttribute("slot", "content"), s.appendChild(o), s.setAttribute("open", "")
                  })), window.addEventListener("resize", this.sizeBoard.bind(this))
              }
          }, {
              key: "disconnectedCallback",
              value: function() {}
          }, {
              key: "debugTools",
              value: function() {
                  var e = this;
                  this.shadowRoot.getElementById("debug-tools").appendChild(Va.content.cloneNode(!0)), this.shadowRoot.getElementById("toast").addEventListener("click", (function(a) {
                      e.addToast("hello world")
                  })), this.shadowRoot.getElementById("modal").addEventListener("click", (function(a) {
                      var s = e.$game.querySelector("game-modal");
                      s.textContent = "hello plz", s.setAttribute("open", "")
                  })), this.shadowRoot.getElementById("reveal").addEventListener("click", (function() {
                      e.evaluateRow()
                  })), this.shadowRoot.getElementById("shake").addEventListener("click", (function() {
                      e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
                  })), this.shadowRoot.getElementById("bounce").addEventListener("click", (function() {
                      var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                      "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "")
                  }))
              }
          }]), t
      }(c(HTMLElement));
  customElements.define("game-app", ss);
  var ts = document.createElement("template");
  ts.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
  var os = function(e) {
      n(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), (e = a.call(this)).attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "connectedCallback",
          value: function() {
              var e = this;
              this.shadowRoot.appendChild(ts.content.cloneNode(!0)), this.addEventListener("click", (function(a) {
                  e.shadowRoot.querySelector(".content").classList.add("closing")
              })), this.shadowRoot.addEventListener("animationend", (function(a) {
                  "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"), e.removeChild(e.firstChild), e.removeAttribute("open"))
              }))
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-modal", os);
  var rs = document.createElement("template");
  rs.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
  var ns = document.createElement("template");
  ns.innerHTML = "\n  <button>key</button>\n";
  var is = document.createElement("template");
  is.innerHTML = '\n  <div class="spacer"></div>\n';
  var ls = [
          ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
          ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"],
          ["↵", "z", "x", "c", "v", "b", "n", "m", "←"]
      ],
      ds = function(e) {
          n(t, e);
          var a = h(t);

          function t() {
              var e;
              return s(this, t), r(p(e = a.call(this)), "_letterEvaluations", {}), e.attachShadow({
                  mode: "open"
              }), e
          }
          return o(t, [{
              key: "letterEvaluations",
              set: function(e) {
                  this._letterEvaluations = e, this._render()
              }
          }, {
              key: "dispatchKeyPressEvent",
              value: function(e) {
                  this.dispatchEvent(new CustomEvent("game-key-press", {
                      bubbles: !0,
                      composed: !0,
                      detail: {
                          key: e
                      }
                  }))
              }
          }, {
              key: "connectedCallback",
              value: function() {
                  var e = this;
                  this.shadowRoot.appendChild(rs.content.cloneNode(!0)), this.$keyboard = this.shadowRoot.getElementById("keyboard"), this.$keyboard.addEventListener("click", (function(a) {
                      var s = a.target.closest("button");
                      s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
                  })), window.addEventListener("keydown", (function(a) {
                      if (!0 !== a.repeat) {
                          var s = a.key,
                              t = a.metaKey,
                              o = a.ctrlKey;
                          t || o || (Ga.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s)
                      }
                  })), this.$keyboard.addEventListener("transitionend", (function(a) {
                      var s = a.target.closest("button");
                      s && e.$keyboard.contains(s) && s.classList.remove("fade")
                  })), ls.forEach((function(a) {
                      var s = document.createElement("div");
                      s.classList.add("row"), a.forEach((function(e) {
                          var a;
                          if (e >= "a" && e <= "z" || "←" === e || "↵" === e) {
                              if ((a = ns.content.cloneNode(!0).firstElementChild).dataset.key = e, a.textContent = e, "←" === e) {
                                  var t = document.createElement("game-icon");
                                  t.setAttribute("icon", "backspace"), a.textContent = "", a.appendChild(t), a.classList.add("one-and-a-half")
                              }
                              "↵" == e && (a.textContent = "enter", a.classList.add("one-and-a-half"))
                          } else(a = is.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                          s.appendChild(a)
                      })), e.$keyboard.appendChild(s)
                  })), this._render()
              }
          }, {
              key: "_render",
              value: function() {
                  for (var e in this._letterEvaluations) {
                      var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
                      a.dataset.state = this._letterEvaluations[e], a.classList.add("fade")
                  }
              }
          }]), t
      }(c(HTMLElement));

  function us(e, a, s) {
      try {
          if (o = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(o) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(o.substr(0, 4))) && void 0 !== navigator.share && navigator.canShare && navigator.canShare(e)) navigator.share(e);
          else {
              var t = document.createElement("textarea");
              t.textContent = e.text, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t), a()
          }
      } catch (e) {
          s()
      }
      var o
  }
  customElements.define("game-keyboard", ds);
  var cs = document.createElement("template");
  cs.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistiche</h1>\n    <div id="statistics"></div>\n    <h1>Distribuzione dei tentativi</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer">\n      <div class="countdown">\n        <h1>Prossimo PARLE</h1>\n        <div id="timer">\n          <div class="statistic-container">\n            <div class="statistic timer">\n              <countdown-timer></countdown-timer>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="share">\n        <button id="share-button">\n          Condividi \n        </button>\n      </div>\n    </div>\n  </div>\n';
  var ps = document.createElement("template");
  ps.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
  var ms = document.createElement("template");
  ms.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
  var hs = {
          currentStreak: "Vinte di fila",
          maxStreak: "Record di vittorie in fila",
          winPercentage: "% Vittorie",
          gamesPlayed: "Partite",
          gamesWon: "Vinte",
          averageGuesses: "Numero medio di tentativi"
      },
      ys = function(e) {
          n(t, e);
          var a = h(t);

          function t() {
              var e;
              return s(this, t), r(p(e = a.call(this)), "stats", {}), r(p(e), "gameApp", void 0), e.attachShadow({
                  mode: "open"
              }), e.stats = Ua(), e
          }
          return o(t, [{
              key: "connectedCallback",
              value: function() {
                  var e = this;
                  this.shadowRoot.appendChild(cs.content.cloneNode(!0));
                  for (var a = this.shadowRoot.getElementById("statistics"), s = this.shadowRoot.getElementById("guess-distribution"), t = Math.max.apply(Math, g(Object.values(this.stats.guesses))), o = 1; o < Object.keys(this.stats.guesses).length; o++) {
                      var r = o,
                          n = this.stats.guesses[o],
                          i = ms.content.cloneNode(!0),
                          l = Math.max(7, Math.round(n / t * 100));
                      i.querySelector(".guess").textContent = r;
                      var d = i.querySelector(".graph-bar");
                      if (d.style.width = "".concat(l, "%"), "number" == typeof n) {
                          i.querySelector(".num-guesses").textContent = n, n > 0 && d.classList.add("align-right");
                          var u = parseInt(this.getAttribute("highlight-guess"), 10);
                          u && o === u && d.classList.add("highlight")
                      }
                      s.appendChild(i)
                  } ["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function(s) {
                      var t = hs[s],
                          o = e.stats[s],
                          r = ps.content.cloneNode(!0);
                      r.querySelector(".label").textContent = t, r.querySelector(".statistic").textContent = o, a.appendChild(r)
                  })), this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function(a) {
                      a.preventDefault(), a.stopPropagation();
                      us(function(e) {
                          var a = e.evaluations,
                              s = e.dayOffset,
                              t = e.rowIndex,
                              o = e.isHardMode,
                              r = e.isWin,
                              n = JSON.parse(window.localStorage.getItem(j)),
                              i = JSON.parse(window.localStorage.getItem(S)),
                              l = "Par🇮🇹le ".concat(s);
                          l += " ".concat(r ? t : "X", "/").concat(6), o && (l += "*");
                          var d = "";
                          return a.forEach((function(e) {
                              e && (e.forEach((function(e) {
                                  if (e) {
                                      var a = "";
                                      switch (e) {
                                          case Ia:
                                              a = function(e) {
                                                  return e ? "🟧" : "🟩"
                                              }(i);
                                              break;
                                          case Ta:
                                              a = function(e) {
                                                  return e ? "🟦" : "🟨"
                                              }(i);
                                              break;
                                          case Ca:
                                              a = function(e) {
                                                  return e ? "⬛" : "⬜"
                                              }(n)
                                      }
                                      d += a
                                  }
                              })), d += "\n")
                          })), {
                              text: "".concat(l, "\n\n").concat(d.trimEnd())
                          }
                      }({
                          evaluations: e.gameApp.evaluations,
                          dayOffset: e.gameApp.dayOffset,
                          rowIndex: e.gameApp.rowIndex,
                          isHardMode: e.gameApp.hardMode,
                          isWin: e.gameApp.gameStatus === Za
                      }), (function() {
                          e.gameApp.addToast("Risultati copiati", 2e3, !0)
                      }), (function() {
                          e.gameApp.addToast("Errore nella condivisione", 2e3, !0)
                      }))
                  }))
              }
          }]), t
      }(c(HTMLElement));
  customElements.define("game-stats", ys);
  var gs = document.createElement("template");
  gs.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
  var bs = function(e) {
      n(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), (e = a.call(this)).attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "connectedCallback",
          value: function() {
              var e = this;
              this.shadowRoot.appendChild(gs.content.cloneNode(!0)), this.shadowRoot.querySelector(".container").addEventListener("click", (function(a) {
                  a.stopPropagation(), e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""), e.dispatchEvent(new CustomEvent("game-switch-change", {
                      bubbles: !0,
                      composed: !0,
                      detail: {
                          name: e.getAttribute("name"),
                          checked: e.hasAttribute("checked"),
                          disabled: e.hasAttribute("disabled")
                      }
                  }))
              }))
          }
      }], [{
          key: "observedAttributes",
          get: function() {
              return ["checked"]
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-switch", bs);
  var fs = document.createElement("template");
  fs.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Indovina delle <strong>PARoLE</strong> di 6 lettere in 6 tentativi.</p>\n      <p>PAR🇮🇹LE è una versione italiana (non ufficiale) di <a href="https://powerlanguage.co.uk/wordle/">WORDLE</a></p>\n      <p>Dopo ogni tentativo, i colori delle tessere cambieranno per mostrarti quanto vicino sei andato ad indovinare la parola.</p>\n      <div class="examples">\n        <div class="example">\n          <div class="row">\n            <game-tile letter="b" evaluation="correct" reveal></game-tile>\n            <game-tile letter="u"></game-tile>\n            <game-tile letter="f"></game-tile>\n            <game-tile letter="f"></game-tile>\n            <game-tile letter="a"></game-tile>\n          </div>\n          <p>La lettera <strong>B</strong> è nella parola ed è nel posto giusto.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="p"></game-tile>\n            <game-tile letter="o"></game-tile>\n            <game-tile letter="r" evaluation="present" reveal></game-tile>\n            <game-tile letter="t"></game-tile>\n            <game-tile letter="o"></game-tile>\n          </div>\n          <p>La lettera <strong>R</strong> è nella parola ma nel posto sbagliato.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="v"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="g"></game-tile>\n            <game-tile letter="h" evaluation="absent" reveal></game-tile>\n            <game-tile letter="i"></game-tile>\n          </div>\n          <p>La lettera <strong>H</strong> non è nella parola.</p>\n        </div>\n      </div>\n      <p><strong>Un nuovo gioco di PAR🇮🇹LE ogni giorno!<strong></p>\n    </div>\n  </section>\n';
  var ks = function(e) {
      n(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), (e = a.call(this)).attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "connectedCallback",
          value: function() {
              this.shadowRoot.appendChild(fs.content.cloneNode(!0))
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-help", ks);
  var vs = document.createElement("template");
  vs.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
  var ws = function(e) {
      n(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), (e = a.call(this)).attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "connectedCallback",
          value: function() {
              var e = this;
              this.shadowRoot.appendChild(vs.content.cloneNode(!0)), this.shadowRoot.querySelector("game-icon").addEventListener("click", (function(a) {
                  e.shadowRoot.querySelector(".overlay").classList.add("closing")
              })), this.shadowRoot.addEventListener("animationend", (function(a) {
                  "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"), Array.from(e.childNodes).forEach((function(a) {
                      e.removeChild(a)
                  })), e.removeAttribute("open"))
              }))
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-page", ws);
  var xs = document.createElement("template");
  xs.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
  var zs = {
          help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
          settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
          backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
          close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
          share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
      },
      js = function(e) {
          n(t, e);
          var a = h(t);

          function t() {
              var e;
              return s(this, t), (e = a.call(this)).attachShadow({
                  mode: "open"
              }), e
          }
          return o(t, [{
              key: "connectedCallback",
              value: function() {
                  this.shadowRoot.appendChild(xs.content.cloneNode(!0));
                  var e = this.getAttribute("icon");
                  this.shadowRoot.querySelector("path").setAttribute("d", zs[e]), "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"), "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
              }
          }]), t
      }(c(HTMLElement));
  customElements.define("game-icon", js);
  var Ss = document.createElement("template");
  Ss.innerHTML = '\n  <div id="timer"></div>\n';
  var _s = 6e4,
      qs = 36e5,
      Es = function(e) {
          n(t, e);
          var a = h(t);

          function t() {
              var e;
              s(this, t), r(p(e = a.call(this)), "targetEpochMS", void 0), r(p(e), "intervalId", void 0), r(p(e), "$timer", void 0), e.attachShadow({
                  mode: "open"
              });
              var o = new Date;
              return o.setDate(o.getDate() + 1), o.setHours(0, 0, 0, 0), e.targetEpochMS = o.getTime(), e
          }
          return o(t, [{
              key: "padDigit",
              value: function(e) {
                  return e.toString().padStart(2, "0")
              }
          }, {
              key: "updateTimer",
              value: function() {
                  var e = (new Date).getTime(),
                      a = Math.floor(this.targetEpochMS - e),
                      s = Math.floor(a % 864e5 / qs),
                      t = Math.floor(a % qs / _s),
                      o = Math.floor(a % _s / 1e3),
                      r = "".concat(this.padDigit(s), ":").concat(this.padDigit(t), ":").concat(this.padDigit(o));
                  this.$timer.textContent = r
              }
          }, {
              key: "connectedCallback",
              value: function() {
                  var e = this;
                  this.shadowRoot.appendChild(Ss.content.cloneNode(!0)), this.$timer = this.shadowRoot.querySelector("#timer"), this.intervalId = setInterval((function() {
                      e.updateTimer()
                  }), 200)
              }
          }]), t
      }(c(HTMLElement));
  return customElements.define("countdown-timer", Es), e.CountdownTimer = Es, e.GameApp = ss, e.GameHelp = ks, e.GameIcon = js, e.GameKeyboard = ds, e.GameModal = os, e.GamePage = ws, e.GameRow = x, e.GameSettings = _a, e.GameStats = ys, e.GameSwitch = bs, e.GameThemeManager = _, e.GameTile = v, e.GameToast = Ea, Object.defineProperty(e, "__esModule", {
      value: !0
  }), e
}({});
