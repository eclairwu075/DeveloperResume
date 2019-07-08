package idv.ew.site.repositories;

import idv.ew.site.model.Reply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Eclair
 * on 2019/7/8.
 */
@Repository
public interface ReplyRepository extends JpaRepository<Reply, Long> {

    Reply findOneById(Long id);
}
