/**
 * Created by Eclair on 2019/6/5.
 *
 */

home.content.skill = (function () {

    var configMap = {

        main_html: '<div class="skill-container">' +
            '<div class="left-part">' +
            '<div>後端</div>' +
            '<div>前端</div>' +
            '<div>資料庫</div>' +
            '<div>其他</div></div>' +

            '<div class="right-part">' +
            '<div>Java, Spring, Spring Boot, Restful</div>' +
            '<div>jQuery, JavaScript, Scss</div>' +
            '<div>MsSql</div>' +
            '<div>IntelliJ</div></div>' +
            '</div>'
    }, init;

    init = function ($container) {
        $container.html(configMap.main_html);
    };
    return {init: init}
})();