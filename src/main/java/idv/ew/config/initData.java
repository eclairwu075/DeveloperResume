package idv.ew.config;

import idv.ew.site.model.Message;
import idv.ew.site.model.Reply;
import idv.ew.site.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by Eclair
 * on 2019/6/30.
 */
@Component
public class initData {

    @Autowired
    private Environment environment;

    @Autowired
    private MessageService messageService;

    @Bean(initMethod = "init")
    public void init() {
        Boolean isCreate = environment.getProperty("spring.jpa.hibernate.ddl-auto").equals("create");
        if (isCreate) {
            List<Message> messages = Arrays.asList(
                new Message("Annie", "留言板是不是有點空阿？", Arrays.asList(
                    new Reply("Tom", "yeah"),
                    new Reply("Annie", "yeah?"),
                    new Reply("Jim", "一一一一二二二二三三三三四四四四五五五五六六六六七七七七八八八八九九九九十十十十"),
                    new Reply("Tom", "很空很空很空很空"),
                    new Reply("Jim", "+1"),
                    new Reply("Annie", "k")
                )),
                new Message("Jim", "功能先這樣就好嗎?", Arrays.asList(
                    new Reply("Jim", "沒人理我@@"),
                    new Reply("Tom", "kkkk")
                ))
            );
            for (Message message : messages) {
                for (Reply reply : message.getReplies()) {
                    reply.setMessage(message);
                }
                messageService.addOne(message);
            }
        }
    }
}


