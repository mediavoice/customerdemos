function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"plr-small-video\">\n    <div class=\"plr-outer\">\n        <a href=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n            <div class=\"plr-title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n        </a>\n        <div class=\"plr-video\">\n            <iframe src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.custom),stack1 == null || stack1 === false ? stack1 : stack1.Video_URL)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></iframe>\n            <img src=\"";
  if (stack2 = helpers.getThumbHref) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.getThumbHref; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" style=\"display:none;\">\n        </div>\n        <div class=\"plr-sponsored\">\n            <div class=\"plr-label\">Promoted</div>\n            <img class=\"plr-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.sponsor),stack1 == null || stack1 === false ? stack1 : stack1.logo)),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        </div>\n    </div>\n</div>";
  return buffer;
  }
