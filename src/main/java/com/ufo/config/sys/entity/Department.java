package com.ufo.config.sys.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ufo.core.annotation.EntityAutoCode;
import com.ufo.core.annotation.MetaData;
import com.ufo.core.entity.UndeleteEntity;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.ForeignKey;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/** 
* 类名称：Department 
* 类描述：部门信息 
* 
* 创建人：hekang
* 创建时间：2014-8-9 上午9:20:55 
* @version 
* 
*/
@MetaData(value = "部门")
@Entity
@Table(name = "ufoframework_sys_department")
public class Department extends UndeleteEntity implements java.io.Serializable {

    /** 
    *serialVersionUID 
    */
    private static final long serialVersionUID = 4829813198187282232L;
    
    @MetaData(value = "关联机构")
    private Organization organization;
    
    @MetaData(value = "上级部门")
    private Department parent;
    
    @MetaData(value = "名称")
    @EntityAutoCode(order = 5, listShow = true)
    private String name;
    
    @MetaData(value = "描述")
    @EntityAutoCode(order = 10, listShow = true)
    private String description;
    
    @MetaData(value = "用户列表")
    private Set<Manager> managers = new HashSet<Manager>(0);

    @Column(length = 128)
    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Lob
    @Basic
    @Column
    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "parent_id")
    @ForeignKey(name = "fk_parent_dept")
    public Department getParent() {
        return parent;
    }

    public void setParent(Department parent) {
        this.parent = parent;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inst_id")
    @ForeignKey(name = "fk_dept_organization")
    @JsonIgnore
    public Organization getOrganization() {
        return organization;
    }

    public void setOrganization(Organization organization) {
        this.organization = organization;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "department")
    @Fetch(FetchMode.SUBSELECT)
    @JsonIgnore
    public Set<Manager> getManagers() {
        return managers;
    }

    public void setManagers(Set<Manager> managers) {
        this.managers = managers;
    }
}
