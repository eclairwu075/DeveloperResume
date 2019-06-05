package idv.ew.site.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by Eclair
 * on 2019/5/30.
 */
@Controller
public class ViewController {

    @GetMapping(value = {"/"})
    public String home(){
        return "home";
    }

}
