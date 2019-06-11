/**
 * Created by Eclair on 2019/6/11.
 *
 */

home.content.messageboard = (function () {

    var configMap = {

        main_html: '<div class="message-board-content">message board</div>'
    }, init;

    init = function ($container) {
        $container.html(configMap.main_html);
    };
    return {init: init}
})();