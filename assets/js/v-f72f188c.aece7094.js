"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[75547],{74858:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-f72f188c",path:"/devices/SMART-SMOKE10.html",title:"Alecto SMART-SMOKE10 control via MQTT",lang:"en-US",frontmatter:{title:"Alecto SMART-SMOKE10 control via MQTT",description:"Integrate your Alecto SMART-SMOKE10 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-06-14T22:06:16.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Smoke_state (text)",slug:"smoke-state-text",children:[]},{level:3,title:"Battery_state (text)",slug:"battery-state-text",children:[]},{level:3,title:"Checking_result (text)",slug:"checking-result-text",children:[]},{level:3,title:"Smoke_value (numeric)",slug:"smoke-value-numeric",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Lifecycle (binary)",slug:"lifecycle-binary",children:[]},{level:3,title:"Self_checking (binary)",slug:"self-checking-binary",children:[]},{level:3,title:"Silence (binary)",slug:"silence-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SMART-SMOKE10.md",git:{updatedTime:1657896429e3}}},88514:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});const i=(0,a(66252).uE)('<h1 id="alecto-smart-smoke10" tabindex="-1"><a class="header-anchor" href="#alecto-smart-smoke10" aria-hidden="true">#</a> Alecto SMART-SMOKE10</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SMART-SMOKE10</td></tr><tr><td>Vendor</td><td>Alecto</td></tr><tr><td>Description</td><td>Smoke detector</td></tr><tr><td>Exposes</td><td>smoke_state, battery_state, checking_result, smoke_value, battery, lifecycle, self_checking, silence, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SMART-SMOKE10.jpg" alt="Alecto SMART-SMOKE10"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press the test button 3 times (until the red LED stays on). After this the device will reset and try to join a network.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="smoke-state-text" tabindex="-1"><a class="header-anchor" href="#smoke-state-text" aria-hidden="true">#</a> Smoke_state (text)</h3><p>Value can be found in the published state on the <code>smoke_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="battery-state-text" tabindex="-1"><a class="header-anchor" href="#battery-state-text" aria-hidden="true">#</a> Battery_state (text)</h3><p>Value can be found in the published state on the <code>battery_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="checking-result-text" tabindex="-1"><a class="header-anchor" href="#checking-result-text" aria-hidden="true">#</a> Checking_result (text)</h3><p>Value can be found in the published state on the <code>checking_result</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="smoke-value-numeric" tabindex="-1"><a class="header-anchor" href="#smoke-value-numeric" aria-hidden="true">#</a> Smoke_value (numeric)</h3><p>Value can be found in the published state on the <code>smoke_value</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="lifecycle-binary" tabindex="-1"><a class="header-anchor" href="#lifecycle-binary" aria-hidden="true">#</a> Lifecycle (binary)</h3><p>Value can be found in the published state on the <code>lifecycle</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> lifecycle is ON, if <code>false</code> OFF.</p><h3 id="self-checking-binary" tabindex="-1"><a class="header-anchor" href="#self-checking-binary" aria-hidden="true">#</a> Self_checking (binary)</h3><p>Value can be found in the published state on the <code>self_checking</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;self_checking&quot;: NEW_VALUE}</code>. If value equals <code>true</code> self_checking is ON, if <code>false</code> OFF.</p><h3 id="silence-binary" tabindex="-1"><a class="header-anchor" href="#silence-binary" aria-hidden="true">#</a> Silence (binary)</h3><p>Value can be found in the published state on the <code>silence</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;silence&quot;: NEW_VALUE}</code>. If value equals <code>true</code> silence is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',24),d={},o=(0,a(83744).Z)(d,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);