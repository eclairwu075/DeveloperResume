/**
 * Created by Eclair on 2019/6/5.
 *
 */

home.content.about = (function () {

    var configMap = {

        main_html: '<div class="about-content">ABOUT ME</div>'
    }, init;

    init = function ($container) {
        $container.html(configMap.main_html);
    };
    return {init: init}
})();