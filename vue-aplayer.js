! function(t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e(require("vue"), function() {
    try {
      return require("hls.js")
    } catch (t) {}
  }()) : "function" == typeof define && define.amd ? define("VueAPlayer", ["vue", "hls.js"], e) : "object" == typeof exports ? exports.VueAPlayer = e(require("vue"), function() {
    try {
      return require("hls.js")
    } catch (t) {}
  }()) : t.VueAPlayer = e(t.Vue, t.Hls)
}("undefined" != typeof self ? self : this, function(t, e) {
  return function(t) {
    function e(a) {
      if (i[a]) return i[a].exports;
      var r = i[a] = {
        i: a,
        l: !1,
        exports: {}
      };
      return t[a].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var i = {};
    return e.m = t, e.c = i, e.d = function(t, i, a) {
      e.o(t, i) || Object.defineProperty(t, i, {
        configurable: !1,
        enumerable: !0,
        get: a
      })
    }, e.n = function(t) {
      var i = t && t.__esModule ? function() {
        return t.default
      } : function() {
        return t
      };
      return e.d(i, "a", i), i
    }, e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 15)
  }([function(t, e, i) {
    "use strict";

    function a(t, e, i, a, r, n, o, s) {
      t = t || {};
      var l = typeof t.default;
      "object" !== l && "function" !== l || (t = t.default);
      var u = "function" == typeof t ? t.options : t;
      e && (u.render = e, u.staticRenderFns = i, u._compiled = !0), a && (u.functional = !0), n && (u._scopeId = n);
      var c;
      if (o ? (c = function(t) {
        t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(o)
      }, u._ssrRegister = c) : r && (c = s ? function() {
        r.call(this, this.$root.$options.shadowRoot)
      } : r), c)
        if (u.functional) {
          u._injectStyles = c;
          var p = u.render;
          u.render = function(t, e) {
            return c.call(e), p(t, e)
          }
        } else {
          var h = u.beforeCreate;
          u.beforeCreate = h ? [].concat(h, c) : [c]
        } return {
        exports: t,
        options: u
      }
    }
    e.a = a
  }, function(t, e) {
    function i(t, e) {
      var i = t[1] || "",
        r = t[3];
      if (!r) return i;
      if (e && "function" == typeof btoa) {
        var n = a(r);
        return [i].concat(r.sources.map(function(t) {
          return "/*# sourceURL=" + r.sourceRoot + t + " */"
        })).concat([n]).join("\n")
      }
      return [i].join("\n")
    }

    function a(t) {
      return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
    }
    t.exports = function(t) {
      var e = [];
      return e.toString = function() {
        return this.map(function(e) {
          var a = i(e, t);
          return e[2] ? "@media " + e[2] + "{" + a + "}" : a
        }).join("")
      }, e.i = function(t, i) {
        "string" == typeof t && (t = [
          [null, t, ""]
        ]);
        for (var a = {}, r = 0; r < this.length; r++) {
          var n = this[r][0];
          "number" == typeof n && (a[n] = !0)
        }
        for (r = 0; r < t.length; r++) {
          var o = t[r];
          "number" == typeof o[0] && a[o[0]] || (i && !o[2] ? o[2] = i : i && (o[2] = "(" + o[2] + ") and (" + i + ")"), e.push(o))
        }
      }, e
    }
  }, function(t, e, i) {
    "use strict";

    function a(t, e, i, a) {
      v = i, m = a || {};
      var n = Object(u.a)(t, e);
      return r(n),
        function(e) {
          for (var i = [], a = 0; a < n.length; a++) {
            var o = n[a],
              s = p[o.id];
            s.refs--, i.push(s)
          }
          e ? (n = Object(u.a)(t, e), r(n)) : n = [];
          for (var a = 0; a < i.length; a++) {
            var s = i[a];
            if (0 === s.refs) {
              for (var l = 0; l < s.parts.length; l++) s.parts[l]();
              delete p[s.id]
            }
          }
        }
    }

    function r(t) {
      for (var e = 0; e < t.length; e++) {
        var i = t[e],
          a = p[i.id];
        if (a) {
          a.refs++;
          for (var r = 0; r < a.parts.length; r++) a.parts[r](i.parts[r]);
          for (; r < i.parts.length; r++) a.parts.push(o(i.parts[r]));
          a.parts.length > i.parts.length && (a.parts.length = i.parts.length)
        } else {
          for (var n = [], r = 0; r < i.parts.length; r++) n.push(o(i.parts[r]));
          p[i.id] = {
            id: i.id,
            refs: 1,
            parts: n
          }
        }
      }
    }

    function n() {
      var t = document.createElement("style");
      return t.type = "text/css", h.appendChild(t), t
    }

    function o(t) {
      var e, i, a = document.querySelector("style[" + g + '~="' + t.id + '"]');
      if (a) {
        if (v) return y;
        a.parentNode.removeChild(a)
      }
      if (b) {
        var r = f++;
        a = d || (d = n()), e = s.bind(null, a, r, !1), i = s.bind(null, a, r, !0)
      } else a = n(), e = l.bind(null, a), i = function() {
        a.parentNode.removeChild(a)
      };
      return e(t),
        function(a) {
          if (a) {
            if (a.css === t.css && a.media === t.media && a.sourceMap === t.sourceMap) return;
            e(t = a)
          } else i()
        }
    }

    function s(t, e, i, a) {
      var r = i ? "" : a.css;
      if (t.styleSheet) t.styleSheet.cssText = x(e, r);
      else {
        var n = document.createTextNode(r),
          o = t.childNodes;
        o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(n, o[e]) : t.appendChild(n)
      }
    }

    function l(t, e) {
      var i = e.css,
        a = e.media,
        r = e.sourceMap;
      if (a && t.setAttribute("media", a), m.ssrId && t.setAttribute(g, e.id), r && (i += "\n/*# sourceURL=" + r.sources[0] + " */", i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), t.styleSheet) t.styleSheet.cssText = i;
      else {
        for (; t.firstChild;) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(i))
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var u = i(18),
      c = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !c) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var p = {},
      h = c && (document.head || document.getElementsByTagName("head")[0]),
      d = null,
      f = 0,
      v = !1,
      y = function() {},
      m = null,
      g = "data-vue-ssr-id",
      b = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),
      x = function() {
        var t = [];
        return function(e, i) {
          return t[e] = i, t.filter(Boolean).join("\n")
        }
      }()
  }, function(t, e, i) {
    "use strict";

    function a(t) {
      if (t) {
        t = t.replace(/([^\]^\n])\[/g, function(t, e) {
          return e + "\n["
        });
        for (var e = t.split("\n"), i = [], a = e.length, r = 0; r < a; r++) {
          var n = e[r].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),
            o = e[r].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g, "").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g, "").replace(/^\s+|\s+$/g, "");
          if (n)
            for (var s = n.length, l = 0; l < s; l++) {
              var u = /\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(n[l]),
                c = 60 * u[1],
                p = parseInt(u[2]),
                h = u[4] ? parseInt(u[4]) / (2 === (u[4] + "").length ? 100 : 1e3) : 0,
                d = c + p + h;
              i.push([d, o])
            }
        }
        return i.sort(function(t, e) {
          return t[0] - e[0]
        }), i
      }
      return []
    }

    function r(t, e) {
      if (t === e) return 0;
      var i = t.split(".").map(Number),
        a = u(i, 3),
        r = a[0],
        n = a[1],
        o = a[2],
        s = e.split(".").map(Number),
        l = u(s, 3),
        c = l[0],
        p = l[1],
        h = l[2];
      if (r > c) return 1;
      if (r === c) {
        if (n > p) return 1;
        if (n === p && o > h) return 1
      }
      return -1
    }

    function n(t) {
      return console.warn("[Vue-APlayer] " + t)
    }

    function o(t, e, i) {
      return n("'" + t + "' is deprecated since v" + e + ", and will be removed in future releases, use '" + i + "' instead")
    }

    function s(t) {
      for (var e = t.offsetLeft, i = t.offsetParent, a = void 0; null !== i;) e += i.offsetLeft, i = i.offsetParent;
      return a = document.body.scrollLeft + document.documentElement.scrollLeft, e - a
    }

    function l(t) {
      for (var e = t.offsetTop, i = t.offsetParent, a = void 0; null !== i;) e += i.offsetTop, i = i.offsetParent;
      return a = document.body.scrollTop + document.documentElement.scrollTop, e - a
    }
    e.d = a, e.e = r, e.f = n, e.a = o, e.b = s, e.c = l;
    var u = function() {
      function t(t, e) {
        var i = [],
          a = !0,
          r = !1,
          n = void 0;
        try {
          for (var o, s = t[Symbol.iterator](); !(a = (o = s.next()).done) && (i.push(o.value), !e || i.length !== e); a = !0);
        } catch (t) {
          r = !0, n = t
        } finally {
          try {
            !a && s.return && s.return()
          } finally {
            if (r) throw n
          }
        }
        return i
      }
      return function(e, i) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, i);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
    }()
  }, function(t, e, i) {
    "use strict";

    function a(t) {
      i(25)
    }
    var r = i(7),
      n = i(44),
      o = i(0),
      s = a,
      l = Object(o.a)(r.a, n.a, n.b, !1, s, null, null);
    e.a = l.exports
  }, function(t, e, i) {
    "use strict";

    function a(t) {
      if (Array.isArray(t)) {
        for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
        return i
      }
      return Array.from(t)
    }
    var r = i(19),
      n = i.n(r),
      o = i(20),
      s = i(46),
      l = i(50),
      u = i(62),
      c = i(3),
      p = function() {
        function t(t, e) {
          var i = [],
            a = !0,
            r = !1,
            n = void 0;
          try {
            for (var o, s = t[Symbol.iterator](); !(a = (o = s.next()).done) && (i.push(o.value), !e || i.length !== e); a = !0);
          } catch (t) {
            r = !0, n = t
          } finally {
            try {
              !a && s.return && s.return()
            } finally {
              if (r) throw n
            }
          }
          return i
        }
        return function(e, i) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return t(e, i);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
      }(),
      h = !1,
      d = Object(c.e)(n.a.version, "2.3.0") >= 0,
      f = {},
      v = null,
      y = {
        NONE: "none",
        MUSIC: "music",
        LIST: "list",
        NO_REPEAT: "no-repeat",
        REPEAT_ONE: "repeat-one",
        REPEAT_ALL: "repeat-all"
      },
      m = {
        name: "APlayer",
        disableVersionBadge: !1,
        components: {
          Thumbnail: o.a,
          Controls: l.a,
          MusicList: s.a,
          Lyrics: u.a
        },
        props: {
          music: {
            type: Object,
            required: !0,
            validator: function(t) {
              return t.url && Object(c.a)("music.url", "1.4.0", "music.src"), t.author && Object(c.a)("music.author", "1.4.1", "music.artist"), t.src || t.url
            }
          },
          list: {
            type: Array,
            default: function() {
              return []
            }
          },
          mini: {
            type: Boolean,
            default: !1
          },
          showLrc: {
            type: Boolean,
            default: !1
          },
          mutex: {
            type: Boolean,
            default: !0
          },
          theme: {
            type: String,
            default: "#41b883"
          },
          listMaxHeight: String,
          listFolded: {
            type: Boolean,
            default: !1
          },
          float: {
            type: Boolean,
            default: !1
          },
          autoplay: {
            type: Boolean,
            default: !1
          },
          controls: {
            type: Boolean,
            default: !1
          },
          muted: {
            type: Boolean,
            default: !1
          },
          preload: String,
          volume: {
            type: Number,
            default: .8,
            validator: function(t) {
              return t >= 0 && t <= 1
            }
          },
          shuffle: {
            type: Boolean,
            default: !1
          },
          repeat: {
            type: String,
            default: y.NO_REPEAT
          },
          listmaxheight: {
            type: String,
            validator: function(t) {
              return t && Object(c.a)("listmaxheight", "1.1.2", "listMaxHeight"), !0
            }
          },
          narrow: {
            type: Boolean,
            default: !1,
            validator: function(t) {
              return t && Object(c.a)("narrow", "1.1.2", "mini"), !0
            }
          },
          showlrc: {
            type: Boolean,
            default: !1,
            validator: function(t) {
              return t && Object(c.a)("showlrc", "1.2.2", "showLrc"), !0
            }
          }
        },
        data: function() {
          return {
            internalMusic: this.music,
            isPlaying: !1,
            isSeeking: !1,
            wasPlayingBeforeSeeking: !1,
            isMobile: /mobile/i.test(window.navigator.userAgent),
            playStat: {
              duration: 0,
              loadedTime: 0,
              playedTime: 0
            },
            showList: !this.listFolded,
            audioPlayPromise: Promise.resolve(),
            floatOriginX: 0,
            floatOriginY: 0,
            floatOffsetLeft: 0,
            floatOffsetTop: 0,
            selfAdaptingTheme: null,
            internalMuted: this.muted,
            internalVolume: this.volume,
            isLoading: !1,
            internalShuffle: this.shuffle,
            internalRepeat: this.repeat,
            shuffledList: []
          }
        },
        computed: {
          audio: function() {
            return this.$refs.audio
          },
          currentMusic: {
            get: function() {
              return this.internalMusic
            },
            set: function(t) {
              d && this.$emit("update:music", t), this.internalMusic = t
            }
          },
          isMiniMode: function() {
            return this.mini || this.narrow
          },
          shouldShowLrc: function() {
            return this.showLrc || this.showlrc
          },
          currentTheme: function() {
            return this.selfAdaptingTheme || this.currentMusic.theme || this.theme
          },
          isFloatMode: function() {
            return this.float && !this.isMobile
          },
          shouldAutoplay: function() {
            return !this.isMobile && this.autoplay
          },
          musicList: function() {
            return this.list
          },
          shouldShowNativeControls: function() {
            return !1
          },
          floatStyleObj: function() {
            return {
              transform: "translate(" + this.floatOffsetLeft + "px, " + this.floatOffsetTop + "px)",
              webkitTransform: "translate(" + this.floatOffsetLeft + "px, " + this.floatOffsetTop + "px)"
            }
          },
          currentPicStyleObj: function() {
            return this.currentMusic && this.currentMusic.pic ? {
              backgroundImage: "url(" + this.currentMusic.pic + ")"
            } : {}
          },
          loadProgress: function() {
            return 0 === this.playStat.duration ? 0 : this.playStat.loadedTime / this.playStat.duration
          },
          playProgress: function() {
            return 0 === this.playStat.duration ? 0 : this.playStat.playedTime / this.playStat.duration
          },
          playIndex: {
            get: function() {
              return this.shuffledList.indexOf(this.currentMusic)
            },
            set: function(t) {
              this.currentMusic = this.shuffledList[t % this.shuffledList.length]
            }
          },
          shouldRepeat: function() {
            return this.repeatMode !== y.NO_REPEAT
          },
          isAudioMuted: {
            get: function() {
              return this.internalMuted
            },
            set: function(t) {
              d && this.$emit("update:muted", t), this.internalMuted = t
            }
          },
          audioVolume: {
            get: function() {
              return this.internalVolume
            },
            set: function(t) {
              d && this.$emit("update:volume", t), this.internalVolume = t
            }
          },
          shouldShuffle: {
            get: function() {
              return this.internalShuffle
            },
            set: function(t) {
              d && this.$emit("update:shuffle", t), this.internalShuffle = t
            }
          },
          repeatMode: {
            get: function() {
              switch (this.internalRepeat) {
                case y.NONE:
                case y.NO_REPEAT:
                  return y.NO_REPEAT;
                case y.MUSIC:
                case y.REPEAT_ONE:
                  return y.REPEAT_ONE;
                default:
                  return y.REPEAT_ALL
              }
            },
            set: function(t) {
              d && this.$emit("update:repeat", t), this.internalRepeat = t
            }
          }
        },
        methods: {
          onDragBegin: function() {
            this.floatOriginX = this.floatOffsetLeft, this.floatOriginY = this.floatOffsetTop
          },
          onDragAround: function(t) {
            var e = t.offsetLeft,
              i = t.offsetTop;
            this.floatOffsetLeft = this.floatOriginX + e, this.floatOffsetTop = this.floatOriginY + i
          },
          setNextMode: function() {
            this.repeatMode === y.REPEAT_ALL ? this.repeatMode = y.REPEAT_ONE : this.repeatMode === y.REPEAT_ONE ? this.repeatMode = y.NO_REPEAT : this.repeatMode = y.REPEAT_ALL
          },
          thenPlay: function() {
            var t = this;
            this.$nextTick(function() {
              t.play()
            })
          },
          toggle: function() {
            this.audio.paused ? this.play() : this.pause()
          },
          play: function() {
            var t = this;
            this.mutex && (v && v !== this && v.pause(), v = this);
            var e = this.audio.play();
            if (e) return this.audioPlayPromise = new Promise(function(i, a) {
              t.rejectPlayPromise = a, e.then(function(e) {
                t.rejectPlayPromise = null, i(e)
              }).catch(c.f)
            })
          },
          pause: function() {
            var t = this;
            this.audioPlayPromise.then(function() {
              t.audio.pause()
            }).catch(function() {
              t.audio.pause()
            }), this.rejectPlayPromise && (this.rejectPlayPromise(), this.rejectPlayPromise = null)
          },
          onProgressDragBegin: function(t) {
            this.wasPlayingBeforeSeeking = this.isPlaying, this.pause(), this.isSeeking = !0, isNaN(this.audio.duration) || (this.audio.currentTime = this.audio.duration * t)
          },
          onProgressDragging: function(t) {
            isNaN(this.audio.duration) ? this.playStat.playedTime = 0 : this.audio.currentTime = this.audio.duration * t
          },
          onProgressDragEnd: function(t) {
            this.isSeeking = !1, this.wasPlayingBeforeSeeking && this.thenPlay()
          },
          toggleMute: function() {
            this.setAudioMuted(!this.audio.muted)
          },
          setAudioMuted: function(t) {
            this.audio.muted = t
          },
          setAudioVolume: function(t) {
            this.audio.volume = t, t > 0 && this.setAudioMuted(!1)
          },
          getShuffledList: function() {
            if (!this.list.length) return [this.internalMusic];
            var t = [].concat(a(this.list));
            if (!this.internalShuffle || t.length <= 1) return t;
            var e = t.indexOf(this.internalMusic);
            if (2 === t.length && -1 !== e) return 0 === e ? t : [this.internalMusic, t[0]];
            for (var i = t.length - 1; i > 0; i--) {
              var r = Math.floor(Math.random() * (i + 1)),
                n = t[i];
              t[i] = t[r], t[r] = n
            }
            if (-1 !== e && 0 !== (e = t.indexOf(this.internalMusic))) {
              var o = [t[e], t[0]];
              t[0] = o[0], t[e] = o[1]
            }
            return t
          },
          onSelectSong: function(t) {
            this.currentMusic === t ? this.toggle() : (this.currentMusic = t, this.thenPlay())
          },
          onAudioPlay: function() {
            this.isPlaying = !0
          },
          onAudioPause: function() {
            this.isPlaying = !1
          },
          onAudioWaiting: function() {
            this.isLoading = !0
          },
          onAudioCanplay: function() {
            this.isLoading = !1
          },
          onAudioDurationChange: function() {
            1 !== this.audio.duration && (this.playStat.duration = this.audio.duration)
          },
          onAudioProgress: function() {
            this.audio.buffered.length ? this.playStat.loadedTime = this.audio.buffered.end(this.audio.buffered.length - 1) : this.playStat.loadedTime = 0
          },
          onAudioTimeUpdate: function() {
            this.playStat.playedTime = this.audio.currentTime
          },
          onAudioSeeking: function() {
            this.playStat.playedTime = this.audio.currentTime
          },
          onAudioSeeked: function() {
            this.playStat.playedTime = this.audio.currentTime
          },
          onAudioVolumeChange: function() {
            this.audioVolume = this.audio.volume, this.isAudioMuted = this.audio.muted
          },
          onAudioEnded: function() {
            this.repeatMode === y.REPEAT_ALL ? (this.shouldShuffle && this.playIndex === this.shuffledList.length - 1 && (this.shuffledList = this.getShuffledList()), this.playIndex++, this.thenPlay()) : this.repeatMode === y.REPEAT_ONE ? this.thenPlay() : (this.playIndex++, 0 !== this.playIndex ? this.thenPlay() : 1 === this.shuffledList.length && (this.audio.currentTime = 0))
          },
          initAudio: function() {
            var t = this;
            this.audio.controls = this.shouldShowNativeControls, this.audio.muted = this.muted, this.audio.preload = this.preload, this.audio.volume = this.volume, ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "interruptbegin", "interruptend", "loadeddata", "loadedmetadata", "loadstart", "mozaudioavailable", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"].forEach(function(e) {
              t.audio.addEventListener(e, function(i) {
                return t.$emit(e, i)
              })
            }), this.audio.addEventListener("play", this.onAudioPlay), this.audio.addEventListener("pause", this.onAudioPause), this.audio.addEventListener("abort", this.onAudioPause), this.audio.addEventListener("waiting", this.onAudioWaiting), this.audio.addEventListener("canplay", this.onAudioCanplay), this.audio.addEventListener("progress", this.onAudioProgress), this.audio.addEventListener("durationchange", this.onAudioDurationChange), this.audio.addEventListener("seeking", this.onAudioSeeking), this.audio.addEventListener("seeked", this.onAudioSeeked), this.audio.addEventListener("timeupdate", this.onAudioTimeUpdate), this.audio.addEventListener("volumechange", this.onAudioVolumeChange), this.audio.addEventListener("ended", this.onAudioEnded), this.currentMusic && (this.audio.src = this.currentMusic.src || this.currentMusic.url)
          },
          setSelfAdaptingTheme: function() {
            var t = this;
            if ("pic" === (this.currentMusic.theme || this.theme)) {
              var e = this.currentMusic.pic;
              if (f[e]) this.selfAdaptingTheme = f[e];
              else try {
                (new ColorThief).getColorAsync(e, function(i) {
                  var a = p(i, 3),
                    r = a[0],
                    n = a[1],
                    o = a[2];
                  f[e] = "rgb(" + r + ", " + n + ", " + o + ")", t.selfAdaptingTheme = "rgb(" + r + ", " + n + ", " + o + ")"
                })
              } catch (t) {
                Object(c.f)("color-thief is required to support self-adapting theme")
              }
            } else this.selfAdaptingTheme = null
          }
        },
        watch: {
          music: function(t) {
            this.internalMusic = t
          },
          currentMusic: {
            handler: function(t) {
              this.setSelfAdaptingTheme();
              var e = t.src || t.url;
              if (/\.m3u8(?=(#|\?|$))/.test(e))
                if (this.audio.canPlayType("application/x-mpegURL") || this.audio.canPlayType("application/vnd.apple.mpegURL")) this.audio.src = e;
                else try {
                  var a = i(66);
                  a.isSupported() ? (this.hls || (this.hls = new a), this.hls.loadSource(e), this.hls.attachMedia(this.audio)) : (Object(c.f)("HLS is not supported on your browser"), this.audio.src = e)
                } catch (t) {
                  Object(c.f)("hls.js is required to support m3u8"), this.audio.src = e
                } else this.audio.src = e
            }
          },
          shouldShowNativeControls: function(t) {
            this.audio.controls = t
          },
          isAudioMuted: function(t) {
            this.audio.muted = t
          },
          preload: function(t) {
            this.audio.preload = t
          },
          audioVolume: function(t) {
            this.audio.volume = t
          },
          muted: function(t) {
            this.internalMuted = t
          },
          volume: function(t) {
            this.internalVolume = t
          },
          shuffle: function(t) {
            this.internalShuffle = t
          },
          repeat: function(t) {
            this.internalRepeat = t
          }
        },
        beforeCreate: function() {
          m.disableVersionBadge || h || (console.log("\n\n %c Vue-APlayer 1.6.1 %c vue-aplayer.js.org \n", "color: #fff; background:#41b883; padding:5px 0;", "color: #fff; background: #35495e; padding:5px 0;"), h = !0)
        },
        created: function() {
          this.shuffledList = this.getShuffledList()
        },
        mounted: function() {
          this.initAudio(), this.setSelfAdaptingTheme(), this.autoplay && this.play()
        },
        beforeDestroy: function() {
          v === this && (v = null), this.hls && this.hls.destroy()
        }
      };
    e.a = m
  }, function(t, e, i) {
    "use strict";
    var a = i(4);
    e.a = {
      components: {
        IconButton: a.a
      },
      props: {
        pic: String,
        theme: String,
        playing: {
          type: Boolean,
          default: !1
        },
        enableDrag: {
          type: Boolean,
          default: !1
        }
      },
      data: function() {
        return {
          hasMovedSinceMouseDown: !1,
          dragStartX: 0,
          dragStartY: 0
        }
      },
      computed: {
        currentPicStyleObj: function() {
          return this.pic ? {
            backgroundImage: "url(" + this.pic + ")",
            backgroundColor: this.theme
          } : {}
        }
      },
      methods: {
        onDragBegin: function(t) {
          this.enableDrag && (this.hasMovedSinceMouseDown = !1, this.$emit("dragbegin"), this.dragStartX = t.clientX, this.dragStartY = t.clientY, document.addEventListener("mousemove", this.onDocumentMouseMove), document.addEventListener("mouseup", this.onDocumentMouseUp))
        },
        onDocumentMouseMove: function(t) {
          this.hasMovedSinceMouseDown = !0, this.$emit("dragging", {
            offsetLeft: t.clientX - this.dragStartX,
            offsetTop: t.clientY - this.dragStartY
          })
        },
        onDocumentMouseUp: function(t) {
          document.removeEventListener("mouseup", this.onDocumentMouseUp), document.removeEventListener("mousemove", this.onDocumentMouseMove), this.$emit("dragend")
        },
        onClick: function() {
          this.hasMovedSinceMouseDown || this.$emit("toggleplay")
        }
      }
    }
  }, function(t, e, i) {
    "use strict";
    var a = i(8);
    e.a = {
      components: {
        Icon: a.a
      },
      props: ["icon"]
    }
  }, function(t, e, i) {
    "use strict";
    var a = i(9),
      r = i(43),
      n = i(0),
      o = Object(n.a)(a.a, r.a, r.b, !1, null, null, null);
    e.a = o.exports
  }, function(t, e, i) {
    "use strict";
    var a = function() {
        function t(t, e) {
          var i = [],
            a = !0,
            r = !1,
            n = void 0;
          try {
            for (var o, s = t[Symbol.iterator](); !(a = (o = s.next()).done) && (i.push(o.value), !e || i.length !== e); a = !0);
          } catch (t) {
            r = !0, n = t
          } finally {
            try {
              !a && s.return && s.return()
            } finally {
              if (r) throw n
            }
          }
          return i
        }
        return function(e, i) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return t(e, i);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
      }(),
      r = i(27),
      n = r.keys().reduce(function(t, e) {
        var i = r(e),
          n = i.match(/^<svg.+?viewBox="(.+?)".*><path.+?d="(.+?)".*><\/path><\/svg>$/),
          o = a(n, 3),
          s = (o[0], o[1]),
          l = o[2];
        return t[e.match(/^.*\/(.+?)\.svg$/)[1]] = {
          viewBox: s,
          d: l
        }, t
      }, {});
    e.a = {
      props: ["type"],
      computed: {
        svg: function() {
          this.type;
          return "prev" !== this.type && "next" !== this.type || "skip", n[this.type] || {}
        },
        style: function() {
          if ("next" === this.type) return {
            transform: "rotate(180deg)"
          }
        }
      }
    }
  }, function(t, e, i) {
    "use strict";
    e.a = {
      props: {
        show: {
          type: Boolean,
          default: !0
        },
        currentMusic: Object,
        musicList: {
          type: Array,
          default: function() {
            return []
          }
        },
        playIndex: {
          type: Number,
          default: 0
        },
        theme: String,
        listmaxheight: String
      },
      computed: {
        listHeightStyle: function() {
          return {
            height: 33 * this.musicList.length - 1 + "px",
            maxHeight: this.listmaxheight || ""
          }
        }
      }
    }
  }, function(t, e, i) {
    "use strict";
    var a = i(4),
      r = i(53),
      n = i(57);
    e.a = {
      components: {
        IconButton: a.a,
        VProgress: r.a,
        Volume: n.a
      },
      props: ["shuffle", "repeat", "stat", "theme", "volume", "muted"],
      computed: {
        loadProgress: function() {
          return 0 === this.stat.duration ? 0 : this.stat.loadedTime / this.stat.duration
        },
        playProgress: function() {
          return 0 === this.stat.duration ? 0 : this.stat.playedTime / this.stat.duration
        }
      },
      methods: {
        secondToTime: function(t) {
          if (isNaN(t)) return "00:00";
          var e = function(t) {
              return t < 10 ? "0" + t : "" + t
            },
            i = Math.trunc(t / 60),
            a = Math.trunc(t - 60 * i),
            r = Math.trunc(i / 60),
            n = Math.trunc(t / 60 - 60 * Math.trunc(t / 60 / 60));
          return t >= 3600 ? e(r) + ":" + e(n) + ":" + e(a) : e(i) + ":" + e(a)
        }
      }
    }
  }, function(t, e, i) {
    "use strict";
    var a = i(3),
      r = i(8);
    e.a = {
      components: {
        Icon: r.a
      },
      props: ["loadProgress", "playProgress", "theme"],
      data: function() {
        return {
          thumbHovered: !1
        }
      },
      methods: {
        onThumbMouseDown: function(t) {
          var e = this.$refs.barWrap.clientWidth,
            i = (t.clientX - Object(a.b)(this.$refs.barWrap)) / e;
          i = i > 0 ? i : 0, i = i < 1 ? i : 1, this.$emit("dragbegin", i), document.addEventListener("mousemove", this.onDocumentMouseMove), document.addEventListener("mouseup", this.onDocumentMouseUp)
        },
        onDocumentMouseMove: function(t) {
          var e = this.$refs.barWrap.clientWidth,
            i = (t.clientX - Object(a.b)(this.$refs.barWrap)) / e;
          i = i > 0 ? i : 0, i = i < 1 ? i : 1, this.$emit("dragging", i)
        },
        onDocumentMouseUp: function(t) {
          document.removeEventListener("mouseup", this.onDocumentMouseUp), document.removeEventListener("mousemove", this.onDocumentMouseMove);
          var e = this.$refs.barWrap.clientWidth,
            i = (t.clientX - Object(a.b)(this.$refs.barWrap)) / e;
          i = i > 0 ? i : 0, i = i < 1 ? i : 1, this.$emit("dragend", i)
        },
        onThumbTouchStart: function(t) {
          var e = this.$refs.barWrap.clientWidth,
            i = (t.clientX - Object(a.b)(this.$refs.barWrap)) / e;
          i = i > 0 ? i : 0, i = i < 1 ? i : 1, this.$emit("dragbegin", i), document.addEventListener("touchmove", this.onDocumentTouchMove), document.addEventListener("touchend", this.onDocumentTouchEnd)
        },
        onDocumentTouchMove: function(t) {
          var e = t.changedTouches[0],
            i = this.$refs.barWrap.clientWidth,
            r = (e.clientX - Object(a.b)(this.$refs.barWrap)) / i;
          r = r > 0 ? r : 0, r = r < 1 ? r : 1, this.$emit("dragging", r)
        },
        onDocumentTouchEnd: function(t) {
          document.removeEventListener("touchend", this.onDocumentTouchEnd), document.removeEventListener("touchmove", this.onDocumentTouchMove);
          var e = t.changedTouches[0],
            i = this.$refs.barWrap.clientWidth,
            r = (e.clientX - Object(a.b)(this.$refs.barWrap)) / i;
          r = r > 0 ? r : 0, r = r < 1 ? r : 1, this.$emit("dragend", r)
        }
      }
    }
  }, function(t, e, i) {
    "use strict";
    var a = i(4),
      r = i(3);
    e.a = {
      components: {
        IconButton: a.a
      },
      props: ["volume", "muted", "theme"],
      computed: {
        volumeIcon: function() {
          return this.muted || this.volume <= 0 ? "volume-off" : this.volume >= 1 ? "volume-up" : "volume-down"
        }
      },
      methods: {
        adjustVolume: function(t) {
          var e = (40 - t.clientY + Object(r.c)(this.$refs.bar)) / 40;
          e = e > 0 ? e : 0, e = e < 1 ? e : 1, this.$emit("setvolume", e)
        },
        onBarMouseDown: function() {
          document.addEventListener("mousemove", this.onDocumentMouseMove), document.addEventListener("mouseup", this.onDocumentMouseUp)
        },
        onDocumentMouseMove: function(t) {
          var e = (40 - t.clientY + Object(r.c)(this.$refs.bar)) / 40;
          e = e > 0 ? e : 0, e = e < 1 ? e : 1, this.$emit("setvolume", e)
        },
        onDocumentMouseUp: function(t) {
          document.removeEventListener("mouseup", this.onDocumentMouseUp), document.removeEventListener("mousemove", this.onDocumentMouseMove);
          var e = (40 - t.clientY + Object(r.c)(this.$refs.bar)) / 40;
          e = e > 0 ? e : 0, e = e < 1 ? e : 1, this.$emit("setvolume", e)
        }
      }
    }
  }, function(t, e, i) {
    "use strict";
    var a = i(3);
    e.a = {
      props: {
        currentMusic: {
          type: Object,
          required: !0
        },
        playStat: {
          type: Object,
          required: !0
        }
      },
      data: function() {
        return {
          displayLrc: "",
          currentLineIndex: 0
        }
      },
      computed: {
        lrcLines: function() {
          return Object(a.d)(this.displayLrc)
        },
        currentLine: function() {
          return this.currentLineIndex > this.lrcLines.length - 1 ? null : this.lrcLines[this.currentLineIndex]
        },
        transformStyle: function() {
          return {
            transform: "translateY(" + 16 * -this.currentLineIndex + "px)",
            webkitTransform: "translateY(" + 16 * -this.currentLineIndex + "px)"
          }
        }
      },
      methods: {
        applyLrc: function(t) {
          /^https?:\/\//.test(t) ? this.fetchLrc(t) : this.displayLrc = t
        },
        fetchLrc: function(t) {
          var e = this;
          fetch(t).then(function(t) {
            return t.text()
          }).then(function(t) {
            e.displayLrc = t
          })
        },
        hideLrc: function() {
          this.displayLrc = ""
        }
      },
      watch: {
        currentMusic: {
          immediate: !0,
          handler: function(t) {
            this.currentLineIndex = 0, t.lrc ? this.applyLrc(t.lrc) : this.hideLrc()
          }
        },
        "playStat.playedTime": function(t) {
          for (var e = 0; e < this.lrcLines.length; e++) {
            var i = this.lrcLines[e],
              a = this.lrcLines[e + 1];
            t >= i[0] && (!a || t < a[0]) && (this.currentLineIndex = e)
          }
        }
      }
    }
  }, function(t, e, i) {
    "use strict";

    function a(t) {
      i(16)
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = i(5),
      n = i(67),
      o = i(0),
      s = a,
      l = Object(o.a)(r.a, n.a, n.b, !1, s, null, null);
    e.default = l.exports
  }, function(t, e, i) {
    var a = i(17);
    "string" == typeof a && (a = [
      [t.i, a, ""]
    ]), a.locals && (t.exports = a.locals);
    var r = i(2).default;
    r("48028a76", a, !0, {})
  }, function(t, e, i) {
    e = t.exports = i(1)(!1), e.push([t.i, ".aplayer{font-family:Arial,Helvetica,sans-serif;color:#000;background-color:#fff;margin:5px;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.07),0 1px 5px 0 rgba(0,0,0,.1);box-shadow:0 2px 2px 0 rgba(0,0,0,.07),0 1px 5px 0 rgba(0,0,0,.1);border-radius:2px;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:normal;position:relative}.aplayer *{-webkit-box-sizing:content-box;box-sizing:content-box}.aplayer .aplayer-lrc-content{display:none}.aplayer .aplayer-body{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}.aplayer .aplayer-body .aplayer-info{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;text-align:start;padding:14px 7px 0 10px;height:66px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.aplayer .aplayer-body .aplayer-info .aplayer-music{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-left:5px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;cursor:default;padding-bottom:2px}.aplayer .aplayer-body .aplayer-info .aplayer-music .aplayer-title{font-size:14px}.aplayer .aplayer-body .aplayer-info .aplayer-music .aplayer-author{font-size:12px;color:#666}.aplayer .aplayer-body .aplayer-info .aplayer-lrc{z-index:0}.aplayer audio[controls]{display:block;width:100%}.aplayer.aplayer-narrow{width:66px}.aplayer.aplayer-withlrc .aplayer-body .aplayer-pic{height:90px;width:90px}.aplayer.aplayer-withlrc .aplayer-body .aplayer-info{height:90px;padding:10px 7px 0}.aplayer.aplayer-withlist .aplayer-body .aplayer-info{border-bottom:1px solid #e9e9e9}.aplayer.aplayer-withlist .aplayer-body .aplayer-controller .aplayer-time .aplayer-icon.aplayer-icon-menu{display:block}.aplayer.aplayer-float{z-index:1}@-webkit-keyframes aplayer-roll{0%{left:0}to{left:-100%}}@keyframes aplayer-roll{0%{left:0}to{left:-100%}}", ""])
  }, function(t, e, i) {
    "use strict";

    function a(t, e) {
      for (var i = [], a = {}, r = 0; r < e.length; r++) {
        var n = e[r],
          o = n[0],
          s = n[1],
          l = n[2],
          u = n[3],
          c = {
            id: t + ":" + r,
            css: s,
            media: l,
            sourceMap: u
          };
        a[o] ? a[o].parts.push(c) : i.push(a[o] = {
          id: o,
          parts: [c]
        })
      }
      return i
    }
    e.a = a
  }, function(e, i) {
    e.exports = t
  }, function(t, e, i) {
    "use strict";

    function a(t) {
      i(21)
    }
    var r = i(6),
      n = i(45),
      o = i(0),
      s = a,
      l = Object(o.a)(r.a, n.a, n.b, !1, s, null, null);
    e.a = l.exports
  }, function(t, e, i) {
    var a = i(22);
    "string" == typeof a && (a = [
      [t.i, a, ""]
    ]), a.locals && (t.exports = a.locals);
    var r = i(2).default;
    r("082b31c5", a, !0, {})
  }, function(t, e, i) {
    var a = i(23);
    e = t.exports = i(1)(!1), e.push([t.i, ".aplayer-float .aplayer-pic:active{cursor:move}.aplayer-pic{-ms-flex-negative:0;flex-shrink:0;position:relative;height:66px;width:66px;background-image:url(" + a(i(24)) + ");background-size:cover;-webkit-transition:all .3s ease;transition:all .3s ease;cursor:pointer}.aplayer-pic:hover .aplayer-button{opacity:1}.aplayer-pic .aplayer-button{position:absolute;border-radius:50%;opacity:.8;text-shadow:0 1px 1px rgba(0,0,0,.2);-webkit-box-shadow:0 1px 1px rgba(0,0,0,.2);box-shadow:0 1px 1px rgba(0,0,0,.2);background:rgba(0,0,0,.2);-webkit-transition:all .1s ease;transition:all .1s ease}.aplayer-pic .aplayer-button .aplayer-fill{fill:#fff}.aplayer-pic .aplayer-play{width:26px;height:26px;border:2px solid #fff;bottom:50%;right:50%;margin:0 -15px -15px 0}.aplayer-pic .aplayer-play .aplayer-icon-play{position:absolute;top:3px;left:4px;height:20px;width:20px}.aplayer-pic .aplayer-pause{width:16px;height:16px;border:2px solid #fff;bottom:4px;right:4px}.aplayer-pic .aplayer-pause .aplayer-icon-pause{position:absolute;top:2px;left:2px;height:12px;width:12px}", ""])
  }, function(t, e) {
    t.exports = function(t) {
      return "string" != typeof t ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), /["'() \t\n]/.test(t) ? '"' + t.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : t)
    }
  }, function(t, e) {
    t.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE2NjQ3NUZBM0Y4RDExRTY4NzJCRDdCNkZCQTQ0MjNBIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE2NjQ3NUY5M0Y4RDExRTY4NzJCRDdCNkZCQTQ0MjNBIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5OENEMEFFRjM0NTI1NjE0NEREQkU4RjkxRjAwNjM3NiIgc3RSZWY6ZG9jdW1lbnRJRD0iOThDRDBBRUYzNDUyNTYxNDREREJFOEY5MUYwMDYzNzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCABkAGQDASIAAhEBAxEB/8QAgwAAAgIDAQAAAAAAAAAAAAAAAAYBBQIDBAcBAQEBAAAAAAAAAAAAAAAAAAABAhAAAQIEBAEJBgMHBQAAAAAAAQIDABEEBSExEgZBUWFxgaGxIhMUkTJCUmIVI0MWwdHh8XKSsvCCojNzEQEBAQEBAQEBAAAAAAAAAAAAAREhMVFBYf/aAAwDAQACEQMRAD8AaJ8vCJEYTjIZxtlIicc40VFZS0idVS6lpP1HE9Aind3dSrWWbdTPVruXgSQn98Awd0SBC+mp3fVYtUjFGk5F5U1S6Me6Mvtu6ncXbo01zNtzl2CJovwZxML/ANl3DwvZn/5fxiPt+72sWbkw/Lg4jTP/AImGhhiYWlXXdlD4q23IqWh7zlOZ/wCGrujpt+7bTWKDTijSvEy0O4CfJqy9sNMXmWMTECRExjzxMUEEEEBxLcbbQXHVBCEialKMgBFBU7jqax/0dmbU64fzJYy+aZwSOcxT7kvdPXVJpU6jTU5IC0HBauKucDhF7tS3ejolVJK51UlJQrCSRkeuJqppdspcV593dNU8cS0kkNjpPvKi8ZaZp2w3TtpabGSUAJHZEgzjXUVdPStebUOBpE5AnieQDieiKjeYyELVVva3ML0IZddI44IHaZxtod52upcDbqV0ylGSVLkUTP1JyibDDBOJxzjTUF8UzqqdIVUBtRZByK9J09seb1lzuKawuIqngRLSorUDMZ6k8DPMSwhaSPTwSDFbd7Bb7s2rzkBupl4KlIksH6vmHTE2GucuNqp6p3/tIKXCOKknST1xYgZDlihPsNxrLTXItFevXTuLU02omZadQZFP9Jw9ohxjz2tfF03GhFKdQXV6kqHINCJ/2tTj0KYJiQow6oIJY5QRR5hYLM5cK9KHkFNO1JbxIImOCeuPREyAAAkAJARyW63s26n8hlSnATqUtZmonnlKOucokhQtxDTa3XTpbbSVrVyJSNRhFq6usvNyap0K0v1JA5mG1YhtPJJOKzxOENG5HS3Yq1ScyhKSOZS0pPZCts8+ZfQtWK/LcUOk/wA4X3FhwoLJbKBgMtMIWZeN1xKVqWecqB9kJm7aKlo7wpulQGm3G0OKbT7qVKmDIcAZTh/LiW0KW4oJQgFS1HAAJEyTHnb6ndxX5XlAgVCwlH0MoEpnoSJwpD5ZFrXZ6JThOtTKJk9GHZCxvZmn9YHkJSh1KGw6QAC4p0uEauUhKIcmW0NNIaQJIbSEp5kpEhHntyqV3q7hlkzFQ/4T9ODSPYhM+uFI7rbZ9zU1EzXWuoGl5Ic9Pq0nH6XPAZ9MY1+6r2hh+3VjKGKojQtwApWlKhjhMjEcYZrzcW7JavMaA1pAZpUn5pSB6EgThT2xaTeLi5U1ZLjLJ8x4qzccUZhJ7zE/g6dlrtNO+t+pfSisUNDKF+EJScyFHCZh5BEpgzB4xR3TaVqr0lTKBR1BEw42JIJ+tvL2ShaZuN62xWejqZuMiRLKjqQtB+JpXD/U4vh69BxnKCK/73Qfa/uus+m0z+rVl5cvmnhBFRsHLyxIkrolGIMhKJSchAcl4pzVWmsYAmtbSijnUjxp7UwibdrEUd4pnlnS2olCycgFjTjHo4VHm9/paeku1QxTKCmtWrSPyyrFTf8AtiX6sW+5dwmtV9st5K2SoJdWnEuqnghP0z9sXe2rCLXTl18A1rwGvj5afkH7YoNov2aneW7WLCK2cmVOYISn6Tlq6Yaau+2mkaLjlU2ogYNtkLWo8JBMJ9GndFzFBanEpMqipmy1ygKHjV1J74odkW4u1blwWPw6ceW0eVxYx9ie+K+oeuG57sA0iXwtozSy1P3lHvh+t1AzbqNqkY9xsYq4qUcVKPSYe0/C9vxp9VPRvAEstqWlZGSVLCdM+mRjn2Xd6KkS9R1K0sqcUFtuKwSrCRSTDg42262pp1CXGljStChqSoHlBigqdk2h5RUyt2mn8CSFo6tePbDO6Ll67W1hOtyrZSn+sHsGMJW6r3S3Z9hukQS3T6gHSJFZXLBIzlhFs3sO3pV+JVPLHIEoR2+KLm32C024hdMwPNGTrh1r6irLqh2pwvfp+4fpPydJ9T5vqfT/ABaJadMvmljKCHLjxnBDDXDPGXGJmTkcogETMshjyxlPhFGqqfVT0b9QMSy2twDnSkkdsJtoomK7cC2KoB1plKtSVfmKT4ST0qUVQ7KbQ62th3xNuJUhY46VDSewwhvqrdvXsPrTqUMZ/C82fCVJP1dhiVYvKjY9vcVqpqhxgH8tQDgHQZpMRT7EokkF+qccHyISlufX4oubddKG5shymWCvNbRwWk84jtBMgeSGRNaKOgo7eyWaNoNIPvEYqUfqUcTHVOMRIxOKscooyBxg5eSIM5T48IkY/vgJOPVBOXOIBM80aKqspaNvzap1LaRlM4noGZgOjVBC5+sqX1ejyj6aUp6vxf6tGUuac4ImwxbAkKlEzBywjHGUgermiRPLhFGYJ48Y01tDSXBg09Y2HG5+E5KSZZoUMo2AgZRkDiBLDiIBQq9n3ClcL9pf80JxSkny3k9fuqjBvcu4bYfLuDBWBh+MgoV/eMDDoMyZ4RIM0kETT8pxETPi6WmN9UKhJ+ncQTnpIUP2R1p3jZCMVOJ5igxYu2q1vmbtGwvn0JB7JRznbthOJoW8eQqHcqHU40K3nZAMFOKllJB/bHI9vuiTMU9M44o/MQkdk4tUbdsaDMUTXXNXeY6maChp5eTTNI5ClCQe6HThWN+3Rc/Bb6UtIV8SUH/NeEZ02zrhWOefdqognNKT5izzajgIbpz7gIkfzhhqs/TFk9J6b0w05+ZM+ZPl1wRay9kEUV4y+qXZGachyc8EEBKeMAnLCf8ACCCAzE5d8ZHMS64IIA7oy+HDqgggIEpYdUZJnpE84IICeScSJYwQQE8IIIID/9k="
  }, function(t, e, i) {
    var a = i(26);
    "string" == typeof a && (a = [
      [t.i, a, ""]
    ]), a.locals && (t.exports = a.locals);
    var r = i(2).default;
    r("a4518b4e", a, !0, {})
  }, function(t, e, i) {
    e = t.exports = i(1)(!1), e.push([t.i, ".aplayer-icon{width:15px;height:15px;border:none;background-color:transparent;outline:none;cursor:pointer;opacity:.8;vertical-align:middle;padding:0;font-size:12px;margin:0;display:inline}.aplayer-icon:hover{opacity:1}.aplayer-icon .aplayer-fill{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}", ""])
  }, function(t, e, i) {
    function a(t) {
      return i(r(t))
    }

    function r(t) {
      var e = n[t];
      if (!(e + 1)) throw new Error("Cannot find module '" + t + "'.");
      return e
    }
    var n = {
      "./loading.svg": 28,
      "./lrc.svg": 29,
      "./menu.svg": 30,
      "./no-repeat.svg": 31,
      "./pause.svg": 32,
      "./play.svg": 33,
      "./repeat-all-legacy.svg": 34,
      "./repeat-all.svg": 35,
      "./repeat-one-legacy.svg": 36,
      "./repeat-one.svg": 37,
      "./shuffle.svg": 38,
      "./skip.svg": 39,
      "./volume-down.svg": 40,
      "./volume-off.svg": 41,
      "./volume-up.svg": 42
    };
    a.keys = function() {
      return Object.keys(n)
    }, a.resolve = r, t.exports = a, a.id = 27
  }, function(t, e) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"></path></svg>'
  }, function(t, e) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'
  }, function(t, e) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5 0 32 32"><path d="M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"></path></svg>'
  }, function(t, e) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"></path></svg>'
  }, function(t, e) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-8 0 32 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'
  }, function(t, e) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-8 0 32 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'
  }, function(t, e) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-1 0 32 32"><path d="M25.6 9.92q1.344 0 2.272 0.928t0.928 2.272v9.28q0 1.28-0.928 2.24t-2.272 0.96h-22.4q-1.28 0-2.24-0.96t-0.96-2.24v-9.28q0-1.344 0.96-2.272t2.24-0.928h8v-3.52l6.4 5.76-6.4 5.76v-3.52h-6.72v6.72h19.84v-6.72h-4.8v-4.48h6.080z"></path></svg>'
  }, function(t, e) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"></path></svg>'
  }, function(t, e) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 38 32"><path d="M2.072 21.577c0.71-0.197 1.125-0.932 0.928-1.641-0.221-0.796-0.333-1.622-0.333-2.457 0-5.049 4.108-9.158 9.158-9.158h5.428c0.056-0.922 0.221-1.816 0.482-2.667h-5.911c-3.158 0-6.128 1.23-8.361 3.463s-3.463 5.203-3.463 8.361c0 1.076 0.145 2.143 0.431 3.171 0.164 0.59 0.7 0.976 1.284 0.976 0.117 0 0.238-0.016 0.357-0.049zM21.394 25.613h-12.409v-2.362c0-0.758-0.528-1.052-1.172-0.652l-5.685 3.522c-0.644 0.4-0.651 1.063-0.014 1.474l5.712 3.69c0.637 0.411 1.158 0.127 1.158-0.63v-2.374h12.409c3.158 0 6.128-1.23 8.361-3.463 1.424-1.424 2.44-3.148 2.99-5.029-0.985 0.368-2.033 0.606-3.125 0.691-1.492 3.038-4.619 5.135-8.226 5.135zM28.718 0c-4.985 0-9.026 4.041-9.026 9.026s4.041 9.026 9.026 9.026 9.026-4.041 9.026-9.026-4.041-9.026-9.026-9.026zM30.392 13.827h-1.728v-6.822c-0.635 0.576-1.433 1.004-2.407 1.285v-1.713c0.473-0.118 0.975-0.325 1.506-0.62 0.532-0.325 0.975-0.665 1.329-1.034h1.3v8.904z"></path></svg>'
  }, function(t, e) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"></path></svg>'
  }, function(t, e) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"></path></svg>'
  }, function(t, e) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z"></path></svg>'
  }, function(t, e) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'
  }, function(t, e) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'
  }, function(t, e) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"></path></svg>'
  }, function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return a
    }), i.d(e, "b", function() {
      return r
    });
    var a = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("svg", {
          style: t.style,
          attrs: {
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            height: "100%",
            version: "1.1",
            viewBox: t.svg.viewBox,
            width: "100%"
          }
        }, [i("use", {
          attrs: {
            "xlink:href": "#aplayer-${type}"
          }
        }), t._v(" "), i("path", {
          staticClass: "aplayer-fill",
          attrs: {
            d: t.svg.d
          }
        })])
      },
      r = []
  }, function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return a
    }), i.d(e, "b", function() {
      return r
    });
    var a = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("button", {
          staticClass: "aplayer-icon",
          attrs: {
            type: "button"
          }
        }, [i("icon", {
          attrs: {
            type: t.icon
          }
        })], 1)
      },
      r = []
  }, function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return a
    }), i.d(e, "b", function() {
      return r
    });
    var a = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "aplayer-pic",
          style: t.currentPicStyleObj,
          on: {
            mousedown: t.onDragBegin,
            click: t.onClick
          }
        }, [i("div", {
          staticClass: "aplayer-button",
          class: t.playing ? "aplayer-pause" : "aplayer-play"
        }, [i("icon-button", {
          class: t.playing ? "aplayer-icon-pause" : "aplayer-icon-play",
          attrs: {
            icon: t.playing ? "pause" : "play"
          }
        })], 1)])
      },
      r = []
  }, function(t, e, i) {
    "use strict";

    function a(t) {
      i(47)
    }
    var r = i(10),
      n = i(49),
      o = i(0),
      s = a,
      l = Object(o.a)(r.a, n.a, n.b, !1, s, null, null);
    e.a = l.exports
  }, function(t, e, i) {
    var a = i(48);
    "string" == typeof a && (a = [
      [t.i, a, ""]
    ]), a.locals && (t.exports = a.locals);
    var r = i(2).default;
    r("7b9d1402", a, !0, {})
  }, function(t, e, i) {
    e = t.exports = i(1)(!1), e.push([t.i, ".aplayer-list{overflow:hidden}.aplayer-list.slide-v-enter-active,.aplayer-list.slide-v-leave-active{-webkit-transition:height .5s ease;transition:height .5s ease;will-change:height}.aplayer-list.slide-v-enter,.aplayer-list.slide-v-leave-to{height:0!important}.aplayer-list ol{list-style-type:none;margin:0;padding:0;overflow-y:auto}.aplayer-list ol::-webkit-scrollbar{width:5px}.aplayer-list ol::-webkit-scrollbar-track{background-color:#f9f9f9}.aplayer-list ol::-webkit-scrollbar-thumb{border-radius:3px;background-color:#eee}.aplayer-list ol::-webkit-scrollbar-thumb:hover{background-color:#ccc}.aplayer-list ol:hover li.aplayer-list-light:not(:hover){background-color:inherit;-webkit-transition:inherit;transition:inherit}.aplayer-list ol:not(:hover) li.aplayer-list-light{-webkit-transition:background-color .6s ease;transition:background-color .6s ease}.aplayer-list ol li{position:relative;height:32px;line-height:32px;padding:0 15px;font-size:12px;border-top:1px solid #e9e9e9;cursor:pointer;-webkit-transition:all .2s ease;transition:all .2s ease;overflow:hidden;margin:0;text-align:start;display:-webkit-box;display:-ms-flexbox;display:flex}.aplayer-list ol li:first-child{border-top:none}.aplayer-list ol li.aplayer-list-light,.aplayer-list ol li:hover{background:#efefef}.aplayer-list ol li.aplayer-list-light .aplayer-list-cur{display:inline-block}.aplayer-list ol li .aplayer-list-cur{display:none;width:3px;height:22px;position:absolute;left:0;top:5px;-webkit-transition:background-color .3s;transition:background-color .3s}.aplayer-list ol li .aplayer-list-index{color:#666;margin-right:12px}.aplayer-list ol li .aplayer-list-title{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.aplayer-list ol li .aplayer-list-author{-ms-flex-negative:0;flex-shrink:0;color:#666;float:right}", ""])
  }, function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return a
    }), i.d(e, "b", function() {
      return r
    });
    var a = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("transition", {
          attrs: {
            name: "slide-v"
          }
        }, [i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.show,
            expression: "show"
          }],
          ref: "list",
          staticClass: "aplayer-list",
          style: t.listHeightStyle
        }, [i("ol", {
          ref: "ol",
          style: t.listHeightStyle
        }, t._l(t.musicList, function(e, a) {
          return i("li", {
            key: a,
            class: {
              "aplayer-list-light": e === t.currentMusic
            },
            on: {
              click: function(i) {
                t.$emit("selectsong", e)
              }
            }
          }, [i("span", {
            staticClass: "aplayer-list-cur",
            style: {
              background: t.theme
            }
          }), t._v(" "), i("span", {
            staticClass: "aplayer-list-index"
          }, [t._v(t._s(a + 1))]), t._v(" "), i("span", {
            staticClass: "aplayer-list-title"
          }, [t._v(t._s(e.title || "Untitled"))]), t._v(" "), i("span", {
            staticClass: "aplayer-list-author"
          }, [t._v(t._s(e.artist || e.author || "Unknown"))])])
        }))])])
      },
      r = []
  }, function(t, e, i) {
    "use strict";

    function a(t) {
      i(51)
    }
    var r = i(11),
      n = i(61),
      o = i(0),
      s = a,
      l = Object(o.a)(r.a, n.a, n.b, !1, s, null, null);
    e.a = l.exports
  }, function(t, e, i) {
    var a = i(52);
    "string" == typeof a && (a = [
      [t.i, a, ""]
    ]), a.locals && (t.exports = a.locals);
    var r = i(2).default;
    r("c97c1d8a", a, !0, {})
  }, function(t, e, i) {
    e = t.exports = i(1)(!1), e.push([t.i, ".aplayer-controller,.aplayer-controller .aplayer-time{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative}.aplayer-controller .aplayer-time{height:17px;color:#999;font-size:11px;padding-left:7px}.aplayer-controller .aplayer-time .aplayer-volume-wrap{margin-left:4px;margin-right:4px}.aplayer-controller .aplayer-time .aplayer-icon{cursor:pointer;-webkit-transition:all .2s ease;transition:all .2s ease;margin-left:4px}.aplayer-controller .aplayer-time .aplayer-icon.inactive{opacity:.3}.aplayer-controller .aplayer-time .aplayer-icon .aplayer-fill{fill:#666}.aplayer-controller .aplayer-time .aplayer-icon:hover .aplayer-fill{fill:#000}.aplayer-controller .aplayer-time .aplayer-icon.aplayer-icon-menu{display:none}.aplayer-controller .aplayer-time .aplayer-volume-wrap+.aplayer-icon{margin-left:0}.aplayer-controller .aplayer-time.aplayer-time-narrow .aplayer-icon-menu,.aplayer-controller .aplayer-time.aplayer-time-narrow .aplayer-icon-mode{display:none}", ""])
  }, function(t, e, i) {
    "use strict";

    function a(t) {
      i(54)
    }
    var r = i(12),
      n = i(56),
      o = i(0),
      s = a,
      l = Object(o.a)(r.a, n.a, n.b, !1, s, null, null);
    e.a = l.exports
  }, function(t, e, i) {
    var a = i(55);
    "string" == typeof a && (a = [
      [t.i, a, ""]
    ]), a.locals && (t.exports = a.locals);
    var r = i(2).default;
    r("6f66d8c5", a, !0, {})
  }, function(t, e, i) {
    e = t.exports = i(1)(!1), e.push([t.i, ".aplayer-bar-wrap{margin:0 0 0 5px;padding:4px 0;cursor:pointer;-webkit-box-flex:1;-ms-flex:1;flex:1}.aplayer-bar-wrap .aplayer-bar{position:relative;height:2px;width:100%;background:#cdcdcd}.aplayer-bar-wrap .aplayer-bar .aplayer-loaded{position:absolute;left:0;top:0;bottom:0;background:#aaa;height:2px;-webkit-transition:all .5s ease;transition:all .5s ease;will-change:width}.aplayer-bar-wrap .aplayer-bar .aplayer-played{position:absolute;left:0;top:0;bottom:0;height:2px;-webkit-transition:background-color .3s;transition:background-color .3s;will-change:width}.aplayer-bar-wrap .aplayer-bar .aplayer-played .aplayer-thumb{position:absolute;top:0;right:5px;margin-top:-5px;margin-right:-10px;width:10px;height:10px;border:1px solid;-webkit-transform:scale(.8);transform:scale(.8);will-change:transform;-webkit-transition:background-color .3s,border-color .3s,-webkit-transform .3s;transition:background-color .3s,border-color .3s,-webkit-transform .3s;transition:transform .3s,background-color .3s,border-color .3s;transition:transform .3s,background-color .3s,border-color .3s,-webkit-transform .3s;border-radius:50%;background:#fff;cursor:pointer;overflow:hidden}.aplayer-bar-wrap .aplayer-bar .aplayer-played .aplayer-thumb:hover{-webkit-transform:scale(1);transform:scale(1)}.aplayer-bar-wrap .aplayer-bar .aplayer-played .aplayer-thumb .aplayer-loading-icon{display:none;width:100%;height:100%}.aplayer-bar-wrap .aplayer-bar .aplayer-played .aplayer-thumb .aplayer-loading-icon svg{position:absolute;-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite;fill:#fff}.aplayer-loading .aplayer-bar-wrap .aplayer-bar .aplayer-thumb .aplayer-loading-icon{display:block}.aplayer-loading .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played .aplayer-thumb{-webkit-transform:scale(1);transform:scale(1)}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""])
  }, function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return a
    }), i.d(e, "b", function() {
      return r
    });
    var a = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          ref: "barWrap",
          staticClass: "aplayer-bar-wrap",
          on: {
            mousedown: t.onThumbMouseDown,
            touchstart: t.onThumbTouchStart
          }
        }, [i("div", {
          staticClass: "aplayer-bar"
        }, [i("div", {
          staticClass: "aplayer-loaded",
          style: {
            width: 100 * t.loadProgress + "%"
          }
        }), t._v(" "), i("div", {
          staticClass: "aplayer-played",
          style: {
            width: 100 * t.playProgress + "%",
            background: t.theme
          }
        }, [i("span", {
          ref: "thumb",
          staticClass: "aplayer-thumb",
          style: {
            borderColor: t.theme,
            backgroundColor: t.thumbHovered ? t.theme : "#fff"
          },
          on: {
            mouseover: function(e) {
              t.thumbHovered = !0
            },
            mouseout: function(e) {
              t.thumbHovered = !1
            }
          }
        }, [i("span", {
          staticClass: "aplayer-loading-icon",
          style: {
            backgroundColor: t.theme
          }
        }, [i("icon", {
          attrs: {
            type: "loading"
          }
        })], 1)])])])])
      },
      r = []
  }, function(t, e, i) {
    "use strict";

    function a(t) {
      i(58)
    }
    var r = i(13),
      n = i(60),
      o = i(0),
      s = a,
      l = Object(o.a)(r.a, n.a, n.b, !1, s, null, null);
    e.a = l.exports
  }, function(t, e, i) {
    var a = i(59);
    "string" == typeof a && (a = [
      [t.i, a, ""]
    ]), a.locals && (t.exports = a.locals);
    var r = i(2).default;
    r("28c86b36", a, !0, {})
  }, function(t, e, i) {
    e = t.exports = i(1)(!1), e.push([t.i, '.aplayer-volume-wrap{position:relative;cursor:pointer;z-index:0}.aplayer-volume-wrap:hover .aplayer-volume-bar-wrap{display:block}.aplayer-volume-wrap .aplayer-volume-bar-wrap{display:none;position:absolute;bottom:15px;left:-4px;right:-4px;height:40px;z-index:-1;-webkit-transition:all .2s ease;transition:all .2s ease}.aplayer-volume-wrap .aplayer-volume-bar-wrap:after{content:"";position:absolute;bottom:-16px;left:0;right:0;height:62px;background-color:#fff;-webkit-box-shadow:0 0 2px 0 rgba(0,0,0,.07),0 0 5px 0 rgba(0,0,0,.1);box-shadow:0 0 2px 0 rgba(0,0,0,.07),0 0 5px 0 rgba(0,0,0,.1)}.aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar{position:absolute;bottom:0;left:11px;width:5px;height:40px;background:#aaa;border-radius:2.5px;overflow:hidden;z-index:1}.aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar .aplayer-volume{position:absolute;bottom:0;left:0;right:0;-webkit-transition:height .1s ease,background-color .3s;transition:height .1s ease,background-color .3s;will-change:height}', ""])
  }, function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return a
    }), i.d(e, "b", function() {
      return r
    });
    var a = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "aplayer-volume-wrap"
        }, [i("icon-button", {
          class: "aplayer-icon-" + t.volumeIcon,
          attrs: {
            icon: t.volumeIcon
          },
          nativeOn: {
            click: function(e) {
              t.$emit("togglemute")
            }
          }
        }), t._v(" "), i("div", {
          staticClass: "aplayer-volume-bar-wrap",
          on: {
            mousedown: t.onBarMouseDown
          }
        }, [i("div", {
          ref: "bar",
          staticClass: "aplayer-volume-bar"
        }, [i("div", {
          staticClass: "aplayer-volume",
          style: {
            height: t.muted ? 0 : Math.trunc(100 * t.volume) + "%",
            background: t.theme
          }
        })])])], 1)
      },
      r = []
  }, function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return a
    }), i.d(e, "b", function() {
      return r
    });
    var a = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "aplayer-controller"
        }, [i("v-progress", {
          attrs: {
            loadProgress: t.loadProgress,
            playProgress: t.playProgress,
            theme: t.theme
          },
          on: {
            dragbegin: function(e) {
              return t.$emit("dragbegin", e)
            },
            dragend: function(e) {
              return t.$emit("dragend", e)
            },
            dragging: function(e) {
              return t.$emit("dragging", e)
            }
          }
        }), t._v(" "), i("div", {
          staticClass: "aplayer-time"
        }, [i("div", {
          staticClass: "aplayer-time-inner"
        }, [t._v("\n      - "), i("span", {
          staticClass: "aplayer-ptime"
        }, [t._v(t._s(t.secondToTime(t.stat.playedTime)))]), t._v(" / "), i("span", {
          staticClass: "aplayer-dtime"
        }, [t._v(t._s(t.secondToTime(t.stat.duration)))])]), t._v(" "), t.$parent.isMobile ? t._e() : i("volume", {
          attrs: {
            volume: t.volume,
            theme: t.theme,
            muted: t.muted
          },
          on: {
            togglemute: function(e) {
              t.$emit("togglemute")
            },
            setvolume: function(e) {
              return t.$emit("setvolume", e)
            }
          }
        }), t._v(" "), i("icon-button", {
          staticClass: "aplayer-icon-mode",
          class: {
            inactive: !t.shuffle
          },
          attrs: {
            icon: "shuffle"
          },
          nativeOn: {
            click: function(e) {
              t.$emit("toggleshuffle")
            }
          }
        }), t._v(" "), i("icon-button", {
          staticClass: "aplayer-icon-mode",
          class: {
            inactive: "no-repeat" === t.repeat
          },
          attrs: {
            icon: "repeat-one" === t.repeat ? "repeat-one" : "repeat-all"
          },
          nativeOn: {
            click: function(e) {
              t.$emit("nextmode")
            }
          }
        }), t._v(" "), i("icon-button", {
          staticClass: "aplayer-icon-menu",
          class: {
            inactive: !t.$parent.showList
          },
          attrs: {
            icon: "menu"
          },
          nativeOn: {
            click: function(e) {
              t.$emit("togglelist")
            }
          }
        })], 1)], 1)
      },
      r = []
  }, function(t, e, i) {
    "use strict";

    function a(t) {
      i(63)
    }
    var r = i(14),
      n = i(65),
      o = i(0),
      s = a,
      l = Object(o.a)(r.a, n.a, n.b, !1, s, null, null);
    e.a = l.exports
  }, function(t, e, i) {
    var a = i(64);
    "string" == typeof a && (a = [
      [t.i, a, ""]
    ]), a.locals && (t.exports = a.locals);
    var r = i(2).default;
    r("229083b6", a, !0, {})
  }, function(t, e, i) {
    e = t.exports = i(1)(!1), e.push([t.i, '.aplayer-lrc{position:relative;height:30px;text-align:center;overflow:hidden;margin-bottom:7px}.aplayer-lrc:before{top:0;height:10%;background:-webkit-gradient(linear,left top,left bottom,from(#fff),to(hsla(0,0%,100%,0)));background:linear-gradient(180deg,#fff 0,hsla(0,0%,100%,0));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#00ffffff",GradientType=0)}.aplayer-lrc:after,.aplayer-lrc:before{position:absolute;z-index:1;display:block;overflow:hidden;width:100%;content:" "}.aplayer-lrc:after{bottom:0;height:33%;background:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),to(hsla(0,0%,100%,.8)));background:linear-gradient(180deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.8));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#00ffffff",endColorstr="#ccffffff",GradientType=0)}.aplayer-lrc p{font-size:12px;color:#666;line-height:16px;height:16px;padding:0;margin:0;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;opacity:.4;overflow:hidden}.aplayer-lrc p.aplayer-lrc-current{opacity:1;overflow:visible;height:auto}.aplayer-lrc .aplayer-lrc-contents{width:100%;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;cursor:default}', ""])
  }, function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return a
    }), i.d(e, "b", function() {
      return r
    });
    var a = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "aplayer-lrc"
        }, [i("div", {
          staticClass: "aplayer-lrc-contents",
          style: t.transformStyle
        }, t._l(t.lrcLines, function(e, a) {
          return i("p", {
            key: a,
            class: {
              "aplayer-lrc-current": a === t.currentLineIndex
            }
          }, [t._v("\n      " + t._s(e[1]) + "\n    ")])
        }))])
      },
      r = []
  }, function(t, i) {
    if (void 0 === e) {
      var a = new Error('Cannot find module "undefined"');
      throw a.code = "MODULE_NOT_FOUND", a
    }
    t.exports = e
  }, function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return a
    }), i.d(e, "b", function() {
      return r
    });
    var a = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "aplayer",
          class: {
            "aplayer-narrow": t.isMiniMode, "aplayer-withlist": !t.isMiniMode && t.musicList.length > 0, "aplayer-withlrc": !t.isMiniMode && (!!t.$slots.display || t.shouldShowLrc), "aplayer-float": t.isFloatMode, "aplayer-loading": t.isPlaying && t.isLoading
          },
          style: t.floatStyleObj
        }, [i("div", {
          staticClass: "aplayer-body"
        }, [i("thumbnail", {
          attrs: {
            pic: t.currentMusic.pic,
            playing: t.isPlaying,
            "enable-drag": t.isFloatMode,
            theme: t.currentTheme
          },
          on: {
            toggleplay: t.toggle,
            dragbegin: t.onDragBegin,
            dragging: t.onDragAround
          }
        }), t._v(" "), i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !t.isMiniMode,
            expression: "!isMiniMode"
          }],
          staticClass: "aplayer-info"
        }, [i("div", {
          staticClass: "aplayer-music"
        }, [i("span", {
          staticClass: "aplayer-title"
        }, [t._v(t._s(t.currentMusic.title || "Untitled"))]), t._v(" "), i("span", {
          staticClass: "aplayer-author"
        }, [t._v(t._s(t.currentMusic.artist || t.currentMusic.author || "Unknown"))])]), t._v(" "), t._t("display", [t.shouldShowLrc ? i("lyrics", {
          attrs: {
            "current-music": t.currentMusic,
            "play-stat": t.playStat
          }
        }) : t._e()], {
          currentMusic: t.currentMusic,
          playStat: t.playStat
        }), t._v(" "), i("controls", {
          attrs: {
            shuffle: t.shouldShuffle,
            repeat: t.repeatMode,
            stat: t.playStat,
            volume: t.audioVolume,
            muted: t.isAudioMuted,
            theme: t.currentTheme
          },
          on: {
            toggleshuffle: function(e) {
              t.shouldShuffle = !t.shouldShuffle
            },
            togglelist: function(e) {
              t.showList = !t.showList
            },
            togglemute: t.toggleMute,
            setvolume: t.setAudioVolume,
            dragbegin: t.onProgressDragBegin,
            dragend: t.onProgressDragEnd,
            dragging: t.onProgressDragging,
            nextmode: t.setNextMode
          }
        })], 2)], 1), t._v(" "), i("audio", {
          ref: "audio"
        }), t._v(" "), i("music-list", {
          attrs: {
            show: t.showList && !t.isMiniMode,
            "current-music": t.currentMusic,
            "music-list": t.musicList,
            "play-index": t.playIndex,
            listmaxheight: t.listmaxheight || t.listMaxHeight,
            theme: t.currentTheme
          },
          on: {
            selectsong: t.onSelectSong
          }
        })], 1)
      },
      r = []
  }]).default
});
