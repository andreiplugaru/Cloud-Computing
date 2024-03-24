package ro.uaic.cloud.tema2.exceptions;

public class EdenResponseException extends RuntimeException {
    public EdenResponseException() {
        super("Error parsing response from Eden API.");
    }
}
