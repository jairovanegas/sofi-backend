"use strict";(self["webpackChunkmockups"]=self["webpackChunkmockups"]||[]).push([[204],{3943:(e,l,a)=>{a.r(l),a.d(l,{default:()=>M});var o=a(3673),n=a(2323),t=a(1959),u=a(4417);const c=(0,o.aZ)({setup(e){const l=(0,o.Rr)();function a(e){if(e.props){if(e.props.label)return{label:e.props.label?e.props.label:"",slot:e};{const l=e.children.default()[0];return{label:l.props.label?l.props.label:"",slot:e}}}{const l=e.children[0];return{label:l.props.label?l.props.label:"",slot:e}}}const n=()=>{const e=l.default();console.log(e);const n=a(e[0]);return(0,o.h)("div",[(0,o.h)("div",{class:"row shadow-1 presentador-mobile-top"},(0,o.h)("span",{class:"col q-pa-sm"},n.label)),(0,o.h)("div",{class:["column","presentador-mobile-bottom","shadow-2"]},[(0,o.h)("div",{class:"row items-center"},(0,o.h)("span",{class:"col q-pa-sm"},n.slot))])])};return(e,l)=>((0,o.wg)(),(0,o.j4)(n))}}),s=c,r=s;var d=a(5826),i=a(6665),p=a(4826),m=a(7536),b=a(1185);class f{constructor({id:e,credito:l,debito:a,descripcion:o,suma:n,fecha:t,facturaID:u,clienteID:c,recibidoDeNombre:s}){this.id=e||(0,b.Z)(),this.fecha=t||(0,m.l)(),this.suma=n||0,this.descripcion=o||"",this.recibidoDe=c||"",this.facturaID=u||"",this.debito=a||0,this.credito=l||0,this.recibidoDeNombre=s||""}}var v=a(852),h=a(8825);const w=e=>((0,o.dD)("data-v-5650c389"),e=e(),(0,o.Cn)(),e),_=w((()=>(0,o._)("span",{class:"titulo-pagina"},"Recibo de caja",-1))),D={class:"comprobante"},W=w((()=>(0,o._)("br",null,null,-1))),Z={class:"row items-center justify-end"},V=w((()=>(0,o._)("br",null,null,-1))),q=w((()=>(0,o._)("br",null,null,-1))),C=(0,o.aZ)({setup(e){const l=(0,h.Z)(),a=(0,t.iH)(!1),c=(0,t.iH)(0),s=(0,t.iH)(new f({}));function m(){l.dialog({component:v.Z}).onOk((e=>{e.clienteID?s.value.recibidoDe=e.clienteID:s.value.recibidoDe=e.proveedorID,s.value.recibidoDeNombre=e.nombre}))}return(e,b)=>{const f=(0,o.up)("q-space"),v=(0,o.up)("q-btn"),h=(0,o.up)("q-date"),w=(0,o.up)("q-popup-proxy"),C=(0,o.up)("q-icon"),g=(0,o.up)("q-input"),y=(0,o.up)("q-card-section"),k=(0,o.up)("q-card"),Q=(0,o.up)("q-dialog"),U=(0,o.up)("q-page"),I=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(U,{class:"column q-ml-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{flat:""},{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o._)("div",{style:(0,n.j5)({"padding-top":c.value+"px"}),class:"row items-center"},[_,(0,o.Wm)(f),(0,o._)("span",D,"Recibo "+(0,n.zw)(s.value.id),1)],4),W,(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,{label:"Fecha",modelValue:s.value.fecha,"onUpdate:modelValue":b[1]||(b[1]=e=>s.value.fecha=e)},{append:(0,o.w5)((()=>[(0,o.Wm)(C,{class:"cursor-pointer",name:"event"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{ref:"qDateProxy",cover:"","transition-hide":"scale","transition-show":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{modelValue:s.value.fecha,"onUpdate:modelValue":b[0]||(b[0]=e=>s.value.fecha=e),mask:"DD/MM/YYYY"},{default:(0,o.w5)((()=>[(0,o._)("div",Z,[(0,o.wy)((0,o.Wm)(v,{color:"primary",flat:"",label:"Cerrar"},null,512),[[I]])])])),_:1},8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,o.Wm)(u.Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,{label:"Cantidad",modelValue:s.value.cantidad,"onUpdate:modelValue":b[2]||(b[2]=e=>s.value.cantidad=e)},null,8,["modelValue"]),(0,o.Wm)(g,{label:"Por concepto de",modelValue:s.value.porConceptoDe,"onUpdate:modelValue":b[3]||(b[3]=e=>s.value.porConceptoDe=e)},null,8,["modelValue"])])),_:1}),V,(0,o.Wm)(u.Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,{label:"Recibido de",modelValue:s.value.recibidoDe,"onUpdate:modelValue":b[4]||(b[4]=e=>s.value.recibidoDe=e),readonly:"",onClick:m},null,8,["modelValue"]),(0,o.Wm)(g,{label:"Nombre",modelValue:s.value.recibidoDeNombre,"onUpdate:modelValue":b[5]||(b[5]=e=>s.value.recibidoDeNombre=e),readonly:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(u.Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p.Z,{"help-key":"recibo:factura"},{default:(0,o.w5)((()=>[(0,o._)("span",(0,n.vs)((0,o.F4)({label:"# Factura"})),"001",16)])),_:1}),(0,o._)("span",(0,n.vs)((0,o.F4)({label:"Debito"})),"1234",16),(0,o._)("span",(0,n.vs)((0,o.F4)({label:"Credito"})),"123",16)])),_:1}),q,(0,o.Wm)(d.Z,{btns:[{label:"Cancelar",fn:()=>{(0,t.SU)(l).dialog({component:i.Z,componentProps:{mensaje:"¿Seguro que quieres anular?"}}).onOk((e=>{(0,t.SU)(l).notify("Anulado")})).onCancel((()=>{(0,t.SU)(l).notify("Cancelado")}))},class:"revert-btn"},{label:"Guardar",fn:()=>{(0,t.SU)(l).notify("Sirve")}}]},null,8,["btns"]),(0,o.Wm)(Q,{modelValue:a.value,"onUpdate:modelValue":b[6]||(b[6]=e=>a.value=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"col",label:"Nombre"}),(0,o.Wm)(g,{class:"col",label:"Codigo"}),(0,o.Wm)(v,{label:"Seleccinar"})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})}}});var g=a(4260),y=a(4379),k=a(151),Q=a(5589),U=a(2025),I=a(4842),S=a(4554),N=a(3944),P=a(6915),j=a(8240),F=a(6778),x=a(677),R=a(7518),Y=a.n(R);const H=(0,g.Z)(C,[["__scopeId","data-v-5650c389"]]),M=H;Y()(C,"components",{QPage:y.Z,QCard:k.Z,QCardSection:Q.Z,QSpace:U.Z,QInput:I.Z,QIcon:S.Z,QPopupProxy:N.Z,QDate:P.Z,QBtn:j.Z,QDialog:F.Z}),Y()(C,"directives",{ClosePopup:x.Z})}}]);