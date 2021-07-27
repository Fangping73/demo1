package com.example.service;

import com.example.entity.User;

import java.util.List;

public interface UserService {

    List<User> findByAll();

    User findUserById(Integer id);

    int saveUser(User user);

    int deleteUser(Integer id);

    int updateUser(User user);
}
