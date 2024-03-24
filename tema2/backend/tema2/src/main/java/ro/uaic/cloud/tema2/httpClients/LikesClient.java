package ro.uaic.cloud.tema2.httpClients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import ro.uaic.cloud.tema2.dtos.Like;
import ro.uaic.cloud.tema2.dtos.LikeCreationDto;
import ro.uaic.cloud.tema2.utils.ApiEndpoints;

@FeignClient(name = "likesClient", url = ApiEndpoints.LIKES_SERVICE)
public interface LikesClient {
    @PostMapping
    ResponseEntity<Like> likePost(@RequestBody LikeCreationDto likeCreationDto);

    @DeleteMapping
    ResponseEntity<Void> unlikePost(@RequestBody LikeCreationDto likeCreationDto);
}
