/**
 * Created by Eclair on 2019/5/31.
 *
 */
home.shell = (function () {

    var configMap = {
        main_html: '<div id="tab-container"></div><div id="content-container"></div>',
        title_html: '<div class="title">吳怡賢</div>',
        tab_html: '<div class="tab"></div>',
        homeContent_html: '<div class="home-content">HOME CONTENT</div>',
        aboutContent_html: '<div class="about-content">ABOUT ME</div>',
        tabNames: ['About', 'Skill', 'Project']
    }, jqueryMap = {
        $container: null,
        $tabContainer: null,
        $contentContainer: null
    }, init, setJqueryMap, renderTab, renderContent;

    setJqueryMap = function ($container) {
        jqueryMap.$container = $container;
        jqueryMap.$tabContainer = $container.find("#tab-container");
        jqueryMap.$contentContainer = $container.find("#content-container");
    };

    renderTab = function () {
        var $title = $(configMap.title_html);
        jqueryMap.$tabContainer.append($title);
        configMap.tabNames.forEach(function (tabName) {
            var $tab = $(configMap.tab_html);
            $tab.html(tabName);
            jqueryMap.$tabContainer.append($tab);
        })
    };

    renderContent = function () {
        var $content = $(configMap.homeContent_html);
        jqueryMap.$contentContainer.html($content);
    };

    init = function ($container) {
        $container.html(configMap.main_html);
        setJqueryMap($container);
        renderTab();
        renderContent();
    };

    return {init: init}
})();



