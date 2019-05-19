package dev.koju.shifts;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ForwardController {

    @RequestMapping("/{[path:[^\\.]*}")
    public String redirect() {
        return "forward:/";
    }
}
