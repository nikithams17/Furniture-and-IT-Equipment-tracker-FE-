package com.tbp.crud.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Request {
    private int emp_id;
    private String email;
    private String furniture;
    private String it_equip;
    private String shipping_add;

}
