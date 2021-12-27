package com.persistent.hrs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.persistent.hrs.model.User;

@Repository
public interface Repo extends JpaRepository<User, String> {

}
