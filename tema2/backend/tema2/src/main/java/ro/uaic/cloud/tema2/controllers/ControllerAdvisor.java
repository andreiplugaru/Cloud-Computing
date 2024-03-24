package ro.uaic.cloud.tema2.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.uaic.cloud.tema2.dtos.ErrorResponse;
import ro.uaic.cloud.tema2.exceptions.EdenResponseException;
import ro.uaic.cloud.tema2.exceptions.MultiavatarException;

@ControllerAdvice
public class ControllerAdvisor {
    @ResponseBody
    @ExceptionHandler({
          EdenResponseException.class,
            MultiavatarException.class
    })
    public ResponseEntity<ErrorResponse> exceptionHandler(RuntimeException ex) {

        return new ResponseEntity<>(new ErrorResponse(ex.getMessage()), HttpStatus.BAD_REQUEST);
    }
}
