package com.tamingthymeleaf.taming_thymeleaf.user;

import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
public interface UserRepository extends CrudRepository<User, UserId>, UserRepositoryCustom {
}