package fr.mario.cicd;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class Api {

    @Autowired
    private PingService pingService;

    @PostMapping("/ping")
    public String pingPlus(@Valid @RequestBody PingBody body) {
        return pingService.pingPlus(body);
    }

}
