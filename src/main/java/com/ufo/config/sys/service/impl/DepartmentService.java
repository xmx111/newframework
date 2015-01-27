package com.ufo.config.sys.service.impl;

import com.ufo.config.sys.dao.interfaces.DepartmentDao;
import com.ufo.config.sys.entity.Department;
import com.ufo.config.sys.service.interfaces.IDepartmentService;
import com.ufo.core.dao.BaseDao;
import com.ufo.core.service.BaseSpringDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class DepartmentService extends BaseSpringDataService<Department, Integer> implements IDepartmentService {
    
    @Autowired
    private DepartmentDao departmentDao;

    @Override
    public BaseDao<Department, Integer> getEntityDao() {
        return departmentDao;
    }
}
