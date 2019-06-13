/**
 * Created by Eclair on 2019/5/31.
 *
 */
home.shell = (function () {

    var configMap = {
        main_html: '<div id="tab-container"></div><div id="content-container"></div><div id="go-message-board-icon-container"></div>',
        title_html: '<div class="title">吳怡賢</div>',
        tab_html: '<div class="tab"></div>',
        goMessageBoardIcon_html: '<img src="/resources/img/home/messageBoardIconBlack.png"/>',
        tabs: [{tabName: "About", id: "about"}, {tabName: "Skill", id: "skill"}, {tabName: "Project", id: "project"}]
    }, jqueryMap = {
        $container: null,
        $tabContainer: null,
        $contentContainer: null,
        $goMessageBoardIconContainer: null
    }, init, setJqueryMap, renderTab, renderGoMessageBoardIcon, onTitleClick, onTabClick, onImgClick, changeContent, changeMessageBoardIcon;

    setJqueryMap = function ($container) {
        jqueryMap.$container = $container;
        jqueryMap.$tabContainer = $container.find("#tab-container");
        jqueryMap.$contentContainer = $container.find("#content-container");
        jqueryMap.$goMessageBoardIconContainer = $container.find("#go-message-board-icon-container")
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

    renderGoMessageBoardIcon = function () {
        var $icon = $(configMap.goMessageBoardIcon_html);
        $icon.data("id", "messageBoard");
        jqueryMap.$goMessageBoardIconContainer.html($icon);
    };

    onTitleClick = function () {
        home.content.shell.init(jqueryMap.$contentContainer);
        $(this).siblings().removeClass("active");
        changeMessageBoardIcon(false);
    };

    onTabClick = function () {
        var $this = $(this);
        changeContent($this);
        $this.siblings().removeClass("active");
        $this.addClass("active");
        changeMessageBoardIcon(false);
    };

    onImgClick = function () {
        var $this = $(this);
        changeContent($this);
        jqueryMap.$tabContainer.find(".active").removeClass("active");
        changeMessageBoardIcon(true);
    };

    changeMessageBoardIcon = function (isActive) {
        if (isActive) {
            jqueryMap.$goMessageBoardIconContainer.find("img").attr("src", "/resources/img/home/messageBoardIconWhite.png");
        } else {
            jqueryMap.$goMessageBoardIconContainer.find("img").attr("src", "/resources/img/home/messageBoardIconBlack.png");
        }
    };

    changeContent = function ($this) {
        var contentId = $this.data("id");
        console.log(contentId);
        home.content.shell.changeContentByKey(contentId);
    };

    init = function ($container) {
        $container.html(configMap.main_html);
        setJqueryMap($container);
        renderTab();
        home.content.shell.init(jqueryMap.$contentContainer);
        renderGoMessageBoardIcon();
        jqueryMap.$tabContainer.on("click", ".title", onTitleClick);
        jqueryMap.$tabContainer.on("click", ".tab", onTabClick);
        jqueryMap.$goMessageBoardIconContainer.on("click", "img", onImgClick);
    };

    return {init: init}
})();



