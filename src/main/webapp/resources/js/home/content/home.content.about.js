/**
 * Created by Eclair on 2019/6/5.
 *
 */

home.content.about = (function () {

    var configMap = {

        main_html: '<div class="about-container">' +
        '<div class="left-part">' +
        '<div>生日</div>' +
        '<div>信箱</div>' +
        '<div>手機</div>' +
        '<div>地址</div><br>' +
        '<div>學經歷</div>' +
        '<div>資策會</div>' +
        '<div>XX高中</div><br>' +
        '<div>Github</div>' +
        '</div>' +

        '<div class="right-part">' +
        '<div>1911 / 07 / 05</div>' +
        '<div>email@gmail.com</div>' +
        '<div>0900 - 000 - 000</div>' +
        '<div>新北市汐止區</div><br><br>' +
        '<div>Java養成班OO期 結訓</div>' +
        '<div>00學年 畢業</div><br>' +
        '<div><a target="_blank" href="https://github.com/eclairwu075">https://github.com/eclairwu075</a></div>' +
        '</div>'
    }, init;

    init = function ($container) {
        $container.html(configMap.main_html);
    };
    return {init: init}
})();