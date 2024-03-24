package ro.uaic.cloud.tema2.exceptions;

public class MultiavatarException extends RuntimeException {
    public MultiavatarException() {
        super("Error getting avatar for user.");
    }
}