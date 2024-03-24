package ro.uaic.cloud.tema2.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.uaic.cloud.tema2.dtos.UserLoginDto;
import ro.uaic.cloud.tema2.dtos.UserRegisterDto;
import ro.uaic.cloud.tema2.dtos.UserRegisterResponseDto;
import ro.uaic.cloud.tema2.services.UsersService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UsersController {
    private final UsersService usersService;
    @PostMapping
    public ResponseEntity<UserRegisterResponseDto> register(@RequestBody UserRegisterDto userRegisterDto) {
        return usersService.register(userRegisterDto);
    }
    @PostMapping("/login")
    public ResponseEntity<UserRegisterResponseDto> login(@RequestBody UserLoginDto userLoginDto) {
        return usersService.login(userLoginDto);
    }
    @GetMapping
    public List<UserRegisterResponseDto> getAllUsers() {
        return usersService.getAllUsers();
    }
    @GetMapping("/avatars/{userName}")
    public byte[] getUserImage(@PathVariable String userName) {
        return usersService.getUserImage(userName);
    }
}
