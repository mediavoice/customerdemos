(function() {

    var templates = {};
    generate_templates();

    window.NATIVEADS = window.NATIVEADS || {};
    window.NATIVEADS_QUEUE = window.NATIVEADS_QUEUE || [];

    var q = function() {
        return window.NATIVEADS_QUEUE;
    };

    var ad = { "server": "mvdirect", "id": "429f6f91202044bf95eccbe40384b283" };

    q().push(["setPropertyID", "NA-AOLBEONDEMO-11238021"]);
    q().push(["setSecondaryPageURL", "/sample/publisher/sponsored.html"]);

    q().push(["insertPreview", {
        label: "Home",
        unit: ad,
        location: "#main > div.todaystripe.grid.loaded.layout-none > ul > li.pos9.smalla.smalla-twoimages.media.photo",
        infoText: "",
        infoButtonText: "",
        template: templates.small1,
        onRender: function($element) {
            $element.next().remove();
        },
        onFill: function(data) {},
        onError: function(error) {}
    }]);
    q().push(["injectCSS", ["",
        ".plr-small-video .plr-outer {",
        "  position: absolute;",
        "  top: 0;",
        "  right: 2rem;",
        "  width: 30.7rem;",
        "  height: 260px;",
        "  padding: 10px 20px;",
        "  border-bottom: #dfdfdd 1px solid;",
        "  border-right: 1px solid #dfdfdd;",
        "  background-color: white; }",
        ".plr-small-video .plr-title {",
        "  font-size: 20px;",
        "  height: 65px;",
        "  margin: auto; }",
        "  .plr-small-video .plr-title:hover {",
        "    text-decoration: underline; }",
        ".plr-small-video .plr-video iframe {",
        "  width: 26.7rem;",
        "  border: none;",
        "  height: 145px; }",
        ".plr-small-video .plr-sponsored .plr-label {",
        "  display: inline-block;",
        "  position: absolute;",
        "  bottom: 10px;",
        "  left: 20px; }",
        ".plr-small-video .plr-sponsored .plr-logo {",
        "  height: 20px;",
        "  position: absolute;",
        "  right: 20px;",
        "  bottom: 10px; }",
        ""
    ].join("\n"), "head"]);

    /* jshint ignore:start */
    function generate_templates() {
        templates.small1 = function(Handlebars, depth0, helpers, partials, data) {
            this.compilerInfo = [4, '>= 1.0.0'];
            helpers = this.merge(helpers, Handlebars.helpers);
            data = data || {};
            var buffer = "",
                stack1, stack2, functionType = "function",
                escapeExpression = this.escapeExpression;


            buffer += "<div class=\"plr-small-video\">\n    <div class=\"plr-outer\">\n        <a href=\"";
            if (stack1 = helpers.link) { stack1 = stack1.call(depth0, { hash: {}, data: data }); } else {
                stack1 = depth0.link;
                stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
            }
            buffer += escapeExpression(stack1) + "\">\n            <div class=\"plr-title\">";
            if (stack1 = helpers.title) { stack1 = stack1.call(depth0, { hash: {}, data: data }); } else {
                stack1 = depth0.title;
                stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
            }
            buffer += escapeExpression(stack1) + "</div>\n        </a>\n        <div class=\"plr-video\">\n            <iframe src=\"" + escapeExpression(((stack1 = ((stack1 = depth0.custom), stack1 == null || stack1 === false ? stack1 : stack1.Video_URL)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + "\"></iframe>\n            <img src=\"";
            if (stack2 = helpers.getThumbHref) { stack2 = stack2.call(depth0, { hash: {}, data: data }); } else {
                stack2 = depth0.getThumbHref;
                stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
            }
            buffer += escapeExpression(stack2) + "\" style=\"display:none;\">\n        </div>\n        <div class=\"plr-sponsored\">\n            <div class=\"plr-label\">Promoted</div>\n            <img class=\"plr-logo\" src=\"" + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.sponsor), stack1 == null || stack1 === false ? stack1 : stack1.logo)), stack1 == null || stack1 === false ? stack1 : stack1.href)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + "\">\n        </div>\n    </div>\n</div>";
            return buffer;
        }

    }
    /* jshint ignore:end */

    /*==============================
    =            Boiler            =
    ==============================*/

    q().push(["configureSecondaryPage", {
        binding: {
            sponsor: {
                link: "#sponsor-link",
                logo: "#sponsor-logo",
                name: "#sponsor-name"
            },
            title: "#title",
            summary: "#summary",
            content: "#content",
            author: "#author",
            pubDate: "#pub-date",
            image: {
                href: "#media",
                caption: "#media-caption",
                credits: "#media-credits"
            }
        },
        onFill: function(data) {},
        onRender: function() {},
        onError: function(error) {},
        track: function() {}
    }]);
})();

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = d.location.protocol;
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.type = "text/javascript";
    js.async = true;
    js.src = ((p == "https:") ? p : "http:") + "//plugin.mediavoice.com/plugin.js";
    fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "nativeads-plugin");
