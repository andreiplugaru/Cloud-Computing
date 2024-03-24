package ro.uaic.cloud.tema2.httpClients;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FeignConfig {

    @Bean
    public AuthInterceptor authInterceptor() {
        return new AuthInterceptor();
    }

}