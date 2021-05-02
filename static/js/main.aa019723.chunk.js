(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[0],{211:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(71),o=c.n(s),r=(c(80),c(4)),i=(c(81),c(41)),l=c.n(i),d=c(72),j=(c(83),c(84),c(0)),u=function(e){var t=Object(n.useState)(e.selectedCountry),c=Object(r.a)(t,2),a=c[0],s=c[1];return Object(j.jsxs)("div",{className:"modal ".concat(e.isModal?"is-active":""),children:[Object(j.jsx)("div",{className:"modal-background"}),Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("p",{className:"modal-card-title",children:"Choose Country"}),Object(j.jsx)("button",{className:"delete","aria-label":"close",onClick:function(){return e.onToggleModal(!1)}})]}),Object(j.jsx)("section",{className:"modal-card-body",children:Object(j.jsx)("div",{className:"panel",children:e.countryOptions.map((function(e){return Object(j.jsx)("a",{className:"panel-block ".concat(e.ISO2===a.ISO2?"is-active":""),onClick:function(){s({ISO2:e.ISO2,country:e.Country})},children:e.Country},e.ISO2)}))})}),Object(j.jsxs)("footer",{className:"modal-card-foot",children:[Object(j.jsx)("button",{className:"button is-success",onClick:function(){e.onSelectCountry(a),e.onToggleModal(!1)},children:"Select"}),Object(j.jsx)("button",{className:"button",onClick:function(){return e.onToggleModal(!1)},children:"Cancel"})]})]})]})},b=c(73),h=c.n(b).a.create({baseURL:"https://api.covid19api.com/"}),O=function(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),a=c[0],s=c[1],o=Object(n.useState)(!1),i=Object(r.a)(o,2),b=i[0],O=i[1];Object(n.useEffect)(Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f();case 1:case"end":return e.stop()}}),e)}))),[]);var f=function(){h.get("countries").then((function(e){var t=e.data.sort((function(e,t){return e.Country>t.Country?1:t.Country>e.Country?-1:0}));s(t)}))};return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsxs)("nav",{className:"navbar is-light",role:"navigation","aria-label":"main navigation",children:[Object(j.jsx)("div",{className:"navbar-brand",children:Object(j.jsx)("h1",{className:"navbar-item",children:"COVID-19 STATUS"})}),Object(j.jsx)("div",{className:"navbar-end",children:Object(j.jsx)("div",{className:"navbar-item",children:Object(j.jsx)("div",{className:"buttons",children:Object(j.jsx)("a",{className:"button is-primary",onClick:function(){return O(!0)},children:Object(j.jsx)("strong",{children:e.selectedCountry.country})})})})})]}),Object(j.jsx)(u,{isModal:b,onToggleModal:function(e){O(e)},countryOptions:a,selectedCountry:e.selectedCountry,onSelectCountry:e.onSelectCountry})]})},f=c(15),m=function(e){return Object(j.jsx)(f.b,{data:e.data,options:(e.titleText,{legend:{display:!0,position:e.legendPos}})})},x=function(e){return Object(j.jsx)(f.c,{data:e.data,options:(e.titleText,{legend:{display:!0,position:e.legendPos}})})},v=function(e){return Object(j.jsx)(f.a,{data:e.data,options:(e.titleText,{legend:{display:!0,position:e.legendPos}})})},C=c(2),y=c(9),p=function(e){var t=Object(n.useState)(),c=Object(r.a)(t,2),a=(c[0],c[1]),s=Object(n.useState)(),o=Object(r.a)(s,2),i=o[0],l=o[1],d=Object(n.useState)([]),u=Object(r.a)(d,2),b=u[0],O=u[1];Object(n.useEffect)((function(){f()}),[e.selectedCountry]);var f=function(){h.get("summary").then((function(e){a(e.data),O(m(e.data.Countries));var t=new Date(e.data.Date),c=t.getDate(),n=t.getMonth()+1,s=t.getFullYear();l("".concat(c,"/").concat(n,"/").concat(s))}))},m=function(t){var c=t.sort((function(e,t){return e.TotalConfirmed>t.TotalConfirmed?-1:t.TotalConfirmed>e.TotalConfirmed?1:0})).reduce((function(e,t,c){var n=Object(y.a)(Object(y.a)({},t),{},{rank:c+1});return e.push(n),e}),[]),n=c.slice(0,20);if(!n.find((function(t){return t.Country===e.selectedCountry.country}))){var a=c.find((function(t){return t.Country===e.selectedCountry.country}));n=[].concat(Object(C.a)(n),[a])}return n};return Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{className:"title",children:["Covid Situation by Country on ",i]}),Object(j.jsx)("div",{children:Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{}),Object(j.jsx)("th",{children:"Country"}),Object(j.jsx)("th",{children:"Total Confirmed"}),Object(j.jsx)("th",{children:"Total Deaths"}),Object(j.jsx)("th",{children:"Total Recovered"})]})}),Object(j.jsx)("tfoot",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{}),Object(j.jsx)("th",{children:"Country"}),Object(j.jsx)("th",{children:"Total Confirmed"}),Object(j.jsx)("th",{children:"Total Deaths"}),Object(j.jsx)("th",{children:"Total Recovered"})]})}),Object(j.jsx)("tbody",{children:b.map((function(t){return Object(j.jsxs)("tr",{className:t.Country===e.selectedCountry.country?"is-selected":"",children:[Object(j.jsx)("td",{children:Object(j.jsx)("strong",{children:t.rank})}),Object(j.jsx)("td",{}),Object(j.jsx)("td",{children:t.Country}),Object(j.jsx)("td",{children:t.TotalConfirmed}),Object(j.jsx)("td",{children:t.TotalDeaths}),Object(j.jsx)("td",{children:t.TotalRecovered})]},t.ID)}))})]})})]})},g=function(e){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=Object(n.useState)({}),a=Object(r.a)(c,2),s=a[0],o=a[1],i=Object(n.useState)({}),l=Object(r.a)(i,2),d=l[0],u=l[1],b=Object(n.useState)({}),O=Object(r.a)(b,2),f=O[0],C=O[1];Object(n.useEffect)((function(){y()}),[e.selectedCountry]);var y=function(){h.get("total/dayone/country/".concat(e.selectedCountry.ISO2)).then((function(e){g(e.data)}))},g=function(e){var c=e.reduce((function(e,t){var c=new Date(t.Date),n=c.getFullYear(),a=c.getMonth(),s=c.getDate(),o=t.Active,r=t.Confirmed,i=t.Deaths,l=t.Recovered,d=e.find((function(e){return e.year===n&&e.month===a}));return d||e.push({year:n,month:a,date:s,active:o,confirmed:r,deaths:i,recovered:l}),d&&d.date<s&&(d.date=s,d.active=o,d.confirmed=r,d.deaths=i,d.recovered=l),e}),[]),n=c.map((function(e){return"".concat(t[e.month],"-").concat(e.year)}));o({labels:n,datasets:[{label:"Cumulative Confirmed Cases",backgroundColor:"salmon",fill:!0,data:c.map((function(e){return e.confirmed}))}]}),u({labels:n,datasets:[{label:"Quarantined Cases",borderColor:"salmon",fill:!1,data:c.map((function(e){return e.active}))}]});var a=c[c.length-1];C({labels:["Confirmed","Recovered","Deaths"],datasets:[{label:"Confirmed, Recovered, Deaths ratio",backgroundColor:["#ff3d67","#059bff","#ffc233"],borderColor:["#ff3d67","#059bff","#ffc233"],fill:!1,data:[null===a||void 0===a?void 0:a.confirmed,null===a||void 0===a?void 0:a.recovered,null===a||void 0===a?void 0:a.deaths]}]})};return Object(j.jsx)("section",{className:"section",children:Object(j.jsxs)("div",{className:"tile is-ancestor",children:[Object(j.jsxs)("div",{className:"tile is-vertical is-parent",children:[Object(j.jsxs)("div",{className:"tile is-child box",children:[Object(j.jsx)("p",{className:"title",children:"Cumulative Confirmed Cases Trend"}),Object(j.jsx)(v,{data:s,titleText:"Cumulative Confirmed Cases Trend",legendPos:"bottom"})]}),Object(j.jsxs)("div",{className:"tile is-child box",children:[Object(j.jsx)("p",{className:"title",children:"Monthly Quarantined Cases"}),Object(j.jsx)(x,{data:d,titleText:"Monthly Quarantined Cases",legendPos:"bottom"})]}),Object(j.jsxs)("div",{className:"tile is-child box",children:[Object(j.jsxs)("p",{className:"title",children:["Cumulative Confirmed, Recovered and Deaths Cases (",t[(new Date).getMonth()],")"]}),Object(j.jsx)(m,{data:f,titleText:"Cumulative Confirmed, Recovered and Deaths Cases (".concat(t[(new Date).getMonth()],")"),legendPos:"bottom"})]})]}),Object(j.jsx)("div",{className:"tile is-parent",children:Object(j.jsx)("div",{className:"tile is-child box",children:Object(j.jsx)(p,{selectedCountry:e.selectedCountry})})})]})})},N=function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("div",{className:"content has-text-centered",children:Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Covid Status"})," by ",Object(j.jsx)("a",{href:"https://iamdaehwa.com/",children:"Daehwa Seo"}),". The source code is licensed",Object(j.jsx)("a",{href:"http://opensource.org/licenses/mit-license.php",children:"MIT"}),". ",Object(j.jsx)("br",{}),"The website content is powered by ",Object(j.jsx)("a",{href:"https://covid19api.com/",children:"Covid 19 API"}),"."]})})})};var T=function(){var e=Object(n.useState)({country:"Australia",ISO2:"AU"}),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(O,{selectedCountry:c,onSelectCountry:function(e){a(e)}}),Object(j.jsx)(g,{selectedCountry:c}),Object(j.jsx)(N,{})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,212)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),s(e),o(e)}))};c(210);o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root")),S()},80:function(e,t,c){},81:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){}},[[211,1,2]]]);
//# sourceMappingURL=main.aa019723.chunk.js.map