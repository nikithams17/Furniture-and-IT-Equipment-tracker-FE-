package com.tbp.crud.dao;

import com.tbp.crud.entity.User;

import java.util.List;

public interface UserRepository {
    User saveUser(User user);
    List<User> allUsers();
    /*public User fetchUserByEmailId(String email){
        return
    }*/
}
