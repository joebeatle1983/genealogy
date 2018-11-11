webpackJsonp([69],{"3jc5":function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;return(s._self._c||t)("auth-form",{attrs:{action:"Send a reset password link",route:"password.email"},on:{success:function(t){s.$toastr.success(t.status)}}})},staticRenderFns:[]}},"72H1":function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("NYxO"),i=a("C/JF"),r=a("fhbW"),o=Object.assign||function(s){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(s[e]=a[e])}return s};i.c.add([r.G,r.s,r.I,r._4,r._36]),t.default={name:"AuthForm",props:{isLogin:{type:Boolean,default:!1},isReset:{type:Boolean,default:!1},action:{type:String,required:!0},route:{type:String,required:!0}},data:function(){return{loading:!1,email:"",password:"",passwordConfirmation:null,remember:!1,hasErrors:!1,isSuccessful:!1}},computed:o({},Object(e.e)(["meta"]),{token:function(){return this.isReset?this.$route.params.token:null},hasPassword:function(){return null!==this.password&&this.password.length},match:function(){return this.hasPassword&&this.password===this.passwordConfirmation},postParams:function(){var s={email:this.email};return this.isLogin&&(s=Object.assign({password:this.password,remember:this.remember},s)),this.isReset&&(s=Object.assign({password:this.password,password_confirmation:this.passwordConfirmation,token:this.token},s)),s}}),methods:{submit:function(){var s=this;this.loading=!0,this.isSuccessful=!1,this.hasErrors=!1,axios.post(route(this.route),this.postParams).then(function(t){var a=t.data;s.loading=!1,s.isSuccessful=!0,s.$emit("success",a)}).catch(function(t){s.loading=!1,s.hasErrors=!0;var a=t.response,e=a.status,i=a.data;if(401!==e){if(422!==e)throw t;s.reportValidationErrors(i)}else s.$toastr.error(i.message)})},reportValidationErrors:function(s){s.errors?(s.errors.email&&this.$toastr.error(s.errors.email[0]),s.errors&&s.errors.password&&this.$toastr.error(s.errors.password[0])):this.$toastr.error(s.message)}}}},"AY/5":function(s,t,a){var e=a("UZ37");"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);a("rjj0")("11bda525",e,!0,{})},H8J0:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"column login"},[a("div",{staticClass:"box has-padding-medium"},[a("h3",{staticClass:"title is-3 has-text-black has-text-centered has-margin-bottom-medium"},[s._m(0),s._v("\n            "+s._s(s.meta.appName)+"\n        ")]),s._v(" "),a("form",{staticClass:"has-margin-bottom-medium",on:{submit:function(t){t.preventDefault(),s.submit()}}},[a("div",{staticClass:"field"},[a("div",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"},{name:"focus",rawName:"v-focus"}],staticClass:"input",class:{"is-danger":s.hasErrors,"is-success":s.isSuccessful},attrs:{type:"email",placeholder:s.__("Email")},domProps:{value:s.email},on:{input:[function(t){t.target.composing||(s.email=t.target.value)},function(t){s.hasErrors=!1}]}}),s._v(" "),a("span",{staticClass:"icon is-small is-left"},[a("fa",{attrs:{icon:"envelope"}})],1),s._v(" "),s.isSuccessful?a("span",{staticClass:"icon is-small is-right has-text-success"},[a("fa",{attrs:{icon:"check"}})],1):s._e(),s._v(" "),s.hasErrors?a("span",{staticClass:"icon is-small is-right has-text-danger"},[a("fa",{attrs:{icon:"exclamation-triangle"}})],1):s._e()])]),s._v(" "),s.isLogin||s.isReset?a("div",{staticClass:"field"},[a("div",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"input",class:{"is-danger":s.hasErrors,"is-success":s.isSuccessful},attrs:{type:"password",placeholder:s.__("Password")},domProps:{value:s.password},on:{input:[function(t){t.target.composing||(s.password=t.target.value)},function(t){s.hasErrors=!1}]}}),s._v(" "),a("span",{staticClass:"icon is-small is-left"},[a("fa",{attrs:{icon:"lock"}})],1),s._v(" "),s.isSuccessful?a("span",{staticClass:"icon is-small is-right has-text-success"},[a("fa",{attrs:{icon:"check"}})],1):s._e(),s._v(" "),s.hasErrors?a("span",{staticClass:"icon is-small is-right has-text-danger"},[a("fa",{attrs:{icon:"exclamation-triangle"}})],1):s._e(),s._v(" "),s._t("password-strength",null,{password:s.password,hasPassword:s.hasPassword})],2)]):s._e(),s._v(" "),s.isReset?a("div",{staticClass:"field"},[a("div",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.passwordConfirmation,expression:"passwordConfirmation"}],staticClass:"input",class:{"is-danger":s.hasErrors,"is-success":s.isSuccessful},attrs:{type:"password",placeholder:s.__("Repeat Password")},domProps:{value:s.passwordConfirmation},on:{input:[function(t){t.target.composing||(s.passwordConfirmation=t.target.value)},function(t){s.hasErrors=!1}]}}),s._v(" "),a("span",{staticClass:"icon is-small is-left"},[a("fa",{attrs:{icon:"lock"}})],1),s._v(" "),s.isSuccessful?a("span",{staticClass:"icon is-small is-right has-text-success"},[a("fa",{attrs:{icon:"check"}})],1):s._e(),s._v(" "),s.hasErrors?a("span",{staticClass:"icon is-small is-right has-text-danger"},[a("fa",{attrs:{icon:"exclamation-triangle"}})],1):s._e(),s._v(" "),s.match&&!s.hasErrors?a("span",{staticClass:"icon is-small is-right has-text-success"},[a("fa",{attrs:{icon:"check"}})],1):s._e()])]):s._e(),s._v(" "),s.isLogin?a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("label",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.remember,expression:"remember"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.remember)?s._i(s.remember,null)>-1:s.remember},on:{change:function(t){var a=s.remember,e=t.target,i=!!e.checked;if(Array.isArray(a)){var r=s._i(a,null);e.checked?r<0&&(s.remember=a.concat([null])):r>-1&&(s.remember=a.slice(0,r).concat(a.slice(r+1)))}else s.remember=i}}}),s._v("\n                        "+s._s(s.__("Remember me"))+"\n                    ")])])]):s._e(),s._v(" "),a("div",{staticClass:"field"},[a("button",{staticClass:"button is-primary is-fullwidth",class:{"is-loading":s.loading},attrs:{type:"submit"},on:{click:function(t){t.preventDefault(),s.submit()}}},[a("span",{staticClass:"icon is-small"},[a("fa",{attrs:{icon:s.isReset?"lock":"user"}})],1),s._v(" "),a("span",[s._v(s._s(s.__(s.action)))])])])]),s._v(" "),s.isLogin?a("router-link",{staticClass:"is-pulled-right",attrs:{to:{name:"password.email"}}},[s._v("\n            "+s._s(s.__("Forgot password"))+"\n        ")]):s._e(),s._v(" "),a("div",{staticClass:"is-clearfix"})],1)])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("figure",{staticClass:"image is-24x24 logo"},[t("img",{attrs:{src:"/images/logo.svg"}})])}]}},SszF:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("kmVb"),i=a.n(e);t.default={name:"Email",components:{AuthForm:i.a}}},UZ37:function(s,t,a){(s.exports=a("FZ+f")(!1)).push([s.i,".column.login[data-v-1a0d3be2]{max-width:400px}figure.logo[data-v-1a0d3be2]{display:inline-block}",""])},YMRB:function(s,t,a){var e=a("VU/8")(a("SszF"),a("3jc5"),!1,null,null,null);s.exports=e.exports},kmVb:function(s,t,a){var e=a("VU/8")(a("72H1"),a("H8J0"),!1,function(s){a("AY/5")},"data-v-1a0d3be2",null);s.exports=e.exports}});
//# sourceMappingURL=69.js.map