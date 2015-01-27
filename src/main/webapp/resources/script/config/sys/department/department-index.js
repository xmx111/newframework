$(function() {
    $(".grid-config-sys-department-index").data("gridOptions", {
        url : WEB_ROOT + '/config/sys/department/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true                          
        }, {
            label : '名称',
            name : 'name',
            width : 128,
            editable: true,
            align : 'left'
        }, {
            label : '上级部门',
            name : 'parent.name',
            index : 'parent',
            width : 200,
            width : 200,
            editable: true,
            align : 'left'
        }, {
            label : '描述',
            name : 'description',
            width : 200,
            editable: true,
            align : 'left'
        } ],
        editurl : WEB_ROOT + '/config/sys/department/save.json',
        delurl : WEB_ROOT + '/config/sys/department/delete.json',
        fullediturl : WEB_ROOT + '/config/sys/department/edit.htm'
    });
    Tools.AjaxUnitList('/config/sys/department/findByPage.json', 'searchDepartParent');
});
