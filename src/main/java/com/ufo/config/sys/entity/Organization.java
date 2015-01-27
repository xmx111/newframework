package com.ufo.config.sys.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ufo.core.annotation.EntityAutoCode;
import com.ufo.core.annotation.MetaData;
import com.ufo.core.entity.UndeleteEntity;
import org.hibernate.annotations.ForeignKey;

import javax.persistence.*;

/** 
* 类名称：Institution 
* 类描述： 机构
* 
* 创建人：hekang
* 创建时间：2014-8-9 上午9:20:55 
* @version 
* 
*/
@MetaData(value = "机构")
@Entity
@Table(name = "ufoframework_sys_organization")
public class Organization extends UndeleteEntity implements java.io.Serializable {

    private static final long serialVersionUID = 1L;
    
    /**
     * 机构名称
     */
    @MetaData(value = "机构名称")
    @EntityAutoCode(order = 5, listShow = true)
    private String name;
    
    @MetaData(value = "电话总机")
    @EntityAutoCode(order = 10, listShow = true)
    private String phone;
    
    @MetaData(value = "邮编")
    @EntityAutoCode(order = 15, listShow = true)
    private String zipcode;
    
    @MetaData(value = "地址")
    @EntityAutoCode(order = 20, listShow = true)
    private String address;
    
    @MetaData(value = "名称")
    @EntityAutoCode(order = 25, listShow = false)
    private String website;
    
    @MetaData(value = "描述")
    @EntityAutoCode(order = 30, listShow = false)
    private String description;
    
    @MetaData(value = "上级机构")
    private Organization parent;

    @Column(length = 255)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(length = 32)
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Column(length = 12)
    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    @Column
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Column
    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    @ForeignKey(name = "pk_parent_organization")
    @JsonIgnore
    public Organization getParent() {
        return parent;
    }

    public void setParent(Organization parent) {
        this.parent = parent;
    }

    @Lob
    @Basic
    @Column
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    
}
