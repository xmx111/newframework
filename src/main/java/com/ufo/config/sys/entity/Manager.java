package com.ufo.config.sys.entity;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.ForeignKey;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ufo.core.annotation.EntityAutoCode;
import com.ufo.core.annotation.MetaData;
import com.ufo.core.entity.UndeleteEntity;

/** 
* 类名称：Manager 
* 类描述：系统操作员实体 
* 
* 创建人：hekang
* 创建时间：2014-8-9 上午9:20:55 
* @version 
* 
*/
@MetaData(value = "系统操作员")
@Entity
@Table(name = "ufoframework_sys_manager")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Manager extends UndeleteEntity implements UserDetails, java.io.Serializable {

    public static enum ManagerStatusEnum {
        @MetaData(value = "正常")
        NORMAL,

        @MetaData(value = "已锁定")
        LOCK,

        @MetaData(value = "已注销")
        LOGOUT
    }

    @MetaData(value = "账号名(账号编码)")
    @EntityAutoCode(order = 5, listShow = true)
    private String loginName;

    @MetaData(value = "账号编码(暂时无用)")
    private String code;
    
    @MetaData(value = "账号名称")
    private String name;
    
    @MetaData(value = "账号密码")
    private String password;
    
    @MetaData(value = "账号状态")
    @EntityAutoCode(order = 20, listShow = true)
    private ManagerStatusEnum status = ManagerStatusEnum.NORMAL;
    
    @MetaData(value = "可用角色")
    private Set<Role> roles = new HashSet<Role>(0);

    @MetaData(value = "所属部门")
    @EntityAutoCode(order = 30, listShow = true)
    private Department department;

    @MetaData(value = "所属机构")
    @EntityAutoCode(order = 35, listShow = true)
    private Organization organization;

    @Transient
    private Collection<GrantedAuthority> authorities;
    
    @Column(name = "login_name", length = 30, unique = true)
    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    @Column(length = 50)
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Column(length = 40)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "password", length = 128)
    @JsonIgnore
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Enumerated(EnumType.ORDINAL)
    public ManagerStatusEnum getStatus() {
        return status;
    }

    public void setStatus(ManagerStatusEnum status) {
        this.status = status;
    }

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "ufoframework_sys_m_r_ref", joinColumns = { @JoinColumn(name = "manager_id", referencedColumnName = "id") }, inverseJoinColumns = { @JoinColumn(name = "role_id", referencedColumnName = "id") })
    @Fetch(FetchMode.SUBSELECT)
    @OrderBy("id")
    @ForeignKey(name = "fk_user_role", inverseName = "fk_role_user")
    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "dept_id")
    @ForeignKey(name = "fk_manager_dept")
    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inst_id")
    @ForeignKey(name = "fk_manager_organization")
    public Organization getOrganization() {
        return organization;
    }

    public void setOrganization(Organization organization) {
        this.organization = organization;
    }

    @Transient
    public Collection<GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Collection<GrantedAuthority> authorities) {
        this.authorities = authorities;
    }

    @Override
    @Transient
    public String getUsername() {
        return name;
    }

    @Override
    @Transient
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @Transient
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @Transient
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @Transient
    public boolean isEnabled() {
        return status.equals(ManagerStatusEnum.NORMAL) ? true : false;
    }
}
