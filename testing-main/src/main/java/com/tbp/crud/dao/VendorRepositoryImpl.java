package com.tbp.crud.dao;

import com.tbp.crud.entity.Request;
import com.tbp.crud.entity.Vendor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class VendorRepositoryImpl implements VendorRepository{

    private static final String INSERT_USER_QUERY = "INSERT INTO vendor(emp_id,furniture,it_equip,delivery_date) values(?,?,?,?)";
    private static final String GET_USERS_QUERY = "SELECT * FROM Vendor";

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public Vendor saveUser(Vendor vendor) {
        jdbcTemplate.update(INSERT_USER_QUERY, vendor.getEmp_id(), vendor.getFurniture(), vendor.getIt_equip(), vendor.getDelivery_date());
        return vendor;
    }

    @Override
    public List<Vendor> allUsers() {
        return jdbcTemplate.query(GET_USERS_QUERY, (rs, rowNum) -> new Vendor(rs.getInt("emp_id"), rs.getString("furniture"), rs.getString("it_equip"), rs.getDate("delivery_date")));
    }
}
