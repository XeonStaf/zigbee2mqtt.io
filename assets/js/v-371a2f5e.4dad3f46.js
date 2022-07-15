"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[73849],{33567:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-371a2f5e",path:"/devices/ZigUP.html",title:"Custom devices (DiY) ZigUP control via MQTT",lang:"en-US",frontmatter:{title:"Custom devices (DiY) ZigUP control via MQTT",description:"Integrate your Custom devices (DiY) ZigUP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZigUP.md",git:{updatedTime:1657896429e3}}},46280:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var o=i(66252);const l=(0,o._)("h1",{id:"custom-devices-diy-zigup",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#custom-devices-diy-zigup","aria-hidden":"true"},"#"),(0,o.Uk)(" Custom devices (DiY) ZigUP")],-1),s=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),a=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"ZigUP")],-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Vendor"),(0,o._)("td",null,"Custom devices (DiY)")],-1),n=(0,o._)("td",null,"Description",-1),r={href:"https://github.com/formtapez/ZigUP/",target:"_blank",rel:"noopener noreferrer"},c=(0,o.Uk)("CC2530 based ZigBee relais, switch, sensor and router"),u=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"switch (state), linkquality")],-1),h=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZigUP.jpg",alt:"Custom devices (DiY) ZigUP"})])],-1),p=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),g=(0,o.Uk)("How to use device type specific configuration"),m=(0,o.uE)('<ul><li><p><code>color_sync</code>: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',6),f={},v=(0,i(83744).Z)(f,[["render",function(e,t){const i=(0,o.up)("OutboundLink"),f=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[l,(0,o._)("table",null,[s,(0,o._)("tbody",null,[a,d,(0,o._)("tr",null,[n,(0,o._)("td",null,[(0,o._)("a",r,[c,(0,o.Wm)(i)])])]),u,h])]),p,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(f,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[g])),_:1})])]),m],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);