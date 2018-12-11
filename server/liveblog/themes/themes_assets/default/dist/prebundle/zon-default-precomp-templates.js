(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["template-ad-entry.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["text"], 
[], 
function (l_text, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("text", l_text);
var t_2 = "";if(!runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"i18n")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"language"))) {
t_2 += runtime.suppressValue(l_text, env.opts.autoescape);
;
}
else {
if(!runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"i18n")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"language"))),l_text)) {
t_2 += runtime.suppressValue(l_text, env.opts.autoescape);
;
}
else {
t_2 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"i18n")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"language"))),l_text), env.opts.autoescape);
;
}
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("translate");
context.setVariable("translate", macro_t_1);
output += "\n\n<article class=\"lb-post advertisement\" data-post-id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"_id"), env.opts.autoescape);
output += "\">\n    <div class=\"lb-post-header\">\n        <div class=\"lb-type lb-type--";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"type"), env.opts.autoescape);
output += "\"></div>\n\n        <div class=\"lb-post-date-icons\">\n            <div class=\"lb-advertisement\">";
output += runtime.suppressValue((lineno = 7, colno = 52, runtime.callWrap(macro_t_1, "translate", context, ["Advertisement"])), env.opts.autoescape);
output += "</div>\n        </div>\n  </div>\n\n  <!-- post start -->\n  <div class=\"items-container\">\n    <!-- item start -->\n    <div class=\"lb-item lb-item--";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"type"), env.opts.autoescape);
output += "\">\n        <article>";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"text")), env.opts.autoescape);
output += "</article>\n    </div>\n    <!-- item end -->\n  </div>\n  <!-- post end -->\n\n  <div class=\"lb-post-bottom\">\n\n    <div class=\"lb-post-actions\">\n\n      <div class=\"lb-post-share\">\n        <img src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/action_share.svg\" class=\"lb-post-shareIcon\" />\n        <div class=\"lb-post-shareBox\">\n          <a class=\"lb-post-shareBox__item\"\n            onclick=\"window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=570,height=400');return false;\"\n            data-link-base=\"//www.facebook.com/sharer.php?s=100&p[title]=&p[url]=\"\n            data-link-id=";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"_id"), env.opts.autoescape);
output += "><img src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/share_facebook.svg\"/>\n          </a>\n          <a class=\"lb-post-shareBox__item\"\n            onclick=\"window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=570,height=400');return false;\"\n            data-link-base=\"//plus.google.com/share?url=\"\n            data-link-id=";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"_id"), env.opts.autoescape);
output += "><img src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/share_google.svg\"/>\n          </a>\n          <a class=\"lb-post-shareBox__item\"\n            onclick=\"window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=570,height=400');return false;\"\n            data-link-base=\"//www.linkedin.com/shareArticle?mini=true&url=\"\n            data-link-id=";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"_id"), env.opts.autoescape);
output += "><img src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/share_linkedin.svg\"/>\n          </a>\n          <a class=\"lb-post-shareBox__item\"\n            onclick=\"window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=570,height=400');return false;\"\n            data-link-base=\"//twitter.com/home?status=\"\n            data-link-id=";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"_id"), env.opts.autoescape);
output += "><img src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/share_twitter.svg\"/>\n          </a>\n          <a class=\"lb-post-shareBox__item\"\n            onclick=\"window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=1024,height=768');return false;\"\n            data-link-base=\"mailto:?to=&subject=Liveblog&body=\"\n            data-link-id=";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"_id"), env.opts.autoescape);
output += "><img src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/share_email.svg\"/>\n          </a>\n          <span> | </span>\n        </div>\n      </div>\n      <!-- end share -->\n\n      <!-- permalink -->\n      <div class=\"lb-post-permalink\">\n        <a id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"_id"), env.opts.autoescape);
output += "\" target=\"_blank\">\n          <img src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/action_link.svg\" class=\"lb-post-linkIcon\" />\n        </a>\n      </div>\n      <!-- end permalink -->\n\n    </div>\n\n</article>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["template-author.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"post_items_type") != "advertisement") {
output += "\n<!-- author plus avatar -->\n<div class=\"lb-author ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"authorPosition") == "bottom") {
output += "lb-author--bottom";
;
}
output += "\">\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"commenter") && !(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"syndication_in") && !runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showSyndicatedAuthor"))) {
output += "\n      <div class=\"lb-author__name\">\n        ";
output += runtime.suppressValue((lineno = 5, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["Comment by"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"commenter"), env.opts.autoescape);
output += "\n      </div>\n      <img class=\"lb-author__avatar lb-author__avatar--comment\" src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/comment_icon.svg\">\n    ";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showAuthor")) {
output += "\n      <div class=\"lb-author__name\">\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"syndicated_creator") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showSyndicatedAuthor")) {
output += "\n        ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"syndicated_creator")),"display_name"), env.opts.autoescape);
output += "\n      ";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"original_creator")) {
output += "\n        ";
output += runtime.suppressValue(env.getFilter("title").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"original_creator")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"authorNameFormat"))), env.opts.autoescape);
output += "\n      ";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"publisher")) {
output += "\n        ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"publisher")),"display_name"), env.opts.autoescape);
output += "\n      ";
;
}
;
}
;
}
output += "\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"syndication_in") && !runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showSyndicatedAuthor")) {
output += "\n        <span class=\"lb-producer";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showSyndicatedAuthor")) {
output += " lb-producer__author";
;
}
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"syndication_in")),"producer_blog_title"), env.opts.autoescape);
output += "</span>\n      ";
;
}
output += "\n      </div>\n      ";
if(runtime.contextOrFrameLookup(context, frame, "type") == "comment") {
output += "\n        <img class=\"lb-author__avatar lb-author__avatar--comment\" src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/comment_icon.svg\">\n      ";
;
}
output += "\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showAuthorAvatar") && runtime.contextOrFrameLookup(context, frame, "type") != "comment") {
output += "\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"syndicated_creator") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showSyndicatedAuthor") && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"syndicated_creator")),"picture_url")) {
output += "\n        <img class=\"lb-author__avatar\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"syndicated_creator")),"picture_url"), env.opts.autoescape);
output += "\" />\n        ";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"original_creator") && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"original_creator")),"picture_url")) {
output += "\n        <img class=\"lb-author__avatar\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"original_creator")),"picture_url"), env.opts.autoescape);
output += "\" />\n        ";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"publisher") && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"publisher")),"picture_url")) {
output += "\n        <img class=\"lb-author__avatar\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"publisher")),"picture_url"), env.opts.autoescape);
output += "\" />\n        ";
;
}
else {
output += "\n        <div class=\"lb-author__avatar\"></div>\n        ";
;
}
;
}
;
}
output += "\n      ";
;
}
output += "\n    ";
;
}
;
}
output += "\n  </div>\n  <!-- end author -->\n  ";
;
}
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["template-comment.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<form class=\"comment hide\">\n  <div class=\"comment__wrap\">\n    <h2 class=\"comment__headline\">";
output += runtime.suppressValue((lineno = 2, colno = 44, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["Post a comment"])), env.opts.autoescape);
output += "</h2>\n    <div>\n      <input type=\"name\" placeholder=\"";
output += runtime.suppressValue((lineno = 4, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["Name *"])), env.opts.autoescape);
output += "\" id=\"comment-name\" />\n    </div>\n    <div>\n      <textarea placeholder=\"";
output += runtime.suppressValue((lineno = 7, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["Comment *"])), env.opts.autoescape);
output += "\" id=\"comment-content\"></textarea>\n    </div>\n    <div>\n      <button class=\"comment__button\">";
output += runtime.suppressValue((lineno = 10, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["Send"])), env.opts.autoescape);
output += "</button>\n      <button class=\"comment__button comment__button--grey\" data-js-close-comment-dialog>";
output += runtime.suppressValue((lineno = 11, colno = 99, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["Cancel"])), env.opts.autoescape);
output += "</button>\n    </div>\n  </div>\n</form>\n\n<div class=\"comment-sent hide\">";
output += runtime.suppressValue((lineno = 16, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["Your comment was sent for approval"])), env.opts.autoescape);
output += ".</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["template-embed-providers.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<!-- These are cached for most users anyway, so why bother with arbitrary scripts -->\n<script async defer src=\"https://platform.instagram.com/en_US/embeds.js\"></script>\n<script async defer src=\"https://platform.twitter.com/widgets.js\"></script>\n<script async defer src=\"https://connect.facebook.net/en_US/all.js#xfbml=1&status=0&appId=\"></script>\n<script src=\"//cdn.embedly.com/widgets/platform.js\" charset=\"UTF-8\"></script>\n<style class=\"embedly-css\">\n    .card .hdr{\n      display: none;\n    }\n  </style>\n<script>\n    embedly(\"defaults\", {\n        cards: {\n            key: '82645d4daa7742cc891c21506d28235e',\n            align: 'left',\n            chrome: 0\n        }\n    });\n</script>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["template-index.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<!doctype html>\n<html class=\"lb-wrapHtml\">\n  <head>\n    <title>Liveblog Test</title>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"blockSearchEngines")) {
output += "\n      <meta name=\"robots\" content=\"noindex, follow\">\n    ";
;
}
output += "\n    <!-- inject:css -->\n    <!-- endinject -->\n  </head>\n  <body class=\"lb-wrapBody\">\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("template-timeline.html", false, "template-index.html", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    <!-- inject:js -->\n    <!-- endinject -->\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("template-embed-providers.html", false, "template-index.html", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  </body>\n</html>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["template-item-comment.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"items-containerIndent\">\n  <!-- author plus avatar -->\n  <div class=\"lb-author lb-author--indent\">\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item") && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"commenter") && !(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"syndication_in") && !runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showSyndicatedAuthor"))) {
output += "\n      <img class=\"lb-author__avatar lb-author__avatar--comment\" src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/comment_icon.svg\">\n      <div class=\"lb-author__name\">\n        ";
output += runtime.suppressValue((lineno = 6, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["Comment by"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"commenter"), env.opts.autoescape);
output += "\n      </div>\n    ";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showAuthor") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"syndication_in") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item") && (runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"original_creator") || runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"syndicated_creator"))) {
output += "\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showAuthorAvatar")) {
output += "\n        <img class=\"lb-author__avatar lb-author__avatar--comment\" src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/comment_icon.svg\">\n      ";
;
}
output += "\n      <div class=\"lb-author__name\">\n        <span class=\"lb-producer";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showSyndicatedAuthor")) {
output += " lb-producer__author";
;
}
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"syndication_in")),"producer_blog_title"), env.opts.autoescape);
output += "</span>\n      </div>\n    ";
;
}
;
}
output += "\n  </div>\n  <div class=\"lb-item lb-item--text\">\n    <article>";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"text")), env.opts.autoescape);
output += "</article>\n  </div>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["template-item-embed.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
if(env.getFilter("lower").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"provider_name")) == "youtube" && runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"html")) {
output += "\n    <div class=\"item--embed__element lb-responsive-video\">\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"youtubePrivateMode")) {
output += "\n            <iframe frameborder=\"0\" allowfullscreen=\"1\" allow=\"autoplay; encrypted-media\"\n                title=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"title"), env.opts.autoescape);
output += "\"\n                width=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"thumbnail_width"), env.opts.autoescape);
output += "\"\n                height=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"thumbnail_height"), env.opts.autoescape);
output += "\"\n                src=\"";
output += runtime.suppressValue(env.getFilter("replace").call(context, env.getFilter("replace").call(context, env.getFilter("replace").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"url"),"http:","https:"),"youtube.com","youtube-nocookie.com"),"watch?v=","embed/"), env.opts.autoescape);
output += "\">\n            </iframe>\n        ";
;
}
else {
output += "\n            ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"html")), env.opts.autoescape);
output += "\n        ";
;
}
output += "\n    </div>\n";
;
}
else {
if((env.getFilter("lower").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"provider_name")) == "twitter") && runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"html")) {
output += "\n    <div class=\"item--embed__element\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"html")), env.opts.autoescape);
output += "</div>\n";
;
}
else {
if(env.getFilter("lower").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"provider_name")) == "facebook" && runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"original_url")) {
output += "\n    <blockquote class=\"embedly-card\" data-card-controls=\"0\">\n        <h4><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"original_url"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"credit"), env.opts.autoescape);
output += "</a></h4>\n        <p>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"title"), env.opts.autoescape);
output += "</p>\n    </blockquote>\n";
;
}
else {
if(env.getFilter("lower").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"provider_name")) == "instagram" && runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"original_url")) {
output += "\n    <blockquote class=\"embedly-card\" data-card-controls=\"0\">\n        <h4><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"original_url"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"credit"), env.opts.autoescape);
output += "</a></h4>\n        <p>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"title"), env.opts.autoescape);
output += "</p>\n    </blockquote>\n";
;
}
else {
if(env.getFilter("lower").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"provider_name")) == "brightcove" && runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"html")) {
output += "\n    <div class=\"item--embed__element lb-responsive-video\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"html")), env.opts.autoescape);
output += "</div>\n    <div class=\"item--embed__info\">\n        ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"title")) {
output += "\n        <div class=\"item--embed__title\">\n           ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"title"), env.opts.autoescape);
output += "\n        </div>\n        ";
;
}
output += "\n        ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"description")) {
output += "\n        <div class=\"item--embed__description\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"description"), env.opts.autoescape);
output += "</div>\n        ";
;
}
output += "\n    </div>\n";
;
}
else {
output += "\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"html")) {
output += "\n    <div class=\"item--embed__element\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"html")), env.opts.autoescape);
output += "</div>\n    ";
;
}
output += "\n    ";
if((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"title") || runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"description") || runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"credit") || (!runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"html") && runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"thumbnail_url")))) {
output += "\n    <article class=\"item--embed item--embed__wrapper\">\n        ";
if(!runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"html") && runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"thumbnail_url")) {
output += "\n        <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"original_url"), env.opts.autoescape);
output += "\" target=\"_blank\" class=\"";
output += runtime.suppressValue((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"description")?"item--embed__illustration":"item--embed__only-illustration"), env.opts.autoescape);
output += "\">\n            <img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"thumbnail_url"), env.opts.autoescape);
output += "\"/>\n    </a>\n    ";
;
}
output += "\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"title") || runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"description") || runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"credit")) {
output += "\n        <div class=\"item--embed__info\">\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"title")) {
output += "\n            <div class=\"item--embed__title\">\n                <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"original_url"), env.opts.autoescape);
output += "\" target=\"_blank\" title=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"title"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"title"), env.opts.autoescape);
output += "</a>\n            </div>\n            ";
;
}
output += "\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"description")) {
output += "\n            <div class=\"item--embed__description\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"description"), env.opts.autoescape);
output += "</div>\n            ";
;
}
output += "\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"credit")) {
output += "\n            <div class=\"item--embed__credit\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"credit"), env.opts.autoescape);
output += "</div>\n            ";
;
}
output += "\n        </div>\n        ";
;
}
output += "\n\n    </article>\n    ";
;
}
output += "\n";
;
}
;
}
;
}
;
}
;
}
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["template-item-galleryImage.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<figure>\n    <div class=\"lb-slideshow_imageContainer\">\n        <img\n          ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"active")) {
output += "class=\"active\"";
;
}
output += "\n          src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"media")),"renditions")),"thumbnail")),"href"), env.opts.autoescape);
output += "\"\n          srcset=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"media")),"renditions")),"baseImage")),"href"), env.opts.autoescape);
output += " 810w,\n          ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"media")),"renditions")),"thumbnail")),"href"), env.opts.autoescape);
output += " 240w,\n          ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"media")),"renditions")),"viewImage")),"href"), env.opts.autoescape);
output += " 540w\"\n          alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"caption"), env.opts.autoescape);
output += "\">\n    </div>\n    <figcaption>\n        ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"caption")) {
output += "\n        <span class=\"caption\">\n            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"caption"), env.opts.autoescape);
output += "\n        </span>&nbsp;\n        ";
;
}
output += "\n        ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"credit")) {
output += "\n        <span>";
output += runtime.suppressValue((lineno = 17, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["credit:"])), env.opts.autoescape);
output += "</span>\n        <span class=\"credit\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"credit"), env.opts.autoescape);
output += "</span>\n        ";
;
}
output += "\n    </figcaption>\n</figure>\n      ";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["template-item-image.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<figure>\n  <img\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"active")) {
output += "class=\"active\"";
;
}
output += "\n    src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"media")),"renditions")),"thumbnail")),"href"), env.opts.autoescape);
output += "\"\n    srcset=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"media")),"renditions")),"baseImage")),"href"), env.opts.autoescape);
output += " 810w,\n    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"media")),"renditions")),"thumbnail")),"href"), env.opts.autoescape);
output += " 240w,\n    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"media")),"renditions")),"viewImage")),"href"), env.opts.autoescape);
output += " 540w\"\n    alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"caption"), env.opts.autoescape);
output += "\">\n  <figcaption>\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"caption")) {
output += "\n      <span class=\"caption\">\n        ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"caption"), env.opts.autoescape);
output += "\n      </span>&nbsp;\n    ";
;
}
output += "\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"credit")) {
output += "\n      <span>";
output += runtime.suppressValue((lineno = 15, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["credit:"])), env.opts.autoescape);
output += "</span>\n      <span class=\"credit\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"credit"), env.opts.autoescape);
output += "</span>\n    ";
;
}
output += "\n  </figcaption>\n</figure>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["template-item-quote.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<blockquote class=\"lb-quote\">\n    <p>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"quote"), env.opts.autoescape);
output += "</p>\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"credit")) {
output += "<cite>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ref")),"item")),"meta")),"credit"), env.opts.autoescape);
output += "</cite>";
;
}
output += "\n</blockquote>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["template-post-actions.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"post_items_type") != "advertisement") {
output += "\n    <div class=\"lb-post-actions ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"authorPosition") == "bottom") {
output += "lb-post-actions--top";
;
}
output += "\">\n\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showSharingButtons")) {
output += "\n            <div class=\"lb-post-share\">\n                <img src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/action_share.svg\" class=\"lb-post-shareIcon\" />\n                <div class=\"lb-post-shareBox\">\n                    <a class=\"lb-post-shareBox__item\"\n                    onclick=\"window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=570,height=400');return false;\"\n                    data-link-base=\"//www.facebook.com/sharer.php?s=100&p[title]=&p[url]=\"\n                    data-link-id=";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"_id"), env.opts.autoescape);
output += "><img src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/share_facebook.svg\"/>\n                    </a>\n                    <a class=\"lb-post-shareBox__item\"\n                    onclick=\"window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=570,height=400');return false;\"\n                    data-link-base=\"//plus.google.com/share?url=\"\n                    data-link-id=";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"_id"), env.opts.autoescape);
output += "><img src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/share_google.svg\"/>\n                    </a>\n                    <a class=\"lb-post-shareBox__item\"\n                    onclick=\"window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=570,height=400');return false;\"\n                    data-link-base=\"//www.linkedin.com/shareArticle?mini=true&url=\"\n                    data-link-id=";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"_id"), env.opts.autoescape);
output += "><img src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/share_linkedin.svg\"/>\n                    </a>\n                    <a class=\"lb-post-shareBox__item\"\n                    onclick=\"window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=570,height=400');return false;\"\n                    data-link-base=\"//twitter.com/home?status=\"\n                    data-link-id=";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"_id"), env.opts.autoescape);
output += "><img src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/share_twitter.svg\"/>\n                    </a>\n                    <a class=\"lb-post-shareBox__item\"\n                    onclick=\"window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=1024,height=768');return false;\"\n                    data-link-base=\"mailto:?to=&subject=Liveblog&body=\"\n                    data-link-id=";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"_id"), env.opts.autoescape);
output += "><img src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/share_email.svg\"/>\n                    </a>\n                    <span> | </span>\n                </div>\n            </div>\n        ";
;
}
output += "\n        <!-- end share -->\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showPermalinkButton")) {
output += "\n            <!-- permalink -->\n            <div class=\"lb-post-permalink\">\n                <a id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"_id"), env.opts.autoescape);
output += "\" target=\"_blank\">\n                    <img src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/action_link.svg\" class=\"lb-post-linkIcon\" />\n                </a>\n            </div>\n            <!-- end permalink -->\n        ";
;
}
output += "\n    </div>\n";
;
}
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["template-post-comment.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"lb-item commentItem\">\n    <article>";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs")),0)),"item")),"text")), env.opts.autoescape);
output += "</article>\n</div>\n";
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs")) > 1) {
output += "\n<div class=\"items-containerIndent\">\n";
var t_1;
t_1 = runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs")),1)),"item");
frame.set("secondary", t_1, true);
if(frame.topLevel) {
context.setVariable("secondary", t_1);
}
if(frame.topLevel) {
context.addExport("secondary", t_1);
}
output += "\n  <!-- author plus avatar -->\n  <div class=\"lb-author lb-author--indent\">\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "secondary")),"original_creator") || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "secondary")),"syndicated_creator")) {
output += "\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "secondary")),"original_creator") && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "secondary")),"original_creator")),"picture_url")) {
output += "\n        <img class=\"lb-author__avatar\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "secondary")),"original_creator")),"picture_url"), env.opts.autoescape);
output += "\" />\n        ";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "secondary")),"original_creator") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "secondary")),"syndicated_creator") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showSyndicatedAuthor") && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"syndicated_creator")),"picture_url")) {
output += "\n        <img class=\"lb-author__avatar\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"syndicated_creator")),"picture_url"), env.opts.autoescape);
output += "\" />\n        ";
;
}
else {
output += "\n        <div class=\"lb-author__avatar\"></div>\n        ";
;
}
;
}
output += "\n        <div class=\"lb-author__name\">\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "secondary")),"syndicated_creator") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showSyndicatedAuthor")) {
output += "\n            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "secondary")),"syndicated_creator")),"display_name"), env.opts.autoescape);
output += "\n        ";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "secondary")),"original_creator")) {
output += "\n            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "secondary")),"original_creator")),"display_name"), env.opts.autoescape);
output += "\n        ";
;
}
;
}
output += "\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"syndication_in") && !runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showSyndicatedAuthor")) {
output += "\n            <span class=\"lb-producer";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showSyndicatedAuthor")) {
output += " lb-producer__author";
;
}
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"syndication_in")),"producer_blog_title"), env.opts.autoescape);
output += "</span>\n        ";
;
}
output += "\n        </div>\n    ";
;
}
output += "\n  </div>\n  <!-- end author -->\n    ";
if(runtime.contextOrFrameLookup(context, frame, "item") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups") && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1) && runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs") && (env.getFilter("length").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs")) > 0)) {
output += "\n        ";
frame = frame.push();
var t_4 = runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs");
if(t_4) {t_4 = runtime.fromIterator(t_4);
var t_3 = t_4.length;
for(var t_2=0; t_2 < t_4.length; t_2++) {
var t_5 = t_4[t_2];
frame.set("ref", t_5);
frame.set("loop.index", t_2 + 1);
frame.set("loop.index0", t_2);
frame.set("loop.revindex", t_3 - t_2);
frame.set("loop.revindex0", t_3 - t_2 - 1);
frame.set("loop.first", t_2 === 0);
frame.set("loop.last", t_2 === t_3 - 1);
frame.set("loop.length", t_3);
output += "\n          ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0") > 0) {
output += "\n              ";
if(runtime.memberLookup((runtime.memberLookup((t_5),"item")),"item_type") == "image") {
output += "\n              ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showGallery") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0") + 1 < runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"length") && runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0") + 1)),"item")),"item_type") == "image" && (runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0") - 1 < 1 || !(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0") > 1 && runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0") - 1)),"item")),"item_type") == "image"))) {
output += "\n              <div class=\"lb-slideshow\">\n              ";
;
}
output += "\n              <div class=\"lb-item ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_5),"item")),"meta")),"media")),"renditions")),"original")),"height") > runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_5),"item")),"meta")),"media")),"renditions")),"original")),"width")) {
output += "portrait";
;
}
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_5),"item")),"item_type"), env.opts.autoescape);
output += "\">\n              ";
;
}
else {
output += "\n              <div class=\"lb-item lb-item--";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_5),"item")),"item_type"), env.opts.autoescape);
output += "\">\n              ";
;
}
output += "\n              ";
if(runtime.memberLookup((runtime.memberLookup((t_5),"item")),"item_type") == "embed") {
output += "\n                ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("template-item-embed.html", false, "template-post-comment.html", false, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
callback(null,t_6);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n              ";
});
}
else {
if(runtime.memberLookup((runtime.memberLookup((t_5),"item")),"item_type") == "image") {
output += "\n                ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("template-item-image.html", false, "template-post-comment.html", false, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n              ";
});
}
else {
if(runtime.memberLookup((runtime.memberLookup((t_5),"item")),"item_type") == "quote") {
output += "\n                ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("template-item-quote.html", false, "template-post-comment.html", false, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
callback(null,t_14);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
callback(null,t_16);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n              ";
});
}
else {
output += "\n                <article>";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((t_5),"item")),"text")), env.opts.autoescape);
output += "</article>\n              ";
;
}
;
}
;
}
output += "\n              </div>\n              ";
if(runtime.memberLookup((runtime.memberLookup((t_5),"item")),"item_type") == "image" && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0") - 1 > 0 && runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0") - 1)),"item")),"item_type") == "image" && !(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0") + 1 >= runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"length") || runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0") + 1)),"item")),"item_type") == "image")) {
output += "\n              </div>\n              ";
;
}
output += "\n            ";
;
}
output += "\n        ";
;
}
}
frame = frame.pop();
output += "\n    ";
;
}
output += "\n</div>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["template-post.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["text"], 
[], 
function (l_text, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("text", l_text);
var t_2 = "";if(!runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"i18n")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"language"))) {
t_2 += runtime.suppressValue(l_text, env.opts.autoescape);
;
}
else {
if(!runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"i18n")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"language"))),l_text)) {
t_2 += runtime.suppressValue(l_text, env.opts.autoescape);
;
}
else {
t_2 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"i18n")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"language"))),l_text), env.opts.autoescape);
;
}
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("translate");
context.setVariable("translate", macro_t_1);
output += "\n";
var t_3;
t_3 = runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs")),0)),"item");
frame.set("mainItem", t_3, true);
if(frame.topLevel) {
context.setVariable("mainItem", t_3);
}
if(frame.topLevel) {
context.addExport("mainItem", t_3);
}
output += "\n";
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"published_date");
frame.set("postDate", t_4, true);
if(frame.topLevel) {
context.setVariable("postDate", t_4);
}
if(frame.topLevel) {
context.addExport("postDate", t_4);
}
output += "\n";
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"post_items_type");
frame.set("type", t_5, true);
if(frame.topLevel) {
context.setVariable("type", t_5);
}
if(frame.topLevel) {
context.addExport("type", t_5);
}
output += "\n";
var t_6;
t_6 = false;
frame.set("galleryItem", t_6, true);
if(frame.topLevel) {
context.setVariable("galleryItem", t_6);
}
if(frame.topLevel) {
context.addExport("galleryItem", t_6);
}
output += "\n\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"commenter")) {
output += "\n  ";
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs")) > 1) {
output += "\n    ";
var t_7;
t_7 = "comment";
frame.set("type", t_7, true);
if(frame.topLevel) {
context.setVariable("type", t_7);
}
if(frame.topLevel) {
context.addExport("type", t_7);
}
output += "\n  ";
;
}
output += "\n  ";
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"_created");
frame.set("postDate", t_8, true);
if(frame.topLevel) {
context.setVariable("postDate", t_8);
}
if(frame.topLevel) {
context.addExport("postDate", t_8);
}
output += "\n  ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"meta")),"_created")) {
output += "\n    ";
var t_9;
t_9 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"meta")),"_created");
frame.set("postDate", t_9, true);
if(frame.topLevel) {
context.setVariable("postDate", t_9);
}
if(frame.topLevel) {
context.addExport("postDate", t_9);
}
output += "\n  ";
;
}
output += "\n";
;
}
output += "\n\n<!-- sticky position toggle -->\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"sticky") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"stickyPosition") == "top") {
output += "\n<article\n  class=\"lb-sticky-top-post";
if(runtime.contextOrFrameLookup(context, frame, "displaynone")) {
output += " mod--displaynone";
;
}
output += "\"\n  data-post-id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"_id"), env.opts.autoescape);
output += "\"\n  data-post-sticky=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"sticky"), env.opts.autoescape);
output += "\">\n  ";
;
}
else {
output += "\n<article\n  class=\"lb-post";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"lb_highlight")) {
output += " lb-post--highlighted";
;
}
if(runtime.contextOrFrameLookup(context, frame, "displaynone")) {
output += " mod--displaynone";
;
}
output += "\"\n  data-post-id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"_id"), env.opts.autoescape);
output += "\"\n  data-post-sticky=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"sticky"), env.opts.autoescape);
output += "\">\n\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("post_header"))(env, context, frame, runtime, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
output += t_10;
output += "\n\n  ";
});
}
output += "\n  <!-- end sticky position toggle -->\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"sticky")) {
output += "\n  <div class=\"lb-item__sticky-wrapper\">\n  ";
;
}
output += "\n\n  <div class=\"lb-items-container\">\n  ";
if(runtime.contextOrFrameLookup(context, frame, "type") == "comment") {
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("template-post-comment.html", false, "template-post.html", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
callback(null,t_14);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  ";
});
}
else {
output += "\n    ";
if(runtime.contextOrFrameLookup(context, frame, "item") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups") && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1) && runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs") && (env.getFilter("length").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs")) > 0)) {
output += "\n        ";
frame = frame.push();
var t_18 = runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs");
if(t_18) {t_18 = runtime.fromIterator(t_18);
var t_17 = t_18.length;
for(var t_16=0; t_16 < t_18.length; t_16++) {
var t_19 = t_18[t_16];
frame.set("ref", t_19);
frame.set("loop.index", t_16 + 1);
frame.set("loop.index0", t_16);
frame.set("loop.revindex", t_17 - t_16);
frame.set("loop.revindex0", t_17 - t_16 - 1);
frame.set("loop.first", t_16 === 0);
frame.set("loop.last", t_16 === t_17 - 1);
frame.set("loop.length", t_17);
output += "\n          ";
if(runtime.memberLookup((runtime.memberLookup((t_19),"item")),"item_type") == "image") {
output += "\n            ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showGallery") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0") + 1 < runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"length") && runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0") + 1)),"item")),"item_type") == "image" && (runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0") - 1 < 0 || !(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0") > 0 && runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0") - 1)),"item")),"item_type") == "image"))) {
output += "\n              ";
output += "\n              ";
var t_20;
t_20 = true;
frame.set("galleryItem", t_20, true);
if(frame.topLevel) {
context.setVariable("galleryItem", t_20);
}
if(frame.topLevel) {
context.addExport("galleryItem", t_20);
}
output += "\n              <!-- slideshow start -->\n              <div class=\"lb-slideshow\">\n                <div class=\"lb-slideshow_frame\">\n                  <div class=\"lb-slideshow_slides\">\n            ";
;
}
output += "\n            ";
output += "\n            ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showGallery") && runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0") - 1)),"item")),"item_type") == "image") {
output += "\n              ";
var t_21;
t_21 = true;
frame.set("galleryItem", t_21, true);
if(frame.topLevel) {
context.setVariable("galleryItem", t_21);
}
if(frame.topLevel) {
context.addExport("galleryItem", t_21);
}
output += "\n            ";
;
}
output += "\n            <!-- image item start -->\n            <div class=\"lb-item lb-item--";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_19),"item")),"meta")),"media")),"renditions")),"original")),"height") > runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_19),"item")),"meta")),"media")),"renditions")),"original")),"width")) {
output += "portrait";
;
}
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_19),"item")),"item_type"), env.opts.autoescape);
output += "\">\n          ";
;
}
else {
output += "\n            <!-- item start -->\n            <div class=\"lb-item lb-item--";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_19),"item")),"item_type"), env.opts.autoescape);
output += "\">\n          ";
;
}
output += "\n          ";
if(runtime.memberLookup((runtime.memberLookup((t_19),"item")),"item_type") == "embed") {
output += "\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("template-item-embed.html", false, "template-post.html", false, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
callback(null,t_22);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
callback(null,t_24);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n          ";
});
}
else {
if(runtime.memberLookup((runtime.memberLookup((t_19),"item")),"item_type") == "image" && runtime.contextOrFrameLookup(context, frame, "galleryItem")) {
output += "\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("template-item-galleryImage.html", false, "template-post.html", false, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
callback(null,t_26);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
callback(null,t_28);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n          ";
});
}
else {
if(runtime.memberLookup((runtime.memberLookup((t_19),"item")),"item_type") == "image") {
output += "\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("template-item-image.html", false, "template-post.html", false, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
callback(null,t_30);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
callback(null,t_32);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n          ";
});
}
else {
if(runtime.memberLookup((runtime.memberLookup((t_19),"item")),"item_type") == "quote") {
output += "\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("template-item-quote.html", false, "template-post.html", false, function(t_35,t_34) {
if(t_35) { cb(t_35); return; }
callback(null,t_34);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_37,t_36) {
if(t_37) { cb(t_37); return; }
callback(null,t_36);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n          ";
});
}
else {
if(runtime.memberLookup((runtime.memberLookup((t_19),"item")),"item_type") == "comment") {
output += "\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("template-item-comment.html", false, "template-post.html", false, function(t_39,t_38) {
if(t_39) { cb(t_39); return; }
callback(null,t_38);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_41,t_40) {
if(t_41) { cb(t_41); return; }
callback(null,t_40);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n          ";
});
}
else {
output += "\n            <div>";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((t_19),"item")),"text")), env.opts.autoescape);
output += "</div>\n          ";
;
}
;
}
;
}
;
}
;
}
output += "\n          </div>\n          <!-- item end -->\n          ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showGallery") && runtime.memberLookup((runtime.memberLookup((t_19),"item")),"item_type") == "image" && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0") - 1 >= 0 && runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0") - 1)),"item")),"item_type") == "image" && runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"groups")),1)),"refs")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0") + 1)),"item")),"item_type") != "image") {
output += "    </div>\n                <span class=\"lb-slideshow_prev\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 501.5 501.5\"><g><path fill=\"#2E435A\" d=\"M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z\"/></g></svg>\n                </span>\n                <span class=\"lb-slideshow_next\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 501.5 501.5\"><g><path fill=\"#2E435A\" d=\"M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z\"/></g></svg>\n                </span>\n              </div>\n            </div>\n            <!-- slideshow end -->\n          ";
;
}
output += "\n        ";
;
}
}
frame = frame.pop();
output += "\n    ";
;
}
output += "\n  ";
;
}
output += "\n  </div>\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showUpdateDatetime") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"content_updated_date") != runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"firstcreated") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"post_items_type") != "advertisement") {
output += "<div class=\"lb-post-updated\">\n      <span>";
output += runtime.suppressValue((lineno = 157, colno = 22, runtime.callWrap(macro_t_1, "translate", context, ["Updated"])), env.opts.autoescape);
output += "</span>\n      <span class=\"lb-post-updated-time\">\n        ";
output += runtime.suppressValue(env.getFilter("date").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"content_updated_date"),"D. MMMM YYYY HH:mm"), env.opts.autoescape);
output += "\n      </span>\n    </div>";
;
}
output += "\n\n  <div class=\"lb-sharing\">\n    <ul class=\"lb-sharing__list\">\n      <li class=\"lb-sharing__item lb-sharing__item--facebook\">\n        <a class=\"lb-post-shareBox__item\"\n          onclick=\"window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=570,height=400');return false;\"\n          data-link-base=\"//www.facebook.com/sharer.php?s=100&p[title]=&p[url]=\" data-link-id=";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"_id"), env.opts.autoescape);
output += "></a>\n      </li>\n      <li class=\"lb-sharing__item lb-sharing__item--twitter\">\n        <a class=\"lb-post-shareBox__item\"\n          onclick=\"window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=570,height=400');return false;\"\n          data-link-base=\"//twitter.com/home?status=\" data-link-id=";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"_id"), env.opts.autoescape);
output += "></a>\n      </li>\n      <li class=\"lb-sharing__item lb-sharing__item--email\">\n        <a class=\"lb-post-shareBox__item\"\n          onclick=\"window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=1024,height=768');return false;\"\n          data-link-base=\"mailto:?to=&subject=Liveblog&body=\" data-link-id=";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"_id"), env.opts.autoescape);
output += "></a>\n      </li>\n      <!-- permalink -->\n      <li class=\"lb-sharing__item lb-sharing__item--permalink lb-post-permalink\">\n        <a id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"_id"), env.opts.autoescape);
output += "\" target=\"_blank\"></a>\n      </li>\n      <!-- end permalink -->\n    </ul>\n  </div>\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"sticky")) {
output += "\n  </div>\n  ";
;
}
output += "\n\n</article>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_post_header(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"lb-post-header\">";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"post_items_type")) {
output += "<div class=\"lb-type lb-type--";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"post_items_type"), env.opts.autoescape);
output += "\"></div>";
;
}
output += "\n    <div class=\"lb-post-metadata\">\n      <!-- remove advertisement stylization-->\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"post_items_type") != "advertisement") {
output += "\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"sticky")) {
output += "\n        <span class=\"lb-post-metadata__status lb-post-metadata__status--pinned\"></span>\n      ";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"post_items_type") == "advertisement") {
output += "\n        <div class=\"lb-advertisement\">";
output += runtime.suppressValue((lineno = 39, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["Advertisement"])), env.opts.autoescape);
output += "</div>\n      ";
;
}
;
}
output += "\n      <span class=\"lb-post-metadata__time\">\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"lb_highlight")) {
output += "\n          <span class=\"lb-post-metadata__status lb-post-metadata__status--highlighted\">&#9733;</span>\n        ";
;
}
output += "\n        ";
output += runtime.suppressValue(env.getFilter("date").call(context, runtime.contextOrFrameLookup(context, frame, "postDate"),"HH:mm"), env.opts.autoescape);
output += "\n      </span>\n      <span class=\"lb-post-metadata__date";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"datetimeFormat") == "ago") {
output += " relativeDate";
;
}
output += "\" data-js-timestamp=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "postDate"), env.opts.autoescape);
output += "\">\n        ";
output += runtime.suppressValue(env.getFilter("date").call(context, runtime.contextOrFrameLookup(context, frame, "postDate"),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"datetimeFormat")), env.opts.autoescape);
output += "\n      </span>\n\n    </div>\n    <!-- author plus avatar -->\n    <div class=\"lb-author\">\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"commenter") && !(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"syndication_in") && !runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showSyndicatedAuthor"))) {
output += "\n        <div class=\"lb-author__name\">\n          ";
output += runtime.suppressValue((lineno = 56, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["Comment by"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"commenter"), env.opts.autoescape);
output += "\n        </div>\n        <img class=\"lb-author__avatar lb-author__avatar--comment\" src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/comment_icon.svg\">\n      ";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showAuthor")) {
output += "\n        <span class=\"lb-author__name\">\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"syndicated_creator") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showSyndicatedAuthor")) {
output += "\n          ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"syndicated_creator")),"display_name"), env.opts.autoescape);
output += "\n        ";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"original_creator")) {
output += "\n          ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"original_creator")),"display_name"), env.opts.autoescape);
output += "\n        ";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"publisher")) {
output += "\n          ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"publisher")),"display_name"), env.opts.autoescape);
output += "\n        ";
;
}
;
}
;
}
output += "\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"syndication_in") && !runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showSyndicatedAuthor")) {
output += "\n          <span class=\"lb-producer";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showSyndicatedAuthor")) {
output += " lb-producer__author";
;
}
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"syndication_in")),"producer_blog_title"), env.opts.autoescape);
output += "</span>\n        ";
;
}
output += "\n      </span>\n        ";
if(runtime.contextOrFrameLookup(context, frame, "type") == "comment") {
output += "\n          <img class=\"lb-author__avatar lb-author__avatar--comment\" src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/comment_icon.svg\">\n        ";
;
}
output += "\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showAuthorAvatar") && runtime.contextOrFrameLookup(context, frame, "type") != "comment") {
output += "\n          ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"syndicated_creator") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showSyndicatedAuthor") && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"syndicated_creator")),"picture_url")) {
output += "\n          <img class=\"lb-author__avatar\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "mainItem")),"syndicated_creator")),"picture_url"), env.opts.autoescape);
output += "\" />\n          ";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"original_creator") && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"original_creator")),"picture_url")) {
output += "\n          <img class=\"lb-author__avatar\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"original_creator")),"picture_url"), env.opts.autoescape);
output += "\" />\n          ";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"publisher") && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"publisher")),"picture_url")) {
output += "\n          <img class=\"lb-author__avatar\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"publisher")),"picture_url"), env.opts.autoescape);
output += "\" />\n          ";
;
}
;
}
;
}
output += "\n        ";
;
}
output += "\n      ";
;
}
;
}
output += "\n      ";
;
}
output += "\n      <!-- end remove advertisement stylization-->\n    </div>\n    <!-- end author -->\n  </div>\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_post_header: b_post_header,
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["template-timeline.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["text"], 
[], 
function (l_text, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("text", l_text);
var t_2 = "";if(!runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"i18n")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"language"))) {
t_2 += runtime.suppressValue(l_text, env.opts.autoescape);
;
}
else {
if(!runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"i18n")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"language"))),l_text)) {
t_2 += runtime.suppressValue(l_text, env.opts.autoescape);
;
}
else {
t_2 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"i18n")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"language"))),l_text), env.opts.autoescape);
;
}
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("translate");
context.setVariable("translate", macro_t_1);
output += "\n\n<div data-timeline class=\"lb-timeline ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"language"), env.opts.autoescape);
output += "\">\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("timeline_top"))(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "\n\n\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("timeline_header"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n\n  <!-- Comment -->\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"canComment")) {
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("template-comment.html", false, "template-timeline.html", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  ";
});
}
output += "\n  <!-- Comment End -->\n\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("timeline_body"))(env, context, frame, runtime, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
output += t_11;
output += "\n\n\n</div>\n\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("template-embed-providers.html", false, "template-timeline.html", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
callback(null,t_15);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "include_js_options")) {
output += "\n  <script type=\"text/javascript\">\n    window.LB = ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "json_options")), env.opts.autoescape);
output += ";\n  </script>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_timeline_top(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
output += "\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showTitle") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "blog")),"title")) {
output += "\n    <h1>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "blog")),"title"), env.opts.autoescape);
output += "</h1>\n  ";
;
}
output += "\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showDescription") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "blog")),"description")) {
output += "\n    <div class=\"description\">\n      ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "blog")),"description")), env.opts.autoescape);
output += "\n    </div>\n  ";
;
}
output += "\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showImage") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "blog")),"picture_url")) {
output += "\n    <img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "blog")),"picture_url"), env.opts.autoescape);
output += "\" />\n  ";
;
}
output += "\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"stickyPosition") == "top") {
output += "\n    <div class=\"timeline-top timeline-top--loaded\">\n      <section data-timeline-sticky class=\"lb-posts list-group";
if(!env.getFilter("length").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "api_response")),"stickyPosts")),"_items"))) {
output += " sticky--empty";
;
}
output += "\">\n        ";
frame = frame.push();
var t_19 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "api_response")),"stickyPosts")),"_items");
if(t_19) {t_19 = runtime.fromIterator(t_19);
var t_18 = t_19.length;
for(var t_17=0; t_17 < t_19.length; t_17++) {
var t_20 = t_19[t_17];
frame.set("item", t_20);
frame.set("loop.index", t_17 + 1);
frame.set("loop.index0", t_17);
frame.set("loop.revindex", t_18 - t_17);
frame.set("loop.revindex0", t_18 - t_17 - 1);
frame.set("loop.first", t_17 === 0);
frame.set("loop.last", t_17 === t_18 - 1);
frame.set("loop.length", t_18);
output += "\n          ";
if(!runtime.memberLookup((t_20),"deleted")) {
output += "\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("template-post.html", false, "template-timeline.html", false, function(t_22,t_21) {
if(t_22) { cb(t_22); return; }
callback(null,t_21);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
callback(null,t_23);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n          ";
});
}
output += "\n        ";
;
}
}
frame = frame.pop();
output += "\n      </section>\n    </div>\n  ";
;
}
output += "\n\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_timeline_header(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <!-- Header -->\n  <div class=\"header-bar\">\n    <div class=\"header-bar__divider--yellow\"></div>\n    <div class=\"header-bar__interaction\">\n      <div class=\"header-bar__align-wrapper\"> <!-- align menu items w/ post's content -->\n        <span class=\"sorting-bar__order";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"postOrder") == "newest_first" || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"postOrder") == "editorial") {
output += " sorting-bar__order--active";
;
}
output += "\" data-js-orderby_editorial>\n          ";
output += runtime.suppressValue((lineno = 42, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["Newest first"])), env.opts.autoescape);
output += "\n        </span>\n        <span class=\"sorting-bar__order";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"postOrder") == "oldest_first") {
output += " sorting-bar__order--active";
;
}
output += "\" data-js-orderby_ascending>\n          ";
output += runtime.suppressValue((lineno = 46, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["Oldest first"])), env.opts.autoescape);
output += "\n        </span>\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"hasHighlights")) {
output += "<span class=\"header-bar__highlight\" data-js-show-highlighted>&#9733; <span>Das Wichtigste</span></span>\n        ";
;
}
output += "</div>\n    </div>\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"canComment")) {
output += "\n        <button class=\"header-bar__comment\" data-js-show-comment-dialog>\n            ";
output += runtime.suppressValue((lineno = 55, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["Comment"])), env.opts.autoescape);
output += "\n        </button>\n      ";
;
}
output += "\n\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"showLiveblogLogo") || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "output")),"logo_url")) {
output += "\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "output")),"logo_url")) {
output += "\n        <div class=\"header-bar__logo\">\n          <img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "output")),"logo_url"), env.opts.autoescape);
output += "\"/>\n        </div>\n        ";
;
}
else {
output += "\n        <a class=\"header-bar__logo\" href=\"https://www.liveblog.pro\" target=\"_blank\">\n          <span>";
output += runtime.suppressValue((lineno = 66, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["Powered by"])), env.opts.autoescape);
output += "</span>\n          <img src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assets_root"), env.opts.autoescape);
output += "images/lb-logo.svg\" />\n        </a>\n        ";
;
}
output += "\n      ";
;
}
output += "\n    </div>\n  <!-- Header End -->\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_timeline_body(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <!-- Timeline -->\n  <div class=\"timeline-body timeline-body--loaded\">\n      <div data-one-new-update class=\"lb-button mod--displaynone\">\n        <div>";
output += runtime.suppressValue((lineno = 85, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["See one new update"])), env.opts.autoescape);
output += "</div>\n      </div>\n      <div data-new-updates class=\"lb-button mod--displaynone\">\n        <div>";
output += runtime.suppressValue((lineno = 88, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["See new updates"])), env.opts.autoescape);
output += "</div>\n      </div>\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"stickyPosition") == "bottom") {
output += "\n      <section data-timeline-sticky class=\"lb-posts list-group sticky";
if(!env.getFilter("length").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "api_response")),"stickyPosts")),"_items"))) {
output += " sticky--empty";
;
}
output += "\">\n        ";
frame = frame.push();
var t_27 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "api_response")),"stickyPosts")),"_items");
if(t_27) {t_27 = runtime.fromIterator(t_27);
var t_26 = t_27.length;
for(var t_25=0; t_25 < t_27.length; t_25++) {
var t_28 = t_27[t_25];
frame.set("item", t_28);
frame.set("loop.index", t_25 + 1);
frame.set("loop.index0", t_25);
frame.set("loop.revindex", t_26 - t_25);
frame.set("loop.revindex0", t_26 - t_25 - 1);
frame.set("loop.first", t_25 === 0);
frame.set("loop.last", t_25 === t_26 - 1);
frame.set("loop.length", t_26);
output += "\n          ";
if(!runtime.memberLookup((t_28),"deleted")) {
output += "\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("template-post.html", false, "template-timeline.html", false, function(t_30,t_29) {
if(t_30) { cb(t_30); return; }
callback(null,t_29);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_32,t_31) {
if(t_32) { cb(t_32); return; }
callback(null,t_31);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n          ";
});
}
output += "\n        ";
;
}
}
frame = frame.pop();
output += "\n      </section>\n    ";
;
}
output += "\n      <div data-empty-message class=\"lb-post empty-message ";
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "api_response")),"posts")),"_items"))) {
output += "mod--displaynone";
;
}
output += "\">\n        <div>";
output += runtime.suppressValue((lineno = 100, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["No posts for now"])), env.opts.autoescape);
output += "</div>\n      </div>\n      <section data-timeline-normal class=\"lb-posts list-group normal\">\n        ";
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "api_response")),"posts")),"_items")) > 0) {
output += "\n            ";
frame = frame.push();
var t_35 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "api_response")),"posts")),"_items");
if(t_35) {t_35 = runtime.fromIterator(t_35);
var t_34 = t_35.length;
for(var t_33=0; t_33 < t_35.length; t_33++) {
var t_36 = t_35[t_33];
frame.set("item", t_36);
frame.set("loop.index", t_33 + 1);
frame.set("loop.index0", t_33);
frame.set("loop.revindex", t_34 - t_33);
frame.set("loop.revindex0", t_34 - t_33 - 1);
frame.set("loop.first", t_33 === 0);
frame.set("loop.last", t_33 === t_34 - 1);
frame.set("loop.length", t_34);
output += "\n              ";
if(!runtime.memberLookup((t_36),"deleted")) {
output += "\n                ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("template-post.html", false, "template-timeline.html", false, function(t_38,t_37) {
if(t_38) { cb(t_38); return; }
callback(null,t_37);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_40,t_39) {
if(t_40) { cb(t_40); return; }
callback(null,t_39);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n              ";
});
}
output += "\n            ";
;
}
}
frame = frame.pop();
output += "\n        ";
;
}
output += "\n      </section>\n      ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "api_response")),"posts")),"_meta")),"max_results") < runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "api_response")),"posts")),"_meta")),"total")) {
output += "\n        <button data-load-more class=\"lb-button load-more-posts\">\n            ";
output += runtime.suppressValue((lineno = 113, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "translate"), "translate", context, ["Load more posts"])), env.opts.autoescape);
output += "\n        </button>\n      ";
;
}
output += "\n  </div>\n  <!-- Timeline End -->\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_timeline_top: b_timeline_top,
b_timeline_header: b_timeline_header,
b_timeline_body: b_timeline_body,
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["template.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<!-- inject:template-content -->\n<!-- endinject -->\n<!-- inject:template-analytics -->\n<!-- endinject -->\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
