package idv.ew.site.repositories;

import idv.ew.site.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Eclair
 * on 2019/6/19.
 */
@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

}

