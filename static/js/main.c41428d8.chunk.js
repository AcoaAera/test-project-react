(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(17),r=a.n(i),c=(a(30),a(3)),l=a(4),o=a(6),d=a(5),u=a(18),h=a(7),m=a(14),j=a(12),p=[{id:1,name:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440"},{id:2,name:"\u041f\u0438\u043b\u043e\u0442"},{id:3,name:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442"},{id:4,name:"\u0413\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440"},{id:5,name:"\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a"}],b=[{id:1,name:"\u041c\u0443\u0436\u0441\u043a\u043e\u0439",nameEng:"male"},{id:2,name:"\u0416\u0435\u043d\u0441\u043a\u0438\u0439",nameEng:"female"}];function v(e){var t=p.find((function(t){return t.id===Number(e)}));return Boolean(t)?t.name:null}function f(e){var t=b.find((function(t){return t.id===Number(e)}));return Boolean(t)?t.name:null}var O=a(2),x="USER",y=function(e){localStorage.setItem(x,JSON.stringify(e))},g=function(){return JSON.parse(localStorage.getItem(x))},D=new(function(){function e(){Object(c.a)(this,e),this.count=0,this.users=[],Object(O.l)(this),this.users=Boolean(g())?g():[]}return Object(l.a)(e,[{key:"insertUser",value:function(e){this.users.push(e),y(this.users)}},{key:"updateUser",value:function(e){this.users=this.users.map((function(t){return t.id===e.id?e:t})),y(this.users)}},{key:"delUser",value:function(e){this.users.forEach((function(t){var a=t.colleagues;t=a.includes(e)?a.splice(a.indexOf(e),1):t})),this.users=this.users.filter((function(t){return t.id!==e})),y(this.users)}},{key:"getUserById",value:function(e){for(var t=0;t<this.users.length;t++){var a=this.users[t];if(a.id===e)return a}}},{key:"getUserAsKeyLabel",value:function(){return this.users.map((function(e){return{key:e.id,label:e.surname+" "+e.name}}))}},{key:"getUserAsKeyLabelNotMyself",value:function(e){return Boolean(e)?this.users.map((function(e){return{key:e.id,label:e.surname+" "+e.name}})).filter((function(t){return t.key!==e})):null}},{key:"getUsersByIds",value:function(e){return this.users.filter((function(t){return-1!==e.indexOf(String(t.id))})).map((function(e){return{key:e.id,label:e.surname+" "+e.name}}))}},{key:"getUsers",value:function(){return this.users}},{key:"setUsers",value:function(e){this.users=e}}]),e}()),U=a(0),k=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).myInput=function(e){s.props.updateData(e.target.id,e.target.value)},s.state={},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(U.jsxs)("div",{className:"form-group row",children:[Object(U.jsx)("label",{className:"col-sm-2 col-form-label",children:Object(U.jsx)("b",{children:this.props.nameField})}),Object(U.jsxs)("div",{className:"col-sm-10",children:[Object(U.jsx)("input",{id:this.props.id,type:"text",className:"form-control",onChange:this.myInput,defaultValue:this.props.value}),Object(U.jsx)("div",{className:"invalid-feedback",children:this.props.invalid})]})]})}}]),a}(n.a.Component),N=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).listOisitions2=s.props.positions.map((function(e){return Object(U.jsx)("option",{value:e.id,children:e.name},e.id)})),s.myInput=function(e){s.props.updateData(e.target.id,Number(e.target.value))},s.state={},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(U.jsxs)("div",{className:"form-group row",children:[Object(U.jsx)("label",{className:"col-sm-2 col-form-label",children:Object(U.jsx)("b",{children:this.props.nameField})}),Object(U.jsxs)("div",{className:"col-sm-10",children:[Object(U.jsxs)("select",{id:this.props.id,className:"custom-select",value:this.props.value,onChange:this.myInput,children:[Object(U.jsx)("option",{value:"0",disabled:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432"}),this.listOisitions2]}),Object(U.jsx)("div",{className:"invalid-feedback",children:this.props.invalid})]})]})}}]),a}(n.a.Component),I=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).myInput=function(e){s.props.updateData(e.target.id,e.target.value)},s.state={},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(U.jsxs)("div",{className:"form-group row",children:[Object(U.jsx)("label",{className:"col-sm-2 col-form-label",children:Object(U.jsx)("b",{children:this.props.nameField})}),Object(U.jsxs)("div",{className:"col-sm-10",children:[Object(U.jsx)("input",{id:this.props.id,type:"date",className:"form-control",onChange:this.myInput,value:this.props.value}),Object(U.jsx)("div",{className:"invalid-feedback",children:this.props.invalid})]})]})}}]),a}(n.a.Component),B=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).myInput=function(e){s.props.updateData(e.target.name,e.target.value)},s.state={},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.gender.map((function(t){return Object(U.jsxs)("div",{className:"form-check",children:[Object(U.jsx)("input",{type:"radio",className:"form-check-input",id:t.nameEng,name:"gender",checked:t.id===Number(e.props.defaultValue),value:t.id,onChange:e.myInput}),Object(U.jsx)("label",{className:"form-check-label",name:"gender",htmlFor:t.nameEng,children:t.name})]},t.name)}));return Object(U.jsxs)("div",{className:"form-group row",children:[Object(U.jsx)("label",{className:"col-sm-2 col-form-label",children:Object(U.jsx)("b",{children:this.props.nameField})}),Object(U.jsxs)("div",{className:"col-sm-10",children:[Object(U.jsx)("div",{id:this.props.id,children:t}),Object(U.jsx)("div",{className:"invalid-feedback",children:this.props.invalid})]})]})}}]),a}(n.a.Component),F=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).myInput=function(e){s.props.updateData(e.target.id,e.target.checked)},s.state={},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(U.jsxs)("div",{className:"form-group row",children:[Object(U.jsx)("label",{className:"col-sm-2 col-form-label",children:Object(U.jsx)("b",{children:this.props.nameField})}),Object(U.jsx)("div",{className:"col-sm-10",children:Object(U.jsxs)("div",{className:"form-check",children:[Object(U.jsx)("input",{id:this.props.id,className:"form-check-input",type:"checkbox",checked:this.props.defaultValue,onChange:this.myInput}),Object(U.jsx)("label",{className:"form-check-label",htmlFor:"drivingLicence",children:"\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u0440\u0430\u0432"})]})})]})}}]),a}(n.a.Component),C=a(23),E=a.n(C),L=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).myInput=function(e){s.props.updateData(s.props.id,e)},s.state={},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(U.jsxs)("div",{className:"form-group row",children:[Object(U.jsx)("label",{className:"col-sm-2 col-form-label",children:Object(U.jsx)("b",{children:this.props.nameField})}),Object(U.jsx)("div",{className:"col-sm-10",children:Object(U.jsx)(E.a,{placeholder:this.props.placeholder,selectDeselectLabel:this.props.selectDeselectLabel,options:this.props.options,selected:this.props.selected,name:this.props.name,buttonClass:"custom-select",handleOnChange:this.myInput})})]})}}]),a}(n.a.Component),S=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).insertUser=function(){document.querySelectorAll(".is-invalid").forEach((function(e){return e.classList.remove("is-invalid")})),s.validateFields()&&(D.insertUser(s.state.infoUser),s.props.history.push("/"))},s.updateData=function(e,t){s.setState((function(a){return{infoUser:Object(j.a)(Object(j.a)({},a.infoUser),{},Object(m.a)({},e,t))}}))},s.state={infoUser:{surname:"\u041a\u043e\u0440\u0430\u0431\u043b\u0435\u0432",name:"\u0410\u043b\u0435\u043a\u0441\u0435\u0439",patronymic:"\u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432\u0438\u0447",position:3,dateOfBirth:"1997-02-22",gender:1,dateEmployment:"2021-04-15",dateOfDismissal:"",drivingLicence:!0,colleagues:[]},infoUser2:{surname:"",name:"",patronymic:"",position:0,dateOfBirth:"",gender:1,dateEmployment:"",dateOfDismissal:"",drivingLicence:!0,colleagues:[]}},s}return Object(l.a)(a,[{key:"createNewId",value:function(e){for(var t,a=!1;!a;){t=Math.round(1e6*Math.random());for(var s=0,n=0;n<e.length;n++)e[n].id===t&&s++;a=0===s}return t}},{key:"validateFields",value:function(){var e=!0;return e&=this.validateName("name"),e&=this.validateSurname("surname"),e&=this.validatePosition("position"),e&=this.validateDateOfBirth("dateOfBirth"),e&=this.validateGender("gender"),e&=this.validateDateEmployment("dateEmployment"),e&=this.validateDateOfDismissal("dateOfDismissal")}},{key:"validateName",value:function(e){return!!Boolean(this.state.infoUser.name)||(this.setIsInvalid(e),!1)}},{key:"validateSurname",value:function(e){return!!Boolean(this.state.infoUser.surname)||(this.setIsInvalid(e),!1)}},{key:"validatePosition",value:function(e){return!!Boolean(this.state.infoUser.position)||(this.setIsInvalid(e),!1)}},{key:"validateDateOfBirth",value:function(e){return!!Boolean(this.state.infoUser.dateOfBirth)||(this.setIsInvalid(e),!1)}},{key:"validateGender",value:function(e){return!!Boolean(this.state.infoUser.gender)||(this.setIsInvalid(e),!1)}},{key:"validateDateEmployment",value:function(e){return!!Boolean(this.state.infoUser.dateEmployment)||(this.setIsInvalid(e),!1)}},{key:"validateDateOfDismissal",value:function(e){return!Boolean(this.state.infoUser.dateOfDismissal)||(!(this.state.infoUser.dateOfDismissal<this.state.infoUser.dateEmployment)||(this.setIsInvalid(e),!1))}},{key:"setIsInvalid",value:function(e){document.getElementById(e).classList.add("is-invalid")}},{key:"setInfoUserId",value:function(){var e=this;this.setState((function(t){return{infoUser:Object(j.a)(Object(j.a)({},t.infoUser),{},{id:e.createNewId(D.users)})}}))}},{key:"componentDidMount",value:function(){this.setInfoUserId()}},{key:"render",value:function(){var e=this,t=D.getUserAsKeyLabel();return Object(U.jsxs)("div",{className:"container mt-2",children:[Object(U.jsx)("div",{className:"h3 mb-3 text-center",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(U.jsx)(k,{id:"name",nameField:"\u0418\u043c\u044f*",value:this.state.infoUser.name,updateData:this.updateData,invalid:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),Object(U.jsx)(k,{id:"surname",nameField:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f*",value:this.state.infoUser.surname,updateData:this.updateData,invalid:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0438\u043c\u0438\u043b\u0438\u044e"}),Object(U.jsx)(k,{id:"patronymic",nameField:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",value:this.state.infoUser.patronymic,updateData:this.updateData}),Object(U.jsx)(N,{id:"position",nameField:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c*",positions:p,value:this.state.infoUser.position,updateData:this.updateData,invalid:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(U.jsx)(I,{id:"dateOfBirth",nameField:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f*",value:this.state.infoUser.dateOfBirth,updateData:this.updateData,invalid:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(U.jsx)(B,{id:"gender",nameField:"\u041f\u043e\u043b *",gender:b,value:this.state.infoUser.gender,defaultValue:this.state.infoUser.gender,updateData:this.updateData,invalid:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u043e\u043b"}),Object(U.jsx)(I,{id:"dateEmployment",nameField:"\u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0435\u043c\u0430 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443*",value:this.state.infoUser.dateEmployment,updateData:this.updateData,invalid:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u043f\u0440\u0438\u0435\u043c\u0430 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443"}),Object(U.jsx)(I,{id:"dateOfDismissal",nameField:"\u0414\u0430\u0442\u0430 \u0443\u0432\u043e\u043b\u044c\u043d\u0435\u043d\u0438\u044f",value:this.state.infoUser.dateOfDismissal,updateData:this.updateData,invalid:"\u0414\u0430\u0442\u0430 \u0443\u0432\u043e\u043b\u044c\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u0434\u0430\u0442\u044b \u043f\u0440\u0438\u0435\u043c\u0430 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443"}),Object(U.jsx)(F,{id:"drivingLicence",nameField:"\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u043f\u0440\u0430\u0432",value:this.state.infoUser.drivingLicence,defaultValue:this.state.infoUser.drivingLicence,updateData:this.updateData}),Object(U.jsx)(L,{id:"colleagues",nameField:"\u041a\u043e\u043b\u043b\u0435\u0433\u0438",options:t,placeholder:"\u041d\u0435\u0442 \u043a\u043e\u043b\u043b\u0435\u0433",selectDeselectLabel:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c/\u0443\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435\u0445 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432",selected:[],name:"\u0441olleagues",updateData:this.updateData}),Object(U.jsx)("button",{type:"button",className:"btn btn-success",onClick:this.insertUser,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(U.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(){return e.props.history.push("/")},children:"\u041d\u0430\u0437\u0430\u0434"})]})}}]),a}(n.a.Component),w=a(25),M=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).viewColleagues=function(e){return D.getUsersByIds(e).map((function(e){return Object(U.jsx)("div",{children:e.label},e.key)}))},s.state={},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=D.users.map((function(t){return Object(U.jsxs)("tr",{children:[Object(U.jsx)("td",{children:t.surname}),Object(U.jsx)("td",{children:t.name}),Object(U.jsx)("td",{children:t.patronymic}),Object(U.jsx)("td",{children:v(t.position)}),Object(U.jsx)("td",{children:t.dateOfBirth}),Object(U.jsx)("td",{children:f(t.gender)}),Object(U.jsx)("td",{children:t.dateEmployment}),Object(U.jsx)("td",{children:t.dateOfDismissal}),Object(U.jsx)("td",{children:e.viewColleagues(t.colleagues)}),Object(U.jsx)("td",{children:t.drivingLicence?"\u0415\u0441\u0442\u044c":"\u041d\u0435\u0442"}),Object(U.jsx)("td",{children:Object(U.jsxs)("div",{className:"btn-group",role:"group",children:[Object(U.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(){return e.props.history.push("/editUser",{id:t.id})},children:"\u270e"}),Object(U.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return D.delUser(t.id)},children:"\ud83d\uddd1"})]})})]},t.id)}));return Object(U.jsx)("div",{className:"mx-5 overflow-auto",children:Object(U.jsxs)("table",{className:"table table-striped",children:[Object(U.jsx)("thead",{children:Object(U.jsxs)("tr",{children:[Object(U.jsx)("th",{scope:"col",children:"\u0418\u043c\u044f"}),Object(U.jsx)("th",{scope:"col",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(U.jsx)("th",{scope:"col",children:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(U.jsx)("th",{scope:"col",children:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(U.jsx)("th",{scope:"col",children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(U.jsx)("th",{scope:"col",children:"\u041f\u043e\u043b"}),Object(U.jsx)("th",{scope:"col",children:"\u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0435\u043c\u0430 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443"}),Object(U.jsx)("th",{scope:"col",children:"\u0414\u0430\u0442\u0430 \u0443\u0432\u043e\u043b\u044c\u043d\u0435\u043d\u0438\u044f"}),Object(U.jsx)("th",{scope:"col",children:"\u041a\u043e\u043b\u043b\u0435\u0433\u0438"}),Object(U.jsx)("th",{scope:"col",children:"\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u043f\u0440\u0430\u0432"}),Object(U.jsx)("th",{scope:"col",children:"\u041a\u043d\u043e\u043f\u043a\u0438"})]})}),Object(U.jsx)("tbody",{children:t})]})})}}]),a}(n.a.Component),V=Object(w.a)(M),A=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).updateData=function(e,t){s.setState((function(a){return{infoUser:Object(j.a)(Object(j.a)({},a.infoUser),{},Object(m.a)({},e,t))}}))},s.updateUser=function(){document.querySelectorAll(".is-invalid").forEach((function(e){return e.classList.remove("is-invalid")})),s.validateFields()&&(D.updateUser(s.state.infoUser),s.props.history.push("/"))},s.state={infoUser:{surname:null,name:"",patronymic:"",position:0,dateOfBirth:"",gender:1,dateEmployment:"",dateOfDismissal:"",drivingLicence:!0,colleagues:[],id:null}},s}return Object(l.a)(a,[{key:"createNewId",value:function(e){for(var t,a=!1;!a;){t=Math.round(1e6*Math.random());for(var s=0,n=0;n<e.length;n++)e[n].id===t&&s++;a=0===s}return t}},{key:"validateFields",value:function(){var e=!0;return e&=this.validateName("name"),e&=this.validateSurname("surname"),e&=this.validatePosition("position"),e&=this.validateDateOfBirth("dateOfBirth"),e&=this.validateGender("gender"),e&=this.validateDateEmployment("dateEmployment"),e&=this.validateDateOfDismissal("dateOfDismissal")}},{key:"validateName",value:function(e){return!!Boolean(this.state.infoUser.name)||(this.setIsInvalid(e),!1)}},{key:"validateSurname",value:function(e){return!!Boolean(this.state.infoUser.surname)||(this.setIsInvalid(e),!1)}},{key:"validatePosition",value:function(e){return!!Boolean(this.state.infoUser.position)||(this.setIsInvalid(e),!1)}},{key:"validateDateOfBirth",value:function(e){return!!Boolean(this.state.infoUser.dateOfBirth)||(this.setIsInvalid(e),!1)}},{key:"validateGender",value:function(e){return!!Boolean(this.state.infoUser.gender)||(this.setIsInvalid(e),!1)}},{key:"validateDateEmployment",value:function(e){return!!Boolean(this.state.infoUser.dateEmployment)||(this.setIsInvalid(e),!1)}},{key:"validateDateOfDismissal",value:function(e){return!Boolean(this.state.infoUser.dateOfDismissal)||(!(this.state.infoUser.dateOfDismissal<this.state.infoUser.dateEmployment)||(this.setIsInvalid(e),!1))}},{key:"setIsInvalid",value:function(e){document.getElementById(e).classList.add("is-invalid")}},{key:"componentDidMount",value:function(){Boolean(this.props.location.state)?this.setState({infoUser:D.getUserById(this.props.location.state.id)}):this.props.history.push("/404")}},{key:"render",value:function(){var e=this,t=D.getUserAsKeyLabelNotMyself(this.state.infoUser.id),a=Boolean(t)?Object(U.jsx)(L,{id:"colleagues",nameField:"\u041a\u043e\u043b\u043b\u0435\u0433\u0438",options:t,placeholder:"\u041d\u0435\u0442 \u043a\u043e\u043b\u043b\u0435\u0433",selectDeselectLabel:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c/\u0443\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435\u0445 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432",selected:this.state.infoUser.colleagues,name:"\u0441olleaguess",updateData:this.updateData}):"tyt";return Object(U.jsxs)("div",{className:"container mt-2",children:[Object(U.jsx)("div",{className:"h3 mb-3 text-center",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(U.jsx)(k,{id:"name",nameField:"\u0418\u043c\u044f*",value:this.state.infoUser.name,updateData:this.updateData,invalid:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),Object(U.jsx)(k,{id:"surname",nameField:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f*",value:this.state.infoUser.surname,updateData:this.updateData,invalid:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0438\u043c\u0438\u043b\u0438\u044e"}),Object(U.jsx)(k,{id:"patronymic",nameField:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",value:this.state.infoUser.patronymic,updateData:this.updateData,invalid:""}),Object(U.jsx)(N,{id:"position",nameField:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c*",positions:p,value:this.state.infoUser.position,updateData:this.updateData,invalid:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(U.jsx)(I,{id:"dateOfBirth",nameField:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f*",value:this.state.infoUser.dateOfBirth,updateData:this.updateData,invalid:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(U.jsx)(B,{id:"gender",nameField:"\u041f\u043e\u043b *",gender:b,value:this.state.infoUser.gender,defaultValue:this.state.infoUser.gender,updateData:this.updateData,invalid:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u043e\u043b"}),Object(U.jsx)(I,{id:"dateEmployment",nameField:"\u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0435\u043c\u0430 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443*",value:this.state.infoUser.dateEmployment,updateData:this.updateData,invalid:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u043f\u0440\u0438\u0435\u043c\u0430 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443"}),Object(U.jsx)(I,{id:"dateOfDismissal",nameField:"\u0414\u0430\u0442\u0430 \u0443\u0432\u043e\u043b\u044c\u043d\u0435\u043d\u0438\u044f",value:this.state.infoUser.dateOfDismissal,updateData:this.updateData,invalid:"\u0414\u0430\u0442\u0430 \u0443\u0432\u043e\u043b\u044c\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u0434\u0430\u0442\u044b \u043f\u0440\u0438\u0435\u043c\u0430 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443"}),Object(U.jsx)(F,{id:"drivingLicence",nameField:"\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u043f\u0440\u0430\u0432",value:this.state.infoUser.drivingLicence,defaultValue:this.state.infoUser.drivingLicence,updateData:this.updateData,invalid:""}),a,Object(U.jsx)("button",{type:"button",className:"btn btn-success",onClick:this.updateUser,children:" \u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(U.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(){return e.props.history.push("/")},children:"\u041d\u0430\u0437\u0430\u0434"})]})}}]),a}(n.a.Component),P=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(U.jsx)("div",{className:"mt-2",children:Object(U.jsx)("div",{className:"alert alert-danger ",children:Object(U.jsx)("div",{className:"text-center",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})})})}}]),a}(n.a.Component),G=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(U.jsx)("div",{children:Object(U.jsxs)(u.a,{children:[Object(U.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(U.jsx)(u.b,{to:"/",className:"navbar-brand",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"}),Object(U.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent",children:Object(U.jsx)("span",{className:"navbar-toggler-icon"})}),Object(U.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(U.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(U.jsx)("li",{className:"nav-item active",children:Object(U.jsx)(u.b,{to:"/addUser",className:"nav-link",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})})})})]}),Object(U.jsx)("div",{children:Object(U.jsxs)(h.c,{children:[Object(U.jsx)(h.a,{exact:!0,path:"/",component:V}),Object(U.jsx)(h.a,{exact:!0,path:"/addUser",component:S}),Object(U.jsx)(h.a,{exact:!0,path:"/editUser",component:A}),Object(U.jsx)(h.a,{component:P})]})})]})})}}]),a}(n.a.Component),J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(U.jsx)(n.a.StrictMode,{children:Object(U.jsx)(G,{})}),document.getElementById("root")),J()}},[[41,1,2]]]);
//# sourceMappingURL=main.c41428d8.chunk.js.map