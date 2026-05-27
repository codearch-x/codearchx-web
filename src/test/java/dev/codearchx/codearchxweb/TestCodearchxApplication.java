package dev.codearchx.codearchxweb;

import org.springframework.boot.SpringApplication;

public class TestCodearchxApplication {

    public static void main(String[] args) {
        SpringApplication.from(CodearchxApplication::main).with(TestcontainersConfiguration.class).run(args);
    }

}
