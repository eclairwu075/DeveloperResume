package idv.ew.site.controller.rest;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import idv.ew.site.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping(path = "/findAllAndIgnoreReply")
    public JsonNode findAllAndIgnoreReply() {
        return objectMapper.valueToTree(messageService.findAllAndIgnoreReply());
    }

}
