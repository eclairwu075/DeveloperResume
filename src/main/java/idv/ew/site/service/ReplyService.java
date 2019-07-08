package idv.ew.site.service;

import idv.ew.site.model.Reply;
import org.springframework.stereotype.Service;

/**
 * Created by Eclair
 * on 2019/7/8.
 */
@Service
public interface ReplyService {
    Reply addOne(Reply reply);
    Reply findOne(Long id);
}
