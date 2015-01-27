package com.ufo.config.sys.service.impl;

import com.ufo.config.sys.dao.interfaces.OrganizationDao;
import com.ufo.config.sys.entity.Organization;
import com.ufo.config.sys.service.interfaces.IOrganizationService;
import com.ufo.core.dao.BaseDao;
import com.ufo.core.service.BaseSpringDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class OrganizationService extends BaseSpringDataService<Organization, Integer> implements IOrganizationService {
    
    @Autowired
    private OrganizationDao organizationDao;

    @Override
    public BaseDao<Organization, Integer> getEntityDao() {
        return organizationDao;
    }
}
