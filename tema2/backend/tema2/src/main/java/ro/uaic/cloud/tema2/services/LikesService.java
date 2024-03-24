package ro.uaic.cloud.tema2.services;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ro.uaic.cloud.tema2.dtos.Like;
import ro.uaic.cloud.tema2.dtos.LikeCreationDto;
import ro.uaic.cloud.tema2.httpClients.LikesClient;

@Service
@RequiredArgsConstructor
public class LikesService {
    private final LikesClient likesClient;

    public ResponseEntity<Like> likePost(LikeCreationDto likeCreationDto) {
        return likesClient.likePost(likeCreationDto);
    }

    public ResponseEntity<Void> unlikePost(LikeCreationDto likeCreationDto) {
        return likesClient.unlikePost(likeCreationDto);
    }
}
