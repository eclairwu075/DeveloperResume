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
            '<input class="name" maxlength="12" type="text" placeholder="name" />' +
            '<textarea class="content" maxlength="150" placeholder="comments..." />' +
            '<button class="submit-btn">送出</button></div>' +
            '<div class="gray-block"></div>',
            message_html: '<div class="message-container">' +
            '<div class="name"></div>' +
            '<div class="date"></div>' +
            '<div class="content"></div>' +
            '<button class="reply-btn">回覆</button>',
            reply_html: '<div class="reply-container">' +
            '<div class="name"></div>' +
            '<div class="date"></div>' +
            '<div class="content"></div></div>',
            replyInput_html: '<div class="reply-input">' +
            '<input class="name" maxlength="12" type="text" placeholder="name" />' +
            '<textarea class="content" maxlength="150" placeholder="comments..." />' +
            '<button class="submit-btn">送出</button></div>' +
            '</div>',
            replyBtn_html: '<button class="reply-btn">回覆</button>',
            cancelBtn_html: '<button class="cancel-btn">取消</button>',
            getAllMessage_url: '/rest/message/findAll',
            addMessage_url: '/rest/message/addOne',
            addReply_url: '/rest/reply/addOne'
        },
        stateMap = {
            allMessage: null,
            allReply: null
        }, init, jqueryMap = {
            $container: null,
            $messageBoardContainer: null,
            $writingWrapper: null,
            $messageWrapper: null
        },
        setJqueryMap, renderWritingContainer, renderMessageContainer, renderReplyContainer, buildReply,
        onMessageSubmitClick, onReplyClick, onReplySubmitClick, onCancelClick, cancelReplyMode;

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

    renderMessageContainer = function (message) {
        var $message = $(configMap.message_html);
        $message.data("id", message.id);
        $message.find(".name").html(message.name);
        $message.find(".date").html(message.createDate);
        $message.find(".content").html(message.content);
        message.replies.forEach(function (reply) {
            $message.append(buildReply(reply));
        });
        jqueryMap.$messageWrapper.prepend($message);
    };

    renderReplyContainer = function ($messageContainer, reply) {
        $messageContainer.append(buildReply(reply));
    };

    buildReply = function (reply) {
        var $reply = $(configMap.reply_html);
        $reply.find(".name").html(reply.name);
        $reply.find(".date").html(reply.createDate);
        $reply.find(".content").html(reply.content);
        return $reply;
    };

    onMessageSubmitClick = function () {
        var $writingContainer = $(this).parents(".writing-container");
        var $name = $writingContainer.find(".name");
        var $content = $writingContainer.find(".content");
        if ($name.val().trim().length == 0) {
            alert("留言請輸入姓名");
        } else if ($content.val().trim().length == 0) {
            alert("留言請輸入內容");
        } else(
            $.ajax({
                type: "POST",
                url: configMap.addMessage_url,
                data: JSON.stringify({name: $name.val(), content: $content.val()}),
                contentType: "application/json"
            }).then(function (response) {
                renderMessageContainer(response);
                $name.val("");
                $content.val("");
            })
        );
    };

    onReplySubmitClick = function () {
        var $this = $(this);
        var $replyInput = $this.parents(".reply-input");
        var $name = $replyInput.find(".name");
        var $content = $replyInput.find(".content");
        var $messageContainer = $this.parents(".message-container");
        if ($name.val().trim().length == 0) {
            alert("回覆請輸入姓名");
        } else if ($content.val().trim().length == 0) {
            alert("回覆請輸入內容");
        } else(
            $.ajax({
                type: "POST",
                url: configMap.addReply_url + "/" + $messageContainer.data("id"),
                data: JSON.stringify({name: $name.val(), content: $content.val()}),
                contentType: "application/json"
            }).then(function (response) {
                cancelReplyMode($messageContainer);
                console.log(response.id);
                renderReplyContainer($messageContainer, response);
            })
        );
    };

    onReplyClick = function () {
        var $messageContainer = $(this).parents(".message-container");
        $messageContainer.append(configMap.replyInput_html);
        $messageContainer.append(configMap.cancelBtn_html);
        $messageContainer.find(".reply-btn").remove();
    };

    cancelReplyMode = function ($messageContainer) {
        $messageContainer.find(".cancel-btn").remove();
        $messageContainer.find(".reply-input").remove();
        $messageContainer.prepend(configMap.replyBtn_html);
    };

    onCancelClick = function () {
        cancelReplyMode($(this).parents(".message-container"));
    };

    init = function ($container) {
        $container.html(configMap.main_html);
        setJqueryMap($container);
        renderWritingContainer();
        $.get(configMap.getAllMessage_url).then(function (response) {
            stateMap.allMessage = response;
            stateMap.allMessage.forEach(function (message) {
                renderMessageContainer(message);
            });
        });
        //jqueryMap.$writingWrapper.find(".submit-btn").click(onSubmitClick);
        jqueryMap.$writingWrapper.on("click", ".submit-btn", onMessageSubmitClick);
        jqueryMap.$messageWrapper.on("click", ".reply-btn", onReplyClick);
        jqueryMap.$messageWrapper.on("click", ".cancel-btn", onCancelClick);
        jqueryMap.$messageWrapper.on("click", ".submit-btn", onReplySubmitClick);
    };
    return {init: init}
})();