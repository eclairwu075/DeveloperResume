package idv.ew.site.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Eclair
 * on 2019/6/18.
 */

@Entity
@Table(name = "Message")
public class Message extends BaseEntity {

    public Message() {
    }

    public Message(String name, String content, List<Reply> replies) {
        this.name = name;
        this.content = content;
        this.replies = replies;
    }

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "content", nullable = false, columnDefinition = "nvarchar(MAX)")
    private String content;

    @OneToMany(mappedBy = "message", cascade = CascadeType.ALL)
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
        this.replies = replies;
    }
}
