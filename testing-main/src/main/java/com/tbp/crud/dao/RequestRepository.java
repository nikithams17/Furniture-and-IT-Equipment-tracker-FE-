package com.tbp.crud.dao;
import com.tbp.crud.entity.Request;


import java.util.List;

public interface RequestRepository {
    Request saveUser(Request request);
    List<Request> allUsers();

}
