package ro.uaic.cloud.tema2.httpClients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import ro.uaic.cloud.tema2.dtos.EdenCheckerDto;
import ro.uaic.cloud.tema2.utils.ApiEndpoints;

@FeignClient(name = "edenClient", url = ApiEndpoints.AI_DETECTION_SERVICE, configuration = FeignConfig.class)
public interface EdenClient {
    @PostMapping
    ResponseEntity<String> getAiScore(EdenCheckerDto edenCheckerDto);
}

