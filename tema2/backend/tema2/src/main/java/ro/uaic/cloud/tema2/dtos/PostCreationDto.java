package ro.uaic.cloud.tema2.dtos;

import java.util.UUID;

public record PostCreationDto(String title, String content, UUID userId) {
}
