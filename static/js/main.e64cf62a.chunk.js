(this.webpackJsonpvakacio=this.webpackJsonpvakacio||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"backgrounds":[{"image_url":"images/background.png","text_color":"#000"},{"image_url":"images/background_1.png","text_color":"#fff"}],"currentYearStart":"2019-08-31 23:59","currentYearEnd":"2020-06-15 23:59","nextYearStart":"2020-08-31 23:59","nextYearEnd":"2021-06-15 23:59"}')},,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/chawp.regular.1c03ed6d.ttf"},function(e,t,a){e.exports=a.p+"static/media/ChelseaMarket-Regular.405f23af.ttf"},function(e,t,a){e.exports=a.p+"static/media/Lobster-Regular.569273ee.ttf"},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(13),a(14),a(15),a(16);var s=a(3),i=a(1),u=a.n(i),l=function(e){var t=u.a.duration(e.end.diff(e.now)),a=t.years()||t.months()||t.weeks()||t.days(),o=r.a.createElement("span",null,e.reachCounter%2===0?r.a.createElement("span",null,"A tan\xe9v kezdet\xe9ig: ",r.a.createElement("br",null)):r.a.createElement("span",null,"A tan\xe9v v\xe9g\xe9ig: ",r.a.createElement("br",null)),t.years()>0?t.years()+" \xe9v, ":"",t.months()>0?t.months()+" h\xf3nap, ":"",t.weeks()>0?t.weeks()+" h\xe9t, ":"",t.days()%7>0?t.days()%7+" nap ":"",a?r.a.createElement("br",null):"",r.a.createElement("span",{className:"numbers"},t.hours()>0?t.hours()+":":"",t.minutes()<10?"0"+t.minutes()+":":t.minutes()+":",t.seconds()<10?"0"+t.seconds().toString():t.seconds().toString()));return Object(n.useEffect)((function(){(t.seconds()<0||t.minutes()<0||t.hours()<0||t.days()<0||t.weeks()<0||t.months()<0||t.years()<0)&&e.reached()})),r.a.createElement("div",{className:"countDown"},o)},d=a(2),m=a(4),g=a.n(m),h=function(e){var t="",a=g.a.duration(e.end.businessDiff(e.now),"d");return g.a.updateLocale("hu",{workingWeekdays:[1,2,3,4,5]}),a.days()<="VAK\xc1CI\xd3!".length&&(t="VAK\xc1CI\xd3!".slice(a.days()),console.log("VAK\xc1CI\xd3!".length-a.days())),r.a.createElement("div",{className:"letters"},t)},f=a(7),k=function(e){var t=Object(n.useState)(u()()),a=Object(s.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(u()(d.currentYearStart)),m=Object(s.a)(i,2),g=m[0],k=m[1],b=Object(n.useState)(0),p=Object(s.a)(b,2),v=p[0],E=p[1];Object(n.useEffect)((function(){setTimeout((function(){c(u()())}),1e3)}));var w={backgroundImage:"url('"+d.backgrounds[e.backgroundIndex].image_url+"')",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",color:d.backgrounds[e.backgroundIndex].text_color,height:"100vh",width:"100vw"};return r.a.createElement("main",{style:w},r.a.createElement(l,{now:o,end:g,reached:function(){switch(v){case 0:k(u()(d.currentYearEnd));break;case 1:k(u()(d.nextYearStart));break;case 2:k(u()(d.nextYearEnd))}E(v+1)},reachCounter:v}),v%2!==0?r.a.createElement(h,{now:o,end:g}):"",r.a.createElement("footer",null,"Az oldal elk\xe9sz\xfclt\xe9t t\xe1mogatta a ",r.a.createElement("a",{href:"//hazizz.hu"},"H\xe1zizz"),"!"),r.a.createElement(f.CookieBanner,{message:"A s\xfctik sose mennek vak\xe1ci\xf3zni, \xe9s ezen az oldalon is megtal\xe1lhat\xf3ak. Tov\xe1bbi r\xe9szletek olvashatsz err\u0151l az al\xe1bbi linken!",showPreferencesOption:!1,showStatisticsOption:!1,showMarketingOption:!1,privacyPolicyLinkText:"Adatv\xe9delmi nyilatkozat",acceptButtonText:"Elfogad"}))},b=function(){return Math.floor(Math.random()*d.backgrounds.length-1)+d.backgrounds.length-1},p=function(){var e=Object(n.useState)(b()),t=Object(s.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){setTimeout((function(){for(var e=b();a===e;)e=b();o(e)}),6e5)})),r.a.createElement(k,{backgroundIndex:1})};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.e64cf62a.chunk.js.map