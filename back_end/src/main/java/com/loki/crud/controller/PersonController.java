package com.loki.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loki.crud.entity.Person;
import com.loki.crud.service.PersonService;

@RestController
@RequestMapping("api")
@CrossOrigin("http://localhost:3000")
public class PersonController {

	@Autowired
	private PersonService personService;

	@GetMapping("/persons")
	public ResponseEntity<List<Person>> getAllPersons() {
		return new ResponseEntity<List<Person>>(personService.getAllPreson(), HttpStatus.OK);
	}
	
	@PostMapping("/person")
	public Person savePerson(@RequestBody Person person) {
		return personService.save(person);
	}
	
	@GetMapping("/person/{id}")
	public Person getByid(@PathVariable Long id) {
		return personService.getByid(id);
	}
	
	@DeleteMapping("/person/{id}")
	public String deleteByid(@PathVariable Long id) {
		personService.deletePersonByid(id);
		return "deleted succfully";
	}
}
