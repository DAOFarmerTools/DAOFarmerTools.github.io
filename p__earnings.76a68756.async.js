(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[617],{30913:function(y){y.exports={cardList:"cardList___3B1Jx",card:"card___1V7PL",extraContent:"extraContent___3j0wn",extraImg:"extraImg___2Xhbx",newButton:"newButton___1QluN",cardAvatar:"cardAvatar___1sY5V",description:"description___2dj13",cardDescription:"cardDescription___2ypY4",pageHeaderContent:"pageHeaderContent___JKX8Y",price:"price___3U8GS",hint:"hint___1JiKT",contentLink:"contentLink___1vDn7"}},6715:function(y,C,e){"use strict";e.r(C),e.d(C,{default:function(){return Re}});var Ne=e(8963),ce=e(68297),je=e(71153),k=e(60331),Ue=e(402),Te=e(39602),Se=e(67294),fe=e(26560),c=e(2824),be=e(3182),ve=e(94043),W=e.n(ve),g=e(50387),ge=e(53032),u=e(77616),Be=e(77531),xe=e(56506),P=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"reserve0","type":"uint112"},{"internalType":"uint112","name":"reserve1","type":"uint112"},{"internalType":"uint32","name":"blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]'),Ve=e(30381),z="0xcB96576131a303E0E8f18AB4B13eA89F7992212C",Me="https://bsc-dataseed.binance.org/",we=["\u6728\u68D2","\u5F13\u7BAD","\u730E\u67AA","\u65A7\u5934","\u624B\u952F","\u7535\u952F","\u94C1\u9550","\u94BB\u673A"],x=new ge.r(Me),De=new g.CH("0xBd0d7627baa762094888DD1732c248733E50F1e8",P,x),he=new g.CH("0x01AFc5De0b0182f03030d7eC59298B6f3a3C0FA3",P,x),Ie=new g.CH("0x04067465068209ece0D8405042B846C55Ee3A4A7",P,x);function Fe(){return A.apply(this,arguments)}function A(){return A=(0,be.Z)(W().mark(function K(){var r,i,T,l,p,d,M,E,w,D,f,o,X,s,q,_,ee,te,ne,ae,ie,ue,R,se,pe,N,ye,re,j,le,de,U,b,n,S,m,B,oe,V,L,G,v,Z,H,J,Y,h,I,F,$,Q,me;return W().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,De.getReserves();case 2:return r=a.sent,a.next=5,he.getReserves();case 5:return i=a.sent,a.next=8,Ie.getReserves();case 8:return T=a.sent,l=u.bM(r[1],"18")/u.bM(r[0],"18"),p=u.bM(i[1],"18")/u.bM(i[0],"18"),d=u.bM(T[1],"18")/u.bM(T[0],"18"),M=new g.CH(z,xe,x),a.next=15,M.getInfo(z);case 15:for(E=a.sent,w=(0,c.Z)(E,1),D=w[0],f=[],o=0;o<D.length;o++)X=D[o],s=(0,c.Z)(X,8),q=s[0],_=s[1],ee=s[2],te=s[3],ne=s[4],ae=s[5],ie=s[6],ue=s[7],R=(0,c.Z)(q,2),se=R[0],pe=R[1],N=(0,c.Z)(_,2),ye=N[0],re=N[1],j=(0,c.Z)(ee,2),le=j[0],de=j[1],f.push({id:o,name:we[o],item1:{itemType:se,value:pe},item2:{itemType:ye,value:re},output:{itemType:le,value:de},rare:te.toNumber(),totalDurability:ne.toNumber(),costDurability:ae.toNumber(),costPower:ie.toNumber(),coolDown:ue.toNumber()});for(console.log(f),U=[],b=0;b<f.length;b++)n=f[b],S=n.coolDown/(60*60),m=24/S,B=n.costPower,oe=n.totalDurability,V=n.costDurability,L=u.bM(n.item1.value,"18"),G=u.bM(n.item2.value,"18"),v=u.bM(n.output.value,"18"),Z=(L*p+G*l).toFixed(1),H=B*m/5,J=V*m/5,Y=(H*d+J*p).toFixed(1),h=0,I=0,F=0,n.output.itemType==1?F=(v*m*.92).toFixed(1):n.output.itemType==2?h=(v*m*.92).toFixed(1):n.output.itemType==3&&(I=(v*m*.92).toFixed(1)),$=(h*l+F*d+I*p).toFixed(1),Q=(parseFloat($)-parseFloat(Y)).toFixed(1),me=(parseFloat(Z)/parseFloat(Q)).toFixed(1),U.push({key:"".concat(b),name:n.name,buildDfgValue:L,buildDfwValue:G,buildCostUsdt:Z,singleOutput:v,totalDurability:oe,costDurability:V,costPower:B,coolDown:S,dailyDfwOutput:h,dailyDfgOutput:I,dailyDfmOutput:F,dailyCostPower:H,dailyCostDurability:J,dailyCostUsdt:Y,dailyOutputUsdt:$,outputUsdt:Q,days:me});return a.abrupt("return",{data:{data:U,dfwPrice:l,dfgPrice:p,dfmPrice:d}});case 23:case"end":return a.stop()}},K)})),A.apply(this,arguments)}var Ce=e(21010),ke=e(68826),Pe=e.n(ke),Ae=e(30913),O=e.n(Ae),t=e(85893),Oe=Te.Z.Text,Ee=function(){var r=(0,Ce.QT)(function(){return Fe()},{pollingInterval:1e3*60*2}),i=r.data,T=r.loading,l=[{title:"\u540D\u79F0",dataIndex:"name",key:"name",width:100,align:"center"},{title:"\u94F8\u9020\u6210\u672C",align:"center",children:[{title:"\u91D1",align:"center",dataIndex:"buildDfgValue",key:"buildDfgValue"},{title:"\u6728",align:"center",dataIndex:"buildDfwValue",key:"buildDfwValue"},{title:"\u6210\u672C(u)",dataIndex:"buildCostUsdt",key:"buildCostUsdt",align:"center"}]},{title:"\u5DE5\u5177\u5C5E\u6027",children:[{title:"\u5355\u6B21\u4EA7\u51FA",align:"center",dataIndex:"singleOutput",key:"singleOutput"},{title:"\u603B\u8010\u4E45\u6027",align:"center",dataIndex:"totalDurability",key:"totalDurability"},{title:"\u5355\u6B21\u8010\u4E45\u6D88\u8017",align:"center",dataIndex:"costDurability",key:"costDurability"},{title:"\u5355\u6B21\u80FD\u91CF\u6D88\u8017",align:"center",dataIndex:"costPower",key:"costPower"},{title:"\u51B7\u5374\u65F6\u95F4(h)",align:"center",dataIndex:"coolDown",key:"coolDown"}]},{title:"\u65E5\u6D88\u8017",children:[{title:"\u91D1",align:"center",dataIndex:"dailyCostDurability",key:"dailyCostDurability"},{title:"\u8089",align:"center",dataIndex:"dailyCostPower",key:"dailyCostPower"}]},{title:"\u65E5\u4EA7\u51FA(\u6263\u96648%\u624B\u7EED\u8D39)",children:[{title:"\u91D1",align:"center",dataIndex:"dailyDfgOutput",key:"dailyDfgOutput"},{title:"\u6728",align:"center",dataIndex:"dailyDfwOutput",key:"dailyDfwOutput"},{title:"\u8089",align:"center",dataIndex:"dailyDfmOutput",key:"dailyDfmOutput"}]},{title:"\u6536\u76CA\u8BE6\u60C5",align:"center",children:[{title:"\u65E5\u4EA7\u51FA(u)",align:"center",dataIndex:"dailyOutputUsdt",key:"dailyOutputUsdt"},{title:"\u65E5\u6D88\u8017(u)",align:"center",dataIndex:"dailyCostUsdt",key:"dailyCostUsdt"},{title:"\u51C0\u4EA7\u51FA(u)",align:"center",dataIndex:"outputUsdt",key:"outputUsdt"},{title:"\u56DE\u672C\u5468\u671F(\u5929)",align:"center",dataIndex:"days",key:"days",render:function(w,D){return(0,t.jsx)(Oe,{type:"danger",children:w})}}]}],p=(0,t.jsx)("div",{className:O().pageHeaderContent,children:i&&(0,t.jsxs)("div",{children:[(0,t.jsxs)(k.Z,{color:"gold",children:["DFG: $",i.dfgPrice.toFixed(3)]}),(0,t.jsxs)(k.Z,{color:"green",children:["DFW: $",i.dfwPrice.toFixed(3)]}),(0,t.jsxs)(k.Z,{color:"magenta",children:["DFM: $",i.dfmPrice.toFixed(3)]})]})}),d=(0,t.jsxs)("div",{className:O().extraContent,children:[(0,t.jsx)("img",{className:O().extraImg,alt:"logo",src:Pe()}),(0,t.jsxs)("div",{children:["DAO Farmer\u5B89\u5168\u53EF\u9760\u811A\u672C,\u8D2D\u4E70\u8BF7\u8054\u7CFB",(0,t.jsx)("a",{href:"https://t.me/krisdooo",children:"@krisdooo"})]}),(0,t.jsxs)("div",{children:["\u8FDB\u7FA4\u53EF\u4EAB\u4F18\u60E0 ",(0,t.jsx)("a",{href:"https://t.me/tctdao",children:"@tctdao"})]}),(0,t.jsxs)("div",{children:["\u6B22\u8FCE\u52A0\u5165\u4E2D\u6587\u6E38\u620F\u4EA4\u6D41\u7FA4 ",(0,t.jsx)("a",{href:"https://t.me/daofarmer_chinese",children:"@daofarmer_chinese"})]})]}),M=i?i.data:[];return(0,t.jsx)(fe.ZP,{content:p,extraContent:d,children:(0,t.jsx)(ce.Z,{rowClassName:"",loading:i?!1:T,columns:l,dataSource:M,bordered:!0,pagination:!1,size:"large"})})},Re=Ee},68826:function(y,C,e){y.exports=e.p+"static/logo.4e5d027f.png"},56506:function(y){"use strict";y.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"nft","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"erc20","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Farm","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"nft","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Forge","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousGovernor","type":"address"},{"indexed":true,"internalType":"address","name":"newGovernor","type":"address"}],"name":"GovernorshipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"StakeDAOF","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"UnStakeDAOF","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"nft","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"WithdrawProp","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"propType","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"EquipisAccountStake","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POWER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"governor_","type":"address"},{"internalType":"address","name":"vault_","type":"address"},{"internalType":"address","name":"eco_","type":"address"},{"internalType":"address","name":"mine_","type":"address"},{"internalType":"uint256","name":"begin_","type":"uint256"},{"internalType":"uint256","name":"span_","type":"uint256"}],"name":"__DaoFarmer_init","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vault_","type":"address"},{"internalType":"address","name":"eco_","type":"address"},{"internalType":"address","name":"mine_","type":"address"},{"internalType":"uint256","name":"begin_","type":"uint256"},{"internalType":"uint256","name":"span_","type":"uint256"}],"name":"__DaoFarmer_init_unchained","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"governor_","type":"address"}],"name":"__Governable_init_unchained","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"power","type":"uint256"}],"name":"addPower","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"propId","type":"uint256"}],"name":"addPowerByNewEquip","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"account","type":"address[]"},{"internalType":"uint256[]","name":"propId","type":"uint256[]"}],"name":"addPowerByNewEquips","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"begin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"costFoodForFull","outputs":[{"internalType":"uint256","name":"foodValue","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"propId","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"costGoldForRepairFull","outputs":[{"internalType":"uint256","name":"goldValue","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"foodValue","type":"uint256"}],"name":"eat","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"eatFull","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"eco","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ercList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"propId","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"farm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"propId","type":"uint256"}],"name":"forge","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"getAllItemValues","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAllStakeEquip","outputs":[{"internalType":"uint256[]","name":"propType","type":"uint256[]"},{"internalType":"uint256[]","name":"id","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAllStakeEquipAndCurInfo","outputs":[{"internalType":"uint256[]","name":"propType","type":"uint256[]"},{"internalType":"uint256[]","name":"id","type":"uint256[]"},{"internalType":"uint256[]","name":"currDurabilitys","type":"uint256[]"},{"internalType":"uint256[]","name":"lastTimes","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"address","name":"addr","type":"address"}],"name":"getConfig","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"getConfig","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getConfig","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"getInfo","outputs":[{"components":[{"components":[{"internalType":"uint256","name":"itemType","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct EquipNFT.Item","name":"item1","type":"tuple"},{"components":[{"internalType":"uint256","name":"itemType","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct EquipNFT.Item","name":"item2","type":"tuple"},{"components":[{"internalType":"uint256","name":"itemType","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct EquipNFT.Item","name":"output","type":"tuple"},{"internalType":"uint256","name":"rare","type":"uint256"},{"internalType":"uint256","name":"totalDurability","type":"uint256"},{"internalType":"uint256","name":"costDurability","type":"uint256"},{"internalType":"uint256","name":"costPower","type":"uint256"},{"internalType":"uint256","name":"coolDown","type":"uint256"}],"internalType":"struct EquipNFT.Property[]","name":"propertys","type":"tuple[]"},{"internalType":"uint256[]","name":"itemValues","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"getPower","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"},{"internalType":"uint256","name":"propType","type":"uint256"}],"name":"getPropIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"},{"internalType":"uint256","name":"propType","type":"uint256"}],"name":"getPropIdsAndCurInfo","outputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"},{"internalType":"uint256[]","name":"currDurabilitys","type":"uint256[]"},{"internalType":"uint256[]","name":"lastTimes","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getStakeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getStakeEquipByIndex","outputs":[{"internalType":"uint256","name":"propType","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"propType","type":"uint256"}],"name":"getTypeStakeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"hi","type":"uint256"},{"internalType":"uint256","name":"lo","type":"uint256"}],"name":"hl2u","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"maxPower","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mine","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"nftList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"poolStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceGovernorship","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"propId","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"goldValue","type":"uint256"}],"name":"repair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"propId","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"repairFull","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[4]","name":"tokens_","type":"address[4]"}],"name":"setERCTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[8]","name":"tokens_","type":"address[8]"}],"name":"setNftTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"vol","type":"uint256"}],"name":"setstakeDAOFvol","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"setupRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"span","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolID","type":"uint256"}],"name":"stakeDAOF","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeDAOFvol","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newGovernor","type":"address"}],"name":"transferGovernorship","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v","type":"uint256"}],"name":"u2hl","outputs":[{"internalType":"uint256","name":"hi","type":"uint256"},{"internalType":"uint256","name":"lo","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolID","type":"uint256"}],"name":"unStakeDAOF","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"propId","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"withdrawProp","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},46601:function(){}}]);
