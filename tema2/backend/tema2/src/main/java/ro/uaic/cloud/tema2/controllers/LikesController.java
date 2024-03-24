package ro.uaic.cloud.tema2.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.uaic.cloud.tema2.dtos.Like;
import ro.uaic.cloud.tema2.dtos.LikeCreationDto;
import ro.uaic.cloud.tema2.services.LikesService;

@RestController
@RequestMapping("/api/v1/likes")
@RequiredArgsConstructor
public class LikesController {
    private final LikesService likesService;
    @PostMapping
    public ResponseEntity<Like> likePost(@RequestBody LikeCreationDto likeCreationDto) {
        return likesService.likePost(likeCreationDto);
    }

    @DeleteMapping
    public ResponseEntity<Void> unlikePost(@RequestBody LikeCreationDto likeCreationDto) {
        return likesService.unlikePost(likeCreationDto);
    }
}
