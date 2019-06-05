/**
 * Created by Eclair on 2019/6/5.
 *
 */

home.project = (function () {

    var configMap = {

        main_html: '<div class="project-content">project!project!project!</div>'
    }, init;

    init = function ($container) {
        $container.html(configMap.main_html);
    };
    return {init: init}
})();