package com.property;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import com.property.models.Admin;
import com.property.services.AdminService;
import com.property.utils.FileUploadProperties;

@SpringBootApplication
@EnableJpaAuditing
@EnableConfigurationProperties({
    FileUploadProperties.class
})
public class PropertypulseBackendApplication {

	private static final Logger log = LoggerFactory.getLogger(PropertypulseBackendApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(PropertypulseBackendApplication.class, args);
	}

//	@Bean
//	public CommandLineRunner demo(AdminService srv) {
//	    return (args) -> {
//	    	if(srv.countAdmin()==0) {
//	    		Admin admin=new Admin();
//	    		admin.setUserid("admin");
//	    		admin.setPwd(srv.encrypt("admin"));
//	    		admin.setUname("Administrator");
//	    		srv.saveAdmin(admin);
//	    		log.info("Admin user created successfully");
//	    	}
//	    };
//	}
	@Bean
	public CommandLineRunner demo(AdminService srv) {
	    return (args) -> {
	    	if(srv.countAdmin()==0) {
	    		Admin admin=new Admin();
	    		admin.setUserid("admin");
	    		admin.setPwd(srv.encrypt("admin"));
	    		admin.setUname("Administrator");
	    		srv.saveAdmin(admin);
	    		log.info("Admin user created successfully");
	    	}
	    };
	}

}
