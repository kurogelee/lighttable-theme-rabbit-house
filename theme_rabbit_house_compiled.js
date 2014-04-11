if(!lt.util.load.provided_QMARK_('lt.plugins.theme-rabbit-house')) {
goog.provide('lt.plugins.theme_rabbit_house');
goog.require('cljs.core');
goog.require('lt.objs.settings');
goog.require('lt.objs.tabs');
goog.require('lt.objs.style');
goog.require('lt.objs.command');
goog.require('lt.objs.settings');
goog.require('lt.objs.style');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');
lt.plugins.theme_rabbit_house.plugin_name = "theme-rabbit-house";
lt.plugins.theme_rabbit_house.theme = "rabbit-house-light";
lt.plugins.theme_rabbit_house.base_name = "rabbit-house-light";
lt.plugins.theme_rabbit_house.skin_command = (function skin_command(name){var skin = [cljs.core.str(lt.plugins.theme_rabbit_house.base_name),cljs.core.str("-"),cljs.core.str(name)].join('');return lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),cljs.core.keyword.call(null,[cljs.core.str("set-skin-"),cljs.core.str(skin)].join('')),new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"desc","desc",1016984067),[cljs.core.str(lt.plugins.theme_rabbit_house.plugin_name),cljs.core.str(": set skin "),cljs.core.str(skin)].join(''),new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var cur_skin_8281 = new cljs.core.Keyword(null,"skin","skin",1017436399).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.style.styles));if(cljs.core._EQ_.call(null,skin,cur_skin_8281))
{} else
{lt.object.remove_tag_behaviors.call(null,new cljs.core.Keyword(null,"app","app",1014001043),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cur_skin_8281),new cljs.core.Keyword("lt.objs.style","set-skin","lt.objs.style/set-skin",3308326384))], null));
lt.object.tag_behaviors.call(null,new cljs.core.Keyword(null,"app","app",1014001043),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,skin),new cljs.core.Keyword("lt.objs.style","set-skin","lt.objs.style/set-skin",3308326384))], null));
}
var cur_theme = new cljs.core.Keyword(null,"theme","theme",1124231483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.style.styles));if(cljs.core._EQ_.call(null,lt.plugins.theme_rabbit_house.theme,cur_theme))
{return null;
} else
{lt.object.remove_tag_behaviors.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cur_theme),new cljs.core.Keyword("lt.objs.style","set-theme","lt.objs.style/set-theme",1439387910))], null));
return lt.object.tag_behaviors.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lt.plugins.theme_rabbit_house.theme),new cljs.core.Keyword("lt.objs.style","set-theme","lt.objs.style/set-theme",1439387910))], null));
}
})], null));
});
var seq__8267_8282 = cljs.core.seq.call(null,cljs.core.range.call(null,1,6));var chunk__8268_8283 = null;var count__8269_8284 = 0;var i__8270_8285 = 0;while(true){
if((i__8270_8285 < count__8269_8284))
{var n_8286 = cljs.core._nth.call(null,chunk__8268_8283,i__8270_8285);lt.plugins.theme_rabbit_house.skin_command.call(null,n_8286);
{
var G__8287 = seq__8267_8282;
var G__8288 = chunk__8268_8283;
var G__8289 = count__8269_8284;
var G__8290 = (i__8270_8285 + 1);
seq__8267_8282 = G__8287;
chunk__8268_8283 = G__8288;
count__8269_8284 = G__8289;
i__8270_8285 = G__8290;
continue;
}
} else
{var temp__4092__auto___8291 = cljs.core.seq.call(null,seq__8267_8282);if(temp__4092__auto___8291)
{var seq__8267_8292__$1 = temp__4092__auto___8291;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8267_8292__$1))
{var c__7561__auto___8293 = cljs.core.chunk_first.call(null,seq__8267_8292__$1);{
var G__8294 = cljs.core.chunk_rest.call(null,seq__8267_8292__$1);
var G__8295 = c__7561__auto___8293;
var G__8296 = cljs.core.count.call(null,c__7561__auto___8293);
var G__8297 = 0;
seq__8267_8282 = G__8294;
chunk__8268_8283 = G__8295;
count__8269_8284 = G__8296;
i__8270_8285 = G__8297;
continue;
}
} else
{var n_8298 = cljs.core.first.call(null,seq__8267_8292__$1);lt.plugins.theme_rabbit_house.skin_command.call(null,n_8298);
{
var G__8299 = cljs.core.next.call(null,seq__8267_8292__$1);
var G__8300 = null;
var G__8301 = 0;
var G__8302 = 0;
seq__8267_8282 = G__8299;
chunk__8268_8283 = G__8300;
count__8269_8284 = G__8301;
i__8270_8285 = G__8302;
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