$(function() {
    $(".grid-basedata-region-region-index").data("gridOptions", {
        url : WEB_ROOT + '/basedata/region/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true                          
        }, {
            label : '区域编号',
            name : 'code',
            width : 10,
            editable: true,
            align : 'left'
        }, {
            label : '区域名称',
            name : 'name',
            width : 30,
            editable: true,
            align : 'left'
        }, {
            label : '区域负责人',
            name : 'employee.name',
            width : 30,
            editable: true,
            align : 'left'
        }, {
            label : '所在省',
            name : 'province',
            width : 20,
            editable: true,
            align : 'left'
        }, {
            label : '所在市',
            name : 'city',
            width : 20,
            editable: true,
            align : 'left'
        } ],
        editurl : WEB_ROOT + '/basedata/region/save.json',
        delurl : WEB_ROOT + '/basedata/region/delete.json',
        fullediturl : WEB_ROOT + '/basedata/region/inputTabs.htm'
    });
});
