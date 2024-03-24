package ro.uaic.cloud.tema2.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.uaic.cloud.tema2.dtos.PostCreationDto;
import ro.uaic.cloud.tema2.dtos.PostResponseDto;
import ro.uaic.cloud.tema2.services.PostsService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/posts")
@RequiredArgsConstructor
public class PostsController {
    private final PostsService postsService;
    @PostMapping
    public ResponseEntity<PostResponseDto> createPost(@RequestBody PostCreationDto postCreationDto) {
        return postsService.createPost(postCreationDto);
    }
    @GetMapping("/{userId}")
    public List<PostResponseDto> getUserPosts(@PathVariable UUID userId) {
        return postsService.getPostsByUser(userId).getBody();
    }

    @DeleteMapping("/{postId}")
    public ResponseEntity<Void> deletePost(@PathVariable UUID postId) {
        return postsService.deletePost(postId);
    }

    @GetMapping("/aiScore/{postId}")
    public double getAiScore(@PathVariable UUID postId) {
        return postsService.getAiScore(postId);
    }
}
