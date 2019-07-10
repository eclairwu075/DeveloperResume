package idv.ew.site.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

/**
 * Created by Eclair
 * on 2019/6/18.
 */

@Entity
@Table(name = "Reply")
@JsonIgnoreProperties(value = {"message"})
public class Reply extends BaseEntity {

    public Reply() {
    }

    public Reply(String name, String content) {
        this.name = name;
        this.content = content;
    }

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "content", nullable = false, columnDefinition = "nvarchar(MAX)")
    private String content;

    @ManyToOne
    @JoinColumn(name = "message_id")
    private Message message;

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

    public Message getMessage() {
        return message;
    }

    public void setMessage(Message message) {
        this.message = message;
    }
}
