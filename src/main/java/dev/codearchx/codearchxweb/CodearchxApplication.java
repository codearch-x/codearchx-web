package dev.codearchx.codearchxweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import static org.springframework.core.Ordered.LOWEST_PRECEDENCE;

@Controller
@SpringBootApplication
public class CodearchxApplication implements WebMvcConfigurer {

    public static void main(String[] args) {
        SpringApplication.run(CodearchxApplication.class, args);
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/**").setViewName("index");
        registry.setOrder(LOWEST_PRECEDENCE);
    }
}
