package idv.ew.site.service.impl;

import idv.ew.site.model.Reply;
import idv.ew.site.repositories.ReplyRepository;
import idv.ew.site.service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Eclair
 * on 2019/7/8.
 */
@Service
public class ReplyServiceImpl implements ReplyService {

    @Autowired
    ReplyRepository replyRepository;

    @Override
    public Reply addOne(Reply reply) {
        return replyRepository.save(reply);
    }

    public Reply findOne(Long id) {
//        return replyRepository.findById(id).get();
//        return replyRepository.findById(id).orElse(null);
        return replyRepository.findOneById(id);
    }

}
