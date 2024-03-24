package ro.uaic.cloud.tema2.httpClients;

import feign.Response;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import ro.uaic.cloud.tema2.utils.ApiEndpoints;

@FeignClient(name = "multiavatarClient", url = ApiEndpoints.MULTIAVATAR_SERVICE)
public interface MultiavatarClient {

    @Value("${MULTIAVATAR_API_KEY}")
    String apiKey = "";
    @GetMapping("/{imageName}?apiKey={apiKey}")
    Response getImage(@PathVariable String imageName, @PathVariable String apiKey);
}
