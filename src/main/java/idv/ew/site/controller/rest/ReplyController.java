package idv.ew.site.controller.rest;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import idv.ew.site.model.Message;
import idv.ew.site.model.Reply;
import idv.ew.site.model.ReplyBean;
import idv.ew.site.service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Eclair
 * on 2019/7/8.
 */
@RestController
@RequestMapping("rest/reply")
public class ReplyController {
    @Autowired
    ReplyService replyService;

    @Autowired
    ObjectMapper objectMapper;

    //    @PostMapping(path = "/addOne/{messageId}")
//    public JsonNode addOne(@RequestBody Reply reply
//        , @PathVariable(name = "messageId") Long messageId) {
//        Message message = new Message();
//        message.setId(messageId);
//        reply.setMessage(message);
//        return objectMapper.valueToTree(replyService.addOne(reply));
//    }
    @PostMapping(path = "/addOne/{messageId}")
    public JsonNode addOne(@RequestBody ReplyBean replyBean
            , @PathVariable(name = "messageId") Long messageId) {
        Message message = new Message();
        message.setId(messageId);
        Reply reply = new Reply();
        reply.setId(replyBean.getId());
        reply.setMessage(message);
        reply.setName(replyBean.getName());
        reply.setContent(replyBean.getContent());
        reply.setCreateDate(replyBean.getCreateDate());
        return objectMapper.valueToTree(replyService.addOne(reply));
    }

    //練習
    @GetMapping(path = "/findOne/{replyId}")
    public JsonNode findOne(@PathVariable(name = "replyId") Long replyId) {
        return objectMapper.valueToTree(replyService.findOne(replyId));
    }

}
