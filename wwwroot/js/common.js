!function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var i = n[r] = {i: r, l: !1, exports: {}};
    return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
  }

  var n = {};
  t.m = e, t.c = n, t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return t.d(n, "a", n), n
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, t.p = "", t(t.s = 0)
}({
  "+27R": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, n, r) {
        var i = {
          s: ["thodde secondanim", "thodde second"],
          ss: [e + " secondanim", e + " second"],
          m: ["eka mintan", "ek minute"],
          mm: [e + " mintanim", e + " mintam"],
          h: ["eka horan", "ek hor"],
          hh: [e + " horanim", e + " hor"],
          d: ["eka disan", "ek dis"],
          dd: [e + " disanim", e + " dis"],
          M: ["eka mhoinean", "ek mhoino"],
          MM: [e + " mhoineanim", e + " mhoine"],
          y: ["eka vorsan", "ek voros"],
          yy: [e + " vorsanim", e + " vorsam"]
        };
        return t ? i[n][0] : i[n][1]
      }

      return e.defineLocale("gom-latn", {
        months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
        monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
        weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
        weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "A h:mm [vazta]",
          LTS: "A h:mm:ss [vazta]",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY A h:mm [vazta]",
          LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
          llll: "ddd, D MMM YYYY, A h:mm [vazta]"
        },
        calendar: {
          sameDay: "[Aiz] LT",
          nextDay: "[Faleam] LT",
          nextWeek: "[Ieta to] dddd[,] LT",
          lastDay: "[Kal] LT",
          lastWeek: "[Fatlo] dddd[,] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s",
          past: "%s adim",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er)/,
        ordinal: function (e, t) {
          switch (t) {
            case"D":
              return e + "er";
            default:
            case"M":
            case"Q":
            case"DDD":
            case"d":
            case"w":
            case"W":
              return e
          }
        },
        week: {dow: 1, doy: 4},
        meridiemParse: /rati|sokalli|donparam|sanje/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
        }
      })
    })
  }, "+7/x": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦"},
        n = {"௧": "1", "௨": "2", "௩": "3", "௪": "4", "௫": "5", "௬": "6", "௭": "7", "௮": "8", "௯": "9", "௦": "0"};
      return e.defineLocale("ta", {
        months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
        monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
        weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
        weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
        weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, HH:mm",
          LLLL: "dddd, D MMMM YYYY, HH:mm"
        },
        calendar: {
          sameDay: "[இன்று] LT",
          nextDay: "[நாளை] LT",
          nextWeek: "dddd, LT",
          lastDay: "[நேற்று] LT",
          lastWeek: "[கடந்த வாரம்] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s இல்",
          past: "%s முன்",
          s: "ஒரு சில விநாடிகள்",
          ss: "%d விநாடிகள்",
          m: "ஒரு நிமிடம்",
          mm: "%d நிமிடங்கள்",
          h: "ஒரு மணி நேரம்",
          hh: "%d மணி நேரம்",
          d: "ஒரு நாள்",
          dd: "%d நாட்கள்",
          M: "ஒரு மாதம்",
          MM: "%d மாதங்கள்",
          y: "ஒரு வருடம்",
          yy: "%d ஆண்டுகள்"
        },
        dayOfMonthOrdinalParse: /\d{1,2}வது/,
        ordinal: function (e) {
          return e + "வது"
        },
        preparse: function (e) {
          return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem: function (e, t, n) {
          return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
        },
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
        },
        week: {dow: 0, doy: 6}
      })
    })
  }, "+HV4": function (e, t) {
    e.exports = {
      props: ["availableAbilities"], data: function () {
        return {showingToken: null, allAbilitiesAssigned: !1, form: new SparkForm({name: "", abilities: []})}
      }, computed: {
        copyCommandSupported: function () {
          return document.queryCommandSupported("copy")
        }
      }, watch: {
        availableAbilities: function () {
          this.availableAbilities.length > 0 && this.assignDefaultAbilities()
        }
      }, methods: {
        assignDefaultAbilities: function () {
          var e = _.filter(this.availableAbilities, function (e) {
            return e.default
          });
          this.form.abilities = _.pluck(e, "value")
        }, assignAllAbilities: function () {
          this.allAbilitiesAssigned = !0, this.form.abilities = _.pluck(this.availableAbilities, "value")
        }, removeAllAbilities: function () {
          this.allAbilitiesAssigned = !1, this.form.abilities = []
        }, toggleAbility: function (e) {
          this.abilityIsAssigned(e) ? this.form.abilities = _.reject(this.form.abilities, function (t) {
            return t == e
          }) : this.form.abilities.push(e)
        }, abilityIsAssigned: function (e) {
          return _.contains(this.form.abilities, e)
        }, create: function () {
          var e = this;
          Spark.post("/settings/api/token", this.form).then(function (t) {
            e.showToken(t.token), e.resetForm(), e.$parent.$emit("updateTokens")
          })
        }, showToken: function (e) {
          this.showingToken = e, $("#modal-show-token").modal("show")
        }, selectToken: function () {
          $("#api-token").select(), this.copyCommandSupported && document.execCommand("copy")
        }, resetForm: function () {
          this.form.name = "", this.assignDefaultAbilities(), this.allAbilitiesAssigned = !1
        }
      }
    }
  }, "+y3I": function (e, t) {
    e.exports = {
      post: function (e, t) {
        return Spark.sendForm("post", e, t)
      }, put: function (e, t) {
        return Spark.sendForm("put", e, t)
      }, patch: function (e, t) {
        return Spark.sendForm("patch", e, t)
      }, delete: function (e, t) {
        return Spark.sendForm("delete", e, t)
      }, sendForm: function (e, t, n) {
        return new Promise(function (r, i) {
          n.startProcessing(), axios[e](t, JSON.parse(JSON.stringify(n))).then(function (e) {
            n.finishProcessing(), r(e.data)
          }).catch(function (e) {
            n.setErrors(e.response.data.errors), i(e.response.data)
          })
        })
      }
    }
  }, "/6P1": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, n, i) {
        return t ? r(n)[0] : i ? r(n)[1] : r(n)[2]
      }

      function n(e) {
        return e % 10 == 0 || e > 10 && e < 20
      }

      function r(e) {
        return a[e].split("_")
      }

      function i(e, i, a, s) {
        var o = e + " ";
        return 1 === e ? o + t(0, i, a[0], s) : i ? o + (n(e) ? r(a)[1] : r(a)[0]) : s ? o + r(a)[1] : o + (n(e) ? r(a)[1] : r(a)[2])
      }

      var a = {
        ss: "sekundė_sekundžių_sekundes",
        m: "minutė_minutės_minutę",
        mm: "minutės_minučių_minutes",
        h: "valanda_valandos_valandą",
        hh: "valandos_valandų_valandas",
        d: "diena_dienos_dieną",
        dd: "dienos_dienų_dienas",
        M: "mėnuo_mėnesio_mėnesį",
        MM: "mėnesiai_mėnesių_mėnesius",
        y: "metai_metų_metus",
        yy: "metai_metų_metus"
      };
      return e.defineLocale("lt", {
        months: {
          format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
          standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
          isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
        weekdays: {
          format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
          standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
          isFormat: /dddd HH:mm/
        },
        weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
        weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY [m.] MMMM D [d.]",
          LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
          LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
          l: "YYYY-MM-DD",
          ll: "YYYY [m.] MMMM D [d.]",
          lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
          llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
        },
        calendar: {
          sameDay: "[Šiandien] LT",
          nextDay: "[Rytoj] LT",
          nextWeek: "dddd LT",
          lastDay: "[Vakar] LT",
          lastWeek: "[Praėjusį] dddd LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "po %s", past: "prieš %s", s: function (e, t, n, r) {
            return t ? "kelios sekundės" : r ? "kelių sekundžių" : "kelias sekundes"
          }, ss: i, m: t, mm: i, h: t, hh: i, d: t, dd: i, M: t, MM: i, y: t, yy: i
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: function (e) {
          return e + "-oji"
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, "/bsm": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("uz-latn", {
        months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
        monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
        weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
        weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
        weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
          sameDay: "[Bugun soat] LT [da]",
          nextDay: "[Ertaga] LT [da]",
          nextWeek: "dddd [kuni soat] LT [da]",
          lastDay: "[Kecha soat] LT [da]",
          lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
          sameElse: "L"
        },
        relativeTime: {
          future: "Yaqin %s ichida",
          past: "Bir necha %s oldin",
          s: "soniya",
          ss: "%d soniya",
          m: "bir daqiqa",
          mm: "%d daqiqa",
          h: "bir soat",
          hh: "%d soat",
          d: "bir kun",
          dd: "%d kun",
          M: "bir oy",
          MM: "%d oy",
          y: "bir yil",
          yy: "%d yil"
        },
        week: {dow: 1, doy: 7}
      })
    })
  }, "/mhn": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"},
        n = {"१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"};
      return e.defineLocale("ne", {
        months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
        monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
        monthsParseExact: !0,
        weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
        weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
        weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "Aको h:mm बजे",
          LTS: "Aको h:mm:ss बजे",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, Aको h:mm बजे",
          LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
        },
        calendar: {
          sameDay: "[आज] LT",
          nextDay: "[भोलि] LT",
          nextWeek: "[आउँदो] dddd[,] LT",
          lastDay: "[हिजो] LT",
          lastWeek: "[गएको] dddd[,] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%sमा",
          past: "%s अगाडि",
          s: "केही क्षण",
          ss: "%d सेकेण्ड",
          m: "एक मिनेट",
          mm: "%d मिनेट",
          h: "एक घण्टा",
          hh: "%d घण्टा",
          d: "एक दिन",
          dd: "%d दिन",
          M: "एक महिना",
          MM: "%d महिना",
          y: "एक बर्ष",
          yy: "%d बर्ष"
        },
        week: {dow: 0, doy: 6}
      })
    })
  }, "/oMe": function (e, t) {
    e.exports = {
      props: ["team", "invitations"], methods: {
        cancel: function (e) {
          var t = this;
          axios.delete("/settings/invitations/" + e.id).then(function () {
            t.$parent.$emit("updateInvitations")
          })
        }
      }
    }
  }, 0: function (e, t, n) {
    n("sV/x"), n("1CH1"), e.exports = n("2I+f")
  }, "0SKO": function (e, t) {
    e.exports = {
      data: function () {
        return {
          announcements: [],
          updatingAnnouncement: null,
          deletingAnnouncement: null,
          createForm: new SparkForm({body: "", action_text: "", action_url: ""}),
          updateForm: new SparkForm({body: "", action_text: "", action_url: ""}),
          deleteForm: new SparkForm({})
        }
      }, created: function () {
        var e = this;
        Bus.$on("sparkHashChanged", function (t, n) {
          "announcements" == t && 0 === e.announcements.length && e.getAnnouncements()
        })
      }, methods: {
        getAnnouncements: function () {
          var e = this;
          axios.get("/spark/kiosk/announcements").then(function (t) {
            e.announcements = t.data
          })
        }, create: function () {
          var e = this;
          Spark.post("/spark/kiosk/announcements", this.createForm).then(function () {
            e.createForm = new SparkForm({body: "", action_text: "", action_url: ""}), e.getAnnouncements()
          })
        }, editAnnouncement: function (e) {
          this.updatingAnnouncement = e, this.updateForm.icon = e.icon, this.updateForm.body = e.body, this.updateForm.action_text = e.action_text, this.updateForm.action_url = e.action_url, $("#modal-update-announcement").modal("show")
        }, update: function () {
          var e = this;
          Spark.put("/spark/kiosk/announcements/" + this.updatingAnnouncement.id, this.updateForm).then(function () {
            e.getAnnouncements(), $("#modal-update-announcement").modal("hide")
          })
        }, approveAnnouncementDelete: function (e) {
          this.deletingAnnouncement = e, $("#modal-delete-announcement").modal("show")
        }, deleteAnnouncement: function () {
          var e = this;
          Spark.delete("/spark/kiosk/announcements/" + this.deletingAnnouncement.id, this.deleteForm).then(function () {
            e.getAnnouncements(), $("#modal-delete-announcement").modal("hide")
          })
        }
      }
    }
  }, "0X8Q": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("vi", {
        months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
        monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
        monthsParseExact: !0,
        weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
        weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysParseExact: !0,
        meridiemParse: /sa|ch/i,
        isPM: function (e) {
          return /^ch$/i.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM [năm] YYYY",
          LLL: "D MMMM [năm] YYYY HH:mm",
          LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
          l: "DD/M/YYYY",
          ll: "D MMM YYYY",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Hôm nay lúc] LT",
          nextDay: "[Ngày mai lúc] LT",
          nextWeek: "dddd [tuần tới lúc] LT",
          lastDay: "[Hôm qua lúc] LT",
          lastWeek: "dddd [tuần rồi lúc] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s tới",
          past: "%s trước",
          s: "vài giây",
          ss: "%d giây",
          m: "một phút",
          mm: "%d phút",
          h: "một giờ",
          hh: "%d giờ",
          d: "một ngày",
          dd: "%d ngày",
          M: "một tháng",
          MM: "%d tháng",
          y: "một năm",
          yy: "%d năm"
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function (e) {
          return e
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, "0w46": function (e, t, n) {
    var r = n("gfpj");
    Vue.component("spark-update-password", {mixins: [r]})
  }, "162o": function (e, t, n) {
    function r(e, t) {
      this._id = e, this._clearFn = t
    }

    var i = Function.prototype.apply;
    t.setTimeout = function () {
      return new r(i.call(setTimeout, window, arguments), clearTimeout)
    }, t.setInterval = function () {
      return new r(i.call(setInterval, window, arguments), clearInterval)
    }, t.clearTimeout = t.clearInterval = function (e) {
      e && e.close()
    }, r.prototype.unref = r.prototype.ref = function () {
    }, r.prototype.close = function () {
      this._clearFn.call(window, this._id)
    }, t.enroll = function (e, t) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = t
    }, t.unenroll = function (e) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
    }, t._unrefActive = t.active = function (e) {
      clearTimeout(e._idleTimeoutId);
      var t = e._idleTimeout;
      t >= 0 && (e._idleTimeoutId = setTimeout(function () {
        e._onTimeout && e._onTimeout()
      }, t))
    }, n("mypn"), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate
  }, "1CH1": function (e, t) {
  }, "1It7": function (e, t) {
    e.exports = {
      props: ["user", "plans"], data: function () {
        return {loading: !1, profile: null, revenue: 0}
      }, created: function () {
        var e = this;
        this.$parent.$on("showUserProfile", function (t) {
          e.getUserProfile(t)
        })
      }, mounted: function () {
        var e = this;
        Mousetrap.bind("esc", function (t) {
          return e.showSearch()
        })
      }, methods: {
        getUserProfile: function (e) {
          var t = this;
          this.loading = !0, axios.get("/spark/kiosk/users/" + e + "/profile").then(function (e) {
            t.profile = e.data.user, t.revenue = e.data.revenue, t.loading = !1
          })
        }, impersonate: function (e) {
          window.location = "/spark/kiosk/users/impersonate/" + e.id
        }, addDiscount: function (e) {
          Bus.$emit("addDiscount", e)
        }, activePlan: function (e) {
          if (this.activeSubscription(e)) {
            var t = this.activeSubscription(e);
            return _.find(this.plans, function (e) {
              return e.id == t.provider_plan
            })
          }
        }, activeSubscription: function (e) {
          var t = this.subscription(e);
          if (!(!t || t.ends_at && moment.utc().isAfter(moment.utc(t.ends_at)))) return t
        }, subscription: function (e) {
          if (e) {
            var t = _.find(e.subscriptions, function (e) {
              return "default" == e.name
            });
            return void 0 !== t ? t : void 0
          }
        }, customerUrlOnBillingProvider: function (e) {
          if (e) {
            if (this.spark.usesStripe) return "https://dashboard.stripe.com/customers/" + e.stripe_id;
            return "https://" + ("production" == Spark.env ? "" : "sandbox.") + "braintreegateway.com/merchants/" + Spark.braintreeMerchantId + "/customers/" + e.braintree_id
          }
        }, showSearch: function () {
          this.$parent.$emit("showSearch"), this.profile = null
        }
      }
    }
  }, "21It": function (e, t, n) {
    "use strict";
    var r = n("FtD3");
    e.exports = function (e, t, n) {
      var i = n.config.validateStatus;
      n.status && i && !i(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n)) : e(n)
    }
  }, "28dp": function (e, t) {
    e.exports = {props: ["user", "team"]}
  }, "2I+f": function (e, t) {
  }, "2pmY": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰"},
        n = {"۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "۰": "0"};
      return e.defineLocale("fa", {
        months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function (e) {
          return /بعد از ظهر/.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
        },
        calendar: {
          sameDay: "[امروز ساعت] LT",
          nextDay: "[فردا ساعت] LT",
          nextWeek: "dddd [ساعت] LT",
          lastDay: "[دیروز ساعت] LT",
          lastWeek: "dddd [پیش] [ساعت] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "در %s",
          past: "%s پیش",
          s: "چند ثانیه",
          ss: "ثانیه d%",
          m: "یک دقیقه",
          mm: "%d دقیقه",
          h: "یک ساعت",
          hh: "%d ساعت",
          d: "یک روز",
          dd: "%d روز",
          M: "یک ماه",
          MM: "%d ماه",
          y: "یک سال",
          yy: "%d سال"
        },
        preparse: function (e) {
          return e.replace(/[۰-۹]/g, function (e) {
            return n[e]
          }).replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          }).replace(/,/g, "،")
        },
        dayOfMonthOrdinalParse: /\d{1,2}م/,
        ordinal: "%dم",
        week: {dow: 6, doy: 12}
      })
    })
  }, "2s1U": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, n, r) {
        var i = e + " ";
        switch (n) {
          case"s":
            return t || r ? "nekaj sekund" : "nekaj sekundami";
          case"ss":
            return i += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || r ? "sekundi" : "sekundah" : e < 5 ? t || r ? "sekunde" : "sekundah" : "sekund";
          case"m":
            return t ? "ena minuta" : "eno minuto";
          case"mm":
            return i += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || r ? "minuti" : "minutama" : e < 5 ? t || r ? "minute" : "minutami" : t || r ? "minut" : "minutami";
          case"h":
            return t ? "ena ura" : "eno uro";
          case"hh":
            return i += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || r ? "uri" : "urama" : e < 5 ? t || r ? "ure" : "urami" : t || r ? "ur" : "urami";
          case"d":
            return t || r ? "en dan" : "enim dnem";
          case"dd":
            return i += 1 === e ? t || r ? "dan" : "dnem" : 2 === e ? t || r ? "dni" : "dnevoma" : t || r ? "dni" : "dnevi";
          case"M":
            return t || r ? "en mesec" : "enim mesecem";
          case"MM":
            return i += 1 === e ? t || r ? "mesec" : "mesecem" : 2 === e ? t || r ? "meseca" : "mesecema" : e < 5 ? t || r ? "mesece" : "meseci" : t || r ? "mesecev" : "meseci";
          case"y":
            return t || r ? "eno leto" : "enim letom";
          case"yy":
            return i += 1 === e ? t || r ? "leto" : "letom" : 2 === e ? t || r ? "leti" : "letoma" : e < 5 ? t || r ? "leta" : "leti" : t || r ? "let" : "leti"
        }
      }

      return e.defineLocale("sl", {
        months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
        weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
        weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[v] [nedeljo] [ob] LT";
              case 3:
                return "[v] [sredo] [ob] LT";
              case 6:
                return "[v] [soboto] [ob] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[v] dddd [ob] LT"
            }
          }, lastDay: "[včeraj ob] LT", lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[prejšnjo] [nedeljo] [ob] LT";
              case 3:
                return "[prejšnjo] [sredo] [ob] LT";
              case 6:
                return "[prejšnjo] [soboto] [ob] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[prejšnji] dddd [ob] LT"
            }
          }, sameElse: "L"
        },
        relativeTime: {
          future: "čez %s",
          past: "pred %s",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
      })
    })
  }, "3CJN": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("af", {
        months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
        weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
        weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
        meridiemParse: /vm|nm/i,
        isPM: function (e) {
          return /^nm$/i.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Vandag om] LT",
          nextDay: "[Môre om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[Gister om] LT",
          lastWeek: "[Laas] dddd [om] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "oor %s",
          past: "%s gelede",
          s: "'n paar sekondes",
          ss: "%d sekondes",
          m: "'n minuut",
          mm: "%d minute",
          h: "'n uur",
          hh: "%d ure",
          d: "'n dag",
          dd: "%d dae",
          M: "'n maand",
          MM: "%d maande",
          y: "'n jaar",
          yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, "3Cgm": function (e, t, n) {
    "use strict";
    (function (t) {
      function n(e) {
        s.length || (a(), !0), s[s.length] = e
      }

      function r() {
        for (; o < s.length;) {
          var e = o;
          if (o += 1, s[e].call(), o > u) {
            for (var t = 0, n = s.length - o; t < n; t++) s[t] = s[t + o];
            s.length -= o, o = 0
          }
        }
        s.length = 0, o = 0, !1
      }

      function i(e) {
        return function () {
          function t() {
            clearTimeout(n), clearInterval(r), e()
          }

          var n = setTimeout(t, 0), r = setInterval(t, 50)
        }
      }

      e.exports = n;
      var a, s = [], o = 0, u = 1024, d = void 0 !== t ? t : self, l = d.MutationObserver || d.WebKitMutationObserver;
      a = "function" == typeof l ? function (e) {
        var t = 1, n = new l(e), r = document.createTextNode("");
        return n.observe(r, {characterData: !0}), function () {
          t = -t, r.data = t
        }
      }(r) : i(r), n.requestFlush = a, n.makeRequestCallFromTimer = i
    }).call(t, n("DuR2"))
  }, "3IRH": function (e, t) {
    e.exports = function (e) {
      return e.webpackPolyfill || (e.deprecate = function () {
      }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
        enumerable: !0,
        get: function () {
          return e.l
        }
      }), Object.defineProperty(e, "id", {
        enumerable: !0, get: function () {
          return e.i
        }
      }), e.webpackPolyfill = 1), e
    }
  }, "3K28": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
        n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
        i = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      return e.defineLocale("nl", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function (e, r) {
          return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
        },
        monthsRegex: i,
        monthsShortRegex: i,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: r,
        longMonthsParse: r,
        shortMonthsParse: r,
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[vandaag om] LT",
          nextDay: "[morgen om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[gisteren om] LT",
          lastWeek: "[afgelopen] dddd [om] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "over %s",
          past: "%s geleden",
          s: "een paar seconden",
          ss: "%d seconden",
          m: "één minuut",
          mm: "%d minuten",
          h: "één uur",
          hh: "%d uur",
          d: "één dag",
          dd: "%d dagen",
          M: "één maand",
          MM: "%d maanden",
          y: "één jaar",
          yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, "3LKG": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("tl-ph", {
        months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
        monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
        weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
        weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
        weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "MM/D/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY HH:mm",
          LLLL: "dddd, MMMM DD, YYYY HH:mm"
        },
        calendar: {
          sameDay: "LT [ngayong araw]",
          nextDay: "[Bukas ng] LT",
          nextWeek: "LT [sa susunod na] dddd",
          lastDay: "LT [kahapon]",
          lastWeek: "LT [noong nakaraang] dddd",
          sameElse: "L"
        },
        relativeTime: {
          future: "sa loob ng %s",
          past: "%s ang nakalipas",
          s: "ilang segundo",
          ss: "%d segundo",
          m: "isang minuto",
          mm: "%d minuto",
          h: "isang oras",
          hh: "%d oras",
          d: "isang araw",
          dd: "%d araw",
          M: "isang buwan",
          MM: "%d buwan",
          y: "isang taon",
          yy: "%d taon"
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function (e) {
          return e
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, "3MVc": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"},
        n = {"١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0"},
        r = function (e) {
          return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
        }, i = {
          s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
          m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
          h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
          d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
          M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
          y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
        }, a = function (e) {
          return function (t, n, a, s) {
            var o = r(t), u = i[e][r(t)];
            return 2 === o && (u = u[n ? 0 : 1]), u.replace(/%d/i, t)
          }
        },
        s = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
      return e.defineLocale("ar", {
        months: s,
        monthsShort: s,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/‏M/‏YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return "م" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ص" : "م"
        },
        calendar: {
          sameDay: "[اليوم عند الساعة] LT",
          nextDay: "[غدًا عند الساعة] LT",
          nextWeek: "dddd [عند الساعة] LT",
          lastDay: "[أمس عند الساعة] LT",
          lastWeek: "dddd [عند الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "بعد %s",
          past: "منذ %s",
          s: a("s"),
          ss: a("s"),
          m: a("m"),
          mm: a("m"),
          h: a("h"),
          hh: a("h"),
          d: a("d"),
          dd: a("d"),
          M: a("M"),
          MM: a("M"),
          y: a("y"),
          yy: a("y")
        },
        preparse: function (e) {
          return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
            return n[e]
          }).replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          }).replace(/,/g, "،")
        },
        week: {dow: 6, doy: 12}
      })
    })
  }, "3NMv": function (e, t, n) {
    n("O8i7"), n("Urcl"), n("ZZ6T"), n("f8Wh"), n("NPjm"), n("bgEZ"), n("JOHR"), n("UoMm"), n("EUOT"), n("dbz2"), n("Yoq8"), n("nJNd"), n("UJGw"), n("cJvY"), n("yUhJ"), n("vv3I"), n("g3IF"), n("V7yC"), n("ASHV"), n("lrvf"), n("lhkr"), n("0w46"), n("edMn"), n("ZnSc"), n("rj03"), n("wqZo"), n("IR0Y"), n("XIq/"), n("ytNC"), n("bl2t"), n("QJq7"), n("Dulf"), n("SV5M"), n("3yki"), n("G1kv"), n("zztV"), n("dBEZ"), n("O7hI"), n("7D4p"), n("3hrd"), n("wAJi"), n("bPdR"), n("K0T2"), n("uJUn"), n("Hdg1"), n("3Yt5"), n("Zq1x"), n("wRu/")
  }, "3Yt5": function (e, t, n) {
    var r = n("yb2c");
    Vue.component("spark-kiosk-users", {mixins: [r]})
  }, "3hfc": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, n) {
        return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + function (e, t) {
          var n = e.split("_");
          return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
        }({
          ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
          mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
          hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
          dd: "дзень_дні_дзён",
          MM: "месяц_месяцы_месяцаў",
          yy: "год_гады_гадоў"
        }[n], +e)
      }

      return e.defineLocale("be", {
        months: {
          format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
          standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
        },
        monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
        weekdays: {
          format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
          standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
          isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
        },
        weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY г.",
          LLL: "D MMMM YYYY г., HH:mm",
          LLLL: "dddd, D MMMM YYYY г., HH:mm"
        },
        calendar: {
          sameDay: "[Сёння ў] LT", nextDay: "[Заўтра ў] LT", lastDay: "[Учора ў] LT", nextWeek: function () {
            return "[У] dddd [ў] LT"
          }, lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return "[У мінулую] dddd [ў] LT";
              case 1:
              case 2:
              case 4:
                return "[У мінулы] dddd [ў] LT"
            }
          }, sameElse: "L"
        },
        relativeTime: {
          future: "праз %s",
          past: "%s таму",
          s: "некалькі секунд",
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: "дзень",
          dd: t,
          M: "месяц",
          MM: t,
          y: "год",
          yy: t
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM: function (e) {
          return /^(дня|вечара)$/.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function (e, t) {
          switch (t) {
            case"M":
            case"d":
            case"DDD":
            case"w":
            case"W":
              return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
            case"D":
              return e + "-га";
            default:
              return e
          }
        },
        week: {dow: 1, doy: 7}
      })
    })
  }, "3hrd": function (e, t, n) {
    var r = n("3xS2");
    Vue.component("spark-invoices", {mixins: [r]})
  }, "3xS2": function (e, t) {
    e.exports = {
      props: ["user", "team", "billableType"], data: function () {
        return {invoices: []}
      }, mounted: function () {
        this.getInvoices()
      }, methods: {
        getInvoices: function () {
          var e = this;
          axios.get(this.urlForInvoices).then(function (t) {
            e.invoices = _.filter(t.data, function (e) {
              return "$0.00" != e.total
            })
          })
        }
      }, computed: {
        urlForInvoices: function () {
          return this.billingUser ? "/settings/invoices" : "/settings/" + Spark.pluralTeamString + "/" + this.team.id + "/invoices"
        }
      }
    }
  }, "3yki": function (e, t, n) {
    var r = n("9S6p");
    Vue.component("spark-payment-method-stripe", {mixins: [r]})
  }, "40GM": function (e, t, n) {
    e.exports = {
      props: ["user", "team", "plans", "billableType"], mixins: [n("OeAR"), n("jJ7H")], data: function () {
        return {confirmingPlan: null}
      }, mounted: function () {
        var e = this;
        this.selectActivePlanInterval(), this.$watch("activePlan", function (t) {
          e.selectActivePlanInterval()
        }), this.onlyHasYearlyPlans && this.showYearlyPlans()
      }, methods: {
        confirmPlanUpdate: function (e) {
          this.confirmingPlan = e, $("#modal-confirm-plan-update").modal("show")
        }, approvePlanUpdate: function () {
          $("#modal-confirm-plan-update").modal("hide"), this.updateSubscription(this.confirmingPlan)
        }, selectActivePlanInterval: function () {
          this.activePlanIsMonthly || 0 == this.yearlyPlans.length ? this.showMonthlyPlans() : this.showYearlyPlans()
        }, showPlanDetails: function (e) {
          this.$parent.$emit("showPlanDetails", e)
        }, priceWithTax: function (e) {
          return e.price + e.price * (this.billable.tax_rate / 100)
        }
      }
    }
  }, "40eO": function (e, t) {
    e.exports = {
      data: function () {
        return {plans: [], selectedPlan: null, invitation: null, invalidInvitation: !1}
      }, methods: {
        getPlans: function () {
          var e = this;
          Spark.cardUpFront && axios.get("/spark/plans").then(function (t) {
            var n = t.data;
            e.plans = _.where(n, {type: "user"}).length > 0 ? _.where(n, {type: "user"}) : _.where(n, {type: "team"}), e.selectAppropriateDefaultPlan()
          })
        }, getInvitation: function () {
          var e = this;
          axios.get("/invitations/" + this.query.invitation).then(function (t) {
            e.invitation = t.data
          }).catch(function (t) {
            e.invalidInvitation = !0
          })
        }, selectAppropriateDefaultPlan: function () {
          this.query.plan ? this.selectPlanById(this.query.plan) || this.selectPlanByName(this.query.plan) : this.query.invitation ? this.selectFreePlan() : this.paidPlansForActiveInterval.length > 0 ? this.selectPlan(this.paidPlansForActiveInterval[0]) : this.selectFreePlan(), this.shouldShowYearlyPlans() && this.showYearlyPlans()
        }, selectFreePlan: function () {
          var e = _.find(this.plans, function (e) {
            return 0 === e.price
          });
          void 0 !== e && this.selectPlan(e)
        }, selectPlanById: function (e) {
          var t = this;
          return _.each(this.plans, function (n) {
            n.id == e && t.selectPlan(n)
          }), this.selectedPlan
        }, selectPlanByName: function (e) {
          var t = this;
          return _.each(this.plans, function (n) {
            n.name == e && t.selectPlan(n)
          }), this.selectedPlan
        }, isSelected: function (e) {
          return this.selectedPlan && e.id == this.selectedPlan.id
        }, selectPlan: function (e) {
          this.selectedPlan = e, this.registerForm.plan = e.id
        }, shouldShowYearlyPlans: function () {
          return 0 == this.monthlyPlans.length && this.yearlyPlans.length > 0 || "yearly" == this.selectedPlan.interval
        }
      }
    }
  }, "442e": function (e, t) {
    +function (e) {
      "use strict";

      function t(t) {
        var n = t.attr("data-target");
        n || (n = (n = t.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && e(n);
        return r && r.length ? r : t.parent()
      }

      function n(n) {
        n && 3 === n.which || (e(r).remove(), e(i).each(function () {
          var r = e(this), i = t(r), a = {relatedTarget: this};
          i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(i[0], n.target) || (i.trigger(n = e.Event("hide.bs.dropdown", a)), n.isDefaultPrevented() || (r.attr("aria-expanded", "false"), i.removeClass("open").trigger(e.Event("hidden.bs.dropdown", a)))))
        }))
      }

      var r = ".dropdown-backdrop", i = '[data-toggle="dropdown"]', a = function (t) {
        e(t).on("click.bs.dropdown", this.toggle)
      };
      a.VERSION = "3.3.7", a.prototype.toggle = function (r) {
        var i = e(this);
        if (!i.is(".disabled, :disabled")) {
          var a = t(i), s = a.hasClass("open");
          if (n(), !s) {
            "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
            var o = {relatedTarget: this};
            if (a.trigger(r = e.Event("show.bs.dropdown", o)), r.isDefaultPrevented()) return;
            i.trigger("focus").attr("aria-expanded", "true"), a.toggleClass("open").trigger(e.Event("shown.bs.dropdown", o))
          }
          return !1
        }
      }, a.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
          var r = e(this);
          if (n.preventDefault(), n.stopPropagation(), !r.is(".disabled, :disabled")) {
            var a = t(r), s = a.hasClass("open");
            if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && a.find(i).trigger("focus"), r.trigger("click");
            var o = a.find(".dropdown-menu li:not(.disabled):visible a");
            if (o.length) {
              var u = o.index(n.target);
              38 == n.which && u > 0 && u--, 40 == n.which && u < o.length - 1 && u++, ~u || (u = 0), o.eq(u).trigger("focus")
            }
          }
        }
      };
      var s = e.fn.dropdown;
      e.fn.dropdown = function (t) {
        return this.each(function () {
          var n = e(this), r = n.data("bs.dropdown");
          r || n.data("bs.dropdown", r = new a(this)), "string" == typeof t && r[t].call(n)
        })
      }, e.fn.dropdown.Constructor = a, e.fn.dropdown.noConflict = function () {
        return e.fn.dropdown = s, this
      }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
        e.stopPropagation()
      }).on("click.bs.dropdown.data-api", i, a.prototype.toggle).on("keydown.bs.dropdown.data-api", i, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
    }(jQuery)
  }, "4JpW": function (e, t) {
    e.exports = {
      props: ["user", "team"], data: function () {
        return {
          roles: [],
          updatingTeamMember: null,
          deletingTeamMember: null,
          updateTeamMemberForm: $.extend(!0, new SparkForm({role: ""}), Spark.forms.updateTeamMember),
          deleteTeamMemberForm: new SparkForm({})
        }
      }, created: function () {
        this.getRoles()
      }, methods: {
        getRoles: function () {
          var e = this;
          axios.get("/settings/" + Spark.pluralTeamString + "/roles").then(function (t) {
            e.roles = t.data
          })
        }, editTeamMember: function (e) {
          this.updatingTeamMember = e, this.updateTeamMemberForm.role = e.pivot.role, $("#modal-update-team-member").modal("show")
        }, update: function () {
          Spark.put(this.urlForUpdating, this.updateTeamMemberForm).then(function () {
            Bus.$emit("updateTeam"), $("#modal-update-team-member").modal("hide")
          })
        }, approveTeamMemberDelete: function (e) {
          this.deletingTeamMember = e, $("#modal-delete-member").modal("show")
        }, deleteMember: function () {
          Spark.delete(this.urlForDeleting, this.deleteTeamMemberForm).then(function () {
            Bus.$emit("updateTeam"), $("#modal-delete-member").modal("hide")
          })
        }, canEditTeamMember: function (e) {
          return this.user.id === this.team.owner_id && this.user.id !== e.id
        }, canDeleteTeamMember: function (e) {
          return this.user.id === this.team.owner_id && this.user.id !== e.id
        }, teamMemberRole: function (e) {
          if (0 == this.roles.length) return "";
          if ("owner" == e.pivot.role) return "Owner";
          var t = _.find(this.roles, function (t) {
            return t.value == e.pivot.role
          });
          return void 0 !== t ? t.text : void 0
        }
      }, computed: {
        urlForUpdating: function () {
          return "/settings/" + Spark.pluralTeamString + "/" + this.team.id + "/members/" + this.updatingTeamMember.id
        }, urlForDeleting: function () {
          return "/settings/" + Spark.pluralTeamString + "/" + this.team.id + "/members/" + this.deletingTeamMember.id
        }
      }
    }
  }, "4bK6": function (e, t, n) {
    (function (t, n) {
      !function (t, n) {
        e.exports = n()
      }(0, function () {
        "use strict";

        function e(e) {
          return void 0 === e || null === e
        }

        function r(e) {
          return void 0 !== e && null !== e
        }

        function i(e) {
          return !0 === e
        }

        function a(e) {
          return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e
        }

        function s(e) {
          return null !== e && "object" == typeof e
        }

        function o(e) {
          return Un.call(e).slice(8, -1)
        }

        function u(e) {
          return "[object Object]" === Un.call(e)
        }

        function d(e) {
          return "[object RegExp]" === Un.call(e)
        }

        function l(e) {
          var t = parseFloat(String(e));
          return t >= 0 && Math.floor(t) === t && isFinite(e)
        }

        function c(e) {
          return null == e ? "" : "object" == typeof e ? JSON.stringify(e, null, 2) : String(e)
        }

        function h(e) {
          var t = parseFloat(e);
          return isNaN(t) ? e : t
        }

        function f(e, t) {
          for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) n[r[i]] = !0;
          return t ? function (e) {
            return n[e.toLowerCase()]
          } : function (e) {
            return n[e]
          }
        }

        function m(e, t) {
          if (e.length) {
            var n = e.indexOf(t);
            if (n > -1) return e.splice(n, 1)
          }
        }

        function p(e, t) {
          return Bn.call(e, t)
        }

        function _(e) {
          var t = Object.create(null);
          return function (n) {
            return t[n] || (t[n] = e(n))
          }
        }

        function y(e, t) {
          function n(n) {
            var r = arguments.length;
            return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
          }

          return n._length = e.length, n
        }

        function g(e, t) {
          t = t || 0;
          for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t];
          return r
        }

        function v(e, t) {
          for (var n in t) e[n] = t[n];
          return e
        }

        function M(e) {
          for (var t = {}, n = 0; n < e.length; n++) e[n] && v(t, e[n]);
          return t
        }

        function b(e, t, n) {
        }

        function L(e, t) {
          if (e === t) return !0;
          var n = s(e), r = s(t);
          if (!n || !r) return !n && !r && String(e) === String(t);
          try {
            var i = Array.isArray(e), a = Array.isArray(t);
            if (i && a) return e.length === t.length && e.every(function (e, n) {
              return L(e, t[n])
            });
            if (i || a) return !1;
            var o = Object.keys(e), u = Object.keys(t);
            return o.length === u.length && o.every(function (n) {
              return L(e[n], t[n])
            })
          } catch (e) {
            return !1
          }
        }

        function k(e, t) {
          for (var n = 0; n < e.length; n++) if (L(e[n], t)) return n;
          return -1
        }

        function w(e) {
          var t = !1;
          return function () {
            t || (t = !0, e.apply(this, arguments))
          }
        }

        function Y(e) {
          var t = (e + "").charCodeAt(0);
          return 36 === t || 95 === t
        }

        function T(e, t, n, r) {
          Object.defineProperty(e, t, {value: n, enumerable: !!r, writable: !0, configurable: !0})
        }

        function D(e) {
          return "function" == typeof e && /native code/.test(e.toString())
        }

        function x(e) {
          return new Cr(void 0, void 0, void 0, String(e))
        }

        function S(e, t) {
          var n = e.componentOptions,
            r = new Cr(e.tag, e.data, e.children, e.text, e.elm, e.context, n, e.asyncFactory);
          return r.ns = e.ns, r.isStatic = e.isStatic, r.key = e.key, r.isComment = e.isComment, r.fnContext = e.fnContext, r.fnOptions = e.fnOptions, r.fnScopeId = e.fnScopeId, r.isCloned = !0, t && (e.children && (r.children = j(e.children, !0)), n && n.children && (n.children = j(n.children, !0))), r
        }

        function j(e, t) {
          for (var n = e.length, r = new Array(n), i = 0; i < n; i++) r[i] = S(e[i], t);
          return r
        }

        function H(e, t, n) {
          e.__proto__ = t
        }

        function P(e, t, n) {
          for (var r = 0, i = n.length; r < i; r++) {
            var a = n[r];
            T(e, a, t[a])
          }
        }

        function A(e, t) {
          if (s(e) && !(e instanceof Cr)) {
            var n;
            return p(e, "__ob__") && e.__ob__ instanceof Rr ? n = e.__ob__ : Nr.shouldConvert && !Lr() && (Array.isArray(e) || u(e)) && Object.isExtensible(e) && !e._isVue && (n = new Rr(e)), t && n && n.vmCount++, n
          }
        }

        function C(e, t, n, r, i) {
          var a = new Pr, s = Object.getOwnPropertyDescriptor(e, t);
          if (!s || !1 !== s.configurable) {
            var o = s && s.get, u = s && s.set, d = !i && A(n);
            Object.defineProperty(e, t, {
              enumerable: !0, configurable: !0, get: function () {
                var t = o ? o.call(e) : n;
                return Pr.target && (a.depend(), d && (d.dep.depend(), Array.isArray(t) && F(t))), t
              }, set: function (t) {
                var s = o ? o.call(e) : n;
                t === s || t != t && s != s || (r && r(), u ? u.call(e, t) : n = t, d = !i && A(t), a.notify())
              }
            })
          }
        }

        function O(e, t, n) {
          if (Array.isArray(e) && l(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
          if (t in e && !(t in Object.prototype)) return e[t] = n, n;
          var r = e.__ob__;
          return e._isVue || r && r.vmCount ? (Yr("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."), n) : r ? (C(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n)
        }

        function E(e, t) {
          if (Array.isArray(e) && l(t)) e.splice(t, 1); else {
            var n = e.__ob__;
            e._isVue || n && n.vmCount ? Yr("Avoid deleting properties on a Vue instance or its root $data - just set it to null.") : p(e, t) && (delete e[t], n && n.dep.notify())
          }
        }

        function F(e) {
          for (var t = void 0, n = 0, r = e.length; n < r; n++) (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && F(t)
        }

        function $(e, t) {
          if (!t) return e;
          for (var n, r, i, a = Object.keys(t), s = 0; s < a.length; s++) r = e[n = a[s]], i = t[n], p(e, n) ? u(r) && u(i) && $(r, i) : O(e, n, i);
          return e
        }

        function I(e, t, n) {
          return n ? function () {
            var r = "function" == typeof t ? t.call(n, n) : t, i = "function" == typeof e ? e.call(n, n) : e;
            return r ? $(r, i) : i
          } : t ? e ? function () {
            return $("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e)
          } : t : e
        }

        function N(e, t) {
          return t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e
        }

        function R(e, t, n, r) {
          var i = Object.create(e || null);
          return t ? (z(r, t, n), v(i, t)) : i
        }

        function W(e) {
          /^[a-zA-Z][\w-]*$/.test(e) || Yr('Invalid component name: "' + e + '". Component names can only contain alphanumeric characters and the hyphen, and must start with a letter.'), (Jn(e) || ir.isReservedTag(e)) && Yr("Do not use built-in or reserved HTML elements as component id: " + e)
        }

        function z(e, t, n) {
          u(t) || Yr('Invalid value for option "' + e + '": expected an Object, but got ' + o(t) + ".", n)
        }

        function U(e, t, n) {
          function r(r) {
            var i = Wr[r] || Jr;
            l[r] = i(e[r], t[r], n, r)
          }

          !function (e) {
            for (var t in e.components) W(t)
          }(t), "function" == typeof t && (t = t.options), function (e, t) {
            var n = e.props;
            if (n) {
              var r, i, a = {};
              if (Array.isArray(n)) for (r = n.length; r--;) "string" == typeof(i = n[r]) ? a[Gn(i)] = {type: null} : Yr("props must be strings when using array syntax."); else if (u(n)) for (var s in n) i = n[s], a[Gn(s)] = u(i) ? i : {type: i}; else Yr('Invalid value for option "props": expected an Array or an Object, but got ' + o(n) + ".", t);
              e.props = a
            }
          }(t, n), function (e, t) {
            var n = e.inject;
            if (n) {
              var r = e.inject = {};
              if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r[n[i]] = {from: n[i]}; else if (u(n)) for (var a in n) {
                var s = n[a];
                r[a] = u(s) ? v({from: a}, s) : {from: s}
              } else Yr('Invalid value for option "inject": expected an Array or an Object, but got ' + o(n) + ".", t)
            }
          }(t, n), function (e) {
            var t = e.directives;
            if (t) for (var n in t) {
              var r = t[n];
              "function" == typeof r && (t[n] = {bind: r, update: r})
            }
          }(t);
          var i = t.extends;
          if (i && (e = U(e, i, n)), t.mixins) for (var a = 0, s = t.mixins.length; a < s; a++) e = U(e, t.mixins[a], n);
          var d, l = {};
          for (d in e) r(d);
          for (d in t) p(e, d) || r(d);
          return l
        }

        function J(e, t, n, r) {
          if ("string" == typeof n) {
            var i = e[t];
            if (p(i, n)) return i[n];
            var a = Gn(n);
            if (p(i, a)) return i[a];
            var s = Qn(a);
            if (p(i, s)) return i[s];
            var o = i[n] || i[a] || i[s];
            return r && !o && Yr("Failed to resolve " + t.slice(0, -1) + ": " + n, e), o
          }
        }

        function q(e, t, n, r) {
          var i = t[e], a = !p(n, e), d = n[e];
          if (V(Boolean, i.type) && (a && !p(i, "default") ? d = !1 : V(String, i.type) || "" !== d && d !== Zn(e) || (d = !0)), void 0 === d) {
            d = function (e, t, n) {
              if (!p(t, "default")) return;
              var r = t.default;
              s(r) && Yr('Invalid default value for prop "' + n + '": Props with type Object/Array must use a factory function to return the default value.', e);
              if (e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n]) return e._props[n];
              return "function" == typeof r && "Function" !== B(t.type) ? r.call(e) : r
            }(r, i, e);
            var l = Nr.shouldConvert;
            Nr.shouldConvert = !0, A(d), Nr.shouldConvert = l
          }
          return function (e, t, n, r, i) {
            if (e.required && i) return void Yr('Missing required prop: "' + t + '"', r);
            if (null == n && !e.required) return;
            var a = e.type, s = !a || !0 === a, d = [];
            if (a) {
              Array.isArray(a) || (a = [a]);
              for (var l = 0; l < a.length && !s; l++) {
                var c = function (e, t) {
                  var n, r = B(t);
                  if (qr.test(r)) {
                    var i = typeof e;
                    (n = i === r.toLowerCase()) || "object" !== i || (n = e instanceof t)
                  } else n = "Object" === r ? u(e) : "Array" === r ? Array.isArray(e) : e instanceof t;
                  return {valid: n, expectedType: r}
                }(n, a[l]);
                d.push(c.expectedType || ""), s = c.valid
              }
            }
            if (!s) return void Yr('Invalid prop: type check failed for prop "' + t + '". Expected ' + d.map(Qn).join(", ") + ", got " + o(n) + ".", r);
            var h = e.validator;
            h && (h(n) || Yr('Invalid prop: custom validator check failed for prop "' + t + '".', r))
          }(i, e, d, r, a), d
        }

        function B(e) {
          var t = e && e.toString().match(/^\s*function (\w+)/);
          return t ? t[1] : ""
        }

        function V(e, t) {
          if (!Array.isArray(t)) return B(t) === B(e);
          for (var n = 0, r = t.length; n < r; n++) if (B(t[n]) === B(e)) return !0;
          return !1
        }

        function G(e, t, n) {
          if (t) for (var r = t; r = r.$parent;) {
            var i = r.$options.errorCaptured;
            if (i) for (var a = 0; a < i.length; a++) try {
              if (!1 === i[a].call(r, e, t, n)) return
            } catch (e) {
              Q(e, r, "errorCaptured hook")
            }
          }
          Q(e, t, n)
        }

        function Q(e, t, n) {
          if (ir.errorHandler) try {
            return ir.errorHandler.call(null, e, t, n)
          } catch (e) {
            K(e, null, "config.errorHandler")
          }
          K(e, t, n)
        }

        function K(e, t, n) {
          if (Yr("Error in " + n + ': "' + e.toString() + '"', t), !or && !ur || "undefined" == typeof console) throw e;
          console.error(e)
        }

        function Z() {
          Vr = !1;
          var e = Br.slice(0);
          Br.length = 0;
          for (var t = 0; t < e.length; t++) e[t]()
        }

        function X(e, t) {
          var n;
          if (Br.push(function () {
            if (e) try {
              e.call(t)
            } catch (e) {
              G(e, t, "nextTick")
            } else n && n(t)
          }), Vr || (Vr = !0, Gr ? Ur() : zr()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
            n = e
          })
        }

        function ee(e) {
          te(e, li), li.clear()
        }

        function te(e, t) {
          var n, r, i = Array.isArray(e);
          if ((i || s(e)) && !Object.isFrozen(e)) {
            if (e.__ob__) {
              var a = e.__ob__.dep.id;
              if (t.has(a)) return;
              t.add(a)
            }
            if (i) for (n = e.length; n--;) te(e[n], t); else for (n = (r = Object.keys(e)).length; n--;) te(e[r[n]], t)
          }
        }

        function ne(e) {
          function t() {
            var e = arguments, n = t.fns;
            if (!Array.isArray(n)) return n.apply(null, arguments);
            for (var r = n.slice(), i = 0; i < r.length; i++) r[i].apply(null, e)
          }

          return t.fns = e, t
        }

        function re(t, n, r, i, a) {
          var s, o, u, d;
          for (s in t) o = t[s], u = n[s], d = ci(s), e(o) ? Yr('Invalid handler for event "' + d.name + '": got ' + String(o), a) : e(u) ? (e(o.fns) && (o = t[s] = ne(o)), r(d.name, o, d.once, d.capture, d.passive, d.params)) : o !== u && (u.fns = o, t[s] = u);
          for (s in n) e(t[s]) && i((d = ci(s)).name, n[s], d.capture)
        }

        function ie(t, n, a) {
          function s() {
            a.apply(this, arguments), m(o.fns, s)
          }

          t instanceof Cr && (t = t.data.hook || (t.data.hook = {}));
          var o, u = t[n];
          e(u) ? o = ne([s]) : r(u.fns) && i(u.merged) ? (o = u).fns.push(s) : o = ne([u, s]), o.merged = !0, t[n] = o
        }

        function ae(e, t, n, i, a) {
          if (r(t)) {
            if (p(t, n)) return e[n] = t[n], a || delete t[n], !0;
            if (p(t, i)) return e[n] = t[i], a || delete t[i], !0
          }
          return !1
        }

        function se(e) {
          return r(e) && r(e.text) && function (e) {
            return !1 === e
          }(e.isComment)
        }

        function oe(t, n) {
          var s, o, u, d, l = [];
          for (s = 0; s < t.length; s++) e(o = t[s]) || "boolean" == typeof o || (d = l[u = l.length - 1], Array.isArray(o) ? o.length > 0 && (se((o = oe(o, (n || "") + "_" + s))[0]) && se(d) && (l[u] = x(d.text + o[0].text), o.shift()), l.push.apply(l, o)) : a(o) ? se(d) ? l[u] = x(d.text + o) : "" !== o && l.push(x(o)) : se(o) && se(d) ? l[u] = x(d.text + o.text) : (i(t._isVList) && r(o.tag) && e(o.key) && r(n) && (o.key = "__vlist" + n + "_" + s + "__"), l.push(o)));
          return l
        }

        function ue(e, t) {
          return (e.__esModule || wr && "Module" === e[Symbol.toStringTag]) && (e = e.default), s(e) ? t.extend(e) : e
        }

        function de(e) {
          return e.isComment && e.asyncFactory
        }

        function le(e) {
          if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
            var n = e[t];
            if (r(n) && (r(n.componentOptions) || de(n))) return n
          }
        }

        function ce(e, t, n) {
          n ? di.$once(e, t) : di.$on(e, t)
        }

        function he(e, t) {
          di.$off(e, t)
        }

        function fe(e, t, n) {
          di = e, re(t, n || {}, ce, he, e), di = void 0
        }

        function me(e, t) {
          var n = {};
          if (!e) return n;
          for (var r = 0, i = e.length; r < i; r++) {
            var a = e[r], s = a.data;
            if (s && s.attrs && s.attrs.slot && delete s.attrs.slot, a.context !== t && a.fnContext !== t || !s || null == s.slot) (n.default || (n.default = [])).push(a); else {
              var o = s.slot, u = n[o] || (n[o] = []);
              "template" === a.tag ? u.push.apply(u, a.children || []) : u.push(a)
            }
          }
          for (var d in n) n[d].every(pe) && delete n[d];
          return n
        }

        function pe(e) {
          return e.isComment && !e.asyncFactory || " " === e.text
        }

        function _e(e, t) {
          t = t || {};
          for (var n = 0; n < e.length; n++) Array.isArray(e[n]) ? _e(e[n], t) : t[e[n].key] = e[n].fn;
          return t
        }

        function ye(e) {
          for (; e && (e = e.$parent);) if (e._inactive) return !0;
          return !1
        }

        function ge(e, t) {
          if (t) {
            if (e._directInactive = !1, ye(e)) return
          } else if (e._directInactive) return;
          if (e._inactive || null === e._inactive) {
            e._inactive = !1;
            for (var n = 0; n < e.$children.length; n++) ge(e.$children[n]);
            Me(e, "activated")
          }
        }

        function ve(e, t) {
          if (!(t && (e._directInactive = !0, ye(e)) || e._inactive)) {
            e._inactive = !0;
            for (var n = 0; n < e.$children.length; n++) ve(e.$children[n]);
            Me(e, "deactivated")
          }
        }

        function Me(e, t) {
          var n = e.$options[t];
          if (n) for (var r = 0, i = n.length; r < i; r++) try {
            n[r].call(e)
          } catch (n) {
            G(n, e, t + " hook")
          }
          e._hasHookEvent && e.$emit("hook:" + t)
        }

        function be() {
          Mi = !0;
          var e, t;
          for (pi.sort(function (e, t) {
            return e.id - t.id
          }), bi = 0; bi < pi.length; bi++) if (e = pi[bi], t = e.id, yi[t] = null, e.run(), null != yi[t] && (gi[t] = (gi[t] || 0) + 1, gi[t] > mi)) {
            Yr("You may have an infinite update loop " + (e.user ? 'in watcher with expression "' + e.expression + '"' : "in a component render function."), e.vm);
            break
          }
          var n = _i.slice(), r = pi.slice();
          bi = pi.length = _i.length = 0, yi = {}, gi = {}, vi = Mi = !1, function (e) {
            for (var t = 0; t < e.length; t++) e[t]._inactive = !0, ge(e[t], !0)
          }(n), function (e) {
            var t = e.length;
            for (; t--;) {
              var n = e[t], r = n.vm;
              r._watcher === n && r._isMounted && Me(r, "updated")
            }
          }(r), kr && ir.devtools && kr.emit("flush")
        }

        function Le(e, t, n) {
          wi.get = function () {
            return this[t][n]
          }, wi.set = function (e) {
            this[t][n] = e
          }, Object.defineProperty(e, n, wi)
        }

        function ke(e) {
          e._watchers = [];
          var t = e.$options;
          t.props && function (e, t) {
            var n = e.$options.propsData || {}, r = e._props = {}, i = e.$options._propKeys = [], a = !e.$parent;
            Nr.shouldConvert = a;
            var s = function (a) {
              i.push(a);
              var s = q(a, t, n, e), o = Zn(a);
              (qn(o) || ir.isReservedAttr(o)) && Yr('"' + o + '" is a reserved attribute and cannot be used as component prop.', e), C(r, a, s, function () {
                e.$parent && !fi && Yr("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: \"" + a + '"', e)
              }), a in e || Le(e, "_props", a)
            };
            for (var o in t) s(o);
            Nr.shouldConvert = !0
          }(e, t.props), t.methods && function (e, t) {
            var n = e.$options.props;
            for (var r in t) null == t[r] && Yr('Method "' + r + '" has an undefined value in the component definition. Did you reference the function correctly?', e), n && p(n, r) && Yr('Method "' + r + '" has already been defined as a prop.', e), r in e && Y(r) && Yr('Method "' + r + '" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.'), e[r] = null == t[r] ? b : y(t[r], e)
          }(e, t.methods), t.data ? function (e) {
            var t = e.$options.data;
            t = e._data = "function" == typeof t ? function (e, t) {
              try {
                return e.call(t, t)
              } catch (e) {
                return G(e, t, "data()"), {}
              }
            }(t, e) : t || {}, u(t) || (t = {}, Yr("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", e));
            var n = Object.keys(t), r = e.$options.props, i = e.$options.methods, a = n.length;
            for (; a--;) {
              var s = n[a];
              i && p(i, s) && Yr('Method "' + s + '" has already been defined as a data property.', e), r && p(r, s) ? Yr('The data property "' + s + '" is already declared as a prop. Use prop default value instead.', e) : Y(s) || Le(e, "_data", s)
            }
            A(t, !0)
          }(e) : A(e._data = {}, !0), t.computed && function (e, t) {
            var n = e._computedWatchers = Object.create(null), r = Lr();
            for (var i in t) {
              var a = t[i], s = "function" == typeof a ? a : a.get;
              null == s && Yr('Getter is missing for computed property "' + i + '".', e), r || (n[i] = new ki(e, s || b, b, Yi)), i in e ? i in e.$data ? Yr('The computed property "' + i + '" is already defined in data.', e) : e.$options.props && i in e.$options.props && Yr('The computed property "' + i + '" is already defined as a prop.', e) : we(e, i, a)
            }
          }(e, t.computed), t.watch && t.watch !== yr && function (e, t) {
            for (var n in t) {
              var r = t[n];
              if (Array.isArray(r)) for (var i = 0; i < r.length; i++) Te(e, n, r[i]); else Te(e, n, r)
            }
          }(e, t.watch)
        }

        function we(e, t, n) {
          var r = !Lr();
          "function" == typeof n ? (wi.get = r ? Ye(t) : n, wi.set = b) : (wi.get = n.get ? r && !1 !== n.cache ? Ye(t) : n.get : b, wi.set = n.set ? n.set : b), wi.set === b && (wi.set = function () {
            Yr('Computed property "' + t + '" was assigned to but it has no setter.', this)
          }), Object.defineProperty(e, t, wi)
        }

        function Ye(e) {
          return function () {
            var t = this._computedWatchers && this._computedWatchers[e];
            if (t) return t.dirty && t.evaluate(), Pr.target && t.depend(), t.value
          }
        }

        function Te(e, t, n, r) {
          return u(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r)
        }

        function De(e, t) {
          if (e) {
            for (var n = Object.create(null), r = wr ? Reflect.ownKeys(e).filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }) : Object.keys(e), i = 0; i < r.length; i++) {
              for (var a = r[i], s = e[a].from, o = t; o;) {
                if (o._provided && s in o._provided) {
                  n[a] = o._provided[s];
                  break
                }
                o = o.$parent
              }
              if (!o) if ("default" in e[a]) {
                var u = e[a].default;
                n[a] = "function" == typeof u ? u.call(t) : u
              } else Yr('Injection "' + a + '" not found', t)
            }
            return n
          }
        }

        function xe(e, t) {
          var n, i, a, o, u;
          if (Array.isArray(e) || "string" == typeof e) for (n = new Array(e.length), i = 0, a = e.length; i < a; i++) n[i] = t(e[i], i); else if ("number" == typeof e) for (n = new Array(e), i = 0; i < e; i++) n[i] = t(i + 1, i); else if (s(e)) for (o = Object.keys(e), n = new Array(o.length), i = 0, a = o.length; i < a; i++) u = o[i], n[i] = t(e[u], u, i);
          return r(n) && (n._isVList = !0), n
        }

        function Se(e, t, n, r) {
          var i, a = this.$scopedSlots[e];
          if (a) n = n || {}, r && (s(r) || Yr("slot v-bind without argument expects an Object", this), n = v(v({}, r), n)), i = a(n) || t; else {
            var o = this.$slots[e];
            o && (o._rendered && Yr('Duplicate presence of slot "' + e + '" found in the same render tree - this will likely cause render errors.', this), o._rendered = !0), i = o || t
          }
          var u = n && n.slot;
          return u ? this.$createElement("template", {slot: u}, i) : i
        }

        function je(e) {
          return J(this.$options, "filters", e, !0) || er
        }

        function He(e, t, n, r) {
          var i = ir.keyCodes[t] || n;
          return i ? Array.isArray(i) ? -1 === i.indexOf(e) : i !== e : r ? Zn(r) !== t : void 0
        }

        function Pe(e, t, n, r, i) {
          if (n) if (s(n)) {
            Array.isArray(n) && (n = M(n));
            var a, o = function (s) {
              if ("class" === s || "style" === s || qn(s)) a = e; else {
                var o = e.attrs && e.attrs.type;
                a = r || ir.mustUseProp(t, o, s) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
              }
              if (!(s in a) && (a[s] = n[s], i)) {
                (e.on || (e.on = {}))["update:" + s] = function (e) {
                  n[s] = e
                }
              }
            };
            for (var u in n) o(u)
          } else Yr("v-bind without argument expects an Object or Array value", this);
          return e
        }

        function Ae(e, t) {
          var n = this._staticTrees || (this._staticTrees = []), r = n[e];
          return r && !t ? Array.isArray(r) ? j(r) : S(r) : (r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), Oe(r, "__static__" + e, !1), r)
        }

        function Ce(e, t, n) {
          return Oe(e, "__once__" + t + (n ? "_" + n : ""), !0), e
        }

        function Oe(e, t, n) {
          if (Array.isArray(e)) for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && Ee(e[r], t + "_" + r, n); else Ee(e, t, n)
        }

        function Ee(e, t, n) {
          e.isStatic = !0, e.key = t, e.isOnce = n
        }

        function Fe(e, t) {
          if (t) if (u(t)) {
            var n = e.on = e.on ? v({}, e.on) : {};
            for (var r in t) {
              var i = n[r], a = t[r];
              n[r] = i ? [].concat(i, a) : a
            }
          } else Yr("v-on without argument expects an Object value", this);
          return e
        }

        function $e(e) {
          e._o = Ce, e._n = h, e._s = c, e._l = xe, e._t = Se, e._q = L, e._i = k, e._m = Ae, e._f = je, e._k = He, e._b = Pe, e._v = x, e._e = Er, e._u = _e, e._g = Fe
        }

        function Ie(e, t, n, r, a) {
          var s = a.options;
          this.data = e, this.props = t, this.children = n, this.parent = r, this.listeners = e.on || zn, this.injections = De(s.inject, r), this.slots = function () {
            return me(n, r)
          };
          var o = Object.create(r), u = i(s._compiled), d = !u;
          u && (this.$options = s, this.$slots = this.slots(), this.$scopedSlots = e.scopedSlots || zn), s._scopeId ? this._c = function (e, t, n, i) {
            var a = We(o, e, t, n, i, d);
            return a && (a.fnScopeId = s._scopeId, a.fnContext = r), a
          } : this._c = function (e, t, n, r) {
            return We(o, e, t, n, r, d)
          }
        }

        function Ne(e, t) {
          for (var n in t) e[Gn(n)] = t[n]
        }

        function Re(t, n, a, o, u) {
          if (!e(t)) {
            var d = a.$options._base;
            if (s(t) && (t = d.extend(t)), "function" == typeof t) {
              var l;
              if (e(t.cid) && (l = t, void 0 === (t = function (t, n, a) {
                if (i(t.error) && r(t.errorComp)) return t.errorComp;
                if (r(t.resolved)) return t.resolved;
                if (i(t.loading) && r(t.loadingComp)) return t.loadingComp;
                if (!r(t.contexts)) {
                  var o = t.contexts = [a], u = !0, d = function () {
                    for (var e = 0, t = o.length; e < t; e++) o[e].$forceUpdate()
                  }, l = w(function (e) {
                    t.resolved = ue(e, n), u || d()
                  }), c = w(function (e) {
                    Yr("Failed to resolve async component: " + String(t) + (e ? "\nReason: " + e : "")), r(t.errorComp) && (t.error = !0, d())
                  }), h = t(l, c);
                  return s(h) && ("function" == typeof h.then ? e(t.resolved) && h.then(l, c) : r(h.component) && "function" == typeof h.component.then && (h.component.then(l, c), r(h.error) && (t.errorComp = ue(h.error, n)), r(h.loading) && (t.loadingComp = ue(h.loading, n), 0 === h.delay ? t.loading = !0 : setTimeout(function () {
                    e(t.resolved) && e(t.error) && (t.loading = !0, d())
                  }, h.delay || 200)), r(h.timeout) && setTimeout(function () {
                    e(t.resolved) && c("timeout (" + h.timeout + "ms)")
                  }, h.timeout))), u = !1, t.loading ? t.loadingComp : t.resolved
                }
                t.contexts.push(a)
              }(l, d, a)))) return function (e, t, n, r, i) {
                var a = Er();
                return a.asyncFactory = e, a.asyncMeta = {data: t, context: n, children: r, tag: i}, a
              }(l, n, a, o, u);
              n = n || {}, Ue(t), r(n.model) && function (e, t) {
                var n = e.model && e.model.prop || "value", i = e.model && e.model.event || "input";
                (t.props || (t.props = {}))[n] = t.model.value;
                var a = t.on || (t.on = {});
                r(a[i]) ? a[i] = [t.model.callback].concat(a[i]) : a[i] = t.model.callback
              }(t.options, n);
              var c = function (t, n, i) {
                var a = n.options.props;
                if (!e(a)) {
                  var s = {}, o = t.attrs, u = t.props;
                  if (r(o) || r(u)) for (var d in a) {
                    var l = Zn(d), c = d.toLowerCase();
                    d !== c && o && p(o, c) && Tr('Prop "' + c + '" is passed to component ' + xr(i || n) + ', but the declared prop name is "' + d + '". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "' + l + '" instead of "' + d + '".'), ae(s, u, d, l, !0) || ae(s, o, d, l, !1)
                  }
                  return s
                }
              }(n, t, u);
              if (i(t.options.functional)) return function (e, t, n, i, a) {
                var s = e.options, o = {}, u = s.props;
                if (r(u)) for (var d in u) o[d] = q(d, u, t || zn); else r(n.attrs) && Ne(o, n.attrs), r(n.props) && Ne(o, n.props);
                var l = new Ie(n, o, a, i, e), c = s.render.call(null, l._c, l);
                return c instanceof Cr && (c.fnContext = i, c.fnOptions = s, n.slot && ((c.data || (c.data = {})).slot = n.slot)), c
              }(t, c, n, a, o);
              var h = n.on;
              if (n.on = n.nativeOn, i(t.options.abstract)) {
                var f = n.slot;
                n = {}, f && (n.slot = f)
              }
              !function (e) {
                e.hook || (e.hook = {});
                for (var t = 0; t < Di.length; t++) {
                  var n = Di[t], r = e.hook[n], i = Ti[n];
                  e.hook[n] = r ? function (e, t) {
                    return function (n, r, i, a) {
                      e(n, r, i, a), t(n, r, i, a)
                    }
                  }(i, r) : i
                }
              }(n);
              var m = t.options.name || u;
              return new Cr("vue-component-" + t.cid + (m ? "-" + m : ""), n, void 0, void 0, void 0, a, {
                Ctor: t,
                propsData: c,
                listeners: h,
                tag: u,
                children: o
              }, l)
            }
            Yr("Invalid Component definition: " + String(t), a)
          }
        }

        function We(e, t, n, s, o, u) {
          return (Array.isArray(n) || a(n)) && (o = s, s = n, n = void 0), i(u) && (o = Si), function (e, t, n, i, s) {
            if (r(n) && r(n.__ob__)) return Yr("Avoid using observed data object as vnode data: " + JSON.stringify(n) + "\nAlways create fresh vnode data objects in each render!", e), Er();
            r(n) && r(n.is) && (t = n.is);
            if (!t) return Er();
            r(n) && r(n.key) && !a(n.key) && Yr("Avoid using non-primitive value as key, use string/number value instead.", e);
            Array.isArray(i) && "function" == typeof i[0] && ((n = n || {}).scopedSlots = {default: i[0]}, i.length = 0);
            s === Si ? i = function (e) {
              return a(e) ? [x(e)] : Array.isArray(e) ? oe(e) : void 0
            }(i) : s === xi && (i = function (e) {
              for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
              return e
            }(i));
            var o, u;
            if ("string" == typeof t) {
              var d;
              u = e.$vnode && e.$vnode.ns || ir.getTagNamespace(t), o = ir.isReservedTag(t) ? new Cr(ir.parsePlatformTagName(t), n, i, void 0, void 0, e) : r(d = J(e.$options, "components", t)) ? Re(d, n, e, i, t) : new Cr(t, n, i, void 0, void 0, e)
            } else o = Re(t, n, e, i);
            return r(o) ? (u && ze(o, u), o) : Er()
          }(e, t, n, s, o)
        }

        function ze(t, n, a) {
          if (t.ns = n, "foreignObject" === t.tag && (n = void 0, a = !0), r(t.children)) for (var s = 0, o = t.children.length; s < o; s++) {
            var u = t.children[s];
            r(u.tag) && (e(u.ns) || i(a)) && ze(u, n, a)
          }
        }

        function Ue(e) {
          var t = e.options;
          if (e.super) {
            var n = Ue(e.super);
            if (n !== e.superOptions) {
              e.superOptions = n;
              var r = function (e) {
                var t, n = e.options, r = e.extendOptions, i = e.sealedOptions;
                for (var a in n) n[a] !== i[a] && (t || (t = {}), t[a] = function (e, t, n) {
                  if (Array.isArray(e)) {
                    var r = [];
                    n = Array.isArray(n) ? n : [n], t = Array.isArray(t) ? t : [t];
                    for (var i = 0; i < e.length; i++) (t.indexOf(e[i]) >= 0 || n.indexOf(e[i]) < 0) && r.push(e[i]);
                    return r
                  }
                  return e
                }(n[a], r[a], i[a]));
                return t
              }(e);
              r && v(e.extendOptions, r), (t = e.options = U(n, e.extendOptions)).name && (t.components[t.name] = e)
            }
          }
          return t
        }

        function Je(e) {
          this instanceof Je || Yr("Vue is a constructor and should be called with the `new` keyword"), this._init(e)
        }

        function qe(e) {
          e.cid = 0;
          var t = 1;
          e.extend = function (e) {
            e = e || {};
            var n = this, r = n.cid, i = e._Ctor || (e._Ctor = {});
            if (i[r]) return i[r];
            var a = e.name || n.options.name;
            a && W(a);
            var s = function (e) {
              this._init(e)
            };
            return s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.cid = t++, s.options = U(n.options, e), s.super = n, s.options.props && function (e) {
              var t = e.options.props;
              for (var n in t) Le(e.prototype, "_props", n)
            }(s), s.options.computed && function (e) {
              var t = e.options.computed;
              for (var n in t) we(e.prototype, n, t[n])
            }(s), s.extend = n.extend, s.mixin = n.mixin, s.use = n.use, nr.forEach(function (e) {
              s[e] = n[e]
            }), a && (s.options.components[a] = s), s.superOptions = n.options, s.extendOptions = e, s.sealedOptions = v({}, s.options), i[r] = s, s
          }
        }

        function Be(e) {
          return e && (e.Ctor.options.name || e.tag)
        }

        function Ve(e, t) {
          return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!d(e) && e.test(t)
        }

        function Ge(e, t) {
          var n = e.cache, r = e.keys, i = e._vnode;
          for (var a in n) {
            var s = n[a];
            if (s) {
              var o = Be(s.componentOptions);
              o && !t(o) && Qe(n, a, r, i)
            }
          }
        }

        function Qe(e, t, n, r) {
          var i = e[t];
          !i || r && i.tag === r.tag || i.componentInstance.$destroy(), e[t] = null, m(n, t)
        }

        function Ke(e) {
          for (var t = e.data, n = e, i = e; r(i.componentInstance);) (i = i.componentInstance._vnode) && i.data && (t = Ze(i.data, t));
          for (; r(n = n.parent);) n && n.data && (t = Ze(t, n.data));
          return function (e, t) {
            if (r(e) || r(t)) return Xe(e, et(t));
            return ""
          }(t.staticClass, t.class)
        }

        function Ze(e, t) {
          return {staticClass: Xe(e.staticClass, t.staticClass), class: r(e.class) ? [e.class, t.class] : t.class}
        }

        function Xe(e, t) {
          return e ? t ? e + " " + t : e : t || ""
        }

        function et(e) {
          return Array.isArray(e) ? function (e) {
            for (var t, n = "", i = 0, a = e.length; i < a; i++) r(t = et(e[i])) && "" !== t && (n && (n += " "), n += t);
            return n
          }(e) : s(e) ? function (e) {
            var t = "";
            for (var n in e) e[n] && (t && (t += " "), t += n);
            return t
          }(e) : "string" == typeof e ? e : ""
        }

        function tt(e) {
          return Xi(e) ? "svg" : "math" === e ? "math" : void 0
        }

        function nt(e) {
          if ("string" == typeof e) {
            var t = document.querySelector(e);
            return t || (Yr("Cannot find element: " + e), document.createElement("div"))
          }
          return e
        }

        function rt(e, t) {
          var n = e.data.ref;
          if (n) {
            var r = e.context, i = e.componentInstance || e.elm, a = r.$refs;
            t ? Array.isArray(a[n]) ? m(a[n], i) : a[n] === i && (a[n] = void 0) : e.data.refInFor ? Array.isArray(a[n]) ? a[n].indexOf(i) < 0 && a[n].push(i) : a[n] = [i] : a[n] = i
          }
        }

        function it(t, n) {
          return t.key === n.key && (t.tag === n.tag && t.isComment === n.isComment && r(t.data) === r(n.data) && function (e, t) {
            if ("input" !== e.tag) return !0;
            var n, i = r(n = e.data) && r(n = n.attrs) && n.type, a = r(n = t.data) && r(n = n.attrs) && n.type;
            return i === a || na(i) && na(a)
          }(t, n) || i(t.isAsyncPlaceholder) && t.asyncFactory === n.asyncFactory && e(n.asyncFactory.error))
        }

        function at(e, t, n) {
          var i, a, s = {};
          for (i = t; i <= n; ++i) r(a = e[i].key) && (s[a] = i);
          return s
        }

        function st(e, t) {
          (e.data.directives || t.data.directives) && function (e, t) {
            var n, r, i, a = e === aa, s = t === aa, o = ot(e.data.directives, e.context),
              u = ot(t.data.directives, t.context), d = [], l = [];
            for (n in u) r = o[n], i = u[n], r ? (i.oldValue = r.value, ut(i, "update", t, e), i.def && i.def.componentUpdated && l.push(i)) : (ut(i, "bind", t, e), i.def && i.def.inserted && d.push(i));
            if (d.length) {
              var c = function () {
                for (var n = 0; n < d.length; n++) ut(d[n], "inserted", t, e)
              };
              a ? ie(t, "insert", c) : c()
            }
            l.length && ie(t, "postpatch", function () {
              for (var n = 0; n < l.length; n++) ut(l[n], "componentUpdated", t, e)
            });
            if (!a) for (n in o) u[n] || ut(o[n], "unbind", e, e, s)
          }(e, t)
        }

        function ot(e, t) {
          var n = Object.create(null);
          if (!e) return n;
          var r, i;
          for (r = 0; r < e.length; r++) (i = e[r]).modifiers || (i.modifiers = ua), n[function (e) {
            return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
          }(i)] = i, i.def = J(t.$options, "directives", i.name, !0);
          return n
        }

        function ut(e, t, n, r, i) {
          var a = e.def && e.def[t];
          if (a) try {
            a(n.elm, e, n, r, i)
          } catch (r) {
            G(r, n.context, "directive " + e.name + " " + t + " hook")
          }
        }

        function dt(t, n) {
          var i = n.componentOptions;
          if (!(r(i) && !1 === i.Ctor.options.inheritAttrs || e(t.data.attrs) && e(n.data.attrs))) {
            var a, s, o = n.elm, u = t.data.attrs || {}, d = n.data.attrs || {};
            r(d.__ob__) && (d = n.data.attrs = v({}, d));
            for (a in d) s = d[a], u[a] !== s && lt(o, a, s);
            (cr || fr) && d.value !== u.value && lt(o, "value", d.value);
            for (a in u) e(d[a]) && (Vi(a) ? o.removeAttributeNS(Bi, Gi(a)) : Ji(a) || o.removeAttribute(a))
          }
        }

        function lt(e, t, n) {
          if (qi(t)) Qi(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)); else if (Ji(t)) e.setAttribute(t, Qi(n) || "false" === n ? "false" : "true"); else if (Vi(t)) Qi(n) ? e.removeAttributeNS(Bi, Gi(t)) : e.setAttributeNS(Bi, t, n); else if (Qi(n)) e.removeAttribute(t); else {
            if (cr && !hr && "TEXTAREA" === e.tagName && "placeholder" === t && !e.__ieph) {
              var r = function (t) {
                t.stopImmediatePropagation(), e.removeEventListener("input", r)
              };
              e.addEventListener("input", r), e.__ieph = !0
            }
            e.setAttribute(t, n)
          }
        }

        function ct(t, n) {
          var i = n.elm, a = n.data, s = t.data;
          if (!(e(a.staticClass) && e(a.class) && (e(s) || e(s.staticClass) && e(s.class)))) {
            var o = Ke(n), u = i._transitionClasses;
            r(u) && (o = Xe(o, et(u))), o !== i._prevClass && (i.setAttribute("class", o), i._prevClass = o)
          }
        }

        function ht(e) {
          function t() {
            (s || (s = [])).push(e.slice(m, i).trim()), m = i + 1
          }

          var n, r, i, a, s, o = !1, u = !1, d = !1, l = !1, c = 0, h = 0, f = 0, m = 0;
          for (i = 0; i < e.length; i++) if (r = n, n = e.charCodeAt(i), o) 39 === n && 92 !== r && (o = !1); else if (u) 34 === n && 92 !== r && (u = !1); else if (d) 96 === n && 92 !== r && (d = !1); else if (l) 47 === n && 92 !== r && (l = !1); else if (124 !== n || 124 === e.charCodeAt(i + 1) || 124 === e.charCodeAt(i - 1) || c || h || f) {
            switch (n) {
              case 34:
                u = !0;
                break;
              case 39:
                o = !0;
                break;
              case 96:
                d = !0;
                break;
              case 40:
                f++;
                break;
              case 41:
                f--;
                break;
              case 91:
                h++;
                break;
              case 93:
                h--;
                break;
              case 123:
                c++;
                break;
              case 125:
                c--
            }
            if (47 === n) {
              for (var p = i - 1, _ = void 0; p >= 0 && " " === (_ = e.charAt(p)); p--) ;
              _ && ha.test(_) || (l = !0)
            }
          } else void 0 === a ? (m = i + 1, a = e.slice(0, i).trim()) : t();
          if (void 0 === a ? a = e.slice(0, i).trim() : 0 !== m && t(), s) for (i = 0; i < s.length; i++) a = function (e, t) {
            var n = t.indexOf("(");
            if (n < 0) return '_f("' + t + '")(' + e + ")";
            var r = t.slice(0, n), i = t.slice(n + 1);
            return '_f("' + r + '")(' + e + "," + i
          }(a, s[i]);
          return a
        }

        function ft(e) {
          console.error("[Vue compiler]: " + e)
        }

        function mt(e, t) {
          return e ? e.map(function (e) {
            return e[t]
          }).filter(function (e) {
            return e
          }) : []
        }

        function pt(e, t, n) {
          (e.props || (e.props = [])).push({name: t, value: n}), e.plain = !1
        }

        function _t(e, t, n) {
          (e.attrs || (e.attrs = [])).push({name: t, value: n}), e.plain = !1
        }

        function yt(e, t, n) {
          e.attrsMap[t] = n, e.attrsList.push({name: t, value: n})
        }

        function gt(e, t, n, r, i, a) {
          (e.directives || (e.directives = [])).push({
            name: t,
            rawName: n,
            value: r,
            arg: i,
            modifiers: a
          }), e.plain = !1
        }

        function vt(e, t, n, r, i, a) {
          r = r || zn, a && r.prevent && r.passive && a("passive and prevent can't be used together. Passive handler can't prevent default event."), r.capture && (delete r.capture, t = "!" + t), r.once && (delete r.once, t = "~" + t), r.passive && (delete r.passive, t = "&" + t), "click" === t && (r.right ? (t = "contextmenu", delete r.right) : r.middle && (t = "mouseup"));
          var s;
          r.native ? (delete r.native, s = e.nativeEvents || (e.nativeEvents = {})) : s = e.events || (e.events = {});
          var o = {value: n};
          r !== zn && (o.modifiers = r);
          var u = s[t];
          Array.isArray(u) ? i ? u.unshift(o) : u.push(o) : s[t] = u ? i ? [o, u] : [u, o] : o, e.plain = !1
        }

        function Mt(e, t, n) {
          var r = bt(e, ":" + t) || bt(e, "v-bind:" + t);
          if (null != r) return ht(r);
          if (!1 !== n) {
            var i = bt(e, t);
            if (null != i) return JSON.stringify(i)
          }
        }

        function bt(e, t, n) {
          var r;
          if (null != (r = e.attrsMap[t])) for (var i = e.attrsList, a = 0, s = i.length; a < s; a++) if (i[a].name === t) {
            i.splice(a, 1);
            break
          }
          return n && delete e.attrsMap[t], r
        }

        function Lt(e, t, n) {
          var r = n || {}, i = "$$v";
          r.trim && (i = "(typeof $$v === 'string'? $$v.trim(): $$v)"), r.number && (i = "_n(" + i + ")");
          var a = kt(t, i);
          e.model = {value: "(" + t + ")", expression: '"' + t + '"', callback: "function ($$v) {" + a + "}"}
        }

        function kt(e, t) {
          var n = function (e) {
            if (Ai = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < Ai - 1) return (Ei = e.lastIndexOf(".")) > -1 ? {
              exp: e.slice(0, Ei),
              key: '"' + e.slice(Ei + 1) + '"'
            } : {exp: e, key: null};
            Ci = e, Ei = Fi = $i = 0;
            for (; !Yt();) Tt(Oi = wt()) ? Dt(Oi) : 91 === Oi && function (e) {
              var t = 1;
              Fi = Ei;
              for (; !Yt();) if (e = wt(), Tt(e)) Dt(e); else if (91 === e && t++, 93 === e && t--, 0 === t) {
                $i = Ei;
                break
              }
            }(Oi);
            return {exp: e.slice(0, Fi), key: e.slice(Fi + 1, $i)}
          }(e);
          return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")"
        }

        function wt() {
          return Ci.charCodeAt(++Ei)
        }

        function Yt() {
          return Ei >= Ai
        }

        function Tt(e) {
          return 34 === e || 39 === e
        }

        function Dt(e) {
          for (var t = e; !Yt() && (e = wt()) !== t;) ;
        }

        function xt(e, t, n, r, i) {
          t = function (e) {
            return e._withTask || (e._withTask = function () {
              Gr = !0;
              var t = e.apply(null, arguments);
              return Gr = !1, t
            })
          }(t), n && (t = function (e, t, n) {
            var r = Ni;
            return function i() {
              null !== e.apply(null, arguments) && St(t, i, n, r)
            }
          }(t, e, r)), Ni.addEventListener(e, t, gr ? {capture: r, passive: i} : r)
        }

        function St(e, t, n, r) {
          (r || Ni).removeEventListener(e, t._withTask || t, n)
        }

        function jt(t, n) {
          if (!e(t.data.on) || !e(n.data.on)) {
            var i = n.data.on || {}, a = t.data.on || {};
            Ni = n.elm, function (e) {
              if (r(e[fa])) {
                var t = cr ? "change" : "input";
                e[t] = [].concat(e[fa], e[t] || []), delete e[fa]
              }
              r(e[ma]) && (e.change = [].concat(e[ma], e.change || []), delete e[ma])
            }(i), re(i, a, xt, St, n.context), Ni = void 0
          }
        }

        function Ht(t, n) {
          if (!e(t.data.domProps) || !e(n.data.domProps)) {
            var i, a, s = n.elm, o = t.data.domProps || {}, u = n.data.domProps || {};
            r(u.__ob__) && (u = n.data.domProps = v({}, u));
            for (i in o) e(u[i]) && (s[i] = "");
            for (i in u) {
              if (a = u[i], "textContent" === i || "innerHTML" === i) {
                if (n.children && (n.children.length = 0), a === o[i]) continue;
                1 === s.childNodes.length && s.removeChild(s.childNodes[0])
              }
              if ("value" === i) {
                s._value = a;
                var d = e(a) ? "" : String(a);
                (function (e, t) {
                  return !e.composing && ("OPTION" === e.tagName || function (e, t) {
                    var n = !0;
                    try {
                      n = document.activeElement !== e
                    } catch (e) {
                    }
                    return n && e.value !== t
                  }(e, t) || function (e, t) {
                    var n = e.value, i = e._vModifiers;
                    if (r(i)) {
                      if (i.lazy) return !1;
                      if (i.number) return h(n) !== h(t);
                      if (i.trim) return n.trim() !== t.trim()
                    }
                    return n !== t
                  }(e, t))
                })(s, d) && (s.value = d)
              } else s[i] = a
            }
          }
        }

        function Pt(e) {
          var t = At(e.style);
          return e.staticStyle ? v(e.staticStyle, t) : t
        }

        function At(e) {
          return Array.isArray(e) ? M(e) : "string" == typeof e ? ya(e) : e
        }

        function Ct(t, n) {
          var i = n.data, a = t.data;
          if (!(e(i.staticStyle) && e(i.style) && e(a.staticStyle) && e(a.style))) {
            var s, o, u = n.elm, d = a.staticStyle, l = a.normalizedStyle || a.style || {}, c = d || l,
              h = At(n.data.style) || {};
            n.data.normalizedStyle = r(h.__ob__) ? v({}, h) : h;
            var f = function (e, t) {
              var n, r = {};
              if (t) for (var i = e; i.componentInstance;) (i = i.componentInstance._vnode) && i.data && (n = Pt(i.data)) && v(r, n);
              (n = Pt(e.data)) && v(r, n);
              for (var a = e; a = a.parent;) a.data && (n = Pt(a.data)) && v(r, n);
              return r
            }(n, !0);
            for (o in c) e(f[o]) && Ma(u, o, "");
            for (o in f) (s = f[o]) !== c[o] && Ma(u, o, null == s ? "" : s)
          }
        }

        function Ot(e, t) {
          if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function (t) {
            return e.classList.add(t)
          }) : e.classList.add(t); else {
            var n = " " + (e.getAttribute("class") || "") + " ";
            n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
          }
        }

        function Et(e, t) {
          if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function (t) {
            return e.classList.remove(t)
          }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class"); else {
            for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
            (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class")
          }
        }

        function Ft(e) {
          if (e) {
            if ("object" == typeof e) {
              var t = {};
              return !1 !== e.css && v(t, wa(e.name || "v")), v(t, e), t
            }
            return "string" == typeof e ? wa(e) : void 0
          }
        }

        function $t(e) {
          Pa(function () {
            Pa(e)
          })
        }

        function It(e, t) {
          var n = e._transitionClasses || (e._transitionClasses = []);
          n.indexOf(t) < 0 && (n.push(t), Ot(e, t))
        }

        function Nt(e, t) {
          e._transitionClasses && m(e._transitionClasses, t), Et(e, t)
        }

        function Rt(e, t, n) {
          var r = Wt(e, t), i = r.type, a = r.timeout, s = r.propCount;
          if (!i) return n();
          var o = i === Ta ? Sa : Ha, u = 0, d = function () {
            e.removeEventListener(o, l), n()
          }, l = function (t) {
            t.target === e && ++u >= s && d()
          };
          setTimeout(function () {
            u < s && d()
          }, a + 1), e.addEventListener(o, l)
        }

        function Wt(e, t) {
          var n, r = window.getComputedStyle(e), i = r[xa + "Delay"].split(", "), a = r[xa + "Duration"].split(", "),
            s = zt(i, a), o = r[ja + "Delay"].split(", "), u = r[ja + "Duration"].split(", "), d = zt(o, u), l = 0,
            c = 0;
          t === Ta ? s > 0 && (n = Ta, l = s, c = a.length) : t === Da ? d > 0 && (n = Da, l = d, c = u.length) : c = (n = (l = Math.max(s, d)) > 0 ? s > d ? Ta : Da : null) ? n === Ta ? a.length : u.length : 0;
          return {type: n, timeout: l, propCount: c, hasTransform: n === Ta && Aa.test(r[xa + "Property"])}
        }

        function zt(e, t) {
          for (; e.length < t.length;) e = e.concat(e);
          return Math.max.apply(null, t.map(function (t, n) {
            return Ut(t) + Ut(e[n])
          }))
        }

        function Ut(e) {
          return 1e3 * Number(e.slice(0, -1))
        }

        function Jt(t, n) {
          var i = t.elm;
          r(i._leaveCb) && (i._leaveCb.cancelled = !0, i._leaveCb());
          var a = Ft(t.data.transition);
          if (!e(a) && !r(i._enterCb) && 1 === i.nodeType) {
            for (var o = a.css, u = a.type, d = a.enterClass, l = a.enterToClass, c = a.enterActiveClass, f = a.appearClass, m = a.appearToClass, p = a.appearActiveClass, _ = a.beforeEnter, y = a.enter, g = a.afterEnter, v = a.enterCancelled, M = a.beforeAppear, b = a.appear, L = a.afterAppear, k = a.appearCancelled, Y = a.duration, T = hi, D = hi.$vnode; D && D.parent;) T = (D = D.parent).context;
            var x = !T._isMounted || !t.isRootInsert;
            if (!x || b || "" === b) {
              var S = x && f ? f : d, j = x && p ? p : c, H = x && m ? m : l, P = x ? M || _ : _,
                A = x && "function" == typeof b ? b : y, C = x ? L || g : g, O = x ? k || v : v,
                E = h(s(Y) ? Y.enter : Y);
              null != E && Bt(E, "enter", t);
              var F = !1 !== o && !hr, $ = Gt(A), I = i._enterCb = w(function () {
                F && (Nt(i, H), Nt(i, j)), I.cancelled ? (F && Nt(i, S), O && O(i)) : C && C(i), i._enterCb = null
              });
              t.data.show || ie(t, "insert", function () {
                var e = i.parentNode, n = e && e._pending && e._pending[t.key];
                n && n.tag === t.tag && n.elm._leaveCb && n.elm._leaveCb(), A && A(i, I)
              }), P && P(i), F && (It(i, S), It(i, j), $t(function () {
                It(i, H), Nt(i, S), I.cancelled || $ || (Vt(E) ? setTimeout(I, E) : Rt(i, u, I))
              })), t.data.show && (n && n(), A && A(i, I)), F || $ || I()
            }
          }
        }

        function qt(t, n) {
          function i() {
            k.cancelled || (t.data.show || ((a.parentNode._pending || (a.parentNode._pending = {}))[t.key] = t), m && m(a), M && (It(a, l), It(a, f), $t(function () {
              It(a, c), Nt(a, l), k.cancelled || b || (Vt(L) ? setTimeout(k, L) : Rt(a, d, k))
            })), p && p(a, k), M || b || k())
          }

          var a = t.elm;
          r(a._enterCb) && (a._enterCb.cancelled = !0, a._enterCb());
          var o = Ft(t.data.transition);
          if (e(o) || 1 !== a.nodeType) return n();
          if (!r(a._leaveCb)) {
            var u = o.css, d = o.type, l = o.leaveClass, c = o.leaveToClass, f = o.leaveActiveClass, m = o.beforeLeave,
              p = o.leave, _ = o.afterLeave, y = o.leaveCancelled, g = o.delayLeave, v = o.duration,
              M = !1 !== u && !hr, b = Gt(p), L = h(s(v) ? v.leave : v);
            r(L) && Bt(L, "leave", t);
            var k = a._leaveCb = w(function () {
              a.parentNode && a.parentNode._pending && (a.parentNode._pending[t.key] = null), M && (Nt(a, c), Nt(a, f)), k.cancelled ? (M && Nt(a, l), y && y(a)) : (n(), _ && _(a)), a._leaveCb = null
            });
            g ? g(i) : i()
          }
        }

        function Bt(e, t, n) {
          "number" != typeof e ? Yr("<transition> explicit " + t + " duration is not a valid number - got " + JSON.stringify(e) + ".", n.context) : isNaN(e) && Yr("<transition> explicit " + t + " duration is NaN - the duration expression might be incorrect.", n.context)
        }

        function Vt(e) {
          return "number" == typeof e && !isNaN(e)
        }

        function Gt(t) {
          if (e(t)) return !1;
          var n = t.fns;
          return r(n) ? Gt(Array.isArray(n) ? n[0] : n) : (t._length || t.length) > 1
        }

        function Qt(e, t) {
          !0 !== t.data.show && Jt(t)
        }

        function Kt(e, t, n) {
          Zt(e, t, n), (cr || fr) && setTimeout(function () {
            Zt(e, t, n)
          }, 0)
        }

        function Zt(e, t, n) {
          var r = t.value, i = e.multiple;
          if (!i || Array.isArray(r)) {
            for (var a, s, o = 0, u = e.options.length; o < u; o++) if (s = e.options[o], i) a = k(r, en(s)) > -1, s.selected !== a && (s.selected = a); else if (L(en(s), r)) return void(e.selectedIndex !== o && (e.selectedIndex = o));
            i || (e.selectedIndex = -1)
          } else Yr('<select multiple v-model="' + t.expression + '"> expects an Array value for its binding, but got ' + Object.prototype.toString.call(r).slice(8, -1), n)
        }

        function Xt(e, t) {
          return t.every(function (t) {
            return !L(t, e)
          })
        }

        function en(e) {
          return "_value" in e ? e._value : e.value
        }

        function tn(e) {
          e.target.composing = !0
        }

        function nn(e) {
          e.target.composing && (e.target.composing = !1, rn(e.target, "input"))
        }

        function rn(e, t) {
          var n = document.createEvent("HTMLEvents");
          n.initEvent(t, !0, !0), e.dispatchEvent(n)
        }

        function an(e) {
          return !e.componentInstance || e.data && e.data.transition ? e : an(e.componentInstance._vnode)
        }

        function sn(e) {
          var t = e && e.componentOptions;
          return t && t.Ctor.options.abstract ? sn(le(t.children)) : e
        }

        function on(e) {
          var t = {}, n = e.$options;
          for (var r in n.propsData) t[r] = e[r];
          var i = n._parentListeners;
          for (var a in i) t[Gn(a)] = i[a];
          return t
        }

        function un(e, t) {
          if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {props: t.componentOptions.propsData})
        }

        function dn(e) {
          e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
        }

        function ln(e) {
          e.data.newPos = e.elm.getBoundingClientRect()
        }

        function cn(e) {
          var t = e.data.pos, n = e.data.newPos, r = t.left - n.left, i = t.top - n.top;
          if (r || i) {
            e.data.moved = !0;
            var a = e.elm.style;
            a.transform = a.WebkitTransform = "translate(" + r + "px," + i + "px)", a.transitionDuration = "0s"
          }
        }

        function hn(e, t) {
          var n = t ? Ua(t) : Wa;
          if (n.test(e)) {
            for (var r, i, a, s = [], o = [], u = n.lastIndex = 0; r = n.exec(e);) {
              (i = r.index) > u && (o.push(a = e.slice(u, i)), s.push(JSON.stringify(a)));
              var d = ht(r[1].trim());
              s.push("_s(" + d + ")"), o.push({"@binding": d}), u = i + r[0].length
            }
            return u < e.length && (o.push(a = e.slice(u)), s.push(JSON.stringify(a))), {
              expression: s.join("+"),
              tokens: o
            }
          }
        }

        function fn(e, t) {
          var n = t ? Ls : bs;
          return e.replace(n, function (e) {
            return Ms[e]
          })
        }

        function mn(e, t) {
          function n(t) {
            l += t, e = e.substring(t)
          }

          function r(e, n, r) {
            var i, o;
            if (null == n && (n = l), null == r && (r = l), e && (o = e.toLowerCase()), e) for (i = s.length - 1; i >= 0 && s[i].lowerCasedTag !== o; i--) ; else i = 0;
            if (i >= 0) {
              for (var u = s.length - 1; u >= i; u--) (u > i || !e) && t.warn && t.warn("tag <" + s[u].tag + "> has no matching end tag."), t.end && t.end(s[u].tag, n, r);
              s.length = i, a = i && s[i - 1].tag
            } else "br" === o ? t.start && t.start(e, [], !0, n, r) : "p" === o && (t.start && t.start(e, [], !1, n, r), t.end && t.end(e, n, r))
          }

          for (var i, a, s = [], o = t.expectHTML, u = t.isUnaryTag || Xn, d = t.canBeLeftOpenTag || Xn, l = 0; e;) {
            if (i = e, a && gs(a)) {
              var c = 0, h = a.toLowerCase(), f = vs[h] || (vs[h] = new RegExp("([\\s\\S]*?)(</" + h + "[^>]*>)", "i")),
                m = e.replace(f, function (e, n, r) {
                  return c = r.length, gs(h) || "noscript" === h || (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), ws(h, n) && (n = n.slice(1)), t.chars && t.chars(n), ""
                });
              l += e.length - m.length, e = m, r(h, l - c, l)
            } else {
              var p = e.indexOf("<");
              if (0 === p) {
                if (is.test(e)) {
                  var _ = e.indexOf("--\x3e");
                  if (_ >= 0) {
                    t.shouldKeepComment && t.comment(e.substring(4, _)), n(_ + 3);
                    continue
                  }
                }
                if (as.test(e)) {
                  var y = e.indexOf("]>");
                  if (y >= 0) {
                    n(y + 2);
                    continue
                  }
                }
                var g = e.match(rs);
                if (g) {
                  n(g[0].length);
                  continue
                }
                var v = e.match(ns);
                if (v) {
                  var M = l;
                  n(v[0].length), r(v[1], M, l);
                  continue
                }
                var b = function () {
                  var t = e.match(es);
                  if (t) {
                    var r = {tagName: t[1], attrs: [], start: l};
                    n(t[0].length);
                    for (var i, a; !(i = e.match(ts)) && (a = e.match(Ka));) n(a[0].length), r.attrs.push(a);
                    if (i) return r.unarySlash = i[1], n(i[0].length), r.end = l, r
                  }
                }();
                if (b) {
                  !function (e) {
                    var n = e.tagName, i = e.unarySlash;
                    o && ("p" === a && Qa(n) && r(a), d(n) && a === n && r(n));
                    for (var l = u(n) || !!i, c = e.attrs.length, h = new Array(c), f = 0; f < c; f++) {
                      var m = e.attrs[f];
                      ss && -1 === m[0].indexOf('""') && ("" === m[3] && delete m[3], "" === m[4] && delete m[4], "" === m[5] && delete m[5]);
                      var p = m[3] || m[4] || m[5] || "",
                        _ = "a" === n && "href" === m[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
                      h[f] = {name: m[1], value: fn(p, _)}
                    }
                    l || (s.push({
                      tag: n,
                      lowerCasedTag: n.toLowerCase(),
                      attrs: h
                    }), a = n), t.start && t.start(n, h, l, e.start, e.end)
                  }(b), ws(a, e) && n(1);
                  continue
                }
              }
              var L = void 0, k = void 0, w = void 0;
              if (p >= 0) {
                for (k = e.slice(p); !(ns.test(k) || es.test(k) || is.test(k) || as.test(k) || (w = k.indexOf("<", 1)) < 0);) p += w, k = e.slice(p);
                L = e.substring(0, p), n(p)
              }
              p < 0 && (L = e, e = ""), t.chars && L && t.chars(L)
            }
            if (e === i) {
              t.chars && t.chars(e), !s.length && t.warn && t.warn('Mal-formatted tag at end of template: "' + e + '"');
              break
            }
          }
          r()
        }

        function pn(e, t, n) {
          return {
            type: 1, tag: e, attrsList: t, attrsMap: function (e) {
              for (var t = {}, n = 0, r = e.length; n < r; n++) !t[e[n].name] || cr || fr || os("duplicate attribute: " + e[n].name), t[e[n].name] = e[n].value;
              return t
            }(t), parent: n, children: []
          }
        }

        function _n(e, t) {
          function n(e) {
            l || (l = !0, os(e))
          }

          function r(e) {
            e.pre && (u = !1), hs(e.tag) && (d = !1);
            for (var n = 0; n < cs.length; n++) cs[n](e, t)
          }

          os = t.warn || ft, hs = t.isPreTag || Xn, fs = t.mustUseProp || Xn, ms = t.getTagNamespace || Xn, ds = mt(t.modules, "transformNode"), ls = mt(t.modules, "preTransformNode"), cs = mt(t.modules, "postTransformNode"), us = t.delimiters;
          var i, a, s = [], o = !1 !== t.preserveWhitespace, u = !1, d = !1, l = !1;
          return mn(e, {
            warn: os,
            expectHTML: t.expectHTML,
            isUnaryTag: t.isUnaryTag,
            canBeLeftOpenTag: t.canBeLeftOpenTag,
            shouldDecodeNewlines: t.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
            shouldKeepComment: t.comments,
            start: function (e, o, l) {
              function c(e) {
                "slot" !== e.tag && "template" !== e.tag || n("Cannot use <" + e.tag + "> as component root element because it may contain multiple nodes."), e.attrsMap.hasOwnProperty("v-for") && n("Cannot use v-for on stateful component root element because it renders multiple elements.")
              }

              var h = a && a.ns || ms(e);
              cr && "svg" === h && (o = function (e) {
                for (var t = [], n = 0; n < e.length; n++) {
                  var r = e[n];
                  Cs.test(r.name) || (r.name = r.name.replace(Os, ""), t.push(r))
                }
                return t
              }(o));
              var f = pn(e, o, a);
              h && (f.ns = h), function (e) {
                return "style" === e.tag || "script" === e.tag && (!e.attrsMap.type || "text/javascript" === e.attrsMap.type)
              }(f) && !Lr() && (f.forbidden = !0, os("Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as <" + e + ">, as they will not be parsed."));
              for (var m = 0; m < ls.length; m++) f = ls[m](f, t) || f;
              if (u || (!function (e) {
                null != bt(e, "v-pre") && (e.pre = !0)
              }(f), f.pre && (u = !0)), hs(f.tag) && (d = !0), u ? function (e) {
                var t = e.attrsList.length;
                if (t) for (var n = e.attrs = new Array(t), r = 0; r < t; r++) n[r] = {
                  name: e.attrsList[r].name,
                  value: JSON.stringify(e.attrsList[r].value)
                }; else e.pre || (e.plain = !0)
              }(f) : f.processed || (gn(f), function (e) {
                var t = bt(e, "v-if");
                if (t) e.if = t, vn(e, {exp: t, block: e}); else {
                  null != bt(e, "v-else") && (e.else = !0);
                  var n = bt(e, "v-else-if");
                  n && (e.elseif = n)
                }
              }(f), function (e) {
                null != bt(e, "v-once") && (e.once = !0)
              }(f), yn(f, t)), i ? s.length || (i.if && (f.elseif || f.else) ? (c(f), vn(i, {
                exp: f.elseif,
                block: f
              })) : n("Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.")) : c(i = f), a && !f.forbidden) if (f.elseif || f.else) !function (e, t) {
                var n = function (e) {
                  var t = e.length;
                  for (; t--;) {
                    if (1 === e[t].type) return e[t];
                    " " !== e[t].text && os('text "' + e[t].text.trim() + '" between v-if and v-else(-if) will be ignored.'), e.pop()
                  }
                }(t.children);
                n && n.if ? vn(n, {
                  exp: e.elseif,
                  block: e
                }) : os("v-" + (e.elseif ? 'else-if="' + e.elseif + '"' : "else") + " used on element <" + e.tag + "> without corresponding v-if.")
              }(f, a); else if (f.slotScope) {
                a.plain = !1;
                var p = f.slotTarget || '"default"';
                (a.scopedSlots || (a.scopedSlots = {}))[p] = f
              } else a.children.push(f), f.parent = a;
              l ? r(f) : (a = f, s.push(f))
            },
            end: function () {
              var e = s[s.length - 1], t = e.children[e.children.length - 1];
              t && 3 === t.type && " " === t.text && !d && e.children.pop(), s.length -= 1, a = s[s.length - 1], r(e)
            },
            chars: function (t) {
              if (a) {
                if (!cr || "textarea" !== a.tag || a.attrsMap.placeholder !== t) {
                  var r = a.children;
                  if (t = d || t.trim() ? function (e) {
                    return "script" === e.tag || "style" === e.tag
                  }(a) ? t : As(t) : o && r.length ? " " : "") {
                    var i;
                    !u && " " !== t && (i = hn(t, us)) ? r.push({
                      type: 2,
                      expression: i.expression,
                      tokens: i.tokens,
                      text: t
                    }) : " " === t && r.length && " " === r[r.length - 1].text || r.push({type: 3, text: t})
                  }
                }
              } else t === e ? n("Component template requires a root element, rather than just text.") : (t = t.trim()) && n('text "' + t + '" outside root element will be ignored.')
            },
            comment: function (e) {
              a.children.push({type: 3, text: e, isComment: !0})
            }
          }), i
        }

        function yn(e, t) {
          !function (e) {
            var t = Mt(e, "key");
            t && ("template" === e.tag && os("<template> cannot be keyed. Place the key on real elements instead."), e.key = t)
          }(e), e.plain = !e.key && !e.attrsList.length, function (e) {
            var t = Mt(e, "ref");
            t && (e.ref = t, e.refInFor = function (e) {
              var t = e;
              for (; t;) {
                if (void 0 !== t.for) return !0;
                t = t.parent
              }
              return !1
            }(e))
          }(e), function (e) {
            if ("slot" === e.tag) e.slotName = Mt(e, "name"), e.key && os("`key` does not work on <slot> because slots are abstract outlets and can possibly expand into multiple elements. Use the key on a wrapping element instead."); else {
              var t;
              "template" === e.tag ? ((t = bt(e, "scope")) && os('the "scope" attribute for scoped slots have been deprecated and replaced by "slot-scope" since 2.5. The new "slot-scope" attribute can also be used on plain elements in addition to <template> to denote scoped slots.', !0), e.slotScope = t || bt(e, "slot-scope")) : (t = bt(e, "slot-scope")) && (e.attrsMap["v-for"] && os("Ambiguous combined usage of slot-scope and v-for on <" + e.tag + "> (v-for takes higher priority). Use a wrapper <template> for the scoped slot to make it clearer.", !0), e.slotScope = t);
              var n = Mt(e, "slot");
              n && (e.slotTarget = '""' === n ? '"default"' : n, "template" === e.tag || e.slotScope || _t(e, "slot", n))
            }
          }(e), function (e) {
            var t;
            (t = Mt(e, "is")) && (e.component = t);
            null != bt(e, "inline-template") && (e.inlineTemplate = !0)
          }(e);
          for (var n = 0; n < ds.length; n++) e = ds[n](e, t) || e;
          !function (e) {
            var t, n, r, i, a, s, o, u = e.attrsList;
            for (t = 0, n = u.length; t < n; t++) if (r = i = u[t].name, a = u[t].value, Ts.test(r)) if (e.hasBindings = !0, (s = function (e) {
              var t = e.match(Ps);
              if (t) {
                var n = {};
                return t.forEach(function (e) {
                  n[e.slice(1)] = !0
                }), n
              }
            }(r)) && (r = r.replace(Ps, "")), Hs.test(r)) r = r.replace(Hs, ""), a = ht(a), o = !1, s && (s.prop && (o = !0, "innerHtml" === (r = Gn(r)) && (r = "innerHTML")), s.camel && (r = Gn(r)), s.sync && vt(e, "update:" + Gn(r), kt(a, "$event"))), o || !e.component && fs(e.tag, e.attrsMap.type, r) ? pt(e, r, a) : _t(e, r, a); else if (Ys.test(r)) r = r.replace(Ys, ""), vt(e, r, a, s, !1, os); else {
              var d = (r = r.replace(Ts, "")).match(js), l = d && d[1];
              l && (r = r.slice(0, -(l.length + 1))), gt(e, r, i, a, l, s), "model" === r && function (e, t) {
                var n = e;
                for (; n;) n.for && n.alias === t && os("<" + e.tag + ' v-model="' + t + '">: You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.'), n = n.parent
              }(e, a)
            } else {
              var c = hn(a, us);
              c && os(r + '="' + a + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.'), _t(e, r, JSON.stringify(a)), !e.component && "muted" === r && fs(e.tag, e.attrsMap.type, r) && pt(e, r, "true")
            }
          }(e)
        }

        function gn(e) {
          var t;
          if (t = bt(e, "v-for")) {
            var n = function (e) {
              var t = e.match(Ds);
              if (!t) return;
              var n = {};
              n.for = t[2].trim();
              var r = t[1].trim().replace(Ss, ""), i = r.match(xs);
              i ? (n.alias = r.replace(xs, ""), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = r;
              return n
            }(t);
            n ? v(e, n) : os("Invalid v-for expression: " + t)
          }
        }

        function vn(e, t) {
          e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t)
        }

        function Mn(e) {
          return pn(e.tag, e.attrsList.slice(), e.parent)
        }

        function bn(e) {
          if (e.static = function (e) {
            if (2 === e.type) return !1;
            if (3 === e.type) return !0;
            return !(!e.pre && (e.hasBindings || e.if || e.for || Jn(e.tag) || !_s(e.tag) || function (e) {
              for (; e.parent;) {
                if ("template" !== (e = e.parent).tag) return !1;
                if (e.for) return !0
              }
              return !1
            }(e) || !Object.keys(e).every(ps)))
          }(e), 1 === e.type) {
            if (!_s(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;
            for (var t = 0, n = e.children.length; t < n; t++) {
              var r = e.children[t];
              bn(r), r.static || (e.static = !1)
            }
            if (e.ifConditions) for (var i = 1, a = e.ifConditions.length; i < a; i++) {
              var s = e.ifConditions[i].block;
              bn(s), s.static || (e.static = !1)
            }
          }
        }

        function Ln(e, t) {
          if (1 === e.type) {
            if ((e.static || e.once) && (e.staticInFor = t), e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void(e.staticRoot = !0);
            if (e.staticRoot = !1, e.children) for (var n = 0, r = e.children.length; n < r; n++) Ln(e.children[n], t || !!e.for);
            if (e.ifConditions) for (var i = 1, a = e.ifConditions.length; i < a; i++) Ln(e.ifConditions[i].block, t)
          }
        }

        function kn(e, t, n) {
          var r = t ? "nativeOn:{" : "on:{";
          for (var i in e) r += '"' + i + '":' + wn(i, e[i]) + ",";
          return r.slice(0, -1) + "}"
        }

        function wn(e, t) {
          if (!t) return "function(){}";
          if (Array.isArray(t)) return "[" + t.map(function (t) {
            return wn(e, t)
          }).join(",") + "]";
          var n = Ns.test(t.value), r = Is.test(t.value);
          if (t.modifiers) {
            var i = "", a = "", s = [];
            for (var o in t.modifiers) if (zs[o]) a += zs[o], Rs[o] && s.push(o); else if ("exact" === o) {
              var u = t.modifiers;
              a += Ws(["ctrl", "shift", "alt", "meta"].filter(function (e) {
                return !u[e]
              }).map(function (e) {
                return "$event." + e + "Key"
              }).join("||"))
            } else s.push(o);
            s.length && (i += function (e) {
              return "if(!('button' in $event)&&" + e.map(Yn).join("&&") + ")return null;"
            }(s)), a && (i += a);
            return "function($event){" + i + (n ? t.value + "($event)" : r ? "(" + t.value + ")($event)" : t.value) + "}"
          }
          return n || r ? t.value : "function($event){" + t.value + "}"
        }

        function Yn(e) {
          var t = parseInt(e, 10);
          if (t) return "$event.keyCode!==" + t;
          var n = Rs[e];
          return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key)"
        }

        function Tn(e, t) {
          var n = new Js(t);
          return {render: "with(this){return " + (e ? Dn(e, n) : '_c("div")') + "}", staticRenderFns: n.staticRenderFns}
        }

        function Dn(e, t) {
          if (e.staticRoot && !e.staticProcessed) return xn(e, t);
          if (e.once && !e.onceProcessed) return Sn(e, t);
          if (e.for && !e.forProcessed) return function (e, t, n, r) {
            var i = e.for, a = e.alias, s = e.iterator1 ? "," + e.iterator1 : "",
              o = e.iterator2 ? "," + e.iterator2 : "";
            t.maybeComponent(e) && "slot" !== e.tag && "template" !== e.tag && !e.key && t.warn("<" + e.tag + ' v-for="' + a + " in " + i + '">: component lists rendered with v-for should have explicit keys. See https://vuejs.org/guide/list.html#key for more info.', !0);
            return e.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + a + s + o + "){return " + (n || Dn)(e, t) + "})"
          }(e, t);
          if (e.if && !e.ifProcessed) return jn(e, t);
          if ("template" !== e.tag || e.slotTarget) {
            if ("slot" === e.tag) return function (e, t) {
              var n = e.slotName || '"default"', r = Cn(e, t), i = "_t(" + n + (r ? "," + r : ""),
                a = e.attrs && "{" + e.attrs.map(function (e) {
                  return Gn(e.name) + ":" + e.value
                }).join(",") + "}", s = e.attrsMap["v-bind"];
              !a && !s || r || (i += ",null");
              a && (i += "," + a);
              s && (i += (a ? "" : ",null") + "," + s);
              return i + ")"
            }(e, t);
            var n;
            if (e.component) n = function (e, t, n) {
              var r = t.inlineTemplate ? null : Cn(t, n, !0);
              return "_c(" + e + "," + Pn(t, n) + (r ? "," + r : "") + ")"
            }(e.component, e, t); else {
              var r = e.plain ? void 0 : Pn(e, t), i = e.inlineTemplate ? null : Cn(e, t, !0);
              n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")"
            }
            for (var a = 0; a < t.transforms.length; a++) n = t.transforms[a](e, n);
            return n
          }
          return Cn(e, t) || "void 0"
        }

        function xn(e, t) {
          return e.staticProcessed = !0, t.staticRenderFns.push("with(this){return " + Dn(e, t) + "}"), "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")"
        }

        function Sn(e, t) {
          if (e.onceProcessed = !0, e.if && !e.ifProcessed) return jn(e, t);
          if (e.staticInFor) {
            for (var n = "", r = e.parent; r;) {
              if (r.for) {
                n = r.key;
                break
              }
              r = r.parent
            }
            return n ? "_o(" + Dn(e, t) + "," + t.onceId++ + "," + n + ")" : (t.warn("v-once can only be used inside v-for that is keyed. "), Dn(e, t))
          }
          return xn(e, t)
        }

        function jn(e, t, n, r) {
          return e.ifProcessed = !0, Hn(e.ifConditions.slice(), t, n, r)
        }

        function Hn(e, t, n, r) {
          function i(e) {
            return n ? n(e, t) : e.once ? Sn(e, t) : Dn(e, t)
          }

          if (!e.length) return r || "_e()";
          var a = e.shift();
          return a.exp ? "(" + a.exp + ")?" + i(a.block) + ":" + Hn(e, t, n, r) : "" + i(a.block)
        }

        function Pn(e, t) {
          var n = "{", r = function (e, t) {
            var n = e.directives;
            if (!n) return;
            var r, i, a, s, o = "directives:[", u = !1;
            for (r = 0, i = n.length; r < i; r++) {
              a = n[r], s = !0;
              var d = t.directives[a.name];
              d && (s = !!d(e, a, t.warn)), s && (u = !0, o += '{name:"' + a.name + '",rawName:"' + a.rawName + '"' + (a.value ? ",value:(" + a.value + "),expression:" + JSON.stringify(a.value) : "") + (a.arg ? ',arg:"' + a.arg + '"' : "") + (a.modifiers ? ",modifiers:" + JSON.stringify(a.modifiers) : "") + "},")
            }
            if (u) return o.slice(0, -1) + "]"
          }(e, t);
          r && (n += r + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');
          for (var i = 0; i < t.dataGenFns.length; i++) n += t.dataGenFns[i](e);
          if (e.attrs && (n += "attrs:{" + En(e.attrs) + "},"), e.props && (n += "domProps:{" + En(e.props) + "},"), e.events && (n += kn(e.events, !1, t.warn) + ","), e.nativeEvents && (n += kn(e.nativeEvents, !0, t.warn) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function (e, t) {
            return "scopedSlots:_u([" + Object.keys(e).map(function (n) {
              return An(n, e[n], t)
            }).join(",") + "])"
          }(e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
            var a = function (e, t) {
              var n = e.children[0];
              1 === e.children.length && 1 === n.type || t.warn("Inline-template components must have exactly one child element.");
              if (1 === n.type) {
                var r = Tn(n, t.options);
                return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function (e) {
                  return "function(){" + e + "}"
                }).join(",") + "]}"
              }
            }(e, t);
            a && (n += a + ",")
          }
          return n = n.replace(/,$/, "") + "}", e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n
        }

        function An(e, t, n) {
          if (t.for && !t.forProcessed) return function (e, t, n) {
            var r = t.for, i = t.alias, a = t.iterator1 ? "," + t.iterator1 : "",
              s = t.iterator2 ? "," + t.iterator2 : "";
            return t.forProcessed = !0, "_l((" + r + "),function(" + i + a + s + "){return " + An(e, t, n) + "})"
          }(e, t, n);
          return "{key:" + e + ",fn:" + ("function(" + String(t.slotScope) + "){return " + ("template" === t.tag ? t.if ? t.if + "?" + (Cn(t, n) || "undefined") + ":undefined" : Cn(t, n) || "undefined" : Dn(t, n)) + "}") + "}"
        }

        function Cn(e, t, n, r, i) {
          var a = e.children;
          if (a.length) {
            var s = a[0];
            if (1 === a.length && s.for && "template" !== s.tag && "slot" !== s.tag) return (r || Dn)(s, t);
            var o = n ? function (e, t) {
              for (var n = 0, r = 0; r < e.length; r++) {
                var i = e[r];
                if (1 === i.type) {
                  if (On(i) || i.ifConditions && i.ifConditions.some(function (e) {
                    return On(e.block)
                  })) {
                    n = 2;
                    break
                  }
                  (t(i) || i.ifConditions && i.ifConditions.some(function (e) {
                    return t(e.block)
                  })) && (n = 1)
                }
              }
              return n
            }(a, t.maybeComponent) : 0, u = i || function (e, t) {
              if (1 === e.type) return Dn(e, t);
              return 3 === e.type && e.isComment ? function (e) {
                return "_e(" + JSON.stringify(e.text) + ")"
              }(e) : function (e) {
                return "_v(" + (2 === e.type ? e.expression : Fn(JSON.stringify(e.text))) + ")"
              }(e)
            };
            return "[" + a.map(function (e) {
              return u(e, t)
            }).join(",") + "]" + (o ? "," + o : "")
          }
        }

        function On(e) {
          return void 0 !== e.for || "template" === e.tag || "slot" === e.tag
        }

        function En(e) {
          for (var t = "", n = 0; n < e.length; n++) {
            var r = e[n];
            t += '"' + r.name + '":' + Fn(r.value) + ","
          }
          return t.slice(0, -1)
        }

        function Fn(e) {
          return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
        }

        function $n(e, t) {
          if (1 === e.type) {
            for (var n in e.attrsMap) if (Ts.test(n)) {
              var r = e.attrsMap[n];
              r && ("v-for" === n ? function (e, t, n) {
                Nn(e.for || "", t, n), In(e.alias, "v-for alias", t, n), In(e.iterator1, "v-for iterator", t, n), In(e.iterator2, "v-for iterator", t, n)
              }(e, 'v-for="' + r + '"', t) : Ys.test(n) ? function (e, t, n) {
                var r = e.replace(Vs, ""), i = r.match(Bs);
                i && "$" !== r.charAt(i.index - 1) && n.push('avoid using JavaScript unary operator as property name: "' + i[0] + '" in expression ' + t.trim());
                Nn(e, t, n)
              }(r, n + '="' + r + '"', t) : Nn(r, n + '="' + r + '"', t))
            }
            if (e.children) for (var i = 0; i < e.children.length; i++) $n(e.children[i], t)
          } else 2 === e.type && Nn(e.expression, e.text, t)
        }

        function In(e, t, n, r) {
          if ("string" == typeof e) try {
            new Function("var " + e + "=_")
          } catch (i) {
            r.push("invalid " + t + ' "' + e + '" in expression: ' + n.trim())
          }
        }

        function Nn(e, t, n) {
          try {
            new Function("return " + e)
          } catch (i) {
            var r = e.replace(Vs, "").match(qs);
            r ? n.push('avoid using JavaScript keyword as property name: "' + r[0] + '"\n  Raw expression: ' + t.trim()) : n.push("invalid expression: " + i.message + " in\n\n    " + e + "\n\n  Raw expression: " + t.trim() + "\n")
          }
        }

        function Rn(e, t) {
          try {
            return new Function(e)
          } catch (n) {
            return t.push({err: n, code: e}), b
          }
        }

        function Wn(e) {
          return ys = ys || document.createElement("div"), ys.innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', ys.innerHTML.indexOf("&#10;") > 0
        }

        var zn = Object.freeze({}), Un = Object.prototype.toString, Jn = f("slot,component", !0),
          qn = f("key,ref,slot,slot-scope,is"), Bn = Object.prototype.hasOwnProperty, Vn = /-(\w)/g,
          Gn = _(function (e) {
            return e.replace(Vn, function (e, t) {
              return t ? t.toUpperCase() : ""
            })
          }), Qn = _(function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
          }), Kn = /\B([A-Z])/g, Zn = _(function (e) {
            return e.replace(Kn, "-$1").toLowerCase()
          }), Xn = function (e, t, n) {
            return !1
          }, er = function (e) {
            return e
          }, tr = "data-server-rendered", nr = ["component", "directive", "filter"],
          rr = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured"],
          ir = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            productionTip: !0,
            devtools: !0,
            performance: !1,
            errorHandler: null,
            warnHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: Xn,
            isReservedAttr: Xn,
            isUnknownElement: Xn,
            getTagNamespace: b,
            parsePlatformTagName: er,
            mustUseProp: Xn,
            _lifecycleHooks: rr
          }, ar = /[^\w.$]/, sr = "__proto__" in {}, or = "undefined" != typeof window,
          ur = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
          dr = ur && WXEnvironment.platform.toLowerCase(), lr = or && window.navigator.userAgent.toLowerCase(),
          cr = lr && /msie|trident/.test(lr), hr = lr && lr.indexOf("msie 9.0") > 0, fr = lr && lr.indexOf("edge/") > 0,
          mr = lr && lr.indexOf("android") > 0 || "android" === dr,
          pr = lr && /iphone|ipad|ipod|ios/.test(lr) || "ios" === dr, _r = lr && /chrome\/\d+/.test(lr) && !fr,
          yr = {}.watch, gr = !1;
        if (or) try {
          var vr = {};
          Object.defineProperty(vr, "passive", {
            get: function () {
              gr = !0
            }
          }), window.addEventListener("test-passive", null, vr)
        } catch (e) {
        }
        var Mr, br, Lr = function () {
            return void 0 === Mr && (Mr = !or && void 0 !== t && "server" === t.process.env.VUE_ENV), Mr
          }, kr = or && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
          wr = "undefined" != typeof Symbol && D(Symbol) && "undefined" != typeof Reflect && D(Reflect.ownKeys);
        br = "undefined" != typeof Set && D(Set) ? Set : function () {
          function e() {
            this.set = Object.create(null)
          }

          return e.prototype.has = function (e) {
            return !0 === this.set[e]
          }, e.prototype.add = function (e) {
            this.set[e] = !0
          }, e.prototype.clear = function () {
            this.set = Object.create(null)
          }, e
        }();
        var Yr = b, Tr = b, Dr = b, xr = b, Sr = "undefined" != typeof console, jr = /(?:^|[-_])(\w)/g;
        Yr = function (e, t) {
          var n = t ? Dr(t) : "";
          ir.warnHandler ? ir.warnHandler.call(null, e, t, n) : Sr && !ir.silent && console.error("[Vue warn]: " + e + n)
        }, Tr = function (e, t) {
          Sr && !ir.silent && console.warn("[Vue tip]: " + e + (t ? Dr(t) : ""))
        }, xr = function (e, t) {
          if (e.$root === e) return "<Root>";
          var n = "function" == typeof e && null != e.cid ? e.options : e._isVue ? e.$options || e.constructor.options : e || {},
            r = n.name || n._componentTag, i = n.__file;
          if (!r && i) {
            var a = i.match(/([^/\\]+)\.vue$/);
            r = a && a[1]
          }
          return (r ? "<" + function (e) {
            return e.replace(jr, function (e) {
              return e.toUpperCase()
            }).replace(/[-_]/g, "")
          }(r) + ">" : "<Anonymous>") + (i && !1 !== t ? " at " + i : "")
        };
        Dr = function (e) {
          if (e._isVue && e.$parent) {
            for (var t = [], n = 0; e;) {
              if (t.length > 0) {
                var r = t[t.length - 1];
                if (r.constructor === e.constructor) {
                  n++, e = e.$parent;
                  continue
                }
                n > 0 && (t[t.length - 1] = [r, n], n = 0)
              }
              t.push(e), e = e.$parent
            }
            return "\n\nfound in\n\n" + t.map(function (e, t) {
              return "" + (0 === t ? "---\x3e " : function (e, t) {
                for (var n = ""; t;) t % 2 == 1 && (n += e), t > 1 && (e += e), t >>= 1;
                return n
              }(" ", 5 + 2 * t)) + (Array.isArray(e) ? xr(e[0]) + "... (" + e[1] + " recursive calls)" : xr(e))
            }).join("\n")
          }
          return "\n\n(found in " + xr(e) + ")"
        };
        var Hr = 0, Pr = function () {
          this.id = Hr++, this.subs = []
        };
        Pr.prototype.addSub = function (e) {
          this.subs.push(e)
        }, Pr.prototype.removeSub = function (e) {
          m(this.subs, e)
        }, Pr.prototype.depend = function () {
          Pr.target && Pr.target.addDep(this)
        }, Pr.prototype.notify = function () {
          for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update()
        }, Pr.target = null;
        var Ar = [], Cr = function (e, t, n, r, i, a, s, o) {
          this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = a, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = s, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = o, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
        }, Or = {child: {configurable: !0}};
        Or.child.get = function () {
          return this.componentInstance
        }, Object.defineProperties(Cr.prototype, Or);
        var Er = function (e) {
          void 0 === e && (e = "");
          var t = new Cr;
          return t.text = e, t.isComment = !0, t
        }, Fr = Array.prototype, $r = Object.create(Fr);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
          var t = Fr[e];
          T($r, e, function () {
            for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
            var i, a = t.apply(this, n), s = this.__ob__;
            switch (e) {
              case"push":
              case"unshift":
                i = n;
                break;
              case"splice":
                i = n.slice(2)
            }
            return i && s.observeArray(i), s.dep.notify(), a
          })
        });
        var Ir = Object.getOwnPropertyNames($r), Nr = {shouldConvert: !0}, Rr = function (e) {
          if (this.value = e, this.dep = new Pr, this.vmCount = 0, T(e, "__ob__", this), Array.isArray(e)) {
            (sr ? H : P)(e, $r, Ir), this.observeArray(e)
          } else this.walk(e)
        };
        Rr.prototype.walk = function (e) {
          for (var t = Object.keys(e), n = 0; n < t.length; n++) C(e, t[n], e[t[n]])
        }, Rr.prototype.observeArray = function (e) {
          for (var t = 0, n = e.length; t < n; t++) A(e[t])
        };
        var Wr = ir.optionMergeStrategies;
        Wr.el = Wr.propsData = function (e, t, n, r) {
          return n || Yr('option "' + r + '" can only be used during instance creation with the `new` keyword.'), Jr(e, t)
        }, Wr.data = function (e, t, n) {
          return n ? I(e, t, n) : t && "function" != typeof t ? (Yr('The "data" option should be a function that returns a per-instance value in component definitions.', n), e) : I(e, t)
        }, rr.forEach(function (e) {
          Wr[e] = N
        }), nr.forEach(function (e) {
          Wr[e + "s"] = R
        }), Wr.watch = function (e, t, n, r) {
          if (e === yr && (e = void 0), t === yr && (t = void 0), !t) return Object.create(e || null);
          if (z(r, t, n), !e) return t;
          var i = {};
          v(i, e);
          for (var a in t) {
            var s = i[a], o = t[a];
            s && !Array.isArray(s) && (s = [s]), i[a] = s ? s.concat(o) : Array.isArray(o) ? o : [o]
          }
          return i
        }, Wr.props = Wr.methods = Wr.inject = Wr.computed = function (e, t, n, r) {
          if (t && z(r, t, n), !e) return t;
          var i = Object.create(null);
          return v(i, e), t && v(i, t), i
        }, Wr.provide = I;
        var zr, Ur, Jr = function (e, t) {
          return void 0 === t ? e : t
        }, qr = /^(String|Number|Boolean|Function|Symbol)$/, Br = [], Vr = !1, Gr = !1;
        if (void 0 !== n && D(n)) Ur = function () {
          n(Z)
        }; else if ("undefined" == typeof MessageChannel || !D(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) Ur = function () {
          setTimeout(Z, 0)
        }; else {
          var Qr = new MessageChannel, Kr = Qr.port2;
          Qr.port1.onmessage = Z, Ur = function () {
            Kr.postMessage(1)
          }
        }
        if ("undefined" != typeof Promise && D(Promise)) {
          var Zr = Promise.resolve();
          zr = function () {
            Zr.then(Z), pr && setTimeout(b)
          }
        } else zr = Ur;
        var Xr, ei, ti = or && window.performance;
        ti && ti.mark && ti.measure && ti.clearMarks && ti.clearMeasures && (Xr = function (e) {
          return ti.mark(e)
        }, ei = function (e, t, n) {
          ti.measure(e, t, n), ti.clearMarks(t), ti.clearMarks(n), ti.clearMeasures(e)
        });
        var ni,
          ri = f("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require"),
          ii = function (e, t) {
            Yr('Property or method "' + t + '" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', e)
          }, ai = "undefined" != typeof Proxy && Proxy.toString().match(/native code/);
        if (ai) {
          var si = f("stop,prevent,self,ctrl,shift,alt,meta,exact");
          ir.keyCodes = new Proxy(ir.keyCodes, {
            set: function (e, t, n) {
              return si(t) ? (Yr("Avoid overwriting built-in modifier in config.keyCodes: ." + t), !1) : (e[t] = n, !0)
            }
          })
        }
        var oi = {
          has: function (e, t) {
            var n = t in e, r = ri(t) || "_" === t.charAt(0);
            return n || r || ii(e, t), n || !r
          }
        }, ui = {
          get: function (e, t) {
            return "string" != typeof t || t in e || ii(e, t), e[t]
          }
        };
        ni = function (e) {
          if (ai) {
            var t = e.$options, n = t.render && t.render._withStripped ? ui : oi;
            e._renderProxy = new Proxy(e, n)
          } else e._renderProxy = e
        };
        var di, li = new br, ci = _(function (e) {
            var t = "&" === e.charAt(0), n = "~" === (e = t ? e.slice(1) : e).charAt(0),
              r = "!" === (e = n ? e.slice(1) : e).charAt(0);
            return e = r ? e.slice(1) : e, {name: e, once: n, capture: r, passive: t}
          }), hi = null, fi = !1, mi = 100, pi = [], _i = [], yi = {}, gi = {}, vi = !1, Mi = !1, bi = 0, Li = 0,
          ki = function (e, t, n, r, i) {
            this.vm = e, i && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++Li, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new br, this.newDepIds = new br, this.expression = t.toString(), "function" == typeof t ? this.getter = t : (this.getter = function (e) {
              if (!ar.test(e)) {
                var t = e.split(".");
                return function (e) {
                  for (var n = 0; n < t.length; n++) {
                    if (!e) return;
                    e = e[t[n]]
                  }
                  return e
                }
              }
            }(t), this.getter || (this.getter = function () {
            }, Yr('Failed watching path: "' + t + '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.', e))), this.value = this.lazy ? void 0 : this.get()
          };
        ki.prototype.get = function () {
          !function (e) {
            Pr.target && Ar.push(Pr.target), Pr.target = e
          }(this);
          var e, t = this.vm;
          try {
            e = this.getter.call(t, t)
          } catch (e) {
            if (!this.user) throw e;
            G(e, t, 'getter for watcher "' + this.expression + '"')
          } finally {
            this.deep && ee(e), Pr.target = Ar.pop(), this.cleanupDeps()
          }
          return e
        }, ki.prototype.addDep = function (e) {
          var t = e.id;
          this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
        }, ki.prototype.cleanupDeps = function () {
          for (var e = this.deps.length; e--;) {
            var t = this.deps[e];
            this.newDepIds.has(t.id) || t.removeSub(this)
          }
          var n = this.depIds;
          this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
        }, ki.prototype.update = function () {
          this.lazy ? this.dirty = !0 : this.sync ? this.run() : function (e) {
            var t = e.id;
            if (null == yi[t]) {
              if (yi[t] = !0, Mi) {
                for (var n = pi.length - 1; n > bi && pi[n].id > e.id;) n--;
                pi.splice(n + 1, 0, e)
              } else pi.push(e);
              vi || (vi = !0, X(be))
            }
          }(this)
        }, ki.prototype.run = function () {
          if (this.active) {
            var e = this.get();
            if (e !== this.value || s(e) || this.deep) {
              var t = this.value;
              if (this.value = e, this.user) try {
                this.cb.call(this.vm, e, t)
              } catch (e) {
                G(e, this.vm, 'callback for watcher "' + this.expression + '"')
              } else this.cb.call(this.vm, e, t)
            }
          }
        }, ki.prototype.evaluate = function () {
          this.value = this.get(), this.dirty = !1
        }, ki.prototype.depend = function () {
          for (var e = this.deps.length; e--;) this.deps[e].depend()
        }, ki.prototype.teardown = function () {
          if (this.active) {
            this.vm._isBeingDestroyed || m(this.vm._watchers, this);
            for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
            this.active = !1
          }
        };
        var wi = {enumerable: !0, configurable: !0, get: b, set: b}, Yi = {lazy: !0};
        $e(Ie.prototype);
        var Ti = {
          init: function (e, t, n, i) {
            if (!e.componentInstance || e.componentInstance._isDestroyed) {
              (e.componentInstance = function (e, t, n, i) {
                var a = {_isComponent: !0, parent: t, _parentVnode: e, _parentElm: n || null, _refElm: i || null},
                  s = e.data.inlineTemplate;
                return r(s) && (a.render = s.render, a.staticRenderFns = s.staticRenderFns), new e.componentOptions.Ctor(a)
              }(e, hi, n, i)).$mount(t ? e.elm : void 0, t)
            } else if (e.data.keepAlive) {
              var a = e;
              Ti.prepatch(a, a)
            }
          }, prepatch: function (e, t) {
            var n = t.componentOptions;
            !function (e, t, n, r, i) {
              fi = !0;
              var a = !!(i || e.$options._renderChildren || r.data.scopedSlots || e.$scopedSlots !== zn);
              if (e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = i, e.$attrs = r.data && r.data.attrs || zn, e.$listeners = n || zn, t && e.$options.props) {
                Nr.shouldConvert = !1;
                for (var s = e._props, o = e.$options._propKeys || [], u = 0; u < o.length; u++) {
                  var d = o[u];
                  s[d] = q(d, e.$options.props, t, e)
                }
                Nr.shouldConvert = !0, e.$options.propsData = t
              }
              if (n) {
                var l = e.$options._parentListeners;
                e.$options._parentListeners = n, fe(e, n, l)
              }
              a && (e.$slots = me(i, r.context), e.$forceUpdate()), fi = !1
            }(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children)
          }, insert: function (e) {
            var t = e.context, n = e.componentInstance;
            n._isMounted || (n._isMounted = !0, Me(n, "mounted")), e.data.keepAlive && (t._isMounted ? function (e) {
              e._inactive = !1, _i.push(e)
            }(n) : ge(n, !0))
          }, destroy: function (e) {
            var t = e.componentInstance;
            t._isDestroyed || (e.data.keepAlive ? ve(t, !0) : t.$destroy())
          }
        }, Di = Object.keys(Ti), xi = 1, Si = 2, ji = 0;
        !function (e) {
          e.prototype._init = function (e) {
            this._uid = ji++;
            var t, n;
            ir.performance && Xr && (t = "vue-perf-start:" + this._uid, n = "vue-perf-end:" + this._uid, Xr(t)), this._isVue = !0, e && e._isComponent ? function (e, t) {
              var n = e.$options = Object.create(e.constructor.options), r = t._parentVnode;
              n.parent = t.parent, n._parentVnode = r, n._parentElm = t._parentElm, n._refElm = t._refElm;
              var i = r.componentOptions;
              n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
            }(this, e) : this.$options = U(Ue(this.constructor), e || {}, this), ni(this), this._self = this, function (e) {
              var t = e.$options, n = t.parent;
              if (n && !t.abstract) {
                for (; n.$options.abstract && n.$parent;) n = n.$parent;
                n.$children.push(e)
              }
              e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
            }(this), function (e) {
              e._events = Object.create(null), e._hasHookEvent = !1;
              var t = e.$options._parentListeners;
              t && fe(e, t)
            }(this), function (e) {
              e._vnode = null, e._staticTrees = null;
              var t = e.$options, n = e.$vnode = t._parentVnode, r = n && n.context;
              e.$slots = me(t._renderChildren, r), e.$scopedSlots = zn, e._c = function (t, n, r, i) {
                return We(e, t, n, r, i, !1)
              }, e.$createElement = function (t, n, r, i) {
                return We(e, t, n, r, i, !0)
              };
              var i = n && n.data;
              C(e, "$attrs", i && i.attrs || zn, function () {
                !fi && Yr("$attrs is readonly.", e)
              }, !0), C(e, "$listeners", t._parentListeners || zn, function () {
                !fi && Yr("$listeners is readonly.", e)
              }, !0)
            }(this), Me(this, "beforeCreate"), function (e) {
              var t = De(e.$options.inject, e);
              t && (Nr.shouldConvert = !1, Object.keys(t).forEach(function (n) {
                C(e, n, t[n], function () {
                  Yr('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "' + n + '"', e)
                })
              }), Nr.shouldConvert = !0)
            }(this), ke(this), function (e) {
              var t = e.$options.provide;
              t && (e._provided = "function" == typeof t ? t.call(e) : t)
            }(this), Me(this, "created"), ir.performance && Xr && (this._name = xr(this, !1), Xr(n), ei("vue " + this._name + " init", t, n)), this.$options.el && this.$mount(this.$options.el)
          }
        }(Je), function (e) {
          var t = {};
          t.get = function () {
            return this._data
          };
          var n = {};
          n.get = function () {
            return this._props
          }, t.set = function (e) {
            Yr("Avoid replacing instance root $data. Use nested data properties instead.", this)
          }, n.set = function () {
            Yr("$props is readonly.", this)
          }, Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = O, e.prototype.$delete = E, e.prototype.$watch = function (e, t, n) {
            if (u(t)) return Te(this, e, t, n);
            (n = n || {}).user = !0;
            var r = new ki(this, e, t, n);
            return n.immediate && t.call(this, r.value), function () {
              r.teardown()
            }
          }
        }(Je), function (e) {
          var t = /^hook:/;
          e.prototype.$on = function (e, n) {
            if (Array.isArray(e)) for (var r = 0, i = e.length; r < i; r++) this.$on(e[r], n); else (this._events[e] || (this._events[e] = [])).push(n), t.test(e) && (this._hasHookEvent = !0);
            return this
          }, e.prototype.$once = function (e, t) {
            function n() {
              r.$off(e, n), t.apply(r, arguments)
            }

            var r = this;
            return n.fn = t, r.$on(e, n), r
          }, e.prototype.$off = function (e, t) {
            if (!arguments.length) return this._events = Object.create(null), this;
            if (Array.isArray(e)) {
              for (var n = 0, r = e.length; n < r; n++) this.$off(e[n], t);
              return this
            }
            var i = this._events[e];
            if (!i) return this;
            if (!t) return this._events[e] = null, this;
            if (t) for (var a, s = i.length; s--;) if ((a = i[s]) === t || a.fn === t) {
              i.splice(s, 1);
              break
            }
            return this
          }, e.prototype.$emit = function (e) {
            var t = e.toLowerCase();
            t !== e && this._events[t] && Tr('Event "' + t + '" is emitted in component ' + xr(this) + ' but the handler is registered for "' + e + '". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "' + Zn(e) + '" instead of "' + e + '".');
            var n = this._events[e];
            if (n) {
              n = n.length > 1 ? g(n) : n;
              for (var r = g(arguments, 1), i = 0, a = n.length; i < a; i++) try {
                n[i].apply(this, r)
              } catch (t) {
                G(t, this, 'event handler for "' + e + '"')
              }
            }
            return this
          }
        }(Je), function (e) {
          e.prototype._update = function (e, t) {
            this._isMounted && Me(this, "beforeUpdate");
            var n = this.$el, r = this._vnode, i = hi;
            hi = this, this._vnode = e, r ? this.$el = this.__patch__(r, e) : (this.$el = this.__patch__(this.$el, e, t, !1, this.$options._parentElm, this.$options._refElm), this.$options._parentElm = this.$options._refElm = null), hi = i, n && (n.__vue__ = null), this.$el && (this.$el.__vue__ = this), this.$vnode && this.$parent && this.$vnode === this.$parent._vnode && (this.$parent.$el = this.$el)
          }, e.prototype.$forceUpdate = function () {
            this._watcher && this._watcher.update()
          }, e.prototype.$destroy = function () {
            if (!this._isBeingDestroyed) {
              Me(this, "beforeDestroy"), this._isBeingDestroyed = !0;
              var e = this.$parent;
              !e || e._isBeingDestroyed || this.$options.abstract || m(e.$children, this), this._watcher && this._watcher.teardown();
              for (var t = this._watchers.length; t--;) this._watchers[t].teardown();
              this._data.__ob__ && this._data.__ob__.vmCount--, this._isDestroyed = !0, this.__patch__(this._vnode, null), Me(this, "destroyed"), this.$off(), this.$el && (this.$el.__vue__ = null), this.$vnode && (this.$vnode.parent = null)
            }
          }
        }(Je), function (e) {
          $e(e.prototype), e.prototype.$nextTick = function (e) {
            return X(e, this)
          }, e.prototype._render = function () {
            var e = this.$options, t = e.render, n = e._parentVnode;
            if (this._isMounted) for (var r in this.$slots) {
              var i = this.$slots[r];
              (i._rendered || i[0] && i[0].elm) && (this.$slots[r] = j(i, !0))
            }
            this.$scopedSlots = n && n.data.scopedSlots || zn, this.$vnode = n;
            var a;
            try {
              a = t.call(this._renderProxy, this.$createElement)
            } catch (e) {
              if (G(e, this, "render"), this.$options.renderError) try {
                a = this.$options.renderError.call(this._renderProxy, this.$createElement, e)
              } catch (e) {
                G(e, this, "renderError"), a = this._vnode
              } else a = this._vnode
            }
            return a instanceof Cr || (Array.isArray(a) && Yr("Multiple root nodes returned from render function. Render function should return a single root node.", this), a = Er()), a.parent = n, a
          }
        }(Je);
        var Hi = [String, RegExp, Array], Pi = {
          KeepAlive: {
            name: "keep-alive",
            abstract: !0,
            props: {include: Hi, exclude: Hi, max: [String, Number]},
            created: function () {
              this.cache = Object.create(null), this.keys = []
            },
            destroyed: function () {
              for (var e in this.cache) Qe(this.cache, e, this.keys)
            },
            watch: {
              include: function (e) {
                Ge(this, function (t) {
                  return Ve(e, t)
                })
              }, exclude: function (e) {
                Ge(this, function (t) {
                  return !Ve(e, t)
                })
              }
            },
            render: function () {
              var e = this.$slots.default, t = le(e), n = t && t.componentOptions;
              if (n) {
                var r = Be(n), i = this.include, a = this.exclude;
                if (i && (!r || !Ve(i, r)) || a && r && Ve(a, r)) return t;
                var s = this.cache, o = this.keys, u = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                s[u] ? (t.componentInstance = s[u].componentInstance, m(o, u), o.push(u)) : (s[u] = t, o.push(u), this.max && o.length > parseInt(this.max) && Qe(s, o[0], o, this._vnode)), t.data.keepAlive = !0
              }
              return t || e && e[0]
            }
          }
        };
        !function (e) {
          var t = {};
          t.get = function () {
            return ir
          }, t.set = function () {
            Yr("Do not replace the Vue.config object, set individual fields instead.")
          }, Object.defineProperty(e, "config", t), e.util = {
            warn: Yr,
            extend: v,
            mergeOptions: U,
            defineReactive: C
          }, e.set = O, e.delete = E, e.nextTick = X, e.options = Object.create(null), nr.forEach(function (t) {
            e.options[t + "s"] = Object.create(null)
          }), e.options._base = e, v(e.options.components, Pi), function (e) {
            e.use = function (e) {
              var t = this._installedPlugins || (this._installedPlugins = []);
              if (t.indexOf(e) > -1) return this;
              var n = g(arguments, 1);
              return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this
            }
          }(e), function (e) {
            e.mixin = function (e) {
              return this.options = U(this.options, e), this
            }
          }(e), qe(e), function (e) {
            nr.forEach(function (t) {
              e[t] = function (e, n) {
                return n ? ("component" === t && W(e), "component" === t && u(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
                  bind: n,
                  update: n
                }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
              }
            })
          }(e)
        }(Je), Object.defineProperty(Je.prototype, "$isServer", {get: Lr}), Object.defineProperty(Je.prototype, "$ssrContext", {
          get: function () {
            return this.$vnode && this.$vnode.ssrContext
          }
        }), Je.version = "2.5.13";
        var Ai, Ci, Oi, Ei, Fi, $i, Ii, Ni, Ri, Wi = f("style,class"), zi = f("input,textarea,option,select,progress"),
          Ui = function (e, t, n) {
            return "value" === n && zi(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
          }, Ji = f("contenteditable,draggable,spellcheck"),
          qi = f("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
          Bi = "http://www.w3.org/1999/xlink", Vi = function (e) {
            return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
          }, Gi = function (e) {
            return Vi(e) ? e.slice(6, e.length) : ""
          }, Qi = function (e) {
            return null == e || !1 === e
          }, Ki = {svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML"},
          Zi = f("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
          Xi = f("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
          ea = function (e) {
            return Zi(e) || Xi(e)
          }, ta = Object.create(null), na = f("text,number,password,search,email,tel,url"), ra = Object.freeze({
            createElement: function (e, t) {
              var n = document.createElement(e);
              return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
            }, createElementNS: function (e, t) {
              return document.createElementNS(Ki[e], t)
            }, createTextNode: function (e) {
              return document.createTextNode(e)
            }, createComment: function (e) {
              return document.createComment(e)
            }, insertBefore: function (e, t, n) {
              e.insertBefore(t, n)
            }, removeChild: function (e, t) {
              e.removeChild(t)
            }, appendChild: function (e, t) {
              e.appendChild(t)
            }, parentNode: function (e) {
              return e.parentNode
            }, nextSibling: function (e) {
              return e.nextSibling
            }, tagName: function (e) {
              return e.tagName
            }, setTextContent: function (e, t) {
              e.textContent = t
            }, setAttribute: function (e, t, n) {
              e.setAttribute(t, n)
            }
          }), ia = {
            create: function (e, t) {
              rt(t)
            }, update: function (e, t) {
              e.data.ref !== t.data.ref && (rt(e, !0), rt(t))
            }, destroy: function (e) {
              rt(e, !0)
            }
          }, aa = new Cr("", {}, []), sa = ["create", "activate", "update", "remove", "destroy"], oa = {
            create: st, update: st, destroy: function (e) {
              st(e, aa)
            }
          }, ua = Object.create(null), da = [ia, oa], la = {create: dt, update: dt}, ca = {create: ct, update: ct},
          ha = /[\w).+\-_$\]]/, fa = "__r", ma = "__c", pa = {create: jt, update: jt}, _a = {create: Ht, update: Ht},
          ya = _(function (e) {
            var t = {}, n = /:(.+)/;
            return e.split(/;(?![^(]*\))/g).forEach(function (e) {
              if (e) {
                var r = e.split(n);
                r.length > 1 && (t[r[0].trim()] = r[1].trim())
              }
            }), t
          }), ga = /^--/, va = /\s*!important$/, Ma = function (e, t, n) {
            if (ga.test(t)) e.style.setProperty(t, n); else if (va.test(n)) e.style.setProperty(t, n.replace(va, ""), "important"); else {
              var r = La(t);
              if (Array.isArray(n)) for (var i = 0, a = n.length; i < a; i++) e.style[r] = n[i]; else e.style[r] = n
            }
          }, ba = ["Webkit", "Moz", "ms"], La = _(function (e) {
            if (Ri = Ri || document.createElement("div").style, "filter" !== (e = Gn(e)) && e in Ri) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < ba.length; n++) {
              var r = ba[n] + t;
              if (r in Ri) return r
            }
          }), ka = {create: Ct, update: Ct}, wa = _(function (e) {
            return {
              enterClass: e + "-enter",
              enterToClass: e + "-enter-to",
              enterActiveClass: e + "-enter-active",
              leaveClass: e + "-leave",
              leaveToClass: e + "-leave-to",
              leaveActiveClass: e + "-leave-active"
            }
          }), Ya = or && !hr, Ta = "transition", Da = "animation", xa = "transition", Sa = "transitionend",
          ja = "animation", Ha = "animationend";
        Ya && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (xa = "WebkitTransition", Sa = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (ja = "WebkitAnimation", Ha = "webkitAnimationEnd"));
        var Pa = or ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
          return e()
        }, Aa = /\b(transform|all)(,|$)/, Ca = function (t) {
          function n(e) {
            var t = S.parentNode(e);
            r(t) && S.removeChild(t, e)
          }

          function s(e, t) {
            return !t && !e.ns && !(ir.ignoredElements.length && ir.ignoredElements.some(function (t) {
              return d(t) ? t.test(e.tag) : t === e.tag
            })) && ir.isUnknownElement(e.tag)
          }

          function o(e, t, n, a, o) {
            if (e.isRootInsert = !o, !function (e, t, n, a) {
              var s = e.data;
              if (r(s)) {
                var o = r(e.componentInstance) && s.keepAlive;
                if (r(s = s.hook) && r(s = s.init) && s(e, !1, n, a), r(e.componentInstance)) return u(e, t), i(o) && function (e, t, n, i) {
                  for (var a, s = e; s.componentInstance;) if (s = s.componentInstance._vnode, r(a = s.data) && r(a = a.transition)) {
                    for (a = 0; a < D.activate.length; ++a) D.activate[a](aa, s);
                    t.push(s);
                    break
                  }
                  l(n, e.elm, i)
                }(e, t, n, a), !0
              }
            }(e, t, n, a)) {
              var d = e.data, h = e.children, f = e.tag;
              r(f) ? (d && d.pre && j++, s(e, j) && Yr("Unknown custom element: <" + f + '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.', e.context), e.elm = e.ns ? S.createElementNS(e.ns, f) : S.createElement(f, e), p(e), c(e, h, t), r(d) && m(e, t), l(n, e.elm, a), d && d.pre && j--) : i(e.isComment) ? (e.elm = S.createComment(e.text), l(n, e.elm, a)) : (e.elm = S.createTextNode(e.text), l(n, e.elm, a))
            }
          }

          function u(e, t) {
            r(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, h(e) ? (m(e, t), p(e)) : (rt(e), t.push(e))
          }

          function l(e, t, n) {
            r(e) && (r(n) ? n.parentNode === e && S.insertBefore(e, t, n) : S.appendChild(e, t))
          }

          function c(e, t, n) {
            if (Array.isArray(t)) {
              b(t);
              for (var r = 0; r < t.length; ++r) o(t[r], n, e.elm, null, !0)
            } else a(e.text) && S.appendChild(e.elm, S.createTextNode(String(e.text)))
          }

          function h(e) {
            for (; e.componentInstance;) e = e.componentInstance._vnode;
            return r(e.tag)
          }

          function m(e, t) {
            for (var n = 0; n < D.create.length; ++n) D.create[n](aa, e);
            r(Y = e.data.hook) && (r(Y.create) && Y.create(aa, e), r(Y.insert) && t.push(e))
          }

          function p(e) {
            var t;
            if (r(t = e.fnScopeId)) S.setAttribute(e.elm, t, ""); else for (var n = e; n;) r(t = n.context) && r(t = t.$options._scopeId) && S.setAttribute(e.elm, t, ""), n = n.parent;
            r(t = hi) && t !== e.context && t !== e.fnContext && r(t = t.$options._scopeId) && S.setAttribute(e.elm, t, "")
          }

          function _(e, t, n, r, i, a) {
            for (; r <= i; ++r) o(n[r], a, e, t)
          }

          function y(e) {
            var t, n, i = e.data;
            if (r(i)) for (r(t = i.hook) && r(t = t.destroy) && t(e), t = 0; t < D.destroy.length; ++t) D.destroy[t](e);
            if (r(t = e.children)) for (n = 0; n < e.children.length; ++n) y(e.children[n])
          }

          function g(e, t, i, a) {
            for (; i <= a; ++i) {
              var s = t[i];
              r(s) && (r(s.tag) ? (v(s), y(s)) : n(s.elm))
            }
          }

          function v(e, t) {
            if (r(t) || r(e.data)) {
              var i, a = D.remove.length + 1;
              for (r(t) ? t.listeners += a : t = function (e, t) {
                function r() {
                  0 == --r.listeners && n(e)
                }

                return r.listeners = t, r
              }(e.elm, a), r(i = e.componentInstance) && r(i = i._vnode) && r(i.data) && v(i, t), i = 0; i < D.remove.length; ++i) D.remove[i](e, t);
              r(i = e.data.hook) && r(i = i.remove) ? i(e, t) : t()
            } else n(e.elm)
          }

          function M(t, n, i, a, s) {
            var u, d, l, c = 0, h = 0, f = n.length - 1, m = n[0], p = n[f], y = i.length - 1, v = i[0], M = i[y],
              k = !s;
            for (b(i); c <= f && h <= y;) e(m) ? m = n[++c] : e(p) ? p = n[--f] : it(m, v) ? (L(m, v, a), m = n[++c], v = i[++h]) : it(p, M) ? (L(p, M, a), p = n[--f], M = i[--y]) : it(m, M) ? (L(m, M, a), k && S.insertBefore(t, m.elm, S.nextSibling(p.elm)), m = n[++c], M = i[--y]) : it(p, v) ? (L(p, v, a), k && S.insertBefore(t, p.elm, m.elm), p = n[--f], v = i[++h]) : (e(u) && (u = at(n, c, f)), e(d = r(v.key) ? u[v.key] : function (e, t, n, i) {
              for (var a = n; a < i; a++) {
                var s = t[a];
                if (r(s) && it(e, s)) return a
              }
            }(v, n, c, f)) ? o(v, a, t, m.elm) : it(l = n[d], v) ? (L(l, v, a), n[d] = void 0, k && S.insertBefore(t, l.elm, m.elm)) : o(v, a, t, m.elm), v = i[++h]);
            c > f ? _(t, e(i[y + 1]) ? null : i[y + 1].elm, i, h, y, a) : h > y && g(0, n, c, f)
          }

          function b(e) {
            for (var t = {}, n = 0; n < e.length; n++) {
              var i = e[n], a = i.key;
              r(a) && (t[a] ? Yr("Duplicate keys detected: '" + a + "'. This may cause an update error.", i.context) : t[a] = !0)
            }
          }

          function L(t, n, a, s) {
            if (t !== n) {
              var o = n.elm = t.elm;
              if (i(t.isAsyncPlaceholder)) r(n.asyncFactory.resolved) ? w(t.elm, n, a) : n.isAsyncPlaceholder = !0; else if (i(n.isStatic) && i(t.isStatic) && n.key === t.key && (i(n.isCloned) || i(n.isOnce))) n.componentInstance = t.componentInstance; else {
                var u, d = n.data;
                r(d) && r(u = d.hook) && r(u = u.prepatch) && u(t, n);
                var l = t.children, c = n.children;
                if (r(d) && h(n)) {
                  for (u = 0; u < D.update.length; ++u) D.update[u](t, n);
                  r(u = d.hook) && r(u = u.update) && u(t, n)
                }
                e(n.text) ? r(l) && r(c) ? l !== c && M(o, l, c, a, s) : r(c) ? (r(t.text) && S.setTextContent(o, ""), _(o, null, c, 0, c.length - 1, a)) : r(l) ? g(0, l, 0, l.length - 1) : r(t.text) && S.setTextContent(o, "") : t.text !== n.text && S.setTextContent(o, n.text), r(d) && r(u = d.hook) && r(u = u.postpatch) && u(t, n)
              }
            }
          }

          function k(e, t, n) {
            if (i(n) && r(e.parent)) e.parent.data.pendingInsert = t; else for (var a = 0; a < t.length; ++a) t[a].data.hook.insert(t[a])
          }

          function w(e, t, n, a) {
            var o, d = t.tag, l = t.data, h = t.children;
            if (a = a || l && l.pre, t.elm = e, i(t.isComment) && r(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
            if (!function (e, t, n) {
              return r(t.tag) ? 0 === t.tag.indexOf("vue-component") || !s(t, n) && t.tag.toLowerCase() === (e.tagName && e.tagName.toLowerCase()) : e.nodeType === (t.isComment ? 8 : 3)
            }(e, t, a)) return !1;
            if (r(l) && (r(o = l.hook) && r(o = o.init) && o(t, !0), r(o = t.componentInstance))) return u(t, n), !0;
            if (r(d)) {
              if (r(h)) if (e.hasChildNodes()) if (r(o = l) && r(o = o.domProps) && r(o = o.innerHTML)) {
                if (o !== e.innerHTML) return "undefined" == typeof console || H || (H = !0, console.warn("Parent: ", e), console.warn("server innerHTML: ", o), console.warn("client innerHTML: ", e.innerHTML)), !1
              } else {
                for (var f = !0, p = e.firstChild, _ = 0; _ < h.length; _++) {
                  if (!p || !w(p, h[_], n, a)) {
                    f = !1;
                    break
                  }
                  p = p.nextSibling
                }
                if (!f || p) return "undefined" == typeof console || H || (H = !0, console.warn("Parent: ", e), console.warn("Mismatching childNodes vs. VNodes: ", e.childNodes, h)), !1
              } else c(t, h, n);
              if (r(l)) {
                var y = !1;
                for (var g in l) if (!P(g)) {
                  y = !0, m(t, n);
                  break
                }
                !y && l.class && ee(l.class)
              }
            } else e.data !== t.text && (e.data = t.text);
            return !0
          }

          var Y, T, D = {}, x = t.modules, S = t.nodeOps;
          for (Y = 0; Y < sa.length; ++Y) for (D[sa[Y]] = [], T = 0; T < x.length; ++T) r(x[T][sa[Y]]) && D[sa[Y]].push(x[T][sa[Y]]);
          var j = 0, H = !1, P = f("attrs,class,staticClass,staticStyle,key");
          return function (t, n, a, s, u, d) {
            if (!e(n)) {
              var l = !1, c = [];
              if (e(t)) l = !0, o(n, c, u, d); else {
                var f = r(t.nodeType);
                if (!f && it(t, n)) L(t, n, c, s); else {
                  if (f) {
                    if (1 === t.nodeType && t.hasAttribute(tr) && (t.removeAttribute(tr), a = !0), i(a)) {
                      if (w(t, n, c)) return k(n, c, !0), t;
                      Yr("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.")
                    }
                    t = function (e) {
                      return new Cr(S.tagName(e).toLowerCase(), {}, [], void 0, e)
                    }(t)
                  }
                  var m = t.elm, p = S.parentNode(m);
                  if (o(n, c, m._leaveCb ? null : p, S.nextSibling(m)), r(n.parent)) for (var _ = n.parent, v = h(n); _;) {
                    for (var M = 0; M < D.destroy.length; ++M) D.destroy[M](_);
                    if (_.elm = n.elm, v) {
                      for (var b = 0; b < D.create.length; ++b) D.create[b](aa, _);
                      var Y = _.data.hook.insert;
                      if (Y.merged) for (var T = 1; T < Y.fns.length; T++) Y.fns[T]()
                    } else rt(_);
                    _ = _.parent
                  }
                  r(p) ? g(0, [t], 0, 0) : r(t.tag) && y(t)
                }
              }
              return k(n, c, l), n.elm
            }
            r(t) && y(t)
          }
        }({
          nodeOps: ra, modules: [la, ca, pa, _a, ka, or ? {
            create: Qt, activate: Qt, remove: function (e, t) {
              !0 !== e.data.show ? qt(e, t) : t()
            }
          } : {}].concat(da)
        });
        hr && document.addEventListener("selectionchange", function () {
          var e = document.activeElement;
          e && e.vmodel && rn(e, "input")
        });
        var Oa = {
          inserted: function (e, t, n, r) {
            "select" === n.tag ? (r.elm && !r.elm._vOptions ? ie(n, "postpatch", function () {
              Oa.componentUpdated(e, t, n)
            }) : Kt(e, t, n.context), e._vOptions = [].map.call(e.options, en)) : ("textarea" === n.tag || na(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("change", nn), mr || (e.addEventListener("compositionstart", tn), e.addEventListener("compositionend", nn)), hr && (e.vmodel = !0)))
          }, componentUpdated: function (e, t, n) {
            if ("select" === n.tag) {
              Kt(e, t, n.context);
              var r = e._vOptions, i = e._vOptions = [].map.call(e.options, en);
              if (i.some(function (e, t) {
                return !L(e, r[t])
              })) {
                (e.multiple ? t.value.some(function (e) {
                  return Xt(e, i)
                }) : t.value !== t.oldValue && Xt(t.value, i)) && rn(e, "change")
              }
            }
          }
        }, Ea = {
          model: Oa, show: {
            bind: function (e, t, n) {
              var r = t.value, i = (n = an(n)).data && n.data.transition,
                a = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
              r && i ? (n.data.show = !0, Jt(n, function () {
                e.style.display = a
              })) : e.style.display = r ? a : "none"
            }, update: function (e, t, n) {
              var r = t.value;
              if (r !== t.oldValue) {
                (n = an(n)).data && n.data.transition ? (n.data.show = !0, r ? Jt(n, function () {
                  e.style.display = e.__vOriginalDisplay
                }) : qt(n, function () {
                  e.style.display = "none"
                })) : e.style.display = r ? e.__vOriginalDisplay : "none"
              }
            }, unbind: function (e, t, n, r, i) {
              i || (e.style.display = e.__vOriginalDisplay)
            }
          }
        }, Fa = {
          name: String,
          appear: Boolean,
          css: Boolean,
          mode: String,
          type: String,
          enterClass: String,
          leaveClass: String,
          enterToClass: String,
          leaveToClass: String,
          enterActiveClass: String,
          leaveActiveClass: String,
          appearClass: String,
          appearActiveClass: String,
          appearToClass: String,
          duration: [Number, String, Object]
        }, $a = {
          name: "transition", props: Fa, abstract: !0, render: function (e) {
            var t = this, n = this.$slots.default;
            if (n && (n = n.filter(function (e) {
              return e.tag || de(e)
            })).length) {
              n.length > 1 && Yr("<transition> can only be used on a single element. Use <transition-group> for lists.", this.$parent);
              var r = this.mode;
              r && "in-out" !== r && "out-in" !== r && Yr("invalid <transition> mode: " + r, this.$parent);
              var i = n[0];
              if (function (e) {
                for (; e = e.parent;) if (e.data.transition) return !0
              }(this.$vnode)) return i;
              var s = sn(i);
              if (!s) return i;
              if (this._leaving) return un(e, i);
              var o = "__transition-" + this._uid + "-";
              s.key = null == s.key ? s.isComment ? o + "comment" : o + s.tag : a(s.key) ? 0 === String(s.key).indexOf(o) ? s.key : o + s.key : s.key;
              var u = (s.data || (s.data = {})).transition = on(this), d = this._vnode, l = sn(d);
              if (s.data.directives && s.data.directives.some(function (e) {
                return "show" === e.name
              }) && (s.data.show = !0), l && l.data && !function (e, t) {
                return t.key === e.key && t.tag === e.tag
              }(s, l) && !de(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
                var c = l.data.transition = v({}, u);
                if ("out-in" === r) return this._leaving = !0, ie(c, "afterLeave", function () {
                  t._leaving = !1, t.$forceUpdate()
                }), un(e, i);
                if ("in-out" === r) {
                  if (de(s)) return d;
                  var h, f = function () {
                    h()
                  };
                  ie(u, "afterEnter", f), ie(u, "enterCancelled", f), ie(c, "delayLeave", function (e) {
                    h = e
                  })
                }
              }
              return i
            }
          }
        }, Ia = v({tag: String, moveClass: String}, Fa);
        delete Ia.mode;
        var Na = {
          Transition: $a, TransitionGroup: {
            props: Ia, render: function (e) {
              for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], a = this.children = [], s = on(this), o = 0; o < i.length; o++) {
                var u = i[o];
                if (u.tag) if (null != u.key && 0 !== String(u.key).indexOf("__vlist")) a.push(u), n[u.key] = u, (u.data || (u.data = {})).transition = s; else {
                  var d = u.componentOptions, l = d ? d.Ctor.options.name || d.tag || "" : u.tag;
                  Yr("<transition-group> children must be keyed: <" + l + ">")
                }
              }
              if (r) {
                for (var c = [], h = [], f = 0; f < r.length; f++) {
                  var m = r[f];
                  m.data.transition = s, m.data.pos = m.elm.getBoundingClientRect(), n[m.key] ? c.push(m) : h.push(m)
                }
                this.kept = e(t, null, c), this.removed = h
              }
              return e(t, null, a)
            }, beforeUpdate: function () {
              this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept
            }, updated: function () {
              var e = this.prevChildren, t = this.moveClass || (this.name || "v") + "-move";
              e.length && this.hasMove(e[0].elm, t) && (e.forEach(dn), e.forEach(ln), e.forEach(cn), this._reflow = document.body.offsetHeight, e.forEach(function (e) {
                if (e.data.moved) {
                  var n = e.elm, r = n.style;
                  It(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Sa, n._moveCb = function e(r) {
                    r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Sa, e), n._moveCb = null, Nt(n, t))
                  })
                }
              }))
            }, methods: {
              hasMove: function (e, t) {
                if (!Ya) return !1;
                if (this._hasMove) return this._hasMove;
                var n = e.cloneNode();
                e._transitionClasses && e._transitionClasses.forEach(function (e) {
                  Et(n, e)
                }), Ot(n, t), n.style.display = "none", this.$el.appendChild(n);
                var r = Wt(n);
                return this.$el.removeChild(n), this._hasMove = r.hasTransform
              }
            }
          }
        };
        Je.config.mustUseProp = Ui, Je.config.isReservedTag = ea, Je.config.isReservedAttr = Wi, Je.config.getTagNamespace = tt, Je.config.isUnknownElement = function (e) {
          if (!or) return !0;
          if (ea(e)) return !1;
          if (e = e.toLowerCase(), null != ta[e]) return ta[e];
          var t = document.createElement(e);
          return e.indexOf("-") > -1 ? ta[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : ta[e] = /HTMLUnknownElement/.test(t.toString())
        }, v(Je.options.directives, Ea), v(Je.options.components, Na), Je.prototype.__patch__ = or ? Ca : b, Je.prototype.$mount = function (e, t) {
          return e = e && or ? nt(e) : void 0, function (e, t, n) {
            e.$el = t, e.$options.render || (e.$options.render = Er, e.$options.template && "#" !== e.$options.template.charAt(0) || e.$options.el || t ? Yr("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", e) : Yr("Failed to mount component: template or render function not defined.", e)), Me(e, "beforeMount");
            var r;
            return r = ir.performance && Xr ? function () {
              var t = e._name, r = e._uid, i = "vue-perf-start:" + r, a = "vue-perf-end:" + r;
              Xr(i);
              var s = e._render();
              Xr(a), ei("vue " + t + " render", i, a), Xr(i), e._update(s, n), Xr(a), ei("vue " + t + " patch", i, a)
            } : function () {
              e._update(e._render(), n)
            }, new ki(e, r, b, null, !0), n = !1, null == e.$vnode && (e._isMounted = !0, Me(e, "mounted")), e
          }(this, e, t)
        }, Je.nextTick(function () {
          ir.devtools && (kr ? kr.emit("init", Je) : _r && console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools")), !1 !== ir.productionTip && or && "undefined" != typeof console && console[console.info ? "info" : "log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html")
        }, 0);
        var Ra, Wa = /\{\{((?:.|\n)+?)\}\}/g, za = /[-.*+?^${}()|[\]\/\\]/g, Ua = _(function (e) {
            var t = e[0].replace(za, "\\$&"), n = e[1].replace(za, "\\$&");
            return new RegExp(t + "((?:.|\\n)+?)" + n, "g")
          }), Ja = {
            staticKeys: ["staticClass"], transformNode: function (e, t) {
              var n = t.warn || ft, r = bt(e, "class");
              r && hn(r, t.delimiters) && n('class="' + r + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div class="{{ val }}">, use <div :class="val">.');
              r && (e.staticClass = JSON.stringify(r));
              var i = Mt(e, "class", !1);
              i && (e.classBinding = i)
            }, genData: function (e) {
              var t = "";
              return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t
            }
          }, qa = {
            staticKeys: ["staticStyle"], transformNode: function (e, t) {
              var n = t.warn || ft, r = bt(e, "style");
              r && (hn(r, t.delimiters) && n('style="' + r + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div style="{{ val }}">, use <div :style="val">.'), e.staticStyle = JSON.stringify(ya(r)));
              var i = Mt(e, "style", !1);
              i && (e.styleBinding = i)
            }, genData: function (e) {
              var t = "";
              return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t
            }
          }, Ba = function (e) {
            return Ra = Ra || document.createElement("div"), Ra.innerHTML = e, Ra.textContent
          }, Va = f("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
          Ga = f("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
          Qa = f("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
          Ka = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
          Za = "[a-zA-Z_][\\w\\-\\.]*", Xa = "((?:" + Za + "\\:)?" + Za + ")", es = new RegExp("^<" + Xa),
          ts = /^\s*(\/?)>/, ns = new RegExp("^<\\/" + Xa + "[^>]*>"), rs = /^<!DOCTYPE [^>]+>/i, is = /^<!--/,
          as = /^<!\[/, ss = !1;
        "x".replace(/x(.)?/g, function (e, t) {
          ss = "" === t
        });
        var os, us, ds, ls, cs, hs, fs, ms, ps, _s, ys, gs = f("script,style,textarea", !0), vs = {},
          Ms = {"&lt;": "<", "&gt;": ">", "&quot;": '"', "&amp;": "&", "&#10;": "\n", "&#9;": "\t"},
          bs = /&(?:lt|gt|quot|amp);/g, Ls = /&(?:lt|gt|quot|amp|#10|#9);/g, ks = f("pre,textarea", !0),
          ws = function (e, t) {
            return e && ks(e) && "\n" === t[0]
          }, Ys = /^@|^v-on:/, Ts = /^v-|^@|^:/, Ds = /(.*?)\s+(?:in|of)\s+(.*)/, xs = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
          Ss = /^\(|\)$/g, js = /:(.*)$/, Hs = /^:|^v-bind:/, Ps = /\.[^.]+/g, As = _(Ba), Cs = /^xmlns:NS\d+/,
          Os = /^NS\d+:/, Es = [Ja, qa, {
            preTransformNode: function (e, t) {
              if ("input" === e.tag) {
                var n = e.attrsMap;
                if (n["v-model"] && (n["v-bind:type"] || n[":type"])) {
                  var r = Mt(e, "type"), i = bt(e, "v-if", !0), a = i ? "&&(" + i + ")" : "",
                    s = null != bt(e, "v-else", !0), o = bt(e, "v-else-if", !0), u = Mn(e);
                  gn(u), yt(u, "type", "checkbox"), yn(u, t), u.processed = !0, u.if = "(" + r + ")==='checkbox'" + a, vn(u, {
                    exp: u.if,
                    block: u
                  });
                  var d = Mn(e);
                  bt(d, "v-for", !0), yt(d, "type", "radio"), yn(d, t), vn(u, {
                    exp: "(" + r + ")==='radio'" + a,
                    block: d
                  });
                  var l = Mn(e);
                  return bt(l, "v-for", !0), yt(l, ":type", r), yn(l, t), vn(u, {
                    exp: i,
                    block: l
                  }), s ? u.else = !0 : o && (u.elseif = o), u
                }
              }
            }
          }], Fs = {
            expectHTML: !0,
            modules: Es,
            directives: {
              model: function (e, t, n) {
                Ii = n;
                var r = t.value, i = t.modifiers, a = e.tag, s = e.attrsMap.type;
                if ("input" === a && "file" === s && Ii("<" + e.tag + ' v-model="' + r + '" type="file">:\nFile inputs are read only. Use a v-on:change listener instead.'), e.component) return Lt(e, r, i), !1;
                if ("select" === a) !function (e, t, n) {
                  var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
                  r = r + " " + kt(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), vt(e, "change", r, null, !0)
                }(e, r, i); else if ("input" === a && "checkbox" === s) !function (e, t, n) {
                  var r = n && n.number, i = Mt(e, "value") || "null", a = Mt(e, "true-value") || "true",
                    s = Mt(e, "false-value") || "false";
                  pt(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === a ? ":(" + t + ")" : ":_q(" + t + "," + a + ")")), vt(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + a + "):(" + s + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + t + "=$$a.concat([$$v]))}else{$$i>-1&&(" + t + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + kt(t, "$$c") + "}", null, !0)
                }(e, r, i); else if ("input" === a && "radio" === s) !function (e, t, n) {
                  var r = n && n.number, i = Mt(e, "value") || "null";
                  pt(e, "checked", "_q(" + t + "," + (i = r ? "_n(" + i + ")" : i) + ")"), vt(e, "change", kt(t, i), null, !0)
                }(e, r, i); else if ("input" === a || "textarea" === a) !function (e, t, n) {
                  var r = e.attrsMap.type, i = e.attrsMap["v-bind:value"] || e.attrsMap[":value"];
                  if (i) {
                    var a = e.attrsMap["v-bind:value"] ? "v-bind:value" : ":value";
                    Ii(a + '="' + i + '" conflicts with v-model on the same element because the latter already expands to a value binding internally')
                  }
                  var s = n || {}, o = s.lazy, u = s.number, d = s.trim, l = !o && "range" !== r,
                    c = o ? "change" : "range" === r ? fa : "input", h = "$event.target.value";
                  d && (h = "$event.target.value.trim()"), u && (h = "_n(" + h + ")");
                  var f = kt(t, h);
                  l && (f = "if($event.target.composing)return;" + f), pt(e, "value", "(" + t + ")"), vt(e, c, f, null, !0), (d || u) && vt(e, "blur", "$forceUpdate()")
                }(e, r, i); else {
                  if (!ir.isReservedTag(a)) return Lt(e, r, i), !1;
                  Ii("<" + e.tag + ' v-model="' + r + "\">: v-model is not supported on this element type. If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component.")
                }
                return !0
              }, text: function (e, t) {
                t.value && pt(e, "textContent", "_s(" + t.value + ")")
              }, html: function (e, t) {
                t.value && pt(e, "innerHTML", "_s(" + t.value + ")")
              }
            },
            isPreTag: function (e) {
              return "pre" === e
            },
            isUnaryTag: Va,
            mustUseProp: Ui,
            canBeLeftOpenTag: Ga,
            isReservedTag: ea,
            getTagNamespace: tt,
            staticKeys: function (e) {
              return e.reduce(function (e, t) {
                return e.concat(t.staticKeys || [])
              }, []).join(",")
            }(Es)
          }, $s = _(function (e) {
            return f("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (e ? "," + e : ""))
          }), Is = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
          Ns = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
          Rs = {esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46]},
          Ws = function (e) {
            return "if(" + e + ")return null;"
          }, zs = {
            stop: "$event.stopPropagation();",
            prevent: "$event.preventDefault();",
            self: Ws("$event.target !== $event.currentTarget"),
            ctrl: Ws("!$event.ctrlKey"),
            shift: Ws("!$event.shiftKey"),
            alt: Ws("!$event.altKey"),
            meta: Ws("!$event.metaKey"),
            left: Ws("'button' in $event && $event.button !== 0"),
            middle: Ws("'button' in $event && $event.button !== 1"),
            right: Ws("'button' in $event && $event.button !== 2")
          }, Us = {
            on: function (e, t) {
              t.modifiers && Yr("v-on without argument does not support modifiers."), e.wrapListeners = function (e) {
                return "_g(" + e + "," + t.value + ")"
              }
            }, bind: function (e, t) {
              e.wrapData = function (n) {
                return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")"
              }
            }, cloak: b
          }, Js = function (e) {
            this.options = e, this.warn = e.warn || ft, this.transforms = mt(e.modules, "transformCode"), this.dataGenFns = mt(e.modules, "genData"), this.directives = v(v({}, Us), e.directives);
            var t = e.isReservedTag || Xn;
            this.maybeComponent = function (e) {
              return !t(e.tag)
            }, this.onceId = 0, this.staticRenderFns = []
          },
          qs = new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"),
          Bs = new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)"),
          Vs = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g,
          Gs = function (e) {
            return function (t) {
              function n(n, r) {
                var i = Object.create(t), a = [], s = [];
                if (i.warn = function (e, t) {
                  (t ? s : a).push(e)
                }, r) {
                  r.modules && (i.modules = (t.modules || []).concat(r.modules)), r.directives && (i.directives = v(Object.create(t.directives || null), r.directives));
                  for (var o in r) "modules" !== o && "directives" !== o && (i[o] = r[o])
                }
                var u = e(n, i);
                return a.push.apply(a, function (e) {
                  var t = [];
                  return e && $n(e, t), t
                }(u.ast)), u.errors = a, u.tips = s, u
              }

              return {
                compile: n, compileToFunctions: function (e) {
                  var t = Object.create(null);
                  return function (n, r, i) {
                    var a = (r = v({}, r)).warn || Yr;
                    delete r.warn;
                    try {
                      new Function("return 1")
                    } catch (e) {
                      e.toString().match(/unsafe-eval|CSP/) && a("It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.")
                    }
                    var s = r.delimiters ? String(r.delimiters) + n : n;
                    if (t[s]) return t[s];
                    var o = e(n, r);
                    o.errors && o.errors.length && a("Error compiling template:\n\n" + n + "\n\n" + o.errors.map(function (e) {
                      return "- " + e
                    }).join("\n") + "\n", i), o.tips && o.tips.length && o.tips.forEach(function (e) {
                      return Tr(e, i)
                    });
                    var u = {}, d = [];
                    return u.render = Rn(o.render, d), u.staticRenderFns = o.staticRenderFns.map(function (e) {
                      return Rn(e, d)
                    }), o.errors && o.errors.length || !d.length || a("Failed to generate render function:\n\n" + d.map(function (e) {
                      var t = e.err, n = e.code;
                      return t.toString() + " in\n\n" + n + "\n"
                    }).join("\n"), i), t[s] = u
                  }
                }(n)
              }
            }
          }(function (e, t) {
            var n = _n(e.trim(), t);
            !1 !== t.optimize && function (e, t) {
              e && (ps = $s(t.staticKeys || ""), _s = t.isReservedTag || Xn, bn(e), Ln(e, !1))
            }(n, t);
            var r = Tn(n, t);
            return {ast: n, render: r.render, staticRenderFns: r.staticRenderFns}
          })(Fs).compileToFunctions, Qs = !!or && Wn(!1), Ks = !!or && Wn(!0), Zs = _(function (e) {
            var t = nt(e);
            return t && t.innerHTML
          }), Xs = Je.prototype.$mount;
        return Je.prototype.$mount = function (e, t) {
          if ((e = e && nt(e)) === document.body || e === document.documentElement) return Yr("Do not mount Vue to <html> or <body> - mount to normal elements instead."), this;
          var n = this.$options;
          if (!n.render) {
            var r = n.template;
            if (r) if ("string" == typeof r) "#" === r.charAt(0) && ((r = Zs(r)) || Yr("Template element not found or is empty: " + n.template, this)); else {
              if (!r.nodeType) return Yr("invalid template option:" + r, this), this;
              r = r.innerHTML
            } else e && (r = function (e) {
              if (e.outerHTML) return e.outerHTML;
              var t = document.createElement("div");
              return t.appendChild(e.cloneNode(!0)), t.innerHTML
            }(e));
            if (r) {
              ir.performance && Xr && Xr("compile");
              var i = Gs(r, {
                shouldDecodeNewlines: Qs,
                shouldDecodeNewlinesForHref: Ks,
                delimiters: n.delimiters,
                comments: n.comments
              }, this), a = i.render, s = i.staticRenderFns;
              n.render = a, n.staticRenderFns = s, ir.performance && Xr && (Xr("compile end"), ei("vue " + this._name + " compile", "compile", "compile end"))
            }
          }
          return Xs.call(this, e, t)
        }, Je.compile = Gs, Je
      })
    }).call(t, n("DuR2"), n("162o").setImmediate)
  }, "4rNV": function (e, t) {
    window.SparkForm = function (e) {
      var t = this;
      $.extend(this, e), this.errors = new SparkFormErrors, this.busy = !1, this.successful = !1, this.startProcessing = function () {
        t.errors.forget(), t.busy = !0, t.successful = !1
      }, this.finishProcessing = function () {
        t.busy = !1, t.successful = !0
      }, this.resetStatus = function () {
        t.errors.forget(), t.busy = !1, t.successful = !1
      }, this.setErrors = function (e) {
        t.busy = !1, t.errors.set(e)
      }
    }
  }, "5Omq": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("se", {
        months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
        monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
        weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
        weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
        weekdaysMin: "s_v_m_g_d_b_L".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "MMMM D. [b.] YYYY",
          LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
          LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
        },
        calendar: {
          sameDay: "[otne ti] LT",
          nextDay: "[ihttin ti] LT",
          nextWeek: "dddd [ti] LT",
          lastDay: "[ikte ti] LT",
          lastWeek: "[ovddit] dddd [ti] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s geažes",
          past: "maŋit %s",
          s: "moadde sekunddat",
          ss: "%d sekunddat",
          m: "okta minuhta",
          mm: "%d minuhtat",
          h: "okta diimmu",
          hh: "%d diimmut",
          d: "okta beaivi",
          dd: "%d beaivvit",
          M: "okta mánnu",
          MM: "%d mánut",
          y: "okta jahki",
          yy: "%d jagit"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, "5VQ+": function (e, t, n) {
    "use strict";
    var r = n("cGG2");
    e.exports = function (e, t) {
      r.forEach(e, function (n, r) {
        r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
      })
    }
  }, "5W4I": function (e, t) {
    +function (e) {
      "use strict";

      function t(t) {
        return this.each(function () {
          var r = e(this), i = r.data("bs.carousel"), a = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t),
            s = "string" == typeof t ? t : a.slide;
          i || r.data("bs.carousel", i = new n(this, a)), "number" == typeof t ? i.to(t) : s ? i[s]() : a.interval && i.pause().cycle()
        })
      }

      var n = function (t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
      };
      n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
      }, n.prototype.keydown = function (e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
          switch (e.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return
          }
          e.preventDefault()
        }
      }, n.prototype.cycle = function (t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
      }, n.prototype.getItemIndex = function (e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
      }, n.prototype.getItemForDirection = function (e, t) {
        var n = this.getItemIndex(t);
        if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap) return t;
        var r = (n + ("prev" == e ? -1 : 1)) % this.$items.length;
        return this.$items.eq(r)
      }, n.prototype.to = function (e) {
        var t = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
          t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
      }, n.prototype.pause = function (t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
      }, n.prototype.next = function () {
        if (!this.sliding) return this.slide("next")
      }, n.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev")
      }, n.prototype.slide = function (t, r) {
        var i = this.$element.find(".item.active"), a = r || this.getItemForDirection(t, i), s = this.interval,
          o = "next" == t ? "left" : "right", u = this;
        if (a.hasClass("active")) return this.sliding = !1;
        var d = a[0], l = e.Event("slide.bs.carousel", {relatedTarget: d, direction: o});
        if (this.$element.trigger(l), !l.isDefaultPrevented()) {
          if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var c = e(this.$indicators.children()[this.getItemIndex(a)]);
            c && c.addClass("active")
          }
          var h = e.Event("slid.bs.carousel", {relatedTarget: d, direction: o});
          return e.support.transition && this.$element.hasClass("slide") ? (a.addClass(t), a[0].offsetWidth, i.addClass(o), a.addClass(o), i.one("bsTransitionEnd", function () {
            a.removeClass([t, o].join(" ")).addClass("active"), i.removeClass(["active", o].join(" ")), u.sliding = !1, setTimeout(function () {
              u.$element.trigger(h)
            }, 0)
          }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (i.removeClass("active"), a.addClass("active"), this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this
        }
      };
      var r = e.fn.carousel;
      e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function () {
        return e.fn.carousel = r, this
      };
      var i = function (n) {
        var r, i = e(this), a = e(i.attr("data-target") || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""));
        if (a.hasClass("carousel")) {
          var s = e.extend({}, a.data(), i.data()), o = i.attr("data-slide-to");
          o && (s.interval = !1), t.call(a, s), o && a.data("bs.carousel").to(o), n.preventDefault()
        }
      };
      e(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i), e(window).on("load", function () {
        e('[data-ride="carousel"]').each(function () {
          var n = e(this);
          t.call(n, n.data())
        })
      })
    }(jQuery)
  }, "5j66": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("km", {
        months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
        monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
        weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
          nextDay: "[ស្អែក ម៉ោង] LT",
          nextWeek: "dddd [ម៉ោង] LT",
          lastDay: "[ម្សិលមិញ ម៉ោង] LT",
          lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%sទៀត",
          past: "%sមុន",
          s: "ប៉ុន្មានវិនាទី",
          ss: "%d វិនាទី",
          m: "មួយនាទី",
          mm: "%d នាទី",
          h: "មួយម៉ោង",
          hh: "%d ម៉ោង",
          d: "មួយថ្ងៃ",
          dd: "%d ថ្ងៃ",
          M: "មួយខែ",
          MM: "%d ខែ",
          y: "មួយឆ្នាំ",
          yy: "%d ឆ្នាំ"
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, "5vPg": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, n, r) {
        var i = "";
        if (t) switch (n) {
          case"s":
            i = "काही सेकंद";
            break;
          case"ss":
            i = "%d सेकंद";
            break;
          case"m":
            i = "एक मिनिट";
            break;
          case"mm":
            i = "%d मिनिटे";
            break;
          case"h":
            i = "एक तास";
            break;
          case"hh":
            i = "%d तास";
            break;
          case"d":
            i = "एक दिवस";
            break;
          case"dd":
            i = "%d दिवस";
            break;
          case"M":
            i = "एक महिना";
            break;
          case"MM":
            i = "%d महिने";
            break;
          case"y":
            i = "एक वर्ष";
            break;
          case"yy":
            i = "%d वर्षे"
        } else switch (n) {
          case"s":
            i = "काही सेकंदां";
            break;
          case"ss":
            i = "%d सेकंदां";
            break;
          case"m":
            i = "एका मिनिटा";
            break;
          case"mm":
            i = "%d मिनिटां";
            break;
          case"h":
            i = "एका तासा";
            break;
          case"hh":
            i = "%d तासां";
            break;
          case"d":
            i = "एका दिवसा";
            break;
          case"dd":
            i = "%d दिवसां";
            break;
          case"M":
            i = "एका महिन्या";
            break;
          case"MM":
            i = "%d महिन्यां";
            break;
          case"y":
            i = "एका वर्षा";
            break;
          case"yy":
            i = "%d वर्षां"
        }
        return i.replace(/%d/i, e)
      }

      var n = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"},
        r = {"१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"};
      return e.defineLocale("mr", {
        months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
        monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
        monthsParseExact: !0,
        weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
        weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
          LT: "A h:mm वाजता",
          LTS: "A h:mm:ss वाजता",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm वाजता",
          LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
        },
        calendar: {
          sameDay: "[आज] LT",
          nextDay: "[उद्या] LT",
          nextWeek: "dddd, LT",
          lastDay: "[काल] LT",
          lastWeek: "[मागील] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%sमध्ये",
          past: "%sपूर्वी",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return r[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return n[e]
          })
        },
        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
        },
        week: {dow: 0, doy: 6}
      })
    })
  }, "62TM": function (e, t) {
    e.exports = {props: ["user"]}
  }, "6SyK": function (e, t) {
    e.exports = {
      data: function () {
        return {plans: [], form: new SparkForm({name: "", slug: ""})}
      }, computed: {
        activeSubscription: function () {
          if (this.$parent.billable) {
            var e = _.find(this.$parent.billable.subscriptions, function (e) {
              return "default" == e.name
            });
            return void 0 !== e ? e : void 0
          }
        }, activePlan: function () {
          var e = this;
          if (this.activeSubscription) return _.find(this.plans, function (t) {
            return t.id == e.activeSubscription.provider_plan
          })
        }, hasTeamLimit: function () {
          return !!this.activePlan && !!this.activePlan.attributes.teams
        }, remainingTeams: function () {
          var e = _.filter(this.$parent.teams, {owner_id: this.$parent.billable.id});
          return this.activePlan ? this.activePlan.attributes.teams - e.length : 0
        }, canCreateMoreTeams: function () {
          return !this.hasTeamLimit || this.remainingTeams > 0
        }
      }, created: function () {
        this.getPlans()
      }, events: {
        activatedTab: function (e) {
          return e === Spark.pluralTeamString && Vue.nextTick(function () {
            $("#create-team-name").focus()
          }), !0
        }
      }, watch: {
        "form.name": function (e, t) {
          "" != this.form.slug && this.form.slug != t.toLowerCase().replace(/[\s\W-]+/g, "-") || (this.form.slug = e.toLowerCase().replace(/[\s\W-]+/g, "-"))
        }
      }, methods: {
        create: function () {
          var e = this;
          Spark.post("/settings/" + Spark.pluralTeamString, this.form).then(function () {
            e.form.name = "", e.form.slug = "", Bus.$emit("updateUser"), Bus.$emit("updateTeams")
          })
        }, getPlans: function () {
          var e = this;
          axios.get("/spark/plans").then(function (t) {
            e.plans = t.data
          })
        }
      }
    }
  }, "6cf8": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {
        0: "-чү",
        1: "-чи",
        2: "-чи",
        3: "-чү",
        4: "-чү",
        5: "-чи",
        6: "-чы",
        7: "-чи",
        8: "-чи",
        9: "-чу",
        10: "-чу",
        20: "-чы",
        30: "-чу",
        40: "-чы",
        50: "-чү",
        60: "-чы",
        70: "-чи",
        80: "-чи",
        90: "-чу",
        100: "-чү"
      };
      return e.defineLocale("ky", {
        months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
        monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
        weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
        weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Бүгүн саат] LT",
          nextDay: "[Эртең саат] LT",
          nextWeek: "dddd [саат] LT",
          lastDay: "[Кече саат] LT",
          lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ичинде",
          past: "%s мурун",
          s: "бирнече секунд",
          ss: "%d секунд",
          m: "бир мүнөт",
          mm: "%d мүнөт",
          h: "бир саат",
          hh: "%d саат",
          d: "бир күн",
          dd: "%d күн",
          M: "бир ай",
          MM: "%d ай",
          y: "бир жыл",
          yy: "%d жыл"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal: function (e) {
          return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
        },
        week: {dow: 1, doy: 7}
      })
    })
  }, "7D4p": function (e, t, n) {
    var r = n("x6be");
    Vue.component("spark-redeem-coupon", {mixins: [r]})
  }, "7GwW": function (e, t, n) {
    "use strict";
    var r = n("cGG2"), i = n("21It"), a = n("DQCr"), s = n("oJlt"), o = n("GHBc"), u = n("FtD3"),
      d = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n("thJu");
    e.exports = function (e) {
      return new Promise(function (t, l) {
        var c = e.data, h = e.headers;
        r.isFormData(c) && delete h["Content-Type"];
        var f = new XMLHttpRequest, m = "onreadystatechange", p = !1;
        if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in f || o(e.url) || (f = new window.XDomainRequest, m = "onload", p = !0, f.onprogress = function () {
        }, f.ontimeout = function () {
        }), e.auth) {
          var _ = e.auth.username || "", y = e.auth.password || "";
          h.Authorization = "Basic " + d(_ + ":" + y)
        }
        if (f.open(e.method.toUpperCase(), a(e.url, e.params, e.paramsSerializer), !0), f.timeout = e.timeout, f[m] = function () {
          if (f && (4 === f.readyState || p) && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:"))) {
            var n = "getAllResponseHeaders" in f ? s(f.getAllResponseHeaders()) : null, r = {
              data: e.responseType && "text" !== e.responseType ? f.response : f.responseText,
              status: 1223 === f.status ? 204 : f.status,
              statusText: 1223 === f.status ? "No Content" : f.statusText,
              headers: n,
              config: e,
              request: f
            };
            i(t, l, r), f = null
          }
        }, f.onerror = function () {
          l(u("Network Error", e)), f = null
        }, f.ontimeout = function () {
          l(u("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED")), f = null
        }, r.isStandardBrowserEnv()) {
          var g = n("p1b6"),
            v = (e.withCredentials || o(e.url)) && e.xsrfCookieName ? g.read(e.xsrfCookieName) : void 0;
          v && (h[e.xsrfHeaderName] = v)
        }
        if ("setRequestHeader" in f && r.forEach(h, function (e, t) {
          void 0 === c && "content-type" === t.toLowerCase() ? delete h[t] : f.setRequestHeader(t, e)
        }), e.withCredentials && (f.withCredentials = !0), e.responseType) try {
          f.responseType = e.responseType
        } catch (e) {
          if ("json" !== f.responseType) throw e
        }
        "function" == typeof e.onDownloadProgress && f.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && f.upload && f.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
          f && (f.abort(), l(e), f = null)
        }), void 0 === c && (c = null), f.send(c)
      })
    }
  }, "7LV+": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e) {
        return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
      }

      function n(e, n, r) {
        var i = e + " ";
        switch (r) {
          case"ss":
            return i + (t(e) ? "sekundy" : "sekund");
          case"m":
            return n ? "minuta" : "minutę";
          case"mm":
            return i + (t(e) ? "minuty" : "minut");
          case"h":
            return n ? "godzina" : "godzinę";
          case"hh":
            return i + (t(e) ? "godziny" : "godzin");
          case"MM":
            return i + (t(e) ? "miesiące" : "miesięcy");
          case"yy":
            return i + (t(e) ? "lata" : "lat")
        }
      }

      var r = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
        i = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
      return e.defineLocale("pl", {
        months: function (e, t) {
          return e ? "" === t ? "(" + i[e.month()] + "|" + r[e.month()] + ")" : /D MMMM/.test(t) ? i[e.month()] : r[e.month()] : r
        },
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
        weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
        weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
        weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Dziś o] LT", nextDay: "[Jutro o] LT", nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[W niedzielę o] LT";
              case 2:
                return "[We wtorek o] LT";
              case 3:
                return "[W środę o] LT";
              case 6:
                return "[W sobotę o] LT";
              default:
                return "[W] dddd [o] LT"
            }
          }, lastDay: "[Wczoraj o] LT", lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[W zeszłą niedzielę o] LT";
              case 3:
                return "[W zeszłą środę o] LT";
              case 6:
                return "[W zeszłą sobotę o] LT";
              default:
                return "[W zeszły] dddd [o] LT"
            }
          }, sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "%s temu",
          s: "kilka sekund",
          ss: n,
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: "1 dzień",
          dd: "%d dni",
          M: "miesiąc",
          MM: n,
          y: "rok",
          yy: n
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, "7MHZ": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
        n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
        r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
        i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      return e.defineLocale("es-do", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function (e, r) {
          return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
        },
        monthsRegex: i,
        monthsShortRegex: i,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: r,
        longMonthsParse: r,
        shortMonthsParse: r,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY h:mm A",
          LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
        },
        calendar: {
          sameDay: function () {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, nextDay: function () {
            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, nextWeek: function () {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, lastDay: function () {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, lastWeek: function () {
            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, sameElse: "L"
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 1, doy: 4}
      })
    })
  }, "7OnE": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"},
        n = {"١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0"};
      return e.defineLocale("ar-sa", {
        months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return "م" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ص" : "م"
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات"
        },
        preparse: function (e) {
          return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
            return n[e]
          }).replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          }).replace(/,/g, "،")
        },
        week: {dow: 0, doy: 6}
      })
    })
  }, "7Q8x": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("ss", {
        months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
        monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
        weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
        weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
        weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Namuhla nga] LT",
          nextDay: "[Kusasa nga] LT",
          nextWeek: "dddd [nga] LT",
          lastDay: "[Itolo nga] LT",
          lastWeek: "dddd [leliphelile] [nga] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "nga %s",
          past: "wenteka nga %s",
          s: "emizuzwana lomcane",
          ss: "%d mzuzwana",
          m: "umzuzu",
          mm: "%d emizuzu",
          h: "lihora",
          hh: "%d emahora",
          d: "lilanga",
          dd: "%d emalanga",
          M: "inyanga",
          MM: "%d tinyanga",
          y: "umnyaka",
          yy: "%d iminyaka"
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem: function (e, t, n) {
          return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
        },
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: "%d",
        week: {dow: 1, doy: 4}
      })
    })
  }, "7R0S": function (e, t, n) {
    e.exports = {
      props: ["user", "team", "billableType"], mixins: [n("OeAR"), n("jJ7H")], data: function () {
        return {plans: []}
      }, mounted: function () {
        var e = this;
        this.getPlans(), this.$on("showPlanDetails", function (t) {
          e.showPlanDetails(t)
        })
      }, methods: {
        getPlans: function () {
          var e = this;
          axios.get("/spark/plans").then(function (t) {
            e.plans = e.billingUser ? _.where(t.data, {type: "user"}) : _.where(t.data, {type: "team"})
          })
        }
      }
    }
  }, "7t+N": function (e, t, n) {
    var r;
    !function (t, n) {
      "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return n(e)
      } : n(t)
    }("undefined" != typeof window ? window : this, function (n, i) {
      function a(e) {
        var t = !!e && "length" in e && e.length, n = ne.type(e);
        return "function" !== n && !ne.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
      }

      function s(e, t, n) {
        if (ne.isFunction(t)) return ne.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return ne.grep(e, function (e) {
          return e === t !== n
        });
        if ("string" == typeof t) {
          if (he.test(t)) return ne.filter(t, e, n);
          t = ne.filter(t, e)
        }
        return ne.grep(e, function (e) {
          return K.call(t, e) > -1 !== n
        })
      }

      function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
      }

      function u() {
        B.removeEventListener("DOMContentLoaded", u), n.removeEventListener("load", u), ne.ready()
      }

      function d() {
        this.expando = ne.expando + d.uid++
      }

      function l(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(we, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
          try {
            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ke.test(n) ? ne.parseJSON(n) : n)
          } catch (e) {
          }
          Le.set(e, t, n)
        } else n = void 0;
        return n
      }

      function c(e, t, n, r) {
        var i, a = 1, s = 20, o = r ? function () {
            return r.cur()
          } : function () {
            return ne.css(e, t, "")
          }, u = o(), d = n && n[3] || (ne.cssNumber[t] ? "" : "px"),
          l = (ne.cssNumber[t] || "px" !== d && +u) && Te.exec(ne.css(e, t));
        if (l && l[3] !== d) {
          d = d || l[3], n = n || [], l = +u || 1;
          do {
            l /= a = a || ".5", ne.style(e, t, l + d)
          } while (a !== (a = o() / u) && 1 !== a && --s)
        }
        return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = d, r.start = l, r.end = i)), i
      }

      function h(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && ne.nodeName(e, t) ? ne.merge([e], n) : n
      }

      function f(e, t) {
        for (var n = 0, r = e.length; n < r; n++) be.set(e[n], "globalEval", !t || be.get(t[n], "globalEval"))
      }

      function m(e, t, n, r, i) {
        for (var a, s, o, u, d, l, c = t.createDocumentFragment(), m = [], p = 0, _ = e.length; p < _; p++) if ((a = e[p]) || 0 === a) if ("object" === ne.type(a)) ne.merge(m, a.nodeType ? [a] : a); else if (Ae.test(a)) {
          for (s = s || c.appendChild(t.createElement("div")), o = (je.exec(a) || ["", ""])[1].toLowerCase(), u = Pe[o] || Pe._default, s.innerHTML = u[1] + ne.htmlPrefilter(a) + u[2], l = u[0]; l--;) s = s.lastChild;
          ne.merge(m, s.childNodes), (s = c.firstChild).textContent = ""
        } else m.push(t.createTextNode(a));
        for (c.textContent = "", p = 0; a = m[p++];) if (r && ne.inArray(a, r) > -1) i && i.push(a); else if (d = ne.contains(a.ownerDocument, a), s = h(c.appendChild(a), "script"), d && f(s), n) for (l = 0; a = s[l++];) He.test(a.type || "") && n.push(a);
        return c
      }

      function p() {
        return !0
      }

      function _() {
        return !1
      }

      function y() {
        try {
          return B.activeElement
        } catch (e) {
        }
      }

      function g(e, t, n, r, i, a) {
        var s, o;
        if ("object" == typeof t) {
          "string" != typeof n && (r = r || n, n = void 0);
          for (o in t) g(e, o, n, r, t[o], a);
          return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = _; else if (!i) return e;
        return 1 === a && (s = i, (i = function (e) {
          return ne().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = ne.guid++)), e.each(function () {
          ne.event.add(this, t, i, r, n)
        })
      }

      function v(e, t) {
        return ne.nodeName(e, "table") && ne.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
      }

      function M(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
      }

      function b(e) {
        var t = Ne.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
      }

      function L(e, t) {
        var n, r, i, a, s, o, u, d;
        if (1 === t.nodeType) {
          if (be.hasData(e) && (a = be.access(e), s = be.set(t, a), d = a.events)) {
            delete s.handle, s.events = {};
            for (i in d) for (n = 0, r = d[i].length; n < r; n++) ne.event.add(t, i, d[i][n])
          }
          Le.hasData(e) && (o = Le.access(e), u = ne.extend({}, o), Le.set(t, u))
        }
      }

      function k(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Se.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
      }

      function w(e, t, n, r) {
        t = G.apply([], t);
        var i, a, s, o, u, d, l = 0, c = e.length, f = c - 1, p = t[0], _ = ne.isFunction(p);
        if (_ || c > 1 && "string" == typeof p && !te.checkClone && Ie.test(p)) return e.each(function (i) {
          var a = e.eq(i);
          _ && (t[0] = p.call(this, i, a.html())), w(a, t, n, r)
        });
        if (c && (i = m(t, e[0].ownerDocument, !1, e, r), a = i.firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
          for (o = (s = ne.map(h(i, "script"), M)).length; l < c; l++) u = i, l !== f && (u = ne.clone(u, !0, !0), o && ne.merge(s, h(u, "script"))), n.call(e[l], u, l);
          if (o) for (d = s[s.length - 1].ownerDocument, ne.map(s, b), l = 0; l < o; l++) u = s[l], He.test(u.type || "") && !be.access(u, "globalEval") && ne.contains(d, u) && (u.src ? ne._evalUrl && ne._evalUrl(u.src) : ne.globalEval(u.textContent.replace(Re, "")))
        }
        return e
      }

      function Y(e, t, n) {
        for (var r, i = t ? ne.filter(t, e) : e, a = 0; null != (r = i[a]); a++) n || 1 !== r.nodeType || ne.cleanData(h(r)), r.parentNode && (n && ne.contains(r.ownerDocument, r) && f(h(r, "script")), r.parentNode.removeChild(r));
        return e
      }

      function T(e, t) {
        var n = ne(t.createElement(e)).appendTo(t.body), r = ne.css(n[0], "display");
        return n.detach(), r
      }

      function D(e) {
        var t = B, n = ze[e];
        return n || ("none" !== (n = T(e, t)) && n || ((t = (We = (We || ne("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = T(e, t), We.detach()), ze[e] = n), n
      }

      function x(e, t, n) {
        var r, i, a, s, o = e.style;
        return n = n || qe(e), "" !== (s = n ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || ne.contains(e.ownerDocument, e) || (s = ne.style(e, t)), n && !te.pixelMarginRight() && Je.test(s) && Ue.test(t) && (r = o.width, i = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = r, o.minWidth = i, o.maxWidth = a), void 0 !== s ? s + "" : s
      }

      function S(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get
          }
        }
      }

      function j(e) {
        if (e in Xe) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Ze.length; n--;) if ((e = Ze[n] + t) in Xe) return e
      }

      function H(e, t, n) {
        var r = Te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
      }

      function P(e, t, n, r, i) {
        for (var a = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; a < 4; a += 2) "margin" === n && (s += ne.css(e, n + De[a], !0, i)), r ? ("content" === n && (s -= ne.css(e, "padding" + De[a], !0, i)), "margin" !== n && (s -= ne.css(e, "border" + De[a] + "Width", !0, i))) : (s += ne.css(e, "padding" + De[a], !0, i), "padding" !== n && (s += ne.css(e, "border" + De[a] + "Width", !0, i)));
        return s
      }

      function A(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, a = qe(e),
          s = "border-box" === ne.css(e, "boxSizing", !1, a);
        if (i <= 0 || null == i) {
          if (((i = x(e, t, a)) < 0 || null == i) && (i = e.style[t]), Je.test(i)) return i;
          r = s && (te.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + P(e, t, n || (s ? "border" : "content"), r, a) + "px"
      }

      function C(e, t) {
        for (var n, r, i, a = [], s = 0, o = e.length; s < o; s++) (r = e[s]).style && (a[s] = be.get(r, "olddisplay"), n = r.style.display, t ? (a[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && xe(r) && (a[s] = be.access(r, "olddisplay", D(r.nodeName)))) : (i = xe(r), "none" === n && i || be.set(r, "olddisplay", i ? n : ne.css(r, "display"))));
        for (s = 0; s < o; s++) (r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? a[s] || "" : "none"));
        return e
      }

      function O(e, t, n, r, i) {
        return new O.prototype.init(e, t, n, r, i)
      }

      function E() {
        return n.setTimeout(function () {
          et = void 0
        }), et = ne.now()
      }

      function F(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = De[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
      }

      function $(e, t, n) {
        for (var r, i = (I.tweeners[t] || []).concat(I.tweeners["*"]), a = 0, s = i.length; a < s; a++) if (r = i[a].call(n, t, e)) return r
      }

      function I(e, t, n) {
        var r, i, a = 0, s = I.prefilters.length, o = ne.Deferred().always(function () {
          delete u.elem
        }), u = function () {
          if (i) return !1;
          for (var t = et || E(), n = Math.max(0, d.startTime + d.duration - t), r = 1 - (n / d.duration || 0), a = 0, s = d.tweens.length; a < s; a++) d.tweens[a].run(r);
          return o.notifyWith(e, [d, r, n]), r < 1 && s ? n : (o.resolveWith(e, [d]), !1)
        }, d = o.promise({
          elem: e,
          props: ne.extend({}, t),
          opts: ne.extend(!0, {specialEasing: {}, easing: ne.easing._default}, n),
          originalProperties: t,
          originalOptions: n,
          startTime: et || E(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var r = ne.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
            return d.tweens.push(r), r
          },
          stop: function (t) {
            var n = 0, r = t ? d.tweens.length : 0;
            if (i) return this;
            for (i = !0; n < r; n++) d.tweens[n].run(1);
            return t ? (o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d, t])) : o.rejectWith(e, [d, t]), this
          }
        }), l = d.props;
        for (!function (e, t) {
          var n, r, i, a, s;
          for (n in e) if (r = ne.camelCase(n), i = t[r], a = e[n], ne.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), (s = ne.cssHooks[r]) && "expand" in s) {
            a = s.expand(a), delete e[r];
            for (n in a) n in e || (e[n] = a[n], t[n] = i)
          } else t[r] = i
        }(l, d.opts.specialEasing); a < s; a++) if (r = I.prefilters[a].call(d, e, l, d.opts)) return ne.isFunction(r.stop) && (ne._queueHooks(d.elem, d.opts.queue).stop = ne.proxy(r.stop, r)), r;
        return ne.map(l, $, d), ne.isFunction(d.opts.start) && d.opts.start.call(e, d), ne.fx.timer(ne.extend(u, {
          elem: e,
          anim: d,
          queue: d.opts.queue
        })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
      }

      function N(e) {
        return e.getAttribute && e.getAttribute("class") || ""
      }

      function R(e) {
        return function (t, n) {
          "string" != typeof t && (n = t, t = "*");
          var r, i = 0, a = t.toLowerCase().match(ye) || [];
          if (ne.isFunction(n)) for (; r = a[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
      }

      function W(e, t, n, r) {
        function i(o) {
          var u;
          return a[o] = !0, ne.each(e[o] || [], function (e, o) {
            var d = o(t, n, r);
            return "string" != typeof d || s || a[d] ? s ? !(u = d) : void 0 : (t.dataTypes.unshift(d), i(d), !1)
          }), u
        }

        var a = {}, s = e === bt;
        return i(t.dataTypes[0]) || !a["*"] && i("*")
      }

      function z(e, t) {
        var n, r, i = ne.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && ne.extend(!0, e, r), e
      }

      function U(e, t, n, r) {
        var i;
        if (ne.isArray(t)) ne.each(t, function (t, i) {
          n || Yt.test(e) ? r(e, i) : U(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== ne.type(t)) r(e, t); else for (i in t) U(e + "[" + i + "]", t[i], n, r)
      }

      function J(e) {
        return ne.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
      }

      var q = [], B = n.document, V = q.slice, G = q.concat, Q = q.push, K = q.indexOf, Z = {}, X = Z.toString,
        ee = Z.hasOwnProperty, te = {}, ne = function (e, t) {
          return new ne.fn.init(e, t)
        }, re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ie = /^-ms-/, ae = /-([\da-z])/gi, se = function (e, t) {
          return t.toUpperCase()
        };
      ne.fn = ne.prototype = {
        jquery: "2.2.4", constructor: ne, selector: "", length: 0, toArray: function () {
          return V.call(this)
        }, get: function (e) {
          return null != e ? e < 0 ? this[e + this.length] : this[e] : V.call(this)
        }, pushStack: function (e) {
          var t = ne.merge(this.constructor(), e);
          return t.prevObject = this, t.context = this.context, t
        }, each: function (e) {
          return ne.each(this, e)
        }, map: function (e) {
          return this.pushStack(ne.map(this, function (t, n) {
            return e.call(t, n, t)
          }))
        }, slice: function () {
          return this.pushStack(V.apply(this, arguments))
        }, first: function () {
          return this.eq(0)
        }, last: function () {
          return this.eq(-1)
        }, eq: function (e) {
          var t = this.length, n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
          return this.prevObject || this.constructor()
        }, push: Q, sort: q.sort, splice: q.splice
      }, ne.extend = ne.fn.extend = function () {
        var e, t, n, r, i, a, s = arguments[0] || {}, o = 1, u = arguments.length, d = !1;
        for ("boolean" == typeof s && (d = s, s = arguments[o] || {}, o++), "object" == typeof s || ne.isFunction(s) || (s = {}), o === u && (s = this, o--); o < u; o++) if (null != (e = arguments[o])) for (t in e) n = s[t], s !== (r = e[t]) && (d && r && (ne.isPlainObject(r) || (i = ne.isArray(r))) ? (i ? (i = !1, a = n && ne.isArray(n) ? n : []) : a = n && ne.isPlainObject(n) ? n : {}, s[t] = ne.extend(d, a, r)) : void 0 !== r && (s[t] = r));
        return s
      }, ne.extend({
        expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
          throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
          return "function" === ne.type(e)
        }, isArray: Array.isArray, isWindow: function (e) {
          return null != e && e === e.window
        }, isNumeric: function (e) {
          var t = e && e.toString();
          return !ne.isArray(e) && t - parseFloat(t) + 1 >= 0
        }, isPlainObject: function (e) {
          var t;
          if ("object" !== ne.type(e) || e.nodeType || ne.isWindow(e)) return !1;
          if (e.constructor && !ee.call(e, "constructor") && !ee.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
          for (t in e) ;
          return void 0 === t || ee.call(e, t)
        }, isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0
        }, type: function (e) {
          return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[X.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
          var t, n = eval;
          (e = ne.trim(e)) && (1 === e.indexOf("use strict") ? ((t = B.createElement("script")).text = e, B.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        }, camelCase: function (e) {
          return e.replace(ie, "ms-").replace(ae, se)
        }, nodeName: function (e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
          var n, r = 0;
          if (a(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
          return e
        }, trim: function (e) {
          return null == e ? "" : (e + "").replace(re, "")
        }, makeArray: function (e, t) {
          var n = t || [];
          return null != e && (a(Object(e)) ? ne.merge(n, "string" == typeof e ? [e] : e) : Q.call(n, e)), n
        }, inArray: function (e, t, n) {
          return null == t ? -1 : K.call(t, e, n)
        }, merge: function (e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
          return e.length = i, e
        }, grep: function (e, t, n) {
          for (var r = [], i = 0, a = e.length, s = !n; i < a; i++) !t(e[i], i) !== s && r.push(e[i]);
          return r
        }, map: function (e, t, n) {
          var r, i, s = 0, o = [];
          if (a(e)) for (r = e.length; s < r; s++) null != (i = t(e[s], s, n)) && o.push(i); else for (s in e) null != (i = t(e[s], s, n)) && o.push(i);
          return G.apply([], o)
        }, guid: 1, proxy: function (e, t) {
          var n, r, i;
          if ("string" == typeof t && (n = e[t], t = e, e = n), ne.isFunction(e)) return r = V.call(arguments, 2), i = function () {
            return e.apply(t || this, r.concat(V.call(arguments)))
          }, i.guid = e.guid = e.guid || ne.guid++, i
        }, now: Date.now, support: te
      }), "function" == typeof Symbol && (ne.fn[Symbol.iterator] = q[Symbol.iterator]), ne.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
      });
      var oe = function (e) {
        function t(e, t, n, r) {
          var i, a, s, o, u, d, c, f, m = t && t.ownerDocument, p = t ? t.nodeType : 9;
          if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
          if (!r && ((t ? t.ownerDocument || t : $) !== j && S(t), t = t || j, P)) {
            if (11 !== p && (d = pe.exec(e))) if (i = d[1]) {
              if (9 === p) {
                if (!(s = t.getElementById(i))) return n;
                if (s.id === i) return n.push(s), n
              } else if (m && (s = m.getElementById(i)) && E(t, s) && s.id === i) return n.push(s), n
            } else {
              if (d[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
              if ((i = d[3]) && v.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), n
            }
            if (v.qsa && !z[e + " "] && (!A || !A.test(e))) {
              if (1 !== p) m = t, f = e; else if ("object" !== t.nodeName.toLowerCase()) {
                for ((o = t.getAttribute("id")) ? o = o.replace(ye, "\\$&") : t.setAttribute("id", o = F), a = (c = k(e)).length, u = le.test(o) ? "#" + o : "[id='" + o + "']"; a--;) c[a] = u + " " + h(c[a]);
                f = c.join(","), m = _e.test(e) && l(t.parentNode) || t
              }
              if (f) try {
                return Q.apply(n, m.querySelectorAll(f)), n
              } catch (e) {
              } finally {
                o === F && t.removeAttribute("id")
              }
            }
          }
          return Y(e.replace(ae, "$1"), t, n, r)
        }

        function n() {
          function e(n, r) {
            return t.push(n + " ") > M.cacheLength && delete e[t.shift()], e[n + " "] = r
          }

          var t = [];
          return e
        }

        function r(e) {
          return e[F] = !0, e
        }

        function i(e) {
          var t = j.createElement("div");
          try {
            return !!e(t)
          } catch (e) {
            return !1
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null
          }
        }

        function a(e, t) {
          for (var n = e.split("|"), r = n.length; r--;) M.attrHandle[n[r]] = t
        }

        function s(e, t) {
          var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
          if (r) return r;
          if (n) for (; n = n.nextSibling;) if (n === t) return -1;
          return e ? 1 : -1
        }

        function o(e) {
          return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e
          }
        }

        function u(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e
          }
        }

        function d(e) {
          return r(function (t) {
            return t = +t, r(function (n, r) {
              for (var i, a = e([], n.length, t), s = a.length; s--;) n[i = a[s]] && (n[i] = !(r[i] = n[i]))
            })
          })
        }

        function l(e) {
          return e && void 0 !== e.getElementsByTagName && e
        }

        function c() {
        }

        function h(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
          return r
        }

        function f(e, t, n) {
          var r = t.dir, i = n && "parentNode" === r, a = N++;
          return t.first ? function (t, n, a) {
            for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, a)
          } : function (t, n, s) {
            var o, u, d, l = [I, a];
            if (s) {
              for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, s)) return !0
            } else for (; t = t[r];) if (1 === t.nodeType || i) {
              if (d = t[F] || (t[F] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), (o = u[r]) && o[0] === I && o[1] === a) return l[2] = o[2];
              if (u[r] = l, l[2] = e(t, n, s)) return !0
            }
          }
        }

        function m(e) {
          return e.length > 1 ? function (t, n, r) {
            for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
            return !0
          } : e[0]
        }

        function p(e, t, n, r, i) {
          for (var a, s = [], o = 0, u = e.length, d = null != t; o < u; o++) (a = e[o]) && (n && !n(a, r, i) || (s.push(a), d && t.push(o)));
          return s
        }

        function _(e, n, i, a, s, o) {
          return a && !a[F] && (a = _(a)), s && !s[F] && (s = _(s, o)), r(function (r, o, u, d) {
            var l, c, h, f = [], m = [], _ = o.length, y = r || function (e, n, r) {
                for (var i = 0, a = n.length; i < a; i++) t(e, n[i], r);
                return r
              }(n || "*", u.nodeType ? [u] : u, []), g = !e || !r && n ? y : p(y, f, e, u, d),
              v = i ? s || (r ? e : _ || a) ? [] : o : g;
            if (i && i(g, v, u, d), a) for (l = p(v, m), a(l, [], u, d), c = l.length; c--;) (h = l[c]) && (v[m[c]] = !(g[m[c]] = h));
            if (r) {
              if (s || e) {
                if (s) {
                  for (l = [], c = v.length; c--;) (h = v[c]) && l.push(g[c] = h);
                  s(null, v = [], l, d)
                }
                for (c = v.length; c--;) (h = v[c]) && (l = s ? Z(r, h) : f[c]) > -1 && (r[l] = !(o[l] = h))
              }
            } else v = p(v === o ? v.splice(_, v.length) : v), s ? s(null, o, v, d) : Q.apply(o, v)
          })
        }

        function y(e) {
          for (var t, n, r, i = e.length, a = M.relative[e[0].type], s = a || M.relative[" "], o = a ? 1 : 0, u = f(function (e) {
            return e === t
          }, s, !0), d = f(function (e) {
            return Z(t, e) > -1
          }, s, !0), l = [function (e, n, r) {
            var i = !a && (r || n !== T) || ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
            return t = null, i
          }]; o < i; o++) if (n = M.relative[e[o].type]) l = [f(m(l), n)]; else {
            if ((n = M.filter[e[o].type].apply(null, e[o].matches))[F]) {
              for (r = ++o; r < i && !M.relative[e[r].type]; r++) ;
              return _(o > 1 && m(l), o > 1 && h(e.slice(0, o - 1).concat({value: " " === e[o - 2].type ? "*" : ""})).replace(ae, "$1"), n, o < r && y(e.slice(o, r)), r < i && y(e = e.slice(r)), r < i && h(e))
            }
            l.push(n)
          }
          return m(l)
        }

        var g, v, M, b, L, k, w, Y, T, D, x, S, j, H, P, A, C, O, E, F = "sizzle" + 1 * new Date, $ = e.document, I = 0,
          N = 0, R = n(), W = n(), z = n(), U = function (e, t) {
            return e === t && (x = !0), 0
          }, J = 1 << 31, q = {}.hasOwnProperty, B = [], V = B.pop, G = B.push, Q = B.push, K = B.slice,
          Z = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1
          },
          X = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
          re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
          ie = new RegExp(ee + "+", "g"), ae = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
          se = new RegExp("^" + ee + "*," + ee + "*"), oe = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
          ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), de = new RegExp(re),
          le = new RegExp("^" + te + "$"), ce = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + re),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + X + ")$", "i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
          }, he = /^(?:input|select|textarea|button)$/i, fe = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/,
          pe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _e = /[+~]/, ye = /'|\\/g,
          ge = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ve = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
          }, Me = function () {
            S()
          };
        try {
          Q.apply(B = K.call($.childNodes), $.childNodes), B[$.childNodes.length].nodeType
        } catch (e) {
          Q = {
            apply: B.length ? function (e, t) {
              G.apply(e, K.call(t))
            } : function (e, t) {
              for (var n = e.length, r = 0; e[n++] = t[r++];) ;
              e.length = n - 1
            }
          }
        }
        v = t.support = {}, L = t.isXML = function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName
        }, S = t.setDocument = function (e) {
          var t, n, r = e ? e.ownerDocument || e : $;
          return r !== j && 9 === r.nodeType && r.documentElement ? (j = r, H = j.documentElement, P = !L(j), (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Me, !1) : n.attachEvent && n.attachEvent("onunload", Me)), v.attributes = i(function (e) {
            return e.className = "i", !e.getAttribute("className")
          }), v.getElementsByTagName = i(function (e) {
            return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length
          }), v.getElementsByClassName = me.test(j.getElementsByClassName), v.getById = i(function (e) {
            return H.appendChild(e).id = F, !j.getElementsByName || !j.getElementsByName(F).length
          }), v.getById ? (M.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && P) {
              var n = t.getElementById(e);
              return n ? [n] : []
            }
          }, M.filter.ID = function (e) {
            var t = e.replace(ge, ve);
            return function (e) {
              return e.getAttribute("id") === t
            }
          }) : (delete M.find.ID, M.filter.ID = function (e) {
            var t = e.replace(ge, ve);
            return function (e) {
              var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return n && n.value === t
            }
          }), M.find.TAG = v.getElementsByTagName ? function (e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : v.qsa ? t.querySelectorAll(e) : void 0
          } : function (e, t) {
            var n, r = [], i = 0, a = t.getElementsByTagName(e);
            if ("*" === e) {
              for (; n = a[i++];) 1 === n.nodeType && r.push(n);
              return r
            }
            return a
          }, M.find.CLASS = v.getElementsByClassName && function (e, t) {
            if (void 0 !== t.getElementsByClassName && P) return t.getElementsByClassName(e)
          }, C = [], A = [], (v.qsa = me.test(j.querySelectorAll)) && (i(function (e) {
            H.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && A.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || A.push("\\[" + ee + "*(?:value|" + X + ")"), e.querySelectorAll("[id~=" + F + "-]").length || A.push("~="), e.querySelectorAll(":checked").length || A.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || A.push(".#.+[+~]")
          }), i(function (e) {
            var t = j.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && A.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || A.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), A.push(",.*:")
          })), (v.matchesSelector = me.test(O = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function (e) {
            v.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), C.push("!=", re)
          }), A = A.length && new RegExp(A.join("|")), C = C.length && new RegExp(C.join("|")), t = me.test(H.compareDocumentPosition), E = t || me.test(H.contains) ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
          } : function (e, t) {
            if (t) for (; t = t.parentNode;) if (t === e) return !0;
            return !1
          }, U = t ? function (e, t) {
            if (e === t) return x = !0, 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !v.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === $ && E($, e) ? -1 : t === j || t.ownerDocument === $ && E($, t) ? 1 : D ? Z(D, e) - Z(D, t) : 0 : 4 & n ? -1 : 1)
          } : function (e, t) {
            if (e === t) return x = !0, 0;
            var n, r = 0, i = e.parentNode, a = t.parentNode, o = [e], u = [t];
            if (!i || !a) return e === j ? -1 : t === j ? 1 : i ? -1 : a ? 1 : D ? Z(D, e) - Z(D, t) : 0;
            if (i === a) return s(e, t);
            for (n = e; n = n.parentNode;) o.unshift(n);
            for (n = t; n = n.parentNode;) u.unshift(n);
            for (; o[r] === u[r];) r++;
            return r ? s(o[r], u[r]) : o[r] === $ ? -1 : u[r] === $ ? 1 : 0
          }, j) : j
        }, t.matches = function (e, n) {
          return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
          if ((e.ownerDocument || e) !== j && S(e), n = n.replace(ue, "='$1']"), v.matchesSelector && P && !z[n + " "] && (!C || !C.test(n)) && (!A || !A.test(n))) try {
            var r = O.call(e, n);
            if (r || v.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
          } catch (e) {
          }
          return t(n, j, null, [e]).length > 0
        }, t.contains = function (e, t) {
          return (e.ownerDocument || e) !== j && S(e), E(e, t)
        }, t.attr = function (e, t) {
          (e.ownerDocument || e) !== j && S(e);
          var n = M.attrHandle[t.toLowerCase()], r = n && q.call(M.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
          return void 0 !== r ? r : v.attributes || !P ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
          var t, n = [], r = 0, i = 0;
          if (x = !v.detectDuplicates, D = !v.sortStable && e.slice(0), e.sort(U), x) {
            for (; t = e[i++];) t === e[i] && (r = n.push(i));
            for (; r--;) e.splice(n[r], 1)
          }
          return D = null, e
        }, b = t.getText = function (e) {
          var t, n = "", r = 0, i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += b(e)
            } else if (3 === i || 4 === i) return e.nodeValue
          } else for (; t = e[r++];) n += b(t);
          return n
        }, (M = t.selectors = {
          cacheLength: 50,
          createPseudo: r,
          match: ce,
          attrHandle: {},
          find: {},
          relative: {
            ">": {dir: "parentNode", first: !0},
            " ": {dir: "parentNode"},
            "+": {dir: "previousSibling", first: !0},
            "~": {dir: "previousSibling"}
          },
          preFilter: {
            ATTR: function (e) {
              return e[1] = e[1].replace(ge, ve), e[3] = (e[3] || e[4] || e[5] || "").replace(ge, ve), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            }, CHILD: function (e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
            }, PSEUDO: function (e) {
              var t, n = !e[6] && e[2];
              return ce.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(ge, ve).toLowerCase();
              return "*" === e ? function () {
                return !0
              } : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              }
            }, CLASS: function (e) {
              var t = R[e + " "];
              return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && R(e, function (e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
              })
            }, ATTR: function (e, n, r) {
              return function (i) {
                var a = t.attr(i, e);
                return null == a ? "!=" === n : !n || (a += "", "=" === n ? a === r : "!=" === n ? a !== r : "^=" === n ? r && 0 === a.indexOf(r) : "*=" === n ? r && a.indexOf(r) > -1 : "$=" === n ? r && a.slice(-r.length) === r : "~=" === n ? (" " + a.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (a === r || a.slice(0, r.length + 1) === r + "-"))
              }
            }, CHILD: function (e, t, n, r, i) {
              var a = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), o = "of-type" === t;
              return 1 === r && 0 === i ? function (e) {
                return !!e.parentNode
              } : function (t, n, u) {
                var d, l, c, h, f, m, p = a !== s ? "nextSibling" : "previousSibling", _ = t.parentNode,
                  y = o && t.nodeName.toLowerCase(), g = !u && !o, v = !1;
                if (_) {
                  if (a) {
                    for (; p;) {
                      for (h = t; h = h[p];) if (o ? h.nodeName.toLowerCase() === y : 1 === h.nodeType) return !1;
                      m = p = "only" === e && !m && "nextSibling"
                    }
                    return !0
                  }
                  if (m = [s ? _.firstChild : _.lastChild], s && g) {
                    for (v = (f = (d = (l = (c = (h = _)[F] || (h[F] = {}))[h.uniqueID] || (c[h.uniqueID] = {}))[e] || [])[0] === I && d[1]) && d[2], h = f && _.childNodes[f]; h = ++f && h && h[p] || (v = f = 0) || m.pop();) if (1 === h.nodeType && ++v && h === t) {
                      l[e] = [I, f, v];
                      break
                    }
                  } else if (g && (v = f = (d = (l = (c = (h = t)[F] || (h[F] = {}))[h.uniqueID] || (c[h.uniqueID] = {}))[e] || [])[0] === I && d[1]), !1 === v) for (; (h = ++f && h && h[p] || (v = f = 0) || m.pop()) && ((o ? h.nodeName.toLowerCase() !== y : 1 !== h.nodeType) || !++v || (g && ((l = (c = h[F] || (h[F] = {}))[h.uniqueID] || (c[h.uniqueID] = {}))[e] = [I, v]), h !== t));) ;
                  return (v -= i) === r || v % r == 0 && v / r >= 0
                }
              }
            }, PSEUDO: function (e, n) {
              var i, a = M.pseudos[e] || M.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
              return a[F] ? a(n) : a.length > 1 ? (i = [e, e, "", n], M.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                for (var r, i = a(e, n), s = i.length; s--;) e[r = Z(e, i[s])] = !(t[r] = i[s])
              }) : function (e) {
                return a(e, 0, i)
              }) : a
            }
          },
          pseudos: {
            not: r(function (e) {
              var t = [], n = [], i = w(e.replace(ae, "$1"));
              return i[F] ? r(function (e, t, n, r) {
                for (var a, s = i(e, null, r, []), o = e.length; o--;) (a = s[o]) && (e[o] = !(t[o] = a))
              }) : function (e, r, a) {
                return t[0] = e, i(t, null, a, n), t[0] = null, !n.pop()
              }
            }), has: r(function (e) {
              return function (n) {
                return t(e, n).length > 0
              }
            }), contains: r(function (e) {
              return e = e.replace(ge, ve), function (t) {
                return (t.textContent || t.innerText || b(t)).indexOf(e) > -1
              }
            }), lang: r(function (e) {
              return le.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ge, ve).toLowerCase(), function (t) {
                var n;
                do {
                  if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1
              }
            }), target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id
            }, root: function (e) {
              return e === H
            }, focus: function (e) {
              return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            }, enabled: function (e) {
              return !1 === e.disabled
            }, disabled: function (e) {
              return !0 === e.disabled
            }, checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected
            }, selected: function (e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            }, empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
              return !0
            }, parent: function (e) {
              return !M.pseudos.empty(e)
            }, header: function (e) {
              return fe.test(e.nodeName)
            }, input: function (e) {
              return he.test(e.nodeName)
            }, button: function (e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t
            }, text: function (e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            }, first: d(function () {
              return [0]
            }), last: d(function (e, t) {
              return [t - 1]
            }), eq: d(function (e, t, n) {
              return [n < 0 ? n + t : n]
            }), even: d(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e
            }), odd: d(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e
            }), lt: d(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
              return e
            }), gt: d(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
              return e
            })
          }
        }).pseudos.nth = M.pseudos.eq;
        for (g in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) M.pseudos[g] = o(g);
        for (g in{submit: !0, reset: !0}) M.pseudos[g] = u(g);
        return c.prototype = M.filters = M.pseudos, M.setFilters = new c, k = t.tokenize = function (e, n) {
          var r, i, a, s, o, u, d, l = W[e + " "];
          if (l) return n ? 0 : l.slice(0);
          for (o = e, u = [], d = M.preFilter; o;) {
            r && !(i = se.exec(o)) || (i && (o = o.slice(i[0].length) || o), u.push(a = [])), r = !1, (i = oe.exec(o)) && (r = i.shift(), a.push({
              value: r,
              type: i[0].replace(ae, " ")
            }), o = o.slice(r.length));
            for (s in M.filter) !(i = ce[s].exec(o)) || d[s] && !(i = d[s](i)) || (r = i.shift(), a.push({
              value: r,
              type: s,
              matches: i
            }), o = o.slice(r.length));
            if (!r) break
          }
          return n ? o.length : o ? t.error(e) : W(e, u).slice(0)
        }, w = t.compile = function (e, n) {
          var i, a = [], s = [], o = z[e + " "];
          if (!o) {
            for (n || (n = k(e)), i = n.length; i--;) (o = y(n[i]))[F] ? a.push(o) : s.push(o);
            (o = z(e, function (e, n) {
              var i = n.length > 0, a = e.length > 0, s = function (r, s, o, u, d) {
                var l, c, h, f = 0, m = "0", _ = r && [], y = [], g = T, v = r || a && M.find.TAG("*", d),
                  b = I += null == g ? 1 : Math.random() || .1, L = v.length;
                for (d && (T = s === j || s || d); m !== L && null != (l = v[m]); m++) {
                  if (a && l) {
                    for (c = 0, s || l.ownerDocument === j || (S(l), o = !P); h = e[c++];) if (h(l, s || j, o)) {
                      u.push(l);
                      break
                    }
                    d && (I = b)
                  }
                  i && ((l = !h && l) && f--, r && _.push(l))
                }
                if (f += m, i && m !== f) {
                  for (c = 0; h = n[c++];) h(_, y, s, o);
                  if (r) {
                    if (f > 0) for (; m--;) _[m] || y[m] || (y[m] = V.call(u));
                    y = p(y)
                  }
                  Q.apply(u, y), d && !r && y.length > 0 && f + n.length > 1 && t.uniqueSort(u)
                }
                return d && (I = b, T = g), _
              };
              return i ? r(s) : s
            }(s, a))).selector = e
          }
          return o
        }, Y = t.select = function (e, t, n, r) {
          var i, a, s, o, u, d = "function" == typeof e && e, c = !r && k(e = d.selector || e);
          if (n = n || [], 1 === c.length) {
            if ((a = c[0] = c[0].slice(0)).length > 2 && "ID" === (s = a[0]).type && v.getById && 9 === t.nodeType && P && M.relative[a[1].type]) {
              if (!(t = (M.find.ID(s.matches[0].replace(ge, ve), t) || [])[0])) return n;
              d && (t = t.parentNode), e = e.slice(a.shift().value.length)
            }
            for (i = ce.needsContext.test(e) ? 0 : a.length; i-- && (s = a[i], !M.relative[o = s.type]);) if ((u = M.find[o]) && (r = u(s.matches[0].replace(ge, ve), _e.test(a[0].type) && l(t.parentNode) || t))) {
              if (a.splice(i, 1), !(e = r.length && h(a))) return Q.apply(n, r), n;
              break
            }
          }
          return (d || w(e, c))(r, t, !P, n, !t || _e.test(e) && l(t.parentNode) || t), n
        }, v.sortStable = F.split("").sort(U).join("") === F, v.detectDuplicates = !!x, S(), v.sortDetached = i(function (e) {
          return 1 & e.compareDocumentPosition(j.createElement("div"))
        }), i(function (e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), v.attributes && i(function (e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function (e) {
          return null == e.getAttribute("disabled")
        }) || a(X, function (e, t, n) {
          var r;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
      }(n);
      ne.find = oe, ne.expr = oe.selectors, ne.expr[":"] = ne.expr.pseudos, ne.uniqueSort = ne.unique = oe.uniqueSort, ne.text = oe.getText, ne.isXMLDoc = oe.isXML, ne.contains = oe.contains;
      var ue = function (e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
          if (i && ne(e).is(n)) break;
          r.push(e)
        }
        return r
      }, de = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
      }, le = ne.expr.match.needsContext, ce = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, he = /^.[^:#\[\.,]*$/;
      ne.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ne.find.matchesSelector(r, e) ? [r] : [] : ne.find.matches(e, ne.grep(t, function (e) {
          return 1 === e.nodeType
        }))
      }, ne.fn.extend({
        find: function (e) {
          var t, n = this.length, r = [], i = this;
          if ("string" != typeof e) return this.pushStack(ne(e).filter(function () {
            for (t = 0; t < n; t++) if (ne.contains(i[t], this)) return !0
          }));
          for (t = 0; t < n; t++) ne.find(e, i[t], r);
          return r = this.pushStack(n > 1 ? ne.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        }, filter: function (e) {
          return this.pushStack(s(this, e || [], !1))
        }, not: function (e) {
          return this.pushStack(s(this, e || [], !0))
        }, is: function (e) {
          return !!s(this, "string" == typeof e && le.test(e) ? ne(e) : e || [], !1).length
        }
      });
      var fe, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
      (ne.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || fe, "string" == typeof e) {
          if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : me.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (r[1]) {
            if (t = t instanceof ne ? t[0] : t, ne.merge(this, ne.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : B, !0)), ce.test(r[1]) && ne.isPlainObject(t)) for (r in t) ne.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
          }
          return (i = B.getElementById(r[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = B, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ne.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ne) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ne.makeArray(e, this))
      }).prototype = ne.fn, fe = ne(B);
      var pe = /^(?:parents|prev(?:Until|All))/, _e = {children: !0, contents: !0, next: !0, prev: !0};
      ne.fn.extend({
        has: function (e) {
          var t = ne(e, this), n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (ne.contains(this, t[e])) return !0
          })
        }, closest: function (e, t) {
          for (var n, r = 0, i = this.length, a = [], s = le.test(e) || "string" != typeof e ? ne(e, t || this.context) : 0; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ne.find.matchesSelector(n, e))) {
            a.push(n);
            break
          }
          return this.pushStack(a.length > 1 ? ne.uniqueSort(a) : a)
        }, index: function (e) {
          return e ? "string" == typeof e ? K.call(ne(e), this[0]) : K.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
          return this.pushStack(ne.uniqueSort(ne.merge(this.get(), ne(e, t))))
        }, addBack: function (e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
      }), ne.each({
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
          return ue(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
          return ue(e, "parentNode", n)
        }, next: function (e) {
          return o(e, "nextSibling")
        }, prev: function (e) {
          return o(e, "previousSibling")
        }, nextAll: function (e) {
          return ue(e, "nextSibling")
        }, prevAll: function (e) {
          return ue(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
          return ue(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
          return ue(e, "previousSibling", n)
        }, siblings: function (e) {
          return de((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
          return de(e.firstChild)
        }, contents: function (e) {
          return e.contentDocument || ne.merge([], e.childNodes)
        }
      }, function (e, t) {
        ne.fn[e] = function (n, r) {
          var i = ne.map(this, t, n);
          return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ne.filter(r, i)), this.length > 1 && (_e[e] || ne.uniqueSort(i), pe.test(e) && i.reverse()), this.pushStack(i)
        }
      });
      var ye = /\S+/g;
      ne.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
          var t = {};
          return ne.each(e.match(ye) || [], function (e, n) {
            t[n] = !0
          }), t
        }(e) : ne.extend({}, e);
        var t, n, r, i, a = [], s = [], o = -1, u = function () {
          for (i = e.once, r = t = !0; s.length; o = -1) for (n = s.shift(); ++o < a.length;) !1 === a[o].apply(n[0], n[1]) && e.stopOnFalse && (o = a.length, n = !1);
          e.memory || (n = !1), t = !1, i && (a = n ? [] : "")
        }, d = {
          add: function () {
            return a && (n && !t && (o = a.length - 1, s.push(n)), function t(n) {
              ne.each(n, function (n, r) {
                ne.isFunction(r) ? e.unique && d.has(r) || a.push(r) : r && r.length && "string" !== ne.type(r) && t(r)
              })
            }(arguments), n && !t && u()), this
          }, remove: function () {
            return ne.each(arguments, function (e, t) {
              for (var n; (n = ne.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= o && o--
            }), this
          }, has: function (e) {
            return e ? ne.inArray(e, a) > -1 : a.length > 0
          }, empty: function () {
            return a && (a = []), this
          }, disable: function () {
            return i = s = [], a = n = "", this
          }, disabled: function () {
            return !a
          }, lock: function () {
            return i = s = [], n || (a = n = ""), this
          }, locked: function () {
            return !!i
          }, fireWith: function (e, n) {
            return i || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || u()), this
          }, fire: function () {
            return d.fireWith(this, arguments), this
          }, fired: function () {
            return !!r
          }
        };
        return d
      }, ne.extend({
        Deferred: function (e) {
          var t = [["resolve", "done", ne.Callbacks("once memory"), "resolved"], ["reject", "fail", ne.Callbacks("once memory"), "rejected"], ["notify", "progress", ne.Callbacks("memory")]],
            n = "pending", r = {
              state: function () {
                return n
              }, always: function () {
                return i.done(arguments).fail(arguments), this
              }, then: function () {
                var e = arguments;
                return ne.Deferred(function (n) {
                  ne.each(t, function (t, a) {
                    var s = ne.isFunction(e[t]) && e[t];
                    i[a[1]](function () {
                      var e = s && s.apply(this, arguments);
                      e && ne.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                    })
                  }), e = null
                }).promise()
              }, promise: function (e) {
                return null != e ? ne.extend(e, r) : r
              }
            }, i = {};
          return r.pipe = r.then, ne.each(t, function (e, a) {
            var s = a[2], o = a[3];
            r[a[1]] = s.add, o && s.add(function () {
              n = o
            }, t[1 ^ e][2].disable, t[2][2].lock), i[a[0]] = function () {
              return i[a[0] + "With"](this === i ? r : this, arguments), this
            }, i[a[0] + "With"] = s.fireWith
          }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
          var t, n, r, i = 0, a = V.call(arguments), s = a.length, o = 1 !== s || e && ne.isFunction(e.promise) ? s : 0,
            u = 1 === o ? e : ne.Deferred(), d = function (e, n, r) {
              return function (i) {
                n[e] = this, r[e] = arguments.length > 1 ? V.call(arguments) : i, r === t ? u.notifyWith(n, r) : --o || u.resolveWith(n, r)
              }
            };
          if (s > 1) for (t = new Array(s), n = new Array(s), r = new Array(s); i < s; i++) a[i] && ne.isFunction(a[i].promise) ? a[i].promise().progress(d(i, n, t)).done(d(i, r, a)).fail(u.reject) : --o;
          return o || u.resolveWith(r, a), u.promise()
        }
      });
      var ge;
      ne.fn.ready = function (e) {
        return ne.ready.promise().done(e), this
      }, ne.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
          e ? ne.readyWait++ : ne.ready(!0)
        }, ready: function (e) {
          (!0 === e ? --ne.readyWait : ne.isReady) || (ne.isReady = !0, !0 !== e && --ne.readyWait > 0 || (ge.resolveWith(B, [ne]), ne.fn.triggerHandler && (ne(B).triggerHandler("ready"), ne(B).off("ready"))))
        }
      }), ne.ready.promise = function (e) {
        return ge || (ge = ne.Deferred(), "complete" === B.readyState || "loading" !== B.readyState && !B.documentElement.doScroll ? n.setTimeout(ne.ready) : (B.addEventListener("DOMContentLoaded", u), n.addEventListener("load", u))), ge.promise(e)
      }, ne.ready.promise();
      var ve = function (e, t, n, r, i, a, s) {
        var o = 0, u = e.length, d = null == n;
        if ("object" === ne.type(n)) {
          i = !0;
          for (o in n) ve(e, t, o, n[o], !0, a, s)
        } else if (void 0 !== r && (i = !0, ne.isFunction(r) || (s = !0), d && (s ? (t.call(e, r), t = null) : (d = t, t = function (e, t, n) {
          return d.call(ne(e), n)
        })), t)) for (; o < u; o++) t(e[o], n, s ? r : r.call(e[o], o, t(e[o], n)));
        return i ? e : d ? t.call(e) : u ? t(e[0], n) : a
      }, Me = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      };
      d.uid = 1, d.prototype = {
        register: function (e, t) {
          var n = t || {};
          return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
            value: n,
            writable: !0,
            configurable: !0
          }), e[this.expando]
        }, cache: function (e) {
          if (!Me(e)) return {};
          var t = e[this.expando];
          return t || (t = {}, Me(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
            value: t,
            configurable: !0
          }))), t
        }, set: function (e, t, n) {
          var r, i = this.cache(e);
          if ("string" == typeof t) i[t] = n; else for (r in t) i[r] = t[r];
          return i
        }, get: function (e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        }, access: function (e, t, n) {
          var r;
          return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, ne.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
          var n, r, i, a = e[this.expando];
          if (void 0 !== a) {
            if (void 0 === t) this.register(e); else {
              ne.isArray(t) ? r = t.concat(t.map(ne.camelCase)) : (i = ne.camelCase(t), r = t in a ? [t, i] : (r = i) in a ? [r] : r.match(ye) || []), n = r.length;
              for (; n--;) delete a[r[n]]
            }
            (void 0 === t || ne.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
          }
        }, hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !ne.isEmptyObject(t)
        }
      };
      var be = new d, Le = new d, ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, we = /[A-Z]/g;
      ne.extend({
        hasData: function (e) {
          return Le.hasData(e) || be.hasData(e)
        }, data: function (e, t, n) {
          return Le.access(e, t, n)
        }, removeData: function (e, t) {
          Le.remove(e, t)
        }, _data: function (e, t, n) {
          return be.access(e, t, n)
        }, _removeData: function (e, t) {
          be.remove(e, t)
        }
      }), ne.fn.extend({
        data: function (e, t) {
          var n, r, i, a = this[0], s = a && a.attributes;
          if (void 0 === e) {
            if (this.length && (i = Le.get(a), 1 === a.nodeType && !be.get(a, "hasDataAttrs"))) {
              for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = ne.camelCase(r.slice(5)), l(a, r, i[r]));
              be.set(a, "hasDataAttrs", !0)
            }
            return i
          }
          return "object" == typeof e ? this.each(function () {
            Le.set(this, e)
          }) : ve(this, function (t) {
            var n, r;
            if (a && void 0 === t) {
              if (void 0 !== (n = Le.get(a, e) || Le.get(a, e.replace(we, "-$&").toLowerCase()))) return n;
              if (r = ne.camelCase(e), void 0 !== (n = Le.get(a, r))) return n;
              if (void 0 !== (n = l(a, r, void 0))) return n
            } else r = ne.camelCase(e), this.each(function () {
              var n = Le.get(this, r);
              Le.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && Le.set(this, e, t)
            })
          }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
          return this.each(function () {
            Le.remove(this, e)
          })
        }
      }), ne.extend({
        queue: function (e, t, n) {
          var r;
          if (e) return t = (t || "fx") + "queue", r = be.get(e, t), n && (!r || ne.isArray(n) ? r = be.access(e, t, ne.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
          t = t || "fx";
          var n = ne.queue(e, t), r = n.length, i = n.shift(), a = ne._queueHooks(e, t), s = function () {
            ne.dequeue(e, t)
          };
          "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, s, a)), !r && a && a.empty.fire()
        }, _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return be.get(e, n) || be.access(e, n, {
            empty: ne.Callbacks("once memory").add(function () {
              be.remove(e, [t + "queue", n])
            })
          })
        }
      }), ne.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ne.queue(this[0], e) : void 0 === t ? this : this.each(function () {
            var n = ne.queue(this, e, t);
            ne._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ne.dequeue(this, e)
          })
        }, dequeue: function (e) {
          return this.each(function () {
            ne.dequeue(this, e)
          })
        }, clearQueue: function (e) {
          return this.queue(e || "fx", [])
        }, promise: function (e, t) {
          var n, r = 1, i = ne.Deferred(), a = this, s = this.length, o = function () {
            --r || i.resolveWith(a, [a])
          };
          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (n = be.get(a[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(o));
          return o(), i.promise(t)
        }
      });
      var Ye = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Te = new RegExp("^(?:([+-])=|)(" + Ye + ")([a-z%]*)$", "i"), De = ["Top", "Right", "Bottom", "Left"],
        xe = function (e, t) {
          return e = t || e, "none" === ne.css(e, "display") || !ne.contains(e.ownerDocument, e)
        }, Se = /^(?:checkbox|radio)$/i, je = /<([\w:-]+)/, He = /^$|\/(?:java|ecma)script/i, Pe = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
      Pe.optgroup = Pe.option, Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead, Pe.th = Pe.td;
      var Ae = /<|&#?\w+;/;
      !function () {
        var e = B.createDocumentFragment().appendChild(B.createElement("div")), t = B.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), te.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", te.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
      }();
      var Ce = /^key/, Oe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ee = /^([^.]*)(?:\.(.+)|)/;
      ne.event = {
        global: {},
        add: function (e, t, n, r, i) {
          var a, s, o, u, d, l, c, h, f, m, p, _ = be.get(e);
          if (_) for (n.handler && (n = (a = n).handler, i = a.selector), n.guid || (n.guid = ne.guid++), (u = _.events) || (u = _.events = {}), (s = _.handle) || (s = _.handle = function (t) {
            return void 0 !== ne && ne.event.triggered !== t.type ? ne.event.dispatch.apply(e, arguments) : void 0
          }), d = (t = (t || "").match(ye) || [""]).length; d--;) f = p = (o = Ee.exec(t[d]) || [])[1], m = (o[2] || "").split(".").sort(), f && (c = ne.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, c = ne.event.special[f] || {}, l = ne.extend({
            type: f,
            origType: p,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && ne.expr.match.needsContext.test(i),
            namespace: m.join(".")
          }, a), (h = u[f]) || ((h = u[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, r, m, s) || e.addEventListener && e.addEventListener(f, s)), c.add && (c.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, l) : h.push(l), ne.event.global[f] = !0)
        },
        remove: function (e, t, n, r, i) {
          var a, s, o, u, d, l, c, h, f, m, p, _ = be.hasData(e) && be.get(e);
          if (_ && (u = _.events)) {
            for (d = (t = (t || "").match(ye) || [""]).length; d--;) if (o = Ee.exec(t[d]) || [], f = p = o[1], m = (o[2] || "").split(".").sort(), f) {
              for (c = ne.event.special[f] || {}, h = u[f = (r ? c.delegateType : c.bindType) || f] || [], o = o[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = h.length; a--;) l = h[a], !i && p !== l.origType || n && n.guid !== l.guid || o && !o.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (h.splice(a, 1), l.selector && h.delegateCount--, c.remove && c.remove.call(e, l));
              s && !h.length && (c.teardown && !1 !== c.teardown.call(e, m, _.handle) || ne.removeEvent(e, f, _.handle), delete u[f])
            } else for (f in u) ne.event.remove(e, f + t[d], n, r, !0);
            ne.isEmptyObject(u) && be.remove(e, "handle events")
          }
        },
        dispatch: function (e) {
          e = ne.event.fix(e);
          var t, n, r, i, a, s = [], o = V.call(arguments), u = (be.get(this, "events") || {})[e.type] || [],
            d = ne.event.special[e.type] || {};
          if (o[0] = e, e.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, e)) {
            for (s = ne.event.handlers.call(this, e, u), t = 0; (i = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, n = 0; (a = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(a.namespace) || (e.handleObj = a, e.data = a.data, void 0 !== (r = ((ne.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, o)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
            return d.postDispatch && d.postDispatch.call(this, e), e.result
          }
        },
        handlers: function (e, t) {
          var n, r, i, a, s = [], o = t.delegateCount, u = e.target;
          if (o && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
            for (r = [], n = 0; n < o; n++) void 0 === r[i = (a = t[n]).selector + " "] && (r[i] = a.needsContext ? ne(i, this).index(u) > -1 : ne.find(i, this, null, [u]).length), r[i] && r.push(a);
            r.length && s.push({elem: u, handlers: r})
          }
          return o < t.length && s.push({elem: this, handlers: t.slice(o)}), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
          props: "char charCode key keyCode".split(" "), filter: function (e, t) {
            return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
          }
        },
        mouseHooks: {
          props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
          filter: function (e, t) {
            var n, r, i, a = t.button;
            return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || B).documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
          }
        },
        fix: function (e) {
          if (e[ne.expando]) return e;
          var t, n, r, i = e.type, a = e, s = this.fixHooks[i];
          for (s || (this.fixHooks[i] = s = Oe.test(i) ? this.mouseHooks : Ce.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new ne.Event(a), t = r.length; t--;) e[n = r[t]] = a[n];
          return e.target || (e.target = B), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, a) : e
        },
        special: {
          load: {noBubble: !0}, focus: {
            trigger: function () {
              if (this !== y() && this.focus) return this.focus(), !1
            }, delegateType: "focusin"
          }, blur: {
            trigger: function () {
              if (this === y() && this.blur) return this.blur(), !1
            }, delegateType: "focusout"
          }, click: {
            trigger: function () {
              if ("checkbox" === this.type && this.click && ne.nodeName(this, "input")) return this.click(), !1
            }, _default: function (e) {
              return ne.nodeName(e.target, "a")
            }
          }, beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
            }
          }
        }
      }, ne.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
      }, ne.Event = function (e, t) {
        if (!(this instanceof ne.Event)) return new ne.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? p : _) : this.type = e, t && ne.extend(this, t), this.timeStamp = e && e.timeStamp || ne.now(), this[ne.expando] = !0
      }, ne.Event.prototype = {
        constructor: ne.Event,
        isDefaultPrevented: _,
        isPropagationStopped: _,
        isImmediatePropagationStopped: _,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          this.isDefaultPrevented = p, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          this.isPropagationStopped = p, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = p, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
      }, ne.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function (e, t) {
        ne.event.special[e] = {
          delegateType: t, bindType: t, handle: function (e) {
            var n, r = e.relatedTarget, i = e.handleObj;
            return r && (r === this || ne.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
          }
        }
      }), ne.fn.extend({
        on: function (e, t, n, r) {
          return g(this, e, t, n, r)
        }, one: function (e, t, n, r) {
          return g(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ne(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
          if ("object" == typeof e) {
            for (i in e) this.off(i, t, e[i]);
            return this
          }
          return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = _), this.each(function () {
            ne.event.remove(this, e, n, t)
          })
        }
      });
      var Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, $e = /<script|<style|<link/i,
        Ie = /checked\s*(?:[^=]|=\s*.checked.)/i, Ne = /^true\/(.*)/, Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      ne.extend({
        htmlPrefilter: function (e) {
          return e.replace(Fe, "<$1></$2>")
        }, clone: function (e, t, n) {
          var r, i, a, s, o = e.cloneNode(!0), u = ne.contains(e.ownerDocument, e);
          if (!(te.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ne.isXMLDoc(e))) for (s = h(o), r = 0, i = (a = h(e)).length; r < i; r++) k(a[r], s[r]);
          if (t) if (n) for (a = a || h(e), s = s || h(o), r = 0, i = a.length; r < i; r++) L(a[r], s[r]); else L(e, o);
          return (s = h(o, "script")).length > 0 && f(s, !u && h(e, "script")), o
        }, cleanData: function (e) {
          for (var t, n, r, i = ne.event.special, a = 0; void 0 !== (n = e[a]); a++) if (Me(n)) {
            if (t = n[be.expando]) {
              if (t.events) for (r in t.events) i[r] ? ne.event.remove(n, r) : ne.removeEvent(n, r, t.handle);
              n[be.expando] = void 0
            }
            n[Le.expando] && (n[Le.expando] = void 0)
          }
        }
      }), ne.fn.extend({
        domManip: w, detach: function (e) {
          return Y(this, e, !0)
        }, remove: function (e) {
          return Y(this, e)
        }, text: function (e) {
          return ve(this, function (e) {
            return void 0 === e ? ne.text(this) : this.empty().each(function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
            })
          }, null, e, arguments.length)
        }, append: function () {
          return w(this, arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              v(this, e).appendChild(e)
            }
          })
        }, prepend: function () {
          return w(this, arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = v(this, e);
              t.insertBefore(e, t.firstChild)
            }
          })
        }, before: function () {
          return w(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
          })
        }, after: function () {
          return w(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
        }, empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ne.cleanData(h(e, !1)), e.textContent = "");
          return this
        }, clone: function (e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function () {
            return ne.clone(this, e, t)
          })
        }, html: function (e) {
          return ve(this, function (e) {
            var t = this[0] || {}, n = 0, r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ("string" == typeof e && !$e.test(e) && !Pe[(je.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = ne.htmlPrefilter(e);
              try {
                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ne.cleanData(h(t, !1)), t.innerHTML = e);
                t = 0
              } catch (e) {
              }
            }
            t && this.empty().append(e)
          }, null, e, arguments.length)
        }, replaceWith: function () {
          var e = [];
          return w(this, arguments, function (t) {
            var n = this.parentNode;
            ne.inArray(this, e) < 0 && (ne.cleanData(h(this)), n && n.replaceChild(t, this))
          }, e)
        }
      }), ne.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function (e, t) {
        ne.fn[e] = function (e) {
          for (var n, r = [], i = ne(e), a = i.length - 1, s = 0; s <= a; s++) n = s === a ? this : this.clone(!0), ne(i[s])[t](n), Q.apply(r, n.get());
          return this.pushStack(r)
        }
      });
      var We, ze = {HTML: "block", BODY: "block"}, Ue = /^margin/, Je = new RegExp("^(" + Ye + ")(?!px)[a-z%]+$", "i"),
        qe = function (e) {
          var t = e.ownerDocument.defaultView;
          return t && t.opener || (t = n), t.getComputedStyle(e)
        }, Be = function (e, t, n, r) {
          var i, a, s = {};
          for (a in t) s[a] = e.style[a], e.style[a] = t[a];
          i = n.apply(e, r || []);
          for (a in t) e.style[a] = s[a];
          return i
        }, Ve = B.documentElement;
      !function () {
        function e() {
          o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", o.innerHTML = "", Ve.appendChild(s);
          var e = n.getComputedStyle(o);
          t = "1%" !== e.top, a = "2px" === e.marginLeft, r = "4px" === e.width, o.style.marginRight = "50%", i = "4px" === e.marginRight, Ve.removeChild(s)
        }

        var t, r, i, a, s = B.createElement("div"), o = B.createElement("div");
        o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", te.clearCloneStyle = "content-box" === o.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(o), ne.extend(te, {
          pixelPosition: function () {
            return e(), t
          }, boxSizingReliable: function () {
            return null == r && e(), r
          }, pixelMarginRight: function () {
            return null == r && e(), i
          }, reliableMarginLeft: function () {
            return null == r && e(), a
          }, reliableMarginRight: function () {
            var e, t = o.appendChild(B.createElement("div"));
            return t.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", o.style.width = "1px", Ve.appendChild(s), e = !parseFloat(n.getComputedStyle(t).marginRight), Ve.removeChild(s), o.removeChild(t), e
          }
        }))
      }();
      var Ge = /^(none|table(?!-c[ea]).+)/, Qe = {position: "absolute", visibility: "hidden", display: "block"},
        Ke = {letterSpacing: "0", fontWeight: "400"}, Ze = ["Webkit", "O", "Moz", "ms"],
        Xe = B.createElement("div").style;
      ne.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = x(e, "opacity");
                return "" === n ? "1" : n
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i, a, s, o = ne.camelCase(t), u = e.style;
            if (t = ne.cssProps[o] || (ne.cssProps[o] = j(o) || o), s = ne.cssHooks[t] || ne.cssHooks[o], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t];
            "string" == (a = typeof n) && (i = Te.exec(n)) && i[1] && (n = c(e, t, i), a = "number"), null != n && n == n && ("number" === a && (n += i && i[3] || (ne.cssNumber[o] ? "" : "px")), te.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))
          }
        },
        css: function (e, t, n, r) {
          var i, a, s, o = ne.camelCase(t);
          return t = ne.cssProps[o] || (ne.cssProps[o] = j(o) || o), (s = ne.cssHooks[t] || ne.cssHooks[o]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = x(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (a = parseFloat(i), !0 === n || isFinite(a) ? a || 0 : i) : i
        }
      }), ne.each(["height", "width"], function (e, t) {
        ne.cssHooks[t] = {
          get: function (e, n, r) {
            if (n) return Ge.test(ne.css(e, "display")) && 0 === e.offsetWidth ? Be(e, Qe, function () {
              return A(e, t, r)
            }) : A(e, t, r)
          }, set: function (e, n, r) {
            var i, a = r && qe(e), s = r && P(e, t, r, "border-box" === ne.css(e, "boxSizing", !1, a), a);
            return s && (i = Te.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = ne.css(e, t)), H(0, n, s)
          }
        }
      }), ne.cssHooks.marginLeft = S(te.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(x(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {marginLeft: 0}, function () {
          return e.getBoundingClientRect().left
        })) + "px"
      }), ne.cssHooks.marginRight = S(te.reliableMarginRight, function (e, t) {
        if (t) return Be(e, {display: "inline-block"}, x, [e, "marginRight"])
      }), ne.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        ne.cssHooks[e + t] = {
          expand: function (n) {
            for (var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + De[r] + t] = a[r] || a[r - 2] || a[0];
            return i
          }
        }, Ue.test(e) || (ne.cssHooks[e + t].set = H)
      }), ne.fn.extend({
        css: function (e, t) {
          return ve(this, function (e, t, n) {
            var r, i, a = {}, s = 0;
            if (ne.isArray(t)) {
              for (r = qe(e), i = t.length; s < i; s++) a[t[s]] = ne.css(e, t[s], !1, r);
              return a
            }
            return void 0 !== n ? ne.style(e, t, n) : ne.css(e, t)
          }, e, t, arguments.length > 1)
        }, show: function () {
          return C(this, !0)
        }, hide: function () {
          return C(this)
        }, toggle: function (e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
            xe(this) ? ne(this).show() : ne(this).hide()
          })
        }
      }), ne.Tween = O, (O.prototype = {
        constructor: O, init: function (e, t, n, r, i, a) {
          this.elem = e, this.prop = n, this.easing = i || ne.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (ne.cssNumber[n] ? "" : "px")
        }, cur: function () {
          var e = O.propHooks[this.prop];
          return e && e.get ? e.get(this) : O.propHooks._default.get(this)
        }, run: function (e) {
          var t, n = O.propHooks[this.prop];
          return this.options.duration ? this.pos = t = ne.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
        }
      }).init.prototype = O.prototype, (O.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ne.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
          }, set: function (e) {
            ne.fx.step[e.prop] ? ne.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ne.cssProps[e.prop]] && !ne.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ne.style(e.elem, e.prop, e.now + e.unit)
          }
        }
      }).scrollTop = O.propHooks.scrollLeft = {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
      }, ne.easing = {
        linear: function (e) {
          return e
        }, swing: function (e) {
          return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
      }, ne.fx = O.prototype.init, ne.fx.step = {};
      var et, tt, nt = /^(?:toggle|show|hide)$/, rt = /queueHooks$/;
      ne.Animation = ne.extend(I, {
        tweeners: {
          "*": [function (e, t) {
            var n = this.createTween(e, t);
            return c(n.elem, e, Te.exec(t), n), n
          }]
        }, tweener: function (e, t) {
          ne.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(ye);
          for (var n, r = 0, i = e.length; r < i; r++) n = e[r], I.tweeners[n] = I.tweeners[n] || [], I.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
          var r, i, a, s, o, u, d, l = this, c = {}, h = e.style, f = e.nodeType && xe(e), m = be.get(e, "fxshow");
          n.queue || (null == (o = ne._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, u = o.empty.fire, o.empty.fire = function () {
            o.unqueued || u()
          }), o.unqueued++, l.always(function () {
            l.always(function () {
              o.unqueued--, ne.queue(e, "fx").length || o.empty.fire()
            })
          })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (d = ne.css(e, "display")) ? be.get(e, "olddisplay") || D(e.nodeName) : d) && "none" === ne.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", l.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
          }));
          for (r in t) if (i = t[r], nt.exec(i)) {
            if (delete t[r], a = a || "toggle" === i, i === (f ? "hide" : "show")) {
              if ("show" !== i || !m || void 0 === m[r]) continue;
              f = !0
            }
            c[r] = m && m[r] || ne.style(e, r)
          } else d = void 0;
          if (ne.isEmptyObject(c)) "inline" === ("none" === d ? D(e.nodeName) : d) && (h.display = d); else {
            m ? "hidden" in m && (f = m.hidden) : m = be.access(e, "fxshow", {}), a && (m.hidden = !f), f ? ne(e).show() : l.done(function () {
              ne(e).hide()
            }), l.done(function () {
              var t;
              be.remove(e, "fxshow");
              for (t in c) ne.style(e, t, c[t])
            });
            for (r in c) s = $(f ? m[r] : 0, r, l), r in m || (m[r] = s.start, f && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
          }
        }], prefilter: function (e, t) {
          t ? I.prefilters.unshift(e) : I.prefilters.push(e)
        }
      }), ne.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? ne.extend({}, e) : {
          complete: n || !n && t || ne.isFunction(e) && e,
          duration: e,
          easing: n && t || t && !ne.isFunction(t) && t
        };
        return r.duration = ne.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ne.fx.speeds ? ne.fx.speeds[r.duration] : ne.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
          ne.isFunction(r.old) && r.old.call(this), r.queue && ne.dequeue(this, r.queue)
        }, r
      }, ne.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(xe).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
          var i = ne.isEmptyObject(e), a = ne.speed(t, n, r), s = function () {
            var t = I(this, ne.extend({}, e), a);
            (i || be.get(this, "finish")) && t.stop(!0)
          };
          return s.finish = s, i || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
        }, stop: function (e, t, n) {
          var r = function (e) {
            var t = e.stop;
            delete e.stop, t(n)
          };
          return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
            var t = !0, i = null != e && e + "queueHooks", a = ne.timers, s = be.get(this);
            if (i) s[i] && s[i].stop && r(s[i]); else for (i in s) s[i] && s[i].stop && rt.test(i) && r(s[i]);
            for (i = a.length; i--;) a[i].elem !== this || null != e && a[i].queue !== e || (a[i].anim.stop(n), t = !1, a.splice(i, 1));
            !t && n || ne.dequeue(this, e)
          })
        }, finish: function (e) {
          return !1 !== e && (e = e || "fx"), this.each(function () {
            var t, n = be.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], a = ne.timers, s = r ? r.length : 0;
            for (n.finish = !0, ne.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
            for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish
          })
        }
      }), ne.each(["toggle", "show", "hide"], function (e, t) {
        var n = ne.fn[t];
        ne.fn[t] = function (e, r, i) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, r, i)
        }
      }), ne.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
      }, function (e, t) {
        ne.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r)
        }
      }), ne.timers = [], ne.fx.tick = function () {
        var e, t = 0, n = ne.timers;
        for (et = ne.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || ne.fx.stop(), et = void 0
      }, ne.fx.timer = function (e) {
        ne.timers.push(e), e() ? ne.fx.start() : ne.timers.pop()
      }, ne.fx.interval = 13, ne.fx.start = function () {
        tt || (tt = n.setInterval(ne.fx.tick, ne.fx.interval))
      }, ne.fx.stop = function () {
        n.clearInterval(tt), tt = null
      }, ne.fx.speeds = {slow: 600, fast: 200, _default: 400}, ne.fn.delay = function (e, t) {
        return e = ne.fx ? ne.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, r) {
          var i = n.setTimeout(t, e);
          r.stop = function () {
            n.clearTimeout(i)
          }
        })
      }, function () {
        var e = B.createElement("input"), t = B.createElement("select"), n = t.appendChild(B.createElement("option"));
        e.type = "checkbox", te.checkOn = "" !== e.value, te.optSelected = n.selected, t.disabled = !0, te.optDisabled = !n.disabled, (e = B.createElement("input")).value = "t", e.type = "radio", te.radioValue = "t" === e.value
      }();
      var it, at = ne.expr.attrHandle;
      ne.fn.extend({
        attr: function (e, t) {
          return ve(this, ne.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
          return this.each(function () {
            ne.removeAttr(this, e)
          })
        }
      }), ne.extend({
        attr: function (e, t, n) {
          var r, i, a = e.nodeType;
          if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? ne.prop(e, t, n) : (1 === a && ne.isXMLDoc(e) || (t = t.toLowerCase(), i = ne.attrHooks[t] || (ne.expr.match.bool.test(t) ? it : void 0)), void 0 !== n ? null === n ? void ne.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = ne.find.attr(e, t)) ? void 0 : r)
        }, attrHooks: {
          type: {
            set: function (e, t) {
              if (!te.radioValue && "radio" === t && ne.nodeName(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t
              }
            }
          }
        }, removeAttr: function (e, t) {
          var n, r, i = 0, a = t && t.match(ye);
          if (a && 1 === e.nodeType) for (; n = a[i++];) r = ne.propFix[n] || n, ne.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }
      }), it = {
        set: function (e, t, n) {
          return !1 === t ? ne.removeAttr(e, n) : e.setAttribute(n, n), n
        }
      }, ne.each(ne.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = at[t] || ne.find.attr;
        at[t] = function (e, t, r) {
          var i, a;
          return r || (a = at[t], at[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, at[t] = a), i
        }
      });
      var st = /^(?:input|select|textarea|button)$/i, ot = /^(?:a|area)$/i;
      ne.fn.extend({
        prop: function (e, t) {
          return ve(this, ne.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
          return this.each(function () {
            delete this[ne.propFix[e] || e]
          })
        }
      }), ne.extend({
        prop: function (e, t, n) {
          var r, i, a = e.nodeType;
          if (3 !== a && 8 !== a && 2 !== a) return 1 === a && ne.isXMLDoc(e) || (t = ne.propFix[t] || t, i = ne.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
          tabIndex: {
            get: function (e) {
              var t = ne.find.attr(e, "tabindex");
              return t ? parseInt(t, 10) : st.test(e.nodeName) || ot.test(e.nodeName) && e.href ? 0 : -1
            }
          }
        }, propFix: {for: "htmlFor", class: "className"}
      }), te.optSelected || (ne.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
      }), ne.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ne.propFix[this.toLowerCase()] = this
      });
      var ut = /[\t\r\n\f]/g;
      ne.fn.extend({
        addClass: function (e) {
          var t, n, r, i, a, s, o, u = 0;
          if (ne.isFunction(e)) return this.each(function (t) {
            ne(this).addClass(e.call(this, t, N(this)))
          });
          if ("string" == typeof e && e) for (t = e.match(ye) || []; n = this[u++];) if (i = N(n), r = 1 === n.nodeType && (" " + i + " ").replace(ut, " ")) {
            for (s = 0; a = t[s++];) r.indexOf(" " + a + " ") < 0 && (r += a + " ");
            i !== (o = ne.trim(r)) && n.setAttribute("class", o)
          }
          return this
        }, removeClass: function (e) {
          var t, n, r, i, a, s, o, u = 0;
          if (ne.isFunction(e)) return this.each(function (t) {
            ne(this).removeClass(e.call(this, t, N(this)))
          });
          if (!arguments.length) return this.attr("class", "");
          if ("string" == typeof e && e) for (t = e.match(ye) || []; n = this[u++];) if (i = N(n), r = 1 === n.nodeType && (" " + i + " ").replace(ut, " ")) {
            for (s = 0; a = t[s++];) for (; r.indexOf(" " + a + " ") > -1;) r = r.replace(" " + a + " ", " ");
            i !== (o = ne.trim(r)) && n.setAttribute("class", o)
          }
          return this
        }, toggleClass: function (e, t) {
          var n = typeof e;
          return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ne.isFunction(e) ? this.each(function (n) {
            ne(this).toggleClass(e.call(this, n, N(this), t), t)
          }) : this.each(function () {
            var t, r, i, a;
            if ("string" === n) for (r = 0, i = ne(this), a = e.match(ye) || []; t = a[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && "boolean" !== n || ((t = N(this)) && be.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : be.get(this, "__className__") || ""))
          })
        }, hasClass: function (e) {
          var t, n, r = 0;
          for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + N(n) + " ").replace(ut, " ").indexOf(t) > -1) return !0;
          return !1
        }
      });
      var dt = /\r/g, lt = /[\x20\t\r\n\f]+/g;
      ne.fn.extend({
        val: function (e) {
          var t, n, r, i = this[0];
          if (arguments.length) return r = ne.isFunction(e), this.each(function (n) {
            var i;
            1 === this.nodeType && (null == (i = r ? e.call(this, n, ne(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : ne.isArray(i) && (i = ne.map(i, function (e) {
              return null == e ? "" : e + ""
            })), (t = ne.valHooks[this.type] || ne.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
          });
          if (i) return (t = ne.valHooks[i.type] || ne.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(dt, "") : null == n ? "" : n
        }
      }), ne.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = ne.find.attr(e, "value");
              return null != t ? t : ne.trim(ne.text(e)).replace(lt, " ")
            }
          }, select: {
            get: function (e) {
              for (var t, n, r = e.options, i = e.selectedIndex, a = "select-one" === e.type || i < 0, s = a ? null : [], o = a ? i + 1 : r.length, u = i < 0 ? o : a ? i : 0; u < o; u++) if (((n = r[u]).selected || u === i) && (te.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ne.nodeName(n.parentNode, "optgroup"))) {
                if (t = ne(n).val(), a) return t;
                s.push(t)
              }
              return s
            }, set: function (e, t) {
              for (var n, r, i = e.options, a = ne.makeArray(t), s = i.length; s--;) ((r = i[s]).selected = ne.inArray(ne.valHooks.option.get(r), a) > -1) && (n = !0);
              return n || (e.selectedIndex = -1), a
            }
          }
        }
      }), ne.each(["radio", "checkbox"], function () {
        ne.valHooks[this] = {
          set: function (e, t) {
            if (ne.isArray(t)) return e.checked = ne.inArray(ne(e).val(), t) > -1
          }
        }, te.checkOn || (ne.valHooks[this].get = function (e) {
          return null === e.getAttribute("value") ? "on" : e.value
        })
      });
      var ct = /^(?:focusinfocus|focusoutblur)$/;
      ne.extend(ne.event, {
        trigger: function (e, t, r, i) {
          var a, s, o, u, d, l, c, h = [r || B], f = ee.call(e, "type") ? e.type : e,
            m = ee.call(e, "namespace") ? e.namespace.split(".") : [];
          if (s = o = r = r || B, 3 !== r.nodeType && 8 !== r.nodeType && !ct.test(f + ne.event.triggered) && (f.indexOf(".") > -1 && (f = (m = f.split(".")).shift(), m.sort()), d = f.indexOf(":") < 0 && "on" + f, e = e[ne.expando] ? e : new ne.Event(f, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : ne.makeArray(t, [e]), c = ne.event.special[f] || {}, i || !c.trigger || !1 !== c.trigger.apply(r, t))) {
            if (!i && !c.noBubble && !ne.isWindow(r)) {
              for (u = c.delegateType || f, ct.test(u + f) || (s = s.parentNode); s; s = s.parentNode) h.push(s), o = s;
              o === (r.ownerDocument || B) && h.push(o.defaultView || o.parentWindow || n)
            }
            for (a = 0; (s = h[a++]) && !e.isPropagationStopped();) e.type = a > 1 ? u : c.bindType || f, (l = (be.get(s, "events") || {})[e.type] && be.get(s, "handle")) && l.apply(s, t), (l = d && s[d]) && l.apply && Me(s) && (e.result = l.apply(s, t), !1 === e.result && e.preventDefault());
            return e.type = f, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), t) || !Me(r) || d && ne.isFunction(r[f]) && !ne.isWindow(r) && ((o = r[d]) && (r[d] = null), ne.event.triggered = f, r[f](), ne.event.triggered = void 0, o && (r[d] = o)), e.result
          }
        }, simulate: function (e, t, n) {
          var r = ne.extend(new ne.Event, n, {type: e, isSimulated: !0});
          ne.event.trigger(r, null, t)
        }
      }), ne.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            ne.event.trigger(e, t, this)
          })
        }, triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return ne.event.trigger(e, t, n, !0)
        }
      }), ne.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        ne.fn[t] = function (e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
      }), ne.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e)
        }
      }), te.focusin = "onfocusin" in n, te.focusin || ne.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
          ne.event.simulate(t, e.target, ne.event.fix(e))
        };
        ne.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this, i = be.access(r, t);
            i || r.addEventListener(e, n, !0), be.access(r, t, (i || 0) + 1)
          }, teardown: function () {
            var r = this.ownerDocument || this, i = be.access(r, t) - 1;
            i ? be.access(r, t, i) : (r.removeEventListener(e, n, !0), be.remove(r, t))
          }
        }
      });
      var ht = n.location, ft = ne.now(), mt = /\?/;
      ne.parseJSON = function (e) {
        return JSON.parse(e + "")
      }, ne.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = (new n.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
          t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || ne.error("Invalid XML: " + e), t
      };
      var pt = /#.*$/, _t = /([?&])_=[^&]*/, yt = /^(.*?):[ \t]*([^\r\n]*)$/gm, gt = /^(?:GET|HEAD)$/, vt = /^\/\//,
        Mt = {}, bt = {}, Lt = "*/".concat("*"), kt = B.createElement("a");
      kt.href = ht.href, ne.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: ht.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ht.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Lt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
          responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
          converters: {"* text": String, "text html": !0, "text json": ne.parseJSON, "text xml": ne.parseXML},
          flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
          return t ? z(z(e, ne.ajaxSettings), t) : z(ne.ajaxSettings, e)
        },
        ajaxPrefilter: R(Mt),
        ajaxTransport: R(bt),
        ajax: function (e, t) {
          function r(e, t, r, o) {
            var d, c, g, v, b, k = t;
            2 !== M && (M = 2, u && n.clearTimeout(u), i = void 0, s = o || "", L.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, r && (v = function (e, t, n) {
              for (var r, i, a, s, o = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
              if (r) for (i in o) if (o[i] && o[i].test(r)) {
                u.unshift(i);
                break
              }
              if (u[0] in n) a = u[0]; else {
                for (i in n) {
                  if (!u[0] || e.converters[i + " " + u[0]]) {
                    a = i;
                    break
                  }
                  s || (s = i)
                }
                a = a || s
              }
              if (a) return a !== u[0] && u.unshift(a), n[a]
            }(h, L, r)), v = function (e, t, n, r) {
              var i, a, s, o, u, d = {}, l = e.dataTypes.slice();
              if (l[1]) for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
              for (a = l.shift(); a;) if (e.responseFields[a] && (n[e.responseFields[a]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = a, a = l.shift()) if ("*" === a) a = u; else if ("*" !== u && u !== a) {
                if (!(s = d[u + " " + a] || d["* " + a])) for (i in d) if ((o = i.split(" "))[1] === a && (s = d[u + " " + o[0]] || d["* " + o[0]])) {
                  !0 === s ? s = d[i] : !0 !== d[i] && (a = o[0], l.unshift(o[1]));
                  break
                }
                if (!0 !== s) if (s && e.throws) t = s(t); else try {
                  t = s(t)
                } catch (e) {
                  return {state: "parsererror", error: s ? e : "No conversion from " + u + " to " + a}
                }
              }
              return {state: "success", data: t}
            }(h, v, L, d), d ? (h.ifModified && ((b = L.getResponseHeader("Last-Modified")) && (ne.lastModified[a] = b), (b = L.getResponseHeader("etag")) && (ne.etag[a] = b)), 204 === e || "HEAD" === h.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = v.state, c = v.data, d = !(g = v.error))) : (g = k, !e && k || (k = "error", e < 0 && (e = 0))), L.status = e, L.statusText = (t || k) + "", d ? p.resolveWith(f, [c, k, L]) : p.rejectWith(f, [L, k, g]), L.statusCode(y), y = void 0, l && m.trigger(d ? "ajaxSuccess" : "ajaxError", [L, h, d ? c : g]), _.fireWith(f, [L, k]), l && (m.trigger("ajaxComplete", [L, h]), --ne.active || ne.event.trigger("ajaxStop")))
          }

          "object" == typeof e && (t = e, e = void 0), t = t || {};
          var i, a, s, o, u, d, l, c, h = ne.ajaxSetup({}, t), f = h.context || h,
            m = h.context && (f.nodeType || f.jquery) ? ne(f) : ne.event, p = ne.Deferred(),
            _ = ne.Callbacks("once memory"), y = h.statusCode || {}, g = {}, v = {}, M = 0, b = "canceled", L = {
              readyState: 0, getResponseHeader: function (e) {
                var t;
                if (2 === M) {
                  if (!o) for (o = {}; t = yt.exec(s);) o[t[1].toLowerCase()] = t[2];
                  t = o[e.toLowerCase()]
                }
                return null == t ? null : t
              }, getAllResponseHeaders: function () {
                return 2 === M ? s : null
              }, setRequestHeader: function (e, t) {
                var n = e.toLowerCase();
                return M || (e = v[n] = v[n] || e, g[e] = t), this
              }, overrideMimeType: function (e) {
                return M || (h.mimeType = e), this
              }, statusCode: function (e) {
                var t;
                if (e) if (M < 2) for (t in e) y[t] = [y[t], e[t]]; else L.always(e[L.status]);
                return this
              }, abort: function (e) {
                var t = e || b;
                return i && i.abort(t), r(0, t), this
              }
            };
          if (p.promise(L).complete = _.add, L.success = L.done, L.error = L.fail, h.url = ((e || h.url || ht.href) + "").replace(pt, "").replace(vt, ht.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = ne.trim(h.dataType || "*").toLowerCase().match(ye) || [""], null == h.crossDomain) {
            d = B.createElement("a");
            try {
              d.href = h.url, d.href = d.href, h.crossDomain = kt.protocol + "//" + kt.host != d.protocol + "//" + d.host
            } catch (e) {
              h.crossDomain = !0
            }
          }
          if (h.data && h.processData && "string" != typeof h.data && (h.data = ne.param(h.data, h.traditional)), W(Mt, h, t, L), 2 === M) return L;
          (l = ne.event && h.global) && 0 == ne.active++ && ne.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !gt.test(h.type), a = h.url, h.hasContent || (h.data && (a = h.url += (mt.test(a) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = _t.test(a) ? a.replace(_t, "$1_=" + ft++) : a + (mt.test(a) ? "&" : "?") + "_=" + ft++)), h.ifModified && (ne.lastModified[a] && L.setRequestHeader("If-Modified-Since", ne.lastModified[a]), ne.etag[a] && L.setRequestHeader("If-None-Match", ne.etag[a])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && L.setRequestHeader("Content-Type", h.contentType), L.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : h.accepts["*"]);
          for (c in h.headers) L.setRequestHeader(c, h.headers[c]);
          if (h.beforeSend && (!1 === h.beforeSend.call(f, L, h) || 2 === M)) return L.abort();
          b = "abort";
          for (c in{success: 1, error: 1, complete: 1}) L[c](h[c]);
          if (i = W(bt, h, t, L)) {
            if (L.readyState = 1, l && m.trigger("ajaxSend", [L, h]), 2 === M) return L;
            h.async && h.timeout > 0 && (u = n.setTimeout(function () {
              L.abort("timeout")
            }, h.timeout));
            try {
              M = 1, i.send(g, r)
            } catch (e) {
              if (!(M < 2)) throw e;
              r(-1, e)
            }
          } else r(-1, "No Transport");
          return L
        },
        getJSON: function (e, t, n) {
          return ne.get(e, t, n, "json")
        },
        getScript: function (e, t) {
          return ne.get(e, void 0, t, "script")
        }
      }), ne.each(["get", "post"], function (e, t) {
        ne[t] = function (e, n, r, i) {
          return ne.isFunction(n) && (i = i || r, r = n, n = void 0), ne.ajax(ne.extend({
            url: e,
            type: t,
            dataType: i,
            data: n,
            success: r
          }, ne.isPlainObject(e) && e))
        }
      }), ne._evalUrl = function (e) {
        return ne.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
      }, ne.fn.extend({
        wrapAll: function (e) {
          var t;
          return ne.isFunction(e) ? this.each(function (t) {
            ne(this).wrapAll(e.call(this, t))
          }) : (this[0] && (t = ne(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
            return e
          }).append(this)), this)
        }, wrapInner: function (e) {
          return ne.isFunction(e) ? this.each(function (t) {
            ne(this).wrapInner(e.call(this, t))
          }) : this.each(function () {
            var t = ne(this), n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e)
          })
        }, wrap: function (e) {
          var t = ne.isFunction(e);
          return this.each(function (n) {
            ne(this).wrapAll(t ? e.call(this, n) : e)
          })
        }, unwrap: function () {
          return this.parent().each(function () {
            ne.nodeName(this, "body") || ne(this).replaceWith(this.childNodes)
          }).end()
        }
      }), ne.expr.filters.hidden = function (e) {
        return !ne.expr.filters.visible(e)
      }, ne.expr.filters.visible = function (e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
      };
      var wt = /%20/g, Yt = /\[\]$/, Tt = /\r?\n/g, Dt = /^(?:submit|button|image|reset|file)$/i,
        xt = /^(?:input|select|textarea|keygen)/i;
      ne.param = function (e, t) {
        var n, r = [], i = function (e, t) {
          t = ne.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = ne.ajaxSettings && ne.ajaxSettings.traditional), ne.isArray(e) || e.jquery && !ne.isPlainObject(e)) ne.each(e, function () {
          i(this.name, this.value)
        }); else for (n in e) U(n, e[n], t, i);
        return r.join("&").replace(wt, "+")
      }, ne.fn.extend({
        serialize: function () {
          return ne.param(this.serializeArray())
        }, serializeArray: function () {
          return this.map(function () {
            var e = ne.prop(this, "elements");
            return e ? ne.makeArray(e) : this
          }).filter(function () {
            var e = this.type;
            return this.name && !ne(this).is(":disabled") && xt.test(this.nodeName) && !Dt.test(e) && (this.checked || !Se.test(e))
          }).map(function (e, t) {
            var n = ne(this).val();
            return null == n ? null : ne.isArray(n) ? ne.map(n, function (e) {
              return {name: t.name, value: e.replace(Tt, "\r\n")}
            }) : {name: t.name, value: n.replace(Tt, "\r\n")}
          }).get()
        }
      }), ne.ajaxSettings.xhr = function () {
        try {
          return new n.XMLHttpRequest
        } catch (e) {
        }
      };
      var St = {0: 200, 1223: 204}, jt = ne.ajaxSettings.xhr();
      te.cors = !!jt && "withCredentials" in jt, te.ajax = jt = !!jt, ne.ajaxTransport(function (e) {
        var t, r;
        if (te.cors || jt && !e.crossDomain) return {
          send: function (i, a) {
            var s, o = e.xhr();
            if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) o[s] = e.xhrFields[s];
            e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
            for (s in i) o.setRequestHeader(s, i[s]);
            t = function (e) {
              return function () {
                t && (t = r = o.onload = o.onerror = o.onabort = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? a(0, "error") : a(o.status, o.statusText) : a(St[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {binary: o.response} : {text: o.responseText}, o.getAllResponseHeaders()))
              }
            }, o.onload = t(), r = o.onerror = t("error"), void 0 !== o.onabort ? o.onabort = r : o.onreadystatechange = function () {
              4 === o.readyState && n.setTimeout(function () {
                t && r()
              })
            }, t = t("abort");
            try {
              o.send(e.hasContent && e.data || null)
            } catch (e) {
              if (t) throw e
            }
          }, abort: function () {
            t && t()
          }
        }
      }), ne.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
          "text script": function (e) {
            return ne.globalEval(e), e
          }
        }
      }), ne.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
      }), ne.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
          var t, n;
          return {
            send: function (r, i) {
              t = ne("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
              }), B.head.appendChild(t[0])
            }, abort: function () {
              n && n()
            }
          }
        }
      });
      var Ht = [], Pt = /(=)\?(?=&|$)|\?\?/;
      ne.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
          var e = Ht.pop() || ne.expando + "_" + ft++;
          return this[e] = !0, e
        }
      }), ne.ajaxPrefilter("json jsonp", function (e, t, r) {
        var i, a, s,
          o = !1 !== e.jsonp && (Pt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(e.data) && "data");
        if (o || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = ne.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Pt, "$1" + i) : !1 !== e.jsonp && (e.url += (mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
          return s || ne.error(i + " was not called"), s[0]
        }, e.dataTypes[0] = "json", a = n[i], n[i] = function () {
          s = arguments
        }, r.always(function () {
          void 0 === a ? ne(n).removeProp(i) : n[i] = a, e[i] && (e.jsonpCallback = t.jsonpCallback, Ht.push(i)), s && ne.isFunction(a) && a(s[0]), s = a = void 0
        }), "script"
      }), ne.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || B;
        var r = ce.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = m([e], t, i), i && i.length && ne(i).remove(), ne.merge([], r.childNodes))
      };
      var At = ne.fn.load;
      ne.fn.load = function (e, t, n) {
        if ("string" != typeof e && At) return At.apply(this, arguments);
        var r, i, a, s = this, o = e.indexOf(" ");
        return o > -1 && (r = ne.trim(e.slice(o)), e = e.slice(0, o)), ne.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && ne.ajax({
          url: e,
          type: i || "GET",
          dataType: "html",
          data: t
        }).done(function (e) {
          a = arguments, s.html(r ? ne("<div>").append(ne.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
          s.each(function () {
            n.apply(this, a || [e.responseText, t, e])
          })
        }), this
      }, ne.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ne.fn[t] = function (e) {
          return this.on(t, e)
        }
      }), ne.expr.filters.animated = function (e) {
        return ne.grep(ne.timers, function (t) {
          return e === t.elem
        }).length
      }, ne.offset = {
        setOffset: function (e, t, n) {
          var r, i, a, s, o, u, d = ne.css(e, "position"), l = ne(e), c = {};
          "static" === d && (e.style.position = "relative"), o = l.offset(), a = ne.css(e, "top"), u = ne.css(e, "left"), ("absolute" === d || "fixed" === d) && (a + u).indexOf("auto") > -1 ? (s = (r = l.position()).top, i = r.left) : (s = parseFloat(a) || 0, i = parseFloat(u) || 0), ne.isFunction(t) && (t = t.call(e, n, ne.extend({}, o))), null != t.top && (c.top = t.top - o.top + s), null != t.left && (c.left = t.left - o.left + i), "using" in t ? t.using.call(e, c) : l.css(c)
        }
      }, ne.fn.extend({
        offset: function (e) {
          if (arguments.length) return void 0 === e ? this : this.each(function (t) {
            ne.offset.setOffset(this, e, t)
          });
          var t, n, r = this[0], i = {top: 0, left: 0}, a = r && r.ownerDocument;
          if (a) return t = a.documentElement, ne.contains(t, r) ? (i = r.getBoundingClientRect(), n = J(a), {
            top: i.top + n.pageYOffset - t.clientTop,
            left: i.left + n.pageXOffset - t.clientLeft
          }) : i
        }, position: function () {
          if (this[0]) {
            var e, t, n = this[0], r = {top: 0, left: 0};
            return "fixed" === ne.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ne.nodeName(e[0], "html") || (r = e.offset()), r.top += ne.css(e[0], "borderTopWidth", !0), r.left += ne.css(e[0], "borderLeftWidth", !0)), {
              top: t.top - r.top - ne.css(n, "marginTop", !0),
              left: t.left - r.left - ne.css(n, "marginLeft", !0)
            }
          }
        }, offsetParent: function () {
          return this.map(function () {
            for (var e = this.offsetParent; e && "static" === ne.css(e, "position");) e = e.offsetParent;
            return e || Ve
          })
        }
      }), ne.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        ne.fn[e] = function (r) {
          return ve(this, function (e, r, i) {
            var a = J(e);
            if (void 0 === i) return a ? a[t] : e[r];
            a ? a.scrollTo(n ? a.pageXOffset : i, n ? i : a.pageYOffset) : e[r] = i
          }, e, r, arguments.length)
        }
      }), ne.each(["top", "left"], function (e, t) {
        ne.cssHooks[t] = S(te.pixelPosition, function (e, n) {
          if (n) return n = x(e, t), Je.test(n) ? ne(e).position()[t] + "px" : n
        })
      }), ne.each({Height: "height", Width: "width"}, function (e, t) {
        ne.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
          ne.fn[r] = function (r, i) {
            var a = arguments.length && (n || "boolean" != typeof r),
              s = n || (!0 === r || !0 === i ? "margin" : "border");
            return ve(this, function (t, n, r) {
              var i;
              return ne.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ne.css(t, n, s) : ne.style(t, n, r, s)
            }, t, a ? r : void 0, a, null)
          }
        })
      }), ne.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n)
        }, unbind: function (e, t) {
          return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
          return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, size: function () {
          return this.length
        }
      }), ne.fn.andSelf = ne.fn.addBack, void 0 === (r = function () {
        return ne
      }.apply(t, [])) || (e.exports = r);
      var Ct = n.jQuery, Ot = n.$;
      return ne.noConflict = function (e) {
        return n.$ === ne && (n.$ = Ot), e && n.jQuery === ne && (n.jQuery = Ct), ne
      }, i || (n.jQuery = n.$ = ne), ne
    })
  }, "82Uq": function (e, t) {
    e.exports = {
      props: ["user"], data: function () {
        return {form: new SparkForm({})}
      }, methods: {
        update: function (e) {
          if (e.preventDefault(), this.$refs.photo.files.length) {
            var t = this;
            this.form.startProcessing(), axios.post("/settings/photo", this.gatherFormData()).then(function () {
              Bus.$emit("updateUser"), t.form.finishProcessing()
            }, function (e) {
              t.form.setErrors(e.response.data.errors)
            })
          }
        }, gatherFormData: function () {
          var e = new FormData;
          return e.append("photo", this.$refs.photo.files[0]), e
        }
      }, computed: {
        previewStyle: function () {
          return "background-image: url(" + this.user.photo_url + ")"
        }
      }
    }
  }, "8JQ3": function (e, t) {
    +function (e) {
      "use strict";

      function t(t) {
        return this.each(function () {
          var r = e(this), i = r.data("bs.affix"), a = "object" == typeof t && t;
          i || r.data("bs.affix", i = new n(this, a)), "string" == typeof t && i[t]()
        })
      }

      var n = function (t, r) {
        this.options = e.extend({}, n.DEFAULTS, r), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
      };
      n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
      }, n.prototype.getState = function (e, t, n, r) {
        var i = this.$target.scrollTop(), a = this.$element.offset(), s = this.$target.height();
        if (null != n && "top" == this.affixed) return i < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(i + this.unpin <= a.top) && "bottom" : !(i + s <= e - r) && "bottom";
        var o = null == this.affixed, u = o ? i : a.top;
        return null != n && i <= n ? "top" : null != r && u + (o ? s : t) >= e - r && "bottom"
      }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(), t = this.$element.offset();
        return this.pinnedOffset = t.top - e
      }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(e.proxy(this.checkPosition, this), 1)
      }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var t = this.$element.height(), r = this.options.offset, i = r.top, a = r.bottom,
            s = Math.max(e(document).height(), e(document.body).height());
          "object" != typeof r && (a = i = r), "function" == typeof i && (i = r.top(this.$element)), "function" == typeof a && (a = r.bottom(this.$element));
          var o = this.getState(s, t, i, a);
          if (this.affixed != o) {
            null != this.unpin && this.$element.css("top", "");
            var u = "affix" + (o ? "-" + o : ""), d = e.Event(u + ".bs.affix");
            if (this.$element.trigger(d), d.isDefaultPrevented()) return;
            this.affixed = o, this.unpin = "bottom" == o ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(u).trigger(u.replace("affix", "affixed") + ".bs.affix")
          }
          "bottom" == o && this.$element.offset({top: s - t - a})
        }
      };
      var r = e.fn.affix;
      e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function () {
        return e.fn.affix = r, this
      }, e(window).on("load", function () {
        e('[data-spy="affix"]').each(function () {
          var n = e(this), r = n.data();
          r.offset = r.offset || {}, null != r.offsetBottom && (r.offset.bottom = r.offsetBottom), null != r.offsetTop && (r.offset.top = r.offsetTop), t.call(n, r)
        })
      })
    }(jQuery)
  }, "8v14": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, n, r) {
        var i = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"]
        };
        return t ? i[n][0] : i[n][1]
      }

      return e.defineLocale("de-at", {
        months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: t,
          mm: "%d Minuten",
          h: t,
          hh: "%d Stunden",
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, "9S6p": function (e, t, n) {
    e.exports = {
      props: ["user", "team", "billableType"], mixins: [n("asDv")], data: function () {
        return {currentDiscount: null, loadingCurrentDiscount: !1}
      }, created: function () {
        var e = this;
        this.$on("updateDiscount", function () {
          return e.getCurrentDiscountForBillable(e.billableType, e.billable), !0
        })
      }, mounted: function () {
        this.getCurrentDiscountForBillable(this.billableType, this.billable)
      }
    }
  }, "A/Xc": function (e, t, n) {
    "use strict";
    e.exports = n("JhQ5")
  }, ACj5: function (e, t) {
    e.exports = {
      props: ["user", "team", "billableType"], data: function () {
        return {plans: [], form: new SparkForm({email: ""})}
      }, computed: {
        activeSubscription: function () {
          if (this.billable) {
            var e = _.find(this.billable.subscriptions, function (e) {
              return "default" == e.name
            });
            return void 0 !== e ? e : void 0
          }
        }, activePlan: function () {
          var e = this;
          if (this.activeSubscription) return _.find(this.plans, function (t) {
            return t.id == e.activeSubscription.provider_plan
          })
        }, hasTeamMembersLimit: function () {
          return !!this.activePlan && !!this.activePlan.attributes.teamMembers
        }, remainingTeamMembers: function () {
          return this.activePlan ? this.activePlan.attributes.teamMembers - this.$parent.team.users.length : 0
        }, canInviteMoreTeamMembers: function () {
          return !this.hasTeamMembersLimit || this.remainingTeamMembers > 0
        }
      }, created: function () {
        this.getPlans()
      }, methods: {
        send: function () {
          var e = this;
          Spark.post("/settings/" + Spark.pluralTeamString + "/" + this.team.id + "/invitations", this.form).then(function () {
            e.form.email = "", e.$parent.$emit("updateInvitations")
          })
        }, getPlans: function () {
          var e = this;
          axios.get("/spark/plans").then(function (t) {
            e.plans = t.data
          })
        }
      }
    }
  }, ALEw: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("en-ie", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, ASHV: function (e, t, n) {
    var r = n("/oMe");
    Vue.component("spark-mailed-invitations", {mixins: [r]})
  }, Ab7C: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("mk", {
        months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
        monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
        weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
        weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
        weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "D.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[Денес во] LT",
          nextDay: "[Утре во] LT",
          nextWeek: "[Во] dddd [во] LT",
          lastDay: "[Вчера во] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return "[Изминатата] dddd [во] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[Изминатиот] dddd [во] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "после %s",
          past: "пред %s",
          s: "неколку секунди",
          ss: "%d секунди",
          m: "минута",
          mm: "%d минути",
          h: "час",
          hh: "%d часа",
          d: "ден",
          dd: "%d дена",
          M: "месец",
          MM: "%d месеци",
          y: "година",
          yy: "%d години"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (e) {
          var t = e % 10, n = e % 100;
          return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
        },
        week: {dow: 1, doy: 7}
      })
    })
  }, AoDM: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("pt-br", {
        months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
        monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
        weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
        },
        calendar: {
          sameDay: "[Hoje às] LT",
          nextDay: "[Amanhã às] LT",
          nextWeek: "dddd [às] LT",
          lastDay: "[Ontem às] LT",
          lastWeek: function () {
            return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "em %s",
          past: "%s atrás",
          s: "poucos segundos",
          ss: "%d segundos",
          m: "um minuto",
          mm: "%d minutos",
          h: "uma hora",
          hh: "%d horas",
          d: "um dia",
          dd: "%d dias",
          M: "um mês",
          MM: "%d meses",
          y: "um ano",
          yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº"
      })
    })
  }, B56D: function (e, t) {
    e.exports = {
      props: ["user"], data: function () {
        return {form: new SparkForm({country_code: "", phone: ""})}
      }, mounted: function () {
        this.form.country_code = this.user.country_code, this.form.phone = this.user.phone
      }, methods: {
        enable: function () {
          var e = this;
          Spark.post("/settings/two-factor-auth", this.form).then(function (t) {
            e.$parent.$emit("receivedTwoFactorResetCode", t), Bus.$emit("updateUser")
          })
        }
      }
    }
  }, BEem: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("ar-tn", {
        months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات"
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, BbgG: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("zh-tw", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日dddd HH:mm",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          var r = 100 * e + t;
          return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
        },
        calendar: {
          sameDay: "[今天]LT",
          nextDay: "[明天]LT",
          nextWeek: "[下]ddddLT",
          lastDay: "[昨天]LT",
          lastWeek: "[上]ddddLT",
          sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function (e, t) {
          switch (t) {
            case"d":
            case"D":
            case"DDD":
              return e + "日";
            case"M":
              return e + "月";
            case"w":
            case"W":
              return e + "週";
            default:
              return e
          }
        },
        relativeTime: {
          future: "%s內",
          past: "%s前",
          s: "幾秒",
          ss: "%d 秒",
          m: "1 分鐘",
          mm: "%d 分鐘",
          h: "1 小時",
          hh: "%d 小時",
          d: "1 天",
          dd: "%d 天",
          M: "1 個月",
          MM: "%d 個月",
          y: "1 年",
          yy: "%d 年"
        }
      })
    })
  }, Bp2f: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
        n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
        i = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      return e.defineLocale("nl-be", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function (e, r) {
          return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
        },
        monthsRegex: i,
        monthsShortRegex: i,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: r,
        longMonthsParse: r,
        shortMonthsParse: r,
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[vandaag om] LT",
          nextDay: "[morgen om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[gisteren om] LT",
          lastWeek: "[afgelopen] dddd [om] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "over %s",
          past: "%s geleden",
          s: "een paar seconden",
          ss: "%d seconden",
          m: "één minuut",
          mm: "%d minuten",
          h: "één uur",
          hh: "%d uur",
          d: "één dag",
          dd: "%d dagen",
          M: "één maand",
          MM: "%d maanden",
          y: "één jaar",
          yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, ByGG: function (e, t, n) {
    void 0 === window.Vue && (window.Vue = n("4bK6"), window.Bus = new Vue), Vue.mixin(n("UATH")), n("FMCr"), n("l3G6")
  }, C7av: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("nn", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
        weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
        weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] H:mm",
          LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
          sameDay: "[I dag klokka] LT",
          nextDay: "[I morgon klokka] LT",
          nextWeek: "dddd [klokka] LT",
          lastDay: "[I går klokka] LT",
          lastWeek: "[Føregåande] dddd [klokka] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "om %s",
          past: "%s sidan",
          s: "nokre sekund",
          ss: "%d sekund",
          m: "eit minutt",
          mm: "%d minutt",
          h: "ein time",
          hh: "%d timar",
          d: "ein dag",
          dd: "%d dagar",
          M: "ein månad",
          MM: "%d månader",
          y: "eit år",
          yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, CFqe: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("el", {
        monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
        monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
        months: function (e, t) {
          return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
        },
        monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
        weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
        weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
        weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
        meridiem: function (e, t, n) {
          return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
        },
        isPM: function (e) {
          return "μ" === (e + "").toLowerCase()[0]
        },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendarEl: {
          sameDay: "[Σήμερα {}] LT",
          nextDay: "[Αύριο {}] LT",
          nextWeek: "dddd [{}] LT",
          lastDay: "[Χθες {}] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 6:
                return "[το προηγούμενο] dddd [{}] LT";
              default:
                return "[την προηγούμενη] dddd [{}] LT"
            }
          },
          sameElse: "L"
        },
        calendar: function (e, t) {
          var n = this._calendarEl[e], r = t && t.hours();
          return function (e) {
            return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
          }(n) && (n = n.apply(t)), n.replace("{}", r % 12 == 1 ? "στη" : "στις")
        },
        relativeTime: {
          future: "σε %s",
          past: "%s πριν",
          s: "λίγα δευτερόλεπτα",
          ss: "%d δευτερόλεπτα",
          m: "ένα λεπτό",
          mm: "%d λεπτά",
          h: "μία ώρα",
          hh: "%d ώρες",
          d: "μία μέρα",
          dd: "%d μέρες",
          M: "ένας μήνας",
          MM: "%d μήνες",
          y: "ένας χρόνος",
          yy: "%d χρόνια"
        },
        dayOfMonthOrdinalParse: /\d{1,2}η/,
        ordinal: "%dη",
        week: {dow: 1, doy: 4}
      })
    })
  }, DOkx: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, n, r) {
        var i = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"]
        };
        return t ? i[n][0] : i[n][1]
      }

      return e.defineLocale("de", {
        months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: t,
          mm: "%d Minuten",
          h: t,
          hh: "%d Stunden",
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, DQCr: function (e, t, n) {
    "use strict";

    function r(e) {
      return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    var i = n("cGG2");
    e.exports = function (e, t, n) {
      if (!t) return e;
      var a;
      if (n) a = n(t); else if (i.isURLSearchParams(t)) a = t.toString(); else {
        var s = [];
        i.forEach(t, function (e, t) {
          null !== e && void 0 !== e && (i.isArray(e) && (t += "[]"), i.isArray(e) || (e = [e]), i.forEach(e, function (e) {
            i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)), s.push(r(t) + "=" + r(e))
          }))
        }), a = s.join("&")
      }
      return a && (e += (-1 === e.indexOf("?") ? "?" : "&") + a), e
    }
  }, DSXN: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("sw", {
        months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
        weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
        weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[leo saa] LT",
          nextDay: "[kesho saa] LT",
          nextWeek: "[wiki ijayo] dddd [saat] LT",
          lastDay: "[jana] LT",
          lastWeek: "[wiki iliyopita] dddd [saat] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s baadaye",
          past: "tokea %s",
          s: "hivi punde",
          ss: "sekunde %d",
          m: "dakika moja",
          mm: "dakika %d",
          h: "saa limoja",
          hh: "masaa %d",
          d: "siku moja",
          dd: "masiku %d",
          M: "mwezi mmoja",
          MM: "miezi %d",
          y: "mwaka mmoja",
          yy: "miaka %d"
        },
        week: {dow: 1, doy: 7}
      })
    })
  }, DuR2: function (e, t) {
    var n;
    n = function () {
      return this
    }();
    try {
      n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
      "object" == typeof window && (n = window)
    }
    e.exports = n
  }, Dulf: function (e, t, n) {
    var r = n("YutG");
    Vue.component("spark-resume-subscription", {mixins: [r]})
  }, E9RQ: function (e, t, n) {
    e.exports = {
      mixins: [n("r+8P"), n("OeAR"), n("40eO")], data: function () {
        return {
          query: null,
          coupon: null,
          invalidCoupon: !1,
          registerForm: $.extend(!0, new SparkForm({
            braintree_type: "",
            braintree_token: "",
            plan: "",
            team: "",
            team_slug: "",
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            terms: !1,
            coupon: null,
            invitation: null
          }), Spark.forms.register)
        }
      }, watch: {
        "registerForm.team": function (e, t) {
          "" != this.registerForm.team_slug && this.registerForm.team_slug != t.toLowerCase().replace(/[\s\W-]+/g, "-") || (this.registerForm.team_slug = e.toLowerCase().replace(/[\s\W-]+/g, "-"))
        }
      }, created: function () {
        this.getPlans(), this.query = URI(document.URL).query(!0), this.query.coupon && (this.getCoupon(), this.registerForm.coupon = this.query.coupon), this.query.invitation && (this.getInvitation(), this.registerForm.invitation = this.query.invitation)
      }, mounted: function () {
        this.configureBraintree()
      }, methods: {
        configureBraintree: function () {
          var e = this;
          Spark.cardUpFront && this.braintree("braintree-container", function (t) {
            e.registerForm.braintree_type = t.type, e.registerForm.braintree_token = t.nonce, e.register()
          })
        }, getCoupon: function () {
          var e = this;
          axios.get("/coupon/" + this.query.coupon).then(function (t) {
            e.coupon = t.data
          }).catch(function (t) {
            e.invalidCoupon = !0
          })
        }, register: function () {
          Spark.post("/register", this.registerForm).then(function (e) {
            window.location = e.redirect
          })
        }
      }, computed: {
        discount: function () {
          if (this.coupon) return Vue.filter("currency")(this.coupon.amount_off)
        }
      }
    }
  }, ETHv: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"},
        n = {"१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"};
      return e.defineLocale("hi", {
        months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
        monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
        monthsParseExact: !0,
        weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
        weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
          LT: "A h:mm बजे",
          LTS: "A h:mm:ss बजे",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm बजे",
          LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
        },
        calendar: {
          sameDay: "[आज] LT",
          nextDay: "[कल] LT",
          nextWeek: "dddd, LT",
          lastDay: "[कल] LT",
          lastWeek: "[पिछले] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s में",
          past: "%s पहले",
          s: "कुछ ही क्षण",
          ss: "%d सेकंड",
          m: "एक मिनट",
          mm: "%d मिनट",
          h: "एक घंटा",
          hh: "%d घंटे",
          d: "एक दिन",
          dd: "%d दिन",
          M: "एक महीने",
          MM: "%d महीने",
          y: "एक वर्ष",
          yy: "%d वर्ष"
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
        },
        week: {dow: 0, doy: 6}
      })
    })
  }, EUIn: function (e, t) {
    e.exports = {
      props: ["user"], data: function () {
        return {form: $.extend(!0, new SparkForm({name: "", email: ""}), Spark.forms.updateContactInformation)}
      }, mounted: function () {
        this.form.name = this.user.name, this.form.email = this.user.email
      }, methods: {
        update: function () {
          Spark.put("/settings/contact", this.form).then(function () {
            Bus.$emit("updateUser")
          })
        }
      }
    }
  }, EUOT: function (e, t, n) {
    var r = n("x+TN");
    Vue.component("spark-teams", {mixins: [r]})
  }, "F+2e": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀"},
        n = {"၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0"};
      return e.defineLocale("my", {
        months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
        monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
        weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
        weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[ယနေ.] LT [မှာ]",
          nextDay: "[မနက်ဖြန်] LT [မှာ]",
          nextWeek: "dddd LT [မှာ]",
          lastDay: "[မနေ.က] LT [မှာ]",
          lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
          sameElse: "L"
        },
        relativeTime: {
          future: "လာမည့် %s မှာ",
          past: "လွန်ခဲ့သော %s က",
          s: "စက္ကန်.အနည်းငယ်",
          ss: "%d စက္ကန့်",
          m: "တစ်မိနစ်",
          mm: "%d မိနစ်",
          h: "တစ်နာရီ",
          hh: "%d နာရီ",
          d: "တစ်ရက်",
          dd: "%d ရက်",
          M: "တစ်လ",
          MM: "%d လ",
          y: "တစ်နှစ်",
          yy: "%d နှစ်"
        },
        preparse: function (e) {
          return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, FKXc: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("it", {
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
        weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
        weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
        weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Oggi alle] LT",
          nextDay: "[Domani alle] LT",
          nextWeek: "dddd [alle] LT",
          lastDay: "[Ieri alle] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[la scorsa] dddd [alle] LT";
              default:
                return "[lo scorso] dddd [alle] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: function (e) {
            return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
          },
          past: "%s fa",
          s: "alcuni secondi",
          ss: "%d secondi",
          m: "un minuto",
          mm: "%d minuti",
          h: "un'ora",
          hh: "%d ore",
          d: "un giorno",
          dd: "%d giorni",
          M: "un mese",
          MM: "%d mesi",
          y: "un anno",
          yy: "%d anni"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 1, doy: 4}
      })
    })
  }, FMCr: function (e, t) {
    Vue.filter("date", function (e) {
      return moment.utc(e).local().format("MMMM Do, YYYY")
    }), Vue.filter("datetime", function (e) {
      return moment.utc(e).local().format("MMMM Do, YYYY h:mm A")
    }), Vue.filter("relative", function (e) {
      return moment.utc(e).local().locale("en-short").fromNow()
    }), Vue.filter("capitalize", function (e) {
      return e || 0 === e ? e.toString().charAt(0).toUpperCase() + e.slice(1) : ""
    }), Vue.filter("currency", function (e) {
      if (e = parseFloat(e), !isFinite(e) || !e && 0 !== e) return "";
      var t = Math.abs(e).toFixed(2), n = t.slice(0, -3), r = n.length % 3,
        i = r > 0 ? n.slice(0, r) + (n.length > 3 ? "," : "") : "", a = t.slice(-3);
      return (e < 0 ? "-" : "") + window.Spark.currencySymbol + i + n.slice(r).replace(/(\d{3})(?=\d)/g, "$1,") + a
    })
  }, FRPF: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("tzm", {
        months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
        monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
        weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
          nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
          nextWeek: "dddd [ⴴ] LT",
          lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
          lastWeek: "dddd [ⴴ] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
          past: "ⵢⴰⵏ %s",
          s: "ⵉⵎⵉⴽ",
          ss: "%d ⵉⵎⵉⴽ",
          m: "ⵎⵉⵏⵓⴺ",
          mm: "%d ⵎⵉⵏⵓⴺ",
          h: "ⵙⴰⵄⴰ",
          hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
          d: "ⴰⵙⵙ",
          dd: "%d oⵙⵙⴰⵏ",
          M: "ⴰⵢoⵓⵔ",
          MM: "%d ⵉⵢⵢⵉⵔⵏ",
          y: "ⴰⵙⴳⴰⵙ",
          yy: "%d ⵉⵙⴳⴰⵙⵏ"
        },
        week: {dow: 6, doy: 12}
      })
    })
  }, FlzV: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("nb", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
        monthsParseExact: !0,
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] HH:mm",
          LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
          sameDay: "[i dag kl.] LT",
          nextDay: "[i morgen kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[i går kl.] LT",
          lastWeek: "[forrige] dddd [kl.] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "om %s",
          past: "%s siden",
          s: "noen sekunder",
          ss: "%d sekunder",
          m: "ett minutt",
          mm: "%d minutter",
          h: "en time",
          hh: "%d timer",
          d: "en dag",
          dd: "%d dager",
          M: "en måned",
          MM: "%d måneder",
          y: "ett år",
          yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, Fpqq: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("sv", {
        months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
        weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
        weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [kl.] HH:mm",
          LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd D MMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Idag] LT",
          nextDay: "[Imorgon] LT",
          lastDay: "[Igår] LT",
          nextWeek: "[På] dddd LT",
          lastWeek: "[I] dddd[s] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "om %s",
          past: "för %s sedan",
          s: "några sekunder",
          ss: "%d sekunder",
          m: "en minut",
          mm: "%d minuter",
          h: "en timme",
          hh: "%d timmar",
          d: "en dag",
          dd: "%d dagar",
          M: "en månad",
          MM: "%d månader",
          y: "ett år",
          yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, Frex: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, n, r) {
        var i = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"]
        };
        return t ? i[n][0] : i[n][1]
      }

      return e.defineLocale("de-ch", {
        months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: t,
          mm: "%d Minuten",
          h: t,
          hh: "%d Stunden",
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, FtD3: function (e, t, n) {
    "use strict";
    var r = n("t8qj");
    e.exports = function (e, t, n, i) {
      var a = new Error(e);
      return r(a, t, n, i)
    }
  }, FuaP: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("gl", {
        months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
        monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
          sameDay: function () {
            return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
          }, nextDay: function () {
            return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
          }, nextWeek: function () {
            return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
          }, lastDay: function () {
            return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
          }, lastWeek: function () {
            return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
          }, sameElse: "L"
        },
        relativeTime: {
          future: function (e) {
            return 0 === e.indexOf("un") ? "n" + e : "en " + e
          },
          past: "hai %s",
          s: "uns segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "unha hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un ano",
          yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 1, doy: 4}
      })
    })
  }, "G++c": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("ms-my", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Esok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kelmarin pukul] LT",
          lastWeek: "dddd [lepas pukul] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lepas",
          s: "beberapa saat",
          ss: "%d saat",
          m: "seminit",
          mm: "%d minit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun"
        },
        week: {dow: 1, doy: 7}
      })
    })
  }, G1kv: function (e, t, n) {
    var r = n("S/mN");
    Vue.component("spark-payment-method-braintree", {mixins: [r]})
  }, GHBc: function (e, t, n) {
    "use strict";
    var r = n("cGG2");
    e.exports = r.isStandardBrowserEnv() ? function () {
      function e(e) {
        var t = e;
        return n && (i.setAttribute("href", t), t = i.href), i.setAttribute("href", t), {
          href: i.href,
          protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
          host: i.host,
          search: i.search ? i.search.replace(/^\?/, "") : "",
          hash: i.hash ? i.hash.replace(/^#/, "") : "",
          hostname: i.hostname,
          port: i.port,
          pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
        }
      }

      var t, n = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a");
      return t = e(window.location.href), function (n) {
        var i = r.isString(n) ? e(n) : n;
        return i.protocol === t.protocol && i.host === t.host
      }
    }() : function () {
      return !0
    }
  }, GeLc: function (e, t, n) {
    e.exports = {
      props: ["user"], mixins: [n("SiWD")], mounted: function () {
        this.usePushStateForTabs(".spark-settings-tabs")
      }, created: function () {
        Bus.$on("sparkHashChanged", function (e, t) {
          return "users" == e && setTimeout(function () {
            $("#kiosk-users-search").focus()
          }, 150), !0
        })
      }
    }
  }, Getl: function (e, t, n) {
    window.URI = n("hBlz"), window.axios = n("mtWM"), window._ = n("rdLu"), window.moment = n("PJh5"), window.Promise = n("A/Xc"), window.Cookies = n("lbHh"), window.moment.defineLocale("en-short", {
      parentLocale: "en",
      relativeTime: {
        future: "in %s",
        past: "%s",
        s: "1s",
        m: "1m",
        mm: "%dm",
        h: "1h",
        hh: "%dh",
        d: "1d",
        dd: "%dd",
        M: "1 month ago",
        MM: "%d months ago",
        y: "1y",
        yy: "%dy"
      }
    }), window.moment.locale("en"), void 0 !== window.$ && void 0 !== window.jQuery || (window.$ = window.jQuery = n("7t+N")), n("gNGx"), $("#spark-app").length > 0 && n("ByGG"), window.axios.defaults.headers.common = {
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-TOKEN": Spark.csrfToken
    }, window.axios.interceptors.response.use(function (e) {
      return e
    }, function (e) {
      switch (e.response.status) {
        case 401:
          window.axios.get("/logout"), $("#modal-session-expired").modal("show");
          break;
        case 402:
          window.location = "/settings#/subscription"
      }
      return Promise.reject(e)
    })
  }, GrS7: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("hy-am", {
        months: {
          format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
          standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
        },
        monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
        weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
        weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY թ.",
          LLL: "D MMMM YYYY թ., HH:mm",
          LLLL: "dddd, D MMMM YYYY թ., HH:mm"
        },
        calendar: {
          sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function () {
            return "dddd [օրը ժամը] LT"
          }, lastWeek: function () {
            return "[անցած] dddd [օրը ժամը] LT"
          }, sameElse: "L"
        },
        relativeTime: {
          future: "%s հետո",
          past: "%s առաջ",
          s: "մի քանի վայրկյան",
          ss: "%d վայրկյան",
          m: "րոպե",
          mm: "%d րոպե",
          h: "ժամ",
          hh: "%d ժամ",
          d: "օր",
          dd: "%d օր",
          M: "ամիս",
          MM: "%d ամիս",
          y: "տարի",
          yy: "%d տարի"
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function (e) {
          return /^(ցերեկվա|երեկոյան)$/.test(e)
        },
        meridiem: function (e) {
          return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function (e, t) {
          switch (t) {
            case"DDD":
            case"w":
            case"W":
            case"DDDo":
              return 1 === e ? e + "-ին" : e + "-րդ";
            default:
              return e
          }
        },
        week: {dow: 1, doy: 7}
      })
    })
  }, Hdg1: function (e, t, n) {
    var r = n("RYz6");
    Vue.component("spark-kiosk-metrics", {mixins: [r]})
  }, INcR: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
        n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
      return e.defineLocale("es-us", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function (e, r) {
          return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
        },
        monthsParseExact: !0,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "MM/DD/YYYY",
          LL: "MMMM [de] D [de] YYYY",
          LLL: "MMMM [de] D [de] YYYY h:mm A",
          LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
        },
        calendar: {
          sameDay: function () {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, nextDay: function () {
            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, nextWeek: function () {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, lastDay: function () {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, lastWeek: function () {
            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, sameElse: "L"
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 0, doy: 6}
      })
    })
  }, IR0Y: function (e, t, n) {
    var r = n("L07x");
    Vue.component("spark-tokens", {mixins: [r]})
  }, IYKl: function (e, t, n) {
    "use strict";

    function r(e) {
      var t;
      (t = s.length ? s.pop() : new i).task = e, a(t)
    }

    function i() {
      this.task = null
    }

    var a = n("3Cgm"), s = [], o = [], u = a.makeRequestCallFromTimer(function () {
      if (o.length) throw o.shift()
    });
    e.exports = r, i.prototype.call = function () {
      try {
        this.task.call()
      } catch (e) {
        r.onerror ? r.onerror(e) : (o.push(e), u())
      } finally {
        this.task = null, s[s.length] = this
      }
    }
  }, JE6y: function (e, t) {
    +function (e) {
      "use strict";
      var t = function (e, t) {
        this.init("popover", e, t)
      };
      if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
      t.VERSION = "3.3.7", t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
      }), t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function () {
        return t.DEFAULTS
      }, t.prototype.setContent = function () {
        var e = this.tip(), t = this.getTitle(), n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
      }, t.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
      }, t.prototype.getContent = function () {
        var e = this.$element, t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
      }, t.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
      };
      var n = e.fn.popover;
      e.fn.popover = function (n) {
        return this.each(function () {
          var r = e(this), i = r.data("bs.popover"), a = "object" == typeof n && n;
          !i && /destroy|hide/.test(n) || (i || r.data("bs.popover", i = new t(this, a)), "string" == typeof n && i[n]())
        })
      }, e.fn.popover.Constructor = t, e.fn.popover.noConflict = function () {
        return e.fn.popover = n, this
      }
    }(jQuery)
  }, JOHR: function (e, t, n) {
    var r = n("82Uq");
    Vue.component("spark-update-profile-photo", {mixins: [r]})
  }, "JP+z": function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
        return e.apply(t, n)
      }
    }
  }, JhQ5: function (e, t, n) {
    "use strict";
    e.exports = n("se3Y"), n("vxXX"), n("tuGe"), n("Nq5S"), n("PGhS"), n("YQ0A")
  }, JwiF: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("jv", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
        weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
        },
        calendar: {
          sameDay: "[Dinten puniko pukul] LT",
          nextDay: "[Mbenjang pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kala wingi pukul] LT",
          lastWeek: "dddd [kepengker pukul] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "wonten ing %s",
          past: "%s ingkang kepengker",
          s: "sawetawis detik",
          ss: "%d detik",
          m: "setunggal menit",
          mm: "%d menit",
          h: "setunggal jam",
          hh: "%d jam",
          d: "sedinten",
          dd: "%d dinten",
          M: "sewulan",
          MM: "%d wulan",
          y: "setaun",
          yy: "%d taun"
        },
        week: {dow: 1, doy: 7}
      })
    })
  }, K0T2: function (e, t, n) {
    var r = n("GeLc");
    Vue.component("spark-kiosk", {mixins: [r]})
  }, K8rk: function (e, t, n) {
    e.exports = {
      props: ["user", "teamId"], mixins: [n("SiWD")], data: function () {
        return {billableType: "team", team: null}
      }, created: function () {
        var e = this;
        this.getTeam(), Bus.$on("updateTeam", function () {
          e.getTeam()
        })
      }, mounted: function () {
        this.usePushStateForTabs(".spark-settings-tabs")
      }, methods: {
        getTeam: function () {
          var e = this;
          axios.get("/" + Spark.pluralTeamString + "/" + this.teamId).then(function (t) {
            e.team = t.data
          })
        }
      }
    }
  }, KCLY: function (e, t, n) {
    "use strict";
    (function (t) {
      function r(e, t) {
        !i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
      }

      var i = n("cGG2"), a = n("5VQ+"), s = /^\)\]\}',?\n/, o = {"Content-Type": "application/x-www-form-urlencoded"},
        u = {
          adapter: function () {
            var e;
            return "undefined" != typeof XMLHttpRequest ? e = n("7GwW") : void 0 !== t && (e = n("7GwW")), e
          }(),
          transformRequest: [function (e, t) {
            return a(t, "Content-Type"), i.isFormData(e) || i.isArrayBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : i.isObject(e) ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
          }],
          transformResponse: [function (e) {
            if ("string" == typeof e) {
              e = e.replace(s, "");
              try {
                e = JSON.parse(e)
              } catch (e) {
              }
            }
            return e
          }],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300
          }
        };
      u.headers = {common: {Accept: "application/json, text/plain, */*"}}, i.forEach(["delete", "get", "head"], function (e) {
        u.headers[e] = {}
      }), i.forEach(["post", "put", "patch"], function (e) {
        u.headers[e] = i.merge(o)
      }), e.exports = u
    }).call(t, n("W2nU"))
  }, KNGO: function (e, t, n) {
    e.exports = {
      props: ["user", "team", "plans", "billableType"],
      mixins: [n("OeAR"), n("jJ7H"), n("Q8BB")],
      data: function () {
        return {
          taxRate: 0,
          form: new SparkForm({
            stripe_token: "",
            plan: "",
            coupon: null,
            address: "",
            address_line_2: "",
            city: "",
            state: "",
            zip: "",
            country: "US",
            vat_id: ""
          }),
          cardForm: new SparkForm({name: "", number: "", cvc: "", month: "", year: "", zip: ""})
        }
      },
      watch: {
        currentBillingAddress: function (e) {
          Spark.collectsEuropeanVat && this.refreshTaxRate(this.form)
        }
      },
      mounted: function () {
        Stripe.setPublishableKey(Spark.stripeKey), this.initializeBillingAddress(), this.onlyHasYearlyPaidPlans && this.showYearlyPlans()
      },
      methods: {
        initializeBillingAddress: function () {
          this.form.address = this.billable.billing_address, this.form.address_line_2 = this.billable.billing_address_line_2, this.form.city = this.billable.billing_city, this.form.state = this.billable.billing_state, this.form.zip = this.billable.billing_zip, this.form.country = this.billable.billing_country || "US", this.form.vat_id = this.billable.vat_id
        }, selectPlan: function (e) {
          this.selectedPlan = e, this.form.plan = this.selectedPlan.id
        }, subscribe: function () {
          var e = this;
          this.cardForm.errors.forget(), this.form.startProcessing();
          var t = {
            name: this.cardForm.name,
            number: this.cardForm.number,
            cvc: this.cardForm.cvc,
            exp_month: this.cardForm.month,
            exp_year: this.cardForm.year,
            address_line1: this.form.address,
            address_line2: this.form.address_line_2,
            address_city: this.form.city,
            address_state: this.form.state,
            address_zip: this.form.zip,
            address_country: this.form.country
          };
          Stripe.card.createToken(t, function (t, n) {
            n.error ? (e.cardForm.errors.set({number: [n.error.message]}), e.form.busy = !1) : e.createSubscription(n.id)
          })
        }, createSubscription: function (e) {
          this.form.stripe_token = e, Spark.post(this.urlForNewSubscription, this.form).then(function (e) {
            Bus.$emit("updateUser"), Bus.$emit("updateTeam")
          })
        }, hasSubscribed: function (e) {
          return !!_.where(this.billable.subscriptions, {provider_plan: e.id}).length
        }, showPlanDetails: function (e) {
          this.$parent.$emit("showPlanDetails", e)
        }
      },
      computed: {
        billableName: function () {
          return this.billingUser ? this.user.name : this.team.owner.name
        }, countryCollectsVat: function () {
          return this.collectsVat(this.form.country)
        }, urlForNewSubscription: function () {
          return this.billingUser ? "/settings/subscription" : "/settings/" + Spark.pluralTeamString + "/" + this.team.id + "/subscription"
        }, currentBillingAddress: function () {
          return this.form.address + this.form.address_line_2 + this.form.city + this.form.state + this.form.zip + this.form.country + this.form.vat_id
        }
      }
    }
  }, "L+96": function (e, t) {
    e.exports = {
      data: function () {
        return {invitations: []}
      }, created: function () {
        this.getPendingInvitations()
      }, methods: {
        getPendingInvitations: function () {
          var e = this;
          axios.get("/settings/invitations/pending").then(function (t) {
            e.invitations = t.data
          })
        }, accept: function (e) {
          var t = this;
          axios.post("/settings/invitations/" + e.id + "/accept").then(function () {
            Bus.$emit("updateTeams"), t.getPendingInvitations()
          }), this.removeInvitation(e)
        }, reject: function (e) {
          var t = this;
          axios.post("/settings/invitations/" + e.id + "/reject").then(function () {
            t.getPendingInvitations()
          }), this.removeInvitation(e)
        }, removeInvitation: function (e) {
          this.invitations = _.reject(this.invitations, function (t) {
            return t.id === e.id
          })
        }
      }
    }
  }, L07x: function (e, t) {
    e.exports = {
      props: ["tokens", "availableAbilities"], data: function () {
        return {
          updatingToken: null,
          deletingToken: null,
          updateTokenForm: new SparkForm({name: "", abilities: []}),
          deleteTokenForm: new SparkForm({})
        }
      }, methods: {
        editToken: function (e) {
          this.updatingToken = e, this.initializeUpdateFormWith(e), $("#modal-update-token").modal("show")
        }, initializeUpdateFormWith: function (e) {
          this.updateTokenForm.name = e.name, this.updateTokenForm.abilities = e.metadata.abilities
        }, updateToken: function () {
          var e = this;
          Spark.put("/settings/api/token/" + this.updatingToken.id, this.updateTokenForm).then(function (t) {
            e.$parent.$emit("updateTokens"), $("#modal-update-token").modal("hide")
          })
        }, toggleAbility: function (e) {
          this.abilityIsAssigned(e) ? this.updateTokenForm.abilities = _.reject(this.updateTokenForm.abilities, function (t) {
            return t == e
          }) : this.updateTokenForm.abilities.push(e)
        }, abilityIsAssigned: function (e) {
          return _.contains(this.updateTokenForm.abilities, e)
        }, approveTokenDelete: function (e) {
          this.deletingToken = e, $("#modal-delete-token").modal("show")
        }, deleteToken: function () {
          var e = this;
          Spark.delete("/settings/api/token/" + this.deletingToken.id, this.deleteTokenForm).then(function () {
            e.$parent.$emit("updateTokens"), $("#modal-delete-token").modal("hide")
          })
        }
      }
    }
  }, LJ5N: function (e, t) {
    e.exports = {
      props: ["user", "teams", "currentTeam", "hasUnreadNotifications", "hasUnreadAnnouncements"],
      methods: {
        showNotifications: function () {
          Bus.$emit("showNotifications")
        }, showSupportForm: function () {
          Bus.$emit("showSupportForm")
        }
      }
    }
  }, LT9G: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
        n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
        r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
        i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      return e.defineLocale("es", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function (e, r) {
          return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
        },
        monthsRegex: i,
        monthsShortRegex: i,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: r,
        longMonthsParse: r,
        shortMonthsParse: r,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
          sameDay: function () {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, nextDay: function () {
            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, nextWeek: function () {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, lastDay: function () {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, lastWeek: function () {
            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          }, sameElse: "L"
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 1, doy: 4}
      })
    })
  }, Lgqo: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("si", {
        months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
        monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
        weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
        weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
        weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "a h:mm",
          LTS: "a h:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY MMMM D",
          LLL: "YYYY MMMM D, a h:mm",
          LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
        },
        calendar: {
          sameDay: "[අද] LT[ට]",
          nextDay: "[හෙට] LT[ට]",
          nextWeek: "dddd LT[ට]",
          lastDay: "[ඊයේ] LT[ට]",
          lastWeek: "[පසුගිය] dddd LT[ට]",
          sameElse: "L"
        },
        relativeTime: {
          future: "%sකින්",
          past: "%sකට පෙර",
          s: "තත්පර කිහිපය",
          ss: "තත්පර %d",
          m: "මිනිත්තුව",
          mm: "මිනිත්තු %d",
          h: "පැය",
          hh: "පැය %d",
          d: "දිනය",
          dd: "දින %d",
          M: "මාසය",
          MM: "මාස %d",
          y: "වසර",
          yy: "වසර %d"
        },
        dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
        ordinal: function (e) {
          return e + " වැනි"
        },
        meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM: function (e) {
          return "ප.ව." === e || "පස් වරු" === e
        },
        meridiem: function (e, t, n) {
          return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
        }
      })
    })
  }, LkJv: function (e, t) {
    +function (e) {
      "use strict";
      e.fn.emulateTransitionEnd = function (t) {
        var n = !1, r = this;
        e(this).one("bsTransitionEnd", function () {
          n = !0
        });
        return setTimeout(function () {
          n || e(r).trigger(e.support.transition.end)
        }, t), this
      }, e(function () {
        e.support.transition = function () {
          var e = document.createElement("bootstrap"), t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
          };
          for (var n in t) if (void 0 !== e.style[n]) return {end: t[n]};
          return !1
        }(), e.support.transition && (e.event.special.bsTransitionEnd = {
          bindType: e.support.transition.end,
          delegateType: e.support.transition.end,
          handle: function (t) {
            if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
          }
        })
      })
    }(jQuery)
  }, MKi2: function (e, t, n) {
    e.exports = {
      props: ["user", "team", "plans", "billableType"],
      mixins: [n("r+8P"), n("OeAR"), n("jJ7H")],
      data: function () {
        return {form: new SparkForm({braintree_type: "", braintree_token: "", plan: "", coupon: null})}
      },
      mounted: function () {
        var e = this;
        this.onlyHasYearlyPaidPlans && this.showYearlyPlans(), this.braintree("braintree-subscribe-container", function (t) {
          e.form.braintree_type = t.type, e.form.braintree_token = t.nonce, e.subscribe()
        })
      },
      methods: {
        selectPlan: function (e) {
          this.selectedPlan = e, this.form.plan = this.selectedPlan.id
        }, subscribe: function () {
          Spark.post(this.urlForNewSubscription, this.form).then(function (e) {
            Bus.$emit("updateUser"), Bus.$emit("updateTeam")
          })
        }, showPlanDetails: function (e) {
          this.$parent.$emit("showPlanDetails", e)
        }
      },
      computed: {
        urlForNewSubscription: function () {
          return this.billingUser ? "/settings/subscription" : "/settings/" + Spark.pluralTeamString + "/" + this.team.id + "/subscription"
        }
      }
    }
  }, Mj7C: function (e, t) {
    +function (e) {
      "use strict";

      function t(t) {
        return this.each(function () {
          var r = e(this), i = r.data("bs.button"), a = "object" == typeof t && t;
          i || r.data("bs.button", i = new n(this, a)), "toggle" == t ? i.toggle() : t && i.setState(t)
        })
      }

      var n = function (t, r) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, r), this.isLoading = !1
      };
      n.VERSION = "3.3.7", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (t) {
        var n = "disabled", r = this.$element, i = r.is("input") ? "val" : "html", a = r.data();
        t += "Text", null == a.resetText && r.data("resetText", r[i]()), setTimeout(e.proxy(function () {
          r[i](null == a[t] ? this.options[t] : a[t]), "loadingText" == t ? (this.isLoading = !0, r.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
      }, n.prototype.toggle = function () {
        var e = !0, t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
          var n = this.$element.find("input");
          "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
      };
      var r = e.fn.button;
      e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function () {
        return e.fn.button = r, this
      }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var r = e(n.target).closest(".btn");
        t.call(r, "toggle"), e(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
      }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
      })
    }(jQuery)
  }, N3vo: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("cv", {
        months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
        monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
        weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
        weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
        weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
          LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
          LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
        },
        calendar: {
          sameDay: "[Паян] LT [сехетре]",
          nextDay: "[Ыран] LT [сехетре]",
          lastDay: "[Ӗнер] LT [сехетре]",
          nextWeek: "[Ҫитес] dddd LT [сехетре]",
          lastWeek: "[Иртнӗ] dddd LT [сехетре]",
          sameElse: "L"
        },
        relativeTime: {
          future: function (e) {
            return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
          },
          past: "%s каялла",
          s: "пӗр-ик ҫеккунт",
          ss: "%d ҫеккунт",
          m: "пӗр минут",
          mm: "%d минут",
          h: "пӗр сехет",
          hh: "%d сехет",
          d: "пӗр кун",
          dd: "%d кун",
          M: "пӗр уйӑх",
          MM: "%d уйӑх",
          y: "пӗр ҫул",
          yy: "%d ҫул"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
        ordinal: "%d-мӗш",
        week: {dow: 1, doy: 7}
      })
    })
  }, NPjm: function (e, t, n) {
    var r = n("zGIp");
    Vue.component("spark-settings", {mixins: [r]})
  }, Nd3h: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("eo", {
        months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
        weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
        weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
        weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D[-a de] MMMM, YYYY",
          LLL: "D[-a de] MMMM, YYYY HH:mm",
          LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function (e) {
          return "p" === e.charAt(0).toLowerCase()
        },
        meridiem: function (e, t, n) {
          return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
        },
        calendar: {
          sameDay: "[Hodiaŭ je] LT",
          nextDay: "[Morgaŭ je] LT",
          nextWeek: "dddd [je] LT",
          lastDay: "[Hieraŭ je] LT",
          lastWeek: "[pasinta] dddd [je] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "post %s",
          past: "antaŭ %s",
          s: "sekundoj",
          ss: "%d sekundoj",
          m: "minuto",
          mm: "%d minutoj",
          h: "horo",
          hh: "%d horoj",
          d: "tago",
          dd: "%d tagoj",
          M: "monato",
          MM: "%d monatoj",
          y: "jaro",
          yy: "%d jaroj"
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal: "%da",
        week: {dow: 1, doy: 7}
      })
    })
  }, Nlnz: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("te", {
        months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
        monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
        monthsParseExact: !0,
        weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
        weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
        weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
          sameDay: "[నేడు] LT",
          nextDay: "[రేపు] LT",
          nextWeek: "dddd, LT",
          lastDay: "[నిన్న] LT",
          lastWeek: "[గత] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s లో",
          past: "%s క్రితం",
          s: "కొన్ని క్షణాలు",
          ss: "%d సెకన్లు",
          m: "ఒక నిమిషం",
          mm: "%d నిమిషాలు",
          h: "ఒక గంట",
          hh: "%d గంటలు",
          d: "ఒక రోజు",
          dd: "%d రోజులు",
          M: "ఒక నెల",
          MM: "%d నెలలు",
          y: "ఒక సంవత్సరం",
          yy: "%d సంవత్సరాలు"
        },
        dayOfMonthOrdinalParse: /\d{1,2}వ/,
        ordinal: "%dవ",
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
        },
        week: {dow: 0, doy: 6}
      })
    })
  }, Nq5S: function (e, t, n) {
    "use strict";

    function r(e) {
      var t = new i(i._61);
      return t._65 = 1, t._55 = e, t
    }

    var i = n("se3Y");
    e.exports = i;
    var a = r(!0), s = r(!1), o = r(null), u = r(void 0), d = r(0), l = r("");
    i.resolve = function (e) {
      if (e instanceof i) return e;
      if (null === e) return o;
      if (void 0 === e) return u;
      if (!0 === e) return a;
      if (!1 === e) return s;
      if (0 === e) return d;
      if ("" === e) return l;
      if ("object" == typeof e || "function" == typeof e) try {
        var t = e.then;
        if ("function" == typeof t) return new i(t.bind(e))
      } catch (e) {
        return new i(function (t, n) {
          n(e)
        })
      }
      return r(e)
    }, i.all = function (e) {
      var t = Array.prototype.slice.call(e);
      return new i(function (e, n) {
        function r(s, o) {
          if (o && ("object" == typeof o || "function" == typeof o)) {
            if (o instanceof i && o.then === i.prototype.then) {
              for (; 3 === o._65;) o = o._55;
              return 1 === o._65 ? r(s, o._55) : (2 === o._65 && n(o._55), void o.then(function (e) {
                r(s, e)
              }, n))
            }
            var u = o.then;
            if ("function" == typeof u) {
              return void new i(u.bind(o)).then(function (e) {
                r(s, e)
              }, n)
            }
          }
          t[s] = o, 0 == --a && e(t)
        }

        if (0 === t.length) return e([]);
        for (var a = t.length, s = 0; s < t.length; s++) r(s, t[s])
      })
    }, i.reject = function (e) {
      return new i(function (t, n) {
        n(e)
      })
    }, i.race = function (e) {
      return new i(function (t, n) {
        e.forEach(function (e) {
          i.resolve(e).then(t, n)
        })
      })
    }, i.prototype.catch = function (e) {
      return this.then(null, e)
    }
  }, Nzt2: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("he", {
        months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
        monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
        weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
        weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
        weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [ב]MMMM YYYY",
          LLL: "D [ב]MMMM YYYY HH:mm",
          LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
          l: "D/M/YYYY",
          ll: "D MMM YYYY",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[היום ב־]LT",
          nextDay: "[מחר ב־]LT",
          nextWeek: "dddd [בשעה] LT",
          lastDay: "[אתמול ב־]LT",
          lastWeek: "[ביום] dddd [האחרון בשעה] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "בעוד %s",
          past: "לפני %s",
          s: "מספר שניות",
          ss: "%d שניות",
          m: "דקה",
          mm: "%d דקות",
          h: "שעה",
          hh: function (e) {
            return 2 === e ? "שעתיים" : e + " שעות"
          },
          d: "יום",
          dd: function (e) {
            return 2 === e ? "יומיים" : e + " ימים"
          },
          M: "חודש",
          MM: function (e) {
            return 2 === e ? "חודשיים" : e + " חודשים"
          },
          y: "שנה",
          yy: function (e) {
            return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
          }
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM: function (e) {
          return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
        }
      })
    })
  }, O2uK: function (e, t) {
    +function (e) {
      "use strict";

      function t(n, r) {
        this.$body = e(document.body), this.$scrollElement = e(n).is(document.body) ? e(window) : e(n), this.options = e.extend({}, t.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
      }

      function n(n) {
        return this.each(function () {
          var r = e(this), i = r.data("bs.scrollspy"), a = "object" == typeof n && n;
          i || r.data("bs.scrollspy", i = new t(this, a)), "string" == typeof n && i[n]()
        })
      }

      t.VERSION = "3.3.7", t.DEFAULTS = {offset: 10}, t.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
      }, t.prototype.refresh = function () {
        var t = this, n = "offset", r = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", r = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
          var t = e(this), i = t.data("target") || t.attr("href"), a = /^#./.test(i) && e(i);
          return a && a.length && a.is(":visible") && [[a[n]().top + r, i]] || null
        }).sort(function (e, t) {
          return e[0] - t[0]
        }).each(function () {
          t.offsets.push(this[0]), t.targets.push(this[1])
        })
      }, t.prototype.process = function () {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(),
          r = this.options.offset + n - this.$scrollElement.height(), i = this.offsets, a = this.targets,
          s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= r) return s != (e = a[a.length - 1]) && this.activate(e);
        if (s && t < i[0]) return this.activeTarget = null, this.clear();
        for (e = i.length; e--;) s != a[e] && t >= i[e] && (void 0 === i[e + 1] || t < i[e + 1]) && this.activate(a[e])
      }, t.prototype.activate = function (t) {
        this.activeTarget = t, this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
          r = e(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
      }, t.prototype.clear = function () {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
      };
      var r = e.fn.scrollspy;
      e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function () {
        return e.fn.scrollspy = r, this
      }, e(window).on("load.bs.scrollspy.data-api", function () {
        e('[data-spy="scroll"]').each(function () {
          var t = e(this);
          n.call(t, t.data())
        })
      })
    }(jQuery)
  }, O57c: function (e, t) {
    e.exports = {
      props: ["notifications", "hasUnreadAnnouncements", "loadingNotifications"], data: function () {
        return {showingNotifications: !0, showingAnnouncements: !1}
      }, methods: {
        showNotifications: function () {
          this.showingNotifications = !0, this.showingAnnouncements = !1
        }, showAnnouncements: function () {
          this.showingNotifications = !1, this.showingAnnouncements = !0, this.updateLastReadAnnouncementsTimestamp()
        }, updateLastReadAnnouncementsTimestamp: function () {
          axios.put("/user/last-read-announcements-at").then(function () {
            Bus.$emit("updateUser")
          })
        }
      }, computed: {
        activeNotifications: function () {
          return this.notifications ? this.showingNotifications ? this.notifications.notifications : this.notifications.announcements : []
        }, hasNotifications: function () {
          return this.notifications && this.notifications.notifications.length > 0
        }, hasAnnouncements: function () {
          return this.notifications && this.notifications.announcements.length > 0
        }
      }
    }
  }, O7hI: function (e, t, n) {
    var r = n("eIiL");
    Vue.component("spark-update-payment-method-braintree", {mixins: [r]})
  }, O8i7: function (e, t, n) {
    var r = n("LJ5N");
    Vue.component("spark-navbar", {mixins: [r]})
  }, ORgI: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("ja", {
        months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
        weekdaysShort: "日_月_火_水_木_金_土".split("_"),
        weekdaysMin: "日_月_火_水_木_金_土".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日 HH:mm dddd",
          l: "YYYY/MM/DD",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日 HH:mm dddd"
        },
        meridiemParse: /午前|午後/i,
        isPM: function (e) {
          return "午後" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "午前" : "午後"
        },
        calendar: {
          sameDay: "[今日] LT",
          nextDay: "[明日] LT",
          nextWeek: "[来週]dddd LT",
          lastDay: "[昨日] LT",
          lastWeek: "[前週]dddd LT",
          sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}日/,
        ordinal: function (e, t) {
          switch (t) {
            case"d":
            case"D":
            case"DDD":
              return e + "日";
            default:
              return e
          }
        },
        relativeTime: {
          future: "%s後",
          past: "%s前",
          s: "数秒",
          ss: "%d秒",
          m: "1分",
          mm: "%d分",
          h: "1時間",
          hh: "%d時間",
          d: "1日",
          dd: "%d日",
          M: "1ヶ月",
          MM: "%dヶ月",
          y: "1年",
          yy: "%d年"
        }
      })
    })
  }, OSsP: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, n) {
        return e + " " + function (e, t) {
          if (2 === t) return function (e) {
            var t = {m: "v", b: "v", d: "z"};
            if (void 0 === t[e.charAt(0)]) return e;
            return t[e.charAt(0)] + e.substring(1)
          }(e);
          return e
        }({mm: "munutenn", MM: "miz", dd: "devezh"}[n], e)
      }

      function n(e) {
        return e > 9 ? n(e % 10) : e
      }

      return e.defineLocale("br", {
        months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
        monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
        weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
        weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "h[e]mm A",
          LTS: "h[e]mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D [a viz] MMMM YYYY",
          LLL: "D [a viz] MMMM YYYY h[e]mm A",
          LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
        },
        calendar: {
          sameDay: "[Hiziv da] LT",
          nextDay: "[Warc'hoazh da] LT",
          nextWeek: "dddd [da] LT",
          lastDay: "[Dec'h da] LT",
          lastWeek: "dddd [paset da] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "a-benn %s",
          past: "%s 'zo",
          s: "un nebeud segondennoù",
          ss: "%d eilenn",
          m: "ur vunutenn",
          mm: t,
          h: "un eur",
          hh: "%d eur",
          d: "un devezh",
          dd: t,
          M: "ur miz",
          MM: t,
          y: "ur bloaz",
          yy: function (e) {
            switch (n(e)) {
              case 1:
              case 3:
              case 4:
              case 5:
              case 9:
                return e + " bloaz";
              default:
                return e + " vloaz"
            }
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
        ordinal: function (e) {
          return e + (1 === e ? "añ" : "vet")
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, OUMt: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e) {
        return e > 1 && e < 5
      }

      function n(e, n, r, i) {
        var a = e + " ";
        switch (r) {
          case"s":
            return n || i ? "pár sekúnd" : "pár sekundami";
          case"ss":
            return n || i ? a + (t(e) ? "sekundy" : "sekúnd") : a + "sekundami";
          case"m":
            return n ? "minúta" : i ? "minútu" : "minútou";
          case"mm":
            return n || i ? a + (t(e) ? "minúty" : "minút") : a + "minútami";
          case"h":
            return n ? "hodina" : i ? "hodinu" : "hodinou";
          case"hh":
            return n || i ? a + (t(e) ? "hodiny" : "hodín") : a + "hodinami";
          case"d":
            return n || i ? "deň" : "dňom";
          case"dd":
            return n || i ? a + (t(e) ? "dni" : "dní") : a + "dňami";
          case"M":
            return n || i ? "mesiac" : "mesiacom";
          case"MM":
            return n || i ? a + (t(e) ? "mesiace" : "mesiacov") : a + "mesiacmi";
          case"y":
            return n || i ? "rok" : "rokom";
          case"yy":
            return n || i ? a + (t(e) ? "roky" : "rokov") : a + "rokmi"
        }
      }

      var r = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
        i = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
      return e.defineLocale("sk", {
        months: r,
        monthsShort: i,
        weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
        weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
        weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[v nedeľu o] LT";
              case 1:
              case 2:
                return "[v] dddd [o] LT";
              case 3:
                return "[v stredu o] LT";
              case 4:
                return "[vo štvrtok o] LT";
              case 5:
                return "[v piatok o] LT";
              case 6:
                return "[v sobotu o] LT"
            }
          }, lastDay: "[včera o] LT", lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[minulú nedeľu o] LT";
              case 1:
              case 2:
                return "[minulý] dddd [o] LT";
              case 3:
                return "[minulú stredu o] LT";
              case 4:
              case 5:
                return "[minulý] dddd [o] LT";
              case 6:
                return "[minulú sobotu o] LT"
            }
          }, sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "pred %s",
          s: n,
          ss: n,
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, OVPi: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("fo", {
        months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
        weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
        weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D. MMMM, YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Í dag kl.] LT",
          nextDay: "[Í morgin kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[Í gjár kl.] LT",
          lastWeek: "[síðstu] dddd [kl] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "um %s",
          past: "%s síðani",
          s: "fá sekund",
          ss: "%d sekundir",
          m: "ein minutt",
          mm: "%d minuttir",
          h: "ein tími",
          hh: "%d tímar",
          d: "ein dagur",
          dd: "%d dagar",
          M: "ein mánaði",
          MM: "%d mánaðir",
          y: "eitt ár",
          yy: "%d ár"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, OeAR: function (e, t) {
    e.exports = {
      data: function () {
        return {selectedPlan: null, detailingPlan: null, showingMonthlyPlans: !0, showingYearlyPlans: !1}
      }, methods: {
        showMonthlyPlans: function () {
          this.showingMonthlyPlans = !0, this.showingYearlyPlans = !1
        }, showYearlyPlans: function () {
          this.showingMonthlyPlans = !1, this.showingYearlyPlans = !0
        }, showPlanDetails: function (e) {
          this.detailingPlan = e, $("#modal-plan-details").modal("show")
        }
      }, computed: {
        activeInterval: function () {
          return this.showingMonthlyPlans ? "monthly" : "yearly"
        }, plansForActiveInterval: function () {
          var e = this;
          return _.filter(this.plans, function (t) {
            return t.active && (0 == t.price || t.interval == e.activeInterval)
          })
        }, paidPlans: function () {
          return _.filter(this.plans, function (e) {
            return e.active && e.price > 0
          })
        }, paidPlansForActiveInterval: function () {
          return _.filter(this.plansForActiveInterval, function (e) {
            return e.active && e.price > 0
          })
        }, hasMonthlyAndYearlyPlans: function () {
          return this.monthlyPlans.length > 0 && this.yearlyPlans.length > 0
        }, hasMonthlyAndYearlyPaidPlans: function () {
          return _.where(this.paidPlans, {interval: "monthly"}).length > 0 && _.where(this.paidPlans, {interval: "yearly"}).length > 0
        }, onlyHasYearlyPlans: function () {
          return 0 == this.monthlyPlans.length && this.yearlyPlans.length > 0
        }, onlyHasYearlyPaidPlans: function () {
          return 0 == _.where(this.paidPlans, {interval: "monthly"}).length && _.where(this.paidPlans, {interval: "yearly"}).length > 0
        }, monthlyPlans: function () {
          return _.filter(this.plans, function (e) {
            return e.active && "monthly" == e.interval
          })
        }, yearlyPlans: function () {
          return _.filter(this.plans, function (e) {
            return e.active && "yearly" == e.interval
          })
        }
      }
    }
  }, PGhS: function (e, t, n) {
    "use strict";
    var r = n("se3Y"), i = n("IYKl");
    e.exports = r, r.denodeify = function (e, t) {
      return "number" == typeof t && t !== 1 / 0 ? function (e, t) {
        for (var n = [], i = 0; i < t; i++) n.push("a" + i);
        var s = ["return function (" + n.join(",") + ") {", "var self = this;", "return new Promise(function (rs, rj) {", "var res = fn.call(", ["self"].concat(n).concat([a]).join(","), ");", "if (res &&", '(typeof res === "object" || typeof res === "function") &&', 'typeof res.then === "function"', ") {rs(res);}", "});", "};"].join("");
        return Function(["Promise", "fn"], s)(r, e)
      }(e, t) : function (e) {
        for (var t = Math.max(e.length - 1, 3), n = [], i = 0; i < t; i++) n.push("a" + i);
        var s = ["return function (" + n.join(",") + ") {", "var self = this;", "var args;", "var argLength = arguments.length;", "if (arguments.length > " + t + ") {", "args = new Array(arguments.length + 1);", "for (var i = 0; i < arguments.length; i++) {", "args[i] = arguments[i];", "}", "}", "return new Promise(function (rs, rj) {", "var cb = " + a + ";", "var res;", "switch (argLength) {", n.concat(["extra"]).map(function (e, t) {
          return "case " + t + ":res = fn.call(" + ["self"].concat(n.slice(0, t)).concat("cb").join(",") + ");break;"
        }).join(""), "default:", "args[argLength] = cb;", "res = fn.apply(self, args);", "}", "if (res &&", '(typeof res === "object" || typeof res === "function") &&', 'typeof res.then === "function"', ") {rs(res);}", "});", "};"].join("");
        return Function(["Promise", "fn"], s)(r, e)
      }(e)
    };
    var a = "function (err, res) {if (err) { rj(err); } else { rs(res); }}";
    r.nodeify = function (e) {
      return function () {
        var t = Array.prototype.slice.call(arguments), n = "function" == typeof t[t.length - 1] ? t.pop() : null,
          a = this;
        try {
          return e.apply(this, arguments).nodeify(n, a)
        } catch (e) {
          if (null === n || void 0 === n) return new r(function (t, n) {
            n(e)
          });
          i(function () {
            n.call(a, e)
          })
        }
      }
    }, r.prototype.nodeify = function (e, t) {
      if ("function" != typeof e) return this;
      this.then(function (n) {
        i(function () {
          e.call(t, null, n)
        })
      }, function (n) {
        i(function () {
          e.call(t, n)
        })
      })
    }
  }, PJh5: function (e, t, n) {
    (function (e) {
      !function (t, n) {
        e.exports = n()
      }(0, function () {
        "use strict";

        function t() {
          return Xe.apply(null, arguments)
        }

        function r(e) {
          return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
        }

        function i(e) {
          return null != e && "[object Object]" === Object.prototype.toString.call(e)
        }

        function a(e) {
          return void 0 === e
        }

        function s(e) {
          return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
        }

        function o(e) {
          return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
        }

        function u(e, t) {
          var n, r = [];
          for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
          return r
        }

        function d(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }

        function l(e, t) {
          for (var n in t) d(t, n) && (e[n] = t[n]);
          return d(t, "toString") && (e.toString = t.toString), d(t, "valueOf") && (e.valueOf = t.valueOf), e
        }

        function c(e, t, n, r) {
          return ve(e, t, n, r, !0).utc()
        }

        function h(e) {
          return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
          }), e._pf
        }

        function f(e) {
          if (null == e._isValid) {
            var t = h(e), n = et.call(t.parsedDateParts, function (e) {
                return null != e
              }),
              r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict && (r = r && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return r;
            e._isValid = r
          }
          return e._isValid
        }

        function m(e) {
          var t = c(NaN);
          return null != e ? l(h(t), e) : h(t).userInvalidated = !0, t
        }

        function p(e, t) {
          var n, r, i;
          if (a(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), a(t._i) || (e._i = t._i), a(t._f) || (e._f = t._f), a(t._l) || (e._l = t._l), a(t._strict) || (e._strict = t._strict), a(t._tzm) || (e._tzm = t._tzm), a(t._isUTC) || (e._isUTC = t._isUTC), a(t._offset) || (e._offset = t._offset), a(t._pf) || (e._pf = h(t)), a(t._locale) || (e._locale = t._locale), tt.length > 0) for (n = 0; n < tt.length; n++) a(i = t[r = tt[n]]) || (e[r] = i);
          return e
        }

        function _(e) {
          p(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === nt && (nt = !0, t.updateOffset(this), nt = !1)
        }

        function y(e) {
          return e instanceof _ || null != e && null != e._isAMomentObject
        }

        function g(e) {
          return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
        }

        function v(e) {
          var t = +e, n = 0;
          return 0 !== t && isFinite(t) && (n = g(t)), n
        }

        function M(e, t, n) {
          var r, i = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), s = 0;
          for (r = 0; r < i; r++) (n && e[r] !== t[r] || !n && v(e[r]) !== v(t[r])) && s++;
          return s + a
        }

        function b(e) {
          !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
        }

        function L(e, n) {
          var r = !0;
          return l(function () {
            if (null != t.deprecationHandler && t.deprecationHandler(null, e), r) {
              for (var i, a = [], s = 0; s < arguments.length; s++) {
                if (i = "", "object" == typeof arguments[s]) {
                  i += "\n[" + s + "] ";
                  for (var o in arguments[0]) i += o + ": " + arguments[0][o] + ", ";
                  i = i.slice(0, -2)
                } else i = arguments[s];
                a.push(i)
              }
              b(e + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + (new Error).stack), r = !1
            }
            return n.apply(this, arguments)
          }, n)
        }

        function k(e, n) {
          null != t.deprecationHandler && t.deprecationHandler(e, n), rt[e] || (b(n), rt[e] = !0)
        }

        function w(e) {
          return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
        }

        function Y(e, t) {
          var n, r = l({}, e);
          for (n in t) d(t, n) && (i(e[n]) && i(t[n]) ? (r[n] = {}, l(r[n], e[n]), l(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
          for (n in e) d(e, n) && !d(t, n) && i(e[n]) && (r[n] = l({}, r[n]));
          return r
        }

        function T(e) {
          null != e && this.set(e)
        }

        function D(e, t) {
          var n = e.toLowerCase();
          at[n] = at[n + "s"] = at[t] = e
        }

        function x(e) {
          return "string" == typeof e ? at[e] || at[e.toLowerCase()] : void 0
        }

        function S(e) {
          var t, n, r = {};
          for (n in e) d(e, n) && (t = x(n)) && (r[t] = e[n]);
          return r
        }

        function j(e, t) {
          st[e] = t
        }

        function H(e, t, n) {
          var r = "" + Math.abs(e), i = t - r.length;
          return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
        }

        function P(e, t, n, r) {
          var i = r;
          "string" == typeof r && (i = function () {
            return this[r]()
          }), e && (lt[e] = i), t && (lt[t[0]] = function () {
            return H(i.apply(this, arguments), t[1], t[2])
          }), n && (lt[n] = function () {
            return this.localeData().ordinal(i.apply(this, arguments), e)
          })
        }

        function A(e) {
          return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function C(e, t) {
          return e.isValid() ? (t = O(t, e.localeData()), dt[t] = dt[t] || function (e) {
            var t, n, r = e.match(ot);
            for (t = 0, n = r.length; t < n; t++) lt[r[t]] ? r[t] = lt[r[t]] : r[t] = A(r[t]);
            return function (t) {
              var i, a = "";
              for (i = 0; i < n; i++) a += w(r[i]) ? r[i].call(t, e) : r[i];
              return a
            }
          }(t), dt[t](e)) : e.localeData().invalidDate()
        }

        function O(e, t) {
          function n(e) {
            return t.longDateFormat(e) || e
          }

          var r = 5;
          for (ut.lastIndex = 0; r >= 0 && ut.test(e);) e = e.replace(ut, n), ut.lastIndex = 0, r -= 1;
          return e
        }

        function E(e, t, n) {
          Dt[e] = w(t) ? t : function (e, r) {
            return e && n ? n : t
          }
        }

        function F(e, t) {
          return d(Dt, e) ? Dt[e](t._strict, t._locale) : new RegExp(function (e) {
            return $(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, r, i) {
              return t || n || r || i
            }))
          }(e))
        }

        function $(e) {
          return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function I(e, t) {
          var n, r = t;
          for ("string" == typeof e && (e = [e]), s(t) && (r = function (e, n) {
            n[t] = v(e)
          }), n = 0; n < e.length; n++) xt[e[n]] = r
        }

        function N(e, t) {
          I(e, function (e, n, r, i) {
            r._w = r._w || {}, t(e, r._w, r, i)
          })
        }

        function R(e, t, n) {
          null != t && d(xt, e) && xt[e](t, n._a, n, e)
        }

        function W(e) {
          return z(e) ? 366 : 365
        }

        function z(e) {
          return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        }

        function U(e, n) {
          return function (r) {
            return null != r ? (q(this, e, r), t.updateOffset(this, n), this) : J(this, e)
          }
        }

        function J(e, t) {
          return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
        }

        function q(e, t, n) {
          e.isValid() && !isNaN(n) && ("FullYear" === t && z(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), B(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
        }

        function B(e, t) {
          if (isNaN(e) || isNaN(t)) return NaN;
          var n = function (e, t) {
            return (e % t + t) % t
          }(t, 12);
          return e += (t - n) / 12, 1 === n ? z(e) ? 29 : 28 : 31 - n % 7 % 2
        }

        function V(e, t) {
          var n;
          if (!e.isValid()) return e;
          if ("string" == typeof t) if (/^\d+$/.test(t)) t = v(t); else if (t = e.localeData().monthsParse(t), !s(t)) return e;
          return n = Math.min(e.date(), B(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
        }

        function G(e) {
          return null != e ? (V(this, e), t.updateOffset(this, !0), this) : J(this, "Month")
        }

        function Q() {
          function e(e, t) {
            return t.length - e.length
          }

          var t, n, r = [], i = [], a = [];
          for (t = 0; t < 12; t++) n = c([2e3, t]), r.push(this.monthsShort(n, "")), i.push(this.months(n, "")), a.push(this.months(n, "")), a.push(this.monthsShort(n, ""));
          for (r.sort(e), i.sort(e), a.sort(e), t = 0; t < 12; t++) r[t] = $(r[t]), i[t] = $(i[t]);
          for (t = 0; t < 24; t++) a[t] = $(a[t]);
          this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
        }

        function K(e) {
          var t = new Date(Date.UTC.apply(null, arguments));
          return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
        }

        function Z(e, t, n) {
          var r = 7 + t - n;
          return -((7 + K(e, 0, r).getUTCDay() - t) % 7) + r - 1
        }

        function X(e, t, n, r, i) {
          var a, s, o = 1 + 7 * (t - 1) + (7 + n - r) % 7 + Z(e, r, i);
          return o <= 0 ? s = W(a = e - 1) + o : o > W(e) ? (a = e + 1, s = o - W(e)) : (a = e, s = o), {
            year: a,
            dayOfYear: s
          }
        }

        function ee(e, t, n) {
          var r, i, a = Z(e.year(), t, n), s = Math.floor((e.dayOfYear() - a - 1) / 7) + 1;
          return s < 1 ? r = s + te(i = e.year() - 1, t, n) : s > te(e.year(), t, n) ? (r = s - te(e.year(), t, n), i = e.year() + 1) : (i = e.year(), r = s), {
            week: r,
            year: i
          }
        }

        function te(e, t, n) {
          var r = Z(e, t, n), i = Z(e + 1, t, n);
          return (W(e) - r + i) / 7
        }

        function ne() {
          function e(e, t) {
            return t.length - e.length
          }

          var t, n, r, i, a, s = [], o = [], u = [], d = [];
          for (t = 0; t < 7; t++) n = c([2e3, 1]).day(t), r = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), a = this.weekdays(n, ""), s.push(r), o.push(i), u.push(a), d.push(r), d.push(i), d.push(a);
          for (s.sort(e), o.sort(e), u.sort(e), d.sort(e), t = 0; t < 7; t++) o[t] = $(o[t]), u[t] = $(u[t]), d[t] = $(d[t]);
          this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
        }

        function re() {
          return this.hours() % 12 || 12
        }

        function ie(e, t) {
          P(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
          })
        }

        function ae(e, t) {
          return t._meridiemParse
        }

        function se(e) {
          return e ? e.toLowerCase().replace("_", "-") : e
        }

        function oe(t) {
          var r = null;
          if (!en[t] && void 0 !== e && e && e.exports) try {
            r = Kt._abbr;
            n("uslO")("./" + t), ue(r)
          } catch (e) {
          }
          return en[t]
        }

        function ue(e, t) {
          var n;
          return e && (n = a(t) ? le(e) : de(e, t)) && (Kt = n), Kt._abbr
        }

        function de(e, t) {
          if (null !== t) {
            var n = Xt;
            if (t.abbr = e, null != en[e]) k("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = en[e]._config; else if (null != t.parentLocale) {
              if (null == en[t.parentLocale]) return tn[t.parentLocale] || (tn[t.parentLocale] = []), tn[t.parentLocale].push({
                name: e,
                config: t
              }), null;
              n = en[t.parentLocale]._config
            }
            return en[e] = new T(Y(n, t)), tn[e] && tn[e].forEach(function (e) {
              de(e.name, e.config)
            }), ue(e), en[e]
          }
          return delete en[e], null
        }

        function le(e) {
          var t;
          if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Kt;
          if (!r(e)) {
            if (t = oe(e)) return t;
            e = [e]
          }
          return function (e) {
            for (var t, n, r, i, a = 0; a < e.length;) {
              for (t = (i = se(e[a]).split("-")).length, n = (n = se(e[a + 1])) ? n.split("-") : null; t > 0;) {
                if (r = oe(i.slice(0, t).join("-"))) return r;
                if (n && n.length >= t && M(i, n, !0) >= t - 1) break;
                t--
              }
              a++
            }
            return null
          }(e)
        }

        function ce(e) {
          var t, n = e._a;
          return n && -2 === h(e).overflow && (t = n[jt] < 0 || n[jt] > 11 ? jt : n[Ht] < 1 || n[Ht] > B(n[St], n[jt]) ? Ht : n[Pt] < 0 || n[Pt] > 24 || 24 === n[Pt] && (0 !== n[At] || 0 !== n[Ct] || 0 !== n[Ot]) ? Pt : n[At] < 0 || n[At] > 59 ? At : n[Ct] < 0 || n[Ct] > 59 ? Ct : n[Ot] < 0 || n[Ot] > 999 ? Ot : -1, h(e)._overflowDayOfYear && (t < St || t > Ht) && (t = Ht), h(e)._overflowWeeks && -1 === t && (t = Et), h(e)._overflowWeekday && -1 === t && (t = Ft), h(e).overflow = t), e
        }

        function he(e, t, n) {
          return null != e ? e : null != t ? t : n
        }

        function fe(e) {
          var n, r, i, a, s, o = [];
          if (!e._d) {
            for (i = function (e) {
              var n = new Date(t.now());
              return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
            }(e), e._w && null == e._a[Ht] && null == e._a[jt] && function (e) {
              var t, n, r, i, a, s, o, u;
              if (null != (t = e._w).GG || null != t.W || null != t.E) a = 1, s = 4, n = he(t.GG, e._a[St], ee(Me(), 1, 4).year), r = he(t.W, 1), ((i = he(t.E, 1)) < 1 || i > 7) && (u = !0); else {
                a = e._locale._week.dow, s = e._locale._week.doy;
                var d = ee(Me(), a, s);
                n = he(t.gg, e._a[St], d.year), r = he(t.w, d.week), null != t.d ? ((i = t.d) < 0 || i > 6) && (u = !0) : null != t.e ? (i = t.e + a, (t.e < 0 || t.e > 6) && (u = !0)) : i = a
              }
              r < 1 || r > te(n, a, s) ? h(e)._overflowWeeks = !0 : null != u ? h(e)._overflowWeekday = !0 : (o = X(n, r, i, a, s), e._a[St] = o.year, e._dayOfYear = o.dayOfYear)
            }(e), null != e._dayOfYear && (s = he(e._a[St], i[St]), (e._dayOfYear > W(s) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), r = K(s, 0, e._dayOfYear), e._a[jt] = r.getUTCMonth(), e._a[Ht] = r.getUTCDate()), n = 0; n < 3 && null == e._a[n]; ++n) e._a[n] = o[n] = i[n];
            for (; n < 7; n++) e._a[n] = o[n] = null == e._a[n] ? 2 === n ? 1 : 0 : e._a[n];
            24 === e._a[Pt] && 0 === e._a[At] && 0 === e._a[Ct] && 0 === e._a[Ot] && (e._nextDay = !0, e._a[Pt] = 0), e._d = (e._useUTC ? K : function (e, t, n, r, i, a, s) {
              var o = new Date(e, t, n, r, i, a, s);
              return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
            }).apply(null, o), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Pt] = 24), e._w && void 0 !== e._w.d && e._w.d !== a && (h(e).weekdayMismatch = !0)
          }
        }

        function me(e) {
          var t, n, r, i, a, s, o = e._i, u = nn.exec(o) || rn.exec(o);
          if (u) {
            for (h(e).iso = !0, t = 0, n = sn.length; t < n; t++) if (sn[t][1].exec(u[1])) {
              i = sn[t][0], r = !1 !== sn[t][2];
              break
            }
            if (null == i) return void(e._isValid = !1);
            if (u[3]) {
              for (t = 0, n = on.length; t < n; t++) if (on[t][1].exec(u[3])) {
                a = (u[2] || " ") + on[t][0];
                break
              }
              if (null == a) return void(e._isValid = !1)
            }
            if (!r && null != a) return void(e._isValid = !1);
            if (u[4]) {
              if (!an.exec(u[4])) return void(e._isValid = !1);
              s = "Z"
            }
            e._f = i + (a || "") + (s || ""), ye(e)
          } else e._isValid = !1
        }

        function pe(e, t, n, r, i, a) {
          var s = [function (e) {
            var t = parseInt(e, 10);
            if (t <= 49) return 2e3 + t;
            if (t <= 999) return 1900 + t;
            return t
          }(e), Wt.indexOf(t), parseInt(n, 10), parseInt(r, 10), parseInt(i, 10)];
          return a && s.push(parseInt(a, 10)), s
        }

        function _e(e) {
          var t = dn.exec(function (e) {
            return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
          }(e._i));
          if (t) {
            var n = pe(t[4], t[3], t[2], t[5], t[6], t[7]);
            if (!function (e, t, n) {
              if (e && qt.indexOf(e) !== new Date(t[0], t[1], t[2]).getDay()) return h(n).weekdayMismatch = !0, n._isValid = !1, !1;
              return !0
            }(t[1], n, e)) return;
            e._a = n, e._tzm = function (e, t, n) {
              if (e) return ln[e];
              if (t) return 0;
              var r = parseInt(n, 10), i = r % 100;
              return (r - i) / 100 * 60 + i
            }(t[8], t[9], t[10]), e._d = K.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), h(e).rfc2822 = !0
          } else e._isValid = !1
        }

        function ye(e) {
          if (e._f !== t.ISO_8601) if (e._f !== t.RFC_2822) {
            e._a = [], h(e).empty = !0;
            var n, r, i, a, s, o = "" + e._i, u = o.length, d = 0;
            for (i = O(e._f, e._locale).match(ot) || [], n = 0; n < i.length; n++) a = i[n], (r = (o.match(F(a, e)) || [])[0]) && ((s = o.substr(0, o.indexOf(r))).length > 0 && h(e).unusedInput.push(s), o = o.slice(o.indexOf(r) + r.length), d += r.length), lt[a] ? (r ? h(e).empty = !1 : h(e).unusedTokens.push(a), R(a, r, e)) : e._strict && !r && h(e).unusedTokens.push(a);
            h(e).charsLeftOver = u - d, o.length > 0 && h(e).unusedInput.push(o), e._a[Pt] <= 12 && !0 === h(e).bigHour && e._a[Pt] > 0 && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[Pt] = function (e, t, n) {
              var r;
              if (null == n) return t;
              return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((r = e.isPM(n)) && t < 12 && (t += 12), r || 12 !== t || (t = 0), t) : t
            }(e._locale, e._a[Pt], e._meridiem), fe(e), ce(e)
          } else _e(e); else me(e)
        }

        function ge(e) {
          var n = e._i, d = e._f;
          return e._locale = e._locale || le(e._l), null === n || void 0 === d && "" === n ? m({nullInput: !0}) : ("string" == typeof n && (e._i = n = e._locale.preparse(n)), y(n) ? new _(ce(n)) : (o(n) ? e._d = n : r(d) ? function (e) {
            var t, n, r, i, a;
            if (0 === e._f.length) return h(e).invalidFormat = !0, void(e._d = new Date(NaN));
            for (i = 0; i < e._f.length; i++) a = 0, t = p({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], ye(t), f(t) && (a += h(t).charsLeftOver, a += 10 * h(t).unusedTokens.length, h(t).score = a, (null == r || a < r) && (r = a, n = t));
            l(e, n || t)
          }(e) : d ? ye(e) : function (e) {
            var n = e._i;
            a(n) ? e._d = new Date(t.now()) : o(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? function (e) {
              var n = un.exec(e._i);
              null === n ? (me(e), !1 === e._isValid && (delete e._isValid, _e(e), !1 === e._isValid && (delete e._isValid, t.createFromInputFallback(e)))) : e._d = new Date(+n[1])
            }(e) : r(n) ? (e._a = u(n.slice(0), function (e) {
              return parseInt(e, 10)
            }), fe(e)) : i(n) ? function (e) {
              if (!e._d) {
                var t = S(e._i);
                e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
                  return e && parseInt(e, 10)
                }), fe(e)
              }
            }(e) : s(n) ? e._d = new Date(n) : t.createFromInputFallback(e)
          }(e), f(e) || (e._d = null), e))
        }

        function ve(e, t, n, a, s) {
          var o = {};
          return !0 !== n && !1 !== n || (a = n, n = void 0), (i(e) && function (e) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e) if (e.hasOwnProperty(t)) return !1;
            return !0
          }(e) || r(e) && 0 === e.length) && (e = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = s, o._l = n, o._i = e, o._f = t, o._strict = a, function (e) {
            var t = new _(ce(ge(e)));
            return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
          }(o)
        }

        function Me(e, t, n, r) {
          return ve(e, t, n, r, !1)
        }

        function be(e, t) {
          var n, i;
          if (1 === t.length && r(t[0]) && (t = t[0]), !t.length) return Me();
          for (n = t[0], i = 1; i < t.length; ++i) t[i].isValid() && !t[i][e](n) || (n = t[i]);
          return n
        }

        function Le(e) {
          var t = S(e), n = t.year || 0, r = t.quarter || 0, i = t.month || 0, a = t.week || 0, s = t.day || 0,
            o = t.hour || 0, u = t.minute || 0, d = t.second || 0, l = t.millisecond || 0;
          this._isValid = function (e) {
            for (var t in e) if (-1 === $t.call(fn, t) || null != e[t] && isNaN(e[t])) return !1;
            for (var n = !1, r = 0; r < fn.length; ++r) if (e[fn[r]]) {
              if (n) return !1;
              parseFloat(e[fn[r]]) !== v(e[fn[r]]) && (n = !0)
            }
            return !0
          }(t), this._milliseconds = +l + 1e3 * d + 6e4 * u + 1e3 * o * 60 * 60, this._days = +s + 7 * a, this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = le(), this._bubble()
        }

        function ke(e) {
          return e instanceof Le
        }

        function we(e) {
          return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
        }

        function Ye(e, t) {
          P(e, 0, 0, function () {
            var e = this.utcOffset(), n = "+";
            return e < 0 && (e = -e, n = "-"), n + H(~~(e / 60), 2) + t + H(~~e % 60, 2)
          })
        }

        function Te(e, t) {
          var n = (t || "").match(e);
          if (null === n) return null;
          var r = ((n[n.length - 1] || []) + "").match(mn) || ["-", 0, 0], i = 60 * r[1] + v(r[2]);
          return 0 === i ? 0 : "+" === r[0] ? i : -i
        }

        function De(e, n) {
          var r, i;
          return n._isUTC ? (r = n.clone(), i = (y(e) || o(e) ? e.valueOf() : Me(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + i), t.updateOffset(r, !1), r) : Me(e).local()
        }

        function xe(e) {
          return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
        }

        function Se() {
          return !!this.isValid() && (this._isUTC && 0 === this._offset)
        }

        function je(e, t) {
          var n, r, i, a = e, o = null;
          return ke(e) ? a = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
          } : s(e) ? (a = {}, t ? a[t] = e : a.milliseconds = e) : (o = pn.exec(e)) ? (n = "-" === o[1] ? -1 : 1, a = {
            y: 0,
            d: v(o[Ht]) * n,
            h: v(o[Pt]) * n,
            m: v(o[At]) * n,
            s: v(o[Ct]) * n,
            ms: v(we(1e3 * o[Ot])) * n
          }) : (o = _n.exec(e)) ? (n = "-" === o[1] ? -1 : (o[1], 1), a = {
            y: He(o[2], n),
            M: He(o[3], n),
            w: He(o[4], n),
            d: He(o[5], n),
            h: He(o[6], n),
            m: He(o[7], n),
            s: He(o[8], n)
          }) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (i = function (e, t) {
            var n;
            if (!e.isValid() || !t.isValid()) return {milliseconds: 0, months: 0};
            t = De(t, e), e.isBefore(t) ? n = Pe(e, t) : ((n = Pe(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
            return n
          }(Me(a.from), Me(a.to)), (a = {}).ms = i.milliseconds, a.M = i.months), r = new Le(a), ke(e) && d(e, "_locale") && (r._locale = e._locale), r
        }

        function He(e, t) {
          var n = e && parseFloat(e.replace(",", "."));
          return (isNaN(n) ? 0 : n) * t
        }

        function Pe(e, t) {
          var n = {milliseconds: 0, months: 0};
          return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
        }

        function Ae(e, t) {
          return function (n, r) {
            var i, a;
            return null === r || isNaN(+r) || (k(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = n, n = r, r = a), n = "string" == typeof n ? +n : n, i = je(n, r), Ce(this, i, e), this
          }
        }

        function Ce(e, n, r, i) {
          var a = n._milliseconds, s = we(n._days), o = we(n._months);
          e.isValid() && (i = null == i || i, o && V(e, J(e, "Month") + o * r), s && q(e, "Date", J(e, "Date") + s * r), a && e._d.setTime(e._d.valueOf() + a * r), i && t.updateOffset(e, s || o))
        }

        function Oe(e, t) {
          var n, r = 12 * (t.year() - e.year()) + (t.month() - e.month()), i = e.clone().add(r, "months");
          return n = t - i < 0 ? (t - i) / (i - e.clone().add(r - 1, "months")) : (t - i) / (e.clone().add(r + 1, "months") - i), -(r + n) || 0
        }

        function Ee(e) {
          var t;
          return void 0 === e ? this._locale._abbr : (null != (t = le(e)) && (this._locale = t), this)
        }

        function Fe() {
          return this._locale
        }

        function $e(e, t) {
          P(0, [e, e.length], 0, t)
        }

        function Ie(e, t, n, r, i) {
          var a;
          return null == e ? ee(this, r, i).year : (a = te(e, r, i), t > a && (t = a), function (e, t, n, r, i) {
            var a = X(e, t, n, r, i), s = K(a.year, 0, a.dayOfYear);
            return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
          }.call(this, e, t, n, r, i))
        }

        function Ne(e, t) {
          t[Ot] = v(1e3 * ("0." + e))
        }

        function Re(e) {
          return e
        }

        function We(e, t, n, r) {
          var i = le(), a = c().set(r, t);
          return i[n](a, e)
        }

        function ze(e, t, n) {
          if (s(e) && (t = e, e = void 0), e = e || "", null != t) return We(e, t, n, "month");
          var r, i = [];
          for (r = 0; r < 12; r++) i[r] = We(e, r, n, "month");
          return i
        }

        function Ue(e, t, n, r) {
          "boolean" == typeof e ? (s(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, s(t) && (n = t, t = void 0), t = t || "");
          var i = le(), a = e ? i._week.dow : 0;
          if (null != n) return We(t, (n + a) % 7, r, "day");
          var o, u = [];
          for (o = 0; o < 7; o++) u[o] = We(t, (o + a) % 7, r, "day");
          return u
        }

        function Je(e, t, n, r) {
          var i = je(t, n);
          return e._milliseconds += r * i._milliseconds, e._days += r * i._days, e._months += r * i._months, e._bubble()
        }

        function qe(e) {
          return e < 0 ? Math.floor(e) : Math.ceil(e)
        }

        function Be(e) {
          return 4800 * e / 146097
        }

        function Ve(e) {
          return 146097 * e / 4800
        }

        function Ge(e) {
          return function () {
            return this.as(e)
          }
        }

        function Qe(e) {
          return function () {
            return this.isValid() ? this._data[e] : NaN
          }
        }

        function Ke(e) {
          return (e > 0) - (e < 0) || +e
        }

        function Ze() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var e, t, n = Jn(this._milliseconds) / 1e3, r = Jn(this._days), i = Jn(this._months);
          t = g((e = g(n / 60)) / 60), n %= 60, e %= 60;
          var a = g(i / 12), s = i %= 12, o = r, u = t, d = e, l = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
            c = this.asSeconds();
          if (!c) return "P0D";
          var h = c < 0 ? "-" : "", f = Ke(this._months) !== Ke(c) ? "-" : "", m = Ke(this._days) !== Ke(c) ? "-" : "",
            p = Ke(this._milliseconds) !== Ke(c) ? "-" : "";
          return h + "P" + (a ? f + a + "Y" : "") + (s ? f + s + "M" : "") + (o ? m + o + "D" : "") + (u || d || l ? "T" : "") + (u ? p + u + "H" : "") + (d ? p + d + "M" : "") + (l ? p + l + "S" : "")
        }

        var Xe, et;
        et = Array.prototype.some ? Array.prototype.some : function (e) {
          for (var t = Object(this), n = t.length >>> 0, r = 0; r < n; r++) if (r in t && e.call(this, t[r], r, t)) return !0;
          return !1
        };
        var tt = t.momentProperties = [], nt = !1, rt = {};
        t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
        var it;
        it = Object.keys ? Object.keys : function (e) {
          var t, n = [];
          for (t in e) d(e, t) && n.push(t);
          return n
        };
        var at = {}, st = {},
          ot = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          ut = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, dt = {}, lt = {}, ct = /\d/, ht = /\d\d/, ft = /\d{3}/,
          mt = /\d{4}/, pt = /[+-]?\d{6}/, _t = /\d\d?/, yt = /\d\d\d\d?/, gt = /\d\d\d\d\d\d?/, vt = /\d{1,3}/,
          Mt = /\d{1,4}/, bt = /[+-]?\d{1,6}/, Lt = /\d+/, kt = /[+-]?\d+/, wt = /Z|[+-]\d\d:?\d\d/gi,
          Yt = /Z|[+-]\d\d(?::?\d\d)?/gi,
          Tt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
          Dt = {}, xt = {}, St = 0, jt = 1, Ht = 2, Pt = 3, At = 4, Ct = 5, Ot = 6, Et = 7, Ft = 8;
        P("Y", 0, 0, function () {
          var e = this.year();
          return e <= 9999 ? "" + e : "+" + e
        }), P(0, ["YY", 2], 0, function () {
          return this.year() % 100
        }), P(0, ["YYYY", 4], 0, "year"), P(0, ["YYYYY", 5], 0, "year"), P(0, ["YYYYYY", 6, !0], 0, "year"), D("year", "y"), j("year", 1), E("Y", kt), E("YY", _t, ht), E("YYYY", Mt, mt), E("YYYYY", bt, pt), E("YYYYYY", bt, pt), I(["YYYYY", "YYYYYY"], St), I("YYYY", function (e, n) {
          n[St] = 2 === e.length ? t.parseTwoDigitYear(e) : v(e)
        }), I("YY", function (e, n) {
          n[St] = t.parseTwoDigitYear(e)
        }), I("Y", function (e, t) {
          t[St] = parseInt(e, 10)
        }), t.parseTwoDigitYear = function (e) {
          return v(e) + (v(e) > 68 ? 1900 : 2e3)
        };
        var $t, It = U("FullYear", !0);
        $t = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
          var t;
          for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
          return -1
        }, P("M", ["MM", 2], "Mo", function () {
          return this.month() + 1
        }), P("MMM", 0, 0, function (e) {
          return this.localeData().monthsShort(this, e)
        }), P("MMMM", 0, 0, function (e) {
          return this.localeData().months(this, e)
        }), D("month", "M"), j("month", 8), E("M", _t), E("MM", _t, ht), E("MMM", function (e, t) {
          return t.monthsShortRegex(e)
        }), E("MMMM", function (e, t) {
          return t.monthsRegex(e)
        }), I(["M", "MM"], function (e, t) {
          t[jt] = v(e) - 1
        }), I(["MMM", "MMMM"], function (e, t, n, r) {
          var i = n._locale.monthsParse(e, r, n._strict);
          null != i ? t[jt] = i : h(n).invalidMonth = e
        });
        var Nt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          Rt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          Wt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), zt = Tt, Ut = Tt;
        P("w", ["ww", 2], "wo", "week"), P("W", ["WW", 2], "Wo", "isoWeek"), D("week", "w"), D("isoWeek", "W"), j("week", 5), j("isoWeek", 5), E("w", _t), E("ww", _t, ht), E("W", _t), E("WW", _t, ht), N(["w", "ww", "W", "WW"], function (e, t, n, r) {
          t[r.substr(0, 1)] = v(e)
        });
        P("d", 0, "do", "day"), P("dd", 0, 0, function (e) {
          return this.localeData().weekdaysMin(this, e)
        }), P("ddd", 0, 0, function (e) {
          return this.localeData().weekdaysShort(this, e)
        }), P("dddd", 0, 0, function (e) {
          return this.localeData().weekdays(this, e)
        }), P("e", 0, 0, "weekday"), P("E", 0, 0, "isoWeekday"), D("day", "d"), D("weekday", "e"), D("isoWeekday", "E"), j("day", 11), j("weekday", 11), j("isoWeekday", 11), E("d", _t), E("e", _t), E("E", _t), E("dd", function (e, t) {
          return t.weekdaysMinRegex(e)
        }), E("ddd", function (e, t) {
          return t.weekdaysShortRegex(e)
        }), E("dddd", function (e, t) {
          return t.weekdaysRegex(e)
        }), N(["dd", "ddd", "dddd"], function (e, t, n, r) {
          var i = n._locale.weekdaysParse(e, r, n._strict);
          null != i ? t.d = i : h(n).invalidWeekday = e
        }), N(["d", "e", "E"], function (e, t, n, r) {
          t[r] = v(e)
        });
        var Jt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          qt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Bt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Vt = Tt, Gt = Tt,
          Qt = Tt;
        P("H", ["HH", 2], 0, "hour"), P("h", ["hh", 2], 0, re), P("k", ["kk", 2], 0, function () {
          return this.hours() || 24
        }), P("hmm", 0, 0, function () {
          return "" + re.apply(this) + H(this.minutes(), 2)
        }), P("hmmss", 0, 0, function () {
          return "" + re.apply(this) + H(this.minutes(), 2) + H(this.seconds(), 2)
        }), P("Hmm", 0, 0, function () {
          return "" + this.hours() + H(this.minutes(), 2)
        }), P("Hmmss", 0, 0, function () {
          return "" + this.hours() + H(this.minutes(), 2) + H(this.seconds(), 2)
        }), ie("a", !0), ie("A", !1), D("hour", "h"), j("hour", 13), E("a", ae), E("A", ae), E("H", _t), E("h", _t), E("k", _t), E("HH", _t, ht), E("hh", _t, ht), E("kk", _t, ht), E("hmm", yt), E("hmmss", gt), E("Hmm", yt), E("Hmmss", gt), I(["H", "HH"], Pt), I(["k", "kk"], function (e, t, n) {
          var r = v(e);
          t[Pt] = 24 === r ? 0 : r
        }), I(["a", "A"], function (e, t, n) {
          n._isPm = n._locale.isPM(e), n._meridiem = e
        }), I(["h", "hh"], function (e, t, n) {
          t[Pt] = v(e), h(n).bigHour = !0
        }), I("hmm", function (e, t, n) {
          var r = e.length - 2;
          t[Pt] = v(e.substr(0, r)), t[At] = v(e.substr(r)), h(n).bigHour = !0
        }), I("hmmss", function (e, t, n) {
          var r = e.length - 4, i = e.length - 2;
          t[Pt] = v(e.substr(0, r)), t[At] = v(e.substr(r, 2)), t[Ct] = v(e.substr(i)), h(n).bigHour = !0
        }), I("Hmm", function (e, t, n) {
          var r = e.length - 2;
          t[Pt] = v(e.substr(0, r)), t[At] = v(e.substr(r))
        }), I("Hmmss", function (e, t, n) {
          var r = e.length - 4, i = e.length - 2;
          t[Pt] = v(e.substr(0, r)), t[At] = v(e.substr(r, 2)), t[Ct] = v(e.substr(i))
        });
        var Kt, Zt = U("Hours", !0), Xt = {
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L"
            },
            longDateFormat: {
              LTS: "h:mm:ss A",
              LT: "h:mm A",
              L: "MM/DD/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years"
            },
            months: Rt,
            monthsShort: Wt,
            week: {dow: 0, doy: 6},
            weekdays: Jt,
            weekdaysMin: Bt,
            weekdaysShort: qt,
            meridiemParse: /[ap]\.?m?\.?/i
          }, en = {}, tn = {},
          nn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          rn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          an = /Z|[+-]\d\d(?::?\d\d)?/,
          sn = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
          on = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
          un = /^\/?Date\((\-?\d+)/i,
          dn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
          ln = {UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480};
        t.createFromInputFallback = L("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
          e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
        }), t.ISO_8601 = function () {
        }, t.RFC_2822 = function () {
        };
        var cn = L("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var e = Me.apply(null, arguments);
            return this.isValid() && e.isValid() ? e < this ? this : e : m()
          }),
          hn = L("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var e = Me.apply(null, arguments);
            return this.isValid() && e.isValid() ? e > this ? this : e : m()
          }), fn = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
        Ye("Z", ":"), Ye("ZZ", ""), E("Z", Yt), E("ZZ", Yt), I(["Z", "ZZ"], function (e, t, n) {
          n._useUTC = !0, n._tzm = Te(Yt, e)
        });
        var mn = /([\+\-]|\d\d)/gi;
        t.updateOffset = function () {
        };
        var pn = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
          _n = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        je.fn = Le.prototype, je.invalid = function () {
          return je(NaN)
        };
        var yn = Ae(1, "add"), gn = Ae(-1, "subtract");
        t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var vn = L("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
          return void 0 === e ? this.localeData() : this.locale(e)
        });
        P(0, ["gg", 2], 0, function () {
          return this.weekYear() % 100
        }), P(0, ["GG", 2], 0, function () {
          return this.isoWeekYear() % 100
        }), $e("gggg", "weekYear"), $e("ggggg", "weekYear"), $e("GGGG", "isoWeekYear"), $e("GGGGG", "isoWeekYear"), D("weekYear", "gg"), D("isoWeekYear", "GG"), j("weekYear", 1), j("isoWeekYear", 1), E("G", kt), E("g", kt), E("GG", _t, ht), E("gg", _t, ht), E("GGGG", Mt, mt), E("gggg", Mt, mt), E("GGGGG", bt, pt), E("ggggg", bt, pt), N(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
          t[r.substr(0, 2)] = v(e)
        }), N(["gg", "GG"], function (e, n, r, i) {
          n[i] = t.parseTwoDigitYear(e)
        }), P("Q", 0, "Qo", "quarter"), D("quarter", "Q"), j("quarter", 7), E("Q", ct), I("Q", function (e, t) {
          t[jt] = 3 * (v(e) - 1)
        }), P("D", ["DD", 2], "Do", "date"), D("date", "D"), j("date", 9), E("D", _t), E("DD", _t, ht), E("Do", function (e, t) {
          return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
        }), I(["D", "DD"], Ht), I("Do", function (e, t) {
          t[Ht] = v(e.match(_t)[0])
        });
        var Mn = U("Date", !0);
        P("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), D("dayOfYear", "DDD"), j("dayOfYear", 4), E("DDD", vt), E("DDDD", ft), I(["DDD", "DDDD"], function (e, t, n) {
          n._dayOfYear = v(e)
        }), P("m", ["mm", 2], 0, "minute"), D("minute", "m"), j("minute", 14), E("m", _t), E("mm", _t, ht), I(["m", "mm"], At);
        var bn = U("Minutes", !1);
        P("s", ["ss", 2], 0, "second"), D("second", "s"), j("second", 15), E("s", _t), E("ss", _t, ht), I(["s", "ss"], Ct);
        var Ln = U("Seconds", !1);
        P("S", 0, 0, function () {
          return ~~(this.millisecond() / 100)
        }), P(0, ["SS", 2], 0, function () {
          return ~~(this.millisecond() / 10)
        }), P(0, ["SSS", 3], 0, "millisecond"), P(0, ["SSSS", 4], 0, function () {
          return 10 * this.millisecond()
        }), P(0, ["SSSSS", 5], 0, function () {
          return 100 * this.millisecond()
        }), P(0, ["SSSSSS", 6], 0, function () {
          return 1e3 * this.millisecond()
        }), P(0, ["SSSSSSS", 7], 0, function () {
          return 1e4 * this.millisecond()
        }), P(0, ["SSSSSSSS", 8], 0, function () {
          return 1e5 * this.millisecond()
        }), P(0, ["SSSSSSSSS", 9], 0, function () {
          return 1e6 * this.millisecond()
        }), D("millisecond", "ms"), j("millisecond", 16), E("S", vt, ct), E("SS", vt, ht), E("SSS", vt, ft);
        var kn;
        for (kn = "SSSS"; kn.length <= 9; kn += "S") E(kn, Lt);
        for (kn = "S"; kn.length <= 9; kn += "S") I(kn, Ne);
        var wn = U("Milliseconds", !1);
        P("z", 0, 0, "zoneAbbr"), P("zz", 0, 0, "zoneName");
        var Yn = _.prototype;
        Yn.add = yn, Yn.calendar = function (e, n) {
          var r = e || Me(), i = De(r, this).startOf("day"), a = t.calendarFormat(this, i) || "sameElse",
            s = n && (w(n[a]) ? n[a].call(this, r) : n[a]);
          return this.format(s || this.localeData().calendar(a, this, Me(r)))
        }, Yn.clone = function () {
          return new _(this)
        }, Yn.diff = function (e, t, n) {
          var r, i, a;
          if (!this.isValid()) return NaN;
          if (!(r = De(e, this)).isValid()) return NaN;
          switch (i = 6e4 * (r.utcOffset() - this.utcOffset()), t = x(t)) {
            case"year":
              a = Oe(this, r) / 12;
              break;
            case"month":
              a = Oe(this, r);
              break;
            case"quarter":
              a = Oe(this, r) / 3;
              break;
            case"second":
              a = (this - r) / 1e3;
              break;
            case"minute":
              a = (this - r) / 6e4;
              break;
            case"hour":
              a = (this - r) / 36e5;
              break;
            case"day":
              a = (this - r - i) / 864e5;
              break;
            case"week":
              a = (this - r - i) / 6048e5;
              break;
            default:
              a = this - r
          }
          return n ? a : g(a)
        }, Yn.endOf = function (e) {
          return void 0 === (e = x(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
        }, Yn.format = function (e) {
          e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
          var n = C(this, e);
          return this.localeData().postformat(n)
        }, Yn.from = function (e, t) {
          return this.isValid() && (y(e) && e.isValid() || Me(e).isValid()) ? je({
            to: this,
            from: e
          }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }, Yn.fromNow = function (e) {
          return this.from(Me(), e)
        }, Yn.to = function (e, t) {
          return this.isValid() && (y(e) && e.isValid() || Me(e).isValid()) ? je({
            from: this,
            to: e
          }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }, Yn.toNow = function (e) {
          return this.to(Me(), e)
        }, Yn.get = function (e) {
          return e = x(e), w(this[e]) ? this[e]() : this
        }, Yn.invalidAt = function () {
          return h(this).overflow
        }, Yn.isAfter = function (e, t) {
          var n = y(e) ? e : Me(e);
          return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = x(a(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
        }, Yn.isBefore = function (e, t) {
          var n = y(e) ? e : Me(e);
          return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = x(a(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
        }, Yn.isBetween = function (e, t, n, r) {
          return ("(" === (r = r || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === r[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
        }, Yn.isSame = function (e, t) {
          var n, r = y(e) ? e : Me(e);
          return !(!this.isValid() || !r.isValid()) && ("millisecond" === (t = x(t || "millisecond")) ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
        }, Yn.isSameOrAfter = function (e, t) {
          return this.isSame(e, t) || this.isAfter(e, t)
        }, Yn.isSameOrBefore = function (e, t) {
          return this.isSame(e, t) || this.isBefore(e, t)
        }, Yn.isValid = function () {
          return f(this)
        }, Yn.lang = vn, Yn.locale = Ee, Yn.localeData = Fe, Yn.max = hn, Yn.min = cn, Yn.parsingFlags = function () {
          return l({}, h(this))
        }, Yn.set = function (e, t) {
          if ("object" == typeof e) for (var n = function (e) {
            var t = [];
            for (var n in e) t.push({unit: n, priority: st[n]});
            return t.sort(function (e, t) {
              return e.priority - t.priority
            }), t
          }(e = S(e)), r = 0; r < n.length; r++) this[n[r].unit](e[n[r].unit]); else if (e = x(e), w(this[e])) return this[e](t);
          return this
        }, Yn.startOf = function (e) {
          switch (e = x(e)) {
            case"year":
              this.month(0);
            case"quarter":
            case"month":
              this.date(1);
            case"week":
            case"isoWeek":
            case"day":
            case"date":
              this.hours(0);
            case"hour":
              this.minutes(0);
            case"minute":
              this.seconds(0);
            case"second":
              this.milliseconds(0)
          }
          return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
        }, Yn.subtract = gn, Yn.toArray = function () {
          return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
        }, Yn.toObject = function () {
          return {
            years: this.year(),
            months: this.month(),
            date: this.date(),
            hours: this.hours(),
            minutes: this.minutes(),
            seconds: this.seconds(),
            milliseconds: this.milliseconds()
          }
        }, Yn.toDate = function () {
          return new Date(this.valueOf())
        }, Yn.toISOString = function (e) {
          if (!this.isValid()) return null;
          var t = !0 !== e, n = t ? this.clone().utc() : this;
          return n.year() < 0 || n.year() > 9999 ? C(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : w(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this._d.valueOf()).toISOString().replace("Z", C(n, "Z")) : C(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
        }, Yn.inspect = function () {
          if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
          var e = "moment", t = "";
          this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
          var n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = t + '[")]';
          return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + i)
        }, Yn.toJSON = function () {
          return this.isValid() ? this.toISOString() : null
        }, Yn.toString = function () {
          return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }, Yn.unix = function () {
          return Math.floor(this.valueOf() / 1e3)
        }, Yn.valueOf = function () {
          return this._d.valueOf() - 6e4 * (this._offset || 0)
        }, Yn.creationData = function () {
          return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
        }, Yn.year = It, Yn.isLeapYear = function () {
          return z(this.year())
        }, Yn.weekYear = function (e) {
          return Ie.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }, Yn.isoWeekYear = function (e) {
          return Ie.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
        }, Yn.quarter = Yn.quarters = function (e) {
          return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        }, Yn.month = G, Yn.daysInMonth = function () {
          return B(this.year(), this.month())
        }, Yn.week = Yn.weeks = function (e) {
          var t = this.localeData().week(this);
          return null == e ? t : this.add(7 * (e - t), "d")
        }, Yn.isoWeek = Yn.isoWeeks = function (e) {
          var t = ee(this, 1, 4).week;
          return null == e ? t : this.add(7 * (e - t), "d")
        }, Yn.weeksInYear = function () {
          var e = this.localeData()._week;
          return te(this.year(), e.dow, e.doy)
        }, Yn.isoWeeksInYear = function () {
          return te(this.year(), 1, 4)
        }, Yn.date = Mn, Yn.day = Yn.days = function (e) {
          if (!this.isValid()) return null != e ? this : NaN;
          var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          return null != e ? (e = function (e, t) {
            return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
          }(e, this.localeData()), this.add(e - t, "d")) : t
        }, Yn.weekday = function (e) {
          if (!this.isValid()) return null != e ? this : NaN;
          var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return null == e ? t : this.add(e - t, "d")
        }, Yn.isoWeekday = function (e) {
          if (!this.isValid()) return null != e ? this : NaN;
          if (null != e) {
            var t = function (e, t) {
              return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
            }(e, this.localeData());
            return this.day(this.day() % 7 ? t : t - 7)
          }
          return this.day() || 7
        }, Yn.dayOfYear = function (e) {
          var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
          return null == e ? t : this.add(e - t, "d")
        }, Yn.hour = Yn.hours = Zt, Yn.minute = Yn.minutes = bn, Yn.second = Yn.seconds = Ln, Yn.millisecond = Yn.milliseconds = wn, Yn.utcOffset = function (e, n, r) {
          var i, a = this._offset || 0;
          if (!this.isValid()) return null != e ? this : NaN;
          if (null != e) {
            if ("string" == typeof e) {
              if (null === (e = Te(Yt, e))) return this
            } else Math.abs(e) < 16 && !r && (e *= 60);
            return !this._isUTC && n && (i = xe(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), a !== e && (!n || this._changeInProgress ? Ce(this, je(e - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
          }
          return this._isUTC ? a : xe(this)
        }, Yn.utc = function (e) {
          return this.utcOffset(0, e)
        }, Yn.local = function (e) {
          return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(xe(this), "m")), this
        }, Yn.parseZone = function () {
          if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
            var e = Te(wt, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
          }
          return this
        }, Yn.hasAlignedHourOffset = function (e) {
          return !!this.isValid() && (e = e ? Me(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
        }, Yn.isDST = function () {
          return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }, Yn.isLocal = function () {
          return !!this.isValid() && !this._isUTC
        }, Yn.isUtcOffset = function () {
          return !!this.isValid() && this._isUTC
        }, Yn.isUtc = Se, Yn.isUTC = Se, Yn.zoneAbbr = function () {
          return this._isUTC ? "UTC" : ""
        }, Yn.zoneName = function () {
          return this._isUTC ? "Coordinated Universal Time" : ""
        }, Yn.dates = L("dates accessor is deprecated. Use date instead.", Mn), Yn.months = L("months accessor is deprecated. Use month instead", G), Yn.years = L("years accessor is deprecated. Use year instead", It), Yn.zone = L("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
          return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
        }), Yn.isDSTShifted = L("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
          if (!a(this._isDSTShifted)) return this._isDSTShifted;
          var e = {};
          if (p(e, this), (e = ge(e))._a) {
            var t = e._isUTC ? c(e._a) : Me(e._a);
            this._isDSTShifted = this.isValid() && M(e._a, t.toArray()) > 0
          } else this._isDSTShifted = !1;
          return this._isDSTShifted
        });
        var Tn = T.prototype;
        Tn.calendar = function (e, t, n) {
          var r = this._calendar[e] || this._calendar.sameElse;
          return w(r) ? r.call(t, n) : r
        }, Tn.longDateFormat = function (e) {
          var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
          return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
            return e.slice(1)
          }), this._longDateFormat[e])
        }, Tn.invalidDate = function () {
          return this._invalidDate
        }, Tn.ordinal = function (e) {
          return this._ordinal.replace("%d", e)
        }, Tn.preparse = Re, Tn.postformat = Re, Tn.relativeTime = function (e, t, n, r) {
          var i = this._relativeTime[n];
          return w(i) ? i(e, t, n, r) : i.replace(/%d/i, e)
        }, Tn.pastFuture = function (e, t) {
          var n = this._relativeTime[e > 0 ? "future" : "past"];
          return w(n) ? n(t) : n.replace(/%s/i, t)
        }, Tn.set = function (e) {
          var t, n;
          for (n in e) w(t = e[n]) ? this[n] = t : this["_" + n] = t;
          this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }, Tn.months = function (e, t) {
          return e ? r(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Nt).test(t) ? "format" : "standalone"][e.month()] : r(this._months) ? this._months : this._months.standalone
        }, Tn.monthsShort = function (e, t) {
          return e ? r(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Nt.test(t) ? "format" : "standalone"][e.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }, Tn.monthsParse = function (e, t, n) {
          var r, i, a;
          if (this._monthsParseExact) return function (e, t, n) {
            var r, i, a, s = e.toLocaleLowerCase();
            if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) a = c([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(a, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(a, "").toLocaleLowerCase();
            return n ? "MMM" === t ? -1 !== (i = $t.call(this._shortMonthsParse, s)) ? i : null : -1 !== (i = $t.call(this._longMonthsParse, s)) ? i : null : "MMM" === t ? -1 !== (i = $t.call(this._shortMonthsParse, s)) ? i : -1 !== (i = $t.call(this._longMonthsParse, s)) ? i : null : -1 !== (i = $t.call(this._longMonthsParse, s)) ? i : -1 !== (i = $t.call(this._shortMonthsParse, s)) ? i : null
          }.call(this, e, t, n);
          for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
            if (i = c([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (a = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(a.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
            if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
            if (!n && this._monthsParse[r].test(e)) return r
          }
        }, Tn.monthsRegex = function (e) {
          return this._monthsParseExact ? (d(this, "_monthsRegex") || Q.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (d(this, "_monthsRegex") || (this._monthsRegex = Ut), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
        }, Tn.monthsShortRegex = function (e) {
          return this._monthsParseExact ? (d(this, "_monthsRegex") || Q.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (d(this, "_monthsShortRegex") || (this._monthsShortRegex = zt), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }, Tn.week = function (e) {
          return ee(e, this._week.dow, this._week.doy).week
        }, Tn.firstDayOfYear = function () {
          return this._week.doy
        }, Tn.firstDayOfWeek = function () {
          return this._week.dow
        }, Tn.weekdays = function (e, t) {
          return e ? r(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : r(this._weekdays) ? this._weekdays : this._weekdays.standalone
        }, Tn.weekdaysMin = function (e) {
          return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
        }, Tn.weekdaysShort = function (e) {
          return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
        }, Tn.weekdaysParse = function (e, t, n) {
          var r, i, a;
          if (this._weekdaysParseExact) return function (e, t, n) {
            var r, i, a, s = e.toLocaleLowerCase();
            if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) a = c([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(a, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(a, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(a, "").toLocaleLowerCase();
            return n ? "dddd" === t ? -1 !== (i = $t.call(this._weekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = $t.call(this._shortWeekdaysParse, s)) ? i : null : -1 !== (i = $t.call(this._minWeekdaysParse, s)) ? i : null : "dddd" === t ? -1 !== (i = $t.call(this._weekdaysParse, s)) ? i : -1 !== (i = $t.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = $t.call(this._minWeekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = $t.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = $t.call(this._weekdaysParse, s)) ? i : -1 !== (i = $t.call(this._minWeekdaysParse, s)) ? i : null : -1 !== (i = $t.call(this._minWeekdaysParse, s)) ? i : -1 !== (i = $t.call(this._weekdaysParse, s)) ? i : -1 !== (i = $t.call(this._shortWeekdaysParse, s)) ? i : null
          }.call(this, e, t, n);
          for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
            if (i = c([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[r] || (a = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = new RegExp(a.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[r].test(e)) return r;
            if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
            if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
            if (!n && this._weekdaysParse[r].test(e)) return r
          }
        }, Tn.weekdaysRegex = function (e) {
          return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || ne.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (d(this, "_weekdaysRegex") || (this._weekdaysRegex = Vt), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }, Tn.weekdaysShortRegex = function (e) {
          return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || ne.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (d(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Gt), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }, Tn.weekdaysMinRegex = function (e) {
          return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || ne.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (d(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qt), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }, Tn.isPM = function (e) {
          return "p" === (e + "").toLowerCase().charAt(0)
        }, Tn.meridiem = function (e, t, n) {
          return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        }, ue("en", {
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (e) {
            var t = e % 10;
            return e + (1 === v(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
          }
        }), t.lang = L("moment.lang is deprecated. Use moment.locale instead.", ue), t.langData = L("moment.langData is deprecated. Use moment.localeData instead.", le);
        var Dn = Math.abs, xn = Ge("ms"), Sn = Ge("s"), jn = Ge("m"), Hn = Ge("h"), Pn = Ge("d"), An = Ge("w"),
          Cn = Ge("M"), On = Ge("y"), En = Qe("milliseconds"), Fn = Qe("seconds"), $n = Qe("minutes"), In = Qe("hours"),
          Nn = Qe("days"), Rn = Qe("months"), Wn = Qe("years"), zn = Math.round,
          Un = {ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11}, Jn = Math.abs, qn = Le.prototype;
        return qn.isValid = function () {
          return this._isValid
        }, qn.abs = function () {
          var e = this._data;
          return this._milliseconds = Dn(this._milliseconds), this._days = Dn(this._days), this._months = Dn(this._months), e.milliseconds = Dn(e.milliseconds), e.seconds = Dn(e.seconds), e.minutes = Dn(e.minutes), e.hours = Dn(e.hours), e.months = Dn(e.months), e.years = Dn(e.years), this
        }, qn.add = function (e, t) {
          return Je(this, e, t, 1)
        }, qn.subtract = function (e, t) {
          return Je(this, e, t, -1)
        }, qn.as = function (e) {
          if (!this.isValid()) return NaN;
          var t, n, r = this._milliseconds;
          if ("month" === (e = x(e)) || "year" === e) return t = this._days + r / 864e5, n = this._months + Be(t), "month" === e ? n : n / 12;
          switch (t = this._days + Math.round(Ve(this._months)), e) {
            case"week":
              return t / 7 + r / 6048e5;
            case"day":
              return t + r / 864e5;
            case"hour":
              return 24 * t + r / 36e5;
            case"minute":
              return 1440 * t + r / 6e4;
            case"second":
              return 86400 * t + r / 1e3;
            case"millisecond":
              return Math.floor(864e5 * t) + r;
            default:
              throw new Error("Unknown unit " + e)
          }
        }, qn.asMilliseconds = xn, qn.asSeconds = Sn, qn.asMinutes = jn, qn.asHours = Hn, qn.asDays = Pn, qn.asWeeks = An, qn.asMonths = Cn, qn.asYears = On, qn.valueOf = function () {
          return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * v(this._months / 12) : NaN
        }, qn._bubble = function () {
          var e, t, n, r, i, a = this._milliseconds, s = this._days, o = this._months, u = this._data;
          return a >= 0 && s >= 0 && o >= 0 || a <= 0 && s <= 0 && o <= 0 || (a += 864e5 * qe(Ve(o) + s), s = 0, o = 0), u.milliseconds = a % 1e3, e = g(a / 1e3), u.seconds = e % 60, t = g(e / 60), u.minutes = t % 60, n = g(t / 60), u.hours = n % 24, s += g(n / 24), i = g(Be(s)), o += i, s -= qe(Ve(i)), r = g(o / 12), o %= 12, u.days = s, u.months = o, u.years = r, this
        }, qn.clone = function () {
          return je(this)
        }, qn.get = function (e) {
          return e = x(e), this.isValid() ? this[e + "s"]() : NaN
        }, qn.milliseconds = En, qn.seconds = Fn, qn.minutes = $n, qn.hours = In, qn.days = Nn, qn.weeks = function () {
          return g(this.days() / 7)
        }, qn.months = Rn, qn.years = Wn, qn.humanize = function (e) {
          if (!this.isValid()) return this.localeData().invalidDate();
          var t = this.localeData(), n = function (e, t, n) {
            var r = je(e).abs(), i = zn(r.as("s")), a = zn(r.as("m")), s = zn(r.as("h")), o = zn(r.as("d")),
              u = zn(r.as("M")), d = zn(r.as("y")),
              l = i <= Un.ss && ["s", i] || i < Un.s && ["ss", i] || a <= 1 && ["m"] || a < Un.m && ["mm", a] || s <= 1 && ["h"] || s < Un.h && ["hh", s] || o <= 1 && ["d"] || o < Un.d && ["dd", o] || u <= 1 && ["M"] || u < Un.M && ["MM", u] || d <= 1 && ["y"] || ["yy", d];
            return l[2] = t, l[3] = +e > 0, l[4] = n, function (e, t, n, r, i) {
              return i.relativeTime(t || 1, !!n, e, r)
            }.apply(null, l)
          }(this, !e, t);
          return e && (n = t.pastFuture(+this, n)), t.postformat(n)
        }, qn.toISOString = Ze, qn.toString = Ze, qn.toJSON = Ze, qn.locale = Ee, qn.localeData = Fe, qn.toIsoString = L("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Ze), qn.lang = vn, P("X", 0, 0, "unix"), P("x", 0, 0, "valueOf"), E("x", kt), E("X", /[+-]?\d+(\.\d{1,3})?/), I("X", function (e, t, n) {
          n._d = new Date(1e3 * parseFloat(e, 10))
        }), I("x", function (e, t, n) {
          n._d = new Date(v(e))
        }), t.version = "2.20.1", function (e) {
          Xe = e
        }(Me), t.fn = Yn, t.min = function () {
          return be("isBefore", [].slice.call(arguments, 0))
        }, t.max = function () {
          return be("isAfter", [].slice.call(arguments, 0))
        }, t.now = function () {
          return Date.now ? Date.now() : +new Date
        }, t.utc = c, t.unix = function (e) {
          return Me(1e3 * e)
        }, t.months = function (e, t) {
          return ze(e, t, "months")
        }, t.isDate = o, t.locale = ue, t.invalid = m, t.duration = je, t.isMoment = y, t.weekdays = function (e, t, n) {
          return Ue(e, t, n, "weekdays")
        }, t.parseZone = function () {
          return Me.apply(null, arguments).parseZone()
        }, t.localeData = le, t.isDuration = ke, t.monthsShort = function (e, t) {
          return ze(e, t, "monthsShort")
        }, t.weekdaysMin = function (e, t, n) {
          return Ue(e, t, n, "weekdaysMin")
        }, t.defineLocale = de, t.updateLocale = function (e, t) {
          if (null != t) {
            var n, r, i = Xt;
            null != (r = oe(e)) && (i = r._config), (n = new T(t = Y(i, t))).parentLocale = en[e], en[e] = n, ue(e)
          } else null != en[e] && (null != en[e].parentLocale ? en[e] = en[e].parentLocale : null != en[e] && delete en[e]);
          return en[e]
        }, t.locales = function () {
          return it(en)
        }, t.weekdaysShort = function (e, t, n) {
          return Ue(e, t, n, "weekdaysShort")
        }, t.normalizeUnits = x, t.relativeTimeRounding = function (e) {
          return void 0 === e ? zn : "function" == typeof e && (zn = e, !0)
        }, t.relativeTimeThreshold = function (e, t) {
          return void 0 !== Un[e] && (void 0 === t ? Un[e] : (Un[e] = t, "s" === e && (Un.ss = t - 1), !0))
        }, t.calendarFormat = function (e, t) {
          var n = e.diff(t, "days", !0);
          return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
        }, t.prototype = Yn, t.HTML5_FMT = {
          DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
          DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
          DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
          DATE: "YYYY-MM-DD",
          TIME: "HH:mm",
          TIME_SECONDS: "HH:mm:ss",
          TIME_MS: "HH:mm:ss.SSS",
          WEEK: "YYYY-[W]WW",
          MONTH: "YYYY-MM"
        }, t
      })
    }).call(t, n("3IRH")(e))
  }, Q8BB: function (e, t) {
    e.exports = {
      methods: {
        collectsVat: function (e) {
          return !!Spark.collectsEuropeanVat && _.contains(["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "GR", "ES", "FR", "HR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE", "GB"], e)
        }, refreshTaxRate: function (e) {
          var t = this;
          axios.post("/tax-rate", JSON.parse(JSON.stringify(e))).then(function (e) {
            t.taxRate = e.data.rate
          })
        }, taxAmount: function (e) {
          return e.price * (this.taxRate / 100)
        }, priceWithTax: function (e) {
          return e.price + this.taxAmount(e)
        }
      }
    }
  }, QJq7: function (e, t, n) {
    var r = n("40GM");
    Vue.component("spark-update-subscription", {mixins: [r]})
  }, RYz6: function (e, t) {
    e.exports = {
      props: ["user"], data: function () {
        return {
          monthlyRecurringRevenue: 0,
          yearlyRecurringRevenue: 0,
          totalVolume: 0,
          genericTrialUsers: 0,
          indicators: [],
          lastMonthsIndicators: null,
          lastYearsIndicators: null,
          plans: []
        }
      }, created: function () {
        var e = this;
        Bus.$on("sparkHashChanged", function (t, n) {
          "metrics" == t && 0 === e.yearlyRecurringRevenue && (e.getRevenue(), e.getPlans(), e.getTrialUsers(), e.getPerformanceIndicators())
        })
      }, methods: {
        getRevenue: function () {
          var e = this;
          axios.get("/spark/kiosk/performance-indicators/revenue").then(function (t) {
            e.yearlyRecurringRevenue = t.data.yearlyRecurringRevenue, e.monthlyRecurringRevenue = t.data.monthlyRecurringRevenue, e.totalVolume = t.data.totalVolume
          })
        }, getPlans: function () {
          var e = this;
          axios.get("/spark/kiosk/performance-indicators/plans").then(function (t) {
            e.plans = t.data
          })
        }, getTrialUsers: function () {
          var e = this;
          axios.get("/spark/kiosk/performance-indicators/trialing").then(function (t) {
            e.genericTrialUsers = parseInt(t.data)
          })
        }, getPerformanceIndicators: function () {
          var e = this;
          axios.get("/spark/kiosk/performance-indicators").then(function (t) {
            e.indicators = t.data.indicators, e.lastMonthsIndicators = t.data.last_month, e.lastYearsIndicators = t.data.last_year, Vue.nextTick(function () {
              e.drawCharts()
            })
          })
        }, drawCharts: function () {
          this.drawMonthlyRecurringRevenueChart(), this.drawYearlyRecurringRevenueChart(), this.drawDailyVolumeChart(), this.drawNewUsersChart()
        }, drawMonthlyRecurringRevenueChart: function () {
          return this.drawCurrencyChart("monthlyRecurringRevenueChart", 30, function (e) {
            return e.monthly_recurring_revenue
          })
        }, drawYearlyRecurringRevenueChart: function () {
          return this.drawCurrencyChart("yearlyRecurringRevenueChart", 30, function (e) {
            return e.yearly_recurring_revenue
          })
        }, drawDailyVolumeChart: function () {
          return this.drawCurrencyChart("dailyVolumeChart", 14, function (e) {
            return e.daily_volume
          })
        }, drawNewUsersChart: function () {
          return this.drawChart("newUsersChart", 14, function (e) {
            return e.new_users
          })
        }, drawCurrencyChart: function (e, t, n) {
          return this.drawChart(e, t, n, function (e) {
            return Vue.filter("currency")(e.value)
          })
        }, drawChart: function (e, t, n, r) {
          var i = JSON.parse(JSON.stringify(this.baseChartDataSet));
          i.data = _.map(_.last(this.indicators, t), n);
          var a = {labels: _.last(this.availableChartDates, t), datasets: [i]}, s = {responsive: !0};
          4 === arguments.length && (s.scaleLabel = r);
          new Chart(document.getElementById(e).getContext("2d"), {type: "line", data: a, options: s})
        }, percentChange: function (e, t) {
          var n = Math.round((e - t) / t * 100);
          return n > 0 ? "+" + n.toFixed(0) : n.toFixed(0)
        }
      }, computed: {
        monthlyChangeInMonthlyRecurringRevenue: function () {
          return !(!this.lastMonthsIndicators || !this.indicators) && this.percentChange(_.last(this.indicators).monthly_recurring_revenue, this.lastMonthsIndicators.monthly_recurring_revenue)
        }, yearlyChangeInMonthlyRecurringRevenue: function () {
          return !(!this.lastYearsIndicators || !this.indicators) && this.percentChange(_.last(this.indicators).monthly_recurring_revenue, this.lastYearsIndicators.monthly_recurring_revenue)
        }, monthlyChangeInYearlyRecurringRevenue: function () {
          return !(!this.lastMonthsIndicators || !this.indicators) && this.percentChange(_.last(this.indicators).yearly_recurring_revenue, this.lastMonthsIndicators.yearly_recurring_revenue)
        }, yearlyChangeInYearlyRecurringRevenue: function () {
          return !(!this.lastYearsIndicators || !this.indicators) && this.percentChange(_.last(this.indicators).yearly_recurring_revenue, this.lastYearsIndicators.yearly_recurring_revenue)
        }, totalTrialUsers: function () {
          return this.genericTrialUsers + _.reduce(this.plans, function (e, t) {
            return e + t.trialing
          }, 0)
        }, availableChartDates: function () {
          return _.map(this.indicators, function (e) {
            return moment(e.created_at).format("M/D")
          })
        }, baseChartDataSet: function () {
          return {
            label: "Dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)"
          }
        }
      }
    }
  }, RnJI: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("ka", {
        months: {
          standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
          format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
        },
        monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
        weekdays: {
          standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
          format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
          isFormat: /(წინა|შემდეგ)/
        },
        weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
        weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[დღეს] LT[-ზე]",
          nextDay: "[ხვალ] LT[-ზე]",
          lastDay: "[გუშინ] LT[-ზე]",
          nextWeek: "[შემდეგ] dddd LT[-ზე]",
          lastWeek: "[წინა] dddd LT-ზე",
          sameElse: "L"
        },
        relativeTime: {
          future: function (e) {
            return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
          },
          past: function (e) {
            return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის უკან") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის უკან") : void 0
          },
          s: "რამდენიმე წამი",
          ss: "%d წამი",
          m: "წუთი",
          mm: "%d წუთი",
          h: "საათი",
          hh: "%d საათი",
          d: "დღე",
          dd: "%d დღე",
          M: "თვე",
          MM: "%d თვე",
          y: "წელი",
          yy: "%d წელი"
        },
        dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal: function (e) {
          return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
        },
        week: {dow: 1, doy: 7}
      })
    })
  }, "S/mN": function (e, t, n) {
    e.exports = {
      props: ["user", "team", "billableType"], mixins: [n("asDv")], data: function () {
        return {currentDiscount: null, loadingCurrentDiscount: !1}
      }, created: function () {
        var e = this;
        this.$on("updateDiscount", function () {
          return e.getCurrentDiscountForBillable(e.billableType, e.billable), !0
        })
      }, mounted: function () {
        this.getCurrentDiscountForBillable(this.billableType, this.billable)
      }, methods: {
        calculateAmountOff: function (e) {
          return e
        }, formattedDiscountDuration: function (e) {
          if (e) switch (e.duration) {
            case"forever":
              return "for all future invoices";
            case"once":
              return "a single invoice";
            case"repeating":
              return 1 === e.duration_in_months ? "all invoices during the next billing cycle" : "all invoices during the next " + e.duration_in_months + " billing cycles"
          }
        }
      }
    }
  }, SV5M: function (e, t, n) {
    var r = n("muW7");
    Vue.component("spark-cancel-subscription", {mixins: [r]})
  }, SiWD: function (e, t) {
    e.exports = {
      pushStateSelector: null, methods: {
        usePushStateForTabs: function (e) {
          var t = this;
          this.pushStateSelector = e, this.registerTabClickHandler(), window.addEventListener("popstate", function (e) {
            t.activateTabForCurrentHash()
          }), window.location.hash ? this.activateTabForCurrentHash() : this.activateFirstTab()
        }, registerTabClickHandler: function () {
          var e = this;
          $(this.pushStateSelector + ' a[data-toggle="tab"]').on("click", function (t) {
            e.removeActiveClassFromTabs(), history.pushState(null, null, "#/" + $(this).attr("href").substring(1)), e.broadcastTabChange($(this).attr("href").substring(1))
          })
        }, activateTabForCurrentHash: function () {
          var e = window.location.hash.substring(2), t = e.split("/");
          e = t.shift(), this.removeActiveClassFromTabs();
          var n = $(this.pushStateSelector + ' a[href="#' + e + '"][data-toggle="tab"]');
          n.length > 0 && n.tab("show"), this.broadcastTabChange(e, t)
        }, activateFirstTab: function () {
          var e = $(this.pushStateSelector + ' a[data-toggle="tab"]').first();
          e.tab("show"), this.broadcastTabChange(e.attr("href").substring(1))
        }, removeActiveClassFromTabs: function () {
          $(this.pushStateSelector + " li").removeClass("active")
        }, broadcastTabChange: function (e, t) {
          Bus.$emit("sparkHashChanged", e, t)
        }
      }
    }
  }, Sjoy: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("en-au", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, SrpZ: function (e, t) {
    e.exports = {
      props: ["user", "team", "billableType"], data: function () {
        return {form: new SparkForm({vat_id: ""})}
      }, mounted: function () {
        this.form.vat_id = this.billable.vat_id
      }, methods: {
        update: function () {
          Spark.put(this.urlForUpdate, this.form)
        }
      }, computed: {
        urlForUpdate: function () {
          return this.billingUser ? "/settings/payment-method/vat-id" : "/settings/" + Spark.pluralTeamString + "/" + this.team.id + "/payment-method/vat-id"
        }
      }
    }
  }, TNV1: function (e, t, n) {
    "use strict";
    var r = n("cGG2");
    e.exports = function (e, t, n) {
      return r.forEach(n, function (n) {
        e = n(e, t)
      }), e
    }
  }, Tqun: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("en-ca", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "YYYY-MM-DD",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        }
      })
    })
  }, UATH: function (e, t) {
    e.exports = {
      computed: {
        billable: function () {
          return this.billableType ? "user" == this.billableType ? this.user : this.team : this.user
        }, billingUser: function () {
          return this.billableType && "user" == this.billableType
        }, spark: function () {
          return window.Spark
        }
      }
    }
  }, UJGw: function (e, t, n) {
    var r = n("K8rk");
    Vue.component("spark-team-settings", {mixins: [r]})
  }, UoMm: function (e, t, n) {
    var r = n("EUIn");
    Vue.component("spark-update-contact-information", {mixins: [r]})
  }, Urcl: function (e, t, n) {
    var r = n("O57c");
    Vue.component("spark-notifications", {mixins: [r]})
  }, V0td: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("sq", {
        months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
        monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
        weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
        weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
        weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
        weekdaysParseExact: !0,
        meridiemParse: /PD|MD/,
        isPM: function (e) {
          return "M" === e.charAt(0)
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "PD" : "MD"
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Sot në] LT",
          nextDay: "[Nesër në] LT",
          nextWeek: "dddd [në] LT",
          lastDay: "[Dje në] LT",
          lastWeek: "dddd [e kaluar në] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "në %s",
          past: "%s më parë",
          s: "disa sekonda",
          ss: "%d sekonda",
          m: "një minutë",
          mm: "%d minuta",
          h: "një orë",
          hh: "%d orë",
          d: "një ditë",
          dd: "%d ditë",
          M: "një muaj",
          MM: "%d muaj",
          y: "një vit",
          yy: "%d vite"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, V3OY: function (e, t) {
    e.exports = {
      props: ["user", "team", "billableType"], data: function () {
        return {form: new SparkForm({information: ""})}
      }, mounted: function () {
        this.form.information = this.billable.extra_billing_information
      }, methods: {
        update: function () {
          Spark.put(this.urlForUpdate, this.form)
        }
      }, computed: {
        urlForUpdate: function () {
          return this.billingUser ? "/settings/extra-billing-information" : "/settings/" + Spark.pluralTeamString + "/" + this.team.id + "/extra-billing-information"
        }
      }
    }
  }, V4qH: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, n) {
        var r = e + " ";
        switch (n) {
          case"ss":
            return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
          case"m":
            return t ? "jedna minuta" : "jedne minute";
          case"mm":
            return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
          case"h":
            return t ? "jedan sat" : "jednog sata";
          case"hh":
            return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
          case"dd":
            return r += 1 === e ? "dan" : "dana";
          case"MM":
            return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
          case"yy":
            return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
        }
      }

      return e.defineLocale("hr", {
        months: {
          format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
          standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
        },
        monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedjelju] [u] LT";
              case 3:
                return "[u] [srijedu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT"
            }
          }, lastDay: "[jučer u] LT", lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
                return "[prošlu] dddd [u] LT";
              case 6:
                return "[prošle] [subote] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[prošli] dddd [u] LT"
            }
          }, sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "par sekundi",
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: "dan",
          dd: t,
          M: "mjesec",
          MM: t,
          y: "godinu",
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
      })
    })
  }, V7yC: function (e, t, n) {
    var r = n("ACj5");
    Vue.component("spark-send-invitation", {mixins: [r]})
  }, VK9h: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("fr-ch", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Aujourd’hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e, t) {
          switch (t) {
            default:
            case"M":
            case"Q":
            case"D":
            case"DDD":
            case"d":
              return e + (1 === e ? "er" : "e");
            case"w":
            case"W":
              return e + (1 === e ? "re" : "e")
          }
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, Vz2w: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("zh-cn", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日Ah点mm分",
          LLLL: "YYYY年M月D日ddddAh点mm分",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
        },
        meridiem: function (e, t, n) {
          var r = 100 * e + t;
          return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
        },
        calendar: {
          sameDay: "[今天]LT",
          nextDay: "[明天]LT",
          nextWeek: "[下]ddddLT",
          lastDay: "[昨天]LT",
          lastWeek: "[上]ddddLT",
          sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function (e, t) {
          switch (t) {
            case"d":
            case"D":
            case"DDD":
              return e + "日";
            case"M":
              return e + "月";
            case"w":
            case"W":
              return e + "周";
            default:
              return e
          }
        },
        relativeTime: {
          future: "%s内",
          past: "%s前",
          s: "几秒",
          ss: "%d 秒",
          m: "1 分钟",
          mm: "%d 分钟",
          h: "1 小时",
          hh: "%d 小时",
          d: "1 天",
          dd: "%d 天",
          M: "1 个月",
          MM: "%d 个月",
          y: "1 年",
          yy: "%d 年"
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, W2nU: function (e, t) {
    function n() {
      throw new Error("setTimeout has not been defined")
    }

    function r() {
      throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
      if (d === setTimeout) return setTimeout(e, 0);
      if ((d === n || !d) && setTimeout) return d = setTimeout, setTimeout(e, 0);
      try {
        return d(e, 0)
      } catch (t) {
        try {
          return d.call(null, e, 0)
        } catch (t) {
          return d.call(this, e, 0)
        }
      }
    }

    function a() {
      m && h && (m = !1, h.length ? f = h.concat(f) : p = -1, f.length && s())
    }

    function s() {
      if (!m) {
        var e = i(a);
        m = !0;
        for (var t = f.length; t;) {
          for (h = f, f = []; ++p < t;) h && h[p].run();
          p = -1, t = f.length
        }
        h = null, m = !1, function (e) {
          if (l === clearTimeout) return clearTimeout(e);
          if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(e);
          try {
            l(e)
          } catch (t) {
            try {
              return l.call(null, e)
            } catch (t) {
              return l.call(this, e)
            }
          }
        }(e)
      }
    }

    function o(e, t) {
      this.fun = e, this.array = t
    }

    function u() {
    }

    var d, l, c = e.exports = {};
    !function () {
      try {
        d = "function" == typeof setTimeout ? setTimeout : n
      } catch (e) {
        d = n
      }
      try {
        l = "function" == typeof clearTimeout ? clearTimeout : r
      } catch (e) {
        l = r
      }
    }();
    var h, f = [], m = !1, p = -1;
    c.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      f.push(new o(e, t)), 1 !== f.length || m || i(s)
    }, o.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, c.title = "browser", c.browser = !0, c.env = {}, c.argv = [], c.version = "", c.versions = {}, c.on = u, c.addListener = u, c.once = u, c.off = u, c.removeListener = u, c.removeAllListeners = u, c.emit = u, c.prependListener = u, c.prependOnceListener = u, c.listeners = function (e) {
      return []
    }, c.binding = function (e) {
      throw new Error("process.binding is not supported")
    }, c.cwd = function () {
      return "/"
    }, c.chdir = function (e) {
      throw new Error("process.chdir is not supported")
    }, c.umask = function () {
      return 0
    }
  }, WLij: function (e, t) {
    e.exports = {
      props: ["user", "teams"], data: function () {
        return {
          leavingTeam: null,
          deletingTeam: null,
          leaveTeamForm: new SparkForm({}),
          deleteTeamForm: new SparkForm({})
        }
      }, mounted: function () {
        $('[data-toggle="tooltip"]').tooltip()
      }, methods: {
        approveLeavingTeam: function (e) {
          this.leavingTeam = e, $("#modal-leave-team").modal("show")
        }, leaveTeam: function () {
          Spark.delete(this.urlForLeaving, this.leaveTeamForm).then(function () {
            Bus.$emit("updateUser"), Bus.$emit("updateTeams"), $("#modal-leave-team").modal("hide")
          })
        }, approveTeamDelete: function (e) {
          this.deletingTeam = e, $("#modal-delete-team").modal("show")
        }, deleteTeam: function () {
          Spark.delete("/settings/" + Spark.pluralTeamString + "/" + this.deletingTeam.id, this.deleteTeamForm).then(function () {
            Bus.$emit("updateUser"), Bus.$emit("updateTeams"), $("#modal-delete-team").modal("hide")
          })
        }
      }, computed: {
        urlForLeaving: function () {
          return "/settings/" + Spark.pluralTeamString + "/" + this.leavingTeam.id + "/members/" + this.user.id
        }
      }
    }
  }, X8h5: function (e, t, n) {
    e.exports = {
      mixins: [n("asDv")], data: function () {
        return {
          loadingCurrentDiscount: !1,
          currentDiscount: null,
          discountingUser: null,
          form: new SparkForm({type: "amount", value: null, duration: "once", months: null})
        }
      }, created: function () {
        var e = this;
        Bus.$on("addDiscount", function (t) {
          e.form = new SparkForm({
            type: "amount",
            value: null,
            duration: "once",
            months: null
          }), e.setUser(t), $("#modal-add-discount").modal("show")
        })
      }, methods: {
        setUser: function (e) {
          this.discountingUser = e, this.getCurrentDiscountForUser(e)
        }, applyDiscount: function () {
          Spark.post("/spark/kiosk/users/discount/" + this.discountingUser.id, this.form).then(function () {
            $("#modal-add-discount").modal("hide")
          })
        }
      }
    }
  }, "XIq/": function (e, t, n) {
    var r = n("7R0S");
    Vue.component("spark-subscription", {mixins: [r]})
  }, XU1s: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("uz", {
        months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
        monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
        weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
        weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
          sameDay: "[Бугун соат] LT [да]",
          nextDay: "[Эртага] LT [да]",
          nextWeek: "dddd [куни соат] LT [да]",
          lastDay: "[Кеча соат] LT [да]",
          lastWeek: "[Утган] dddd [куни соат] LT [да]",
          sameElse: "L"
        },
        relativeTime: {
          future: "Якин %s ичида",
          past: "Бир неча %s олдин",
          s: "фурсат",
          ss: "%d фурсат",
          m: "бир дакика",
          mm: "%d дакика",
          h: "бир соат",
          hh: "%d соат",
          d: "бир кун",
          dd: "%d кун",
          M: "бир ой",
          MM: "%d ой",
          y: "бир йил",
          yy: "%d йил"
        },
        week: {dow: 1, doy: 7}
      })
    })
  }, XlWM: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, n, r) {
        var i = {
          s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
          ss: [e + "sekundi", e + "sekundit"],
          m: ["ühe minuti", "üks minut"],
          mm: [e + " minuti", e + " minutit"],
          h: ["ühe tunni", "tund aega", "üks tund"],
          hh: [e + " tunni", e + " tundi"],
          d: ["ühe päeva", "üks päev"],
          M: ["kuu aja", "kuu aega", "üks kuu"],
          MM: [e + " kuu", e + " kuud"],
          y: ["ühe aasta", "aasta", "üks aasta"],
          yy: [e + " aasta", e + " aastat"]
        };
        return t ? i[n][2] ? i[n][2] : i[n][1] : r ? i[n][0] : i[n][1]
      }

      return e.defineLocale("et", {
        months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
        monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
        weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
        weekdaysShort: "P_E_T_K_N_R_L".split("_"),
        weekdaysMin: "P_E_T_K_N_R_L".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[Täna,] LT",
          nextDay: "[Homme,] LT",
          nextWeek: "[Järgmine] dddd LT",
          lastDay: "[Eile,] LT",
          lastWeek: "[Eelmine] dddd LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s pärast",
          past: "%s tagasi",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: "%d päeva",
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, XmWM: function (e, t, n) {
    "use strict";

    function r(e) {
      this.defaults = e, this.interceptors = {request: new s, response: new s}
    }

    var i = n("KCLY"), a = n("cGG2"), s = n("fuGk"), o = n("xLtR"), u = n("dIwP"), d = n("qRfI");
    r.prototype.request = function (e) {
      "string" == typeof e && (e = a.merge({url: arguments[0]}, arguments[1])), (e = a.merge(i, this.defaults, {method: "get"}, e)).baseURL && !u(e.url) && (e.url = d(e.baseURL, e.url));
      var t = [o, void 0], n = Promise.resolve(e);
      for (this.interceptors.request.forEach(function (e) {
        t.unshift(e.fulfilled, e.rejected)
      }), this.interceptors.response.forEach(function (e) {
        t.push(e.fulfilled, e.rejected)
      }); t.length;) n = n.then(t.shift(), t.shift());
      return n
    }, a.forEach(["delete", "get", "head"], function (e) {
      r.prototype[e] = function (t, n) {
        return this.request(a.merge(n || {}, {method: e, url: t}))
      }
    }), a.forEach(["post", "put", "patch"], function (e) {
      r.prototype[e] = function (t, n, r) {
        return this.request(a.merge(r || {}, {method: e, url: t, data: n}))
      }
    }), e.exports = r
  }, "XzD+": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("th", {
        months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
        monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
        monthsParseExact: !0,
        weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
        weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
        weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY เวลา H:mm",
          LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function (e) {
          return "หลังเที่ยง" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
        },
        calendar: {
          sameDay: "[วันนี้ เวลา] LT",
          nextDay: "[พรุ่งนี้ เวลา] LT",
          nextWeek: "dddd[หน้า เวลา] LT",
          lastDay: "[เมื่อวานนี้ เวลา] LT",
          lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "อีก %s",
          past: "%sที่แล้ว",
          s: "ไม่กี่วินาที",
          ss: "%d วินาที",
          m: "1 นาที",
          mm: "%d นาที",
          h: "1 ชั่วโมง",
          hh: "%d ชั่วโมง",
          d: "1 วัน",
          dd: "%d วัน",
          M: "1 เดือน",
          MM: "%d เดือน",
          y: "1 ปี",
          yy: "%d ปี"
        }
      })
    })
  }, "YBA/": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("da", {
        months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
          sameDay: "[i dag kl.] LT",
          nextDay: "[i morgen kl.] LT",
          nextWeek: "på dddd [kl.] LT",
          lastDay: "[i går kl.] LT",
          lastWeek: "[i] dddd[s kl.] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "om %s",
          past: "%s siden",
          s: "få sekunder",
          ss: "%d sekunder",
          m: "et minut",
          mm: "%d minutter",
          h: "en time",
          hh: "%d timer",
          d: "en dag",
          dd: "%d dage",
          M: "en måned",
          MM: "%d måneder",
          y: "et år",
          yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, YQ0A: function (e, t, n) {
    "use strict";
    var r = n("se3Y");
    e.exports = r, r.enableSynchronous = function () {
      r.prototype.isPending = function () {
        return 0 == this.getState()
      }, r.prototype.isFulfilled = function () {
        return 1 == this.getState()
      }, r.prototype.isRejected = function () {
        return 2 == this.getState()
      }, r.prototype.getValue = function () {
        if (3 === this._65) return this._55.getValue();
        if (!this.isFulfilled()) throw new Error("Cannot get a value of an unfulfilled promise.");
        return this._55
      }, r.prototype.getReason = function () {
        if (3 === this._65) return this._55.getReason();
        if (!this.isRejected()) throw new Error("Cannot get a rejection reason of a non-rejected promise.");
        return this._55
      }, r.prototype.getState = function () {
        return 3 === this._65 ? this._55.getState() : -1 === this._65 || -2 === this._65 ? 0 : this._65
      }
    }, r.disableSynchronous = function () {
      r.prototype.isPending = void 0, r.prototype.isFulfilled = void 0, r.prototype.isRejected = void 0, r.prototype.getValue = void 0, r.prototype.getReason = void 0, r.prototype.getState = void 0
    }
  }, YXlc: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("yo", {
        months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
        monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
        weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
        weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
        weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Ònì ni] LT",
          nextDay: "[Ọ̀la ni] LT",
          nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
          lastDay: "[Àna ni] LT",
          lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ní %s",
          past: "%s kọjá",
          s: "ìsẹjú aayá die",
          ss: "aayá %d",
          m: "ìsẹjú kan",
          mm: "ìsẹjú %d",
          h: "wákati kan",
          hh: "wákati %d",
          d: "ọjọ́ kan",
          dd: "ọjọ́ %d",
          M: "osù kan",
          MM: "osù %d",
          y: "ọdún kan",
          yy: "ọdún %d"
        },
        dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
        ordinal: "ọjọ́ %d",
        week: {dow: 1, doy: 4}
      })
    })
  }, Yoq8: function (e, t, n) {
    var r = n("L+96");
    Vue.component("spark-pending-invitations", {mixins: [r]})
  }, YutG: function (e, t, n) {
    e.exports = {
      props: ["user", "team", "plans", "billableType"],
      mixins: [n("OeAR"), n("jJ7H")],
      mounted: function () {
        this.onlyHasYearlyPlans && this.showYearlyPlans()
      },
      methods: {
        showPlanDetails: function (e) {
          this.$parent.$emit("showPlanDetails", e)
        }, priceWithTax: function (e) {
          return e.price + e.price * (this.billable.tax_rate / 100)
        }
      }
    }
  }, ZFGz: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("cy", {
        months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
        monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
        weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
        weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Heddiw am] LT",
          nextDay: "[Yfory am] LT",
          nextWeek: "dddd [am] LT",
          lastDay: "[Ddoe am] LT",
          lastWeek: "dddd [diwethaf am] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "mewn %s",
          past: "%s yn ôl",
          s: "ychydig eiliadau",
          ss: "%d eiliad",
          m: "munud",
          mm: "%d munud",
          h: "awr",
          hh: "%d awr",
          d: "diwrnod",
          dd: "%d diwrnod",
          M: "mis",
          MM: "%d mis",
          y: "blwyddyn",
          yy: "%d flynedd"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        ordinal: function (e) {
          var t = "";
          return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, ZUyn: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("zh-hk", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日dddd HH:mm",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          var r = 100 * e + t;
          return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
        },
        calendar: {
          sameDay: "[今天]LT",
          nextDay: "[明天]LT",
          nextWeek: "[下]ddddLT",
          lastDay: "[昨天]LT",
          lastWeek: "[上]ddddLT",
          sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function (e, t) {
          switch (t) {
            case"d":
            case"D":
            case"DDD":
              return e + "日";
            case"M":
              return e + "月";
            case"w":
            case"W":
              return e + "週";
            default:
              return e
          }
        },
        relativeTime: {
          future: "%s內",
          past: "%s前",
          s: "幾秒",
          ss: "%d 秒",
          m: "1 分鐘",
          mm: "%d 分鐘",
          h: "1 小時",
          hh: "%d 小時",
          d: "1 天",
          dd: "%d 天",
          M: "1 個月",
          MM: "%d 個月",
          y: "1 年",
          yy: "%d 年"
        }
      })
    })
  }, ZZ6T: function (e, t, n) {
    var r = n("vBD/");
    Vue.component("spark-register-stripe", {mixins: [r]})
  }, ZnSc: function (e, t, n) {
    var r = n("k0bK");
    Vue.component("spark-disable-two-factor-auth", {mixins: [r]})
  }, ZoSI: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("pt", {
        months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
        monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
        weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY HH:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Hoje às] LT",
          nextDay: "[Amanhã às] LT",
          nextWeek: "dddd [às] LT",
          lastDay: "[Ontem às] LT",
          lastWeek: function () {
            return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "em %s",
          past: "há %s",
          s: "segundos",
          ss: "%d segundos",
          m: "um minuto",
          mm: "%d minutos",
          h: "uma hora",
          hh: "%d horas",
          d: "um dia",
          dd: "%d dias",
          M: "um mês",
          MM: "%d meses",
          y: "um ano",
          yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 1, doy: 4}
      })
    })
  }, Zq1x: function (e, t, n) {
    var r = n("1It7");
    Vue.component("spark-kiosk-profile", {mixins: [r]})
  }, aM0x: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০"},
        n = {"১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0"};
      return e.defineLocale("bn", {
        months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
        monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
        weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
        weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
        weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
        longDateFormat: {
          LT: "A h:mm সময়",
          LTS: "A h:mm:ss সময়",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm সময়",
          LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
        },
        calendar: {
          sameDay: "[আজ] LT",
          nextDay: "[আগামীকাল] LT",
          nextWeek: "dddd, LT",
          lastDay: "[গতকাল] LT",
          lastWeek: "[গত] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s পরে",
          past: "%s আগে",
          s: "কয়েক সেকেন্ড",
          ss: "%d সেকেন্ড",
          m: "এক মিনিট",
          mm: "%d মিনিট",
          h: "এক ঘন্টা",
          hh: "%d ঘন্টা",
          d: "এক দিন",
          dd: "%d দিন",
          M: "এক মাস",
          MM: "%d মাস",
          y: "এক বছর",
          yy: "%d বছর"
        },
        preparse: function (e) {
          return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
        },
        week: {dow: 0, doy: 6}
      })
    })
  }, aqvp: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, n) {
        var r = e + " ";
        switch (n) {
          case"ss":
            return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
          case"m":
            return t ? "jedna minuta" : "jedne minute";
          case"mm":
            return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
          case"h":
            return t ? "jedan sat" : "jednog sata";
          case"hh":
            return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
          case"dd":
            return r += 1 === e ? "dan" : "dana";
          case"MM":
            return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
          case"yy":
            return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
        }
      }

      return e.defineLocale("bs", {
        months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedjelju] [u] LT";
              case 3:
                return "[u] [srijedu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT"
            }
          }, lastDay: "[jučer u] LT", lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
                return "[prošlu] dddd [u] LT";
              case 6:
                return "[prošle] [subote] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[prošli] dddd [u] LT"
            }
          }, sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "par sekundi",
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: "dan",
          dd: t,
          M: "mjesec",
          MM: t,
          y: "godinu",
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
      })
    })
  }, asDv: function (e, t) {
    e.exports = {
      methods: {
        getCurrentDiscountForBillable: function (e, t) {
          return "user" === e ? this.getCurrentDiscountForUser(t) : this.getCurrentDiscountForTeam(t)
        }, getCurrentDiscountForUser: function (e) {
          var t = this;
          this.currentDiscount = null, this.loadingCurrentDiscount = !0, axios.get("/coupon/user/" + e.id).then(function (e) {
            200 == e.status && (t.currentDiscount = e.data), t.loadingCurrentDiscount = !1
          })
        }, getCurrentDiscountForTeam: function (e) {
          var t = this;
          this.currentDiscount = null, this.loadingCurrentDiscount = !0, axios.get("/coupon/" + Spark.teamString + "/" + e.id).then(function (e) {
            200 == e.status && (t.currentDiscount = e.data), t.loadingCurrentDiscount = !1
          })
        }, formattedDiscount: function (e) {
          if (e) return e.percent_off ? e.percent_off + "%" : Vue.filter("currency")(this.calculateAmountOff(e.amount_off))
        }, calculateAmountOff: function (e) {
          return e / 100
        }, formattedDiscountDuration: function (e) {
          if (e) switch (e.duration) {
            case"forever":
              return "all future invoices";
            case"once":
              return "a single invoice";
            case"repeating":
              return "all invoices during the next " + e.duration_in_months + " months"
          }
        }
      }
    }
  }, bPdR: function (e, t, n) {
    var r = n("bwPn");
    Vue.component("spark-invoice-list", {mixins: [r]})
  }, bXQP: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("fr-ca", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Aujourd’hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e, t) {
          switch (t) {
            default:
            case"M":
            case"Q":
            case"D":
            case"DDD":
            case"d":
              return e + (1 === e ? "er" : "e");
            case"w":
            case"W":
              return e + (1 === e ? "re" : "e")
          }
        }
      })
    })
  }, bgEZ: function (e, t, n) {
    var r = n("62TM");
    Vue.component("spark-profile", {mixins: [r]})
  }, bl2t: function (e, t, n) {
    var r = n("MKi2");
    Vue.component("spark-subscribe-braintree", {mixins: [r]})
  }, bwPn: function (e, t) {
    e.exports = {
      props: ["user", "team", "invoices", "billableType"], methods: {
        downloadUrlFor: function (e) {
          return this.billingUser ? "/settings/invoice/" + e.id : "/settings/" + Spark.pluralTeamString + "/" + this.team.id + "/invoice/" + e.id
        }
      }
    }
  }, c1x4: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {
        words: {
          ss: ["секунда", "секунде", "секунди"],
          m: ["један минут", "једне минуте"],
          mm: ["минут", "минуте", "минута"],
          h: ["један сат", "једног сата"],
          hh: ["сат", "сата", "сати"],
          dd: ["дан", "дана", "дана"],
          MM: ["месец", "месеца", "месеци"],
          yy: ["година", "године", "година"]
        }, correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
        }, translate: function (e, n, r) {
          var i = t.words[r];
          return 1 === r.length ? n ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i)
        }
      };
      return e.defineLocale("sr-cyrl", {
        months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
        monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
        monthsParseExact: !0,
        weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
        weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
        weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[данас у] LT", nextDay: "[сутра у] LT", nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[у] [недељу] [у] LT";
              case 3:
                return "[у] [среду] [у] LT";
              case 6:
                return "[у] [суботу] [у] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[у] dddd [у] LT"
            }
          }, lastDay: "[јуче у] LT", lastWeek: function () {
            return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
          }, sameElse: "L"
        },
        relativeTime: {
          future: "за %s",
          past: "пре %s",
          s: "неколико секунди",
          ss: t.translate,
          m: t.translate,
          mm: t.translate,
          h: t.translate,
          hh: t.translate,
          d: "дан",
          dd: t.translate,
          M: "месец",
          MM: t.translate,
          y: "годину",
          yy: t.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
      })
    })
  }, cGG2: function (e, t, n) {
    "use strict";

    function r(e) {
      return "[object Array]" === d.call(e)
    }

    function i(e) {
      return null !== e && "object" == typeof e
    }

    function a(e) {
      return "[object Function]" === d.call(e)
    }

    function s(e, t) {
      if (null !== e && void 0 !== e) if ("object" == typeof e || r(e) || (e = [e]), r(e)) for (var n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e); else for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e)
    }

    function o() {
      function e(e, n) {
        "object" == typeof t[n] && "object" == typeof e ? t[n] = o(t[n], e) : t[n] = e
      }

      for (var t = {}, n = 0, r = arguments.length; n < r; n++) s(arguments[n], e);
      return t
    }

    var u = n("JP+z"), d = Object.prototype.toString;
    e.exports = {
      isArray: r, isArrayBuffer: function (e) {
        return "[object ArrayBuffer]" === d.call(e)
      }, isFormData: function (e) {
        return "undefined" != typeof FormData && e instanceof FormData
      }, isArrayBufferView: function (e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
      }, isString: function (e) {
        return "string" == typeof e
      }, isNumber: function (e) {
        return "number" == typeof e
      }, isObject: i, isUndefined: function (e) {
        return void 0 === e
      }, isDate: function (e) {
        return "[object Date]" === d.call(e)
      }, isFile: function (e) {
        return "[object File]" === d.call(e)
      }, isBlob: function (e) {
        return "[object Blob]" === d.call(e)
      }, isFunction: a, isStream: function (e) {
        return i(e) && a(e.pipe)
      }, isURLSearchParams: function (e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
      }, isStandardBrowserEnv: function () {
        return "undefined" != typeof window && "undefined" != typeof document && "function" == typeof document.createElement
      }, forEach: s, merge: o, extend: function (e, t, n) {
        return s(t, function (t, r) {
          e[r] = n && "function" == typeof t ? u(t, n) : t
        }), e
      }, trim: function (e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "")
      }
    }
  }, cJvY: function (e, t, n) {
    var r = n("28dp");
    Vue.component("spark-team-profile", {mixins: [r]})
  }, cWxy: function (e, t, n) {
    "use strict";

    function r(e) {
      if ("function" != typeof e) throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e
      });
      var n = this;
      e(function (e) {
        n.reason || (n.reason = new i(e), t(n.reason))
      })
    }

    var i = n("dVOP");
    r.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason
    }, r.source = function () {
      var e;
      return {
        token: new r(function (t) {
          e = t
        }), cancel: e
      }
    }, e.exports = r
  }, cboP: function (e, t) {
    Vue.component("home", {
      props: ["user"], ready: function () {
      }
    })
  }, dBEZ: function (e, t, n) {
    n("nZdM");
    Vue.component("spark-update-payment-method-stripe", {
      props: ["user", "team", "billableType"], data: function () {
        return {
          form: new SparkForm({
            stripe_token: "",
            address: "",
            address_line_2: "",
            city: "",
            state: "",
            zip: "",
            country: "US"
          })
        }
      }, mounted: function () {
        var e = this;
        this.stripe = Stripe(Spark.stripeKey);
        var t = {
          hideIcon: !0,
          hidePostalCode: !0,
          style: {
            base: {
              "::placeholder": {color: "#aab7c4"},
              fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
              color: "#495057",
              fontSize: "15px"
            }
          }
        };
        this.$nextTick(function () {
          e.updateCardCard = e.stripe.elements().create("card", t), e.updateCardCard.mount("#update-card-card-element")
        }), this.initializeBillingAddress()
      }, methods: {
        initializeBillingAddress: function () {
          Spark.collectsBillingAddress && (this.form.address = this.billable.billing_address, this.form.address_line_2 = this.billable.billing_address_line_2, this.form.city = this.billable.billing_city, this.form.state = this.billable.billing_state, this.form.zip = this.billable.billing_zip, this.form.country = this.billable.billing_country || "US")
        }, update: function () {
          var e = this;
          this.form.busy = !0, this.form.errors.forget(), this.form.successful = !1, this.stripe.createToken(this.updateCardCard).then(function (t) {
            t.error ? (e.form.errors.set({stripe_token: [t.error.message]}), e.form.busy = !1) : e.sendUpdateToServer(t.token.id)
          })
        }, sendUpdateToServer: function (e) {
          var t = this;
          this.form.stripe_token = e, Spark.put(this.urlForUpdate, this.form).then(function () {
            Bus.$emit("updateUser"), Bus.$emit("updateTeam"), Spark.collectsBillingAddress || (t.form.zip = "")
          })
        }
      }, computed: {
        billableName: function () {
          return this.billingUser ? this.user.name : this.team.owner.name
        }, urlForUpdate: function () {
          return this.billingUser ? "/settings/payment-method" : "/settings/" + Spark.pluralTeamString + "/" + this.team.id + "/payment-method"
        }, cardIcon: function () {
          if (!this.billable.card_brand) return "fa-cc-stripe";
          switch (this.billable.card_brand) {
            case"American Express":
              return "fa-cc-amex";
            case"Diners Club":
              return "fa-cc-diners-club";
            case"Discover":
              return "fa-cc-discover";
            case"JCB":
              return "fa-cc-jcb";
            case"MasterCard":
              return "fa-cc-mastercard";
            case"Visa":
              return "fa-cc-visa";
            default:
              return "fa-cc-stripe"
          }
        }, placeholder: function () {
          return this.billable.card_last_four ? "************" + this.billable.card_last_four : ""
        }
      }
    })
  }, dIwP: function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
  }, dURR: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("ar-ma", {
        months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات"
        },
        week: {dow: 6, doy: 12}
      })
    })
  }, dVOP: function (e, t, n) {
    "use strict";

    function r(e) {
      this.message = e
    }

    r.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "")
    }, r.prototype.__CANCEL__ = !0, e.exports = r
  }, dbz2: function (e, t, n) {
    var r = n("6SyK");
    Vue.component("spark-create-team", {mixins: [r]})
  }, dglw: function (e, t) {
    +function (e) {
      "use strict";

      function t(t) {
        var n, r = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(r)
      }

      function n(t) {
        return this.each(function () {
          var n = e(this), i = n.data("bs.collapse"), a = e.extend({}, r.DEFAULTS, n.data(), "object" == typeof t && t);
          !i && a.toggle && /show|hide/.test(t) && (a.toggle = !1), i || n.data("bs.collapse", i = new r(this, a)), "string" == typeof t && i[t]()
        })
      }

      var r = function (t, n) {
        this.$element = e(t), this.options = e.extend({}, r.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
      };
      r.VERSION = "3.3.7", r.TRANSITION_DURATION = 350, r.DEFAULTS = {toggle: !0}, r.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height"
      }, r.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var t, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
          if (!(i && i.length && (t = i.data("bs.collapse")) && t.transitioning)) {
            var a = e.Event("show.bs.collapse");
            if (this.$element.trigger(a), !a.isDefaultPrevented()) {
              i && i.length && (n.call(i, "hide"), t || i.data("bs.collapse", null));
              var s = this.dimension();
              this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
              var o = function () {
                this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
              };
              if (!e.support.transition) return o.call(this);
              var u = e.camelCase(["scroll", s].join("-"));
              this.$element.one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[s](this.$element[0][u])
            }
          }
        }
      }, r.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var t = e.Event("hide.bs.collapse");
          if (this.$element.trigger(t), !t.isDefaultPrevented()) {
            var n = this.dimension();
            this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
            var i = function () {
              this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
            };
            if (!e.support.transition) return i.call(this);
            this.$element[n](0).one("bsTransitionEnd", e.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION)
          }
        }
      }, r.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
      }, r.prototype.getParent = function () {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function (n, r) {
          var i = e(r);
          this.addAriaAndCollapsedClass(t(i), i)
        }, this)).end()
      }, r.prototype.addAriaAndCollapsedClass = function (e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
      };
      var i = e.fn.collapse;
      e.fn.collapse = n, e.fn.collapse.Constructor = r, e.fn.collapse.noConflict = function () {
        return e.fn.collapse = i, this
      }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (r) {
        var i = e(this);
        i.attr("data-target") || r.preventDefault();
        var a = t(i), s = a.data("bs.collapse") ? "toggle" : i.data();
        n.call(a, s)
      })
    }(jQuery)
  }, dyB6: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("en-nz", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, "e/KL": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("x-pseudo", {
        months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
        monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
        monthsParseExact: !0,
        weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
        weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
        weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[T~ódá~ý át] LT",
          nextDay: "[T~ómó~rró~w át] LT",
          nextWeek: "dddd [át] LT",
          lastDay: "[Ý~ést~érdá~ý át] LT",
          lastWeek: "[L~ást] dddd [át] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "í~ñ %s",
          past: "%s á~gó",
          s: "á ~féw ~sécó~ñds",
          ss: "%d s~écóñ~ds",
          m: "á ~míñ~úté",
          mm: "%d m~íñú~tés",
          h: "á~ñ hó~úr",
          hh: "%d h~óúrs",
          d: "á ~dáý",
          dd: "%d d~áýs",
          M: "á ~móñ~th",
          MM: "%d m~óñt~hs",
          y: "á ~ýéár",
          yy: "%d ý~éárs"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, "eBB/": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("ko", {
        months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
        weekdaysShort: "일_월_화_수_목_금_토".split("_"),
        weekdaysMin: "일_월_화_수_목_금_토".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "YYYY.MM.DD",
          LL: "YYYY년 MMMM D일",
          LLL: "YYYY년 MMMM D일 A h:mm",
          LLLL: "YYYY년 MMMM D일 dddd A h:mm",
          l: "YYYY.MM.DD",
          ll: "YYYY년 MMMM D일",
          lll: "YYYY년 MMMM D일 A h:mm",
          llll: "YYYY년 MMMM D일 dddd A h:mm"
        },
        calendar: {
          sameDay: "오늘 LT",
          nextDay: "내일 LT",
          nextWeek: "dddd LT",
          lastDay: "어제 LT",
          lastWeek: "지난주 dddd LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s 후",
          past: "%s 전",
          s: "몇 초",
          ss: "%d초",
          m: "1분",
          mm: "%d분",
          h: "한 시간",
          hh: "%d시간",
          d: "하루",
          dd: "%d일",
          M: "한 달",
          MM: "%d달",
          y: "일 년",
          yy: "%d년"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
        ordinal: function (e, t) {
          switch (t) {
            case"d":
            case"D":
            case"DDD":
              return e + "일";
            case"M":
              return e + "월";
            case"w":
            case"W":
              return e + "주";
            default:
              return e
          }
        },
        meridiemParse: /오전|오후/,
        isPM: function (e) {
          return "오후" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "오전" : "오후"
        }
      })
    })
  }, eHwN: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {
        1: "-inci",
        5: "-inci",
        8: "-inci",
        70: "-inci",
        80: "-inci",
        2: "-nci",
        7: "-nci",
        20: "-nci",
        50: "-nci",
        3: "-üncü",
        4: "-üncü",
        100: "-üncü",
        6: "-ncı",
        9: "-uncu",
        10: "-uncu",
        30: "-uncu",
        60: "-ıncı",
        90: "-ıncı"
      };
      return e.defineLocale("az", {
        months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
        monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
        weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
        weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
        weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[bugün saat] LT",
          nextDay: "[sabah saat] LT",
          nextWeek: "[gələn həftə] dddd [saat] LT",
          lastDay: "[dünən] LT",
          lastWeek: "[keçən həftə] dddd [saat] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s sonra",
          past: "%s əvvəl",
          s: "birneçə saniyyə",
          ss: "%d saniyə",
          m: "bir dəqiqə",
          mm: "%d dəqiqə",
          h: "bir saat",
          hh: "%d saat",
          d: "bir gün",
          dd: "%d gün",
          M: "bir ay",
          MM: "%d ay",
          y: "bir il",
          yy: "%d il"
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM: function (e) {
          return /^(gündüz|axşam)$/.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal: function (e) {
          if (0 === e) return e + "-ıncı";
          var n = e % 10;
          return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
        },
        week: {dow: 1, doy: 7}
      })
    })
  }, eIiL: function (e, t, n) {
    e.exports = {
      props: ["user", "team", "billableType"], mixins: [n("r+8P")], data: function () {
        return {form: new SparkForm({braintree_type: "", braintree_token: ""})}
      }, mounted: function () {
        this.braintree("braintree-payment-method-container", this.braintreeCallback)
      }, methods: {
        update: function () {
          var e = this;
          Spark.put(this.urlForUpdate, this.form).then(function () {
            Bus.$emit("updateUser"), Bus.$emit("updateTeam"), e.resetBraintree("braintree-payment-method-container", e.braintreeCallback)
          })
        }, braintreeCallback: function (e) {
          this.form.braintree_type = e.type, this.form.braintree_token = e.nonce, this.update()
        }
      }, computed: {
        urlForUpdate: function () {
          return this.billingUser ? "/settings/payment-method" : "/settings/" + Spark.pluralTeamString + "/" + this.team.id + "/payment-method"
        }, cardIcon: function () {
          if (!this.billable.card_brand) return "fa-credit-card";
          switch (this.billable.card_brand) {
            case"American Express":
              return "fa-cc-amex";
            case"Diners Club":
              return "fa-cc-diners-club";
            case"Discover":
              return "fa-cc-discover";
            case"JCB":
              return "fa-cc-jcb";
            case"MasterCard":
              return "fa-cc-mastercard";
            case"Visa":
              return "fa-cc-visa";
            default:
              return "fa-credit-card"
          }
        }
      }
    }
  }, edMn: function (e, t, n) {
    var r = n("B56D");
    Vue.component("spark-enable-two-factor-auth", {mixins: [r]})
  }, f4W3: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {
        words: {
          ss: ["sekunda", "sekunde", "sekundi"],
          m: ["jedan minut", "jedne minute"],
          mm: ["minut", "minute", "minuta"],
          h: ["jedan sat", "jednog sata"],
          hh: ["sat", "sata", "sati"],
          dd: ["dan", "dana", "dana"],
          MM: ["mesec", "meseca", "meseci"],
          yy: ["godina", "godine", "godina"]
        }, correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
        }, translate: function (e, n, r) {
          var i = t.words[r];
          return 1 === r.length ? n ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i)
        }
      };
      return e.defineLocale("sr", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedelju] [u] LT";
              case 3:
                return "[u] [sredu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT"
            }
          }, lastDay: "[juče u] LT", lastWeek: function () {
            return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
          }, sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "pre %s",
          s: "nekoliko sekundi",
          ss: t.translate,
          m: t.translate,
          mm: t.translate,
          h: t.translate,
          hh: t.translate,
          d: "dan",
          dd: t.translate,
          M: "mesec",
          MM: t.translate,
          y: "godinu",
          yy: t.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
      })
    })
  }, f8Wh: function (e, t, n) {
    var r = n("E9RQ");
    Vue.component("spark-register-braintree", {mixins: [r]})
  }, fW1y: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
        n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
      return e.defineLocale("sd", {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: n,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd، D MMMM YYYY HH:mm"
        },
        meridiemParse: /صبح|شام/,
        isPM: function (e) {
          return "شام" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "صبح" : "شام"
        },
        calendar: {
          sameDay: "[اڄ] LT",
          nextDay: "[سڀاڻي] LT",
          nextWeek: "dddd [اڳين هفتي تي] LT",
          lastDay: "[ڪالهه] LT",
          lastWeek: "[گزريل هفتي] dddd [تي] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s پوء",
          past: "%s اڳ",
          s: "چند سيڪنڊ",
          ss: "%d سيڪنڊ",
          m: "هڪ منٽ",
          mm: "%d منٽ",
          h: "هڪ ڪلاڪ",
          hh: "%d ڪلاڪ",
          d: "هڪ ڏينهن",
          dd: "%d ڏينهن",
          M: "هڪ مهينو",
          MM: "%d مهينا",
          y: "هڪ سال",
          yy: "%d سال"
        },
        preparse: function (e) {
          return e.replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/,/g, "،")
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, fuGk: function (e, t, n) {
    "use strict";

    function r() {
      this.handlers = []
    }

    var i = n("cGG2");
    r.prototype.use = function (e, t) {
      return this.handlers.push({fulfilled: e, rejected: t}), this.handlers.length - 1
    }, r.prototype.eject = function (e) {
      this.handlers[e] && (this.handlers[e] = null)
    }, r.prototype.forEach = function (e) {
      i.forEach(this.handlers, function (t) {
        null !== t && e(t)
      })
    }, e.exports = r
  }, g3IF: function (e, t, n) {
    var r = n("n6tR");
    Vue.component("spark-team-membership", {mixins: [r]})
  }, g7KF: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
        n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
      return e.defineLocale("fy", {
        months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
        monthsShort: function (e, r) {
          return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
        },
        monthsParseExact: !0,
        weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
        weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
        weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[hjoed om] LT",
          nextDay: "[moarn om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[juster om] LT",
          lastWeek: "[ôfrûne] dddd [om] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "oer %s",
          past: "%s lyn",
          s: "in pear sekonden",
          ss: "%d sekonden",
          m: "ien minút",
          mm: "%d minuten",
          h: "ien oere",
          hh: "%d oeren",
          d: "ien dei",
          dd: "%d dagen",
          M: "ien moanne",
          MM: "%d moannen",
          y: "ien jier",
          yy: "%d jierren"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, gEQe: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {1: "೧", 2: "೨", 3: "೩", 4: "೪", 5: "೫", 6: "೬", 7: "೭", 8: "೮", 9: "೯", 0: "೦"},
        n = {"೧": "1", "೨": "2", "೩": "3", "೪": "4", "೫": "5", "೬": "6", "೭": "7", "೮": "8", "೯": "9", "೦": "0"};
      return e.defineLocale("kn", {
        months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
        monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬ_ಅಕ್ಟೋಬ_ನವೆಂಬ_ಡಿಸೆಂಬ".split("_"),
        monthsParseExact: !0,
        weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
        weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
        weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
          sameDay: "[ಇಂದು] LT",
          nextDay: "[ನಾಳೆ] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ನಿನ್ನೆ] LT",
          lastWeek: "[ಕೊನೆಯ] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ನಂತರ",
          past: "%s ಹಿಂದೆ",
          s: "ಕೆಲವು ಕ್ಷಣಗಳು",
          ss: "%d ಸೆಕೆಂಡುಗಳು",
          m: "ಒಂದು ನಿಮಿಷ",
          mm: "%d ನಿಮಿಷ",
          h: "ಒಂದು ಗಂಟೆ",
          hh: "%d ಗಂಟೆ",
          d: "ಒಂದು ದಿನ",
          dd: "%d ದಿನ",
          M: "ಒಂದು ತಿಂಗಳು",
          MM: "%d ತಿಂಗಳು",
          y: "ಒಂದು ವರ್ಷ",
          yy: "%d ವರ್ಷ"
        },
        preparse: function (e) {
          return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
        ordinal: function (e) {
          return e + "ನೇ"
        },
        week: {dow: 0, doy: 6}
      })
    })
  }, gEU3: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("mi", {
        months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
        monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
        weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [i] HH:mm",
          LLLL: "dddd, D MMMM YYYY [i] HH:mm"
        },
        calendar: {
          sameDay: "[i teie mahana, i] LT",
          nextDay: "[apopo i] LT",
          nextWeek: "dddd [i] LT",
          lastDay: "[inanahi i] LT",
          lastWeek: "dddd [whakamutunga i] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "i roto i %s",
          past: "%s i mua",
          s: "te hēkona ruarua",
          ss: "%d hēkona",
          m: "he meneti",
          mm: "%d meneti",
          h: "te haora",
          hh: "%d haora",
          d: "he ra",
          dd: "%d ra",
          M: "he marama",
          MM: "%d marama",
          y: "he tau",
          yy: "%d tau"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 1, doy: 4}
      })
    })
  }, gNGx: function (e, t, n) {
    n("LkJv"), n("lv2Q"), n("Mj7C"), n("5W4I"), n("dglw"), n("442e"), n("ok1o"), n("mXlc"), n("JE6y"), n("O2uK"), n("oftQ"), n("8JQ3")
  }, gUgh: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("tet", {
        months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"),
        weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"),
        weekdaysMin: "Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Ohin iha] LT",
          nextDay: "[Aban iha] LT",
          nextWeek: "dddd [iha] LT",
          lastDay: "[Horiseik iha] LT",
          lastWeek: "dddd [semana kotuk] [iha] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "iha %s",
          past: "%s liuba",
          s: "minutu balun",
          ss: "minutu %d",
          m: "minutu ida",
          mm: "minutus %d",
          h: "horas ida",
          hh: "horas %d",
          d: "loron ida",
          dd: "loron %d",
          M: "fulan ida",
          MM: "fulan %d",
          y: "tinan ida",
          yy: "tinan %d"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, gfpj: function (e, t) {
    e.exports = {
      data: function () {
        return {form: new SparkForm({current_password: "", password: "", password_confirmation: ""})}
      }, methods: {
        update: function () {
          Spark.put("/settings/password", this.form)
        }
      }
    }
  }, hBlz: function (e, t, n) {
    var r, i, a;
    !function (s, o) {
      "use strict";
      "object" == typeof e && e.exports ? e.exports = o(n("pCid"), n("nOPC"), n("wQAq")) : (i = [n("pCid"), n("nOPC"), n("wQAq")], void 0 === (a = "function" == typeof(r = o) ? r.apply(t, i) : r) || (e.exports = a))
    }(0, function (e, t, n, r) {
      "use strict";

      function i(e, t) {
        var n = arguments.length >= 1, r = arguments.length >= 2;
        if (!(this instanceof i)) return n ? r ? new i(e, t) : new i(e) : new i;
        if (void 0 === e) {
          if (n) throw new TypeError("undefined is not a valid argument for URI");
          e = "undefined" != typeof location ? location.href + "" : ""
        }
        if (null === e && n) throw new TypeError("null is not a valid argument for URI");
        return this.href(e), void 0 !== t ? this.absoluteTo(t) : this
      }

      function a(e) {
        return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
      }

      function s(e) {
        return void 0 === e ? "Undefined" : String(Object.prototype.toString.call(e)).slice(8, -1)
      }

      function o(e) {
        return "Array" === s(e)
      }

      function u(e, t) {
        var n, r, i = {};
        if ("RegExp" === s(t)) i = null; else if (o(t)) for (n = 0, r = t.length; n < r; n++) i[t[n]] = !0; else i[t] = !0;
        for (n = 0, r = e.length; n < r; n++) {
          (i && void 0 !== i[e[n]] || !i && t.test(e[n])) && (e.splice(n, 1), r--, n--)
        }
        return e
      }

      function d(e, t) {
        var n, r;
        if (o(t)) {
          for (n = 0, r = t.length; n < r; n++) if (!d(e, t[n])) return !1;
          return !0
        }
        var i = s(t);
        for (n = 0, r = e.length; n < r; n++) if ("RegExp" === i) {
          if ("string" == typeof e[n] && e[n].match(t)) return !0
        } else if (e[n] === t) return !0;
        return !1
      }

      function l(e, t) {
        if (!o(e) || !o(t)) return !1;
        if (e.length !== t.length) return !1;
        e.sort(), t.sort();
        for (var n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
        return !0
      }

      function c(e) {
        return e.replace(/^\/+|\/+$/g, "")
      }

      function h(e) {
        return escape(e)
      }

      function f(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, h).replace(/\*/g, "%2A")
      }

      function m(e) {
        return function (t, n) {
          return void 0 === t ? this._parts[e] || "" : (this._parts[e] = t || null, this.build(!n), this)
        }
      }

      function p(e, t) {
        return function (n, r) {
          return void 0 === n ? this._parts[e] || "" : (null !== n && (n += "").charAt(0) === t && (n = n.substring(1)), this._parts[e] = n, this.build(!r), this)
        }
      }

      var _ = r && r.URI;
      i.version = "1.19.0";
      var y = i.prototype, g = Object.prototype.hasOwnProperty;
      i._parts = function () {
        return {
          protocol: null,
          username: null,
          password: null,
          hostname: null,
          urn: null,
          port: null,
          path: null,
          query: null,
          fragment: null,
          preventInvalidHostname: i.preventInvalidHostname,
          duplicateQueryParameters: i.duplicateQueryParameters,
          escapeQuerySpace: i.escapeQuerySpace
        }
      }, i.preventInvalidHostname = !1, i.duplicateQueryParameters = !1, i.escapeQuerySpace = !0, i.protocol_expression = /^[a-z][a-z0-9.+-]*$/i, i.idn_expression = /[^a-z0-9\._-]/i, i.punycode_expression = /(xn--)/i, i.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, i.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/, i.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi, i.findUri = {
        start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
        end: /[\s\r\n]|$/,
        trim: /[`!()\[\]{};:'".,<>?«»“”„‘’]+$/,
        parens: /(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g
      }, i.defaultPorts = {
        http: "80",
        https: "443",
        ftp: "21",
        gopher: "70",
        ws: "80",
        wss: "443"
      }, i.hostProtocols = ["http", "https"], i.invalid_hostname_characters = /[^a-zA-Z0-9\.\-:_]/, i.domAttributes = {
        a: "href",
        blockquote: "cite",
        link: "href",
        base: "href",
        script: "src",
        form: "action",
        img: "src",
        area: "href",
        iframe: "src",
        embed: "src",
        source: "src",
        track: "src",
        input: "src",
        audio: "src",
        video: "src"
      }, i.getDomAttribute = function (e) {
        if (e && e.nodeName) {
          var t = e.nodeName.toLowerCase();
          if ("input" !== t || "image" === e.type) return i.domAttributes[t]
        }
      }, i.encode = f, i.decode = decodeURIComponent, i.iso8859 = function () {
        i.encode = escape, i.decode = unescape
      }, i.unicode = function () {
        i.encode = f, i.decode = decodeURIComponent
      }, i.characters = {
        pathname: {
          encode: {
            expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
            map: {"%24": "$", "%26": "&", "%2B": "+", "%2C": ",", "%3B": ";", "%3D": "=", "%3A": ":", "%40": "@"}
          }, decode: {expression: /[\/\?#]/g, map: {"/": "%2F", "?": "%3F", "#": "%23"}}
        },
        reserved: {
          encode: {
            expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
            map: {
              "%3A": ":",
              "%2F": "/",
              "%3F": "?",
              "%23": "#",
              "%5B": "[",
              "%5D": "]",
              "%40": "@",
              "%21": "!",
              "%24": "$",
              "%26": "&",
              "%27": "'",
              "%28": "(",
              "%29": ")",
              "%2A": "*",
              "%2B": "+",
              "%2C": ",",
              "%3B": ";",
              "%3D": "="
            }
          }
        },
        urnpath: {
          encode: {
            expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/gi,
            map: {
              "%21": "!",
              "%24": "$",
              "%27": "'",
              "%28": "(",
              "%29": ")",
              "%2A": "*",
              "%2B": "+",
              "%2C": ",",
              "%3B": ";",
              "%3D": "=",
              "%40": "@"
            }
          }, decode: {expression: /[\/\?#:]/g, map: {"/": "%2F", "?": "%3F", "#": "%23", ":": "%3A"}}
        }
      }, i.encodeQuery = function (e, t) {
        var n = i.encode(e + "");
        return void 0 === t && (t = i.escapeQuerySpace), t ? n.replace(/%20/g, "+") : n
      }, i.decodeQuery = function (e, t) {
        e += "", void 0 === t && (t = i.escapeQuerySpace);
        try {
          return i.decode(t ? e.replace(/\+/g, "%20") : e)
        } catch (t) {
          return e
        }
      };
      var v, M = {encode: "encode", decode: "decode"}, b = function (e, t) {
        return function (n) {
          try {
            return i[t](n + "").replace(i.characters[e][t].expression, function (n) {
              return i.characters[e][t].map[n]
            })
          } catch (e) {
            return n
          }
        }
      };
      for (v in M) i[v + "PathSegment"] = b("pathname", M[v]), i[v + "UrnPathSegment"] = b("urnpath", M[v]);
      var L = function (e, t, n) {
        return function (r) {
          var a;
          a = n ? function (e) {
            return i[t](i[n](e))
          } : i[t];
          for (var s = (r + "").split(e), o = 0, u = s.length; o < u; o++) s[o] = a(s[o]);
          return s.join(e)
        }
      };
      i.decodePath = L("/", "decodePathSegment"), i.decodeUrnPath = L(":", "decodeUrnPathSegment"), i.recodePath = L("/", "encodePathSegment", "decode"), i.recodeUrnPath = L(":", "encodeUrnPathSegment", "decode"), i.encodeReserved = b("reserved", "encode"), i.parse = function (e, t) {
        var n;
        return t || (t = {preventInvalidHostname: i.preventInvalidHostname}), (n = e.indexOf("#")) > -1 && (t.fragment = e.substring(n + 1) || null, e = e.substring(0, n)), (n = e.indexOf("?")) > -1 && (t.query = e.substring(n + 1) || null, e = e.substring(0, n)), "//" === e.substring(0, 2) ? (t.protocol = null, e = e.substring(2), e = i.parseAuthority(e, t)) : (n = e.indexOf(":")) > -1 && (t.protocol = e.substring(0, n) || null, t.protocol && !t.protocol.match(i.protocol_expression) ? t.protocol = void 0 : "//" === e.substring(n + 1, n + 3) ? (e = e.substring(n + 3), e = i.parseAuthority(e, t)) : (e = e.substring(n + 1), t.urn = !0)), t.path = e, t
      }, i.parseHost = function (e, t) {
        e || (e = "");
        var n, r, a = (e = e.replace(/\\/g, "/")).indexOf("/");
        if (-1 === a && (a = e.length), "[" === e.charAt(0)) n = e.indexOf("]"), t.hostname = e.substring(1, n) || null, t.port = e.substring(n + 2, a) || null, "/" === t.port && (t.port = null); else {
          var s = e.indexOf(":"), o = e.indexOf("/"), u = e.indexOf(":", s + 1);
          -1 !== u && (-1 === o || u < o) ? (t.hostname = e.substring(0, a) || null, t.port = null) : (r = e.substring(0, a).split(":"), t.hostname = r[0] || null, t.port = r[1] || null)
        }
        return t.hostname && "/" !== e.substring(a).charAt(0) && (a++, e = "/" + e), t.preventInvalidHostname && i.ensureValidHostname(t.hostname, t.protocol), t.port && i.ensureValidPort(t.port), e.substring(a) || "/"
      }, i.parseAuthority = function (e, t) {
        return e = i.parseUserinfo(e, t), i.parseHost(e, t)
      }, i.parseUserinfo = function (e, t) {
        var n, r = e.indexOf("/"), a = e.lastIndexOf("@", r > -1 ? r : e.length - 1);
        return a > -1 && (-1 === r || a < r) ? (n = e.substring(0, a).split(":"), t.username = n[0] ? i.decode(n[0]) : null, n.shift(), t.password = n[0] ? i.decode(n.join(":")) : null, e = e.substring(a + 1)) : (t.username = null, t.password = null), e
      }, i.parseQuery = function (e, t) {
        if (!e) return {};
        if (!(e = e.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, ""))) return {};
        for (var n, r, a, s = {}, o = e.split("&"), u = o.length, d = 0; d < u; d++) n = o[d].split("="), r = i.decodeQuery(n.shift(), t), a = n.length ? i.decodeQuery(n.join("="), t) : null, g.call(s, r) ? ("string" != typeof s[r] && null !== s[r] || (s[r] = [s[r]]), s[r].push(a)) : s[r] = a;
        return s
      }, i.build = function (e) {
        var t = "";
        return e.protocol && (t += e.protocol + ":"), e.urn || !t && !e.hostname || (t += "//"), t += i.buildAuthority(e) || "", "string" == typeof e.path && ("/" !== e.path.charAt(0) && "string" == typeof e.hostname && (t += "/"), t += e.path), "string" == typeof e.query && e.query && (t += "?" + e.query), "string" == typeof e.fragment && e.fragment && (t += "#" + e.fragment), t
      }, i.buildHost = function (e) {
        var t = "";
        return e.hostname ? (i.ip6_expression.test(e.hostname) ? t += "[" + e.hostname + "]" : t += e.hostname, e.port && (t += ":" + e.port), t) : ""
      }, i.buildAuthority = function (e) {
        return i.buildUserinfo(e) + i.buildHost(e)
      }, i.buildUserinfo = function (e) {
        var t = "";
        return e.username && (t += i.encode(e.username)), e.password && (t += ":" + i.encode(e.password)), t && (t += "@"), t
      }, i.buildQuery = function (e, t, n) {
        var r, a, s, u, d = "";
        for (a in e) if (g.call(e, a) && a) if (o(e[a])) for (r = {}, s = 0, u = e[a].length; s < u; s++) void 0 !== e[a][s] && void 0 === r[e[a][s] + ""] && (d += "&" + i.buildQueryParameter(a, e[a][s], n), !0 !== t && (r[e[a][s] + ""] = !0)); else void 0 !== e[a] && (d += "&" + i.buildQueryParameter(a, e[a], n));
        return d.substring(1)
      }, i.buildQueryParameter = function (e, t, n) {
        return i.encodeQuery(e, n) + (null !== t ? "=" + i.encodeQuery(t, n) : "")
      }, i.addQuery = function (e, t, n) {
        if ("object" == typeof t) for (var r in t) g.call(t, r) && i.addQuery(e, r, t[r]); else {
          if ("string" != typeof t) throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
          if (void 0 === e[t]) return void(e[t] = n);
          "string" == typeof e[t] && (e[t] = [e[t]]), o(n) || (n = [n]), e[t] = (e[t] || []).concat(n)
        }
      }, i.setQuery = function (e, t, n) {
        if ("object" == typeof t) for (var r in t) g.call(t, r) && i.setQuery(e, r, t[r]); else {
          if ("string" != typeof t) throw new TypeError("URI.setQuery() accepts an object, string as the name parameter");
          e[t] = void 0 === n ? null : n
        }
      }, i.removeQuery = function (e, t, n) {
        var r, a, d;
        if (o(t)) for (r = 0, a = t.length; r < a; r++) e[t[r]] = void 0; else if ("RegExp" === s(t)) for (d in e) t.test(d) && (e[d] = void 0); else if ("object" == typeof t) for (d in t) g.call(t, d) && i.removeQuery(e, d, t[d]); else {
          if ("string" != typeof t) throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");
          void 0 !== n ? "RegExp" === s(n) ? !o(e[t]) && n.test(e[t]) ? e[t] = void 0 : e[t] = u(e[t], n) : e[t] !== String(n) || o(n) && 1 !== n.length ? o(e[t]) && (e[t] = u(e[t], n)) : e[t] = void 0 : e[t] = void 0
        }
      }, i.hasQuery = function (e, t, n, r) {
        switch (s(t)) {
          case"String":
            break;
          case"RegExp":
            for (var a in e) if (g.call(e, a) && t.test(a) && (void 0 === n || i.hasQuery(e, a, n))) return !0;
            return !1;
          case"Object":
            for (var u in t) if (g.call(t, u) && !i.hasQuery(e, u, t[u])) return !1;
            return !0;
          default:
            throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter")
        }
        switch (s(n)) {
          case"Undefined":
            return t in e;
          case"Boolean":
            return n === Boolean(o(e[t]) ? e[t].length : e[t]);
          case"Function":
            return !!n(e[t], t, e);
          case"Array":
            if (!o(e[t])) return !1;
            return (r ? d : l)(e[t], n);
          case"RegExp":
            return o(e[t]) ? !!r && d(e[t], n) : Boolean(e[t] && e[t].match(n));
          case"Number":
            n = String(n);
          case"String":
            return o(e[t]) ? !!r && d(e[t], n) : e[t] === n;
          default:
            throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")
        }
      }, i.joinPaths = function () {
        for (var e = [], t = [], n = 0, r = 0; r < arguments.length; r++) {
          var a = new i(arguments[r]);
          e.push(a);
          for (var s = a.segment(), o = 0; o < s.length; o++) "string" == typeof s[o] && t.push(s[o]), s[o] && n++
        }
        if (!t.length || !n) return new i("");
        var u = new i("").segment(t);
        return "" !== e[0].path() && "/" !== e[0].path().slice(0, 1) || u.path("/" + u.path()), u.normalize()
      }, i.commonPath = function (e, t) {
        var n, r = Math.min(e.length, t.length);
        for (n = 0; n < r; n++) if (e.charAt(n) !== t.charAt(n)) {
          n--;
          break
        }
        return n < 1 ? e.charAt(0) === t.charAt(0) && "/" === e.charAt(0) ? "/" : "" : ("/" === e.charAt(n) && "/" === t.charAt(n) || (n = e.substring(0, n).lastIndexOf("/")), e.substring(0, n + 1))
      }, i.withinString = function (e, t, n) {
        n || (n = {});
        var r = n.start || i.findUri.start, a = n.end || i.findUri.end, s = n.trim || i.findUri.trim,
          o = n.parens || i.findUri.parens, u = /[a-z0-9-]=["']?$/i;
        for (r.lastIndex = 0; ;) {
          var d = r.exec(e);
          if (!d) break;
          var l = d.index;
          if (n.ignoreHtml) {
            var c = e.slice(Math.max(l - 3, 0), l);
            if (c && u.test(c)) continue
          }
          for (var h = l + e.slice(l).search(a), f = e.slice(l, h), m = -1; ;) {
            var p = o.exec(f);
            if (!p) break;
            var _ = p.index + p[0].length;
            m = Math.max(m, _)
          }
          if (!((f = m > -1 ? f.slice(0, m) + f.slice(m).replace(s, "") : f.replace(s, "")).length <= d[0].length || n.ignore && n.ignore.test(f))) {
            var y = t(f, l, h = l + f.length, e);
            void 0 !== y ? (y = String(y), e = e.slice(0, l) + y + e.slice(h), r.lastIndex = l + y.length) : r.lastIndex = h
          }
        }
        return r.lastIndex = 0, e
      }, i.ensureValidHostname = function (t, n) {
        var r = !!t, a = !1;
        if (!!n && (a = d(i.hostProtocols, n)), a && !r) throw new TypeError("Hostname cannot be empty, if protocol is " + n);
        if (t && t.match(i.invalid_hostname_characters)) {
          if (!e) throw new TypeError('Hostname "' + t + '" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');
          if (e.toASCII(t).match(i.invalid_hostname_characters)) throw new TypeError('Hostname "' + t + '" contains characters other than [A-Z0-9.-:_]')
        }
      }, i.ensureValidPort = function (e) {
        if (e) {
          var t = Number(e);
          if (!(function (e) {
            return /^[0-9]+$/.test(e)
          }(t) && t > 0 && t < 65536)) throw new TypeError('Port "' + e + '" is not a valid port')
        }
      }, i.noConflict = function (e) {
        if (e) {
          var t = {URI: this.noConflict()};
          return r.URITemplate && "function" == typeof r.URITemplate.noConflict && (t.URITemplate = r.URITemplate.noConflict()), r.IPv6 && "function" == typeof r.IPv6.noConflict && (t.IPv6 = r.IPv6.noConflict()), r.SecondLevelDomains && "function" == typeof r.SecondLevelDomains.noConflict && (t.SecondLevelDomains = r.SecondLevelDomains.noConflict()), t
        }
        return r.URI === this && (r.URI = _), this
      }, y.build = function (e) {
        return !0 === e ? this._deferred_build = !0 : (void 0 === e || this._deferred_build) && (this._string = i.build(this._parts), this._deferred_build = !1), this
      }, y.clone = function () {
        return new i(this)
      }, y.valueOf = y.toString = function () {
        return this.build(!1)._string
      }, y.protocol = m("protocol"), y.username = m("username"), y.password = m("password"), y.hostname = m("hostname"), y.port = m("port"), y.query = p("query", "?"), y.fragment = p("fragment", "#"), y.search = function (e, t) {
        var n = this.query(e, t);
        return "string" == typeof n && n.length ? "?" + n : n
      }, y.hash = function (e, t) {
        var n = this.fragment(e, t);
        return "string" == typeof n && n.length ? "#" + n : n
      }, y.pathname = function (e, t) {
        if (void 0 === e || !0 === e) {
          var n = this._parts.path || (this._parts.hostname ? "/" : "");
          return e ? (this._parts.urn ? i.decodeUrnPath : i.decodePath)(n) : n
        }
        return this._parts.urn ? this._parts.path = e ? i.recodeUrnPath(e) : "" : this._parts.path = e ? i.recodePath(e) : "/", this.build(!t), this
      }, y.path = y.pathname, y.href = function (e, t) {
        var n;
        if (void 0 === e) return this.toString();
        this._string = "", this._parts = i._parts();
        var r = e instanceof i, a = "object" == typeof e && (e.hostname || e.path || e.pathname);
        if (e.nodeName) {
          e = e[i.getDomAttribute(e)] || "", a = !1
        }
        if (!r && a && void 0 !== e.pathname && (e = e.toString()), "string" == typeof e || e instanceof String) this._parts = i.parse(String(e), this._parts); else {
          if (!r && !a) throw new TypeError("invalid input");
          var s = r ? e._parts : e;
          for (n in s) g.call(this._parts, n) && (this._parts[n] = s[n])
        }
        return this.build(!t), this
      }, y.is = function (e) {
        var t = !1, r = !1, a = !1, s = !1, o = !1, u = !1, d = !1, l = !this._parts.urn;
        switch (this._parts.hostname && (l = !1, r = i.ip4_expression.test(this._parts.hostname), a = i.ip6_expression.test(this._parts.hostname), o = (s = !(t = r || a)) && n && n.has(this._parts.hostname), u = s && i.idn_expression.test(this._parts.hostname), d = s && i.punycode_expression.test(this._parts.hostname)), e.toLowerCase()) {
          case"relative":
            return l;
          case"absolute":
            return !l;
          case"domain":
          case"name":
            return s;
          case"sld":
            return o;
          case"ip":
            return t;
          case"ip4":
          case"ipv4":
          case"inet4":
            return r;
          case"ip6":
          case"ipv6":
          case"inet6":
            return a;
          case"idn":
            return u;
          case"url":
            return !this._parts.urn;
          case"urn":
            return !!this._parts.urn;
          case"punycode":
            return d
        }
        return null
      };
      var k = y.protocol, w = y.port, Y = y.hostname;
      y.protocol = function (e, t) {
        if (e && !(e = e.replace(/:(\/\/)?$/, "")).match(i.protocol_expression)) throw new TypeError('Protocol "' + e + "\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");
        return k.call(this, e, t)
      }, y.scheme = y.protocol, y.port = function (e, t) {
        return this._parts.urn ? void 0 === e ? "" : this : (void 0 !== e && (0 === e && (e = null), e && (":" === (e += "").charAt(0) && (e = e.substring(1)), i.ensureValidPort(e))), w.call(this, e, t))
      }, y.hostname = function (e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if (void 0 !== e) {
          var n = {preventInvalidHostname: this._parts.preventInvalidHostname};
          if ("/" !== i.parseHost(e, n)) throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-]');
          e = n.hostname, this._parts.preventInvalidHostname && i.ensureValidHostname(e, this._parts.protocol)
        }
        return Y.call(this, e, t)
      }, y.origin = function (e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if (void 0 === e) {
          var n = this.protocol();
          return this.authority() ? (n ? n + "://" : "") + this.authority() : ""
        }
        var r = i(e);
        return this.protocol(r.protocol()).authority(r.authority()).build(!t), this
      }, y.host = function (e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if (void 0 === e) return this._parts.hostname ? i.buildHost(this._parts) : "";
        if ("/" !== i.parseHost(e, this._parts)) throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-]');
        return this.build(!t), this
      }, y.authority = function (e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if (void 0 === e) return this._parts.hostname ? i.buildAuthority(this._parts) : "";
        if ("/" !== i.parseAuthority(e, this._parts)) throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-]');
        return this.build(!t), this
      }, y.userinfo = function (e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if (void 0 === e) {
          var n = i.buildUserinfo(this._parts);
          return n ? n.substring(0, n.length - 1) : n
        }
        return "@" !== e[e.length - 1] && (e += "@"), i.parseUserinfo(e, this._parts), this.build(!t), this
      }, y.resource = function (e, t) {
        var n;
        return void 0 === e ? this.path() + this.search() + this.hash() : (n = i.parse(e), this._parts.path = n.path, this._parts.query = n.query, this._parts.fragment = n.fragment, this.build(!t), this)
      }, y.subdomain = function (e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if (void 0 === e) {
          if (!this._parts.hostname || this.is("IP")) return "";
          var n = this._parts.hostname.length - this.domain().length - 1;
          return this._parts.hostname.substring(0, n) || ""
        }
        var r = this._parts.hostname.length - this.domain().length, s = this._parts.hostname.substring(0, r),
          o = new RegExp("^" + a(s));
        if (e && "." !== e.charAt(e.length - 1) && (e += "."), -1 !== e.indexOf(":")) throw new TypeError("Domains cannot contain colons");
        return e && i.ensureValidHostname(e, this._parts.protocol), this._parts.hostname = this._parts.hostname.replace(o, e), this.build(!t), this
      }, y.domain = function (e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if ("boolean" == typeof e && (t = e, e = void 0), void 0 === e) {
          if (!this._parts.hostname || this.is("IP")) return "";
          var n = this._parts.hostname.match(/\./g);
          if (n && n.length < 2) return this._parts.hostname;
          var r = this._parts.hostname.length - this.tld(t).length - 1;
          return r = this._parts.hostname.lastIndexOf(".", r - 1) + 1, this._parts.hostname.substring(r) || ""
        }
        if (!e) throw new TypeError("cannot set domain empty");
        if (-1 !== e.indexOf(":")) throw new TypeError("Domains cannot contain colons");
        if (i.ensureValidHostname(e, this._parts.protocol), !this._parts.hostname || this.is("IP")) this._parts.hostname = e; else {
          var s = new RegExp(a(this.domain()) + "$");
          this._parts.hostname = this._parts.hostname.replace(s, e)
        }
        return this.build(!t), this
      }, y.tld = function (e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if ("boolean" == typeof e && (t = e, e = void 0), void 0 === e) {
          if (!this._parts.hostname || this.is("IP")) return "";
          var r = this._parts.hostname.lastIndexOf("."), i = this._parts.hostname.substring(r + 1);
          return !0 !== t && n && n.list[i.toLowerCase()] ? n.get(this._parts.hostname) || i : i
        }
        var s;
        if (!e) throw new TypeError("cannot set TLD empty");
        if (e.match(/[^a-zA-Z0-9-]/)) {
          if (!n || !n.is(e)) throw new TypeError('TLD "' + e + '" contains characters other than [A-Z0-9]');
          s = new RegExp(a(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(s, e)
        } else {
          if (!this._parts.hostname || this.is("IP")) throw new ReferenceError("cannot set TLD on non-domain host");
          s = new RegExp(a(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(s, e)
        }
        return this.build(!t), this
      }, y.directory = function (e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if (void 0 === e || !0 === e) {
          if (!this._parts.path && !this._parts.hostname) return "";
          if ("/" === this._parts.path) return "/";
          var n = this._parts.path.length - this.filename().length - 1,
            r = this._parts.path.substring(0, n) || (this._parts.hostname ? "/" : "");
          return e ? i.decodePath(r) : r
        }
        var s = this._parts.path.length - this.filename().length, o = this._parts.path.substring(0, s),
          u = new RegExp("^" + a(o));
        return this.is("relative") || (e || (e = "/"), "/" !== e.charAt(0) && (e = "/" + e)), e && "/" !== e.charAt(e.length - 1) && (e += "/"), e = i.recodePath(e), this._parts.path = this._parts.path.replace(u, e), this.build(!t), this
      }, y.filename = function (e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if ("string" != typeof e) {
          if (!this._parts.path || "/" === this._parts.path) return "";
          var n = this._parts.path.lastIndexOf("/"), r = this._parts.path.substring(n + 1);
          return e ? i.decodePathSegment(r) : r
        }
        var s = !1;
        "/" === e.charAt(0) && (e = e.substring(1)), e.match(/\.?\//) && (s = !0);
        var o = new RegExp(a(this.filename()) + "$");
        return e = i.recodePath(e), this._parts.path = this._parts.path.replace(o, e), s ? this.normalizePath(t) : this.build(!t), this
      }, y.suffix = function (e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if (void 0 === e || !0 === e) {
          if (!this._parts.path || "/" === this._parts.path) return "";
          var n, r, s = this.filename(), o = s.lastIndexOf(".");
          return -1 === o ? "" : (n = s.substring(o + 1), r = /^[a-z0-9%]+$/i.test(n) ? n : "", e ? i.decodePathSegment(r) : r)
        }
        "." === e.charAt(0) && (e = e.substring(1));
        var u, d = this.suffix();
        if (d) u = e ? new RegExp(a(d) + "$") : new RegExp(a("." + d) + "$"); else {
          if (!e) return this;
          this._parts.path += "." + i.recodePath(e)
        }
        return u && (e = i.recodePath(e), this._parts.path = this._parts.path.replace(u, e)), this.build(!t), this
      }, y.segment = function (e, t, n) {
        var r = this._parts.urn ? ":" : "/", i = this.path(), a = "/" === i.substring(0, 1), s = i.split(r);
        if (void 0 !== e && "number" != typeof e && (n = t, t = e, e = void 0), void 0 !== e && "number" != typeof e) throw new Error('Bad segment "' + e + '", must be 0-based integer');
        if (a && s.shift(), e < 0 && (e = Math.max(s.length + e, 0)), void 0 === t) return void 0 === e ? s : s[e];
        if (null === e || void 0 === s[e]) if (o(t)) {
          s = [];
          for (var u = 0, d = t.length; u < d; u++) (t[u].length || s.length && s[s.length - 1].length) && (s.length && !s[s.length - 1].length && s.pop(), s.push(c(t[u])))
        } else (t || "string" == typeof t) && (t = c(t), "" === s[s.length - 1] ? s[s.length - 1] = t : s.push(t)); else t ? s[e] = c(t) : s.splice(e, 1);
        return a && s.unshift(""), this.path(s.join(r), n)
      }, y.segmentCoded = function (e, t, n) {
        var r, a, s;
        if ("number" != typeof e && (n = t, t = e, e = void 0), void 0 === t) {
          if (r = this.segment(e, t, n), o(r)) for (a = 0, s = r.length; a < s; a++) r[a] = i.decode(r[a]); else r = void 0 !== r ? i.decode(r) : void 0;
          return r
        }
        if (o(t)) for (a = 0, s = t.length; a < s; a++) t[a] = i.encode(t[a]); else t = "string" == typeof t || t instanceof String ? i.encode(t) : t;
        return this.segment(e, t, n)
      };
      var T = y.query;
      return y.query = function (e, t) {
        if (!0 === e) return i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if ("function" == typeof e) {
          var n = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace), r = e.call(this, n);
          return this._parts.query = i.buildQuery(r || n, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), this.build(!t), this
        }
        return void 0 !== e && "string" != typeof e ? (this._parts.query = i.buildQuery(e, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), this.build(!t), this) : T.call(this, e, t)
      }, y.setQuery = function (e, t, n) {
        var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if ("string" == typeof e || e instanceof String) r[e] = void 0 !== t ? t : null; else {
          if ("object" != typeof e) throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
          for (var a in e) g.call(e, a) && (r[a] = e[a])
        }
        return this._parts.query = i.buildQuery(r, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), "string" != typeof e && (n = t), this.build(!n), this
      }, y.addQuery = function (e, t, n) {
        var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return i.addQuery(r, e, void 0 === t ? null : t), this._parts.query = i.buildQuery(r, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), "string" != typeof e && (n = t), this.build(!n), this
      }, y.removeQuery = function (e, t, n) {
        var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return i.removeQuery(r, e, t), this._parts.query = i.buildQuery(r, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), "string" != typeof e && (n = t), this.build(!n), this
      }, y.hasQuery = function (e, t, n) {
        var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return i.hasQuery(r, e, t, n)
      }, y.setSearch = y.setQuery, y.addSearch = y.addQuery, y.removeSearch = y.removeQuery, y.hasSearch = y.hasQuery, y.normalize = function () {
        return this._parts.urn ? this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()
      }, y.normalizeProtocol = function (e) {
        return "string" == typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(), this.build(!e)), this
      }, y.normalizeHostname = function (n) {
        return this._parts.hostname && (this.is("IDN") && e ? this._parts.hostname = e.toASCII(this._parts.hostname) : this.is("IPv6") && t && (this._parts.hostname = t.best(this._parts.hostname)), this._parts.hostname = this._parts.hostname.toLowerCase(), this.build(!n)), this
      }, y.normalizePort = function (e) {
        return "string" == typeof this._parts.protocol && this._parts.port === i.defaultPorts[this._parts.protocol] && (this._parts.port = null, this.build(!e)), this
      }, y.normalizePath = function (e) {
        var t = this._parts.path;
        if (!t) return this;
        if (this._parts.urn) return this._parts.path = i.recodeUrnPath(this._parts.path), this.build(!e), this;
        if ("/" === this._parts.path) return this;
        var n, r, a, s = "";
        for ("/" !== (t = i.recodePath(t)).charAt(0) && (n = !0, t = "/" + t), "/.." !== t.slice(-3) && "/." !== t.slice(-2) || (t += "/"), t = t.replace(/(\/(\.\/)+)|(\/\.$)/g, "/").replace(/\/{2,}/g, "/"), n && (s = t.substring(1).match(/^(\.\.\/)+/) || "") && (s = s[0]); -1 !== (r = t.search(/\/\.\.(\/|$)/));) 0 !== r ? (-1 === (a = t.substring(0, r).lastIndexOf("/")) && (a = r), t = t.substring(0, a) + t.substring(r + 3)) : t = t.substring(3);
        return n && this.is("relative") && (t = s + t.substring(1)), this._parts.path = t, this.build(!e), this
      }, y.normalizePathname = y.normalizePath, y.normalizeQuery = function (e) {
        return "string" == typeof this._parts.query && (this._parts.query.length ? this.query(i.parseQuery(this._parts.query, this._parts.escapeQuerySpace)) : this._parts.query = null, this.build(!e)), this
      }, y.normalizeFragment = function (e) {
        return this._parts.fragment || (this._parts.fragment = null, this.build(!e)), this
      }, y.normalizeSearch = y.normalizeQuery, y.normalizeHash = y.normalizeFragment, y.iso8859 = function () {
        var e = i.encode, t = i.decode;
        i.encode = escape, i.decode = decodeURIComponent;
        try {
          this.normalize()
        } finally {
          i.encode = e, i.decode = t
        }
        return this
      }, y.unicode = function () {
        var e = i.encode, t = i.decode;
        i.encode = f, i.decode = unescape;
        try {
          this.normalize()
        } finally {
          i.encode = e, i.decode = t
        }
        return this
      }, y.readable = function () {
        var t = this.clone();
        t.username("").password("").normalize();
        var n = "";
        if (t._parts.protocol && (n += t._parts.protocol + "://"), t._parts.hostname && (t.is("punycode") && e ? (n += e.toUnicode(t._parts.hostname), t._parts.port && (n += ":" + t._parts.port)) : n += t.host()), t._parts.hostname && t._parts.path && "/" !== t._parts.path.charAt(0) && (n += "/"), n += t.path(!0), t._parts.query) {
          for (var r = "", a = 0, s = t._parts.query.split("&"), o = s.length; a < o; a++) {
            var u = (s[a] || "").split("=");
            r += "&" + i.decodeQuery(u[0], this._parts.escapeQuerySpace).replace(/&/g, "%26"), void 0 !== u[1] && (r += "=" + i.decodeQuery(u[1], this._parts.escapeQuerySpace).replace(/&/g, "%26"))
          }
          n += "?" + r.substring(1)
        }
        return n += i.decodeQuery(t.hash(), !0)
      }, y.absoluteTo = function (e) {
        var t, n, r, a = this.clone(), s = ["protocol", "username", "password", "hostname", "port"];
        if (this._parts.urn) throw new Error("URNs do not have any generally defined hierarchical components");
        if (e instanceof i || (e = new i(e)), a._parts.protocol) return a;
        if (a._parts.protocol = e._parts.protocol, this._parts.hostname) return a;
        for (n = 0; r = s[n]; n++) a._parts[r] = e._parts[r];
        return a._parts.path ? (".." === a._parts.path.substring(-2) && (a._parts.path += "/"), "/" !== a.path().charAt(0) && (t = (t = e.directory()) || (0 === e.path().indexOf("/") ? "/" : ""), a._parts.path = (t ? t + "/" : "") + a._parts.path, a.normalizePath())) : (a._parts.path = e._parts.path, a._parts.query || (a._parts.query = e._parts.query)), a.build(), a
      }, y.relativeTo = function (e) {
        var t, n, r, a, s, o = this.clone().normalize();
        if (o._parts.urn) throw new Error("URNs do not have any generally defined hierarchical components");
        if (e = new i(e).normalize(), t = o._parts, n = e._parts, a = o.path(), s = e.path(), "/" !== a.charAt(0)) throw new Error("URI is already relative");
        if ("/" !== s.charAt(0)) throw new Error("Cannot calculate a URI relative to another relative URI");
        if (t.protocol === n.protocol && (t.protocol = null), t.username !== n.username || t.password !== n.password) return o.build();
        if (null !== t.protocol || null !== t.username || null !== t.password) return o.build();
        if (t.hostname !== n.hostname || t.port !== n.port) return o.build();
        if (t.hostname = null, t.port = null, a === s) return t.path = "", o.build();
        if (!(r = i.commonPath(a, s))) return o.build();
        var u = n.path.substring(r.length).replace(/[^\/]*$/, "").replace(/.*?\//g, "../");
        return t.path = u + t.path.substring(r.length) || "./", o.build()
      }, y.equals = function (e) {
        var t, n, r, a = this.clone(), s = new i(e), u = {}, d = {}, c = {};
        if (a.normalize(), s.normalize(), a.toString() === s.toString()) return !0;
        if (t = a.query(), n = s.query(), a.query(""), s.query(""), a.toString() !== s.toString()) return !1;
        if (t.length !== n.length) return !1;
        u = i.parseQuery(t, this._parts.escapeQuerySpace), d = i.parseQuery(n, this._parts.escapeQuerySpace);
        for (r in u) if (g.call(u, r)) {
          if (o(u[r])) {
            if (!l(u[r], d[r])) return !1
          } else if (u[r] !== d[r]) return !1;
          c[r] = !0
        }
        for (r in d) if (g.call(d, r) && !c[r]) return !1;
        return !0
      }, y.preventInvalidHostname = function (e) {
        return this._parts.preventInvalidHostname = !!e, this
      }, y.duplicateQueryParameters = function (e) {
        return this._parts.duplicateQueryParameters = !!e, this
      }, y.escapeQuerySpace = function (e) {
        return this._parts.escapeQuerySpace = !!e, this
      }, i
    })
  }, hPuz: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("en-gb", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, hng5: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("bm", {
        months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
        monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
        weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
        weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
        weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "MMMM [tile] D [san] YYYY",
          LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
          LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
        },
        calendar: {
          sameDay: "[Bi lɛrɛ] LT",
          nextDay: "[Sini lɛrɛ] LT",
          nextWeek: "dddd [don lɛrɛ] LT",
          lastDay: "[Kunu lɛrɛ] LT",
          lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s kɔnɔ",
          past: "a bɛ %s bɔ",
          s: "sanga dama dama",
          ss: "sekondi %d",
          m: "miniti kelen",
          mm: "miniti %d",
          h: "lɛrɛ kelen",
          hh: "lɛrɛ %d",
          d: "tile kelen",
          dd: "tile %d",
          M: "kalo kelen",
          MM: "kalo %d",
          y: "san kelen",
          yy: "san %d"
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, iNtv: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, n, r) {
        var i = {
          s: ["viensas secunds", "'iensas secunds"],
          ss: [e + " secunds", e + " secunds"],
          m: ["'n míut", "'iens míut"],
          mm: [e + " míuts", e + " míuts"],
          h: ["'n þora", "'iensa þora"],
          hh: [e + " þoras", e + " þoras"],
          d: ["'n ziua", "'iensa ziua"],
          dd: [e + " ziuas", e + " ziuas"],
          M: ["'n mes", "'iens mes"],
          MM: [e + " mesen", e + " mesen"],
          y: ["'n ar", "'iens ar"],
          yy: [e + " ars", e + " ars"]
        };
        return r ? i[n][0] : t ? i[n][0] : i[n][1]
      }

      return e.defineLocale("tzl", {
        months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
        monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
        weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
        weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
        weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM [dallas] YYYY",
          LLL: "D. MMMM [dallas] YYYY HH.mm",
          LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM: function (e) {
          return "d'o" === e.toLowerCase()
        },
        meridiem: function (e, t, n) {
          return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
        },
        calendar: {
          sameDay: "[oxhi à] LT",
          nextDay: "[demà à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[ieiri à] LT",
          lastWeek: "[sür el] dddd [lasteu à] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "osprei %s",
          past: "ja%s",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, iWUB: function (e, t) {
    e.exports = {
      el: "#spark-app",
      lastRefreshedApiTokenAt: null,
      data: {
        user: Spark.state.user,
        teams: Spark.state.teams,
        currentTeam: Spark.state.currentTeam,
        loadingNotifications: !1,
        notifications: null,
        supportForm: new SparkForm({from: "", subject: "", message: ""})
      },
      created: function () {
        var e = this;
        Spark.userId && this.loadDataForAuthenticatedUser(), Spark.userId && Spark.usesApi && this.refreshApiTokenEveryFewMinutes(), Bus.$on("updateUser", function () {
          e.getUser()
        }), Bus.$on("updateUserData", function () {
          e.loadDataForAuthenticatedUser()
        }), Bus.$on("updateTeams", function () {
          e.getTeams()
        }), Bus.$on("showNotifications", function () {
          $("#modal-notifications").modal("show"), e.markNotificationsAsRead()
        }), Bus.$on("showSupportForm", function () {
          e.user && (e.supportForm.from = e.user.email), $("#modal-support").modal("show"), setTimeout(function () {
            $("#support-subject").focus()
          }, 500)
        })
      },
      mounted: function () {
        this.whenReady()
      },
      methods: {
        whenReady: function () {
        }, loadDataForAuthenticatedUser: function () {
          this.getNotifications()
        }, refreshApiTokenEveryFewMinutes: function () {
          var e = this;
          this.lastRefreshedApiTokenAt = moment(), setInterval(function () {
            e.refreshApiToken()
          }, 24e4), setInterval(function () {
            moment().diff(e.lastRefreshedApiTokenAt, "minutes") >= 5 && e.refreshApiToken()
          }, 5e3)
        }, refreshApiToken: function () {
          this.lastRefreshedApiTokenAt = moment(), axios.put("/spark/token")
        }, getUser: function () {
          var e = this;
          axios.get("/user/current").then(function (t) {
            e.user = t.data
          })
        }, getTeams: function () {
          var e = this;
          axios.get("/" + Spark.pluralTeamString).then(function (t) {
            e.teams = t.data
          })
        }, getCurrentTeam: function () {
          var e = this;
          axios.get("/" + Spark.pluralTeamString + "/current").then(function (t) {
            e.currentTeam = t.data
          }).catch(function (e) {
          })
        }, getNotifications: function () {
          var e = this;
          this.loadingNotifications = !0, axios.get("/notifications/recent").then(function (t) {
            e.notifications = t.data, e.loadingNotifications = !1
          })
        }, markNotificationsAsRead: function () {
          this.hasUnreadNotifications && (axios.put("/notifications/read", {notifications: _.pluck(this.notifications.notifications, "id")}), _.each(this.notifications.notifications, function (e) {
            e.read = 1
          }))
        }, sendSupportRequest: function () {
          var e = this;
          Spark.post("/support/email", this.supportForm).then(function () {
            $("#modal-support").modal("hide"), e.showSupportRequestSuccessMessage(), e.supportForm.subject = "", e.supportForm.message = ""
          })
        }, showSupportRequestSuccessMessage: function () {
          swal({
            title: "Got It!",
            text: "We have received your message and will respond soon!",
            type: "success",
            showConfirmButton: !1,
            timer: 2e3
          })
        }
      },
      computed: {
        hasUnreadAnnouncements: function () {
          var e = this;
          return !(!this.notifications || !this.user) && (!(!this.notifications.announcements.length || this.user.last_read_announcements_at) || _.filter(this.notifications.announcements, function (t) {
            return moment.utc(e.user.last_read_announcements_at).isBefore(moment.utc(t.created_at))
          }).length > 0)
        }, hasUnreadNotifications: function () {
          return !!this.notifications && _.filter(this.notifications.notifications, function (e) {
            return !e.read
          }).length > 0
        }
      }
    }
  }, "j+vx": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {
        0: "-ші",
        1: "-ші",
        2: "-ші",
        3: "-ші",
        4: "-ші",
        5: "-ші",
        6: "-шы",
        7: "-ші",
        8: "-ші",
        9: "-шы",
        10: "-шы",
        20: "-шы",
        30: "-шы",
        40: "-шы",
        50: "-ші",
        60: "-шы",
        70: "-ші",
        80: "-ші",
        90: "-шы",
        100: "-ші"
      };
      return e.defineLocale("kk", {
        months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
        monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
        weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
        weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
        weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Бүгін сағат] LT",
          nextDay: "[Ертең сағат] LT",
          nextWeek: "dddd [сағат] LT",
          lastDay: "[Кеше сағат] LT",
          lastWeek: "[Өткен аптаның] dddd [сағат] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ішінде",
          past: "%s бұрын",
          s: "бірнеше секунд",
          ss: "%d секунд",
          m: "бір минут",
          mm: "%d минут",
          h: "бір сағат",
          hh: "%d сағат",
          d: "бір күн",
          dd: "%d күн",
          M: "бір ай",
          MM: "%d ай",
          y: "бір жыл",
          yy: "%d жыл"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
        ordinal: function (e) {
          return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
        },
        week: {dow: 1, doy: 7}
      })
    })
  }, j8cJ: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("ar-kw", {
        months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات"
        },
        week: {dow: 0, doy: 12}
      })
    })
  }, jJ7H: function (e, t) {
    e.exports = {
      data: function () {
        return {selectingPlan: null, planForm: new SparkForm({})}
      }, methods: {
        updateSubscription: function (e) {
          var t = this;
          this.selectingPlan = e, this.planForm.errors.forget(), axios.put(this.urlForPlanUpdate, {plan: e.id}).then(function () {
            Bus.$emit("updateUser"), Bus.$emit("updateTeam")
          }).catch(function (e) {
            422 == e.response.status ? t.planForm.errors.set(e.response.data) : t.planForm.errors.set({plan: ["We were unable to update your subscription. Please contact customer support."]})
          }).finally(function () {
            t.selectingPlan = null
          })
        }, isActivePlan: function (e) {
          return this.activeSubscription && this.activeSubscription.provider_plan == e.id
        }
      }, computed: {
        activePlan: function () {
          var e = this;
          if (this.activeSubscription) return _.find(this.plans, function (t) {
            return t.id == e.activeSubscription.provider_plan
          })
        }, activePlanIsMonthly: function () {
          return this.activePlan && "monthly" == this.activePlan.interval
        }, activeSubscription: function () {
          if (this.billable) {
            var e = _.find(this.billable.subscriptions, function (e) {
              return "default" == e.name
            });
            return void 0 !== e ? e : void 0
          }
        }, subscriptionIsActive: function () {
          return this.activeSubscription && !this.activeSubscription.ends_at
        }, onGenericTrial: function () {
          return this.billable.trial_ends_at && moment.utc(this.billable.trial_ends_at).isAfter(moment.utc())
        }, subscriptionIsOnTrial: function () {
          return !!this.onGenericTrial || this.activeSubscription && this.activeSubscription.trial_ends_at && moment.utc().isBefore(moment.utc(this.activeSubscription.trial_ends_at))
        }, trialEndsAt: function () {
          if (this.subscriptionIsOnTrial) return this.onGenericTrial ? moment.utc(this.billable.trial_ends_at).local().format("MMMM Do, YYYY") : moment.utc(this.activeSubscription.trial_ends_at).local().format("MMMM Do, YYYY")
        }, subscriptionIsOnGracePeriod: function () {
          return this.activeSubscription && this.activeSubscription.ends_at && moment.utc().isBefore(moment.utc(this.activeSubscription.ends_at))
        }, needsSubscription: function () {
          return !this.activeSubscription || this.activeSubscription.ends_at && moment.utc().isAfter(moment.utc(this.activeSubscription.ends_at))
        }, urlForPlanUpdate: function () {
          return this.billingUser ? "/settings/subscription" : "/settings/" + Spark.pluralTeamString + "/" + this.team.id + "/subscription"
        }
      }
    }
  }, jsnI: function (e, t, n) {
    n("3NMv"), n("cboP")
  }, jxEH: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, n) {
        return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
      }

      function n(e, n, r) {
        return e + " " + t(i[r], e, n)
      }

      function r(e, n, r) {
        return t(i[r], e, n)
      }

      var i = {
        ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
        m: "minūtes_minūtēm_minūte_minūtes".split("_"),
        mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
        h: "stundas_stundām_stunda_stundas".split("_"),
        hh: "stundas_stundām_stunda_stundas".split("_"),
        d: "dienas_dienām_diena_dienas".split("_"),
        dd: "dienas_dienām_diena_dienas".split("_"),
        M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        y: "gada_gadiem_gads_gadi".split("_"),
        yy: "gada_gadiem_gads_gadi".split("_")
      };
      return e.defineLocale("lv", {
        months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
        weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
        weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY.",
          LL: "YYYY. [gada] D. MMMM",
          LLL: "YYYY. [gada] D. MMMM, HH:mm",
          LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
        },
        calendar: {
          sameDay: "[Šodien pulksten] LT",
          nextDay: "[Rīt pulksten] LT",
          nextWeek: "dddd [pulksten] LT",
          lastDay: "[Vakar pulksten] LT",
          lastWeek: "[Pagājušā] dddd [pulksten] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "pēc %s", past: "pirms %s", s: function (e, t) {
            return t ? "dažas sekundes" : "dažām sekundēm"
          }, ss: n, m: r, mm: n, h: r, hh: n, d: r, dd: n, M: r, MM: n, y: r, yy: n
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, "k+5o": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",
        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",
        3: "'üncü",
        4: "'üncü",
        100: "'üncü",
        6: "'ncı",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'ıncı",
        90: "'ıncı"
      };
      return e.defineLocale("tr", {
        months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
        monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
        weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
        weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
        weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[bugün saat] LT",
          nextDay: "[yarın saat] LT",
          nextWeek: "[gelecek] dddd [saat] LT",
          lastDay: "[dün] LT",
          lastWeek: "[geçen] dddd [saat] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s sonra",
          past: "%s önce",
          s: "birkaç saniye",
          ss: "%d saniye",
          m: "bir dakika",
          mm: "%d dakika",
          h: "bir saat",
          hh: "%d saat",
          d: "bir gün",
          dd: "%d gün",
          M: "bir ay",
          MM: "%d ay",
          y: "bir yıl",
          yy: "%d yıl"
        },
        dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
        ordinal: function (e) {
          if (0 === e) return e + "'ıncı";
          var n = e % 10;
          return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
        },
        week: {dow: 1, doy: 7}
      })
    })
  }, k0bK: function (e, t) {
    e.exports = {
      props: ["user"], data: function () {
        return {form: new SparkForm({})}
      }, methods: {
        disable: function () {
          Spark.delete("/settings/two-factor-auth", this.form).then(function () {
            Bus.$emit("updateUser")
          })
        }
      }
    }
  }, krPU: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("tzm-latn", {
        months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
        monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
        weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[asdkh g] LT",
          nextDay: "[aska g] LT",
          nextWeek: "dddd [g] LT",
          lastDay: "[assant g] LT",
          lastWeek: "dddd [g] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dadkh s yan %s",
          past: "yan %s",
          s: "imik",
          ss: "%d imik",
          m: "minuḍ",
          mm: "%d minuḍ",
          h: "saɛa",
          hh: "%d tassaɛin",
          d: "ass",
          dd: "%d ossan",
          M: "ayowr",
          MM: "%d iyyirn",
          y: "asgas",
          yy: "%d isgasn"
        },
        week: {dow: 6, doy: 12}
      })
    })
  }, l3G6: function (e, t, n) {
    Spark.forms = {
      register: {},
      updateContactInformation: {},
      updateTeamMember: {}
    }, n("4rNV"), n("ylDc"), $.extend(Spark, n("+y3I"))
  }, lOED: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("bg", {
        months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
        monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
        weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
        weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "D.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[Днес в] LT",
          nextDay: "[Утре в] LT",
          nextWeek: "dddd [в] LT",
          lastDay: "[Вчера в] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return "[В изминалата] dddd [в] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[В изминалия] dddd [в] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "след %s",
          past: "преди %s",
          s: "няколко секунди",
          ss: "%d секунди",
          m: "минута",
          mm: "%d минути",
          h: "час",
          hh: "%d часа",
          d: "ден",
          dd: "%d дни",
          M: "месец",
          MM: "%d месеца",
          y: "година",
          yy: "%d години"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (e) {
          var t = e % 10, n = e % 100;
          return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
        },
        week: {dow: 1, doy: 7}
      })
    })
  }, lbHh: function (e, t, n) {
    var r, i;
    !function (a) {
      if (void 0 === (i = "function" == typeof(r = a) ? r.call(t, n, t, e) : r) || (e.exports = i), !0, e.exports = a(), !!0) {
        var s = window.Cookies, o = window.Cookies = a();
        o.noConflict = function () {
          return window.Cookies = s, o
        }
      }
    }(function () {
      function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n) t[r] = n[r]
        }
        return t
      }

      function t(n) {
        function r(t, i, a) {
          var s;
          if ("undefined" != typeof document) {
            if (arguments.length > 1) {
              if ("number" == typeof(a = e({path: "/"}, r.defaults, a)).expires) {
                var o = new Date;
                o.setMilliseconds(o.getMilliseconds() + 864e5 * a.expires), a.expires = o
              }
              a.expires = a.expires ? a.expires.toUTCString() : "";
              try {
                s = JSON.stringify(i), /^[\{\[]/.test(s) && (i = s)
              } catch (e) {
              }
              i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
              var u = "";
              for (var d in a) a[d] && (u += "; " + d, !0 !== a[d] && (u += "=" + a[d]));
              return document.cookie = t + "=" + i + u
            }
            t || (s = {});
            for (var l = document.cookie ? document.cookie.split("; ") : [], c = /(%[0-9A-Z]{2})+/g, h = 0; h < l.length; h++) {
              var f = l[h].split("="), m = f.slice(1).join("=");
              this.json || '"' !== m.charAt(0) || (m = m.slice(1, -1));
              try {
                var p = f[0].replace(c, decodeURIComponent);
                if (m = n.read ? n.read(m, p) : n(m, p) || m.replace(c, decodeURIComponent), this.json) try {
                  m = JSON.parse(m)
                } catch (e) {
                }
                if (t === p) {
                  s = m;
                  break
                }
                t || (s[p] = m)
              } catch (e) {
              }
            }
            return s
          }
        }

        return r.set = r, r.get = function (e) {
          return r.call(r, e)
        }, r.getJSON = function () {
          return r.apply({json: !0}, [].slice.call(arguments))
        }, r.defaults = {}, r.remove = function (t, n) {
          r(t, "", e(n, {expires: -1}))
        }, r.withConverter = t, r
      }

      return t(function () {
      })
    })
  }, lhkr: function (e, t, n) {
    var r = n("ypE4");
    Vue.component("spark-security", {mixins: [r]})
  }, lrvf: function (e, t, n) {
    var r = n("4JpW");
    Vue.component("spark-team-members", {mixins: [r]})
  }, lv2Q: function (e, t) {
    +function (e) {
      "use strict";
      var t = '[data-dismiss="alert"]', n = function (n) {
        e(n).on("click", t, this.close)
      };
      n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.close = function (t) {
        function r() {
          s.detach().trigger("closed.bs.alert").remove()
        }

        var i = e(this), a = i.attr("data-target");
        a || (a = (a = i.attr("href")) && a.replace(/.*(?=#[^\s]*$)/, ""));
        var s = e("#" === a ? [] : a);
        t && t.preventDefault(), s.length || (s = i.closest(".alert")), s.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r())
      };
      var r = e.fn.alert;
      e.fn.alert = function (t) {
        return this.each(function () {
          var r = e(this), i = r.data("bs.alert");
          i || r.data("bs.alert", i = new n(this)), "string" == typeof t && i[t].call(r)
        })
      }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function () {
        return e.fn.alert = r, this
      }, e(document).on("click.bs.alert.data-api", t, n.prototype.close)
    }(jQuery)
  }, m7yE: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, r, i) {
        var a = function (e) {
          var t = Math.floor(e % 1e3 / 100), r = Math.floor(e % 100 / 10), i = e % 10, a = "";
          t > 0 && (a += n[t] + "vatlh");
          r > 0 && (a += ("" !== a ? " " : "") + n[r] + "maH");
          i > 0 && (a += ("" !== a ? " " : "") + n[i]);
          return "" === a ? "pagh" : a
        }(e);
        switch (r) {
          case"ss":
            return a + " lup";
          case"mm":
            return a + " tup";
          case"hh":
            return a + " rep";
          case"dd":
            return a + " jaj";
          case"MM":
            return a + " jar";
          case"yy":
            return a + " DIS"
        }
      }

      var n = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
      return e.defineLocale("tlh", {
        months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
        monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
        monthsParseExact: !0,
        weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[DaHjaj] LT",
          nextDay: "[wa’leS] LT",
          nextWeek: "LLL",
          lastDay: "[wa’Hu’] LT",
          lastWeek: "LLL",
          sameElse: "L"
        },
        relativeTime: {
          future: function (e) {
            var t = e;
            return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
          },
          past: function (e) {
            var t = e;
            return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
          },
          s: "puS lup",
          ss: t,
          m: "wa’ tup",
          mm: t,
          h: "wa’ rep",
          hh: t,
          d: "wa’ jaj",
          dd: t,
          M: "wa’ jar",
          MM: t,
          y: "wa’ DIS",
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, mXlc: function (e, t) {
    +function (e) {
      "use strict";
      var t = function (e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
      };
      t.VERSION = "3.3.7", t.TRANSITION_DURATION = 150, t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
      }, t.prototype.init = function (t, n, r) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
          click: !1,
          hover: !1,
          focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), a = i.length; a--;) {
          var s = i[a];
          if ("click" == s) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)); else if ("manual" != s) {
            var o = "hover" == s ? "mouseenter" : "focusin", u = "hover" == s ? "mouseleave" : "focusout";
            this.$element.on(o + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(u + "." + this.type, this.options.selector, e.proxy(this.leave, this))
          }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
          trigger: "manual",
          selector: ""
        }) : this.fixTitle()
      }, t.prototype.getDefaults = function () {
        return t.DEFAULTS
      }, t.prototype.getOptions = function (t) {
        return (t = e.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), t
      }, t.prototype.getDelegateOptions = function () {
        var t = {}, n = this.getDefaults();
        return this._options && e.each(this._options, function (e, r) {
          n[e] != r && (t[e] = r)
        }), t
      }, t.prototype.enter = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState) n.hoverState = "in"; else {
          if (clearTimeout(n.timeout), n.hoverState = "in", !n.options.delay || !n.options.delay.show) return n.show();
          n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
          }, n.options.delay.show)
        }
      }, t.prototype.isInStateTrue = function () {
        for (var e in this.inState) if (this.inState[e]) return !0;
        return !1
      }, t.prototype.leave = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
          if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
          n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
          }, n.options.delay.hide)
        }
      }, t.prototype.show = function () {
        var n = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(n);
          var r = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
          if (n.isDefaultPrevented() || !r) return;
          var i = this, a = this.tip(), s = this.getUID(this.type);
          this.setContent(), a.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && a.addClass("fade");
          var o = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
            u = /\s?auto?\s?/i, d = u.test(o);
          d && (o = o.replace(u, "") || "top"), a.detach().css({
            top: 0,
            left: 0,
            display: "block"
          }).addClass(o).data("bs." + this.type, this), this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
          var l = this.getPosition(), c = a[0].offsetWidth, h = a[0].offsetHeight;
          if (d) {
            var f = o, m = this.getPosition(this.$viewport);
            o = "bottom" == o && l.bottom + h > m.bottom ? "top" : "top" == o && l.top - h < m.top ? "bottom" : "right" == o && l.right + c > m.width ? "left" : "left" == o && l.left - c < m.left ? "right" : o, a.removeClass(f).addClass(o)
          }
          var p = this.getCalculatedOffset(o, l, c, h);
          this.applyPlacement(p, o);
          var _ = function () {
            var e = i.hoverState;
            i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == e && i.leave(i)
          };
          e.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", _).emulateTransitionEnd(t.TRANSITION_DURATION) : _()
        }
      }, t.prototype.applyPlacement = function (t, n) {
        var r = this.tip(), i = r[0].offsetWidth, a = r[0].offsetHeight, s = parseInt(r.css("margin-top"), 10),
          o = parseInt(r.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(o) && (o = 0), t.top += s, t.left += o, e.offset.setOffset(r[0], e.extend({
          using: function (e) {
            r.css({top: Math.round(e.top), left: Math.round(e.left)})
          }
        }, t), 0), r.addClass("in");
        var u = r[0].offsetWidth, d = r[0].offsetHeight;
        "top" == n && d != a && (t.top = t.top + a - d);
        var l = this.getViewportAdjustedDelta(n, t, u, d);
        l.left ? t.left += l.left : t.top += l.top;
        var c = /top|bottom/.test(n), h = c ? 2 * l.left - i + u : 2 * l.top - a + d,
          f = c ? "offsetWidth" : "offsetHeight";
        r.offset(t), this.replaceArrow(h, r[0][f], c)
      }, t.prototype.replaceArrow = function (e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
      }, t.prototype.setContent = function () {
        var e = this.tip(), t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
      }, t.prototype.hide = function (n) {
        function r() {
          "in" != i.hoverState && a.detach(), i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), n && n()
        }

        var i = this, a = e(this.$tip), s = e.Event("hide.bs." + this.type);
        if (this.$element.trigger(s), !s.isDefaultPrevented()) return a.removeClass("in"), e.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", r).emulateTransitionEnd(t.TRANSITION_DURATION) : r(), this.hoverState = null, this
      }, t.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
      }, t.prototype.hasContent = function () {
        return this.getTitle()
      }, t.prototype.getPosition = function (t) {
        var n = (t = t || this.$element)[0], r = "BODY" == n.tagName, i = n.getBoundingClientRect();
        null == i.width && (i = e.extend({}, i, {width: i.right - i.left, height: i.bottom - i.top}));
        var a = window.SVGElement && n instanceof window.SVGElement, s = r ? {top: 0, left: 0} : a ? null : t.offset(),
          o = {scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()},
          u = r ? {width: e(window).width(), height: e(window).height()} : null;
        return e.extend({}, i, o, u, s)
      }, t.prototype.getCalculatedOffset = function (e, t, n, r) {
        return "bottom" == e ? {
          top: t.top + t.height,
          left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
          top: t.top - r,
          left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {top: t.top + t.height / 2 - r / 2, left: t.left - n} : {
          top: t.top + t.height / 2 - r / 2,
          left: t.left + t.width
        }
      }, t.prototype.getViewportAdjustedDelta = function (e, t, n, r) {
        var i = {top: 0, left: 0};
        if (!this.$viewport) return i;
        var a = this.options.viewport && this.options.viewport.padding || 0, s = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
          var o = t.top - a - s.scroll, u = t.top + a - s.scroll + r;
          o < s.top ? i.top = s.top - o : u > s.top + s.height && (i.top = s.top + s.height - u)
        } else {
          var d = t.left - a, l = t.left + a + n;
          d < s.left ? i.left = s.left - d : l > s.right && (i.left = s.left + s.width - l)
        }
        return i
      }, t.prototype.getTitle = function () {
        var e = this.$element, t = this.options;
        return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
      }, t.prototype.getUID = function (e) {
        do {
          e += ~~(1e6 * Math.random())
        } while (document.getElementById(e));
        return e
      }, t.prototype.tip = function () {
        if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
      }, t.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
      }, t.prototype.enable = function () {
        this.enabled = !0
      }, t.prototype.disable = function () {
        this.enabled = !1
      }, t.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
      }, t.prototype.toggle = function (t) {
        var n = this;
        t && ((n = e(t.currentTarget).data("bs." + this.type)) || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
      }, t.prototype.destroy = function () {
        var e = this;
        clearTimeout(this.timeout), this.hide(function () {
          e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
        })
      };
      var n = e.fn.tooltip;
      e.fn.tooltip = function (n) {
        return this.each(function () {
          var r = e(this), i = r.data("bs.tooltip"), a = "object" == typeof n && n;
          !i && /destroy|hide/.test(n) || (i || r.data("bs.tooltip", i = new t(this, a)), "string" == typeof n && i[n]())
        })
      }, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function () {
        return e.fn.tooltip = n, this
      }
    }(jQuery)
  }, mtWM: function (e, t, n) {
    e.exports = n("tIFN")
  }, muW7: function (e, t) {
    e.exports = {
      props: ["user", "team", "billableType"], data: function () {
        return {form: new SparkForm({})}
      }, methods: {
        confirmCancellation: function () {
          $("#modal-confirm-cancellation").modal("show")
        }, cancel: function () {
          Spark.delete(this.urlForCancellation, this.form).then(function () {
            Bus.$emit("updateUser"), Bus.$emit("updateTeam"), $("#modal-confirm-cancellation").modal("hide")
          })
        }
      }, computed: {
        urlForCancellation: function () {
          return this.billingUser ? "/settings/subscription" : "/settings/" + Spark.pluralTeamString + "/" + this.team.id + "/subscription"
        }
      }
    }
  }, mypn: function (e, t, n) {
    (function (e, t) {
      !function (e, n) {
        "use strict";

        function r(e) {
          delete o[e]
        }

        function i(e) {
          if (u) setTimeout(i, 0, e); else {
            var t = o[e];
            if (t) {
              u = !0;
              try {
                !function (e) {
                  var t = e.callback, r = e.args;
                  switch (r.length) {
                    case 0:
                      t();
                      break;
                    case 1:
                      t(r[0]);
                      break;
                    case 2:
                      t(r[0], r[1]);
                      break;
                    case 3:
                      t(r[0], r[1], r[2]);
                      break;
                    default:
                      t.apply(n, r)
                  }
                }(t)
              } finally {
                r(e), u = !1
              }
            }
          }
        }

        if (!e.setImmediate) {
          var a, s = 1, o = {}, u = !1, d = e.document, l = Object.getPrototypeOf && Object.getPrototypeOf(e);
          l = l && l.setTimeout ? l : e, "[object process]" === {}.toString.call(e.process) ? a = function (e) {
            t.nextTick(function () {
              i(e)
            })
          } : function () {
            if (e.postMessage && !e.importScripts) {
              var t = !0, n = e.onmessage;
              return e.onmessage = function () {
                t = !1
              }, e.postMessage("", "*"), e.onmessage = n, t
            }
          }() ? function () {
            var t = "setImmediate$" + Math.random() + "$", n = function (n) {
              n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && i(+n.data.slice(t.length))
            };
            e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), a = function (n) {
              e.postMessage(t + n, "*")
            }
          }() : e.MessageChannel ? function () {
            var e = new MessageChannel;
            e.port1.onmessage = function (e) {
              i(e.data)
            }, a = function (t) {
              e.port2.postMessage(t)
            }
          }() : d && "onreadystatechange" in d.createElement("script") ? function () {
            var e = d.documentElement;
            a = function (t) {
              var n = d.createElement("script");
              n.onreadystatechange = function () {
                i(t), n.onreadystatechange = null, e.removeChild(n), n = null
              }, e.appendChild(n)
            }
          }() : a = function (e) {
            setTimeout(i, 0, e)
          }, l.setImmediate = function (e) {
            "function" != typeof e && (e = new Function("" + e));
            for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
            var r = {callback: e, args: t};
            return o[s] = r, a(s), s++
          }, l.clearImmediate = r
        }
      }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(t, n("DuR2"), n("W2nU"))
  }, n6tR: function (e, t) {
    e.exports = {
      props: ["user", "team", "billableType"], data: function () {
        return {invitations: []}
      }, created: function () {
        var e = this;
        this.getInvitations(), this.$on("updateInvitations", function () {
          e.getInvitations()
        })
      }, methods: {
        getInvitations: function () {
          var e = this;
          axios.get("/settings/" + Spark.pluralTeamString + "/" + this.team.id + "/invitations").then(function (t) {
            e.invitations = t.data
          })
        }
      }
    }
  }, nE8X: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("lo", {
        months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
        monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
        weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "ວັນdddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function (e) {
          return "ຕອນແລງ" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
        },
        calendar: {
          sameDay: "[ມື້ນີ້ເວລາ] LT",
          nextDay: "[ມື້ອື່ນເວລາ] LT",
          nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
          lastDay: "[ມື້ວານນີ້ເວລາ] LT",
          lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ອີກ %s",
          past: "%sຜ່ານມາ",
          s: "ບໍ່ເທົ່າໃດວິນາທີ",
          ss: "%d ວິນາທີ",
          m: "1 ນາທີ",
          mm: "%d ນາທີ",
          h: "1 ຊົ່ວໂມງ",
          hh: "%d ຊົ່ວໂມງ",
          d: "1 ມື້",
          dd: "%d ມື້",
          M: "1 ເດືອນ",
          MM: "%d ເດືອນ",
          y: "1 ປີ",
          yy: "%d ປີ"
        },
        dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
        ordinal: function (e) {
          return "ທີ່" + e
        }
      })
    })
  }, nJNd: function (e, t, n) {
    var r = n("WLij");
    Vue.component("spark-current-teams", {mixins: [r]})
  }, nLOz: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("gd", {
        months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
        monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
        monthsParseExact: !0,
        weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
        weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
        weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[An-diugh aig] LT",
          nextDay: "[A-màireach aig] LT",
          nextWeek: "dddd [aig] LT",
          lastDay: "[An-dè aig] LT",
          lastWeek: "dddd [seo chaidh] [aig] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ann an %s",
          past: "bho chionn %s",
          s: "beagan diogan",
          ss: "%d diogan",
          m: "mionaid",
          mm: "%d mionaidean",
          h: "uair",
          hh: "%d uairean",
          d: "latha",
          dd: "%d latha",
          M: "mìos",
          MM: "%d mìosan",
          y: "bliadhna",
          yy: "%d bliadhna"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function (e) {
          return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, nOPC: function (e, t, n) {
    var r, i;
    !function (a, s) {
      "use strict";
      "object" == typeof e && e.exports ? e.exports = s() : void 0 === (i = "function" == typeof(r = s) ? r.call(t, n, t, e) : r) || (e.exports = i)
    }(0, function (e) {
      "use strict";
      var t = e && e.IPv6;
      return {
        best: function (e) {
          var t = e.toLowerCase().split(":"), n = t.length, r = 8;
          "" === t[0] && "" === t[1] && "" === t[2] ? (t.shift(), t.shift()) : "" === t[0] && "" === t[1] ? t.shift() : "" === t[n - 1] && "" === t[n - 2] && t.pop(), -1 !== t[(n = t.length) - 1].indexOf(".") && (r = 7);
          var i;
          for (i = 0; i < n && "" !== t[i]; i++) ;
          if (i < r) for (t.splice(i, 1, "0000"); t.length < r;) t.splice(i, 0, "0000");
          for (var a, s = 0; s < r; s++) {
            a = t[s].split("");
            for (var o = 0; o < 3 && "0" === a[0] && a.length > 1; o++) a.splice(0, 1);
            t[s] = a.join("")
          }
          var u = -1, d = 0, l = 0, c = -1, h = !1;
          for (s = 0; s < r; s++) h ? "0" === t[s] ? l += 1 : (h = !1, l > d && (u = c, d = l)) : "0" === t[s] && (h = !0, c = s, l = 1);
          l > d && (u = c, d = l), d > 1 && t.splice(u, d, ""), n = t.length;
          var f = "";
          for ("" === t[0] && (f = ":"), s = 0; s < n && (f += t[s], s !== n - 1); s++) f += ":";
          return "" === t[n - 1] && (f += ":"), f
        }, noConflict: function () {
          return e.IPv6 === this && (e.IPv6 = t), this
        }
      }
    })
  }, nS2h: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, i, a) {
        var s = "";
        switch (i) {
          case"s":
            return a ? "muutaman sekunnin" : "muutama sekunti";
          case"ss":
            return a ? "sekunnin" : "sekuntia";
          case"m":
            return a ? "minuutin" : "minuutti";
          case"mm":
            s = a ? "minuutin" : "minuuttia";
            break;
          case"h":
            return a ? "tunnin" : "tunti";
          case"hh":
            s = a ? "tunnin" : "tuntia";
            break;
          case"d":
            return a ? "päivän" : "päivä";
          case"dd":
            s = a ? "päivän" : "päivää";
            break;
          case"M":
            return a ? "kuukauden" : "kuukausi";
          case"MM":
            s = a ? "kuukauden" : "kuukautta";
            break;
          case"y":
            return a ? "vuoden" : "vuosi";
          case"yy":
            s = a ? "vuoden" : "vuotta"
        }
        return s = function (e, t) {
          return e < 10 ? t ? r[e] : n[e] : e
        }(e, a) + " " + s
      }

      var n = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
        r = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", n[7], n[8], n[9]];
      return e.defineLocale("fi", {
        months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
        monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
        weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
        weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
        weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD.MM.YYYY",
          LL: "Do MMMM[ta] YYYY",
          LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
          LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
          l: "D.M.YYYY",
          ll: "Do MMM YYYY",
          lll: "Do MMM YYYY, [klo] HH.mm",
          llll: "ddd, Do MMM YYYY, [klo] HH.mm"
        },
        calendar: {
          sameDay: "[tänään] [klo] LT",
          nextDay: "[huomenna] [klo] LT",
          nextWeek: "dddd [klo] LT",
          lastDay: "[eilen] [klo] LT",
          lastWeek: "[viime] dddd[na] [klo] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s päästä",
          past: "%s sitten",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, nZdM: function (e, t) {
    e.exports = {
      props: ["user", "team", "billableType"], data: function () {
        return {
          form: new SparkForm({
            stripe_token: "",
            address: "",
            address_line_2: "",
            city: "",
            state: "",
            zip: "",
            country: "US"
          }), cardForm: new SparkForm({name: "", number: "", cvc: "", month: "", year: ""})
        }
      }, mounted: function () {
        Stripe.setPublishableKey(Spark.stripeKey), this.initializeBillingAddress()
      }, methods: {
        initializeBillingAddress: function () {
          Spark.collectsBillingAddress && (this.form.address = this.billable.billing_address, this.form.address_line_2 = this.billable.billing_address_line_2, this.form.city = this.billable.billing_city, this.form.state = this.billable.billing_state, this.form.zip = this.billable.billing_zip, this.form.country = this.billable.billing_country || "US")
        }, update: function () {
          var e = this;
          this.form.busy = !0, this.form.errors.forget(), this.form.successful = !1, this.cardForm.errors.forget();
          var t = {
            name: this.cardForm.name,
            number: this.cardForm.number,
            cvc: this.cardForm.cvc,
            exp_month: this.cardForm.month,
            exp_year: this.cardForm.year,
            address_line1: this.form.address,
            address_line2: this.form.address_line_2,
            address_city: this.form.city,
            address_state: this.form.state,
            address_zip: this.form.zip,
            address_country: this.form.country
          };
          Stripe.card.createToken(t, function (t, n) {
            n.error ? (e.cardForm.errors.set({number: [n.error.message]}), e.form.busy = !1) : e.sendUpdateToServer(n.id)
          })
        }, sendUpdateToServer: function (e) {
          var t = this;
          this.form.stripe_token = e, Spark.put(this.urlForUpdate, this.form).then(function () {
            Bus.$emit("updateUser"), Bus.$emit("updateTeam"), t.cardForm.name = "", t.cardForm.number = "", t.cardForm.cvc = "", t.cardForm.month = "", t.cardForm.year = "", Spark.collectsBillingAddress || (t.form.zip = "")
          })
        }
      }, computed: {
        billableName: function () {
          return this.billingUser ? this.user.name : this.team.owner.name
        }, urlForUpdate: function () {
          return this.billingUser ? "/settings/payment-method" : "/settings/" + Spark.pluralTeamString + "/" + this.team.id + "/payment-method"
        }, cardIcon: function () {
          if (!this.billable.card_brand) return "fa-cc-stripe";
          switch (this.billable.card_brand) {
            case"American Express":
              return "fa-cc-amex";
            case"Diners Club":
              return "fa-cc-diners-club";
            case"Discover":
              return "fa-cc-discover";
            case"JCB":
              return "fa-cc-jcb";
            case"MasterCard":
              return "fa-cc-mastercard";
            case"Visa":
              return "fa-cc-visa";
            default:
              return "fa-cc-stripe"
          }
        }, placeholder: function () {
          return this.billable.card_last_four ? "************" + this.billable.card_last_four : ""
        }
      }
    }
  }, ntHu: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, n) {
        return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + function (e, t) {
          var n = e.split("_");
          return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
        }({
          ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
          mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
          hh: t ? "година_години_годин" : "годину_години_годин",
          dd: "день_дні_днів",
          MM: "місяць_місяці_місяців",
          yy: "рік_роки_років"
        }[n], +e)
      }

      function n(e) {
        return function () {
          return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
        }
      }

      return e.defineLocale("uk", {
        months: {
          format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
          standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
        },
        monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
        weekdays: function (e, t) {
          var n = {
            nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
            accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
            genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
          };
          return e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
        },
        weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY р.",
          LLL: "D MMMM YYYY р., HH:mm",
          LLLL: "dddd, D MMMM YYYY р., HH:mm"
        },
        calendar: {
          sameDay: n("[Сьогодні "),
          nextDay: n("[Завтра "),
          lastDay: n("[Вчора "),
          nextWeek: n("[У] dddd ["),
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return n("[Минулої] dddd [").call(this);
              case 1:
              case 2:
              case 4:
                return n("[Минулого] dddd [").call(this)
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "за %s",
          past: "%s тому",
          s: "декілька секунд",
          ss: t,
          m: t,
          mm: t,
          h: "годину",
          hh: t,
          d: "день",
          dd: t,
          M: "місяць",
          MM: t,
          y: "рік",
          yy: t
        },
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function (e) {
          return /^(дня|вечора)$/.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
        ordinal: function (e, t) {
          switch (t) {
            case"M":
            case"d":
            case"DDD":
            case"w":
            case"W":
              return e + "-й";
            case"D":
              return e + "-го";
            default:
              return e
          }
        },
        week: {dow: 1, doy: 7}
      })
    })
  }, oCzW: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("mt", {
        months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
        monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
        weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
        weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
        weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Illum fil-]LT",
          nextDay: "[Għada fil-]LT",
          nextWeek: "dddd [fil-]LT",
          lastDay: "[Il-bieraħ fil-]LT",
          lastWeek: "dddd [li għadda] [fil-]LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "f’ %s",
          past: "%s ilu",
          s: "ftit sekondi",
          ss: "%d sekondi",
          m: "minuta",
          mm: "%d minuti",
          h: "siegħa",
          hh: "%d siegħat",
          d: "ġurnata",
          dd: "%d ġranet",
          M: "xahar",
          MM: "%d xhur",
          y: "sena",
          yy: "%d sni"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 1, doy: 4}
      })
    })
  }, oJlt: function (e, t, n) {
    "use strict";
    var r = n("cGG2");
    e.exports = function (e) {
      var t, n, i, a = {};
      return e ? (r.forEach(e.split("\n"), function (e) {
        i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t && (a[t] = a[t] ? a[t] + ", " + n : n)
      }), a) : a
    }
  }, oftQ: function (e, t) {
    +function (e) {
      "use strict";

      function t(t) {
        return this.each(function () {
          var r = e(this), i = r.data("bs.tab");
          i || r.data("bs.tab", i = new n(this)), "string" == typeof t && i[t]()
        })
      }

      var n = function (t) {
        this.element = e(t)
      };
      n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var t = this.element, n = t.closest("ul:not(.dropdown-menu)"), r = t.data("target");
        if (r || (r = (r = t.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
          var i = n.find(".active:last a"), a = e.Event("hide.bs.tab", {relatedTarget: t[0]}),
            s = e.Event("show.bs.tab", {relatedTarget: i[0]});
          if (i.trigger(a), t.trigger(s), !s.isDefaultPrevented() && !a.isDefaultPrevented()) {
            var o = e(r);
            this.activate(t.closest("li"), n), this.activate(o, o.parent(), function () {
              i.trigger({type: "hidden.bs.tab", relatedTarget: t[0]}), t.trigger({
                type: "shown.bs.tab",
                relatedTarget: i[0]
              })
            })
          }
        }
      }, n.prototype.activate = function (t, r, i) {
        function a() {
          s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), o ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }

        var s = r.find("> .active"),
          o = i && e.support.transition && (s.length && s.hasClass("fade") || !!r.find("> .fade").length);
        s.length && o ? s.one("bsTransitionEnd", a).emulateTransitionEnd(n.TRANSITION_DURATION) : a(), s.removeClass("in")
      };
      var r = e.fn.tab;
      e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function () {
        return e.fn.tab = r, this
      };
      var i = function (n) {
        n.preventDefault(), t.call(e(this), "show")
      };
      e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
    }(jQuery)
  }, ok1o: function (e, t) {
    +function (e) {
      "use strict";

      function t(t, r) {
        return this.each(function () {
          var i = e(this), a = i.data("bs.modal"), s = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t);
          a || i.data("bs.modal", a = new n(this, s)), "string" == typeof t ? a[t](r) : s.show && a.show(r)
        })
      }

      var n = function (t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function () {
          this.$element.trigger("loaded.bs.modal")
        }, this))
      };
      n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
      }, n.prototype.toggle = function (e) {
        return this.isShown ? this.hide() : this.show(e)
      }, n.prototype.show = function (t) {
        var r = this, i = e.Event("show.bs.modal", {relatedTarget: t});
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
          r.$element.one("mouseup.dismiss.bs.modal", function (t) {
            e(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
          })
        }), this.backdrop(function () {
          var i = e.support.transition && r.$element.hasClass("fade");
          r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.adjustDialog(), i && r.$element[0].offsetWidth, r.$element.addClass("in"), r.enforceFocus();
          var a = e.Event("shown.bs.modal", {relatedTarget: t});
          i ? r.$dialog.one("bsTransitionEnd", function () {
            r.$element.trigger("focus").trigger(a)
          }).emulateTransitionEnd(n.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(a)
        }))
      }, n.prototype.hide = function (t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
      }, n.prototype.enforceFocus = function () {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function (e) {
          document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
      }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function (e) {
          27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
      }, n.prototype.resize = function () {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
      }, n.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(), this.backdrop(function () {
          e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
      }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
      }, n.prototype.backdrop = function (t) {
        var r = this, i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var a = e.support.transition && i;
          if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function (e) {
            this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
          }, this)), a && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
          a ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var s = function () {
            r.removeBackdrop(), t && t()
          };
          e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else t && t()
      }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
      }, n.prototype.adjustDialog = function () {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
      }, n.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
      }, n.prototype.checkScrollbar = function () {
        var e = window.innerWidth;
        if (!e) {
          var t = document.documentElement.getBoundingClientRect();
          e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
      }, n.prototype.setScrollbar = function () {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
      }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
      }, n.prototype.measureScrollbar = function () {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
      };
      var r = e.fn.modal;
      e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function () {
        return e.fn.modal = r, this
      }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var r = e(this), i = r.attr("href"), a = e(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
          s = a.data("bs.modal") ? "toggle" : e.extend({remote: !/#/.test(i) && i}, a.data(), r.data());
        r.is("a") && n.preventDefault(), a.one("show.bs.modal", function (e) {
          e.isDefaultPrevented() || a.one("hidden.bs.modal", function () {
            r.is(":visible") && r.trigger("focus")
          })
        }), t.call(a, s, this)
      })
    }(jQuery)
  }, oo1B: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("ml", {
        months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
        monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
        monthsParseExact: !0,
        weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
        weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
        weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
        longDateFormat: {
          LT: "A h:mm -നു",
          LTS: "A h:mm:ss -നു",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm -നു",
          LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
        },
        calendar: {
          sameDay: "[ഇന്ന്] LT",
          nextDay: "[നാളെ] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ഇന്നലെ] LT",
          lastWeek: "[കഴിഞ്ഞ] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s കഴിഞ്ഞ്",
          past: "%s മുൻപ്",
          s: "അൽപ നിമിഷങ്ങൾ",
          ss: "%d സെക്കൻഡ്",
          m: "ഒരു മിനിറ്റ്",
          mm: "%d മിനിറ്റ്",
          h: "ഒരു മണിക്കൂർ",
          hh: "%d മണിക്കൂർ",
          d: "ഒരു ദിവസം",
          dd: "%d ദിവസം",
          M: "ഒരു മാസം",
          MM: "%d മാസം",
          y: "ഒരു വർഷം",
          yy: "%d വർഷം"
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
        }
      })
    })
  }, ooba: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("ms", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Esok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kelmarin pukul] LT",
          lastWeek: "dddd [lepas pukul] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lepas",
          s: "beberapa saat",
          ss: "%d saat",
          m: "seminit",
          mm: "%d minit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun"
        },
        week: {dow: 1, doy: 7}
      })
    })
  }, p1b6: function (e, t, n) {
    "use strict";
    var r = n("cGG2");
    e.exports = r.isStandardBrowserEnv() ? {
      write: function (e, t, n, i, a, s) {
        var o = [];
        o.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), r.isString(i) && o.push("path=" + i), r.isString(a) && o.push("domain=" + a), !0 === s && o.push("secure"), document.cookie = o.join("; ")
      }, read: function (e) {
        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
      }, remove: function (e) {
        this.write(e, "", Date.now() - 864e5)
      }
    } : {
      write: function () {
      }, read: function () {
        return null
      }, remove: function () {
      }
    }
  }, pBtG: function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__)
    }
  }, pCid: function (e, t, n) {
    (function (e, r) {
      var i;
      !function (a) {
        function s(e) {
          throw new RangeError(j[e])
        }

        function o(e, t) {
          for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
          return r
        }

        function u(e, t) {
          var n = e.split("@"), r = "";
          n.length > 1 && (r = n[0] + "@", e = n[1]);
          return r + o((e = e.replace(S, ".")).split("."), t).join(".")
        }

        function d(e) {
          for (var t, n, r = [], i = 0, a = e.length; i < a;) (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < a ? 56320 == (64512 & (n = e.charCodeAt(i++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--) : r.push(t);
          return r
        }

        function l(e) {
          return o(e, function (e) {
            var t = "";
            return e > 65535 && (t += A((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += A(e)
          }).join("")
        }

        function c(e) {
          return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : v
        }

        function h(e, t) {
          return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
        }

        function f(e, t, n) {
          var r = 0;
          for (e = n ? P(e / k) : e >> 1, e += P(e / t); e > H * b >> 1; r += v) e = P(e / H);
          return P(r + (H + 1) * e / (e + L))
        }

        function m(e) {
          var t, n, r, i, a, o, u, d, h, m, p = [], _ = e.length, y = 0, L = Y, k = w;
          for ((n = e.lastIndexOf(T)) < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && s("not-basic"), p.push(e.charCodeAt(r));
          for (i = n > 0 ? n + 1 : 0; i < _;) {
            for (a = y, o = 1, u = v; i >= _ && s("invalid-input"), ((d = c(e.charCodeAt(i++))) >= v || d > P((g - y) / o)) && s("overflow"), y += d * o, h = u <= k ? M : u >= k + b ? b : u - k, !(d < h); u += v) o > P(g / (m = v - h)) && s("overflow"), o *= m;
            k = f(y - a, t = p.length + 1, 0 == a), P(y / t) > g - L && s("overflow"), L += P(y / t), y %= t, p.splice(y++, 0, L)
          }
          return l(p)
        }

        function p(e) {
          var t, n, r, i, a, o, u, l, c, m, p, _, y, L, k, D = [];
          for (_ = (e = d(e)).length, t = Y, n = 0, a = w, o = 0; o < _; ++o) (p = e[o]) < 128 && D.push(A(p));
          for (r = i = D.length, i && D.push(T); r < _;) {
            for (u = g, o = 0; o < _; ++o) (p = e[o]) >= t && p < u && (u = p);
            for (u - t > P((g - n) / (y = r + 1)) && s("overflow"), n += (u - t) * y, t = u, o = 0; o < _; ++o) if ((p = e[o]) < t && ++n > g && s("overflow"), p == t) {
              for (l = n, c = v; m = c <= a ? M : c >= a + b ? b : c - a, !(l < m); c += v) k = l - m, L = v - m, D.push(A(h(m + k % L, 0))), l = P(k / L);
              D.push(A(h(l, 0))), a = f(n, y, r == i), n = 0, ++r
            }
            ++n, ++t
          }
          return D.join("")
        }

        "object" == typeof t && t && t.nodeType, "object" == typeof e && e && e.nodeType;
        var _ = "object" == typeof r && r;
        var y, g = 2147483647, v = 36, M = 1, b = 26, L = 38, k = 700, w = 72, Y = 128, T = "-", D = /^xn--/,
          x = /[^\x20-\x7E]/, S = /[\x2E\u3002\uFF0E\uFF61]/g, j = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
          }, H = v - M, P = Math.floor, A = String.fromCharCode;
        y = {
          version: "1.3.2", ucs2: {decode: d, encode: l}, decode: m, encode: p, toASCII: function (e) {
            return u(e, function (e) {
              return x.test(e) ? "xn--" + p(e) : e
            })
          }, toUnicode: function (e) {
            return u(e, function (e) {
              return D.test(e) ? m(e.slice(4).toLowerCase()) : e
            })
          }
        }, void 0 === (i = function () {
          return y
        }.call(t, n, t, e)) || (e.exports = i)
      }()
    }).call(t, n("3IRH")(e), n("DuR2"))
  }, pfs9: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {1: "੧", 2: "੨", 3: "੩", 4: "੪", 5: "੫", 6: "੬", 7: "੭", 8: "੮", 9: "੯", 0: "੦"},
        n = {"੧": "1", "੨": "2", "੩": "3", "੪": "4", "੫": "5", "੬": "6", "੭": "7", "੮": "8", "੯": "9", "੦": "0"};
      return e.defineLocale("pa-in", {
        months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
        monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
        weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
        weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        longDateFormat: {
          LT: "A h:mm ਵਜੇ",
          LTS: "A h:mm:ss ਵਜੇ",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
          LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
        },
        calendar: {
          sameDay: "[ਅਜ] LT",
          nextDay: "[ਕਲ] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ਕਲ] LT",
          lastWeek: "[ਪਿਛਲੇ] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ਵਿੱਚ",
          past: "%s ਪਿਛਲੇ",
          s: "ਕੁਝ ਸਕਿੰਟ",
          ss: "%d ਸਕਿੰਟ",
          m: "ਇਕ ਮਿੰਟ",
          mm: "%d ਮਿੰਟ",
          h: "ਇੱਕ ਘੰਟਾ",
          hh: "%d ਘੰਟੇ",
          d: "ਇੱਕ ਦਿਨ",
          dd: "%d ਦਿਨ",
          M: "ਇੱਕ ਮਹੀਨਾ",
          MM: "%d ਮਹੀਨੇ",
          y: "ਇੱਕ ਸਾਲ",
          yy: "%d ਸਾਲ"
        },
        preparse: function (e) {
          return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
        },
        week: {dow: 0, doy: 6}
      })
    })
  }, pxG4: function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t)
      }
    }
  }, qRfI: function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      return e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
    }
  }, "qUR/": function (e, t) {
    e.exports = {
      data: function () {
        return {tokens: [], availableAbilities: []}
      }, mounted: function () {
        this.getTokens(), this.getAvailableAbilities()
      }, created: function () {
        var e = this;
        this.$on("updateTokens", function () {
          e.getTokens()
        })
      }, methods: {
        getTokens: function () {
          var e = this;
          axios.get("/settings/api/tokens").then(function (t) {
            return e.tokens = t.data
          })
        }, getAvailableAbilities: function () {
          var e = this;
          axios.get("/settings/api/token/abilities").then(function (t) {
            return e.availableAbilities = t.data
          })
        }
      }
    }
  }, qtHC: function (e, t) {
    e.exports = {
      props: ["user", "team"], data: function () {
        return {form: new SparkForm({name: ""})}
      }, mounted: function () {
        this.form.name = this.team.name
      }, methods: {
        update: function () {
          Spark.put("/settings/" + Spark.pluralTeamString + "/" + this.team.id + "/name", this.form).then(function () {
            Bus.$emit("updateTeam"), Bus.$emit("updateTeams")
          })
        }
      }
    }
  }, "r+8P": function (e, t) {
    window.braintreeCheckout = [], e.exports = {
      methods: {
        braintree: function (e) {
          function t(t, n) {
            return e.apply(this, arguments)
          }

          return t.toString = function () {
            return e.toString()
          }, t
        }(function (e, t) {
          braintree.setup(Spark.braintreeToken, "dropin", {
            container: e,
            paypal: {singleUse: !1, locale: "en_us", enableShippingAddress: !1},
            dataCollector: {paypal: !0},
            onReady: function (t) {
              window.braintreeCheckout[e] = t
            },
            onPaymentMethodReceived: t
          })
        }), resetBraintree: function (e, t) {
          var n = this;
          window.braintreeCheckout[e].teardown(function () {
            window.braintreeCheckout[e] = null, n.braintree(e, t)
          })
        }
      }
    }
  }, rIuo: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
        n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
      return e.defineLocale("dv", {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/M/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /މކ|މފ/,
        isPM: function (e) {
          return "މފ" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "މކ" : "މފ"
        },
        calendar: {
          sameDay: "[މިއަދު] LT",
          nextDay: "[މާދަމާ] LT",
          nextWeek: "dddd LT",
          lastDay: "[އިއްޔެ] LT",
          lastWeek: "[ފާއިތުވި] dddd LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ތެރޭގައި %s",
          past: "ކުރިން %s",
          s: "ސިކުންތުކޮޅެއް",
          ss: "d% ސިކުންތު",
          m: "މިނިޓެއް",
          mm: "މިނިޓު %d",
          h: "ގަޑިއިރެއް",
          hh: "ގަޑިއިރު %d",
          d: "ދުވަހެއް",
          dd: "ދުވަސް %d",
          M: "މަހެއް",
          MM: "މަސް %d",
          y: "އަހަރެއް",
          yy: "އަހަރު %d"
        },
        preparse: function (e) {
          return e.replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/,/g, "،")
        },
        week: {dow: 7, doy: 12}
      })
    })
  }, rdLu: function (e, t, n) {
    var r;
    (function () {
      function n(e) {
        return function (t, n, r, i) {
          n = L(n, i, 4);
          var a = !S(t) && b.keys(t), s = (a || t).length, o = e > 0 ? 0 : s - 1;
          return arguments.length < 3 && (r = t[a ? a[o] : o], o += e), function (t, n, r, i, a, s) {
            for (; a >= 0 && a < s; a += e) {
              var o = i ? i[a] : a;
              r = n(r, t[o], o, t)
            }
            return r
          }(t, n, r, a, o, s)
        }
      }

      function i(e) {
        return function (t, n, r) {
          n = k(n, r);
          for (var i = x(t), a = e > 0 ? 0 : i - 1; a >= 0 && a < i; a += e) if (n(t[a], a, t)) return a;
          return -1
        }
      }

      function a(e, t, n) {
        return function (r, i, a) {
          var s = 0, o = x(r);
          if ("number" == typeof a) e > 0 ? s = a >= 0 ? a : Math.max(a + o, s) : o = a >= 0 ? Math.min(a + 1, o) : a + o + 1; else if (n && a && o) return a = n(r, i), r[a] === i ? a : -1;
          if (i != i) return (a = t(f.call(r, s, o), b.isNaN)) >= 0 ? a + s : -1;
          for (a = e > 0 ? s : o - 1; a >= 0 && a < o; a += e) if (r[a] === i) return a;
          return -1
        }
      }

      function s(e, t) {
        var n = C.length, r = e.constructor, i = b.isFunction(r) && r.prototype || l, a = "constructor";
        for (b.has(e, a) && !b.contains(t, a) && t.push(a); n--;) (a = C[n]) in e && e[a] !== i[a] && !b.contains(t, a) && t.push(a)
      }

      var o = this, u = o._, d = Array.prototype, l = Object.prototype, c = Function.prototype, h = d.push, f = d.slice,
        m = l.toString, p = l.hasOwnProperty, _ = Array.isArray, y = Object.keys, g = c.bind, v = Object.create,
        M = function () {
        }, b = function (e) {
          return e instanceof b ? e : this instanceof b ? void(this._wrapped = e) : new b(e)
        };
      void 0 !== e && e.exports && (t = e.exports = b), t._ = b, b.VERSION = "1.8.3";
      var L = function (e, t, n) {
        if (void 0 === t) return e;
        switch (null == n ? 3 : n) {
          case 1:
            return function (n) {
              return e.call(t, n)
            };
          case 2:
            return function (n, r) {
              return e.call(t, n, r)
            };
          case 3:
            return function (n, r, i) {
              return e.call(t, n, r, i)
            };
          case 4:
            return function (n, r, i, a) {
              return e.call(t, n, r, i, a)
            }
        }
        return function () {
          return e.apply(t, arguments)
        }
      }, k = function (e, t, n) {
        return null == e ? b.identity : b.isFunction(e) ? L(e, t, n) : b.isObject(e) ? b.matcher(e) : b.property(e)
      };
      b.iteratee = function (e, t) {
        return k(e, t, 1 / 0)
      };
      var w = function (e, t) {
        return function (n) {
          var r = arguments.length;
          if (r < 2 || null == n) return n;
          for (var i = 1; i < r; i++) for (var a = arguments[i], s = e(a), o = s.length, u = 0; u < o; u++) {
            var d = s[u];
            t && void 0 !== n[d] || (n[d] = a[d])
          }
          return n
        }
      }, Y = function (e) {
        if (!b.isObject(e)) return {};
        if (v) return v(e);
        M.prototype = e;
        var t = new M;
        return M.prototype = null, t
      }, T = function (e) {
        return function (t) {
          return null == t ? void 0 : t[e]
        }
      }, D = Math.pow(2, 53) - 1, x = T("length"), S = function (e) {
        var t = x(e);
        return "number" == typeof t && t >= 0 && t <= D
      };
      b.each = b.forEach = function (e, t, n) {
        t = L(t, n);
        var r, i;
        if (S(e)) for (r = 0, i = e.length; r < i; r++) t(e[r], r, e); else {
          var a = b.keys(e);
          for (r = 0, i = a.length; r < i; r++) t(e[a[r]], a[r], e)
        }
        return e
      }, b.map = b.collect = function (e, t, n) {
        t = k(t, n);
        for (var r = !S(e) && b.keys(e), i = (r || e).length, a = Array(i), s = 0; s < i; s++) {
          var o = r ? r[s] : s;
          a[s] = t(e[o], o, e)
        }
        return a
      }, b.reduce = b.foldl = b.inject = n(1), b.reduceRight = b.foldr = n(-1), b.find = b.detect = function (e, t, n) {
        var r;
        if (void 0 !== (r = S(e) ? b.findIndex(e, t, n) : b.findKey(e, t, n)) && -1 !== r) return e[r]
      }, b.filter = b.select = function (e, t, n) {
        var r = [];
        return t = k(t, n), b.each(e, function (e, n, i) {
          t(e, n, i) && r.push(e)
        }), r
      }, b.reject = function (e, t, n) {
        return b.filter(e, b.negate(k(t)), n)
      }, b.every = b.all = function (e, t, n) {
        t = k(t, n);
        for (var r = !S(e) && b.keys(e), i = (r || e).length, a = 0; a < i; a++) {
          var s = r ? r[a] : a;
          if (!t(e[s], s, e)) return !1
        }
        return !0
      }, b.some = b.any = function (e, t, n) {
        t = k(t, n);
        for (var r = !S(e) && b.keys(e), i = (r || e).length, a = 0; a < i; a++) {
          var s = r ? r[a] : a;
          if (t(e[s], s, e)) return !0
        }
        return !1
      }, b.contains = b.includes = b.include = function (e, t, n, r) {
        return S(e) || (e = b.values(e)), ("number" != typeof n || r) && (n = 0), b.indexOf(e, t, n) >= 0
      }, b.invoke = function (e, t) {
        var n = f.call(arguments, 2), r = b.isFunction(t);
        return b.map(e, function (e) {
          var i = r ? t : e[t];
          return null == i ? i : i.apply(e, n)
        })
      }, b.pluck = function (e, t) {
        return b.map(e, b.property(t))
      }, b.where = function (e, t) {
        return b.filter(e, b.matcher(t))
      }, b.findWhere = function (e, t) {
        return b.find(e, b.matcher(t))
      }, b.max = function (e, t, n) {
        var r, i, a = -1 / 0, s = -1 / 0;
        if (null == t && null != e) for (var o = 0, u = (e = S(e) ? e : b.values(e)).length; o < u; o++) (r = e[o]) > a && (a = r); else t = k(t, n), b.each(e, function (e, n, r) {
          ((i = t(e, n, r)) > s || i === -1 / 0 && a === -1 / 0) && (a = e, s = i)
        });
        return a
      }, b.min = function (e, t, n) {
        var r, i, a = 1 / 0, s = 1 / 0;
        if (null == t && null != e) for (var o = 0, u = (e = S(e) ? e : b.values(e)).length; o < u; o++) (r = e[o]) < a && (a = r); else t = k(t, n), b.each(e, function (e, n, r) {
          ((i = t(e, n, r)) < s || i === 1 / 0 && a === 1 / 0) && (a = e, s = i)
        });
        return a
      }, b.shuffle = function (e) {
        for (var t, n = S(e) ? e : b.values(e), r = n.length, i = Array(r), a = 0; a < r; a++) (t = b.random(0, a)) !== a && (i[a] = i[t]), i[t] = n[a];
        return i
      }, b.sample = function (e, t, n) {
        return null == t || n ? (S(e) || (e = b.values(e)), e[b.random(e.length - 1)]) : b.shuffle(e).slice(0, Math.max(0, t))
      }, b.sortBy = function (e, t, n) {
        return t = k(t, n), b.pluck(b.map(e, function (e, n, r) {
          return {value: e, index: n, criteria: t(e, n, r)}
        }).sort(function (e, t) {
          var n = e.criteria, r = t.criteria;
          if (n !== r) {
            if (n > r || void 0 === n) return 1;
            if (n < r || void 0 === r) return -1
          }
          return e.index - t.index
        }), "value")
      };
      var j = function (e) {
        return function (t, n, r) {
          var i = {};
          return n = k(n, r), b.each(t, function (r, a) {
            var s = n(r, a, t);
            e(i, r, s)
          }), i
        }
      };
      b.groupBy = j(function (e, t, n) {
        b.has(e, n) ? e[n].push(t) : e[n] = [t]
      }), b.indexBy = j(function (e, t, n) {
        e[n] = t
      }), b.countBy = j(function (e, t, n) {
        b.has(e, n) ? e[n]++ : e[n] = 1
      }), b.toArray = function (e) {
        return e ? b.isArray(e) ? f.call(e) : S(e) ? b.map(e, b.identity) : b.values(e) : []
      }, b.size = function (e) {
        return null == e ? 0 : S(e) ? e.length : b.keys(e).length
      }, b.partition = function (e, t, n) {
        t = k(t, n);
        var r = [], i = [];
        return b.each(e, function (e, n, a) {
          (t(e, n, a) ? r : i).push(e)
        }), [r, i]
      }, b.first = b.head = b.take = function (e, t, n) {
        if (null != e) return null == t || n ? e[0] : b.initial(e, e.length - t)
      }, b.initial = function (e, t, n) {
        return f.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
      }, b.last = function (e, t, n) {
        if (null != e) return null == t || n ? e[e.length - 1] : b.rest(e, Math.max(0, e.length - t))
      }, b.rest = b.tail = b.drop = function (e, t, n) {
        return f.call(e, null == t || n ? 1 : t)
      }, b.compact = function (e) {
        return b.filter(e, b.identity)
      };
      var H = function (e, t, n, r) {
        for (var i = [], a = 0, s = r || 0, o = x(e); s < o; s++) {
          var u = e[s];
          if (S(u) && (b.isArray(u) || b.isArguments(u))) {
            t || (u = H(u, t, n));
            var d = 0, l = u.length;
            for (i.length += l; d < l;) i[a++] = u[d++]
          } else n || (i[a++] = u)
        }
        return i
      };
      b.flatten = function (e, t) {
        return H(e, t, !1)
      }, b.without = function (e) {
        return b.difference(e, f.call(arguments, 1))
      }, b.uniq = b.unique = function (e, t, n, r) {
        b.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = k(n, r));
        for (var i = [], a = [], s = 0, o = x(e); s < o; s++) {
          var u = e[s], d = n ? n(u, s, e) : u;
          t ? (s && a === d || i.push(u), a = d) : n ? b.contains(a, d) || (a.push(d), i.push(u)) : b.contains(i, u) || i.push(u)
        }
        return i
      }, b.union = function () {
        return b.uniq(H(arguments, !0, !0))
      }, b.intersection = function (e) {
        for (var t = [], n = arguments.length, r = 0, i = x(e); r < i; r++) {
          var a = e[r];
          if (!b.contains(t, a)) {
            for (var s = 1; s < n && b.contains(arguments[s], a); s++) ;
            s === n && t.push(a)
          }
        }
        return t
      }, b.difference = function (e) {
        var t = H(arguments, !0, !0, 1);
        return b.filter(e, function (e) {
          return !b.contains(t, e)
        })
      }, b.zip = function () {
        return b.unzip(arguments)
      }, b.unzip = function (e) {
        for (var t = e && b.max(e, x).length || 0, n = Array(t), r = 0; r < t; r++) n[r] = b.pluck(e, r);
        return n
      }, b.object = function (e, t) {
        for (var n = {}, r = 0, i = x(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
      }, b.findIndex = i(1), b.findLastIndex = i(-1), b.sortedIndex = function (e, t, n, r) {
        for (var i = (n = k(n, r, 1))(t), a = 0, s = x(e); a < s;) {
          var o = Math.floor((a + s) / 2);
          n(e[o]) < i ? a = o + 1 : s = o
        }
        return a
      }, b.indexOf = a(1, b.findIndex, b.sortedIndex), b.lastIndexOf = a(-1, b.findLastIndex), b.range = function (e, t, n) {
        null == t && (t = e || 0, e = 0), n = n || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), a = 0; a < r; a++, e += n) i[a] = e;
        return i
      };
      var P = function (e, t, n, r, i) {
        if (!(r instanceof t)) return e.apply(n, i);
        var a = Y(e.prototype), s = e.apply(a, i);
        return b.isObject(s) ? s : a
      };
      b.bind = function (e, t) {
        if (g && e.bind === g) return g.apply(e, f.call(arguments, 1));
        if (!b.isFunction(e)) throw new TypeError("Bind must be called on a function");
        var n = f.call(arguments, 2), r = function () {
          return P(e, r, t, this, n.concat(f.call(arguments)))
        };
        return r
      }, b.partial = function (e) {
        var t = f.call(arguments, 1), n = function () {
          for (var r = 0, i = t.length, a = Array(i), s = 0; s < i; s++) a[s] = t[s] === b ? arguments[r++] : t[s];
          for (; r < arguments.length;) a.push(arguments[r++]);
          return P(e, n, this, this, a)
        };
        return n
      }, b.bindAll = function (e) {
        var t, n, r = arguments.length;
        if (r <= 1) throw new Error("bindAll must be passed function names");
        for (t = 1; t < r; t++) e[n = arguments[t]] = b.bind(e[n], e);
        return e
      }, b.memoize = function (e, t) {
        var n = function (r) {
          var i = n.cache, a = "" + (t ? t.apply(this, arguments) : r);
          return b.has(i, a) || (i[a] = e.apply(this, arguments)), i[a]
        };
        return n.cache = {}, n
      }, b.delay = function (e, t) {
        var n = f.call(arguments, 2);
        return setTimeout(function () {
          return e.apply(null, n)
        }, t)
      }, b.defer = b.partial(b.delay, b, 1), b.throttle = function (e, t, n) {
        var r, i, a, s = null, o = 0;
        n || (n = {});
        var u = function () {
          o = !1 === n.leading ? 0 : b.now(), s = null, a = e.apply(r, i), s || (r = i = null)
        };
        return function () {
          var d = b.now();
          o || !1 !== n.leading || (o = d);
          var l = t - (d - o);
          return r = this, i = arguments, l <= 0 || l > t ? (s && (clearTimeout(s), s = null), o = d, a = e.apply(r, i), s || (r = i = null)) : s || !1 === n.trailing || (s = setTimeout(u, l)), a
        }
      }, b.debounce = function (e, t, n) {
        var r, i, a, s, o, u = function () {
          var d = b.now() - s;
          d < t && d >= 0 ? r = setTimeout(u, t - d) : (r = null, n || (o = e.apply(a, i), r || (a = i = null)))
        };
        return function () {
          a = this, i = arguments, s = b.now();
          var d = n && !r;
          return r || (r = setTimeout(u, t)), d && (o = e.apply(a, i), a = i = null), o
        }
      }, b.wrap = function (e, t) {
        return b.partial(t, e)
      }, b.negate = function (e) {
        return function () {
          return !e.apply(this, arguments)
        }
      }, b.compose = function () {
        var e = arguments, t = e.length - 1;
        return function () {
          for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
          return r
        }
      }, b.after = function (e, t) {
        return function () {
          if (--e < 1) return t.apply(this, arguments)
        }
      }, b.before = function (e, t) {
        var n;
        return function () {
          return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
        }
      }, b.once = b.partial(b.before, 2);
      var A = !{toString: null}.propertyIsEnumerable("toString"),
        C = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
      b.keys = function (e) {
        if (!b.isObject(e)) return [];
        if (y) return y(e);
        var t = [];
        for (var n in e) b.has(e, n) && t.push(n);
        return A && s(e, t), t
      }, b.allKeys = function (e) {
        if (!b.isObject(e)) return [];
        var t = [];
        for (var n in e) t.push(n);
        return A && s(e, t), t
      }, b.values = function (e) {
        for (var t = b.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
        return r
      }, b.mapObject = function (e, t, n) {
        t = k(t, n);
        for (var r, i = b.keys(e), a = i.length, s = {}, o = 0; o < a; o++) s[r = i[o]] = t(e[r], r, e);
        return s
      }, b.pairs = function (e) {
        for (var t = b.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
        return r
      }, b.invert = function (e) {
        for (var t = {}, n = b.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
        return t
      }, b.functions = b.methods = function (e) {
        var t = [];
        for (var n in e) b.isFunction(e[n]) && t.push(n);
        return t.sort()
      }, b.extend = w(b.allKeys), b.extendOwn = b.assign = w(b.keys), b.findKey = function (e, t, n) {
        t = k(t, n);
        for (var r, i = b.keys(e), a = 0, s = i.length; a < s; a++) if (r = i[a], t(e[r], r, e)) return r
      }, b.pick = function (e, t, n) {
        var r, i, a = {}, s = e;
        if (null == s) return a;
        b.isFunction(t) ? (i = b.allKeys(s), r = L(t, n)) : (i = H(arguments, !1, !1, 1), r = function (e, t, n) {
          return t in n
        }, s = Object(s));
        for (var o = 0, u = i.length; o < u; o++) {
          var d = i[o], l = s[d];
          r(l, d, s) && (a[d] = l)
        }
        return a
      }, b.omit = function (e, t, n) {
        if (b.isFunction(t)) t = b.negate(t); else {
          var r = b.map(H(arguments, !1, !1, 1), String);
          t = function (e, t) {
            return !b.contains(r, t)
          }
        }
        return b.pick(e, t, n)
      }, b.defaults = w(b.allKeys, !0), b.create = function (e, t) {
        var n = Y(e);
        return t && b.extendOwn(n, t), n
      }, b.clone = function (e) {
        return b.isObject(e) ? b.isArray(e) ? e.slice() : b.extend({}, e) : e
      }, b.tap = function (e, t) {
        return t(e), e
      }, b.isMatch = function (e, t) {
        var n = b.keys(t), r = n.length;
        if (null == e) return !r;
        for (var i = Object(e), a = 0; a < r; a++) {
          var s = n[a];
          if (t[s] !== i[s] || !(s in i)) return !1
        }
        return !0
      };
      var O = function (e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof b && (e = e._wrapped), t instanceof b && (t = t._wrapped);
        var i = m.call(e);
        if (i !== m.call(t)) return !1;
        switch (i) {
          case"[object RegExp]":
          case"[object String]":
            return "" + e == "" + t;
          case"[object Number]":
            return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
          case"[object Date]":
          case"[object Boolean]":
            return +e == +t
        }
        var a = "[object Array]" === i;
        if (!a) {
          if ("object" != typeof e || "object" != typeof t) return !1;
          var s = e.constructor, o = t.constructor;
          if (s !== o && !(b.isFunction(s) && s instanceof s && b.isFunction(o) && o instanceof o) && "constructor" in e && "constructor" in t) return !1
        }
        n = n || [], r = r || [];
        for (var u = n.length; u--;) if (n[u] === e) return r[u] === t;
        if (n.push(e), r.push(t), a) {
          if ((u = e.length) !== t.length) return !1;
          for (; u--;) if (!O(e[u], t[u], n, r)) return !1
        } else {
          var d, l = b.keys(e);
          if (u = l.length, b.keys(t).length !== u) return !1;
          for (; u--;) if (d = l[u], !b.has(t, d) || !O(e[d], t[d], n, r)) return !1
        }
        return n.pop(), r.pop(), !0
      };
      b.isEqual = function (e, t) {
        return O(e, t)
      }, b.isEmpty = function (e) {
        return null == e || (S(e) && (b.isArray(e) || b.isString(e) || b.isArguments(e)) ? 0 === e.length : 0 === b.keys(e).length)
      }, b.isElement = function (e) {
        return !(!e || 1 !== e.nodeType)
      }, b.isArray = _ || function (e) {
        return "[object Array]" === m.call(e)
      }, b.isObject = function (e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
      }, b.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (e) {
        b["is" + e] = function (t) {
          return m.call(t) === "[object " + e + "]"
        }
      }), b.isArguments(arguments) || (b.isArguments = function (e) {
        return b.has(e, "callee")
      }), "function" != typeof/./ && "object" != typeof Int8Array && (b.isFunction = function (e) {
        return "function" == typeof e || !1
      }), b.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
      }, b.isNaN = function (e) {
        return b.isNumber(e) && e !== +e
      }, b.isBoolean = function (e) {
        return !0 === e || !1 === e || "[object Boolean]" === m.call(e)
      }, b.isNull = function (e) {
        return null === e
      }, b.isUndefined = function (e) {
        return void 0 === e
      }, b.has = function (e, t) {
        return null != e && p.call(e, t)
      }, b.noConflict = function () {
        return o._ = u, this
      }, b.identity = function (e) {
        return e
      }, b.constant = function (e) {
        return function () {
          return e
        }
      }, b.noop = function () {
      }, b.property = T, b.propertyOf = function (e) {
        return null == e ? function () {
        } : function (t) {
          return e[t]
        }
      }, b.matcher = b.matches = function (e) {
        return e = b.extendOwn({}, e), function (t) {
          return b.isMatch(t, e)
        }
      }, b.times = function (e, t, n) {
        var r = Array(Math.max(0, e));
        t = L(t, n, 1);
        for (var i = 0; i < e; i++) r[i] = t(i);
        return r
      }, b.random = function (e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
      }, b.now = Date.now || function () {
        return (new Date).getTime()
      };
      var E = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"}, F = b.invert(E),
        $ = function (e) {
          var t = function (t) {
            return e[t]
          }, n = "(?:" + b.keys(e).join("|") + ")", r = RegExp(n), i = RegExp(n, "g");
          return function (e) {
            return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
          }
        };
      b.escape = $(E), b.unescape = $(F), b.result = function (e, t, n) {
        var r = null == e ? void 0 : e[t];
        return void 0 === r && (r = n), b.isFunction(r) ? r.call(e) : r
      };
      var I = 0;
      b.uniqueId = function (e) {
        var t = ++I + "";
        return e ? e + t : t
      }, b.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      };
      var N = /(.)^/, R = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"},
        W = /\\|'|\r|\n|\u2028|\u2029/g, z = function (e) {
          return "\\" + R[e]
        };
      b.template = function (e, t, n) {
        !t && n && (t = n), t = b.defaults({}, t, b.templateSettings);
        var r = RegExp([(t.escape || N).source, (t.interpolate || N).source, (t.evaluate || N).source].join("|") + "|$", "g"),
          i = 0, a = "__p+='";
        e.replace(r, function (t, n, r, s, o) {
          return a += e.slice(i, o).replace(W, z), i = o + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : s && (a += "';\n" + s + "\n__p+='"), t
        }), a += "';\n", t.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
          var s = new Function(t.variable || "obj", "_", a)
        } catch (e) {
          throw e.source = a, e
        }
        var o = function (e) {
          return s.call(this, e, b)
        }, u = t.variable || "obj";
        return o.source = "function(" + u + "){\n" + a + "}", o
      }, b.chain = function (e) {
        var t = b(e);
        return t._chain = !0, t
      };
      var U = function (e, t) {
        return e._chain ? b(t).chain() : t
      };
      b.mixin = function (e) {
        b.each(b.functions(e), function (t) {
          var n = b[t] = e[t];
          b.prototype[t] = function () {
            var e = [this._wrapped];
            return h.apply(e, arguments), U(this, n.apply(b, e))
          }
        })
      }, b.mixin(b), b.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = d[e];
        b.prototype[e] = function () {
          var n = this._wrapped;
          return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], U(this, n)
        }
      }), b.each(["concat", "join", "slice"], function (e) {
        var t = d[e];
        b.prototype[e] = function () {
          return U(this, t.apply(this._wrapped, arguments))
        }
      }), b.prototype.value = function () {
        return this._wrapped
      }, b.prototype.valueOf = b.prototype.toJSON = b.prototype.value, b.prototype.toString = function () {
        return "" + this._wrapped
      }, void 0 === (r = function () {
        return b
      }.apply(t, [])) || (e.exports = r)
    }).call(this)
  }, rj03: function (e, t, n) {
    var r = n("qUR/");
    Vue.component("spark-api", {mixins: [r]})
  }, rtsW: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {1: "૧", 2: "૨", 3: "૩", 4: "૪", 5: "૫", 6: "૬", 7: "૭", 8: "૮", 9: "૯", 0: "૦"},
        n = {"૧": "1", "૨": "2", "૩": "3", "૪": "4", "૫": "5", "૬": "6", "૭": "7", "૮": "8", "૯": "9", "૦": "0"};
      return e.defineLocale("gu", {
        months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
        monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
        monthsParseExact: !0,
        weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
        weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
        weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
        longDateFormat: {
          LT: "A h:mm વાગ્યે",
          LTS: "A h:mm:ss વાગ્યે",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm વાગ્યે",
          LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
        },
        calendar: {
          sameDay: "[આજ] LT",
          nextDay: "[કાલે] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ગઇકાલે] LT",
          lastWeek: "[પાછલા] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s મા",
          past: "%s પેહલા",
          s: "અમુક પળો",
          ss: "%d સેકંડ",
          m: "એક મિનિટ",
          mm: "%d મિનિટ",
          h: "એક કલાક",
          hh: "%d કલાક",
          d: "એક દિવસ",
          dd: "%d દિવસ",
          M: "એક મહિનો",
          MM: "%d મહિનો",
          y: "એક વર્ષ",
          yy: "%d વર્ષ"
        },
        preparse: function (e) {
          return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
        },
        week: {dow: 0, doy: 6}
      })
    })
  }, "sV/x": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = {
      props: ["user"], data: function () {
        return {releases: [], licenses: []}
      }, created: function () {
        this.getReleases(), this.getLicenses()
      }, methods: {
        getReleases: function () {
          var e = this;
          axios.get("/api/releases").then(function (t) {
            e.releases = t.data
          })
        }, getLicenses: function () {
          var e = this;
          axios.get("/api/licenses").then(function (t) {
            e.licenses = t.data
          })
        }, userCanDownload: function (e) {
          return void 0 !== _.find(this.licenses, function (t) {
            return t.series >= e.series
          })
        }, downloadUrlFor: function (e) {
          return "/releases/" + e.id + "/download"
        }
      }
    }, i = {
      props: ["user"], data: function () {
        return {
          licenses: [],
          upgradingLicense: null,
          form: new SparkForm({name: "", type: "single", terms: !1}),
          upgradeForm: new SparkForm({})
        }
      }, created: function () {
        this.getLicenses()
      }, methods: {
        getLicenses: function () {
          var e = this;
          axios.get("/api/licenses").then(function (t) {
            e.licenses = t.data
          })
        }, purchase: function () {
          var e = this;
          Spark.post("/api/licenses", this.form).then(function (t) {
            e.licenses.unshift(t), e.form.name = "", e.form.type = "single", e.form.terms = !1, $("#modal-license-purchased").modal("show")
          })
        }, confirmLicenseUpgrade: function (e) {
          this.upgradingLicense = e, $("#modal-confirm-license-upgrade").modal("show")
        }, upgradeLicense: function () {
          var e = this;
          Spark.post("/api/upgrade/" + this.upgradingLicense.id, this.upgradeForm).then(function () {
            e.getLicenses(), $("#modal-confirm-license-upgrade").modal("hide"), $("#modal-license-purchased").modal("show")
          })
        }
      }, computed: {
        hasUnlimitedAureliusLicense: function () {
          return 0 != this.licenses.length && _.filter(this.licenses, function (e) {
            return 2 == e.series && "unlimited" == e.type
          }).length > 0
        }, upgradePrice: function () {
          return this.upgradingLicense ? "unlimited" == this.upgradingLicense.type ? 149 : 49 : 0
        }
      }
    }, a = {
      props: ["user"], data: function () {
        return {licenses: []}
      }, created: function () {
        this.getLicenses()
      }, methods: {
        getLicenses: function () {
          var e = this;
          axios.get("/api/licenses").then(function (t) {
            e.licenses = t.data
          })
        }, disconnect: function () {
          var e = this;
          axios.delete("/github").then(function (t) {
            e.$dispatch("updateUser")
          })
        }
      }, computed: {
        userHasLicensesForSpark1: function () {
          return void 0 !== _.find(this.licenses, function (e) {
            return 1 === e.series
          })
        }, userHasLicensesForSparkAurelius: function () {
          return void 0 !== _.find(this.licenses, function (e) {
            return 2 === e.series
          })
        }
      }
    }, s = {
      data: function () {
        return {
          releases: [],
          updatingRelease: null,
          deletingRelease: null,
          createForm: new SparkForm({name: "", notes: ""}),
          updateForm: new SparkForm({name: "", notes: ""}),
          deleteReleaseForm: new SparkForm({})
        }
      }, created: function () {
        this.getReleases()
      }, methods: {
        getReleases: function () {
          var e = this;
          axios.get("/api/releases").then(function (t) {
            e.releases = t.data
          })
        }, create: function () {
          var e = this;
          Spark.post("/api/releases", this.createForm).then(function (t) {
            e.releases.unshift(t), e.createForm.name = "", e.createForm.notes = ""
          })
        }, editRelease: function (e) {
          this.updatingRelease = e, this.updateForm.name = e.name, this.updateForm.notes = e.notes, $("#modal-update-release").modal("show")
        }, update: function () {
          var e = this;
          Spark.put("/api/releases/" + this.updatingRelease.id, this.updateForm).then(function (t) {
            e.getReleases(), $("#modal-update-release").modal("hide")
          })
        }, confirmReleaseDeletion: function (e) {
          this.deletingRelease = e, $("#modal-delete-release").modal("show")
        }, deleteRelease: function () {
          var e = this;
          Spark.delete("/api/releases/" + this.deletingRelease.id, this.deleteReleaseForm), $("#modal-delete-release").modal("hide"), this.releases = _.reject(this.releases, function (t) {
            return t.id === e.deletingRelease.id
          })
        }
      }
    };
    n("Getl"), n("jsnI"), Vue.component("releases", r), Vue.component("licenses", i), Vue.component("docs", {}), Vue.component("settings-github", a), Vue.component("kiosk-releases", s);
    new Vue({mixins: [n("iWUB")]})
  }, se3Y: function (e, t, n) {
    "use strict";

    function r() {
    }

    function i(e) {
      if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
      if ("function" != typeof e) throw new TypeError("Promise constructor's argument is not a function");
      this._40 = 0, this._65 = 0, this._55 = null, this._72 = null, e !== r && l(e, this)
    }

    function a(e, t) {
      for (; 3 === e._65;) e = e._55;
      if (i._37 && i._37(e), 0 === e._65) return 0 === e._40 ? (e._40 = 1, void(e._72 = t)) : 1 === e._40 ? (e._40 = 2, void(e._72 = [e._72, t])) : void e._72.push(t);
      !function (e, t) {
        c(function () {
          var n = 1 === e._65 ? t.onFulfilled : t.onRejected;
          if (null !== n) {
            var r = function (e, t) {
              try {
                return e(t)
              } catch (e) {
                return h = e, f
              }
            }(n, e._55);
            r === f ? o(t.promise, h) : s(t.promise, r)
          } else 1 === e._65 ? s(t.promise, e._55) : o(t.promise, e._55)
        })
      }(e, t)
    }

    function s(e, t) {
      if (t === e) return o(e, new TypeError("A promise cannot be resolved with itself."));
      if (t && ("object" == typeof t || "function" == typeof t)) {
        var n = function (e) {
          try {
            return e.then
          } catch (e) {
            return h = e, f
          }
        }(t);
        if (n === f) return o(e, h);
        if (n === e.then && t instanceof i) return e._65 = 3, e._55 = t, void u(e);
        if ("function" == typeof n) return void l(n.bind(t), e)
      }
      e._65 = 1, e._55 = t, u(e)
    }

    function o(e, t) {
      e._65 = 2, e._55 = t, i._87 && i._87(e, t), u(e)
    }

    function u(e) {
      if (1 === e._40 && (a(e, e._72), e._72 = null), 2 === e._40) {
        for (var t = 0; t < e._72.length; t++) a(e, e._72[t]);
        e._72 = null
      }
    }

    function d(e, t, n) {
      this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
    }

    function l(e, t) {
      var n = !1, r = function (e, t, n) {
        try {
          e(t, n)
        } catch (e) {
          return h = e, f
        }
      }(e, function (e) {
        n || (n = !0, s(t, e))
      }, function (e) {
        n || (n = !0, o(t, e))
      });
      n || r !== f || (n = !0, o(t, h))
    }

    var c = n("3Cgm"), h = null, f = {};
    e.exports = i, i._37 = null, i._87 = null, i._61 = r, i.prototype.then = function (e, t) {
      if (this.constructor !== i) return function (e, t, n) {
        return new e.constructor(function (s, o) {
          var u = new i(r);
          u.then(s, o), a(e, new d(t, n, u))
        })
      }(this, e, t);
      var n = new i(r);
      return a(this, new d(e, t, n)), n
    }
  }, sqLM: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("eu", {
        months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
        monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
        monthsParseExact: !0,
        weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
        weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
        weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY[ko] MMMM[ren] D[a]",
          LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
          LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
          l: "YYYY-M-D",
          ll: "YYYY[ko] MMM D[a]",
          lll: "YYYY[ko] MMM D[a] HH:mm",
          llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
        },
        calendar: {
          sameDay: "[gaur] LT[etan]",
          nextDay: "[bihar] LT[etan]",
          nextWeek: "dddd LT[etan]",
          lastDay: "[atzo] LT[etan]",
          lastWeek: "[aurreko] dddd LT[etan]",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s barru",
          past: "duela %s",
          s: "segundo batzuk",
          ss: "%d segundo",
          m: "minutu bat",
          mm: "%d minutu",
          h: "ordu bat",
          hh: "%d ordu",
          d: "egun bat",
          dd: "%d egun",
          M: "hilabete bat",
          MM: "%d hilabete",
          y: "urte bat",
          yy: "%d urte"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
      })
    })
  }, ssxj: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e) {
        return e > 1 && e < 5 && 1 != ~~(e / 10)
      }

      function n(e, n, r, i) {
        var a = e + " ";
        switch (r) {
          case"s":
            return n || i ? "pár sekund" : "pár sekundami";
          case"ss":
            return n || i ? a + (t(e) ? "sekundy" : "sekund") : a + "sekundami";
          case"m":
            return n ? "minuta" : i ? "minutu" : "minutou";
          case"mm":
            return n || i ? a + (t(e) ? "minuty" : "minut") : a + "minutami";
          case"h":
            return n ? "hodina" : i ? "hodinu" : "hodinou";
          case"hh":
            return n || i ? a + (t(e) ? "hodiny" : "hodin") : a + "hodinami";
          case"d":
            return n || i ? "den" : "dnem";
          case"dd":
            return n || i ? a + (t(e) ? "dny" : "dní") : a + "dny";
          case"M":
            return n || i ? "měsíc" : "měsícem";
          case"MM":
            return n || i ? a + (t(e) ? "měsíce" : "měsíců") : a + "měsíci";
          case"y":
            return n || i ? "rok" : "rokem";
          case"yy":
            return n || i ? a + (t(e) ? "roky" : "let") : a + "lety"
        }
      }

      var r = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
        i = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
      return e.defineLocale("cs", {
        months: r,
        monthsShort: i,
        monthsParse: function (e, t) {
          var n, r = [];
          for (n = 0; n < 12; n++) r[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
          return r
        }(r, i),
        shortMonthsParse: function (e) {
          var t, n = [];
          for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
          return n
        }(i),
        longMonthsParse: function (e) {
          var t, n = [];
          for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
          return n
        }(r),
        weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
        weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
        weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd D. MMMM YYYY H:mm",
          l: "D. M. YYYY"
        },
        calendar: {
          sameDay: "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[v neděli v] LT";
              case 1:
              case 2:
                return "[v] dddd [v] LT";
              case 3:
                return "[ve středu v] LT";
              case 4:
                return "[ve čtvrtek v] LT";
              case 5:
                return "[v pátek v] LT";
              case 6:
                return "[v sobotu v] LT"
            }
          }, lastDay: "[včera v] LT", lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[minulou neděli v] LT";
              case 1:
              case 2:
                return "[minulé] dddd [v] LT";
              case 3:
                return "[minulou středu v] LT";
              case 4:
              case 5:
                return "[minulý] dddd [v] LT";
              case 6:
                return "[minulou sobotu v] LT"
            }
          }, sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "před %s",
          s: n,
          ss: n,
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, svD2: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {
        words: {
          ss: ["sekund", "sekunda", "sekundi"],
          m: ["jedan minut", "jednog minuta"],
          mm: ["minut", "minuta", "minuta"],
          h: ["jedan sat", "jednog sata"],
          hh: ["sat", "sata", "sati"],
          dd: ["dan", "dana", "dana"],
          MM: ["mjesec", "mjeseca", "mjeseci"],
          yy: ["godina", "godine", "godina"]
        }, correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
        }, translate: function (e, n, r) {
          var i = t.words[r];
          return 1 === r.length ? n ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i)
        }
      };
      return e.defineLocale("me", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedjelju] [u] LT";
              case 3:
                return "[u] [srijedu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT"
            }
          }, lastDay: "[juče u] LT", lastWeek: function () {
            return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
          }, sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "nekoliko sekundi",
          ss: t.translate,
          m: t.translate,
          mm: t.translate,
          h: t.translate,
          hh: t.translate,
          d: "dan",
          dd: t.translate,
          M: "mjesec",
          MM: t.translate,
          y: "godinu",
          yy: t.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
      })
    })
  }, t8qj: function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r) {
      return e.config = t, n && (e.code = n), e.response = r, e
    }
  }, tIFN: function (e, t, n) {
    "use strict";

    function r(e) {
      var t = new s(e), n = a(s.prototype.request, t);
      return i.extend(n, s.prototype, t), i.extend(n, t), n
    }

    var i = n("cGG2"), a = n("JP+z"), s = n("XmWM"), o = n("KCLY"), u = r(o);
    u.Axios = s, u.create = function (e) {
      return r(i.merge(o, e))
    }, u.Cancel = n("dVOP"), u.CancelToken = n("cWxy"), u.isCancel = n("pBtG"), u.all = function (e) {
      return Promise.all(e)
    }, u.spread = n("pxG4"), e.exports = u, e.exports.default = u
  }, thJu: function (e, t, n) {
    "use strict";

    function r() {
      this.message = "String contains an invalid character"
    }

    var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    (r.prototype = new Error).code = 5, r.prototype.name = "InvalidCharacterError", e.exports = function (e) {
      for (var t, n, a = String(e), s = "", o = 0, u = i; a.charAt(0 | o) || (u = "=", o % 1); s += u.charAt(63 & t >> 8 - o % 1 * 8)) {
        if ((n = a.charCodeAt(o += .75)) > 255) throw new r;
        t = t << 8 | n
      }
      return s
    }
  }, tkWw: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("ar-dz", {
        months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات"
        },
        week: {dow: 0, doy: 4}
      })
    })
  }, tuGe: function (e, t, n) {
    "use strict";
    var r = n("se3Y");
    e.exports = r, r.prototype.finally = function (e) {
      return this.then(function (t) {
        return r.resolve(e()).then(function () {
          return t
        })
      }, function (t) {
        return r.resolve(e()).then(function () {
          throw t
        })
      })
    }
  }, tzHd: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("fr", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Aujourd’hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function (e, t) {
          switch (t) {
            case"D":
              return e + (1 === e ? "er" : "");
            default:
            case"M":
            case"Q":
            case"DDD":
            case"d":
              return e + (1 === e ? "er" : "e");
            case"w":
            case"W":
              return e + (1 === e ? "re" : "e")
          }
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, uJUn: function (e, t, n) {
    var r = n("0SKO");
    Vue.component("spark-kiosk-announcements", {mixins: [r]})
  }, uSe8: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
        n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
      return e.defineLocale("ur", {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: n,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd، D MMMM YYYY HH:mm"
        },
        meridiemParse: /صبح|شام/,
        isPM: function (e) {
          return "شام" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "صبح" : "شام"
        },
        calendar: {
          sameDay: "[آج بوقت] LT",
          nextDay: "[کل بوقت] LT",
          nextWeek: "dddd [بوقت] LT",
          lastDay: "[گذشتہ روز بوقت] LT",
          lastWeek: "[گذشتہ] dddd [بوقت] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s بعد",
          past: "%s قبل",
          s: "چند سیکنڈ",
          ss: "%d سیکنڈ",
          m: "ایک منٹ",
          mm: "%d منٹ",
          h: "ایک گھنٹہ",
          hh: "%d گھنٹے",
          d: "ایک دن",
          dd: "%d دن",
          M: "ایک ماہ",
          MM: "%d ماہ",
          y: "ایک سال",
          yy: "%d سال"
        },
        preparse: function (e) {
          return e.replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/,/g, "،")
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, uVbb: function (e, t) {
    e.exports = {
      props: ["user", "team"], data: function () {
        return {form: new SparkForm({})}
      }, methods: {
        update: function (e) {
          if (e.preventDefault(), this.$refs.photo.files.length) {
            var t = this;
            this.form.startProcessing(), axios.post(this.urlForUpdate, this.gatherFormData()).then(function () {
              Bus.$emit("updateTeam"), Bus.$emit("updateTeams"), t.form.finishProcessing()
            }, function (e) {
              t.form.setErrors(e.response.data.errors)
            })
          }
        }, gatherFormData: function () {
          var e = new FormData;
          return e.append("photo", this.$refs.photo.files[0]), e
        }
      }, computed: {
        urlForUpdate: function () {
          return "/settings/" + Spark.pluralTeamString + "/" + this.team.id + "/photo"
        }, previewStyle: function () {
          return "background-image: url(" + this.team.photo_url + ")"
        }
      }
    }
  }, ulq9: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, n) {
        return "m" === n ? t ? "минута" : "минуту" : e + " " + function (e, t) {
          var n = e.split("_");
          return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
        }({
          ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
          mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
          hh: "час_часа_часов",
          dd: "день_дня_дней",
          MM: "месяц_месяца_месяцев",
          yy: "год_года_лет"
        }[n], +e)
      }

      var n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
      return e.defineLocale("ru", {
        months: {
          format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
          standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
        },
        monthsShort: {
          format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
          standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
        },
        weekdays: {
          standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
          format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
          isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
        },
        weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY г.",
          LLL: "D MMMM YYYY г., H:mm",
          LLLL: "dddd, D MMMM YYYY г., H:mm"
        },
        calendar: {
          sameDay: "[Сегодня в] LT",
          nextDay: "[Завтра в] LT",
          lastDay: "[Вчера в] LT",
          nextWeek: function (e) {
            if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
            switch (this.day()) {
              case 0:
                return "[В следующее] dddd [в] LT";
              case 1:
              case 2:
              case 4:
                return "[В следующий] dddd [в] LT";
              case 3:
              case 5:
              case 6:
                return "[В следующую] dddd [в] LT"
            }
          },
          lastWeek: function (e) {
            if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
            switch (this.day()) {
              case 0:
                return "[В прошлое] dddd [в] LT";
              case 1:
              case 2:
              case 4:
                return "[В прошлый] dddd [в] LT";
              case 3:
              case 5:
              case 6:
                return "[В прошлую] dddd [в] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "через %s",
          past: "%s назад",
          s: "несколько секунд",
          ss: t,
          m: t,
          mm: t,
          h: "час",
          hh: t,
          d: "день",
          dd: t,
          M: "месяц",
          MM: t,
          y: "год",
          yy: t
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function (e) {
          return /^(дня|вечера)$/.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function (e, t) {
          switch (t) {
            case"M":
            case"d":
            case"DDD":
              return e + "-й";
            case"D":
              return e + "-го";
            case"w":
            case"W":
              return e + "-я";
            default:
              return e
          }
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, upln: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e) {
        return e % 100 == 11 || e % 10 != 1
      }

      function n(e, n, r, i) {
        var a = e + " ";
        switch (r) {
          case"s":
            return n || i ? "nokkrar sekúndur" : "nokkrum sekúndum";
          case"ss":
            return t(e) ? a + (n || i ? "sekúndur" : "sekúndum") : a + "sekúnda";
          case"m":
            return n ? "mínúta" : "mínútu";
          case"mm":
            return t(e) ? a + (n || i ? "mínútur" : "mínútum") : n ? a + "mínúta" : a + "mínútu";
          case"hh":
            return t(e) ? a + (n || i ? "klukkustundir" : "klukkustundum") : a + "klukkustund";
          case"d":
            return n ? "dagur" : i ? "dag" : "degi";
          case"dd":
            return t(e) ? n ? a + "dagar" : a + (i ? "daga" : "dögum") : n ? a + "dagur" : a + (i ? "dag" : "degi");
          case"M":
            return n ? "mánuður" : i ? "mánuð" : "mánuði";
          case"MM":
            return t(e) ? n ? a + "mánuðir" : a + (i ? "mánuði" : "mánuðum") : n ? a + "mánuður" : a + (i ? "mánuð" : "mánuði");
          case"y":
            return n || i ? "ár" : "ári";
          case"yy":
            return t(e) ? a + (n || i ? "ár" : "árum") : a + (n || i ? "ár" : "ári")
        }
      }

      return e.defineLocale("is", {
        months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
        weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
        weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
        weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] H:mm",
          LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
        },
        calendar: {
          sameDay: "[í dag kl.] LT",
          nextDay: "[á morgun kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[í gær kl.] LT",
          lastWeek: "[síðasta] dddd [kl.] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "eftir %s",
          past: "fyrir %s síðan",
          s: n,
          ss: n,
          m: n,
          mm: n,
          h: "klukkustund",
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, uslO: function (e, t, n) {
    function r(e) {
      return n(i(e))
    }

    function i(e) {
      var t = a[e];
      if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
      return t
    }

    var a = {
      "./af": "3CJN",
      "./af.js": "3CJN",
      "./ar": "3MVc",
      "./ar-dz": "tkWw",
      "./ar-dz.js": "tkWw",
      "./ar-kw": "j8cJ",
      "./ar-kw.js": "j8cJ",
      "./ar-ly": "wPpW",
      "./ar-ly.js": "wPpW",
      "./ar-ma": "dURR",
      "./ar-ma.js": "dURR",
      "./ar-sa": "7OnE",
      "./ar-sa.js": "7OnE",
      "./ar-tn": "BEem",
      "./ar-tn.js": "BEem",
      "./ar.js": "3MVc",
      "./az": "eHwN",
      "./az.js": "eHwN",
      "./be": "3hfc",
      "./be.js": "3hfc",
      "./bg": "lOED",
      "./bg.js": "lOED",
      "./bm": "hng5",
      "./bm.js": "hng5",
      "./bn": "aM0x",
      "./bn.js": "aM0x",
      "./bo": "w2Hs",
      "./bo.js": "w2Hs",
      "./br": "OSsP",
      "./br.js": "OSsP",
      "./bs": "aqvp",
      "./bs.js": "aqvp",
      "./ca": "wIgY",
      "./ca.js": "wIgY",
      "./cs": "ssxj",
      "./cs.js": "ssxj",
      "./cv": "N3vo",
      "./cv.js": "N3vo",
      "./cy": "ZFGz",
      "./cy.js": "ZFGz",
      "./da": "YBA/",
      "./da.js": "YBA/",
      "./de": "DOkx",
      "./de-at": "8v14",
      "./de-at.js": "8v14",
      "./de-ch": "Frex",
      "./de-ch.js": "Frex",
      "./de.js": "DOkx",
      "./dv": "rIuo",
      "./dv.js": "rIuo",
      "./el": "CFqe",
      "./el.js": "CFqe",
      "./en-au": "Sjoy",
      "./en-au.js": "Sjoy",
      "./en-ca": "Tqun",
      "./en-ca.js": "Tqun",
      "./en-gb": "hPuz",
      "./en-gb.js": "hPuz",
      "./en-ie": "ALEw",
      "./en-ie.js": "ALEw",
      "./en-nz": "dyB6",
      "./en-nz.js": "dyB6",
      "./eo": "Nd3h",
      "./eo.js": "Nd3h",
      "./es": "LT9G",
      "./es-do": "7MHZ",
      "./es-do.js": "7MHZ",
      "./es-us": "INcR",
      "./es-us.js": "INcR",
      "./es.js": "LT9G",
      "./et": "XlWM",
      "./et.js": "XlWM",
      "./eu": "sqLM",
      "./eu.js": "sqLM",
      "./fa": "2pmY",
      "./fa.js": "2pmY",
      "./fi": "nS2h",
      "./fi.js": "nS2h",
      "./fo": "OVPi",
      "./fo.js": "OVPi",
      "./fr": "tzHd",
      "./fr-ca": "bXQP",
      "./fr-ca.js": "bXQP",
      "./fr-ch": "VK9h",
      "./fr-ch.js": "VK9h",
      "./fr.js": "tzHd",
      "./fy": "g7KF",
      "./fy.js": "g7KF",
      "./gd": "nLOz",
      "./gd.js": "nLOz",
      "./gl": "FuaP",
      "./gl.js": "FuaP",
      "./gom-latn": "+27R",
      "./gom-latn.js": "+27R",
      "./gu": "rtsW",
      "./gu.js": "rtsW",
      "./he": "Nzt2",
      "./he.js": "Nzt2",
      "./hi": "ETHv",
      "./hi.js": "ETHv",
      "./hr": "V4qH",
      "./hr.js": "V4qH",
      "./hu": "xne+",
      "./hu.js": "xne+",
      "./hy-am": "GrS7",
      "./hy-am.js": "GrS7",
      "./id": "yRTJ",
      "./id.js": "yRTJ",
      "./is": "upln",
      "./is.js": "upln",
      "./it": "FKXc",
      "./it.js": "FKXc",
      "./ja": "ORgI",
      "./ja.js": "ORgI",
      "./jv": "JwiF",
      "./jv.js": "JwiF",
      "./ka": "RnJI",
      "./ka.js": "RnJI",
      "./kk": "j+vx",
      "./kk.js": "j+vx",
      "./km": "5j66",
      "./km.js": "5j66",
      "./kn": "gEQe",
      "./kn.js": "gEQe",
      "./ko": "eBB/",
      "./ko.js": "eBB/",
      "./ky": "6cf8",
      "./ky.js": "6cf8",
      "./lb": "z3hR",
      "./lb.js": "z3hR",
      "./lo": "nE8X",
      "./lo.js": "nE8X",
      "./lt": "/6P1",
      "./lt.js": "/6P1",
      "./lv": "jxEH",
      "./lv.js": "jxEH",
      "./me": "svD2",
      "./me.js": "svD2",
      "./mi": "gEU3",
      "./mi.js": "gEU3",
      "./mk": "Ab7C",
      "./mk.js": "Ab7C",
      "./ml": "oo1B",
      "./ml.js": "oo1B",
      "./mr": "5vPg",
      "./mr.js": "5vPg",
      "./ms": "ooba",
      "./ms-my": "G++c",
      "./ms-my.js": "G++c",
      "./ms.js": "ooba",
      "./mt": "oCzW",
      "./mt.js": "oCzW",
      "./my": "F+2e",
      "./my.js": "F+2e",
      "./nb": "FlzV",
      "./nb.js": "FlzV",
      "./ne": "/mhn",
      "./ne.js": "/mhn",
      "./nl": "3K28",
      "./nl-be": "Bp2f",
      "./nl-be.js": "Bp2f",
      "./nl.js": "3K28",
      "./nn": "C7av",
      "./nn.js": "C7av",
      "./pa-in": "pfs9",
      "./pa-in.js": "pfs9",
      "./pl": "7LV+",
      "./pl.js": "7LV+",
      "./pt": "ZoSI",
      "./pt-br": "AoDM",
      "./pt-br.js": "AoDM",
      "./pt.js": "ZoSI",
      "./ro": "wT5f",
      "./ro.js": "wT5f",
      "./ru": "ulq9",
      "./ru.js": "ulq9",
      "./sd": "fW1y",
      "./sd.js": "fW1y",
      "./se": "5Omq",
      "./se.js": "5Omq",
      "./si": "Lgqo",
      "./si.js": "Lgqo",
      "./sk": "OUMt",
      "./sk.js": "OUMt",
      "./sl": "2s1U",
      "./sl.js": "2s1U",
      "./sq": "V0td",
      "./sq.js": "V0td",
      "./sr": "f4W3",
      "./sr-cyrl": "c1x4",
      "./sr-cyrl.js": "c1x4",
      "./sr.js": "f4W3",
      "./ss": "7Q8x",
      "./ss.js": "7Q8x",
      "./sv": "Fpqq",
      "./sv.js": "Fpqq",
      "./sw": "DSXN",
      "./sw.js": "DSXN",
      "./ta": "+7/x",
      "./ta.js": "+7/x",
      "./te": "Nlnz",
      "./te.js": "Nlnz",
      "./tet": "gUgh",
      "./tet.js": "gUgh",
      "./th": "XzD+",
      "./th.js": "XzD+",
      "./tl-ph": "3LKG",
      "./tl-ph.js": "3LKG",
      "./tlh": "m7yE",
      "./tlh.js": "m7yE",
      "./tr": "k+5o",
      "./tr.js": "k+5o",
      "./tzl": "iNtv",
      "./tzl.js": "iNtv",
      "./tzm": "FRPF",
      "./tzm-latn": "krPU",
      "./tzm-latn.js": "krPU",
      "./tzm.js": "FRPF",
      "./uk": "ntHu",
      "./uk.js": "ntHu",
      "./ur": "uSe8",
      "./ur.js": "uSe8",
      "./uz": "XU1s",
      "./uz-latn": "/bsm",
      "./uz-latn.js": "/bsm",
      "./uz.js": "XU1s",
      "./vi": "0X8Q",
      "./vi.js": "0X8Q",
      "./x-pseudo": "e/KL",
      "./x-pseudo.js": "e/KL",
      "./yo": "YXlc",
      "./yo.js": "YXlc",
      "./zh-cn": "Vz2w",
      "./zh-cn.js": "Vz2w",
      "./zh-hk": "ZUyn",
      "./zh-hk.js": "ZUyn",
      "./zh-tw": "BbgG",
      "./zh-tw.js": "BbgG"
    };
    r.keys = function () {
      return Object.keys(a)
    }, r.resolve = i, e.exports = r, r.id = "uslO"
  }, "vBD/": function (e, t, n) {
    e.exports = {
      mixins: [n("40eO"), n("OeAR"), n("Q8BB")], data: function () {
        return {
          query: null,
          coupon: null,
          invalidCoupon: !1,
          country: null,
          taxRate: 0,
          registerForm: $.extend(!0, new SparkForm({
            stripe_token: "",
            plan: "",
            team: "",
            team_slug: "",
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            address: "",
            address_line_2: "",
            city: "",
            state: "",
            zip: "",
            country: "US",
            vat_id: "",
            terms: !1,
            coupon: null,
            invitation: null
          }), Spark.forms.register),
          cardForm: new SparkForm({name: "", number: "", cvc: "", month: "", year: ""})
        }
      }, watch: {
        currentBillingAddress: function (e) {
          Spark.collectsEuropeanVat && this.refreshTaxRate(this.registerForm)
        }, "registerForm.team": function (e, t) {
          "" != this.registerForm.team_slug && this.registerForm.team_slug != t.toLowerCase().replace(/[\s\W-]+/g, "-") || (this.registerForm.team_slug = e.toLowerCase().replace(/[\s\W-]+/g, "-"))
        }
      }, created: function () {
        Stripe.setPublishableKey(Spark.stripeKey), this.getPlans(), this.guessCountry(), this.query = URI(document.URL).query(!0), this.query.coupon && (this.getCoupon(), this.registerForm.coupon = this.query.coupon), this.query.invitation && (this.getInvitation(), this.registerForm.invitation = this.query.invitation)
      }, mounted: function () {
      }, methods: {
        guessCountry: function () {
          var e = this;
          axios.get("/geocode/country").then(function (t) {
            "ZZ" != t.data && (e.registerForm.country = t.data)
          }).catch(function (e) {
          }).finally(function () {
            this.refreshStatesAndProvinces()
          })
        }, getCoupon: function () {
          var e = this;
          axios.get("/coupon/" + this.query.coupon).then(function (t) {
            e.coupon = t.data
          }).catch(function (t) {
            e.invalidCoupon = !0
          })
        }, register: function () {
          var e = this;
          if (this.cardForm.errors.forget(), this.registerForm.busy = !0, this.registerForm.errors.forget(), !Spark.cardUpFront || 0 == this.selectedPlan.price) return this.sendRegistration();
          Stripe.card.createToken(this.stripePayload(), function (t, n) {
            n.error ? (e.cardForm.errors.set({number: [n.error.message]}), e.registerForm.busy = !1) : (e.registerForm.stripe_token = n.id, e.sendRegistration())
          })
        }, stripePayload: function () {
          return {
            name: this.cardForm.name,
            number: this.cardForm.number,
            cvc: this.cardForm.cvc,
            exp_month: this.cardForm.month,
            exp_year: this.cardForm.year,
            address_line1: this.registerForm.address,
            address_line2: this.registerForm.address_line_2,
            address_city: this.registerForm.city,
            address_state: this.registerForm.state,
            address_zip: this.registerForm.zip,
            address_country: this.registerForm.country
          }
        }, sendRegistration: function () {
          Spark.post("/register", this.registerForm).then(function (e) {
            window.location = e.redirect
          })
        }
      }, computed: {
        countryCollectsVat: function () {
          return this.collectsVat(this.registerForm.country)
        }, discount: function () {
          if (this.coupon) return this.coupon.percent_off ? this.coupon.percent_off + "%" : Vue.filter("currency")(this.coupon.amount_off / 100)
        }, currentBillingAddress: function () {
          return this.registerForm.address + this.registerForm.address_line_2 + this.registerForm.city + this.registerForm.state + this.registerForm.zip + this.registerForm.country + this.registerForm.vat_id
        }
      }
    }
  }, vv3I: function (e, t, n) {
    var r = n("qtHC");
    Vue.component("spark-update-team-name", {mixins: [r]})
  }, vxXX: function (e, t, n) {
    "use strict";
    var r = n("se3Y");
    e.exports = r, r.prototype.done = function (e, t) {
      (arguments.length ? this.then.apply(this, arguments) : this).then(null, function (e) {
        setTimeout(function () {
          throw e
        }, 0)
      })
    }
  }, w2Hs: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠"},
        n = {"༡": "1", "༢": "2", "༣": "3", "༤": "4", "༥": "5", "༦": "6", "༧": "7", "༨": "8", "༩": "9", "༠": "0"};
      return e.defineLocale("bo", {
        months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
        monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
        weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
        weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
        weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
          sameDay: "[དི་རིང] LT",
          nextDay: "[སང་ཉིན] LT",
          nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
          lastDay: "[ཁ་སང] LT",
          lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ལ་",
          past: "%s སྔན་ལ",
          s: "ལམ་སང",
          ss: "%d སྐར་ཆ།",
          m: "སྐར་མ་གཅིག",
          mm: "%d སྐར་མ",
          h: "ཆུ་ཚོད་གཅིག",
          hh: "%d ཆུ་ཚོད",
          d: "ཉིན་གཅིག",
          dd: "%d ཉིན་",
          M: "ཟླ་བ་གཅིག",
          MM: "%d ཟླ་བ",
          y: "ལོ་གཅིག",
          yy: "%d ལོ"
        },
        preparse: function (e) {
          return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
        },
        week: {dow: 0, doy: 6}
      })
    })
  }, wAJi: function (e, t, n) {
    var r = n("V3OY");
    Vue.component("spark-update-extra-billing-information", {mixins: [r]})
  }, wIgY: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("ca", {
        months: {
          standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
          format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
          isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
        monthsParseExact: !0,
        weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
        weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
        weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM [de] YYYY",
          ll: "D MMM YYYY",
          LLL: "D MMMM [de] YYYY [a les] H:mm",
          lll: "D MMM YYYY, H:mm",
          LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
          llll: "ddd D MMM YYYY, H:mm"
        },
        calendar: {
          sameDay: function () {
            return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
          }, nextDay: function () {
            return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
          }, nextWeek: function () {
            return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
          }, lastDay: function () {
            return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
          }, lastWeek: function () {
            return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
          }, sameElse: "L"
        },
        relativeTime: {
          future: "d'aquí %s",
          past: "fa %s",
          s: "uns segons",
          ss: "%d segons",
          m: "un minut",
          mm: "%d minuts",
          h: "una hora",
          hh: "%d hores",
          d: "un dia",
          dd: "%d dies",
          M: "un mes",
          MM: "%d mesos",
          y: "un any",
          yy: "%d anys"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function (e, t) {
          var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
          return "w" !== t && "W" !== t || (n = "a"), e + n
        },
        week: {dow: 1, doy: 4}
      })
    })
  }, wPpW: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      var t = {1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0"}, n = function (e) {
          return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
        }, r = {
          s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
          m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
          h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
          d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
          M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
          y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
        }, i = function (e) {
          return function (t, i, a, s) {
            var o = n(t), u = r[e][n(t)];
            return 2 === o && (u = u[i ? 0 : 1]), u.replace(/%d/i, t)
          }
        },
        a = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
      return e.defineLocale("ar-ly", {
        months: a,
        monthsShort: a,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/‏M/‏YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return "م" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ص" : "م"
        },
        calendar: {
          sameDay: "[اليوم عند الساعة] LT",
          nextDay: "[غدًا عند الساعة] LT",
          nextWeek: "dddd [عند الساعة] LT",
          lastDay: "[أمس عند الساعة] LT",
          lastWeek: "dddd [عند الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "بعد %s",
          past: "منذ %s",
          s: i("s"),
          ss: i("s"),
          m: i("m"),
          mm: i("m"),
          h: i("h"),
          hh: i("h"),
          d: i("d"),
          dd: i("d"),
          M: i("M"),
          MM: i("M"),
          y: i("y"),
          yy: i("y")
        },
        preparse: function (e) {
          return e.replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          }).replace(/,/g, "،")
        },
        week: {dow: 6, doy: 12}
      })
    })
  }, wQAq: function (e, t, n) {
    var r, i;
    !function (a, s) {
      "use strict";
      "object" == typeof e && e.exports ? e.exports = s() : void 0 === (i = "function" == typeof(r = s) ? r.call(t, n, t, e) : r) || (e.exports = i)
    }(0, function (e) {
      "use strict";
      var t = e && e.SecondLevelDomains, n = {
        list: {
          ac: " com gov mil net org ",
          ae: " ac co gov mil name net org pro sch ",
          af: " com edu gov net org ",
          al: " com edu gov mil net org ",
          ao: " co ed gv it og pb ",
          ar: " com edu gob gov int mil net org tur ",
          at: " ac co gv or ",
          au: " asn com csiro edu gov id net org ",
          ba: " co com edu gov mil net org rs unbi unmo unsa untz unze ",
          bb: " biz co com edu gov info net org store tv ",
          bh: " biz cc com edu gov info net org ",
          bn: " com edu gov net org ",
          bo: " com edu gob gov int mil net org tv ",
          br: " adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",
          bs: " com edu gov net org ",
          bz: " du et om ov rg ",
          ca: " ab bc mb nb nf nl ns nt nu on pe qc sk yk ",
          ck: " biz co edu gen gov info net org ",
          cn: " ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",
          co: " com edu gov mil net nom org ",
          cr: " ac c co ed fi go or sa ",
          cy: " ac biz com ekloges gov ltd name net org parliament press pro tm ",
          do: " art com edu gob gov mil net org sld web ",
          dz: " art asso com edu gov net org pol ",
          ec: " com edu fin gov info med mil net org pro ",
          eg: " com edu eun gov mil name net org sci ",
          er: " com edu gov ind mil net org rochest w ",
          es: " com edu gob nom org ",
          et: " biz com edu gov info name net org ",
          fj: " ac biz com info mil name net org pro ",
          fk: " ac co gov net nom org ",
          fr: " asso com f gouv nom prd presse tm ",
          gg: " co net org ",
          gh: " com edu gov mil org ",
          gn: " ac com gov net org ",
          gr: " com edu gov mil net org ",
          gt: " com edu gob ind mil net org ",
          gu: " com edu gov net org ",
          hk: " com edu gov idv net org ",
          hu: " 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ",
          id: " ac co go mil net or sch web ",
          il: " ac co gov idf k12 muni net org ",
          in: " ac co edu ernet firm gen gov i ind mil net nic org res ",
          iq: " com edu gov i mil net org ",
          ir: " ac co dnssec gov i id net org sch ",
          it: " edu gov ",
          je: " co net org ",
          jo: " com edu gov mil name net org sch ",
          jp: " ac ad co ed go gr lg ne or ",
          ke: " ac co go info me mobi ne or sc ",
          kh: " com edu gov mil net org per ",
          ki: " biz com de edu gov info mob net org tel ",
          km: " asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",
          kn: " edu gov net org ",
          kr: " ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",
          kw: " com edu gov net org ",
          ky: " com edu gov net org ",
          kz: " com edu gov mil net org ",
          lb: " com edu gov net org ",
          lk: " assn com edu gov grp hotel int ltd net ngo org sch soc web ",
          lr: " com edu gov net org ",
          lv: " asn com conf edu gov id mil net org ",
          ly: " com edu gov id med net org plc sch ",
          ma: " ac co gov m net org press ",
          mc: " asso tm ",
          me: " ac co edu gov its net org priv ",
          mg: " com edu gov mil nom org prd tm ",
          mk: " com edu gov inf name net org pro ",
          ml: " com edu gov net org presse ",
          mn: " edu gov org ",
          mo: " com edu gov net org ",
          mt: " com edu gov net org ",
          mv: " aero biz com coop edu gov info int mil museum name net org pro ",
          mw: " ac co com coop edu gov int museum net org ",
          mx: " com edu gob net org ",
          my: " com edu gov mil name net org sch ",
          nf: " arts com firm info net other per rec store web ",
          ng: " biz com edu gov mil mobi name net org sch ",
          ni: " ac co com edu gob mil net nom org ",
          np: " com edu gov mil net org ",
          nr: " biz com edu gov info net org ",
          om: " ac biz co com edu gov med mil museum net org pro sch ",
          pe: " com edu gob mil net nom org sld ",
          ph: " com edu gov i mil net ngo org ",
          pk: " biz com edu fam gob gok gon gop gos gov net org web ",
          pl: " art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",
          pr: " ac biz com edu est gov info isla name net org pro prof ",
          ps: " com edu gov net org plo sec ",
          pw: " belau co ed go ne or ",
          ro: " arts com firm info nom nt org rec store tm www ",
          rs: " ac co edu gov in org ",
          sb: " com edu gov net org ",
          sc: " com edu gov net org ",
          sh: " co com edu gov net nom org ",
          sl: " com edu gov net org ",
          st: " co com consulado edu embaixada gov mil net org principe saotome store ",
          sv: " com edu gob org red ",
          sz: " ac co org ",
          tr: " av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",
          tt: " aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",
          tw: " club com ebiz edu game gov idv mil net org ",
          mu: " ac co com gov net or org ",
          mz: " ac co edu gov org ",
          na: " co com ",
          nz: " ac co cri geek gen govt health iwi maori mil net org parliament school ",
          pa: " abo ac com edu gob ing med net nom org sld ",
          pt: " com edu gov int net nome org publ ",
          py: " com edu gov mil net org ",
          qa: " com edu gov mil net org ",
          re: " asso com nom ",
          ru: " ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",
          rw: " ac co com edu gouv gov int mil net ",
          sa: " com edu gov med net org pub sch ",
          sd: " com edu gov info med net org tv ",
          se: " a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",
          sg: " com edu gov idn net org per ",
          sn: " art com edu gouv org perso univ ",
          sy: " com edu gov mil net news org ",
          th: " ac co go in mi net or ",
          tj: " ac biz co com edu go gov info int mil name net nic org test web ",
          tn: " agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",
          tz: " ac co go ne or ",
          ua: " biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",
          ug: " ac co go ne or org sc ",
          uk: " ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",
          us: " dni fed isa kids nsn ",
          uy: " com edu gub mil net org ",
          ve: " co com edu gob info mil net org web ",
          vi: " co com k12 net org ",
          vn: " ac biz com edu gov health info int name net org pro ",
          ye: " co com gov ltd me net org plc ",
          yu: " ac co edu gov org ",
          za: " ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",
          zm: " ac co com edu gov net org sch ",
          com: "ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ",
          net: "gb jp se uk ",
          org: "ae",
          de: "com "
        }, has: function (e) {
          var t = e.lastIndexOf(".");
          if (t <= 0 || t >= e.length - 1) return !1;
          var r = e.lastIndexOf(".", t - 1);
          if (r <= 0 || r >= t - 1) return !1;
          var i = n.list[e.slice(t + 1)];
          return !!i && i.indexOf(" " + e.slice(r + 1, t) + " ") >= 0
        }, is: function (e) {
          var t = e.lastIndexOf(".");
          if (t <= 0 || t >= e.length - 1) return !1;
          if (e.lastIndexOf(".", t - 1) >= 0) return !1;
          var r = n.list[e.slice(t + 1)];
          return !!r && r.indexOf(" " + e.slice(0, t) + " ") >= 0
        }, get: function (e) {
          var t = e.lastIndexOf(".");
          if (t <= 0 || t >= e.length - 1) return null;
          var r = e.lastIndexOf(".", t - 1);
          if (r <= 0 || r >= t - 1) return null;
          var i = n.list[e.slice(t + 1)];
          return i ? i.indexOf(" " + e.slice(r + 1, t) + " ") < 0 ? null : e.slice(r + 1) : null
        }, noConflict: function () {
          return e.SecondLevelDomains === this && (e.SecondLevelDomains = t), this
        }
      };
      return n
    })
  }, "wRu/": function (e, t, n) {
    var r = n("X8h5");
    Vue.component("spark-kiosk-add-discount", {mixins: [r]})
  }, wT5f: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, n) {
        var r = " ";
        return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "), e + r + {
          ss: "secunde",
          mm: "minute",
          hh: "ore",
          dd: "zile",
          MM: "luni",
          yy: "ani"
        }[n]
      }

      return e.defineLocale("ro", {
        months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
        monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
        weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
        weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[azi la] LT",
          nextDay: "[mâine la] LT",
          nextWeek: "dddd [la] LT",
          lastDay: "[ieri la] LT",
          lastWeek: "[fosta] dddd [la] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "peste %s",
          past: "%s în urmă",
          s: "câteva secunde",
          ss: t,
          m: "un minut",
          mm: t,
          h: "o oră",
          hh: t,
          d: "o zi",
          dd: t,
          M: "o lună",
          MM: t,
          y: "un an",
          yy: t
        },
        week: {dow: 1, doy: 7}
      })
    })
  }, wqZo: function (e, t, n) {
    var r = n("+HV4");
    Vue.component("spark-create-token", {mixins: [r]})
  }, "x+TN": function (e, t) {
    e.exports = {props: ["user", "teams"]}
  }, x6be: function (e, t) {
    e.exports = {
      props: ["user", "team", "billableType"], data: function () {
        return {form: new SparkForm({coupon: ""})}
      }, methods: {
        redeem: function () {
          var e = this;
          Spark.post(this.urlForRedemption, this.form).then(function () {
            e.form.coupon = "", e.$parent.$emit("updateDiscount")
          })
        }
      }, computed: {
        urlForRedemption: function () {
          return this.billingUser ? "/settings/payment-method/coupon" : "/settings/" + Spark.pluralTeamString + "/" + this.team.id + "/payment-method/coupon"
        }
      }
    }
  }, xLtR: function (e, t, n) {
    "use strict";

    function r(e) {
      e.cancelToken && e.cancelToken.throwIfRequested()
    }

    var i = n("cGG2"), a = n("TNV1"), s = n("pBtG"), o = n("KCLY");
    e.exports = function (e) {
      r(e), e.headers = e.headers || {}, e.data = a(e.data, e.headers, e.transformRequest), e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
        delete e.headers[t]
      });
      return (e.adapter || o.adapter)(e).then(function (t) {
        return r(e), t.data = a(t.data, t.headers, e.transformResponse), t
      }, function (t) {
        return s(t) || (r(e), t && t.response && (t.response.data = a(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
      })
    }
  }, "xne+": function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, n, r) {
        var i = e;
        switch (n) {
          case"s":
            return r || t ? "néhány másodperc" : "néhány másodperce";
          case"ss":
            return i + (r || t) ? " másodperc" : " másodperce";
          case"m":
            return "egy" + (r || t ? " perc" : " perce");
          case"mm":
            return i + (r || t ? " perc" : " perce");
          case"h":
            return "egy" + (r || t ? " óra" : " órája");
          case"hh":
            return i + (r || t ? " óra" : " órája");
          case"d":
            return "egy" + (r || t ? " nap" : " napja");
          case"dd":
            return i + (r || t ? " nap" : " napja");
          case"M":
            return "egy" + (r || t ? " hónap" : " hónapja");
          case"MM":
            return i + (r || t ? " hónap" : " hónapja");
          case"y":
            return "egy" + (r || t ? " év" : " éve");
          case"yy":
            return i + (r || t ? " év" : " éve")
        }
        return ""
      }

      function n(e) {
        return (e ? "" : "[múlt] ") + "[" + r[this.day()] + "] LT[-kor]"
      }

      var r = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
      return e.defineLocale("hu", {
        months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
        monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
        weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
        weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
        weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "YYYY.MM.DD.",
          LL: "YYYY. MMMM D.",
          LLL: "YYYY. MMMM D. H:mm",
          LLLL: "YYYY. MMMM D., dddd H:mm"
        },
        meridiemParse: /de|du/i,
        isPM: function (e) {
          return "u" === e.charAt(1).toLowerCase()
        },
        meridiem: function (e, t, n) {
          return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
        },
        calendar: {
          sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function () {
            return n.call(this, !0)
          }, lastDay: "[tegnap] LT[-kor]", lastWeek: function () {
            return n.call(this, !1)
          }, sameElse: "L"
        },
        relativeTime: {
          future: "%s múlva",
          past: "%s",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, yRTJ: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";
      return e.defineLocale("id", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Besok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kemarin pukul] LT",
          lastWeek: "dddd [lalu pukul] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lalu",
          s: "beberapa detik",
          ss: "%d detik",
          m: "semenit",
          mm: "%d menit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun"
        },
        week: {dow: 1, doy: 7}
      })
    })
  }, yUhJ: function (e, t, n) {
    var r = n("uVbb");
    Vue.component("spark-update-team-photo", {mixins: [r]})
  }, yb2c: function (e, t) {
    e.exports = {
      props: ["user"], data: function () {
        return {
          plans: [],
          searchForm: new SparkForm({query: ""}),
          searching: !1,
          noSearchResults: !1,
          searchResults: [],
          showingUserProfile: !1
        }
      }, created: function () {
        var e = this;
        this.getPlans(), this.$on("showSearch", function () {
          e.navigateToSearch()
        }), Bus.$on("sparkHashChanged", function (t, n) {
          return "users" != t || (n && n.length > 0 ? e.loadProfile({id: n[0]}) : e.showSearch(), !0)
        })
      }, methods: {
        getPlans: function () {
          var e = this;
          axios.get("/spark/plans").then(function (t) {
            e.plans = t.data
          })
        }, search: function () {
          var e = this;
          this.searching = !0, this.noSearchResults = !1, axios.post("/spark/kiosk/users/search", this.searchForm).then(function (t) {
            e.searchResults = t.data, e.noSearchResults = 0 === e.searchResults.length, e.searching = !1
          })
        }, navigateToSearch: function () {
          history.pushState(null, null, "#/users"), this.showSearch()
        }, showSearch: function () {
          this.showingUserProfile = !1, Vue.nextTick(function () {
            $("#kiosk-users-search").focus()
          })
        }, showUserProfile: function (e) {
          history.pushState(null, null, "#/users/" + e.id), this.loadProfile(e)
        }, loadProfile: function (e) {
          this.$emit("showUserProfile", e.id), this.showingUserProfile = !0
        }
      }
    }
  }, ylDc: function (e, t) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    window.SparkFormErrors = function () {
      this.errors = {}, this.hasErrors = function () {
        return !_.isEmpty(this.errors)
      }, this.has = function (e) {
        return _.indexOf(_.keys(this.errors), e) > -1
      }, this.all = function () {
        return this.errors
      }, this.flatten = function () {
        return _.flatten(_.toArray(this.errors))
      }, this.get = function (e) {
        if (this.has(e)) return this.errors[e][0]
      }, this.set = function (e) {
        "object" === (void 0 === e ? "undefined" : n(e)) ? this.errors = e : this.errors = {form: ["Something went wrong. Please try again or contact customer support."]}
      }, this.forget = function (e) {
        void 0 === e ? this.errors = {} : Vue.delete(this.errors, e)
      }
    }
  }, ypE4: function (e, t) {
    e.exports = {
      props: ["user"], data: function () {
        return {twoFactorResetCode: null}
      }, created: function () {
        var e = this;
        this.$on("receivedTwoFactorResetCode", function (t) {
          e.twoFactorResetCode = t, $("#modal-show-two-factor-reset-code").modal("show")
        })
      }
    }
  }, ytNC: function (e, t, n) {
    var r = n("KNGO");
    Vue.component("spark-subscribe-stripe", {mixins: [r]})
  }, z3hR: function (e, t, n) {
    !function (e, t) {
      t(n("PJh5"))
    }(0, function (e) {
      "use strict";

      function t(e, t, n, r) {
        var i = {
          m: ["eng Minutt", "enger Minutt"],
          h: ["eng Stonn", "enger Stonn"],
          d: ["een Dag", "engem Dag"],
          M: ["ee Mount", "engem Mount"],
          y: ["ee Joer", "engem Joer"]
        };
        return t ? i[n][0] : i[n][1]
      }

      function n(e) {
        if (e = parseInt(e, 10), isNaN(e)) return !1;
        if (e < 0) return !0;
        if (e < 10) return 4 <= e && e <= 7;
        if (e < 100) {
          var t = e % 10;
          return n(0 === t ? e / 10 : t)
        }
        if (e < 1e4) {
          for (; e >= 10;) e /= 10;
          return n(e)
        }
        return e /= 1e3, n(e)
      }

      return e.defineLocale("lb", {
        months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
        weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm [Auer]",
          LTS: "H:mm:ss [Auer]",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm [Auer]",
          LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
        },
        calendar: {
          sameDay: "[Haut um] LT",
          sameElse: "L",
          nextDay: "[Muer um] LT",
          nextWeek: "dddd [um] LT",
          lastDay: "[Gëschter um] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 2:
              case 4:
                return "[Leschten] dddd [um] LT";
              default:
                return "[Leschte] dddd [um] LT"
            }
          }
        },
        relativeTime: {
          future: function (e) {
            return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
          },
          past: function (e) {
            return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
          },
          s: "e puer Sekonnen",
          ss: "%d Sekonnen",
          m: t,
          mm: "%d Minutten",
          h: t,
          hh: "%d Stonnen",
          d: t,
          dd: "%d Deeg",
          M: t,
          MM: "%d Méint",
          y: t,
          yy: "%d Joer"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
      })
    })
  }, zGIp: function (e, t, n) {
    e.exports = {
      props: ["user", "teams"], mixins: [n("SiWD")], data: function () {
        return {billableType: "user", team: null}
      }, mounted: function () {
        this.usePushStateForTabs(".spark-settings-tabs")
      }
    }
  }, zztV: function (e, t, n) {
    var r = n("SrpZ");
    Vue.component("spark-update-vat-id", {mixins: [r]})
  }
});
