package ro.uaic.cloud.tema2.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ro.uaic.cloud.tema2.dtos.EdenCheckerDto;
import ro.uaic.cloud.tema2.dtos.PostCreationDto;
import ro.uaic.cloud.tema2.dtos.PostResponseDto;
import ro.uaic.cloud.tema2.exceptions.EdenResponseException;
import ro.uaic.cloud.tema2.httpClients.EdenClient;
import ro.uaic.cloud.tema2.httpClients.PostsClient;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PostsService {
    private final PostsClient postsClient;
    private final EdenClient edenClient;
    public ResponseEntity<PostResponseDto> createPost(PostCreationDto postCreationDto) {
        ResponseEntity<PostResponseDto> response =
                postsClient.createPost(postCreationDto);
        if(response.getStatusCode().is2xxSuccessful()){
            return new ResponseEntity<>(response.getBody(), response.getStatusCode());
        } else {
            throw new RuntimeException("Failed to create post");
        }
    }

    public ResponseEntity<List<PostResponseDto>> getPostsByUser(UUID userId) {
        List<PostResponseDto> posts = postsClient.getPostsByUserId(userId).getBody();
        return new ResponseEntity<>(posts, HttpStatus.valueOf(200));
    }

    public ResponseEntity<Void> deletePost(UUID postId) {
        return postsClient.deletePost(postId);
    }

    public double getAiScore(UUID postId) {
        PostResponseDto post = postsClient.getPostsById(postId).getBody();
        EdenCheckerDto edenCheckerDto = new EdenCheckerDto("originalityai", post.content(), "");
        ObjectMapper mapper = new ObjectMapper();
        String response = edenClient.getAiScore(edenCheckerDto).getBody();
        JsonNode nameNode;
        try {
            nameNode = mapper.readTree(response);
            return nameNode.get("originalityai").get("ai_score").asDouble();
        } catch (JsonProcessingException e) {
            throw new EdenResponseException();
        }
    }
}
