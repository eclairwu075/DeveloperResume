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
        //aboutContent_html: '<div class="about-content">ABOUT ME</div>',
        //skillContent_html: '<div class="skill-content">SKILLS</div>',
        //projectContent_html: '<div class="project-content">PROJECT</div>',
        tabs: [{tabName: "About", id: "about"}, {tabName: "Skill", id: "skill"}, {tabName: "Project", id: "project"}]
    }, jqueryMap = {
        $container: null,
        $tabContainer: null,
        $contentContainer: null
    }, init, setJqueryMap, renderTab, renderContent, onTabClick;

    setJqueryMap = function ($container) {
        jqueryMap.$container = $container;
        jqueryMap.$tabContainer = $container.find("#tab-container");
        jqueryMap.$contentContainer = $container.find("#content-container");
    };

    renderTab = function () {
        var $title = $(configMap.title_html);
        jqueryMap.$tabContainer.append($title);
        configMap.tabs.forEach(function (tab) {
            var $tab = $(configMap.tab_html);
            $tab.data("id", tab.id);
            $tab.html(tab.tabName);
            jqueryMap.$tabContainer.append($tab);
        })
    };

    renderContent = function () {
        var $content = $(configMap.homeContent_html);
        jqueryMap.$contentContainer.html($content);
    };

    onTabClick = function () {
        var $this = $(this);
        var contentId=$this.data("id");
        home[contentId].init(jqueryMap.$contentContainer);
        //jqueryMap.$contentContainer.html(configMap[$this.data("id")+"Content_html"]);
        console.log($this.data("id"));
    };

    init = function ($container) {
        $container.html(configMap.main_html);
        setJqueryMap($container);
        renderTab();
        renderContent();
        jqueryMap.$tabContainer.on("click", ".tab", onTabClick);
    };

    return {init: init}
})();



