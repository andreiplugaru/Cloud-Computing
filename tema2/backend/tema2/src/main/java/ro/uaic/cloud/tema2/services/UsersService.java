package ro.uaic.cloud.tema2.services;

import feign.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ro.uaic.cloud.tema2.dtos.UserLoginDto;
import ro.uaic.cloud.tema2.dtos.UserRegisterDto;
import ro.uaic.cloud.tema2.dtos.UserRegisterResponseDto;
import ro.uaic.cloud.tema2.httpClients.AuthenticationClient;
import ro.uaic.cloud.tema2.httpClients.MultiavatarClient;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UsersService {
    private final AuthenticationClient authenticationClient;
    private final MultiavatarClient multiavatarClient;
    public ResponseEntity<UserRegisterResponseDto> register(UserRegisterDto userRegisterDto) {
       ResponseEntity<UserRegisterResponseDto> response =
               authenticationClient.createNewUser(userRegisterDto);
       if(response.getStatusCode().is2xxSuccessful()){
              return new ResponseEntity<>(response.getBody(), response.getStatusCode());
         } else {
              throw new RuntimeException("Failed to register user");
       }
    }

    public ResponseEntity<UserRegisterResponseDto> login(UserLoginDto userRegisterDto) {
        ResponseEntity<UserRegisterResponseDto> response =
                authenticationClient.login(userRegisterDto);
        if(response.getStatusCode().is2xxSuccessful()){
            return new ResponseEntity<>(response.getBody(), response.getStatusCode());
        } else {
            throw new RuntimeException("Failed to register user");
        }
    }

    public List<UserRegisterResponseDto> getAllUsers() {
        List<UserRegisterResponseDto> users = authenticationClient.getAllUsers().getBody();
        users.forEach(user -> user.setAvatar(getUserImage(user.getName())));
        return users;
    }

    public byte[] getUserImage(String userName) {
        try(Response response = multiavatarClient.getImage(userName + ".png", MultiavatarClient.apiKey)) {
            return response.body().asInputStream().readAllBytes();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
