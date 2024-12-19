(function(){var t={4589:function(t,e,s){"use strict";s.d(e,{A:function(){return l}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"count-box"},[e("button",{staticClass:"minus",on:{click:t.handleSub}},[t._v("-")]),e("input",{staticClass:"inp",attrs:{type:"text"},domProps:{value:t.value},on:{change:t.handleChange}}),e("button",{staticClass:"add",on:{click:t.handleAdd}},[t._v("+")])])},o=[],i=(s(1860),s(1981)),n={props:{value:{type:Number,default:1}},methods:{handleSub(){1!==this.value&&this.$emit("input",this.value-1)},handleAdd(){this.$emit("input",this.value+1)},handleChange(t){const e=t.target.value;if(""===e||isNaN(e)||e<1)return t.target.value=this.value,void(0,i.A)("请输入正确的数字");this.$emit("input",+e)}}},r=n,c=s(1656),d=(0,c.A)(r,a,o,!1,null,"b3af72d0",null),l=d.exports},1639:function(t,e,s){"use strict";s.d(e,{A:function(){return d}});s(4114);var a=function(){var t=this,e=t._self._c;return t.item.goods_name?e("div",{class:{"goods-item":t.flag,"goods-item2":!t.flag},on:{click:function(e){return t.$router.push(`/prodetail?id=${t.item.goods_id}`)}}},[e("div",{class:{left:t.flag,top:!t.flag}},[e("img",{attrs:{src:t.item.goods_image,alt:""}})]),e("div",{class:{right:t.flag,bottom:!t.flag}},[e("p",{staticClass:"tit text-ellipsis-2"},[t._v(" "+t._s(t.item.goods_name)+" ")]),e("p",{staticClass:"count"},[t._v("已售 "+t._s(t.item.goods_sales)+"件")]),e("p",{staticClass:"price"},[e("span",{staticClass:"new"},[t._v("¥"+t._s(t.item.goods_price_min))]),e("span",{staticClass:"old"},[t._v("¥"+t._s(t.item.goods_price_max))])])])]):t._e()},o=[],i={props:{item:{type:Object,default:()=>({})},flag:{type:Boolean}}},n=i,r=s(1656),c=(0,r.A)(n,a,o,!1,null,"6089faf4",null),d=c.exports},5152:function(){},9652:function(t,e,s){"use strict";s.d(e,{U4:function(){return o},fd:function(){return i},iH:function(){return n},sv:function(){return r}});var a=s(5720);const o=(t,e,s)=>a.A.post("/cart/add",{goodsId:t,goodsNum:e,goodsSkuId:s}),i=()=>a.A.get("/cart/list"),n=(t,e,s)=>a.A.post("/cart/update",{goodsId:t,goodsNum:e,goodsSkuId:s}),r=t=>a.A.post("/cart/clear",{cartIds:t})},8724:function(t,e,s){"use strict";s.d(e,{HO:function(){return n},Jk:function(){return o},KL:function(){return d},Sc:function(){return c},_Q:function(){return r},nF:function(){return i},q:function(){return l},y_:function(){return u}});var a=s(5720);const o=()=>a.A.get("/address/list"),i=()=>a.A.get("/address/defaultId"),n=()=>a.A.get("/region/tree"),r=t=>a.A.post("/address/add",t),c=t=>a.A.get("/address/detail",{params:{addressId:t}}),d=t=>a.A.post("/address/remove",{addressId:t}),l=t=>a.A.post("/address/edit",{addressId:t.addressId,form:t.form}),u=t=>a.A.post("/address/setDefault",{addressId:t})},614:function(t,e,s){"use strict";s.d(e,{N:function(){return i},Z:function(){return o}});var a=s(5720);const o=t=>a.A.post("/checkout/submit",{delivery:10,couponId:0,payType:10,isUsePoints:0,...t}),i=(t,e)=>a.A.get("/order/list",{params:{dataType:t,page:e}})},4872:function(t,e,s){"use strict";var a=s(6848),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],n={data(){return{value:!1}}},r=n,c=s(1656),d=(0,c.A)(r,o,i,!1,null,null,null),l=d.exports,u=s(6178),h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("van-nav-bar",{attrs:{title:"会员登录","left-arrow":""},on:{"click-left":function(e){return t.$router.back()}}}),e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"form"},[e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"inp",attrs:{maxlength:"11",placeholder:"请输入手机号码",type:"text"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.picCode,expression:"picCode"}],staticClass:"inp",attrs:{maxlength:"5",placeholder:"请输入图形验证码",type:"text"},domProps:{value:t.picCode},on:{input:function(e){e.target.composing||(t.picCode=e.target.value)}}}),t.picUrl?e("img",{attrs:{src:t.picUrl,alt:""},on:{click:t.GraphicVerificationCode}}):t._e()]),e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"inp",attrs:{placeholder:"请输入短信验证码",type:"text"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),e("button",{on:{click:t.GetVerificationCode}},[t._v(" "+t._s(t.second===t.totalSecond?"获取验证码":t.second+"s后重新获取"))])])]),e("div",{staticClass:"login-btn",on:{click:t.login}},[t._v("登录")])])],1)},p=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h3",[t._v("手机号登录")]),e("p",[t._v("未注册的手机号登录后将自动注册")])])}],m=s(5720);const f=()=>m.A.get("/captcha/image"),g=(t,e,s)=>m.A.post("/captcha/sendSmsCaptcha",{form:{captchaCode:t,captchaKey:e,mobile:s}}),v=(t,e)=>m.A.post("/passport/login",{form:{isParty:!1,mobile:t,partyData:{},smsCode:e}});var _={name:"LoginPage",data(){return{phone:"15623759132",picCode:"",picUrl:"",picKey:"",second:5,totalSecond:5,timer:null,message:"246810"}},async created(){this.GraphicVerificationCode()},methods:{async GraphicVerificationCode(){const t=await f();this.picUrl=t.data.base64,this.picKey=t.data.key},async GetVerificationCode(){if(this.$toast("验证码已发送，请注意查收"),!this.logic())return;const t=await g(this.picCode,this.picKey,this.phone);200===t.status?this.timer||this.second!==this.totalSecond||(this.timer=setInterval((()=>{this.second--,0===this.second&&(clearInterval(this.timer),this.timer=null,this.second=this.totalSecond)}),1e3)):this.$toast(t.message)},async login(){if(!this.logic())return;if(!/^\d{6}$/.test(this.message))return void this.$toast("请输入正确的手机验证码");const t=await v(this.phone,this.message);this.$store.commit("user/setUserInfo",t.data),this.$toast("登录成功"),this.$store.dispatch("cart/getCartAction");const e=this.$route.query.backUrl||"/";this.$router.replace(e)},logic(){return/^1[3-9]\d{9}$/.test(this.phone)?!!/^\w{4}$/.test(this.picCode)||(this.$toast("请输入正确的图形验证码"),!1):(this.$toast("请输入正确的手机号"),!1)}},destroyed(){clearInterval(this.timer)}},y=_,C=(0,c.A)(y,h,p,!1,null,"6f238521",null),A=C.exports,b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"order"},[e("van-nav-bar",{attrs:{title:"我的订单","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("van-tabs",{attrs:{sticky:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[e("van-tab",{attrs:{name:"all",title:"全部"}}),e("van-tab",{attrs:{name:"payment",title:"待支付"}}),e("van-tab",{attrs:{name:"delivery",title:"待发货"}}),e("van-tab",{attrs:{name:"received",title:"待收货"}}),e("van-tab",{attrs:{name:"comment",title:"待评价"}})],1),t._l(t.list,(function(t){return e("OrderListItem",{key:t.order_id,attrs:{item:t}})}))],2)},k=[],w=s(614),x=function(){var t=this,e=t._self._c;return t.item.order_id?e("div",{staticClass:"order-list-item"},[e("div",{staticClass:"tit"},[e("div",{staticClass:"time"},[t._v(t._s(t.item.create_time))]),e("div",{staticClass:"status"},[e("span",[t._v(t._s(t.item.state_text))])])]),e("div",{staticClass:"list"},t._l(t.item.goods,(function(s,a){return e("div",{key:a,staticClass:"list-item"},[e("div",{staticClass:"goods-img"},[e("img",{attrs:{src:s.goods_image,alt:""}})]),e("div",{staticClass:"goods-content text-ellipsis-2"},[t._v(" "+t._s(s.goods_name)+" ")]),e("div",{staticClass:"goods-trade"},[e("p",[t._v("¥ "+t._s(s.total_pay_price))]),e("p",[t._v("x "+t._s(s.total_num))])])])})),0),e("div",{staticClass:"total"},[t._v(" 共 "+t._s(t.item.total_num)+" 件商品，总金额 ¥"+t._s(t.item.total_price)+" ")]),e("div",{staticClass:"actions"},[10===t.item.order_status?e("div",[10===t.item.pay_status?e("span",[t._v("立刻付款")]):10===t.item.delivery_status?e("span",[t._v("申请取消")]):20===t.item.delivery_status||30===t.item.delivery_status?e("span",[t._v("确认收货")]):t._e()]):t._e(),30===t.item.order_status?e("div",[e("span",[t._v("评价")])]):t._e()])]):t._e()},I=[],$={props:{item:{type:Object,default:()=>({})}}},S=$,L=s(5152),N=s.n(L),O=(0,c.A)(S,x,I,!1,null,"4dececb1",null);"function"===typeof N()&&N()(O);var F=O.exports,P={name:"OrderPage",components:{OrderListItem:F},data(){return{active:this.$route.query.dataType||"all",page:1,list:[]}},methods:{async getOrderList(){const{data:{list:t}}=await(0,w.N)(this.active,this.page);t.data.forEach((t=>{t.total_num=0,t.goods.forEach((e=>{t.total_num+=e.total_num}))})),this.list=t.data}},watch:{active:{immediate:!0,handler(){this.getOrderList()}}}},q=P,j=(0,c.A)(q,b,k,!1,null,"86e721ea",null),E=j.exports,T=(s(4114),function(){var t=this,e=t._self._c;return t.showFlag?e("div",[e("van-nav-bar",{attrs:{title:"订单结算台","left-arrow":""},on:{"click-left":function(e){return t.$router.push("/cart")}}}),t.addressFlag?e("van-contact-card",{attrs:{type:"edit",name:t.address.name,tel:t.address.phone},on:{click:function(e){return t.$router.push("/addresslist?"+(t.goodsIdFlag?"goodsid="+t.goodsId+"&count="+t.count:""))}}}):t._e(),t.addressFlag?t._e():e("van-contact-card",{attrs:{type:"add"},on:{click:function(e){return t.$router.push("/addresslist?"+(t.goodsIdFlag?"goodsid="+t.goodsId+"&count="+t.count:""))}}}),t.goodsIdFlag?t._e():e("div",t._l(t.isArr,(function(s){return e("van-card",{key:s.id,attrs:{price:s.goods.goods_price_max,title:s.goods.goods_name,thumb:s.goods.goods_image},scopedSlots:t._u([{key:"footer",fn:function(){return[e("CountBox",{staticStyle:{"margin-left":"60vw"},attrs:{value:s.goods_num},on:{input:e=>t.changeCount(e,s.goods_id,s.goods_sku_id)}})]},proxy:!0}],null,!0)})})),1),t.goodsIdFlag?e("div",[e("van-card",{attrs:{price:t.isArr.goods_price_max,title:t.isArr.goods_name,thumb:t.isArr.goods_image},scopedSlots:t._u([{key:"footer",fn:function(){return[e("CountBox",{staticStyle:{"margin-left":"60vw"},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}})]},proxy:!0}],null,!1,1903770776)})],1):t._e(),e("div",{staticClass:"flow-num-box"},[e("span",[t._v("共 "+t._s(t.goodsIdFlag?t.count:t.selCount)+" 件商品，合计：")]),e("span",{staticClass:"money"},[t._v("￥"+t._s(t.goodsIdFlag?t.count*t.isArr.goods_price_max:t.totalPrice))])]),e("div",{staticClass:"pay-detail"},[e("div",{staticClass:"pay-cell"},[e("span",[t._v("订单总金额：")]),e("span",{staticClass:"red"},[t._v("￥"+t._s(t.goodsIdFlag?t.count*t.isArr.goods_price_max:t.totalPrice))])]),e("div",{staticClass:"pay-cell"},[e("van-coupon-cell",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon},on:{click:function(e){t.showList=!0}}}),e("van-popup",{staticStyle:{height:"90%","padding-top":"4px"},attrs:{round:"",position:"bottom"},model:{value:t.showList,callback:function(e){t.showList=e},expression:"showList"}},[e("van-coupon-list",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon,"disabled-coupons":t.disabledCoupons},on:{change:t.onChange,exchange:t.onExchange}})],1)],1),e("div",{staticClass:"pay-cell"},[e("span",[t._v("配送费用：")]),e("span",{staticClass:"red"},[t._v("+￥0.00")])])]),e("div",{staticClass:"pay-way"},[e("span",{staticClass:"tit"},[t._v("支付方式")]),e("div",{staticClass:"pay-cell"},[e("span",[e("van-icon",{attrs:{name:"balance-o",color:"#fa2209"}}),t._v("余额支付（可用 ¥ 999919.00 元）")],1),e("span",{staticClass:"red"},[e("van-icon",{attrs:{name:"success"}})],1)])]),e("div",{staticClass:"buytips"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.remark,expression:"remark"}],attrs:{placeholder:"选填：买家留言（50字内）",name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.remark},on:{input:function(e){e.target.composing||(t.remark=e.target.value)}}})]),e("van-submit-bar",{attrs:{price:t.goodsIdFlag?t.count*t.isArr.goods_price_max*100:100*t.totalPrice,"button-text":"提交订单"},on:{submit:t.submitOrder}})],1):t._e()}),D=[],U=s(3518),B=s(8724);const J=t=>m.A.get("/goods/detail",{params:{goodsId:t}}),M=t=>m.A.get("/comment/listRows",{params:{goodsId:t,limit:2}});var G=s(4589);const H=[];var K={components:{CountBox:G.A},data(){return{showList:!1,chosenCoupon:-1,coupons:H||[],disabledCoupons:H||[],address:{},addressFlag:!1,isArr:[],showFlag:!1,goodsIdFlag:!!this.$route.query.goodsid,count:+this.$route.query.count||1,goodsId:this.$route.query.goodsid||"",remark:""}},async created(){if(await this.$store.dispatch("closedmoney/getClosedMoneyList"),this.$route.query.id)this.addressFlag=!0,this.$store.state.closedmoney.ClosedMoneyList.forEach((t=>{t.address_id===+this.$route.query.id&&(this.address=t)}));else if(this.$store.state.closedmoney.ClosedMoneyList.length>0){this.addressFlag=!0;const t=await(0,B.nF)();this.$store.state.closedmoney.ClosedMoneyList.forEach((e=>{e.address_id===t.data.defaultId&&(this.address=e)}))}if(this.showFlag=!0,this.goodsIdFlag){const t=await J(this.$route.query.goodsid);this.showFlag=!0,this.isArr=t.data.detail,console.log(this.isArr)}else{const t=JSON.parse(localStorage.getItem("isPay"));await this.getCartAction();for(let e=0;e<this.cartList.length;e++)for(let s=0;s<t.length;s++)this.cartList[e].goods_id===t[s].goods_id&&this.cartList[e].goods_sku_id===t[s].goods_sku_id&&this.isArr.push(this.cartList[e])}},computed:{...(0,U.aH)("cart",["cartList"]),selCount(){let t=0;for(let e=0;e<this.isArr.length;e++)t+=this.isArr[e].goods_num;return t},totalPrice(){let t=0;for(let e=0;e<this.isArr.length;e++)t+=this.isArr[e].goods_num*this.isArr[e].goods.goods_price_max;return t.toFixed(2)}},methods:{...(0,U.i0)("cart",["getCartAction","sumbitCart"]),changeCount(t,e,s){const a={value:t,goodsId:e,skuId:s};this.$store.dispatch("cart/changeCountAction",{obj:a})},onChange(t){this.showList=!1,this.chosenCoupon=t},onExchange(t){this.coupons.push(H)},async submitOrder(){const t={remark:this.remark};this.goodsIdFlag?(t.goodsId=this.isArr.goods_id,t.goodsNum=this.count,t.goodsSkuId=this.isArr.skuList[0].goods_sku_id,t.mode="buyNow",await(0,w.Z)(t)):(t.mode="cart",this.sumbitCart(t)),this.$toast("提交成功"),this.$router.push("/myorder")}}},V=K,z=(0,c.A)(V,T,D,!1,null,"27876aea",null),Z=z.exports,Q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"prodetail"},[e("van-nav-bar",{attrs:{fixed:"",title:"商品详情页","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("van-swipe",{attrs:{autoplay:3e3},on:{change:t.onChange},scopedSlots:t._u([{key:"indicator",fn:function(){return[e("div",{staticClass:"custom-indicator"},[t._v(" "+t._s(t.list.goods_images&&t.list.goods_images.length?t.current+1+" / "+t.list.goods_images.length:"0 / 0")+" ")])]},proxy:!0}])},t._l(t.list.goods_images,(function(t){return e("van-swipe-item",{key:t.file_id},[e("img",{attrs:{src:t.external_url}})])})),1),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.list.goods_price_max))]),e("span",{staticClass:"oldprice"},[t._v("￥"+t._s(t.list.line_price_max))])]),e("div",{staticClass:"sellcount"},[t._v("已售"+t._s(t.list.goods_sales)+"件")])]),e("div",{staticClass:"msg text-ellipsis-2"},[t._v(" "+t._s(t.list.goods_name)+" ")]),e("div",{staticClass:"service"},[e("div",{staticClass:"left-words"},[e("span",[e("van-icon",{attrs:{name:"passed"}}),t._v("七天无理由退货")],1),e("span",[e("van-icon",{attrs:{name:"passed"}}),t._v("48小时发货")],1)]),e("div",{staticClass:"right-icon"},[e("van-icon",{attrs:{name:"arrow"}})],1)])]),e("div",{staticClass:"comment"},[e("div",{staticClass:"comment-title"},[e("div",{staticClass:"left"},[t._v("商品评价 ("+t._s(this.commentNum.total)+"条)")]),e("div",{staticClass:"right"},[t._v("查看更多 "),e("van-icon",{attrs:{name:"arrow"}})],1)]),e("div",{staticClass:"comment-list"},t._l(t.commentNum.list,(function(s){return e("div",{key:s.comment_id,staticClass:"comment-item"},[e("div",{staticClass:"top"},[e("img",{attrs:{src:s.user.avatar_url||"https://smart-shop.itheima.net/static/default-avatar.png",alt:""}}),e("div",{staticClass:"name"},[t._v(t._s(s.user.nick_name))]),e("van-rate",{attrs:{size:16,value:s.score/2,color:"#ffd21e","void-icon":"star","void-color":"#eee"}})],1),e("div",{staticClass:"content"},[t._v(t._s(s.content))]),e("div",{staticClass:"time"},[t._v(t._s(s.create_time))])])})),0)]),e("div",{staticClass:"desc",domProps:{innerHTML:t._s(t.list.content)}}),e("div",{staticClass:"footer"},[e("van-goods-action",[e("van-goods-action-icon",{attrs:{icon:"wap-home-o",text:"首页"},on:{click:function(e){return t.$router.push("/home")}}}),e("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车",badge:t.cartNum>0?t.cartNum:""},on:{click:function(e){return t.$router.push("/cart")}}}),e("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.addCart}}),e("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"},on:{click:t.addShop}})],1)],1),e("van-action-sheet",{attrs:{title:"cart"===t.mode?"加入购物车":"立刻购买"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("div",{staticClass:"product"},[e("div",{staticClass:"product-title"},[e("div",{staticClass:"left"},[e("img",{attrs:{src:t.list.goods_image,alt:""}})]),e("div",{staticClass:"right"},[e("div",{staticClass:"price"},[e("span",[t._v("¥")]),e("span",{staticClass:"nowprice"},[t._v(t._s(t.list.goods_price_max))])]),e("div",{staticClass:"count"},[e("span",[t._v("库存")]),e("span",[t._v(t._s(t.list.stock_total))])])])]),e("div",{staticClass:"num-box"},[e("span",[t._v("数量")]),e("countBox",{model:{value:t.count,callback:function(e){t.count=e},expression:"count"}})],1),t.list.stock_total>1?e("div",{staticClass:"showbtn"},["cart"===t.mode?e("div",{staticClass:"btn",on:{click:t.addCartNow}},[t._v("加入购物车")]):e("div",{staticClass:"btn now",on:{click:t.shopNow}},[t._v("立刻购买")])]):e("div",{staticClass:"btn-none"},[t._v("该商品已抢完")])])])],1)},R=[],W=s(9652),X={components:{CountBox:G.A},name:"ProDetail",data(){return{list:[],current:0,commentNum:"",show:!1,mode:"cart",count:1}},computed:{...(0,U.L8)("cart",["cartNum"])},async created(){const t=await J(this.$route.query.id),e=await M(this.$route.query.id);this.list=t.data.detail,this.commentNum=e.data,this.$store.getters.token&&this.$store.dispatch("cart/getCartAction")},methods:{onChange(t){this.current=t},addCart(){this.mode="cart",this.show=!0},addShop(){this.mode="buy",this.show=!0},async addCartNow(){this.$store.getters.token?(await(0,W.U4)(this.list.goods_id,this.count,this.list.skuList[0].goods_sku_id),this.show=!1,await this.$store.dispatch("cart/getCartAction"),this.$toast("加入购物车成功")):this.$dialog.confirm({title:"温馨提示",message:"此时需要登录才能继续操作哦",confirmButtonText:"去登录",cancelButtonText:"再逛逛"}).then((()=>{this.$router.replace({path:"/login",query:{backUrl:this.$route.fullPath}})})).catch((()=>{this.$router.push("/home")}))},shopNow(){this.$router.push(`/pay?goodsid=${this.list.goods_id}&count=${this.count}`)}}},Y=X,tt=(0,c.A)(Y,Q,R,!1,null,"9a66d53e",null),et=tt.exports,st=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},[e("van-nav-bar",{attrs:{title:"商品搜索","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词",clearable:""},scopedSlots:t._u([{key:"action",fn:function(){return[e("div",{on:{click:function(e){t.goSearch(t.search)}}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),e("div",{staticClass:"search-history"},[e("div",{staticClass:"title"},[e("span",[t._v("最近搜索")]),e("van-icon",{attrs:{name:"delete-o",size:"16"},on:{click:t.clean}})],1),e("div",{staticClass:"list"},t._l(t.history,(function(s){return e("div",{key:s,staticClass:"list-item",on:{click:function(e){t.goSearch(s)}}},[t._v(t._s(s))])})),0)])],1)},at=[],ot=s(2272),it={name:"SearchIndex",data(){return{search:"",history:(0,ot.xS)()}},methods:{goSearch(t){const e=this.history.indexOf(t);-1!==e&&this.history.splice(e,1),this.history.unshift(t);const s={userId:this.$store.state.user.userInfo.userId,history:this.history};(0,ot.Tz)(s),this.$router.push(`/searchlist?search=${t}`)},clean(){this.history=[],(0,ot.Tz)([])}}},nt=it,rt=(0,c.A)(nt,st,at,!1,null,"709e62d1",null),ct=rt.exports,dt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},[e("van-nav-bar",{attrs:{fixed:"",title:"商品列表","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("van-search",{attrs:{readonly:"",shape:"round",background:"#ffffff",value:t.search,"show-action":""},on:{click:function(e){return t.$router.push("/search")}},scopedSlots:t._u([{key:"action",fn:function(){return[e("van-icon",{staticClass:"tool",attrs:{name:t.flag?"apps-o":"list-switch"},on:{click:function(e){t.flag=!t.flag}}})]},proxy:!0}])}),t._m(0),e("div",{class:{"goods-list":t.flag,"goods-list-small":!t.flag}},t._l(t.list,(function(s){return e("GoodsItem",{key:s.goods_id,attrs:{item:s,flag:t.flag}})})),1)],1)},lt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"sort-btns"},[e("div",{staticClass:"sort-item"},[t._v("综合")]),e("div",{staticClass:"sort-item"},[t._v("销量")]),e("div",{staticClass:"sort-item"},[t._v("价格 ")])])}];const ut=({categoryId:t,goodsName:e,page:s})=>m.A.get("/goods/list",{params:{categoryId:t,goodsName:e,page:s}});var ht=s(1639),pt={name:"SearchIndex",data(){return{page:1,list:[],search:this.$route.query.search,flag:!0}},components:{GoodsItem:ht.A},async created(){if(this.search){const t=await ut({goodsName:this.search,page:1});this.list=t.data.list.data}else{const t=await ut({categoryId:this.$route.query.categoryId,page:1});this.list=t.data.list.data}}},mt=pt,ft=(0,c.A)(mt,dt,lt,!1,null,"3e1bc052",null),gt=ft.exports,vt=function(){var t=this,e=t._self._c;return e("div",[e("van-nav-bar",{attrs:{title:"收货地址","left-arrow":""},on:{"click-left":function(e){return t.$router.push(`/pay?id=${t.chosenAddressId}`)}}}),e("van-address-list",{attrs:{list:t.list,"default-tag-text":"默认"},on:{add:function(e){return t.$router.replace("/addressedit?flag=true")},edit:t.edit},model:{value:t.chosenAddressId,callback:function(e){t.chosenAddressId=e},expression:"chosenAddressId"}})],1)},_t=[],yt={name:"AddressList",data(){return{chosenAddressId:"",list:[]}},async created(){const t=await(0,B.Jk)(),e=await(0,B.nF)();this.chosenAddressId=e.data.defaultId,this.list=t.data.list.map((t=>({id:t.address_id,name:t.name,tel:t.phone,address:t.region.province+" "+t.region.city+" "+t.region.region+" "+t.detail,isDefault:t.address_id===this.chosenAddressId})))},methods:{edit(t){this.$router.replace(`/addressedit?flag=false&id=${t.id}`)}}},Ct=yt,At=(0,c.A)(Ct,vt,_t,!1,null,"76d7afbb",null),bt=At.exports,kt=function(){var t=this,e=t._self._c;return e("div",[e("van-nav-bar",{attrs:{title:"false"===this.$route.query.flag?"编辑地址":"新增地址","left-arrow":""},on:{"click-left":function(e){return t.$router.push("/addresslist")}}}),e("van-address-edit",{attrs:{"area-list":t.areaList,"show-delete":"","area-placeholder":"请选择地区","show-area-code":"","address-info":t.form,"show-set-default":t.flag},on:{save:t.onSave,delete:t.onDelete,"change-default":t.onSetDefault}})],1)},wt=[],xt=s(7020),It={name:"AddressEdit",data(){return{areaList:xt.G,list:{},form:{name:"",tel:"",areaCode:"",addressDetail:"",isDefault:""},flag:!!this.$route.query.id}},async created(){if(this.flag){const t=await(0,B.Sc)(this.$route.query.id);this.form.name=t.data.detail.name,this.form.tel=t.data.detail.phone,this.form.addressDetail=t.data.detail.detail,"北京"!==t.data.detail.region.province&&"上海"!==t.data.detail.region.province&&"天津"!==t.data.detail.region.province&&"重庆"!==t.data.detail.region.province||(t.data.detail.region.province=t.data.detail.region.province+"市");for(const s in this.areaList.county_list)this.areaList.county_list[s]===t.data.detail.region.region&&(this.form.areaCode=s);const e=await(0,B.nF)();e.data.defaultId===+this.$route.query.id?this.form.isDefault=!0:this.form.isDefault=!1}const t=await(0,B.HO)(),e={},s={},a={};for(const o in t.data.list){e[o]=t.data.list[o].name;for(const e in t.data.list[o].city){s[e]=t.data.list[o].city[e].name;for(const s in t.data.list[o].city[e].region)a[s]=t.data.list[o].city[e].region[s].name}}for(const o in this.areaList.city_list){let t=0;for(const e in s)this.areaList.city_list[o]===s[e]&&(t=1);0===t&&console.log(o)}console.log(s),console.log(this.areaList.city_list),e[1]="北京市",e[19]="天津市",e[782]="上海市",e[2223]="重庆市",this.list={provincelist:e,citylist:s,countylist:a}},methods:{async onSave(t){let e="",s="",a="";for(const o in this.list.provincelist)t.province===this.list.provincelist[o]&&(e=o);for(const o in this.list.citylist)t.city===this.list.citylist[o]&&(s=o);for(const o in this.list.countylist)t.county===this.list.countylist[o]&&(a=o);if(this.flag){const o=this.$route.query.id;await(0,B.q)({addressId:o,form:{name:t.name,phone:t.tel,region:[{value:e,label:t.province},{value:s,label:t.city},{value:a,label:t.county}],detail:t.addressDetail}}),this.$toast("修改成功"),this.$router.go(-1)}else await(0,B._Q)({form:{name:t.name,phone:t.tel,region:[{value:e,label:t.province},{value:s,label:t.city},{value:a,label:t.county}],detail:t.addressDetail}}),this.$toast("保存成功"),this.$router.go(-1)},async onDelete(){await(0,B.KL)(this.$route.query.id)},async onSetDefault(t){if(t)await(0,B.y_)(this.$route.query.id),this.$toast("设置成功");else{const t=await(0,B.Jk)("");for(let e=0;e<t.data.list.length;e++)if(t.data.list[e].address_id!==+this.$route.query.id){await(0,B.y_)(t.data.list[e].address_id),this.$toast("设置成功");break}}}}},$t=It,St=(0,c.A)($t,kt,wt,!1,null,null,null),Lt=St.exports,Nt=s(677);const Ot=()=>s.e(479).then(s.bind(s,1479)),Ft=()=>s.e(316).then(s.bind(s,935)),Pt=()=>s.e(996).then(s.bind(s,1996)),qt=()=>s.e(687).then(s.bind(s,5687)),jt=()=>s.e(359).then(s.bind(s,359));a.Ay.use(u.Ay);const Et=new u.Ay({routes:[{path:"/login",component:A},{path:"/",component:Ot,redirect:"/home",children:[{path:"/home",component:qt},{path:"/category",component:Pt},{path:"/cart",component:Ft},{path:"/user",component:jt}]},{path:"/myorder",component:E},{path:"/pay",component:Z},{path:"/prodetail",component:et},{path:"/search",component:ct},{path:"/searchlist",component:gt},{path:"/addresslist",component:bt},{path:"/addressedit",component:Lt}]}),Tt=["/pay","/myorder","/addresslist","/addressedit"];Et.beforeEach(((t,e,s)=>{Tt.includes(t.path)?Nt.A.getters.token?s():s("/login"):s()}));var Dt=Et,Ut=(s(3425),s(6141)),Bt=(s(7231),s(9363)),Jt=(s(4510),s(1864)),Mt=(s(1860),s(1981)),Gt=(s(9851),s(1431)),Ht=(s(7057),s(6749)),Kt=(s(79),s(7235)),Vt=(s(1215),s(5283)),zt=(s(9125),s(2665)),Zt=(s(1335),s(1387)),Qt=(s(3212),s(6874)),Rt=(s(27),s(1281)),Wt=(s(9809),s(4365)),Xt=(s(9867),s(9028)),Yt=(s(7452),s(6254)),te=(s(3025),s(9103)),ee=(s(5606),s(6732)),se=(s(7345),s(4380)),ae=(s(5807),s(1747)),oe=(s(4534),s(5232)),ie=(s(3372),s(8890)),ne=(s(6117),s(7555)),re=(s(4674),s(6411)),ce=(s(3316),s(9542)),de=(s(8901),s(5456)),le=(s(7822),s(7465)),ue=(s(5306),s(2572)),he=(s(3093),s(5187)),pe=(s(869),s(2659)),me=(s(6736),s(4409)),fe=(s(8800),s(2281)),ge=(s(7989),s(6852)),ve=(s(7271),s(162));a.Ay.use(ve.A),a.Ay.use(ge.A),a.Ay.use(fe.A),a.Ay.use(me.A),a.Ay.use(pe.A),a.Ay.use(he.A),a.Ay.use(ue.A),a.Ay.use(le.A),a.Ay.use(de.A),a.Ay.use(ce.A),a.Ay.use(re.A),a.Ay.use(ne.A),a.Ay.use(ie.A),a.Ay.use(oe.A),a.Ay.use(ae.A),a.Ay.use(se.A),a.Ay.use(ee.A),a.Ay.use(te.A),a.Ay.use(Yt.A),a.Ay.use(Xt.A),a.Ay.use(Wt.A),a.Ay.use(Rt.A),a.Ay.use(Qt.A),a.Ay.use(Zt.A),a.Ay.use(zt.A),a.Ay.use(Vt.A),a.Ay.use(Kt.A),a.Ay.use(Ht.A),a.Ay.use(Gt.A),a.Ay.use(Mt.A),a.Ay.use(Jt.A),a.Ay.use(Bt.A),a.Ay.use(Ut.A),a.Ay.config.productionTip=!1,new a.Ay({router:Dt,store:Nt.A,render:t=>t(l)}).$mount("#app")},677:function(t,e,s){"use strict";s.d(e,{A:function(){return h}});var a=s(6848),o=s(3518),i=s(2272),n={namespaced:!0,state(){return{userInfo:(0,i.Vp)()}},mutations:{setUserInfo(t,e){t.userInfo=e,(0,i.x1)(e)}},actions:{},getters:{}},r=s(9652),c=s(614),d={namespaced:!0,state(){return{cartList:[]}},mutations:{setCartList(t,e){t.cartList=e},changeCount(t,e){const{goodsId:s,value:a}=e,o=t.cartList.findIndex((t=>t.goods_id===s));t.cartList[o].goods_num=a}},actions:{async getCartAction(t){const{data:e}=await(0,r.fd)();e.list.forEach((t=>{t.isChecked=!1})),t.commit("setCartList",e.list)},async changeCountAction(t,e){await t.commit("changeCount",{goodsId:e.obj.goodsId,value:e.obj.value}),await(0,r.iH)(e.obj.goodsId,e.obj.value,e.obj.skuId)},async delCartList(t){const e=t.getters.isCheckedNum.map((t=>t.id));await(0,r.sv)(e),t.state.cartList=t.getters.noisCheckedNum},async sumbitCart(t,e){const s=JSON.parse(localStorage.getItem("isPay")).map((t=>t.id));e.cartIds=s.toString(),console.log(e),await(0,c.Z)(e),t.state.cartList=t.getters.noisCheckedNum}},getters:{cartNum(t){return t.cartList.reduce(((t,e)=>t+e.goods_num),0)},isCheckedNum(t){return t.cartList.filter((t=>t.isChecked))},noisCheckedNum(t){return t.cartList.filter((t=>!1===t.isChecked))},selCount(t,e){return e.isCheckedNum.reduce(((t,e,s)=>t+e.goods_num),0)},totalPrice(t,e){return e.isCheckedNum.reduce(((t,e,s)=>t+e.goods_num*e.goods.goods_price_max),0)}}},l=s(8724),u={namespaced:!0,state:{ClosedMoneyList:[]},mutations:{setCartList(t,e){t.ClosedMoneyList=e}},actions:{async getClosedMoneyList(t){const{data:e}=await(0,l.Jk)();t.commit("setCartList",e.list)}}};a.Ay.use(o.Ay);var h=new o.Ay.Store({state:{},getters:{token(t){return t.user.userInfo.token}},mutations:{},actions:{},modules:{user:n,cart:d,closedmoney:u}})},5720:function(t,e,s){"use strict";s(1860);var a=s(1981),o=s(677),i=s(4373);const n=i.A.create({baseURL:"https://smart-shop.itheima.net/index.php?s=/api",timeout:5e3});n.interceptors.request.use((function(t){a.A.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner",duration:0});const e=o.A.getters.token;return e&&(t.headers["Access-Token"]=e,t.headers.platform="H5"),t}),(function(t){return Promise.reject(t)})),n.interceptors.response.use((function(t){const e=t.data;return 200!==e.status?((0,a.A)(e.message),Promise.reject(new Error(e.message))):(a.A.clear(),e)}),(function(t){return Promise.reject(t)})),e.A=n},2272:function(t,e,s){"use strict";s.d(e,{Tz:function(){return l},Vp:function(){return i},l6:function(){return r},x1:function(){return n},xS:function(){return d}});var a=s(677);const o="usermessage",i=()=>{const t={token:"",userId:""},e=localStorage.getItem(o);return e?JSON.parse(e):t},n=t=>{localStorage.setItem(o,JSON.stringify(t))},r=()=>{localStorage.removeItem(o)},c="search",d=()=>{const t=localStorage.getItem(c);return t&&JSON.parse(t).userId===a.A.state.user.userInfo.userId?JSON.parse(t).history:[]},l=t=>{localStorage.setItem(c,JSON.stringify(t))}}},e={};function s(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={exports:{}};return t[a].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,a,o,i){if(!a){var n=1/0;for(l=0;l<t.length;l++){a=t[l][0],o=t[l][1],i=t[l][2];for(var r=!0,c=0;c<a.length;c++)(!1&i||n>=i)&&Object.keys(s.O).every((function(t){return s.O[t](a[c])}))?a.splice(c--,1):(r=!1,i<n&&(n=i));if(r){t.splice(l--,1);var d=o();void 0!==d&&(e=d)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[a,o,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,a){return s.f[a](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+t+"."+{316:"5a69c86a",359:"e8fbfb09",479:"48376fbb",687:"69ae8c6f",996:"f3addcd3"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+t+"."+{316:"6e5ae154",359:"1010aa33",687:"f22cf3ce",996:"7c741b40"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="shopping:";s.l=function(a,o,i,n){if(t[a])t[a].push(o);else{var r,c;if(void 0!==i)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==e+i){r=u;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.setAttribute("data-webpack",e+i),r.src=a),t[a]=[o];var h=function(e,s){r.onerror=r.onload=null,clearTimeout(p);var o=t[a];if(delete t[a],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(t){return t(s)})),e)return e(s)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=h.bind(null,r.onerror),r.onload=h.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p=""}(),function(){if("undefined"!==typeof document){var t=function(t,e,a,o,i){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",s.nc&&(n.nonce=s.nc);var r=function(s){if(n.onerror=n.onload=null,"load"===s.type)o();else{var a=s&&s.type,r=s&&s.target&&s.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+": "+r+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=r,n.parentNode&&n.parentNode.removeChild(n),i(c)}};return n.onerror=n.onload=r,n.href=e,a?a.parentNode.insertBefore(n,a.nextSibling):document.head.appendChild(n),n},e=function(t,e){for(var s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var o=s[a],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){o=n[a],i=o.getAttribute("data-href");if(i===t||i===e)return o}},a=function(a){return new Promise((function(o,i){var n=s.miniCssF(a),r=s.p+n;if(e(n,r))return o();t(a,r,null,o,i)}))},o={524:0};s.f.miniCss=function(t,e){var s={316:1,359:1,687:1,996:1};o[t]?e.push(o[t]):0!==o[t]&&s[t]&&e.push(o[t]=a(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={524:0};s.f.j=function(e,a){var o=s.o(t,e)?t[e]:void 0;if(0!==o)if(o)a.push(o[2]);else{var i=new Promise((function(s,a){o=t[e]=[s,a]}));a.push(o[2]=i);var n=s.p+s.u(e),r=new Error,c=function(a){if(s.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;r.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",r.name="ChunkLoadError",r.type=i,r.request=n,o[1](r)}};s.l(n,c,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,i,n=a[0],r=a[1],c=a[2],d=0;if(n.some((function(e){return 0!==t[e]}))){for(o in r)s.o(r,o)&&(s.m[o]=r[o]);if(c)var l=c(s)}for(e&&e(a);d<n.length;d++)i=n[d],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(l)},a=self["webpackChunkshopping"]=self["webpackChunkshopping"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(4872)}));a=s.O(a)})();
//# sourceMappingURL=app.e4c417e1.js.map