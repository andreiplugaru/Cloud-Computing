package ro.uaic.cloud.tema2.utils;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.util.Date;
@RequiredArgsConstructor
public class ErrorResponse {

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private Date timestamp = new Date();

    @JsonProperty(value = "code")
    private final int code;

    @JsonProperty(value = "message")
    private final String message;

    @JsonProperty(value = "details")
    private final String details;
}