(window.webpackJsonp=window.webpackJsonp||[]).push([[15,47,63],{303:function(t,s,e){},304:function(t,s,e){t.exports=e.p+"assets/img/link.03ea4d17.svg"},305:function(t,s,e){"use strict";e(303)},306:function(t,s,e){"use strict";e.r(s);var r={props:{href:{type:String,default:""},noBorder:{type:Boolean,default:!1}}},a=(e(305),e(41)),i=Object(a.a)(r,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"example-wrapper",class:{"example-wrapper--no-border":this.noBorder}},[this._t("default"),this._v(" "),this.href?s("a",{staticClass:"example-wrapper__icon",attrs:{href:this.href,title:"Full Source",target:"_blank",rel:"nofollow noopener"}},[s("img",{attrs:{src:e(304)}})]):this._e()],2)}),[],!1,null,null,null);s.default=i.exports},324:function(t,s,e){},345:function(t,s,e){"use strict";e(324)},358:function(t,s,e){"use strict";e.r(s);var r={props:{coordinates:{type:Object,default:function(){return{}}},image:{type:String}}},a=(e(345),e(41)),i=Object(a.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"results"},[t.image?e("div",{staticClass:"results__wrapper"},[e("div",{staticClass:"results__coordinates"},[e("p",{staticClass:"results__coordinates-title"},[t._v("Results:")]),t._v(" "),e("p",{staticClass:"results__coordinates-value"},[t._v("Width: "+t._s(t.coordinates.width))]),t._v(" "),e("p",{staticClass:"results__coordinates-value"},[t._v("Height: "+t._s(t.coordinates.height))]),t._v(" "),e("p",{staticClass:"results__coordinates-value"},[t._v("Left: "+t._s(t.coordinates.left))]),t._v(" "),e("p",{staticClass:"results__coordinates-value"},[t._v("Top: "+t._s(t.coordinates.top))])]),t._v(" "),e("div",{staticClass:"results__preview"},[e("img",{attrs:{src:t.image,alt:""}})])]):t._e()])}),[],!1,null,null,null);s.default=i.exports},432:function(t,s,e){},552:function(t,s,e){"use strict";e(432)},623:function(t,s,e){"use strict";e.r(s);var r=e(307),a=e(306),i=e(358),o={components:{Cropper:r.c,ExampleWrapper:a.default,Results:i.default},data:function(){return{src:"https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",coordinates:{width:0,height:0,left:0,top:0},image:null}},methods:{crop:function(){var t=this.$refs.cropper.getResult(),s=t.coordinates,e=t.canvas;this.coordinates=s,this.image=e.toDataURL()}}},n=(e(552),e(41)),l=Object(n.a)(o,(function(){var t=this.$createElement,s=this._self._c||t;return s("example-wrapper",{staticClass:"getting-result-second-example",attrs:{href:"https://github.com/Norserium/vue-advanced-cropper/blob/master/example/docs/.vuepress/components/getting-result-second-example.vue"}},[s("cropper",{ref:"cropper",attrs:{src:this.src,"stencil-props":{aspectRatio:1}}}),this._v(" "),s("results",{attrs:{coordinates:this.coordinates,image:this.image}}),this._v(" "),s("div",{staticClass:"crop-button",on:{click:this.crop}},[this._v("Crop Image")])],1)}),[],!1,null,null,null);s.default=l.exports}}]);