import{_ as e}from"./preload-helper-41c905a7.js";import"./time-39c08a11.js";import{b as w,n as I,a as L}from"./components-a64665b1.js";import{c as m,n as y}from"./bootstrap-5278e747.js";import{N as V}from"./ns-hotpress-fbaed768.js";import{d as t}from"./runtime-core.esm-bundler-b48de70a.js";import"./ns-alert-popup-5493aad8.js";import"./currency-f8bd78d1.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ns-avatar-image-35303576.js";import"./index.es-25aa42ee.js";import"./ns-prompt-popup-f1ddf178.js";function O(o,_){_.forEach(a=>{let r=o.document.createElement("link");r.setAttribute("rel","stylesheet"),r.setAttribute("type","text/css"),r.setAttribute("href",a),o.document.getElementsByTagName("head")[0].appendChild(r)})}const S={install(o,_={}){o.config.globalProperties.$htmlToPaper=(a,r,D=()=>!0)=>{let P="_blank",v=["fullscreen=yes","titlebar=yes","scrollbars=yes"],R=!0,A=[],{name:u=P,specs:i=v,replace:T=R,styles:p=A}=_;r&&(r.name&&(u=r.name),r.specs&&(i=r.specs),r.replace&&(T=r.replace),r.styles&&(p=r.styles)),i=i.length?i.join(","):"";const l=window.document.getElementById(a);if(!l){alert(`Element to print #${a} not found!`);return}const f="",s=window.open(f,u,i);return s.document.write(`
          <html>
            <head>
              <title>${window.document.title}</title>
            </head>
            <body>
              ${l.innerHTML}
            </body>
          </html>
        `),O(s,p),setTimeout(()=>{s.document.close(),s.focus(),s.print(),s.close(),D()},1e3),!0}}},g=t(()=>e(()=>import("./rewards-system-84f9f867.js"),["./rewards-system-84f9f867.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)),C=t(()=>e(()=>import("./create-coupons-f9b24fe5.js"),["./create-coupons-f9b24fe5.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)),k=t(()=>e(()=>import("./ns-settings-49f05c04.js"),["./ns-settings-49f05c04.js","./currency-f8bd78d1.js","./bootstrap-5278e747.js","./runtime-core.esm-bundler-b48de70a.js","./components-a64665b1.js","./ns-alert-popup-5493aad8.js","./_plugin-vue_export-helper-c27b6911.js","./ns-avatar-image-35303576.js","./index.es-25aa42ee.js","./ns-prompt-popup-f1ddf178.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),H=t(()=>e(()=>import("./reset-cacce1c2.js"),["./reset-cacce1c2.js","./currency-f8bd78d1.js","./bootstrap-5278e747.js","./runtime-core.esm-bundler-b48de70a.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)),M=t(()=>e(()=>import("./modules-58a867d1.js"),["./modules-58a867d1.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./ns-alert-popup-5493aad8.js","./_plugin-vue_export-helper-c27b6911.js","./index.es-25aa42ee.js","./ns-prompt-popup-f1ddf178.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),j=t(()=>e(()=>import("./ns-permissions-4192f49e.js"),["./ns-permissions-4192f49e.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)),N=t(()=>e(()=>import("./ns-procurement-ec64acc8.js"),["./ns-procurement-ec64acc8.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./manage-products-88240e57.js","./ns-prompt-popup-f1ddf178.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./select-api-entities-33444841.js","./join-array-4b30b096.js","./index.es-25aa42ee.js"],import.meta.url)),q=t(()=>e(()=>import("./manage-products-88240e57.js"),["./manage-products-88240e57.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./ns-prompt-popup-f1ddf178.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),x=t(()=>e(()=>import("./ns-procurement-invoice-b9a1ca34.js"),[],import.meta.url)),$=t(()=>e(()=>import("./ns-notifications-aebb7c02.js"),["./ns-notifications-aebb7c02.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./ns-prompt-popup-f1ddf178.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./components-a64665b1.js","./ns-alert-popup-5493aad8.js","./ns-avatar-image-35303576.js","./index.es-25aa42ee.js"],import.meta.url)),B=t(()=>e(()=>import("./components-a64665b1.js").then(o=>o.i),["./components-a64665b1.js","./ns-alert-popup-5493aad8.js","./currency-f8bd78d1.js","./_plugin-vue_export-helper-c27b6911.js","./runtime-core.esm-bundler-b48de70a.js","./ns-avatar-image-35303576.js","./index.es-25aa42ee.js","./bootstrap-5278e747.js","./ns-prompt-popup-f1ddf178.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),F=t(()=>e(()=>import("./ns-transaction-3f47dfee.js"),["./ns-transaction-3f47dfee.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./ns-alert-popup-5493aad8.js","./_plugin-vue_export-helper-c27b6911.js","./index.es-25aa42ee.js","./ns-prompt-popup-f1ddf178.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),Y=t(()=>e(()=>import("./ns-dashboard-220d8725.js"),["./ns-dashboard-220d8725.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)),z=t(()=>e(()=>import("./ns-low-stock-report-ef666b36.js"),["./ns-low-stock-report-ef666b36.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./components-a64665b1.js","./ns-alert-popup-5493aad8.js","./_plugin-vue_export-helper-c27b6911.js","./ns-avatar-image-35303576.js","./index.es-25aa42ee.js","./ns-prompt-popup-f1ddf178.js","./ns-prompt-popup-6013118d.css","./join-array-4b30b096.js"],import.meta.url)),G=t(()=>e(()=>import("./ns-sale-report-5bcde0a1.js"),["./ns-sale-report-5bcde0a1.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./components-a64665b1.js","./ns-alert-popup-5493aad8.js","./_plugin-vue_export-helper-c27b6911.js","./ns-avatar-image-35303576.js","./index.es-25aa42ee.js","./ns-prompt-popup-f1ddf178.js","./ns-prompt-popup-6013118d.css","./join-array-4b30b096.js"],import.meta.url)),J=t(()=>e(()=>import("./ns-sold-stock-report-2e39e501.js"),["./ns-sold-stock-report-2e39e501.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./components-a64665b1.js","./ns-alert-popup-5493aad8.js","./_plugin-vue_export-helper-c27b6911.js","./ns-avatar-image-35303576.js","./index.es-25aa42ee.js","./ns-prompt-popup-f1ddf178.js","./ns-prompt-popup-6013118d.css","./select-api-entities-33444841.js","./join-array-4b30b096.js"],import.meta.url)),K=t(()=>e(()=>import("./ns-profit-report-7c531b72.js"),["./ns-profit-report-7c531b72.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./components-a64665b1.js","./ns-alert-popup-5493aad8.js","./_plugin-vue_export-helper-c27b6911.js","./ns-avatar-image-35303576.js","./index.es-25aa42ee.js","./ns-prompt-popup-f1ddf178.js","./ns-prompt-popup-6013118d.css","./select-api-entities-33444841.js","./join-array-4b30b096.js"],import.meta.url)),Q=t(()=>e(()=>import("./ns-stock-combined-report-9cf758f4.js"),["./ns-stock-combined-report-9cf758f4.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./select-api-entities-33444841.js","./ns-prompt-popup-f1ddf178.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./join-array-4b30b096.js"],import.meta.url)),U=t(()=>e(()=>import("./ns-cash-flow-report-1f8e9a1c.js"),["./ns-cash-flow-report-1f8e9a1c.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./components-a64665b1.js","./ns-alert-popup-5493aad8.js","./_plugin-vue_export-helper-c27b6911.js","./ns-avatar-image-35303576.js","./index.es-25aa42ee.js","./ns-prompt-popup-f1ddf178.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),W=t(()=>e(()=>import("./ns-yearly-report-d013dcc7.js"),["./ns-yearly-report-d013dcc7.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./components-a64665b1.js","./ns-alert-popup-5493aad8.js","./_plugin-vue_export-helper-c27b6911.js","./ns-avatar-image-35303576.js","./index.es-25aa42ee.js","./ns-prompt-popup-f1ddf178.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),X=t(()=>e(()=>import("./ns-best-products-report-4206cf7a.js"),["./ns-best-products-report-4206cf7a.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./components-a64665b1.js","./ns-alert-popup-5493aad8.js","./_plugin-vue_export-helper-c27b6911.js","./ns-avatar-image-35303576.js","./index.es-25aa42ee.js","./ns-prompt-popup-f1ddf178.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),Z=t(()=>e(()=>import("./ns-payment-types-report-168f9857.js"),["./ns-payment-types-report-168f9857.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./components-a64665b1.js","./ns-alert-popup-5493aad8.js","./_plugin-vue_export-helper-c27b6911.js","./ns-avatar-image-35303576.js","./index.es-25aa42ee.js","./ns-prompt-popup-f1ddf178.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),ee=t(()=>e(()=>import("./ns-customers-statement-report-154a2535.js"),["./ns-customers-statement-report-154a2535.js","./currency-f8bd78d1.js","./_plugin-vue_export-helper-c27b6911.js","./runtime-core.esm-bundler-b48de70a.js"],import.meta.url)),te=t(()=>e(()=>import("./ns-stock-adjustment-aa422755.js"),["./ns-stock-adjustment-aa422755.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./ns-procurement-quantity-d642b1b8.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-f1ddf178.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),oe=t(()=>e(()=>import("./ns-order-invoice-bf57ed55.js"),["./ns-order-invoice-bf57ed55.js","./currency-f8bd78d1.js","./_plugin-vue_export-helper-c27b6911.js","./runtime-core.esm-bundler-b48de70a.js"],import.meta.url)),re=t(()=>e(()=>import("./ns-print-label-438044fe.js"),["./ns-print-label-438044fe.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./bootstrap-5278e747.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)),n=window.nsState,se=window.nsScreen;nsExtraComponents.nsToken=t(()=>e(()=>import("./ns-token-1b081e97.js"),["./ns-token-1b081e97.js","./bootstrap-5278e747.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./_plugin-vue_export-helper-c27b6911.js","./index.es-25aa42ee.js","./ns-prompt-popup-f1ddf178.js","./ns-prompt-popup-6013118d.css"],import.meta.url));window.nsHotPress=new V;const d=Object.assign({nsModules:M,nsRewardsSystem:g,nsCreateCoupons:C,nsManageProducts:q,nsSettings:k,nsReset:H,nsPermissions:j,nsProcurement:N,nsProcurementInvoice:x,nsMedia:B,nsTransaction:F,nsDashboard:Y,nsPrintLabel:re,nsNotifications:$,nsSaleReport:G,nsSoldStockReport:J,nsProfitReport:K,nsStockCombinedReport:Q,nsCashFlowReport:U,nsYearlyReport:W,nsPaymentTypesReport:Z,nsBestProductsReport:X,nsLowStockReport:z,nsCustomersStatementReport:ee,nsStockAdjustment:te,nsOrderInvoice:oe,...w},nsExtraComponents);window.nsDashboardAside=m({data(){return{sidebar:"visible",popups:[]}},components:{nsMenu:I,nsSubmenu:L},mounted(){n.subscribe(o=>{o.sidebar&&(this.sidebar=o.sidebar)})}});window.nsDashboardOverlay=m({data(){return{sidebar:null,popups:[]}},components:d,mounted(){n.subscribe(o=>{o.sidebar&&(this.sidebar=o.sidebar)})},methods:{closeMenu(){n.setState({sidebar:this.sidebar==="hidden"?"visible":"hidden"})}}});window.nsDashboardHeader=m({data(){return{menuToggled:!1,sidebar:null}},components:d,methods:{toggleMenu(){this.menuToggled=!this.menuToggled},toggleSideMenu(){["lg","xl"].includes(se.breakpoint)?n.setState({sidebar:this.sidebar==="hidden"?"visible":"hidden"}):n.setState({sidebar:this.sidebar==="hidden"?"visible":"hidden"})}},mounted(){n.subscribe(o=>{o.sidebar&&(this.sidebar=o.sidebar)})}});window.nsDashboardContent=m({});for(let o in d)window.nsDashboardContent.component(o,d[o]);window.nsDashboardContent.use(S,{styles:Object.values(window.ns.cssFiles)});window.nsComponents=Object.assign(d,w);y.doAction("ns-before-mount");const c=document.querySelector("#dashboard-aside");window.nsDashboardAside&&c&&window.nsDashboardAside.mount(c);const b=document.querySelector("#dashboard-overlay");window.nsDashboardOverlay&&b&&window.nsDashboardOverlay.mount(b);const E=document.querySelector("#dashboard-header");window.nsDashboardHeader&&E&&window.nsDashboardHeader.mount(E);const h=document.querySelector("#dashboard-content");window.nsDashboardContent&&h&&window.nsDashboardContent.mount(h);