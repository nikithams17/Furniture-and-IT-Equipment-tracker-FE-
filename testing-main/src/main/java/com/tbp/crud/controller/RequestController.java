package com.tbp.crud.controller;
import com.tbp.crud.dao.RequestRepository;
import com.tbp.crud.dao.UserRepository;
import com.tbp.crud.entity.Request;
import com.tbp.crud.entity.User;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


//@RestController
@Controller
public class RequestController {
    @Autowired
    RequestRepository requestRepository;
    @ResponseBody
    @PostMapping("/request")
    public Request addUser(@RequestBody Request request) {

        return requestRepository.saveUser(request);

    }
    @ResponseBody
    @GetMapping("/requests")
    public List<Request> getUser()  {
        return requestRepository.allUsers();
    }
}
