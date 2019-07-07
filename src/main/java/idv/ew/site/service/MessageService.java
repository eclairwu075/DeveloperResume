package idv.ew.site.service;

import idv.ew.site.model.Message;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Eclair
 * on 2019/6/19.
 */
@Service
public interface MessageService {
    //查詢所有message
    List<Message> findAll();

    List<Message> findAllAndIgnoreReply();

    //新增message
    Message addOne(Message message);

    //修改message內容
    Message editOne(Message message);

    //刪除該message
    void deleteOne(Message message);
}
