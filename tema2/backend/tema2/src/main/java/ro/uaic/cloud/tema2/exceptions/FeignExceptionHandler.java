package ro.uaic.cloud.tema2.exceptions;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import feign.FeignException;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import ro.uaic.cloud.tema2.utils.ErrorResponse;

import java.util.Map;

@RestControllerAdvice
public class FeignExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler({FeignException.class})
    public ResponseEntity<ErrorResponse> handleProductServiceNotAvailableException(FeignException exception, WebRequest request) {
        ObjectMapper mapper = new ObjectMapper();
        Map<String, Object> map;
        try {
            map = mapper.readValue(exception.contentUTF8(), Map.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        return new ResponseEntity<>(new ErrorResponse(
                exception.status(),
                map.get("message").toString(),
                request.getDescription(false)),
                HttpStatusCode.valueOf(exception.status()));
    }
}
