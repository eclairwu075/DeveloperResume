package idv.ew.site.controller.rest;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import idv.ew.site.model.Message;
import idv.ew.site.model.MessageBean;
import idv.ew.site.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Eclair
 * on 2019/6/19.
 */
@RestController
@RequestMapping("/rest/message")
public class MessageController {
    @Autowired
    MessageService messageService;

    @Autowired
    ObjectMapper objectMapper;

    @GetMapping(path = "/findAll")
    public JsonNode findAll() {
        return objectMapper.valueToTree(messageService.findAll());
    }

    @PostMapping(path = "/addOne")
    public JsonNode addOne(@RequestBody MessageBean messageBean) {
//        Message message = new Message(messageBean.getName(),messageBean.getContent());

//        Message message = new Message();
//        message.setName(messageBean.getName());
//        message.setContent(messageBean.getContent());
//        return objectMapper.valueToTree(messageService.addOne(message));
        return objectMapper.valueToTree(
                messageService.addOne(
                        new Message(messageBean.getName(), messageBean.getContent())));
    }
}
