package idv.ew.config;

import idv.ew.site.model.Message;
import idv.ew.site.model.Reply;
import idv.ew.site.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

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
                new Message("Annie", "留言板測試唷！測試測試測試測試測試唷！", Arrays.asList(
                    new Reply("Tom", "嘟嘟嚕～嘟嘟嚕～DDD～嘟嘟嚕～？O_O"),
                    new Reply("Annie", ">_<ㄛ嗯kk")
                )),
                new Message("Jim", "Spring框架是 Java 平台的一個開源的全棧（Full-stack）應用程式框架和控制反轉容器實現，一般被直接稱為 Spring。", Arrays.asList(
                    new Reply("Tom", "@@"),
                    new Reply("Jim", "該框架的一些核心功能理論上可用於任何 Java 應用，但 Spring 還為基於Java企業版平台構建的 Web 應用提供了大量的拓展支援。")
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


