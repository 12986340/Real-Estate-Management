package com.property.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender emailSender;

    public void sendMail(String to, String subject, String body) {
    	System.out.println("Sending mail to "+to);
        MimeMessage message=emailSender.createMimeMessage();
        try {
	        message.setSubject(subject);
	        MimeMessageHelper helper=new MimeMessageHelper(message,true);
	        helper.setFrom("kawadepriyanshu31@gmail.com");
	        helper.setTo(to);
	        helper.setText(body,true);
	        emailSender.send(message);
        }catch(Exception ex) {
        	System.out.println("Error "+ex.getMessage());
        }
    }
}
