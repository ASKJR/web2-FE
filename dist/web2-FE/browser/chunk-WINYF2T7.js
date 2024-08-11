import{a as Ee,b as xe}from"./chunk-FPOPPYRC.js";import{a as x}from"./chunk-KUMYF4UO.js";import{$ as E,$a as B,A as g,Ea as Z,Fa as F,G as d,H as y,Ha as ee,Ia as te,Ka as ie,M as C,O as m,Oa as re,Pa as oe,Qa as ae,Sa as le,Ta as k,U as l,Ua as $,V as a,Va as se,W as p,Za as j,_ as S,aa as h,ab as de,cb as me,eb as ue,fa as X,fb as ce,ga as K,gb as pe,ha as H,hb as fe,ia as _,ib as he,ja as s,ka as V,kb as ve,la as O,lb as ge,ma as M,mb as _e,na as w,oa as A,ob as Ce,r as N,ra as R,sa as J,ub as be,v as D,w as L,wa as U,wb as ye,xa as Y,z as v}from"./chunk-4OGKRTZH.js";import{a as ne}from"./chunk-T5ZVXQTA.js";import{d as Q}from"./chunk-FDERIQAA.js";var Se=Q(ne());var Te=()=>["/alunos/novo"],Ne=n=>["/alunos/editar",n];function De(n,t){n&1&&(l(0,"p"),s(1,"Nenhum(a) aluno(a) cadastrado(a)."),a())}function Le(n,t){if(n&1){let o=S();l(0,"tr")(1,"td"),s(2),a(),l(3,"td"),s(4),a(),l(5,"td"),s(6),a(),l(7,"td"),s(8),U(9,"date"),a(),l(10,"td",10)(11,"div",11)(12,"div",12)(13,"button",13),E("click",function(){let i=v(o).$implicit,r=h();return g(r.abrirAlunoModal(i))}),p(14,"i",14),s(15," Visualizar "),a()(),l(16,"div",12)(17,"button",15),p(18,"i",16),s(19," Editar "),a()(),l(20,"div",12)(21,"button",17),E("confirm",function(){let i=v(o).$implicit,r=h();return g(r.removerAluno(i))}),p(22,"i",18),s(23," Remover "),a()()()()()}if(n&2){let o=t.$implicit,e=h();d(2),V(o.nome),d(2),V(o.cpf),d(2),V(o.email),d(2),V(Y(9,6,o.nascimento,"dd/MM/yyyy")),d(9),m("routerLink",J(9,Ne,o.id)),d(4),m("swal",e.alertaCofirmaRemoverAluno(o.nome))}}var W=(()=>{let t=class t{constructor(e,i){this.alunoService=e,this.modalService=i,this.alunos=[]}ngOnInit(){this.alunos=this.listarTodos()}listarTodos(e){return this.alunoService.listarTodos(e).subscribe({next:i=>{i==null?this.alunos=[]:this.alunos=i},error:i=>{console.log(i)}}),this.alunos}filtrarAlunos(e){let r=e.target.value;r===""?this.alunos=this.listarTodos():this.alunos=this.listarTodos(r)}removerAluno(e){this.alunoService.remover(e.id).subscribe({complete:()=>{this.listarTodos()},error:i=>{console.log(i)}}),Se.default.fire({title:"Removido(a)!",text:"O(A) aluno(a) selecionado(a) foi removido(a) da base de dados.",icon:"success"})}alertaCofirmaRemoverAluno(e){return{title:`Voc\xEA realmente deseja remover o(a) aluno(a) ${e}?`,text:"N\xE3o ser\xE1 poss\xEDvel reverter essa a\xE7\xE3o.",icon:"warning",showCancelButton:!0,cancelButtonText:"Cancelar",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Sim, remover!"}}abrirAlunoModal(e){let i=this.modalService.open(ye);i.componentInstance.object=e,i.componentInstance.title="Aluno"}};t.\u0275fac=function(i){return new(i||t)(y(x),y(be))},t.\u0275cmp=D({type:t,selectors:[["app-listar-aluno"]],decls:26,vars:4,consts:[[4,"ngIf"],[1,"d-flex","bd-highlight","mb-3"],[1,"me-auto","p-2","bd-highlight"],["href","#","title","Novo","alt","Novo",1,"btn","btn-xs","btn-success",3,"routerLink"],["aria-hidden","true",1,"fa","fa-plus"],[1,"p-2","bd-highlight"],["type","search","placeholder","Pesquisar por nome...","aria-label","Pesquisar",1,"form-control","me-2",3,"input"],[1,"table-responsive"],[1,"table","table-striped","table-bordered","table-hover"],[4,"ngFor","ngForOf"],[2,"width","350px"],[1,"row","gx-2","gy-2"],[1,"col-auto"],["type","button","type","button","href","#","title","Visualizar","alt","Visualizar",1,"btn","btn-primary",3,"click"],[1,"fa-regular","fa-eye"],["type","button","href","#","title","Editar","alt","Editar",1,"btn","btn-secondary",3,"routerLink"],["aria-hidden","true",1,"fa","fa-edit"],["type","button","href","#","title","Remover","alt","Remover",1,"btn","btn-xs","btn-danger",3,"confirm","swal"],["aria-hidden","true",1,"fa","fa-times"]],template:function(i,r){i&1&&(l(0,"h1"),s(1,"Alunos(as)"),a(),p(2,"hr"),C(3,De,2,0,"p",0),l(4,"div",1)(5,"div",2)(6,"a",3),p(7,"i",4),s(8," Novo "),a()(),l(9,"div",5)(10,"input",6),E("input",function(f){return r.filtrarAlunos(f)}),a()()(),l(11,"div",7)(12,"table",8)(13,"tbody")(14,"tr")(15,"th"),s(16,"Nome"),a(),l(17,"th"),s(18,"CPF"),a(),l(19,"th"),s(20,"E-mail"),a(),l(21,"th"),s(22,"Nascimento"),a(),l(23,"th"),s(24,"A\xE7\xF5es"),a()(),C(25,Le,24,11,"tr",9),a()()()),i&2&&(d(3),m("ngIf",r.alunos.length===0),d(3),m("routerLink",R(3,Te)),d(19),m("ngForOf",r.alunos))},dependencies:[Z,F,k,re,ee],encapsulation:2});let n=t;return n})();var Re=["00000000000","11111111111","22222222222","33333333333","44444444444","55555555555","66666666666","77777777777","88888888888","99999999999","12345678909"],Fe=/[.-]/g,ke=/[^\d]/g,I=n=>{let t=n.split("").map(r=>parseInt(r,10)),o=t.length+1,i=t.map((r,c)=>r*(o-c)).reduce((r,c)=>r+c)%11;return i<2?0:11-i},G=(n,t)=>{let o=t?Fe:ke;return(n||"").replace(o,"")},Ve=n=>G(n).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/,"$1.$2.$3-$4"),ze=(n,t)=>{let o=G(n,t);if(!o||o.length!==11||Re.includes(o))return!1;let e=o.substr(0,9);return e+=I(e),e+=I(e),e.substr(-2)===o.substr(-2)},Pe=n=>{let t="";for(let o=0;o<9;o+=1)t+=Math.floor(Math.random()*9);return t+=I(t),t+=I(t),n?Ve(t):t},T={verifierDigit:I,strip:G,format:Ve,isValid:ze,generate:Pe};var b=Q(ne());var Oe=["formAluno"],$e=()=>["/alunos"];function je(n,t){if(n&1&&(l(0,"div",18)(1,"div",19),s(2," Digite o nome do(a) aluno(a). "),a(),l(3,"div",19),s(4," O nome do(a) aluno(a) deve conter ao menos 2 caracteres. "),a()()),n&2){h();let o=_(10);d(),m("hidden",!o.errors.required),d(2),m("hidden",!o.errors.minlength)}}function Be(n,t){if(n&1&&(l(0,"div",18)(1,"div",19),s(2,"CPF \xE9 obrigat\xF3rio."),a(),l(3,"div",19),s(4,"CPF inv\xE1lido."),a(),l(5,"div",19),s(6,"CPF j\xE1 registrado na base."),a()()),n&2){let o=h(),e=_(17);d(),m("hidden",!(e.errors!=null&&e.errors.required)),d(2),m("hidden",o.isCpfValid),d(2),m("hidden",!o.isCpfDuplicated)}}function qe(n,t){if(n&1&&(l(0,"div",18)(1,"div",19),s(2,"Digite o e-mail."),a(),l(3,"div",19),s(4," Formato de e-mail inv\xE1lido. "),a()()),n&2){h();let o=_(24);d(),m("hidden",!(o.errors!=null&&o.errors.required)),d(2),m("hidden",!(o.errors!=null&&o.errors.email))}}function We(n,t){if(n&1&&(l(0,"div",18)(1,"div",19),s(2," Digite a data de nascimento. "),a(),l(3,"div",19),s(4," A data precisa ter no m\xEDnimo 10 caracteres. "),a()()),n&2){h();let o=_(31);d(),m("hidden",!o.errors.required),d(2),m("hidden",!o.errors.minlength)}}function Ge(n,t){if(n&1){let o=S();l(0,"button",20),E("click",function(){v(o);let i=h();return g(i.handleClik())}),p(1,"i",21),s(2),a()}if(n&2){let o=h(),e=_(5);m("disabled",!o.isEdit&&(!e.form.valid||!o.isCpfValid||o.isCpfDuplicated)||o.isEdit&&!e.form.valid),d(2),O(" ",o.isEdit?"Atualizar":"Salvar"," ")}}var z=(()=>{let t=class t{constructor(e,i,r){this.alunoService=e,this.router=i,this.activatedRoute=r,this.aluno=new se,this.alunos=[],this.isEdit=!1,this.isViewMode=!1,this.isCpfValid=!1,this.isCpfDuplicated=!1}listarTodos(){return this.alunoService.listarTodos().subscribe({next:e=>{e==null?this.alunos=[]:this.alunos=e},error:e=>{console.log(e)}}),this.alunos}ngOnInit(){this.alunos=this.listarTodos();let e=this.activatedRoute.snapshot.params.id;e?(this.router.url.includes("visualizar")?this.isViewMode=!0:this.isEdit=!0,this.alunoService.buscarPorId(+e).subscribe({next:i=>{i!=null?(i.nascimento=de(i.nascimento),this.aluno=i):console.log("error")},error:i=>{b.default.fire({icon:"error",title:"Oops...",text:"Aluno(a) n\xE3o encontrado."}),this.router.navigate(["/alunos"])}})):(this.isEdit=!1,this.isViewMode=!1)}onCpfChange(){this.isCpfValid=T.isValid(this.aluno.cpf),this.isCpfDuplicated=this.alunos.filter(e=>e.cpf===T.format(this.aluno.cpf)).length>0}handleClik(){this.isEdit?this.editar():this.inserir()}inserir(){this.formAluno.form.valid&&this.isCpfValid&&!this.isCpfDuplicated&&(this.aluno.cpf=T.format(this.aluno.cpf),this.aluno.nascimento=B(this.aluno.nascimento),this.alunoService.inserir(this.aluno).subscribe({next:e=>{b.default.fire({title:"Sucesso",text:"O(A) Aluno(a) foi criado(a) na base de dados.",icon:"success"})},error:e=>{e.status==409?b.default.fire({icon:"error",title:"Oops...",text:"Aluno(a) j\xE1 existente."}):b.default.fire({icon:"error",title:"Oops...",text:`[${e.status}] ${e.message}`})},complete:()=>{this.router.navigate(["/alunos"])}}))}editar(){this.formAluno.valid&&(this.aluno.cpf=T.format(this.aluno.cpf),this.aluno.nascimento=B(this.aluno.nascimento),this.alunoService.atualizar(this.aluno).subscribe({next:e=>{b.default.fire({title:"Sucesso",text:"Suas altera\xE7\xF5es foram salvas na base de dados.",icon:"success"})},error:e=>{e.status==409?b.default.fire({icon:"error",title:"Oops...",text:"Aluno(a) j\xE1 existente."}):b.default.fire({icon:"error",title:"Oops...",text:`[${e.status}] ${e.message}`})},complete:()=>{this.router.navigate(["/alunos"])}}))}};t.\u0275fac=function(i){return new(i||t)(y(x),y(le),y(ae))},t.\u0275cmp=D({type:t,selectors:[["app-visualizar-inserir-editar-aluno"]],viewQuery:function(i,r){if(i&1&&X(Oe,5),i&2){let c;K(c=H())&&(r.formAluno=c.first)}},decls:42,vars:17,consts:[["formAluno","ngForm"],["nome","ngModel"],["cpf","ngModel"],["email","ngModel"],["nascimento","ngModel"],[1,"well"],[1,"form-group"],["for","nome"],["type","text","id","nome","name","nome","minlength","2","required","","placeholder","Digite seu nome...","autocomplete","off",1,"form-control",3,"ngModelChange","disabled","ngModel"],["class","alert alert-danger",4,"ngIf"],["type","text","id","cpf","name","cpf","mask","000.000.000-00","required","","placeholder","000.000.000-00","autocomplete","off",1,"form-control",3,"ngModelChange","ngModel","disabled"],["type","text","placeholder","exemplo@domain.com","id","email","name","email","required","","email","","autocomplete","off",1,"form-control",3,"ngModelChange","ngModel","disabled"],["type","text","id","nascimento","name","nascimento","mask","d0/M0/0000","required","","placeholder","Digite sua data de nascimento no formato dd/MM/yyyy...","autocomplete","off","minlength","10",1,"form-control",3,"ngModelChange","dropSpecialCharacters","ngModel","disabled"],[1,"row","gx-2","gy-2"],[1,"col-auto"],["type","button","class","btn btn-primary",3,"disabled","click",4,"ngIf"],[1,"btn","btn-secondary",3,"routerLink"],["aria-hidden","true",1,"fa","fa-arrow-left"],[1,"alert","alert-danger"],[3,"hidden"],["type","button",1,"btn","btn-primary",3,"click","disabled"],["aria-hidden","true",1,"fa","fa-save"]],template:function(i,r){if(i&1){let c=S();l(0,"h1"),s(1),a(),p(2,"hr"),l(3,"div",5)(4,"form",null,0)(6,"div",6)(7,"label",7),s(8,"Nome:"),a(),l(9,"input",8,1),A("ngModelChange",function(u){return v(c),w(r.aluno.nome,u)||(r.aluno.nome=u),g(u)}),a(),C(11,je,5,2,"div",9),a(),p(12,"br"),l(13,"div",6)(14,"label",7),s(15,"CPF:"),a(),l(16,"input",10,2),A("ngModelChange",function(u){return v(c),w(r.aluno.cpf,u)||(r.aluno.cpf=u),g(u)}),E("ngModelChange",function(){return v(c),g(r.onCpfChange())}),a(),C(18,Be,7,3,"div",9),a(),p(19,"br"),l(20,"div",6)(21,"label",7),s(22,"E-mail:"),a(),l(23,"input",11,3),A("ngModelChange",function(u){return v(c),w(r.aluno.email,u)||(r.aluno.email=u),g(u)}),a(),C(25,qe,5,2,"div",9),a(),p(26,"br"),l(27,"div",6)(28,"label",7),s(29,"Data Nascimento:"),a(),l(30,"input",12,4),A("ngModelChange",function(u){return v(c),w(r.aluno.nascimento,u)||(r.aluno.nascimento=u),g(u)}),a(),C(32,We,5,2,"div",9),a(),p(33,"br"),l(34,"div",6)(35,"div",13)(36,"div",14),C(37,Ge,3,2,"button",15),a(),l(38,"div",14)(39,"a",16),p(40,"i",17),s(41," Voltar "),a()()()()()()}if(i&2){let c=_(10),f=_(17),u=_(24),P=_(31);d(),O(" ",r.isEdit?"Editar":r.isViewMode?"Visualizar":"Novo(a)",` Aluno(a)
`),d(8),m("disabled",r.isViewMode),M("ngModel",r.aluno.nome),d(2),m("ngIf",c.errors&&(c.dirty||c.touched)),d(5),M("ngModel",r.aluno.cpf),m("disabled",r.isViewMode||r.isEdit),d(2),m("ngIf",(f.errors||f.invalid||!r.isCpfValid||!r.isEdit&&r.isCpfDuplicated)&&(f.dirty||f.touched)&&!r.isViewMode),d(5),M("ngModel",r.aluno.email),m("disabled",r.isViewMode),d(2),m("ngIf",(u.errors||u.invalid)&&(u.dirty||u.touched)),d(5),m("dropSpecialCharacters",!1),M("ngModel",r.aluno.nascimento),m("disabled",r.isViewMode),d(2),m("ngIf",P.errors&&(P.dirty||P.touched)),d(5),m("ngIf",!r.isViewMode),d(2),m("routerLink",R(16,$e))}},dependencies:[F,k,he,me,ue,ce,ve,_e,ge,fe,pe,xe],encapsulation:2});let n=t;return n})();var Qe=[{path:"",component:W},{path:"listar",component:W},{path:"novo",component:z},{path:"editar/:id",component:z},{path:"visualizar/:id",component:z}],Me=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=L({type:t}),t.\u0275inj=N({imports:[$.forChild(Qe),$]});let n=t;return n})();var yt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=L({type:t}),t.\u0275inj=N({providers:[{provide:j,useValue:"alunos"},{provide:x,useFactory:(e,i)=>new x(e,i),deps:[j,ie]},Ee()],imports:[te,Me,Ce,oe.forChild()]});let n=t;return n})();export{yt as AlunoModule};
