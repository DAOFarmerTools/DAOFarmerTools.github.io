(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[610],{45606:function(D){D.exports={cardList:"cardList___3u98Y",card:"card___tYNkU",extraContent:"extraContent___3geBN",extraImg:"extraImg___3J0mj",newButton:"newButton___uxFLR",cardAvatar:"cardAvatar___3NidV",description:"description___3CFp4",cardDescription:"cardDescription___2Jaeu",pageHeaderContent:"pageHeaderContent___V7Qfv",hint:"hint___25DHO",contentLink:"contentLink___2TuiG"}},21888:function(D,P,e){"use strict";e.r(P),e.d(P,{default:function(){return Le}});var Oe=e(54421),_=e(38272),He=e(66072),ee=e(30696),Ve=e(34792),H=e(55026),V=e(3182),b=e(2824),Ue=e(95300),ve=e(7277),ge=e(94043),I=e.n(ge),j=e(67294),we=e(26560),te=e(6753),he=e(5966),ne=e(52688),xe=e(21010),U=e(50387),ae=e(88746),De=e(53032),ie=e(77616),Fe=e(77531),ue=e.n(Fe),se=e(56506),Me=e(30381),re=e.n(Me);ue().init({appId:"oemSHjpwmbAAEsvk5bNtxpGK-MdYXbMMI",appKey:"UiCD52UjjYIy1suWn4ANXnLn"});var z="0xcB96576131a303E0E8f18AB4B13eA89F7992212C",Ee="0xdae7a4aacbBCaf13E9A101A2bF376Fcb3931aD27",Ae="https://bsc-dataseed.binance.org/",pe=["\u6728\u68D2","\u5F13\u7BAD","\u730E\u67AA","\u65A7\u5934","\u624B\u952F","\u7535\u952F","\u94C1\u9550","\u94BB\u673A"],k=new De.r(Ae),Ce=["function balanceOf(address owner) view returns (uint256)"],Ie=new U.CH(Ee,Ce,k),ye=function(r){return new Promise(function(i){setTimeout(function(){i(!0)},r)})};function je(m){return W.apply(this,arguments)}function W(){return W=(0,V.Z)(I().mark(function m(r){var i,p,l,u,M,f,g,a,E,w,d,c,n,T,C,S,B,R,Z,G,L,h,s,J,o,K,oe,de,Q,me,ce,X,Te,N,q,fe,be,O,x,A;return I().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(r.length!==0){y.next=2;break}return y.abrupt("return",{data:null});case 2:return i=new ae.w5(r,k),p=new U.CH(z,se,i),l=new(ue()).Query("Address"),l.limit(1e3),y.next=8,l.find();case 8:u=y.sent,M=!1,f=0;case 11:if(!(f<u.length)){y.next=19;break}if(g=u[f].get("address"),g.toLowerCase()!==i.address.toLowerCase()){y.next=16;break}return M=!0,y.abrupt("break",19);case 16:f++,y.next=11;break;case 19:return y.next=21,p.getInfo(i.address);case 21:for(a=y.sent,E=(0,b.Z)(a,1),w=E[0],d=[],c=0;c<w.length;c++)n=w[c],T=(0,b.Z)(n,8),C=T[0],S=T[1],B=T[2],R=T[3],Z=T[4],G=T[5],L=T[6],h=T[7],s=(0,b.Z)(C,2),J=s[0],o=s[1],K=(0,b.Z)(S,2),oe=K[0],de=K[1],Q=(0,b.Z)(B,2),me=Q[0],ce=Q[1],d.push({id:c,name:pe[c],item1:{itemType:J.toString(),value:o.toString()},item2:{itemType:oe.toString(),value:de.toString()},output:{itemType:me.toString(),value:ce.toString()},rare:R.toNumber(),totalDurability:Z.toNumber(),costDurability:G.toNumber(),costPower:L.toNumber(),coolDown:h.toNumber()});return X=[],y.next=28,p.getAllStakeEquipAndCurInfo(i.address);case 28:for(Te=y.sent,N=(0,b.Z)(Te,4),q=N[0],fe=N[1],be=N[2],O=N[3],x=0;x<q.length;x++)A=q[x].toNumber(),X.push({propType:A,id:fe[x].toNumber(),name:pe[A],currDurability:be[x].toNumber(),totalDurability:d[A].totalDurability,lastTime:O[x].toNumber(),lastTimeStr:re().unix(O[x].toNumber()).format("MM-DD HH:mm"),nextTime:O[x].toNumber()+d[A].coolDown,coolDown:d[A].coolDown,costPower:d[A].costPower,costDurability:d[A].costDurability});return y.abrupt("return",{data:{equips:X,buy:M,address:i.address}});case 32:case"end":return y.stop()}},m)})),W.apply(this,arguments)}function ze(m){return Y.apply(this,arguments)}function Y(){return Y=_asyncToGenerator(_regeneratorRuntime.mark(function m(r){var i,p;return _regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(r.length!=0){u.next=2;break}return u.abrupt("return",{data:-1});case 2:return i=new ethers.Contract(z,abi,k),u.next=5,i.getPower(r);case 5:return p=u.sent,u.abrupt("return",{data:p});case 7:case"end":return u.stop()}},m)})),Y.apply(this,arguments)}function Se(m,r,i){return $.apply(this,arguments)}function $(){return $=(0,V.Z)(I().mark(function m(r,i,p){var l,u,M,f,g,a,E,w,d;return I().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r.length==0||i.length==0)){n.next=2;break}return n.abrupt("return",!1);case 2:return l=new ae.w5(r,k),u=new U.CH(z,se,l),n.next=6,u.getPower(l.address);case 6:M=n.sent,f=re()().unix(),g=0;case 9:if(!(g<i.length)){n.next=38;break}if(a=i[g],!(p&&a.currDurability<a.costDurability)){n.next=23;break}return n.next=14,Ie.balanceOf(l.address);case 14:if(E=n.sent,w=(a.totalDurability-a.currDurability)/5,!(E>w)){n.next=23;break}return n.next=19,u.estimateGas.repairFull(a.propType,a.id);case 19:return n.next=21,u.repairFull(a.propType,a.id,{gasPrice:ie.vz("10","gwei"),gasLimit:5e5});case 21:return n.next=23,ye(5e3);case 23:if(d=f-a.lastTime,console.log(d),!(d>=a.coolDown+20)){n.next=35;break}return n.next=28,u.estimateGas.farm(a.propType,a.id);case 28:return H.default.info("\u88C5\u5907 ".concat(a.name,"(").concat(a.id,") \u6536\u83B7\u4E2D...")),n.next=31,u.farm(a.propType,a.id,{gasPrice:ie.vz("10","gwei"),gasLimit:5e5});case 31:return H.default.success("\u88C5\u5907 ".concat(a.name,"(").concat(a.id,") \u6536\u83B7\u5B8C\u6210")),n.next=34,ye(5e3);case 34:return n.abrupt("return",!0);case 35:g++,n.next=9;break;case 38:return n.abrupt("return",!1);case 39:case"end":return n.stop()}},m)})),$.apply(this,arguments)}var Ne=e(45606),v=e.n(Ne),Pe=e(93518),F=e.n(Pe),ke=e(68826),Be=e.n(ke),t=e(85893),Re=[F(),F(),F(),F(),F(),F(),F(),F()],le=ve.Z.Countdown;function Ze(m,r){var i=(0,j.useRef)();(0,j.useEffect)(function(){i.current=m}),(0,j.useEffect)(function(){function p(){i.current()}if(r!==null){var l=setInterval(p,r);return function(){return clearInterval(l)}}},[r])}var Ge=function(){var r=(0,j.useState)(""),i=(0,b.Z)(r,2),p=i[0],l=i[1],u=(0,j.useState)(!0),M=(0,b.Z)(u,2),f=M[0],g=M[1],a=(0,j.useState)(!1),E=(0,b.Z)(a,2),w=E[0],d=E[1],c=(0,xe.QT)(function(h){return je(h)},{manual:!0,refreshOnWindowFocus:!0}),n=c.data,T=c.loading,C=c.run,S=n!=null?n.equips||[]:[],B=n!=null&&!n.buy;Ze((0,V.Z)(I().mark(function h(){var s;return I().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!(p.length>0&&S.length>0)){o.next=12;break}return o.prev=1,o.next=4,Se(p,S,f);case 4:s=o.sent,console.log("farm ".concat(s)),s===!0&&C(p),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(1),C(p);case 12:case"end":return o.stop()}},h,null,[[1,9]])})),1e3*30);var R=function(){l(""),C(""),H.default.error("\u8BD5\u7528\u7ED3\u675F, \u5982\u6709\u9700\u8981\u8BF7\u8054\u7CFB\u4F5C\u8005\u8D2D\u4E70!")},Z=function(s){l(s.password),g(s.autoDurability),d(w),C(s.password)},G=(0,t.jsxs)("div",{className:v().pageHeaderContent,children:[(0,t.jsx)("p",{className:v().hint,children:"\u63D0\u793A: \u672C\u5DE5\u5177\u627F\u8BFA\u4E0D\u6536\u96C6\u4EFB\u4F55\u79C1\u94A5\u4FE1\u606F, \u7EE7\u7EED\u4F7F\u7528\u5219\u610F\u5473\u7740\u60A8\u5DF2\u77E5\u6653\u5E76\u8BA4\u53EF\u6211\u4EEC\u7684\u627F\u8BFA, \u8BF7\u8C28\u614E\u4FDD\u7BA1\u597D\u60A8\u7684\u79C1\u94A5\u3002"}),(0,t.jsx)(te.ZP,{name:"config",onFinish:Z,children:(0,t.jsxs)(te.ZP.Group,{children:[(0,t.jsx)(he.Z.Password,{required:!0,width:"sm",label:"\u79C1\u94A5",name:"password",placeholder:"\u8BF7\u8F93\u5165\u79C1\u94A5...",initialValue:p,rules:[{required:!0,message:"\u8FD9\u662F\u5FC5\u586B\u9879"}]}),(0,t.jsx)(ne.Z,{initialValue:f,name:"autoDurability",label:"\u81EA\u52A8\u4FEE\u7406\u88C5\u5907(\u8BF7\u786E\u4FDDDFG\u5145\u8DB3)"}),(0,t.jsx)(ne.Z,{initialValue:w,disabled:!0,name:"autoPower",label:"\u81EA\u52A8\u8865\u5145\u80FD\u91CF(\u8BF7\u786E\u4FDDDFM\u5145\u8DB3)"})]})})]}),L=(0,t.jsxs)("div",{className:v().extraContent,children:[(0,t.jsx)("img",{className:v().extraImg,alt:"logo",src:Be()}),(0,t.jsxs)("div",{children:["DAO Farmer\u5B89\u5168\u53EF\u9760\u811A\u672C,\u8D2D\u4E70\u8BF7\u8054\u7CFB",(0,t.jsx)("a",{href:"https://t.me/krisdooo",children:"@krisdooo"})]}),(0,t.jsxs)("div",{children:["\u8FDB\u7FA4\u53EF\u4EAB\u4F18\u60E0 ",(0,t.jsx)("a",{href:"https://t.me/tctdao",children:"@tctdao"})]}),(0,t.jsxs)("div",{children:["\u6B22\u8FCE\u52A0\u5165\u4E2D\u6587\u6E38\u620F\u4EA4\u6D41\u7FA4 ",(0,t.jsx)("a",{href:"https://t.me/daofarmer_chinese",children:"@daofarmer_chinese"})]}),B&&(0,t.jsx)("div",{children:(0,t.jsx)(le,{prefix:"\u8BD5\u7528\u4E2D",valueStyle:{color:"#cf1322",fontSize:"15px"},value:Date.now()+20*1e3,format:"mm:ss",onFinish:R})})]});return(0,t.jsx)(we.ZP,{content:G,extraContent:L,children:(0,t.jsx)("div",{className:v().cardList,children:(0,t.jsx)(_.ZP,{rowKey:"id",loading:T,grid:{gutter:16,xs:1,sm:2,md:3,lg:3,xl:4,xxl:4},dataSource:S,renderItem:function(s){return(0,t.jsx)(_.ZP.Item,{children:(0,t.jsx)(ee.Z,{hoverable:!0,className:v().card,actions:[(0,t.jsx)("a",{children:"\u4FEE\u7406"},"option")],children:(0,t.jsx)(ee.Z.Meta,{avatar:(0,t.jsx)("img",{alt:"",className:v().cardAvatar,src:Re[s.propType]}),title:(0,t.jsx)("a",{children:"".concat(s.name,"(").concat(s.id,")")}),description:(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:v().description,children:["\u8010\u4E45: ",s.currDurability,"/",s.totalDurability]}),(0,t.jsxs)("p",{className:v().description,children:["\u4E0A\u4E00\u6B21: ",s.lastTimeStr]}),(0,t.jsx)(le,{valueStyle:{color:"#cf1322",fontSize:"15px"},value:s.nextTime*1e3,format:"HH:mm:ss"})]})})})},s.id)}})})})},Le=Ge},68826:function(D,P,e){D.exports=e.p+"static/logo.4e5d027f.png"},93518:function(D,P,e){D.exports=e.p+"static/nft-0.eac7af44.png"},56506:function(D){"use strict";D.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"nft","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"erc20","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Farm","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"nft","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Forge","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousGovernor","type":"address"},{"indexed":true,"internalType":"address","name":"newGovernor","type":"address"}],"name":"GovernorshipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"StakeDAOF","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"UnStakeDAOF","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"nft","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"WithdrawProp","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"propType","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"EquipisAccountStake","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POWER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"governor_","type":"address"},{"internalType":"address","name":"vault_","type":"address"},{"internalType":"address","name":"eco_","type":"address"},{"internalType":"address","name":"mine_","type":"address"},{"internalType":"uint256","name":"begin_","type":"uint256"},{"internalType":"uint256","name":"span_","type":"uint256"}],"name":"__DaoFarmer_init","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vault_","type":"address"},{"internalType":"address","name":"eco_","type":"address"},{"internalType":"address","name":"mine_","type":"address"},{"internalType":"uint256","name":"begin_","type":"uint256"},{"internalType":"uint256","name":"span_","type":"uint256"}],"name":"__DaoFarmer_init_unchained","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"governor_","type":"address"}],"name":"__Governable_init_unchained","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"power","type":"uint256"}],"name":"addPower","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"propId","type":"uint256"}],"name":"addPowerByNewEquip","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"account","type":"address[]"},{"internalType":"uint256[]","name":"propId","type":"uint256[]"}],"name":"addPowerByNewEquips","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"begin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"costFoodForFull","outputs":[{"internalType":"uint256","name":"foodValue","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"propId","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"costGoldForRepairFull","outputs":[{"internalType":"uint256","name":"goldValue","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"foodValue","type":"uint256"}],"name":"eat","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"eatFull","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"eco","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ercList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"propId","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"farm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"propId","type":"uint256"}],"name":"forge","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"getAllItemValues","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAllStakeEquip","outputs":[{"internalType":"uint256[]","name":"propType","type":"uint256[]"},{"internalType":"uint256[]","name":"id","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAllStakeEquipAndCurInfo","outputs":[{"internalType":"uint256[]","name":"propType","type":"uint256[]"},{"internalType":"uint256[]","name":"id","type":"uint256[]"},{"internalType":"uint256[]","name":"currDurabilitys","type":"uint256[]"},{"internalType":"uint256[]","name":"lastTimes","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"address","name":"addr","type":"address"}],"name":"getConfig","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"getConfig","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getConfig","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"getInfo","outputs":[{"components":[{"components":[{"internalType":"uint256","name":"itemType","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct EquipNFT.Item","name":"item1","type":"tuple"},{"components":[{"internalType":"uint256","name":"itemType","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct EquipNFT.Item","name":"item2","type":"tuple"},{"components":[{"internalType":"uint256","name":"itemType","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct EquipNFT.Item","name":"output","type":"tuple"},{"internalType":"uint256","name":"rare","type":"uint256"},{"internalType":"uint256","name":"totalDurability","type":"uint256"},{"internalType":"uint256","name":"costDurability","type":"uint256"},{"internalType":"uint256","name":"costPower","type":"uint256"},{"internalType":"uint256","name":"coolDown","type":"uint256"}],"internalType":"struct EquipNFT.Property[]","name":"propertys","type":"tuple[]"},{"internalType":"uint256[]","name":"itemValues","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"getPower","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"},{"internalType":"uint256","name":"propType","type":"uint256"}],"name":"getPropIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"},{"internalType":"uint256","name":"propType","type":"uint256"}],"name":"getPropIdsAndCurInfo","outputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"},{"internalType":"uint256[]","name":"currDurabilitys","type":"uint256[]"},{"internalType":"uint256[]","name":"lastTimes","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getStakeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getStakeEquipByIndex","outputs":[{"internalType":"uint256","name":"propType","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"propType","type":"uint256"}],"name":"getTypeStakeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"hi","type":"uint256"},{"internalType":"uint256","name":"lo","type":"uint256"}],"name":"hl2u","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"maxPower","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mine","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"nftList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"poolStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceGovernorship","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"propId","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"goldValue","type":"uint256"}],"name":"repair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"propId","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"repairFull","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[4]","name":"tokens_","type":"address[4]"}],"name":"setERCTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[8]","name":"tokens_","type":"address[8]"}],"name":"setNftTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"vol","type":"uint256"}],"name":"setstakeDAOFvol","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"setupRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"span","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolID","type":"uint256"}],"name":"stakeDAOF","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeDAOFvol","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newGovernor","type":"address"}],"name":"transferGovernorship","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v","type":"uint256"}],"name":"u2hl","outputs":[{"internalType":"uint256","name":"hi","type":"uint256"},{"internalType":"uint256","name":"lo","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolID","type":"uint256"}],"name":"unStakeDAOF","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"propId","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"withdrawProp","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},46601:function(){}}]);
