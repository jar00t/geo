!function(u,r){function s(t,e){var i,s,n,a=t.nodeName.toLowerCase();return"area"===a?(s=(i=t.parentNode).name,!(!t.href||!s||"map"!==i.nodeName.toLowerCase())&&(!!(n=u("img[usemap=#"+s+"]")[0])&&o(n))):(/input|select|textarea|button|object/.test(a)?!t.disabled:"a"===a&&t.href||e)&&o(t)}function o(t){return u.expr.filters.visible(t)&&!u(t).parents().addBack().filter(function(){return"hidden"===u.css(this,"visibility")}).length}var e,t,i=0,n=/^ui-id-\d+$/;u.ui=u.ui||{},u.extend(u.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),u.fn.extend({focus:(t=u.fn.focus,function(e,i){return"number"==typeof e?this.each(function(){var t=this;setTimeout(function(){u(t).focus(),i&&i.call(t)},e)}):t.apply(this,arguments)}),scrollParent:function(){var t;return t=u.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(u.css(this,"position"))&&/(auto|scroll)/.test(u.css(this,"overflow")+u.css(this,"overflow-y")+u.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(u.css(this,"overflow")+u.css(this,"overflow-y")+u.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?u(document):t},zIndex:function(t){if(t!==r)return this.css("zIndex",t);if(this.length)for(var e,i,s=u(this[0]);s.length&&s[0]!==document;){if(("absolute"===(e=s.css("position"))||"relative"===e||"fixed"===e)&&(i=parseInt(s.css("zIndex"),10),!isNaN(i)&&0!==i))return i;s=s.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++i)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&u(this).removeAttr("id")})}}),u.extend(u.expr[":"],{data:u.expr.createPseudo?u.expr.createPseudo(function(e){return function(t){return!!u.data(t,e)}}):function(t,e,i){return!!u.data(t,i[3])},focusable:function(t){return s(t,!isNaN(u.attr(t,"tabindex")))},tabbable:function(t){var e=u.attr(t,"tabindex"),i=isNaN(e);return(i||0<=e)&&s(t,!i)}}),u("<a>").outerWidth(1).jquery||u.each(["Width","Height"],function(t,i){function s(t,e,i,s){return u.each(n,function(){e-=parseFloat(u.css(t,"padding"+this))||0,i&&(e-=parseFloat(u.css(t,"border"+this+"Width"))||0),s&&(e-=parseFloat(u.css(t,"margin"+this))||0)}),e}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:u.fn.innerWidth,innerHeight:u.fn.innerHeight,outerWidth:u.fn.outerWidth,outerHeight:u.fn.outerHeight};u.fn["inner"+i]=function(t){return t===r?o["inner"+i].call(this):this.each(function(){u(this).css(a,s(this,t)+"px")})},u.fn["outer"+i]=function(t,e){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){u(this).css(a,s(this,t,!0,e)+"px")})}}),u.fn.addBack||(u.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),u("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(u.fn.removeData=(e=u.fn.removeData,function(t){return arguments.length?e.call(this,u.camelCase(t)):e.call(this)})),u.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),u.support.selectstart="onselectstart"in document.createElement("div"),u.fn.extend({disableSelection:function(){return this.bind((u.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(t){t.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),u.extend(u.ui,{plugin:{add:function(t,e,i){var s,n=u.ui[t].prototype;for(s in i)n.plugins[s]=n.plugins[s]||[],n.plugins[s].push([e,i[s]])},call:function(t,e,i){var s,n=t.plugins[e];if(n&&t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType)for(s=0;n.length>s;s++)t.options[n[s][0]]&&n[s][1].apply(t.element,i)}},hasScroll:function(t,e){if("hidden"===u(t).css("overflow"))return!1;var i=e&&"left"===e?"scrollLeft":"scrollTop",s=!1;return 0<t[i]||(t[i]=1,s=0<t[i],t[i]=0,s)}})}(jQuery),function(h,d){var i=0,u=Array.prototype.slice,s=h.cleanData;h.cleanData=function(t){for(var e,i=0;null!=(e=t[i]);i++)try{h(e).triggerHandler("remove")}catch(t){}s(t)},h.widget=function(t,i,e){var s,n,a,o,u={},r=t.split(".")[0];t=t.split(".")[1],s=r+"-"+t,e||(e=i,i=h.Widget),h.expr[":"][s.toLowerCase()]=function(t){return!!h.data(t,s)},h[r]=h[r]||{},n=h[r][t],a=h[r][t]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),d):new a(t,e)},h.extend(a,n,{version:e.version,_proto:h.extend({},e),_childConstructors:[]}),(o=new i).options=h.widget.extend({},o.options),h.each(e,function(e,s){return h.isFunction(s)?u[e]=(n=function(){return i.prototype[e].apply(this,arguments)},a=function(t){return i.prototype[e].apply(this,t)},function(){var t,e=this._super,i=this._superApply;return this._super=n,this._superApply=a,t=s.apply(this,arguments),this._super=e,this._superApply=i,t}):u[e]=s,d;var n,a}),a.prototype=h.widget.extend(o,{widgetEventPrefix:n?o.widgetEventPrefix:t},u,{constructor:a,namespace:r,widgetName:t,widgetFullName:s}),n?(h.each(n._childConstructors,function(t,e){var i=e.prototype;h.widget(i.namespace+"."+i.widgetName,a,e._proto)}),delete n._childConstructors):i._childConstructors.push(a),h.widget.bridge(t,a)},h.widget.extend=function(t){for(var e,i,s=u.call(arguments,1),n=0,a=s.length;n<a;n++)for(e in s[n])i=s[n][e],s[n].hasOwnProperty(e)&&i!==d&&(t[e]=h.isPlainObject(i)?h.isPlainObject(t[e])?h.widget.extend({},t[e],i):h.widget.extend({},i):i);return t},h.widget.bridge=function(a,e){var o=e.prototype.widgetFullName||a;h.fn[a]=function(i){var t="string"==typeof i,s=u.call(arguments,1),n=this;return i=!t&&s.length?h.widget.extend.apply(null,[i].concat(s)):i,t?this.each(function(){var t,e=h.data(this,o);return e?h.isFunction(e[i])&&"_"!==i.charAt(0)?(t=e[i].apply(e,s))!==e&&t!==d?(n=t&&t.jquery?n.pushStack(t.get()):t,!1):d:h.error("no such method '"+i+"' for "+a+" widget instance"):h.error("cannot call methods on "+a+" prior to initialization; attempted to call method '"+i+"'")}):this.each(function(){var t=h.data(this,o);t?t.option(i||{})._init():h.data(this,o,new e(i,this))}),n}},h.Widget=function(){},h.Widget._childConstructors=[],h.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,e){e=h(e||this.defaultElement||this)[0],this.element=h(e),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=h.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=h(),this.hoverable=h(),this.focusable=h(),e!==this&&(h.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=h(e.style?e.ownerDocument:e.document||e),this.window=h(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:h.noop,_getCreateEventData:h.noop,_create:h.noop,_init:h.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(h.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:h.noop,widget:function(){return this.element},option:function(t,e){var i,s,n,a=t;if(0===arguments.length)return h.widget.extend({},this.options);if("string"==typeof t)if(a={},t=(i=t.split(".")).shift(),i.length){for(s=a[t]=h.widget.extend({},this.options[t]),n=0;i.length-1>n;n++)s[i[n]]=s[i[n]]||{},s=s[i[n]];if(t=i.pop(),e===d)return s[t]===d?null:s[t];s[t]=e}else{if(e===d)return this.options[t]===d?null:this.options[t];a[t]=e}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(o,u,t){var r,l=this;"boolean"!=typeof o&&(t=u,u=o,o=!1),t?(u=r=h(u),this.bindings=this.bindings.add(u)):(t=u,u=this.element,r=this.widget()),h.each(t,function(t,e){function i(){return o||!0!==l.options.disabled&&!h(this).hasClass("ui-state-disabled")?("string"==typeof e?l[e]:e).apply(l,arguments):d}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||h.guid++);var s=t.match(/^(\w+)\s*(.*)$/),n=s[1]+l.eventNamespace,a=s[2];a?r.delegate(a,n,i):u.bind(n,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){h(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){h(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){h(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){h(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,e,i){var s,n,a=this.options[t];if(i=i||{},(e=h.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],n=e.originalEvent)for(s in n)s in e||(e[s]=n[s]);return this.element.trigger(e,i),!(h.isFunction(a)&&!1===a.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},h.each({show:"fadeIn",hide:"fadeOut"},function(a,o){h.Widget.prototype["_"+a]=function(e,t,i){"string"==typeof t&&(t={effect:t});var s,n=t?!0===t||"number"==typeof t?o:t.effect||o:a;"number"==typeof(t=t||{})&&(t={duration:t}),s=!h.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),s&&h.effects&&h.effects.effect[n]?e[a](t):n!==a&&e[n]?e[n](t.duration,t.easing,i):e.queue(function(t){h(this)[a](),i&&i.call(e[0]),t()})}})}(jQuery),function(n){var a=!1;n(document).mouseup(function(){a=!1}),n.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(t){return!0===n.data(t.target,e.widgetName+".preventClickEvent")?(n.removeData(t.target,e.widgetName+".preventClickEvent"),t.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&n(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!a){this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var e=this,i=1===t.which,s=!("string"!=typeof this.options.cancel||!t.target.nodeName)&&n(t.target).closest(this.options.cancel).length;return i&&!s&&this._mouseCapture(t)&&(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(t),!this._mouseStarted)?t.preventDefault():(!0===n.data(t.target,this.widgetName+".preventClickEvent")&&n.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return e._mouseMove(t)},this._mouseUpDelegate=function(t){return e._mouseUp(t)},n(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),a=!0)),!0}},_mouseMove:function(t){return n.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t),this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return n(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&n.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(a){var o,u,r,l,h="ui-button ui-widget ui-state-default ui-corner-all",d="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",c=function(){var t=a(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},p=function(t){var e=t.name,i=t.form,s=a([]);return e&&(e=e.replace(/'/g,"\\'"),s=i?a(i).find("[name='"+e+"']"):a("[name='"+e+"']",t.ownerDocument).filter(function(){return!this.form})),s};a.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,c),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var e=this,i=this.options,t="checkbox"===this.type||"radio"===this.type,s=t?"":"ui-state-active",n="ui-state-focus";null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(h).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===o&&a(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||a(this).removeClass(s)}).bind("click"+this.eventNamespace,function(t){i.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){e.buttonElement.addClass(n)}).bind("blur"+this.eventNamespace,function(){e.buttonElement.removeClass(n)}),t&&(this.element.bind("change"+this.eventNamespace,function(){l||e.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(t){i.disabled||(l=!1,u=t.pageX,r=t.pageY)}).bind("mouseup"+this.eventNamespace,function(t){i.disabled||(u!==t.pageX||r!==t.pageY)&&(l=!0)})),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return!i.disabled&&!l&&void 0}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled||l)return!1;a(this).addClass("ui-state-active"),e.buttonElement.attr("aria-pressed","true");var t=e.element[0];p(t).not(t).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return!i.disabled&&(a(this).addClass("ui-state-active"),o=this,void e.document.one("mouseup",function(){o=null}))}).bind("mouseup"+this.eventNamespace,function(){return!i.disabled&&void a(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){return!i.disabled&&void((t.keyCode===a.ui.keyCode.SPACE||t.keyCode===a.ui.keyCode.ENTER)&&a(this).addClass("ui-state-active"))}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){a(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===a.ui.keyCode.SPACE&&a(this).click()})),this._setOption("disabled",i.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),(i=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(h+" ui-state-hover ui-state-active  "+d).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){return this._super(t,e),"disabled"===t?void(e?this.element.prop("disabled",!0):this.element.prop("disabled",!1)):void this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?p(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"!==this.type){var t=this.buttonElement.removeClass(d),e=a("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),i=this.options.icons,s=i.primary&&i.secondary,n=[];i.primary||i.secondary?(this.options.text&&n.push("ui-button-text-icon"+(s?"s":i.primary?"-primary":"-secondary")),i.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+i.primary+"'></span>"),i.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+i.secondary+"'></span>"),this.options.text||(n.push(s?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",a.trim(e)))):n.push("ui-button-text-only"),t.addClass(n.join(" "))}else this.options.label&&this.element.val(this.options.label)}}),a.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var t="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})}(jQuery),function(h){h.widget("ui.slider",h.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,e,i=this.options,s=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),n=[];for(e=i.values&&i.values.length||1,s.length>e&&(s.slice(e).remove(),s=s.slice(0,e)),t=s.length;t<e;t++)n.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");this.handles=s.add(h(n.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){h(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,e="";t.range?(!0===t.range&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:h.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=h("<div></div>").appendTo(this.element),e="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(e+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):this.range=h([])},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var e,i,s,n,a,o,u,r=this,l=this.options;return!l.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e),s=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var e=Math.abs(i-r.values(t));(e<s||s===e&&(t===r._lastChangedValue||r.values(t)===l.min))&&(s=e,n=h(this),a=t)}),!1!==this._start(t,a)&&(this._mouseSliding=!0,this._handleIndex=a,n.addClass("ui-state-active").focus(),o=n.offset(),u=!h(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=u?{left:0,top:0}:{left:t.pageX-o.left-n.width()/2,top:t.pageY-o.top-n.height()/2-(parseInt(n.css("borderTopWidth"),10)||0)-(parseInt(n.css("borderBottomWidth"),10)||0)+(parseInt(n.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,a,i),this._animateOff=!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),1<(s=i/e)&&(s=1),s<0&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&!0===this.options.range&&(0===e&&s<i||1===e&&i<s)&&(i=s),i!==this.values(e)&&((n=this.values())[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),!1!==a&&this.values(e,i,!0))):i!==this.value()&&(!1!==(a=this._trigger("slide",t,{handle:this.handles[e],value:i}))&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),void this._change(null,0)):this._value()},values:function(t,e){var i,s,n;if(1<arguments.length)return this.options.values[t]=this._trimAlignValue(e),this._refreshValue(),void this._change(null,t);if(!arguments.length)return this._values();if(!h.isArray(t))return this.options.values&&this.options.values.length?this._values(t):this.value();for(i=this.options.values,s=t,n=0;i.length>n;n+=1)i[n]=this._trimAlignValue(s[n]),this._change(null,n);this._refreshValue()},_setOption:function(t,e){var i,s=0;switch("range"===t&&!0===this.options.range&&("min"===e?(this.options.value=this._values(0),this.options.values=null):"max"===e&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),h.isArray(this.options.values)&&(s=this.options.values.length),h.Widget.prototype._setOption.apply(this,arguments),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),i=0;i<s;i+=1)this._change(null,i);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=0<this.options.step?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=0<i?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,t,s,n,a=this.options.range,o=this.options,u=this,r=!this._animateOff&&o.animate,l={};this.options.values&&this.options.values.length?this.handles.each(function(t){i=(u.values(t)-u._valueMin())/(u._valueMax()-u._valueMin())*100,l["horizontal"===u.orientation?"left":"bottom"]=i+"%",h(this).stop(1,1)[r?"animate":"css"](l,o.animate),!0===u.options.range&&("horizontal"===u.orientation?(0===t&&u.range.stop(1,1)[r?"animate":"css"]({left:i+"%"},o.animate),1===t&&u.range[r?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:o.animate})):(0===t&&u.range.stop(1,1)[r?"animate":"css"]({bottom:i+"%"},o.animate),1===t&&u.range[r?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:o.animate}))),e=i}):(t=this.value(),s=this._valueMin(),n=this._valueMax(),i=n!==s?(t-s)/(n-s)*100:0,l["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[r?"animate":"css"](l,o.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({width:i+"%"},o.animate),"max"===a&&"horizontal"===this.orientation&&this.range[r?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:o.animate}),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({height:i+"%"},o.animate),"max"===a&&"vertical"===this.orientation&&this.range[r?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:o.animate}))},_handleEvents:{keydown:function(t){var e,i,s,n=h(t.target).data("ui-slider-handle-index");switch(t.keyCode){case h.ui.keyCode.HOME:case h.ui.keyCode.END:case h.ui.keyCode.PAGE_UP:case h.ui.keyCode.PAGE_DOWN:case h.ui.keyCode.UP:case h.ui.keyCode.RIGHT:case h.ui.keyCode.DOWN:case h.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,h(t.target).addClass("ui-state-active"),!1===this._start(t,n)))return}switch(s=this.options.step,e=i=this.options.values&&this.options.values.length?this.values(n):this.value(),t.keyCode){case h.ui.keyCode.HOME:i=this._valueMin();break;case h.ui.keyCode.END:i=this._valueMax();break;case h.ui.keyCode.PAGE_UP:i=this._trimAlignValue(e+(this._valueMax()-this._valueMin())/5);break;case h.ui.keyCode.PAGE_DOWN:i=this._trimAlignValue(e-(this._valueMax()-this._valueMin())/5);break;case h.ui.keyCode.UP:case h.ui.keyCode.RIGHT:if(e===this._valueMax())return;i=this._trimAlignValue(e+s);break;case h.ui.keyCode.DOWN:case h.ui.keyCode.LEFT:if(e===this._valueMin())return;i=this._trimAlignValue(e-s)}this._slide(t,n,i)},click:function(t){t.preventDefault()},keyup:function(t){var e=h(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,e),this._change(t,e),h(t.target).removeClass("ui-state-active"))}}})}(jQuery),function(a){function e(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}a.widget("ui.spinner",{version:"1.10.3",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var s={},n=this.element;return a.each(["min","max","step"],function(t,e){var i=n.attr(e);void 0!==i&&i.length&&(s[e]=i)}),s},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?void delete this.cancelBlur:(this._stop(),this._refresh(),void(this.previous!==this.element.val()&&this._trigger("change",t)))},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((0<e?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(t){function e(){this.element[0]===this.document[0].activeElement||(this.element.focus(),this.previous=i,this._delay(function(){this.previous=i}))}var i;i=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),e.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,e.call(this)}),!1!==this._start(t)&&this._repeat(null,a(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){return a(t.currentTarget).hasClass("ui-state-active")?!1!==this._start(t)&&void this._repeat(null,a(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var t=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=t.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*t.height())&&0<t.height()&&t.height(t.height()),this.options.disabled&&this.disable()},_keydown:function(t){var e=this.options,i=a.ui.keyCode;switch(t.keyCode){case i.UP:return this._repeat(null,1,t),!0;case i.DOWN:return this._repeat(null,-1,t),!0;case i.PAGE_UP:return this._repeat(null,e.page,t),!0;case i.PAGE_DOWN:return this._repeat(null,-e.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"},_start:function(t){return!(!this.spinning&&!1===this._trigger("start",t))&&(this.counter||(this.counter=1),this.spinning=!0)},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&!1===this._trigger("spin",e,{value:i})||(this._value(i),this.counter++)},_increment:function(t){var e=this.options.incremental;return e?a.isFunction(e)?e(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return i=t-(e=null!==s.min?s.min:0),t=e+(i=Math.round(i/s.step)*s.step),t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){if("culture"===t||"numberFormat"===t){var i=this._parse(this.element.val());return this.options[t]=e,void this.element.val(this._format(i))}("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),this._super(t,e),"disabled"===t&&(e?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:e(function(t){this._super(t),this._value(this.element.val())}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(t,e){var i;""!==t&&(null!==(i=this._parse(t))&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:e(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:e(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:e(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:e(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?void e(this._value).call(this,t):this._parse(this.element.val())},widget:function(){return this.uiSpinner}})}(jQuery);