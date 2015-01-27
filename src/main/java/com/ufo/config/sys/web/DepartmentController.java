package com.ufo.config.sys.web;

import com.ufo.config.sys.entity.Department;
import com.ufo.config.sys.service.interfaces.IDepartmentService;
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

@Controller("configSysDepartmentController")
@RequestMapping("/config/sys/department/")
@Description(code = "config.sys.department", value = "部门设置")
@Secured("config.sys.department")
public class DepartmentController extends PersistableController<Department, Integer> {
    
    /***
     * jsp file path
     */
    private static final String VIEWPATH = "/config/sys/department/";

    @Autowired
    private IDepartmentService departmentService;

    @Override
    public IBaseSpringDataService<Department, Integer> getEntityService() {
        return departmentService;
    }
    
    @RequestMapping("index.htm")
    @Description("列表查询")
    @Secured("config.sys.department.index")
    public String index(HttpServletRequest request) {
        return this.toView("department-index");
    }

    @RequestMapping("inputTabs.htm")
    @Description({ "新增数据", "编辑数据" })
    @Secured({ "config.sys.department.add", "config.sys.department.edit" })
    public String inputTabs(Integer id, Boolean clone, ModelMap map) {
        if (id != null && id != Integer.MIN_VALUE)
            map.put("id", id);
        if (clone == Boolean.TRUE)
            map.put("clone", clone);
        return this.toView("department-inputTabs");
    }

    @RequestMapping("edit.htm")
    @Description({ "新增数据", "编辑数据" })
    @Secured({ "config.sys.department.add", "config.sys.department.edit" })
    public String edit(Integer id, Boolean clone, ModelMap map) {
        if (id != null && id != Integer.MIN_VALUE){
            map.put("dto", detail(id));
            map.put("id", id);
        }
        if (clone == Boolean.TRUE)
            map.put("clone", clone);
        return this.toView("department-inputBasic");
    }
    
    @RequestMapping("findByPage.json")
    @Description("列表查询")
    @Secured({"config.sys.department.index", "config.sys.manager.add", "config.sys.manager.edit"})
    @ResponseBody
    public Object findByPage(HttpServletRequest request) {
        return super.findByPage(request);
    }
    
    @RequestMapping("update.json")
    @Description("编辑数据")
    @Secured("config.sys.department.edit")
    @ResponseBody
    public Object update(Department dto) {
        return super.save(dto);
    }
    
    @RequestMapping("save.json")
    @Description({ "新增数据", "编辑数据" })
    @Secured({ "config.sys.department.add", "config.sys.department.edit" })
    @ResponseBody
    public Object save(Department dto) {
        if (dto.getParent() != null && dto.getParent().getId() == null)
            dto.setParent(null);
        return super.save(dto);
    }

    @RequestMapping("delete.json")
    @Description("删除数据")
    @Secured("config.sys.department.delete")
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
