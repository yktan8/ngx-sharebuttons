(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{CytV:function(l,n,o){"use strict";o.r(n);var e=o("LoAr"),u=function(){return function(){}}(),a=o("C9Ky"),t=o("pLqg"),s=o("7tlY"),r=o("Ckq/"),i=o("//aV"),b=o("U+go"),c=o("JZJv"),f=o("WT9V"),d=o("QoAl"),m=o("320Y"),p=o("ChgE"),g=o("fxml"),h=o("YzpY"),A=o("TeY9"),w=o("WV+C"),v=o("bcGG"),k=o("WjFU"),C=o("fDe+"),P=o("jQpT"),M=function(){return function(){this.code={import:"import { library } from '@fortawesome/fontawesome-svg-core';\n\nimport { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';\nimport { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';\nimport { faRedditAlien } from '@fortawesome/free-brands-svg-icons/faRedditAlien';\nimport { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';\nimport { faGooglePlusG } from '@fortawesome/free-brands-svg-icons/faGooglePlusG';\nimport { faTumblr } from '@fortawesome/free-brands-svg-icons/faTumblr';\nimport { faPinterestP } from '@fortawesome/free-brands-svg-icons/faPinterestP';\nimport { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';\nimport { faVk } from '@fortawesome/free-brands-svg-icons/faVk';\nimport { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';\nimport { faTelegramPlane } from '@fortawesome/free-brands-svg-icons/faTelegramPlane';\nimport { faStumbleupon } from '@fortawesome/free-brands-svg-icons/faStumbleupon';\nimport { faXing } from '@fortawesome/free-brands-svg-icons/faXing';\n\nimport { faCommentAlt } from '@fortawesome/free-solid-svg-icons/faCommentAlt';\nimport { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';\nimport { faEllipsisH } from '@fortawesome/free-solid-svg-icons/faEllipsisH';\nimport { faLink } from '@fortawesome/free-solid-svg-icons/faLink';\nimport { faExclamation } from '@fortawesome/free-solid-svg-icons/faExclamation';\nimport { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';\nimport { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';\nimport { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';\n\nconst icons = [\n  faFacebookF, faTwitter, faLinkedinIn, faGooglePlusG, faPinterestP, faRedditAlien, faTumblr,\n  faWhatsapp, faVk, faFacebookMessenger, faTelegramPlane, faStumbleupon, faXing, faCommentAlt,\n  faEnvelope, faCheck, faPrint, faExclamation, faLink, faEllipsisH, faMinus\n];\n\nlibrary.add(...icons);",icons:"import './icons';",libraryMethod:"import { library } from '@fortawesome/fontawesome-svg-core';\n\nimport { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';\n\nconst icons = [\n  // ... other icons\n  faFacebookSquare\n];\n\nlibrary.add(...icons);\n\nconst shareProp = {\n  facebook: {\n    icon: ['fab', 'facebook-square']\n  }\n};\n\n@NgModule({\n  imports: [\n    ShareButtonsModule.forRoot({ prop: shareProp })\n  ]\n})",literalMethod:"import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';\nconst shareProp = {\n  facebook: {\n    icon: faFacebookSquare\n  }\n};\n@NgModule({\n  imports: [\n    ShareButtonsModule.forRoot({ prop: shareProp })\n  ]\n})\n"}}}(),y=e.qb({encapsulation:0,styles:[[""]],data:{}});function K(l){return e.Mb(2,[(l()(),e.sb(0,0,null,null,58,"ng-scrollbar",[["thumbClass","page-scrollbar-thumb"]],[[2,"ng-scrollbar-auto-hide",null]],null,null,i.b,i.a)),e.rb(1,4440064,null,0,b.a,[c.a,f.d,e.C],{autoHide:[0,"autoHide"],thumbClass:[1,"thumbClass"]},null),(l()(),e.sb(2,0,null,0,3,"header",[],null,null,null,d.b,d.a)),e.rb(3,49152,null,0,m.a,[],null,null),(l()(),e.sb(4,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Icons Guide"])),(l()(),e.sb(6,0,null,0,50,"div",[["class","page-content container"]],null,null,null,null,null)),(l()(),e.sb(7,0,null,null,9,"section",[],null,null,null,null,null)),(l()(),e.sb(8,0,null,null,2,"section-title",[],null,null,null,p.b,p.a)),e.rb(9,49152,null,0,g.a,[],null,null),(l()(),e.Kb(-1,0,["Overview"])),(l()(),e.sb(11,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["This plugin relies on "])),(l()(),e.sb(13,0,null,null,2,"b",[],null,null,null,null,null)),(l()(),e.sb(14,0,null,null,1,"a",[["href","https://fontawesome.com"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["FontAwesome"])),(l()(),e.Kb(-1,null,[" to display share buttons icons. By default the aliases of the share icons are selected, but you can still choose different icons aliases in the config should import the icons manually."])),(l()(),e.sb(17,0,null,null,15,"section",[],null,null,null,null,null)),(l()(),e.sb(18,0,null,null,2,"section-title",[],null,null,null,p.b,p.a)),e.rb(19,49152,null,0,g.a,[],null,null),(l()(),e.Kb(-1,0,["Usage"])),(l()(),e.sb(21,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["A good place to import the icons is in "])),(l()(),e.sb(23,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["src/main.ts"])),(l()(),e.Kb(-1,null,[" file, but since there are too many icons to import, it is more elegant to have the icons imported in their own file "])),(l()(),e.sb(26,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Create a new file "])),(l()(),e.sb(28,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["src/icons.ts"])),(l()(),e.Kb(-1,null,[", the following code includes all the icons this package uses, so you should exclude the icons you do not need."])),(l()(),e.sb(31,0,null,null,1,"hl-code",[],null,null,null,h.b,h.a)),e.rb(32,4243456,null,0,A.a,[w.a,f.d],{code:[0,"code"],height:[1,"height"]},null),(l()(),e.sb(33,0,null,null,3,"section",[],null,null,null,null,null)),(l()(),e.sb(34,0,null,null,2,"note",[["icon","lightbulb"]],null,null,null,v.b,v.a)),e.rb(35,49152,null,0,k.a,[],{icon:[0,"icon"]},null),(l()(),e.Kb(-1,0,[" Use the deep link to import an icon to avoid importing the rest in your bundle. "])),(l()(),e.sb(37,0,null,null,7,"section",[],null,null,null,null,null)),(l()(),e.sb(38,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Now in "])),(l()(),e.sb(40,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["src/main.ts"])),(l()(),e.Kb(-1,null,[", add the following line:"])),(l()(),e.sb(43,0,null,null,1,"hl-code",[],null,null,null,h.b,h.a)),e.rb(44,4243456,null,0,A.a,[w.a,f.d],{code:[0,"code"]},null),(l()(),e.sb(45,0,null,null,11,"section",[],null,null,null,null,null)),(l()(),e.sb(46,0,null,null,2,"section-title",[],null,null,null,p.b,p.a)),e.rb(47,49152,null,0,g.a,[],null,null),(l()(),e.Kb(-1,0,["Custom icons"])),(l()(),e.sb(49,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Let's say you want to use facebook square icon instead of the default one"])),(l()(),e.sb(51,0,null,null,1,"hl-code",[],null,null,null,h.b,h.a)),e.rb(52,4243456,null,0,A.a,[w.a,f.d],{code:[0,"code"],height:[1,"height"]},null),(l()(),e.sb(53,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["You can also set the icon directly"])),(l()(),e.sb(55,0,null,null,1,"hl-code",[],null,null,null,h.b,h.a)),e.rb(56,4243456,null,0,A.a,[w.a,f.d],{code:[0,"code"]},null),(l()(),e.sb(57,0,null,0,1,"footer",[],null,null,null,C.b,C.a)),e.rb(58,49152,null,0,P.a,[],null,null)],function(l,n){var o=n.component;l(n,1,0,!0,"page-scrollbar-thumb"),l(n,32,0,o.code.import,400),l(n,35,0,"lightbulb"),l(n,44,0,o.code.icons),l(n,52,0,o.code.libraryMethod,400),l(n,56,0,o.code.literalMethod)},function(l,n){l(n,0,0,e.Cb(n,1).autoHideClass)})}function F(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,1,"icons",[],null,null,null,K,y)),e.rb(1,49152,null,0,M,[],null,null)],null,null)}var L=e.ob("icons",M,F,{},{},[]),x=o("LYzL"),S=o("y7gG"),O=o("SeAg"),q=o("eXL1"),T=o("C7Lb"),j=o("CRa1"),E=o("SECt"),G=o("s8WJ"),_=o("SPdK"),V=o("IfiR"),H=o("981U"),I=o("X7Hn"),W=o("EAoM"),Y=o("a198"),X=o("IvSS"),R=o("V3Ng"),U=o("euho"),N=o("abkR"),z=o("Ho7M"),B=o("0xYh"),J=o("+3V+"),D=o("dgjn"),Q=o("GcYS"),Z=o("8xy9"),$=o("e8uv"),ll=o("rXXt"),nl=o("Hfg7"),ol=o("XIB+"),el=o("z1EI"),ul=o("qXP9"),al=o("5dmV"),tl=o("UelK"),sl=o("WgBV"),rl=o("LxDK"),il=o("V7OE"),bl=o("AFqu"),cl=o("wEfT"),fl=o("FOLC"),dl=o("vA/A"),ml=o("6yYy"),pl=o("PCNd"),gl=o("rh80");o.d(n,"IconsPageModuleNgFactory",function(){return hl});var hl=e.pb(u,[],function(l){return e.zb([e.Ab(512,e.j,e.eb,[[8,[a.a,t.a,s.a,r.a,L]],[3,e.j],e.y]),e.Ab(4608,f.n,f.m,[e.v,[2,f.z]]),e.Ab(4608,x.b,x.b,[]),e.Ab(4608,S.c,S.c,[]),e.Ab(4608,O.f,x.c,[[2,x.g],[2,x.l]]),e.Ab(4608,q.c,q.c,[q.i,q.e,e.j,q.h,q.f,e.r,e.A,f.d,T.b,[2,f.h]]),e.Ab(5120,q.j,q.k,[q.c]),e.Ab(5120,j.a,j.b,[q.c]),e.Ab(5120,E.b,E.c,[q.c]),e.Ab(5120,G.c,G.d,[q.c]),e.Ab(135680,G.e,G.e,[q.c,e.r,[2,f.h],[2,G.b],G.c,[3,G.e],q.e]),e.Ab(4608,_.j,_.i,[_.d,_.g]),e.Ab(5120,e.b,function(l,n){return[_.m(l,n)]},[f.d,e.C]),e.Ab(4608,V.p,V.p,[]),e.Ab(4608,V.d,V.d,[]),e.Ab(1073742336,f.c,f.c,[]),e.Ab(1073742336,H.r,H.r,[[2,H.x],[2,H.o]]),e.Ab(1073742336,I.p,I.p,[]),e.Ab(1073742336,T.a,T.a,[]),e.Ab(1073742336,x.l,x.l,[[2,x.d],[2,O.g]]),e.Ab(1073742336,W.l,W.l,[]),e.Ab(1073742336,Y.d,Y.d,[]),e.Ab(1073742336,w.b,w.b,[]),e.Ab(1073742336,X.c,X.c,[]),e.Ab(1073742336,R.h,R.h,[]),e.Ab(1073742336,x.u,x.u,[]),e.Ab(1073742336,S.d,S.d,[]),e.Ab(1073742336,U.c,U.c,[]),e.Ab(1073742336,N.f,N.f,[]),e.Ab(1073742336,q.g,q.g,[]),e.Ab(1073742336,x.s,x.s,[]),e.Ab(1073742336,x.q,x.q,[]),e.Ab(1073742336,z.d,z.d,[]),e.Ab(1073742336,j.d,j.d,[]),e.Ab(1073742336,B.a,B.a,[]),e.Ab(1073742336,E.e,E.e,[]),e.Ab(1073742336,J.c,J.c,[]),e.Ab(1073742336,D.b,D.b,[]),e.Ab(1073742336,Q.c,Q.c,[]),e.Ab(1073742336,x.m,x.m,[]),e.Ab(1073742336,Z.b,Z.b,[]),e.Ab(1073742336,$.c,$.c,[]),e.Ab(1073742336,ll.c,ll.c,[]),e.Ab(1073742336,nl.a,nl.a,[]),e.Ab(1073742336,ol.d,ol.d,[]),e.Ab(1073742336,el.a,el.a,[]),e.Ab(1073742336,G.h,G.h,[]),e.Ab(1073742336,ul.b,ul.b,[]),e.Ab(1073742336,al.a,al.a,[]),e.Ab(1073742336,_.e,_.e,[]),e.Ab(1073742336,tl.b,tl.b,[]),e.Ab(1073742336,sl.b,sl.b,[]),e.Ab(1073742336,rl.a,rl.a,[]),e.Ab(1073742336,il.a,il.a,[[2,_.k],e.C]),e.Ab(1073742336,V.o,V.o,[]),e.Ab(1073742336,V.g,V.g,[]),e.Ab(1073742336,V.n,V.n,[]),e.Ab(1073742336,c.c,c.c,[]),e.Ab(1073742336,b.d,b.d,[]),e.Ab(1073742336,b.b,b.b,[]),e.Ab(1073742336,bl.c,bl.c,[]),e.Ab(1073742336,cl.d,cl.d,[]),e.Ab(1073742336,fl.f,fl.f,[]),e.Ab(1073742336,dl.b,dl.b,[]),e.Ab(1073742336,ml.b,ml.b,[]),e.Ab(1073742336,pl.a,pl.a,[]),e.Ab(1073742336,u,u,[]),e.Ab(256,Y.a,{separatorKeyCodes:[gl.f]},[]),e.Ab(1024,H.m,function(){return[[{path:"",component:M}]]},[])])})},WjFU:function(l,n,o){"use strict";o.d(n,"a",function(){return e});var e=function(){return function(){this.icon="info"}}()},bcGG:function(l,n,o){"use strict";var e=o("LoAr"),u=o("iwai"),a=o("FOLC"),t=o("SeAg");o("WjFU"),o.d(n,"a",function(){return s}),o.d(n,"b",function(){return r});var s=e.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.note-icon[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;width:80px;display:flex;justify-content:center;align-items:center;background-color:#00bcd4}fa-icon[_ngcontent-%COMP%]{font-size:1.7em;color:#fff}.note-content[_ngcontent-%COMP%]{margin-left:80px;text-align:justify;padding:.8em 1em}section[_ngcontent-%COMP%]{min-height:80px;position:relative;margin:4em 0;display:flex;align-items:center;background-color:#e0f7fa;border-radius:.5em;box-shadow:0 3px 10px rgba(0,0,0,.1);overflow:hidden}.note-coffee[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background-color:#d7ccc8}.note-coffee[_ngcontent-%COMP%]   .note-icon[_ngcontent-%COMP%]{background-color:#6d4c41}.note-lightbulb[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background-color:#dcedc8}.note-lightbulb[_ngcontent-%COMP%]   .note-icon[_ngcontent-%COMP%]{background-color:#7cb342}"]],data:{}});function r(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,7,"span",[],[[8,"className",0]],null,null,null,null)),(l()(),e.sb(1,0,null,null,6,"section",[],null,null,null,null,null)),(l()(),e.sb(2,0,null,null,3,"span",[["class","note-icon"]],null,null,null,null,null)),(l()(),e.sb(3,0,null,null,2,"fa-icon",[["class","ng-fa-icon"]],[[8,"innerHTML",1]],null,null,u.b,u.a)),e.rb(4,573440,null,0,a.a,[t.c,a.b],{iconProp:[0,"iconProp"]},null),e.Db(5,2),(l()(),e.sb(6,0,null,null,1,"div",[["class","note-content"]],null,null,null,null,null)),e.Bb(null,0)],function(l,n){var o=l(n,5,0,"fas",n.component.icon);l(n,4,0,o)},function(l,n){l(n,0,0,e.ub(1,"note note-",n.component.icon,"")),l(n,3,0,e.Cb(n,4).renderedIconHTML)})}}}]);