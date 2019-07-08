package idv.ew.site.controller.rest;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import idv.ew.site.model.Message;
import idv.ew.site.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
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
    public JsonNode addOne(@RequestBody Message message) {
        return objectMapper.valueToTree(messageService.addOne(message));
    }
}
