(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{reMG:function(t,e,i){"use strict";i.r(e),i.d(e,"NotesModule",function(){return y});var s=i("ofXK"),n=i("tyNb"),r=i("fXoL"),o=i("pBz1"),c=i("vKg+"),l=i("oOf3"),a=i("sYmb");function b(t,e){1&t&&(r.Zb(0,"div",37),r.Lc(1),r.lc(2,"translate"),r.Yb()),2&t&&(r.Ib(1),r.Mc(r.mc(2,1,"sectors.All")))}function d(t,e){if(1&t&&(r.Zb(0,"div",37),r.Lc(1),r.Yb()),2&t){const t=r.kc();r.Ib(1),r.Mc(t.beginLetter)}}const p=function(t){return{"checked-active":t}};function u(t,e){if(1&t){const t=r.ac();r.Zb(0,"div",38),r.Zb(1,"button",39),r.gc("click",function(){r.Ec(t);const i=e.$implicit;return r.kc().filter(i.letter)}),r.Zb(2,"h6",33),r.Lc(3),r.Yb(),r.Yb(),r.Yb()}if(2&t){const t=e.$implicit,i=r.kc();r.Ib(1),r.rc("disabled",0===t.industry.length)("ngClass",r.uc(3,p,t.letter===i.beginLetter)),r.Ib(2),r.Mc(t.letter)}}function f(t,e){1&t&&(r.Zb(0,"div",40),r.Ub(1,"p-progressSpinner"),r.Yb())}const g=function(t){return["/notes",t]};function h(t,e){if(1&t&&(r.Zb(0,"div",44),r.Zb(1,"div",45),r.Zb(2,"div",46),r.Zb(3,"h2",33),r.Zb(4,"a",47),r.Zb(5,"span"),r.Lc(6),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb()),2&t){const t=e.$implicit;r.Ib(4),r.rc("routerLink",r.uc(2,g,t.Name)),r.Ib(2),r.Mc(t.Name)}}const m=function(t,e){return{itemsPerPage:5,currentPage:t,totalItems:e}};function v(t,e){if(1&t){const t=r.ac();r.Zb(0,"div",41),r.Jc(1,h,7,4,"div",42),r.lc(2,"paginate"),r.Zb(3,"pagination-controls",43),r.gc("pageChange",function(e){return r.Ec(t),r.kc().page=e}),r.lc(4,"translate"),r.lc(5,"translate"),r.Yb(),r.Yb()}if(2&t){const t=r.kc();r.Ib(1),r.rc("ngForOf",r.nc(2,3,t.filteredIndustries,r.vc(10,m,t.page,t.totalItems))),r.Ib(2),r.sc("previousLabel",r.mc(4,6,"sectors.previous")),r.sc("nextLabel",r.mc(5,8,"sectors.next"))}}const L=function(t){return{"button-up":t}},k=function(t){return{"az-list":t}},I=function(t){return{"az-filter__mobile_list":t}},Y=[{path:"",component:(()=>{class t{constructor(t){this.industriesService=t,this.alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],this.filteredIndustries=[],this.beginLetter="ALL",this.totalItems=0,this.openedList=!1,this.ready=!1,this.page=1}ngOnInit(){document.getElementById("top").scrollTop=0,this.getSectors()}getSectors(){const t=[];this.ready=!1,this.industriesService.getSectorsFromServer().subscribe(e=>{for(const i of this.alphabet){const s=e.filter(t=>t.Name[0].toUpperCase()===i);t.push({letter:i,industry:s})}this.industries=t,this.ready=!0,this.filter("ALL")})}filter(t){this.numberOfElement=0,this.totalItems=0,this.page=1,this.filteredIndustries=[],this.beginLetter=t,this.industries.forEach("ALL"===t?t=>{t.industry.forEach(t=>{this.filteredIndustries.push(t)}),this.totalItems+=t.industry.length}:e=>{e.letter===t&&(e.industry.forEach(t=>{this.filteredIndustries.push(t)}),this.totalItems=e.industry.length)})}open(){this.openedList=!this.openedList}}return t.\u0275fac=function(e){return new(e||t)(r.Tb(o.a))},t.\u0275cmp=r.Nb({type:t,selectors:[["app-notes"]],decls:52,vars:35,consts:[["id","top",1,"background-threads","careers-threads"],[1,"fade-in-section","disable-fade-in","is-visible","fade-in-hero","disable-transform"],[1,"container","hero-splash-container"],[1,"row","pv90-60"],[1,"col-sm-12","col-md-8","hero-splash"],["routerLink","/home",1,"hero-parent-title","crown-link"],[1,"h1","small","mb0","d-inline"],[1,"hero-title",2,"color","white"],[1,"col-12"],[1,"col-sm-12","col-md-5"],[1,"background-grid-short-white"],["id","index-content-section",1,"container","pv120-90"],[1,"row"],[1,"col-lg-3","col-md-12","col-sm-12"],[1,"filter-wrapper","filter-sticky"],[1,"filter-clear"],[1,"label","bold"],[1,"link-style-button",3,"click"],[1,"az-container","mb30"],[1,"az-box"],[1,"az-filter__header","fs-small","pb30"],[1,"label"],["class","az-filter_mobile_display bold",4,"ngIf"],[1,"az-filter__mobile"],["tabindex","0",1,"az-filter__mobile-button",3,"ngClass","click"],["aria-labelledby","point-down-icon","role","img","viewBox","0 0 30 30",1,"icon","icon-red"],["id","point-down-icon"],["fill-rule","nonzero","points","23.354 12.075 15.499 19.929 7.646 12.075 8.353 11.368 15.498 18.514 22.646 11.367 23.354 12.075"],[1,"",3,"ngClass"],[1,"row","no-gutters",3,"ngClass"],["class","col-3 letter-container",4,"ngFor","ngForOf"],[1,"col-6"],["aria-label","Show All - Letters","data-testid","all-letters",1,"az-button","all-button",3,"ngClass","click"],[1,"mb0"],[1,"col-lg-9","col-md-12","col-sm-12"],["class","row mt60 ml-5",4,"ngIf"],["class","row mt45",4,"ngIf"],[1,"az-filter_mobile_display","bold"],[1,"col-3","letter-container"],["aria-label","Show Letter - A","data-testid","letter",1,"az-button",3,"disabled","ngClass","click"],[1,"row","mt60","ml-5"],[1,"row","mt45"],["class","col-lg-9",4,"ngFor","ngForOf"],["responsive","true",2,"position","absolute","bottom","0",3,"previousLabel","nextLabel","pageChange"],[1,"col-lg-9"],[1,"border"],[1,"pb60"],[1,"inline-link",3,"routerLink"]],template:function(t,e){1&t&&(r.Zb(0,"section",0),r.Zb(1,"div",1),r.Zb(2,"div",2),r.Zb(3,"div",3),r.Zb(4,"div",4),r.Zb(5,"a",5),r.Zb(6,"h3",6),r.Lc(7,"Watcher"),r.Yb(),r.Yb(),r.Zb(8,"h1",7),r.Lc(9),r.lc(10,"translate"),r.Yb(),r.Yb(),r.Ub(11,"div",8),r.Ub(12,"div",9),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Zb(13,"section",10),r.Zb(14,"div",11),r.Zb(15,"div",12),r.Zb(16,"div",13),r.Zb(17,"div",14),r.Zb(18,"div",15),r.Zb(19,"div",16),r.Lc(20),r.lc(21,"translate"),r.Yb(),r.Zb(22,"button",17),r.gc("click",function(){return e.filter("ALL")}),r.Lc(23),r.lc(24,"translate"),r.Yb(),r.Yb(),r.Zb(25,"div",18),r.Zb(26,"div",19),r.Zb(27,"div",20),r.Zb(28,"div"),r.Zb(29,"span",21),r.Lc(30),r.lc(31,"translate"),r.Yb(),r.Jc(32,b,3,3,"div",22),r.Jc(33,d,2,1,"div",22),r.Yb(),r.Zb(34,"div",23),r.Zb(35,"button",24),r.gc("click",function(){return e.open()}),r.jc(),r.Zb(36,"svg",25),r.Zb(37,"title",26),r.Lc(38,"Point Down Icon"),r.Yb(),r.Ub(39,"polygon",27),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.ic(),r.Ub(40,"div",28),r.Zb(41,"div",29),r.Jc(42,u,4,5,"div",30),r.Zb(43,"div",31),r.Zb(44,"button",32),r.gc("click",function(){return e.filter("ALL")}),r.Zb(45,"h6",33),r.Lc(46),r.lc(47,"uppercase"),r.lc(48,"translate"),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Zb(49,"div",34),r.Jc(50,f,2,0,"div",35),r.Jc(51,v,6,13,"div",36),r.Yb(),r.Yb(),r.Yb(),r.Yb()),2&t&&(r.Ib(9),r.Mc(r.mc(10,15,"notes.title")),r.Ib(11),r.Oc("",e.filteredIndustries.length," ",r.mc(21,17,"sectors.search_results"),""),r.Ib(3),r.Mc(r.mc(24,19,"sectors.clear_filter")),r.Ib(7),r.Mc(r.mc(31,21,"sectors.filter")),r.Ib(2),r.rc("ngIf","ALL"===e.beginLetter),r.Ib(1),r.rc("ngIf","ALL"!==e.beginLetter),r.Ib(2),r.rc("ngClass",r.uc(27,L,!0===e.openedList)),r.Ib(5),r.rc("ngClass",r.uc(29,k,!0===e.openedList)),r.Ib(1),r.rc("ngClass",r.uc(31,I,!1===e.openedList)),r.Ib(1),r.rc("ngForOf",e.industries),r.Ib(2),r.rc("ngClass",r.uc(33,p,"ALL"===e.beginLetter)),r.Ib(2),r.Mc(r.mc(47,23,r.mc(48,25,"sectors.All"))),r.Ib(4),r.rc("ngIf",!e.ready),r.Ib(1),r.rc("ngIf",e.ready))},directives:[n.e,s.k,s.i,s.j,c.a,l.c],pipes:[a.c,s.q,l.b],styles:[""]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Rb({type:t}),t.\u0275inj=r.Qb({imports:[[n.f.forChild(Y)],n.f]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Rb({type:t}),t.\u0275inj=r.Qb({imports:[[s.b,Z,l.a,a.b,c.b]]}),t})()},"vKg+":function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return o});var s=i("ofXK"),n=i("fXoL");let r=(()=>{class t{constructor(){this.strokeWidth="2",this.fill="none",this.animationDuration="2s"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Nb({type:t,selectors:[["p-progressSpinner"]],inputs:{strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",style:"style",styleClass:"styleClass"},decls:3,vars:6,consts:[["role","alert","aria-busy","true",1,"p-progress-spinner",3,"ngStyle","ngClass"],["viewBox","25 25 50 50",1,"p-progress-spinner-svg"],["cx","50","cy","50","r","20","stroke-miterlimit","10",1,"p-progress-spinner-circle"]],template:function(t,e){1&t&&(n.Zb(0,"div",0),n.jc(),n.Zb(1,"svg",1),n.Ub(2,"circle",2),n.Yb(),n.Yb()),2&t&&(n.rc("ngStyle",e.style)("ngClass",e.styleClass),n.Ib(1),n.Ic("animation-duration",e.animationDuration),n.Ib(1),n.Jb("fill",e.fill)("stroke-width",e.strokeWidth))},directives:[s.l,s.i],styles:['.p-progress-spinner{display:inline-block;height:100px;margin:0 auto;position:relative;width:100px}.p-progress-spinner:before{content:"";display:block;padding-top:100%}.p-progress-spinner-svg{animation:p-progress-spinner-rotate 2s linear infinite;bottom:0;height:100%;left:0;margin:auto;position:absolute;right:0;top:0;transform-origin:center center;width:100%}.p-progress-spinner-circle{animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;stroke:#d62d20;stroke-dasharray:89,200;stroke-dashoffset:0;stroke-linecap:round}@keyframes p-progress-spinner-rotate{to{transform:rotate(1turn)}}@keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes p-progress-spinner-color{0%,to{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}'],encapsulation:2,changeDetection:0}),t})(),o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Rb({type:t}),t.\u0275inj=n.Qb({imports:[[s.b]]}),t})()}}]);