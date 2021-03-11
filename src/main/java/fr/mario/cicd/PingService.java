package fr.mario.cicd;

import org.springframework.stereotype.Component;

@Component
public class PingService {

    public String pingPlus(PingBody body) {
        return body.getText() + " - " + body.getText();
    }
}
