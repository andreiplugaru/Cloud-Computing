package ro.uaic.cloud.tema2.dtos;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

public record PostResponseDto(String title, String content, String userId, List<Like> likes, String _id) {
}
