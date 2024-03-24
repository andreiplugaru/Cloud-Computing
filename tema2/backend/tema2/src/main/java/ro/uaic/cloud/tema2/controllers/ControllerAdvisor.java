package ro.uaic.cloud.tema2.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import ro.uaic.cloud.tema2.exceptions.EdenResponseException;

@RestControllerAdvice
public class ControllerAdvisor {
    @ResponseBody
    @ExceptionHandler({
          EdenResponseException.class
    })
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String edenExceptionHandler(RuntimeException ex) {
        return ex.getMessage();
    }
}
