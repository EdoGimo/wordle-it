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
  var Aa = ['lenese', 'gazalo', 'nucali', 'cucila', 'crocia', 'sitalo', 'lovers', 'esilia', 'atropo', 'gialle', 'reduci', 'ruvidi', 'tumola', 'adduce', 'cilena', 'avrete', 'petami', 'nemesi', 'inolia', 'degnai', 'impani', 'copeco', 'accapo', 'strike', 'sturba', 'uscere', 'imatio', 'dodici', 'bovara', 'molami', 'fagare', 'putano', 'codolo', 'podere', 'nucati', 'ceceni', 'strabe', 'durame', 'barate', 'golosa', 'amarla', 'vuotai', 'voceri', 'traina', 'beanti', 'telaci', 'clasto', 'mimuli', 'runici', 'sborro', 'acridi', 'fiorar', 'crenai', 'cateni', 'diriga', 'agirne', 'legami', 'sokora', 'retina', 'cerisi', 'salili', 'curule', 'pelele', 'nevosi', 'ancido', 'pacier', 'scotte', 'preghe', 'sepidi', 'colcos', 'temine', 'occidi', 'sgarai', 'acroma', 'sfumar', 'soraci', 'piatti', 'urlare', 'irruma', 'lumera', 'cadano', 'musane', 'mutoli', 'pagavo', 'faceva', 'pedine', 'riride', 'cagona', 'punghe', 'lobati', 'piarti', 'funame', 'tesasi', 'scalca', 'rombai', 'amasse', 'sudaci', 'ertoli', 'cucite', 'geloso', 'aquile', 'esigua', 'tantra', 'multai', 'poncif', 'cernia', 'baseno', 'murane', 'sopori', 'incide', 'vivaci', 'sellar', 'radula', 'ubicar', 'sezzai', 'palona', 'gruzzo', 'irizzi', 'pontar', 'latrar', 'memoro', 'voyeur', 'lumali', 'strine', 'chicca', 'osmeri', 'moghul', 'norite', 'taglie', 'fruito', 'priapi', 'badale', 'cabila', 'riduce', 'sfibbi', 'batoci', 'lurche', 'rugala', 'stirpo', 'cortes', 'ansato', 'sterza', 'regate', 'hybris', 'sfarle', 'aderge', 'taggar', 'duello', 'fugare', 'ceduti', 'aerate', 'serino', 'mioidi', 'orarvi', 'culava', 'sdemmo', 'trinco', 'anfore', 'ripara', 'boston', 'ergevo', 'udremo', 'getter', 'sbrago', 'armese', 'tsamai', 'otturi', 'lanuta', 'traber', 'sfossa', 'barrio', 'ditola', 'batavi', 'ferivo', 'mannei', 'efebie', 'cupido', 'avalli', 'feijoe', 'devori', 'ghezzo', 'sporre', 'spirar', 'cribra', 'pudica', 'ripiva', 'branda', 'stanai', 'istmia', 'cruore', 'grembo', 'chicco', 'ararvi', 'turalo', 'camato', 'areole', 'queens', 'schemi', 'lunati', 'malate', 'nuotar', 'rovoso', 'appaio', 'gitile', 'osmosa', 'birrai', 'anturi', 'sdogai', 'ricali', 'cyborg', 'vogaci', 'roraci', 'rimuti', 'sgessi', 'sficco', 'valevi', 'nudali', 'baseni', 'uccisi', 'volere', 'nerita', 'sereno', 'menata', 'stiamo', 'titubi', 'menane', 'zippar', 'zeccar', 'nevate', 'carini', 'conize', 'vinosa', 'galeri', 'statti', 'dracme', 'forint', 'gameti', 'crespa', 'cadmea', 'bissar', 'bimare', 'relati', 'scerno', 'saturi', 'trappe', 'bravar', 'liston', 'kazake', 'cadeau', 'oranti', 'scuoci', 'ipoidi', 'cammeo', 'rufolo', 'dasipo', 'magona', 'ammala', 'fedale', 'accade', 'veraci', 'ciarda', 'rierte', 'tifule', 'spaesi', 'smunga', 'holmio', 'sgamba', 'afgane', 'cubaci', 'sfilzi', 'meruli', 'refuta', 'litici', 'tifata', 'cariai', 'sudavo', 'cecche', 'rugosi', 'rubone', 'bibbia', 'stonio', "disfa'", 'compor', 'scorno', 'baggee', 'ustori', 'vespro', 'sgorga', 'augure', 'rirese', 'untale', 'fiasco', 'glorio', 'scrini', 'udenti', 'odrisi', 'cucici', 'indino', 'sdossa', 'addale', 'lavoro', 'creola', 'schiso', 'stillo', 'sbolgi', 'vediti', 'aborri', 'nipple', 'apioni', 'pipaio', 'entina', 'volane', 'optato', 'amente', 'slatta', 'sorane', 'copate', 'humour', 'titese', 'incusa', 'fallar', 'rambla', 'ispano', 'eccola', 'cibaci', 'zonari', 'membro', 'pierai', 'slamar', 'sdiamo', 'penata', 'storpi', 'versar', 'tesala', 'sdutto', 'pelami', 'grocco', 'camalo', 'gromma', 'fomite', 'doluti', 'borito', 'bacaci', 'scelgo', 'radure', 'cubiti', 'smazzo', 'correo', 'stirpe', 'psiche', 'blonda', 'sciupo', 'libica', 'storio', 'tarata', 'nivali', 'dittei', 'stress', 'furata', 'pedula', 'tirato', 'alleli', 'clamar', 'cedile', 'ventar', 'ripaga', 'ellese', 'fonava', 'melano', 'caspii', 'infuna', 'tepalo', 'affila', 'duetto', 'egeria', 'tracia', 'sverno', 'comuna', 'rodare', 'cesare', 'somnio', 'iazigi', 'naïves', 'svapai', 'vomita', 'sirene', 'mitrar', 'risovi', 'eschio', 'ideali', 'dictum', 'melato', 'palaci', 'ostile', 'stando', 'donala', 'pedali', 'lesesi', 'malora', 'irideo', 'lamini', 'sugaie', 'lucide', 'acculi', 'evirar', 'rignai', 'selace', 'luassi', 'repevo', 'gasare', 'eluder', 'barene', 'lustra', 'scuoio', 'ammide', 'inasti', 'spanne', 'pigmee', 'rabido', 'agendo', 'humici', 'onorai', 'adelfa', 'anisto', 'avocar', 'sconce', 'durami', 'viuzzo', 'repici', 'scolla', "quint'", 'fonemi', 'dolici', 'freisa', 'editto', 'notulo', 'riesca', 'vaporo', 'odente', 'cimbro', 'marcir', 'nidore', 'smuove', 'oppone', 'ulimir', 'susini', 'madido', 'anisti', 'adorne', 'mastio', 'ramate', 'rorava', 'esizio', 'fummai', 'accese', 'client', 'piloti', 'achiro', 'etiopi', 'mescio', 'bronce', 'rumina', 'donami', 'lanate', 'insiti', 'venivi', 'vaiolo', 'adagia', 'patrie', 'flotto', 'scissi', 'scatti', 'gavone', 'scruta', 'nasuti', 'fabico', 'salite', 'guanti', 'bienne', 'piloto', 'faceto', 'angarî', 'furbon', 'palala', 'molito', 'ovatta', 'brinai', 'scaffo', 'ridila', 'avendo', 'byebye', 'bonari', 'masses', 'celato', 'noodle', 'dedita', "alcun'", 'riddai', 'nugace', 'rogale', 'sequel', 'vinoti', 'cianca', 'socchi', 'armadi', 'niccia', 'ignara', 'riccon', 'dasote', 'donava', 'bendai', 'sfissa', 'hockey', 'didima', 'sfiora', 'divina', 'pipane', 'votavi', 'broker', 'rucole', 'bovina', 'ligino', 'balivo', 'ortale', 'crenno', 'esimio', 'sevizi', 'piombo', 'nuvoli', 'affine', 'orarie', 'tentar', 'viziai', 'arussa', 'sirice', 'rotaci', 'leanze', 'tusche', 'fluite', 'ardeva', 'fregne', 'trolli', 'uscese', 'niente', 'iodoso', 'odiati', 'selone', 'abcasa', 'esorta', 'dopavi', 'fittar', 'placar', 'lodali', 'trollo', 'smosci', 'denoto', 'lassai', 'cuccia', 'nuncio', 'pipiar', 'figona', 'notami', 'pilose', 'assiro', 'notati', 'hereri', 'sigari', 'eseguo', 'aliseo', 'opiata', 'sperse', 'poesia', 'tubaci', 'pelare', 'zelava', 'parino', 'divide', 'sconca', 'sbarbo', 'monoso', 'esatta', 'bantam', 'acusmi', 'latria', 'babbea', 'iberno', 'rosume', 'annega', 'rizzar', 'fucilo', 'ciurlo', 'vengia', 'lapide', 'smerda', 'rodesi', 'eroico', 'temuta', 'aderti', 'algica', 'pagaci', 'stoica', 'vimane', 'subbia', 'librar', 'piurie', 'smisti', 'udirla', 'sanaci', 'zigata', 'oblale', 'codice', 'rimali', 'mummie', 'rumami', 'ustoso', 'hitter', 'emetto', 'vanava', 'classa', 'alzati', 'oziavi', 'adorea', 'andrei', 'stenda', 'lodole', 'duplex', 'algido', 'usceri', 'premei', 'ornavo', 'ciaone', 'mimosa', 'bufera', 'putide', 'lessar', 'pilone', 'secure', 'cumene', 'svelle', 'egloga', 'tosate', 'cavide', 'bigame', 'acromo', 'salvie', 'nogato', 'staffa', 'colpii', 'giudii', 'canoni', 'scolpa', 'iazidi', 'azzero', 'inceli', 'tanavo', 'ararle', 'blemma', 'geenna', 'diario', 'potere', 'bracca', 'orrore', 'tiglio', 'bubale', 'adesso', 'parere', 'bigini', 'faenze', 'levava', 'cortea', 'spauro', 'esatte', 'zephir', 'temidi', 'sorati', 'rutilo', 'asceti', 'dolosi', 'domine', 'eschie', 'idalgo', 'affoca', 'tosavo', 'nugaci', 'scorra', 'sfolli', 'minace', 'orrido', 'attala', 'linear', 'vitici', 'gridar', 'dolevo', 'artaci', 'valori', 'faldai', 'dolavi', 'dirami', 'galero', 'sorano', 'reputo', 'inseni', 'yakuza', 'vinchi', 'geldra', 'penali', 'offrir', 'ciucco', 'gelosa', 'gratta', 'traine', 'binodo', 'paveso', 'vogate', 'abduci', 'ropali', 'barena', 'bregma', 'nerite', 'aderba', 'agiara', 'riesco', 'tufosi', 'ammuti', 'garbai', 'killer', 'spagna', 'estubi', 'immago', 'sfalsi', 'cerula', 'corcai', 'conidi', 'edotta', 'panami', 'equini', 'serale', 'elabri', 'incoio', 'intasa', 'velala', 'vorata', 'ricado', 'molari', 'quante', 'copata', 'dottor', 'idroli', 'agrese', 'sdalla', 'annaso', 'barata', 'gaudia', 'dronti', 'sbauli', 'novava', 'montai', 'regimo', 'calmar', 'atenei', 'varala', 'bulami', 'spassa', 'biechi', 'tosati', 'eluato', 'emboli', 'vilavi', 'linteo', 'forami', 'mellee', 'taggai', 'esergo', 'secano', 'ottici', 'endico', 'foiolo', 'corani', 'scippi', 'pomoli', 'charme', 'genate', 'rimuta', 'notavi', 'rigoda', 'codine', 'gelivi', 'mixavi', 'infera', 'shifto', 'plorar', 'sfende', 'fusemi', 'subbio', 'bagola', 'cheque', 'prasmi', 'ritubo', 'babaco', 'scussi', 'corife', 'pienai', 'penoso', 'arbani', 'portai', 'levata', 'raglio', 'parafi', 'avvera', 'invero', 'espiro', 'fanale', 'artico', 'zeppar', 'vogato', 'damale', 'basava', 'litobi', 'vimali', 'ramane', 'futuri', 'cedute', 'tufavo', 'biassi', 'pareti', 'secavi', 'buyout', 'rebbia', 'beveva', 'mendar', 'doravo', 'beando', 'renaio', 'cassie', 'valici', 'natile', 'purano', 'lobate', 'saperi', 'attira', 'theory', 'palesa', 'belato', 'meante', 'mutali', 'torica', 'ciuche', 'obdura', 'raffia', 'sgarra', 'rodavi', 'aperti', 'ratesi', 'associ', 'staggi', 'uremia', 'pusher', 'tesavi', 'idiote', 'spurga', 'culdeo', 'melodi', 'ridoni', 'dubbia', 'putato', 'palami', 'lenite', 'pluteo', 'cazzio', 'evinsi', 'zurlai', 'ungaro', 'tinche', 'nasone', 'inteso', 'milord', 'gitimi', 'alture', 'oliari', 'troppe', 'tesalo', 'incedo', 'avviai', 'bubane', 'cagane', 'lavare', 'cambia', 'albere', 'animus', 'imboni', 'agisti', 'lavami', 'foravi', 'umidir', 'ducevi', 'agitar', 'indice', 'galera', 'leuche', 'mostri', 'africi', 'bavari', 'sfotti', 'armate', 'spirto', 'venoti', 'forala', 'seiuga', 'susano', 'murene', 'lodaci', 'poncio', 'spuzza', 'ontani', 'piovve', 'escano', 'sbarda', 'tradir', 'ondosi', 'penato', 'prelia', 'gitele', 'evinse', 'canile', 'brachi', 'trends', 'venose', 'bavare', 'poltra', 'arboro', 'esiste', 'proeva', 'musare', 'fotine', 'nomare', 'franse', 'vicari', 'vimine', 'sitivi', 'ecoide', 'retane', 'remolo', 'agerei', 'miravo', 'venula', 'penano', 'purgai', 'curavo', 'laccio', 'giuria', 'cangio', 'morosa', 'finiva', 'sostai', 'cibare', 'buessa', 'telici', 'scoino', 'cerilo', 'colico', 'vanghe', 'appeal', 'ceraio', 'luglio', 'guarii', 'cialda', 'ordure', 'stoffe', 'grezza', 'picure', 'acromi', 'allise', 'coarti', 'lobulo', 'zigalo', 'giusta', 'pabbio', 'esulto', 'cesena', 'femico', 'uzzolo', 'teodia', 'paiwan', 'mudate', 'unendo', 'abbili', 'meduse', 'lesolo', 'fusore', 'pelame', 'raponi', 'limane', 'garrii', 'sbolla', 'turesi', 'fotina', 'gemito', 'viridi', 'ferree', 'eciste', 'esorto', 'resimi', 'epopee', 'tubing', 'torite', 'inarca', 'attane', 'barman', 'riarai', 'varata', 'logori', 'comito', 'rireso', 'invelo', 'cumeni', 'liftai', 'bizona', 'algosi', 'aborre', 'valghi', 'culati', 'consto', 'balbar', 'anista', 'sciita', 'rifusa', 'rorese', 'ormate', 'mudane', 'orbace', 'purino', 'bufano', 'svelto', 'tapsia', 'omilie', 'dietri', 'corion', 'senoni', 'andrai', 'ninfee', 'ananas', 'arneis', 'ammeti', 'spompi', 'nepete', 'azalee', 'addala', 'pagalo', 'nolesi', 'imenei', 'irrida', 'smassa', 'setosi', 'esuvia', 'fotter', 'ircina', 'inveir', 'fusivi', 'zumane', 'emular', 'latero', 'culona', 'stasar', 'cuiavi', 'cantar', 'belare', 'immola', 'frigga', 'malgar', 'ibalao', 'pandit', 'issata', 'protei', 'tufesi', 'nobili', 'eriani', 'supere', 'nipote', 'dataci', 'pilesi', 'rorida', 'tarati', 'trader', 'terrea', 'tanghi', 'nonano', 'fimini', 'peresi', 'flauti', 'deposi', 'lattei', 'cerulo', 'manche', 'sporse', 'decisi', 'groppi', 'raiare', 'neccia', 'ugnalo', 'temono', 'pulche', 'guaine', 'genare', 'camavo', 'lizzai', 'cimavo', 'orbiti', 'ortiti', 'potata', 'aulito', 'orarla', 'sfidar', 'omette', 'bellum', 'maschi', 'measse', 'datone', 'rabona', 'dotane', 'natron', 'sporto', 'inguai', 'riseci', 'parane', 'salava', 'editar', 'acolie', 'babbee', 'scosto', 'mixare', 'ubiera', 'stimai', 'ifugai', 'tesale', 'spechi', 'radone', 'maggio', 'piumar', 'strazi', 'gitani', 'babbei', 'record', 'ittrio', 'danesi', 'piccar', 'redime', 'talmud', 'ortite', 'lidese', 'saprei', 'graffo', 'tenoni', 'bostik', 'ventri', 'svolio', 'dimani', 'riparo', 'aletti', 'tutavo', 'tiravi', 'stenua', 'foggia', 'cubici', 'faleci', 'gemete', 'podice', 'ladina', 'rapito', 'dativo', 'aselli', 'mearmi', 'colata', 'incusi', 'fluire', 'nateci', 'cubalo', 'mescer', 'fateli', 'gesseo', 'landra', 'minugi', 'egioca', 'ritano', 'monadi', 'azigos', 'irrumo', 'chiuse', 'ertolo', 'optane', 'poteva', 'ariete', 'esopei', 'riunto', 'lesina', 'luceva', 'istone', 'mearli', 'gudeno', 'scevri', 'etopea', 'iatine', 'valige', 'slitti', 'ciocci', 'fellah', 'faselo', 'ridono', 'inerii', 'eccoti', 'gabola', 'papagi', 'intesa', 'fasali', 'tenore', 'grinzi', 'crabro', 'secati', 'produr', 'osarlo', 'abbiti', 'zelare', 'oziavo', 'clefta', 'dopati', 'casosi', 'otturo', 'lurker', 'arsita', 'zarose', 'nailon', 'vitata', 'mucose', 'ridota', 'datala', 'vocata', 'sinolo', 'averne', 'tacete', 'dorava', 'erutto', 'evitti', 'dimise', 'altere', 'andate', 'scarpo', 'sfuoca', 'eosine', 'pranso', 'acrani', 'semmai', 'ostale', 'favoli', 'purale', 'farcir', 'famano', 'optale', 'potati', 'sepide', 'inmino', 'medico', 'almuzi', 'scotch', 'permei', 'uggiti', 'limito', 'annoda', 'ardete', 'prilli', 'angolo', 'rilodo', 'sgravo', 'erbita', 'pecten', 'manuca', 'emesso', 'escici', 'fumare', 'uniamo', 'urtala', 'vinaia', 'crocei', 'caboti', 'emette', 'riarsi', 'granai', 'avermi', 'cultor', 'vittor', 'brogio', 'navera', 'samese', 'posami', 'targhi', 'averlo', 'mononi', 'scoria', 'riteme', 'logoff', 'rutica', 'iliade', 'puraci', 'segugi', 'mearlo', 'glotte', 'rifolo', 'liciti', 'sargia', 'efesie', 'rubina', 'cipree', 'immuta', 'drappi', 'zigoma', 'random', 'fetido', 'fannie', 'negava', 'sestar', 'cecato', 'malawi', 'conine', 'specie', 'venali', 'olezzi', 'galega', 'sfisso', 'meonie', 'ammuto', 'lesine', 'sedato', 'retine', 'quorum', 'obroga', 'temute', 'voglia', 'calati', 'olimmo', 'ileale', 'strego', 'casata', 'albino', 'coltri', 'milieu', 'cibano', 'arcato', 'oocito', 'reflue', 'bufalo', 'sganni', 'begato', 'sdiano', 'tirata', 'spiove', 'sperma', 'aulivi', 'comata', 'levavi', 'aurami', 'gelali', 'velina', 'repimi', 'visore', 'dolere', 'ursine', 'ferole', 'fraghe', 'restar', 'urtavo', 'inputs', 'elider', 'illusa', 'armeno', 'rubati', 'stigie', 'motivi', 'lesghi', 'persie', 'rutene', 'morfei', 'semico', 'geresi', 'deseda', 'vivrei', 'castel', 'duetti', 'fanone', 'fruiti', 'inzigo', 'aponia', 'datici', 'jupons', 'timbro', 'venavo', 'sederi', 'stucca', 'aerami', 'icarie', 'peroni', 'stupro', 'unisco', 'iseane', 'aprano', 'deista', 'gangia', 'occupi', 'ririsi', 'lisano', 'dritta', 'macule', 'denaro', 'mazdeo', 'capria', 'boiari', 'ballad', 'ispero', 'triane', 'pilalo', 'fisime', 'pavido', 'riarse', 'camuso', 'bobine', 'orator', 'matesi', 'spular', 'sdirvi', 'livree', 'soniti', 'devoti', 'esibir', 'ramati', 'aporie', 'rabbie', 'olmeto', 'cecero', 'esalti', 'velalo', 'rosaci', 'olirlo', 'squeri', 'parava', 'blando', 'raiale', 'sudoku', 'ardono', 'genami', 'assist', 'teglie', 'ciurma', 'sfarlo', 'canter', 'focili', 'cenano', 'titini', 'miasma', 'scelto', 'imbasi', 'borori', 'umiche', 'afilli', 'barato', 'murice', 'cuddie', 'gavine', 'imponi', 'aliste', 'echide', 'diauli', 'sbendi', 'scegli', 'afelio', 'favosi', 'enfiar', 'derivo', 'femici', 'votiti', 'sfibri', 'fluito', 'ittero', 'sedata', 'bietta', 'pedidi', 'dogame', 'viraci', 'gitici', 'lanati', 'orzaci', 'murari', 'report', 'attino', 'deviri', 'nogano', 'ingioi', 'blande', 'favate', 'tomala', 'iacute', 'natine', 'gazano', 'doglia', 'gasano', 'consta', 'ghezze', 'censir', 'albera', 'membra', 'tupeli', 'carena', 'cerasa', 'ossuto', 'emulsi', 'cavolo', 'saremo', 'bacaio', 'tosano', 'marona', 'miccio', 'alobie', 'perito', 'fumida', 'serena', 'gagate', 'palati', 'parodî', 'dicane', 'canini', 'ospiti', 'lastex', 'gelive', 'litane', 'emerse', 'omeosi', 'ingoia', 'grulle', 'covavi', 'visure', 'riebbe', 'sedure', 'aftosi', 'alcide', 'borire', 'sative', 'sapete', 'intubo', 'blemme', 'smusse', 'vignai', 'curvar', 'spinge', 'lardar', 'bipari', 'famaci', 'colati', 'analda', 'maturo', 'beceri', 'redola', 'donari', 'oreria', 'averli', 'viaggi', 'orcine', 'devano', 'bisomo', 'istorî', 'girava', 'frolle', 'pesami', 'deismo', 'govesi', 'lushai', 'clismi', 'gastri', 'fautor', 'preppy', 'zunese', 'quieti', 'spedii', 'narese', 'ricovo', 'iodami', 'solghi', 'vacale', 'fagali', 'giunga', 'trasla', 'rolino', 'scolli', 'timeli', 'poacee', 'gorghi', 'echini', 'degnar', 'urlate', 'cialde', 'verola', 'aurano', 'encore', 'giudio', 'malesi', 'ancata', 'sedala', 'fusili', 'retavi', 'furaci', 'mistio', 'distai', 'zelose', 'olisse', 'strane', 'olimpo', 'quitte', 'colora', 'triamo', 'ligneo', 'subire', 'vidima', 'guatti', 'ertovi', 'rosole', 'scabre', 'iugula', 'gitala', 'dipesi', 'tedeum', 'caduco', 'lumere', 'tonaca', 'sdosso', 'giravo', 'rabbio', 'cenema', 'patagi', 'vatele', 'sonare', 'orfici', 'vescia', 'granfi', 'gitone', 'furavo', 'sfiata', 'donato', 'aitavo', 'nolare', 'rigano', 'rifidi', 'dopane', 'nomala', 'trinar', 'abbadi', 'biasci', 'ardimi', 'ovoide', 'rumato', 'svenda', 'ostina', 'eterna', 'incuba', 'ladano', 'limavi', 'oscini', 'divana', 'ortana', 'libavo', 'torese', 'calalo', 'spugne', 'opiato', 'sciata', 'cecino', 'castra', 'licito', 'damine', 'disumo', 'arsosi', 'gaetta', 'abradi', 'tordai', 'areami', 'fluori', 'tusani', 'orsini', 'lesemi', 'datile', 'tremai', 'blinda', 'edotte', 'manuco', 'oserei', 'sberle', 'rufole', 'notula', 'cuddia', 'tignai', 'scrofa', 'starci', 'alauda', 'givamo', 'battei', 'rimema', 'spunte', 'cocoon', 'aglifi', 'terrei', 'desalo', 'tuxedo', 'corami', 'musics', 'vomeri', 'baiane', 'imbuto', 'somara', 'longhi', 'libano', 'iterar', 'scalvi', 'vamelo', 'equese', 'porgli', 'bramma', 'vedrei', 'emione', 'skilli', 'trinai', 'intani', 'levese', 'amasie', 'stipsi', 'market', 'agente', 'pseudo', 'fottio', 'ostano', 'onissi', 'livido', 'cedici', 'paiute', 'musavo', 'oidici', 'stimar', 'pilato', 'affamo', 'stidde', 'paperi', 'eccoli', 'nodini', 'shogun', 'nichel', 'bollir', 'virosi', 'canesi', 'raseci', 'modico', 'recile', 'ortosi', 'radule', 'chopes', 'sherry', 'mitigo', 'mohavi', 'siepar', 'spumei', 'tifoso', 'muffar', 'ararlo', 'issano', 'ledile', 'virghe', 'bosine', 'daimon', 'fonala', 'bobbai', 'pinosi', 'vocare', 'vedevo', 'surfer', 'rivedi', 'glocal', 'vitina', 'miglio', 'dolute', 'spando', 'levaci', 'coresi', 'curcas', 'puggia', 'calamo', 'galere', 'dovere', 'estoni', 'soluta', 'citala', 'venalo', 'adatti', 'giremo', 'albume', 'cosare', 'tumori', 'elogia', 'aprici', 'guappi', 'canteo', 'opacar', 'sformo', 'camola', 'gioite', 'velata', 'venata', 'rogate', 'cubate', 'durava', 'ciarlo', 'belava', 'lingua', 'mattia', 'ponghi', 'zonule', 'mollir', 'cristo', 'minava', 'radimi', 'ungimi', 'spicee', 'apollo', 'codini', 'bitube', 'marcai', 'smuoia', 'sciora', 'aurosi', 'chiave', 'eriche', 'piallo', 'pregio', 'alammo', 'elbano', 'fraine', 'amarra', 'saetto', 'urtato', 'nausea', 'rubala', 'zigate', 'papago', 'unisex', 'ergoni', 'covano', 'adduco', 'ridati', 'versoi', 'rutila', 'labaro', 'emunga', 'ortesi', 'scipai', 'gufati', 'zumava', 'cateno', 'rimosi', 'betule', 'emails', 'tifula', 'culavo', 'lesbia', 'hentai', 'aborra', 'conici', 'isarco', 'arcuar', 'adroni', 'tosaci', 'skillo', 'vagire', 'fugate', 'biadai', 'batave', 'melese', 'incava', 'gasoli', 'bataie', 'nganja', 'plance', 'strige', 'mannee', 'caduti', 'semema', 'siepai', 'sdallo', 'triste', 'piloro', 'lisato', 'ornavi', 'betilo', 'arameo', 'eoliti', 'ribevo', 'zamuco', 'aurico', 'paravo', 'passim', 'petulo', 'vocita', 'decime', 'eglino', 'supino', 'buiosi', 'piuria', 'bescia', 'olmesi', 'robini', 'smuovi', 'puccio', 'mitrio', 'habeas', 'sbordi', 'dogami', 'lercia', 'bibite', 'rissar', 'appesi', 'scores', 'renato', 'scabra', 'poteri', 'dentar', 'nivale', 'colcai', 'abbico', 'ripivi', 'dogadi', 'noismo', 'egregi', 'ancude', 'uncino', 'spizzo', 'steady', 'talent', 'sprone', 'nasoni', 'datavo', 'odisti', 'retano', 'erudir', 'bogara', 'pipalo', 'bemino', 'zarosa', 'acutii', 'copion', 'senufe', 'strofi', 'bearli', 'novata', 'linaio', 'sturar', 'resomi', 'zigzag', 'nestai', 'alarmi', 'tiorba', 'cubato', 'algina', 'fedami', 'pelavi', 'empimi', 'balite', 'ursoni', 'asiane', 'salina', 'stinte', 'epurai', 'ammeto', 'pathos', 'datene', 'natole', 'rurali', 'giuggi', 'cesene', 'cerato', 'assese', 'rotear', 'signor', 'almeno', 'caciar', 'tufali', 'rosale', 'sidama', 'gheghi', 'picati', 'astaco', 'gudena', 'iridar', 'fedato', 'redato', 'usuria', 'zampar', 'grabba', 'eslegi', 'figlia', 'tenari', 'coendo', 'fieesi', 'stadio', 'potuto', 'dateci', 'dolato', 'remavo', 'luasso', 'ovante', 'altare', 'lanche', 'limavo', 'adirla', 'arrosi', 'pumini', 'ciocia', 'spillo', 'bulino', 'sedeva', 'beerai', 'alliga', 'untate', 'facete', 'equavi', 'tripli', 'ossibi', 'fasata', 'elevai', 'cicero', 'pauese', 'mirteo', 'codoni', 'cablai', 'invidi', 'tanare', 'franar', 'decana', 'oziati', 'seccai', 'vitala', 'tonami', 'spelee', 'orarci', 'civesi', 'belala', 'quesii', 'tritai', 'urenti', 'godese', 'conghe', 'deduca', 'listai', 'tritio', 'legane', 'novavo', 'medela', 'menato', 'ottrio', 'disiri', 'golden', 'gelivo', 'calere', 'riteso', 'riceve', 'otaria', 'morata', 'allisa', 'sdarne', 'orlane', 'smelai', 'gerani', 'rifida', 'gufaci', 'vedine', 'tecche', 'omagra', 'adirti', 'gitaci', 'morgue', 'visivo', 'sugate', 'mihrab', 'ruzzai', 'infimi', 'etiope', 'resoli', 'trizio', 'andavo', 'raiamo', 'bugnar', 'addire', 'zelami', 'renale', 'empier', 'flauta', 'schino', 'raptus', 'sbruca', 'esulta', 'rissai', 'natele', 'rifuso', 'itteri', 'patulo', 'tuschi', 'macaca', 'pogese', 'biacca', 'vigora', 'pienar', 'fedati', 'coiote', 'vapola', 'vinali', 'rapalo', 'eserte', 'plaudo', 'aspiro', 'nocino', 'agirmi', 'annusa', 'uscite', 'osmosi', 'pavori', 'penami', 'scriva', 'fiacre', 'crauto', 'eleggo', 'crosso', 'oriese', 'enimma', 'tronco', 'afilla', 'artava', 'dotaci', 'cuffia', 'esseni', 'semuti', 'apiari', 'tifare', 'cubebe', 'lamare', 'addava', 'murino', 'venite', 'kazaki', 'adorei', 'saboto', 'datele', 'cosimo', 'briose', 'ascrei', 'erpete', 'sitare', 'fidavi', 'cambio', 'aderto', 'bovolo', 'filosi', 'lincia', 'inarri', 'slemba', 'biking', 'virosa', 'avviso', 'aeraci', 'vomivi', 'arsane', 'scinta', 'scansi', 'tostai', 'cucilo', 'antitg', 'zonuri', 'scanti', 'vacali', 'sativa', 'enigma', 'oleoso', 'cianza', 'preana', 'cavare', 'romene', 'rodite', 'ostica', 'gabbei', 'smosto', 'usurpo', 'morivo', 'mudano', 'altino', 'pulito', 'tornei', 'urgono', 'gasato', 'apriti', 'lividi', 'erotte', 'diruba', 'alacce', 'madida', 'ischia', 'losche', 'masuri', 'usciti', 'pioide', 'zalofi', 'emazie', 'pogane', 'basire', 'ialini', 'cavedi', 'smozzi', 'cicche', 'murava', 'oofora', 'sgabbi', 'alaste', 'fatati', 'drizza', 'sfarci', 'glioma', 'tanica', 'iatesi', 'visiti', 'unimmo', 'arriva', 'seloni', 'civets', 'nudate', 'sopivo', 'zelese', 'evelta', 'recati', 'redini', 'ertaci', 'brezzi', 'anchor', 'aritmo', 'dogala', 'arsure', 'eddici', 'lounge', 'ghiera', 'vulgai', 'escuto', 'acrese', 'daziar', 'crosto', 'lunare', 'augite', 'azzima', 'razzar', 'nebbio', 'gómene', 'areola', 'novizi', 'bueggi', 'domesi', 'spread', 'bacoli', 'fenile', 'furche', 'nudavi', 'sciato', 'tabuli', 'alacri', 'stilbi', 'sanami', 'drongo', 'madidi', 'melico', 'eretar', 'inerme', 'vacele', 'fumati', 'canela', 'maroni', 'refolo', 'freezi', 'banana', 'rotori', 'shahid', 'volghi', 'datori', 'sitino', 'coclee', 'bluffa', 'fattor', 'amorfo', 'celali', 'drizzi', 'lobata', 'sciane', 'stuolo', 'apione', 'tagico', 'musala', 'chatti', 'protio', 'nassia', 'rigemo', 'pendie', 'uditor', 'utopie', 'pendei', 'filoni', 'bugnun', 'glande', 'tesivi', 'iastia', 'cancri', 'olisci', 'tomoli', 'cadmie', 'mutavi', 'quelle', 'vogati', 'palaie', 'fresco', 'adobes', 'eccome', 'menavi', 'panalo', 'binodi', 'posala', 'ansaci', 'poniti', 'topine', 'pofana', 'zonami', 'susine', 'secaci', 'svolii', 'renici', 'abbini', 'invaio', 'strana', 'serbai', 'bavera', 'odiste', 'scorga', 'arrisi', 'litote', 'penosa', 'lamala', 'alerti', 'langua', 'blazer', 'burino', 'scarso', 'debito', 'lontre', 'griffi', 'urtica', 'incola', 'bubato', 'grucce', 'permeo', 'auralo', 'dogare', 'scacco', 'scisso', 'ondami', 'gramar', 'molalo', 'lamino', 'limnea', 'tusana', 'ersero', 'arcano', 'befane', 'dappoi', 'vischi', 'venavi', 'chiavi', 'copule', 'giudea', 'capito', 'nudaci', 'uigura', 'statuo', 'tufino', 'godete', 'eufoni', 'mesici', 'aiuole', 'svolse', 'dervis', 'brumai', 'penica', 'capate', 'rubavi', 'brinda', 'nevole', 'traila', 'bescio', 'sfolti', 'ravano', 'edipeo', 'invela', 'itrano', 'arealo', 'panale', 'sasseo', 'sugavi', 'noceti', 'rattar', 'pallar', 'scader', 'aritma', 'vedove', 'ferodi', 'fonare', 'mpondo', 'quella', 'blemmo', 'chiodi', 'topaia', 'crochi', 'difese', 'civaie', 'dilago', 'brecce', 'inetta', 'ercoli', 'zigoli', 'limose', 'acetai', 'ornala', 'flotta', 'divago', 'accoda', 'inviti', 'chiamo', 'svende', 'salivi', 'smalti', 'gridio', 'santon', 'galena', 'secchi', 'piroga', 'litigi', 'aprili', 'staffo', 'spreca', 'tubavo', 'distar', 'lanuti', 'votami', 'diurno', 'jobber', 'macusi', 'accado', 'scrima', 'olfale', 'sanate', 'vilato', 'harura', 'istati', 'lacche', 'padina', 'aperte', 'domite', 'snevai', 'novami', 'quassi', 'dicesi', 'azione', 'spormi', 'fronde', 'sviala', 'rosbif', 'frusci', 'binubo', 'fecola', 'surfar', 'ridile', 'grasce', 'abnega', 'alasse', 'peccio', 'teroni', 'varcai', 'picata', 'ernico', 'corame', 'aruaco', 'rimalo', 'delete', 'mediai', 'bucala', 'travio', 'altana', 'ialite', 'muridi', 'moraci', 'scille', 'storni', 'elceto', 'curare', 'gaffes', 'segosa', 'cocche', 'updata', 'ficcai', 'gemmeo', 'intelo', 'ledine', 'recisa', 'solati', 'gelavi', 'fluoro', 'preste', 'ideaci', 'niubbo', 'hazard', 'plaghe', 'mulare', 'lulese', 'rediva', 'didime', 'aftosa', 'lepide', 'ziacce', 'casati', 'spenta', 'ossuti', 'ferasi', 'secami', 'ondane', 'fatino', 'motori', 'editio', 'astina', 'rugali', 'haikai', 'carici', 'scenda', 'adugno', 'vacuai', 'cloche', 'vanita', 'rubano', 'avanzo', 'scepsi', 'sudici', 'scosso', 'setale', 'norica', 'smodar', 'fluate', 'cacalo', 'aprono', 'mikado', 'ormavo', 'esorna', 'baliti', 'zillai', 'patico', 'cacava', 'sfalla', 'volley', 'trismo', 'minuto', 'epigeo', 'odissi', 'petasi', 'lusori', 'istalo', 'rigida', 'illesa', 'sapore', 'cecubi', 'salare', 'girati', 'lavina', 'cenosi', 'nuotai', 'ruinar', 'gudesi', 'noveri', 'dotavi', 'trasso', 'eolica', 'smezzi', 'scelti', 'pisoli', 'clorai', 'chioso', 'dosati', 'ciocie', 'sonata', 'alcidi', 'rancar', 'chalet', 'finito', 'basolo', 'tardar', 'sfalli', 'ardito', 'seduta', 'cubata', 'cardar', 'olente', 'redavo', 'ricala', 'gudese', 'ottino', 'pezize', 'debita', 'gonfia', 'pipate', 'lugana', 'baiana', 'olmaia', 'tarpea', 'vimaci', 'redata', 'twitto', 'assumo', 'ricavo', 'dolmen', 'patano', 'filari', 'dativa', 'limine', 'sapeva', 'apteri', 'donane', 'ferine', 'evacuo', 'aquari', 'aragni', 'nasare', 'usarsi', 'cerava', 'fusoli', 'genero', 'corici', 'pirica', 'leseti', 'servir', 'figuri', 'suaria', 'fusami', 'esimia', 'aurici', 'dritti', 'arpica', 'studio', 'susane', 'leardi', 'cecini', 'trochi', 'uncina', 'calavi', 'trozze', 'linnea', 'tirage', 'teucra', 'scozie', 'fusile', 'girini', 'bionte', 'negali', 'brando', 'diurna', 'bipedi', 'regalo', 'vedute', 'tirate', 'sonore', 'tanali', 'strass', 'agenti', 'graspo', 'asciai', 'artavo', 'rattan', 'aprico', 'carrai', 'ulcere', 'malica', 'monere', 'astilo', 'gabale', 'corsia', 'flegga', 'giorni', 'palalo', 'apiati', 'zelata', 'obrizi', 'lotica', 'ermini', 'annate', 'favoni', 'legaci', 'oziamo', 'zuppar', 'glabri', 'usassi', 'azotai', 'stolza', 'foioso', 'crabri', 'lecita', 'svotai', 'refluo', 'vanalo', 'pipili', 'binavi', 'copino', 'creoli', 'sagini', 'odiava', 'generi', 'ledano', 'bucato', 'guaiva', 'lumala', 'murare', 'ramose', 'artata', 'braghi', 'annasi', 'spense', 'favini', 'querce', 'gessei', 'afgana', 'armali', 'mutare', 'tutano', 'espilo', 'falsai', 'marzie', 'liutai', 'canina', 'tranci', 'furato', 'tidale', 'jungla', 'dicace', 'svuoti', 'curava', 'cencro', 'istmio', 'dasipi', 'chioda', 'infuse', 'bisavi', 'macino', 'avania', 'caddie', 'crealo', 'perdio', 'melare', 'cavalo', 'caroti', 'ledete', 'volani', 'reciso', 'eluite', 'veroni', 'esulti', 'papage', 'vallea', 'inumar', 'dolalo', 'mutato', 'orzavo', 'katana', 'spente', 'guerii', 'semaie', 'baroni', 'rinoto', 'foladi', 'disiro', 'federi', 'effugi', 'peluto', 'agisce', 'giudee', 'varavo', 'gigaro', 'favori', 'afrose', 'guappo', 'corsie', 'defedi', 'fedain', 'addane', 'zenith', 'macaco', 'rostri', 'dolino', 'gruppo', 'manneo', 'strido', 'metopi', 'polone', 'ergone', 'musone', 'sagite', 'mirtea', 'cosami', 'gasaci', 'maccar', 'ziesca', 'nerbai', 'abbimi', 'potaci', 'relego', 'lamina', 'arrogo', 'piagge', 'seller', 'aspira', 'allisi', 'erbato', 'menade', 'rasare', 'anarco', 'sduoli', 'sfiati', 'peposa', 'mutati', 'skunks', 'cumana', 'venine', 'rasine', 'ipetri', 'tacine', 'tranar', 'idrato', 'sagito', 'grullo', 'freghi', 'culdei', 'fioche', 'sonino', 'titani', 'gommar', 'rapaio', 'ziraia', 'negami', 'rugava', 'eusine', 'datati', 'frigia', 'gaudio', 'turavo', 'mousse', 'riunta', 'emersa', 'abasie', 'onrava', 'coseni', 'suites', 'storsi', 'cariba', 'scanno', 'funeri', 'cecubo', 'quater', 'riurti', 'abduce', 'succio', 'vaglio', 'rivogo', 'marine', 'ramava', 'dinega', 'stevie', 'deliro', 'zalofo', 'frappe', 'mandia', 'impili', 'gavoni', 'stilai', 'rifina', 'ignare', 'raiala', 'densar', 'colbac', 'mentis', 'ervese', 'datate', 'ninfea', 'orobie', 'cerica', 'sfocio', 'oblane', 'cornar', 'lupoma', 'alarsi', 'grufar', 'putito', 'esprit', 'libera', 'baravo', 'gelesi', 'trofia', 'posare', 'litica', 'gazavi', 'cottoi', 'dacici', 'godevi', 'eterne', 'vasare', 'bacino', 'sbrama', 'bastia', 'negati', 'cabine', 'epigei', 'colici', 'mazdee', 'ispera', 'crambe', 'aliese', 'franta', 'bibula', 'ostola', 'qenita', 'andava', 'mandea', 'delima', 'datato', 'druidi', 'pogavo', 'addati', 'aperto', 'entasi', 'bulato', 'sfissi', 'evelto', 'inerte', 'pashtu', 'scorce', 'rinvia', 'notaro', 'zanata', 'attesa', 'chiudi', 'anditi', 'sparto', 'tesoli', 'purate', 'acetii', 'irroga', 'vanati', 'vecchi', 'cosata', 'derisa', 'vagati', 'rimale', 'aurino', 'recipe', 'telavo', 'abisso', 'trojan', 'latine', 'stivai', 'quelli', 'gazati', 'escopi', 'numera', 'avvedi', 'vimate', 'suppor', 'vocito', 'versta', 'orinai', 'maccai', 'pianta', 'morbie', 'galghi', 'vatela', 'fonalo', 'scalmi', 'ossuta', 'pogano', 'anfibi', 'ammalî', 'massai', 'focaie', 'faremo', 'botolo', 'gassar', 'stizzo', 'ergile', 'peleli', 'pulica', 'mutava', 'acline', 'trarci', 'errore', 'voluti', 'casere', 'forare', 'nomica', 'smanta', 'cafone', 'esedre', 'vitavi', 'rigeme', 'levavo', 'biosio', 'urista', 'bossee', 'sugare', 'ripilo', 'venate', 'durate', 'ugrica', 'tesene', 'filate', 'trusts', 'liberi', 'samesi', 'lesoli', 'sciate', 'nodosi', 'piaghe', 'visali', 'ronchi', 'uvarie', 'alarci', 'ereggo', 'obrogo', 'aliavi', 'frutta', 'zompai', 'immeli', 'iridea', 'nomine', 'vociar', 'amoree', 'fatele', 'scheda', 'rapano', 'nutrii', 'plebeo', 'retati', 'sabato', 'papaie', 'rateai', 'tuonar', 'fisami', 'pavore', 'acorni', 'dotami', 'ronzio', 'abrase', 'pelano', 'elaidi', 'dianti', 'smallo', 'svasso', 'proavo', 'stupor', 'dosava', 'pialli', 'arsene', 'trotta', 'fusesi', 'abiuro', 'gliali', 'rivoto', 'tutaci', 'poccia', 'ottone', 'argina', 'menino', 'ludico', 'lenzar', 'dosano', 'sganci', 'unghie', 'affare', 'solare', 'fregia', 'pilota', 'spreco', 'statui', 'bitini', 'fiesta', 'ciccar', 'stomia', 'annoso', 'darasa', 'aliava', 'ulnare', 'aitata', 'deboli', 'risani', 'redova', 'pokomi', 'cosaci', 'aralia', 'svuoto', 'domani', 'ammiri', 'ricalo', 'spelli', 'venano', 'nevata', 'atelia', 'compro', 'tageti', 'pregai', 'bulare', 'sgusta', 'muralo', 'nomane', 'salame', 'alalie', 'ruvida', 'mudaci', 'urtone', 'ancisi', 'lapite', 'scuota', 'patana', 'rabuli', 'boleto', 'subiva', 'vision', 'egenza', 'fetale', 'rifino', 'nativo', 'tebane', 'nachos', 'cripti', 'rifeci', 'cardia', 'metodi', 'shocks', 'diteci', 'adorno', 'govese', 'fissar', 'frotta', 'adulto', 'blinis', 'zooeci', 'aprica', 'litura', 'tetica', 'tipici', 'bagher', 'sirena', 'stonda', 'cebidi', 'agorai', 'odiami', 'letama', 'adimmo', 'renana', 'alvino', 'genano', 'purare', 'luridi', 'yachts', 'pomeri', 'cieche', 'nugole', 'nonani', 'dolava', 'vapore', 'lisavo', 'elbane', 'zonesi', 'semole', 'venare', 'boccai', 'lenito', 'filets', 'orlato', 'annusi', 'dadoni', 'condur', 'agirci', 'vicesi', 'siluro', 'imposi', 'escuta', 'mucine', 'sgalla', 'adunar', 'scisti', 'scroto', 'menapi', 'elmati', 'adulti', 'ghigna', 'poltro', 'ohmici', 'accasi', 'acusma', 'rivolo', 'lignea', 'infama', 'optare', 'vistai', 'nudala', 'rispio', 'vrisea', 'ottavo', 'gauder', 'tomaie', 'irrogo', 'guitti', 'orride', 'gasosa', 'odiane', 'atollo', 'camici', 'gemeva', 'banani', 'elione', 'sporco', 'lumare', 'uplink', 'bonobo', 'chiose', 'flocco', 'micina', 'upload', 'pinoso', 'segona', 'cuponi', 'matita', 'irradi', 'stidda', 'parure', 'manone', 'roffia', 'borite', 'repili', 'adirlo', 'agnino', 'sfondi', 'fusate', 'esitai', 'eluita', 'ideava', 'trucci', 'lesavi', 'sacrai', 'fumido', 'maceri', 'vandea', 'ultore', 'agitai', 'plaids', 'bearsi', 'paciai', 'costei', 'monade', 'isolai', 'salama', 'ambivi', 'dianto', 'culata', 'baiala', 'aborto', 'fusoci', 'svesci', 'ascosi', 'locono', 'ostato', 'famuli', 'alfana', 'recava', 'oblite', 'atroce', 'sbaula', 'pomose', 'amarvi', 'trarlo', 'estima', 'situla', 'evinti', 'potate', 'cookie', 'nucate', 'inziga', 'patena', 'indura', 'basane', 'erniai', 'spossa', 'redire', 'arsivi', 'nucale', 'risiko', 'vallai', 'ciacco', 'puzzar', 'sfesso', 'issaci', 'mucidi', 'praxis', 'bolgia', 'istiga', 'orzavi', 'gobidi', 'ramata', 'natavo', 'adugna', 'abcaso', 'frogia', 'ospizi', 'cruise', 'scerbi', 'zotico', 'aulico', 'oofago', 'tifone', 'pauesi', 'ulcero', 'ipoide', 'mutasi', 'reflua', 'suggio', 'tubini', 'ballar', 'filane', 'climax', 'planar', 'bifido', 'kaputt', 'osanna', 'locali', 'vergei', 'moncai', 'arguir', 'gelano', 'vanear', 'guachi', 'smosso', 'rutato', 'mantra', 'geishe', 'ducali', 'catodo', 'crassa', 'svitar', 'salumi', 'seppio', 'secane', 'indolo', 'tisici', 'salice', 'mixato', 'ferrei', 'vigoro', 'opponi', 'cenati', 'aloidi', 'orbino', 'cantai', 'riabbi', 'scismi', 'volari', 'ottano', 'sbeffa', 'sodalo', 'ispani', 'acresi', 'rabone', 'sfarvi', 'rutesi', 'ceride', 'camber', 'ippico', 'linoso', 'calidi', 'canele', 'blende', 'scroci', 'emessi', 'pogaci', 'risaie', 'tuguri', 'vitone', 'vagita', 'secura', 'spiche', 'aurica', 'smocci', 'stokes', 'smelar', 'setoso', 'omiano', 'melleo', 'gliare', 'alzalo', 'murici', 'mimare', 'smalli', 'coluri', 'scevre', 'tagica', 'repine', 'elaide', 'sbraga', 'risvio', 'riviro', 'urlona', 'seduca', 'baravi', 'isteri', 'derima', 'canese', 'capini', 'ossidi', 'tonaci', 'agnina', 'getulo', 'celiai', 'tassar', 'ciocce', 'rirido', 'mutano', 'ertoti', 'empide', 'ignudi', 'bisava', 'ottono', 'ambula', 'pepata', 'stacco', 'ioduri', 'sonane', 'omaggi', 'ormato', 'eguali', 'noceto', 'ialine', 'barzoi', 'fasami', 'bagnar', 'padane', 'perire', 'rating', 'butino', 'scrive', 'bagobi', 'tardai', 'pareri', 'litava', 'orbava', 'binare', 'olmese', 'grassa', 'sranan', 'acervo', 'oliano', 'mitema', 'tempio', 'metolo', 'recede', 'tonala', 'ripeli', 'grosso', 'geoidi', 'asiano', 'cerner', 'botola', 'tagete', 'rivado', 'botrio', 'spensa', 'eboidi', 'canopo', 'elegie', 'albico', 'accodi', 'zigava', 'picide', 'difesi', 'sbirbi', 'selfie', 'ambiai', 'domare', 'ramaia', 'minare', 'bolidi', 'acarpe', 'haruri', 'oleino', 'colini', 'simici', 'astici', 'maquis', 'tuorli', 'olezza', 'termie', 'ragnar', 'piatta', 'roncai', 'seuesi', 'vostre', 'pavesi', 'faccia', 'difila', 'boogie', 'anosia', 'colano', 'caduca', 'infero', 'ertone', 'badare', 'deludi', 'gioiva', 'giugno', 'licena', 'bibita', 'sailer', 'buffar', 'bucine', 'iatina', 'adnato', 'gustar', 'saliva', 'tomali', 'poltri', 'validi', 'quetar', 'boiaro', 'astuto', 'senone', 'ducare', 'muravi', 'lamale', 'pendia', 'brenta', 'arenai', 'adiuvo', 'soduci', 'domito', 'ciotti', 'auguro', 'derimi', 'stinge', 'epeira', 'cumoli', 'ramage', 'risina', 'stoino', 'romiti', 'snobbo', 'zigala', 'centum', 'avveni', 'spende', 'pogale', 'careno', 'trioni', 'fetola', 'dramme', 'incoar', 'sbuzza', 'franto', 'moriva', 'raiano', 'cadevo', 'decisa', 'ubiqui', 'dicami', 'untosi', 'argute', 'penule', 'sborsa', 'lemure', 'egagri', 'ferali', 'bubolo', 'grinzo', 'nogaci', 'limami', 'motard', 'fasava', 'gasami', 'stalla', 'mirrar', 'stipar', 'capata', 'jivare', 'plugin', 'agiata', 'aratro', 'addico', 'bufala', 'capare', 'votale', 'trarti', 'sorite', 'lupaia', 'svario', 'fasano', 'inasta', 'asseto', 'scorse', 'triava', 'demico', 'gheghe', 'ormala', 'perula', 'mozabi', 'empiti', 'salvia', 'ottava', 'semaia', 'mirici', 'cadmee', 'rimemi', 'minuti', 'piropi', 'moksha', 'meriti', 'rimixi', 'andavi', 'potavo', 'calene', 'bifora', 'ammari', 'untiti', 'chinar', 'ritmar', 'alarli', 'fumali', 'spurgo', 'solima', 'adusai', 'presse', 'avente', 'demani', 'putrir', 'banali', 'sorato', 'pipale', 'dolchi', 'oremus', 'crollo', 'untivi', 'libami', 'spiumo', 'tondar', 'immolo', 'gringo', 'desedi', 'amarci', 'datili', 'macolo', 'rovani', 'nevoso', 'scolio', 'mappai', 'risate', 'oreadi', 'predai', 'torosa', 'ufizio', 'repiti', 'pareva', 'zumala', 'setoni', 'soviet', 'scoops', 'tifava', 'emendo', 'scanni', 'cetine', 'stenuo', 'cerque', 'ribeca', 'grippo', 'aderbi', 'bypass', 'acaici', 'covava', 'micine', 'viuzza', 'levame', 'sedino', 'sborre', 'posche', 'cetera', 'pisano', 'sifono', 'supina', 'spassi', 'rugare', 'iucche', 'atonie', 'orasse', 'avviti', 'salito', 'grugno', 'dirute', 'uccidi', 'attila', 'teodem', 'ardevi', 'truche', 'lellar', 'sfreno', 'malfar', 'borici', 'suerte', 'decima', 'abbilo', 'fatico', 'sgolai', 'emendi', 'mattie', 'badili', 'volavi', 'purami', 'psilli', 'merore', 'curane', 'aratri', 'bistra', 'mobili', 'ripeta', 'zonaro', 'raspai', 'kippah', 'tutino', 'jonica', 'nolana', 'spenso', 'dubiti', 'coolie', 'cavate', 'rigato', 'nevato', 'monema', 'serate', 'virino', 'omenti', 'consai', 'annero', 'evoici', 'cabilo', 'balani', 'rotula', 'natasi', 'lulesi', 'rasile', 'sgessa', 'sabine', 'sdarvi', 'shunti', 'sgobbo', 'vilito', 'olgese', 'capati', 'living', 'aprivo', 'ognora', 'ridavi', 'glissi', 'elenca', 'cotile', 'polono', 'oblavi', 'ludica', 'mutalo', 'emonio', 'codali', 'remota', 'dosino', 'paffii', 'gaufre', 'olfami', 'crespo', 'picnic', 'sbobbe', 'tesoro', 'trarli', 'smiles', 'sfoggi', 'odendo', 'sadica', 'pianse', 'tassia', 'ertili', 'trecca', 'gremio', 'fedino', 'ansime', 'avvoca', 'ostali', 'tanata', 'ardici', 'litico', 'sniffi', 'arcame', 'orette', 'salali', 'scelte', 'tempon', 'gratto', 'calcio', 'tetano', 'flesso', 'impano', 'sterpa', 'ammeta', 'cimava', 'pascei', 'gessar', 'rasato', 'svaria', 'andari', 'mirami', 'emende', 'cenavi', 'rurale', 'peplum', 'arsala', 'salume', 'petavo', 'liguri', 'desman', 'adopri', 'stondi', 'rosoci', 'epigea', 'sinide', 'candir', 'vivilo', 'mixata', 'attese', 'emunto', 'esorai', 'burini', 'fondue', 'arbuti', 'bluray', 'ansate', 'cacico', 'renala', 'colale', 'abrogo', 'eniani', 'scolma', 'grammi', 'troppo', 'redige', 'vegeta', 'enopli', 'congro', 'arpono', 'palare', 'ordivo', 'adunca', 'sdolga', 'escavi', 'bosano', 'seduto', 'ritace', 'eniana', 'evella', 'lumavi', 'sviamo', 'eddico', 'rovana', 'eniano', 'pagava', 'duetta', 'timide', 'girete', 'gralli', 'rilavo', 'affisi', 'vanaci', 'alzata', 'ornava', 'thetan', 'umanar', 'vangai', 'addali', 'aerato', 'dioici', 'stremo', 'ertimi', 'pranzi', 'carpet', 'pipaie', 'achire', 'gestir', 'troupe', 'grivne', 'dadino', 'tatuai', 'smotte', 'abbiam', 'fatano', 'pacale', 'mumble', 'ciarpo', 'canvas', 'citano', 'guatai', 'orfano', 'beviti', 'mudali', 'condro', 'trombi', 'sberla', 'riloca', 'sudale', 'rivoco', 'sidami', 'forato', 'velato', 'aramei', 'arponi', 'averta', 'stonii', 'racchi', 'kicker', 'molcii', 'ofiasi', 'pilote', 'bounty', 'croati', 'lenivi', 'whisky', 'vogava', 'telane', 'recide', 'adorni', 'covone', 'adnata', 'stempi', 'sblusi', 'trarmi', 'dimuto', 'brexit', 'segami', 'snipes', 'techno', 'nodulo', 'calavo', 'rivivi', 'ottale', 'dittee', 'straba', 'tondei', 'dipnoi', 'cedimi', 'trullo', 'rivien', 'tomaci', 'usseri', 'posate', 'uffete', 'teismo', 'rapava', 'pirili', 'roravo', 'prugni', 'latino', 'orbavi', 'grampo', 'pacesi', 'lemica', 'annido', 'pogava', 'aloina', 'ladino', 'fuggir', 'gitoli', 'patane', 'topone', 'smisto', 'capivo', 'federe', 'purini', 'allumo', 'ranche', 'bacava', 'arpone', 'cobiti', 'volage', 'golene', 'brillo', 'limate', 'ierico', 'odirla', 'pubici', 'pesava', 'gotici', 'slitta', 'nutrir', 'mencio', 'amator', 'musivo', 'cacona', 'calori', 'alluna', 'flegma', 'vegano', 'inches', 'scopie', 'grolle', 'ditteo', 'volevi', 'tubale', 'common', 'morfeo', 'addano', 'cigolo', 'ergimi', 'fimino', 'cromai', 'volsco', 'rogavo', 'sinico', 'eriana', 'idrope', 'sbitta', 'targar', 'spinse', 'virare', 'sfarsi', 'mutica', 'bailey', 'boiara', 'fiondi', 'narina', 'telali', 'incuto', 'cripta', 'bubare', 'enarra', 'impipi', 'adibir', 'sitter', 'funami', 'arrota', 'assisa', 'evochi', 'giunti', 'portar', 'incoia', 'braivo', 'terger', 'ariani', 'rimmel', 'daunia', 'paludo', 'rimina', 'ceromi', 'ecista', 'sterra', 'frappo', 'grazie', 'cibate', 'silura', 'barite', 'dubbio', 'adular', 'cembra', 'driadi', 'mutino', 'gazale', 'sviare', 'bionda', 'stoiai', 'natoti', 'ridico', 'lesomi', 'adagio', 'ratiti', 'sirima', 'erbesi', 'sifoni', 'blazar', 'semuta', 'tosone', 'erpica', 'deaeri', 'usarne', 'aizzar', 'cosino', 'pelavo', 'fixing', 'vacati', 'truzza', 'bearti', 'forche', 'linceo', 'nestar', 'bagobe', 'iodaci', 'sabota', 'glisso', 'destai', 'ambita', 'fiacca', 'nudata', 'spiati', 'litigo', 'derubi', 'imbaso', 'lepido', 'sudava', 'nocivi', 'impelo', 'cascio', 'rondai', 'oriesi', 'spurai', 'interi', 'locare', 'impali', 'apuane', 'biloba', 'eleggi', 'audito', 'mudata', 'paride', 'prenzi', 'pepali', 'galate', 'matero', 'cactus', 'filala', 'felide', 'accuso', 'stogar', 'svetti', 'flamba', 'normai', 'smielo', 'ertale', 'rivuoi', 'gioiti', 'refili', 'cessai', 'greche', 'zonate', 'spinti', 'resedi', 'nubilo', 'urlavo', 'nencia', 'coltra', 'attica', 'concio', 'induci', 'avvini', 'tosala', 'catari', 'decino', 'piazza', 'piloso', 'sdirmi', 'baglio', 'mugico', 'sarong', 'pedone', 'fonato', 'povere', 'achivo', 'appara', 'smetti', 'spiavi', 'musivi', 'bibaci', 'boxare', 'tucani', 'pospor', 'ciazio', 'famale', 'arinie', 'ducalo', 'mancar', 'ircana', 'symbol', 'aviare', 'sesamo', 'aspide', 'lottar', 'alpini', 'zelote', 'pelose', 'smuori', 'inusto', 'cabile', 'fumari', 'ghinda', 'ostico', 'bipala', 'sgallo', 'narici', 'fatica', 'blasmi', 'sepalo', 'permea', 'pavana', 'sdenta', 'triage', 'brogli', 'radici', 'tastar', 'arcate', 'mauser', 'miopie', 'meropi', 'vivida', 'pigmei', 'tiponi', 'ariano', 'sileni', 'diluir', 'prisca', 'spatri', 'cimice', 'rafide', 'alloca', 'teneva', 'maonia', 'chiusi', 'beaste', 'fruita', 'sbasir', 'vimini', 'blanda', 'dinari', 'picara', 'acheni', 'bucati', 'nsenga', 'diedre', 'direno', 'fedavi', 'cromie', 'borati', 'soravi', 'acacia', 'decade', 'virile', 'ibride', 'bubami', 'aitino', 'ceneri', 'abbile', 'nogala', 'aprile', 'sibili', 'deleto', 'voluto', 'scorna', 'sanavi', 'cambra', 'bronco', 'amarne', 'stammi', 'boiler', 'renati', 'franci', 'sitato', 'slarga', 'brille', 'retavo', 'turava', 'cerazi', 'spumar', 'iterai', 'evolva', 'lucidi', 'infame', 'odiale', 'lagune', 'veggia', 'orbavo', 'nitide', 'arcana', 'poderi', 'dimeno', 'conflo', 'cerami', 'severi', 'capino', 'cennai', 'navale', 'addono', 'migali', 'citata', 'onrale', 'limoni', 'rifasi', 'sagena', 'mirate', 'guglia', 'toppai', 'macero', 'dacica', 'smanio', 'nuocer', 'inulto', 'adisco', 'ustosi', 'sinese', 'manosa', 'parute', 'cebide', 'osmico', 'rovino', 'lenzai', 'deluse', 'evinca', 'acaule', 'sbaffo', 'risano', 'cenate', 'ungine', 'varane', 'nocive', 'tappar', 'malare', 'manque', 'figaro', 'falcar', 'binuba', 'endica', 'dosalo', 'nocese', 'smista', 'navaho', 'mostra', 'cantra', 'traino', 'mangia', 'risala', 'brenne', 'rasale', 'vessai', 'gonese', 'ioliti', 'gigari', 'basate', 'ungari', 'sapote', 'resoci', 'sanane', 'facile', 'zumata', 'vilati', 'redali', 'smilzo', 'lanina', 'evello', 'bugino', 'ghiare', 'oliste', 'erniar', 'unirli', 'nostri', 'alogia', 'grandi', 'sfinir', 'libati', 'gazare', 'pedala', 'frisia', 'lupara', 'zigana', 'capone', 'allora', 'spadai', 'corozo', 'cobite', 'usuali', 'notala', 'auliti', 'silvie', 'bugiar', 'smegmi', 'palude', 'adersi', 'clorar', 'redigi', 'esuvie', 'avveri', 'orzale', 'efirei', 'faccio', 'rigido', 'ungule', 'visami', 'stizze', 'bogare', 'datosi', 'emungo', 'sabbia', 'svolge', 'vicini', 'oceani', 'ossido', 'volpon', 'spandi', 'truffi', 'morala', 'numero', 'smezza', 'rumalo', 'uzzese', 'essena', 'bavoso', 'tarsie', 'musavi', 'novala', 'indaga', 'mondai', 'canora', 'pososi', 'brocci', 'marina', 'tapini', 'elafro', 'nettai', 'momesi', 'triala', 'offesi', 'scisma', 'erutta', 'spaesa', 'tombar', 'cumulo', 'misero', 'riloga', 'latiro', 'venote', 'congri', 'miceti', 'forgia', 'utente', 'funaio', 'lesone', 'nucato', 'stango', 'pregni', 'lenoni', 'cufico', 'goduto', 'vociai', 'ghiado', 'camino', 'agresi', 'serqua', 'ondina', 'raiavo', 'terzia', 'igrina', 'gialla', 'rocche', 'dittea', 'altura', 'vinale', 'zigomo', 'folate', 'azygos', 'sminar', 'bomata', 'rettai', 'odiala', 'trilla', 'trarla', 'badava', 'sonavo', 'geliva', 'menola', 'ziacci', 'traile', 'giubba', 'ostolo', 'tufala', 'risolo', 'lesura', 'incero', 'spumea', 'cabina', 'ioidei', 'bramme', 'rigode', 'levali', 'segate', 'strini', 'rumble', 'bolina', 'piazzo', 'putter', 'rastri', 'atolli', 'sterpe', 'argini', 'meiate', 'storse', 'virane', 'boruro', 'armare', 'bipoli', 'anatra', 'scappi', 'echidi', 'semiti', 'amarmi', 'raschi', 'balbai', 'ugnate', 'traete', 'aduste', 'beasse', 'rodono', 'laschi', 'graffe', 'schini', 'cecidi', 'mister', 'roggio', 'luposo', 'tegole', 'pagale', 'tebani', 'cadere', 'venuta', 'fieese', 'tabidi', 'coisca', 'fisala', 'bergli', 'letame', 'cecavi', 'redalo', 'sviami', 'surger', 'nebbia', 'chiavo', 'pressa', 'ruggir', 'licite', 'nomali', 'avulsi', 'zonula', 'musino', 'mozaba', 'trippa', 'patrio', 'genita', 'verghe', 'pedoni', 'coisco', 'appone', 'burina', 'scinto', 'seitan', 'palavi', 'mazica', 'incuso', 'ertoci', 'annuso', 'suacia', 'boiate', 'inulti', 'stabbi', 'usarla', 'filona', 'teatro', 'osmite', 'recane', 'replay', 'raccar', 'ariana', 'mimavo', 'alliba', 'sbafai', 'nurses', 'equane', 'toques', 'smalto', 'tanato', 'tonchi', 'acquis', 'dotate', 'dovevo', 'odirle', 'lagosa', 'indago', 'speoti', 'cesure', 'arsura', 'iniqua', 'hedges', 'pluvio', 'culaia', 'transa', 'mishmi', 'gaette', 'rigeli', 'dipana', 'focato', 'zopolo', 'piagar', 'lanose', 'aitale', 'tenete', 'ferale', 'orarle', 'gonidi', 'zelosi', 'frizza', 'nottue', 'lavino', 'cenata', 'dosare', 'rovano', 'ottuso', 'andria', 'trilli', 'dumosa', 'areali', 'densai', 'sdirai', 'cotono', 'pitoni', 'sciuro', 'ponevo', 'uzzato', 'lironi', 'cestai', 'gotico', 'nevale', 'elgone', 'arriso', 'tonfar', 'efimni', 'embolo', 'qwerty', 'ridoro', 'pronao', 'pososo', 'esente', 'biette', 'tufava', 'pogala', 'ducevo', 'perivo', 'pumino', 'radice', 'alzali', 'lovale', 'scampa', 'perder', 'minami', 'temili', 'dilati', 'spolpi', 'grafie', 'vacuar', 'slatto', 'fragne', 'parafo', 'famala', 'tannai', 'smussi', 'alarle', 'rapivi', 'remavi', 'impara', 'ornaci', 'cedila', 'nevola', 'vistar', 'furate', 'ionica', 'pomosa', 'sfrega', 'errata', 'famule', 'frimai', 'ridilo', 'docile', 'polana', 'cedrai', 'felina', 'ideati', 'modula', 'limati', 'amigos', 'pussai', 'gudene', 'banane', 'ulviti', 'poltre', 'stevia', 'vestii', 'pieese', 'danzar', 'spremo', 'dehors', 'serine', 'orobii', 'ladako', 'pipato', 'vicani', 'servai', 'duchee', 'stolta', 'bubaci', 'casona', 'sidamo', 'grulla', 'pander', 'corono', 'segano', 'premer', 'sbeffo', 'flotti', 'rapavo', 'bossea', 'omento', 'userei', 'esigei', 'reseda', 'queste', 'smonti', 'mapper', 'zonino', 'canili', 'lanidi', 'stimmi', 'tacche', 'plauda', 'notale', 'rotini', 'ondose', 'gufami', 'tesino', 'miauli', 'tesane', 'vogali', 'cosima', 'godili', 'donano', 'igniti', 'legalo', 'vastai', 'modero', 'tumulo', 'folica', 'crebra', 'vorrei', 'pavide', 'spaiar', 'peneio', 'lisine', 'jesino', 'smuova', 'sbitto', 'clipeo', 'provai', 'ridite', 'ridavo', 'cuschi', 'pausai', 'lanare', 'nogavo', 'figlie', 'intime', 'gitavi', 'giudia', 'crazie', 'vamela', 'diaulo', 'triale', 'rasisi', 'lapidi', 'rattai', 'ricevo', 'boomer', 'lupino', 'bienni', 'cristi', 'avvivi', 'radete', 'immuri', 'spulci', 'liccio', 'pensee', 'favaio', 'notari', 'ugnala', 'secata', 'cacare', 'ionone', 'urbica', 'decuri', 'goduta', 'salici', 'latere', 'nevati', 'timidi', 'arrote', 'inizio', 'spoils', 'leciti', 'rapida', 'cracki', 'lumaio', 'aerava', 'zipola', 'pigidi', 'sonato', 'fedane', 'virate', 'debite', 'dilimi', 'nomadi', 'indoma', 'detoni', 'lumaca', 'astiai', 'biotto', 'cinzio', 'abolir', 'sodava', 'vomico', 'resili', 'armeni', 'enfant', 'sfugge', 'mitici', 'renaci', 'lagosi', 'teseci', 'volumi', 'torico', 'sugala', 'didimo', 'fusisi', 'depili', 'jacket', 'aiutai', 'smicci', 'figure', 'caucus', 'cerqua', 'adonti', 'simidi', 'milote', 'zigare', 'grammo', 'vaneai', 'nudare', 'palesi', 'crucca', 'sonaci', 'livesi', 'sfrido', 'mimesi', 'applet', 'iulche', 'colalo', 'ciuffi', 'viveri', 'fusion', 'doline', 'tufavi', 'bovini', 'decida', 'tanfai', 'florei', 'cattar', 'beassi', 'trosce', 'jojoba', 'caldai', 'tomati', 'spiami', 'mobber', 'gasino', 'klimax', 'ulmica', 'divori', 'arreca', 'votano', 'spiova', 'dorese', 'etnici', 'godets', 'verghi', 'tomato', 'essuda', 'rivoti', 'incuti', 'torear', 'largir', 'tornii', 'incaci', 'pistia', 'agiala', 'hiatus', 'ondaci', 'sleghi', 'adirei', 'crunch', 'sfossi', 'ridevi', 'munito', 'ghindo', 'merchi', 'goresi', 'euzone', 'pecili', 'saloon', 'inculo', 'sgarar', 'certai', 'liquor', 'uscivi', 'oirate', 'rizina', 'corozi', 'spigai', 'utenza', 'qzerty', 'pelato', 'aquosi', 'solaci', 'varate', 'azzera', 'azolla', 'odirti', 'fatato', 'sgurar', 'fonali', 'veejay', 'regina', 'umilio', 'stucco', 'ammara', 'turate', 'riforo', 'sdando', 'tallio', 'operai', 'lamine', 'telone', 'nassii', 'grampi', 'cafiro', 'accise', 'sfrana', 'gamico', 'zombai', 'movida', 'scosse', 'rosami', 'sedulo', 'frigge', 'scanna', 'fregar', 'vampar', 'furori', 'rividi', 'tarala', 'cadile', 'unirvi', 'radoni', 'mestai', 'abnego', 'taluno', 'trenar', 'geriti', 'dolale', 'bearlo', 'herere', 'inossa', 'ricchi', 'urside', 'lodati', 'nevone', 'crazia', 'boriai', 'ecidio', 'eresia', 'catene', 'boraci', 'cullei', 'miccia', 'flemme', 'infido', 'edotto', 'agnato', 'solato', 'medium', 'basiti', 'sostar', 'medina', 'dettai', 'gomone', 'silane', 'sdegni', 'riceda', 'rinesi', 'merghi', 'accuse', 'ideala', 'syngas', 'quarto', 'comini', 'creste', 'alzaci', 'cadevi', 'drogar', 'giugni', 'gemico', 'zombie', 'oziose', 'lectio', 'anfibo', 'dunosa', 'varrai', 'silver', 'bazuca', 'mitria', 'senile', 'truffa', 'velaie', 'famosi', 'dative', 'svolti', 'untoci', 'ostami', 'cefali', 'comodo', 'renate', 'sfarei', 'boline', 'gioita', 'svolar', 'nottai', 'onnese', 'vedono', 'groppe', 'riveli', 'agrori', 'fianco', 'neroli', 'trasti', 'singol', 'ugnino', 'camuno', 'alieni', 'ricusi', 'augura', 'forata', 'irroro', 'tessei', 'sciama', 'tecali', 'diesar', 'usatto', 'lumato', 'bacavo', 'diosio', 'sbrina', 'litate', 'galati', 'coroni', 'tufata', 'onrato', 'annone', 'urgimi', 'gabine', 'scalvo', 'caprie', 'svecci', 'barino', 'erotto', 'device', 'agamia', 'aleggi', 'fletto', 'sumeri', 'metato', 'coopti', 'ostata', 'peccia', 'gottai', 'vogulo', 'adibii', 'intono', 'retica', 'aliati', 'efedre', 'copale', 'balteo', 'sposai', 'spanar', 'notali', 'abbona', 'domiti', 'umanai', 'crespe', 'impupa', 'taglia', 'becere', 'stazzi', 'orgone', 'uniate', 'vasari', 'fisici', 'abbaia', 'orzane', 'alfuro', 'spicca', 'ammaro', 'unisti', 'iodica', 'prette', 'bissai', 'solida', 'urrita', 'fargli', 'immagi', 'payene', 'sbozza', 'spinta', 'aporia', 'medica', 'sfarzi', 'belaci', 'restai', 'sifnia', 'zigaci', 'scasar', 'canari', 'minata', 'actine', 'stento', 'tifose', 'mirica', 'levare', 'cufica', 'sonavi', 'dealer', 'reseti', 'stappa', 'tediar', 'sebben', 'retico', 'alberi', 'pazzie', 'impari', 'ipetre', 'achive', 'esteta', 'numida', 'cedere', 'civica', 'illune', 'caruba', 'limali', 'aikido', 'citini', 'actina', 'afgani', 'latori', 'radiai', 'brezel', 'esular', 'grinte', 'adepta', 'indaco', 'femmes', 'cacate', 'sellai', 'insano', 'peschi', 'smerai', 'veduti', 'fedayn', 'userai', 'naturi', 'sgarbo', 'allupo', 'rutena', 'ducano', 'prende', 'sciuri', 'balena', 'carota', 'scurir', 'sbraco', 'arelle', 'riudir', 'trillo', 'fragna', 'baiava', 'figlio', 'remixi', 'scolmo', 'loggia', 'abento', 'pagoda', 'bubava', 'angine', 'cacaci', 'venoso', 'fetida', 'cursus', 'pausar', 'polipi', 'noiose', 'breuca', 'libato', 'spanto', 'suolar', 'sudavi', 'models', 'escide', 'parala', 'svetta', 'ornato', 'ramoso', 'dances', 'raugeo', 'sfollo', 'escile', 'ricuse', 'rifido', 'dirigi', 'ossame', 'procoi', 'coccia', 'cenane', 'stizzi', 'retrai', 'schifa', 'leppar', 'cocevi', 'arrapo', 'pinyin', 'sverli', 'rimase', 'deaero', 'sventa', 'vomire', 'resino', 'recilo', 'fisano', 'stadie', 'ridona', 'everso', 'iugulo', 'telate', 'sgotto', 'glutee', 'vitini', 'sudest', 'rasura', 'minuta', 'urtane', 'liscio', 'erbale', 'ileali', 'somiti', 'godile', 'riempi', 'covata', 'prione', 'esordi', 'sdorai', 'frasca', 'frotte', 'manato', 'caluma', 'sdolsi', 'coiami', 'tufosa', 'ritone', 'uggiva', 'steppe', 'frissi', 'timers', 'carnet', 'cargos', 'addoni', 'batavo', 'bevoni', 'vilale', 'cacino', 'avelte', 'vergai', 'oscure', 'urinar', 'sfrano', 'attrai', 'rodane', 'marame', 'friggi', 'arbano', 'ascoso', 'bazzon', 'stinto', 'scorri', 'velica', 'colica', 'curala', 'dorala', 'esiguo', 'borina', 'gerita', 'senato', 'ubiero', 'pepite', 'fucili', 'gratin', 'logico', 'avviva', 'effuse', 'areati', 'grolla', 'adiate', 'savoia', 'tristo', 'cianci', 'legavo', 'rounds', 'ansane', 'solala', 'ootipo', 'avulso', 'canine', 'intese', 'emungi', 'colobi', 'furale', 'olirla', 'mucosa', 'albane', 'smorto', 'orsina', 'oirati', 'locane', 'cubale', 'remami', 'ripivo', 'forbir', 'quitti', 'parete', 'ertati', 'spalca', 'rufiya', 'ginnai', 'capano', 'garosa', 'oleosa', 'recici', 'gineri', 'slenti', 'follar', 'baltei', 'oserai', 'afgano', 'zitoni', 'gradii', 'odirai', 'miniar', 'urlino', 'fatela', 'aliesi', 'bibbio', 'potami', 'evacua', 'brilli', 'disusa', 'scolai', 'acerre', 'domane', 'libero', 'befana', 'roboro', 'pigali', 'riunse', 'chiava', 'vanumi', 'inalar', 'ideine', 'raiava', 'quotar', 'bataia', 'forava', 'faceta', 'infuno', 'esorti', 'brezza', 'floppy', 'varano', 'sariga', 'datino', 'dolevi', 'reseca', 'ciccai', 'ardivi', 'riarsa', 'mallei', 'ditela', 'sbirba', 'zumalo', 'vedici', 'boxing', 'murine', 'tarale', 'malese', 'steppi', 'labile', 'bitubo', 'riviri', 'minuge', 'domavi', 'bariti', 'bordar', 'alludi', 'amelli', 'tifavo', 'coiare', 'doravi', 'idrese', 'rilega', 'adunai', 'ririsa', 'alunne', 'pallai', 'tirchi', 'imbuii', 'diceva', 'delata', 'anomia', 'omucci', 'posata', 'bifuel', 'smusai', 'ludici', 'conati', 'bosseo', 'tinnir', 'savers', 'patite', 'gufata', 'manchi', 'coppie', 'bordai', 'terreo', 'stipai', 'sodure', 'civade', 'renose', 'ortivo', 'amicar', 'zolfar', 'facere', 'gemica', 'incuta', 'conina', 'renine', 'rosene', 'virato', 'bretti', 'orerei', 'ormali', 'barone', 'abripa', 'sberti', 'ammina', 'zenane', 'mugoli', 'coyote', 'senhal', 'capite', 'mescia', 'orcina', 'eptano', 'fugavi', 'gliari', 'untisi', 'talkie', 'scolpi', 'goffro', 'fronti', 'spiata', 'paleso', 'stella', 'shifti', 'erader', 'motivo', 'tosino', 'sparir', 'stelle', 'resole', 'arseci', 'tacilo', 'trozza', 'busche', 'burghe', 'eroine', 'tesele', 'vivila', 'novate', 'angeva', 'stigma', 'lipomi', 'slegai', 'lingue', 'fandom', 'pemane', 'sviavo', 'moralo', 'bucavo', 'brezze', 'onorar', 'barili', 'stoggi', 'gallar', 'grisbi', 'vaiaie', 'secato', 'truzzo', 'acquai', 'lattai', 'fedare', 'indoli', 'idumee', 'sfibra', 'necato', 'beerei', 'asiani', 'jodler', 'telica', 'ovular', 'credei', 'scuoia', 'chiare', 'cileni', 'cosava', 'prelio', 'dogado', 'coluro', 'grezzo', 'erbate', 'volato', 'belane', 'bottai', 'sdessi', 'rizoma', 'diteca', 'buicci', 'potino', 'urlava', 'belale', 'mucide', 'tumuli', 'aloine', 'raglan', 'oleavo', 'volati', 'aliano', 'iguane', 'quanti', 'intuba', 'stoiar', 'culano', 'placai', 'accesa', 'campai', 'sbotti', 'mimano', 'ortica', 'stozzo', 'equate', 'panata', 'spicei', 'dogavi', 'novera', 'amenti', 'dadone', 'tosato', 'fiocco', 'bifune', 'eccedo', 'reboot', 'annomi', 'cantei', 'dirubi', 'oiresi', 'offrii', 'datemi', 'spalle', 'inscia', 'sagari', 'insali', 'situle', 'ansimi', 'pacane', 'robbie', 'pilala', 'miglia', 'taciti', 'draghe', 'brioso', 'atrica', 'tufano', 'zeismi', 'culaca', 'alpino', 'malari', 'enfiai', 'prugna', 'escidi', 'riding', 'notaci', 'leanza', 'penino', 'spumeo', 'timine', 'pazzia', 'usarmi', 'smotta', 'abcasi', 'matcho', 'fetish', 'ratite', 'risevi', 'necavo', 'infine', 'riapro', 'sbraci', 'iatali', 'gonade', 'rumeno', 'velare', 'haruro', 'starvi', 'compri', 'ampere', 'auleti', 'epoche', 'dolete', 'pigiai', 'privai', 'immoli', 'eburna', 'unsero', 'inputi', 'vedile', 'attiva', 'ottona', 'lincio', 'oblalo', 'soboli', 'malgai', 'rigava', 'moneti', 'editor', 'rafano', 'brovai', 'pulcro', 'smergo', 'retuse', 'podici', 'acormi', 'pevere', 'sviale', 'arguii', 'bavosa', 'cembro', 'podura', 'navigi', 'vizino', 'sporsi', 'snelli', 'issalo', 'lirata', 'sborri', 'tufose', 'palane', 'avelli', 'natalo', 'classo', 'carcar', 'isiace', 'crenar', 'runico', 'cisale', 'buschi', 'idalio', 'brente', 'infida', 'smunge', 'carole', 'raiane', 'pesate', 'medesi', 'secava', 'divano', 'temimi', 'baciar', 'scrina', 'melene', 'areaci', 'bundle', 'inluio', 'golose', 'vaiate', 'erebia', 'titine', 'prozii', 'zigolo', 'ossosa', 'turnar', 'inezia', 'pesato', 'anfesi', 'tabica', 'sdarsi', 'quotai', 'baroli', 'albiti', 'ansano', 'lancio', 'ottusi', 'lepori', 'spumai', 'rapini', 'baiale', 'topona', 'suacie', 'rimeni', 'pidgin', 'guatar', 'odiavi', 'farnia', 'nomino', 'redimi', 'efebei', 'aziaci', 'sdiede', 'sinici', 'scacci', 'cadici', 'userid', 'lidici', 'enerve', 'cavati', 'nilota', 'odiosi', 'zabibi', 'beluga', 'cacale', 'gadide', 'ambate', 'stingo', 'rauchi', 'vasche', 'addopa', 'strage', 'ninfeo', 'voravi', 'urgile', 'erravi', 'orezze', 'aldosi', 'dicato', 'pirani', 'tuboli', 'sempre', 'scusai', 'racers', 'merori', 'polare', 'melala', 'sedavi', 'canaia', 'smiela', 'caglia', 'eusini', 'peridi', 'araldi', 'picane', 'attero', 'senari', 'oziami', 'milite', 'lavabi', 'cufici', 'vivevi', 'tosava', 'dividi', 'fondai', 'arsavi', 'delate', 'riatto', 'alluno', 'kazako', 'arieti', 'merite', 'patois', 'airone', 'automi', 'incori', 'licere', 'rapido', 'circei', 'morosi', 'gelone', 'novavi', 'rinica', 'picani', 'svelti', 'pactum', 'scabro', 'ignote', 'lusoni', 'apuani', 'colali', 'sparsa', 'agonia', 'rimane', 'single', 'piango', 'essudi', 'iodico', 'cevese', 'tonico', 'cibane', 'sfrego', 'idrate', 'sazino', 'ignava', 'naupli', 'pedati', 'leviti', 'scalco', 'groppa', 'pacato', 'zigavi', 'votivi', 'sozzon', 'salire', 'salone', 'fisali', 'sbecco', 'serici', 'aulire', 'debole', 'osarsi', 'issala', 'radino', 'rapine', 'vulnus', 'oleari', 'lorica', 'meassi', 'camere', 'aderga', 'spicce', 'pepate', 'citino', 'fallir', 'getula', 'teschi', 'peiesi', 'riridi', 'voltoi', 'dopata', 'arcale', 'sucidi', 'ungili', 'smezzo', 'sterri', 'garzai', 'necavi', 'dormii', 'rigose', 'radome', 'girgli', 'paraci', 'fionde', 'alisea', 'salvai', 'veduta', 'parano', 'fluiti', 'involi', 'soffia', 'mimati', 'creaci', 'ondati', 'giunge', 'legame', 'menale', 'moccio', 'unteti', 'paresi', 'adimar', 'datali', 'starai', 'minimo', 'alette', 'untori', 'arcavi', 'cadine', 'pingue', 'rastro', 'confla', 'coiaro', 'teflon', 'dovuta', 'decane', 'tepido', 'viator', 'lagoso', 'occaso', 'giunsi', 'ordivi', 'zombar', 'rimasa', 'tumoli', 'ridomi', 'cioppe', 'domate', 'raccai', 'matcha', 'grance', 'moscio', 'aramea', 'svitai', 'lisati', 'adugni', 'filale', 'sparte', 'merlot', 'smuovo', 'aitano', 'rigare', 'svetto', 'ureidi', 'cities', 'bannar', 'repeva', 'balito', 'agisco', 'scemar', 'visare', 'fugapi', 'piarla', 'lambda', 'godici', 'gemici', 'stocco', 'menomo', 'ipogea', 'fatina', 'attano', 'faglio', 'bozzar', 'unaria', 'sformi', 'filali', 'giunto', 'sdamai', 'pepare', 'drenar', 'rumaci', 'equato', 'ottico', 'abelie', 'doccio', 'damino', 'donale', 'soglie', 'uggiai', 'glasse', 'noduli', 'eversa', 'egagro', 'shunto', 'allega', 'sobria', 'equipe', 'riceno', 'meteco', 'armavo', 'sfanno', 'velade', 'vicina', 'potalo', 'mollii', 'visito', 'storna', 'penaci', 'palano', 'tarami', 'sgotta', 'lustro', 'maiori', 'visate', 'tracci', 'aprite', 'rigema', 'orarsi', 'micado', 'fumaci', 'lavine', 'datami', 'rifori', 'ungici', 'format', 'nappar', 'energy', 'scalpo', 'nougat', 'erbosa', 'bateau', 'optino', 'pittai', 'sciupa', 'vocati', 'pecora', 'venero', 'requie', 'carnai', 'cibavi', 'previa', 'canone', 'uscesi', 'dopavo', 'tavoli', 'ricadi', 'allibo', 'classe', 'tufalo', 'gitami', 'mudalo', 'sodavi', 'pronte', 'burlon', 'addopi', 'mammea', 'ambone', 'sfarmi', 'ignave', 'ruderi', 'server', 'votivo', 'occhio', 'stocca', 'ficata', 'svenie', 'pesata', 'pulegi', 'uggito', 'inaspi', 'papera', 'cretto', 'cantor', 'ziucce', 'intasi', 'velona', 'beator', 'posava', 'direda', 'rancai', 'scagli', 'tossii', 'lirica', 'isarca', 'meloni', 'sterpi', 'ronfar', 'pomere', 'smorzo', 'ionici', 'sperar', 'mearle', 'mixano', 'piegai', 'aranci', 'vameli', 'latina', 'pieesi', 'adelfe', 'ansimo', 'brache', 'borzoi', 'assiri', 'rapala', 'soppor', 'oneide', 'vestir', 'pagaio', 'induco', 'spenga', 'savana', 'vitava', 'addogo', 'virali', 'assito', 'abiuri', 'acetir', 'pulcri', 'dedali', 'negate', 'picaro', 'iacuto', 'colpar', 'giobbo', 'trinci', 'areavo', 'tubalo', 'sifnio', 'culali', 'cubani', 'sbruco', 'flirto', 'oblata', 'latrai', 'rinati', 'balere', 'amboni', 'vagala', 'sonala', 'oscuri', 'sonica', 'bracco', 'ciullo', 'nottua', 'sfrisa', 'favici', 'skylab', 'allori', 'equano', 'archei', 'solava', 'orzare', 'focose', 'onnesi', 'risata', 'sborda', 'ricava', 'fenati', 'origli', 'divido', 'ambite', 'rotami', 'levita', 'mirato', 'anarie', 'adopra', 'riconi', 'ararla', 'elgeya', 'tutore', 'coisti', 'rolese', 'eventi', 'rumali', 'sugato', 'espira', 'naisco', 'covino', 'elibus', 'coirla', 'munita', 'mozzai', 'fiutar', 'silite', 'iastie', 'lancia', 'novalo', 'pilino', 'apponi', 'gazebo', 'pomeli', 'cucile', 'coclea', 'mpondi', 'turale', 'grondi', 'casera', 'pudore', 'abolle', 'urgeva', 'raduna', 'seccar', 'lolita', 'empito', 'slumar', 'brilla', 'pecche', 'impepi', 'conino', 'cucini', 'inasto', 'istali', 'ernino', 'vagali', 'tintor', 'slunga', 'cuprei', 'domina', 'plenum', 'avveno', 'bevile', 'adulai', 'uscire', 'avalla', 'tifino', 'osarne', 'gomita', 'cicala', 'equali', 'famula', 'zarine', 'abbuio', 'scopai', 'scommi', 'sicosi', 'aquosa', 'cagaci', 'barami', 'resone', 'ribuco', 'piloni', 'capaci', 'siesta', 'levami', 'arengo', 'scirpi', 'camuna', 'dressa', 'renard', 'bumper', 'tovesi', 'tifoni', 'eburni', 'remate', 'mappar', 'duraci', 'dolane', 'storie', 'biglia', 'melane', 'bituma', 'abbica', 'seguii', 'intoro', 'rilevi', 'cernie', 'ontose', 'untala', 'silema', 'caduno', 'trenai', 'cogens', 'esorno', 'lodala', 'risaia', 'svilir', 'nodoso', 'anzesi', 'segosi', 'dilefi', 'secavo', 'beccar', 'dosavo', 'ciabar', 'esatti', 'pomero', 'dianzi', 'ingoio', 'webcam', 'mojito', 'olirmi', 'imperi', 'famosa', 'divima', 'cubavi', 'varami', 'loista', 'begane', 'player', 'ifugao', 'steche', 'sugano', 'sodica', 'ottavi', 'flirti', 'fidano', 'eredai', 'retusi', 'lasici', 'coente', 'arrolo', 'diesel', 'sodane', 'mefite', 'sgolar', 'navati', 'cinire', 'minore', 'bobino', 'ritoso', 'ficone', 'granfe', 'urtami', 'banato', 'toasts', 'appaci', 'gazebi', 'ripeto', 'fusavi', 'bisavo', 'potage', 'everte', 'nilgau', 'sapidi', 'guaire', 'vicolo', 'riurla', 'saturo', 'gongro', 'casula', 'alante', 'fregna', 'ardite', 'nepidi', 'ciukci', 'cisali', 'lisare', 'alfane', 'flambi', 'ruppie', 'lintea', 'sbagli', 'redamo', 'scosci', 'vigono', 'ramini', 'sharia', 'mugghi', 'mesate', 'rotolo', 'bigoli', 'aunesi', 'pinaio', 'banale', 'stalli', 'azzimo', 'benesi', 'scazzo', 'olisco', 'satina', 'segale', 'tubulo', 'rapina', 'mirini', 'plachi', 'svenir', 'ponies', 'mobile', 'sgozzi', 'sireni', 'euzono', 'sicure', 'sedavo', 'immise', 'trarsi', 'dipani', 'topaio', 'chiara', 'timido', 'attivi', 'regima', 'scucia', 'decise', 'nasate', 'tesati', 'velaia', 'candii', 'bonobi', 'defili', 'frusto', 'lebbra', 'tafoni', 'covavo', 'lastro', 'cavoli', 'colava', 'braida', 'season', 'puntai', 'detono', 'tracer', 'risali', 'polite', 'roresi', 'rabida', 'zelano', 'vomere', 'eucera', 'refusi', 'potete', 'rasasi', 'polona', 'tafano', 'nicene', 'dopaci', 'pomosi', 'polipo', 'smamma', 'ritine', 'rimule', 'stesai', 'bugule', 'culoni', 'elvese', 'finish', 'diesai', 'sparla', 'dimero', 'eresse', 'redivi', 'luschi', 'comare', 'camole', 'valiti', 'sfotte', 'idrati', 'perone', 'rituba', 'anione', 'appuro', 'imbolo', 'liquai', 'temevi', 'barrii', 'prendo', 'sforna', 'egenti', 'segose', 'vasale', 'bronzo', 'vamele', 'angone', 'rimasi', 'egioci', 'legata', 'rapivo', 'olirei', 'monche', 'iaculo', 'rinico', 'moggio', 'stazzo', 'lanuto', 'kasher', 'rosele', 'redito', 'lumale', 'lumava', 'usuale', 'emerso', 'starna', 'cibale', 'ironia', 'noiosa', 'rosemi', 'flysch', 'pagaie', 'casoso', 'raggio', 'azimut', 'piscio', 'telati', 'torchi', 'amitti', 'gemiti', 'selaci', 'soffio', 'aninga', 'ticchi', 'spiala', 'derubo', 'decano', 'notori', 'agirti', 'adelfi', 'labbra', 'elleno', 'sozzai', 'buacci', 'dimena', 'fognai', 'sbarba', 'cosali', 'lignei', 'fattoi', 'emulge', 'sitala', 'largai', 'notate', 'carolo', 'vanume', 'garoso', 'inmiar', 'zigoto', 'tassie', 'zarina', 'sbosca', 'sorate', 'gitemi', 'arance', 'malusa', 'oblato', 'ferire', 'lisalo', 'furino', 'brutta', 'rasoni', 'infusi', 'arsole', 'asello', 'vodese', 'dosali', 'satiri', 'lampar', 'budino', 'nudino', 'sbitti', 'appeni', 'tossir', 'orlate', 'gazane', 'rugalo', 'scarne', 'ideare', 'monosi', 'creare', 'preari', 'monasa', 'gnorri', 'quatto', 'sopite', 'rosumi', 'guscio', 'cecale', 'basici', 'divino', 'cubala', 'assola', 'pineti', 'padron', 'udissi', 'tosami', 'mescei', 'cobego', 'driade', 'mosana', 'dumeto', 'pacion', 'locati', 'votito', 'vogula', 'cataro', 'algore', 'receda', 'gorbie', 'morene', 'lesche', 'abbina', 'astili', 'mimaci', 'ritari', 'evinto', 'rodevi', 'arsina', 'caschi', 'angora', 'scrivi', 'necali', 'punito', 'nevose', 'pinesi', 'sducar', 'ignuda', 'uveiti', 'spiego', 'strume', 'nutrie', 'nomici', 'oceano', 'bellai', 'retail', 'anfani', 'velico', 'famata', 'sapono', 'calura', 'grossi', 'eccito', 'fresie', 'piarsi', 'lavico', 'lanide', 'baiosa', 'flanar', 'iesine', 'infima', 'renoso', 'libare', 'guaivi', 'aquila', 'nasato', 'patiti', 'nesesi', 'rupina', 'cagami', 'navoni', 'compii', 'fibule', 'corica', 'olfata', 'ovario', 'niccio', 'perori', 'fonavi', 'legumi', 'salini', 'vilire', 'bulale', 'strato', 'monase', 'bercia', 'scorar', 'colugo', 'rugumo', 'inculi', 'erlang', 'pannar', 'doppio', 'intino', 'barchi', 'pretta', 'armaci', 'milito', 'gordio', 'verrai', 'orbano', 'tempre', 'novati', 'mostro', 'mucati', 'batata', 'endice', 'detona', 'vicane', 'mulcir', 'mitrai', 'cuciti', 'smassi', 'spiato', 'adotto', 'esculo', 'focosa', 'svuole', 'foralo', 'sufici', 'locata', 'esegua', 'letizi', 'arazzo', 'marker', 'cedilo', 'oleami', 'acajou', 'rasoio', 'entici', 'brucea', 'sugaia', 'repere', 'slembi', 'serpei', 'evince', 'pollar', 'sonano', 'lucani', 'culone', 'arator', 'duruma', 'alitar', 'posato', 'rotavo', 'negron', 'secala', 'manata', 'pokome', 'venati', 'melina', 'adduca', 'ombrie', 'lurese', 'picana', 'peneri', 'poacea', 'rigamo', 'savari', 'sforzi', 'ometto', 'scorte', 'carene', 'dipano', 'coupon', 'semini', 'buiori', 'popone', 'spensi', 'cenalo', 'accora', 'annodo', 'gruzzi', 'pavone', 'pireno', 'limoso', 'luccio', 'orrivi', 'bituba', 'vanali', 'arnica', 'acceso', 'vomite', 'digita', 'attata', 'famati', 'cagati', 'iniqui', 'meleti', 'mellea', 'allupi', 'menaci', 'codoli', 'addona', 'mosche', 'lacuna', 'infuri', 'inondi', 'limona', 'riveda', 'anoico', 'stoppe', 'mulina', 'covali', 'elegia', 'abbuia', 'dotati', 'zeloti', 'oppiai', 'bacavi', 'idrici', 'badalo', 'garden', 'tubate', 'frisie', 'option', 'sdoler', 'tatami', 'nevoni', 'piangi', 'suture', 'fucata', 'istato', 'lincea', 'ferule', 'nevica', 'domato', 'ricreo', 'droghi', 'movevi', 'siconi', 'patire', 'erompa', 'recusa', 'rafani', 'anaria', 'devota', 'inique', 'powers', 'acuivi', 'culare', 'estato', 'ugnava', 'litani', 'umetto', 'pompai', 'ctonie', 'radumi', 'untalo', 'images', 'slenta', 'rivive', 'zipoli', 'assuma', 'risole', 'derive', 'refuto', 'arsoti', 'baiaci', 'spagne', 'barmen', 'sterzi', 'curtis', 'acarpo', 'lesure', 'squaws', 'angami', 'voglie', 'vimati', 'nomini', 'esenta', 'masora', 'orarlo', 'cavone', 'dogate', 'desolo', 'pacaci', 'olorar', 'godesi', 'canopi', 'rodavo', 'templo', 'tutale', 'arroga', 'vogane', 'pescar', 'divimi', 'valica', 'nugolo', 'stagni', 'stilbo', 'ostaci', 'rutate', 'termia', 'potori', 'aziono', 'vanesi', 'infuso', 'pofani', 'cultri', 'tifica', 'lotici', 'stanco', 'tutina', 'zinnar', 'sdarle', 'unteci', 'ponila', 'armati', 'trasli', 'gemila', 'unirlo', 'fallai', 'lepida', 'sleali', 'quieta', 'murala', 'felino', 'vollei', 'office', 'prilla', 'ecoico', 'inulta', 'sicuri', 'fisino', 'sbaffi', 'orlale', 'graspi', 'meammo', 'citaci', 'puliti', 'refilo', 'maresi', 'parcer', 'esimer', 'rogito', 'istava', 'baculi', 'adorar', 'capita', 'stenia', 'safari', 'cosavi', 'calvar', 'molite', 'vorare', 'oliamo', 'zaffai', 'scirro', 'scarti', 'gender', 'genite', 'sagola', 'sudano', 'cintar', 'suarii', 'calvai', 'obriza', 'nateti', 'adiuva', 'claudi', 'crebbi', 'acarpa', 'liceva', 'basket', 'svolga', 'alunna', 'pieghe', 'brunch', 'ugnane', 'prosit', 'irriga', 'cripto', 'ligiar', 'velesi', 'consce', 'pisola', 'rierge', 'curale', 'ghetta', 'schema', 'lesisi', 'ordini', 'ducala', 'escida', 'pineto', 'sukkot', 'udirne', 'oziate', 'incuoi', 'acormo', 'orioli', 'ramale', 'baialo', 'caligo', 'cancan', 'blocca', 'allodi', 'gorghe', 'tregue', 'alzaie', 'colino', 'uvette', 'panate', 'binubi', 'nitido', 'uvacea', 'pingui', 'addavi', 'albini', 'molavi', 'tidali', 'cachet', 'esecro', 'radore', 'gaschi', 'binesi', 'spongo', 'astute', 'testai', 'trucia', 'focano', 'virole', 'bouffe', 'oberar', 'tomate', 'dimeri', 'lavali', 'neopro', 'tswana', 'eoceni', 'gazami', 'ficoni', 'setole', 'madera', 'errano', 'ararsi', 'muleta', 'unnico', 'spasmo', 'damali', 'renare', 'kippur', 'sposti', 'bacche', 'baiati', 'fusati', 'morate', 'flippa', 'focese', 'asados', 'adatto', 'cresco', 'sbatta', 'parser', 'noioso', 'detrar', 'venale', 'redavi', 'armano', 'insedi', 'scarpe', 'genalo', 'lilium', 'scorze', 'sbocca', 'riesci', 'ascreo', 'greppo', 'pigiar', 'spiani', 'inarro', 'parato', 'iatese', 'eretto', 'mofete', 'ellere', 'onagri', 'meteci', 'difesa', 'plasmi', 'misuri', 'licide', 'borino', 'manati', 'triere', 'ergilo', 'biline', 'alista', 'adrone', 'focata', 'trendy', 'fusaci', 'nieghi', 'onusto', 'trucco', 'patini', 'amimia', 'invali', 'addaci', 'baiato', 'attiri', 'aleuta', 'smorbo', 'resina', 'nilote', 'elisir', 'bosoni', 'induri', 'pogali', 'creavi', 'potali', 'pender', 'oliare', 'tipula', 'spycam', 'biella', 'mancia', 'impela', 'frisai', 'reputi', 'cueste', 'catino', 'sedalo', 'laccia', 'sisero', 'acolia', 'stigmi', 'sedevi', 'fasici', 'sfilza', 'resort', 'pilami', 'euteri', 'invaga', 'orlami', 'esisto', 'ranula', 'odiata', 'bevero', 'rinese', 'carabi', 'visano', 'veleni', 'bilico', 'pecilo', 'vocavi', 'sativi', 'mitilo', 'delizi', 'ascesa', 'palava', 'opinar', 'avorio', 'vivant', 'airbag', 'deismi', 'neppur', 'tarara', 'sgabeo', 'banine', 'ziraie', 'comiti', 'carica', 'attici', 'stigio', 'mutolo', 'spalmi', 'dindin', 'totano', 'beccai', 'sbosco', 'riarmo', 'putite', 'sfagni', 'quando', 'sdogar', 'scruto', 'rafidi', 'ficato', 'farnie', 'sferro', 'dogali', 'accasa', 'pesche', 'igname', 'piovre', 'calure', 'imboli', 'talamo', 'ripuoi', 'puzzle', 'evoica', 'access', 'malidi', 'abitui', 'rigide', 'rigosa', 'dotino', 'scevra', 'ohmica', 'manghi', 'escido', 'scelta', 'lagnar', 'alcuni', 'ortani', 'jammer', 'smesse', 'ciulai', 'dimoia', 'sketch', 'frecci', 'uveale', 'ovisti', 'diruto', 'acorme', 'rabica', 'marcia', 'alisso', 'teurgo', 'istigo', 'udirle', 'lamuti', 'averni', 'scalva', 'assale', 'frusti', 'moravo', 'uriche', 'zamuca', 'lumami', 'laguna', 'melavo', 'ravvio', 'ginkgo', 'ciucce', 'betica', 'arcide', 'tropee', 'abissi', 'bobbar', 'pedate', 'nomano', 'minavo', 'ripelo', 'novesi', 'stoini', 'idrico', 'divisi', 'tatari', 'varalo', 'carata', 'rumeni', 'erotta', 'svassi', 'murami', 'scussa', 'tesomi', 'biferi', 'fatale', 'scavar', 'ammalo', 'vateli', 'venosa', 'ombrai', 'fliaci', 'creino', 'ragade', 'abbaca', 'rotavi', 'ceroma', 'insilo', 'ammali', 'nassio', 'editai', 'sleppe', 'scorta', 'lisavi', 'localo', 'rosili', 'sereni', 'citara', 'usurpi', 'gancio', 'sfogli', 'gratis', 'sbalzi', 'fiamma', 'vitavo', 'uggivo', 'melati', 'camice', 'paguro', 'snelle', 'inceri', 'bubate', 'diluii', 'agiati', 'dogano', 'empire', 'ponzai', 'codiai', 'artato', 'cevesi', 'barale', 'aggiro', 'siglai', 'elleni', 'gassai', 'spruna', 'ommise', 'vimale', 'starsi', 'clonai', 'bearvi', 'rivoca', 'ussari', 'pedica', 'votate', 'litali', 'sorbar', 'thonet', 'aconzi', 'dolman', 'cnidie', 'rigala', 'voltai', 'missai', 'tralci', 'sonava', 'bolese', 'dalico', 'misure', 'ricuce', 'ansava', 'sciara', 'clinic', 'mirice', 'cassia', 'lovali', 'tagiko', 'sparlo', 'nosemi', 'sposar', 'dosala', 'sicane', 'uggire', 'faggio', 'badano', 'gelato', 'smieli', 'ovvero', 'diviso', 'zippai', 'raiata', 'musive', 'lisina', 'garghe', 'mimava', 'tapino', 'grifai', 'agiare', 'involo', 'ganghe', 'morbia', 'abroga', 'aritmi', 'occida', 'gelidi', 'pianin', 'rebbio', 'ibibie', 'scucir', 'tradur', 'scopar', 'cagato', 'spresa', 'durale', 'vinile', 'odirlo', 'lesiti', 'global', 'capali', 'arsici', 'sducai', 'attori', 'polito', 'artati', 'spilli', 'rifasa', 'afagie', 'fragro', 'spiedo', 'incido', 'nervee', 'olimpi', 'redama', 'fumide', 'fodera', 'pepita', 'cerano', 'niello', 'damavo', 'locchi', 'rodeva', 'nociva', 'cabeza', 'appruo', 'tipona', 'doloro', 'mearvi', 'radume', 'sandra', 'chicle', 'sfessi', 'velada', 'romper', 'algidi', 'optaci', 'allume', 'algere', 'rimano', 'adiuvi', 'ardiva', 'zigoti', 'spogli', 'salavo', 'alpaca', 'starla', 'zonese', 'pueblo', 'tipino', 'invano', 'ansiti', 'baiesi', 'sobole', 'ramalo', 'filtra', 'zelino', 'pestai', 'datiti', 'languo', 'ergano', 'erompo', 'ornane', 'priapo', 'fletta', 'ornano', 'triadi', 'fermar', 'cencri', 'traimi', 'stilla', 'banjos', 'ostici', 'porrai', 'pelati', 'nomina', 'rumava', 'guarda', 'bifuni', 'fusala', 'morino', 'locava', 'gestii', 'griffe', 'erteci', 'unarii', 'invera', 'tracie', 'fusiti', 'virala', 'cumuli', 'pressi', 'inibir', 'vulghi', 'assume', 'inermi', 'resavi', 'pazzio', 'mandie', 'mainar', 'olfala', 'genomi', 'spaino', 'incela', 'estuar', 'fugoni', 'zillar', 'laniar', 'olezzo', 'vocina', 'cifrar', 'tornai', 'faeton', 'vostro', 'varati', 'estubo', 'uranie', 'mudino', 'marcar', 'oleare', 'chilli', 'proevi', 'lucono', 'cedula', 'palchi', 'capoto', 'cuffie', 'turati', 'imbuca', 'flirta', 'mugola', 'usammo', 'temuru', 'ideate', 'diruti', 'croton', 'rosoti', 'vadose', 'latteo', 'arcata', 'oliata', 'lograr', 'goditi', 'cutine', 'sfitta', 'fluivo', 'cofani', 'lepore', 'pavani', 'tanuki', 'tonavi', 'branco', 'gualdo', 'desiai', 'fucina', 'abadia', 'ductus', 'resini', 'jingle', 'favole', 'nevaio', 'datolo', 'lapins', 'stamni', 'prosar', 'butani', 'fratti', 'assine', 'braite', 'garghi', 'panaci', 'clicca', 'vagolo', 'dogata', 'totale', 'incubo', 'gitevi', 'musini', 'codici', 'olmaie', 'zifide', 'alzava', 'tonato', 'bigino', 'frodar', 'legate', 'cimbra', 'ghiere', 'spiega', 'ardila', 'voguli', 'ricamo', 'euanto', 'falcia', 'ammine', 'qeniti', 'fabulo', 'turano', 'clizia', 'canuti', 'scuole', 'fintar', 'pecore', 'antela', 'sgrana', 'metani', 'brunii', 'gialde', 'epurar', 'malleo', 'ritosi', 'stiese', 'udirmi', 'averci', 'stiano', 'ussero', 'potrei', 'dindon', 'delibi', 'agiava', 'drenai', 'sfalsa', 'teaser', 'rasevi', 'calata', 'puloni', 'gufare', 'vacata', 'varchi', 'solimo', 'ukiyoe', 'entrar', 'logoro', 'celano', 'skeito', 'renosa', 'dipela', 'alvini', 'posole', 'securo', 'scocci', 'urtalo', 'alesar', 'vacche', 'tenero', 'ursone', 'tomaia', 'stuoia', 'rifugi', 'aitava', 'ledici', 'aggeri', 'zelali', 'zampai', 'svolli', 'nomata', 'cessar', 'aderii', 'sconco', 'fenato', 'borato', 'sonico', 'moshav', 'nuclei', 'buglia', 'romito', 'dilama', 'scouts', 'olirsi', 'sciavi', 'minori', 'basuti', 'iodane', 'atopie', 'brasca', 'smerci', 'vorale', 'umista', 'opiani', 'lettre', 'banner', 'furalo', 'shorts', 'sitita', 'gufano', 'eslege', 'sfinai', 'issato', 'glabro', 'silvio', 'lotosa', 'murgia', 'normar', 'lattee', 'inneva', 'golati', 'svezzo', 'abbada', 'rinomi', 'cimbri', 'recare', 'begolo', 'celtio', 'iodata', 'ruglio', 'givano', 'serbar', 'istane', 'sfagno', 'spalto', 'stupra', 'tubala', 'emonie', 'libane', 'eretti', 'bazaar', 'balire', 'giulia', 'lettor', 'nerico', 'bricco', 'resene', 'cigoli', 'rodica', 'falera', 'legano', 'linite', 'innera', 'labili', 'boccar', 'nuvole', 'depilo', 'educhi', 'tebano', 'vodesi', 'gemano', 'miravi', 'lacune', 'prurii', 'pubere', 'fuhrer', 'coprii', 'pranzo', 'bhakti', 'buccia', 'remico', 'spreme', 'piglia', 'sfumai', 'orlano', 'deliba', 'ibicei', 'remaci', 'ideona', 'minuii', 'areava', 'ascaro', 'sbroda', 'lecito', 'glossi', 'ramulo', 'snidar', 'sdruci', 'folaga', 'stagne', 'lustri', 'retalo', 'sfalde', 'soliti', 'taravo', 'gatton', 'cenala', 'visalo', 'altrui', 'corate', 'gioito', 'allibi', 'gneiss', 'riapre', 'saputa', 'ambata', 'piombe', 'stello', 'artici', 'brandy', 'nogale', 'locale', 'calmai', 'sferra', 'scalee', 'iettar', 'etisia', 'tosane', 'pilona', 'tiptap', 'ararti', 'sitale', 'harari', 'nibbio', 'urgilo', 'trista', 'baiulo', 'tesesi', 'pososa', 'spiedi', 'basite', 'cofane', 'frugai', 'enarro', 'varale', 'glabre', 'federo', 'adamas', 'alluni', 'reseci', 'penose', 'zeismo', 'sgrida', 'giravi', 'giudie', 'legale', 'retici', 'oleale', 'lucane', 'semate', 'rissoe', 'briffa', 'deschi', 'datura', 'papiri', 'poster', 'famoso', 'sfamar', 'tronar', 'bipede', 'unirla', 'rianno', 'rateli', 'ripeti', 'natone', 'porche', 'cabota', 'covati', 'cascar', 'trassa', 'gorbia', 'elisie', 'fitine', 'sgarro', 'chiome', 'vasali', 'mandeo', 'gomene', 'datane', 'giacca', 'entica', 'saldai', 'armami', 'desini', 'funaia', 'timone', 'coiaia', 'nocche', 'uzbeki', 'ursidi', 'flosce', 'metili', 'ovoidi', 'deputo', 'panama', 'belghe', 'musava', 'nebbie', 'rifumo', 'auriti', 'sedici', 'artano', 'zirlai', 'peponi', 'bisaya', 'anemie', 'raduno', 'pudico', 'dilani', 'ancori', 'hazara', 'inulte', 'varavi', 'cerise', 'bunker', 'pomoso', 'manosi', 'bedani', 'poetai', 'volala', 'alfuri', 'rosata', 'metope', 'smorbi', 'gufale', 'rotesi', 'sialia', 'aculeo', 'immuto', 'murena', 'padese', 'gigolo', 'usasti', 'malghe', 'lumaia', 'tonari', 'jivaro', 'bricie', 'pupona', 'vagami', 'crosci', 'avaria', 'giunte', 'poppar', 'orbale', 'giovai', 'futuro', 'ridato', 'obsedi', 'ordura', 'pinzar', 'osanni', 'spossi', 'prassi', 'gennai', 'issava', 'uguali', 'tulesi', 'arnine', 'arnina', 'scalza', 'rotino', 'spanci', 'rigami', 'fraudi', 'cremai', 'mansio', 'uggivi', 'tipica', 'marron', 'filone', 'equesi', 'coenti', 'ruvese', 'innovi', 'melica', 'inumai', 'cicade', 'crashi', 'rondar', 'gregna', 'lavora', 'ifugaa', 'dativi', 'rugaci', 'cascer', 'virago', 'bilobe', 'murder', 'agirle', 'dotali', 'untele', 'avarie', 'gufava', 'torula', 'pranza', 'pometo', 'nogare', 'effuso', 'temeva', 'silana', 'deviar', 'dirupa', 'putsch', 'gnaulo', 'palais', 'chinee', 'cosime', 'assili', 'tetico', 'abadie', 'tumide', 'anfora', 'intera', 'scusar', 'oliato', 'palagi', 'scozzi', 'boarie', 'leggii', 'rorali', 'dipelo', 'arrivo', 'potava', 'poiane', 'decada', 'brogia', 'tattoo', 'digest', 'memori', 'pavese', 'sbardi', 'scisto', 'sapevi', 'alcole', 'lezzai', 'fenili', 'esopeo', 'cecali', 'osseto', 'cetere', 'clango', 'aptero', 'ertane', 'varici', 'ringhi', 'chiaro', 'ostare', 'sversa', 'aletto', 'raitro', 'pirena', 'gelale', 'marani', 'girali', 'puravi', 'tofana', 'aerina', 'risica', 'divaga', 'airbus', 'ponilo', 'irrita', 'scuoto', 'refill', 'accula', 'jesini', 'ditole', 'smotti', 'spersi', 'triavo', 'usiate', 'ergere', 'gongri', 'marino', 'binane', 'malico', 'furace', 'fragni', 'banjar', 'tarato', 'auroso', 'albasi', 'binino', 'stolse', 'sdinne', 'colani', 'gerite', 'vacaci', 'irpina', 'zagara', 'rumale', 'nogali', 'fruite', 'cesoia', 'telava', 'tabula', 'bovile', 'floemi', 'riluce', 'zotica', 'teatri', 'pereto', 'temilo', 'tomavi', 'graduo', 'ulmici', 'tonica', 'voleva', 'crenni', 'uriste', 'vagare', 'chiesa', 'olanda', 'musici', 'patici', 'ledevo', 'aulita', 'iulchi', 'cavese', 'vocava', 'prezzo', 'argali', 'gallai', 'infula', 'bigiai', 'colone', 'fauste', 'grande', 'pinaia', 'ibicea', 'oliate', 'mammut', 'inetto', 'ristai', 'refuti', 'smarra', 'melava', 'citale', 'guacco', 'sognar', 'cracca', 'pirici', 'vomiti', 'bufate', 'seriar', 'ripota', 'demone', 'guance', 'gelaci', 'negare', 'davamo', 'titoli', 'toupie', 'zunesi', 'lunghi', 'sfrata', 'pomolo', 'fragra', 'causar', 'pruina', 'azoico', 'capace', 'cacata', 'abrasa', 'rocker', 'erompi', 'ecceda', 'manica', 'ansare', 'fiorai', 'savesi', 'errati', 'fabula', 'foglie', 'rifini', 'oriate', 'alarla', 'zietti', 'godute', 'iseani', 'seppur', 'famane', 'fidami', 'pianti', 'nostra', 'ibrida', 'piegar', 'compia', 'vitrei', 'dhimmi', 'vossie', 'rilava', 'sgrumo', 'ocelot', 'batoli', 'sponda', 'zonalo', 'inalba', 'estate', 'notaia', 'tutali', 'pippai', 'marnai', 'rosine', 'uomini', 'ornali', 'ancona', 'igrine', 'villan', 'acuita', 'sedate', 'amanze', 'affumo', 'sagnai', 'garzon', 'imbaca', 'rattor', 'amarre', 'ricama', 'altane', 'camesi', 'segava', 'epizoo', 'patron', 'telano', 'ponere', 'baiose', 'lebete', 'tepida', 'offizi', 'dolora', 'dentro', 'impose', 'apolli', 'disiai', 'fetidi', 'urtati', 'grader', 'tusano', 'blasta', 'allato', 'ancili', 'preghi', 'zefiri', 'dacico', 'tapiro', 'pianar', 'humico', 'digami', 'vocivo', 'osarci', 'rososi', 'rosesi', 'gufavi', 'iodano', 'binami', 'tabico', 'magici', 'pompon', 'pinolo', 'peposo', 'tromba', 'guigne', 'vocala', 'dedito', 'merope', 'aucube', 'maiore', 'gabbai', 'vedica', 'facule', 'igbira', 'thamud', 'vedovo', 'rutale', 'sopivi', 'pomato', 'plasma', 'riunga', 'tettar', 'lardai', 'suonai', "quest'", 'lavano', 'vender', 'empici', 'caspie', 'piarlo', 'rosate', 'rotaia', 'assona', 'gronde', 'miloti', 'pampas', 'galene', 'fraina', 'delega', 'ririso', 'gotica', 'censuo', 'beagle', 'abulie', 'paline', 'fisico', 'enoici', 'sudata', 'tictac', 'dimane', 'dacite', 'agnini', 'rierti', 'gradai', 'bifida', 'famavo', 'piemie', 'vigore', 'impepa', 'modali', 'svolai', 'orlalo', 'famato', 'arreco', 'chiudo', 'strale', 'alisti', 'insite', 'bevuta', 'rubate', 'rufola', 'evulsi', 'furiai', 'addice', 'aitami', 'allego', 'delira', 'idumea', 'sopiti', 'dicchi', 'urtata', 'orzola', 'cugina', 'fugale', 'membri', 'dionea', 'cerche', 'tisico', 'sperde', 'cavita', 'raider', 'geloni', 'petaci', 'toschi', 'sciale', 'pomate', 'innate', 'ondano', 'dotava', 'gasavi', 'mixami', 'basano', 'negavi', 'secret', 'coglia', 'ricami', 'vivide', 'corego', 'vinari', 'bucero', 'risisi', 'scasso', 'poroso', 'scaddi', 'sculto', 'funghi', 'urlato', 'grunge', 'scirri', 'pattar', 'clizie', 'avelti', 'uremie', 'pieria', 'rugano', 'ammira', 'sdilla', 'coiari', 'potuti', 'strano', 'olismo', 'frolla', 'bottar', 'mollai', 'cobole', 'novali', 'detrai', 'durone', 'somalo', 'troppi', 'resine', 'pinzai', 'viravi', 'alloga', 'addica', 'grasta', 'crotto', 'enfasi', 'affoga', 'renino', 'bastai', 'limola', 'setino', 'derapo', 'spegne', 'cenare', 'dolcii', 'veline', 'zincai', 'vocate', 'pipare', 'sfoghi', 'cinzia', 'ormane', 'lofide', 'filler', 'slogai', 'corale', 'bosana', 'decapo', 'disdir', 'invadi', 'vivono', 'bosina', 'impalo', 'iessee', 'lavato', 'ansiai', 'manili', 'untile', 'semang', 'prenze', 'rumata', 'rideau', 'serina', 'destra', 'optavo', 'allele', 'lesimi', 'diedri', 'menole', 'pastai', 'bullet', 'delimo', 'guaste', 'auditi', 'capona', 'baschi', 'filini', 'rodala', 'bedano', 'adatte', 'zeccai', 'plutei', 'stripe', 'fluata', 'svendi', 'scardi', 'rotaie', 'salate', 'vacate', 'gepide', 'ulster', 'lunula', 'vocaci', 'ugnaci', 'genati', 'patule', 'somaro', 'acuire', 'psilla', 'scarni', 'orrita', 'domese', 'doresi', 'malati', 'ranidi', 'frigno', 'prozia', 'urriti', 'pelaci', 'glosso', 'intela', 'rabici', 'pigino', 'desino', 'zanate', 'salace', 'spasma', 'rigati', 'rosola', 'diremo', 'lamati', 'nasala', 'aliate', 'apside', 'spiono', 'crotta', 'notata', 'kitsch', 'disfai', 'rapiti', 'baiavi', 'pagini', 'viravo', 'genito', 'bearla', 'solani', 'essudo', 'rosisi', 'pleure', 'telata', 'sbrego', 'odigli', 'recall', 'frusco', 'pesane', 'scorzo', 'tiloma', 'baliva', 'furore', 'rutuli', 'innato', 'oriana', 'ottime', 'pronai', 'bruzio', 'denudi', 'bianca', 'obduro', 'baggeo', 'dedala', 'nenfro', 'rogane', 'quarti', 'moneta', 'femori', 'sorosi', 'bovese', 'griffa', 'sanito', 'monete', 'nerumi', 'lanosi', 'capono', 'slitto', 'anella', 'grughi', 'arillo', 'spresi', 'smorza', 'cornei', 'setata', 'frappa', 'dimisi', 'alisma', 'rugghi', 'caicco', 'rovaio', 'ancora', 'miopia', 'pipata', 'brighe', 'recaci', 'tufaci', 'traici', 'cerati', 'sibila', 'caribo', 'eccomi', 'ussita', 'sanica', 'abasia', 'sbirci', 'issate', 'anario', 'iodate', 'lumino', 'blandi', 'decina', 'piante', 'efireo', 'levati', 'livera', 'brinci', 'anidra', 'inusta', 'zigato', 'visivi', 'spaeso', 'fugata', 'bungee', 'oscena', 'pilaga', 'crocee', 'mammar', 'silemi', 'ebbero', 'adesca', 'deluda', 'empile', 'usator', 'caspia', 'pulire', 'diligi', 'nutria', 'coiaie', 'apachi', 'tuffai', 'irpini', 'ratine', 'citalo', 'evacui', 'infoia', 'fuseci', 'ozioso', 'pitico', 'emulsa', 'copiai', 'cimase', 'dirupo', 'spante', 'sdigli', 'algale', 'aquose', 'gufate', 'ausoni', 'ferita', 'aruaca', 'tonavo', 'fidato', 'ansito', 'aiuoli', 'lecizi', 'caliga', 'pipina', 'cifosi', 'sugava', 'rialza', 'lodino', 'attato', 'intano', 'remane', 'orzalo', "avant'", 'smanto', 'dorici', 'rotola', 'tussah', 'panino', 'scremo', 'fumami', 'rinoma', 'odiose', 'solavi', 'famavi', 'splash', 'ergici', 'piacer', 'floree', 'fluidi', 'circhi', 'levano', 'sanato', 'irsuti', 'esseno', 'allena', 'afonia', 'miaulo', 'udiste', 'solidi', 'sparli', 'alogie', 'risazi', 'guappe', 'filavo', 'induro', 'blobbo', 'rizobi', 'strade', 'ipogei', 'seduti', 'propri', 'glorie', 'putata', 'ground', 'montar', 'vipera', 'lesole', 'sartio', 'covala', 'basita', 'depone', 'emergo', 'radili', 'ghette', 'fidati', 'litale', 'lercio', 'fusato', 'inurba', 'bevute', 'perlai', 'falchi', 'celera', 'olialo', 'ciarla', 'veglio', 'coppia', 'cagali', 'grufai', 'radilo', 'palini', 'sfocia', 'radium', 'ficati', 'ciperi', 'topazi', 'primis', 'iliadi', 'chiusa', 'buzzon', 'fendei', 'sifnie', 'favela', 'troppa', 'forame', 'borrir', 'segali', 'zollai', 'alcune', 'giocon', 'gazata', 'bruzie', 'iridai', 'veneri', 'untali', 'emetti', 'belavo', 'oppure', 'rediti', 'datare', 'nasuta', 'maroso', 'sfolta', 'osiate', 'grabbo', 'guelfa', 'gabbri', 'pinace', 'truzze', 'iatrei', 'adisca', 'ibibii', 'trofie', 'citiso', 'plughi', 'temaki', 'nasini', 'trulla', 'ertevi', 'figone', 'faille', 'eluati', 'recusi', 'adunco', 'meator', 'narine', 'adepti', 'rodati', 'iodale', 'ruzzar', 'paceri', 'solfar', 'dolami', 'pedari', 'mudale', 'ratele', 'asepsi', 'rasami', 'sanico', 'falici', 'peyote', 'stanze', 'scindo', 'cevani', 'alzane', 'sporci', 'litala', 'irriso', 'errane', 'partum', 'ibalae', 'dogaie', 'chiuda', 'stolto', 'eluivi', 'bipara', 'cringi', 'papato', 'ertomi', 'tesami', 'equale', 'smarco', 'fronda', 'ciocca', 'messia', 'sonate', 'lusone', 'gelare', 'cowboy', 'equami', 'cagalo', 'qenite', 'petano', 'tresco', 'cremar', 'odialo', 'merino', 'fatali', 'amarsi', 'pesole', 'scremi', 'tegame', 'pialla', 'olfati', 'aulica', 'tumolo', 'risono', 'utenti', 'rigodo', 'tauone', 'genico', 'ririda', 'tifaci', 'volchi', 'spiane', 'ottuse', 'flutti', 'obblia', 'tirali', 'aurato', 'ciarpi', 'gravai', 'ormalo', 'agirvi', 'sloghi', 'grippi', 'giocar', 'slembo', 'achivi', 'istata', 'linosa', 'aggela', 'alonai', 'putate', 'sbecca', 'hammām', 'edussi', 'piotar', 'iodose', 'screma', 'stocks', 'audaci', 'pilavi', 'petalo', 'temici', 'manina', 'malava', 'insito', 'vilala', 'pedici', 'pagine', 'segolo', 'godimi', 'vortex', 'satira', 'svenai', 'bitumi', 'guglie', 'deludo', 'somare', 'invida', 'grigia', 'torero', 'agogna', 'celati', 'sbotto', 'cugino', 'decapa', 'livese', 'lastra', 'poppai', 'gradir', 'esodio', 'cavale', 'usbeco', 'begate', 'varico', 'framee', 'moscia', 'atroca', 'smaghi', 'remoli', 'molide', 'arsero', 'sdarlo', 'ureici', 'penavo', 'topini', 'attrae', 'scriba', 'aerale', 'allide', 'nudano', 'lacere', 'teorie', 'binala', 'corone', 'bevuto', 'eumene', 'bielle', 'tubane', 'lisale', 'pesolo', 'avremo', 'basuto', 'bipare', 'appari', 'fatane', 'amaidi', 'ubieri', 'rifoli', 'cuculo', 'cafiso', 'rubato', 'tifati', 'groups', 'putare', 'nudalo', 'lumini', 'giungi', 'limulo', 'patina', 'cosini', 'levala', 'racing', 'franga', 'deridi', 'settai', 'contra', 'ornare', 'amiate', 'basati', 'sommar', 'carchi', 'copula', 'hahnio', 'pagaia', 'giunse', 'aritme', 'amicon', 'donavi', 'ampari', 'tarano', 'goleai', 'nilgai', 'ponine', 'salaia', 'ritema', 'varali', 'tenori', 'cucino', 'scorsa', 'sondai', 'rodalo', 'canaie', 'avatar', 'averle', 'ugnato', 'lavici', 'sbarca', 'mosane', 'naresi', 'cagare', 'artale', 'scalpi', 'cagoni', 'evulso', 'borosa', 'tesina', 'agimmo', 'smammo', 'eosina', 'calate', 'onravi', 'vividi', 'sfarti', 'fugami', 'tepali', 'lagnai', 'morale', 'fasore', 'zumavi', 'aironi', 'elmese', 'trucca', 'altera', 'tubere', 'ottura', 'sterno', 'linoni', 'vivine', 'brocce', 'amlira', 'svelai', 'arsati', 'ideata', 'bevici', 'oblava', 'assidi', 'offese', 'glasso', 'litoti', 'saluti', 'muerte', 'petate', 'frugar', 'sclera', 'emessa', 'pluvia', 'sperdi', 'artali', 'astrai', 'ulcera', 'sbolle', 'ofiura', 'oocita', 'sbarbi', 'canapa', 'agosta', 'racemi', 'togali', 'inedie', 'canoro', 'lumavo', 'datesi', 'tesisi', 'smerdi', 'unarie', 'ciacca', 'rilego', 'elenco', 'traode', 'fileni', 'sviaci', 'biocco', 'spirti', 'favino', 'tarate', 'raugee', 'induce', 'abboni', 'mesico', 'azzimi', 'culino', 'coatta', 'finire', 'stanne', 'impala', 'acuivo', 'mucico', 'sofore', 'suarie', 'illudi', 'idalie', 'ripoto', 'muglia', 'spelai', 'sdilli', 'decili', 'aramee', 'instai', 'stones', 'ottimi', 'ngonde', 'lavalo', 'cintai', 'sponte', 'focate', 'ennari', 'panali', 'assina', 'averso', 'furali', 'invien', 'strabo', 'dotano', 'fidane', 'glicol', 'mixala', 'focane', 'borine', 'mazzio', 'reputa', 'lumina', 'aitate', 'clowns', 'gazala', 'riccio', 'fotone', 'natare', 'fritto', 'dovrai', 'emunse', 'tueggi', 'sbucar', 'arcese', 'lidesi', 'baiona', 'ditali', 'sdesse', 'cubati', 'imbona', 'epizoe', 'brindi', 'immura', 'locami', 'celzio', 'fulger', 'bibbie', 'chieda', 'pelosi', 'mutile', 'salami', 'rouges', 'petavi', 'imprui', 'tacici', 'doremi', 'nolese', 'flambo', 'orbare', 'musali', 'adirle', 'misagi', 'scanto', 'simica', 'canapo', 'astila', 'piatii', 'metodo', 'oidico', 'aggere', 'pamela', 'smetta', 'ridici', 'passai', 'tepees', 'necane', 'sodale', 'fonavo', 'valida', 'devira', 'lirone', 'slombo', 'eureka', 'torcia', 'svanir', 'totani', 'pruder', 'larghi', 'esisti', 'anello', 'bononi', 'striar', 'spuzzo', 'ertemi', 'dimoro', 'create', 'enoico', 'slombi', 'cavavo', 'gommai', 'inusti', 'oblare', 'sdraie', 'emergi', 'godere', 'cullar', 'appese', 'cosala', 'genino', 'vilami', 'smorte', 'tesare', 'deputa', 'orzata', 'lingio', 'payoff', 'redale', 'curvai', 'apsidi', 'manobe', 'paciar', 'pacchi', 'coirle', 'prence', 'cecare', 'ocello', 'fugava', 'codina', 'cugine', 'mimale', 'idropi', 'riunte', 'panari', 'ardevo', 'sortii', 'vetrai', 'barica', 'nimica', 'indome', 'fumose', 'herera', 'tifano', 'bilama', 'invito', 'satini', 'dargua', 'ninnai', 'abbaio', 'rigame', 'tonici', 'cetili', 'dicano', 'lamalo', 'gemuto', 'pacera', 'rasosi', 'tonane', 'pelote', 'pierie', 'iliaco', 'riamai', 'immota', 'aurate', 'cribri', 'voiles', 'fascio', 'copali', 'accusi', 'zoomar', 'gettai', 'dasoti', 'trulle', 'podezi', 'peltro', 'scarta', 'topico', 'guardo', 'cibori', 'oblala', 'smanti', 'rosura', 'untici', 'sgambo', 'orbaci', 'licori', 'bidona', 'fiacco', 'ormale', 'antina', 'untino', 'quitta', 'saetta', 'junior', 'cartel', 'gluoni', 'stutar', 'tartan', 'addami', 'aliale', 'curali', 'espone', 'bitumo', 'shasta', 'fibula', 'diploi', 'vocalo', 'erbati', 'stecca', 'aerino', 'sbendo', 'pirato', 'catodi', 'scolpo', 'taffia', 'meanti', 'meleto', 'sarchi', 'udirli', 'buiosa', 'cinedo', 'murina', 'bombir', 'estese', 'impepo', 'sozzar', 'firmar', 'nepide', 'zarino', 'gomito', 'dragai', 'gastro', 'mutami', 'civaia', 'raiaci', 'genavi', 'feriti', 'ducale', 'nasute', 'digama', 'tiella', 'ondula', 'gadidi', 'carola', 'pollai', 'enormi', 'labour', 'traumi', 'begavo', 'minavi', 'sinesi', 'vinche', 'fluido', 'albedo', 'piover', 'polane', 'ghiaie', 'addome', 'cecalo', 'ometta', 'petata', 'biarco', 'stolli', 'alludo', 'dinghi', 'penula', 'spendi', 'valilo', 'forzar', 'sprint', 'stirai', 'zigena', 'barrir', 'scinti', 'arcati', 'ialiti', 'traevo', 'facola', 'tilosi', 'natino', 'spazzo', 'belami', 'stampo', 'depila', 'roncar', 'celomi', 'jivari', 'recevi', 'lisino', 'giusti', 'uccida', 'begava', 'cenava', 'eriane', 'biasse', 'omiani', 'estasî', 'rascia', 'grecar', 'iastio', 'natala', 'resoti', 'barare', 'goccio', 'smunti', 'videro', 'cincin', 'domaci', 'baveri', 'bufaci', 'saziai', 'ioduro', 'limita', 'ottili', 'invoco', 'lineai', 'liquar', 'desire', 'fatemi', 'glauca', 'foschi', 'agiane', 'fruivo', 'issese', 'smazza', 'nevali', 'cofano', 'vagone', 'vitato', 'gasava', 'sigano', 'nipplo', 'begums', 'iberni', 'tacana', 'consci', 'wapiti', 'sicana', 'ischie', 'smetto', 'picate', 'revers', 'onerai', 'mirane', 'rasalo', 'optava', 'egizia', 'gialuo', 'rimici', 'citali', 'guazza', 'disana', 'vilivi', 'turaco', 'africa', 'sferir', 'trecco', 'odiamo', 'creolo', 'frizzo', 'logghi', 'urlano', 'traini', 'dimuti', 'taguan', 'mucina', 'foconi', 'dimidi', 'trials', 'pensai', 'piange', 'acceca', 'mozabe', 'faroto', 'omiana', 'barche', 'pacati', 'seguir', 'lavava', 'altica', 'import', 'empivo', 'sdirli', 'aviano', 'durati', 'zigavo', 'strema', 'ondavi', 'cumano', 'armalo', 'oleine', 'dentai', 'rosese', 'contro', 'mortai', 'fottii', 'turchi', 'modana', 'coorti', 'tritar', 'sodati', 'scalpa', 'avvede', 'popoli', 'fruiva', 'pogate', 'sumere', 'chiosi', 'porcon', 'pagavi', 'ondosa', 'illuda', 'astino', 'putali', 'paluda', 'nefeli', 'taffio', 'domita', 'simide', 'averno', 'pupale', 'dotata', 'afillo', 'gironi', 'pesola', 'recano', 'prenci', 'espili', 'carcai', 'sdiedi', 'poiana', 'fulcro', 'rasivi', 'captar', 'equity', 'moplen', 'rucola', 'redala', 'necano', 'petula', 'nitrir', 'ergine', 'papini', 'alarvi', 'mucoso', 'unizza', 'libalo', 'borora', 'vigeva', 'tacila', 'lesoti', 'alluda', 'mining', 'smasso', 'ideale', 'mixage', 'coimmo', 'capiva', 'abrade', 'ubiere', 'ceppai', 'tridui', 'ondino', 'carube', 'gelavo', 'sialie', 'batali', 'svigno', 'datore', 'uguale', 'oscuro', 'raiavi', 'ancile', 'velone', 'rieder', 'oleosi', 'pedana', 'alcool', 'reculo', 'prandi', 'fedalo', 'labbro', 'setter', 'bigamo', 'fritti', 'swatta', 'amarli', 'rental', 'scorza', 'sfolla', 'eguale', 'sbrani', 'stacca', 'cedete', 'trombo', 'trabea', 'ircino', 'usarle', 'patere', 'siluri', 'papaye', 'annata', 'andrii', 'finiti', 'rienfî', 'latita', 'dumose', 'lessai', 'scassa', 'guaime', 'polena', 'tornar', 'lavata', 'aerata', 'lucana', 'dogrib', 'sdoghi', 'spiale', 'rumati', 'pubico', 'piaggi', 'vagite', 'crimen', 'polivo', 'sudice', 'tarare', 'fonema', 'stenie', 'thembu', 'erteti', 'areavi', 'sficca', 'acervi', 'sfarne', 'afasia', 'galbeo', 'fiordo', 'sonito', 'cacche', 'slumai', 'aunese', 'divimo', 'monera', 'nevosa', 'flange', 'agiami', 'frollo', 'costui', 'retore', 'omesse', 'soffri', 'vorala', 'alloco', 'sdossi', 'pagato', 'idrica', 'giunca', 'spauri', 'aerosi', 'grasso', 'ardine', 'ispida', 'petava', 'locala', 'ervesi', 'premia', 'mitene', 'bulata', 'school', 'pawnee', 'sedani', 'terona', 'pervio', 'guappa', 'alcali', 'buboli', 'teglia', 'tisica', 'borghi', 'monile', 'sugosi', 'calumo', 'imbono', 'lapaco', 'curuli', 'datari', 'cappar', 'russar', 'romita', 'oziare', 'girane', 'bambin', 'paiono', 'alzare', 'recete', 'carati', 'erario', 'risane', 'pransi', 'amarle', 'oraria', 'favica', 'beiate', 'pilavo', 'ecoica', 'barrar', 'ternai', 'lupomi', 'notaie', 'arroto', 'impube', 'evoico', 'vomici', 'cassar', 'arrola', 'eterni', 'peziza', 'calato', 'sugami', 'dopato', 'ubiqua', 'impuni', 'muggii', 'vocato', 'areche', 'amputi', 'giovar', 'furala', 'gitisi', 'goccia', 'irride', 'todari', 'tetide', 'guigge', 'cubali', 'cretta', 'covoni', 'vomivo', 'ravvia', 'ditene', 'gudeni', 'addite', 'svesti', 'orezzi', 'gittai', 'chance', 'cupreo', 'ruglia', 'coscia', 'prunai', 'protii', 'olfavo', 'asceta', 'titesi', 'ghibli', 'daunio', 'tanale', 'lesini', 'ariosa', 'arreno', 'guidai', 'basche', 'sdirlo', 'huarpi', 'cimalo', 'cubano', 'doodle', 'metesi', 'brulla', 'fodere', 'emonia', 'riduca', 'tentai', 'carnei', 'medita', 'untasi', 'udente', 'riseca', 'insita', 'ananke', 'ispane', 'sgarzi', 'maravi', 'burnus', 'toponi', 'snervi', 'intina', 'menare', 'elegge', 'sprono', 'istmie', 'outfit', 'ertine', 'tocchi', 'libbra', 'voltar', 'striai', 'algori', 'trecci', 'corali', 'piando', 'esilio', 'setine', 'costai', 'lodola', 'acanto', 'renico', 'turbar', 'piaste', 'tutata', 'bovino', 'smunsi', 'riduco', 'semita', 'glieli', 'hamada', 'stigai', 'motore', 'accodo', 'atelie', 'odorar', 'briosi', 'pedato', 'addopo', 'mitile', 'ratelo', 'spaiai', 'crucia', 'pompar', 'tenure', 'lateri', 'caduta', 'rifumi', 'borese', 'attava', 'priami', 'bleffi', 'premio', 'sfonda', 'cornai', 'etidio', 'piscia', 'cepole', 'senili', 'sbocco', 'gemilo', 'giucco', 'ramavo', 'catoni', 'ostini', 'rosivi', 'spiaci', 'prisco', 'creala', 'inseti', 'tamaro', 'elmato', 'grossa', 'ricada', 'araldo', 'spinte', 'dirige', 'evviva', 'lordar', 'judoka', 'pinese', 'rovosi', 'tifosa', 'mecche', 'divora', 'mudami', 'orzole', 'plagia', 'algico', 'nonari', 'feraci', 'tesemi', 'pimple', 'segoli', 'iatini', 'romani', 'riunir', 'bateca', 'posola', 'genala', 'odirvi', 'plebee', 'sitito', 'diesis', 'sifona', 'nemico', 'rigate', 'trucie', 'stream', 'radica', 'putalo', 'piaffa', 'ciarpa', 'sviavi', 'bruiti', 'scansa', 'rodata', 'roseci', 'mannea', 'aurite', 'sitate', 'trassi', 'sentai', 'rigali', 'sparar', 'crocce', 'assono', 'oleose', 'ipomee', 'sabini', 'affuso', 'venota', 'retami', 'sabino', 'plaudi', 'aurali', 'dedico', 'zonane', 'spenni', 'guitto', 'forino', 'rutati', 'natate', 'tagika', 'sproni', 'renovi', 'ottima', 'gualdi', 'sbirre', 'feline', 'patine', 'ditino', 'gasati', 'giunta', 'molati', 'czarde', 'paffio', 'astrae', 'rimani', 'pigale', 'delusa', 'psille', 'enagra', 'ipriti', 'pirico', 'stupii', 'svisar', 'niubbi', 'tinaia', 'droghe', 'giacer', 'ragani', 'copulo', 'canino', 'riduci', 'navajo', 'cafona', 'scarpi', 'petali', 'frigni', 'donavo', 'novero', 'sfurio', 'tusane', 'adeguo', 'secche', 'intesi', 'impila', 'ertile', 'redava', 'retaci', 'megera', 'niella', 'diktat', 'fonica', 'gelose', 'escavo', 'tomata', 'rubava', 'cococo', 'follia', 'stemma', 'ramare', 'baione', 'erogar', 'olfato', 'mundio', 'motoso', 'ospita', 'affumi', 'rimica', 'golate', 'aulici', 'inopie', 'jonici', 'aprine', 'durona', 'teiste', 'ciurla', 'rasesi', 'rissoa', 'requia', 'giurie', 'doluto', 'muffii', 'brutti', 'alaese', 'dolcir', 'ngondi', 'spolpo', 'bulate', 'everto', 'soravo', 'banchi', 'viveva', 'soccer', 'tarava', 'diacci', 'ertani', 'elissi', 'biscia', 'bevone', 'roller', 'stazze', 'orbali', 'spegli', 'vagane', 'canati', 'magnai', 'ulimii', 'mudare', 'cambre', 'comedy', 'falene', "nient'", 'deejay', 'badati', 'rimosa', 'turnai', 'lesoci', 'seggio', 'oblali', 'stufar', 'culici', 'bimbon', 'solano', 'incoai', 'bugola', 'suasso', 'favola', 'limata', 'buttai', 'culini', 'testar', 'carico', 'riarmi', 'aitali', 'inceda', 'eliche', 'ramosi', 'spegni', 'danaro', 'sviene', 'decidi', 'numide', 'iseano', 'doccia', 'famami', 'fatare', 'remata', 'onrala', 'sufiti', 'danari', 'damami', 'stormo', 'pilate', 'spessi', 'votaci', 'carpai', 'teorbe', 'baiamo', 'regale', 'antemi', 'evinta', 'cedono', 'bisomi', 'feltri', 'scoter', 'emulgi', 'adendo', 'natovi', 'svenia', 'padesi', 'risudi', 'enarri', 'traghi', 'ronche', 'tratti', 'scafai', 'render', 'stuoie', 'cresca', 'lumati', 'rivira', 'lenesi', 'luride', 'tepore', 'dorica', 'arguta', 'spezza', 'bavero', 'evolsi', 'imbevi', 'oirese', 'gemmea', 'rugavi', 'cabale', 'monemi', 'sugoso', 'spelar', 'pogalo', 'radono', 'fegati', 'fonami', 'ossida', 'accesi', 'maculo', 'tosoli', 'lagoni', 'spesse', 'iodura', 'alzino', 'morava', 'peptoi', 'parevi', 'pomici', 'zelato', 'stante', 'velale', 'senapa', 'retard', 'atipia', 'vogavi', 'pesano', 'docili', 'ranghi', 'tepori', 'letica', 'cacume', 'onralo', 'etesia', 'gemuta', 'corata', 'cinzie', 'tiraci', 'fiocca', 'fumana', 'ostili', 'panano', 'snella', 'alpine', 'atteri', 'cadono', 'metter', 'optati', 'atroco', 'capavo', 'fargna', 'tomalo', 'emanai', 'fedata', 'alnico', 'cracco', 'frulli', 'spuzze', 'quarta', 'burger', 'infami', 'cerili', 'civese', 'iridei', 'irrise', 'tegolo', 'fedaci', 'gliomi', 'necate', 'panavo', 'sdroga', 'naturo', 'tetici', 'sciola', 'grotta', 'pioppi', 'agialo', 'eucere', 'numeri', 'oblita', 'mucosi', 'aitare', 'macine', 'illesi', 'giudei', 'eburno', 'vinila', 'planai', 'esondo', 'cilici', 'allago', 'romeno', 'decori', 'pitone', 'spazza', 'scozia', 'recavi', 'riamar', 'snodai', 'gotate', 'sconci', 'zonaci', 'saltar', 'sedami', 'spande', 'prezzi', 'ruinai', 'smossa', 'doraci', 'ritesa', 'rodevo', 'evulsa', 'algosa', 'stolti', 'truono', 'dovete', 'center', 'pedoti', 'sprovi', 'gasala', 'tabici', 'mirale', 'aragli', 'ripiti', 'xenobi', 'corano', 'sadici', 'sbucci', 'miscea', 'ircano', 'bocche', 'colala', 'gottar', 'pacche', 'patani', 'borrai', 'canide', 'fenoli', 'ghirba', 'svaghi', 'rudite', 'tunica', 'fumavi', 'rimavo', 'fredde', 'attela', 'aranti', 'muover', 'fausti', 'annona', 'riurto', 'adorai', 'ligure', 'manona', 'beiamo', 'parcai', 'verter', 'levate', 'algoso', 'rorino', 'girala', 'dottar', 'redino', 'lascia', 'dromos', 'valevo', 'sfrati', 'topato', 'creato', 'anarii', 'assira', 'desuma', 'adulte', 'fisava', 'lucere', 'vagile', 'calzai', 'pomelo', 'atropa', 'fedina', 'piarmi', 'tanita', 'rasure', 'esfoli', 'penosi', 'sassea', 'pulsar', 'orzato', 'gonfio', 'tinaie', 'rancho', 'lolite', 'divisa', 'rancio', 'scotto', 'unicum', 'vogata', 'imputi', 'situar', 'areare', 'tesiti', 'emunsi', 'galani', 'loschi', 'ettari', 'decide', 'siculi', 'morena', 'mullah', 'manobo', 'laidar', 'lincee', 'sagace', 'morare', 'quarte', 'anioni', 'scempi', 'renani', 'baerie', 'plessi', 'favosa', 'basali', 'estasi', 'arando', 'ridomo', 'franco', 'yankee', 'usanze', 'scalci', 'export', 'prioni', 'salati', 'carche', 'livore', 'gliale', 'ennesi', 'adesar', 'volgar', 'parrai', 'natata', 'cumani', 'giambi', 'raiato', 'proave', 'oplita', 'bisave', 'rinota', 'funger', 'ammaia', 'volpai', 'cagate', 'outing', 'ertosi', 'milion', 'ertasi', 'nitida', 'nasata', 'azoica', 'eskimi', 'erinni', 'ciotte', 'drinks', 'azzeri', 'schifi', 'infule', 'aguati', 'boriti', 'pokoma', 'chitar', 'girami', 'rumano', 'risesi', 'binata', 'nasaci', 'gasali', 'strobo', 'ammori', 'vedilo', 'cappai', 'rifare', 'molini', 'campus', 'lascio', 'vilata', 'aremme', 'rispia', 'marana', 'ghenga', 'bufavo', 'orrida', 'torrio', 'isiaci', 'dovese', 'geoide', 'tenare', 'sporla', 'sacchi', 'venino', 'valeva', 'vivaio', 'sodino', 'appago', 'albate', 'mucica', 'unirei', 'vimavi', 'gialli', 'macchi', 'orrito', 'usarli', 'cenami', 'letamo', 'casini', 'fronte', 'tipico', 'rifilo', 'belata', 'cafire', 'valide', 'skibus', 'ricopi', 'desina', 'cubito', 'smessa', 'quadre', 'ureico', 'untata', 'emulse', 'mutuarì', 'ciompo', 'dedite', 'ircine', 'eparca', 'dolope', 'culato', 'fonano', 'giraci', 'zelala', 'insane', 'comici', 'brighi', 'tipina', 'lesena', 'nesese', 'fraudo', 'ignoto', 'lineto', 'artami', 'irrisi', 'impana', 'inedia', 'nugola', 'brusca', 'geisha', 'fulcri', 'olirli', 'uffici', 'zucche', 'arsito', 'sfasci', 'cartai', 'renami', 'catana', 'quagga', 'pabulo', 'smorso', 'bruivi', 'baobab', 'recisi', 'venane', 'manici', 'meiosi', 'casato', 'iemali', 'arbana', 'dolala', 'fecali', 'lasese', 'ciampe', 'nerini', 'tuonai', 'gladio', 'pylori', 'rimata', 'rimula', 'necare', 'pilava', 'ciprea', 'volali', 'truzzi', 'mendai', 'angevo', 'resosi', 'urgevo', 'casbah', 'sugavo', 'gitine', 'trieco', 'idresi', 'bubali', 'gretti', 'alluse', 'meline', 'stampa', 'nagana', 'blenda', 'alzala', 'novale', 'rugate', 'cubana', 'bimana', 'fusale', 'indugi', 'accede', 'gaming', 'fogata', 'sverla', 'snudai', 'tarpeo', 'soraba', 'salivo', 'scalzi', 'esento', 'arcala', 'allevî', 'mimami', 'rogalo', 'riditi', 'pimpla', 'muravo', 'pipari', 'atleta', 'dolori', 'bombar', 'sonchi', 'pervie', 'bareno', 'secale', 'zirlio', 'eczemi', 'rumino', 'smerar', 'damano', 'relate', 'safene', 'rapidi', 'nerveo', 'dimeni', 'lagose', 'paruta', 'anzese', 'innata', 'vanire', 'polani', 'rapide', 'camera', 'cresce', 'rapire', 'bitume', 'roralo', 'pilata', 'congio', 'frenar', 'borita', 'plotta', 'ansale', 'bouffi', 'donali', 'bavaro', 'turaci', 'chiodo', 'apriva', 'bonese', 'geniti', 'valina', 'arreda', 'favolo', 'scossa', 'sedile', 'virata', 'vinota', 'bacano', 'gaetto', 'sforma', 'pogavi', 'timbre', 'batolo', 'rubidi', 'ungete', 'gangli', 'phylum', 'spetra', 'vigilo', 'strina', 'orzino', 'uccise', 'rosica', 'ruguma', 'ercini', 'dromie', 'dicava', 'smogli', 'mitili', 'salari', 'tarino', 'vinili', 'dirimo', 'reggia', 'fucila', 'sciamo', 'ricade', 'sditti', 'scappo', 'algine', 'fatate', 'bugula', 'subite', 'copuli', 'aderta', 'aurita', 'spetta', 'vitreo', 'bdelli', 'duchea', 'sgarza', 'alzato', 'rimedi', 'salavi', 'sbotta', 'raialo', 'emulai', 'eroder', 'murale', 'sciure', 'guerci', 'bruite', 'regoli', 'cerali', 'eoline', 'rinate', 'rodiai', 'radori', 'arreni', 'folade', 'votali', 'crebbe', 'risodi', 'brocco', 'oblaci', 'payena', 'lecchi', 'sculta', 'smussa', 'gettar', 'lanino', 'versai', 'cretti', 'natica', 'tenaci', 'ittici', 'sicula', 'sfogni', 'ridori', 'variar', 'cerate', 'anteli', 'reflui', 'adegua', 'umiste', 'angelo', 'sedute', 'sgarzo', 'aziaca', 'urtate', 'smorir', 'indora', 'ciaoni', 'medele', 'valzer', 'ritani', 'eretai', 'sierra', 'ollari', 'telero', 'spruni', 'aocchi', 'diradi', 'prompt', 'valore', 'pizzar', 'dosale', 'fomiti', 'micosi', 'eliaca', 'rivada', 'errino', 'muffin', 'osiamo', 'ferrea', 'barese', 'ustoli', 'aperse', 'coatte', 'rorami', 'elvesi', 'mearti', 'ertene', 'tumula', 'abrada', 'avvita', 'guasca', 'antere', 'cavala', 'lesiva', 'mitena', 'malori', 'stanga', 'ofridi', 'lucida', 'lussai', 'scioro', 'inside', 'difili', 'lesivi', 'scifto', 'platea', 'lilion', 'epigee', 'arcidi', 'lisane', 'docmio', 'tancai', 'tirone', 'cotini', 'vocano', 'navero', 'gelava', 'assali', 'censii', 'scrime', 'aloide', 'starei', 'fragri', 'alfure', 'vatene', 'ribuca', 'volche', 'fumigo', 'boriar', 'cupole', 'biondo', 'celane', 'tramar', 'sitire', 'segone', 'oplete', 'stromi', 'vacami', 'estata', 'nevaia', 'magoni', 'niceno', 'sfilzo', 'mohair', 'zemesi', 'ispidi', 'uvaggi', 'sicari', 'rimini', 'rinega', 'sfanga', 'ornate', 'scopro', 'tesaci', 'spialo', 'svasar', 'umidii', 'tablet', 'rutese', 'ctonia', 'betico', 'ignari', 'zeriba', 'aplomb', 'giralo', 'dimmer', 'imitai', 'bevilo', 'chinai', 'fasale', 'scuola', 'soleil', 'indori', 'erbori', 'pipali', 'middle', 'acedia', 'datoci', 'scaleo', 'sgarri', 'affido', 'flagga', 'scuter', 'attiro', 'acrali', 'circea', 'marene', 'smorba', 'macuba', 'meliga', 'ceraia', 'ossese', 'drizze', 'eluivo', 'nevaie', 'indiai', 'ricine', 'sanano', 'piglio', 'arenti', 'catone', 'biconi', 'pilaci', 'rinomo', 'ozelot', 'spiuma', 'ortivi', 'agenda', 'frauda', 'aerine', 'dilata', 'mammai', 'urtico', 'ceroso', 'niobio', 'areino', 'ziette', 'molale', 'sgurai', 'fleggo', 'riungo', 'dietro', 'elegga', 'nomato', 'ciuchi', 'monito', 'fucsia', 'truoni', 'leccar', 'risavi', 'folcer', 'pulesi', 'sgusci', 'burlar', 'cimbre', 'gabbro', 'sagrai', 'curano', 'cardio', 'lamber', 'sbramo', 'esalto', 'ibrido', 'attera', 'triano', 'spasta', 'sirime', 'adulta', 'parale', 'ubichi', 'sdonna', 'migale', 'satire', 'basare', 'smagli', 'focaia', 'uccide', 'cimese', 'cagava', 'gitati', 'gabini', 'bittar', 'purina', 'tarali', 'dicali', 'elitre', 'plagio', 'stampe', 'erbiti', 'puliva', 'ricuci', 'lemico', 'apliti', 'biseca', 'tonate', 'limini', 'eskimo', 'sversi', 'bische', 'movevo', 'beffar', 'adusti', 'purghi', 'musano', 'visura', 'pereti', 'buffet', 'soduce', 'skypai', 'elessi', 'tintin', 'comico', 'milita', 'amello', 'carino', 'carnee', 'rivede', 'castro', 'medese', 'cesari', 'abituo', 'rogava', 'scasai', 'fluita', 'amorfi', 'epatte', 'ridine', 'cestir', 'varica', 'marlin', 'bruiva', 'volaci', 'parche', 'putino', 'pareli', 'matici', 'orrivo', 'rubavo', 'passio', 'valuto', 'sudala', 'resici', 'emunta', 'ceffai', 'spiano', 'locone', 'migrai', 'tufale', 'fucile', 'tubali', 'grinza', 'satura', 'dopali', 'rifuma', 'natesi', 'barbon', 'cracka', 'doglie', 'berrai', 'rostro', 'appose', 'triari', 'fumata', 'pofano', 'colona', 'capava', 'manine', 'simili', 'rogare', 'retare', 'ghirbe', 'spugno', 'avelta', 'saggia', 'eringi', 'ulmico', 'smerdo', 'ragion', 'fanghi', 'cacala', 'sdetto', 'acciai', 'letami', 'mirare', 'spansi', 'stizza', 'disagi', 'ialina', 'arrida', 'aspata', 'famate', 'luposa', 'adasti', 'ninfei', 'granfa', 'unioni', 'lemuri', 'cassio', 'lofidi', 'sciare', 'aglifa', 'inosso', 'fanese', 'bufata', 'osando', 'stormi', 'cacumi', 'gramai', 'cosate', 'flagra', 'edafon', 'estine', 'piovvi', 'ciechi', 'erbosi', 'esteti', 'pogati', 'desiar', 'faroti', 'sfaldi', 'pipino', 'volevo', 'sculte', 'lessie', 'cesoie', 'orbaco', 'lupare', 'tratto', 'fataci', 'curaro', 'ascino', 'crucis', 'tataro', 'hacker', 'aitato', 'volvei', 'untaci', 'risine', 'assise', 'rosico', 'fibbia', 'begola', 'menoma', 'trieca', 'noismi', 'equati', 'arsoci', 'giubbe', 'resche', 'ooteca', 'amento', 'cricca', 'ammiro', 'lanugo', 'aurare', 'locano', 'barico', 'colane', 'mearla', 'durano', 'braita', 'taluni', 'rugoso', 'ceralo', 'sugalo', 'roride', 'bluffo', 'abitai', 'aracea', 'alaude', 'serica', 'arasti', 'bubavo', 'rapale', 'aculei', 'twitti', 'talune', 'native', 'ellino', 'spleni', 'rettor', 'scarpa', 'brasar', 'zinnai', 'getule', 'svenar', 'aeravo', 'pokomo', 'ossesi', 'palese', 'pasqui', 'addate', 'zinchi', 'elivia', 'pogato', 'sfridi', 'egente', 'focale', 'bagobo', 'nelson', 'trotto', 'sitivo', 'untavo', 'gliela', 'dannai', 'learda', 'artica', 'cercai', 'ascisc', 'scalda', 'staffe', 'fecero', 'tarlar', 'stesti', 'cenino', 'fillio', 'mucchi', 'essene', 'barono', 'giallo', 'briosa', 'efiree', 'disino', 'sdazia', 'morina', 'assodi', 'pitica', 'svenga', 'summit', 'coirci', 'mponda', 'gabbia', 'notino', 'careli', 'occiso', 'spleen', 'sedevo', 'occide', 'prugno', 'cafile', 'sufita', 'svanii', 'sblusa', 'vanghi', 'thrill', 'tuberi', 'musoni', 'gramma', 'trance', 'rasavo', 'oziaci', 'suzzar', 'sverso', 'comato', 'riposa', 'aliavo', 'rumour', 'graffa', 'lamate', 'invada', 'immisi', 'iacuta', 'idioma', 'doctor', 'marano', 'orzala', 'legava', 'gibaii', 'setato', 'adonio', 'volute', 'senape', 'pineni', 'noveti', 'beffai', 'dirgli', 'bandai', 'aurose', 'arsimi', 'zurlar', 'tocche', 'fatavo', 'scalfo', 'stazza', 'sforai', 'canuri', 'vocivi', 'fiochi', 'riecco', 'regino', 'istami', 'peloso', 'cavato', 'intima', 'rimixo', 'vocavo', 'risino', 'spansa', 'spiumi', 'alluci', 'birchi', 'calali', 'bastie', 'spreto', 'atrope', 'austri', 'desiri', 'amorfa', 'grommi', 'ottopo', 'datevi', 'errare', 'agirsi', 'robone', 'rubine', 'fasare', 'endici', 'zigane', 'pepale', 'nodali', 'pagana', 'regine', 'fucine', 'nascer', 'ingioî', 'purala', 'fornir', 'crocca', 'contea', 'avochi', 'moscai', 'redove', 'domava', 'fetide', 'cevana', 'zarosi', 'garosi', 'isiaco', 'papino', 'slungo', 'sinidi', 'tundre', 'cibari', 'bricia', 'inviso', 'gitano', 'bodies', 'cuculi', 'adirmi', 'ruvide', 'bevono', 'pesete', 'ricimi', 'ponevi', 'family', 'rotoli', 'sorsai', 'aragno', 'ignito', 'roggia', 'strega', 'insana', 'turame', 'boiare', 'viaria', 'venire', 'astine', 'dilavo', 'elbana', 'biolca', 'rotone', 'menami', 'venera', 'automa', 'milota', 'sgasai', 'pupari', 'baioni', 'pratia', 'empine', 'tacito', 'levato', 'quiete', 'cipero', 'insula', 'asciti', 'sbrigo', 'udirai', 'ducavo', 'fedate', 'svelte', 'bucali', 'nodale', 'amorea', 'famose', 'eupnea', 'muglio', 'tenrec', 'fonder', 'zaroso', 'usarti', 'rasali', 'oblito', 'bugiai', 'bussar', 'ovetti', 'tarpai', 'ciospo', 'carina', 'bigolo', 'mascon', 'amerai', 'affiso', 'vegeti', 'contai', 'bustai', 'abolla', 'sinoli', 'setoli', 'rimisi', 'decede', 'ponimi', 'fumano', 'trappa', 'aragne', 'arbuto', 'zigani', 'branca', 'rodere', 'desumo', 'noiare', 'cifrai', 'organo', 'corico', 'fumoir', 'uccido', 'datasi', 'stenui', 'vomito', 'guasco', 'vogavo', 'gasoso', 'romice', 'propor', 'ferrar', 'adotti', 'correa', 'unisce', 'turala', 'aziona', 'meglio', 'resemi', 'safeno', 'denari', 'cerosi', 'resale', 'galbei', 'smunto', 'makers', 'altini', 'inossi', 'pinose', 'aurore', 'sciori', 'smosse', 'ursini', 'nulesi', 'foggio', 'menano', 'sfatta', 'amplia', 'tifosi', 'gabalo', 'pacino', 'bitter', 'invoca', 'ommisi', 'trenta', 'supine', 'vexata', 'soriti', 'iemale', 'pervia', 'camini', 'vociva', 'incera', 'erbata', 'ottria', 'dilava', 'lustre', 'ammore', 'pogami', 'morone', 'segati', 'sorava', 'raseti', 'usciva', 'badami', 'muccio', 'alcova', 'secali', 'oliavi', 'odirei', 'giungo', 'texana', 'sapere', 'tempra', 'fonale', 'celebe', 'onrata', 'falcai', 'linosi', 'zonare', 'resovi', 'umbone', 'blasmo', 'ecciti', 'cosale', 'putala', 'stesso', 'nitrii', 'osceno', 'pulivo', 'erbaio', 'iodino', 'ceroni', 'colate', 'soluto', 'rosina', 'egerie', 'molino', 'bulane', 'telino', 'majors', 'pesavi', 'solute', 'pesalo', 'bubavi', 'bifasi', 'nasica', 'sporne', 'starni', 'foglio', 'sgamar', 'pedice', 'mostai', 'touche', 'aurosa', 'spammi', 'riergo', 'aracee', 'sniffa', 'tenuti', 'olorai', 'ibidem', 'pippar', 'landau', 'dragon', 'biotti', 'tosoni', 'horror', 'patino', 'ovulai', 'rierga', 'angevi', 'terrii', 'riluci', 'creano', 'ponera', 'cesana', 'ostate', 'sferzi', 'gestor', 'pesala', 'cripte', 'lodale', 'opachi', 'pagino', 'arsili', 'amplio', 'bollar', 'urgiti', 'aurito', 'galego', 'muslim', 'teurgi', 'napalm', 'fugati', 'scusse', 'cubare', 'coiara', 'sdorar', 'cubami', 'unizzi', 'tratta', 'enervi', 'idrata', 'gricci', 'albori', 'enarca', 'tediai', 'telalo', 'ordine', 'ridire', 'stores', 'loiche', 'ligula', 'otarie', 'poccio', 'oppose', 'fremir', 'erompe', 'vossia', 'scardo', 'argivo', 'crepai', 'triera', 'adonai', 'nudavo', 'zoster', 'orlati', 'assile', 'obliti', 'attaci', 'cenuro', 'sfogno', 'vorrai', 'fumate', 'sporli', 'skippa', 'variai', 'zoppar', 'arsire', 'savese', 'mutale', 'cocchi', 'nomati', 'igloos', 'enoica', 'disfar', 'amitto', 'ambagi', 'mucido', 'adopro', 'cocevo', 'sorami', 'vorava', 'utenze', 'sfitti', 'coopta', 'cracko', 'nogami', 'unirai', 'bevete', 'sfilai', 'zitone', 'bulati', 'donata', 'acedie', 'renina', 'borace', 'gariga', 'culale', 'pogare', 'acuzie', 'brigai', 'storte', 'saglie', 'gerito', 'ragnai', 'paridi', 'tirane', 'dosata', 'poggia', 'primai', 'coline', 'sepion', 'casino', 'skippo', 'nativa', 'geyser', 'morder', 'idruri', 'orbite', 'disira', 'buduma', 'raspii', 'agonie', 'avella', 'afrosi', 'fuggii', 'frante', 'onesto', 'fenico', 'bagolo', 'surimi', 'cimasa', 'infime', 'occupo', 'floema', 'sabbio', 'hadith', 'ognuno', 'pugnar', 'orbene', 'facula', 'abbado', 'mucato', 'gualca', 'rondes', 'bernia', 'mutala', 'lassar', 'rigemi', 'sberta', 'sbuzzi', 'tsughe', 'casina', 'anidre', 'latici', 'scarsa', 'ocresi', 'moniti', 'arrivi', 'fusata', 'canova', 'occisa', 'ostavi', 'spunta', 'pittor', 'guerra', 'inleio', 'langhe', 'stoppi', 'defeca', 'armane', 'stosci', 'mixavo', 'tuello', 'tutala', 'unitor', 'issavo', 'arerei', 'biparo', 'guizza', 'scinte', 'ornata', 'svizio', 'creava', 'timele', 'ordiva', 'schivi', 'herpes', 'adidas', 'vigere', 'ordire', 'corner', 'catare', 'filmai', 'levesi', 'funali', 'bosani', 'zifidi', 'miralo', 'tandem', 'agirai', 'ghindi', 'molcir', 'incaco', 'gaetti', 'blouse', 'miraci', 'furati', 'scersi', 'enante', 'irrumi', 'iogurt', 'intori', 'godono', 'orbalo', 'ararli', 'clicco', 'tonava', 'vorami', 'spoeti', 'cogiti', 'provar', 'stiate', 'aspidi', 'volume', 'bulali', 'urlaci', 'gitomi', 'pacami', 'radiar', 'miloto', 'lupina', 'rugumi', 'malghi', 'netino', 'cetano', 'manate', 'vivano', 'flegmi', 'biremi', 'crocea', 'crosti', 'camali', 'spinar', 'bucava', 'flutto', 'munivo', 'incubi', 'tuderi', 'alluvi', 'asiago', 'areate', 'polder', 'valile', 'saputo', 'trivia', 'esigue', 'vagale', 'vanane', 'rodimi', 'incito', 'attare', 'squami', 'acuito', 'ramute', 'stinse', 'regami', 'harure', 'travet', 'anervi', 'lavabo', 'floppa', 'gospel', 'benzoe', 'ignude', 'padana', 'ritira', 'sburri', 'shaker', 'putido', 'patata', 'saniti', 'manali', 'coltro', 'ripela', 'areane', 'cinedi', 'sfessa', 'sviava', 'ripire', 'adduai', 'diruta', 'susana', 'adoppî', 'pedano', 'caftan', 'amelie', 'tutele', 'stolsi', 'drizzo', 'nausei', 'street', 'colmar', 'online', 'orciai', 'assoda', 'lambir', 'smalta', 'susino', 'agrume', 'onrare', 'festar', 'pedeti', 'sedule', 'codato', 'cuocia', 'volavo', 'mogano', 'usanti', 'orobia', 'scalmo', 'dolosa', 'sviali', 'sirese', 'soduca', 'leccon', 'udirei', 'sandre', 'orfico', 'rivola', 'zigali', 'vicoli', 'innari', 'varani', 'boccia', 'output', 'macoli', 'ettaro', 'domino', 'trippe', 'sdarla', 'mimate', 'serene', 'lacero', 'ariamo', 'tenute', 'blobbi', 'decimo', 'agende', 'sandhi', 'cibalo', 'strabi', 'capavi', 'lapsus', 'svella', 'pascer', 'ferivi', 'simico', 'vanavo', 'averto', 'magari', 'pestar', 'limole', 'leniva', 'binale', 'ossoso', 'oberai', 'furare', 'moncar', 'clinch', 'elette', 'nacque', 'sonoro', 'stinar', 'urlalo', 'camavi', 'ferrai', 'blindi', 'bosone', 'aldina', 'offici', 'bucate', 'shaykh', 'sigaro', 'erpeti', 'fotoni', 'rimeno', 'duroni', 'scinde', 'peroro', 'sorani', 'bolini', 'crasso', 'serata', 'ileite', 'felice', 'insego', 'udimmo', 'dolese', 'usarlo', 'sverzi', 'necami', 'putaci', 'mirano', 'bigiar', 'volano', 'scipar', 'rabidi', 'musale', 'scorso', 'porosa', 'angore', 'adirne', 'glassa', 'rasala', 'dralon', 'speech', 'citavo', 'carneo', 'ordino', 'novaci', 'cenato', 'rigola', 'cashes', 'rimuro', 'oxford', 'stoico', 'citane', 'anidri', 'gioino', 'incara', 'sugose', 'fatici', 'misera', 'tedino', 'carabo', 'odorai', 'rigane', 'mudati', 'aniste', 'gessea', 'educer', 'emulso', 'errato', 'gasale', 'cimosa', 'cacati', 'storti', 'affili', 'squero', 'alzale', 'potevi', 'celale', 'freeza', 'sballo', 'imenio', 'ridata', 'goffri', 'amparo', 'fanghe', 'pogesi', 'cricco', 'lamano', 'svampa', 'tapine', 'favico', 'ternar', 'spedir', 'cercar', 'saighe', 'canute', 'venava', 'gómena', 'untati', 'casaro', 'issavi', 'onduli', 'solfai', 'regole', 'talled', 'celibe', 'granir', 'binavo', 'sorori', 'celalo', 'rasero', 'laureo', 'baiate', 'tunger', 'condom', 'arcami', 'coobai', 'smunta', 'spanta', 'bubano', 'amputo', 'vaiola', 'sudari', 'sborsi', 'afrore', 'lanara', 'campir', 'periva', 'rolesi', 'meando', 'condri', 'meriar', 'sititi', 'bibuli', 'novane', 'matusa', 'calami', 'telala', 'mietei', 'grappe', 'sviste', 'plinto', 'meonia', 'pepavo', 'steste', 'dipolo', 'plotti', 'arrapa', 'toroso', 'dunoso', 'attini', 'frange', 'utello', 'cordis', 'teocon', 'illati', 'untesi', 'rasemi', 'pirene', 'godrai', 'dovrei', 'temiti', 'rotato', 'idonea', 'spompa', 'rodiar', 'atrici', 'sbadir', 'tabido', 'focene', 'tanami', 'figulo', 'bolide', 'evelte', 'nitori', 'ipomea', 'rubali', 'stayer', 'catgut', 'gemmei', 'traoda', 'brasai', 'bodino', 'enrico', 'bacaie', 'riarso', 'lamata', 'bresca', 'impilo', 'flussa', 'sature', 'sdicci', 'ditele', 'assedi', 'issopo', 'aggera', 'saglia', 'binato', 'zannar', 'piaroa', 'leppai', 'accidi', 'ansati', 'cosane', 'marito', 'zufola', 'durino', 'damato', 'orridi', 'egizie', 'rosici', 'parchi', 'effusi', 'biopic', 'agrafe', 'scurar', 'eroina', 'natola', 'papaia', 'doppia', 'ostavo', 'arcali', 'limalo', 'camusi', 'ranfia', 'cadmei', 'lumaie', 'pivots', 'ideane', 'burchi', 'iodalo', 'ferola', 'pasqua', 'scialo', 'varato', 'spilla', 'funere', 'urango', 'commis', 'baulai', 'senali', 'sfasar', 'barbar', 'delibo', 'sottar', 'eculei', 'tisana', 'roiesi', 'canore', 'nunzie', 'togato', 'coirvi', 'emunte', 'invase', 'bevimi', 'lentie', 'smalla', 'tripla', 'solavo', 'ramano', 'asiaco', 'snobbi', 'wafers', 'natiti', 'untano', 'schisi', 'aitala', 'aitaci', 'alnici', 'subivo', 'gromme', 'severe', 'sokori', 'rapavi', 'bastir', 'esculi', 'andino', 'pepati', 'pinche', 'ponici', 'estera', 'carusi', 'dorino', 'casari', 'monchi', 'ladaka', 'anobio', 'ricola', 'assida', 'plotto', 'ormata', 'grotti', 'cadusi', 'scindi', 'catara', 'manoba', 'raspio', 'medino', 'rullio', 'dorami', 'picion', 'averla', 'arieta', 'muffir', 'rifora', 'sviata', 'ilvate', 'ottoni', 'evolse', 'spicco', 'rapace', 'rabbui', 'proemi', 'tutolo', 'guasti', 'vigili', 'legume', 'vertei', 'ruteno', 'idealo', 'giudeo', 'critto', 'neutro', 'votato', 'cigani', 'calido', 'sberto', 'getuli', 'atipie', 'ascidi', 'perite', 'gluone', 'urlala', 'uniste', 'esimie', 'obliar', 'elesse', 'ansata', 'focati', 'anelai', 'uscita', "quart'", 'favoso', 'bevere', 'ignaro', 'udirci', 'urgevi', 'dolesi', 'lucine', 'vaniar', 'roffie', 'mestar', 'attuta', 'totela', 'sodata', 'tosese', 'cigano', 'lofote', 'vitine', 'panati', 'smosta', 'flocca', 'reduce', 'impesa', 'sposta', 'legnai', 'future', 'frusta', 'dirham', 'notule', 'sponga', 'dramma', 'cioppa', 'itrane', 'veltro', 'gabber', 'cucita', 'medine', 'impeti', 'agiate', 'vimato', 'updati', 'vocali', 'transi', 'milady', 'dotare', 'bluffi', 'ecoici', 'fusovi', 'smagai', 'spetto', 'purati', 'additi', 'broilo', 'solver', 'romite', 'iessei', 'mimala', 'dolata', 'arvale', 'sbobba', 'dateti', 'motive', 'issino', 'zumale', 'blogga', 'tubino', 'lodami', 'fumale', 'paddle', 'eleate', 'buccio', 'sconti', 'cumini', 'fileno', 'esposi', 'chitai', 'coiame', 'eunuco', 'cadimi', 'godine', 'appesa', 'rumene', 'erravo', 'famulo', 'rizomi', 'inolio', 'putiva', 'riposo', 'seduco', 'fluida', 'putita', 'minano', 'offesa', 'gomena', 'vorali', 'taxodi', 'ferver', 'emetta', 'ornami', 'baiano', 'vibice', 'ristar', 'bianco', 'osmica', 'ungara', 'alleno', 'vedico', 'perita', 'talari', 'albica', 'iodavi', 'filalo', 'caneli', 'frigie', 'temide', 'escudo', 'anurie', 'adisti', 'prosai', 'dicavo', 'anoica', 'ricedi', 'fumoso', 'bussai', 'presti', 'lenivo', 'invece', 'polire', 'gofero', 'irrora', 'danuna', 'picato', 'incidi', "ultim'", 'flagri', 'ungeva', 'fratte', 'mitrei', 'rasole', 'citare', 'busvia', 'auravi', 'cognac', 'chinea', 'balera', 'cavito', 'aviari', 'avvena', 'anitra', 'prisma', 'instia', 'aguzze', 'charts', 'folder', 'desume', 'deduce', 'rivoga', 'nogata', 'canata', 'marita', 'ovatti', 'attrar', 'giochi', 'molano', 'glossa', 'colavi', 'smorii', 'filavi', 'volare', 'fuetto', 'impeso', 'bucami', 'bendar', 'svapar', 'assiti', 'ertivi', 'oblate', 'spigli', 'tonali', 'saputi', 'cacato', 'pudici', 'sbarro', 'bretta', 'tubolo', 'mponde', 'bidoni', 'volava', 'mammon', 'rullai', 'barrai', 'inviai', 'temete', 'tignar', 'usaste', 'pipaci', 'cimane', 'ulceri', 'sbanda', 'avalve', 'teleri', 'bovine', 'assedî', 'ammuso', 'sedati', 'begavi', 'glutei', 'arroso', 'rubini', 'eleati', 'spasso', 'agrore', 'lipoma', 'tuboni', 'avvoco', 'pedino', 'ornale', 'rumavo', 'sorabe', 'friggo', 'nastia', 'spione', 'cerose', 'maxima', 'crolli', 'trebbo', 'lesosi', 'agrari', 'dovute', 'rimaci', 'sbrano', 'sbriga', 'leader', 'ritaro', 'postai', 'senufa', 'stragi', 'addita', 'livero', 'fusaie', 'sapute', 'bulica', 'manale', 'veruni', 'celeri', 'illata', 'orgoni', 'smusar', 'evitte', 'datovi', 'azalea', 'avesse', 'colite', 'covami', 'ascree', 'sciala', 'spammo', 'vacano', 'tigrai', 'sciupi', 'tesali', 'persea', 'persia', 'pepose', 'istoni', 'mescal', 'terzio', 'indove', 'pilare', 'vapoli', 'luoghi', 'bovide', 'incube', 'ottali', 'cerchi', 'laniai', 'navato', 'derise', 'esopee', 'matria', 'mussai', 'timoni', 'albore', 'frodai', 'negano', 'adiamo', 'nekton', 'abcase', 'sparta', 'emacio', 'postar', 'target', 'algide', 'conche', 'sfighe', 'paduli', 'prepor', 'pagati', 'orarmi', 'panavi', 'donneo', 'depore', 'misuro', 'paffia', 'svieni', 'celite', 'scalei', 'regime', 'effige', 'oliava', 'annale', 'estrai', 'recila', 'floppi', 'esponi', 'unirmi', 'birdie', 'fregni', 'barsoi', 'bardar', 'ormoni', 'arzesi', 'taiyal', 'nostro', 'legare', 'celino', 'temano', 'fononi', 'sentar', 'dilimo', 'dopate', 'numidi', 'stride', 'focesi', 'fidavo', 'idonee', 'diteco', 'scopia', 'animar', 'panace', 'indole', 'forese', 'putivi', 'fumosi', 'fintai', 'rosolo', 'volagi', 'isolar', 'impeci', 'cavidi', 'udirti', 'norici', 'squama', 'terghi', 'scorto', 'erutti', 'musami', 'cembre', 'piovra', 'scavai', 'ramosa', 'cotona', 'riersi', 'sduchi', 'zinnie', 'librai', 'saziar', 'sdraio', 'pellet', 'catena', 'cecata', 'fucate', 'fanali', 'affina', 'bilobo', 'stecco', 'ciprio', 'rolini', 'eniali', 'sdirti', 'nielli', 'ondata', 'guaite', 'segato', 'covile', 'digiti', 'baiese', 'sistri', 'chatta', 'gioivo', 'causai', 'inalbi', 'modici', 'sberni', 'sgusti', 'doloso', 'deliri', 'sparse', 'solale', 'indico', 'polesi', 'urania', 'alluma', 'sfilze', 'sememi', 'zittai', 'eocene', 'vasaio', 'prismi', 'benone', 'rodili', 'etnica', 'pagode', 'mercar', 'lincei', 'stilar', 'chakra', 'bolari', 'andata', 'eczema', 'lucore', 'bufare', 'dorrai', 'crossa', 'aliamo', 'olendo', 'cacavo', 'tesolo', 'merlai', 'coccio', 'rocchi', 'pagata', 'dopale', 'balzar', 'penati', 'dumoso', 'riders', 'rigelo', 'ricedo', 'sorali', 'arpesi', 'uzbeca', 'theatr', 'vernai', 'duerni', 'abbono', 'arrosa', 'lasica', 'scozzo', 'cromar', 'bavara', 'ripesa', 'recise', 'morule', 'vengio', 'critti', 'vincer', 'vomero', 'vacuum', 'dicavi', 'bionti', 'pabuli', 'scarse', 'dimere', 'canuto', 'lampai', 'elgona', 'spille', 'purane', 'tarsia', 'lastre', 'intora', 'sfrato', 'mudava', 'ambiti', 'iazide', 'tettai', 'casose', 'sorbii', 'teiera', 'menomi', 'pickup', 'ardore', 'redita', 'addavo', 'gemmar', 'fiammi', 'caroli', 'mollar', 'cnidio', 'pedale', 'inputo', 'resala', 'negato', 'invasa', 'unisci', 'jockey', 'emioli', 'limano', 'adromi', 'astemi', 'pigolo', 'presto', 'coloni', 'vivrai', 'sanavo', 'pinchi', 'dadini', 'lisate', 'eparco', 'sfinii', 'impanî', 'tomava', 'veliti', 'biluce', 'vigori', 'cotili', 'sbluso', 'etopee', 'fucino', 'rotata', 'troiai', 'risele', 'blatte', 'rombar', 'gitili', 'risaci', 'spenno', 'suideo', 'micche', 'fiscal', 'smotto', 'odirci', 'sangui', 'smosti', 'bilica', 'spighe', 'badavi', 'arsolo', 'pugile', 'iugali', 'adugge', 'triple', 'rituri', 'pallia', 'ovatte', 'serper', 'stinti', 'raiate', 'pacala', 'ottave', 'bubola', 'fransi', 'visori', 'avulsa', 'veleno', 'auleta', 'fiotta', 'sclere', 'nasino', 'lappai', 'invaia', 'tegola', 'estimo', 'volata', 'istavo', 'cresta', 'borivo', 'coltan', 'eppure', 'estivi', 'omelie', 'sdacci', 'immoto', 'ducane', 'murini', 'tagiki', 'viliti', 'modica', 'ripesi', 'pratii', 'rimino', 'ondava', 'insila', 'sedaci', 'giachi', 'agenzo', 'dolati', 'ciurli', 'droide', 'inscio', 'maraca', 'vasino', 'amasia', 'usurai', 'urlati', 'swatto', 'genesi', 'rorata', 'nogava', 'avvisi', 'vivere', 'tamisi', 'fisavi', 'papiro', 'sfugga', 'dotato', 'fenolo', 'deride', 'vacane', 'ladine', 'araste', 'niceni', 'resero', 'sfagli', 'robino', 'talchi', 'palone', 'stolzi', 'screzi', 'snasar', 'logore', 'monaca', 'ghigne', 'rogaci', 'laidai', 'disiar', 'godilo', 'tagghi', 'unirci', 'serrar', 'muschi', 'sfalso', 'natato', 'cabili', 'burrai', 'buiose', 'corteo', 'eusino', 'necale', 'silani', 'bubata', 'canyon', 'tapsie', 'clivia', 'presta', 'gradui', "quell'", 'sprema', 'riebbi', 'fifona', 'cacavi', 'impura', 'notalo', 'sudali', 'ridoti', 'bavosi', 'esperi', 'solide', 'blenni', 'smorsi', 'intere', 'canate', 'mellei', 'furami', 'sanese', 'mignon', 'gitane', 'crucci', 'rasate', 'prasme', 'mearne', 'risona', 'cibreo', 'boites', 'turavi', 'sgruma', 'ertisi', 'flessi', 'uzbeka', 'nicena', 'sortir', 'imbuti', 'rasano', 'tacqui', 'zoppai', 'sitite', 'brucio', 'riputo', 'aleuto', 'sicani', 'orzate', 'ondate', 'dirubo', 'crasha', 'illude', 'tatara', 'cimesi', 'lisava', 'vapiti', 'biasmi', 'visata', 'melata', 'ridare', 'scodai', 'osceni', 'dunesi', 'blasto', 'enfino', 'sacrar', 'tragga', 'gueffe', 'alialo', 'bacini', 'larici', 'crocio', 'ideato', 'calale', 'sitone', 'stende', 'palale', 'odiavo', 'settar', 'culalo', 'addalo', 'venuto', 'vedova', 'smarca', 'scleri', 'ruspar', 'cibati', 'bomber', 'bronci', 'aspina', 'pepaci', 'astato', 'opliti', 'seriai', 'galibi', 'mature', 'acorne', 'lavati', 'ansino', 'aderte', 'puglia', 'cineti', 'corpus', 'lavala', 'nudato', 'boriva', 'avulse', 'corcar', 'forati', 'notava', 'croceo', 'donino', 'ciotta', 'quieto', 'attico', 'spargi', 'rutula', 'altori', 'perivi', 'aviera', 'gentil', 'colpai', 'stigia', 'mucida', 'recavo', 'ubique', 'ignita', 'mazzia', 'cigola', 'bragie', 'tresca', 'masque', 'orobio', 'gasavo', 'minuir', 'ernici', 'skater', 'lattea', 'sobrio', 'balene', 'eletto', 'osante', 'posali', 'urbani', 'coirei', 'acaica', 'mozzar', 'fisata', 'sapora', 'quarzi', 'minute', 'decora', 'cadrai', 'spezio', 'dorate', 'fitina', 'cattai', 'bezoar', 'cestii', 'uggiar', 'creole', 'zompar', 'piassi', 'uscier', 'sbieca', 'gronda', 'mesoni', 'rogavi', 'vostra', 'unenne', 'immane', 'ostati', 'tenevi', 'ovovia', 'emacia', 'dressi', 'sbavon', 'zotici', 'tondai', 'sfitto', 'lungar', 'riergi', 'arguto', 'creata', 'forale', 'rivali', 'annoia', 'sestai', 'grisou', 'impera', 'aliane', 'abazie', 'carote', 'abdico', 'pesaci', 'igieni', 'allelo', 'basivi', 'incaca', 'putane', 'mimali', 'dunose', 'cevane', 'taceva', 'feltro', 'blocco', 'coatti', 'figate', 'moglie', 'spanio', 'solimi', 'badata', 'polino', 'potrai', 'adesco', 'ultimi', 'pisolo', 'vagoni', 'renovo', 'flanai', 'volita', 'ventun', 'eptodo', 'onfalo', 'conica', 'rudere', 'risone', 'scrivo', 'emunge', 'udisse', 'rimira', 'ormati', 'empilo', 'uiguro', 'gossip', 'caconi', 'molate', 'ruboni', 'vilava', 'mutila', 'morrei', 'destar', 'bagoli', 'espiai', 'sborso', 'nativi', 'scifti', 'quinte', 'dovevi', 'pulsai', 'scalze', 'oppilo', 'fluore', 'gunite', 'stolzo', 'lenone', 'ducata', 'cugini', 'sagoma', 'ridili', 'lepidi', 'reciti', 'mugnai', 'fading', 'zumare', 'anotie', 'stagno', 'spring', 'cernei', 'torule', 'adroma', 'ondulo', 'sedali', 'lumaci', 'riloda', 'rodale', 'minbar', 'policy', 'resati', 'rifuse', 'adnate', 'vadano', 'comune', 'derido', 'optima', 'briffi', 'arpico', 'pirata', 'miseri', 'oziosa', 'rialto', 'satana', 'corilo', 'nobeli', 'fasane', 'succhi', 'brusco', 'squame', 'cosina', 'ritmai', 'numane', 'gemevi', 'bulavi', 'sancir', 'amache', 'dicare', 'votive', 'terree', 'rugane', 'ririse', 'romana', 'ducavi', 'elgeyo', 'puberi', 'sbanca', 'robora', 'eruppe', 'peluta', 'zemese', 'volete', 'servar', 'carbon', 'perese', 'glosse', 'asiana', 'sagita', 'butili', 'cuscus', 'libale', 'doveva', 'camene', 'crossi', 'dolate', 'virami', 'pratie', 'strida', 'calena', 'elgeyi', 'rinoti', 'nasale', 'ambivo', 'tannar', 'deviro', 'beammo', 'favore', 'erebie', 'cuesta', 'vagate', 'infide', 'lavori', 'oirata', 'urtino', 'asolai', 'tutato', 'daorsa', 'strani', 'impero', 'lapazi', 'escomi', 'secare', 'odirsi', 'garose', 'parodo', 'elisci', 'lesati', 'loppio', 'tufese', 'navali', 'pelone', 'garage', 'mulino', 'schifo', 'fumala', 'clangi', 'temere', 'sclami', 'toriti', 'orbami', 'canaio', 'targhe', 'tamtam', 'cherry', 'tanate', 'ridice', 'sonici', 'duella', 'resaci', 'mocovi', 'quarzo', 'bmovie', 'natami', 'cocete', 'achiva', 'durali', 'tender', 'orlino', 'gruide', 'egioco', 'smesso', 'risimi', 'striga', 'lirico', 'sniffo', 'derivi', 'coprir', 'defeda', 'eressi', 'perizi', 'bimano', 'osmoso', 'sbatti', 'intubi', 'smorta', 'faglia', 'osanno', 'attore', 'pessia', 'ammodo', 'comodi', 'piomba', 'addazi', 'decadi', 'sbuzzo', 'venala', 'rumigo', 'trofei', 'focana', 'ircane', 'dormir', 'drilli', 'sfalle', 'scroll', 'bucalo', 'achira', 'scelga', 'aralie', 'lichen', 'ontano', 'targai', 'annoio', 'rilevo', 'rapper', 'cagone', 'folata', 'terron', 'ripido', 'strino', 'pepino', 'eserta', 'comati', 'teismi', 'peonia', 'astori', 'pogata', 'andina', 'nuvolo', 'sarghi', 'intoni', 'piotte', 'arridi', 'eluito', 'enunci', 'fedala', 'giarda', 'forano', 'licosa', 'olirci', 'vedete', 'stupir', 'poetar', 'untolo', 'abdica', 'nastra', 'fugavo', 'gattai', 'ricena', 'receva', 'fonesi', 'delati', 'snebbi', 'porose', 'scruti', 'posavo', 'rabula', 'bestie', 'retuso', 'sferze', 'traeva', 'panaia', 'derapa', 'viviti', 'googol', 'erpico', 'litino', 'ritura', 'buteni', 'vilite', 'contar', 'dirama', 'varino', 'orlaci', 'bilici', 'cimami', 'fender', 'poiesi', 'magica', 'salaci', 'schise', 'saboti', 'albana', 'impeli', 'azteco', 'scogli', 'ceceno', 'riunge', 'zumaci', 'natoci', 'onisco', 'conico', 'untomi', 'cosavo', 'marsch', 'fisalo', 'avvali', 'moloni', 'schizo', 'donnei', 'damina', 'motosi', 'preane', 'tutori', 'valuta', 'opiate', 'alzavi', 'libata', 'sagomo', 'sitava', 'bucaci', 'dumeti', 'musati', 'ripose', 'tifato', 'arioso', 'quanta', 'alcuna', 'matico', 'calino', 'cortei', 'encomi', 'indovi', 'rapate', 'caciai', 'accoro', 'aggira', 'scorie', 'orriti', 'navaja', 'balita', 'punger', 'bacala', 'dolina', 'aleute', 'arcava', 'rivide', 'avvino', 'relais', 'madore', 'tubone', 'legger', 'ornino', 'recili', 'ostino', 'smangi', 'pizzai', 'sciano', 'esitar', 'lidite', 'idiomi', 'risuda', 'cosato', 'scanta', 'timbri', 'figule', 'colaci', 'pisana', 'fotici', 'infidi', 'gitana', 'effato', 'ostava', 'repete', 'ugello', 'hangar', 'cavona', 'ladini', 'acerbo', 'badino', 'burlai', 'atrico', 'rabule', 'zonuro', 'culdea', 'newton', 'briffo', 'fedine', 'figari', 'lucean', 'caroto', 'eregga', 'micron', 'arsine', 'sfosso', 'umetti', 'silene', 'ottile', 'omosex', 'illuso', 'furava', 'pedani', 'stoppo', 'bucare', 'fenica', 'attimi', 'turino', 'crepes', 'deroga', 'osarle', 'motose', 'errami', 'grappa', 'sciali', 'tenone', 'starmi', 'immune', 'iazige', 'fimine', 'varcar', 'nasona', 'pavano', 'stacci', 'titina', 'creavo', 'aberra', 'carine', 'nastie', 'aucuba', 'iridio', 'triplo', 'sdetti', 'cotone', 'apposi', 'cabrai', 'houthi', 'modano', 'spunti', 'ugnolo', 'uffizi', 'soralo', 'assoli', 'travel', 'guaymi', 'pilosi', 'oscura', 'guelfe', 'micchi', 'vaiati', 'rotano', 'attesi', 'rictus', 'brocca', 'negane', 'gasosi', 'basica', 'fumalo', 'ennese', 'inauri', 'erette', 'ranide', 'guaito', 'putami', 'venaci', 'necala', 'amurca', 'sferii', 'tornir', 'bolero', 'sudato', 'oreggi', 'alluso', 'dasota', 'source', 'riunsi', 'emazia', 'sfendi', 'maglia', 'piumai', 'storce', 'ferreo', 'grills', 'decile', 'scopra', 'cranio', 'gonfie', 'comica', 'gruidi', 'sterro', 'cochon', 'violar', 'casale', 'cefalo', 'uriesi', 'annego', 'albese', 'loggai', 'nostre', 'fionda', 'vacato', 'tesata', 'blobba', 'esatto', 'rosaio', 'segnar', 'binube', 'focide', 'chiedo', 'tifate', 'sporga', 'sganna', 'delato', 'orinar', 'rorate', 'sanava', 'lanine', 'sinodo', 'mutilo', 'slamai', 'oleaci', 'sembra', 'topati', 'ripita', 'moderi', 'aetidi', 'vamene', 'dirada', 'rasava', 'libali', 'rasoci', 'avocai', 'issopi', 'ombria', 'transo', 'ansiar', 'coorte', 'croata', 'politi', 'timbra', 'indomo', 'litchi', 'ricovi', 'spiare', 'gretto', 'rosovi', 'fosche', 'rialti', 'deissi', 'smanie', 'irsuta', 'venivo', 'betici', 'datoli', 'indoor', 'mutate', 'essedi', 'sforno', 'gibese', 'vagine', 'feroci', 'vaniai', 'fliace', 'pransa', 'mirali', 'ricavi', 'scurii', 'libava', 'vilare', 'svello', 'spetri', 'moravi', 'aldine', 'solita', 'iguana', 'setose', 'colcar', 'macere', 'titubo', 'glotta', 'pitali', 'semine', 'barona', 'proeve', 'funate', 'cimano', 'tonder', 'ovovie', 'affilo', 'verdir', 'natimi', 'malata', 'crucco', 'resele', 'felpar', 'spiamo', 'morese', 'skilla', 'stinga', 'adatta', 'corneo', 'ficchi', 'cucina', 'eolina', 'kimono', 'aversi', 'piansi', 'ramato', 'apatia', 'vorato', 'careni', 'minoro', 'balnei', 'retate', 'orassi', 'curata', 'oplite', 'viride', 'untoti', 'grallo', 'palino', 'tosesi', 'tiravo', 'raffio', 'sterpo', 'cosano', 'vimava', 'svendo', 'semuto', 'scucii', 'attelo', 'ritemi', 'spezzo', 'deleti', 'dipeso', 'ardita', 'lirici', 'idumeo', 'samare', 'ifugae', 'tancar', 'figura', 'ditini', 'sbandi', 'chioma', 'rumine', 'vinate', 'sfatai', 'bacile', 'secate', 'cecati', 'melalo', 'focile', 'plausi', 'hunter', 'badato', 'efirea', 'rapata', 'levalo', 'equino', 'copiar', 'capoti', 'tomane', 'ricina', 'cecena', 'toglie', 'griffo', 'truffo', 'tramai', 'pecari', 'sagrar', 'salile', 'piroli', 'attedî', 'sdanno', 'enunzi', 'pacalo', 'zelale', 'topino', 'ioidea', 'spiovi', 'rutico', 'lascai', 'quasar', 'spagli', 'datine', 'undici', 'ritrar', 'sdisse', 'cutter', 'rimato', 'inluia', 'centri', 'redate', 'radile', 'sdarei', 'sgasar', 'coniai', 'spelta', 'grivna', 'pianai', 'vapora', 'zumino', 'puravo', 'cabalo', 'rorane', 'siliti', 'luposi', 'salico', 'lunato', 'teoria', 'bucini', 'doglio', 'bircia', 'talora', 'strica', 'papule', 'morali', 'parata', 'cadmia', 'nappai', 'rigore', 'litami', 'osaste', 'sfolte', 'evelti', 'risega', 'dronte', 'futura', 'obliai', 'solini', 'alliso', 'mandai', 'anthem', 'iodare', 'spetro', 'oramai', 'altore', 'strong', 'logout', 'alagli', 'dolico', 'peccai', 'didimi', 'inseno', 'mutane', 'pagate', 'rigori', 'untumi', 'statua', 'esista', 'ulivai', 'lepcia', 'vinato', 'volalo', 'belalo', 'ostala', 'cuoche', 'elfici', 'vedrai', 'tomino', 'penico', 'adoppi', 'egenze', 'ventai', 'zonava', 'navone', 'uzzata', 'sorare', 'lander', 'scozza', 'chillo', 'otarda', 'ritosa', 'tropea', 'ceravo', 'raglai', 'sbuffi', 'alobia', 'balboa', 'filose', 'anfano', 'prasio', 'vegane', 'spelte', 'rodami', 'cavane', 'smuore', 'alaesi', 'jogger', 'beveri', 'riresa', 'penale', 'quinta', 'vernar', 'tirale', 'sacher', 'slomba', 'accisa', 'gerboa', 'merini', 'tronca', 'loconi', 'acrile', 'ricoli', 'litata', 'urlami', 'enzima', 'nocchi', 'rotoni', 'barane', 'pemani', 'elbani', 'vasaie', 'visavo', 'salica', 'squalo', 'algici', 'inurbo', 'tringa', 'oneste', 'serafi', 'trapor', 'cromia', 'getica', 'iugero', 'pelata', 'genici', 'cabrio', 'lanosa', 'agiano', 'smazzi', 'comoda', 'puponi', 'ledere', 'sfuggi', 'girale', 'affisa', 'oscino', 'culdee', 'conato', 'tetani', 'voliti', 'eletta', 'repile', 'snervo', 'olfavi', 'dosato', 'spessa', 'imbevo', 'flosci', 'aulete', 'dogane', 'evirai', 'valido', 'inputa', 'titano', 'spritz', 'stette', 'pillar', 'archee', 'felici', 'nebula', 'ungevo', 'sorale', 'gabali', 'boruri', 'impone', 'oriane', 'arante', 'dosami', 'optate', 'budget', 'finita', 'bleffo', 'pelava', 'baiali', 'rupino', 'alligo', 'lucrai', 'zittii', 'lurchi', 'angoli', 'illese', 'untume', 'svelsi', 'caboto', 'cadmeo', 'lelegi', 'arzese', 'patate', 'zonavi', 'locona', 'flippi', 'polari', 'pipava', 'olfino', 'groggy', 'sicano', 'aviane', 'dragar', 'sodavo', 'sprova', 'pecoro', 'nettar', 'tanchi', 'misere', 'formio', 'illini', 'allusa', 'adnati', 'peltri', 'addino', 'eledon', 'peones', 'sfitte', 'celare', 'fatevi', 'alensi', 'alvina', 'scerbo', 'blatta', 'croste', 'pallet', 'agamie', 'carpii', 'ficaie', 'vivici', 'adirli', 'peneie', 'argine', 'gaggio', 'adusta', 'invise', 'triopi', 'indizi', 'minima', 'fedeli', 'bimari', 'opiche', 'agiamo', 'astice', 'noveta', 'giambo', 'perdei', 'fonata', 'eculeo', 'duttor', 'centra', 'sbassi', 'novino', 'medley', 'pierre', 'longhe', 'picura', 'cadrei', 'lumano', 'stozzi', 'famava', 'pepato', 'dafnie', 'colare', 'drachi', 'fugona', 'arammo', 'unnica', 'issane', 'libavi', 'setina', 'porosi', 'risosi', 'ialino', 'lisali', 'skeiti', 'udendo', 'furani', 'direna', 'ostalo', 'bugole', 'ruvesi', 'annodi', 'incida', 'panare', 'capami', 'fugali', 'derime', 'timico', 'gannir', 'eliaco', 'scorsi', 'riputi', 'dogalo', 'ultras', 'acceco', 'salato', 'spengo', 'accani', 'zinnia', 'pianga', 'gioghi', 'ispiro', 'ardori', 'mutone', 'vanito', 'ungilo', 'imenee', 'grommo', 'vinati', 'ghezzi', 'giglio', 'bagnai', 'vagito', 'banini', 'ciurmi', 'assolo', 'gremir', 'intero', 'pleura', 'datelo', 'remote', 'ditone', 'raugei', 'occasi', 'acorie', 'jakudn', 'grinze', 'schive', 'fondua', 'vampai', 'udirvi', 'censui', 'finder', 'zeloso', 'inizia', 'siglar', 'serque', 'svacca', 'oscula', 'dromia', 'fonati', 'ramami', 'lagidi', 'grillo', 'ansavi', 'ditale', 'spetti', 'braivi', 'grigie', 'lezzar', 'gessai', 'vagato', 'natane', 'riaver', 'quitto', 'zonala', 'ronzar', 'design', 'dresso', 'ghiadi', 'cedano', 'sciati', 'cinico', 'placca', 'cencio', 'gemuti', 'rimati', 'agirei', 'ghigni', 'snooze', 'alzami', 'negher', 'vitesi', 'sentii', 'brecci', 'passii', 'musiva', 'arseti', 'tudere', 'olfano', 'sapido', 'crampi', 'sbolli', 'vagavi', 'vielle', 'ribosi', 'goblin', 'ideone', 'limosa', 'apiato', 'apprui', 'gravar', 'eumeni', 'sadico', 'redari', 'amante', 'natali', 'addici', 'svento', 'ucciso', 'ardica', 'bacale', 'ertala', 'oscene', 'sfochi', 'mitica', 'ibridi', 'gregne', 'muesli', 'sborni', 'amelia', 'scorro', 'sarago', 'difeso', 'braito', 'alcoli', 'ascari', 'eccidi', 'mearci', 'riloco', 'eterie', 'ureica', 'morave', 'smammi', 'clefti', 'sodare', 'farine', 'sunesi', 'scalai', 'fumidi', 'eccone', 'amebei', 'sitaci', 'sdoppi', 'beasti', 'degree', 'coking', 'strion', 'rasata', 'orlava', 'immote', 'guarir', 'forvio', 'tabida', 'elisio', 'pesati', 'povero', 'civile', 'dioico', 'febbre', 'mulini', 'finivo', 'cesura', 'cidoni', 'topaie', 'icaria', 'tesato', 'berlic', 'visita', 'renava', 'votino', 'smarro', 'pipaia', 'sgabei', 'derisi', 'vinaio', 'redigo', 'riseti', 'sdarci', 'morose', 'oidica', 'ootipi', 'sciolo', 'loffai', 'sporgo', 'patria', 'triato', 'sdegno', 'ustola', 'espose', 'lesici', 'spaura', 'ararmi', 'ululai', 'cicali', 'visato', 'imbigi', 'purato', 'piatir', 'trarre', 'molare', 'osasse', 'vinosi', 'busvie', 'storco', 'tonalo', 'volger', 'cucivi', 'tacque', 'measte', 'stemmi', 'rialzi', 'amanti', 'crotte', 'priora', 'sugali', 'lecite', 'ventre', 'depura', 'gazali', 'tonfai', 'vagina', 'braide', 'suassi', 'rigale', 'oleico', 'evinco', 'zephyr', 'colpir', 'ovatto', 'geomio', 'baluci', 'semina', 'eriano', 'velici', 'brutto', 'sapevo', 'depose', 'recite', 'lirato', 'rubbio', 'lapida', 'tuelli', 'minora', 'vogalo', 'piarde', 'campar', 'purine', 'svampi', 'odirmi', 'vitame', 'salimi', 'fumiga', 'barbie', 'facili', 'orbane', 'lanato', 'creati', 'linkar', 'legato', 'decido', 'monili', 'quadra', 'piagli', 'falese', 'antesi', 'veglie', 'usarvi', 'avvelo', 'artare', 'skeita', 'ambire', 'dilima', 'laurei', 'solino', 'fuseti', 'aiuola', 'avacci', 'svuota', 'aetide', 'bufato', 'bagigi', 'addito', 'sgrumi', 'plauso', 'tonino', 'scilla', 'scarno', 'urbici', 'lesovi', 'spumee', 'evader', 'chiari', 'oretta', 'fugato', 'morgen', 'posale', 'sudore', 'filano', 'amputa', 'pellai', 'coriza', 'urlane', 'limino', 'sopito', 'oleano', 'suolai', 'storta', 'lunari', 'mainai', 'odisse', 'aeroso', 'sgorgo', 'figoni', 'triare', 'fichus', 'baconi', 'tacchi', 'osarmi', 'cornea', 'ugnavo', 'spighi', 'vanate', 'molese', 'trismi', 'vivete', 'flirts', 'mosano', 'scotii', 'olirti', 'bubalo', 'annoto', 'bucina', 'rumala', 'camper', 'osarla', 'avelle', 'vedila', 'esimei', 'appaga', 'gelate', 'evelli', 'sgobbi', 'gasalo', 'setali', 'pratio', 'nugoli', 'ciglia', 'valine', 'noriti', 'solate', 'fidava', 'iettai', 'cagala', 'argivi', 'sdatti', 'pelute', 'dargli', 'tavola', 'stanzi', 'falsar', 'dimoio', 'iodosi', 'cimose', 'vitalo', 'ariate', 'obblio', 'ducaci', 'sanino', 'lodato', 'bovidi', 'bacati', 'mutico', 'catini', 'infoco', 'datela', 'ercole', 'ienide', 'suidei', 'pontai', 'impaci', 'riposi', 'desumi', 'ammuta', 'fruivi', 'fusine', 'regata', 'emioni', 'minaci', 'rasimi', 'pranse', 'triali', 'pilese', 'urtali', 'langui', 'manoso', 'risemi', 'cediti', 'vetero', 'towers', 'tutoli', 'guizzo', 'biseco', 'masore', 'fiotti', 'bemina', 'riputa', 'dunosi', 'peiese', 'gufato', 'dietim', 'rinici', 'libaci', 'bonghi', 'livrea', 'ciarde', 'romeni', 'asadas', 'lodavo', 'stenti', 'denuda', 'pulque', 'lentar', 'sbarco', 'zonavo', 'dolose', 'tonema', 'strain', 'lusche', 'donalo', 'sfendo', 'struma', 'meiamo', 'pepano', 'afonie', 'daremo', 'migrar', 'fremii', 'gerese', 'ellera', 'foyers', 'durane', 'untore', 'cedili', 'sagome', 'altina', 'starle', 'lodano', 'aringo', 'manico', 'basalo', 'cascai', 'arrise', 'faveti', 'bevole', 'brovar', 'imeneo', 'proteo', 'nuvola', 'cibava', 'sdarti', 'calchi', 'cornee', 'psochi', 'diurne', 'usanza', 'dischi', 'sdarli', 'redami', 'damala', 'palina', 'molane', 'selcio', 'glutea', 'mediar', 'sventi', 'orbati', 'notuli', 'senati', 'prurir', 'escort', 'eserti', 'pigmea', 'sanati', 'calcia', 'sgassi', 'caldei', 'occhia', 'sesami', 'temuto', 'guatto', 'osarvi', 'cuciva', 'oliale', 'potala', 'betula', 'elobie', 'scorai', 'rivivo', 'bacone', 'segaci', 'tatuar', 'otarde', 'curato', 'ricche', 'ungevi', 'chiame', 'sopire', 'invola', 'bocchi', 'svezza', 'yogurt', 'ioideo', 'filtri', 'fobica', 'albite', 'sedili', 'sokoro', 'binali', 'cucito', 'shifta', 'organi', 'pedoto', 'scrofe', 'marane', 'sporca', 'redare', 'sorsar', 'fasaci', 'saggie', 'escoli', 'sodali', 'spasto', 'mostre', 'begata', 'acquei', 'sciavo', 'smossi', 'olfali', 'ergeva', 'prezza', 'zuresi', 'adesai', 'blemmi', 'bufali', 'poveri', 'bufati', 'stivar', 'lidico', 'girino', 'placco', 'trecce', 'fugone', 'lottai', 'onrane', 'banker', 'oziosi', 'trophy', 'torcer', 'velane', 'veglia', 'meseta', 'elitra', 'etesii', 'vocive', 'aerala', 'genaci', 'acanzi', 'vivevo', 'deriso', 'tesori', 'vapole', 'vimano', 'fregno', 'sopiva', 'mixers', 'risalo', 'datano', 'serpai', 'dipese', 'equava', 'magolo', 'tutane', 'ragano', 'stamno', 'effati', 'virili', 'tracce', 'zeugma', 'belino', 'pacare', 'begaci', 'arcalo', 'restio', 'ghetto', 'retusa', 'voglio', 'lappar', 'teloni', 'quanto', 'sparsi', 'gliele', 'dolica', 'sposte', 'lupaie', 'partir', 'fanoni', 'recono', 'milese', 'gomona', 'vegeto', 'numani', 'mallet', 'mataco', 'sfondo', 'smoggi', 'oliati', 'quiche', 'volsca', 'turami', 'belavi', 'moroni', 'idromi', 'cafila', 'ancore', 'latiri', 'carato', 'dateli', 'pilori', 'bollai', 'oleati', 'vanata', 'impese', 'tupaia', 'venete', 'ardivo', 'mummia', 'sieste', 'fumino', 'grezzi', 'cerare', 'placet', 'irrite', 'ridate', 'sfibro', 'trivie', 'raffar', 'fringe', 'vogale', 'volale', 'colavo', 'ascete', 'assoni', 'zonale', 'evolvo', 'arsomi', 'peccar', 'surale', 'everti', 'pernio', 'mutavo', 'aerose', 'anatro', 'aptera', 'murano', 'visual', 'bacami', 'sorabi', 'tanfar', 'orante', 'mandar', 'bigama', 'valoro', 'virola', 'estina', 'nonese', 'cucili', 'molaci', 'magnum', 'crocco', 'laridi', 'destro', 'opleti', 'biarca', 'espiri', 'demand', 'trulli', 'learde', 'accadi', 'agiari', 'suturi', 'sbando', "trent'", 'ellene', 'autore', 'faceti', 'irpino', 'vagalo', 'sgusto', 'rivano', 'curate', 'caruga', 'sfuggo', 'eterea', 'iudica', 'piropo', 'locato', 'addato', 'esegui', 'angela', 'escava', 'bufone', 'rampai', 'sbollo', 'anosie', 'cilizi', 'valuti', 'semino', 'ritaci', 'buglio', 'spiate', 'emulga', 'lesami', 'fonici', 'canard', 'cuocer', 'smerli', 'guelfi', 'zabibo', 'odiate', 'zimini', 'metoli', 'piarli', 'rovina', 'spezia', 'domata', 'adenie', 'ridoma', 'adduar', 'igromi', 'anamni', 'impuro', 'draghi', 'instar', 'omesso', 'quadro', 'suturo', 'spacca', 'tarpei', 'tielle', 'uncico', 'archea', 'vegete', 'curino', 'utopii', 'spazzi', 'rupine', 'indire', 'mediti', 'talare', 'sponde', 'ignavo', 'euriti', 'demica', 'sapone', 'omnium', 'ricrea', 'unghia', 'grugna', 'stinco', 'doleva', 'sbavai', 'sacche', 'bateia', 'buduco', 'argiva', 'canidi', 'direni', 'sfuoco', 'pipiai', 'stufai', 'hurrah', 'resasi', 'domavo', 'faxare', 'sgommi', 'cubane', 'ondare', 'rotate', 'nudale', 'pietas', 'aerobi', 'irriti', 'catane', 'euanti', 'locavo', 'gazava', 'gabbie', 'comari', 'scocco', 'tócchi', 'optata', 'ostane', 'domati', 'rimava', 'crafen', 'scovar', 'roboni', 'cavali', 'sfallo', 'innevo', 'cionco', 'regamo', 'parevo', 'sdanti', 'crassi', 'sibilo', 'raiati', 'canelo', 'timolo', 'igroma', 'crampo', 'usiamo', 'barnum', 'supero', 'gurkha', 'bregmi', 'cavami', 'borore', 'busoni', 'induca', 'sdette', 'tovese', 'gourde', 'facole', 'scifta', 'rabbuî', 'natosi', 'lavaci', 'slitte', 'cansar', 'tricot', 'oraste', 'pirchi', 'vaccai', 'tirare', 'beauty', 'cappio', 'mugolo', 'sorabo', 'foresi', 'smessi', 'aborti', 'binaci', 'feriva', 'rosoli', 'estrar', 'sfammi', 'aurati', 'tinger', 'scazza', 'strado', 'dotala', 'matrie', 'scazzi', 'vinose', 'ammusa', 'scerne', 'amigas', 'flussi', 'biffar', 'durata', 'cembri', 'resile', 'guairi', 'decini', 'drammi', 'toccar', 'pussar', 'indica', 'impupi', 'cubavo', 'predon', 'penero', 'lunata', 'codata', 'tubato', 'nucleo', 'ramali', 'sonami', 'rigata', 'allumi', 'intaso', 'leuchi', 'divise', 'ondine', 'bigati', 'natava', 'pelini', 'olisti', 'flyers', 'sudare', 'amebeo', 'immela', 'untole', 'tubero', 'zecche', 'piammo', 'pietre', 'chiede', 'sopore', 'cerosa', 'boaria', 'remise', 'salalo', 'mimico', 'edipee', 'aitalo', 'cresci', 'saltai', 'avviar', 'sbrana', 'recala', 'telnet', 'scopri', 'moliti', 'biogas', 'istori', 'gotata', 'cinghi', 'fonico', 'tesoti', 'decado', 'ripida', 'invago', 'tifale', 'solane', 'pipila', 'roveri', 'beggio', 'tanala', 'vasara', 'decani', 'sorala', 'panato', 'ormami', 'nippli', 'blindo', 'topici', 'zuppai', 'nogane', 'bimani', 'tomavo', 'parrei', 'timomi', 'sancta', 'regolo', 'uvaceo', 'insino', 'diligo', 'calaza', 'parare', 'svista', 'cutina', 'nocevi', 'ittica', 'celala', 'olmeco', 'copies', 'nocete', 'adirvi', 'scarto', 'navate', 'baiata', 'tumore', 'arsevi', 'ontosa', 'bufoni', 'scerni', 'desira', 'dilige', 'dotalo', 'ciospi', 'mattai', 'uzzesi', 'paanga', 'gitasi', 'sdraia', 'depuri', 'detrae', 'googli', 'legala', 'ignora', 'bearne', 'sedime', 'diurni', 'grugai', 'feroce', 'nature', 'esopea', 'scorti', 'anelli', 'rotare', 'vocino', 'ideami', 'bellar', 'vapori', 'arreso', 'limale', 'triade', 'dorare', 'coscio', 'bornio', 'oblavo', 'ollare', 'diredo', 'divoro', 'gradua', 'rettar', 'corize', 'snudar', 'metile', 'vimare', 'vimami', 'torque', 'filosa', 'molato', 'famare', 'critta', 'incile', 'nolano', 'avesti', 'elmesi', 'coarto', 'patemi', 'cotali', 'brezzo', 'brevia', 'lestre', 'fletti', 'essedo', 'svelli', 'giteti', 'velaio', 'enzimi', 'sberno', 'evocai', 'buttar', 'ladies', 'osammo', 'puzzai', 'toraci', 'trofeo', 'aquoso', 'arella', 'sclama', 'spanno', 'rabide', 'legati', 'tycoon', 'filami', 'collie', 'lastri', 'bufale', 'minato', 'equavo', 'adware', 'velava', 'piasti', 'smacco', 'ciulli', 'cubava', 'menava', 'plusie', 'desiro', 'negale', 'vinoto', 'siseri', 'indusi', 'veneto', 'toccai', "virtu'", 'laurea', 'cuoiai', 'brusio', 'celero', 'ledili', 'firmai', 'rischi', 'semite', 'altari', 'lobbie', 'cosati', 'idoneo', 'trugli', 'guaina', 'spiceo', 'infoio', 'afagia', 'natura', 'girono', 'onrate', 'tonano', 'claque', 'tipini', 'butene', 'aliala', 'molcer', 'visite', 'dicati', 'zebrai', 'muggir', 'urtale', 'anomie', 'aliene', 'goferi', 'vicine', 'arresi', 'creali', 'popolo', 'elodie', 'risomi', 'mattar', 'risami', 'bolare', 'stiesi', 'macula', 'saluto', 'sfarzo', 'compie', 'affogo', 'inveli', 'sfenda', 'sfrani', 'finche', 'fetore', 'ritemo', 'ceceri', 'tastai', 'camava', 'saetti', 'sgesso', 'franai', 'partes', 'cimeli', 'plichi', 'scaffi', 'blasti', 'sciiti', 'alando', 'vimavo', 'bylina', 'trucio', 'ritrae', 'seduci', 'cecano', 'roseto', 'mimulo', 'sciugo', 'divari', 'iodici', 'elodea', 'lunule', 'ordite', 'system', 'brosce', 'remica', 'anatre', 'empiva', 'tilomi', 'leccia', 'pavane', 'cenali', 'sfamai', 'sierre', 'setini', 'addoga', 'tesole', 'stille', 'liniti', 'orrori', 'focani', 'zolfai', 'empiei', 'fatavi', 'ancidi', 'polano', 'lesive', 'ritiri', 'chemio', 'basala', 'vantai', 'spuria', 'intimo', 'numana', 'invisa', 'sbuffa', 'aggesi', 'unirne', 'albumi', 'fusici', 'trarza', 'gioire', 'irrori', 'dopava', 'invale', 'barbai', 'asceso', 'insala', 'nubili', 'roiese', 'astile', 'ascese', 'sdagli', 'raguna', 'posaci', 'tumido', 'zimino', 'gonadi', 'alieno', 'crolla', 'aringa', 'genato', 'lupini', 'nobile', 'scorci', 'avemmo', 'dolavo', 'odiali', 'verste', 'esulai', 'accano', 'uristi', 'novato', 'regimi', 'fusevi', 'sbrodo', 'safena', 'abbici', 'stabia', 'aversa', 'finali', 'accana', 'sciapo', 'sbrino', 'zufole', 'asiaci', 'votire', 'povesi', 'sdammi', 'griqua', 'figula', 'donare', 'litati', 'bannai', 'sdegna', 'genica', 'ponete', 'arsile', 'velali', 'backup', 'muniti', 'piogge', 'zumate', 'acoria', 'cerale', 'vivimi', 'fiotto', 'chefir', 'scappa', 'ciucca', 'situai', 'amaide', 'mirese', 'aglifo', 'tacile', 'velaci', 'venule', 'ariosi', 'butini', 'vamiti', 'rifili', 'svesto', 'sabina', 'pirolo', 'ciompi', 'impipa', 'impune', 'affida', 'securi', 'ibibia', 'inebri', 'levito', 'starno', 'nasali', 'epilli', 'nasava', 'lobato', 'sdirne', 'eolici', 'papali', 'natici', 'paiole', 'incavi', 'crasho', 'sommai', 'scapai', 'buiore', 'lapido', 'begalo', 'assire', 'murata', 'venato', 'papula', 'sorche', 'afroso', 'annoma', 'delego', 'vanare', 'serico', 'stinsi', 'odimmo', 'errori', 'bearci', 'vilaci', 'svolte', 'inaspa', 'guadar', 'florea', 'arcavo', 'esalta', 'mastri', 'pipavi', 'svolgi', 'pomata', 'predio', 'apiate', 'afrori', 'saprai', 'sultan', 'spento', 'zonati', 'zelesi', 'resivi', 'doveri', 'leviga', 'recidi', 'radila', 'limato', 'calcar', 'slogan', 'tupelo', 'nasano', 'deaera', 'titola', 'fremei', 'odiano', 'tanano', 'rasaci', 'segare', 'ripper', 'saponi', 'uggita', 'ceffar', 'temolo', 'barici', 'adempi', 'fusite', 'acuiti', 'ronfio', 'rigodi', 'coirlo', 'godano', 'litano', 'ungono', 'ibisco', 'fatelo', 'vilivo', 'recito', 'utopio', 'papati', 'sodala', 'porger', 'condir', 'jumper', 'avallo', 'nocevo', 'volant', 'ortano', 'vimala', 'pulite', 'riniti', 'sumero', 'trombe', 'fusole', 'museum', 'forate', 'olfava', 'pietra', 'maglio', 'arpona', 'oliane', 'lagopo', 'alerai', 'lisolo', 'infuni', 'togate', 'benino', 'sciole', 'boresi', 'bucata', 'aucupi', 'filati', 'defedo', 'ciacci', 'urente', 'focidi', 'abusai', 'sbardo', 'update', 'aprire', 'introi', 'petato', 'onfali', 'fragno', 'pigron', 'lidica', 'pesale', 'bierre', 'zirlii', 'batton', 'dritte', 'eregge', 'boccio', 'telale', 'espero', 'turche', 'aviani', 'radura', 'certar', 'bikini', 'olismi', 'afrosa', 'tomini', 'daciti', 'agiaro', 'verone', 'traslo', 'raiami', 'mercai', 'desali', 'volate', 'topina', 'pelosa', 'priamo', 'binalo', 'colori', 'acutir', 'tubata', 'inviar', 'odirli', 'babele', 'lussar', 'mudavi', 'mutaci', 'fatalo', 'ditevi', 'tubera', 'guanci', 'smirai', 'tapiri', 'nomale', 'panava', 'iolite', 'visive', 'scovai', 'dopare', 'flatus', 'tirami', 'pelota', 'gratti', 'mesata', 'sharai', 'cineto', 'incora', 'classi', 'iunior', 'sturbo', 'sbarri', 'notano', 'pacavo', 'sgommo', 'primer', 'ormavi', 'mimato', 'indide', 'filava', 'eolico', 'vanivo', 'lontra', 'fidare', 'barrel', 'bossei', 'piarci', 'caleni', 'nogalo', 'oliami', 'spiace', 'efebeo', 'insani', 'tacevi', 'cinete', 'levino', 'sitcom', 'sparai', 'metopa', 'idumei', 'bubati', 'casual', 'innovo', 'bronza', 'desedo', 'orlali', 'sfinar', 'cecami', 'ripeso', 'scemai', 'quindi', 'bufino', 'devono', 'zinali', 'atopia', 'radico', 'genale', 'mitrie', 'adepto', 'zoomai', 'rosini', 'buscai', 'fiches', 'soling', 'coirmi', 'tendar', 'untava', 'sbasso', 'rosala', 'nauseo', 'lodare', 'scambi', 'litavi', 'inambu', 'areata', 'scagno', 'lorari', 'rimare', 'spregi', 'rewind', 'cacali', 'avvedo', 'felini', 'sanali', 'sfilar', 'vicana', 'fritta', 'retala', 'trailo', 'baiuli', 'tapina', 'samara', 'meconi', 'camion', 'culaio', 'scisse', 'mofeta', 'sparga', 'topate', 'banina', 'incede', 'monomi', 'salaie', 'modulo', 'aurora', 'ficate', 'clanga', 'osasti', 'agisse', 'balivi', 'arrisa', 'vacelo', 'giocai', 'sopita', 'pemano', 'pardon', 'solivi', 'datisi', 'mutata', 'ovanti', 'manide', 'divere', 'fasavo', 'osarti', 'cimata', 'bosino', 'scelsi', 'fatava', 'rasele', 'gitoci', 'ceridi', 'vandee', 'dartos', 'bibule', 'sorcio', 'coisci', 'artino', 'arsami', 'robori', 'sputai', 'rimoso', 'colina', 'ciulle', 'ospite', 'dicevi', 'gemile', 'estere', 'fritte', 'difilo', 'baccai', 'nastri', 'orsine', 'armoni', 'petits', 'festai', 'saioni', 'fratta', 'potano', 'spella', 'lebbre', 'mastre', 'edituo', 'spesso', 'sballi', 'madide', 'ornati', 'tacita', 'visavi', 'erpice', 'tenere', 'sugosa', 'cribro', 'futile', 'oziaca', 'infici', 'pelure', 'bearmi', 'oleali', 'questi', 'fusimi', 'varava', 'flette', 'temoli', 'onagro', 'mandei', 'citava', 'purava', 'subita', 'venute', 'ugnale', 'ridere', 'latiti', 'rasene', 'arsemi', 'lucori', 'proavi', 'solivo', 'spizza', 'latice', 'pacata', 'doralo', 'orzami', 'gazavo', 'refoli', 'cubica', 'bayram', 'reggae', 'sparti', 'dolali', 'duravi', 'nolani', 'occisi', 'vagavo', 'lesbio', 'garrir', 'spiovo', 'liture', 'traodo', 'acauli', 'abulia', 'pepalo', 'stappo', 'todine', 'alobio', 'jungle', 'sparso', 'treagi', 'ruotar', 'onusti', 'carema', 'teorba', 'batate', 'ertole', 'cubino', 'atraci', 'svelgo', 'covate', 'iliaci', 'lotose', 'esorar', 'culala', 'cinipe', 'ricuso', 'oleavi', 'scucio', 'ocrese', 'dorati', 'agosti', 'scampi', 'vagoli', 'urtoni', 'posalo', 'anfese', 'acculo', 'scribi', 'kazaca', 'rognai', 'natevi', 'ancóra', 'rugosa', 'vespri', 'edurre', 'incise', 'purata', 'pegaso', 'griche', 'turese', 'bimane', 'tornea', 'apprua', 'rodilo', 'macina', 'soresi', 'domalo', 'ramuto', 'omessa', 'rimami', 'loisir', 'redivo', 'drillo', 'rasili', 'health', 'smacca', 'buceri', 'ormano', 'nasuto', 'imbeve', 'damate', 'abraso', 'jesine', 'pineta', 'inerbi', 'cammei', 'litato', 'maiala', 'escorî', 'focoso', 'fasino', 'bistri', 'mitreo', 'conide', 'abripi', 'oblino', 'abitua', 'aggiri', 'stendi', 'rogano', 'aerali', 'drappa', 'revoca', 'marone', 'afache', 'sfaldo', 'baular', 'oolite', 'fermai', 'scrino', 'imitar', 'rosile', 'folato', 'baluba', 'zittir', 'indite', 'serial', 'resane', 'iatino', 'ofidio', 'ambito', 'piniti', 'illato', 'accusa', 'celava', 'fennec', 'smarri', 'mazdei', 'granar', 'doceti', 'ontica', 'pepini', 'nights', 'decapi', 'raiali', 'badane', 'vibrar', 'codate', 'aspate', 'fiordi', 'sapida', 'corchi', 'marnar', 'agrumi', 'rugati', 'datimi', 'frullo', 'usante', 'idalia', 'gitale', 'agogni', 'rosavi', 'glassi', 'dorico', 'onuste', 'bomati', 'sinodi', 'ababua', 'vitale', 'velavi', 'jivara', 'limite', 'guardi', 'loffie', 'aspino', 'onerar', 'regger', 'redine', 'povese', 'micino', 'refici', 'sugale', 'rosero', 'ureide', 'inetti', 'brucai', 'sporte', 'vorati', 'freddi', 'udirsi', 'scolii', 'ripite', 'gabbeo', 'rigoni', 'spugna', 'azotar', 'imparo', 'inning', 'russai', 'indici', 'alaggi', 'molita', 'segala', 'biotte', 'spanda', 'oragli', 'itrani', 'vasaro', 'lascar', 'squash', 'azioni', 'presso', 'zumano', 'tufate', 'unenti', 'sokore', 'aguzzi', 'termos', 'elonga', 'captai', 'fegato', 'letali', 'palavo', 'segane', 'fisaci', 'spiana', 'pallio', 'bifere', 'viavai', 'salila', 'capote', 'ormaci', 'estesi', 'boario', 'livide', 'avvide', 'carele', 'ittita', 'cecene', 'molavo', 'lawata', 'imbasa', 'ritiro', 'ovviar', 'bareni', 'putati', 'mondar', 'spolpe', 'viados', 'porcai', 'strasa', 'salita', 'cimini', 'limoli', 'picano', 'aprilo', 'tesone', 'equide', 'taralo', 'dogato', 'sbordo', 'sbavar', 'sofora', 'ertesi', 'godrei', 'cantre', 'euanta', 'labbri', 'remici', 'assido', 'sedano', 'vaiato', 'putire', 'acquea', 'begati', 'cevano', 'stingi', 'oppida', 'marche', 'ladani', 'aspini', 'strobi', 'sfogai', 'spiona', 'arnini', 'aperta', 'mesone', 'astati', 'bifide', 'gibesi', 'rizidi', 'scoppi', 'indios', 'regnai', 'frolli', 'sodaci', 'lintee', 'spesai', 'pipavo', 'damati', 'sgasso', 'pilane', 'veruno', 'viliva', 'acquee', 'dazino', 'mangio', 'gricce', 'lumalo', 'fobico', 'lepadi', 'adastî', 'nasalo', 'lordai', 'giobbi', 'razzie', 'bevuti', 'ondali', 'pulivi', 'atimia', 'camave', 'dovesi', 'litavo', 'estruo', 'zietta', 'svolta', 'breuco', 'cedeva', 'gialda', 'sterne', 'sugger', 'girato', 'lamali', 'cabrar', 'idrari', 'reflex', 'ridora', 'spegna', 'pirite', 'osagli', 'rutile', 'borsai', 'gnaula', 'lengua', 'tulese', 'abigei', 'denoti', 'traodi', 'risivo', 'stesse', 'pepavi', 'rosoni', 'rimiro', 'murati', 'cetile', 'guitte', 'alvine', 'ruttai', 'rodano', 'violai', 'beeper', 'ofride', 'stessa', 'inerba', 'spengi', 'begali', 'iacuti', 'aldini', 'civici', 'mangui', 'dirado', 'erbese', 'bufere', 'ugnare', 'sgrido', 'basini', 'visini', 'retata', 'mutria', 'cedrar', 'esedra', 'sforar', 'pamele', 'assesi', 'visiva', 'caveau', 'andana', 'sclero', 'venina', 'hafnio', 'grugar', 'pillai', 'ussiti', 'fabule', 'slider', 'visala', 'sgelai', 'ballon', 'eurite', 'libere', 'tosolo', 'radeva', 'irrisa', 'toboga', 'enagre', 'chiami', 'glabra', 'erpici', 'indomi', 'arrogi', 'timono', 'bosane', 'pessie', 'marcio', 'redimo', 'fredda', 'soddur', 'empori', 'fatami', 'solcar', 'cafisi', 'ramina', 'paiate', 'bassar', 'ratino', 'loggar', 'terrai', 'bizone', 'arpese', 'canori', 'arassi', 'templi', 'aprila', 'stappi', 'sduole', 'dogati', 'ginger', 'tufato', 'sassei', 'melena', 'pedule', 'sforzo', 'bitmap', 'punica', 'cengia', 'fusomi', 'egizio', 'regala', 'gnocca', 'osculo', 'semata', 'orbala', 'citati', 'abissa', 'onusta', 'baiavo', 'sodate', 'inmiai', 'rodino', 'zittio', 'moroso', 'ringoi', 'pugnai', 'rubaci', 'annoti', 'escolo', 'mentir', 'tirati', 'gheppi', 'cedole', 'devote', 'favose', 'tifami', 'neutri', 'redaci', 'larghe', 'codale', 'filmar', 'fluati', 'armala', 'raitri', 'mitosi', 'coiste', 'potavi', 'cubone', 'ibalai', 'parodi', 'tumidi', 'ribevi', 'goloso', 'matite', 'quitar', 'bovesi', 'petaso', 'renali', 'ondala', 'vinilo', 'sufica', 'lotoso', 'sigani', 'dogavo', 'vitice', 'razzia', 'bidone', 'innevi', 'capire', 'repevi', 'tebana', 'raspar', 'marami', 'inerbo', 'culami', 'panica', 'mimose', 'infimo', 'vorano', 'minala', 'feccia', 'getici', 'etisie', 'daorso', 'penavi', 'petuli', 'sudalo', 'puppai', 'bombai', 'omilia', 'arsasi', 'preano', 'ruteni', 'ulvite', 'patula', 'chiedi', 'pastor', 'salala', 'inalai', 'triduo', 'adisci', 'gradar', 'gonesi', 'musalo', 'issare', 'tupaie', 'mixali', 'solete', 'emiono', 'gualde', 'puparo', 'hippie', 'scalea', 'inondo', 'dettar', 'osmose', 'coobar', 'vedovi', 'solito', 'congas', 'cunama', 'archeo', 'dietra', 'licita', 'patera', 'giulio', 'sfalda', 'petare', 'nomavo', 'ferula', 'elobia', 'biglie', 'saloni', 'inalbo', 'umboni', 'spedar', 'svenne', 'sdurir', 'vitrea', 'culaci', 'pevera', 'basiva', 'lamesi', 'omelia', 'leccai', 'fasalo', 'risego', 'mimici', 'civili', 'ansima', 'fatata', 'stessi', 'tacili', 'ferini', 'marzio', 'nitrai', 'unenni', 'balogi', 'rufoli', 'paffie', 'sbatto', 'lanoso', 'sfatti', 'usaggi', 'begano', 'balneo', 'balchi', 'aviere', 'emerga', 'noiosi', 'parafe', 'colami', 'estimi', 'tubami', 'morivi', 'musate', 'rifila', 'fusosi', 'slacci', 'oreade', 'stemmo', 'figata', 'scodar', 'brahui', 'ugrici', 'appeno', 'godila', 'cuocon', 'giuoca', 'tesine', 'requio', 'sonori', 'minger', 'mearsi', 'visaci', 'magone', 'arredi', 'diacri', 'derapi', 'peposi', 'ziucci', 'vagiva', 'radano', 'agenzi', 'traiti', 'tranai', 'eriger', 'grippa', 'sperdo', 'tubati', 'sfango', 'udiamo', 'nastro', 'ticket', 'penici', 'nocesi', 'aletta', 'dorrei', 'ponzar', 'bondei', 'ambino', 'poculo', 'sfacci', 'basavi', 'cicute', 'joypad', 'efedra', 'fremer', 'cenone', 'silfio', 'rotary', 'eccita', 'binder', 'laccar', 'recere', 'bacchi', 'intuir', 'seduli', 'secoli', 'cupone', 'aguzzo', 'grotto', 'pavona', 'svelar', 'eccoci', 'azonio', 'viuzze', 'cigana', 'indure', 'scelse', 'cordai', 'scoiar', 'cicuta', 'faglie', 'tiorbe', 'datale', 'lanaro', 'spirea', 'cafoni', 'comete', 'coirai', 'recata', 'bubino', 'sagole', 'pirati', 'racemo', 'bruchi', 'osmiti', 'loffio', 'grinta', 'ledila', 'verine', 'foderi', 'saloli', 'cetani', 'vogare', 'fregio', 'clamai', 'genere', 'raditi', 'sicuro', 'veneti', 'asiaca', 'brusii', 'neccio', 'tacere', 'panane', 'ciccio', 'fathom', 'social', 'piotai', 'sedula', 'brandi', 'fusaia', 'lodane', 'solite', 'ricolo', 'decimi', 'funale', 'emerge', 'noccio', 'svogli', 'valila', 'ducate', 'attavi', 'cavino', 'relato', 'guizzi', 'coirti', 'tarmai', 'azolle', 'redole', 'arbora', 'matura', 'esumai', 'svelga', 'gitole', 'roridi', 'nodino', 'fonate', 'gufavo', 'reseco', 'toresi', 'attere', 'bacili', 'steppa', 'fusero', 'indoro', 'fagara', 'ulular', 'mesero', 'sidame', 'ridica', 'fallii', 'nimico', 'melino', 'pelala', 'fiamme', 'tempia', 'dengue', 'telico', 'bemini', 'capere', 'esempi', 'vagola', 'adergi', 'holder', 'sgocci', 'latito', 'posati', 'snodar', 'gemevo', 'sepali', 'vanano', 'idrasi', 'infamo', 'sapini', 'inerti', 'calumi', 'agisci', 'adduci', 'curavi', 'femica', 'durato', 'sporlo', 'ugnoli', 'bovili', 'supera', 'riarde', 'eroici', 'spanse', 'bacaia', 'dedica', 'abusar', 'caduna', 'mussar', 'cecavo', 'opiati', 'logora', 'rutali', 'nuncia', 'sessai', 'pagali', 'abbine', 'grigio', 'ostice', 'chifel', 'pigoli', 'rubami', 'scafar', 'retrae', 'pioppo', 'incute', 'scagge', 'gagati', 'ittiti', 'ertici', 'musata', 'pierei', 'glielo', 'sicule', 'giuoco', 'labori', 'efesio', 'sitati', 'barolo', 'appeso', 'nulese', 'topica', 'brucia', 'cerumi', 'raitar', 'patita', 'spalco', 'sfiori', 'cangia', 'tuorlo', 'genali', 'recuso', 'grulli', 'crauti', 'canuta', 'eietta', 'secalo', 'brulli', 'marini', 'taniti', 'abaton', 'orrite', 'allupa', 'feluca', 'regato', 'scerba', 'inezie', 'separi', 'walzer', 'cacina', 'lautal', 'latrie', 'menala', 'sucido', 'devoto', 'ruschi', 'coatto', 'gelese', 'bratti', 'quatti', 'trarne', 'esteri', 'script', 'sartia', 'noveto', 'elodee', 'alarti', 'sfatto', 'adotta', 'verace', 'teucre', 'panzer', 'bacane', 'tesava', 'opiane', 'betili', 'sfarai', 'radevi', 'prugne', 'sherpa', 'zignar', 'router', 'oofaga', 'ureasi', 'vinote', 'attuti', 'misura', 'pelobi', 'lobare', 'issali', 'oliavo', 'libame', 'muting', 'camese', 'sicura', 'mudavo', 'vidimo', 'durite', 'pepala', 'svolsi', 'lucano', 'oleane', 'destre', 'strali', 'celibi', 'rubber', 'ondavo', 'zietto', 'cuccio', 'litiga', 'oliali', 'uretre', 'amammo', 'aliata', 'soccio', 'incita', 'spolpa', 'baeria', 'imbuir', 'frocio', 'pulese', 'rizene', 'stinai', 'brenna', 'mitiga', 'sitavi', 'forvia', 'sdutti', 'brette', 'allaga', 'fasori', 'artane', 'girano', 'remiga', 'agnati', 'sbatte', 'vitano', 'tuareg', 'ziesco', 'elenio', 'infoca', 'eptani', 'elongo', 'rotala', 'calala', 'veneta', 'glauco', 'bruito', 'tavolo', 'cardai', 'facevo', 'oviste', 'horrea', 'pomaio', 'fisate', 'remora', 'albano', 'resolo', 'acrome', 'guadai', 'abside', 'sparge', 'tufami', 'pirano', 'lisoli', 'spelde', 'adirsi', 'bastii', 'vitate', 'sminai', 'antico', 'arrapi', 'varech', 'sedane', 'caldee', 'pedona', 'untavi', 'bulini', 'vollea', 'sterco', 'vogule', 'visone', 'arrena', 'rinite', 'ossina', 'scippa', 'ancudi', 'idilli', 'gialue', 'ugelli', 'vilino', 'udisti', 'nasavo', 'covili', 'antele', 'spalti', 'unirsi', 'vanite', 'volsci', 'gamete', 'vedili', 'ahinoi', 'vadoso', 'apparo', 'sekani', 'zopoli', 'ursina', 'lignee', 'piazzi', 'maglie', 'elevar', 'triosi', 'medici', 'sfingi', 'colere', 'spania', 'pometi', 'pomari', 'ergono', 'cimavi', 'smagra', 'solive', 'scolar', 'begami', 'artate', 'laiche', 'ridava', 'succia', 'devora', 'salpai', 'pulcre', 'tesili', 'ripete', 'vivido', 'guasto', 'rorato', 'arsiva', 'sudati', 'minati', 'urgete', 'incisa', 'priore', 'petati', 'plocei', 'fedele', 'immoti', 'motiva', 'istate', 'nickel', 'rovini', 'cuccai', 'questa', 'smozza', 'untili', 'eluiva', 'pneumi', 'idioti', 'vedevi', 'spalla', 'rituro', 'vapolo', 'piegan', 'simile', 'sedava', 'soffra', 'baloge', 'toreri', 'balata', 'floppo', 'uzzoli', 'loiste', 'intini', 'palali', 'ortane', 'ceravi', 'fumico', 'recali', 'zenana', 'illuse', 'binate', 'cilene', 'lediti', 'filato', 'famalo', 'getico', 'daunie', 'cibrei', 'alzate', 'vadosi', 'tronfi', 'venosi', 'caduto', 'idrolo', 'smiley', 'canape', 'lagnon', 'loglio', 'oziano', 'iugale', 'fabbri', 'diluvi', 'rugata', 'segoso', 'paglie', 'salale', 'ruspai', 'covato', 'defeco', 'annuir', 'cometa', 'sifnii', 'ustosa', 'erotti', 'larice', 'dindio', 'gipeti', 'superi', 'ripili', 'mixate', 'epizoa', 'peggio', 'ebetar', 'solere', 'navigo', 'tirino', 'ergevi', 'megere', 'corsoi', 'disami', 'basoli', 'urgila', 'coltre', 'populi', 'favule', 'mimino', 'flippo', 'emanar', 'oziata', 'spugni', 'compre', 'bavere', 'aliare', 'vitati', 'nicchi', 'estrue', 'olfare', 'sipari', 'desala', 'nidori', 'alisee', 'asseta', 'pendio', 'tostar', 'rinvio', 'orammo', 'ararci', 'cofana', 'tungur', 'pecori', 'fittai', 'atleti', 'patica', 'census', 'deviai', 'cnidia', 'afasie', 'dietai', 'rifece', 'minale', 'lepade', 'vanato', 'pilosa', 'incavo', 'sbeffi', 'menhir', 'mencia', 'fellow', 'tanger', 'gitolo', 'punite', 'basidi', 'frango', 'cenobi', 'dicala', 'noccia', 'aspine', 'rampar', 'timoli', 'bastar', 'mashup', 'delimi', 'menate', 'papere', 'abripo', 'lineup', 'appuri', 'riddar', 'telson', 'pluvie', 'scalfa', 'ricrei', 'ficcar', 'bromio', 'amasti', 'rocket', 'cimosi', 'nomami', 'cosche', 'orbita', 'pretto', 'periti', 'melavi', 'dirimi', 'gitovi', 'coiamo', 'vibrai', 'remino', 'banche', 'novene', 'somari', 'equine', 'lavale', 'ratear', 'bramai', 'puliga', 'pipini', 'vocini', 'pasque', 'bardai', 'movete', 'menadi', 'sfogna', 'rapami', 'scalar', 'fugace', 'mixaci', 'munger', 'depuro', 'sbocci', 'becher', 'dicasi', 'stozza', 'ascrea', 'ormare', 'nunzio', 'focena', 'vanavi', 'basavo', 'basata', 'dispai', 'scotti', 'tinnii', 'basivo', 'aptere', 'lisata', 'guerir', 'bruzii', 'moduli', 'iodava', 'posose', 'aduggi', 'forums', 'imbavi', 'tregua', 'metilo', 'mohave', 'sballa', 'skypar', 'voluta', 'bulava', 'svolgo', 'fidino', 'arsiti', 'rapali', 'biveri', 'vinoso', 'stasai', 'leggio', 'retava', 'emigro', 'covane', 'bireme', 'dipeli', 'biolco', 'cedine', 'filata', 'torace', 'ligiai', 'estrae', 'career', 'desola', 'erraci', 'sagina', 'untato', 'lebbio', 'lobuli', 'condor', 'tholos', 'scolte', 'vanala', 'ronfai', 'ancise', 'spalmo', 'checca', 'smungo', 'gustai', 'vergar', 'zelavi', 'irizza', 'alerei', 'tutare', 'nihilo', 'baggea', 'begale', 'cupola', 'sudate', 'zelane', 'sangue', 'inleia', 'tafana', 'citato', 'gabole', 'apache', 'sdamar', 'scampo', 'chetai', 'dolore', 'eutrio', 'fluiva', 'grotte', 'dinaro', 'butile', 'godeva', 'gialua', 'vagiti', 'apatie', 'pelago', 'valere', 'bileni', 'algali', 'uzbeke', 'laonde', 'giucca', 'cucimi', 'pruine', 'rauche', 'humica', 'annota', 'insena', 'ritina', 'pacavi', 'velano', 'incoli', 'spersa', 'sedete', 'brulle', 'zambra', 'frulla', 'sbuffo', 'aerane', 'renane', 'moveva', 'caccio', 'molone', 'ledevi', 'rimico', 'padine', 'ontoso', 'rasoti', 'fasate', 'girare', 'sforni', 'soleva', 'adonto', 'creane', 'aitavi', 'cipria', 'faseli', 'guniti', 'fernet', 'ovista', 'ashram', 'ricusa', 'morfea', 'ombrar', 'facevi', 'istaci', 'nomade', 'muscle', 'tufare', 'imputa', 'scosta', 'bucano', 'adirar', 'adenia', 'nomavi', 'tranne', 'bracci', 'fenice', 'merlar', 'pioidi', 'ciglio', 'ovviai', 'arinia', 'olmeca', 'dietre', 'affari', 'iodala', 'immuni', 'dorali', 'sgambi', 'rumore', 'riarda', 'adoree', 'gliene', 'ormava', 'collar', 'tifavi', 'potato', 'arenar', 'necati', 'sufico', 'icarii', 'hammam', 'estivo', 'funaie', 'saione', 'sdirle', 'tremar', 'maturi', 'trieri', 'borini', 'pilono', 'recalo', 'shimmy', 'ossosi', 'sberci', 'cenale', 'perale', 'turata', 'tegami', 'bodoni', 'poncho', 'odiosa', 'cerici', 'aghini', 'vanino', 'ribaci', 'sgarbi', 'spanti', 'bionde', 'aldolo', 'vallee', 'accura', 'triate', 'rifate', 'bulina', 'riungi', 'erudii', 'scudar', 'bobini', 'panala', 'sorese', 'dopino', 'bureau', 'escisa', 'tipono', 'renosi', 'ortali', 'biosce', 'fiammo', 'ramuta', 'alcuno', 'bruire', 'biutar', 'cimala', 'racano', 'segoni', 'glissa', 'atteso', 'pomati', 'casali', 'litalo', 'leiese', 'inferi', 'naveri', 'vogano', 'celami', 'dolano', 'limare', 'dumper', 'quatte', 'dotavo', 'illusi', 'tetidi', 'ernesi', 'amagli', 'barbio', 'gelami', 'carela', 'unirti', 'stutai', 'dimora', 'guinai', 'ertele', 'smonta', 'ibibio', 'bodini', 'velese', 'presai', 'aliena', 'sdirla', 'spermi', 'adusar', 'bautte', 'vitare', 'rasovi', 'arvali', 'floreo', 'rotore', 'eschia', 'contre', 'coisce', 'asciar', 'ciurme', 'ascosa', 'rideva', 'sagire', 'strico', 'sporle', 'cerini', 'giteci', 'agosto', 'sconto', 'eroghi', 'zigosi', 'foiosa', 'pilali', 'nocini', 'riapri', 'fuetti', 'uiguri', 'reagir', 'tornio', 'adente', 'urgici', 'spalli', 'sprovo', 'ritara', 'eccedi', 'tabulo', 'sfizio', 'scarna', 'urlali', 'spinsi', 'aliami', 'temuti', 'merdon', 'sabati', 'coniza', 'intuii', 'morire', 'squamo', 'guerce', 'greppi', 'orriva', 'stolgo', 'magnar', 'brughi', 'oblami', 'arditi', 'valico', 'becera', 'fetori', 'formar', 'petite', 'cimaci', 'gemine', 'scollo', 'runica', 'albata', 'nerina', 'vocami', 'chente', 'tifico', 'flemma', 'zufoli', 'cougar', 'mimavi', 'zonali', 'ecoidi', 'inauro', 'covare', 'bigaro', 'alacre', 'piparo', 'cabrei', 'urgine', 'verole', 'cigane', 'mutole', 'triati', 'arsovi', 'giuste', 'scagni', 'femore', 'cincia', 'arnese', 'terrir', 'scroti', 'casone', 'fiutai', 'veltri', 'nenfri', 'cinesi', 'ariane', 'judoki', 'artese', 'tombai', 'azteca', 'truffe', 'risodo', 'melone', 'irpine', 'huarpe', 'ghinee', 'pelalo', 'ripudi', 'ugnali', 'tecale', 'scissa', 'sbraca', 'ripore', 'attati', 'anfana', 'riviva', 'dorata', 'senufo', 'scusso', 'attalo', 'sumera', 'fonino', 'chiama', 'stereo', 'arente', 'rapita', 'rinato', 'bigami', 'tifane', 'deiste', 'cotine', 'moloch', 'orlala', 'focosi', 'codino', 'guidar', 'sdarai', 'scordo', 'arilli', 'peneia', 'ramuli', 'onesti', 'spider', 'terone', 'picche', 'correr', 'angere', 'dolaci', 'spacco', 'somala', 'viralo', 'pedane', 'svoler', 'slanci', 'pagane', 'sitavo', 'cogoli', 'essere', 'lanata', 'cesane', 'pipati', 'trotti', 'orerai', 'siculo', 'tanaci', 'natavi', 'immani', 'orando', 'spargo', 'aldoli', 'rilimo', 'ciarli', 'escimi', 'orzati', 'orasti', 'alitai', 'tuffar', 'stagna', 'smegma', 'ancate', 'resevi', 'smerlo', 'geenne', 'schedo', 'ricini', 'olisce', 'imprua', 'sudami', 'semici', 'ridano', 'domini', 'cooler', 'focali', 'melesi', 'genavo', 'fiondo', 'caviti', 'edipei', 'fervei', 'orrire', 'punire', 'dimera', 'annosi', 'remano', 'jonico', 'affuma', 'senapi', 'zumato', 'dioica', 'tristi', 'defila', 'amarti', 'fresca', 'limala', 'circee', 'novano', 'gloria', 'caccia', 'romena', 'troika', 'girate', 'isperi', 'sdolgo', 'disuma', 'nerbar', 'bidono', 'olande', 'sondar', 'cumino', 'cionca', 'aiduco', 'calane', 'lucido', 'usurar', 'malusi', 'iberna', 'camune', 'cimato', 'zonato', 'zelavo', 'merito', 'marchi', 'dosate', 'nomalo', 'binari', 'arerai', 'sbuchi', 'domain', 'proava', 'ognuna', 'molidi', 'abiosi', 'zigale', 'cumbia', 'lentia', 'giulie', 'spicea', 'naiadi', 'aggeli', 'gibaio', 'escise', 'empila', 'incole', 'papero', 'pelate', 'sprays', 'untoli', 'cimali', 'vanami', 'picare', 'calcei', 'tutalo', 'celavi', 'triavi', 'gridai', 'dopala', 'velati', 'prasma', 'storto', 'oblano', 'grasse', 'ugnavi', 'velami', 'sdeste', 'rasomi', 'coceva', 'milesi', 'tenera', 'atteli', 'quarks', 'buesse', 'lirate', 'rigiri', 'intimi', 'suonar', 'fliaco', 'mentii', 'acazio', 'nolari', 'picena', 'sfatar', 'damoni', 'svezzi', 'cinema', 'espiar', 'allogo', 'soglio', 'fusori', 'paiola', 'gitoti', 'funera', 'rigaci', 'farota', 'ansavo', 'tenevo', 'fasato', 'nucata', 'fusoti', 'slento', 'optavi', 'meriai', 'uzzate', 'anidro', 'pipala', 'tafani', 'entrai', 'sdirsi', 'ittico', 'bramar', 'ideano', 'brutte', 'bearle', 'rognar', 'sborra', 'insidi', 'lagide', 'dirupi', 'empivi', 'ritese', 'isodio', 'aurata', 'forgio', 'fabici', 'arcesi', 'odiato', 'statue', 'batalo', 'folico', 'lesaci', 'svenni', 'acacie', 'iatreo', 'savane', 'casara', 'dicate', 'fucsie', 'fasavi', 'sagiva', 'calano', 'ripoti', 'ernica', 'colmai', 'arresa', 'armavi', 'carice', 'entico', 'apogeo', 'svotar', 'aurale', 'libito', 'falasa', 'oblati', 'sbozzo', 'linose', 'rorano', 'iliaca', 'sonali', 'incedi', 'gnidio', 'ditata', 'irsute', 'ungere', 'mogani', 'appura', 'plinti', 'bacali', 'nausee', 'incuse', 'cement', 'zeugmi', 'gueffa', 'estuba', 'gridii', 'oliera', 'todaro', 'vasami', 'ducato', 'amebee', 'abenti', 'orbate', 'pemana', 'sviane', 'acuite', 'esarco', 'avieri', 'butano', 'subbie', 'oleava', 'svegli', 'velcro', 'tutami', 'areico', 'madama', 'ciocco', 'frisar', 'negata', 'artavi', 'globes', 'dharma', 'tarane', 'oliere', 'uvacei', 'nencio', 'gobide', 'angari', 'refuso', 'zefiro', 'avervi', 'sdante', 'avance', 'fidaci', 'smilza', 'tepide', 'aventi', 'peculi', 'nodosa', 'locche', 'minino', 'shunts', 'citami', 'stoici', 'fisale', 'vicano', 'bigari', 'blasma', 'raffai', 'retali', 'dotale', 'tacimi', 'coissi', 'attuto', 'anotia', 'zelalo', 'pronti', 'sboffo', 'civico', 'agissi', 'sgobba', 'genera', 'rotava', 'ariose', 'innova', 'caleno', 'teucro', 'pipara', 'calide', 'vinaie', 'agiato', 'eletti', 'starlo', 'viroso', 'vangar', 'canali', 'giurar', 'topata', 'untine', 'esalar', 'veccia', 'nuance', 'votalo', 'bufami', 'zelaci', 'spalai', 'barava', 'review', 'storia', 'ecisti', 'locavi', 'vocale', 'retino', 'mentre', 'farcia', 'spreta', 'parlar', 'lagene', 'renavi', 'babies', 'zigene', 'limaci', 'colono', 'abazia', 'gepido', 'eluiti', 'istare', 'vallar', 'cacone', 'penuti', 'chatto', 'levane', 'bulaci', 'salilo', 'linkai', 'racket', 'rierto', 'suvvia', 'aplite', 'rovere', 'peduli', 'pacere', 'netini', 'fabuli', 'ardile', 'cicchi', 'raglia', 'trusci', 'appaia', 'recami', 'ugnata', 'amanza', 'innati', 'rumena', 'eolite', 'smilzi', 'grappo', 'coding', 'ottica', 'fresai', 'fusane', 'dature', 'domala', 'bramii', 'adusto', 'bulico', 'vigile', 'fugalo', 'ignoro', 'svesta', 'divida', 'pativi', 'solari', 'astata', 'salesi', 'fidali', 'rilimi', 'valora', 'rodete', 'lurida', 'untare', 'fetali', 'swatti', 'sgomma', 'nudami', 'navesi', 'salolo', 'esecri', 'brucar', 'caprai', 'affini', 'novela', 'panici', 'vilavo', 'scinda', 'donate', 'abenta', 'grassi', 'animai', 'zelosa', 'resisi', 'chiesi', 'sutura', 'ravana', 'finora', 'rugale', 'irizzo', 'flagro', 'ranchi', 'macole', 'stridi', 'rogati', 'errate', 'debbio', 'ierici', 'ciulla', 'momese', 'oleica', 'segavo', 'damane', 'mutici', 'gluteo', 'stibio', 'bomato', 'mancai', 'crambi', 'outlet', 'telugu', 'damata', 'idruro', 'siigli', 'mazico', 'fornai', 'perule', 'sanare', 'fiatai', 'inaspo', 'ustose', 'ionico', 'ristia', 'fumica', 'bonone', 'storno', 'moment', 'palato', 'solevo', 'gemmai', 'echino', 'posavi', 'tutelo', 'salpar', 'maldir', 'casine', 'cosimi', 'bugnai', 'elisse', 'cenere', 'canala', 'tradii', 'escisi', 'salive', 'edipea', 'bruzia', 'lungai', 'cinice', 'roditi', 'fucini', 'sporta', 'abiura', 'pavoni', 'armava', 'spiavo', 'sveste', 'attimo', 'danzai', 'cengio', 'scorpi', 'rierta', 'scapar', 'fenici', 'nudava', 'correi', 'calore', 'roseti', 'rilavi', 'amorei', 'oleata', 'fisavo', 'nassie', 'esecra', 'faenza', 'orario', 'ramaie', 'negalo', 'treppi', 'diarca', 'aviana', 'titolo', 'tubuli', 'ispide', 'cavesi', 'esarca', 'factum', 'viveur', 'attate', 'coffee', 'meseri', 'gremii', 'liveri', 'cenoni', 'diteli', 'ussite', 'annose', 'ocrosi', 'batter', 'aerare', 'panaie', 'ierica', 'lacchi', 'svolle', 'lesivo', 'gamica', 'miresi', 'riseco', 'punivo', 'frizzi', 'rabico', 'piceni', 'pegola', 'rumane', 'fatine', 'cenuri', 'confar', 'sappia', 'usando', 'etesio', 'lavavo', 'osassi', 'gioivi', 'estino', 'immelo', 'elicer', 'rifusi', 'rimuto', 'clange', 'preani', 'sudane', 'lucina', 'pativa', 'acerra', 'ascite', 'scurai', 'gitosi', 'ordita', 'ugnano', 'cagavo', 'miasmi', 'issale', 'bruita', 'listar', 'tanati', 'ascito', 'sloops', 'vedimi', 'faldar', 'inteli', 'caditi', 'solami', 'forzai', 'svigni', 'orlavo', 'timida', 'gelido', 'vilano', 'marosi', 'ontici', 'apersi', 'sudino', 'ardere', 'cedule', 'sgozza', 'seenne', 'coming', 'issati', 'guaivo', 'ribere', 'storci', 'ooliti', 'domale', 'bomate', 'plesso', 'crucio', 'guerre', 'addata', 'brevio', 'denego', 'semute', 'trivio', 'lobari', 'timona', 'soluti', 'rorare', 'gemino', 'trappi', 'fratai', 'alonar', 'fiatar', 'arcare', 'impeto', 'alpina', 'traevi', 'senufi', 'gerghi', 'aurala', 'fotona', 'priono', 'cotale', 'laccai', 'vociti', 'tesevi', 'cimino', 'arroti', 'driver', 'osculi', 'cubico', 'empite', 'flesse', 'spunto', 'tarpan', 'risico', 'usurio', 'tackle', 'ghetti', 'scerse', 'calava', 'rutili', 'vermut', 'rovosa', 'spurar', 'forali', 'ispido', 'spallo', 'bovaro', 'cecane', 'libbre', 'alcani', 'utopia', 'alzano', 'nacqui', 'cicini', 'botton', 'antine', 'borica', 'oselle', 'camena', 'loisti', 'offset', 'smagar', 'telavi', 'eliomi', 'miaula', 'rapato', 'tavole', 'piotta', 'numano', 'uniati', 'frutti', 'sdarmi', 'aliali', 'zeribe', 'remigo', 'fracco', 'avario', 'dorano', 'balate', 'agency', 'ideavo', 'taccia', 'smurar', 'gabesi', 'fugaci', 'urbico', 'fissai', 'dolche', 'neanch', 'narcos', 'avvela', 'ridoto', 'arbane', 'vivili', 'cimati', 'contri', 'slargo', 'odiare', 'decedo', 'bifero', 'caladi', 'votava', 'cagale', 'untevi', 'smagio', 'inurbi', 'coglie', 'dedale', 'fumosa', 'storca', 'vaniti', 'anorak', 'colato', 'rumiga', 'rumate', 'regali', 'olirvi', 'rositi', 'tafone', 'agnine', 'tirava', 'fuochi', 'tonale', 'cesani', 'stolte', 'vimalo', 'fetole', 'minimi', 'vivace', 'colera', 'ungula', 'calzar', 'pieghi', 'riusar', 'guanto', 'nomava', 'marmai', 'demoni', 'dalici', 'costar', 'dicaci', 'dorale', 'cinque', 'camite', 'slegar', 'simuli', 'vasame', 'dating', 'tanite', 'siresi', 'ricima', 'olissi', 'spendo', 'ammisi', 'sbafar', 'spremi', 'culaco', 'pannai', 'lavavi', 'aghino', 'anitre', 'spoppi', 'avorni', 'andane', 'disusi', 'clivie', 'invado', 'parola', 'sgrato', 'svelse', 'borivi', 'ossute', 'drappo', 'dacron', 'sesino', 'colobo', 'sputar', 'estrez', 'ghezza', 'musico', 'spurio', 'uveali', 'retale', 'elmate', 'tesimi', 'salese', 'sbirro', 'saporo', 'sterni', 'rosone', 'iodali', 'repudi', 'sperda', 'damava', 'dunese', 'plaude', 'pegole', 'sverza', 'bratto', 'stolga', 'tenuto', 'fasati', 'fodero', 'danese', 'basaci', 'riccia', 'recedi', 'studia', 'moneto', 'reculi', 'sdille', 'adepte', 'egagre', 'armale', 'surali', 'tomami', 'licidi', 'aizzai', 'piaffi', 'ambulo', 'crosta', 'zigano', 'bolesi', 'votala', 'tisane', 'foiosi', 'cimate', 'cerone', 'baleno', 'somite', 'purali', 'carnea', 'opacai', 'iprite', 'ciccia', 'rasane', 'cenemi', 'perina', 'filaci', 'selcia', 'fiorii', 'velini', 'karate', 'sdimmi', 'sgravi', 'albina', 'lunghe', 'obrize', 'chintz', 'nitrar', 'uscivo', 'vegana', 'ignite', 'papale', 'ircini', 'pitale', 'bubone', 'illeso', 'potane', 'canove', 'picari', 'maison', 'recido', 'langue', 'stomie', 'ornalo', 'cuboni', 'guasta', 'tomale', 'sfocar', 'novese', 'pupone', 'ortose', 'mudala', 'ciotto', 'monaco', 'illuvi', 'musume', 'guazzo', 'iessea', 'gabbar', 'putida', 'cecate', 'ararne', 'istano', 'brinar', 'adissi', 'cariar', 'teodie', 'creami', 'aziaco', 'tutela', 'cuprea', 'sfatte', 'abrado', 'sitane', 'nomico', 'capota', 'separa', 'rorale', 'norico', 'giobba', 'risini', 'umisti', 'impubi', 'volino', 'libico', 'barano', 'lecani', 'zoppie', 'snerva', 'fonane', 'utelli', 'renata', 'golear', 'ficaia', 'rimuri', 'risoda', 'tesosi', 'cavata', 'petino', 'ovetto', 'livori', 'taccio', 'ugnami', 'rotati', 'cabreo', 'ghigno', 'livida', 'razzai', 'argano', 'urtare', 'vomiva', 'scasse', 'rullar', 'razzio', 'tesici', 'raugea', 'pugili', 'pomice', 'olmeti', 'vanale', 'spezzi', 'soduco', 'parole', 'necaci', 'chiese', 'orfica', 'furiar', 'ceruli', 'rubata', 'sbrinz', 'cicalo', 'cimare', 'necata', 'miscee', 'zecchi', 'bucane', 'vacela', 'espada', 'tomare', 'cibato', 'rimiri', 'litaci', 'pedete', 'fiosso', 'ruvido', 'esondi', 'zignai', 'peloni', 'grondo', 'penace', 'celata', 'rimena', 'nocque', 'binese', 'bicone', 'vaiata', 'ancoro', 'flauto', 'uvaria', 'micini', 'culleo', 'golosi', 'datomi', 'sembro', 'ripide', 'acerbe', 'coloro', 'areale', 'latore', 'cinica', 'loffar', 'gelane', 'cumolo', 'ancisa', 'finale', 'ellena', 'dolopi', 'velate', 'oriamo', 'erogai', 'spulai', 'orzali', 'favare', 'vigano', 'sfarli', 'pascal', 'saette', 'epopea', 'avvisa', 'beagli', 'tuteli', 'onrami', 'tabide', 'seneci', 'setone', 'remaio', 'sistro', 'poscia', 'nicese', 'armesi', 'orditi', 'paloni', 'casare', 'stogli', 'pepane', 'shunta', 'palmer', 'gretta', 'ascesi', 'speleo', 'balzai', 'ossine', 'militi', 'vaiaia', 'eliaci', 'padano', 'sdento', 'venoto', 'manobi', 'metano', 'scarsi', 'falico', 'datalo', 'elabro', 'acarpi', 'ledeva', 'ancone', 'estete', 'gualco', 'attedi', 'rogiti', 'notizi', 'mangue', 'dalica', 'morrai', 'federa', 'rifaso', 'varice', 'dirima', 'votati', 'recuse', 'larvai', 'obrizo', 'spoppo', 'menalo', 'caleva', 'cotoni', 'elceti', 'pitici', 'culate', 'famali', 'potevo', 'padule', 'rogata', 'alalia', 'gemono', 'sporge', 'impruo', 'sisaro', 'dovuto', 'avvidi', 'pagina', 'issesi', 'caiaco', 'codiar', 'risoti', 'pittar', 'eboide', 'dietar', 'dirime', 'stanza', 'inibii', 'fratel', 'papaya', 'diarie', 'sitami', 'narrai', 'ergila', 'pirone', 'peonio', 'subset', 'frappi', 'fumato', 'setate', 'golato', 'grabbi', 'petala', 'untami', 'rosimi', 'bemine', 'sisari', 'cultro', 'mudato', 'magico', 'gitene', 'zirlar', 'mitemi', 'fratto', 'trogli', 'papers', 'paralo', 'sharar', 'basole', 'decine', 'nasami', 'follie', 'veloci', 'lodava', 'herero', 'smover', 'favuli', 'aurane', 'bassai', 'scassi', 'sodato', 'pretti', 'oziava', 'comizi', 'romici', 'velino', 'prillo', 'gititi', 'zarini', 'bullom', 'tatare', 'paglia', 'cammin', 'iniquo', 'pancia', 'pipita', 'canghe', 'eietto', 'cofosi', 'ruppia', 'raduni', 'sirici', 'gelino', 'scendi', 'bacata', 'ottusa', 'tratte', 'talami', 'picene', 'solalo', 'sbrodi', 'vagava', 'nessun', 'mixava', 'augnai', 'eupnee', 'lamava', 'punici', 'asseti', 'avenue', 'lumata', 'bandir', 'oleala', 'fedano', 'ursino', 'erbito', 'verrei', 'equidi', 'secolo', 'manidi', 'cerume', 'spinai', 'celate', 'sorbai', 'menome', 'rimala', 'bluffs', 'evitta', 'doppie', 'vigila', 'zimasi', 'torose', 'stoffa', 'aspiri', 'acetar', 'benefa', 'covaci', 'alfura', 'riezze', 'auriga', 'piaffo', 'ferodo', 'unente', 'tutavi', 'infili', 'nomaci', 'locate', 'duagio', 'enerva', 'simulo', 'inette', 'apuana', 'ranule', 'renica', 'riarma', 'spamma', 'zelate', 'dinego', 'spacci', 'deleta', 'banzai', 'risoni', 'morbus', 'fischi', 'libici', 'vasaia', 'morami', 'malizi', 'cucchi', 'ledilo', 'potuta', 'afille', 'urbana', 'colchi', 'omagre', 'comate', 'bufavi', 'pogrom', 'tucano', 'inarra', 'votane', 'oleici', 'astrar', 'indova', 'contee', 'bulano', 'assisi', 'bragia', 'legavi', 'osmici', 'condii', 'grosse', 'smilze', 'rigolo', 'cepola', 'polini', 'modale', 'eloqui', 'maiden', 'ponili', 'maiale', 'spreti', 'teseti', 'ungare', 'ligule', 'sugane', 'pepava', 'stands', 'melode', 'acerbi', 'affusa', 'enorme', 'mirtee', 'oppino', 'urinai', 'feltra', 'progni', 'fimosi', 'freezo', 'sudori', 'egagra', 'truppe', 'guazze', 'ascita', 'basola', 'tennis', 'grazia', 'rutulo', 'zanche', 'attivo', 'amasio', 'fidate', 'estero', 'dottai', 'arazzi', 'torici', 'oofori', 'tacite', 'arrido', 'rasoia', 'piceno', 'trinca', 'pipano', 'onrali', 'brusir', 'evolve', 'attuai', 'tifici', 'tanavi', 'ditemi', 'agenza', 'attili', 'cannar', 'immite', 'adimai', 'oppidi', 'parade', 'fretto', 'annali', 'sagomi', 'martin', 'sorbir', 'aguato', 'arguti', 'simula', 'cerata', 'plorai', 'daorsi', 'accada', 'givate', 'taraci', 'amiamo', 'sitata', 'palpar', 'digito', 'berrei', 'starli', 'arsele', 'folici', 'belate', 'sedare', 'letico', 'folati', 'fedava', 'mirino', 'lavate', 'rubane', 'glandi', 'flessa', 'datole', 'urbano', 'ripila', 'vedere', 'sileno', 'sbrini', 'duerno', 'ottani', 'remava', 'nudati', 'plazer', 'ansami', 'inneri', 'radere', 'insule', 'panini', 'usasse', 'sodano', 'escine', 'inveii', 'splene', 'sonora', 'clonar', 'cupree', 'ciance', 'udiate', 'timore', 'junker', 'caldeo', 'cruori', 'fruste', 'educai', 'madame', 'stagli', 'ontico', 'ruotai', 'bilobi', 'senior', 'eluire', 'fascia', 'furono', 'canapi', 'rimate', 'areica', 'arnesi', 'ipetra', 'previo', 'ubicai', 'avvero', 'tirano', 'cabali', 'cosalo', 'alunno', 'arsaci', 'buioso', 'puccia', 'aborro', 'ranger', 'uvetta', 'biadar', 'batida', 'sciava', 'ramuti', 'ritubi', 'lupine', 'penane', 'soldar', 'lipide', 'geiger', 'ibiceo', 'sleale', 'munite', 'editti', 'novete', 'paioli', 'tutate', 'pescai', "quant'", 'sfrisi', 'amerei', 'rigosi', 'cacami', 'vacene', 'covalo', 'enervo', 'frinii', 'accaso', 'torosi', 'sonalo', 'corili', 'frigna', 'orsino', 'svagai', 'fisati', 'sheqel', 'benese', 'smorzi', 'fluivi', 'spalar', 'corona', 'frughi', 'benzoi', 'punico', 'lotosi', 'eresie', 'azoici', 'bombii', 'rudese', 'campii', 'aveste', 'tituba', 'spello', 'spazia', 'lodate', 'capivi', 'botole', 'olirle', 'lesero', 'frinio', 'taluna', 'carpir', 'cumane', 'botoli', 'freghe', 'alfine', 'ertiti', 'spedai', 'creale', 'potute', 'cagano', 'guaita', 'lodalo', 'gaudei', 'twitta', 'pasquo', 'fateci', 'scendo', 'telare', 'venere', 'libino', 'trojke', 'annasa', 'zumali', 'vagata', 'sperai', 'allevo', 'morato', 'cimoli', 'scorgo', 'fotica', 'calice', 'vacavo', 'cicadi', 'vacavi', 'barati', 'evolvi', 'allude', 'sdirci', 'selfai', 'litare', 'elafri', 'pofane', 'sgridi', 'ippica', 'mucici', 'ibalaa', 'ircani', 'lenire', 'rubona', 'casier', 'sfasai', 'flangi', 'vedano', 'rimose', 'capala', 'volver', 'fisane', 'cotino', 'fabbro', 'davano', 'acaico', 'cacini', 'pendii', 'cenavo', 'mazdea', 'gabese', 'recine', 'retato', 'espila', 'lavane', 'cannai', 'lanari', 'meerei', 'equala', 'markup', 'cenaci', 'ottini', 'larvar', 'severa', 'nerine', "rista'", 'nocqui', 'nogate', 'spazio', 'mutoni', 'sferza', 'delire', 'gelalo', 'totali', 'segata', 'sgotti', 'cadute', 'areici', 'morano', 'veniva', 'svolto', 'aerini', 'denota', 'odenti', 'ardilo', 'sverni', 'licose', 'tesavo', 'iodosa', 'lodata', 'voraci', 'romane', 'limolo', 'loader', 'tosche', 'leardo', 'caveat', 'spiino', 'sedale', 'velame', 'stirar', 'chador', 'ciuffo', 'spoppa', 'fognar', 'ratese', 'pubica', 'dosaci', 'altine', 'medito', 'rancia', 'clasti', 'pesage', 'follai', 'acorma', 'medusa', 'sdillo', 'toreai', 'togati', 'tamiso', 'kazaka', 'trisma', 'morati', 'boleti', 'landre', 'sanale', 'sfuria', 'piazze', 'baleni', 'vipere', 'burian', 'sfrena', 'ateneo', 'timina', 'gnocco', 'rusche', 'ugrico', 'bricca', 'escare', 'liscia', 'frisse', 'pulcra', 'unisse', 'accuro', 'ubiquo', 'biondi', 'vocero', 'confli', 'alarne', 'sprona', 'sodico', 'rutina', 'opposi', 'rigavi', 'ciucci', 'cibino', 'esumar', 'funata', 'evitai', 'pinene', 'tanche', 'radine', 'duceva', 'annosa', 'bercio', 'curami', 'fottei', 'andito', 'verina', 'budini', 'grange', 'rapare', 'rutata', 'proevo', 'loculi', 'golata', 'quatta', 'misses', 'melale', 'disama', 'panche', 'orarti', 'pesoli', 'ripidi', 'nogavi', 'dimori', 'varaci', 'lacera', 'ferina', 'tempus', 'rōmaji', 'incari', 'prezze', 'capato', 'obiter', 'ambage', 'campos', 'sbarre', 'sciami', 'ciarle', 'sviate', 'etereo', 'pacali', 'viorne', 'tiralo', 'putavi', 'rotali', 'edusse', 'sapino', 'stollo', 'fondar', 'centro', 'estuai', 'dicale', 'freddo', 'inopia', 'falere', 'neutra', 'repila', 'trolla', 'tegoli', 'urtano', 'impesi', 'brunir', 'bangio', 'badavo', 'creder', 'svigna', 'tappai', 'polene', 'boiata', 'predar', 'pierio', 'ohmico', 'paiano', 'basami', 'sgrano', 'sabbie', 'thrash', 'parlai', 'natisi', 'diliga', 'camuse', 'musaci', 'sorino', 'profit', 'fusone', 'allusi', 'crismi', 'flotte', 'onrano', 'emigra', 'ducati', 'ortiva', 'culaie', 'gazaci', 'uranio', 'nescia', 'vaiaio', 'eluvio', 'smagri', 'direte', 'piasse', 'elgeye', 'bifidi', 'alleva', 'avveli', 'austro', 'pinete', 'dumosi', 'nemica', 'sparii', 'dannar', 'untemi', 'ducami', 'grocca', 'deceda', 'sturai', 'cloaca', 'immuti', 'barile', 'scorre', 'zagare', 'paludi', 'tosalo', 'aprimi', 'votare', 'frenai', 'celiti', 'ripari', 'scorge', 'solaio', 'updato', 'setati', 'grazio', 'elivie', 'traggo', 'avalvi', 'beggia', 'gessee', 'sfidai', 'trabee', 'aiuolo', 'libala', 'vitoni', 'doluta', 'pavesa', 'ritrai', 'amoreo', 'dogana', 'lasche', 'impure', 'raitai', 'cinici', 'abduco', 'morini', 'fobici', 'evento', 'redati', 'gannii', 'oleato', 'spesar', 'nefari', 'stichi', 'basale', 'domali', 'sbozzi', 'dedalo', 'smagro', 'libani', 'casoni', 'gaggia', 'ultori', 'coirne', 'fisare', 'editui', 'dimore', 'tepidi', 'ondoso', 'memora', 'uggino', 'goffra', 'persee', 'sdurii', 'brigar', 'ebbene', 'rignar', 'sciura', 'disano', 'tomano', 'notato', 'risale', 'teiere', 'tagali', 'mimica', 'rabbia', 'puszta', 'notane', 'curaci', 'dosavi', 'aftose', 'vomica', 'oziato', 'ribeve', 'linone', 'fresia', 'paschi', 'meerai', 'allear', 'insega', 'civada', 'popola', 'robbia', 'albine', 'carter', 'gibaie', 'recita', 'viglio', 'sucide', 'recedo', 'quinto', 'fregai', 'ugnati', 'semica', 'sverna', 'orarli', 'peptoe', 'ferace', 'switch', 'merita', 'tipine', 'amaste', 'broili', 'fonaci', 'alesai', 'muffai', 'mammee', 'valili', 'arbore', 'zappar', 'lambii', 'citisi', 'disuso', 'agiaci', 'braiti', 'esosio', 'urtavi', 'voleri', 'smodai', 'frinir', 'igiene', 'incula', 'inciso', 'piarle', 'todini', 'rogala', 'frisio', 'cetina', 'sorger', 'zincar', 'scerpa', 'soliva', 'schife', 'fidalo', 'cringe', 'imbavo', 'puglie', 'tutine', 'lisami', 'scippo', 'dedure', 'spiava', 'ceduta', 'falche', 'disani', 'frecce', 'lessia', 'tirala', 'ardano', 'sorata', 'aftoso', 'stirpa', 'molali', 'fonone', 'ibicee', 'scaldo', 'iononi', 'labore', 'repilo', 'riardi', 'risici', 'omacci', 'tomolo', 'verune', 'anneri', 'smolli', 'datava', 'lesbie', 'bagoba', 'cotina', 'saline', 'solvei', 'basito', 'risiti', 'rimavi', 'ostoli', 'salano', 'smorti', 'covole', 'elodia', "quand'", 'areala', 'narice', 'rinata', 'risero', 'sdolse', 'orezza', 'druido', 'ignota', 'sheikh', 'scotio', 'spicci', 'tunnel', 'cumula', 'abbila', 'darete', 'destri', 'curalo', 'affusi', 'temile', 'duelli', 'penava', 'celebi', 'scorzi', 'remixa', 'bruivo', 'iesseo', 'dilaga', 'fumavo', 'pipite', 'pacate', 'shatzu', 'badala', 'toupet', 'bistro', 'baiani', 'liftar', 'bovari', 'trarle', 'gemina', 'french', 'fausta', 'molata', 'elisia', 'trench', 'nepeta', 'starar', 'dolcie', 'adorna', 'ossete', 'arsisi', 'unione', 'rutine', 'fiorir', 'rivota', 'puniva', 'sdirei', 'esigui', 'viella', 'rosato', 'stanno', 'cimoso', 'rinego', 'groppo', 'sonati', 'dritto', 'batola', 'ortese', 'neutre', 'acanti', 'bloggo', 'ceraso', 'visoni', 'gazato', 'lesene', 'fimina', 'cibala', 'eietti', 'sugaci', 'andine', 'funero', 'coirsi', 'fermio', 'straso', 'ottimo', 'chiude', 'gitivi', 'badaci', 'becero', 'scorda', 'sporvi', 'sinica', 'formai', 'rigole', 'stanca', 'caribe', 'estesa', 'gnucca', 'escute', 'lasesi', 'bucavi', 'cogito', 'parsec', 'empita', 'tutati', 'derogo', 'guigna', 'grette', 'pipine', 'renova', 'vidimi', 'zittar', 'tantum', 'chetar', 'vostri', 'scomma', 'ranfie', 'uscito', 'dosane', 'avveda', 'tarlai', 'derida', 'diaria', 'casate', 'urrite', 'bonsai', 'devien', 'silici', 'crebro', 'semaio', 'cagavi', 'todina', 'guaiti', 'cianze', 'rodici', 'solido', 'coniar', 'lucchi', 'attami', 'rodato', 'ertana', 'gorgia', 'guitta', 'leiesi', 'rosane', 'volleo', 'usuari', 'rodali', 'oogoni', 'retini', 'estini', 'fasala', 'scagna', 'banino', 'domami', 'spaghi', 'baiare', 'vorate', 'spalma', 'lapito', 'putidi', 'ideino', 'saggio', 'pedini', 'eruche', 'alteri', 'fedavo', 'dongle', 'purgar', 'oofore', 'farete', 'devoro', 'argots', 'tenace', 'asinai', 'coraio', 'sfotta', 'daziai', 'brucii', 'zollar', 'recula', 'fabica', 'oppili', 'carpio', 'shalom', 'skippi', 'repano', 'grezze', 'amassi', 'albagi', 'quidam', 'lische', 'badali', 'dipnoo', 'abbino', 'rasavi', 'abbate', 'navata', 'impupo', 'cicale', 'holter', 'bifore', 'discoi', 'sedimi', 'anoici', 'ramala', 'lesevi', 'blonde', 'timici', 'arrays', 'immaga', 'guazzi', 'sagino', 'rasino', 'questo', 'sgamai', 'drives', 'buffer', 'vedasi', 'figuro', 'attuar', 'dicalo', 'temevo', 'texane', 'plebei', 'aiutar', 'teacea', 'rodaci', 'duriti', 'deputi', 'visati', 'scolmi', 'doceta', 'barbet', 'asolar', 'pinite', 'caruso', 'stonar', 'scopre', 'uzbeco', 'rosali', 'ordito', 'spanna', 'sembri', 'sdiate', 'deduci', 'rotale', 'madori', 'incaro', 'nonesi', 'plasmo', 'deisti', 'linnee', 'vicino', 'tlaspi', 'foravo', 'pesavo', 'senale', 'sdutta', 'donati', 'risiva', 'iugeri', 'istmii', 'effigi', 'sporti', 'armino', 'aliaci', 'esiger', 'gavina', 'agiavi', 'podure', 'labrum', 'maonie', 'sgrata', 'assone', 'gauche', 'bibace', 'bevevo', 'accedo', 'risudo', 'lipasi', 'occise', 'optano', 'munire', 'fluato', 'bacate', 'turare', 'diploe', 'bosini', 'sciaci', 'vatelo', 'forbii', 'nubila', 'burine', 'strips', 'erbite', 'torcio', 'strigo', 'orerie', 'tonata', 'artalo', 'ertavi', 'zannai', 'vilita', 'inarco', 'ramavi', 'escono', 'scaldi', 'prudei', 'smonto', 'macini', 'bilina', 'vaglia', 'vibici', 'iseana', 'onravo', 'mohawk', 'virano', 'limava', 'satiro', 'papier', 'spinto', 'inaura', 'putale', 'curari', 'enanti', 'ustolo', 'incoro', 'vacala', 'esciti', 'morbio', 'giurai', 'handle', 'patema', 'assumi', 'cimazi', 'palpai', 'astiar', 'attive', 'status', 'rialzo', 'macera', 'uigure', 'damaci', 'velena', 'nolane', 'dunque', 'spegno', 'papaga', 'agoste', 'smollo', 'diedra', 'renano', 'corree', 'riluca', 'salvar', 'celtii', 'armena', 'remake', 'credit', 'zonano', 'panico', 'amenza', 'ripone', 'rigalo', 'nostoc', 'salute', 'sbarra', 'scorgi', 'pagala', 'patito', 'onrati', 'sobrie', 'dafnia', 'schedi', 'sturbi', 'trovai', 'penice', 'aitati', 'ilvato', 'rodese', 'aderbo', 'fatala', 'astuta', 'disane', 'zeppai', 'affidi', 'avanzi', 'aulite', 'cateti', 'cogita', 'vitese', 'tundra', 'sassee', 'sagaci', 'scioli', 'zelota', 'sodami', 'cerane', 'educar', 'scabri', 'apogei', 'tanava', 'povera', 'votata', 'efesia', 'puzzon', 'invita', 'jersey', 'melami', 'marmar', 'stetti', 'cileno', 'relega', 'pudori', 'salata', 'comino', 'andato', 'rapite', 'custom', 'iatree', 'voralo', 'zimosi', 'putrii', 'tarmar', 'fylfot', 'bavose', 'pappai', 'aclini', 'guaimi', 'stradi', 'guelfo', 'usatti', 'deduco', 'idroni', 'impact', 'prendi', 'sfiato', 'ridete', 'ramaio', 'riardo', 'sdalli', 'bretto', 'ancide', 'vietai', 'mastra', 'versus', 'icario', 'sognai', 'resede', 'tracco', 'fifoni', 'limosi', 'mischi', 'atimie', 'dicono', 'bijoux', 'rasolo', 'riatta', 'piccia', 'lasico', 'pagani', 'places', 'duravo', 'rumavi', 'eddica', 'irridi', 'bonesi', 'sagiti', 'ridevo', 'viorna', 'amando', 'tregge', 'arroli', 'stoghi', 'farcii', 'usarci', 'fasica', 'sciame', 'riapra', 'mixane', 'riurta', 'abigeo', 'zigote', 'ciabai', 'rigiro', 'fannia', 'scossi', 'motosa', 'lamavi', 'antodi', 'incili', 'chaise', 'imputo', 'zoecio', 'basuta', 'bevola', 'avvivo', 'sfogar', 'scuoce', 'enigmi', 'tumida', 'filino', 'ideina', 'lagena', 'fugane', 'sagnar', 'dasoto', 'tesser', 'cerino', 'gittar', 'olenti', 'rubino', 'vendei', 'digamo', 'pashto', 'moenia', 'libate', 'bulalo', 'affoco', 'mimane', "gliel'", 'turato', 'ergete', 'giunco', 'cicino', 'sdesti', 'sfioro', 'vimino', 'sgrati', 'baffon', 'unirle', 'cibata', 'ospito', 'adirci', 'allure', 'braire', 'risili', 'baciai', 'risivi', 'inciti', 'supply', 'minane', 'grafia', 'corago', 'affama', 'purghe', 'iesino', 'rogami', 'bentos', 'arcuai', 'adonar', 'coiate', 'bevevi', 'tenuta', 'compio', 'vasini', 'niloti', 'fusasi', 'astaci', 'risive', 'idroma', 'diramo', 'zoppia', 'istale', 'narrar', 'bacare', 'sagivi', 'gazate', 'lineti', 'teucri', 'veduto', 'gufane', 'pesino', 'stilli', 'domano', 'toppar', 'breaks', 'parafa', 'uzzati', 'osanti', 'imbola', 'ignoti', 'mutuai', 'pironi', 'tofane', 'necton', 'lentai', 'sitano', 'ledono', 'nasavi', 'parcar', 'bevila', 'supini', 'foiose', 'adiste', 'gabala', 'redano', 'repono', 'bubala', 'annera', 'bramir', 'foioli', 'grugni', 'abelia', 'trialo', 'etesie', 'metati', 'mirati', 'erboso', 'doping', 'rivari', 'vitali', 'remato', 'alloro', 'sbirra', 'smungi', 'indidi', 'taravi', 'avvale', 'famino', 'rigavo', 'sbieco', 'strofa', 'eterei', 'sloggi', 'paiolo', 'untene', 'plebea', 'cedevi', 'musato', 'necalo', 'dolcia', 'antera', 'duglie', 'riusai', 'gioiar', 'zappai', 'crebri', 'binomi', 'amarlo', 'casosa', 'rivani', 'furane', 'sterna', 'triata', 'puggio', 'remati', 'ferito', 'riggia', 'sfreni', 'cinger', 'bovoli', 'logica', 'spenti', 'unnici', 'defilo', 'ciular', 'brullo', 'umetta', 'scerpo', 'libido', 'votiva', 'ciarpe', 'emigri', 'poculi', 'memore', 'palate', 'albero', 'isiaca', 'capeva', 'limuli', 'esonda', 'fruire', 'nebule', 'baiosi', 'tubavi', 'albesi', 'osseta', 'murali', 'fisica', 'jesina', 'lamaci', 'ruditi', 'sorghi', 'dolare', 'vorace', 'adelfo', 'melaci', 'fisima', 'orezzo', 'olirai', 'genata', 'bacalo', 'gestro', 'melali', 'fogate', 'taccai', 'acquar', 'labbia', 'irrigo', 'fornii', 'algida', 'rescue', 'spirai', 'ormaia', 'edotti', 'sviati', 'cinomi', 'olfalo', 'calcai', 'rosari', 'bonona', 'sfolto', 'untovi', 'deluso', 'necava', 'sbafon', 'sporgi', 'largii', 'rimari', 'urgili', 'oleate', 'circeo', 'zinale', 'impipo', 'augiti', 'gelata', 'seuese', 'setosa', 'paguri', 'favata', 'togata', 'argani', 'pistie', 'amicai', 'pronto', 'rivelo', 'smorsa', 'iuguli', 'bittai', 'mimata', 'ertano', 'rumare', 'cancro', 'stondo', 'evelle', 'nunzia', 'nerume', 'dispor', 'ormino', 'graffi', 'remoto', 'epizoi', 'tubare', 'carelo', 'alzaia', 'obduri', 'tiburi', 'trasto', 'onraci', 'laride', 'latini', 'sgarze', 'bororo', 'survey', 'smerla', 'mixati', 'estati', 'ripito', 'tights', 'pensar', 'cosine', 'ledimi', 'giarde', 'scadde', 'equaci', 'strofe', 'solata', 'sbirbo', 'atonia', 'biacco', 'legnar', 'oliaci', 'braiva', 'arride', 'viario', 'stupri', 'sverga', 'cahier', 'amichi', 'denega', 'mioide', 'bipolo', 'cecaci', 'pialle', 'spingi', 'arsesi', 'vessar', 'alarlo', 'storne', 'compir', 'caldea', 'remare', 'urlone', 'layout', 'ciecar', 'retrar', 'ancida', 'sonale', 'rogali', 'trebbi', 'aurava', 'resiti', 'urbane', 'angina', 'gibaia', 'sverlo', 'trappo', 'saldar', 'andare', 'oziale', 'torqui', 'stesar', 'vagivo', 'gabino', 'ripigi', 'dicevo', 'gadget', 'voodoo', 'calaci', 'grembi', 'etnico', 'picidi', 'avanie', 'rosino', 'frette', 'ploceo', 'arbori', 'elgoni', 'fargne', 'deriva', 'entine', 'ginnar', 'predir', 'sanata', 'euzoni', 'quokka', 'nervei', 'sapota', 'alanti', 'damavi', 'sverze', 'estiva', 'bautta', 'melodo', 'agents', 'subivi', 'loffia', 'sconta', 'abbaco', 'novare', 'letale', 'basute', 'sdanne', 'auguri', 'laceri', 'bollii', 'datoti', 'master', 'eunuca', 'penare', 'babeli', 'rushes', 'sugata', 'pepami', 'tomaio', 'auravo', 'bridge', 'ricevi', 'minalo', 'meagli', 'cuocio', 'bairam', 'galano', 'cablar', 'anemia', 'pentir', 'cadete', 'punivi', 'odioso', 'uccisa', 'ferino', 'amimie', 'pregar', 'falica', 'mieter', 'mirata', 'brande', 'oblast', 'maiali', 'capalo', 'brindo', 'spanai', 'svelta', 'dogaia', 'laptop', 'filoso', 'ittite', 'vilali', 'fumava', 'venami', 'rigoli', 'dilamo', 'poesie', 'sgassa', 'erbari', 'spoeto', 'sbaffa', 'levale', 'robbio', 'poponi', 'riezza', 'aderse', 'inuste', 'iesini', 'filtro', 'baggei', 'sottai', 'imenea', 'impuri', 'godevo', 'curati', 'natano', 'bozzai', 'pigole', 'presce', 'rugami', 'sessar', 'segnai', 'occido', 'amlire', 'eterno', 'galata', 'mitico', 'algose', 'lintei', 'sbalzo', 'macola', 'gasane', 'negala', 'disumi', 'celere', 'perora', 'ignudo', 'arcani', 'baraci', 'paella', 'scolta', 'ulnari', 'fidata', 'vitree', 'elogio', 'acrale', 'onrino', 'ghiaia', 'matchi', 'nogati', 'ignori', 'salane', 'rorido', 'basino', 'pigola', 'ilvati', 'fotico', 'rupini', 'quagli', 'retori', 'moschi', 'caglio', 'snobba', 'cafira', 'stimma', 'franca', 'noceva', 'uncini', 'scoiai', 'ardire', 'frangi', 'ultima', 'risoci', 'delusi', 'damalo', 'uniche', 'recida', 'sbirri', 'risasi', 'cennar', 'spioni', 'spanni', 'braghe', 'eretta', 'anelar', 'vicese', 'tosare', 'vespai', 'teista', 'guairo', 'nottar', 'ricede', 'morula', 'calaze', 'orlare', 'sferzo', 'veggio', 'ravani', 'disamo', 'alucce', 'zigami', 'brammi', 'prozio', 'gelide', 'abiure', 'zuccai', 'pigmeo', 'lamami', 'unissi', 'arusse', 'piriti', 'furano', 'ernese', 'molesi', 'esibii', 'rodate', 'aguzza', 'orzano', 'bevano', 'adenti', 'spruno', 'seccia', 'gitesi', 'ossami', 'velite', 'trovar', 'subiti', 'petale', 'rodava', 'rumori', 'esenti', 'abbati', 'rosati', 'boschi', 'everse', 'sedere', 'natale', 'croato', 'urlavi', 'tester', 'beante', 'eversi', 'ciampa', 'lavica', 'aldino', 'nocivo', 'emiche', 'nevici', 'rosevi', 'bernie', 'teisti', 'pronta', 'stanar', 'scuffi', 'falena', 'viziar', 'fusaio', 'muccia', 'posino', 'alasti', 'scerpi', 'telaio', 'rapino', 'febbri', 'calici', 'verdea', 'muraci', 'desoli', 'buscar', 'spenna', 'rivedo', 'falesa', 'etiche', 'ipogee', 'schede', 'iudico', 'cellai', 'solchi', 'tubona', 'tasche', 'dorato', 'piatte', 'cecava', 'affino', 'scatto', 'rorati', 'cuochi', 'adirai', 'rigoso', 'mulcii', 'sposto', 'evinci', 'cafiri', 'todino', 'ciceri', 'muride', 'parami', 'camita', 'invasi', 'corese', 'pappar', 'strada', 'timori', 'rasiti', 'slalom', 'lambei', 'puniti', 'oziane', 'aggese', 'triami', 'occupa', 'prenda', 'defoli', 'tufoso', 'gasate', 'ceppar', 'mixale', 'pilano', 'saluta', 'cerico', 'ascose', 'longue', 'bucale', 'ombrio', 'prechi', 'raffie', 'rodani', 'recimi', 'fiossi', 'materi', 'atroci', 'rivale', 'zonata', 'dalton', 'golena', 'ungila', 'gelala', 'traits', 'canato', 'langur', 'uvacee', 'chiuso', 'pavida', 'traili', 'infusa', 'marese', 'stroma', 'genane', 'sitali', 'buzzer', 'dovari', 'cinese', 'dinamo', 'foglia', 'fifone', 'celaci', 'esteso', 'ramaci', 'aprivi', 'batava', 'seduce', 'badgio', 'granii', 'public', 'nescio', 'inveri', 'nescie', 'spiali', 'esorni', 'svialo', 'aggelo', 'ciuffa', 'stirpi', 'compra', 'vagaci', 'timoma', 'tonemi', 'sgelar', 'googla', 'irrito', 'ridimi', 'cavaci', 'evocar', 'risvia', 'libris', 'gâteau', 'seenni', 'foraci', 'eteree', 'croate', 'oociti', 'refila', 'bivero', 'appare', 'palata', 'sgorbi', 'udrete', 'zigomi', 'effusa', 'enduro', 'oirato', 'sapide', 'uretra', 'muniva', 'roccia', 'nevico', 'ossose', 'melton', 'resite', 'dialer', 'senona', 'segavi', 'assodo', 'crouch', 'borrar', 'ondato', 'rizena', 'stighi', 'bevera', 'ricova', 'romano', 'andini', 'antica', 'rubale', 'neocon', 'amarro', 'somali', 'omiane', 'viacce', 'atlete', 'tesano', 'sfalci', 'sfregi', 'valete', 'pisane', 'vogami', 'cotica', 'ranfio', 'grecai', 'pagare', 'olealo', 'calazi', 'dimuta', 'riunti', 'mutili', 'pianto', 'lemici', 'munivi', 'irsuto', 'quitai', 'banano', 'togale', 'meschi', 'dracma', 'riceva', 'teston', 'oziaco', 'ritesi', 'ferite', 'lupose', 'pocket', 'oliala', 'olisca', 'felidi', 'steppo', 'riatti', 'elmata', 'taccar', 'orbito', 'somnia', 'boleri', 'dopano', 'pacava', 'virose', 'baioso', 'fugano', 'ispiri', 'gelida', 'alleai', 'pistor', 'melici', 'gemmee', 'rigidi', 'fretti', 'insili', 'progne', 'ormone', 'claxon', 'lofoti', 'morona', 'ricino', 'fumane', 'binano', 'tallii', 'ausili', 'silvia', 'trasse', 'topaii', 'atropi', 'ronfia', 'riavvi', 'azzime', 'limone', 'bottom', 'necron', 'stenta', 'rodico', 'cacine', 'cadeva', 'crebre', 'folchi', 'rivela', 'esciso', 'debiti', 'ovolai', 'ocelli', 'attali', 'tempri', 'verdii', 'ortive', 'umilia', 'pacese', 'quinci', 'bifera', 'putava', 'forane', 'caponi', 'suario', 'deciso', 'tesate', 'polita', 'begala', 'parali', 'piemia', 'soloni', 'sciuga', 'sbenda', 'acceda', 'cornac', 'cineta', 'nicesi', 'speoto', 'inerir', 'oppiar', 'remigi', 'carpar', 'giovin', 'oppila', 'optami', 'double', 'eptodi', 'erboro', 'scerna', 'murate', 'susani', 'avanti', 'nipoti', 'ontosi', 'smurai', 'ardili', 'schivo', 'merdai', 'angamo', 'batole', 'balano', 'rilodi', 'sciapi', 'gelosi', 'ungano', 'appore', 'alleni', 'digame', 'ioidee', 'skinny', 'ricimo', 'ceraci', 'iatrea', 'biutai', 'malici', 'metila', 'dogaci', 'mastro', 'intona', 'piombi', 'sghiai', 'sgrani', 'avanza', 'invisi', 'rugato', 'boruca', 'demici', 'efebia', 'potale', 'agogno', 'musona', 'ditono', 'annida', 'angeli', 'armato', 'rosure', 'leniti', 'allevi', 'flusso', 'tesile', 'iodavo', 'citate', 'nodose', 'ammoni', 'nemici', 'soldai', 'fummar', 'tacevo', 'bifase', 'visino', 'trarvi', 'verdee', 'equata', 'quinti', 'tufati', 'ninnar', 'aberro', 'rivoli', 'fretta', 'missar', 'mistia', 'agiste', 'alzavo', 'cassai', 'gamici', 'pisani', 'urlata', 'ratina', 'negozi', 'vocane', 'rasici', 'satino', 'nasati', 'terbio', 'eserto', 'esegue', 'pruovo', 'spuzzi', 'binava', 'posane', 'semola', 'scanso', 'ardiri', 'accori', 'infila', 'riponi', 'dicata', 'derimo', 'lagopi', 'clisma', 'dilavi', 'badile', 'arussi', 'tubano', 'dopami', 'sdonno', 'scevro', 'dammar', 'svampo', 'arcaci', 'pesare', 'nomate', 'paiamo', 'pecchi', 'dogava', 'polche', 'stigar', 'ondalo', 'bulavo', 'lauree', 'arista', 'rapati', 'smolla', 'astuti', 'iastii', 'marcii', 'marcie', 'staffi', 'belali', 'cobola', 'votite', 'infino', 'venuti', 'sfriso', 'scarda', 'empili', 'preset', 'ponile', 'urloni', 'pinaie', 'mucche', 'farina', 'rotalo', 'paravi', 'rizzai', 'sucida', 'rugose', 'arcane', 'arrese', 'limiti', 'basico', 'velvet', 'auraci', 'adoreo', 'farote', 'ereggi', 'appena', 'iridee', 'droidi', 'cupida', 'epiche', 'ellesi', 'everta', 'spiree', 'pirosi', 'sdissi', 'sculti', 'timica', 'frigio', 'vassoi', 'beacon', 'gitali', 'puppar', 'parati', 'aragna', 'sitoni', 'baresi', 'armene', 'tempro', 'urtava', 'vagivi', 'fausto', 'segalo', 'vessel', 'calceo', 'lamavo', 'finivi', 'ussaro', 'garbar', 'enimmi', 'onesta', 'velcri', 'nervea', 'illiri', 'scudai', 'girone', 'silano', 'epeire', 'badate', 'girata', 'mefiti', 'raggia', 'sburra', 'rovose', 'potare', 'ambiar', 'immiti', 'veprai', 'vedeva', 'zuccon', 'osarli', 'ertami', 'natati', 'andati', 'tanalo', 'recale', 'cubebi', 'debbia', 'ladaki', 'mariti', 'menali', 'addure', 'spezie', 'dediti', 'sleppa', 'fields', 'camati', 'remoti', 'aerosa', 'bleffa', 'errava', 'sdalle', 'diedro', 'sbucai', 'polese', 'subito', 'picchi', 'cibali', 'vivile', 'immuro', 'hobbit', 'pagano', 'graste', 'trauma', 'erbose', 'denudo', 'pedina', 'solali', 'arsale', 'esseri', 'munghi', 'viagra', 'lagone', 'buboni', 'vaceli', 'renalo', 'altero', 'peseta', 'smunte', 'rasone', 'invide', 'grappi', 'audace', 'alense', 'tutava', 'licore', 'scatta', 'iodati', 'cedevo', 'scende', 'acqueo', 'infere', 'pondar', 'lamese', 'avello', 'imbeva', 'temila', 'tamari', 'anuria', 'lesasi', 'fecale', 'solcai', 'ceraie', 'vilalo', 'soffre', 'emersi', 'gaucho', 'ipnosi', 'ditoni', 'comode', 'ballai', 'cogolo', 'bibulo', 'coopto', 'texani', 'molala', 'incisi', 'sbalza', 'genoma', 'resami', 'orzava', 'locaci', 'sarete', 'ileiti', 'spanso', 'sdutte', 'foodie', 'gepida', 'triodo', 'fecole', 'camuni', 'novena', 'orfani', 'osmero', 'levigo', 'bravai', 'sdonni', 'cinipi', 'centre', 'annidi', 'leseci', 'equina', 'ipetro', 'sgalli', 'ratini', 'vitaci', 'notavo', 'voravo', 'risana', 'famedi', 'ciecai', 'recato', 'diredi', 'redima', 'putivo', 'separo', 'sagivo', 'vorino', 'pinaci', 'seppia', 'sterzo', 'maluso', 'piatto', 'mandee', 'nasane', 'svergo', 'roteai', 'pregia', 'minali', 'decoro', 'sbanco', 'serafo', 'tagike', 'pelane', 'aulivo', 'sanala', 'riarar', 'starti', 'limnee', 'pedata', 'caspio', 'omagua', 'faveto', 'padani', 'prozie', 'euante', 'davate', 'rovane', 'unizzo', 'pataca', 'abduca', 'starts', 'peonie', 'buduca', 'arusso', 'aeralo', 'redite', 'cecala', 'bongos', 'mazici', 'morite', 'istala', 'rapiva', 'luresi', 'lesino', 'elioni', 'pinosa', 'ammusi', 'alcove', 'vuotar', 'bestia', 'ecloga', 'zurese', 'vinata', 'stampi', 'sodici', 'sgrava', 'deruba', 'sverzo', 'indovo', 'riurli', 'molava', 'somale', 'dorema', 'gorese', 'emulgo', 'sburro', 'goduti', 'concia', 'führer', 'menati', 'ippici', 'scordi', 'diarco', 'orlavi', 'vocine', 'consti', 'wasabi', 'patene', 'assiso', 'gipeto', 'unisca', 'volami', 'rosasi', 'cimale', 'urgere', 'smette', 'equalo', 'broche', 'schiva', 'natemi', 'eccole', 'crisma', 'dubita', 'crusca', 'divani', 'lipidi', 'putavo', 'platee', 'poliva', 'fidale', 'bieche', 'orbata', 'resesi', 'snevar', 'volito', 'vitami', 'stremi', 'codati', 'artala', 'unario', 'emenda', 'biotta', 'oppido', 'ossari', 'calche', 'attale', 'rilima', 'binati', 'lumane', 'mutrie', 'varare', 'velavo', 'riceni', 'smunse', 'eccede', 'incelo', 'racani', 'sitiva', 'lamato', 'bevili', 'tipule', 'gnauli', 'fedali', 'mesica', 'kazaco', 'vogala', 'regini', 'orlata', 'magoli', 'minate', 'accuri', 'dilato', 'dorane', 'pinoli', 'friend', 'bobina', 'cansai', 'annomo', 'ditelo', 'chirie', 'ruttar', 'docete', 'estrua', 'selfar', 'lurido', 'agiale', 'cavava', 'coirli', 'soglia', 'sfocai', 'areano', 'absidi', 'pilale', 'palaia', 'olgesi', 'taighe', 'sposso', 'cinira', 'passir', 'fasico', 'belati', 'viglia', 'nataci', 'pregna', 'rovine', 'averti', 'celoma', 'datata', 'aiughe', 'rudesi', 'roveto', 'timing', 'alisme', 'tempie', 'bircio', 'ambuli', 'focone', 'mixalo', 'aerano', 'scirpo', 'uveite', 'ammidi', 'sincro', 'felpai', 'odiaci', 'valium', 'pupali', 'sfesse', 'virava', 'avvien', 'eburne', 'ladron', 'svagar', 'soffro', 'lattar', 'borrii', 'rotese', 'addare', 'dubito', 'agisca', 'usurpa', 'negaci', 'toraja', 'autori', 'rasoli', 'celiar', 'radevo', 'druida', 'rimura', 'troica', 'turane', 'sbrami', 'opache', 'ambiva', 'estrui', 'modani', 'eniane', 'grilli', 'arieto', 'auliva', 'escara', 'tosola', 'smania', 'sbaulo', 'colore', 'sfotto', 'ciprie', 'sampan', 'ramino', 'pativo', 'deponi', 'tironi', 'sboffi', 'camiti', 'issami', 'futili', 'ergili', 'parada', 'agiavo', 'pedota', 'coisse', 'cazzia', 'lobbia', 'dilami', 'idiota', 'pentii', 'cagata', 'busone', 'camusa', 'lotico', 'vulgar', 'squali', 'seppie', 'anciso', 'sifone', 'stages', 'partii', 'sanalo', 'adergo', 'screen', 'arasse', 'arredo', 'dionee', 'imbava', 'smozzo', 'erbali', 'gestri', 'gluten', 'opiana', 'sganno', 'fresar', 'remixo', 'piarda', 'gruppi', 'compos', 'bevine', 'privar', 'posano', 'triaci', 'sforza', 'eusina', 'sfanne', 'perali', 'grongo', 'aponie', 'monaci', 'valute', 'hummus', 'avvito', 'peluti', 'lestra', 'grilla', 'escori', 'negavo', 'ilvata', 'dinero', 'sbassa', 'affami', 'apiata', 'sorore', 'rotule', 'tuning', 'blinde', 'sesini', 'buffai', 'volpar', 'pavidi', 'illuni', 'lunate', 'rodila', 'pattai', 'triodi', 'moresi', 'falcio', 'tracio', 'basato', 'fusele', 'grigli', 'bacolo', 'ipogeo', 'sfinge', 'cimolo', 'turbai', 'genava', 'puntel', 'musica', 'olfate', 'snello', 'sberna', 'gazino', 'istavi', 'bufava', 'truppa', 'titino', 'texano', 'vaioli', 'minime', 'datavi', 'comics', 'cobeua', 'sentir', 'calare', 'nitore', 'tanker', 'uggite', 'evinte', 'ramine', 'lucrar', 'rosomi', 'operar', 'menavo', 'ripago', 'nerino', 'vagano', 'regola', 'rutule', 'pliche', 'aeravi', 'sdrogo', 'arsone', 'urtaci', 'ooforo', 'biasmo', 'jabots', 'leccio', 'taglio', 'measti', 'ultimo', 'rimise', 'evulse', 'daorse', 'cavano', 'pireni', 'iaculi', 'tonare', 'bounce', 'pesali', 'lodavi', 'bolino', 'celavo', 'acuiva', 'vimata', 'relata', 'udirlo', 'gallio', 'mirala', 'marzia', 'rizine', 'artesi', 'ironie', 'babbeo', 'ometti', 'stendo', 'remale', 'svasai', 'zelati', 'irrido', 'vrisee', 'rigira', 'boards', 'idrobi', 'banati', 'offeso', 'frison', 'travia', 'malino', 'spenda', 'imbaco', 'stadia', 'remore', 'mirrai', 'ignami', 'pilati', 'dubbie', 'strame', 'estone', 'nitidi', 'larari', 'adisse', 'gemili', 'scorni', 'rogato', 'restie', 'melari', 'agiali', 'ancien', 'invaso', 'rollar', 'spreso', 'rileva', 'ceduto', 'tesero', 'opiano', 'notare', 'logici', 'regati', 'ammaio', 'snidai', 'infilo', 'spasti', 'ergiti', 'spizzi', 'castri', 'garzar', 'legali', 'gualda', 'limono', 'avelto', 'clipei', 'zufolo', 'inonda', 'risile', 'prince', 'sinora', 'arsivo', 'empidi', 'arsoli', 'zumami', 'silice', 'pneuma', 'adegui', 'abrasi', 'pondai', 'gasata', 'filare', 'tarpee', 'puntar', 'armata', 'sdazio', 'tanino', 'ctonio', 'sbrici', 'evitar', 'quadri', 'pelino', 'sperso', 'verger', 'multar', 'giaina', 'sukuma', 'amenze', 'sfarla', 'tigrar', 'osseti', 'marena', 'orfana', 'tesovi', 'rogita', 'stanti', 'orbato', 'spurie', 'bicona', 'franti', 'tosali', 'ispira', 'posero', 'damone', 'tinnio', 'action', 'africo', 'valghe', 'scuoti', 'puncio', 'equare', 'stente', 'lellai', 'organa', 'czarda', 'damare', 'covale', 'abolii', 'zigati', 'lirati', 'penate', 'comuni', 'pelale', 'uzbeko', 'decedi', 'tronai', 'rapane', 'pelali', 'bacato', 'istero', 'natene', 'dogale', 'vacare', 'mehari', 'drogai', 'mirava', 'covola', 'suzzai', 'meetup', 'lograi', 'scaffa', 'attavo', 'averte', 'fucati', 'piccai', 'usagli', 'piarvi', 'rierse', 'giorno', 'quegli', 'testor', 'navese', 'capale', 'gomiti', 'elfico', 'svengo', 'filter', 'rimixa', 'slatti', 'stigli', 'spigar', 'eredar', 'divini', 'iodato', 'natomi', 'dinghy', 'libiti', 'solone', 'erbora', 'esalai', 'areato', 'gelati', 'bricio', 'sailor', 'ultime', 'zipolo', 'becchi', 'gepidi', 'ladake', 'begare', 'anatri', 'ofiure', 'donaci', 'untone', 'fisato', 'vietar', 'stonai', 'disire', 'ducere', 'rodile', 'nagane', 'poneva', 'tassai', 'tonati', 'teacee', 'rasati', 'sapona', 'indiar', 'putiti', 'sativo', 'lenita', 'patosi', 'fiasca', 'nerica', 'farmer', 'fusolo', 'pregne', 'notaio', 'inseto', 'saliti', 'fatene', 'oeuvre', 'ottopi', 'stuoli', 'fidala', 'grifar', 'risoli', 'avessi', 'illate', 'lisaci', 'feijoa', 'pintor', 'tosavi', 'vuelta', 'favara', 'dovuti', 'spelea', 'mosani', 'aderir', 'alerte', 'cerase', 'greggi', 'manila', 'aberri', 'tussor', 'achiri', 'untimi', 'calida', 'veloce', 'ungile', 'solevi', 'bucino', 'smusso', 'piagai', 'risati', 'evitto', 'spingo', 'frutto', 'cesano', 'rugavo', 'tudera', 'iesina', 'baculo', 'biffai', 'bigato', 'scotta', 'gemini', 'acrili', 'fianca', 'divien', 'usbeca', 'fugala', 'vitino', 'veruna', 'cerule', 'smucci', 'tauoni', 'oncosi', 'sanita', 'rigela', 'citavi', 'sdetta', 'spasmi', 'emesse', 'ignavi', 'agerai', 'pulone', 'eruppi', 'moggia', 'sticks', 'salino', 'vantar', 'lumate', 'malato', 'coiaio', 'pagami', 'invido', 'stallo', 'regnar', 'coliti', 'lebeti', 'tarpar', 'aggero', 'alinea', 'innero', 'mimalo', 'senesi', 'figuli', 'googlo', 'riurlo', 'alluce', 'comuno', 'bonbon', 'telato', 'cupide', 'guinar', 'sdenti', 'belano', 'coioti', 'serali', 'fanesi', 'visava', 'viuzzi', 'largar', 'tendai', 'smuoio', 'vintor', 'roravi', 'tubava', 'smirar', 'dipoli', 'bovare', 'turali', 'chiosa', 'ragadi', 'cabala', 'oriolo', 'morane', 'cimici', 'valimi', 'ischio', 'poggio', 'polivi', 'rudero', 'bitubi', 'rienfi', 'sgozzo', 'sviato', 'lanute', 'oofagi', 'senese', 'gemute', 'cucine', 'patuli', 'setola', 'zumavo', 'quetai', 'bandii', 'miceli', 'eccolo', 'cacano', 'micete', 'stinta', 'restia', 'cullai', 'asside', 'sgonfi', 'scuote', 'sgargi', 'zumati', 'cumbie', 'rorala', 'ienidi', 'passar', 'teneri', 'sclamo', 'rigone', 'esequi', 'pipilo', 'eccovi', 'setolo', 'lapiti', 'arroge', 'ispana', 'cateto', 'finite', 'sanesi', 'rubare', 'abachi', 'bronzi', 'telami', 'cerala', 'merger', 'tarsio', 'paiuti', 'ducava', 'amarri', 'moplah', 'trighe', 'mayday', 'strigi', 'scalzo', 'arsite', 'aleuti', 'vegani', 'fucato', 'spenge', 'istino', 'scocca', 'cibavo', 'epatta', 'rapaci', 'osella', 'gemere', 'alcano', 'adisce', 'votita', 'cibami', 'aerati', 'idonei', 'argino', 'malore', 'sunese', 'imbuco', 'bulala', 'finger', 'spelda', 'perine', 'fibbie', 'tudero', 'spoeta', 'annuii', 'gufino', 'capiti', 'malaga', 'viarie', 'averse', 'mulari', 'canale', 'aliato', 'zaffar', 'vacalo', 'second', 'lisala', 'gialui', 'riresi', 'uriese', 'borico', 'pipami', 'estive', 'strati', 'borose', 'nubile', 'ritoni', 'argive', 'framea', 'arnino', 'manose', 'dirigo', 'pregno', 'abitar', 'aglife', 'strami', 'penuri', 'poloni', 'illudo', 'reucci', 'otiche', 'surfai', 'cupidi', 'gregge', 'pegasi', 'ghiara', 'redane', 'starne', 'cocker', 'lizzar', 'addomi', 'amebea', 'stoppa', 'gemimi', 'troike', 'metese', 'corifa', 'amiche', 'elfica', 'svacco', 'oleina', 'pulita', 'orfane', 'orsono', 'merche', 'astate', 'crespi', 'porrei', 'rumini', 'miniai', 'triope', 'susina', 'sferri', 'ribeva', 'baccar', 'insalo', 'delude', 'tosata', 'ciurmo', 'apuano', 'culavi', 'ondale', 'stalle', 'culice', 'stelli', 'ungiti', 'meonio', 'triaca', 'terbii', 'loculo', 'quello', 'augnar', 'plusia', 'rediga', 'velari', 'crasse', 'puralo', 'morfee', 'adonta', 'flaggo', 'giusto', 'dipesa', 'stogai', 'vacava', 'donnea', 'alunni', 'rodine', 'sample', 'gabina', 'bratta', 'rimpor', 'recevo', 'tallir', 'brucee', 'ghinde', 'sugati', 'tetris', 'cucire', 'sapori', 'risola', 'labari', 'parate', 'cadmio', 'vadosa', 'serrai', 'spelei', 'priori', 'avvina', 'schisa', 'haussa', 'caribi', 'slogar', 'nosema', 'piaghi', 'sviano', 'votavo', 'dulcis', 'raguni', 'sartie', 'cuccar', 'risene', 'ariste', 'spompo', 'ordina', 'riesce', 'amnios', 'tosale', 'vastar', 'errale', 'acerba', 'tesoci', 'varrei', 'virale', 'torneo', 'duglia', 'vanivi', 'iatale', 'visale', 'renavo', 'ideavi', 'rubalo', 'emunti', 'fienai', 'paggio', 'orango', 'ebetai', 'facies', 'itrana', 'torria', 'vagili', 'licene', 'pacano', 'liditi', 'cavavi', 'cerasi', 'fluide', 'modera', 'pedalo', 'alissi', 'olfaci', 'astore', 'spinga', 'zebrar', 'closet', 'ammise', 'safeni', 'lumaco', 'follow', 'urlale', 'raguno', 'naming', 'ippari', 'eteria', 'ghinea', 'quesir', 'escuti', 'sdogli', 'casule', 'ditate', 'peocio', 'urgano', 'omessi', 'baiami', 'vamici', 'revoco', 'vilate', 'coseno', 'cedola', 'gasose', 'zambre', 'murato', 'accedi', 'gioiai', 'people', 'angola', 'sciapa', 'mirtei', 'censua', 'crotti', 'angoni', 'divine', 'vaniva', 'badgia', 'roveti', 'snasai', 'virati', 'recate', 'sufite', 'cucivo', 'naviga', 'durare', 'opinai', 'albani', 'morine', 'mutola', 'grechi', 'crepar', 'sciape', 'trojka', 'alisei', 'rapone', 'codone', 'ormaie', 'sagene', 'melate', 'amorfe', 'efendi', 'furavi', 'maculi', 'malide', 'eroica', 'dopalo', 'coarta', 'olivai', 'naiade', 'becche', 'scosti', 'severo', 'cacchi', 'intana', 'invade', 'alassi', 'scalfi', 'punita', 'begoli', 'mozabo', 'geldre'],
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
