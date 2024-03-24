package ro.uaic.cloud.tema2.utils;

import lombok.Getter;

public class ApiEndpoints {
    private final static String LOCAL_HOST = "http://localhost:4000";
    public final static String USER_SERVICE = LOCAL_HOST + "/users";
    public final static String POSTS_SERVICE = LOCAL_HOST + "/posts";
    public final static String LIKES_SERVICE = LOCAL_HOST + "/likes";
    public final static String AI_DETECTION_SERVICE = "https://api.edenai.run/v2/text/ai_detection";
    public final static String MULTIAVATAR_SERVICE = "https://api.multiavatar.com/";
}
