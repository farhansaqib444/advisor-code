! function(n) {
  "use strict";
  var t = function() {};
  t.prototype.initTooltipPlugin = function() {
    n.fn.tooltip && n('[data-toggle="tooltip"]').tooltip()
  }, t.prototype.initPopoverPlugin = function() {
    n.fn.popover && n('[data-toggle="popover"]').popover()
  }, t.prototype.initToastPlugin = function() {
    n.fn.toast && n('[data-toggle="toast"]').toast()
  }, t.prototype.initSlimScrollPlugin = function() {
    n.fn.slimScroll && n(".slimscroll").slimScroll({
      height: "auto",
      position: "right",
      size: "8px",
      touchScrollStep: 20,
      color: "#9ea5ab"
    })
  }, t.prototype.initFormValidation = function() {
    n(".needs-validation").on("submit", function(t) {
      return n(this).addClass("was-validated"), !1 !== n(this)[0].checkValidity() || (t.preventDefault(), t.stopPropagation(), !1)
    })
  }, t.prototype.initCustomModalPlugin = function() {
    n('[data-plugin="custommodal"]').on("click", function(t) {
      t.preventDefault(), new Custombox.modal({
        content: {
          target: n(this).attr("href"),
          effect: n(this).attr("data-animation")
        },
        overlay: {
          color: n(this).attr("data-overlayColor")
        }
      }).open()
    })
  }, t.prototype.initCounterUp = function() {
    n(this).attr("data-delay") && n(this).attr("data-delay"), n(this).attr("data-time") && n(this).attr("data-time");
    n('[data-plugin="counterup"]').each(function(t, i) {
      n(this).counterUp({
        delay: 100,
        time: 1200
      })
    })
  }, t.prototype.initPeityCharts = function() {
    n('[data-plugin="peity-pie"]').each(function(t, i) {
      var e = n(this).attr("data-colors") ? n(this).attr("data-colors").split(",") : [],
        o = n(this).attr("data-width") ? n(this).attr("data-width") : 20,
        a = n(this).attr("data-height") ? n(this).attr("data-height") : 20;
      n(this).peity("pie", {
        fill: e,
        width: o,
        height: a
      })
    }), n('[data-plugin="peity-donut"]').each(function(t, i) {
      var e = n(this).attr("data-colors") ? n(this).attr("data-colors").split(",") : [],
        o = n(this).attr("data-width") ? n(this).attr("data-width") : 20,
        a = n(this).attr("data-height") ? n(this).attr("data-height") : 20;
      n(this).peity("donut", {
        fill: e,
        width: o,
        height: a
      })
    }), n('[data-plugin="peity-donut-alt"]').each(function(t, i) {
      n(this).peity("donut")
    }), n('[data-plugin="peity-line"]').each(function(t, i) {
      n(this).peity("line", n(this).data())
    }), n('[data-plugin="peity-bar"]').each(function(t, i) {
      var e = n(this).attr("data-colors") ? n(this).attr("data-colors").split(",") : [],
        o = n(this).attr("data-width") ? n(this).attr("data-width") : 20,
        a = n(this).attr("data-height") ? n(this).attr("data-height") : 20;
      n(this).peity("bar", {
        fill: e,
        width: o,
        height: a
      })
    })
  }, t.prototype.initKnob = function() {
    n('[data-plugin="knob"]').each(function(t, i) {
      n(this).knob()
    })
  }, t.prototype.initTippyTooltips = function() {
    0 < n('[data-plugin="tippy"]').length && tippy('[data-plugin="tippy"]')
  }, t.prototype.init = function() {
    this.initTooltipPlugin(), this.initPopoverPlugin(), this.initToastPlugin(), this.initSlimScrollPlugin(), this.initFormValidation(), this.initCustomModalPlugin(), this.initCounterUp(), this.initPeityCharts(), this.initKnob(), this.initTippyTooltips()
  }, n.Components = new t, n.Components.Constructor = t
}(window.jQuery),
  function(a) {
    "use strict";
    var t = function() {
      this.$body = a("body"), this.$portletIdentifier = ".card", this.$portletCloser = '.card a[data-toggle="remove"]', this.$portletRefresher = '.card a[data-toggle="reload"]'
    };
    t.prototype.init = function() {
      var o = this;
      a(document).on("click", this.$portletCloser, function(t) {
        t.preventDefault();
        var i = a(this).closest(o.$portletIdentifier),
          e = i.parent();
        i.remove(), 0 == e.children().length && e.remove()
      }), a(document).on("click", this.$portletRefresher, function(t) {
        t.preventDefault();
        var i = a(this).closest(o.$portletIdentifier);
        i.append('<div class="card-disabled"><div class="card-portlets-loader"></div></div>');
        var e = i.find(".card-disabled");
        setTimeout(function() {
          e.fadeOut("fast", function() {
            e.remove()
          })
        }, 500 + 5 * Math.random() * 300)
      })
    }, a.Portlet = new t, a.Portlet.Constructor = t
  }(window.jQuery),
  function(e) {
    "use strict";
    var t = function() {
      this.$body = e("body"), this.$window = e(window)
    };
    t.prototype._resetSidebarScroll = function() {
      e(".slimscroll-menu").slimscroll({
        height: "auto",
        position: "right",
        size: "8px",
        color: "#9ea5ab",
        wheelStep: 5,
        touchScrollStep: 20
      })
    }, t.prototype.initMenu = function() {
      var i = this;
      e(".button-menu-mobile").on("click", function(t) {
        t.preventDefault(), i.$body.toggleClass("sidebar-enable"), 768 <= i.$window.width() ? i.$body.toggleClass("enlarged") : i.$body.removeClass("enlarged"), i._resetSidebarScroll()
      }), e("#side-menu").metisMenu(), i._resetSidebarScroll(), e(".right-bar-toggle").on("click", function(t) {
        e("body").toggleClass("right-bar-enabled")
      }), e(document).on("click", "body", function(t) {
        0 < e(t.target).closest(".right-bar-toggle, .right-bar").length || 0 < e(t.target).closest(".left-side-menu, .side-nav").length || e(t.target).hasClass("button-menu-mobile") || 0 < e(t.target).closest(".button-menu-mobile").length || (e("body").removeClass("right-bar-enabled"), e("body").removeClass("sidebar-enable"))
      }), e("#side-menu a").each(function() {
        var t = window.location.href.split(/[?#]/)[0];
        this.href == t && (e(this).addClass("active"), e(this).parent().addClass("active"), e(this).parent().parent().addClass("in"), e(this).parent().parent().prev().addClass("active"), e(this).parent().parent().parent().addClass("active"), e(this).parent().parent().parent().parent().addClass("in"), e(this).parent().parent().parent().parent().parent().addClass("active"))
      }), e(".navbar-toggle").on("click", function(t) {
        e(this).toggleClass("open"), e("#navigation").slideToggle(400)
      }), e(window).on("load", function() {
        e("#status").fadeOut(), e("#preloader").delay(350).fadeOut("slow")
      })
    }, t.prototype.initLayout = function() {
      768 <= this.$window.width() && this.$window.width() <= 1028 ? this.$body.addClass("enlarged") : 1 != this.$body.data("keep-enlarged") && this.$body.removeClass("enlarged")
    }, t.prototype.init = function() {
      var i = this;
      this.initLayout(), e.Portlet.init(), this.initMenu(), e.Components.init(), i.$window.on("resize", function(t) {
        t.preventDefault(), i.initLayout(), i._resetSidebarScroll()
      })
    }, e.App = new t, e.App.Constructor = t
  }(window.jQuery),
  function(t) {
    "use strict";
    window.jQuery.App.init()
  }(), Waves.init();

// owl-carousel


// owl-carousel end
