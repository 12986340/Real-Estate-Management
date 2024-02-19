package com.property.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.property.payloads.ApiResponse;

//import com.pgmates.payloads.ApiResponse;
//
@RestControllerAdvice
public class GlobalExceptionHandler {

//	@ResponseStatus(HttpStatus.BAD_REQUEST)
//	@ExceptionHandler(ResourceNotFoundException.class)
//	public ResponseEntity<ApiResponse> resourceNotFoundException(ResourceNotFoundException ex) {
//		String message = ex.getMessage();
//		ApiResponse apiResponse = new ApiResponse(message, false);
//		return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.NOT_FOUND);
//	}

	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<?> handleResourceNotFoundException(ResourceNotFoundException e) {
		System.out.println("in handle res not found...");
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
	}

//	@ResponseStatus(HttpStatus.BAD_REQUEST)
//	@ExceptionHandler(MethodArgumentNotValidException.class)
//	public Map<String, String> handleInvalidArgument(MethodArgumentNotValidException ex){
//		Map<String, String> errorMap = new HashMap<>();
//		ex.getBindingResult().getFieldErrors().forEach(error ->{
//			errorMap.put(error.getField(), error.getDefaultMessage());
//		});
//		return errorMap;
//	}
//
//	@ResponseStatus(HttpStatus.BAD_REQUEST)
//	@ExceptionHandler(ResourceNotFoundException.class)
//	public Map<String, String> handleBusinessException(ResourceNotFoundException ex){
//		Map<String, String> errorMap = new HashMap<>();
//		errorMap.put("HIIIII", ex.getMessage());
//		return errorMap;
//
//	}



}
