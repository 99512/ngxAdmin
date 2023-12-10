package com.loki.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.loki.crud.entity.Person;

public interface PersonRepository extends JpaRepository<Person, Long>{

	
	
}
