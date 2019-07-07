package idv.ew.site.service.impl;

import idv.ew.site.model.Message;
import idv.ew.site.repositories.MessageRepository;
import idv.ew.site.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Eclair
 * on 2019/6/19.
 */
@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    MessageRepository messageRepository;

    //查詢所有message
    @Override
    public List<Message> findAll() {
        return messageRepository.findAll();
    }

    @Override
    public List<Message> findAllAndIgnoreReply() {
        List<Message> messages = messageRepository.findAll();
//        for (Message message : messages) {
//            message.setReplies(null);
//        }
        return messages;
    }

    //新增message
    @Override
    public Message addOne(Message message) {
        return messageRepository.save(message);
    }

    //修改message內容
    @Override
    public Message editOne(Message message) {
        return messageRepository.save(message);
    }

    //刪除該message
    @Override
    public void deleteOne(Message message) {
        messageRepository.delete(message);
    }

    /*
    查詢該message的所有reply
    新增對該message的reply
    修改該message的某一個reply
    刪除該message的某一個reply
    */


}
