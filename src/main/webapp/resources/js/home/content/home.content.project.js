/**
 * Created by Eclair on 2019/6/5.
 *
 */

home.content.project = (function () {

    var configMap = {

        main_html: '<div class="project-container">' +
        '<div class="project-div">' +
        '<div class="title">DeveloperResume <span>( 2019 )</span></div>' +
        '<div>簡單自我介紹的網頁，右下角有留言版功能。</div>' +
        '<div><a href="http://devresume.southeastasia.cloudapp.azure.com/">http://devresume.southeastasia.cloudapp.azure.com/</a></div>' +
        '<div>使用：</div>' +
        '<ul><li>前端：jQuery、Scss</li>' +
        '<li>後端：Java、Spring Boot、Restful</li>' +
        '<li>資料庫：MsSql</li></ul>' +
        '<img style="width: 310px;" src="/resources/img/home/developerresume.jpg">' +
        '</div>' +

        '<div class="project-div">' +
        '<div class="title">ProjectName <span>( 1000年 資策會小組專題 )</span></div>' +
        '<div>專案功能介紹，介紹介紹介紹，介紹介紹介紹。</div>' +
        '<div>使用Spring, Hibernate。</div>' +
        '<div>負責：</div>' +
        '<ul><li>某A系統、某B系統、某C功能</li>' +
        '<li>某某東西、某某東西</li></ul><br><br>' +
        '<img src="/resources/img/home/groupbuy.jpg">' +
        '</div></div>'

    }, init;

    init = function ($container) {
        $container.html(configMap.main_html);
    };
    return {init: init}
})();