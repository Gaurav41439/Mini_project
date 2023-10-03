package com.vipul.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.bind.annotation.RestController;

@SpringBootTest
class DemoApplicationTests {

	@Test
	public String contextLoads() {
		return "Hello World";
	}

}
