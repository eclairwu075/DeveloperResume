/**
 * Created by Eclair on 2019/6/5.
 *
 */

home.content.skill = (function () {

    var configMap = {

        main_html: '<div class="skill-container">skill!!</div>'
    }, init;

    init = function ($container) {
        $container.html(configMap.main_html);
    };
    return {init: init}
})();