import{_ as r}from"./preload-helper-41c905a7.js";import{P as n}from"./bootstrap-32fd8995.js";import{_ as p}from"./lang-643e0c49.js";import{_ as a}from"./_plugin-vue_export-helper-c27b6911.js";import{d as u,o as _,c,a as s,t as m}from"./runtime-core.esm-bundler-a9e64527.js";import"./runtime-dom.esm-bundler-eae6104b.js";const i={name:"ns-pos-customers-button",methods:{__:p,openCustomerPopup(){new n().open(u({loader:()=>r(()=>import("./ns-pos-customer-select-popup-d148cdec.js").then(e=>e.b),["./ns-pos-customer-select-popup-d148cdec.js","./bootstrap-32fd8995.js","./lang-643e0c49.js","./runtime-dom.esm-bundler-eae6104b.js","./runtime-core.esm-bundler-a9e64527.js","./currency-4e1ba4e0.js","./_plugin-vue_export-helper-c27b6911.js","./ns-notice-a19ab992.js","./ns-pos-confirm-popup-16fa8fc0.js","./ns-paginate-7d660ea5.js","./ns-orders-preview-popup-0a121a40.js","./ns-numpad-01515d62.js","./print-3c0412fa.js","./index.es-a0f39e76.js","./vue-upload-component-37fc7a3b.js","./vue.runtime.esm-bundler-1bae6fe8.js","./vue-upload-component-b4959dd3.css","./ns-prompt-popup-fd8a595f.js"],import.meta.url)}))}},beforeDestroy(){nsHotPress.destroy("ns_pos_keyboard_create_customer")},mounted(){for(let o in nsShortcuts)["ns_pos_keyboard_create_customer"].includes(o)&&nsHotPress.create("ns_pos_keyboard_create_customer").whenNotVisible([".is-popup"]).whenPressed(nsShortcuts[o],e=>{e.preventDefault(),this.openCustomerPopup()})}},l={class:"ns-button default"},d=s("i",{class:"mr-1 text-xl lar la-user-circle"},null,-1);function f(o,e,h,P,b,t){return _(),c("div",l,[s("button",{onClick:e[0]||(e[0]=x=>t.openCustomerPopup()),class:"rounded shadow flex-shrink-0 h-12 flex items-center px-2 py-1 text-sm"},[d,s("span",null,m(t.__("Customers")),1)])])}const D=a(i,[["render",f]]);export{D as default};