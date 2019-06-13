/**
 * Created by Eclair on 2019/6/11.
 *
 */

home.content.messageBoard.shell = (function () {

    var configMap = {

            main_html: '<div class="message-board-container">' +
            '<div class="writing-wrapper"></div><div class="message-wrapper"></div></div>',
            writing_html: '<div class="title">Leave a message</div>' +
            '<div class="writing-container">' +
            '<div class="name">name</div>' +
            '<div class="content">comments...</div>' +
            '<button class="submit-btn">送出</button></div>' +
            '<div class="gray-block"></div>',
            message_html: '<div class="message-container">' +
            '<div class="name">Eclair Wu</div>' +
            '<div class="date">2019/6/12 08:20</div>' +
            '<div class="content">努力..加油...QQ</div>' +
            '<button class="reply-btn">回覆</button>'
        }, init, jqueryMap = {
            $container: null,
            $messageBoardContainer: null,
            $writingWrapper: null,
            $messageWrapper: null
        },
        setJqueryMap, renderWritingContainer, renderMessageContainer;

    setJqueryMap = function ($container) {
        jqueryMap.$container = $container;
        jqueryMap.$messageBoardContainer = $container.find(".message-board-container");
        jqueryMap.$writingWrapper = $container.find(".writing-wrapper");
        jqueryMap.$messageWrapper = $container.find(".message-wrapper");
    };

    renderWritingContainer = function () {
        var $writing = $(configMap.writing_html);
        jqueryMap.$writingWrapper.html($writing);
    };

    renderMessageContainer = function () {
        var $message = $(configMap.message_html);
        jqueryMap.$messageWrapper.html($message);
    };

    init = function ($container) {
        $container.html(configMap.main_html);
        setJqueryMap($container);
        renderWritingContainer();
        renderMessageContainer();
    };
    return {init: init}
})();