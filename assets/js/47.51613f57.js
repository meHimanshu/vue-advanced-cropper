(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{311:function(t,e,i){},322:function(t,e,i){t.exports=i.p+"assets/img/handler.d2843e4e.svg"},323:function(t,e,i){"use strict";i(311)},327:function(t,e,i){"use strict";i.r(e);var s=i(305),n={name:"CircleStencil",components:{PreviewResult:s.f,DraggableArea:s.d,DraggableElement:s.e},props:{img:{type:Object},resultCoordinates:{type:Object},stencilCoordinates:{type:Object}},computed:{style:function(){var t=this.stencilCoordinates,e=t.height,i=t.width,s=t.left,n=t.top;return{width:"".concat(i,"px"),height:"".concat(e,"px"),left:"".concat(s,"px"),top:"".concat(n,"px")}}},methods:{onMove:function(t){this.$emit("move",t)},onHandlerMove:function(t){var e=t.shift(),i=e.left/2,n=-e.top/2;this.$emit("resize",new s.h({left:i,right:i,top:n,bottom:n},{compensate:!0}))},aspectRatios:function(){return{minimum:1,maximum:1}}}},o=(i(323),i(41)),c=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"circle-stencil",style:this.style},[e("DraggableElement",{staticClass:"circle-stencil__handler",on:{drag:this.onHandlerMove}},[e("img",{staticClass:"circle-stencil__icon",attrs:{src:i(322),alt:""}})]),this._v(" "),e("DraggableArea",{on:{move:this.onMove}},[e("PreviewResult",{staticClass:"circle-stencil__preview",attrs:{img:this.img,"result-coordinates":this.resultCoordinates,"stencil-coordinates":this.stencilCoordinates}})],1)],1)}),[],!1,null,null,null);e.default=c.exports}}]);