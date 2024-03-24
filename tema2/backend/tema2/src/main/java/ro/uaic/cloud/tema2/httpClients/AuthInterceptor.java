package ro.uaic.cloud.tema2.httpClients;

import feign.RequestInterceptor;
import feign.RequestTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class AuthInterceptor implements RequestInterceptor {
    @Value("${EDEN_KEY}")
    private String apiKey;
    @Override
    public void apply(RequestTemplate template) {
        template.header("Authorization", "Bearer " + apiKey);
    }
}
