const __vite__fileDeps=["./rewards-system-Bj6Ljh9m.js","./bootstrap-Dqimdg2y.js","./currency-Dtag6qPd.js","./chart-D2s_fKm5.js","./runtime-core.esm-bundler-DYLTeUDs.js","./_plugin-vue_export-helper-DlAUqK2U.js","./create-coupons-CWRT3MC4.js","./ns-settings-CZFjvX_z.js","./components-DpAywcwP.js","./ns-prompt-popup-B8C9prFY.js","./ns-prompt-popup-CVxzoclS.css","./ns-avatar-image-CE0FTvGu.js","./index.es-ua9LYOjR.js","./reset-qgk_W9c2.js","./modules-BPY7Jht1.js","./ns-permissions-GXCEt646.js","./ns-procurement-CTFxF1h4.js","./manage-products-DjpPZcac.js","./select-api-entities-BDVVx1BJ.js","./join-array-NDqpMoMN.js","./ns-notifications-_jQm_45L.js","./ns-transaction-BxKa1U6_.js","./ns-dashboard-AxRvBn4R.js","./ns-low-stock-report-gyjPRCBZ.js","./ns-sale-report-665TFJma.js","./ns-sold-stock-report-R3wHxZ8_.js","./ns-profit-report-BcuN2rdy.js","./ns-stock-combined-report-B5UYYwua.js","./ns-cash-flow-report-BV_SuBEH.js","./ns-yearly-report-DzAuiFQx.js","./ns-best-products-report-Dj_Mmwx7.js","./ns-payment-types-report-B3ww4d8P.js","./ns-customers-statement-report-tupJ2KSS.js","./ns-stock-adjustment-QYyEdEBf.js","./ns-procurement-quantity-5jQFpRJl.js","./ns-order-invoice-Ccw02JV8.js","./ns-print-label-Bqixd4JV.js","./ns-transactions-rules-C2FGskmS.js","./ns-token-Dx6JN428.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as t}from"./preload-helper-D6kgxu3v.js";import"./time-BpUCWZwL.js";import{b as w,n as f,a as I}from"./components-DpAywcwP.js";import{c as m,n as L}from"./bootstrap-Dqimdg2y.js";import{N as y}from"./ns-hotpress-B_9sUEWO.js";import{d as e}from"./runtime-core.esm-bundler-DYLTeUDs.js";import"./ns-prompt-popup-B8C9prFY.js";import"./currency-Dtag6qPd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ns-avatar-image-CE0FTvGu.js";import"./index.es-ua9LYOjR.js";import"./chart-D2s_fKm5.js";function V(o,_){_.forEach(a=>{let r=o.document.createElement("link");r.setAttribute("rel","stylesheet"),r.setAttribute("type","text/css"),r.setAttribute("href",a),o.document.getElementsByTagName("head")[0].appendChild(r)})}const O={install(o,_={}){o.config.globalProperties.$htmlToPaper=(a,r,D=()=>!0)=>{let P="_blank",R=["fullscreen=yes","titlebar=yes","scrollbars=yes"],v=!0,T=[],{name:u=P,specs:i=R,replace:A=v,styles:p=T}=_;r&&(r.name&&(u=r.name),r.specs&&(i=r.specs),r.replace&&(A=r.replace),r.styles&&(p=r.styles)),i=i.length?i.join(","):"";const l=window.document.getElementById(a);if(!l){alert(`Element to print #${a} not found!`);return}const s=window.open("",u,i);return s.document.write(`
          <html>
            <head>
              <title>${window.document.title}</title>
            </head>
            <body>
              ${l.innerHTML}
            </body>
          </html>
        `),V(s,p),setTimeout(()=>{s.document.close(),s.focus(),s.print(),s.close(),D()},1e3),!0}}},S=e(()=>t(()=>import("./rewards-system-Bj6Ljh9m.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),g=e(()=>t(()=>import("./create-coupons-CWRT3MC4.js"),__vite__mapDeps([6,1,2,3,4,5]),import.meta.url)),C=e(()=>t(()=>import("./ns-settings-CZFjvX_z.js"),__vite__mapDeps([7,2,1,3,4,8,9,5,10,11,12]),import.meta.url)),k=e(()=>t(()=>import("./reset-qgk_W9c2.js"),__vite__mapDeps([13,2,1,3,4,5]),import.meta.url)),H=e(()=>t(()=>import("./modules-BPY7Jht1.js"),__vite__mapDeps([14,1,2,3,4,9,5,10,12]),import.meta.url)),M=e(()=>t(()=>import("./ns-permissions-GXCEt646.js"),__vite__mapDeps([15,1,2,3,4,5]),import.meta.url)),j=e(()=>t(()=>import("./ns-procurement-CTFxF1h4.js"),__vite__mapDeps([16,1,2,3,4,17,9,5,10,18,19,12]),import.meta.url)),N=e(()=>t(()=>import("./manage-products-DjpPZcac.js"),__vite__mapDeps([17,1,2,3,4,9,5,10]),import.meta.url)),q=e(()=>t(()=>import("./ns-procurement-invoice-DSSNRCNz.js"),[],import.meta.url)),x=e(()=>t(()=>import("./ns-notifications-_jQm_45L.js"),__vite__mapDeps([20,1,2,3,4,9,5,10,8,11,12]),import.meta.url)),$=e(()=>t(()=>import("./components-DpAywcwP.js").then(o=>o.j),__vite__mapDeps([8,9,2,5,4,1,3,10,11,12]),import.meta.url)),B=e(()=>t(()=>import("./ns-transaction-BxKa1U6_.js"),__vite__mapDeps([21,1,2,3,4,9,5,10,12]),import.meta.url)),F=e(()=>t(()=>import("./ns-dashboard-AxRvBn4R.js"),__vite__mapDeps([22,1,2,3,4,5]),import.meta.url)),Y=e(()=>t(()=>import("./ns-low-stock-report-gyjPRCBZ.js"),__vite__mapDeps([23,1,2,3,4,8,9,5,10,11,12,19]),import.meta.url)),z=e(()=>t(()=>import("./ns-sale-report-665TFJma.js"),__vite__mapDeps([24,1,2,3,4,8,9,5,10,11,12,19]),import.meta.url)),G=e(()=>t(()=>import("./ns-sold-stock-report-R3wHxZ8_.js"),__vite__mapDeps([25,1,2,3,4,8,9,5,10,11,12,18,19]),import.meta.url)),J=e(()=>t(()=>import("./ns-profit-report-BcuN2rdy.js"),__vite__mapDeps([26,1,2,3,4,8,9,5,10,11,12,18,19]),import.meta.url)),K=e(()=>t(()=>import("./ns-stock-combined-report-B5UYYwua.js"),__vite__mapDeps([27,1,2,3,4,18,9,5,10,19]),import.meta.url)),Q=e(()=>t(()=>import("./ns-cash-flow-report-BV_SuBEH.js"),__vite__mapDeps([28,1,2,3,4,8,9,5,10,11,12]),import.meta.url)),U=e(()=>t(()=>import("./ns-yearly-report-DzAuiFQx.js"),__vite__mapDeps([29,1,2,3,4,8,9,5,10,11,12]),import.meta.url)),W=e(()=>t(()=>import("./ns-best-products-report-Dj_Mmwx7.js"),__vite__mapDeps([30,1,2,3,4,8,9,5,10,11,12]),import.meta.url)),X=e(()=>t(()=>import("./ns-payment-types-report-B3ww4d8P.js"),__vite__mapDeps([31,1,2,3,4,8,9,5,10,11,12]),import.meta.url)),Z=e(()=>t(()=>import("./ns-customers-statement-report-tupJ2KSS.js"),__vite__mapDeps([32,2,5,4]),import.meta.url)),tt=e(()=>t(()=>import("./ns-stock-adjustment-QYyEdEBf.js"),__vite__mapDeps([33,1,2,3,4,34,5,9,10]),import.meta.url)),et=e(()=>t(()=>import("./ns-order-invoice-Ccw02JV8.js"),__vite__mapDeps([35,2,5,4]),import.meta.url)),ot=e(()=>t(()=>import("./ns-print-label-Bqixd4JV.js"),__vite__mapDeps([36,2,4,1,3,5]),import.meta.url)),rt=e(()=>t(()=>import("./ns-transactions-rules-C2FGskmS.js"),__vite__mapDeps([37,1,2,3,4,12,9,5,10,8,11]),import.meta.url)),n=window.nsState,st=window.nsScreen;nsExtraComponents.nsToken=e(()=>t(()=>import("./ns-token-Dx6JN428.js"),__vite__mapDeps([38,1,2,3,4,5,12,9,10]),import.meta.url));window.nsHotPress=new y;const d=Object.assign({nsModules:H,nsRewardsSystem:S,nsCreateCoupons:g,nsManageProducts:N,nsSettings:C,nsReset:k,nsPermissions:M,nsProcurement:j,nsProcurementInvoice:q,nsMedia:$,nsTransaction:B,nsDashboard:F,nsPrintLabel:ot,nsNotifications:x,nsSaleReport:z,nsSoldStockReport:G,nsProfitReport:J,nsStockCombinedReport:K,nsCashFlowReport:Q,nsYearlyReport:U,nsPaymentTypesReport:X,nsBestProductsReport:W,nsLowStockReport:Y,nsCustomersStatementReport:Z,nsTransactionsRules:rt,nsStockAdjustment:tt,nsOrderInvoice:et,...w},nsExtraComponents);window.nsDashboardAside=m({data(){return{sidebar:"visible",popups:[]}},components:{nsMenu:f,nsSubmenu:I},mounted(){n.subscribe(o=>{o.sidebar&&(this.sidebar=o.sidebar)})}});window.nsDashboardOverlay=m({data(){return{sidebar:null,popups:[]}},components:d,mounted(){n.subscribe(o=>{o.sidebar&&(this.sidebar=o.sidebar)})},methods:{closeMenu(){n.setState({sidebar:this.sidebar==="hidden"?"visible":"hidden"})}}});window.nsDashboardHeader=m({data(){return{menuToggled:!1,sidebar:null}},components:d,methods:{toggleMenu(){this.menuToggled=!this.menuToggled},toggleSideMenu(){["lg","xl"].includes(st.breakpoint)?n.setState({sidebar:this.sidebar==="hidden"?"visible":"hidden"}):n.setState({sidebar:this.sidebar==="hidden"?"visible":"hidden"})}},mounted(){n.subscribe(o=>{o.sidebar&&(this.sidebar=o.sidebar)})}});window.nsDashboardContent=m({});for(let o in d)window.nsDashboardContent.component(o,d[o]);window.nsDashboardContent.use(O,{styles:Object.values(window.ns.cssFiles)});window.nsComponents=Object.assign(d,w);L.doAction("ns-before-mount");const c=document.querySelector("#dashboard-aside");window.nsDashboardAside&&c&&window.nsDashboardAside.mount(c);const b=document.querySelector("#dashboard-overlay");window.nsDashboardOverlay&&b&&window.nsDashboardOverlay.mount(b);const E=document.querySelector("#dashboard-header");window.nsDashboardHeader&&E&&window.nsDashboardHeader.mount(E);const h=document.querySelector("#dashboard-content");window.nsDashboardContent&&h&&window.nsDashboardContent.mount(h);