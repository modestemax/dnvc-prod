(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"ct+p":function(e,i,t){"use strict";t.r(i),t.d(i,"HomeModule",function(){return Y});var r=t("ofXK"),o=t("tyNb"),s=t("fXoL"),n=t("Q+rT"),a=t("0MNC"),c=t("lR5k"),b=t("jeV5"),d=t("sYmb");function l(e,i){if(1&e&&(s.Zb(0,"picture"),s.Ub(1,"source",34),s.Ub(2,"img",40),s.Yb()),2&e){const e=s.kc();s.Ib(1),s.rc("srcset",e.imageUrl+" 200w,"+e.imageUrl+" 400w,"+e.imageUrl+" 800w",s.Fc),s.Ib(1),s.rc("srcset",e.imageUrl+" 200w,"+e.imageUrl+" 400w,"+e.imageUrl+" 800w",s.Fc)("src",e.imageUrl,s.Fc)}}function p(e,i){if(1&e&&(s.Zb(0,"noscript"),s.Zb(1,"picture"),s.Ub(2,"source",34),s.Ub(3,"img",41),s.Yb(),s.Yb()),2&e){const e=s.kc();s.Ib(2),s.rc("srcset",e.imageUrl+" 200w,"+e.imageUrl+" 400w,"+e.imageUrl+" 800w",s.Fc),s.Ib(1),s.rc("srcset",e.imageUrl+" 200w,"+e.imageUrl+" 400w,"+e.imageUrl+" 800w",s.Fc)("src",e.imageUrl,s.Fc)}}function m(e,i){if(1&e&&(s.Zb(0,"div"),s.Ub(1,"markdown",42),s.Yb()),2&e){const e=s.kc();s.Ib(1),s.rc("data",e.infos.home_text1)}}function g(e,i){1&e&&(s.Zb(0,"div",43),s.Zb(1,"div",44),s.Ub(2,"p-skeleton",45),s.Yb(),s.Zb(3,"div",44),s.Ub(4,"p-skeleton",46),s.Yb(),s.Zb(5,"div",44),s.Ub(6,"p-skeleton",47),s.Yb(),s.Zb(7,"div",44),s.Ub(8,"p-skeleton",48),s.Yb(),s.Zb(9,"div",44),s.Ub(10,"p-skeleton",49),s.Yb(),s.Zb(11,"div",44),s.Ub(12,"p-skeleton",47),s.Yb(),s.Zb(13,"div",44),s.Ub(14,"p-skeleton",47),s.Yb(),s.Zb(15,"div",44),s.Ub(16,"p-skeleton",45),s.Yb(),s.Zb(17,"div",44),s.Ub(18,"p-skeleton",46),s.Yb(),s.Zb(19,"div",44),s.Ub(20,"p-skeleton",48),s.Yb(),s.Zb(21,"div",44),s.Ub(22,"p-skeleton",45),s.Yb(),s.Zb(23,"div",44),s.Ub(24,"p-skeleton",50),s.Yb(),s.Yb())}function h(e,i){if(1&e&&(s.Zb(0,"picture"),s.Ub(1,"source",34),s.Ub(2,"img",51),s.Yb()),2&e){const e=s.kc();s.Ib(1),s.rc("srcset",e.imageUrl2+" 200w,"+e.imageUrl2+" 400w,"+e.imageUrl2+" 800w",s.Fc),s.Ib(1),s.rc("srcset",e.imageUrl2+" 200w,"+e.imageUrl2+" 400w,"+e.imageUrl2+" 800w",s.Fc)("src",e.imageUrl2,s.Fc)}}function u(e,i){if(1&e&&(s.Zb(0,"noscript"),s.Zb(1,"picture"),s.Ub(2,"source",34),s.Ub(3,"img",52),s.Yb(),s.Yb()),2&e){const e=s.kc();s.Ib(2),s.rc("srcset",e.imageUrl2+" 200w,"+e.imageUrl2+" 400w,"+e.imageUrl2+" 800w",s.Fc),s.Ib(1),s.rc("srcset",e.imageUrl2+" 200w,"+e.imageUrl2+" 400w,"+e.imageUrl2+" 800w",s.Fc)("src",e.imageUrl2,s.Fc)}}function w(e,i){if(1&e&&(s.Zb(0,"div"),s.Ub(1,"markdown",42),s.Yb()),2&e){const e=s.kc();s.Ib(1),s.rc("data",e.infos.home_text2)}}function v(e,i){1&e&&(s.Zb(0,"div",43),s.Zb(1,"div",44),s.Ub(2,"p-skeleton",45),s.Yb(),s.Zb(3,"div",44),s.Ub(4,"p-skeleton",46),s.Yb(),s.Zb(5,"div",44),s.Ub(6,"p-skeleton",47),s.Yb(),s.Zb(7,"div",44),s.Ub(8,"p-skeleton",48),s.Yb(),s.Zb(9,"div",44),s.Ub(10,"p-skeleton",49),s.Yb(),s.Zb(11,"div",44),s.Ub(12,"p-skeleton",47),s.Yb(),s.Zb(13,"div",44),s.Ub(14,"p-skeleton",47),s.Yb(),s.Zb(15,"div",44),s.Ub(16,"p-skeleton",45),s.Yb(),s.Zb(17,"div",44),s.Ub(18,"p-skeleton",46),s.Yb(),s.Zb(19,"div",44),s.Ub(20,"p-skeleton",48),s.Yb(),s.Zb(21,"div",44),s.Ub(22,"p-skeleton",45),s.Yb(),s.Zb(23,"div",44),s.Ub(24,"p-skeleton",50),s.Yb(),s.Yb())}const U=[{path:"",component:(()=>{class e{constructor(e,i){this.infosServices=e,this.breakPointObserver=i,this.ready=!1,this.isSmallScreen=!1}ngOnInit(){this.breakPointObserver.observe(["(max-width: 765px)"]).subscribe(e=>{this.isSmallScreen=!!e.matches}),this.infosServices.getInfosFromServer().subscribe(e=>{this.infos=e,this.imageUrl=e.home_picture1.url,this.imageUrl2=e.home_picture2.url,this.ready=!0})}}return e.\u0275fac=function(i){return new(i||e)(s.Tb(n.a),s.Tb(a.a))},e.\u0275cmp=s.Nb({type:e,selectors:[["app-home"]],decls:74,vars:26,consts:[["id","top",1,"fade-in-section","is-visible","disable-fade-in","fade-in-hero"],[1,"hero-main-landing"],[1,"background-margin","background-threads","careers-threads"],[1,"container"],[1,"row"],[1,"col-12","col-md-6","hero-overflow"],[1,"h0","hero-title","pt150-90","pb30",2,"color","white"],[1,"mt0","mb0","hero-summary",2,"color","white"],[1,"col-12","col-md-6","hero-image"],[1,"hero-stacked-img","gatsby-image-wrapper",2,"position","relative","overflow","hidden"],["aria-hidden","true",2,"width","100%","padding-bottom","108.5%"],[1,"background-grid-white","background-border-none","inset"],[1,"container","hero-main-landing-splash"],[1,"row","d-flex","align-items-end"],[1,"col-12","col-md-6","offset-md-1","order-1","order-md-2"],[1,"label","hero-caption"],[1,"col-12","col-md-5","order-2","order-md-1"],[1,"hero-main-landing-text"],[1,"col-12","col-md-6","offset-md-6","header-subsection"],[1,"col-md-12","header-subsection-date-section","d-flex","justify-content-end","align-items-center"],[1,"icon","gatsby-image-wrapper",2,"position","relative","overflow","hidden"],["aria-hidden","true",2,"width","100%","padding-bottom","100%"],[1,"header-subsection-date"],[1,"fade-in-section","is-visible","disable-fade-in"],[1,"background-grid-white"],[1,"teaser-background-image","teaser-background-image-left","first",2,"background-position","center","background-repeat","no-repeat","background-size","cover","position","relative","opacity","0.99"],[4,"ngIf"],[1,"container","teaser-container"],[1,"col-sm-12","col-md-5","offset-md-7","order-last","pv120-90","teaser-context"],["style","width: 100%",4,"ngIf"],[1,"col-sm-12","d-md-none","teaser-image"],[1,"gatsby-image-wrapper",2,"position","relative","overflow","hidden"],["aria-hidden","true",2,"width","100%","padding-bottom","75%"],["aria-hidden","true","alt","",2,"position","absolute","top","0px","left","0px","width","100%","height","100%","object-fit","cover","object-position","center center","opacity","0","transition-delay","500ms"],["sizes","(max-width: 800px) 100vw, 800px",3,"srcset"],["sizes","(max-width: 800px) 100vw, 800px","alt","","loading","lazy",2,"position","absolute","top","0px","left","0px","width","100%","height","100%","object-fit","cover","object-position","center center","opacity","1","transition","opacity 500ms ease 0s",3,"srcset","src"],["loading","lazy","sizes","(max-width: 800px) 100vw, 800px","alt","",2,"position","absolute","top","0","left","0","opacity","1","width","100%","height","100%","object-fit","cover","object-position","center",3,"srcset","src"],[1,"teaser-background-image","teaser-background-image-right","second",2,"background-position","center","background-repeat","no-repeat","background-size","cover","position","relative","opacity","0.99"],[1,"col-sm-12","col-md-5","offset-md-0","order-first","pv120-90","teaser-context"],["aria-hidden","true","src","","alt","",2,"position","absolute","top","0px","left","0px","width","100%","height","100%","object-fit","cover","object-position","center center","opacity","0","transition-delay","500ms"],["sizes","(max-width: 800px) 100vw, 800px","alt","","loading","lazy",2,"position","absolute","top","0px","left","0px","width","calc(50% - 1px) !important","height","100%","object-fit","cover","object-position","center center","opacity","1","transition","opacity 500ms ease 0s",3,"srcset","src"],["loading","lazy","sizes","(max-width: 800px) 100vw, 800px","alt","",2,"position","absolute","top","0","left","0","opacity","1","width","calc(50% - 1px) !important","height","100%","object-fit","cover","object-position","center",3,"srcset","src"],[3,"data"],[2,"width","100%"],[1,"mb-1"],["borderRadius","0","width","80%","height",".5rem"],["borderRadius","0","width","100%","height",".5rem"],["borderRadius","0","width","70%","height",".5rem"],["borderRadius","0","width","60%","height",".5rem"],["borderRadius","0","width","90%","height",".5rem"],["borderRadius","0","width","75%","height",".5rem"],["sizes","(max-width: 800px) 100vw, 800px","alt","","loading","lazy",2,"position","absolute","top","0px","right","0px","width","calc(50% - 1px) !important","height","100%","object-fit","cover","object-position","center center","opacity","1","transition","opacity 500ms ease 0s",3,"srcset","src"],["loading","lazy","sizes","(max-width: 800px) 100vw, 800px","alt","",2,"position","absolute","top","0","right","0","opacity","1","width","calc(50% - 1px) !important","height","100%","object-fit","cover","object-position","center",3,"srcset","src"]],template:function(e,i){1&e&&(s.Zb(0,"div",0),s.Zb(1,"section",1),s.Zb(2,"section",2),s.Zb(3,"div",3),s.Zb(4,"div",4),s.Zb(5,"div",5),s.Zb(6,"h1",6),s.Lc(7,"Watcher"),s.Yb(),s.Zb(8,"div",7),s.Zb(9,"p"),s.Lc(10),s.lc(11,"translate"),s.Yb(),s.Yb(),s.Yb(),s.Zb(12,"div",8),s.Zb(13,"div",9),s.Ub(14,"div",10),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Zb(15,"div",11),s.Zb(16,"div",12),s.Zb(17,"div",13),s.Zb(18,"div",14),s.Ub(19,"span",15),s.Yb(),s.Zb(20,"div",16),s.Zb(21,"div",17),s.Zb(22,"h2"),s.Lc(23),s.lc(24,"translate"),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Zb(25,"div",18),s.Zb(26,"div",4),s.Zb(27,"div",19),s.Zb(28,"div",20),s.Ub(29,"div",21),s.Yb(),s.Zb(30,"label",22),s.Lc(31,"Edition: 3 Septembre 2021"),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Zb(32,"div",23),s.Zb(33,"section",24),s.Zb(34,"section",25),s.Jc(35,l,3,3,"picture",26),s.Jc(36,p,4,3,"noscript",26),s.Zb(37,"div",27),s.Zb(38,"div",4),s.Zb(39,"div",28),s.Jc(40,m,2,1,"div",26),s.Jc(41,g,25,0,"div",29),s.Yb(),s.Zb(42,"div",30),s.Zb(43,"div",31),s.Ub(44,"div",32),s.Ub(45,"img",33),s.Zb(46,"picture"),s.Ub(47,"source",34),s.Ub(48,"img",35),s.Yb(),s.Zb(49,"noscript"),s.Zb(50,"picture"),s.Ub(51,"source",34),s.Ub(52,"img",36),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Zb(53,"div",23),s.Zb(54,"section",24),s.Zb(55,"section",37),s.Jc(56,h,3,3,"picture",26),s.Jc(57,u,4,3,"noscript",26),s.Zb(58,"div",27),s.Zb(59,"div",4),s.Zb(60,"div",38),s.Jc(61,w,2,1,"div",26),s.Jc(62,v,25,0,"div",29),s.Yb(),s.Zb(63,"div",30),s.Zb(64,"div",31),s.Ub(65,"div",32),s.Ub(66,"img",39),s.Zb(67,"picture"),s.Ub(68,"source",34),s.Ub(69,"img",35),s.Yb(),s.Zb(70,"noscript"),s.Zb(71,"picture"),s.Ub(72,"source",34),s.Ub(73,"img",36),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb()),2&e&&(s.Ib(10),s.Mc(s.mc(11,22,"subnav.description")),s.Ib(13),s.Mc(s.mc(24,24,"subnav.title")),s.Ib(12),s.rc("ngIf",!i.isSmallScreen&&i.ready),s.Ib(1),s.rc("ngIf",!i.isSmallScreen&&i.ready),s.Ib(4),s.rc("ngIf",i.ready),s.Ib(1),s.rc("ngIf",!i.ready),s.Ib(6),s.rc("srcset",i.imageUrl+" 200w,"+i.imageUrl+" 400w,"+i.imageUrl+" 800w",s.Fc),s.Ib(1),s.rc("srcset",i.imageUrl+" 200w,"+i.imageUrl+" 400w,"+i.imageUrl+" 800w",s.Fc)("src",i.imageUrl,s.Fc),s.Ib(3),s.rc("srcset",i.imageUrl+" 200w,"+i.imageUrl+" 400w,"+i.imageUrl+" 800w",s.Fc),s.Ib(1),s.rc("srcset",i.imageUrl+" 200w,"+i.imageUrl+" 400w,"+i.imageUrl+" 800w",s.Fc)("src",i.imageUrl,s.Fc),s.Ib(4),s.rc("ngIf",!i.isSmallScreen&&i.ready),s.Ib(1),s.rc("ngIf",!i.isSmallScreen&&i.ready),s.Ib(4),s.rc("ngIf",i.ready),s.Ib(1),s.rc("ngIf",!i.ready),s.Ib(6),s.rc("srcset",i.imageUrl2+" 200w,"+i.imageUrl2+" 400w,"+i.imageUrl2+" 800w",s.Fc),s.Ib(1),s.rc("srcset",i.imageUrl2+" 200w,"+i.imageUrl2+" 400w,"+i.imageUrl2+" 800w",s.Fc)("src",i.imageUrl2,s.Fc),s.Ib(3),s.rc("srcset",i.imageUrl2+" 200w,"+i.imageUrl2+" 400w,"+i.imageUrl2+" 800w",s.Fc),s.Ib(1),s.rc("srcset",i.imageUrl2+" 200w,"+i.imageUrl2+" 400w,"+i.imageUrl2+" 800w",s.Fc)("src",i.imageUrl2,s.Fc))},directives:[r.k,c.a,b.a],pipes:[d.c],styles:[".img-align-1[_ngcontent-%COMP%]{z-index:-100;left:0}.img-align-1[_ngcontent-%COMP%], .img-align-2[_ngcontent-%COMP%]{display:block;position:absolute;width:calc(50% - 1px)!important;height:100%;top:0;transition:.5s ease-in-out;background-position:50%;background-repeat:no-repeat;background-size:cover}.img-align-2[_ngcontent-%COMP%]{right:0}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=s.Rb({type:e}),e.\u0275inj=s.Qb({imports:[[o.f.forChild(U)],o.f]}),e})(),Y=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=s.Rb({type:e}),e.\u0275inj=s.Qb({imports:[[r.b,f,d.b,b.b,c.b]]}),e})()},jeV5:function(e,i,t){"use strict";t.d(i,"a",function(){return s}),t.d(i,"b",function(){return n});var r=t("ofXK"),o=t("fXoL");let s=(()=>{class e{constructor(){this.shape="rectangle",this.animation="wave",this.borderRadius=null,this.size=null,this.width="100%",this.height="1rem"}containerClass(){return{"p-skeleton p-component":!0,"p-skeleton-circle":"circle"===this.shape,"p-skeleton-none":"none"===this.animation}}containerStyle(){return Object.assign(Object.assign({},this.style),this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius})}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=o.Nb({type:e,selectors:[["p-skeleton"]],inputs:{shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height",styleClass:"styleClass",style:"style"},decls:1,vars:4,consts:[[3,"ngClass","ngStyle"]],template:function(e,i){1&e&&o.Ub(0,"div",0),2&e&&(o.Kb(i.styleClass),o.rc("ngClass",i.containerClass())("ngStyle",i.containerStyle()))},directives:[r.i,r.l],styles:['.p-skeleton{overflow:hidden;position:relative}.p-skeleton:after{animation:p-skeleton-animation 1.2s infinite;content:"";height:100%;left:0;position:absolute;right:0;top:0;transform:translateX(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}@keyframes p-skeleton-animation{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}'],encapsulation:2,changeDetection:0}),e})(),n=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=o.Rb({type:e}),e.\u0275inj=o.Qb({imports:[[r.b]]}),e})()}}]);