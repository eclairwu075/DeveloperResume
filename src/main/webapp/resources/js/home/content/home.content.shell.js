/**
 * Created by Eclair on 2019/6/11.
 *
 */

home.content.shell = (function () {
    var configMap = {
        main_html: '<div class="home-content">HOME CONTENT</div>'


    }, jqueryMap = {
        $container: null
    }, init, changeContentByKey, setJqueryMap;

    setJqueryMap = function ($container) {
        jqueryMap.$container = $container;
    };

    changeContentByKey = function (key) {
        if (key == "messageBoard") {
            home.content.messageBoard.shell.init(jqueryMap.$container);
        } else {
            home.content[key].init(jqueryMap.$container);
        }
    };

    init = function ($container) {
        $container.html(configMap.main_html);
        setJqueryMap($container);
        //一進來就到about
        changeContentByKey("about");
    };

    return {
        init: init,
        changeContentByKey: changeContentByKey
    };
})();