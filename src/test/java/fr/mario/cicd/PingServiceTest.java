package fr.mario.cicd;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PingServiceTest {

    @Test
    void pingPlus() {
        // given
        var pingService = new PingService();
        var text = "Welcome to CI/CD world";
        var body = new PingBody(text);

        var expectedResponse = "Welcome to CI/CD world - Welcome to CI/CD world";

        // when
        String response = pingService.pingPlus(body);

        // then
        Assertions.assertThat(response).isEqualTo(expectedResponse);
    }
}