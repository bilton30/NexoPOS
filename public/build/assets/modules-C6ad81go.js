import{P as g,b,d as c,G as M,v as k}from"./bootstrap-DrcjF3bc.js";import{_ as x}from"./currency-Dtag6qPd.js";import{c as C}from"./ns-prompt-popup-D8lO1yew.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as P,o as i,c as u,a as e,t as a,B,e as h,F as E,b as N,i as p,g as v,w as m,f as y}from"./runtime-core.esm-bundler-VrNrzzXC.js";import"./chart-CAYz1qzV.js";const D={name:"ns-modules",props:["url","upload"],data(){return{rawModules:[],searchPlaceholder:x('Press "/" to search modules'),total_enabled:0,total_disabled:0,total_invalid:0,searchText:"",searchTimeOut:null}},mounted(){this.loadModules().subscribe(),document.addEventListener("keypress",t=>{t.key==="/"&&this.$refs.searchField!==null&&setTimeout(()=>{this.$refs.searchField.select()},1)})},watch:{},computed:{noModules(){return Object.values(this.modules).length===0},modules(){if(this.searchText.length>0){const t=Object.values(this.rawModules).filter(r=>{const d=new RegExp(this.searchText,"gi"),n=r.name.match(d);return n!==null?n.length>0:!1}),s=new Object;for(let r=0;r<t.length;r++)s[t[r].namespace]=t[r];return s}return this.rawModules},noModuleMessage(){return x("No module has been uploaded yet.")}},methods:{__:x,openPopupDetails(t){g.show(C,{title:x("{module}").replace("{module}",t.name),message:t.description})},download(t){document.location="/dashboard/modules/download/"+t.namespace},truncateText(t,s,r="..."){let d=t.split(" ");return d.length>s&&(d=d.slice(0,s),d.push(r)),d.join(" ")},countWords(t){return t.split(" ").length},reloadModules(t){return this.loadModules(this.url+"/"+t).subscribe()},refreshModules(){this.loadModules().subscribe()},enableModule(t){const s=`${this.url}/${t.namespace}/enable`;b.put(s).subscribe({next:async r=>{c.success(r.message).subscribe(),this.loadModules().subscribe({next:d=>{document.location.reload()},error:d=>{c.error(d.message).subscribe()}})},error:r=>{c.error(r.message).subscribe()}})},disableModule(t){const s=`${this.url}/${t.namespace}/disable`;b.put(s).subscribe({next:r=>{c.success(r.message).subscribe(),this.loadModules().subscribe({next:d=>{document.location.reload()},error:d=>{c.error(d.message).subscribe()}})},error:r=>{c.error(r.message).subscribe()}})},loadModules(t){return b.get(t||this.url).pipe(M(s=>(this.rawModules=s.modules,this.total_enabled=s.total_enabled,this.total_disabled=s.total_disabled,this.total_invalid=s.total_invalid,s)))},removeModule(t){if(confirm(x('Would you like to delete "{module}"? All data created by the module might also be deleted.').replace("{module}",t.name))){const s=`${this.url}/${t.namespace}/delete`;b.delete(s).subscribe({next:r=>{this.loadModules().subscribe({next:d=>{document.location.reload()}})},error:r=>{c.error(r.message,null,{duration:5e3}).subscribe()}})}}}},F={id:"module-wrapper",class:"flex-auto flex flex-col pb-4"},V={class:"flex flex-col md:flex-row md:justify-between md:items-center"},R={class:"flex flex-col md:flex-row md:justify-between md:items-center -mx-2"},S={class:"px-2"},W={class:"ns-button mb-2"},A={class:"mx-2"},U={class:"px-2"},G={class:"ns-button mb-2"},H=["href"],I={class:"px-2 w-auto"},L={class:"input-group mb-2 shadow border-2 info rounded overflow-hidden"},q=["placeholder"],z={class:"header-tabs flex -mx-4 flex-wrap"},J={class:"px-4 text-xs text-blue-500 font-semibold hover:underline"},K={class:"px-4 text-xs text-blue-500 font-semibold hover:underline"},Q={class:"px-4 text-xs text-blue-500 font-semibold hover:underline"},X={class:"module-section flex-auto flex flex-wrap -mx-4"},Y={key:0,class:"p-4 flex-auto flex"},Z={class:"flex h-full flex-auto border-dashed border-2 border-box-edge bg-surface justify-center items-center"},j={class:"font-bold text-xl text-primary text-center"},$={key:1,class:"p-4 flex-auto flex"},O={class:"flex h-full flex-auto border-dashed border-2 border-box-edge bg-surface justify-center items-center"},ee={class:"font-bold text-xl text-primary text-center"},se={class:"ns-modules rounded shadow overflow-hidden ns-box"},te={class:"module-head h-32 p-2"},le={class:"font-semibold text-lg"},oe={class:"text-xs flex justify-between"},re={class:"flex justify-between"},ae={key:0,class:"text-error-tertiary mx-2"},de={class:"py-2 text-sm"},ne=["onClick"],ie={class:"ns-box-footer border-t p-2 flex justify-between"},ce={class:"flex -mx-1"},ue={class:"px-1 flex -mx-1"},he={class:"px-1 flex"},xe={class:"px-1 flex"};function _e(t,s,r,d,n,l){const _=P("ns-button");return i(),u("div",F,[e("div",V,[e("div",R,[e("span",S,[e("div",W,[e("a",{onClick:s[0]||(s[0]=o=>l.refreshModules()),class:"items-center justify-center rounded cursor-pointer shadow flex px-3 py-1"},[s[5]||(s[5]=e("i",{class:"las la-sync"},null,-1)),e("span",A,a(l.__("Refresh")),1)])])]),e("span",U,[e("div",G,[e("a",{href:r.upload,class:"flex items-center justify-center rounded cursor-pointer shadow px-3 py-1"},[e("span",null,a(l.__("Upload")),1),s[6]||(s[6]=e("i",{class:"las la-angle-right"},null,-1))],8,H)])]),e("div",I,[e("div",L,[B(e("input",{ref:"searchField",placeholder:n.searchPlaceholder,"onUpdate:modelValue":s[1]||(s[1]=o=>n.searchText=o),type:"text",class:"w-full md:w-60 outline-none py-1 px-2"},null,8,q),[[k,n.searchText]])])])]),e("div",z,[e("div",J,[e("a",{href:"javascript:void(0)",onClick:s[2]||(s[2]=o=>l.reloadModules("enabled"))},a(l.__("Enabled"))+"("+a(n.total_enabled)+")",1)]),e("div",K,[e("a",{href:"javascript:void(0)",onClick:s[3]||(s[3]=o=>l.reloadModules("disabled"))},a(l.__("Disabled"))+" ("+a(n.total_disabled)+")",1)]),e("div",Q,[e("a",{href:"javascript:void(0)",onClick:s[4]||(s[4]=o=>l.reloadModules("invalid"))},a(l.__("Invalid"))+" ("+a(n.total_invalid)+")",1)])])]),e("div",X,[l.noModules&&n.searchText.length===0?(i(),u("div",Y,[e("div",Z,[e("h2",j,a(l.noModuleMessage),1)])])):h("",!0),l.noModules&&n.searchText.length>0?(i(),u("div",$,[e("div",O,[e("h2",ee,a(l.__("No modules matches your search term.")),1)])])):h("",!0),(i(!0),u(E,null,N(l.modules,(o,w)=>(i(),u("div",{class:"px-4 w-full md:w-1/2 lg:w-1/3 xl:1/4 py-4",key:w},[e("div",se,[e("div",te,[e("h3",le,a(o.name),1),e("p",oe,[e("div",re,[e("span",null,a(o.author),1),o["psr-4-compliance"]===!1?(i(),u("span",ae," — "+a(l.__("not PSR-4 Compliant")),1)):h("",!0)]),e("strong",null,"v"+a(o.version),1)]),e("p",de,[p(a(l.truncateText(o.description,20,"..."))+" ",1),l.countWords(o.description)>20?(i(),u("a",{key:0,class:"text-xs text-info-tertiary hover:underline",onClick:f=>l.openPopupDetails(o),href:"javascript:void(0)"},"["+a(l.__("Read More"))+"]",9,ne)):h("",!0)])]),e("div",ie,[o.enabled?h("",!0):(i(),v(_,{key:0,disabled:o.autoloaded||o["psr-4-compliance"]===!1,onClick:f=>l.enableModule(o),type:"info"},{default:m(()=>[p(a(l.__("Enable")),1)]),_:2},1032,["disabled","onClick"])),o.enabled?(i(),v(_,{key:1,disabled:o.autoloaded||o["psr-4-compliance"]===!1,onClick:f=>l.disableModule(o),type:"success"},{default:m(()=>[p(a(l.__("Disable")),1)]),_:2},1032,["disabled","onClick"])):h("",!0),e("div",ce,[e("div",ue,[e("div",he,[y(_,{disabled:o.autoloaded,onClick:f=>l.download(o),type:"info"},{default:m(()=>s[7]||(s[7]=[e("i",{class:"las la-archive"},null,-1)])),_:2},1032,["disabled","onClick"])]),e("div",xe,[y(_,{disabled:o.autoloaded,onClick:f=>l.removeModule(o),type:"error"},{default:m(()=>s[8]||(s[8]=[e("i",{class:"las la-trash"},null,-1)])),_:2},1032,["disabled","onClick"])])])])])])]))),128))])])}const we=T(D,[["render",_e]]);export{we as default};