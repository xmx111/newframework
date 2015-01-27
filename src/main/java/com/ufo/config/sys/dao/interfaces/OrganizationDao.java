package com.ufo.config.sys.dao.interfaces;

import com.ufo.config.sys.entity.Organization;
import com.ufo.core.dao.BaseDao;
import org.springframework.stereotype.Repository;

@Repository
public interface OrganizationDao extends BaseDao<Organization, Integer> {
	
}
