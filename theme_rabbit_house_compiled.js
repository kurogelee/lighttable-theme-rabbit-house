if(!lt.util.load.provided_QMARK_('lt.plugins.theme-rabbit-house')) {
goog.provide('lt.plugins.theme_rabbit_house');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.theme_rabbit_house.plugin_name = "theme-rabbit-house";
lt.plugins.theme_rabbit_house.theme = "rabbit-house-light";
lt.plugins.theme_rabbit_house.base_name = "rabbit-house-light";
lt.plugins.theme_rabbit_house.skin_command = (function skin_command(name){var skin = [cljs.core.str(lt.plugins.theme_rabbit_house.base_name),cljs.core.str("-"),cljs.core.str(name)].join('');return lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),cljs.core.keyword.call(null,[cljs.core.str("set-skin-"),cljs.core.str(skin)].join('')),new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"desc","desc",1016984067),[cljs.core.str(lt.plugins.theme_rabbit_house.plugin_name),cljs.core.str(": set skin "),cljs.core.str(skin)].join(''),new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.object.tag_behaviors.call(null,new cljs.core.Keyword(null,"app","app",1014001043),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,skin),new cljs.core.Keyword("lt.objs.style","set-skin","lt.objs.style/set-skin",3308326384))], null));
return lt.object.tag_behaviors.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lt.plugins.theme_rabbit_house.theme),new cljs.core.Keyword("lt.objs.style","set-theme","lt.objs.style/set-theme",1439387910))], null));
})], null));
});
var seq__8267_8281 = cljs.core.seq.call(null,cljs.core.range.call(null,1,6));var chunk__8268_8282 = null;var count__8269_8283 = 0;var i__8270_8284 = 0;while(true){
if((i__8270_8284 < count__8269_8283))
{var n_8285 = cljs.core._nth.call(null,chunk__8268_8282,i__8270_8284);lt.plugins.theme_rabbit_house.skin_command.call(null,n_8285);
{
var G__8286 = seq__8267_8281;
var G__8287 = chunk__8268_8282;
var G__8288 = count__8269_8283;
var G__8289 = (i__8270_8284 + 1);
seq__8267_8281 = G__8286;
chunk__8268_8282 = G__8287;
count__8269_8283 = G__8288;
i__8270_8284 = G__8289;
continue;
}
} else
{var temp__4092__auto___8290 = cljs.core.seq.call(null,seq__8267_8281);if(temp__4092__auto___8290)
{var seq__8267_8291__$1 = temp__4092__auto___8290;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8267_8291__$1))
{var c__7561__auto___8292 = cljs.core.chunk_first.call(null,seq__8267_8291__$1);{
var G__8293 = cljs.core.chunk_rest.call(null,seq__8267_8291__$1);
var G__8294 = c__7561__auto___8292;
var G__8295 = cljs.core.count.call(null,c__7561__auto___8292);
var G__8296 = 0;
seq__8267_8281 = G__8293;
chunk__8268_8282 = G__8294;
count__8269_8283 = G__8295;
i__8270_8284 = G__8296;
continue;
}
} else
{var n_8297 = cljs.core.first.call(null,seq__8267_8291__$1);lt.plugins.theme_rabbit_house.skin_command.call(null,n_8297);
{
var G__8298 = cljs.core.next.call(null,seq__8267_8291__$1);
var G__8299 = null;
var G__8300 = 0;
var G__8301 = 0;
seq__8267_8281 = G__8298;
chunk__8268_8282 = G__8299;
count__8269_8283 = G__8300;
i__8270_8284 = G__8301;
continue;
}
}
} else
{}
}
break;
}
}

//# sourceMappingURL=theme_rabbit_house_compiled.js.map