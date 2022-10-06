(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))d(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();function E(){}function xe(s){return s()}function we(){return Object.create(null)}function w(s){s.forEach(xe)}function $e(s){return typeof s=="function"}function j(s,e){return s!=s?e==e:s!==e||s&&typeof s=="object"||typeof s=="function"}function Re(s){return Object.keys(s).length===0}function i(s,e){s.appendChild(e)}function T(s,e,t){s.insertBefore(e,t||null)}function x(s){s.parentNode.removeChild(s)}function r(s){return document.createElement(s)}function je(s){return document.createTextNode(s)}function y(){return je(" ")}function I(s,e,t,d){return s.addEventListener(e,t,d),()=>s.removeEventListener(e,t,d)}function n(s,e,t){t==null?s.removeAttribute(e):s.getAttribute(e)!==t&&s.setAttribute(e,t)}function Te(s){return Array.from(s.childNodes)}let ve;function se(s){ve=s}const te=[],Le=[],ie=[],be=[],qe=Promise.resolve();let ue=!1;function Me(){ue||(ue=!0,qe.then(_e))}function re(s){ie.push(s)}const ae=new Set;let le=0;function _e(){const s=ve;do{for(;le<te.length;){const e=te[le];le++,se(e),Ae(e.$$)}for(se(null),te.length=0,le=0;Le.length;)Le.pop()();for(let e=0;e<ie.length;e+=1){const t=ie[e];ae.has(t)||(ae.add(t),t())}ie.length=0}while(te.length);for(;be.length;)be.pop()();ue=!1,ae.clear(),se(s)}function Ae(s){if(s.fragment!==null){s.update(),w(s.before_update);const e=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,e),s.after_update.forEach(re)}}const oe=new Set;let Ce;function S(s,e){s&&s.i&&(oe.delete(s),s.i(e))}function X(s,e,t,d){if(s&&s.o){if(oe.has(s))return;oe.add(s),Ce.c.push(()=>{oe.delete(s),d&&(t&&s.d(1),d())}),s.o(e)}else d&&d()}function V(s){s&&s.c()}function $(s,e,t,d){const{fragment:l,on_mount:o,on_destroy:a,after_update:f}=s.$$;l&&l.m(e,t),d||re(()=>{const v=o.map(xe).filter($e);a?a.push(...v):w(v),s.$$.on_mount=[]}),f.forEach(re)}function R(s,e){const t=s.$$;t.fragment!==null&&(w(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Pe(s,e){s.$$.dirty[0]===-1&&(te.push(s),Me(),s.$$.dirty.fill(0)),s.$$.dirty[e/31|0]|=1<<e%31}function q(s,e,t,d,l,o,a,f=[-1]){const v=ve;se(s);const c=s.$$={fragment:null,ctx:null,props:o,update:E,not_equal:l,bound:we(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(v?v.$$.context:[])),callbacks:we(),dirty:f,skip_bound:!1,root:e.target||v.$$.root};a&&a(c.root);let g=!1;if(c.ctx=t?t(s,e.props||{},(u,h,...p)=>{const m=p.length?p[0]:h;return c.ctx&&l(c.ctx[u],c.ctx[u]=m)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](m),g&&Pe(s,u)),h}):[],c.update(),g=!0,w(c.before_update),c.fragment=d?d(c.ctx):!1,e.target){if(e.hydrate){const u=Te(e.target);c.fragment&&c.fragment.l(u),u.forEach(x)}else c.fragment&&c.fragment.c();e.intro&&S(s.$$.fragment),$(s,e.target,e.anchor,e.customElement),_e()}se(v)}class M{$destroy(){R(this,1),this.$destroy=E}$on(e,t){const d=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return d.push(t),()=>{const l=d.indexOf(t);l!==-1&&d.splice(l,1)}}$set(e){this.$$set&&!Re(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function De(s){let e,t,d,l,o,a,f,v,c,g,u,h,p;return{c(){e=r("div"),t=r("div"),d=r("div"),l=r("h1"),l.textContent="\u22B2",o=y(),a=r("div"),a.innerHTML=`<div id="i1" class="tracker tracked svelte-1z016yu"></div> 
      <div id="i2" class="tracker svelte-1z016yu"></div>`,f=y(),v=r("div"),c=r("h1"),c.textContent="\u22B3",g=y(),u=r("section"),u.innerHTML=`<section id="introSlide1" class="slide svelte-1z016yu"><div class="intro svelte-1z016yu"><h1 class="svelte-1z016yu">Introductions</h1></div> 
        <div class="text svelte-1z016yu"><h2>A dedicated, hard-working BME student at WPI. Eagle Scout,
                somewhat experienced engineering intern, extremely experienced
                volunteer. Trustworthy, loyal, helpful, curious, kind, and
                inquisitive. Quick learner, strong creative and analytical
                skills, honed teamwork and leadership expertise, and excellent
                presentation and writing aptitude. Experience with HTML, CSS,
                some JavaScript, and the Svelte framework (all of which were used
                to create this website from scratch). Working towards a BS
                in Biomedical Engineering.</h2></div></section> 
    <section id="introSlide2" class="slide svelte-1z016yu"><div class="text svelte-1z016yu"><h2>There will be more text here, but for now I just need a paragraph.
            Lorem ipsum si dolor amet or whatever I guess.</h2></div> 
      <div class="intro svelte-1z016yu"><h1 class="svelte-1z016yu">Slide 2</h1></div></section>`,n(l,"id","introLeft"),n(l,"class","svelte-1z016yu"),n(d,"class","goLeft scroll svelte-1z016yu"),n(a,"class","slideTracker svelte-1z016yu"),n(c,"id","introRight"),n(c,"class","svelte-1z016yu"),n(v,"class","goRight scroll svelte-1z016yu"),n(t,"class","scrollArrows svelte-1z016yu"),n(u,"id","slidesBoxIntro"),n(u,"class","svelte-1z016yu"),n(e,"id","slides"),n(e,"class","svelte-1z016yu")},m(m,B){T(m,e,B),i(e,t),i(t,d),i(d,l),i(t,o),i(t,a),i(t,f),i(t,v),i(v,c),i(e,g),i(e,u),h||(p=[I(l,"click",s[0]),I(c,"click",s[1])],h=!0)},p:E,i:E,o:E,d(m){m&&x(e),h=!1,w(p)}}}var K=2;function ze(s){var e=1,t="i"+e;function d(o){if(e!=1){document.getElementById(t).classList.remove("tracked"),e=e-1;let a="translateX("+-80*(e-1)+"vw)";document.getElementById("slidesBoxIntro").style.transform=a,t="i"+e,document.getElementById(t).classList.add("tracked")}e==1?(document.getElementById("introLeft").style.opacity="0",document.getElementById("introLeft").style.pointerEvents="none"):e!=1&&(document.getElementById("introLeft").style.opacity="1",document.getElementById("introLeft").style.pointerEvents="all"),e==K?(document.getElementById("introRight").style.opacity="0",document.getElementById("introRight").style.pointerEvents="none"):e!=K&&(document.getElementById("introRight").style.opacity="1",document.getElementById("introRight").style.pointerEvents="all")}function l(){if(e<K){document.getElementById(t).classList.remove("tracked"),e=e+1;let o="translateX("+-80*(e-1)+"vw)";document.getElementById("slidesBoxIntro").style.transform=o,t="i"+e,document.getElementById(t).classList.add("tracked")}e==1?(document.getElementById("introLeft").style.opacity="0",document.getElementById("introLeft").style.pointerEvents="none"):e!=1&&(document.getElementById("introLeft").style.opacity="1",document.getElementById("introLeft").style.pointerEvents="all"),e==K?(document.getElementById("introRight").style.opacity="0",document.getElementById("introRight").style.pointerEvents="none"):e!=K&&(document.getElementById("introRight").style.opacity="1",document.getElementById("introRight").style.pointerEvents="all")}return[d,l]}class Oe extends M{constructor(e){super(),q(this,e,ze,De,j,{})}}function He(s){let e,t,d,l,o,a,f,v,c,g,u,h,p;return{c(){e=r("div"),t=r("div"),d=r("div"),l=r("h1"),l.textContent="\u22B2",o=y(),a=r("div"),a.innerHTML=`<div id="n1" class="tracker tracked svelte-ggfyvq"></div> 
      <div id="n2" class="tracker svelte-ggfyvq"></div>`,f=y(),v=r("div"),c=r("h1"),c.textContent="\u22B3",g=y(),u=r("section"),u.innerHTML=`<section class="slide svelte-ggfyvq"><div class="left-text block svelte-ggfyvq"><h1 class="svelte-ggfyvq">Past Internships</h1> 
        <h3 class="svelte-ggfyvq">In the past, I have worked with Nuvera Fuel Cells and A Mighty Blaze
          as an intern. Nuvera is a leader in developing fuel cell technology,
          and I worked with them to develop new ideas and create CAD models
          using Solidworks. A Mighy Blaze is  a company founded in 2020 during 
          the COVID-19 pandemic in order to help authors, new and old, get 
          publicity for their work. I was responsible for creating and maintaining
          the YouTube channel that hosts the authors&#39; daily interviews.</h3></div> 
      <div class="right-img block svelte-ggfyvq"><img src="./src/assets/nuveraAndAMB.png" class="nuvera svelte-ggfyvq" alt="Nuvera Fuel Cells Logo"/></div></section> 
    <section class="slide svelte-ggfyvq"><div class="left-text block svelte-ggfyvq"><h1 class="svelte-ggfyvq">Past Internships</h1> 
        <h3 class="svelte-ggfyvq">In the past, I have worked with Nuvera Fuel Cells and A Mighty Blaze
          as an intern. Nuvera is a leader in developing fuel cell technology,
          and I worked with them to develop new ideas and create CAD models
          using Solidworks. A Mighy Blaze is  a company founded in 2020 during 
          the COVID-19 pandemic in order to help authors, new and old, get 
          publicity for their work. I was responsible for creating and maintaining
          the YouTube channel that hosts the authors&#39; daily interviews.</h3></div> 
      <div class="right-img block svelte-ggfyvq"><img src="./src/assets/nuveraAndAMB.png" class="nuvera svelte-ggfyvq" alt="Nuvera Fuel Cells Logo"/></div></section>`,n(l,"id","internLeft"),n(l,"class","svelte-ggfyvq"),n(d,"class","goLeft scroll svelte-ggfyvq"),n(a,"class","slideTracker svelte-ggfyvq"),n(c,"class","svelte-ggfyvq"),n(v,"id","internRight"),n(v,"class","goRight scroll svelte-ggfyvq"),n(t,"class","scrollArrows svelte-ggfyvq"),n(u,"id","slidesBoxIntern"),n(u,"class","svelte-ggfyvq"),n(e,"id","slides"),n(e,"class","svelte-ggfyvq")},m(m,B){T(m,e,B),i(e,t),i(t,d),i(d,l),i(t,o),i(t,a),i(t,f),i(t,v),i(v,c),i(e,g),i(e,u),h||(p=[I(l,"click",s[0]),I(c,"click",s[1])],h=!0)},p:E,i:E,o:E,d(m){m&&x(e),h=!1,w(p)}}}var Q=2;function Ne(s){var e=1,t="n"+e;function d(){if(e!=1){document.getElementById(t).classList.remove("tracked"),e=e-1;let o="translateX("+-80*(e-1)+"vw)";document.getElementById("slidesBoxIntern").style.transform=o,t="n"+e,document.getElementById(t).classList.add("tracked")}e==1?(document.getElementById("internLeft").style.opacity="0",document.getElementById("internLeft").style.pointerEvents="none"):e!=1&&(document.getElementById("internLeft").style.opacity="1",document.getElementById("internLeft").style.pointerEvents="all"),e==Q?(document.getElementById("internRight").style.opacity="0",document.getElementById("internRight").style.pointerEvents="none"):e!=Q&&(document.getElementById("internRight").style.opacity="1",document.getElementById("internRight").style.pointerEvents="all")}function l(){if(e<Q){document.getElementById(t).classList.remove("tracked"),e=e+1;let o="translateX("+-80*(e-1)+"vw)";document.getElementById("slidesBoxIntern").style.transform=o,t="n"+e,document.getElementById(t).classList.add("tracked")}e==1?(document.getElementById("internLeft").style.opacity="0",document.getElementById("internLeft").style.pointerEvents="none"):e!=1&&(document.getElementById("internLeft").style.opacity="1",document.getElementById("internLeft").style.pointerEvents="all"),e==Q?(document.getElementById("internRight").style.opacity="0",document.getElementById("internRight").style.pointerEvents="none"):e!=Q&&(document.getElementById("internRight").style.opacity="1",document.getElementById("internRight").style.pointerEvents="all")}return[d,l]}class We extends M{constructor(e){super(),q(this,e,Ne,He,j,{})}}function Xe(s){let e,t,d,l,o,a,f,v,c,g,u,h,p;return{c(){e=r("div"),t=r("div"),d=r("div"),l=r("h1"),l.textContent="\u22B2",o=y(),a=r("div"),a.innerHTML=`<div id="j1" class="tracker tracked svelte-1numsni"></div> 
      <div id="j2" class="tracker svelte-1numsni"></div>`,f=y(),v=r("div"),c=r("h1"),c.textContent="\u22B3",g=y(),u=r("section"),u.innerHTML=`<section class="slide svelte-1numsni"><div class="left-img block svelte-1numsni"><img src="./src/assets/MBAndTPS.png" class="TPS svelte-1numsni" alt="The Paper Store Logo"/></div> 
      <div class="right-text block svelte-1numsni"><h1 class="svelte-1numsni">Previous Jobs</h1> 
        <h3 class="svelte-1numsni">In the past, I have worked for the grocery store Market Basket and
          the gift store The Paper Store. At Market Basket, I worked as a bagger
          and a cart collector for a little over a year, before I unfortunately needed
          to leave due to the COVID-19 pandemic. At The Paper Store, I
          worked as a cashier, stocker, and customer service, as well as processing
          and shipping online orders.</h3></div></section> 
    <section class="slide svelte-1numsni"><div class="left-img block svelte-1numsni"><img src="./src/assets/MBAndTPS.png" class="TPS svelte-1numsni" alt="The Paper Store Logo"/></div> 
      <div class="right-text block svelte-1numsni"><h1 class="svelte-1numsni">Previous Jobs</h1> 
        <h3 class="svelte-1numsni">In the past, I have worked for the grocery store Market Basket and
          the gift store The Paper Store. At Market Basket, I worked as a bagger
          and a cart collector for a little over a year, before I unfortunately needed
          to leave due to the COVID-19 pandemic. At The Paper Store, I
          worked as a cashier, stocker, and customer service, as well as processing
          and shipping online orders.</h3></div></section>`,n(l,"id","jobsLeft"),n(l,"class","svelte-1numsni"),n(d,"class","goLeft scroll svelte-1numsni"),n(a,"class","slideTracker svelte-1numsni"),n(c,"id","jobsRight"),n(c,"class","svelte-1numsni"),n(v,"id","goRight"),n(v,"class","goRight scroll svelte-1numsni"),n(t,"class","scrollArrows svelte-1numsni"),n(u,"id","slidesBoxJobs"),n(u,"class","svelte-1numsni"),n(e,"id","slides"),n(e,"class","svelte-1numsni")},m(m,B){T(m,e,B),i(e,t),i(t,d),i(d,l),i(t,o),i(t,a),i(t,f),i(t,v),i(v,c),i(e,g),i(e,u),h||(p=[I(l,"click",s[0]),I(c,"click",s[1])],h=!0)},p:E,i:E,o:E,d(m){m&&x(e),h=!1,w(p)}}}var G=2;function Ve(s){var e=1,t="j"+e;function d(){if(e!=1){document.getElementById(t).classList.remove("tracked"),e=e-1;let o="translateX("+-80*(e-1)+"vw)";document.getElementById("slidesBoxJobs").style.transform=o,t="j"+e,document.getElementById(t).classList.add("tracked")}e==1?(document.getElementById("jobsLeft").style.opacity="0",document.getElementById("jobsLeft").style.pointerEvents="none"):e!=1&&(document.getElementById("jobsLeft").style.opacity="1",document.getElementById("jobsLeft").style.pointerEvents="all"),e==G?(document.getElementById("jobsRight").style.opacity="0",document.getElementById("jobsRight").style.pointerEvents="none"):e!=G&&(document.getElementById("jobsRight").style.opacity="1",document.getElementById("jobsRight").style.pointerEvents="all")}function l(){if(e<G){document.getElementById(t).classList.remove("tracked"),e=e+1;let o="translateX("+-80*(e-1)+"vw)";document.getElementById("slidesBoxJobs").style.transform=o,t="j"+e,document.getElementById(t).classList.add("tracked")}e==1?(document.getElementById("jobsLeft").style.opacity="0",document.getElementById("jobsLeft").style.pointerEvents="none"):e!=1&&(document.getElementById("jobsLeft").style.opacity="1",document.getElementById("jobsLeft").style.pointerEvents="all"),e==G?(document.getElementById("jobsRight").style.opacity="0",document.getElementById("jobsRight").style.pointerEvents="none"):e!=G&&(document.getElementById("jobsRight").style.opacity="1",document.getElementById("jobsRight").style.pointerEvents="all")}return[d,l]}class Je extends M{constructor(e){super(),q(this,e,Ve,Xe,j,{})}}function Fe(s){let e,t,d,l,o,a,f,v,c,g,u,h,p;return{c(){e=r("div"),t=r("div"),d=r("div"),l=r("h1"),l.textContent="\u22B2",o=y(),a=r("div"),a.innerHTML=`<div id="e1" class="tracker tracked svelte-yoqk7v"></div> 
      <div id="e2" class="tracker svelte-yoqk7v"></div>`,f=y(),v=r("div"),c=r("h1"),c.textContent="\u22B3",g=y(),u=r("section"),u.innerHTML=`<section class="slide svelte-yoqk7v"><div class="left-text block svelte-yoqk7v"><h1 class="svelte-yoqk7v">Education</h1> 
          <h3 class="svelte-yoqk7v">I graduated from Innovation Academy Charter School with a high
            school diploma, achieving honor roll or high honor roll every
            semester. I attended the school from grade 5 to grade 12. I am
            currently working towards a BS in Biomedical Engineering at 
            Worcester Polytechnic Institute (WPI). My plan for the future is 
            to get an MS in Biomedical Engineering with a focus in prosthetics 
            engineering and design.</h3></div> 
        <div class="right-img block svelte-yoqk7v"><img src="./src/assets/schools.png" class="iacs-wpi svelte-yoqk7v" alt="IACS and WPI logos"/></div></section> 
    <section class="slide svelte-yoqk7v"><div class="left-text block svelte-yoqk7v"><h1 class="svelte-yoqk7v">Education</h1> 
        <h3 class="svelte-yoqk7v">I graduated from Innovation Academy Charter School with a high
          school diploma, achieving honor roll or high honor roll every
          semester. I attended the school from grade 5 to grade 12. I am
          currently working towards a BS in Biomedical Engineering at 
          Worcester Polytechnic Institute (WPI). My plan for the future is 
          to get an MS in Biomedical Engineering with a focus in prosthetics 
          engineering and design.</h3></div> 
      <div class="right-img block svelte-yoqk7v"><img src="./src/assets/schools.png" class="iacs-wpi svelte-yoqk7v" alt="IACS and WPI logos"/></div></section>`,n(l,"id","schoolLeft"),n(l,"class","svelte-yoqk7v"),n(d,"class","goLeft scroll svelte-yoqk7v"),n(a,"class","slideTracker svelte-yoqk7v"),n(c,"id","schoolRight"),n(c,"class","svelte-yoqk7v"),n(v,"id","goRight"),n(v,"class","goRight scroll svelte-yoqk7v"),n(t,"class","scrollArrows svelte-yoqk7v"),n(u,"id","slidesBoxSchool"),n(u,"class","svelte-yoqk7v"),n(e,"id","slides"),n(e,"class","svelte-yoqk7v")},m(m,B){T(m,e,B),i(e,t),i(t,d),i(d,l),i(t,o),i(t,a),i(t,f),i(t,v),i(v,c),i(e,g),i(e,u),h||(p=[I(l,"click",s[0]),I(c,"click",s[1])],h=!0)},p:E,i:E,o:E,d(m){m&&x(e),h=!1,w(p)}}}var U=2;function Ye(s){var e=1,t="e"+e;function d(){if(e!=1){document.getElementById(t).classList.remove("tracked"),e=e-1;let o="translateX("+-80*(e-1)+"vw)";document.getElementById("slidesBoxSchool").style.transform=o,t="e"+e,document.getElementById(t).classList.add("tracked")}e==1?(document.getElementById("schoolLeft").style.opacity="0",document.getElementById("schoolLeft").style.pointerEvents="none"):e!=1&&(document.getElementById("schoolLeft").style.opacity="1",document.getElementById("schoolLeft").style.pointerEvents="all"),e==U?(document.getElementById("schoolRight").style.opacity="0",document.getElementById("schoolRight").style.pointerEvents="none"):e!=U&&(document.getElementById("schoolRight").style.opacity="1",document.getElementById("schoolRight").style.pointerEvents="all")}function l(){if(e<U){document.getElementById(t).classList.remove("tracked"),e=e+1;let o="translateX("+-80*(e-1)+"vw)";document.getElementById("slidesBoxSchool").style.transform=o,t="e"+e,document.getElementById(t).classList.add("tracked")}e==1?(document.getElementById("schoolLeft").style.opacity="0",document.getElementById("schoolLeft").style.pointerEvents="none"):e!=1&&(document.getElementById("schoolLeft").style.opacity="1",document.getElementById("schoolLeft").style.pointerEvents="all"),e==U?(document.getElementById("schoolRight").style.opacity="0",document.getElementById("schoolRight").style.pointerEvents="none"):e!=U&&(document.getElementById("schoolRight").style.opacity="1",document.getElementById("schoolRight").style.pointerEvents="all")}return[d,l]}class Ke extends M{constructor(e){super(),q(this,e,Ye,Fe,j,{})}}function Qe(s){let e,t,d,l,o,a,f,v,c,g,u,h,p;return{c(){e=r("div"),t=r("div"),d=r("div"),l=r("h1"),l.textContent="\u22B2",o=y(),a=r("div"),a.innerHTML=`<div id="s1" class="tracker tracked svelte-1mvxbde"></div> 
      <div id="s2" class="tracker svelte-1mvxbde"></div>`,f=y(),v=r("div"),c=r("h1"),c.textContent="\u22B3",g=y(),u=r("section"),u.innerHTML=`<section class="slide svelte-1mvxbde"><div class="left-text block svelte-1mvxbde"><h1 class="svelte-1mvxbde">Eagle Scout Project</h1> 
        <h3 class="svelte-1mvxbde">In order to obtain the rank of Eagle Scout, I needed to complete an
          Eagle Project. My project was to build two wooden benches on my
          high school&#39;s wooded walking trails. This involved fully designing,
          CAD modelling, constructing, and installing both benches. During this
          procedure, I needed to lead others to assist with the building and installing,
          fundraise in order to purchase the materials, and design the benches
          themselves. I had to coordinate a large team, approximately 30 people,
          to complete the entire project over the course of roughly 100 hours.</h3></div> 
      <div class="right-img block svelte-1mvxbde"><img src="./src/assets/ScoutsAndEagle.png" class="eagle-scout svelte-1mvxbde" alt="Boy Scout Logo and Eagle Scout Badge"/></div></section> 
    <section class="slide svelte-1mvxbde"><div class="left-text block svelte-1mvxbde"><h1 class="svelte-1mvxbde">Eagle Scout Project</h1> 
        <h3 class="svelte-1mvxbde">In order to obtain the rank of Eagle Scout, I needed to complete an
          Eagle Project. My project was to build two wooden benches on my
          high school&#39;s wooded walking trails. This involved fully designing,
          CAD modelling, constructing, and installing both benches. During this
          procedure, I needed to lead others to assist with the building and installing,
          fundraise in order to purchase the materials, and design the benches
          themselves. I had to coordinate a large team, approximately 30 people,
          to complete the entire project over the course of roughly 100 hours.</h3></div> 
      <div class="right-img block svelte-1mvxbde"><img src="./src/assets/ScoutsAndEagle.png" class="eagle-scout svelte-1mvxbde" alt="Boy Scout Logo and Eagle Scout Badge"/></div></section>`,n(l,"id","scoutsLeft"),n(l,"class","svelte-1mvxbde"),n(d,"class","goLeft scroll svelte-1mvxbde"),n(a,"class","slideTracker svelte-1mvxbde"),n(c,"id","scoutsRight"),n(c,"class","svelte-1mvxbde"),n(v,"class","goRight scroll svelte-1mvxbde"),n(t,"class","scrollArrows svelte-1mvxbde"),n(u,"id","slidesBoxScouts"),n(u,"class","svelte-1mvxbde"),n(e,"id","slides"),n(e,"class","svelte-1mvxbde")},m(m,B){T(m,e,B),i(e,t),i(t,d),i(d,l),i(t,o),i(t,a),i(t,f),i(t,v),i(v,c),i(e,g),i(e,u),h||(p=[I(l,"click",s[0]),I(c,"click",s[1])],h=!0)},p:E,i:E,o:E,d(m){m&&x(e),h=!1,w(p)}}}var Z=2;function Ge(s){var e=1,t="s"+e;function d(){if(e!=1){document.getElementById(t).classList.remove("tracked"),e=e-1;let o="translateX("+-80*(e-1)+"vw)";document.getElementById("slidesBoxScouts").style.transform=o,t="s"+e,document.getElementById(t).classList.add("tracked")}e==1?(document.getElementById("scoutsLeft").style.opacity="0",document.getElementById("scoutsLeft").style.pointerEvents="none"):e!=1&&(document.getElementById("scoutsLeft").style.opacity="1",document.getElementById("scoutsLeft").style.pointerEvents="all"),e==Z?(document.getElementById("scoutsRight").style.opacity="0",document.getElementById("scoutsRight").style.pointerEvents="none"):e!=Z&&(document.getElementById("scoutsRight").style.opacity="1",document.getElementById("scoutsRight").style.pointerEvents="all")}function l(){if(e<Z){document.getElementById(t).classList.remove("tracked"),e=e+1;let o="translateX("+-80*(e-1)+"vw)";document.getElementById("slidesBoxScouts").style.transform=o,t="s"+e,document.getElementById(t).classList.add("tracked")}e==1?(document.getElementById("scoutsLeft").style.opacity="0",document.getElementById("scoutsLeft").style.pointerEvents="none"):e!=1&&(document.getElementById("scoutsLeft").style.opacity="1",document.getElementById("scoutsLeft").style.pointerEvents="all"),e==Z?(document.getElementById("scoutsRight").style.opacity="0",document.getElementById("scoutsRight").style.pointerEvents="none"):e!=Z&&(document.getElementById("scoutsRight").style.opacity="1",document.getElementById("scoutsRight").style.pointerEvents="all")}return[d,l]}class Ue extends M{constructor(e){super(),q(this,e,Ge,Qe,j,{})}}function Ze(s){let e,t,d,l,o,a,f,v,c,g,u,h,p;return{c(){e=r("div"),t=r("div"),d=r("div"),l=r("h1"),l.textContent="\u22B2",o=y(),a=r("div"),a.innerHTML=`<div id="v1" class="tracker tracked svelte-wjl4ha"></div> 
      <div id="v2" class="tracker svelte-wjl4ha"></div>`,f=y(),v=r("div"),c=r("h1"),c.textContent="\u22B3",g=y(),u=r("section"),u.innerHTML=`<section class="slide svelte-wjl4ha"><div class="left-img block svelte-wjl4ha"><img src="./src/assets/COSAndOPDD.png" class="opdd svelte-wjl4ha" alt="Operation Delta Dog Logo"/></div> 
      <div class="right-text block svelte-wjl4ha"><h1 class="svelte-wjl4ha">Volunteer Work</h1> 
        <h3 class="svelte-wjl4ha">Over the years I have volunteered with a number of people and
          organizations, including the Chelmsford Open Space Stewardship, such as raking leaves
          for disabled veterans, helping plant crops for a local garden, and doing 
          maintenance on wilderness trails. Additionally, I have been volunteering
          with Operation Delta Dog since its founding in 2012. Operation Delta Dog
          is a non-profit organization that works to rescue dogs from shelters
          and trains them to be service dogs for veterans with PTSD and TBI. I have helped with
          event planning, presentations, fostering dogs, and more.</h3></div></section> 
    <section class="slide svelte-wjl4ha"><div class="left-img block svelte-wjl4ha"><img src="./src/assets/COSAndOPDD.png" class="opdd svelte-wjl4ha" alt="Operation Delta Dog Logo"/></div> 
      <div class="right-text block svelte-wjl4ha"><h1 class="svelte-wjl4ha">Volunteer Work</h1> 
        <h3 class="svelte-wjl4ha">Over the years I have volunteered with a number of people and
          organizations, including the Chelmsford Open Space Stewardship, such as raking leaves
          for disabled veterans, helping plant crops for a local garden, and doing 
          maintenance on wilderness trails. Additionally, I have been volunteering
          with Operation Delta Dog since its founding in 2012. Operation Delta Dog
          is a non-profit organization that works to rescue dogs from shelters
          and trains them to be service dogs for veterans with PTSD and TBI. I have helped with
          event planning, presentations, fostering dogs, and more.</h3></div></section>`,n(l,"id","volunteerLeft"),n(l,"class","svelte-wjl4ha"),n(d,"class","goLeft scroll svelte-wjl4ha"),n(a,"class","slideTracker svelte-wjl4ha"),n(c,"id","volunteerRight"),n(c,"class","svelte-wjl4ha"),n(v,"id","goRight"),n(v,"class","goRight scroll svelte-wjl4ha"),n(t,"class","scrollArrows svelte-wjl4ha"),n(u,"id","slidesBoxVolunteer"),n(u,"class","svelte-wjl4ha"),n(e,"id","slides"),n(e,"class","svelte-wjl4ha")},m(m,B){T(m,e,B),i(e,t),i(t,d),i(d,l),i(t,o),i(t,a),i(t,f),i(t,v),i(v,c),i(e,g),i(e,u),h||(p=[I(l,"click",s[0]),I(c,"click",s[1])],h=!0)},p:E,i:E,o:E,d(m){m&&x(e),h=!1,w(p)}}}var ee=2;function et(s){var e=1,t="v"+e;function d(){if(e!=1){document.getElementById(t).classList.remove("tracked"),e=e-1;let o="translateX("+-80*(e-1)+"vw)";document.getElementById("slidesBoxVolunteer").style.transform=o,t="v"+e,document.getElementById(t).classList.add("tracked")}e==1?(document.getElementById("volunteerLeft").style.opacity="0",document.getElementById("volunteerLeft").style.pointerEvents="none"):e!=1&&(document.getElementById("volunteerLeft").style.opacity="1",document.getElementById("volunteerLeft").style.pointerEvents="all"),e==ee?(document.getElementById("volunteerRight").style.opacity="0",document.getElementById("volunteerRight").style.pointerEvents="none"):e!=ee&&(document.getElementById("volunteerRight").style.opacity="1",document.getElementById("volunteerRight").style.pointerEvents="all")}function l(){if(e<ee){document.getElementById(t).classList.remove("tracked"),e=e+1;let o="translateX("+-80*(e-1)+"vw)";document.getElementById("slidesBoxVolunteer").style.transform=o,t="v"+e,document.getElementById(t).classList.add("tracked")}e==1?(document.getElementById("volunteerLeft").style.opacity="0",document.getElementById("volunteerLeft").style.pointerEvents="none"):e!=1&&(document.getElementById("volunteerLeft").style.opacity="1",document.getElementById("volunteerLeft").style.pointerEvents="all"),e==ee?(document.getElementById("volunteerRight").style.opacity="0",document.getElementById("volunteerRight").style.pointerEvents="none"):e!=ee&&(document.getElementById("volunteerRight").style.opacity="1",document.getElementById("volunteerRight").style.pointerEvents="all")}return[d,l]}class tt extends M{constructor(e){super(),q(this,e,et,Ze,j,{})}}function st(s){let e,t,d,l,o,a,f,v,c,g,u,h,p,m,B,J,A,me,F,C,ge,Y,P,he,_,L,D,ye,z,fe,O,pe,b,H,Ee,N,Ie,W,ke,de,ne,ce,Be;return re(s[4]),v=new Oe({}),u=new We({}),m=new Je({}),A=new Ke({}),C=new tt({}),P=new Ue({}),{c(){e=r("main"),t=r("section"),t.innerHTML=`<div class="header svelte-1ec8ukm"><div class="headerText svelte-1ec8ukm"><h2>Ian Blanchet</h2> 
        <div class="contact svelte-1ec8ukm"><h5>978-364-6796</h5> 
          <h5>ianblanchet01@gmail.com</h5></div></div></div>`,d=y(),l=r("section"),o=r("div"),a=r("section"),f=r("div"),V(v.$$.fragment),c=y(),g=r("div"),V(u.$$.fragment),h=y(),p=r("div"),V(m.$$.fragment),B=y(),J=r("div"),V(A.$$.fragment),me=y(),F=r("div"),V(C.$$.fragment),ge=y(),Y=r("div"),V(P.$$.fragment),he=y(),_=r("div"),L=r("div"),D=r("div"),D.innerHTML='<h3 id="one" class="svelte-1ec8ukm">Introduction</h3>',ye=y(),z=r("div"),z.innerHTML='<h3 id="two" class="svelte-1ec8ukm">Internships</h3>',fe=y(),O=r("div"),O.innerHTML='<h3 id="three" class="svelte-1ec8ukm">Employment</h3>',pe=y(),b=r("div"),H=r("div"),H.innerHTML='<h3 id="four" class="svelte-1ec8ukm">Education</h3>',Ee=y(),N=r("div"),N.innerHTML='<h3 id="five" class="svelte-1ec8ukm">Volunteering</h3>',Ie=y(),W=r("div"),W.innerHTML='<h3 id="six" class="svelte-1ec8ukm">Boy Scouts</h3>',ke=y(),de=r("section"),n(t,"id","header"),n(t,"class","svelte-1ec8ukm"),n(f,"id","intro"),n(f,"class","slides"),n(g,"id","intern"),n(g,"class","slides"),n(p,"id","jobs"),n(p,"class","slides"),n(J,"id","school"),n(J,"class","slides"),n(F,"id","volunteer"),n(F,"class","slides"),n(Y,"id","scouts"),n(Y,"class","slides"),n(a,"id","slideDeck"),n(a,"class","one svelte-1ec8ukm"),n(o,"id","displayBox"),n(o,"class","svelte-1ec8ukm"),n(D,"id","one"),n(D,"class","h3 left selected svelte-1ec8ukm"),n(z,"id","two"),n(z,"class","h3 svelte-1ec8ukm"),n(O,"id","three"),n(O,"class","h3 leftMid svelte-1ec8ukm"),n(L,"class","first svelte-1ec8ukm"),n(H,"id","four"),n(H,"class","h3 rightMid svelte-1ec8ukm"),n(N,"id","five"),n(N,"class","h3 svelte-1ec8ukm"),n(W,"id","six"),n(W,"class","h3 right svelte-1ec8ukm"),n(b,"class","second svelte-1ec8ukm"),n(_,"id","switchTabs"),n(_,"class","svelte-1ec8ukm"),n(l,"id","content"),n(l,"class","svelte-1ec8ukm"),n(de,"class","ignore one two three four five six svelte-1ec8ukm"),n(e,"class","svelte-1ec8ukm")},m(k,Se){T(k,e,Se),i(e,t),i(e,d),i(e,l),i(l,o),i(o,a),i(a,f),$(v,f,null),i(a,c),i(a,g),$(u,g,null),i(a,h),i(a,p),$(m,p,null),i(a,B),i(a,J),$(A,J,null),i(a,me),i(a,F),$(C,F,null),i(a,ge),i(a,Y),$(P,Y,null),i(l,he),i(l,_),i(_,L),i(L,D),i(L,ye),i(L,z),i(L,fe),i(L,O),i(_,pe),i(_,b),i(b,H),i(b,Ee),i(b,N),i(b,Ie),i(b,W),i(e,ke),i(e,de),ne=!0,ce||(Be=[I(window,"resize",s[4]),I(D,"click",s[1]),I(z,"click",s[1]),I(O,"click",s[1]),I(H,"click",s[1]),I(N,"click",s[1]),I(W,"click",s[1])],ce=!0)},p:E,i(k){ne||(S(v.$$.fragment,k),S(u.$$.fragment,k),S(m.$$.fragment,k),S(A.$$.fragment,k),S(C.$$.fragment,k),S(P.$$.fragment,k),ne=!0)},o(k){X(v.$$.fragment,k),X(u.$$.fragment,k),X(m.$$.fragment,k),X(A.$$.fragment,k),X(C.$$.fragment,k),X(P.$$.fragment,k),ne=!1},d(k){k&&x(e),R(v),R(u),R(m),R(A),R(C),R(P),ce=!1,w(Be)}}}function nt(s,e,t){var d,l="one",o;function a(v){let c=document.querySelector("#slideDeck"),g=v.target.id,u=c.classList[0],h=document.getElementById(g),p=document.querySelector(".selected");g!=u&&(c.classList.remove(u),c.className=g+" "+c.className,h.classList.add("selected"),p.classList.remove("selected"),t(2,l=g))}function f(){t(0,d=window.innerWidth)}return s.$$.update=()=>{s.$$.dirty&4&&(l=="one"?t(3,o="intro"):l=="two"?t(3,o="intern"):l=="three"?t(3,o="jobs"):l=="four"?t(3,o="school"):l=="five"?t(3,o="volunteer"):l=="six"?t(3,o="scouts"):t(3,o="intro")),s.$$.dirty&8},[d,a,l,o,f]}class lt extends M{constructor(e){super(),q(this,e,nt,st,j,{})}}new lt({target:document.getElementById("app")});
