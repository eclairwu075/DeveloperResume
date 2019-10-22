package idv.ew.site.model;

import java.util.ArrayList;
import java.util.List;

public class MessageBean extends BaseEntityBean{

    public MessageBean(){

    }

    public MessageBean(String name, String content, List<Reply> replies) {
        this.name = name;
        this.content = content;
        this.replies = replies;
    }

    private String name;

    private String content;

    private List<Reply> replies = new ArrayList<>();

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

    public List<Reply> getReplies() {
        return replies;
    }

    public void setReplies(List<Reply> replies) {
        this.replies = this.replies;
    }

}
