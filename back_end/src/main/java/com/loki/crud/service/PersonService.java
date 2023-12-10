package com.loki.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loki.crud.entity.Person;
import com.loki.crud.repository.PersonRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PersonService {

	@Autowired
	private PersonRepository personRepository;

	public List<Person> getAllPreson() {
		return personRepository.findAll();
	}

	public Person save(Person person) {
		return personRepository.save(person);
	}

	public Person getByid(Long id) {
		return personRepository.findById(id).get();
	}
	
	public void deletePersonByid(Long id) {
		personRepository.deleteById(id);
	}
}
