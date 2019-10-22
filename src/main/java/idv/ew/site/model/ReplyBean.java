package idv.ew.site.model;

/**
 * Created by Eclair
 * on 2019/6/18.
 */

public class ReplyBean extends BaseEntityBean{

    public ReplyBean() {
    }

    public ReplyBean(String name, String content) {
        this.name = name;
        this.content = content;
    }

    private String name;

    private String content;

    private Message messageBean;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Message getMessageBean() {
        return messageBean;
    }

    public void setMessageBean(Message messageBean) {
        this.messageBean = messageBean;
    }
}
