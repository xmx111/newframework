package com.ufo.config.sys.web;

import com.ufo.config.sys.entity.Organization;
import com.ufo.config.sys.service.interfaces.IOrganizationService;
import com.ufo.core.annotation.Description;
import com.ufo.core.service.IBaseSpringDataService;
import com.ufo.core.web.PersistableController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller("configSysOrganizationController")
@RequestMapping("/config/sys/organization/")
@Description(code = "config.sys.organization", value = "机构设置")
@Secured("config.sys.organization")
public class OrganizationController extends PersistableController<Organization, Integer> {
    
    /***
     * jsp file path
     */
    private static final String VIEWPATH = "/config/sys/organization/";

    @Autowired
    private IOrganizationService organizationService;

    @Override
    public IBaseSpringDataService<Organization, Integer> getEntityService() {
        return organizationService;
    }
    
    @RequestMapping("index.htm")
    @Description("列表查询")
    @Secured("config.sys.organization.index")
    public String index(HttpServletRequest request) {
        return this.toView("organization-index");
    }

    @RequestMapping("inputTabs.htm")
    @Description({ "新增数据", "编辑数据" })
    @Secured({ "config.sys.organization.add", "config.sys.organization.edit" })
    public String inputTabs(Integer id, Boolean clone, ModelMap map) {
        if (id != null && id != Integer.MIN_VALUE)
            map.put("id", id);
        if (clone == Boolean.TRUE)
            map.put("clone", clone);
        return this.toView("organization-inputTabs");
    }

    @RequestMapping("edit.htm")
    @Description({ "新增数据", "编辑数据" })
    @Secured({ "config.sys.organization.add", "config.sys.organization.edit" })
    public String edit(Integer id, Boolean clone, ModelMap map) {
        if (id != null && id != Integer.MIN_VALUE){
            map.put("dto", detail(id));
            map.put("id", id);
        }
        if (clone == Boolean.TRUE)
            map.put("clone", clone);
        return this.toView("organization-inputBasic");
    }
    
    @RequestMapping("findByPage.json")
    @Description("列表查询")
    @Secured("config.sys.organization.index")
    @ResponseBody
    public Object findByPage(HttpServletRequest request) {
        return super.findByPage(request);
    }
    
    @RequestMapping("update.json")
    @Description("编辑数据")
    @Secured("config.sys.organization.edit")
    @ResponseBody
    public Object update(Organization dto) {
        return super.save(dto);
    }
    
    @RequestMapping("save.json")
    @Description({ "新增数据", "编辑数据" })
    @Secured({ "config.sys.organization.add", "config.sys.organization.edit" })
    @ResponseBody
    public Object save(Organization dto) {
        return super.save(dto);
    }

    @RequestMapping("delete.json")
    @Description("删除数据")
    @Secured("config.sys.organization.delete")
    @ResponseBody
    public Object delete(HttpServletRequest request) {
        return super.delete(request);
    }
    
    @RequestMapping("buildValidateRules.json")
    @ResponseBody
    public Object buildValidateRules() {
        return super.buildValidateRules();
    }
    
    
    /** 
     * 重写方法 
     * @see com.se.core.web.AbstractBaseController#getModelPath() 
     */
     @Override
     protected String getModelViewPath() {
        
         return VIEWPATH;
     }
    
}
