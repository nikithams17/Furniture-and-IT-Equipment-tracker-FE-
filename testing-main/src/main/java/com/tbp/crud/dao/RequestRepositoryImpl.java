package com.tbp.crud.dao;

import com.tbp.crud.entity.Request;
import com.tbp.crud.entity.User;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class RequestRepositoryImpl implements RequestRepository {

    private static final String INSERT_USER_QUERY = "INSERT INTO REQUEST(emp_id,email,furniture,it_equip,shipping_add) values(?,?,?,?,?)";
    private static final String GET_USERS_QUERY = "SELECT * FROM Request";

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public Request saveUser(Request request) {
        jdbcTemplate.update(INSERT_USER_QUERY, request.getEmp_id(), request.getEmail(), request.getFurniture(), request.getIt_equip(), request.getShipping_add());
        return request;
    }

    @Override
    public List<Request> allUsers() {
        return jdbcTemplate.query(GET_USERS_QUERY, (rs, rowNum) -> new Request(rs.getInt("emp_id"), rs.getString("email"), rs.getString("furniture"), rs.getString("it_equip"), rs.getString("shipping_add")));
    }
}
