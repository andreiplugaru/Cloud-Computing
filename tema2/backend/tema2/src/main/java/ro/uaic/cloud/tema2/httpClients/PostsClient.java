package ro.uaic.cloud.tema2.httpClients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import ro.uaic.cloud.tema2.dtos.PostCreationDto;
import ro.uaic.cloud.tema2.dtos.PostResponseDto;
import ro.uaic.cloud.tema2.dtos.UserRegisterDto;
import ro.uaic.cloud.tema2.dtos.UserRegisterResponseDto;
import ro.uaic.cloud.tema2.utils.ApiEndpoints;

import java.util.List;
import java.util.UUID;

@FeignClient(name="postsService", url = ApiEndpoints.POSTS_SERVICE)
public interface PostsClient {
    @PostMapping
    ResponseEntity<PostResponseDto> createPost(PostCreationDto postCreationDto);

    @GetMapping("/users/{userId}")
    ResponseEntity<List<PostResponseDto>> getPostsByUserId(@PathVariable UUID userId);

    @DeleteMapping("/{postId}")
    ResponseEntity<Void> deletePost(@PathVariable UUID postId);

    @GetMapping("/{postId}")
    ResponseEntity<PostResponseDto> getPostsById(@PathVariable UUID postId);
}