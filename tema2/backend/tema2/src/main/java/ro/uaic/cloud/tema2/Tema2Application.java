package ro.uaic.cloud.tema2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class Tema2Application {

	public static void main(String[] args) {
		SpringApplication.run(Tema2Application.class, args);
	}

}
