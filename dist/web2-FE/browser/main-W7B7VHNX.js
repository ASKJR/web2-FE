import{b as L}from"./chunk-UEQAXF6Y.js";import{$ as g,Da as v,G as c,La as h,Ma as A,Na as C,O as f,Pa as M,Ra as w,Ta as k,U as o,Ua as m,V as n,W as a,ja as r,pb as x,qb as D,r as l,rb as E,sa as b,sb as N,tb as S,v as p,vb as y,w as s}from"./chunk-4OGKRTZH.js";import"./chunk-FDERIQAA.js";var R=[{path:"alunos",loadChildren:()=>import("./chunk-WINYF2T7.js").then(e=>e.AlunoModule)},{path:"cursos",loadChildren:()=>import("./chunk-J3GQHEQI.js").then(e=>e.CursoModule)},{path:"matriculas",loadChildren:()=>import("./chunk-DZQEB2W2.js").then(e=>e.MatriculaModule)},{path:"",redirectTo:"alunos",pathMatch:"full"}],I=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s({type:t}),t.\u0275inj=l({imports:[m.forRoot(R),h,m]});let e=t;return e})();var _=e=>({show:e}),T=(()=>{let t=class t{constructor(){this.title="web2-FE",this.isCollapsed=!0}toggleMenu(){this.isCollapsed=!this.isCollapsed}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=p({type:t,selectors:[["app-root"]],decls:35,vars:3,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],["href","#","routerLink","/alunos",1,"navbar-brand","nav-link"],[1,"fa-solid","fa-globe"],["type","button","aria-controls","navbarContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler",2,"left","-15px","position","relative",3,"click"],[1,"navbar-toggler-icon"],["id","navbarContent",1,"collapse","navbar-collapse",3,"ngClass"],[1,"navbar-nav","ml-auto"],[1,"nav-item"],["href","#","routerLink","/alunos",1,"nav-link"],["href","#","routerLink","/cursos",1,"nav-link"],["href","#","routerLink","/matriculas",1,"nav-link"],["ngbDropdown","",1,"nav-item"],["tabindex","0","ngbDropdownToggle","","id","navbarDropdown1","role","button",1,"nav-link"],["ngbDropdownMenu","","aria-labelledby","navbarDropdown1",1,"dropdown-menu"],["ngbDropdownItem","","href","#","routerLink","/alunos"],["ngbDropdownItem","","href","#","routerLink","/cursos"],["ngbDropdownItem","","href","#","routerLink","/matriculas"],[1,"container-fluid"],[1,"container-lg"],[1,"row"],[1,"col-12","col-lg"]],template:function(i,d){i&1&&(o(0,"nav",0)(1,"a",1),r(2," \xA0\xA0\xA0"),a(3,"i",2),r(4," WEB2-FE "),n(),o(5,"button",3),g("click",function(){return d.toggleMenu()}),a(6,"span",4),n(),o(7,"div",5)(8,"ul",6)(9,"li",7)(10,"a",8),r(11," \xA0\xA0\xA0Alunos"),n()(),o(12,"li",7)(13,"a",9),r(14," \xA0\xA0\xA0Cursos"),n()(),o(15,"li",7)(16,"a",10),r(17," \xA0\xA0\xA0Matriculas"),n()(),o(18,"li",11)(19,"a",12),r(20," \xA0\xA0\xA0Cadastros "),n(),o(21,"div",13)(22,"a",14),r(23," \xA0\xA0\xA0Alunos"),n(),o(24,"a",15),r(25," \xA0\xA0\xA0Cursos"),n(),o(26,"a",16),r(27," \xA0\xA0\xA0Matriculas"),n()()()()()(),a(28,"br")(29,"br"),o(30,"div",17)(31,"div",18)(32,"div",19)(33,"div",20),a(34,"router-outlet"),n()()()()),i&2&&(c(7),f("ngClass",b(1,_,!d.isCollapsed)))},dependencies:[v,w,k,N,E,D,x],encapsulation:2});let e=t;return e})();var j=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s({type:t,bootstrap:[T]}),t.\u0275inj=l({imports:[C,I,M.forRoot(),y,S,L]});let e=t;return e})();A().bootstrapModule(j,{ngZoneEventCoalescing:!0}).catch(e=>console.error(e));