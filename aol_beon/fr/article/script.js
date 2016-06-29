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
        location: "#rectangle1_article_0a437023-cf25-4dae-95f0-9672f900ad77",
        infoText: "",
        infoButtonText: "",
        template: templates.large1,
        onRender: function($element) {
            $element.next().remove();
            // // Fallback img
            // var req = new XMLHttpRequest();
            // req.open('GET', $element, true);
            // req.send(null);
            // var headers = req.getAllResponseHeaders().toLowerCase();
            // if (headers.indexOf("video") < 0) {
            //     jQuery(".polar-video img").css({
            //         "display": "initial"
            //     });
            // }
        },
        onFill: function(data) {},
        onError: function(error) {}
    }]);
    q().push(["injectCSS", ["",
        ".plr-large-video .plr-outer {",
        "  background-color: #efefef;",
        "  padding: 15px;",
        "  position: relative;",
        "  height: 400px;",
        "  width: 300px; }",
        ".plr-large-video .plr-title {",
        "  color: black;",
        "  font-size: 22px;",
        "  margin-top: 10px; }",
        ".plr-large-video .plr-title:hover {",
        "  text-decoration: underline; }",
        ".plr-large-video .plr-video iframe {",
        "  width: 300px;",
        "  height: 170px;",
        "  margin-left: -15px;",
        "  margin-top: -15px;",
        "  border: none; }",
        ".plr-large-video .plr-logo {",
        "  position: absolute;",
        "  right: 15px;",
        "  height: 26px;",
        "  bottom: 15px; }",
        ".plr-large-video .plr-sponsored {",
        "  margin-top: 26px; }",
        ".plr-large-video .plr-label {",
        "  position: absolute;",
        "  bottom: 15px;",
        "  font-size: 19px;",
        "  left: 15px; }",
        ""
    ].join("\n"), "head"]);

    /* jshint ignore:start */
    function generate_templates() {
        templates.large1 = function(Handlebars, depth0, helpers, partials, data) {
            this.compilerInfo = [4, '>= 1.0.0'];
            helpers = this.merge(helpers, Handlebars.helpers);
            data = data || {};
            var buffer = "",
                stack1, stack2, functionType = "function",
                escapeExpression = this.escapeExpression;


            buffer += "<div class=\"plr-large-video\">\n    <div class=\"plr-outer\">\n        <div class=\"plr-video\">\n            <iframe src=\"" + escapeExpression(((stack1 = ((stack1 = depth0.custom), stack1 == null || stack1 === false ? stack1 : stack1.Video_URL)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + "\"></iframe>\n            <img src=\"";
            if (stack2 = helpers.getThumbHref) { stack2 = stack2.call(depth0, { hash: {}, data: data }); } else {
                stack2 = depth0.getThumbHref;
                stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
            }
            buffer += escapeExpression(stack2) + "\" style=\"display:none;\">\n        </div>\n        <a href=\"";
            if (stack2 = helpers.link) { stack2 = stack2.call(depth0, { hash: {}, data: data }); } else {
                stack2 = depth0.link;
                stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
            }
            buffer += escapeExpression(stack2) + "\">\n            <div class=\"plr-title\">";
            if (stack2 = helpers.title) { stack2 = stack2.call(depth0, { hash: {}, data: data }); } else {
                stack2 = depth0.title;
                stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
            }
            buffer += escapeExpression(stack2) + "</div>\n        </a>\n        <div class=\"plr-summary\">";
            if (stack2 = helpers.summary) { stack2 = stack2.call(depth0, { hash: {}, data: data }); } else {
                stack2 = depth0.summary;
                stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
            }
            buffer += escapeExpression(stack2) + "</div>\n        <div class=\"plr-sponsored\">\n            <div class=\"plr-label\">Promoted</div>\n            <img class=\"plr-logo\" src=\"" + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.sponsor), stack1 == null || stack1 === false ? stack1 : stack1.logo)), stack1 == null || stack1 === false ? stack1 : stack1.href)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + "\">\n        </div>\n    </div>\n</div>";
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
