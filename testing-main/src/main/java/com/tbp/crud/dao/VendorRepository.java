package com.tbp.crud.dao;

import com.tbp.crud.entity.Request;
import com.tbp.crud.entity.Vendor;

import java.util.List;
import java.util.Optional;

public interface VendorRepository {
    static Optional<Vendor> findById(Long id) {
        return null;
    }

    Vendor saveUser(Vendor vendor);
    List<Vendor> allUsers();


}
