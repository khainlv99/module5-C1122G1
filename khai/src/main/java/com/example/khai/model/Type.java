package com.example.khai.model;

import javax.persistence.*;

@Entity
@Table(name = "type")
public class Type {
    @Id
    @Column(name = "type_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer typeId;

    @Column(name = "name_type")
    private String nameType;

    public Type() {
    }

    public Type(Integer typeId, String nameType) {
        this.typeId = typeId;
        this.nameType = nameType;
    }

    public Integer getTypeId() {
        return typeId;
    }

    public void setTypeId(Integer typeId) {
        this.typeId = typeId;
    }

    public String getNameType() {
        return nameType;
    }

    public void setNameType(String nameType) {
        this.nameType = nameType;
    }
}
