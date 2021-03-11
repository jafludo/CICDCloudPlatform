package fr.mario.cicd;

import javax.validation.constraints.NotEmpty;

public class PingBody {
    @NotEmpty
    private String text;

    public PingBody() {
    }

    public PingBody(@NotEmpty String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
