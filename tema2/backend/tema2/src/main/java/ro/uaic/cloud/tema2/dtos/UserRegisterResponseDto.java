package ro.uaic.cloud.tema2.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
public class UserRegisterResponseDto{
    private String name;
    private String email;
    private String _id;
    @Setter
    private byte[] avatar;

    public UserRegisterResponseDto(String name, String email, String _id) {
        this.name = name;
        this.email = email;
        this._id = _id;
    }
}
