package org.theoliverlear.sigwarthsoftware.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SigwarthSoftwareController {
    @RequestMapping("/")
    public String home() {
        return "home";
    }
}
