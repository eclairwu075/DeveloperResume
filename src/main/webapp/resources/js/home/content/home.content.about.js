/**
 * Created by Eclair on 2019/6/5.
 *
 */

home.content.about = (function () {

    var configMap = {

        main_html: '<div class="about-container">' +
        '' +
        '<div class="left-part">' +
        '<div>生日</div>' +
        '<div>信箱</div>' +
        '<div>手機</div>' +
        '<div>地址</div>' +
        '<br>' +
        '<div>學經歷</div>' +
        '<div>資策會結訓</div>' +
        '<div>中華高中</div>' +
        '</div>' +
        '<div class="right-part">' +

        '</div>'
    }, init;

    init = function ($container) {
        $container.html(configMap.main_html);
    };
    return {init: init}
})();