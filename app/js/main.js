(()=>{var e,t={8423:(e,t,n)=>{"use strict";var s=n(1320);document.getElementById("name-of-day").innerHTML=s().locale(localStorage.getItem("lang")).format("dddd"),document.getElementById("number-of-day").innerHTML=s().locale(localStorage.getItem("lang")).format("Do"),document.getElementById("name-of-month").innerHTML=s().locale(localStorage.getItem("lang")).format("MMMM"),document.getElementById("time").innerHTML=s().format("HH:mm"),setInterval((function(){document.getElementById("time").innerHTML=s().format("HH:mm:ss")}),1e3),parseInt(s().format("HH"))>=23||parseInt(s().format("HH"))<=5?document.querySelector("main").style.backgroundImage="linear-gradient(to top right,rgb(7, 7, 186),rgb(16, 16, 188),rgb(25, 25, 190),rgb(34, 34, 192),rgb(43, 43, 194),rgb(52, 52, 196),rgb(61, 61, 197),rgb(70, 70, 199),rgb(79, 79, 201),rgb(88, 88, 203),rgb(97, 97, 205),rgb(106, 106, 207))":parseInt(s().format("HH"))>=5&&parseInt(s().format("HH"))<=11&&(document.querySelector("main").style.backgroundImage="linear-gradient(to top right,rgb(7, 171, 186),rgb(27, 173, 180),rgb(47, 175, 174),rgb(67, 177, 168),rgb(87, 179, 162),rgb(107, 181, 156),rgb(127, 183, 150),rgb(147, 185, 144),rgb(167, 187, 138),rgb(187, 189, 132),rgb(207, 191, 126),rgb(227, 193, 120))");var r=n(5638);n(5638).ajax({url:"https://pro.ip-api.com/json?key=rEBFT7d9CCndroL",type:"GET",success:function(e){"Russia"==e.country?localStorage.setItem("lang","ru"):localStorage.setItem("lang","en"),function(e){var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&lang=").concat(localStorage.getItem("lang"),"&units=metric&appid=359455a64010ae0b28935b25c2eb104b");r.ajax({url:t,type:"GET",success:function(e){console.log(e),null==e.main.temp?document.getElementById("main__degrees").parentElement.remove():document.getElementById("main__degrees").innerHTML="".concat(Math.round(e.main.temp),' <i class="degrees__circle far fa-circle"></i>'),null==e.main.feels_like?document.getElementById("feels-like").parentElement.remove():document.getElementById("feels-like").innerHTML="".concat(Math.round(e.main.feels_like)),null==e.name?document.getElementById("city-name").remove():document.getElementById("city-name").innerHTML=e.name,null==e.main.humidity?document.getElementById("humidity").parentElement.remove():document.getElementById("humidity").innerHTML="".concat(e.main.humidity,"%"),null==e.wind.speed?document.getElementById("speed").parentElement.remove():document.getElementById("speed").innerHTML="".concat(Math.round(e.wind.speed)," м/с"),null==e.wind.gust?document.getElementById("gust").parentElement.remove():document.getElementById("gust").innerHTML="".concat(Math.round(e.wind.gust)," м/с"),null==e.clouds.all?document.getElementById("clouds").parentElement.remove():document.getElementById("clouds").innerHTML="".concat(e.clouds.all,"%"),null==e.weather[0].description?document.getElementById("description").remove():document.getElementById("description").innerHTML=e.weather[0].description},error:function(e){console.log("Request failed, error= "+e)}})}(e.city)},error:function(e){console.log("Request failed, error= "+e)}})},5126:(e,t,n)=>{var s={"./af":1009,"./af.js":1009,"./ar":8769,"./ar-dz":3739,"./ar-dz.js":3739,"./ar-kw":3745,"./ar-kw.js":3745,"./ar-ly":9576,"./ar-ly.js":9576,"./ar-ma":7408,"./ar-ma.js":7408,"./ar-sa":8781,"./ar-sa.js":8781,"./ar-tn":7856,"./ar-tn.js":7856,"./ar.js":8769,"./az":2030,"./az.js":2030,"./be":6476,"./be.js":6476,"./bg":5304,"./bg.js":5304,"./bm":8125,"./bm.js":8125,"./bn":34,"./bn-bd":9835,"./bn-bd.js":9835,"./bn.js":34,"./bo":4082,"./bo.js":4082,"./br":8317,"./br.js":8317,"./bs":3107,"./bs.js":3107,"./ca":8272,"./ca.js":8272,"./cs":8567,"./cs.js":8567,"./cv":1583,"./cv.js":1583,"./cy":76,"./cy.js":76,"./da":1760,"./da.js":1760,"./de":8973,"./de-at":3214,"./de-at.js":3214,"./de-ch":4728,"./de-ch.js":4728,"./de.js":8973,"./dv":4053,"./dv.js":4053,"./el":7499,"./el.js":7499,"./en-au":7876,"./en-au.js":7876,"./en-ca":7010,"./en-ca.js":7010,"./en-gb":4239,"./en-gb.js":4239,"./en-ie":9830,"./en-ie.js":9830,"./en-il":8438,"./en-il.js":8438,"./en-in":5322,"./en-in.js":5322,"./en-nz":3264,"./en-nz.js":3264,"./en-sg":5449,"./en-sg.js":5449,"./eo":9486,"./eo.js":9486,"./es":2430,"./es-do":6310,"./es-do.js":6310,"./es-mx":7038,"./es-mx.js":7038,"./es-us":3099,"./es-us.js":3099,"./es.js":2430,"./et":4975,"./et.js":4975,"./eu":7063,"./eu.js":7063,"./fa":8073,"./fa.js":8073,"./fi":957,"./fi.js":957,"./fil":8764,"./fil.js":8764,"./fo":1775,"./fo.js":1775,"./fr":4179,"./fr-ca":4306,"./fr-ca.js":4306,"./fr-ch":3791,"./fr-ch.js":3791,"./fr.js":4179,"./fy":7014,"./fy.js":7014,"./ga":6911,"./ga.js":6911,"./gd":2958,"./gd.js":2958,"./gl":7344,"./gl.js":7344,"./gom-deva":3161,"./gom-deva.js":3161,"./gom-latn":5798,"./gom-latn.js":5798,"./gu":8485,"./gu.js":8485,"./he":7917,"./he.js":7917,"./hi":2159,"./hi.js":2159,"./hr":5842,"./hr.js":5842,"./hu":5,"./hu.js":5,"./hy-am":1312,"./hy-am.js":1312,"./id":781,"./id.js":781,"./is":4101,"./is.js":4101,"./it":3467,"./it-ch":4759,"./it-ch.js":4759,"./it.js":3467,"./ja":4164,"./ja.js":4164,"./jv":79,"./jv.js":79,"./ka":7036,"./ka.js":7036,"./kk":2022,"./kk.js":2022,"./km":3418,"./km.js":3418,"./kn":3655,"./kn.js":3655,"./ko":986,"./ko.js":986,"./ku":1902,"./ku.js":1902,"./ky":4604,"./ky.js":4604,"./lb":9026,"./lb.js":9026,"./lo":537,"./lo.js":537,"./lt":2288,"./lt.js":2288,"./lv":1495,"./lv.js":1495,"./me":690,"./me.js":690,"./mi":2571,"./mi.js":2571,"./mk":3959,"./mk.js":3959,"./ml":7225,"./ml.js":7225,"./mn":88,"./mn.js":88,"./mr":6622,"./mr.js":6622,"./ms":1070,"./ms-my":8899,"./ms-my.js":8899,"./ms.js":1070,"./mt":3931,"./mt.js":3931,"./my":5393,"./my.js":5393,"./nb":4274,"./nb.js":4274,"./ne":8914,"./ne.js":8914,"./nl":3114,"./nl-be":8479,"./nl-be.js":8479,"./nl.js":3114,"./nn":4513,"./nn.js":4513,"./oc-lnc":6549,"./oc-lnc.js":6549,"./pa-in":8264,"./pa-in.js":8264,"./pl":2848,"./pl.js":2848,"./pt":899,"./pt-br":5077,"./pt-br.js":5077,"./pt.js":899,"./ro":2512,"./ro.js":2512,"./ru":1753,"./ru.js":1753,"./sd":6840,"./sd.js":6840,"./se":8362,"./se.js":8362,"./si":464,"./si.js":464,"./sk":6324,"./sk.js":6324,"./sl":1963,"./sl.js":1963,"./sq":3039,"./sq.js":3039,"./sr":3454,"./sr-cyrl":466,"./sr-cyrl.js":466,"./sr.js":3454,"./ss":5158,"./ss.js":5158,"./sv":8859,"./sv.js":8859,"./sw":7594,"./sw.js":7594,"./ta":6915,"./ta.js":6915,"./te":5677,"./te.js":5677,"./tet":2154,"./tet.js":2154,"./tg":4098,"./tg.js":4098,"./th":9071,"./th.js":9071,"./tk":9381,"./tk.js":9381,"./tl-ph":1869,"./tl-ph.js":1869,"./tlh":2346,"./tlh.js":2346,"./tr":1483,"./tr.js":1483,"./tzl":266,"./tzl.js":266,"./tzm":3138,"./tzm-latn":2960,"./tzm-latn.js":2960,"./tzm.js":3138,"./ug-cn":9456,"./ug-cn.js":9456,"./uk":805,"./uk.js":805,"./ur":1127,"./ur.js":1127,"./uz":9628,"./uz-latn":840,"./uz-latn.js":840,"./uz.js":9628,"./vi":6962,"./vi.js":6962,"./x-pseudo":9257,"./x-pseudo.js":9257,"./yo":2423,"./yo.js":2423,"./zh-cn":1002,"./zh-cn.js":1002,"./zh-hk":6046,"./zh-hk.js":6046,"./zh-mo":6903,"./zh-mo.js":6903,"./zh-tw":4710,"./zh-tw.js":4710};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=a,e.exports=r,r.id=5126}},n={};function s(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.loaded=!0,a.exports}s.m=t,e=[],s.O=(t,n,r,a)=>{if(!n){var o=1/0;for(j=0;j<e.length;j++){for(var[n,r,a]=e[j],l=!0,m=0;m<n.length;m++)(!1&a||o>=a)&&Object.keys(s.O).every((e=>s.O[e](n[m])))?n.splice(m--,1):(l=!1,a<o&&(o=a));l&&(e.splice(j--,1),t=r())}return t}a=a||0;for(var j=e.length;j>0&&e[j-1][2]>a;j--)e[j]=e[j-1];e[j]=[n,r,a]},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0};s.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[o,l,m]=n,j=0;for(r in l)s.o(l,r)&&(s.m[r]=l[r]);if(m)var c=m(s);for(t&&t(n);j<o.length;j++)a=o[j],s.o(e,a)&&e[a]&&e[a][0](),e[o[j]]=0;return s.O(c)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=s.O(void 0,[659],(()=>s(8423)));r=s.O(r)})();