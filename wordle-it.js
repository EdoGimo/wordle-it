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
  var Aa = ["abachi","abadia","abadie","abasia","abasie","abaton","abazia","abazie","abbaca","abbaco","abbada","abbadi","abbado","abbaia","abbaio","abbate","abbati","abbiam","abbica","abbici","abbico","abbila","abbile","abbili","abbilo","abbimi","abbina","abbine","abbini","abbino","abbiti","abbona","abboni","abbono","abbuia","abbuio","abcasa","abcase","abcasi","abcaso","abdica","abdico","abduca","abduce","abduci","abduco","abelia","abelie","abenta","abenti","abento","aberra","aberri","aberro","abigei","abigeo","abiosi","abissa","abissi","abisso","abitai","abitar","abitua","abitui","abituo","abiura","abiure","abiuri","abiuro","abnega","abnego","abolii","abolir","abolla","abolle","aborra","aborre","aborri","aborro","aborti","aborto","abrada","abrade","abradi","abrado","abrasa","abrase","abrasi","abraso","abripa","abripi","abripo","abroga","abrogo","abside","absidi","abulia","abulie","abusai","abusar","acacia","acacie","acaica","acaici","acaico","acajou","acanti","acanto","acanzi","acarpa","acarpe","acarpi","acarpo","acaule","acauli","acazio","accada","accade","accadi","accado","accana","accani","accano","accapo","accasa","accasi","accaso","acceca","acceco","acceda","accede","accedi","accedo","accesa","accese","accesi","acceso","access","acciai","accidi","accisa","accise","accoda","accodi","accodo","accora","accori","accoro","accula","acculi","acculo","accura","accuri","accuro","accusa","accuse","accusi","accuso","acedia","acedie","acerba","acerbe","acerbi","acerbo","acerra","acerre","acervi","acervo","acetai","acetar","acetii","acetir","acheni","achira","achire","achiri","achiro","achiva","achive","achivi","achivo","acline","aclini","acolia","acolie","aconzi","acoria","acorie","acorma","acorme","acormi","acormo","acorne","acorni","acquai","acquar","acquea","acquee","acquei","acqueo","acquis","acrale","acrali","acrani","acrese","acresi","acridi","acrile","acrili","acroma","acrome","acromi","acromo","actina","actine","action","acuire","acuita","acuite","acuiti","acuito","acuiva","acuivi","acuivo","aculei","aculeo","acusma","acusmi","acutii","acutir","acuzie","adagia","adagio","adamas","adasti","adastî","adatta","adatte","adatti","adatto","addaci","addala","addale","addali","addalo","addami","addane","addano","addare","addata","addate","addati","addato","addava","addavi","addavo","addazi","addica","addice","addici","addico","addino","addire","addita","addite","additi","addito","addoga","addogo","addome","addomi","addona","addoni","addono","addopa","addopi","addopo","adduai","adduar","adduca","adduce","adduci","adduco","addure","adegua","adegui","adeguo","adelfa","adelfe","adelfi","adelfo","adempi","adendo","adenia","adenie","adente","adenti","adepta","adepte","adepti","adepto","aderba","aderbi","aderbo","aderga","aderge","adergi","adergo","aderii","aderir","aderse","adersi","aderta","aderte","aderti","aderto","adesai","adesar","adesca","adesco","adesso","adiamo","adiate","adibii","adibir","adidas","adimai","adimar","adimmo","adirai","adirar","adirci","adirei","adirla","adirle","adirli","adirlo","adirmi","adirne","adirsi","adirti","adirvi","adisca","adisce","adisci","adisco","adisse","adissi","adiste","adisti","adiuva","adiuvi","adiuvo","adnata","adnate","adnati","adnato","adobes","adonai","adonar","adonio","adonta","adonti","adonto","adoppi","adoppî","adopra","adopri","adopro","adorai","adorar","adorea","adoree","adorei","adoreo","adorna","adorne","adorni","adorno","adotta","adotti","adotto","adroma","adromi","adrone","adroni","adugge","aduggi","adugna","adugni","adugno","adulai","adular","adulta","adulte","adulti","adulto","adunai","adunar","adunca","adunco","adusai","adusar","adusta","aduste","adusti","adusto","adware","aeraci","aerala","aerale","aerali","aeralo","aerami","aerane","aerano","aerare","aerata","aerate","aerati","aerato","aerava","aeravi","aeravo","aerina","aerine","aerini","aerino","aerobi","aerosa","aerose","aerosi","aeroso","aetide","aetidi","afache","afagia","afagie","afasia","afasie","afelio","affama","affami","affamo","affare","affari","affida","affidi","affido","affila","affili","affilo","affina","affine","affini","affino","affisa","affisi","affiso","affoca","affoco","affoga","affogo","affuma","affumi","affumo","affusa","affusi","affuso","afgana","afgane","afgani","afgano","afilla","afille","afilli","afillo","afonia","afonie","africa","africi","africo","afrore","afrori","afrosa","afrose","afrosi","afroso","aftosa","aftose","aftosi","aftoso","agamia","agamie","agency","agenda","agende","agendo","agente","agenti","agents","agenza","agenzi","agenzo","agerai","agerei","aggela","aggeli","aggelo","aggera","aggere","aggeri","aggero","aggese","aggesi","aggira","aggiri","aggiro","aghini","aghino","agiaci","agiala","agiale","agiali","agialo","agiami","agiamo","agiane","agiano","agiara","agiare","agiari","agiaro","agiata","agiate","agiati","agiato","agiava","agiavi","agiavo","agimmo","agirai","agirci","agirei","agirle","agirmi","agirne","agirsi","agirti","agirvi","agisca","agisce","agisci","agisco","agisse","agissi","agiste","agisti","agitai","agitar","aglifa","aglife","aglifi","aglifo","agnati","agnato","agnina","agnine","agnini","agnino","agogna","agogni","agogno","agonia","agonie","agorai","agosta","agoste","agosti","agosto","agrafe","agrari","agrese","agresi","agrore","agrori","agrume","agrumi","aguati","aguato","aguzza","aguzze","aguzzi","aguzzo","ahinoi","aiduco","aikido","airbag","airbus","airone","aironi","aitaci","aitala","aitale","aitali","aitalo","aitami","aitano","aitare","aitata","aitate","aitati","aitato","aitava","aitavi","aitavo","aitino","aiughe","aiuola","aiuole","aiuoli","aiuolo","aiutai","aiutar","aizzai","aizzar","alacce","alacre","alacri","alaese","alaesi","alaggi","alagli","alalia","alalie","alammo","alando","alante","alanti","alarci","alarla","alarle","alarli","alarlo","alarmi","alarne","alarsi","alarti","alarvi","alasse","alassi","alaste","alasti","alauda","alaude","albagi","albana","albane","albani","albano","albasi","albata","albate","albedo","albera","albere","alberi","albero","albese","albesi","albica","albico","albina","albine","albini","albino","albite","albiti","albore","albori","albume","albumi","alcali","alcani","alcano","alcide","alcidi","alcole","alcoli","alcool","alcova","alcove","alcun'","alcuna","alcune","alcuni","alcuno","aldina","aldine","aldini","aldino","aldoli","aldolo","aldosi","aleggi","alense","alensi","alerai","alerei","alerte","alerti","alesai","alesar","aletta","alette","aletti","aletto","aleuta","aleute","aleuti","aleuto","alfana","alfane","alfine","alfura","alfure","alfuri","alfuro","algale","algali","algere","algica","algici","algico","algida","algide","algidi","algido","algina","algine","algore","algori","algosa","algose","algosi","algoso","aliaci","aliala","aliale","aliali","alialo","aliami","aliamo","aliane","aliano","aliare","aliata","aliate","aliati","aliato","aliava","aliavi","aliavo","aliena","aliene","alieni","alieno","aliese","aliesi","alinea","alisea","alisee","alisei","aliseo","alisma","alisme","alissi","alisso","alista","aliste","alisti","alitai","alitar","allaga","allago","allato","alleai","allear","allega","allego","allele","alleli","allelo","allena","alleni","alleno","alleva","allevi","allevo","allevî","alliba","allibi","allibo","allide","alliga","alligo","allisa","allise","allisi","alliso","alloca","alloco","allodi","alloga","allogo","allora","allori","alloro","alluce","alluci","alluda","allude","alludi","alludo","alluma","allume","allumi","allumo","alluna","alluni","alluno","allupa","allupi","allupo","allure","allusa","alluse","allusi","alluso","alluvi","almeno","almuzi","alnici","alnico","alobia","alobie","alobio","alogia","alogie","aloide","aloidi","aloina","aloine","alonai","alonar","alpaca","alpina","alpine","alpini","alpino","altana","altane","altare","altari","altera","altere","alteri","altero","altica","altina","altine","altini","altino","altore","altori","altrui","altura","alture","alucce","alunna","alunne","alunni","alunno","alvina","alvine","alvini","alvino","alzaci","alzaia","alzaie","alzala","alzale","alzali","alzalo","alzami","alzane","alzano","alzare","alzata","alzate","alzati","alzato","alzava","alzavi","alzavo","alzino","amache","amagli","amaide","amaidi","amammo","amando","amante","amanti","amanza","amanze","amarci","amarla","amarle","amarli","amarlo","amarmi","amarne","amarra","amarre","amarri","amarro","amarsi","amarti","amarvi","amasia","amasie","amasio","amasse","amassi","amaste","amasti","amator","ambage","ambagi","ambata","ambate","ambiai","ambiar","ambino","ambire","ambita","ambite","ambiti","ambito","ambiva","ambivi","ambivo","ambone","amboni","ambula","ambuli","ambulo","amebea","amebee","amebei","amebeo","amelia","amelie","amelli","amello","amente","amenti","amento","amenza","amenze","amerai","amerei","amiamo","amiate","amicai","amicar","amiche","amichi","amicon","amigas","amigos","amimia","amimie","amitti","amitto","amlira","amlire","ammaia","ammaio","ammala","ammali","ammalo","ammalî","ammara","ammari","ammaro","ammeta","ammeti","ammeto","ammide","ammidi","ammina","ammine","ammira","ammiri","ammiro","ammise","ammisi","ammodo","ammoni","ammore","ammori","ammusa","ammusi","ammuso","ammuta","ammuti","ammuto","amnios","amorea","amoree","amorei","amoreo","amorfa","amorfe","amorfi","amorfo","ampari","amparo","ampere","amplia","amplio","amputa","amputi","amputo","amurca","analda","anamni","ananas","ananke","anarco","anaria","anarie","anarii","anario","anatra","anatre","anatri","anatro","ancata","ancate","anchor","ancida","ancide","ancidi","ancido","ancien","ancile","ancili","ancisa","ancise","ancisi","anciso","ancona","ancone","ancora","ancore","ancori","ancoro","ancude","ancudi","ancóra","andana","andane","andare","andari","andata","andate","andati","andato","andava","andavi","andavo","andina","andine","andini","andino","anditi","andito","andrai","andrei","andria","andrii","anelai","anelar","anella","anelli","anello","anemia","anemie","anervi","anfana","anfani","anfano","anfese","anfesi","anfibi","anfibo","anfora","anfore","angami","angamo","angari","angarî","angela","angeli","angelo","angere","angeva","angevi","angevo","angina","angine","angola","angoli","angolo","angone","angoni","angora","angore","anidra","anidre","anidri","anidro","animai","animar","animus","aninga","anione","anioni","anista","aniste","anisti","anisto","anitra","anitre","annale","annali","annasa","annasi","annaso","annata","annate","annega","annego","annera","anneri","annero","annida","annidi","annido","annoda","annodi","annodo","annoia","annoio","annoma","annomi","annomo","annona","annone","annosa","annose","annosi","annoso","annota","annoti","annoto","annuii","annuir","annusa","annusi","annuso","anobio","anoica","anoici","anoico","anomia","anomie","anorak","anosia","anosie","anotia","anotie","ansaci","ansale","ansami","ansane","ansano","ansare","ansata","ansate","ansati","ansato","ansava","ansavi","ansavo","ansiai","ansiar","ansima","ansime","ansimi","ansimo","ansino","ansiti","ansito","antela","antele","anteli","antemi","antera","antere","antesi","anthem","antica","antico","antina","antine","antitg","antodi","anturi","anuria","anurie","anzese","anzesi","aocchi","apache","apachi","apatia","apatie","aperse","apersi","aperta","aperte","aperti","aperto","apiari","apiata","apiate","apiati","apiato","apione","apioni","aplite","apliti","aplomb","apogei","apogeo","apolli","apollo","aponia","aponie","aporia","aporie","appaci","appaga","appago","appaia","appaio","appara","appare","appari","apparo","appeal","appena","appeni","appeno","appesa","appese","appesi","appeso","applet","appone","apponi","appore","appose","apposi","apprua","apprui","appruo","appura","appuri","appuro","aprano","aprica","aprici","aprico","aprila","aprile","aprili","aprilo","aprimi","aprine","aprire","aprite","apriti","apriva","aprivi","aprivo","aprono","apside","apsidi","aptera","aptere","apteri","aptero","apuana","apuane","apuani","apuano","aquari","aquila","aquile","aquosa","aquose","aquosi","aquoso","aracea","aracee","aragli","aragna","aragne","aragni","aragno","araldi","araldo","aralia","aralie","aramea","aramee","aramei","arameo","arammo","arance","aranci","arando","arante","aranti","ararci","ararla","ararle","ararli","ararlo","ararmi","ararne","ararsi","ararti","ararvi","arasse","arassi","araste","arasti","arator","aratri","aratro","arazzi","arazzo","arbana","arbane","arbani","arbano","arbora","arbore","arbori","arboro","arbuti","arbuto","arcaci","arcala","arcale","arcali","arcalo","arcame","arcami","arcana","arcane","arcani","arcano","arcare","arcata","arcate","arcati","arcato","arcava","arcavi","arcavo","arcese","arcesi","archea","archee","archei","archeo","arcide","arcidi","arcuai","arcuar","ardano","ardere","ardete","ardeva","ardevi","ardevo","ardica","ardici","ardila","ardile","ardili","ardilo","ardimi","ardine","ardire","ardiri","ardita","ardite","arditi","ardito","ardiva","ardivi","ardivo","ardono","ardore","ardori","areaci","areala","areale","areali","arealo","areami","areane","areano","areare","areata","areate","areati","areato","areava","areavi","areavo","areche","areica","areici","areico","areino","arella","arelle","aremme","arenai","arenar","arengo","arente","arenti","areola","areole","arerai","arerei","argali","argani","argano","argina","argine","argini","argino","argiva","argive","argivi","argivo","argots","arguii","arguir","arguta","argute","arguti","arguto","ariamo","ariana","ariane","ariani","ariano","ariate","arieta","ariete","arieti","arieto","arilli","arillo","aringa","aringo","arinia","arinie","ariosa","ariose","ariosi","arioso","arista","ariste","aritma","aritme","aritmi","aritmo","armaci","armadi","armala","armale","armali","armalo","armami","armane","armano","armare","armata","armate","armati","armato","armava","armavi","armavo","armena","armene","armeni","armeno","armese","armesi","armino","armoni","arneis","arnese","arnesi","arnica","arnina","arnine","arnini","arnino","arpese","arpesi","arpica","arpico","arpona","arpone","arponi","arpono","arrapa","arrapi","arrapo","arrays","arreca","arreco","arreda","arredi","arredo","arrena","arreni","arreno","arresa","arrese","arresi","arreso","arrida","arride","arridi","arrido","arrisa","arrise","arrisi","arriso","arriva","arrivi","arrivo","arroga","arroge","arrogi","arrogo","arrola","arroli","arrolo","arrosa","arrosi","arroso","arrota","arrote","arroti","arroto","arsaci","arsala","arsale","arsami","arsane","arsasi","arsati","arsavi","arseci","arsele","arsemi","arsene","arsero","arsesi","arseti","arsevi","arsici","arsile","arsili","arsimi","arsina","arsine","arsire","arsisi","arsita","arsite","arsiti","arsito","arsiva","arsivi","arsivo","arsoci","arsole","arsoli","arsolo","arsomi","arsone","arsosi","arsoti","arsovi","arsura","arsure","artaci","artala","artale","artali","artalo","artami","artane","artano","artare","artata","artate","artati","artato","artava","artavi","artavo","artese","artesi","artica","artici","artico","artino","aruaca","aruaco","arussa","arusse","arussi","arusso","arvale","arvali","arzese","arzesi","asadas","asados","ascari","ascaro","ascesa","ascese","ascesi","asceso","asceta","ascete","asceti","asciai","asciar","ascidi","ascino","ascisc","ascita","ascite","asciti","ascito","ascosa","ascose","ascosi","ascoso","ascrea","ascree","ascrei","ascreo","aselli","asello","asepsi","ashram","asiaca","asiaci","asiaco","asiago","asiana","asiane","asiani","asiano","asinai","asolai","asolar","aspata","aspate","aspide","aspidi","aspina","aspine","aspini","aspino","aspira","aspiri","aspiro","assale","assali","assedi","assedî","assese","assesi","asseta","asseti","asseto","assida","asside","assidi","assido","assile","assili","assina","assine","assira","assire","assiri","assiro","assisa","assise","assisi","assiso","assist","assiti","assito","associ","assoda","assodi","assodo","assola","assoli","assolo","assona","assone","assoni","assono","assuma","assume","assumi","assumo","astaci","astaco","astata","astate","astati","astato","astemi","astiai","astiar","astice","astici","astila","astile","astili","astilo","astina","astine","astino","astore","astori","astrae","astrai","astrar","astuta","astute","astuti","astuto","atelia","atelie","atenei","ateneo","atimia","atimie","atipia","atipie","atleta","atlete","atleti","atolli","atollo","atonia","atonie","atopia","atopie","atraci","atrica","atrici","atrico","atroca","atroce","atroci","atroco","atropa","atrope","atropi","atropo","attaci","attala","attale","attali","attalo","attami","attane","attano","attare","attata","attate","attati","attato","attava","attavi","attavo","attedi","attedî","attela","atteli","attelo","attera","attere","atteri","attero","attesa","attese","attesi","atteso","attica","attici","attico","attila","attili","attimi","attimo","attini","attino","attira","attiri","attiro","attiva","attive","attivi","attivo","attore","attori","attrae","attrai","attrar","attuai","attuar","attuta","attuti","attuto","aucuba","aucube","aucupi","audace","audaci","auditi","audito","augite","augiti","augnai","augnar","augura","augure","auguri","auguro","auleta","aulete","auleti","aulica","aulici","aulico","aulire","aulita","aulite","auliti","aulito","auliva","aulivi","aulivo","aunese","aunesi","auraci","aurala","aurale","aurali","auralo","aurami","aurane","aurano","aurare","aurata","aurate","aurati","aurato","aurava","auravi","auravo","aurica","aurici","aurico","auriga","aurino","aurita","aurite","auriti","aurito","aurora","aurore","aurosa","aurose","aurosi","auroso","ausili","ausoni","austri","austro","automa","automi","autore","autori","auxina","auxine","avacci","avalla","avalli","avallo","avalve","avalvi","avance","avania","avanie","avant'","avanti","avanza","avanzi","avanzo","avaria","avarie","avario","avatar","avella","avelle","avelli","avello","avelta","avelte","avelti","avelto","avemmo","avendo","avente","aventi","avenue","averci","averla","averle","averli","averlo","avermi","averne","averni","averno","aversa","averse","aversi","averso","averta","averte","averti","averto","avervi","avesse","avessi","aveste","avesti","aviana","aviane","aviani","aviano","aviare","aviari","aviera","aviere","avieri","avocai","avocar","avochi","avorio","avorni","avremo","avrete","avulsa","avulse","avulsi","avulso","avvale","avvali","avveda","avvede","avvedi","avvedo","avvela","avveli","avvelo","avvena","avveni","avveno","avvera","avveri","avvero","avviai","avviar","avvide","avvidi","avvien","avvina","avvini","avvino","avvisa","avvisi","avviso","avvita","avviti","avvito","avviva","avvivi","avvivo","avvoca","avvoco","azalea","azalee","aziaca","aziaci","aziaco","azigos","azimut","aziona","azione","azioni","aziono","azoica","azoici","azoico","azolla","azolle","azonio","azotai","azotar","azteca","azteco","azygos","azzera","azzeri","azzero","azzima","azzime","azzimi","azzimo","babaco","babbea","babbee","babbei","babbeo","babele","babeli","babies","bacaci","bacaia","bacaie","bacaio","bacala","bacale","bacali","bacalo","bacami","bacane","bacano","bacare","bacata","bacate","bacati","bacato","bacava","bacavi","bacavo","baccai","baccar","bacche","bacchi","baciai","baciar","bacile","bacili","bacini","bacino","backup","bacoli","bacolo","bacone","baconi","baculi","baculo","badaci","badala","badale","badali","badalo","badami","badane","badano","badare","badata","badate","badati","badato","badava","badavi","badavo","badgia","badgio","badile","badili","badino","baeria","baerie","baffon","baggea","baggee","baggei","baggeo","bagher","bagigi","baglio","bagnai","bagnar","bagoba","bagobe","bagobi","bagobo","bagola","bagoli","bagolo","baiaci","baiala","baiale","baiali","baialo","baiami","baiamo","baiana","baiane","baiani","baiano","baiare","baiata","baiate","baiati","baiato","baiava","baiavi","baiavo","baiese","baiesi","bailey","baiona","baione","baioni","baiosa","baiose","baiosi","baioso","bairam","baiuli","baiulo","balani","balano","balata","balate","balbai","balbar","balboa","balchi","balena","balene","baleni","baleno","balera","balere","balire","balita","balite","baliti","balito","baliva","balivi","balivo","ballad","ballai","ballar","ballon","balnei","balneo","baloge","balogi","baltei","balteo","baluba","baluci","balzai","balzar","bambin","banale","banali","banana","banane","banani","banano","banati","banato","banche","banchi","bandai","bandii","bandir","bangio","banina","banine","banini","banino","banjar","banjos","banker","bannai","bannar","banner","bantam","banzai","baobab","baraci","barale","barami","barane","barano","barare","barata","barate","barati","barato","barava","baravi","baravo","barbai","barbar","barbet","barbie","barbio","barbon","barche","barchi","bardai","bardar","barena","barene","bareni","bareno","barese","baresi","barica","barici","barico","barile","barili","barino","barite","bariti","barman","barmen","barnum","baroli","barolo","barona","barone","baroni","barono","barrai","barrar","barrel","barrii","barrio","barrir","barsoi","barzoi","basaci","basala","basale","basali","basalo","basami","basane","basano","basare","basata","basate","basati","basato","basava","basavi","basavo","basche","baschi","baseni","baseno","basica","basici","basico","basidi","basini","basino","basire","basita","basite","basiti","basito","basiva","basivi","basivo","basket","basola","basole","basoli","basolo","bassai","bassar","bastai","bastar","bastia","bastie","bastii","bastir","basuta","basute","basuti","basuto","bataia","bataie","batali","batalo","batata","batate","batava","batave","batavi","batavo","bateau","bateca","bateia","batida","batoci","batola","batole","batoli","batolo","battei","batter","batton","baulai","baular","bautta","bautte","bavara","bavare","bavari","bavaro","bavera","bavere","baveri","bavero","bavosa","bavose","bavosi","bavoso","bayram","bazaar","bazuca","bazzon","bdelli","beacon","beagle","beagli","beammo","beando","beante","beanti","bearci","bearla","bearle","bearli","bearlo","bearmi","bearne","bearsi","bearti","bearvi","beasse","beassi","beaste","beasti","beator","beauty","beccai","beccar","becche","becchi","becera","becere","beceri","becero","becher","bedani","bedano","beeper","beerai","beerei","befana","befane","beffai","beffar","begaci","begala","begale","begali","begalo","begami","begane","begano","begare","begata","begate","begati","begato","begava","begavi","begavo","beggia","beggio","begola","begoli","begolo","begums","beiamo","beiate","belaci","belala","belale","belali","belalo","belami","belane","belano","belare","belata","belate","belati","belato","belava","belavi","belavo","belghe","belino","bellai","bellar","bellum","beluga","bemina","bemine","bemini","bemino","bendai","bendar","benefa","benese","benesi","benino","benone","bentos","benzoe","benzoi","bercia","bercio","bergli","berlic","bernia","bernie","berrai","berrei","bescia","bescio","bestia","bestie","betica","betici","betico","betili","betilo","betula","betule","bevano","bevera","bevere","beveri","bevero","bevete","beveva","bevevi","bevevo","bevici","bevila","bevile","bevili","bevilo","bevimi","bevine","beviti","bevola","bevole","bevone","bevoni","bevono","bevuta","bevute","bevuti","bevuto","bezoar","bhakti","biacca","biacco","biadai","biadar","bianca","bianco","biarca","biarco","biasci","biasmi","biasmo","biasse","biassi","bibace","bibaci","bibbia","bibbie","bibbio","bibita","bibite","bibula","bibule","bibuli","bibulo","bicona","bicone","biconi","bidona","bidone","bidoni","bidono","bieche","biechi","biella","bielle","bienne","bienni","bierre","bietta","biette","bifase","bifasi","bifera","bifere","biferi","bifero","biffai","biffar","bifida","bifide","bifidi","bifido","bifora","bifore","bifuel","bifune","bifuni","bigama","bigame","bigami","bigamo","bigari","bigaro","bigati","bigato","bigiai","bigiar","bigini","bigino","biglia","biglie","bigoli","bigolo","bijoux","biking","bikini","bilama","bileni","bilica","bilici","bilico","bilina","biline","biloba","bilobe","bilobi","bilobo","biluce","bimana","bimane","bimani","bimano","bimare","bimari","bimbon","binaci","binala","binale","binali","binalo","binami","binane","binano","binare","binari","binata","binate","binati","binato","binava","binavi","binavo","binder","binese","binesi","binino","binodi","binodo","binomi","binuba","binube","binubi","binubo","biocco","biogas","biolca","biolco","bionda","bionde","biondi","biondo","bionte","bionti","biopic","biosce","biosio","biotta","biotte","biotti","biotto","bipala","bipara","bipare","bipari","biparo","bipede","bipedi","bipoli","bipolo","birchi","bircia","bircio","birdie","bireme","biremi","birrai","bisava","bisave","bisavi","bisavo","bisaya","bische","biscia","biseca","biseco","bisomi","bisomo","bissai","bissar","bistra","bistri","bistro","bitini","bitmap","bittai","bittar","bitter","bituba","bitube","bitubi","bitubo","bituma","bitume","bitumi","bitumo","biutai","biutar","biveri","bivero","bizona","bizone","blanda","blande","blandi","blando","blasma","blasmi","blasmo","blasta","blasti","blasto","blatta","blatte","blazar","blazer","bleffa","bleffi","bleffo","blemma","blemme","blemmi","blemmo","blenda","blende","blenni","blinda","blinde","blindi","blindo","blinis","blobba","blobbi","blobbo","blocca","blocco","blogga","bloggo","blonda","blonde","blouse","bluffa","bluffi","bluffo","bluffs","bluray","bmovie","boards","boaria","boarie","boario","bobbai","bobbar","bobina","bobine","bobini","bobino","boccai","boccar","bocche","bocchi","boccia","boccio","bodies","bodini","bodino","bodoni","bogara","bogare","boiara","boiare","boiari","boiaro","boiata","boiate","boiler","boites","bolare","bolari","boleri","bolero","bolese","bolesi","boleti","boleto","bolgia","bolide","bolidi","bolina","boline","bolini","bolino","bollai","bollar","bollii","bollir","bomata","bomate","bomati","bomato","bombai","bombar","bomber","bombii","bombir","bonari","bonbon","bondei","bonese","bonesi","bonghi","bongos","bonobi","bonobo","bonona","bonone","bononi","bonsai","boogie","boomer","borace","boraci","borati","borato","bordai","bordar","borese","boresi","borghi","boriai","boriar","borica","borici","borico","borina","borine","borini","borino","borire","borita","borite","boriti","borito","boriva","borivi","borivo","bornio","borora","borore","borori","bororo","borosa","borose","borrai","borrar","borrii","borrir","borsai","boruca","boruri","boruro","borzoi","bosana","bosane","bosani","bosano","boschi","bosina","bosine","bosini","bosino","bosone","bosoni","bossea","bossee","bossei","bosseo","bostik","boston","botola","botole","botoli","botolo","botrio","bottai","bottar","bottom","botton","bouffe","bouffi","bounce","bounty","bovara","bovare","bovari","bovaro","bovese","bovesi","bovide","bovidi","bovile","bovili","bovina","bovine","bovini","bovino","bovoli","bovolo","boxaci","boxala","boxale","boxali","boxalo","boxami","boxane","boxano","boxare","boxata","boxate","boxati","boxato","boxava","boxavi","boxavo","boxers","boxeur","boxing","boxino","boxset","bozzai","bozzar","bracca","bracci","bracco","brache","brachi","braghe","braghi","bragia","bragie","brahui","braida","braide","braire","braita","braite","braiti","braito","braiva","braivi","braivo","bramai","bramar","bramii","bramir","bramma","bramme","brammi","branca","branco","branda","brande","brandi","brando","brandy","brasai","brasar","brasca","bratta","bratti","bratto","bravai","bravar","breaks","brecce","brecci","bregma","bregmi","brenna","brenne","brenta","brente","bresca","bretta","brette","bretti","bretto","breuca","breuco","brevia","brevio","brexit","brezel","brezza","brezze","brezzi","brezzo","bricca","bricco","bricia","bricie","bricio","bridge","briffa","briffi","briffo","brigai","brigar","brighe","brighi","brilla","brille","brilli","brillo","brinai","brinar","brinci","brinda","brindi","brindo","briosa","briose","briosi","brioso","brixia","brocca","brocce","brocci","brocco","broche","brogia","brogio","brogli","broili","broilo","broker","bromio","bronce","bronci","bronco","bronza","bronzi","bronzo","brosce","brovai","brovar","brucai","brucar","brucea","brucee","bruchi","brucia","brucii","brucio","brughi","bruire","bruita","bruite","bruiti","bruito","bruiva","bruivi","bruivo","brulla","brulle","brulli","brullo","brumai","brunch","brunii","brunir","brusca","brusco","brusii","brusio","brusir","brutta","brutte","brutti","brutto","bruzia","bruzie","bruzii","bruzio","buacci","bubaci","bubala","bubale","bubali","bubalo","bubami","bubane","bubano","bubare","bubata","bubate","bubati","bubato","bubava","bubavi","bubavo","bubino","bubola","buboli","bubolo","bubone","buboni","bucaci","bucala","bucale","bucali","bucalo","bucami","bucane","bucano","bucare","bucata","bucate","bucati","bucato","bucava","bucavi","bucavo","buccia","buccio","buceri","bucero","bucina","bucine","bucini","bucino","budget","budini","budino","buduca","buduco","buduma","bueggi","buessa","buesse","bufaci","bufala","bufale","bufali","bufalo","bufami","bufano","bufare","bufata","bufate","bufati","bufato","bufava","bufavi","bufavo","bufera","bufere","buffai","buffar","buffer","buffet","bufino","bufone","bufoni","bugiai","bugiar","bugino","buglia","buglio","bugnai","bugnar","bugnun","bugola","bugole","bugula","bugule","buicci","buiore","buiori","buiosa","buiose","buiosi","buioso","bulaci","bulala","bulale","bulali","bulalo","bulami","bulane","bulano","bulare","bulata","bulate","bulati","bulato","bulava","bulavi","bulavo","bulica","bulico","bulina","bulini","bulino","bullet","bullom","bumper","bundle","bungee","bunker","burchi","bureau","burger","burghe","burian","burina","burine","burini","burino","burlai","burlar","burlon","burnus","burrai","buscai","buscar","busche","buschi","bushel","busker","busone","busoni","bussai","bussar","bustai","busvia","busvie","butani","butano","butene","buteni","butile","butili","butini","butino","buttai","buttar","buyout","buzzer","buzzon","byebye","bylina","bypass","cabala","cabale","cabali","cabalo","cabeza","cabila","cabile","cabili","cabilo","cabina","cabine","cablai","cablar","cabota","caboti","caboto","cabrai","cabrar","cabrei","cabreo","cabrio","cacaci","cacala","cacale","cacali","cacalo","cacami","cacano","cacare","cacata","cacate","cacati","cacato","cacava","cacavi","cacavo","cacche","cacchi","caccia","caccio","cachet","caciai","caciar","cacico","cacina","cacine","cacini","cacino","cacona","cacone","caconi","cactus","cacume","cacumi","cadano","caddie","cadeau","cadere","cadete","cadeva","cadevi","cadevo","cadici","cadile","cadimi","cadine","caditi","cadmea","cadmee","cadmei","cadmeo","cadmia","cadmie","cadmio","cadono","cadrai","cadrei","caduca","caduco","caduna","caduno","cadusi","caduta","cadute","caduti","caduto","cafila","cafile","cafira","cafire","cafiri","cafiro","cafisi","cafiso","cafona","cafone","cafoni","caftan","cagaci","cagala","cagale","cagali","cagalo","cagami","cagane","cagano","cagare","cagata","cagate","cagati","cagato","cagava","cagavi","cagavo","caglia","caglio","cagona","cagone","cagoni","cahier","caiaco","caicco","calaci","caladi","calala","calale","calali","calalo","calami","calamo","calane","calano","calare","calata","calate","calati","calato","calava","calavi","calavo","calaza","calaze","calazi","calcai","calcar","calcei","calceo","calche","calchi","calcia","calcio","caldai","caldea","caldee","caldei","caldeo","calena","calene","caleni","caleno","calere","caleva","calice","calici","calida","calide","calidi","calido","caliga","caligo","calino","calmai","calmar","calore","calori","caluma","calumi","calumo","calura","calure","calvai","calvar","calzai","calzar","camali","camalo","camati","camato","camava","camave","camavi","camavo","camber","cambia","cambio","cambra","cambre","camena","camene","camera","camere","camese","camesi","camice","camici","camini","camino","camion","camita","camite","camiti","cammei","cammeo","cammin","camola","camole","campai","campar","camper","campii","campir","campos","campus","camuna","camune","camuni","camuno","camusa","camuse","camusi","camuso","canaia","canaie","canaio","canala","canale","canali","canapa","canape","canapi","canapo","canard","canari","canata","canate","canati","canato","cancan","cancri","cancro","candii","candir","canela","canele","caneli","canelo","canese","canesi","canghe","cangia","cangio","canide","canidi","canile","canili","canina","canine","canini","canino","cannai","cannar","canone","canoni","canopi","canopo","canora","canore","canori","canoro","canova","canove","cansai","cansar","cantai","cantar","cantei","canteo","canter","cantor","cantra","cantre","canuri","canuta","canute","canuti","canuto","canvas","canyon","capace","capaci","capala","capale","capali","capalo","capami","capano","capare","capata","capate","capati","capato","capava","capavi","capavo","capere","capeva","capini","capino","capire","capita","capite","capiti","capito","capiva","capivi","capivo","capona","capone","caponi","capono","capota","capote","capoti","capoto","cappai","cappar","cappio","caprai","capria","caprie","captai","captar","carabi","carabo","carata","carati","carato","carbon","carcai","carcar","carche","carchi","cardai","cardar","cardia","cardio","career","carela","carele","careli","carelo","carema","carena","carene","careni","careno","cargos","cariai","cariar","cariba","caribe","caribi","caribo","carica","carice","carici","carico","carina","carine","carini","carino","carnai","carnea","carnee","carnei","carneo","carnet","carola","carole","caroli","carolo","carota","carote","caroti","caroto","carpai","carpar","carpet","carpii","carpio","carpir","carrai","cartai","cartel","carter","caruba","carube","caruga","carusi","caruso","casale","casali","casara","casare","casari","casaro","casata","casate","casati","casato","casbah","cascai","cascar","cascer","caschi","cascio","casera","casere","cashes","casier","casina","casine","casini","casino","casona","casone","casoni","casosa","casose","casosi","casoso","caspia","caspie","caspii","caspio","cassai","cassar","cassia","cassie","cassio","castel","castra","castri","castro","casual","casula","casule","catana","catane","catara","catare","catari","cataro","catena","catene","cateni","cateno","cateti","cateto","catgut","catini","catino","catodi","catodo","catone","catoni","cattai","cattar","caucus","causai","causar","cavaci","cavala","cavale","cavali","cavalo","cavami","cavane","cavano","cavare","cavata","cavate","cavati","cavato","cavava","cavavi","cavavo","caveat","caveau","cavedi","cavese","cavesi","cavide","cavidi","cavino","cavita","caviti","cavito","cavoli","cavolo","cavona","cavone","cazzai","cazzar","cazzia","cazzio","cazzon","ccciii","ccclii","cccliv","ccclix","ccclvi","ccclxi","ccclxv","ccclxx","cccvii","cccxci","cccxcv","cccxii","cccxiv","cccxix","cccxli","cccxlv","cccxvi","cccxxi","cccxxv","cccxxx","ccliii","cclvii","cclxii","cclxiv","cclxix","cclxvi","cclxxi","cclxxv","cclxxx","ccviii","ccxcii","ccxciv","ccxcix","ccxcvi","ccxiii","ccxlii","ccxliv","ccxlix","ccxlvi","ccxvii","ccxxii","ccxxiv","ccxxix","ccxxvi","ccxxxi","ccxxxv","cdliii","cdlvii","cdlxii","cdlxiv","cdlxix","cdlxvi","cdlxxi","cdlxxv","cdlxxx","cdviii","cdxcii","cdxciv","cdxcix","cdxcvi","cdxiii","cdxlii","cdxliv","cdxlix","cdxlvi","cdxvii","cdxxii","cdxxiv","cdxxix","cdxxvi","cdxxxi","cdxxxv","cebide","cebidi","cecaci","cecala","cecale","cecali","cecalo","cecami","cecane","cecano","cecare","cecata","cecate","cecati","cecato","cecava","cecavi","cecavo","cecche","cecena","cecene","ceceni","ceceno","ceceri","cecero","cecidi","cecini","cecino","cecubi","cecubo","cedano","cedere","cedete","cedeva","cedevi","cedevo","cedici","cedila","cedile","cedili","cedilo","cedimi","cedine","cediti","cedola","cedole","cedono","cedrai","cedrar","cedula","cedule","ceduta","cedute","ceduti","ceduto","cefali","cefalo","ceffai","ceffar","celaci","celala","celale","celali","celalo","celami","celane","celano","celare","celata","celate","celati","celato","celava","celavi","celavo","celebe","celebi","celera","celere","celeri","celero","celiai","celiar","celibe","celibi","celino","celite","celiti","cellai","celoma","celomi","celtii","celtio","celzio","cembra","cembre","cembri","cembro","cement","cenaci","cenala","cenale","cenali","cenalo","cenami","cenane","cenano","cenare","cenata","cenate","cenati","cenato","cenava","cenavi","cenavo","cencio","cencri","cencro","cenema","cenemi","cenere","ceneri","cengia","cengio","cenino","cennai","cennar","cenobi","cenone","cenoni","cenosi","censii","censir","censua","censui","censuo","census","center","centra","centre","centri","centro","centum","cenuri","cenuro","cepola","cepole","ceppai","ceppar","ceraci","ceraia","ceraie","ceraio","cerala","cerale","cerali","ceralo","cerami","cerane","cerano","cerare","cerasa","cerase","cerasi","ceraso","cerata","cerate","cerati","cerato","cerava","ceravi","ceravo","cerazi","cercai","cercar","cerche","cerchi","cerica","cerici","cerico","ceride","ceridi","cerili","cerilo","cerini","cerino","cerise","cerisi","cernei","cerner","cernia","cernie","ceroma","ceromi","cerone","ceroni","cerosa","cerose","cerosi","ceroso","cerqua","cerque","certai","certar","cerula","cerule","ceruli","cerulo","cerume","cerumi","cesana","cesane","cesani","cesano","cesare","cesari","cesena","cesene","cesoia","cesoie","cessai","cessar","cestai","cestii","cestir","cesura","cesure","cetani","cetano","cetera","cetere","cetile","cetili","cetina","cetine","cevana","cevane","cevani","cevano","cevese","cevesi","chador","chaise","chakra","chalet","chance","charme","charts","chatta","chatti","chatto","checca","chefir","chemio","chente","cheque","cherry","chetai","chetar","chiama","chiame","chiami","chiamo","chiara","chiare","chiari","chiaro","chiava","chiave","chiavi","chiavo","chicca","chicco","chicle","chieda","chiede","chiedi","chiedo","chiesa","chiese","chiesi","chifel","chilli","chillo","chinai","chinar","chinea","chinee","chintz","chioda","chiodi","chiodo","chioma","chiome","chiosa","chiose","chiosi","chioso","chirie","chitai","chitar","chiuda","chiude","chiudi","chiudo","chiusa","chiuse","chiusi","chiuso","chopes","ciabai","ciabar","ciacca","ciacci","ciacco","cialda","cialde","ciampa","ciampe","cianca","ciance","cianci","cianza","cianze","ciaone","ciaoni","ciarda","ciarde","ciarla","ciarle","ciarli","ciarlo","ciarpa","ciarpe","ciarpi","ciarpo","ciazio","cibaci","cibala","cibale","cibali","cibalo","cibami","cibane","cibano","cibare","cibari","cibata","cibate","cibati","cibato","cibava","cibavi","cibavo","cibino","cibori","cibrei","cibreo","cicade","cicadi","cicala","cicale","cicali","cicalo","ciccai","ciccar","cicche","cicchi","ciccia","ciccio","ciceri","cicero","cicini","cicino","cicuta","cicute","cidoni","ciecai","ciecar","cieche","ciechi","cifosi","cifrai","cifrar","cigana","cigane","cigani","cigano","ciglia","ciglio","cigola","cigoli","cigolo","cilena","cilene","cileni","cileno","cilici","cilizi","cimaci","cimala","cimale","cimali","cimalo","cimami","cimane","cimano","cimare","cimasa","cimase","cimata","cimate","cimati","cimato","cimava","cimavi","cimavo","cimazi","cimbra","cimbre","cimbri","cimbro","cimeli","cimese","cimesi","cimice","cimici","cimini","cimino","cimoli","cimolo","cimosa","cimose","cimosi","cimoso","cincia","cincin","cinedi","cinedo","cinema","cinese","cinesi","cineta","cinete","cineti","cineto","cinger","cinghi","cinica","cinice","cinici","cinico","cinipe","cinipi","cinira","cinire","cinomi","cinque","cintai","cintar","cinzia","cinzie","cinzio","ciocca","ciocce","ciocci","ciocco","ciocia","ciocie","ciompi","ciompo","cionca","cionco","cioppa","cioppe","ciospi","ciospo","ciotta","ciotte","ciotti","ciotto","ciperi","cipero","ciprea","cipree","cipria","ciprie","ciprio","circea","circee","circei","circeo","circhi","cisale","cisali","citaci","citala","citale","citali","citalo","citami","citane","citano","citara","citare","citata","citate","citati","citato","citava","citavi","citavo","cities","citini","citino","citisi","citiso","ciucca","ciucce","ciucci","ciucco","ciuche","ciuchi","ciuffa","ciuffi","ciuffo","ciukci","ciulai","ciular","ciulla","ciulle","ciulli","ciullo","ciurla","ciurli","ciurlo","ciurma","ciurme","ciurmi","ciurmo","civada","civade","civaia","civaie","civese","civesi","civets","civica","civici","civico","civile","civili","clamai","clamar","clanga","clange","clangi","clango","claque","classa","classe","classi","classo","clasti","clasto","claudi","claxon","clefta","clefti","clicca","clicco","client","climax","clinch","clinic","clipei","clipeo","clisma","clismi","clivia","clivie","clizia","clizie","cloaca","cloche","clonai","clonar","clorai","clorar","closet","clowns","clviii","clxiii","clxvii","clxxii","clxxiv","clxxix","clxxvi","clxxxi","clxxxv","cmliii","cmlvii","cmlxii","cmlxiv","cmlxix","cmlxvi","cmlxxi","cmlxxv","cmlxxx","cmviii","cmxcii","cmxciv","cmxcix","cmxcvi","cmxiii","cmxlii","cmxliv","cmxlix","cmxlvi","cmxvii","cmxxii","cmxxiv","cmxxix","cmxxvi","cmxxxi","cmxxxv","cnidia","cnidie","cnidio","coarta","coarti","coarto","coatta","coatte","coatti","coatto","cobego","cobeua","cobite","cobiti","cobola","cobole","cocche","cocchi","coccia","coccio","cocete","coceva","cocevi","cocevo","cochon","cocker","coclea","coclee","cococo","cocoon","codale","codali","codata","codate","codati","codato","codiai","codiar","codice","codici","codina","codine","coding","codini","codino","codoli","codolo","codone","codoni","coendo","coente","coenti","cofana","cofane","cofani","cofano","coffee","cofosi","cogens","cogita","cogiti","cogito","coglia","coglie","cognac","cogoli","cogolo","coiaia","coiaie","coiaio","coiame","coiami","coiamo","coiara","coiare","coiari","coiaro","coiate","coimmo","coiote","coioti","coirai","coirci","coirei","coirla","coirle","coirli","coirlo","coirmi","coirne","coirsi","coirti","coirvi","coisca","coisce","coisci","coisco","coisse","coissi","coiste","coisti","coking","colaci","colala","colale","colali","colalo","colami","colane","colani","colano","colare","colata","colate","colati","colato","colava","colavi","colavo","colbac","colcai","colcar","colchi","colcos","colera","colere","colica","colici","colico","colina","coline","colini","colino","colite","coliti","collar","collie","colmai","colmar","colobi","colobo","colona","colone","coloni","colono","colora","colore","colori","coloro","colpai","colpar","colpii","colpir","coltan","coltra","coltre","coltri","coltro","colugo","coluri","coluro","comare","comari","comata","comate","comati","comato","comedy","cometa","comete","comica","comici","comico","comics","coming","comini","comino","comiti","comito","comizi","commis","common","comoda","comode","comodi","comodo","compia","compie","compii","compio","compir","compor","compos","compra","compre","compri","compro","comuna","comune","comuni","comuno","conati","conato","conche","concia","concio","condii","condir","condom","condor","condri","condro","condur","confar","confla","confli","conflo","congas","conghe","congio","congri","congro","coniai","coniar","conica","conici","conico","conide","conidi","conina","conine","conino","coniza","conize","consai","consce","consci","consta","consti","consto","contai","contar","contea","contee","contra","contre","contri","contro","coobai","coobar","cookie","cooler","coolie","coopta","coopti","coopto","coorte","coorti","copale","copali","copata","copate","copeco","copiai","copiar","copies","copino","copion","coppia","coppie","coprii","coprir","copula","copule","copuli","copulo","corago","coraio","corale","corali","corame","corami","corani","corano","corata","corate","corcai","corcar","corchi","cordai","cordis","corego","corese","coresi","corica","corici","corico","corifa","corife","corili","corilo","corion","coriza","corize","cornac","cornai","cornar","cornea","cornee","cornei","corneo","corner","corona","corone","coroni","corono","corozi","corozo","corpus","correa","corree","correi","correo","correr","corsia","corsie","corsoi","cortea","cortei","corteo","cortes","cosaci","cosala","cosale","cosali","cosalo","cosami","cosane","cosano","cosare","cosata","cosate","cosati","cosato","cosava","cosavi","cosavo","cosche","coscia","coscio","coseni","coseno","cosima","cosime","cosimi","cosimo","cosina","cosine","cosini","cosino","costai","costar","costei","costui","cotale","cotali","cotica","cotile","cotili","cotina","cotine","cotini","cotino","cotona","cotone","cotoni","cotono","cottoi","cougar","coupon","covaci","covala","covale","covali","covalo","covami","covane","covano","covare","covata","covate","covati","covato","covava","covavi","covavo","covile","covili","covino","covola","covole","covone","covoni","cowboy","coxale","coxali","coxite","coxiti","coyote","cozzai","cozzar","crabri","crabro","cracca","cracco","cracka","cracki","cracko","crafen","crambe","crambi","crampi","crampo","cranio","crasha","crashi","crasho","crassa","crasse","crassi","crasso","crauti","crauto","crazia","crazie","creaci","creala","creale","creali","crealo","creami","creane","creano","creare","creata","create","creati","creato","creava","creavi","creavo","crebbe","crebbi","crebra","crebre","crebri","crebro","credei","creder","credit","creino","cremai","cremar","crenai","crenar","crenni","crenno","creola","creole","creoli","creolo","crepai","crepar","crepes","cresca","cresce","cresci","cresco","crespa","crespe","crespi","crespo","cresta","creste","cretta","cretti","cretto","cribra","cribri","cribro","cricca","cricco","crimen","cringe","cringi","cripta","cripte","cripti","cripto","crisma","crismi","cristi","cristo","critta","critti","critto","croata","croate","croati","croato","crocca","crocce","crocco","crocea","crocee","crocei","croceo","crochi","crocia","crocio","crolla","crolli","crollo","cromai","cromar","cromia","cromie","crosci","crossa","crossi","crosso","crosta","croste","crosti","crosto","croton","crotta","crotte","crotti","crotto","crouch","crucca","crucci","crucco","crucia","crucio","crucis","cruise","crunch","cruore","cruori","crusca","ctonia","ctonie","ctonio","cubaci","cubala","cubale","cubali","cubalo","cubami","cubana","cubane","cubani","cubano","cubare","cubata","cubate","cubati","cubato","cubava","cubavi","cubavo","cubebe","cubebi","cubica","cubici","cubico","cubino","cubiti","cubito","cubone","cuboni","cuccai","cuccar","cucchi","cuccia","cuccio","cucici","cucila","cucile","cucili","cucilo","cucimi","cucina","cucine","cucini","cucino","cucire","cucita","cucite","cuciti","cucito","cuciva","cucivi","cucivo","cuculi","cuculo","cuddia","cuddie","cuesta","cueste","cuffia","cuffie","cufica","cufici","cufico","cugina","cugine","cugini","cugino","cuiavi","culaca","culaci","culaco","culaia","culaie","culaio","culala","culale","culali","culalo","culami","culano","culare","culata","culate","culati","culato","culava","culavi","culavo","culdea","culdee","culdei","culdeo","culice","culici","culini","culino","cullai","cullar","cullei","culleo","culona","culone","culoni","cultor","cultri","cultro","cumana","cumane","cumani","cumano","cumbia","cumbie","cumene","cumeni","cumini","cumino","cumoli","cumolo","cumula","cumuli","cumulo","cunama","cuocer","cuoche","cuochi","cuocia","cuocio","cuocon","cuoiai","cupida","cupide","cupidi","cupido","cupola","cupole","cupone","cuponi","cuprea","cupree","cuprei","cupreo","curaci","curala","curale","curali","curalo","curami","curane","curano","curare","curari","curaro","curata","curate","curati","curato","curava","curavi","curavo","curcas","curino","cursus","curtis","curule","curuli","curvai","curvar","cuschi","cuscus","custom","cutina","cutine","cutter","cxciii","cxcvii","cxliii","cxlvii","cxviii","cxxiii","cxxvii","cxxxii","cxxxiv","cxxxix","cxxxvi","cyborg","czarda","czarde","dacica","dacici","dacico","dacite","daciti","dacron","dadini","dadino","dadone","dadoni","dafnia","dafnie","daimon","dalica","dalici","dalico","dalton","damaci","damala","damale","damali","damalo","damami","damane","damano","damare","damata","damate","damati","damato","damava","damavi","damavo","damina","damine","damino","dammar","damone","damoni","danari","danaro","dances","danese","danesi","dannai","dannar","danuna","danzai","danzar","daorsa","daorse","daorsi","daorso","dappoi","darasa","daremo","darete","dargli","dargua","dartos","dasipi","dasipo","dasota","dasote","dasoti","dasoto","dataci","datala","datale","datali","datalo","datami","datane","datano","datare","datari","datasi","datata","datate","datati","datato","datava","datavi","datavo","dateci","datela","datele","dateli","datelo","datemi","datene","datesi","dateti","datevi","datici","datile","datili","datimi","datine","dating","datino","datisi","datiti","dativa","dative","dativi","dativo","datoci","datole","datoli","datolo","datomi","datone","datore","datori","datosi","datoti","datovi","datura","dature","daunia","daunie","daunio","davamo","davano","davate","daziai","daziar","dazino","dcccii","dccciv","dcccix","dcccli","dccclv","dccclx","dcccvi","dcccxc","dcccxi","dcccxl","dcccxv","dcccxx","dcciii","dcclii","dccliv","dcclix","dcclvi","dcclxi","dcclxv","dcclxx","dccvii","dccxci","dccxcv","dccxii","dccxiv","dccxix","dccxli","dccxlv","dccxvi","dccxxi","dccxxv","dccxxx","dcliii","dclvii","dclxii","dclxiv","dclxix","dclxvi","dclxxi","dclxxv","dclxxx","dcviii","dcxcii","dcxciv","dcxcix","dcxcvi","dcxiii","dcxlii","dcxliv","dcxlix","dcxlvi","dcxvii","dcxxii","dcxxiv","dcxxix","dcxxvi","dcxxxi","dcxxxv","deaera","deaeri","deaero","dealer","debbia","debbio","debita","debite","debiti","debito","debole","deboli","decada","decade","decadi","decado","decana","decane","decani","decano","decapa","decapi","decapo","deceda","decede","decedi","decedo","decida","decide","decidi","decido","decile","decili","decima","decime","decimi","decimo","decina","decine","decini","decino","decisa","decise","decisi","deciso","decora","decori","decoro","decuri","dedala","dedale","dedali","dedalo","dedica","dedico","dedita","dedite","dediti","dedito","deduca","deduce","deduci","deduco","dedure","deejay","defeca","defeco","defeda","defedi","defedo","defila","defili","defilo","defoli","degnai","degnar","degree","dehors","deismi","deismo","deissi","deista","deiste","deisti","delata","delate","delati","delato","delega","delego","deleta","delete","deleti","deleto","deliba","delibi","delibo","delima","delimi","delimo","delira","delire","deliri","deliro","delizi","deluda","delude","deludi","deludo","delusa","deluse","delusi","deluso","demand","demani","demica","demici","demico","demone","demoni","denari","denaro","denega","denego","dengue","denota","denoti","denoto","densai","densar","dentai","dentar","dentro","denuda","denudi","denudo","depila","depili","depilo","depone","deponi","depore","depose","deposi","depura","depuri","depuro","deputa","deputi","deputo","derapa","derapi","derapo","derida","deride","deridi","derido","derima","derime","derimi","derimo","derisa","derise","derisi","deriso","deriva","derive","derivi","derivo","deroga","derogo","deruba","derubi","derubo","dervis","desala","desali","desalo","deschi","deseda","desedi","desedo","desiai","desiar","design","desina","desini","desino","desira","desire","desiri","desiro","desman","desola","desoli","desolo","destai","destar","destra","destre","destri","destro","desuma","desume","desumi","desumo","detona","detoni","detono","detrae","detrai","detrar","dettai","dettar","devano","deviai","deviar","device","devien","devira","deviri","deviro","devono","devora","devori","devoro","devota","devote","devoti","devoto","dharma","dhimmi","diacci","diacri","dialer","dianti","dianto","dianzi","diarca","diarco","diaria","diarie","diario","diauli","diaulo","dicace","dicaci","dicala","dicale","dicali","dicalo","dicami","dicane","dicano","dicare","dicasi","dicata","dicate","dicati","dicato","dicava","dicavi","dicavo","dicchi","dicesi","diceva","dicevi","dicevo","dicono","dictum","didima","didime","didimi","didimo","diedra","diedre","diedri","diedro","diesai","diesar","diesel","diesis","dietai","dietar","dietim","dietra","dietre","dietri","dietro","difesa","difese","difesi","difeso","difila","difili","difilo","digama","digame","digami","digamo","digest","digita","digiti","digito","diktat","dilaga","dilago","dilama","dilami","dilamo","dilani","dilata","dilati","dilato","dilava","dilavi","dilavo","dilefi","diliga","dilige","diligi","diligo","dilima","dilimi","dilimo","diluii","diluir","diluvi","dimane","dimani","dimena","dimeni","dimeno","dimera","dimere","dimeri","dimero","dimidi","dimise","dimisi","dimmer","dimoia","dimoio","dimora","dimore","dimori","dimoro","dimuta","dimuti","dimuto","dinamo","dinari","dinaro","dindin","dindio","dindon","dinega","dinego","dinero","dinghi","dinghy","dioica","dioici","dioico","dionea","dionee","diosio","dipana","dipani","dipano","dipela","dipeli","dipelo","dipesa","dipese","dipesi","dipeso","diploe","diploi","dipnoi","dipnoo","dipoli","dipolo","dirada","diradi","dirado","dirama","dirami","diramo","direda","diredi","diredo","diremo","direna","direni","direno","direte","dirgli","dirham","diriga","dirige","dirigi","dirigo","dirima","dirime","dirimi","dirimo","diruba","dirubi","dirubo","dirupa","dirupi","dirupo","diruta","dirute","diruti","diruto","disagi","disama","disami","disamo","disana","disane","disani","disano","dischi","discoi","disdir","disfa'","disfai","disfar","disiai","disiar","disino","disira","disire","disiri","disiro","dispai","dispor","distai","distar","disuma","disumi","disumo","disusa","disusi","disuso","disvia","disvii","disvio","ditale","ditali","ditata","ditate","diteca","diteci","diteco","ditela","ditele","diteli","ditelo","ditemi","ditene","ditevi","ditini","ditino","ditola","ditole","ditone","ditoni","ditono","dittea","dittee","dittei","ditteo","diurna","diurne","diurni","diurno","divaga","divago","divana","divani","divano","divari","divere","divida","divide","dividi","divido","divien","divima","divimi","divimo","divina","divine","divini","divino","divisa","divise","divisi","diviso","divora","divori","divoro","djembe","dlviii","dlxiii","dlxvii","dlxxii","dlxxiv","dlxxix","dlxxvi","dlxxxi","dlxxxv","doagio","doario","doblai","doblar","doccia","doccio","doceta","docete","doceti","docile","docili","docmio","doctor","dodici","dogaci","dogadi","dogado","dogaia","dogaie","dogala","dogale","dogali","dogalo","dogame","dogami","dogana","dogane","dogano","dogare","dogata","dogate","dogati","dogato","dogava","dogavi","dogavo","doglia","doglie","doglio","dogrib","dolaci","dolala","dolale","dolali","dolalo","dolami","dolane","dolano","dolare","dolata","dolate","dolati","dolato","dolava","dolavi","dolavo","dolche","dolchi","dolcia","dolcie","dolcii","dolcir","dolere","dolese","dolesi","dolete","doleva","dolevi","dolevo","dolica","dolici","dolico","dolina","doline","dolino","dolman","dolmen","dolope","dolopi","dolora","dolore","dolori","doloro","dolosa","dolose","dolosi","doloso","doluta","dolute","doluti","doluto","domaci","domain","domala","domale","domali","domalo","domami","domane","domani","domano","domare","domata","domate","domati","domato","domava","domavi","domavo","domese","domesi","domina","domine","domini","domino","domita","domite","domiti","domito","donaci","donala","donale","donali","donalo","donami","donane","donano","donare","donari","donata","donate","donati","donato","donava","donavi","donavo","dongle","donino","donnea","donnei","donneo","doodle","dopaci","dopala","dopale","dopali","dopalo","dopami","dopane","dopano","dopare","dopata","dopate","dopati","dopato","dopava","dopavi","dopavo","doping","dopino","doppia","doppie","doppio","doraci","dorala","dorale","dorali","doralo","dorami","dorane","dorano","dorare","dorata","dorate","dorati","dorato","dorava","doravi","doravo","dorema","doremi","dorese","doresi","dorica","dorici","dorico","dorino","dormii","dormir","dorrai","dorrei","dosaci","dosala","dosale","dosali","dosalo","dosami","dosane","dosano","dosare","dosata","dosate","dosati","dosato","dosava","dosavi","dosavo","dosino","dotaci","dotala","dotale","dotali","dotalo","dotami","dotane","dotano","dotare","dotata","dotate","dotati","dotato","dotava","dotavi","dotavo","dotino","dottai","dottar","dottor","double","dovari","dovere","doveri","dovese","dovesi","dovete","doveva","dovevi","dovevo","dovrai","dovrei","dovuta","dovute","dovuti","dovuto","drachi","dracma","dracme","dragai","dragar","draghe","draghi","dragon","dralon","dramma","dramme","drammi","drappa","drappi","drappo","drenai","drenar","dressa","dressi","dresso","driade","driadi","drilli","drillo","drinks","dritta","dritte","dritti","dritto","driver","drives","drizza","drizze","drizzi","drizzo","drogai","drogar","droghe","droghi","droide","droidi","dromia","dromie","dromos","drongo","dronte","dronti","druida","druidi","druido","duagio","dubbia","dubbie","dubbio","dubita","dubiti","dubito","ducaci","ducala","ducale","ducali","ducalo","ducami","ducane","ducano","ducare","ducata","ducate","ducati","ducato","ducava","ducavi","ducavo","ducere","duceva","ducevi","ducevo","duchea","duchee","ductus","duella","duelli","duello","duerni","duerno","duetta","duetti","duetto","duglia","duglie","dulcis","dumeti","dumeto","dumosa","dumose","dumosi","dumoso","dumper","dunese","dunesi","dunosa","dunose","dunosi","dunoso","dunque","duplex","duraci","durale","durali","durame","durami","durane","durano","durare","durata","durate","durati","durato","durava","duravi","duravo","durino","durite","duriti","durona","durone","duroni","duruma","duttor","dxciii","dxcvii","dxliii","dxlvii","dxviii","dxxiii","dxxvii","dxxxii","dxxxiv","dxxxix","dxxxvi","ebbene","ebbero","ebetai","ebetar","eboide","eboidi","eburna","eburne","eburni","eburno","ecceda","eccede","eccedi","eccedo","eccidi","eccita","ecciti","eccito","eccoci","eccola","eccole","eccoli","eccolo","eccome","eccomi","eccone","eccoti","eccovi","echide","echidi","echini","echino","ecidio","ecista","eciste","ecisti","ecloga","ecoica","ecoici","ecoico","ecoide","ecoidi","eculei","eculeo","eczema","eczemi","edafon","eddica","eddici","eddico","edipea","edipee","edipei","edipeo","editai","editar","editio","editor","editti","editto","editui","edituo","edotta","edotte","edotti","edotto","educai","educar","educer","educhi","edurre","edusse","edussi","efebei","efebeo","efebia","efebie","efedra","efedre","efendi","efesia","efesie","efesio","effati","effato","effige","effigi","effugi","effusa","effuse","effusi","effuso","efimni","efirea","efiree","efirei","efireo","egagra","egagre","egagri","egagro","egente","egenti","egenza","egenze","egeria","egerie","egioca","egioci","egioco","egizia","egizie","egizio","eglino","egloga","egregi","eguale","eguali","eietta","eietti","eietto","elabri","elabro","elafri","elafro","elaide","elaidi","elbana","elbane","elbani","elbano","elceti","elceto","eleate","eleati","eledon","elegga","elegge","eleggi","eleggo","elegia","elegie","elenca","elenco","elenio","elesse","elessi","eletta","elette","eletti","eletto","elevai","elevar","elfica","elfici","elfico","elgeya","elgeye","elgeyi","elgeyo","elgona","elgone","elgoni","eliaca","eliaci","eliaco","elibus","elicer","eliche","elider","eliomi","elione","elioni","elisci","elisia","elisie","elisio","elisir","elisse","elissi","elitra","elitre","elivia","elivie","ellena","ellene","elleni","elleno","ellera","ellere","ellese","ellesi","ellino","elmata","elmate","elmati","elmato","elmese","elmesi","elobia","elobie","elodea","elodee","elodia","elodie","elogia","elogio","elonga","elongo","eloqui","eluati","eluato","eluder","eluire","eluita","eluite","eluiti","eluito","eluiva","eluivi","eluivo","eluvio","elvese","elvesi","emacia","emacio","emails","emanai","emanar","emazia","emazie","emboli","embolo","emenda","emende","emendi","emendo","emerga","emerge","emergi","emergo","emersa","emerse","emersi","emerso","emessa","emesse","emessi","emesso","emetta","emette","emetti","emetto","emiche","emigra","emigri","emigro","emioli","emione","emioni","emiono","emonia","emonie","emonio","empici","empide","empidi","empiei","empier","empila","empile","empili","empilo","empimi","empine","empire","empita","empite","empiti","empito","empiva","empivi","empivo","empori","emulai","emular","emulga","emulge","emulgi","emulgo","emulsa","emulse","emulsi","emulso","emunga","emunge","emungi","emungo","emunse","emunsi","emunta","emunte","emunti","emunto","enagra","enagre","enante","enanti","enarca","enarra","enarri","enarro","encomi","encore","endica","endice","endici","endico","enduro","energy","enerva","enerve","enervi","enervo","enfant","enfasi","enfiai","enfiar","enfino","eniali","eniana","eniane","eniani","eniano","enigma","enigmi","enimma","enimmi","ennari","ennese","ennesi","enoica","enoici","enoico","enopli","enorme","enormi","enrico","entasi","entica","entici","entico","entina","entine","entrai","entrar","enunci","enunzi","enzima","enzimi","eocene","eoceni","eolica","eolici","eolico","eolina","eoline","eolite","eoliti","eosina","eosine","eparca","eparco","epatta","epatte","epeira","epeire","epiche","epigea","epigee","epigei","epigeo","epilli","epizoa","epizoe","epizoi","epizoo","epoche","epopea","epopee","eppure","eptani","eptano","eptodi","eptodo","epurai","epurar","equaci","equala","equale","equali","equalo","equami","equane","equano","equare","equata","equate","equati","equato","equava","equavi","equavo","equese","equesi","equide","equidi","equina","equine","equini","equino","equipe","equity","erader","erario","erbaio","erbale","erbali","erbari","erbata","erbate","erbati","erbato","erbese","erbesi","erbita","erbite","erbiti","erbito","erbora","erbori","erboro","erbosa","erbose","erbosi","erboso","ercini","ercole","ercoli","erebia","erebie","eredai","eredar","eregga","eregge","ereggi","ereggo","eresia","eresie","eresse","eressi","eretai","eretar","eretta","erette","eretti","eretto","ergano","ergere","ergete","ergeva","ergevi","ergevo","ergici","ergila","ergile","ergili","ergilo","ergimi","ergine","ergiti","ergone","ergoni","ergono","eriana","eriane","eriani","eriano","eriche","eriger","eringi","erinni","erlang","ermini","ernese","ernesi","erniai","erniar","ernica","ernici","ernico","ernino","eroder","erogai","erogar","eroghi","eroica","eroici","eroico","eroina","eroine","erompa","erompe","erompi","erompo","erotta","erotte","erotti","erotto","erpete","erpeti","erpica","erpice","erpici","erpico","erraci","errale","errami","errane","errano","errare","errata","errate","errati","errato","errava","erravi","erravo","errino","errore","errori","ersero","ertaci","ertala","ertale","ertami","ertana","ertane","ertani","ertano","ertasi","ertati","ertavi","erteci","ertele","ertemi","ertene","ertesi","erteti","ertevi","ertici","ertile","ertili","ertimi","ertine","ertisi","ertiti","ertivi","ertoci","ertole","ertoli","ertolo","ertomi","ertone","ertosi","ertoti","ertovi","eruche","erudii","erudir","eruppe","eruppi","erutta","erutti","erutto","ervese","ervesi","esalai","esalar","esalta","esalti","esalto","esarca","esarco","esatta","esatte","esatti","esatto","escano","escara","escare","escava","escavi","escavo","eschia","eschie","eschio","escici","escida","escide","escidi","escido","escile","escimi","escine","escisa","escise","escisi","esciso","esciti","escoli","escolo","escomi","escono","escopi","escori","escort","escorî","escudo","esculi","esculo","escuta","escute","escuti","escuto","esecra","esecri","esecro","esedra","esedre","esegua","esegue","esegui","eseguo","esempi","esenta","esente","esenti","esento","esequi","esergo","eserta","eserte","eserti","eserto","esfoli","esibii","esibir","esigei","esiger","esigua","esigue","esigui","esiguo","esilia","esilio","esimei","esimer","esimia","esimie","esimio","esista","esiste","esisti","esisto","esitai","esitar","esizio","eskimi","eskimo","eslege","eslegi","esodio","esonda","esondi","esondo","esopea","esopee","esopei","esopeo","esorai","esorar","esordi","esorna","esorni","esorno","esorta","esorti","esorto","esosio","espada","esperi","espero","espiai","espiar","espila","espili","espilo","espira","espiri","espiro","espone","esponi","espose","esposi","esprit","essedi","essedo","essena","essene","esseni","esseno","essere","esseri","essuda","essudi","essudo","estasi","estasî","estata","estate","estati","estato","estera","estere","esteri","estero","estesa","estese","estesi","esteso","esteta","estete","esteti","estima","estimi","estimo","estina","estine","estini","estino","estiva","estive","estivi","estivo","estone","estoni","estrae","estrai","estrar","estrez","estrua","estrue","estrui","estruo","estuai","estuar","estuba","estubi","estubo","esulai","esular","esulta","esulti","esulto","esumai","esumar","esuvia","esuvie","eterea","eteree","eterei","etereo","eteria","eterie","eterna","eterne","eterni","eterno","etesia","etesie","etesii","etesio","etiche","etidio","etiope","etiopi","etisia","etisie","etnica","etnici","etnico","etopea","etopee","ettari","ettaro","euanta","euante","euanti","euanto","eucera","eucere","eufoni","eumene","eumeni","eunuca","eunuco","eupnea","eupnee","eureka","eurite","euriti","eusina","eusine","eusini","eusino","euteri","eutrio","euzone","euzoni","euzono","evacua","evacui","evacuo","evader","evella","evelle","evelli","evello","evelta","evelte","evelti","evelto","eventi","evento","eversa","everse","eversi","everso","everta","everte","everti","everto","evinca","evince","evinci","evinco","evinse","evinsi","evinta","evinte","evinti","evinto","evirai","evirar","evitai","evitar","evitta","evitte","evitti","evitto","evocai","evocar","evochi","evoica","evoici","evoico","evolse","evolsi","evolva","evolve","evolvi","evolvo","evulsa","evulse","evulsi","evulso","evviva","export","fabbri","fabbro","fabica","fabici","fabico","fabula","fabule","fabuli","fabulo","faccia","faccio","facere","faceta","facete","faceti","faceto","faceva","facevi","facevo","facies","facile","facili","facola","facole","factum","facula","facule","fading","faenza","faenze","faeton","fagali","fagara","fagare","faggio","faglia","faglie","faglio","faille","falasa","falcai","falcar","falche","falchi","falcia","falcio","faldai","faldar","faleci","falena","falene","falera","falere","falesa","falese","falica","falici","falico","fallai","fallar","fallii","fallir","falsai","falsar","famaci","famala","famale","famali","famalo","famami","famane","famano","famare","famata","famate","famati","famato","famava","famavi","famavo","famedi","family","famino","famosa","famose","famosi","famoso","famula","famule","famuli","famulo","fanale","fanali","fandom","fanese","fanesi","fanghe","fanghi","fannia","fannie","fanone","fanoni","farcia","farcii","farcir","faremo","farete","fargli","fargna","fargne","farina","farine","farmer","farnia","farnie","farota","farote","faroti","faroto","fasaci","fasala","fasale","fasali","fasalo","fasami","fasane","fasano","fasare","fasata","fasate","fasati","fasato","fasava","fasavi","fasavo","fascia","fascio","faseli","faselo","fasica","fasici","fasico","fasino","fasore","fasori","fataci","fatala","fatale","fatali","fatalo","fatami","fatane","fatano","fatare","fatata","fatate","fatati","fatato","fatava","fatavi","fatavo","fateci","fatela","fatele","fateli","fatelo","fatemi","fatene","fatevi","fathom","fatica","fatici","fatico","fatina","fatine","fatino","fattoi","fattor","fausta","fauste","fausti","fausto","fautor","favaio","favara","favare","favata","favate","favela","faveti","faveto","favica","favici","favico","favini","favino","favola","favole","favoli","favolo","favoni","favore","favori","favosa","favose","favosi","favoso","favule","favuli","faxaci","faxala","faxale","faxali","faxalo","faxami","faxano","faxare","faxata","faxate","faxati","faxato","faxava","faxavi","faxavo","faxino","febbre","febbri","fecale","fecali","feccia","fecero","fecola","fecole","fedaci","fedain","fedala","fedale","fedali","fedalo","fedami","fedane","fedano","fedare","fedata","fedate","fedati","fedato","fedava","fedavi","fedavo","fedayn","fedele","fedeli","federa","federe","federi","federo","fedina","fedine","fedino","fegati","fegato","feijoa","feijoe","felice","felici","felide","felidi","felina","feline","felini","felino","fellah","fellow","felpai","felpar","feltra","feltri","feltro","feluca","femica","femici","femico","femmes","femore","femori","fenati","fenato","fendei","fender","fenica","fenice","fenici","fenico","fenile","fenili","fennec","fenoli","fenolo","ferace","feraci","ferale","ferali","ferasi","ferina","ferine","ferini","ferino","ferire","ferita","ferite","feriti","ferito","feriva","ferivi","ferivo","fermai","fermar","fermio","fernet","feroce","feroci","ferodi","ferodo","ferola","ferole","ferrai","ferrar","ferrea","ferree","ferrei","ferreo","ferula","ferule","fervei","ferver","festai","festar","fetale","fetali","fetida","fetide","fetidi","fetido","fetish","fetola","fetole","fetore","fetori","fiacca","fiacco","fiacre","fiamma","fiamme","fiammi","fiammo","fianca","fianco","fiasca","fiasco","fiatai","fiatar","fibbia","fibbie","fibula","fibule","ficaia","ficaie","ficata","ficate","ficati","ficato","ficcai","ficcar","ficchi","fiches","fichus","ficone","ficoni","fidaci","fidala","fidale","fidali","fidalo","fidami","fidane","fidano","fidare","fidata","fidate","fidati","fidato","fidava","fidavi","fidavo","fidino","fieese","fieesi","fields","fienai","fiesta","fifona","fifone","fifoni","figari","figaro","figata","figate","figlia","figlie","figlio","figona","figone","figoni","figula","figule","figuli","figulo","figura","figure","figuri","figuro","filaci","filala","filale","filali","filalo","filami","filane","filano","filare","filari","filata","filate","filati","filato","filava","filavi","filavo","fileni","fileno","filets","filini","filino","filler","fillio","filmai","filmar","filona","filone","filoni","filosa","filose","filosi","filoso","filter","filtra","filtri","filtro","fimina","fimine","fimini","fimino","fimosi","finale","finali","finche","finder","finger","finire","finish","finita","finite","finiti","finito","finiva","finivi","finivo","finora","fintai","fintar","fiocca","fiocco","fioche","fiochi","fionda","fionde","fiondi","fiondo","fiorai","fiorar","fiordi","fiordo","fiorii","fiorir","fiossi","fiosso","fiotta","fiotti","fiotto","firmai","firmar","fisaci","fisala","fisale","fisali","fisalo","fisami","fisane","fisano","fisare","fisata","fisate","fisati","fisato","fisava","fisavi","fisavo","fiscal","fischi","fisica","fisici","fisico","fisima","fisime","fisino","fissai","fissar","fitina","fitine","fittai","fittar","fiutai","fiutar","fixing","flagga","flaggo","flagra","flagri","flagro","flamba","flambi","flambo","flanai","flanar","flange","flangi","flatus","flauta","flauti","flauto","flegga","fleggo","flegma","flegmi","flemma","flemme","flessa","flesse","flessi","flesso","fletta","flette","fletti","fletto","fliace","fliaci","fliaco","flippa","flippi","flippo","flirta","flirti","flirto","flirts","flocca","flocco","floema","floemi","floppa","floppi","floppo","floppy","florea","floree","florei","floreo","flosce","flosci","flotta","flotte","flotti","flotto","fluata","fluate","fluati","fluato","fluida","fluide","fluidi","fluido","fluire","fluita","fluite","fluiti","fluito","fluiva","fluivi","fluivo","fluore","fluori","fluoro","flussa","flussi","flusso","flutti","flutto","flyers","flysch","fobica","fobici","fobico","focaia","focaie","focale","focali","focana","focane","focani","focano","focata","focate","focati","focato","focena","focene","focese","focesi","focide","focidi","focile","focili","focone","foconi","focosa","focose","focosi","focoso","fodera","fodere","foderi","fodero","fogata","fogate","foggia","foggio","foglia","foglie","foglio","fognai","fognar","foioli","foiolo","foiosa","foiose","foiosi","foioso","folade","foladi","folaga","folata","folate","folati","folato","folcer","folchi","folder","folica","folici","folico","follai","follar","follia","follie","follow","fomite","fomiti","fonaci","fonala","fonale","fonali","fonalo","fonami","fonane","fonano","fonare","fonata","fonate","fonati","fonato","fonava","fonavi","fonavo","fondai","fondar","fonder","fondua","fondue","fonema","fonemi","fonesi","fonica","fonici","fonico","fonino","fonone","fononi","foodie","foraci","forala","forale","forali","foralo","forame","forami","forane","forano","forare","forata","forate","forati","forato","forava","foravi","foravo","forbii","forbir","forche","forese","foresi","forgia","forgio","forino","forint","formai","formar","format","formio","fornai","fornii","fornir","forums","forvia","forvii","forvio","forzai","forzar","fosche","foschi","fotica","fotici","fotico","fotina","fotine","fotona","fotone","fotoni","fottei","fotter","fottii","fottio","foyers","fracco","fraghe","fragna","fragne","fragni","fragno","fragra","fragri","fragro","fraina","fraine","framea","framee","franai","franar","franca","franci","franco","franga","frange","frangi","frango","franse","fransi","franta","frante","franti","franto","frappa","frappe","frappi","frappo","frasca","fratai","fratel","fratta","fratte","fratti","fratto","frauda","fraudi","fraudo","frecce","frecci","fredda","fredde","freddi","freddo","freeza","freezi","freezo","fregai","fregar","freghe","freghi","fregia","fregio","fregna","fregne","fregni","fregno","freisa","fremei","fremer","fremii","fremir","frenai","frenar","french","fresai","fresar","fresca","fresco","fresia","fresie","fretta","frette","fretti","fretto","friend","frigga","frigge","friggi","friggo","frigia","frigie","frigio","frigna","frigni","frigno","frimai","fringe","frinii","frinio","frinir","frisai","frisar","frisia","frisie","frisio","frison","frisse","frissi","fritta","fritte","fritti","fritto","frizza","frizzi","frizzo","frocio","frodai","frodar","frogia","frolla","frolle","frolli","frollo","fronda","fronde","fronte","fronti","frotta","frotte","frugai","frugar","frughi","fruire","fruita","fruite","fruiti","fruito","fruiva","fruivi","fruivo","frulla","frulli","frullo","frusci","frusco","frusta","fruste","frusti","frusto","frutta","frutti","frutto","fucata","fucate","fucati","fucato","fucila","fucile","fucili","fucilo","fucina","fucine","fucini","fucino","fucsia","fucsie","fuetti","fuetto","fugace","fugaci","fugala","fugale","fugali","fugalo","fugami","fugane","fugano","fugapi","fugare","fugata","fugate","fugati","fugato","fugava","fugavi","fugavo","fuggii","fuggir","fugona","fugone","fugoni","fuhrer","fulcri","fulcro","fulger","fumaci","fumala","fumale","fumali","fumalo","fumami","fumana","fumane","fumano","fumare","fumari","fumata","fumate","fumati","fumato","fumava","fumavi","fumavo","fumica","fumico","fumida","fumide","fumidi","fumido","fumiga","fumigo","fumino","fummai","fummar","fumoir","fumosa","fumose","fumosi","fumoso","funaia","funaie","funaio","funale","funali","funame","funami","funata","funate","funera","funere","funeri","funero","funger","funghi","fuochi","furace","furaci","furala","furale","furali","furalo","furami","furane","furani","furano","furare","furata","furate","furati","furato","furava","furavi","furavo","furbon","furche","furiai","furiar","furino","furono","furore","furori","fusaci","fusaia","fusaie","fusaio","fusala","fusale","fusami","fusane","fusasi","fusata","fusate","fusati","fusato","fusavi","fuseci","fusele","fusemi","fusero","fusesi","fuseti","fusevi","fusici","fusile","fusili","fusimi","fusine","fusion","fusisi","fusite","fusiti","fusivi","fusoci","fusole","fusoli","fusolo","fusomi","fusone","fusore","fusori","fusosi","fusoti","fusovi","futile","futili","futura","future","futuri","futuro","fylfot","führer","gabala","gabale","gabali","gabalo","gabbai","gabbar","gabbei","gabbeo","gabber","gabbia","gabbie","gabbri","gabbro","gabese","gabesi","gabina","gabine","gabini","gabino","gabola","gabole","gadget","gadide","gadidi","gaetta","gaette","gaetti","gaetto","gaffes","gagate","gagati","gaggia","gaggio","galani","galano","galata","galate","galati","galbei","galbeo","galega","galego","galena","galene","galera","galere","galeri","galero","galghi","galibi","gallai","gallar","gallio","gamete","gameti","gamica","gamici","gamico","gaming","gancio","ganghe","gangia","gangli","gannii","gannir","garage","garbai","garbar","garden","garghe","garghi","gariga","garosa","garose","garosi","garoso","garrii","garrir","garzai","garzar","garzon","gasaci","gasala","gasale","gasali","gasalo","gasami","gasane","gasano","gasare","gasata","gasate","gasati","gasato","gasava","gasavi","gasavo","gaschi","gasino","gasoli","gasosa","gasose","gasosi","gasoso","gassai","gassar","gastri","gastro","gattai","gatton","gauche","gaucho","gaudei","gauder","gaudia","gaudio","gaufre","gavina","gavine","gavone","gavoni","gazaci","gazala","gazale","gazali","gazalo","gazami","gazane","gazano","gazare","gazata","gazate","gazati","gazato","gazava","gazavi","gazavo","gazebi","gazebo","gazino","geenna","geenne","geiger","geisha","geishe","gelaci","gelala","gelale","gelali","gelalo","gelami","gelane","gelano","gelare","gelata","gelate","gelati","gelato","gelava","gelavi","gelavo","geldra","geldre","gelese","gelesi","gelida","gelide","gelidi","gelido","gelino","geliva","gelive","gelivi","gelivo","gelone","geloni","gelosa","gelose","gelosi","geloso","gemano","gemere","gemete","gemeva","gemevi","gemevo","gemica","gemici","gemico","gemila","gemile","gemili","gemilo","gemimi","gemina","gemine","gemini","gemino","gemiti","gemito","gemmai","gemmar","gemmea","gemmee","gemmei","gemmeo","gemono","gemuta","gemute","gemuti","gemuto","genaci","genala","genale","genali","genalo","genami","genane","genano","genare","genata","genate","genati","genato","genava","genavi","genavo","gender","genera","genere","generi","genero","genesi","genica","genici","genico","genino","genita","genite","geniti","genito","gennai","genoma","genomi","gentil","geoide","geoidi","geomio","gepida","gepide","gepidi","gepido","gerani","gerboa","gerese","geresi","gerghi","gerita","gerite","geriti","gerito","gessai","gessar","gessea","gessee","gessei","gesseo","gestii","gestir","gestor","gestri","gestro","getica","getici","getico","gettai","gettar","getter","getula","getule","getuli","getulo","geyser","gheghe","gheghi","ghenga","gheppi","ghetta","ghette","ghetti","ghetto","ghezza","ghezze","ghezzi","ghezzo","ghiadi","ghiado","ghiaia","ghiaie","ghiara","ghiare","ghibli","ghiera","ghiere","ghigna","ghigne","ghigni","ghigno","ghinda","ghinde","ghindi","ghindo","ghinea","ghinee","ghirba","ghirbe","giacca","giacer","giachi","giaina","gialda","gialde","gialla","gialle","gialli","giallo","gialua","gialue","gialui","gialuo","giambi","giambo","giarda","giarde","gibaia","gibaie","gibaii","gibaio","gibese","gibesi","gigari","gigaro","giglio","gigolo","gineri","ginger","ginkgo","ginnai","ginnar","giobba","giobbi","giobbo","giocai","giocar","giochi","giocon","gioghi","gioiai","gioiar","gioino","gioire","gioita","gioite","gioiti","gioito","gioiva","gioivi","gioivo","giorni","giorno","giovai","giovar","giovin","gipeti","gipeto","giraci","girala","girale","girali","giralo","girami","girane","girano","girare","girata","girate","girati","girato","girava","giravi","giravo","giremo","girete","girgli","girini","girino","girone","gironi","girono","gitaci","gitala","gitale","gitali","gitami","gitana","gitane","gitani","gitano","gitasi","gitati","gitavi","giteci","gitele","gitemi","gitene","gitesi","giteti","gitevi","gitici","gitile","gitili","gitimi","gitine","gitisi","gititi","gitivi","gitoci","gitole","gitoli","gitolo","gitomi","gitone","gitosi","gitoti","gitovi","gittai","gittar","giubba","giubbe","giucca","giucco","giudea","giudee","giudei","giudeo","giudia","giudie","giudii","giudio","giuggi","giugni","giugno","giulia","giulie","giulio","giunca","giunco","giunga","giunge","giungi","giungo","giunse","giunsi","giunta","giunte","giunti","giunto","giuoca","giuoco","giurai","giurar","giuria","giurie","giusta","giuste","giusti","giusto","givamo","givano","givate","glabra","glabre","glabri","glabro","gladio","glande","glandi","glassa","glasse","glassi","glasso","glauca","glauco","gliale","gliali","gliare","gliari","glicol","gliel'","gliela","gliele","glieli","glielo","gliene","glioma","gliomi","glissa","glissi","glisso","global","globes","glocal","gloria","glorie","glorio","glossa","glosse","glossi","glosso","glotta","glotte","gluone","gluoni","glutea","glutee","glutei","gluten","gluteo","gnaula","gnauli","gnaulo","gneiss","gnidio","gnocca","gnocco","gnorri","gnucca","gobide","gobidi","goblin","goccia","goccio","godano","godere","godese","godesi","godete","godets","godeva","godevi","godevo","godici","godila","godile","godili","godilo","godimi","godine","goditi","godono","godrai","godrei","goduta","godute","goduti","goduto","goferi","gofero","goffra","goffri","goffro","golata","golate","golati","golato","golden","goleai","golear","golena","golene","golosa","golose","golosi","goloso","gomena","gomene","gomita","gomiti","gomito","gommai","gommar","gomona","gomone","gonade","gonadi","gonese","gonesi","gonfia","gonfie","gonfio","gongri","gongro","gonidi","googla","googli","googlo","googol","gorbia","gorbie","gordio","gorese","goresi","gorghe","gorghi","gorgia","gospel","gossip","gotata","gotate","gotica","gotici","gotico","gottai","gottar","gourde","govese","govesi","grabba","grabbi","grabbo","gradai","gradar","grader","gradii","gradir","gradua","gradui","graduo","graffa","graffe","graffi","graffo","grafia","grafie","gralli","grallo","gramai","gramar","gramma","grammi","grammo","grampi","grampo","granai","granar","grance","grande","grandi","granfa","granfe","granfi","grange","granii","granir","grappa","grappe","grappi","grappo","grasce","graspi","graspo","grassa","grasse","grassi","grasso","grasta","graste","gratin","gratis","gratta","gratti","gratto","gravai","gravar","grazia","grazie","grazio","grecai","grecar","greche","grechi","gregge","greggi","gregna","gregne","grembi","grembo","gremii","gremio","gremir","greppi","greppo","gretta","grette","gretti","gretto","grezza","grezze","grezzi","grezzo","gricce","gricci","griche","gridai","gridar","gridii","gridio","grifai","grifar","griffa","griffe","griffi","griffo","grigia","grigie","grigio","grigli","grilla","grilli","grillo","grills","gringo","grinta","grinte","grinza","grinze","grinzi","grinzo","grippa","grippi","grippo","griqua","grisbi","grisou","grivna","grivne","grocca","grocco","groggy","grolla","grolle","gromma","gromme","grommi","grommo","gronda","gronde","grondi","grondo","grongo","groppa","groppe","groppi","groppo","grossa","grosse","grossi","grosso","grotta","grotte","grotti","grotto","ground","groups","grucce","grufai","grufar","grugai","grugar","grughi","grugna","grugni","grugno","gruide","gruidi","grulla","grulle","grulli","grullo","grunge","gruppi","gruppo","gruzzi","gruzzo","guacco","guachi","guadai","guadar","guaime","guaimi","guaina","guaine","guaire","guairi","guairo","guaita","guaite","guaiti","guaito","guaiva","guaivi","guaivo","gualca","gualco","gualda","gualde","gualdi","gualdo","guance","guanci","guanti","guanto","guappa","guappe","guappi","guappo","guarda","guardi","guardo","guarii","guarir","guasca","guasco","guasta","guaste","guasti","guasto","guatai","guatar","guatti","guatto","guaymi","guazza","guazze","guazzi","guazzo","gudena","gudene","gudeni","gudeno","gudese","gudesi","gueffa","gueffe","guelfa","guelfe","guelfi","guelfo","guerce","guerci","guerii","guerir","guerra","guerre","gufaci","gufale","gufami","gufane","gufano","gufare","gufata","gufate","gufati","gufato","gufava","gufavi","gufavo","gufino","guglia","guglie","guidai","guidar","guigge","guigna","guigne","guinai","guinar","guitta","guitte","guitti","guitto","guizza","guizzi","guizzo","gunite","guniti","gurkha","guscio","gustai","gustar","gâteau","gómena","gómene","habeas","hacker","hadith","hafnio","hahnio","haikai","hamada","hammam","hammām","handle","hangar","harari","harura","harure","haruri","haruro","haussa","hazara","hazard","health","hedges","hentai","herera","herere","hereri","herero","herpes","hiatus","hippie","hitter","hobbit","hockey","holder","holmio","holter","horrea","horror","houthi","huarpe","huarpi","humica","humici","humico","hummus","humour","hunter","hurrah","hybris","iaculi","iaculo","iacuta","iacute","iacuti","iacuto","ialina","ialine","ialini","ialino","ialite","ialiti","iastia","iastie","iastii","iastio","iatale","iatali","iatese","iatesi","iatina","iatine","iatini","iatino","iatrea","iatree","iatrei","iatreo","iazide","iazidi","iazige","iazigi","ibalaa","ibalae","ibalai","ibalao","iberna","iberni","iberno","ibibia","ibibie","ibibii","ibibio","ibicea","ibicee","ibicei","ibiceo","ibidem","ibisco","ibrida","ibride","ibridi","ibrido","icaria","icarie","icarii","icario","idalgo","idalia","idalie","idalio","ideaci","ideala","ideale","ideali","idealo","ideami","ideane","ideano","ideare","ideata","ideate","ideati","ideato","ideava","ideavi","ideavo","ideina","ideine","ideino","ideona","ideone","idilli","idioma","idiomi","idiota","idiote","idioti","idonea","idonee","idonei","idoneo","idrari","idrasi","idrata","idrate","idrati","idrato","idrese","idresi","idrica","idrici","idrico","idrobi","idroli","idrolo","idroma","idromi","idroni","idrope","idropi","idruri","idruro","idumea","idumee","idumei","idumeo","iemale","iemali","ienide","ienidi","ierica","ierici","ierico","iesina","iesine","iesini","iesino","iessea","iessee","iessei","iesseo","iettai","iettar","ifugaa","ifugae","ifugai","ifugao","igbira","igiene","igieni","igloos","igname","ignami","ignara","ignare","ignari","ignaro","ignava","ignave","ignavi","ignavo","ignita","ignite","igniti","ignito","ignora","ignori","ignoro","ignota","ignote","ignoti","ignoto","ignuda","ignude","ignudi","ignudo","igrina","igrine","igroma","igromi","iguana","iguane","ileale","ileali","ileite","ileiti","iliaca","iliaci","iliaco","iliade","iliadi","illata","illate","illati","illato","illesa","illese","illesi","illeso","illini","illiri","illuda","illude","illudi","illudo","illune","illuni","illusa","illuse","illusi","illuso","illuvi","ilvata","ilvate","ilvati","ilvato","images","imatio","imbaca","imbaco","imbasa","imbasi","imbaso","imbava","imbavi","imbavo","imbeva","imbeve","imbevi","imbevo","imbigi","imbola","imboli","imbolo","imbona","imboni","imbono","imbuca","imbuco","imbuii","imbuir","imbuti","imbuto","imenea","imenee","imenei","imeneo","imenio","imitai","imitar","immaga","immagi","immago","immane","immani","immela","immeli","immelo","immise","immisi","immite","immiti","immola","immoli","immolo","immota","immote","immoti","immoto","immune","immuni","immura","immuri","immuro","immuta","immuti","immuto","impaci","impact","impala","impali","impalo","impana","impani","impano","impanî","impara","impari","imparo","impeci","impela","impeli","impelo","impepa","impepi","impepo","impera","imperi","impero","impesa","impese","impesi","impeso","impeti","impeto","impila","impili","impilo","impipa","impipi","impipo","impone","imponi","import","impose","imposi","imprua","imprui","impruo","impube","impubi","impune","impuni","impupa","impupi","impupo","impura","impure","impuri","impuro","imputa","imputi","imputo","inalai","inalar","inalba","inalbi","inalbo","inambu","inarca","inarco","inarra","inarri","inarro","inaspa","inaspi","inaspo","inasta","inasti","inasto","inaura","inauri","inauro","incaca","incaci","incaco","incara","incari","incaro","incava","incavi","incavo","inceda","incede","incedi","incedo","incela","inceli","incelo","incera","inceri","incero","inches","incida","incide","incidi","incido","incile","incili","incisa","incise","incisi","inciso","incita","inciti","incito","incoai","incoar","incoia","incoio","incola","incole","incoli","incora","incori","incoro","incuba","incube","incubi","incubo","incula","inculi","inculo","incuoi","incusa","incuse","incusi","incuso","incuta","incute","incuti","incuto","indaco","indaga","indago","indiai","indiar","indica","indice","indici","indico","indide","indidi","indino","indios","indire","indite","indizi","indole","indoli","indolo","indoma","indome","indomi","indomo","indoor","indora","indori","indoro","indova","indove","indovi","indovo","induca","induce","induci","induco","indugi","indura","indure","induri","induro","indusi","inebri","inedia","inedie","inerba","inerbi","inerbo","inerii","inerir","inerme","inermi","inerte","inerti","inetta","inette","inetti","inetto","inezia","inezie","infama","infame","infami","infamo","infera","infere","inferi","infero","infici","infida","infide","infidi","infido","infila","infili","infilo","infima","infime","infimi","infimo","infine","infino","infoca","infoco","infoia","infoio","infula","infule","infuna","infuni","infuno","infuri","infusa","infuse","infusi","infuso","ingioi","ingioî","ingoia","ingoio","inguai","inibii","inibir","iniqua","inique","iniqui","iniquo","inizia","inizio","inleia","inleio","inluia","inluio","inmiai","inmiar","inmino","innari","innata","innate","innati","innato","innera","inneri","innero","inneva","innevi","innevo","inning","innova","innovi","innovo","inolia","inolio","inonda","inondi","inondo","inopia","inopie","inossa","inossi","inosso","inputa","inputi","inputo","inputs","insala","insali","insalo","insana","insane","insani","insano","inscia","inscio","insedi","insega","insego","insena","inseni","inseno","inseti","inseto","inside","insidi","insila","insili","insilo","insino","insita","insite","insiti","insito","instai","instar","instia","insula","insule","intana","intani","intano","intasa","intasi","intaso","intela","inteli","intelo","intera","intere","interi","intero","intesa","intese","intesi","inteso","intima","intime","intimi","intimo","intina","intini","intino","intona","intoni","intono","intora","intori","intoro","introi","intuba","intubi","intubo","intuii","intuir","inulta","inulte","inulti","inulto","inumai","inumar","inurba","inurbi","inurbo","inusta","inuste","inusti","inusto","invada","invade","invadi","invado","invaga","invago","invaia","invaio","invale","invali","invano","invasa","invase","invasi","invaso","invece","inveii","inveir","invela","inveli","invelo","invera","inveri","invero","inviai","inviar","invida","invide","invidi","invido","invien","invisa","invise","invisi","inviso","invita","inviti","invito","invoca","invoco","invola","involi","involo","inziga","inzigo","iodaci","iodala","iodale","iodali","iodalo","iodami","iodane","iodano","iodare","iodata","iodate","iodati","iodato","iodava","iodavi","iodavo","iodica","iodici","iodico","iodino","iodosa","iodose","iodosi","iodoso","iodura","ioduri","ioduro","iogurt","ioidea","ioidee","ioidei","ioideo","iolite","ioliti","ionica","ionici","ionico","ionone","iononi","ipetra","ipetre","ipetri","ipetro","ipnosi","ipogea","ipogee","ipogei","ipogeo","ipoide","ipoidi","ipomea","ipomee","ippari","ippica","ippici","ippico","iprite","ipriti","ircana","ircane","ircani","ircano","ircina","ircine","ircini","ircino","iridai","iridar","iridea","iridee","iridei","irideo","iridio","irizza","irizzi","irizzo","ironia","ironie","irpina","irpine","irpini","irpino","irradi","irrida","irride","irridi","irrido","irriga","irrigo","irrisa","irrise","irrisi","irriso","irrita","irrite","irriti","irrito","irroga","irrogo","irrora","irrori","irroro","irruma","irrumi","irrumo","irsuta","irsute","irsuti","irsuto","isarca","isarco","ischia","ischie","ischio","iseana","iseane","iseani","iseano","isiaca","isiace","isiaci","isiaco","isodio","isolai","isolar","ispana","ispane","ispani","ispano","ispera","isperi","ispero","ispida","ispide","ispidi","ispido","ispira","ispiri","ispiro","issaci","issala","issale","issali","issalo","issami","issane","issano","issare","issata","issate","issati","issato","issava","issavi","issavo","issese","issesi","issino","issopi","issopo","istaci","istala","istale","istali","istalo","istami","istane","istano","istare","istata","istate","istati","istato","istava","istavi","istavo","isteri","istero","istiga","istigo","istino","istmia","istmie","istmii","istmio","istone","istoni","istori","istorî","iterai","iterar","itrana","itrane","itrani","itrano","itteri","ittero","ittica","ittici","ittico","ittita","ittite","ittiti","ittrio","iucche","iudica","iudico","iugale","iugali","iugeri","iugero","iugula","iuguli","iugulo","iulche","iulchi","iunior","jabots","jacket","jakudn","jammer","jersey","jesina","jesine","jesini","jesino","jingle","jivara","jivare","jivari","jivaro","jobber","jockey","jodler","jogger","jojoba","jonica","jonici","jonico","joypad","judoka","judoki","jumper","jungla","jungle","junior","junker","jupons","kabuki","kagora","kagore","kagori","kagoro","kairos","kaiser","kamala","kamale","kanaki","kaonde","kappao","kaputt","karate","karman","kasbah","kashan","kasher","katana","kazaca","kazaco","kazaka","kazake","kazaki","kazako","keeper","kefiah","keirin","kelvin","kenosi","kenzia","kenzie","kermes","kernel","kevlar","khamti","kharia","kicker","kiefer","killer","kimoni","kimono","kippah","kippur","kirsch","kitara","kitsai","kitsch","kiwani","kiwano","klimax","knödel","kobret","kodiak","koilon","kolola","kolole","kololi","kololo","korana","kosher","kotoka","kotoke","kotoki","kotoko","kouros","krypto","kuanza","kulaki","kurnai","kuruba","kusasi","kuskus","kwacha","kwanza","kümmel","labari","labaro","labbia","labbra","labbri","labbro","labile","labili","labore","labori","labour","labrum","laccai","laccar","lacche","lacchi","laccia","laccio","lacera","lacere","laceri","lacero","lacuna","lacune","ladaka","ladake","ladaki","ladako","ladani","ladano","ladies","ladina","ladine","ladini","ladino","ladron","lagena","lagene","lagide","lagidi","lagnai","lagnar","lagnon","lagone","lagoni","lagopi","lagopo","lagosa","lagose","lagosi","lagoso","laguna","lagune","laiche","laidai","laidar","lamaci","lamala","lamale","lamali","lamalo","lamami","lamano","lamare","lamata","lamate","lamati","lamato","lamava","lamavi","lamavo","lambda","lambei","lamber","lambii","lambir","lamese","lamesi","lamina","lamine","lamini","lamino","lampai","lampar","lamuti","lanara","lanare","lanari","lanaro","lanata","lanate","lanati","lanato","lanche","lancia","lancio","landau","lander","landra","landre","langhe","langua","langue","langui","languo","langur","laniai","laniar","lanide","lanidi","lanina","lanine","lanino","lanosa","lanose","lanosi","lanoso","lanugo","lanuta","lanute","lanuti","lanuto","laonde","lapaco","lapazi","lapida","lapide","lapidi","lapido","lapins","lapite","lapiti","lapito","lappai","lappar","lapsus","laptop","larari","lardai","lardar","largai","largar","larghe","larghi","largii","largir","larice","larici","laride","laridi","larvai","larvar","lascai","lascar","lasche","laschi","lascia","lascio","lasese","lasesi","lasica","lasici","lasico","lassai","lassar","lastex","lastra","lastre","lastri","lastro","latere","lateri","latero","latice","latici","latina","latine","latini","latino","latiri","latiro","latita","latiti","latito","latore","latori","latrai","latrar","latria","latrie","lattai","lattar","lattea","lattee","lattei","latteo","laurea","lauree","laurei","laureo","lautal","lavabi","lavabo","lavaci","lavala","lavale","lavali","lavalo","lavami","lavane","lavano","lavare","lavata","lavate","lavati","lavato","lavava","lavavi","lavavo","lavica","lavici","lavico","lavina","lavine","lavino","lavora","lavori","lavoro","lawata","layout","leader","leanza","leanze","learda","learde","leardi","leardo","lebbio","lebbra","lebbre","lebete","lebeti","lecani","leccai","leccar","lecchi","leccia","leccio","leccon","lecita","lecite","leciti","lecito","lecizi","lectio","ledano","ledere","ledete","ledeva","ledevi","ledevo","ledici","ledila","ledile","ledili","ledilo","ledimi","ledine","lediti","ledono","legaci","legala","legale","legali","legalo","legame","legami","legane","legano","legare","legata","legate","legati","legato","legava","legavi","legavo","legger","leggii","leggio","legnai","legnar","legume","legumi","leiese","leiesi","lelegi","lellai","lellar","lemica","lemici","lemico","lemure","lemuri","lenese","lenesi","lengua","lenire","lenita","lenite","leniti","lenito","leniva","lenivi","lenivo","lenone","lenoni","lentai","lentar","lentia","lentie","lenzai","lenzar","lepade","lepadi","lepcia","lepida","lepide","lepidi","lepido","lepore","lepori","leppai","leppar","lercia","lercio","lesaci","lesami","lesasi","lesati","lesavi","lesbia","lesbie","lesbio","lesche","leseci","lesemi","lesena","lesene","lesero","lesesi","leseti","lesevi","lesghi","lesici","lesimi","lesina","lesine","lesini","lesino","lesisi","lesiti","lesiva","lesive","lesivi","lesivo","lesoci","lesole","lesoli","lesolo","lesomi","lesone","lesosi","lesoti","lesovi","lessai","lessar","lessia","lessie","lestra","lestre","lesura","lesure","letale","letali","letama","letame","letami","letamo","letica","letico","letizi","lettor","lettre","leuche","leuchi","levaci","levala","levale","levali","levalo","levame","levami","levane","levano","levare","levata","levate","levati","levato","levava","levavi","levavo","levese","levesi","leviga","levigo","levino","levita","leviti","levito","lezzai","lezzar","libaci","libala","libale","libali","libalo","libame","libami","libane","libani","libano","libare","libata","libate","libati","libato","libava","libavi","libavo","libbra","libbre","libera","libere","liberi","libero","libica","libici","libico","libido","libino","libiti","libito","librai","librar","libris","liccio","licena","licene","licere","liceva","lichen","licide","licidi","licita","licite","liciti","licito","licore","licori","licosa","licose","lidese","lidesi","lidica","lidici","lidico","lidite","liditi","liftai","liftar","ligiai","ligiar","ligino","lignea","lignee","lignei","ligneo","ligula","ligule","ligure","liguri","lilion","lilium","limaci","limala","limale","limali","limalo","limami","limane","limano","limare","limata","limate","limati","limato","limava","limavi","limavo","limine","limini","limino","limita","limite","limiti","limito","limnea","limnee","limola","limole","limoli","limolo","limona","limone","limoni","limono","limosa","limose","limosi","limoso","limuli","limulo","linaio","lincea","lincee","lincei","linceo","lincia","lincio","lineai","linear","lineti","lineto","lineup","lingio","lingua","lingue","linite","liniti","linkai","linkar","linnea","linnee","linone","linoni","linosa","linose","linosi","linoso","lintea","lintee","lintei","linteo","lipasi","lipide","lipidi","lipoma","lipomi","liquai","liquar","liquor","lirata","lirate","lirati","lirato","lirica","lirici","lirico","lirone","lironi","lisaci","lisala","lisale","lisali","lisalo","lisami","lisane","lisano","lisare","lisata","lisate","lisati","lisato","lisava","lisavi","lisavo","lische","liscia","liscio","lisina","lisine","lisino","lisoli","lisolo","listai","listar","liston","litaci","litala","litale","litali","litalo","litami","litane","litani","litano","litare","litata","litate","litati","litato","litava","litavi","litavo","litchi","litica","litici","litico","litiga","litigi","litigo","litino","litobi","litote","litoti","litura","liture","liutai","livera","liveri","livero","livese","livesi","livida","livide","lividi","livido","living","livore","livori","livrea","livree","lizzai","lizzar","loader","lobare","lobari","lobata","lobate","lobati","lobato","lobbia","lobbie","lobuli","lobulo","locaci","locala","locale","locali","localo","locami","locane","locano","locare","locata","locate","locati","locato","locava","locavi","locavo","locche","locchi","locona","locone","loconi","locono","loculi","loculo","lodaci","lodala","lodale","lodali","lodalo","lodami","lodane","lodano","lodare","lodata","lodate","lodati","lodato","lodava","lodavi","lodavo","lodino","lodola","lodole","loffai","loffar","loffia","loffie","loffio","lofide","lofidi","lofote","lofoti","loggai","loggar","logghi","loggia","logica","logici","logico","loglio","logoff","logora","logore","logori","logoro","logout","lograi","lograr","loiche","loisir","loista","loiste","loisti","lolita","lolite","longhe","longhi","longue","lontra","lontre","loppio","lorari","lordai","lordar","lorica","losche","loschi","lotica","lotici","lotico","lotosa","lotose","lotosi","lotoso","lottai","lottar","lounge","lovale","lovali","lovers","luassi","luasso","lucana","lucane","lucani","lucano","lucchi","luccio","lucean","lucere","luceva","lucida","lucide","lucidi","lucido","lucina","lucine","lucono","lucore","lucori","lucrai","lucrar","ludica","ludici","ludico","lugana","luglio","lulese","lulesi","lumaca","lumaci","lumaco","lumaia","lumaie","lumaio","lumala","lumale","lumali","lumalo","lumami","lumane","lumano","lumare","lumata","lumate","lumati","lumato","lumava","lumavi","lumavo","lumera","lumere","lumina","lumini","lumino","lunare","lunari","lunata","lunate","lunati","lunato","lungai","lungar","lunghe","lunghi","lunula","lunule","luoghi","lupaia","lupaie","lupara","lupare","lupina","lupine","lupini","lupino","lupoma","lupomi","luposa","lupose","luposi","luposo","lurche","lurchi","lurese","luresi","lurida","luride","luridi","lurido","lurker","lusche","luschi","lushai","lusone","lusoni","lusori","lussai","lussar","lustra","lustre","lustri","lustro","lutaci","lutala","lutale","lutali","lutalo","lutami","lutane","lutano","lutare","lutata","lutate","lutati","lutato","lutava","lutavi","lutavo","lutino","luttai","luttar","luvari","luvaro","lxviii","lxxiii","lxxvii","lxxxii","lxxxiv","lxxxix","lxxxvi","lydite","macaca","macaco","maccai","maccar","macchi","macera","macere","maceri","macero","macina","macine","macini","macino","macola","macole","macoli","macolo","macuba","macula","macule","maculi","maculo","macusi","madama","madame","madera","madida","madide","madidi","madido","madore","madori","madras","mafiai","mafiar","mafica","mafici","mafico","mafino","magaci","magala","magale","magali","magalo","magami","magane","magano","magare","magari","magata","magate","magati","magato","magava","magavi","magavo","magena","magene","mageni","mageno","maggio","magica","magici","magico","maglia","maglie","maglio","magnai","magnar","magnum","magoli","magolo","magona","magone","magoni","maiala","maiale","maiali","maiden","mainai","mainar","maiore","maiori","maison","majors","makers","malaga","malare","malari","malata","malate","malati","malato","malava","malawi","maldir","malese","malesi","malfar","malgai","malgar","malghe","malghi","malica","malici","malico","malide","malidi","malino","malizi","mallei","malleo","mallet","malora","malore","malori","malusa","malusi","maluso","mammai","mammar","mammea","mammee","mammon","mammut","manale","manali","manata","manate","manati","manato","mancai","mancar","manche","manchi","mancia","mandai","mandar","mandea","mandee","mandei","mandeo","mandia","mandie","manghi","mangia","mangio","mangue","mangui","manica","manici","manico","manide","manidi","manila","manili","manina","manine","mannea","mannee","mannei","manneo","manoba","manobe","manobi","manobo","manona","manone","manosa","manose","manosi","manoso","manque","mansio","mantra","manuca","manuco","maonia","maonie","mappai","mappar","mapper","maquis","maraca","marame","marami","marana","marane","marani","marano","maravi","marcai","marcar","marche","marchi","marcia","marcie","marcii","marcio","marcir","marena","marene","marese","maresi","marina","marine","marini","marino","marita","mariti","marito","marker","market","markup","marlin","marmai","marmar","marnai","marnar","marona","marone","maroni","marosi","maroso","marron","marsch","martin","marzia","marzie","marzio","maschi","mascon","mashup","masora","masore","masque","massai","masses","master","mastio","mastra","mastre","mastri","mastro","masuri","mataco","matcha","matchi","matcho","materi","matero","matesi","matici","matico","matita","matite","matria","matrie","mattai","mattar","mattia","mattie","matura","mature","maturi","maturo","matusa","mauser","maxima","mayday","mazdea","mazdee","mazdei","mazdeo","mazica","mazici","mazico","mazzia","mazzio","maître","mbunda","mbundu","mcccii","mccciv","mcccix","mcccli","mccclv","mccclx","mcccvi","mcccxc","mcccxi","mcccxl","mcccxv","mcccxx","mcciii","mcclii","mccliv","mcclix","mcclvi","mcclxi","mcclxv","mcclxx","mccvii","mccxci","mccxcv","mccxii","mccxiv","mccxix","mccxli","mccxlv","mccxvi","mccxxi","mccxxv","mccxxx","mcdiii","mcdlii","mcdliv","mcdlix","mcdlvi","mcdlxi","mcdlxv","mcdlxx","mcdvii","mcdxci","mcdxcv","mcdxii","mcdxiv","mcdxix","mcdxli","mcdxlv","mcdxvi","mcdxxi","mcdxxv","mcdxxx","mcliii","mclvii","mclxii","mclxiv","mclxix","mclxvi","mclxxi","mclxxv","mclxxx","mcmiii","mcmlii","mcmliv","mcmlix","mcmlvi","mcmlxi","mcmlxv","mcmlxx","mcmvii","mcmxci","mcmxcv","mcmxii","mcmxiv","mcmxix","mcmxli","mcmxlv","mcmxvi","mcmxxi","mcmxxv","mcmxxx","mcviii","mcxcii","mcxciv","mcxcix","mcxcvi","mcxiii","mcxlii","mcxliv","mcxlix","mcxlvi","mcxvii","mcxxii","mcxxiv","mcxxix","mcxxvi","mcxxxi","mcxxxv","mdccci","mdcccl","mdcccv","mdcccx","mdccii","mdcciv","mdccix","mdccli","mdcclv","mdcclx","mdccvi","mdccxc","mdccxi","mdccxl","mdccxv","mdccxx","mdciii","mdclii","mdcliv","mdclix","mdclvi","mdclxi","mdclxv","mdclxx","mdcvii","mdcxci","mdcxcv","mdcxii","mdcxiv","mdcxix","mdcxli","mdcxlv","mdcxvi","mdcxxi","mdcxxv","mdcxxx","mdliii","mdlvii","mdlxii","mdlxiv","mdlxix","mdlxvi","mdlxxi","mdlxxv","mdlxxx","mdviii","mdxcii","mdxciv","mdxcix","mdxcvi","mdxiii","mdxlii","mdxliv","mdxlix","mdxlvi","mdxvii","mdxxii","mdxxiv","mdxxix","mdxxvi","mdxxxi","mdxxxv","meagli","meammo","meando","meante","meanti","mearci","mearla","mearle","mearli","mearlo","mearmi","mearne","mearsi","mearti","mearvi","measse","meassi","measte","measti","meator","mecche","meconi","medela","medele","medese","medesi","mediai","mediar","medica","medici","medico","medina","medine","medino","medita","mediti","medito","medium","medley","medusa","meduse","meerai","meerei","meetup","mefite","mefiti","megera","megere","meglio","mehari","meiamo","meiate","meiosi","melaci","melala","melale","melali","melalo","melami","melane","melano","melare","melari","melata","melate","melati","melato","melava","melavi","melavo","melena","melene","melese","melesi","meleti","meleto","melica","melici","melico","meliga","melina","meline","melino","mellea","mellee","mellei","melleo","melode","melodi","melodo","melone","meloni","melton","membra","membri","membro","memora","memore","memori","memoro","menaci","menade","menadi","menala","menale","menali","menalo","menami","menane","menano","menapi","menare","menata","menate","menati","menato","menava","menavi","menavo","mencia","mencio","mendai","mendar","menhir","menino","menola","menole","menoma","menome","menomi","menomo","mentii","mentir","mentis","mentre","meonia","meonie","meonio","mercai","mercar","merche","merchi","merdai","merdon","merger","merghi","meriai","meriar","merini","merino","merita","merite","meriti","merito","merlai","merlar","merlot","merope","meropi","merore","merori","meruli","mesata","mesate","mescal","mescei","mescer","meschi","mescia","mescio","meseri","mesero","meseta","mesica","mesici","mesico","mesone","mesoni","messia","mestai","mestar","metani","metano","metati","metato","meteci","meteco","metese","metesi","metila","metile","metili","metilo","metodi","metodo","metoli","metolo","metopa","metope","metopi","metter","miasma","miasmi","miaula","miauli","miaulo","micado","micche","micchi","miccia","miccio","miceli","micete","miceti","micina","micine","micini","micino","micosi","micron","middle","mietei","mieter","migale","migali","miglia","miglio","mignon","migrai","migrar","mihrab","mikado","milady","milese","milesi","milieu","milion","milita","milite","militi","milito","milord","milota","milote","miloti","miloto","mimaci","mimala","mimale","mimali","mimalo","mimami","mimane","mimano","mimare","mimata","mimate","mimati","mimato","mimava","mimavi","mimavo","mimesi","mimica","mimici","mimico","mimino","mimosa","mimose","mimuli","mimulo","minace","minaci","minala","minale","minali","minalo","minami","minane","minano","minare","minata","minate","minati","minato","minava","minavi","minavo","minbar","minger","miniai","miniar","minima","minime","minimi","minimo","mining","minino","minora","minore","minori","minoro","minuge","minugi","minuii","minuir","minuta","minute","minuti","minuto","mioide","mioidi","miopia","miopie","miraci","mirala","mirale","mirali","miralo","mirami","mirane","mirano","mirare","mirata","mirate","mirati","mirato","mirava","miravi","miravo","mirese","miresi","mirica","mirice","mirici","mirini","mirino","mirrai","mirrar","mirtea","mirtee","mirtei","mirteo","misagi","miscea","miscee","mischi","misera","misere","miseri","misero","mishmi","missai","missar","misses","mister","mistia","mistio","misura","misure","misuri","misuro","mitema","mitemi","mitena","mitene","mitica","mitici","mitico","mitiga","mitigo","mitile","mitili","mitilo","mitosi","mitrai","mitrar","mitrei","mitreo","mitria","mitrie","mitrio","mixaci","mixage","mixala","mixale","mixali","mixalo","mixami","mixane","mixano","mixare","mixata","mixate","mixati","mixato","mixava","mixavi","mixavo","mixers","mixine","mixing","mixino","mixoma","mixomi","mlviii","mlxiii","mlxvii","mlxxii","mlxxiv","mlxxix","mlxxvi","mlxxxi","mlxxxv","mmciii","mmcvii","mmliii","mmlvii","mmlxii","mmlxiv","mmlxix","mmlxvi","mmlxxi","mmlxxv","mmlxxx","mmviii","mmxcii","mmxciv","mmxcix","mmxcvi","mmxiii","mmxlii","mmxliv","mmxlix","mmxlvi","mmxvii","mmxxii","mmxxiv","mmxxix","mmxxvi","mmxxxi","mmxxxv","mobber","mobile","mobili","moccio","mocovi","modale","modali","modana","modani","modano","models","modera","moderi","modero","modica","modici","modico","modula","moduli","modulo","moenia","mofeta","mofete","mogani","mogano","moggia","moggio","moghul","moglie","mohair","mohave","mohavi","mohawk","mojito","moksha","molaci","molala","molale","molali","molalo","molami","molane","molano","molare","molari","molata","molate","molati","molato","molava","molavi","molavo","molcer","molcii","molcir","molese","molesi","molide","molidi","molini","molino","molita","molite","moliti","molito","mollai","mollar","mollii","mollir","moloch","molone","moloni","moment","momese","momesi","monaca","monaci","monaco","monade","monadi","monasa","monase","moncai","moncar","monche","monchi","mondai","mondar","monema","monemi","monera","monere","moneta","monete","moneti","moneto","monile","monili","moniti","monito","monomi","mononi","monosi","monoso","montai","montar","moplah","moplen","moraci","morala","morale","morali","moralo","morami","morane","morano","morare","morata","morate","morati","morato","morava","morave","moravi","moravo","morbia","morbie","morbio","morbus","morder","morena","morene","morese","moresi","morfea","morfee","morfei","morfeo","morgen","morgue","morina","morine","morini","morino","morire","morite","moriva","morivi","morivo","morona","morone","moroni","morosa","morose","morosi","moroso","morrai","morrei","mortai","morula","morule","mosana","mosane","mosani","mosano","moscai","mosche","moschi","moscia","moscio","moshav","mostai","mostra","mostre","mostri","mostro","motard","motiva","motive","motivi","motivo","motore","motori","motosa","motose","motosi","motoso","mousse","movete","moveva","movevi","movevo","movida","mozaba","mozabe","mozabi","mozabo","mozzai","mozzar","mponda","mponde","mpondi","mpondo","mucati","mucato","mucche","mucchi","muccia","muccio","mucica","mucici","mucico","mucida","mucide","mucidi","mucido","mucina","mucine","mucosa","mucose","mucosi","mucoso","mudaci","mudala","mudale","mudali","mudalo","mudami","mudane","mudano","mudare","mudata","mudate","mudati","mudato","mudava","mudavi","mudavo","mudino","muerte","muesli","muffai","muffar","muffii","muffin","muffir","mugghi","muggii","muggir","mugico","muglia","muglio","mugnai","mugola","mugoli","mugolo","mulare","mulari","mulcii","mulcir","muleta","mulina","mulini","mulino","mullah","multai","multar","mumble","mummia","mummie","mundio","munger","munghi","munire","munita","munite","muniti","munito","muniva","munivi","munivo","muover","muraci","murala","murale","murali","muralo","murami","murane","murano","murare","murari","murata","murate","murati","murato","murava","muravi","muravo","murder","murena","murene","murgia","murice","murici","muride","muridi","murina","murine","murini","murino","musaci","musala","musale","musali","musalo","musami","musane","musano","musare","musata","musate","musati","musato","musava","musavi","musavo","muschi","muscle","museum","musica","musici","musico","musics","musini","musino","musiva","musive","musivi","musivo","muslim","musona","musone","musoni","mussai","mussar","musume","mutaci","mutala","mutale","mutali","mutalo","mutami","mutane","mutano","mutare","mutasi","mutata","mutate","mutati","mutato","mutava","mutavi","mutavo","mutica","mutici","mutico","mutila","mutile","mutili","mutilo","muting","mutino","mutola","mutole","mutoli","mutolo","mutone","mutoni","mutria","mutrie","mutuai","mutuar","mutuli","mutulo","mxciii","mxcvii","mxliii","mxlvii","mxviii","mxxiii","mxxvii","mxxxii","mxxxiv","mxxxix","mxxxvi","nachos","nacque","nacqui","nagana","nagane","naiade","naiadi","nailon","naisco","naming","napalm","nappai","nappar","narcos","narese","naresi","narice","narici","narina","narine","narrai","narrar","nasaci","nasala","nasale","nasali","nasalo","nasami","nasane","nasano","nasare","nasata","nasate","nasati","nasato","nasava","nasavi","nasavo","nascer","nasica","nasini","nasino","nasona","nasone","nasoni","nassia","nassie","nassii","nassio","nastia","nastie","nastra","nastri","nastro","nasuta","nasute","nasuti","nasuto","nataci","natala","natale","natali","natalo","natami","natane","natano","natare","natasi","natata","natate","natati","natato","natava","natavi","natavo","nateci","natele","natemi","natene","natesi","nateti","natevi","natica","natici","natile","natimi","natine","natino","natisi","natiti","nativa","native","nativi","nativo","natoci","natola","natole","natomi","natone","natosi","natoti","natovi","natron","natura","nature","naturi","naturo","naupli","nausea","nausee","nausei","nauseo","navaho","navaja","navajo","navale","navali","navata","navate","navati","navato","navera","naveri","navero","navese","navesi","naviga","navigi","navigo","navone","navoni","naïves","neanch","nebbia","nebbie","nebbio","nebula","nebule","necaci","necala","necale","necali","necalo","necami","necane","necano","necare","necata","necate","necati","necato","necava","necavi","necavo","neccia","neccio","necron","necton","nefari","nefeli","negaci","negala","negale","negali","negalo","negami","negane","negano","negare","negata","negate","negati","negato","negava","negavi","negavo","negher","negozi","negron","nekton","nelson","nemesi","nemica","nemici","nemico","nencia","nencio","nenfri","nenfro","neocon","neopro","nepeta","nepete","nepide","nepidi","neppur","nerbai","nerbar","nerica","nerico","nerina","nerine","nerini","nerino","nerita","nerite","neroli","nerume","nerumi","nervea","nervee","nervei","nerveo","nescia","nescie","nescio","nesese","nesesi","nessun","nestai","nestar","netini","netino","nettai","nettar","neutra","neutre","neutri","neutro","nevaia","nevaie","nevaio","nevale","nevali","nevata","nevate","nevati","nevato","nevica","nevici","nevico","nevola","nevole","nevone","nevoni","nevosa","nevose","nevosi","nevoso","newton","nganja","ngonde","ngondi","nibbio","nicchi","niccia","niccio","nicena","nicene","niceni","niceno","nicese","nicesi","nichel","nickel","nidore","nidori","nieghi","niella","nielli","niello","nient'","niente","nights","nihilo","nilgai","nilgau","nilota","nilote","niloti","nimica","nimico","ninfea","ninfee","ninfei","ninfeo","ninnai","ninnar","niobio","nipote","nipoti","nipple","nippli","nipplo","nitida","nitide","nitidi","nitido","nitore","nitori","nitrai","nitrar","nitrii","nitrir","niubbi","niubbo","nivale","nivali","nobeli","nobile","nobili","nocche","nocchi","noccia","noccio","nocese","nocesi","nocete","noceti","noceto","noceva","nocevi","nocevo","nocini","nocino","nociva","nocive","nocivi","nocivo","nocque","nocqui","nodale","nodali","nodini","nodino","nodosa","nodose","nodosi","nodoso","noduli","nodulo","nogaci","nogala","nogale","nogali","nogalo","nogami","nogane","nogano","nogare","nogata","nogate","nogati","nogato","nogava","nogavi","nogavo","noiare","noiosa","noiose","noiosi","noioso","noismi","noismo","nolana","nolane","nolani","nolano","nolare","nolari","nolese","nolesi","nomaci","nomade","nomadi","nomala","nomale","nomali","nomalo","nomami","nomane","nomano","nomare","nomata","nomate","nomati","nomato","nomava","nomavi","nomavo","nomica","nomici","nomico","nomina","nomine","nomini","nomino","nonani","nonano","nonari","nonese","nonesi","noodle","norica","norici","norico","norite","noriti","normai","normar","nosema","nosemi","nostoc","nostra","nostre","nostri","nostro","notaci","notaia","notaie","notaio","notala","notale","notali","notalo","notami","notane","notano","notare","notari","notaro","notata","notate","notati","notato","notava","notavi","notavo","notino","notizi","notori","nottai","nottar","nottua","nottue","notula","notule","notuli","notulo","nougat","novaci","novala","novale","novali","novalo","novami","novane","novano","novare","novata","novate","novati","novato","novava","novavi","novavo","novela","novena","novene","novera","noveri","novero","novese","novesi","noveta","novete","noveti","noveto","novino","novizi","nsenga","nuance","nubila","nubile","nubili","nubilo","nucale","nucali","nucata","nucate","nucati","nucato","nuclei","nucleo","nudaci","nudala","nudale","nudali","nudalo","nudami","nudano","nudare","nudata","nudate","nudati","nudato","nudava","nudavi","nudavo","nudino","nugace","nugaci","nugola","nugole","nugoli","nugolo","nulese","nulesi","numana","numane","numani","numano","numera","numeri","numero","numida","numide","numidi","nuncia","nuncio","nunzia","nunzie","nunzio","nuocer","nuotai","nuotar","nurses","nutria","nutrie","nutrii","nutrir","nuvola","nuvole","nuvoli","nuvolo","nuxese","nuxesi","obblia","obblio","obdura","obduri","obduro","oberai","oberar","obiter","oblaci","oblala","oblale","oblali","oblalo","oblami","oblane","oblano","oblare","oblast","oblata","oblate","oblati","oblato","oblava","oblavi","oblavo","obliai","obliar","oblino","oblita","oblite","obliti","oblito","obriza","obrize","obrizi","obrizo","obroga","obrogo","obsedi","occasi","occaso","occhia","occhio","occida","occide","occidi","occido","occisa","occise","occisi","occiso","occupa","occupi","occupo","oceani","oceano","ocelli","ocello","ocelot","ocrese","ocresi","ocrosi","odendo","odente","odenti","odiaci","odiala","odiale","odiali","odialo","odiami","odiamo","odiane","odiano","odiare","odiata","odiate","odiati","odiato","odiava","odiavi","odiavo","odigli","odimmo","odiosa","odiose","odiosi","odioso","odirai","odirci","odirei","odirla","odirle","odirli","odirlo","odirmi","odirsi","odirti","odirvi","odisse","odissi","odiste","odisti","odorai","odorar","odrisi","oeuvre","offesa","offese","offesi","offeso","office","offici","offizi","offrii","offrir","offset","ofiasi","ofidio","ofiura","ofiure","ofride","ofridi","ognora","ognuna","ognuno","ohmica","ohmici","ohmico","oidica","oidici","oidico","oirata","oirate","oirati","oirato","oirese","oiresi","olanda","olande","oleaci","oleala","oleale","oleali","olealo","oleami","oleane","oleano","oleare","oleari","oleata","oleate","oleati","oleato","oleava","oleavi","oleavo","oleica","oleici","oleico","oleina","oleine","oleino","olendo","olente","olenti","oleosa","oleose","oleosi","oleoso","olezza","olezzi","olezzo","olfaci","olfala","olfale","olfali","olfalo","olfami","olfano","olfare","olfata","olfate","olfati","olfato","olfava","olfavi","olfavo","olfino","olgese","olgesi","oliaci","oliala","oliale","oliali","olialo","oliami","oliamo","oliane","oliano","oliare","oliari","oliata","oliate","oliati","oliato","oliava","oliavi","oliavo","oliera","oliere","olimmo","olimpi","olimpo","olirai","olirci","olirei","olirla","olirle","olirli","olirlo","olirmi","olirsi","olirti","olirvi","olisca","olisce","olisci","olisco","olismi","olismo","olisse","olissi","oliste","olisti","olivai","ollare","ollari","olmaia","olmaie","olmeca","olmeco","olmese","olmesi","olmeti","olmeto","olorai","olorar","omacci","omaggi","omagra","omagre","omagua","ombrai","ombrar","ombria","ombrie","ombrio","omelia","omelie","omenti","omento","omeosi","omessa","omesse","omessi","omesso","ometta","omette","ometti","ometto","omiana","omiane","omiani","omiano","omilia","omilie","ommise","ommisi","omnium","omosex","omucci","onagri","onagro","oncosi","ondaci","ondala","ondale","ondali","ondalo","ondami","ondane","ondano","ondare","ondata","ondate","ondati","ondato","ondava","ondavi","ondavo","ondina","ondine","ondino","ondosa","ondose","ondosi","ondoso","ondula","onduli","ondulo","oneide","onerai","onerar","onesta","oneste","onesti","onesto","onfali","onfalo","onisco","onissi","online","onnese","onnesi","onorai","onorar","onraci","onrala","onrale","onrali","onralo","onrami","onrane","onrano","onrare","onrata","onrate","onrati","onrato","onrava","onravi","onravo","onrino","ontani","ontano","ontica","ontici","ontico","ontosa","ontose","ontosi","ontoso","onusta","onuste","onusti","onusto","oocita","oociti","oocito","oofaga","oofagi","oofago","oofora","oofore","oofori","ooforo","oogoni","oolite","ooliti","ooteca","ootipi","ootipo","opacai","opacar","opache","opachi","operai","operar","opiana","opiane","opiani","opiano","opiata","opiate","opiati","opiato","opiche","opinai","opinar","oplete","opleti","oplita","oplite","opliti","oppiai","oppiar","oppida","oppidi","oppido","oppila","oppili","oppilo","oppino","oppone","opponi","oppose","opposi","oppure","optaci","optale","optami","optane","optano","optare","optata","optate","optati","optato","optava","optavi","optavo","optima","optino","option","oragli","oramai","orammo","orando","orango","orante","oranti","orarci","oraria","orarie","orario","orarla","orarle","orarli","orarlo","orarmi","orarsi","orarti","orarvi","orasse","orassi","oraste","orasti","orator","orbace","orbaci","orbaco","orbala","orbale","orbali","orbalo","orbami","orbane","orbano","orbare","orbata","orbate","orbati","orbato","orbava","orbavi","orbavo","orbene","orbino","orbita","orbite","orbiti","orbito","orciai","orcina","orcine","ordina","ordine","ordini","ordino","ordire","ordita","ordite","orditi","ordito","ordiva","ordivi","ordivo","ordura","ordure","oreade","oreadi","oreggi","oremus","orerai","orerei","oreria","orerie","oretta","orette","orezza","orezze","orezzi","orezzo","orfana","orfane","orfani","orfano","orfica","orfici","orfico","organa","organi","organo","orgone","orgoni","oriamo","oriana","oriane","oriate","oriese","oriesi","origli","orinai","orinar","orioli","oriolo","orlaci","orlala","orlale","orlali","orlalo","orlami","orlane","orlano","orlare","orlata","orlate","orlati","orlato","orlava","orlavi","orlavo","orlino","ormaci","ormaia","ormaie","ormala","ormale","ormali","ormalo","ormami","ormane","ormano","ormare","ormata","ormate","ormati","ormato","ormava","ormavi","ormavo","ormino","ormone","ormoni","ornaci","ornala","ornale","ornali","ornalo","ornami","ornane","ornano","ornare","ornata","ornate","ornati","ornato","ornava","ornavi","ornavo","ornino","orobia","orobie","orobii","orobio","orrida","orride","orridi","orrido","orrire","orrita","orrite","orriti","orrito","orriva","orrivi","orrivo","orrore","orrori","orsina","orsine","orsini","orsino","orsono","ortale","ortali","ortana","ortane","ortani","ortano","ortese","ortesi","ortica","ortite","ortiti","ortiva","ortive","ortivi","ortivo","ortose","ortosi","orzaci","orzala","orzale","orzali","orzalo","orzami","orzane","orzano","orzare","orzata","orzate","orzati","orzato","orzava","orzavi","orzavo","orzino","orzola","orzole","osagli","osammo","osando","osanna","osanni","osanno","osante","osanti","osarci","osarla","osarle","osarli","osarlo","osarmi","osarne","osarsi","osarti","osarvi","osasse","osassi","osaste","osasti","oscena","oscene","osceni","osceno","oscini","oscino","oscula","osculi","osculo","oscura","oscure","oscuri","oscuro","osella","oselle","oserai","oserei","osiamo","osiate","osmeri","osmero","osmica","osmici","osmico","osmite","osmiti","osmosa","osmose","osmosi","osmoso","ospita","ospite","ospiti","ospito","ospizi","ossame","ossami","ossari","ossese","ossesi","osseta","ossete","osseti","osseto","ossibi","ossida","ossidi","ossido","ossina","ossine","ossosa","ossose","ossosi","ossoso","ossuta","ossute","ossuti","ossuto","ostaci","ostala","ostale","ostali","ostalo","ostami","ostane","ostano","ostare","ostata","ostate","ostati","ostato","ostava","ostavi","ostavo","ostica","ostice","ostici","ostico","ostile","ostili","ostina","ostini","ostino","ostola","ostoli","ostolo","otarda","otarde","otaria","otarie","otiche","ottale","ottali","ottani","ottano","ottava","ottave","ottavi","ottavo","ottica","ottici","ottico","ottile","ottili","ottima","ottime","ottimi","ottimo","ottini","ottino","ottona","ottone","ottoni","ottono","ottopi","ottopo","ottria","ottrio","ottura","otturi","otturo","ottusa","ottuse","ottusi","ottuso","outfit","outing","outlet","output","ovante","ovanti","ovario","ovatta","ovatte","ovatti","ovatto","ovetti","ovetto","ovista","oviste","ovisti","ovoide","ovoidi","ovolai","ovovia","ovovie","ovulai","ovular","ovvero","ovviai","ovviar","oxford","ozelot","oziaca","oziaci","oziaco","oziale","oziami","oziamo","oziane","oziano","oziare","oziata","oziate","oziati","oziato","oziava","oziavi","oziavo","oziosa","oziose","oziosi","ozioso","paanga","pabbio","pabuli","pabulo","pacaci","pacala","pacale","pacali","pacalo","pacami","pacane","pacano","pacare","pacata","pacate","pacati","pacato","pacava","pacavi","pacavo","pacche","pacchi","pacera","pacere","paceri","pacese","pacesi","paciai","paciar","pacier","pacino","pacion","pactum","padana","padane","padani","padano","paddle","padese","padesi","padina","padine","padron","padule","paduli","paella","paffia","paffie","paffii","paffio","pagaci","pagaia","pagaie","pagaio","pagala","pagale","pagali","pagalo","pagami","pagana","pagane","pagani","pagano","pagare","pagata","pagate","pagati","pagato","pagava","pagavi","pagavo","paggio","pagina","pagine","pagini","pagino","paglia","paglie","pagoda","pagode","paguri","paguro","paiamo","paiano","paiate","paiola","paiole","paioli","paiolo","paiono","paiute","paiuti","paiwan","palaci","palagi","palaia","palaie","palais","palala","palale","palali","palalo","palami","palane","palano","palare","palata","palate","palati","palato","palava","palavi","palavo","palchi","palesa","palese","palesi","paleso","palina","paline","palini","palino","pallai","pallar","pallet","pallia","pallio","palmer","palona","palone","paloni","palpai","palpar","paluda","palude","paludi","paludo","pamela","pamele","pampas","panace","panaci","panaia","panaie","panala","panale","panali","panalo","panama","panami","panane","panano","panare","panari","panata","panate","panati","panato","panava","panavi","panavo","panche","pancia","pander","pandit","panica","panici","panico","panini","panino","pannai","pannar","panzer","papaga","papage","papagi","papago","papaia","papaie","papale","papali","papati","papato","papaya","papaye","papera","papere","paperi","papero","papers","papier","papini","papino","papiri","papiro","pappai","pappar","papula","papule","paraci","parada","parade","parafa","parafe","parafi","parafo","parala","parale","parali","paralo","parami","parane","parano","parare","parata","parate","parati","parato","parava","paravi","paravo","parcai","parcar","parcer","parche","parchi","pardon","pareli","parere","pareri","paresi","parete","pareti","pareva","parevi","parevo","paride","paridi","parino","parlai","parlar","parodi","parodo","parodî","parola","parole","parrai","parrei","parsec","parser","partes","partii","partir","partum","parure","paruta","parute","pascal","pascei","pascer","paschi","pashto","pashtu","pasqua","pasque","pasqui","pasquo","passai","passar","passii","passim","passio","passir","pastai","pastor","pataca","patagi","patana","patane","patani","patano","patata","patate","patema","patemi","patena","patene","patera","patere","pathos","patica","patici","patico","patina","patine","patini","patino","patire","patita","patite","patiti","patito","pativa","pativi","pativo","patois","patosi","patria","patrie","patrio","patron","pattai","pattar","patula","patule","patuli","patulo","pauese","pauesi","pausai","pausar","pavana","pavane","pavani","pavano","pavesa","pavese","pavesi","paveso","pavida","pavide","pavidi","pavido","pavona","pavone","pavoni","pavore","pavori","pawnee","payena","payene","payoff","pazzia","pazzie","pazzio","pecari","peccai","peccar","pecche","pecchi","peccia","peccio","pecili","pecilo","pecora","pecore","pecori","pecoro","pecten","peculi","pedala","pedale","pedali","pedalo","pedana","pedane","pedani","pedano","pedari","pedata","pedate","pedati","pedato","pedete","pedeti","pedica","pedice","pedici","pedidi","pedina","pedine","pedini","pedino","pedona","pedone","pedoni","pedota","pedoti","pedoto","pedula","pedule","peduli","pegasi","pegaso","peggio","pegola","pegole","peiese","peiesi","pelaci","pelago","pelala","pelale","pelali","pelalo","pelame","pelami","pelane","pelano","pelare","pelata","pelate","pelati","pelato","pelava","pelavi","pelavo","pelele","peleli","pelini","pelino","pellai","pellet","pelobi","pelone","peloni","pelosa","pelose","pelosi","peloso","pelota","pelote","peltri","peltro","pelure","peluta","pelute","peluti","peluto","pemana","pemane","pemani","pemano","penace","penaci","penale","penali","penami","penane","penano","penare","penata","penate","penati","penato","penava","penavi","penavo","pendei","pender","pendia","pendie","pendii","pendio","peneia","peneie","peneio","peneri","penero","penica","penice","penici","penico","penino","penosa","penose","penosi","penoso","pensai","pensar","pensee","pentii","pentir","penula","penule","penuri","penuti","peocio","peones","peonia","peonie","peonio","people","pepaci","pepala","pepale","pepali","pepalo","pepami","pepane","pepano","pepare","pepata","pepate","pepati","pepato","pepava","pepavi","pepavo","pepini","pepino","pepita","pepite","peplum","peponi","peposa","pepose","peposi","peposo","peptoe","peptoi","perale","perali","perdei","perder","perdio","perese","peresi","pereti","pereto","peridi","perina","perine","perire","perita","perite","periti","perito","periva","perivi","perivo","perizi","perlai","permea","permei","permeo","pernio","perone","peroni","perora","perori","peroro","persea","persee","persia","persie","perula","perule","pervia","pervie","pervio","pesaci","pesage","pesala","pesale","pesali","pesalo","pesami","pesane","pesano","pesare","pesata","pesate","pesati","pesato","pesava","pesavi","pesavo","pescai","pescar","pesche","peschi","peseta","pesete","pesino","pesola","pesole","pesoli","pesolo","pessia","pessie","pestai","pestar","petaci","petala","petale","petali","petalo","petami","petano","petare","petasi","petaso","petata","petate","petati","petato","petava","petavi","petavo","petino","petite","petits","petula","petuli","petulo","pevera","pevere","peyote","peziza","pezize","phylum","piacer","piaffa","piaffi","piaffo","piagai","piagar","piagge","piaggi","piaghe","piaghi","piagli","pialla","pialle","pialli","piallo","piammo","pianai","pianar","piando","pianga","piange","piangi","piango","pianin","pianse","piansi","pianta","piante","pianti","pianto","piarci","piarda","piarde","piarla","piarle","piarli","piarlo","piarmi","piaroa","piarsi","piarti","piarvi","piasse","piassi","piaste","piasti","piatii","piatir","piatta","piatte","piatti","piatto","piazza","piazze","piazzi","piazzo","picana","picane","picani","picano","picara","picare","picari","picaro","picata","picate","picati","picato","piccai","piccar","picche","picchi","piccia","picena","picene","piceni","piceno","picide","picidi","picion","pickup","picnic","picura","picure","pidgin","pieese","pieesi","piegai","piegan","piegar","pieghe","pieghi","piemia","piemie","pienai","pienar","pierai","pierei","pieria","pierie","pierio","pierre","pietas","pietra","pietre","pigale","pigali","pigiai","pigiar","pigidi","pigino","piglia","piglio","pigmea","pigmee","pigmei","pigmeo","pigola","pigole","pigoli","pigolo","pigron","pilaci","pilaga","pilala","pilale","pilali","pilalo","pilami","pilane","pilano","pilare","pilata","pilate","pilati","pilato","pilava","pilavi","pilavo","pilese","pilesi","pilino","pillai","pillar","pilona","pilone","piloni","pilono","pilori","piloro","pilosa","pilose","pilosi","piloso","pilota","pilote","piloti","piloto","pimpla","pimple","pinace","pinaci","pinaia","pinaie","pinaio","pinche","pinchi","pinene","pineni","pinese","pinesi","pineta","pinete","pineti","pineto","pingue","pingui","pinite","piniti","pinoli","pinolo","pinosa","pinose","pinosi","pinoso","pintor","pinyin","pinzai","pinzar","piogge","pioide","pioidi","piomba","piombe","piombi","piombo","pioppi","pioppo","piotai","piotar","piotta","piotte","piover","piovra","piovre","piovve","piovvi","pipaci","pipaia","pipaie","pipaio","pipala","pipale","pipali","pipalo","pipami","pipane","pipano","pipara","pipare","pipari","piparo","pipata","pipate","pipati","pipato","pipava","pipavi","pipavo","pipiai","pipiar","pipila","pipili","pipilo","pipina","pipine","pipini","pipino","pipita","pipite","pippai","pippar","pirani","pirano","pirata","pirati","pirato","pirchi","pirena","pirene","pireni","pireno","pirica","pirici","pirico","pirili","pirite","piriti","piroga","piroli","pirolo","pirone","pironi","piropi","piropo","pirosi","pisana","pisane","pisani","pisano","piscia","piscio","pisola","pisoli","pisolo","pistia","pistie","pistor","pitale","pitali","pitica","pitici","pitico","pitone","pitoni","pittai","pittar","pittor","piumai","piumar","piuria","piurie","pivots","pizzai","pizzar","placai","placar","placca","placco","places","placet","plachi","plaghe","plagia","plagio","plaids","planai","planar","plance","plasma","plasmi","plasmo","platea","platee","plauda","plaude","plaudi","plaudo","plausi","plauso","player","plazer","plebea","plebee","plebei","plebeo","plenum","plessi","plesso","pleura","pleure","pliche","plichi","plinti","plinto","plocei","ploceo","plorai","plorar","plotta","plotti","plotto","plughi","plugin","plusia","plusie","plutei","pluteo","pluvia","pluvie","pluvio","pneuma","pneumi","poacea","poacee","poccia","poccio","pocket","poculi","poculo","podere","poderi","podezi","podice","podici","podura","podure","poesia","poesie","poetai","poetar","pofana","pofane","pofani","pofano","pogaci","pogala","pogale","pogali","pogalo","pogami","pogane","pogano","pogare","pogata","pogate","pogati","pogato","pogava","pogavi","pogavo","pogese","pogesi","poggia","poggio","pogrom","poiana","poiane","poiesi","pokoma","pokome","pokomi","pokomo","polana","polane","polani","polano","polare","polari","polche","polder","polena","polene","polese","polesi","policy","polini","polino","polipi","polipo","polire","polita","polite","politi","polito","poliva","polivi","polivo","pollai","pollar","polona","polone","poloni","polono","poltra","poltre","poltri","poltro","pomaio","pomari","pomata","pomate","pomati","pomato","pomeli","pomelo","pomere","pomeri","pomero","pometi","pometo","pomice","pomici","pomoli","pomolo","pomosa","pomose","pomosi","pomoso","pompai","pompar","pompon","poncho","poncif","poncio","pondai","pondar","ponera","ponere","ponete","poneva","ponevi","ponevo","ponghi","ponici","ponies","ponila","ponile","ponili","ponilo","ponimi","ponine","poniti","pontai","pontar","ponzai","ponzar","popola","popoli","popolo","popone","poponi","poppai","poppar","populi","porcai","porche","porcon","porger","porgli","porosa","porose","porosi","poroso","porrai","porrei","portai","portar","posaci","posala","posale","posali","posalo","posami","posane","posano","posare","posata","posate","posati","posato","posava","posavi","posavo","posche","poscia","posero","posino","posola","posole","pososa","posose","pososi","pososo","pospor","postai","postar","poster","potaci","potage","potala","potale","potali","potalo","potami","potane","potano","potare","potata","potate","potati","potato","potava","potavi","potavo","potere","poteri","potete","poteva","potevi","potevo","potino","potori","potrai","potrei","potuta","potute","potuti","potuto","povera","povere","poveri","povero","povese","povesi","powers","prandi","pransa","pranse","pransi","pranso","pranza","pranzi","pranzo","prasio","prasma","prasme","prasmi","prassi","pratia","pratie","pratii","pratio","praxis","preana","preane","preani","preano","preari","prechi","predai","predar","predio","predir","predon","pregai","pregar","preghe","preghi","pregia","pregio","pregna","pregne","pregni","pregno","prelia","prelio","premei","premer","premia","premio","prence","prenci","prenda","prende","prendi","prendo","prenze","prenzi","prepor","preppy","presai","presce","preset","pressa","presse","pressi","presso","presta","preste","presti","presto","pretta","prette","pretti","pretto","previa","previe","previi","previo","prezza","prezze","prezzi","prezzo","priami","priamo","priapi","priapo","prilla","prilli","prillo","primai","primer","primis","prince","prione","prioni","priono","priora","priore","priori","prisca","prisco","prisma","prismi","privai","privar","proava","proave","proavi","proavo","procoi","produr","proemi","proeva","proeve","proevi","proevo","profit","progne","progni","prompt","pronai","pronao","pronta","pronte","pronti","pronto","propor","propri","prosai","prosar","prosit","protei","proteo","protii","protio","provai","provar","prozia","prozie","prozii","prozio","prudei","pruder","prugna","prugne","prugni","prugno","pruina","pruine","prunai","pruovo","prurii","prurir","pseudo","psiche","psilla","psille","psilli","psochi","pubere","puberi","pubica","pubici","pubico","public","puccia","puccio","pudica","pudici","pudico","pudore","pudori","pueblo","puggia","puggio","pugile","pugili","puglia","puglie","pugnai","pugnar","pulche","pulcra","pulcre","pulcri","pulcro","pulegi","pulese","pulesi","pulica","puliga","pulire","pulita","pulite","puliti","pulito","puliva","pulivi","pulivo","pulone","puloni","pulque","pulsai","pulsar","pumini","pumino","puncio","punger","punghe","punica","punici","punico","punire","punita","punite","puniti","punito","puniva","punivi","punivo","puntai","puntar","puntel","pupale","pupali","pupari","puparo","pupona","pupone","puponi","puppai","puppar","puraci","purala","purale","purali","puralo","purami","purane","purano","purare","purata","purate","purati","purato","purava","puravi","puravo","purgai","purgar","purghe","purghi","purina","purine","purini","purino","pusher","pussai","pussar","puszta","putaci","putala","putale","putali","putalo","putami","putane","putano","putare","putata","putate","putati","putato","putava","putavi","putavo","putida","putide","putidi","putido","putino","putire","putita","putite","putiti","putito","putiva","putivi","putivo","putrii","putrir","putsch","putter","puzzai","puzzar","puzzle","puzzon","pylori","qenita","qenite","qeniti","quadra","quadre","quadri","quadro","quagga","quagli","quand'","quando","quant'","quanta","quante","quanti","quanto","quarks","quart'","quarta","quarte","quarti","quarto","quarzi","quarzo","quasar","quassi","quater","quatta","quatte","quatti","quatto","queens","quegli","quell'","quella","quelle","quelli","quello","querce","quesii","quesir","quest'","questa","queste","questi","questo","quetai","quetar","quiche","quidam","quieta","quiete","quieti","quieto","quinci","quindi","quint'","quinta","quinte","quinti","quinto","quitai","quitar","quitta","quitte","quitti","quitto","quokka","quorum","quotai","quotar","qwerty","qzerty","rabbia","rabbie","rabbio","rabbui","rabbuî","rabica","rabici","rabico","rabida","rabide","rabidi","rabido","rabona","rabone","rabula","rabule","rabuli","racani","racano","raccai","raccar","racchi","racemi","racemo","racers","racing","racket","radano","radere","radete","radeva","radevi","radevo","radiai","radiar","radica","radice","radici","radico","radila","radile","radili","radilo","radimi","radine","radino","raditi","radium","radome","radone","radoni","radono","radore","radori","radula","radule","radume","radumi","raduna","raduni","raduno","radura","radure","rafani","rafano","raffai","raffar","raffia","raffie","raffio","rafide","rafidi","ragade","ragadi","ragani","ragano","raggia","raggio","ragion","raglai","raglan","raglia","raglio","ragnai","ragnar","raguna","raguni","raguno","raiaci","raiala","raiale","raiali","raialo","raiami","raiamo","raiane","raiano","raiare","raiata","raiate","raiati","raiato","raiava","raiavi","raiavo","raider","raitai","raitar","raitri","raitro","ramaci","ramage","ramaia","ramaie","ramaio","ramala","ramale","ramali","ramalo","ramami","ramane","ramano","ramare","ramata","ramate","ramati","ramato","ramava","ramavi","ramavo","rambla","ramina","ramine","ramini","ramino","ramosa","ramose","ramosi","ramoso","rampai","rampar","ramuli","ramulo","ramuta","ramute","ramuti","ramuto","rancai","rancar","ranche","ranchi","rancho","rancia","rancio","random","ranfia","ranfie","ranfio","ranger","ranghi","ranide","ranidi","ranula","ranule","rapace","rapaci","rapaio","rapala","rapale","rapali","rapalo","rapami","rapane","rapano","rapare","rapata","rapate","rapati","rapato","rapava","rapavi","rapavo","rapida","rapide","rapidi","rapido","rapina","rapine","rapini","rapino","rapire","rapita","rapite","rapiti","rapito","rapiva","rapivi","rapivo","rapone","raponi","rapper","raptus","rasaci","rasala","rasale","rasali","rasalo","rasami","rasane","rasano","rasare","rasasi","rasata","rasate","rasati","rasato","rasava","rasavi","rasavo","raschi","rascia","raseci","rasele","rasemi","rasene","rasero","rasesi","raseti","rasevi","rasici","rasile","rasili","rasimi","rasine","rasino","rasisi","rasiti","rasivi","rasoci","rasoia","rasoio","rasole","rasoli","rasolo","rasomi","rasone","rasoni","rasosi","rasoti","rasovi","raspai","raspar","raspii","raspio","rastri","rastro","rasura","rasure","rateai","ratear","ratele","rateli","ratelo","ratese","ratesi","ratina","ratine","rating","ratini","ratino","ratite","ratiti","rattai","rattan","rattar","rattor","rauche","rauchi","raugea","raugee","raugei","raugeo","ravana","ravani","ravano","ravvia","ravvii","ravvio","razzai","razzar","razzia","razzie","razzii","razzio","reader","reagii","reagir","rebbia","rebbio","reboot","recaci","recala","recale","recali","recall","recalo","recami","recane","recano","recare","recata","recate","recati","recato","recava","recavi","recavo","receda","recede","recedi","recedo","recere","recete","receva","recevi","recevo","recici","recida","recide","recidi","recido","recila","recile","recili","recilo","recimi","recine","recipe","recisa","recise","recisi","reciso","recita","recite","reciti","recito","recono","record","recula","reculi","reculo","recusa","recuse","recusi","recuso","redaci","redala","redale","redali","redalo","redama","redami","redamo","redane","redano","redare","redari","redata","redate","redati","redato","redava","redavi","redavo","rediga","redige","redigi","redigo","redima","redime","redimi","redimo","redine","redini","redino","redire","redita","redite","rediti","redito","rediva","redivi","redivo","redola","redole","redova","redove","reduce","reduci","refici","refila","refili","refill","refilo","reflex","reflua","reflue","reflui","refluo","refoli","refolo","refusi","refuso","refuta","refuti","refuto","regala","regale","regali","regalo","regami","regamo","regata","regate","regati","regato","reggae","regger","reggia","regima","regime","regimi","regimo","regina","regine","regini","regino","regnai","regnar","regola","regole","regoli","regolo","relais","relata","relate","relati","relato","relega","relego","remaci","remaio","remake","remale","remami","remane","remano","remare","remata","remate","remati","remato","remava","remavi","remavo","remica","remici","remico","remiga","remigi","remigo","remino","remise","remixa","remixi","remixo","remoli","remolo","remora","remore","remota","remote","remoti","remoto","renaci","renaio","renala","renale","renali","renalo","renami","renana","renane","renani","renano","renard","renare","renata","renate","renati","renato","renava","renavi","renavo","render","renica","renici","renico","renina","renine","renino","renosa","renose","renosi","renoso","renova","renovi","renovo","rental","repano","repere","repete","repeva","repevi","repevo","repici","repila","repile","repili","repilo","repimi","repine","repiti","replay","repono","report","repudi","reputa","reputi","reputo","requia","requie","requio","resaci","resala","resale","resami","resane","resasi","resati","resavi","resche","rescue","reseca","reseci","reseco","reseda","resede","resedi","resele","resemi","resene","resero","resesi","reseti","resevi","resici","resile","resili","resimi","resina","resine","resini","resino","resisi","resite","resiti","resivi","resoci","resole","resoli","resolo","resomi","resone","resort","resosi","resoti","resovi","restai","restar","restia","restie","restii","restio","retaci","retail","retala","retale","retali","retalo","retami","retane","retano","retard","retare","retata","retate","retati","retato","retava","retavi","retavo","retica","retici","retico","retina","retine","retini","retino","retore","retori","retrae","retrai","retrar","rettai","rettar","rettor","retusa","retuse","retusi","retuso","reucci","revers","review","revoca","revoco","rewind","riabbi","rialti","rialto","rialza","rialzi","rialzo","riamai","riamar","rianno","riapra","riapre","riapri","riapro","riarai","riarar","riarda","riarde","riardi","riardo","riarma","riarmi","riarmo","riarsa","riarse","riarsi","riarso","riatta","riatti","riatto","riaver","riavvi","ribaci","ribeca","ribere","ribeva","ribeve","ribevi","ribevo","ribosi","ribuca","ribuco","ricada","ricade","ricadi","ricado","ricala","ricali","ricalo","ricama","ricami","ricamo","ricava","ricavi","ricavo","ricche","ricchi","riccia","riccio","riccon","riceda","ricede","ricedi","ricedo","ricena","riceni","riceno","riceva","riceve","ricevi","ricevo","ricima","ricimi","ricimo","ricina","ricine","ricini","ricino","ricola","ricoli","ricolo","riconi","ricopi","ricova","ricovi","ricovo","ricrea","ricrei","ricreo","rictus","ricuce","ricuci","ricusa","ricuse","ricusi","ricuso","ridano","ridare","ridata","ridate","ridati","ridato","ridava","ridavi","ridavo","riddai","riddar","rideau","ridere","riders","ridete","rideva","ridevi","ridevo","ridica","ridice","ridici","ridico","ridila","ridile","ridili","ridilo","ridimi","ridine","riding","ridire","ridite","riditi","ridoma","ridomi","ridomo","ridona","ridoni","ridono","ridora","ridori","ridoro","ridota","ridoti","ridoto","riduca","riduce","riduci","riduco","riebbe","riebbi","riecco","rieder","riempi","rienfi","rienfî","rierga","rierge","riergi","riergo","rierse","riersi","rierta","rierte","rierti","rierto","riesca","riesce","riesci","riesco","riezza","riezze","rifare","rifasa","rifasi","rifaso","rifate","rifece","rifeci","rifida","rifidi","rifido","rifila","rifili","rifilo","rifina","rifini","rifino","rifoli","rifolo","rifora","rifori","riforo","rifugi","rifuma","rifumi","rifumo","rifusa","rifuse","rifusi","rifuso","rigaci","rigala","rigale","rigali","rigalo","rigame","rigami","rigamo","rigane","rigano","rigare","rigata","rigate","rigati","rigato","rigava","rigavi","rigavo","rigela","rigeli","rigelo","rigema","rigeme","rigemi","rigemo","riggia","rigida","rigide","rigidi","rigido","rigira","rigiri","rigiro","rignai","rignar","rigoda","rigode","rigodi","rigodo","rigola","rigole","rigoli","rigolo","rigone","rigoni","rigore","rigori","rigosa","rigose","rigosi","rigoso","rilava","rilavi","rilavo","rilega","rilego","rileva","rilevi","rilevo","rilima","rilimi","rilimo","riloca","riloco","riloda","rilodi","rilodo","riloga","riluca","riluce","riluci","rimaci","rimala","rimale","rimali","rimalo","rimami","rimane","rimani","rimano","rimare","rimari","rimasa","rimase","rimasi","rimata","rimate","rimati","rimato","rimava","rimavi","rimavo","rimedi","rimema","rimemi","rimena","rimeni","rimeno","rimica","rimici","rimico","rimina","rimini","rimino","rimira","rimiri","rimiro","rimise","rimisi","rimixa","rimixi","rimixo","rimmel","rimosa","rimose","rimosi","rimoso","rimpor","rimula","rimule","rimura","rimuri","rimuro","rimuta","rimuti","rimuto","rinata","rinate","rinati","rinato","rinega","rinego","rinese","rinesi","ringhi","ringoi","rinica","rinici","rinico","rinite","riniti","rinoma","rinomi","rinomo","rinota","rinoti","rinoto","rinvia","rinvii","rinvio","riocai","riocar","riochi","riopta","riopti","riopto","riorla","riorli","riorlo","riorna","riorni","riorno","riotta","riotte","riotti","riotto","ripaga","ripago","ripara","ripari","riparo","ripela","ripeli","ripelo","ripesa","ripesi","ripeso","ripeta","ripete","ripeti","ripeto","ripida","ripide","ripidi","ripido","ripigi","ripila","ripili","ripilo","ripire","ripita","ripite","ripiti","ripito","ripiva","ripivi","ripivo","ripone","riponi","ripore","riposa","ripose","riposi","riposo","ripota","ripoti","ripoto","ripper","ripudi","ripuoi","riputa","riputi","riputo","riresa","rirese","riresi","rireso","ririda","riride","riridi","rirido","ririsa","ririse","ririsi","ririso","risaci","risaia","risaie","risala","risale","risali","risalo","risami","risana","risane","risani","risano","risasi","risata","risate","risati","risavi","risazi","rischi","riseca","riseci","riseco","risega","risego","risele","risemi","risene","risero","risesi","riseti","risevi","risica","risici","risico","risiko","risile","risili","risimi","risina","risine","risini","risino","risisi","risiti","risiva","risive","risivi","risivo","risoci","risoda","risodi","risodo","risola","risole","risoli","risolo","risomi","risona","risone","risoni","risono","risosi","risoti","risovi","rispia","rispio","rissai","rissar","rissoa","rissoe","rista'","ristai","ristar","ristia","risuda","risudi","risudo","risvia","risvii","risvio","ritace","ritaci","ritani","ritano","ritara","ritari","ritaro","ritema","riteme","ritemi","ritemo","ritesa","ritese","ritesi","riteso","ritina","ritine","ritira","ritiri","ritiro","ritmai","ritmar","ritone","ritoni","ritosa","ritosi","ritoso","ritrae","ritrai","ritrar","rituba","ritubi","ritubo","ritura","rituri","rituro","riudii","riudir","riunga","riunge","riungi","riungo","riunii","riunir","riunse","riunsi","riunta","riunte","riunti","riunto","riurla","riurli","riurlo","riurta","riurti","riurto","riusai","riusar","rivada","rivado","rivale","rivali","rivani","rivano","rivari","riveda","rivede","rivedi","rivedo","rivela","riveli","rivelo","rivide","rividi","rivien","rivira","riviri","riviro","riviva","rivive","rivivi","rivivo","rivoca","rivoco","rivoga","rivogo","rivola","rivoli","rivolo","rivota","rivoti","rivoto","rivuoi","rizena","rizene","rizidi","rizina","rizine","rizobi","rizoma","rizomi","rizzai","rizzar","robbia","robbie","robbio","robini","robino","robone","roboni","robora","robori","roboro","rocche","rocchi","roccia","rocker","rocket","rodaci","rodala","rodale","rodali","rodalo","rodami","rodane","rodani","rodano","rodare","rodata","rodate","rodati","rodato","rodava","rodavi","rodavo","rodere","rodese","rodesi","rodete","rodeva","rodevi","rodevo","rodiai","rodiar","rodica","rodici","rodico","rodila","rodile","rodili","rodilo","rodimi","rodine","rodino","rodite","roditi","rodono","roffia","roffie","rogaci","rogala","rogale","rogali","rogalo","rogami","rogane","rogano","rogare","rogata","rogate","rogati","rogato","rogava","rogavi","rogavo","roggia","roggio","rogita","rogiti","rogito","rognai","rognar","roiese","roiesi","rolese","rolesi","rolini","rolino","rollai","rollar","roller","rollii","rollio","romana","romane","romani","romano","rombai","rombar","romena","romene","romeni","romeno","romice","romici","romita","romite","romiti","romito","romper","roncai","roncar","ronche","ronchi","rondai","rondar","rondes","ronfai","ronfar","ronfia","ronfio","ronzai","ronzar","ronzii","ronzio","ropali","roraci","rorala","rorale","rorali","roralo","rorami","rorane","rorano","rorare","rorata","rorate","rorati","rorato","rorava","roravi","roravo","rorese","roresi","rorida","roride","roridi","rorido","rorino","rosaci","rosaio","rosala","rosale","rosali","rosami","rosane","rosari","rosasi","rosata","rosate","rosati","rosato","rosavi","rosbif","roseci","rosele","rosemi","rosene","rosero","rosese","rosesi","roseti","roseto","rosevi","rosica","rosici","rosico","rosile","rosili","rosimi","rosina","rosine","rosini","rosino","rosisi","rositi","rosivi","rosoci","rosola","rosole","rosoli","rosolo","rosomi","rosone","rosoni","rososi","rosoti","rosovi","rostii","rostir","rostri","rostro","rosume","rosumi","rosura","rosure","rotaci","rotaia","rotaie","rotala","rotale","rotali","rotalo","rotami","rotano","rotare","rotary","rotata","rotate","rotati","rotato","rotava","rotavi","rotavo","roteai","rotear","rotese","rotesi","rotini","rotino","rotola","rotoli","rotolo","rotone","rotoni","rotore","rotori","rotula","rotule","rouges","rounds","router","rovaio","rovana","rovane","rovani","rovano","rovere","roveri","roveti","roveto","rovina","rovine","rovini","rovino","rovosa","rovose","rovosi","rovoso","rubaci","rubala","rubale","rubali","rubalo","rubami","rubane","rubano","rubare","rubata","rubate","rubati","rubato","rubava","rubavi","rubavo","rubber","rubbio","rubidi","rubina","rubine","rubini","rubino","rubona","rubone","ruboni","rucola","rucole","rudere","ruderi","rudero","rudese","rudesi","rudite","ruditi","rufiya","rufola","rufole","rufoli","rufolo","rugaci","rugala","rugale","rugali","rugalo","rugami","rugane","rugano","rugare","rugata","rugate","rugati","rugato","rugava","rugavi","rugavo","rugghi","ruggii","ruggir","ruglia","ruglio","rugosa","rugose","rugosi","rugoso","ruguma","rugumi","rugumo","ruinai","ruinar","rullai","rullar","rullii","rullio","rumaci","rumala","rumale","rumali","rumalo","rumami","rumane","rumano","rumare","rumata","rumate","rumati","rumato","rumava","rumavi","rumavo","rumble","rumena","rumene","rumeni","rumeno","rumiga","rumigo","rumina","rumine","rumini","rumino","rumore","rumori","rumour","runica","runici","runico","ruotai","ruotar","rupina","rupine","rupini","rupino","ruppia","ruppie","rurale","rurali","rusche","ruschi","rushes","ruspai","ruspar","russai","russar","rutale","rutali","rutata","rutate","rutati","rutato","rutena","rutene","ruteni","ruteno","rutese","rutesi","rutica","rutico","rutila","rutile","rutili","rutilo","rutina","rutine","ruttai","ruttar","rutula","rutule","rutuli","rutulo","ruvese","ruvesi","ruvida","ruvide","ruvidi","ruvido","ruzzai","ruzzar","rōmaji","sabati","sabato","sabbia","sabbie","sabbio","sabina","sabine","sabini","sabino","sabota","saboti","saboto","sacche","sacchi","sacher","sacrai","sacrar","sadica","sadici","sadico","saetta","saette","saetti","saetto","safari","safena","safene","safeni","safeno","sagace","sagaci","sagari","sagena","sagene","saggia","saggie","saggio","sagina","sagini","sagino","sagire","sagita","sagite","sagiti","sagito","sagiva","sagivi","sagivo","saglia","saglie","sagnai","sagnar","sagola","sagole","sagoma","sagome","sagomi","sagomo","sagrai","sagrar","saighe","sailer","sailor","saione","saioni","salace","salaci","salaia","salaie","salala","salale","salali","salalo","salama","salame","salami","salane","salano","salare","salari","salata","salate","salati","salato","salava","salavi","salavo","saldai","saldar","salese","salesi","salica","salice","salici","salico","salila","salile","salili","salilo","salimi","salina","saline","salini","salino","salire","salita","salite","saliti","salito","saliva","salive","salivi","salivo","saloli","salolo","salone","saloni","saloon","salpai","salpar","saltai","saltar","salume","salumi","saluta","salute","saluti","saluto","salvai","salvar","salvia","salvie","samara","samare","samese","samesi","sampan","sample","sanaci","sanala","sanale","sanali","sanalo","sanami","sanane","sanano","sanare","sanata","sanate","sanati","sanato","sanava","sanavi","sanavo","sancii","sancir","sancta","sandhi","sandra","sandre","sanese","sanesi","sangue","sangui","sanica","sanico","sanino","sanita","saniti","sanito","santon","sapere","saperi","sapete","sapeva","sapevi","sapevo","sapida","sapide","sapidi","sapido","sapini","sapino","sapona","sapone","saponi","sapono","sapora","sapore","sapori","saporo","sapota","sapote","sappia","saprai","saprei","saputa","sapute","saputi","saputo","sarago","sarchi","saremo","sarete","sarghi","sargia","sariga","sarong","sartia","sartie","sartio","sassea","sassee","sassei","sasseo","satana","satina","satini","satino","satira","satire","satiri","satiro","sativa","sative","sativi","sativo","satura","sature","saturi","saturo","savana","savane","savari","savers","savese","savesi","savoia","saziai","saziar","sazino","sbadii","sbadir","sbafai","sbafar","sbaffa","sbaffi","sbaffo","sbafon","sbagli","sballa","sballi","sballo","sbalza","sbalzi","sbalzo","sbanca","sbanco","sbanda","sbandi","sbando","sbarba","sbarbi","sbarbo","sbarca","sbarco","sbarda","sbardi","sbardo","sbarra","sbarre","sbarri","sbarro","sbasii","sbasir","sbassa","sbassi","sbasso","sbatta","sbatte","sbatti","sbatto","sbaula","sbauli","sbaulo","sbavai","sbavar","sbavon","sbecca","sbecco","sbeffa","sbeffi","sbeffo","sbenda","sbendi","sbendo","sberci","sberla","sberle","sberna","sberni","sberno","sberta","sberti","sberto","sbieca","sbieco","sbirba","sbirbi","sbirbo","sbirci","sbirra","sbirre","sbirri","sbirro","sbitta","sbitti","sbitto","sblusa","sblusi","sbluso","sbobba","sbobbe","sbocca","sbocci","sbocco","sboffi","sboffo","sbolgi","sbolla","sbolle","sbolli","sbollo","sborda","sbordi","sbordo","sborni","sborra","sborre","sborri","sborro","sborsa","sborsi","sborso","sbosca","sbosco","sbotta","sbotti","sbotto","sbozza","sbozzi","sbozzo","sbraca","sbraci","sbraco","sbraga","sbrago","sbrama","sbrami","sbramo","sbrana","sbrani","sbrano","sbrego","sbrici","sbriga","sbrigo","sbrina","sbrini","sbrino","sbrinz","sbroda","sbrodi","sbrodo","sbruca","sbruco","sbucai","sbucar","sbucci","sbuchi","sbuffa","sbuffi","sbuffo","sburra","sburri","sburro","sbuzza","sbuzzi","sbuzzo","scabra","scabre","scabri","scabro","scacci","scacco","scadde","scaddi","scader","scafai","scafar","scaffa","scaffi","scaffo","scagge","scagli","scagna","scagni","scagno","scalai","scalar","scalca","scalci","scalco","scalda","scaldi","scaldo","scalea","scalee","scalei","scaleo","scalfa","scalfi","scalfo","scalmi","scalmo","scalpa","scalpi","scalpo","scalva","scalvi","scalvo","scalza","scalze","scalzi","scalzo","scambi","scampa","scampi","scampo","scanna","scanni","scanno","scansa","scansi","scanso","scanta","scanti","scanto","scapai","scapar","scappa","scappi","scappo","scarda","scardi","scardo","scarna","scarne","scarni","scarno","scarpa","scarpe","scarpi","scarpo","scarsa","scarse","scarsi","scarso","scarta","scarti","scarto","scasai","scasar","scassa","scasse","scassi","scasso","scatta","scatti","scatto","scavai","scavar","scazza","scazzi","scazzo","scegli","scelga","scelgo","scelse","scelsi","scelta","scelte","scelti","scelto","scemai","scemar","scempi","scenda","scende","scendi","scendo","scepsi","scerba","scerbi","scerbo","scerna","scerne","scerni","scerno","scerpa","scerpi","scerpo","scerse","scersi","scevra","scevre","scevri","scevro","scheda","schede","schedi","schedo","schema","schemi","schifa","schife","schifi","schifo","schini","schino","schisa","schise","schisi","schiso","schiva","schive","schivi","schivo","schizo","school","sciaci","sciala","sciale","sciali","scialo","sciama","sciame","sciami","sciamo","sciane","sciano","sciapa","sciape","sciapi","sciapo","sciara","sciare","sciata","sciate","sciati","sciato","sciava","sciavi","sciavo","scifta","scifti","scifto","sciino","sciita","sciite","sciiti","scilla","scille","scinco","scinda","scinde","scindi","scindo","scinga","scinge","scingi","scingo","scinse","scinsi","scinta","scinte","scinti","scinto","sciola","sciole","scioli","sciolo","sciora","sciori","scioro","scipai","scipar","scippa","scippi","scippo","scirpi","scirpo","scirri","scirro","scisma","scismi","scissa","scisse","scissi","scisso","scisti","scisto","sciuga","sciugo","sciupa","sciupi","sciupo","sciura","sciure","sciuri","sciuro","sclama","sclami","sclamo","sclera","sclere","scleri","sclero","scocca","scocci","scocco","scodai","scodar","scogli","scoiai","scoiar","scoino","scolai","scolar","scolii","scolio","scolla","scolli","scollo","scolma","scolmi","scolmo","scolpa","scolpi","scolpo","scolta","scolte","scomma","scommi","sconca","sconce","sconci","sconco","sconta","sconti","sconto","scoops","scopai","scopar","scopia","scopie","scoppi","scopra","scopre","scopri","scopro","scorai","scorar","scorce","scorci","scorda","scordi","scordo","scores","scorga","scorge","scorgi","scorgo","scoria","scorie","scorna","scorni","scorno","scorpi","scorra","scorre","scorri","scorro","scorsa","scorse","scorsi","scorso","scorta","scorte","scorti","scorto","scorza","scorze","scorzi","scorzo","scosci","scossa","scosse","scossi","scosso","scosta","scosti","scosto","scotch","scoter","scotii","scotio","scotta","scotte","scotti","scotto","scouts","scovai","scovar","scozia","scozie","scozza","scozzi","scozzo","screen","screma","scremi","scremo","screzi","scriba","scribi","scrima","scrime","scrina","scrini","scrino","script","scriva","scrive","scrivi","scrivo","scroci","scrofa","scrofe","scroll","scroti","scroto","scruta","scruti","scruto","scucia","scucii","scucio","scucir","scudai","scudar","scuffi","sculta","sculte","sculti","sculto","scuoce","scuoci","scuoia","scuoio","scuola","scuole","scuota","scuote","scuoti","scuoto","scurai","scurar","scurii","scurir","scusai","scusar","scussa","scusse","scussi","scusso","scuter","sdacci","sdagli","sdalla","sdalle","sdalli","sdallo","sdamai","sdamar","sdammi","sdando","sdanne","sdanno","sdante","sdanti","sdarai","sdarci","sdarei","sdarla","sdarle","sdarli","sdarlo","sdarmi","sdarne","sdarsi","sdarti","sdarvi","sdatti","sdazia","sdazio","sdegna","sdegni","sdegno","sdemmo","sdenta","sdenti","sdento","sdesse","sdessi","sdeste","sdesti","sdetta","sdette","sdetti","sdetto","sdiamo","sdiano","sdiate","sdicci","sdiede","sdiedi","sdigli","sdilla","sdille","sdilli","sdillo","sdimmi","sdinne","sdirai","sdirci","sdirei","sdirla","sdirle","sdirli","sdirlo","sdirmi","sdirne","sdirsi","sdirti","sdirvi","sdisse","sdissi","sditti","sdogai","sdogar","sdoghi","sdogli","sdoler","sdolga","sdolgo","sdolse","sdolsi","sdonna","sdonni","sdonno","sdoppi","sdorai","sdorar","sdossa","sdossi","sdosso","sdraia","sdraie","sdraio","sdroga","sdrogo","sdruci","sducai","sducar","sduchi","sduole","sduoli","sdurii","sdurir","sdutta","sdutte","sdutti","sdutto","season","sebben","secaci","secala","secale","secali","secalo","secami","secane","secano","secare","secata","secate","secati","secato","secava","secavi","secavo","seccai","seccar","secche","secchi","seccia","secoli","secolo","second","secret","secura","secure","securi","securo","sedaci","sedala","sedale","sedali","sedalo","sedami","sedane","sedani","sedano","sedare","sedata","sedate","sedati","sedato","sedava","sedavi","sedavo","sedere","sederi","sedete","sedeva","sedevi","sedevo","sedici","sedile","sedili","sedime","sedimi","sedino","seduca","seduce","seduci","seduco","sedula","sedule","seduli","sedulo","sedure","seduta","sedute","seduti","seduto","seenne","seenni","segaci","segala","segale","segali","segalo","segami","segane","segano","segare","segata","segate","segati","segato","segava","segavi","segavo","seggio","segnai","segnar","segoli","segolo","segona","segone","segoni","segosa","segose","segosi","segoso","segugi","seguii","seguir","seitan","seiuga","sekani","selace","selaci","selcia","selcio","selfai","selfar","selfie","sellai","sellar","seller","selone","seloni","semaia","semaie","semaio","semang","semata","semate","sembra","sembri","sembro","semema","sememi","semica","semici","semico","semina","semine","semini","semino","semita","semite","semiti","semmai","semola","semole","sempre","semuta","semute","semuti","semuto","senale","senali","senapa","senape","senapi","senari","senati","senato","seneci","senese","senesi","senhal","senile","senili","senior","senona","senone","senoni","sentai","sentar","sentii","sentir","senufa","senufe","senufi","senufo","sepali","sepalo","separa","separi","separo","sepide","sepidi","sepion","seppia","seppie","seppio","seppur","sequel","serafi","serafo","serale","serali","serata","serate","serbai","serbar","serena","serene","sereni","sereno","seriai","serial","seriar","serica","serici","serico","serina","serine","serino","serpai","serpei","serper","serqua","serque","serrai","serrar","servai","servar","server","servii","servir","sesami","sesamo","sesini","sesino","sessai","sessar","sestai","sestar","setale","setali","setata","setate","setati","setato","setina","setine","setini","setino","setola","setole","setoli","setolo","setone","setoni","setosa","setose","setosi","setoso","settai","settar","setter","seuese","seuesi","severa","severe","severi","severo","sevizi","sezzai","sfacci","sfagli","sfagni","sfagno","sfalci","sfalda","sfalde","sfaldi","sfaldo","sfalla","sfalle","sfalli","sfallo","sfalsa","sfalsi","sfalso","sfamai","sfamar","sfammi","sfanga","sfango","sfanne","sfanno","sfarai","sfarci","sfarei","sfarla","sfarle","sfarli","sfarlo","sfarmi","sfarne","sfarsi","sfarti","sfarvi","sfarzi","sfarzo","sfasai","sfasar","sfasci","sfatai","sfatar","sfatta","sfatte","sfatti","sfatto","sfenda","sfende","sfendi","sfendo","sferii","sferir","sferra","sferri","sferro","sferza","sferze","sferzi","sferzo","sfessa","sfesse","sfessi","sfesso","sfiata","sfiati","sfiato","sfibbi","sfibra","sfibri","sfibro","sficca","sficco","sfidai","sfidar","sfighe","sfilai","sfilar","sfilza","sfilze","sfilzi","sfilzo","sfinai","sfinar","sfinge","sfingi","sfinii","sfinir","sfiora","sfiori","sfioro","sfissa","sfissi","sfisso","sfitta","sfitte","sfitti","sfitto","sfizio","sfocai","sfocar","sfochi","sfocia","sfocio","sfogai","sfogar","sfoggi","sfoghi","sfogli","sfogna","sfogni","sfogno","sfolla","sfolli","sfollo","sfolta","sfolte","sfolti","sfolto","sfonda","sfondi","sfondo","sforai","sforar","sforma","sformi","sformo","sforna","sforni","sforno","sforza","sforzi","sforzo","sfossa","sfossi","sfosso","sfotta","sfotte","sfotti","sfotto","sfrana","sfrani","sfrano","sfrata","sfrati","sfrato","sfrega","sfregi","sfrego","sfrena","sfreni","sfreno","sfridi","sfrido","sfrisa","sfrisi","sfriso","sfugga","sfugge","sfuggi","sfuggo","sfumai","sfumar","sfuoca","sfuoco","sfuria","sfurio","sgabbi","sgabei","sgabeo","sgalla","sgalli","sgallo","sgamai","sgamar","sgamba","sgambi","sgambo","sganci","sganna","sganni","sganno","sgarai","sgarar","sgarbi","sgarbo","sgargi","sgarra","sgarri","sgarro","sgarza","sgarze","sgarzi","sgarzo","sgasai","sgasar","sgassa","sgassi","sgasso","sgelai","sgelar","sgessa","sgessi","sgesso","sghiai","sgobba","sgobbi","sgobbo","sgocci","sgolai","sgolar","sgomma","sgommi","sgommo","sgonfi","sgorbi","sgorga","sgorgo","sgotta","sgotti","sgotto","sgozza","sgozzi","sgozzo","sgrana","sgrani","sgrano","sgrata","sgrati","sgrato","sgrava","sgravi","sgravo","sgrida","sgridi","sgrido","sgruma","sgrumi","sgrumo","sgurai","sgurar","sgusci","sgusta","sgusti","sgusto","shahid","shaker","shalom","sharai","sharar","sharia","shasta","shatzu","shaykh","sheikh","sheqel","sherpa","sherry","shifta","shifti","shifto","shimmy","shocks","shogun","shorts","shunta","shunti","shunto","shunts","sialia","sialie","sibila","sibili","sibilo","sicana","sicane","sicani","sicano","sicari","siconi","sicosi","sicula","sicule","siculi","siculo","sicura","sicure","sicuri","sicuro","sidama","sidame","sidami","sidamo","siepai","siepar","sierra","sierre","siesta","sieste","sifnia","sifnie","sifnii","sifnio","sifona","sifone","sifoni","sifono","sigani","sigano","sigari","sigaro","siglai","siglar","signor","siigli","silana","silane","silani","silano","silema","silemi","silene","sileni","sileno","silfio","silice","silici","silite","siliti","silura","siluri","siluro","silver","silvia","silvie","silvio","simica","simici","simico","simide","simidi","simile","simili","simula","simuli","simulo","sincro","sinese","sinesi","single","singol","sinica","sinici","sinico","sinide","sinidi","sinodi","sinodo","sinoli","sinolo","sinora","sipari","sirena","sirene","sireni","sirese","siresi","sirice","sirici","sirima","sirime","sisari","sisaro","siseri","sisero","sistri","sistro","sitaci","sitala","sitale","sitali","sitalo","sitami","sitane","sitano","sitare","sitata","sitate","sitati","sitato","sitava","sitavi","sitavo","sitcom","sitino","sitire","sitita","sitite","sititi","sitito","sitiva","sitivi","sitivo","sitone","sitoni","sitter","situai","situar","situla","situle","skater","skeita","skeiti","skeito","sketch","skibus","skilla","skilli","skillo","skinny","skippa","skippi","skippo","skunks","skylab","skypai","skypar","slacci","slalom","slamai","slamar","slanci","slarga","slargo","slatta","slatti","slatto","sleale","sleali","slegai","slegar","sleghi","slemba","slembi","slembo","slenta","slenti","slento","sleppa","sleppe","slider","slitta","slitte","slitti","slitto","slogai","slogan","slogar","sloggi","sloghi","slomba","slombi","slombo","sloops","slumai","slumar","slunga","slungo","smacca","smacco","smagai","smagar","smaghi","smagio","smagli","smagra","smagri","smagro","smalla","smalli","smallo","smalta","smalti","smalto","smamma","smammi","smammo","smangi","smania","smanie","smanio","smanta","smanti","smanto","smarca","smarco","smarra","smarri","smarro","smassa","smassi","smasso","smazza","smazzi","smazzo","smegma","smegmi","smelai","smelar","smerai","smerar","smerci","smerda","smerdi","smerdo","smergo","smerla","smerli","smerlo","smessa","smesse","smessi","smesso","smetta","smette","smetti","smetto","smezza","smezzi","smezzo","smicci","smiela","smieli","smielo","smiles","smiley","smilza","smilze","smilzi","smilzo","sminai","sminar","smirai","smirar","smista","smisti","smisto","smocci","smodai","smodar","smoggi","smogli","smolla","smolli","smollo","smonta","smonti","smonto","smorba","smorbi","smorbo","smorii","smorir","smorsa","smorsi","smorso","smorta","smorte","smorti","smorto","smorza","smorzi","smorzo","smosci","smossa","smosse","smossi","smosso","smosta","smosti","smosto","smotta","smotte","smotti","smotto","smover","smozza","smozzi","smozzo","smucci","smunga","smunge","smungi","smungo","smunse","smunsi","smunta","smunte","smunti","smunto","smuoia","smuoio","smuore","smuori","smuova","smuove","smuovi","smuovo","smurai","smurar","smusai","smusar","smussa","smusse","smussi","smusso","snasai","snasar","snebbi","snella","snelle","snelli","snello","snerva","snervi","snervo","snevai","snevar","snidai","snidar","sniffa","sniffi","sniffo","snipes","snobba","snobbi","snobbo","snodai","snodar","snooze","snudai","snudar","sobole","soboli","sobria","sobrie","sobrio","soccer","socchi","soccio","social","sodaci","sodala","sodale","sodali","sodalo","sodami","sodane","sodano","sodare","sodata","sodate","sodati","sodato","sodava","sodavi","sodavo","soddur","sodica","sodici","sodico","sodino","soduca","soduce","soduci","soduco","sodure","soffia","soffio","soffra","soffre","soffri","soffro","sofora","sofore","soglia","soglie","soglio","sognai","sognar","sokora","sokore","sokori","sokoro","solaci","solaio","solala","solale","solali","solalo","solami","solane","solani","solano","solare","solari","solata","solate","solati","solato","solava","solavi","solavo","solcai","solcar","solchi","soldai","soldar","soleil","solere","solete","soleva","solevi","solevo","solfai","solfar","solghi","solida","solide","solidi","solido","solima","solimi","solimo","soling","solini","solino","solita","solite","soliti","solito","soliva","solive","solivi","solivo","solone","soloni","soluta","solute","soluti","soluto","solvei","solver","somala","somale","somali","somalo","somara","somare","somari","somaro","somite","somiti","sommai","sommar","somnia","somnio","sonaci","sonala","sonale","sonali","sonalo","sonami","sonane","sonano","sonare","sonata","sonate","sonati","sonato","sonava","sonavi","sonavo","sonchi","sondai","sondar","sonica","sonici","sonico","sonino","soniti","sonito","sonora","sonore","sonori","sonoro","sopire","sopita","sopite","sopiti","sopito","sopiva","sopivi","sopivo","sopore","sopori","soppor","soraba","sorabe","sorabi","sorabo","soraci","sorala","sorale","sorali","soralo","sorami","sorane","sorani","sorano","sorare","sorata","sorate","sorati","sorato","sorava","soravi","soravo","sorbai","sorbar","sorbii","sorbir","sorche","sorcio","sorese","soresi","sorger","sorghi","sorino","sorite","soriti","sorore","sorori","sorosi","sorsai","sorsar","sortii","sortir","sostai","sostar","sottai","sottar","source","soviet","sozzai","sozzar","sozzon","spacca","spacci","spacco","spadai","spaesa","spaesi","spaeso","spaghi","spagli","spagna","spagne","spaiai","spaiar","spaino","spalai","spalar","spalca","spalco","spalla","spalle","spalli","spallo","spalma","spalmi","spalmo","spalti","spalto","spamma","spammi","spammo","spanai","spanar","spanci","spanda","spande","spandi","spando","spania","spanio","spanna","spanne","spanni","spanno","spansa","spanse","spansi","spanso","spanta","spante","spanti","spanto","sparai","sparar","sparga","sparge","spargi","spargo","sparii","sparir","sparla","sparli","sparlo","sparsa","sparse","sparsi","sparso","sparta","sparte","sparti","sparto","spasma","spasmi","spasmo","spassa","spassi","spasso","spasta","spasti","spasto","spatri","spaura","spauri","spauro","spazia","spazio","spazza","spazzi","spazzo","spechi","specie","spedai","spedar","spedii","spedir","speech","spegli","spegna","spegne","spegni","spegno","spelai","spelar","spelda","spelde","spelea","spelee","spelei","speleo","spella","spelli","spello","spelta","spelte","spenda","spende","spendi","spendo","spenga","spenge","spengi","spengo","spenna","spenni","spenno","spensa","spense","spensi","spenso","spenta","spente","spenti","spento","speoti","speoto","sperai","sperar","sperda","sperde","sperdi","sperdo","sperma","spermi","spersa","sperse","spersi","sperso","spesai","spesar","spessa","spesse","spessi","spesso","spetra","spetri","spetro","spetta","spetti","spetto","spezia","spezie","spezio","spezza","spezzi","spezzo","spiace","spiaci","spiala","spiale","spiali","spialo","spiami","spiamo","spiana","spiane","spiani","spiano","spiare","spiata","spiate","spiati","spiato","spiava","spiavi","spiavo","spicca","spicce","spicci","spicco","spicea","spicee","spicei","spiceo","spiche","spider","spiedi","spiedo","spiega","spiego","spigai","spigar","spighe","spighi","spigli","spiino","spilla","spille","spilli","spillo","spinai","spinar","spinga","spinge","spingi","spingo","spinse","spinsi","spinta","spinte","spinti","spinto","spiona","spione","spioni","spiono","spiova","spiove","spiovi","spiovo","spirai","spirar","spirea","spiree","spirti","spirto","spiuma","spiumi","spiumo","spizza","spizzi","spizzo","splash","spleen","splene","spleni","spoeta","spoeti","spoeto","spogli","spoils","spolpa","spolpe","spolpi","spolpo","spompa","spompi","spompo","sponda","sponde","sponga","spongo","sponte","spoppa","spoppi","spoppo","sporca","sporci","sporco","sporga","sporge","sporgi","sporgo","sporla","sporle","sporli","sporlo","spormi","sporne","sporre","sporse","sporsi","sporta","sporte","sporti","sporto","sporvi","sposai","sposar","spossa","spossi","sposso","sposta","sposte","sposti","sposto","sprays","spread","spreca","spreco","spregi","sprema","spreme","spremi","spremo","spresa","spresi","spreso","spreta","spreti","spreto","spring","sprint","spritz","sprona","sprone","sproni","sprono","sprova","sprovi","sprovo","spruna","spruni","spruno","spugna","spugne","spugni","spugno","spulai","spular","spulci","spumai","spumar","spumea","spumee","spumei","spumeo","spunta","spunte","spunti","spunto","spurai","spurar","spurga","spurgo","spuria","spurie","spurio","sputai","sputar","spuzza","spuzze","spuzzi","spuzzo","spycam","squali","squalo","squama","squame","squami","squamo","squash","squaws","squeri","squero","sranan","stabbi","stabia","stacca","stacci","stacco","stadia","stadie","stadio","staffa","staffe","staffi","staffo","stages","staggi","stagli","stagna","stagne","stagni","stagno","stalla","stalle","stalli","stallo","stammi","stamni","stamno","stampa","stampe","stampi","stampo","stanai","stanar","stanca","stanco","stando","stands","stanga","stango","stanne","stanno","stante","stanti","stanza","stanze","stanzi","stappa","stappi","stappo","starai","starar","starci","starei","starla","starle","starli","starlo","starmi","starna","starne","starni","starno","starsi","starti","starts","starvi","stasai","stasar","statti","statua","statue","statui","statuo","status","stayer","stazza","stazze","stazzi","stazzo","steady","stecca","stecco","steche","stella","stelle","stelli","stello","stemma","stemmi","stemmo","stempi","stenda","stende","stendi","stendo","stenia","stenie","stenta","stente","stenti","stento","stenua","stenui","stenuo","steppa","steppe","steppi","steppo","sterco","stereo","sterna","sterne","sterni","sterno","sterpa","sterpe","sterpi","sterpo","sterra","sterri","sterro","sterza","sterzi","sterzo","stesai","stesar","stessa","stesse","stessi","stesso","steste","stesti","stette","stetti","stevia","stevie","stiamo","stiano","stiate","stibio","stichi","sticks","stidda","stidde","stiese","stiesi","stigai","stigar","stighi","stigia","stigie","stigio","stigli","stigma","stigmi","stilai","stilar","stilbi","stilbo","stilla","stille","stilli","stillo","stimai","stimar","stimma","stimmi","stinai","stinar","stinco","stinga","stinge","stingi","stingo","stinse","stinsi","stinta","stinte","stinti","stinto","stipai","stipar","stipsi","stirai","stirar","stirpa","stirpe","stirpi","stirpo","stivai","stivar","stizza","stizze","stizzi","stizzo","stocca","stocco","stocks","stoffa","stoffe","stogai","stogar","stoggi","stoghi","stogli","stoiai","stoiar","stoica","stoici","stoico","stoini","stoino","stokes","stolga","stolgo","stolli","stollo","stolse","stolsi","stolta","stolte","stolti","stolto","stolza","stolzi","stolzo","stomia","stomie","stonai","stonar","stonda","stondi","stondo","stones","stonii","stonio","stoppa","stoppe","stoppi","stoppo","storca","storce","storci","storco","stores","storia","storie","storio","stormi","stormo","storna","storne","storni","storno","storpi","storse","storsi","storta","storte","storti","storto","stosci","stozza","stozzi","stozzo","straba","strabe","strabi","strabo","strada","strade","stradi","strado","strage","stragi","strain","strale","strali","strame","strami","strana","strane","strani","strano","strasa","straso","strass","strati","strato","strazi","stream","street","strega","strego","strema","stremi","stremo","stress","striai","striar","strica","strico","strida","stride","stridi","strido","striga","strige","strigi","strigo","strike","strina","strine","strini","strino","strion","stripe","strips","strobi","strobo","strofa","strofe","strofi","stroma","stromi","strong","struma","strume","stucca","stucco","studia","studio","stufai","stufar","stuoia","stuoie","stuoli","stuolo","stupii","stupir","stupor","stupra","stupri","stupro","sturai","sturar","sturba","sturbi","sturbo","stutai","stutar","suacia","suacie","suaria","suarie","suarii","suario","suassi","suasso","subbia","subbie","subbio","subire","subita","subite","subiti","subito","subiva","subivi","subivo","subset","succhi","succia","succio","sucida","sucide","sucidi","sucido","sudaci","sudala","sudale","sudali","sudalo","sudami","sudane","sudano","sudare","sudari","sudata","sudate","sudati","sudato","sudava","sudavi","sudavo","sudest","sudice","sudici","sudino","sudoku","sudore","sudori","suerte","sufica","sufici","sufico","sufita","sufite","sufiti","sugaci","sugaia","sugaie","sugala","sugale","sugali","sugalo","sugami","sugane","sugano","sugare","sugata","sugate","sugati","sugato","sugava","sugavi","sugavo","sugger","suggio","sugosa","sugose","sugosi","sugoso","suidei","suideo","suites","sukkot","sukuma","sultan","sumera","sumere","sumeri","sumero","summit","sunese","sunesi","suolai","suolar","suonai","suonar","supera","supere","superi","supero","supina","supine","supini","supino","supply","suppor","surale","surali","surfai","surfar","surfer","surger","surimi","survey","susana","susane","susani","susano","susina","susine","susini","susino","sutura","suture","suturi","suturo","suvvia","suzzai","suzzar","svacca","svacco","svagai","svagar","svaghi","svampa","svampi","svampo","svanii","svanir","svapai","svapar","svaria","svario","svasai","svasar","svassi","svasso","svecci","svegli","svelai","svelar","svelga","svelgo","svella","svelle","svelli","svello","svelse","svelsi","svelta","svelte","svelti","svelto","svenai","svenar","svenda","svende","svendi","svendo","svenga","svengo","svenia","svenie","svenir","svenne","svenni","sventa","sventi","svento","sverga","svergo","sverla","sverli","sverlo","sverna","sverni","sverno","sversa","sversi","sverso","sverza","sverze","sverzi","sverzo","svesci","svesta","sveste","svesti","svesto","svetta","svetti","svetto","svezza","svezzi","svezzo","sviaci","sviala","sviale","sviali","svialo","sviami","sviamo","sviane","sviano","sviare","sviata","sviate","sviati","sviato","sviava","sviavi","sviavo","sviene","svieni","svigna","svigni","svigno","sviino","svilii","svilio","svilir","svinai","svinar","svisai","svisar","svista","sviste","svitai","svitar","svivai","svivar","svizia","svizio","svogli","svolai","svolar","svoler","svolga","svolge","svolgi","svolgo","svolii","svolio","svolle","svolli","svolse","svolsi","svolta","svolte","svolti","svolto","svotai","svotar","svuole","svuota","svuoti","svuoto","swatta","swatti","swatto","switch","symbol","syngas","system","tabica","tabici","tabico","tabida","tabide","tabidi","tabido","tablet","tabula","tabuli","tabulo","tacana","taccai","taccar","tacche","tacchi","taccia","taccio","tacere","tacete","taceva","tacevi","tacevo","tacici","tacila","tacile","tacili","tacilo","tacimi","tacine","tacita","tacite","taciti","tacito","tackle","tacque","tacqui","tafana","tafani","tafano","taffia","taffio","tafone","tafoni","tagali","tagete","tageti","taggai","taggar","tagghi","tagica","tagico","tagika","tagike","tagiki","tagiko","taglia","taglie","taglio","taguan","taighe","taiyal","talami","talamo","talare","talari","talchi","talent","talkie","talled","tallii","tallio","tallir","talmud","talora","taluna","talune","taluni","taluno","tamari","tamaro","tamisi","tamiso","tamtam","tanaci","tanala","tanale","tanali","tanalo","tanami","tanano","tanare","tanata","tanate","tanati","tanato","tanava","tanavi","tanavo","tancai","tancar","tanche","tanchi","tandem","tanfai","tanfar","tanger","tanghi","tanica","tanino","tanita","tanite","taniti","tanker","tannai","tannar","tantra","tantum","tanuki","tapina","tapine","tapini","tapino","tapiri","tapiro","tappai","tappar","tapsia","tapsie","taraci","tarala","tarale","tarali","taralo","tarami","tarane","tarano","tarara","tarare","tarata","tarate","tarati","tarato","tarava","taravi","taravo","tardai","tardar","targai","targar","target","targhe","targhi","tarino","tarlai","tarlar","tarmai","tarmar","tarpai","tarpan","tarpar","tarpea","tarpee","tarpei","tarpeo","tarsia","tarsie","tarsio","tartan","tasche","tassai","tassar","tassia","tassie","tastai","tastar","tatami","tatara","tatare","tatari","tataro","tattoo","tatuai","tatuar","tauone","tauoni","tavola","tavole","tavoli","tavolo","taxodi","teacea","teacee","teaser","teatri","teatro","tebana","tebane","tebani","tebano","tecale","tecali","tecche","techno","tedeum","tediai","tediar","tedino","teflon","tegame","tegami","teglia","teglie","tegola","tegole","tegoli","tegolo","teiera","teiere","teismi","teismo","teista","teiste","teisti","telaci","telaio","telala","telale","telali","telalo","telami","telane","telano","telare","telata","telate","telati","telato","telava","telavi","telavo","teleri","telero","telica","telici","telico","telino","telnet","telone","teloni","telson","telugu","temaki","temano","temere","temete","temeva","temevi","temevo","temici","temide","temidi","temila","temile","temili","temilo","temimi","temine","temiti","temoli","temolo","temono","tempia","tempie","tempio","templi","templo","tempon","tempra","tempre","tempri","tempro","tempus","temuru","temuta","temute","temuti","temuto","tenace","tenaci","tenare","tenari","tendai","tendar","tender","tenera","tenere","teneri","tenero","tenete","teneva","tenevi","tenevo","tennis","tenone","tenoni","tenore","tenori","tenrec","tentai","tentar","tenure","tenuta","tenute","tenuti","tenuto","teocon","teodem","teodia","teodie","teorba","teorbe","teoria","teorie","tepali","tepalo","tepees","tepida","tepide","tepidi","tepido","tepore","tepori","terbii","terbio","terger","terghi","termia","termie","termos","ternai","ternar","terona","terone","teroni","terrai","terrea","terree","terrei","terreo","terrii","terrir","terron","terzia","terzio","tesaci","tesala","tesale","tesali","tesalo","tesami","tesane","tesano","tesare","tesasi","tesata","tesate","tesati","tesato","tesava","tesavi","tesavo","teschi","teseci","tesele","tesemi","tesene","tesero","tesesi","teseti","tesevi","tesici","tesile","tesili","tesimi","tesina","tesine","tesino","tesisi","tesiti","tesivi","tesoci","tesole","tesoli","tesolo","tesomi","tesone","tesori","tesoro","tesosi","tesoti","tesovi","tessei","tesser","testai","testar","tester","teston","testor","tetani","tetano","tetica","tetici","tetico","tetide","tetidi","tetris","tettai","tettar","teucra","teucre","teucri","teucro","teurgi","teurgo","texana","texane","texani","texano","thamud","theatr","thembu","theory","thetan","tholos","thonet","thrash","thrill","tiburi","ticchi","ticket","tictac","tidale","tidali","tiella","tielle","tifaci","tifale","tifami","tifane","tifano","tifare","tifata","tifate","tifati","tifato","tifava","tifavi","tifavo","tifica","tifici","tifico","tifino","tifone","tifoni","tifosa","tifose","tifosi","tifoso","tifula","tifule","tights","tiglio","tignai","tignar","tigrai","tigrar","tiloma","tilomi","tilosi","timbra","timbre","timbri","timbro","timele","timeli","timers","timica","timici","timico","timida","timide","timidi","timido","timina","timine","timing","timoli","timolo","timoma","timomi","timona","timone","timoni","timono","timore","timori","tinaia","tinaie","tinche","tinger","tinnii","tinnio","tinnir","tintin","tintor","tiorba","tiorbe","tipica","tipici","tipico","tipina","tipine","tipini","tipino","tipona","tiponi","tipono","tiptap","tipula","tipule","tiraci","tirage","tirala","tirale","tirali","tiralo","tirami","tirane","tirano","tirare","tirata","tirate","tirati","tirato","tirava","tiravi","tiravo","tirchi","tirino","tirone","tironi","tisana","tisane","tisica","tisici","tisico","titani","titano","titese","titesi","titina","titine","titini","titino","titola","titoli","titolo","tituba","titubi","titubo","tlaspi","toasts","toboga","toccai","toccar","tocche","tocchi","todari","todaro","todina","todine","todini","todino","tofana","tofane","togale","togali","togata","togate","togati","togato","toglie","tomaci","tomaia","tomaie","tomaio","tomala","tomale","tomali","tomalo","tomami","tomane","tomano","tomare","tomata","tomate","tomati","tomato","tomava","tomavi","tomavo","tombai","tombar","tomini","tomino","tomoli","tomolo","tonaca","tonaci","tonala","tonale","tonali","tonalo","tonami","tonane","tonano","tonare","tonari","tonata","tonate","tonati","tonato","tonava","tonavi","tonavo","tonchi","tondai","tondar","tondei","tonder","tonema","tonemi","tonfai","tonfar","tonica","tonici","tonico","tonino","topaia","topaie","topaii","topaio","topata","topate","topati","topato","topazi","topica","topici","topico","topina","topine","topini","topino","topona","topone","toponi","toppai","toppar","toques","torace","toraci","toraja","torcer","torchi","torcia","torcio","tordai","toreai","torear","toreri","torero","torese","toresi","torica","torici","torico","torite","toriti","tornai","tornar","tornea","tornei","torneo","tornii","tornio","tornir","torosa","torose","torosi","toroso","torque","torqui","torria","torrio","torula","torule","tosaci","tosala","tosale","tosali","tosalo","tosami","tosane","tosano","tosare","tosata","tosate","tosati","tosato","tosava","tosavi","tosavo","tosche","toschi","tosese","tosesi","tosino","tosola","tosoli","tosolo","tosone","tosoni","tossii","tossir","tostai","tostar","totale","totali","totani","totano","totela","touche","toupet","toupie","tovese","tovesi","towers","trabea","trabee","traber","tracce","tracci","tracco","tracer","tracia","tracie","tracio","trader","tradii","tradir","tradur","traete","traeva","traevi","traevo","tragga","traggo","traghi","traici","traila","traile","traili","trailo","traimi","traina","traine","traini","traino","traiti","traits","tralci","tramai","tramar","tranai","tranar","trance","tranci","tranne","transa","transi","transo","traoda","traode","traodi","traodo","trapor","trappa","trappe","trappi","trappo","trarci","trarla","trarle","trarli","trarlo","trarmi","trarne","trarre","trarsi","trarti","trarvi","trarza","trasla","trasli","traslo","trassa","trasse","trassi","trasso","trasti","trasto","tratta","tratte","tratti","tratto","trauma","traumi","travel","travet","travia","travio","treagi","trebbi","trebbo","trecca","trecce","trecci","trecco","tregge","tregua","tregue","tremai","tremar","trenai","trenar","trench","trends","trendy","trent'","trenta","treppi","tresca","tresco","triaca","triaci","triade","triadi","triage","triala","triale","triali","trialo","trials","triami","triamo","triane","triano","triare","triari","triata","triate","triati","triato","triava","triavi","triavo","tricot","tridui","triduo","trieca","trieco","triera","triere","trieri","trighe","trilla","trilli","trillo","trinai","trinar","trinca","trinci","trinco","tringa","triodi","triodo","trioni","triope","triopi","triosi","tripla","triple","tripli","triplo","trippa","trippe","trisma","trismi","trismo","trista","triste","tristi","tristo","tritai","tritar","tritio","trivia","trivie","trivio","trizio","trochi","trofei","trofeo","trofia","trofie","trogli","troiai","troica","troika","troike","trojan","trojka","trojke","trolla","trolli","trollo","tromba","trombe","trombi","trombo","tronai","tronar","tronca","tronco","tronfi","tropea","tropee","trophy","troppa","troppe","troppi","troppo","trosce","trotta","trotti","trotto","troupe","trovai","trovar","trozza","trozze","trucca","trucci","trucco","truche","trucia","trucie","trucio","truffa","truffe","truffi","truffo","trugli","trulla","trulle","trulli","trullo","truoni","truono","truppa","truppe","trusci","trusts","truzza","truzze","truzzi","truzzo","tsamai","tsughe","tswana","tuareg","tubaci","tubala","tubale","tubali","tubalo","tubami","tubane","tubano","tubare","tubata","tubate","tubati","tubato","tubava","tubavi","tubavo","tubera","tubere","tuberi","tubero","tubing","tubini","tubino","tuboli","tubolo","tubona","tubone","tuboni","tubuli","tubulo","tucani","tucano","tudera","tudere","tuderi","tudero","tueggi","tuelli","tuello","tufaci","tufala","tufale","tufali","tufalo","tufami","tufano","tufare","tufata","tufate","tufati","tufato","tufava","tufavi","tufavo","tufese","tufesi","tuffai","tuffar","tufino","tufosa","tufose","tufosi","tufoso","tuguri","tulese","tulesi","tumida","tumide","tumidi","tumido","tumola","tumoli","tumolo","tumore","tumori","tumula","tumuli","tumulo","tundra","tundre","tunger","tungur","tunica","tuning","tunnel","tuonai","tuonar","tuorli","tuorlo","tupaia","tupaie","tupeli","tupelo","turaci","turaco","turala","turale","turali","turalo","turame","turami","turane","turano","turare","turata","turate","turati","turato","turava","turavi","turavo","turbai","turbar","turche","turchi","turese","turesi","turino","turnai","turnar","tusana","tusane","tusani","tusano","tusche","tuschi","tussah","tussor","tutaci","tutala","tutale","tutali","tutalo","tutami","tutane","tutano","tutare","tutata","tutate","tutati","tutato","tutava","tutavi","tutavo","tutela","tutele","tuteli","tutelo","tutina","tutine","tutino","tutoli","tutolo","tutore","tutori","tuxedo","twitta","twitti","twitto","tycoon","tócchi","ubicai","ubicar","ubichi","ubiera","ubiere","ubieri","ubiero","ubiqua","ubique","ubiqui","ubiquo","uccida","uccide","uccidi","uccido","uccisa","uccise","uccisi","ucciso","udendo","udente","udenti","udiamo","udiate","udimmo","udirai","udirci","udirei","udirla","udirle","udirli","udirlo","udirmi","udirne","udirsi","udirti","udirvi","udisse","udissi","udiste","udisti","uditor","udremo","udrete","uffete","uffici","uffizi","ufizio","ugelli","ugello","uggiai","uggiar","uggino","uggire","uggita","uggite","uggiti","uggito","uggiva","uggivi","uggivo","ugnaci","ugnala","ugnale","ugnali","ugnalo","ugnami","ugnane","ugnano","ugnare","ugnata","ugnate","ugnati","ugnato","ugnava","ugnavi","ugnavo","ugnino","ugnoli","ugnolo","ugrica","ugrici","ugrico","uguale","uguali","uigura","uigure","uiguri","uiguro","ukiyoe","ulcera","ulcere","ulceri","ulcero","ulimii","ulimir","ulivai","ulmica","ulmici","ulmico","ulnare","ulnari","ulster","ultim'","ultima","ultime","ultimi","ultimo","ultore","ultori","ultras","ululai","ulular","ulvite","ulviti","umanai","umanar","umbone","umboni","umetta","umetti","umetto","umiche","umidii","umidir","umilia","umilio","umista","umiste","umisti","unaria","unarie","unarii","unario","uncico","uncina","uncini","uncino","undici","unendo","unenne","unenni","unente","unenti","ungano","ungara","ungare","ungari","ungaro","ungere","ungete","ungeva","ungevi","ungevo","unghia","unghie","ungici","ungila","ungile","ungili","ungilo","ungimi","ungine","ungiti","ungono","ungula","ungule","uniamo","uniate","uniati","uniche","unicum","unimmo","unione","unioni","unirai","unirci","unirei","unirla","unirle","unirli","unirlo","unirmi","unirne","unirsi","unirti","unirvi","unisca","unisce","unisci","unisco","unisex","unisse","unissi","uniste","unisti","unitor","unizza","unizzi","unizzo","unnica","unnici","unnico","unsero","untaci","untala","untale","untali","untalo","untami","untano","untare","untasi","untata","untate","untati","untato","untava","untavi","untavo","unteci","untele","untemi","untene","untesi","unteti","untevi","untici","untile","untili","untimi","untine","untino","untisi","untiti","untivi","untoci","untole","untoli","untolo","untomi","untone","untore","untori","untosi","untoti","untovi","untume","untumi","uomini","updata","update","updati","updato","uplink","upload","urango","urania","uranie","uranio","urbana","urbane","urbani","urbano","urbica","urbici","urbico","ureasi","ureica","ureici","ureico","ureide","ureidi","uremia","uremie","urente","urenti","uretra","uretre","urgano","urgere","urgete","urgeva","urgevi","urgevo","urgici","urgila","urgile","urgili","urgilo","urgimi","urgine","urgiti","urgono","uriche","uriese","uriesi","urinai","urinar","urista","uriste","uristi","urlaci","urlala","urlale","urlali","urlalo","urlami","urlane","urlano","urlare","urlata","urlate","urlati","urlato","urlava","urlavi","urlavo","urlino","urlona","urlone","urloni","urrita","urrite","urriti","urside","ursidi","ursina","ursine","ursini","ursino","ursone","ursoni","urtaci","urtala","urtale","urtali","urtalo","urtami","urtane","urtano","urtare","urtata","urtate","urtati","urtato","urtava","urtavi","urtavo","urtica","urtico","urtino","urtone","urtoni","usaggi","usagli","usammo","usando","usante","usanti","usanza","usanze","usarci","usarla","usarle","usarli","usarlo","usarmi","usarne","usarsi","usarti","usarvi","usasse","usassi","usaste","usasti","usator","usatti","usatto","usbeca","usbeco","uscere","usceri","uscese","uscesi","uscier","uscire","uscita","uscite","usciti","uscito","usciva","uscivi","uscivo","userai","userei","userid","usiamo","usiate","ussari","ussaro","usseri","ussero","ussita","ussite","ussiti","ustola","ustoli","ustolo","ustori","ustosa","ustose","ustosi","ustoso","usuale","usuali","usuari","usurai","usurar","usuria","usurio","usurpa","usurpi","usurpo","utelli","utello","utente","utenti","utenza","utenze","utopia","utopie","utopii","utopio","uvacea","uvacee","uvacei","uvaceo","uvaggi","uvaria","uvarie","uveale","uveali","uveite","uveiti","uvetta","uvette","uxoria","uxorie","uxorio","uzbeca","uzbeco","uzbeka","uzbeke","uzbeki","uzbeko","uzzata","uzzate","uzzati","uzzato","uzzese","uzzesi","uzzoli","uzzolo","vacaci","vacala","vacale","vacali","vacalo","vacami","vacane","vacano","vacare","vacata","vacate","vacati","vacato","vacava","vacavi","vacavo","vaccai","vacche","vacela","vacele","vaceli","vacelo","vacene","vacuai","vacuar","vacuum","vadano","vadosa","vadose","vadosi","vadoso","vagaci","vagala","vagale","vagali","vagalo","vagami","vagane","vagano","vagare","vagata","vagate","vagati","vagato","vagava","vagavi","vagavo","vagile","vagili","vagina","vagine","vagire","vagita","vagite","vagiti","vagito","vagiva","vagivi","vagivo","vaglia","vaglio","vagola","vagoli","vagolo","vagone","vagoni","vaiaia","vaiaie","vaiaio","vaiata","vaiate","vaiati","vaiato","vaiola","vaioli","vaiolo","valere","valete","valeva","valevi","valevo","valghe","valghi","valica","valici","valico","valida","valide","validi","valido","valige","valila","valile","valili","valilo","valimi","valina","valine","valiti","valium","vallai","vallar","vallea","vallee","valora","valore","valori","valoro","valuta","valute","valuti","valuto","valzer","vamela","vamele","vameli","vamelo","vamene","vamici","vamiti","vampai","vampar","vanaci","vanala","vanale","vanali","vanalo","vanami","vanane","vanano","vanare","vanata","vanate","vanati","vanato","vanava","vanavi","vanavo","vandea","vandee","vaneai","vanear","vanesi","vangai","vangar","vanghe","vanghi","vaniai","vaniar","vanino","vanire","vanita","vanite","vaniti","vanito","vaniva","vanivi","vanivo","vantai","vantar","vanume","vanumi","vapiti","vapola","vapole","vapoli","vapolo","vapora","vapore","vapori","vaporo","varaci","varala","varale","varali","varalo","varami","varane","varani","varano","varare","varata","varate","varati","varato","varava","varavi","varavo","varcai","varcar","varchi","varech","variai","variar","varica","varice","varici","varico","varino","varrai","varrei","vasaia","vasaie","vasaio","vasale","vasali","vasame","vasami","vasara","vasare","vasari","vasaro","vasche","vasini","vasino","vassoi","vastai","vastar","vatela","vatele","vateli","vatelo","vatene","vecchi","veccia","vedano","vedasi","vedere","vedete","vedeva","vedevi","vedevo","vedica","vedici","vedico","vedila","vedile","vedili","vedilo","vedimi","vedine","vediti","vedono","vedova","vedove","vedovi","vedovo","vedrai","vedrei","veduta","vedute","veduti","veduto","veejay","vegana","vegane","vegani","vegano","vegeta","vegete","vegeti","vegeto","veggia","veggio","veglia","veglie","veglio","velaci","velada","velade","velaia","velaie","velaio","velala","velale","velali","velalo","velame","velami","velane","velano","velare","velari","velata","velate","velati","velato","velava","velavi","velavo","velcri","velcro","velena","veleni","veleno","velese","velesi","velica","velici","velico","velina","veline","velini","velino","velite","veliti","veloce","veloci","velona","velone","veltri","veltro","velvet","venaci","venala","venale","venali","venalo","venami","venane","venano","venare","venata","venate","venati","venato","venava","venavi","venavo","vendei","vender","venera","venere","veneri","venero","veneta","venete","veneti","veneto","vengia","vengio","venina","venine","venino","venire","venite","veniva","venivi","venivo","venosa","venose","venosi","venoso","venota","venote","venoti","venoto","ventai","ventar","ventre","ventri","ventun","venula","venule","venuta","venute","venuti","venuto","veprai","verace","veraci","verdea","verdee","verdii","verdir","vergai","vergar","vergei","verger","verghe","verghi","verina","verine","vermut","vernai","vernar","verola","verole","verone","veroni","verrai","verrei","versai","versar","versoi","versta","verste","versus","vertei","verter","vertex","veruna","verune","veruni","veruno","vescia","vespai","vespri","vespro","vessai","vessar","vessel","vestii","vestir","vetero","vetrai","vexata","viacce","viados","viaggi","viagra","viaria","viarie","viario","viator","viavai","vibice","vibici","vibrai","vibrar","vicana","vicane","vicani","vicano","vicari","vicese","vicesi","vicina","vicine","vicini","vicino","vicoli","vicolo","videro","vidima","vidimi","vidimo","viella","vielle","vietai","vietar","vigano","vigere","vigeva","vigila","vigile","vigili","vigilo","viglia","viglio","vignai","vigono","vigora","vigore","vigori","vigoro","vilaci","vilala","vilale","vilali","vilalo","vilami","vilano","vilare","vilata","vilate","vilati","vilato","vilava","vilavi","vilavo","vilino","vilire","vilita","vilite","viliti","vilito","viliva","vilivi","vilivo","villan","vimaci","vimala","vimale","vimali","vimalo","vimami","vimane","vimano","vimare","vimata","vimate","vimati","vimato","vimava","vimavi","vimavo","vimine","vimini","vimino","vinaia","vinaie","vinaio","vinale","vinali","vinari","vinata","vinate","vinati","vinato","vincer","vinche","vinchi","vinila","vinile","vinili","vinilo","vinosa","vinose","vinosi","vinoso","vinota","vinote","vinoti","vinoto","vintor","violai","violar","viorna","viorne","vipera","vipere","viraci","virago","virala","virale","virali","viralo","virami","virane","virano","virare","virata","virate","virati","virato","virava","viravi","viravo","virghe","viride","viridi","virile","virili","virino","virola","virole","virosa","virose","virosi","viroso","virtu'","visaci","visala","visale","visali","visalo","visami","visano","visare","visata","visate","visati","visato","visava","visavi","visavo","vischi","visini","visino","vision","visita","visite","visiti","visito","visiva","visive","visivi","visivo","visone","visoni","visore","visori","vistai","vistar","visual","visura","visure","vitaci","vitala","vitale","vitali","vitalo","vitame","vitami","vitano","vitare","vitata","vitate","vitati","vitato","vitava","vitavi","vitavo","vitese","vitesi","vitice","vitici","vitina","vitine","vitini","vitino","vitone","vitoni","vitrea","vitree","vitrei","vitreo","vittor","viuzza","viuzze","viuzzi","viuzzo","vivace","vivaci","vivaio","vivano","vivant","vivere","viveri","vivete","viveur","viveva","vivevi","vivevo","vivici","vivida","vivide","vividi","vivido","vivila","vivile","vivili","vivilo","vivimi","vivine","viviti","vivono","vivrai","vivrei","viziai","viziar","vizino","vocaci","vocala","vocale","vocali","vocalo","vocami","vocane","vocano","vocare","vocata","vocate","vocati","vocato","vocava","vocavi","vocavo","voceri","vocero","vociai","vociar","vocina","vocine","vocini","vocino","vocita","vociti","vocito","vociva","vocive","vocivi","vocivo","vodese","vodesi","vogaci","vogala","vogale","vogali","vogalo","vogami","vogane","vogano","vogare","vogata","vogate","vogati","vogato","vogava","vogavi","vogavo","voglia","voglie","voglio","vogula","vogule","voguli","vogulo","voiles","volaci","volage","volagi","volala","volale","volali","volalo","volami","volane","volani","volano","volant","volare","volari","volata","volate","volati","volato","volava","volavi","volavo","volche","volchi","volere","voleri","volete","voleva","volevi","volevo","volgar","volger","volghi","volino","volita","voliti","volito","vollea","vollei","volleo","volley","volpai","volpar","volpon","volsca","volsci","volsco","voltai","voltar","voltoi","volume","volumi","voluta","volute","voluti","voluto","volvei","volver","vomere","vomeri","vomero","vomica","vomici","vomico","vomire","vomita","vomite","vomiti","vomito","vomiva","vomivi","vomivo","voodoo","vorace","voraci","vorala","vorale","vorali","voralo","vorami","vorano","vorare","vorata","vorate","vorati","vorato","vorava","voravi","voravo","vorino","vorrai","vorrei","vortex","vossia","vossie","vostra","vostre","vostri","vostro","votaci","votala","votale","votali","votalo","votami","votane","votano","votare","votata","votate","votati","votato","votava","votavi","votavo","votino","votire","votita","votite","votiti","votito","votiva","votive","votivi","votivo","voyeur","vrisea","vrisee","vuelta","vulgai","vulgar","vulghi","vulnus","vuotai","vuotar","wafers","wagons","wakash","walkie","walser","walzer","wapiti","wasabi","waziri","webcam","weblog","weight","welter","whisky","widget","wilaya","window","winner","woofer","worker","writer","xcviii","xenobi","xenopi","xenopo","xerobi","xerosi","xilani","xilano","xilema","xilemi","xilene","xileni","xiloli","xilolo","xilosi","xlviii","xoanon","xxviii","xxxiii","xxxvii","yachts","yakusa","yakuza","yamana","yankee","yazida","yazide","yazidi","yazido","yesman","yoghin","yogica","yogici","yogico","yogurt","yoicks","yoruba","yprite","ypriti","yucche","yuppie","zabibi","zabibo","zaffai","zaffar","zagara","zagare","zalofi","zalofo","zambra","zambre","zampai","zampar","zamuca","zamuco","zanata","zanate","zanche","zannai","zannar","zappai","zappar","zarina","zarine","zarini","zarino","zarosa","zarose","zarosi","zaroso","zebrai","zebrar","zeccai","zeccar","zecche","zecchi","zefiri","zefiro","zeismi","zeismo","zelaci","zelala","zelale","zelali","zelalo","zelami","zelane","zelano","zelare","zelata","zelate","zelati","zelato","zelava","zelavi","zelavo","zelese","zelesi","zelino","zelosa","zelose","zelosi","zeloso","zelota","zelote","zeloti","zemese","zemesi","zenana","zenane","zenith","zephir","zephyr","zeppai","zeppar","zeriba","zeribe","zeugma","zeugmi","ziacce","ziacci","ziesca","ziesco","zietta","ziette","zietti","zietto","zifide","zifidi","zigaci","zigala","zigale","zigali","zigalo","zigami","zigana","zigane","zigani","zigano","zigare","zigata","zigate","zigati","zigato","zigava","zigavi","zigavo","zigena","zigene","zignai","zignar","zigoli","zigolo","zigoma","zigomi","zigomo","zigosi","zigote","zigoti","zigoto","zigzag","zillai","zillar","zimasi","zimini","zimino","zimosi","zinale","zinali","zincai","zincar","zinchi","zinnai","zinnar","zinnia","zinnie","zipola","zipoli","zipolo","zippai","zippar","ziraia","ziraie","zirlai","zirlar","zirlii","zirlio","zitone","zitoni","zittai","zittar","zittii","zittio","zittir","ziucce","ziucci","zoecio","zolfai","zolfar","zollai","zollar","zombai","zombar","zombie","zompai","zompar","zonaci","zonala","zonale","zonali","zonalo","zonami","zonane","zonano","zonare","zonari","zonaro","zonata","zonate","zonati","zonato","zonava","zonavi","zonavo","zonese","zonesi","zonino","zonula","zonule","zonuri","zonuro","zooeci","zoomai","zoomar","zopoli","zopolo","zoppai","zoppar","zoppia","zoppie","zoster","zotica","zotici","zotico","zuccai","zucche","zuccon","zufola","zufole","zufoli","zufolo","zumaci","zumala","zumale","zumali","zumalo","zumami","zumane","zumano","zumare","zumata","zumate","zumati","zumato","zumava","zumavi","zumavo","zumino","zunese","zunesi","zuppai","zuppar","zurese","zuresi","zurlai","zurlar"],
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
