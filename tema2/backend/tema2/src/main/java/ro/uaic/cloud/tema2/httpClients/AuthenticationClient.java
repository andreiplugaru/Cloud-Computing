package ro.uaic.cloud.tema2.httpClients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import ro.uaic.cloud.tema2.dtos.UserLoginDto;
import ro.uaic.cloud.tema2.dtos.UserRegisterDto;
import ro.uaic.cloud.tema2.dtos.UserRegisterResponseDto;
import ro.uaic.cloud.tema2.utils.ApiEndpoints;

import java.util.List;

@FeignClient(name="authService", url = ApiEndpoints.USER_SERVICE)
public interface AuthenticationClient {
    @PostMapping
    ResponseEntity<UserRegisterResponseDto> createNewUser(UserRegisterDto userDto);

    @PostMapping("/login")
    ResponseEntity<UserRegisterResponseDto> login(UserLoginDto userDto);

    @GetMapping
    ResponseEntity<List<UserRegisterResponseDto>> getAllUsers();
}
