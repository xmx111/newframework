package com.ufo.config.sys.dao.interfaces;

import com.ufo.config.sys.entity.Department;
import com.ufo.core.dao.BaseDao;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentDao extends BaseDao<Department, Integer> {

}
