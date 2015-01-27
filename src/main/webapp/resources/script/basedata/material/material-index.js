$(function() {
    $(".grid-basedata-material-material-index").data("gridOptions", {
        url : WEB_ROOT + '/basedata/material/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true                          
        }, {
            label : '材料编号',
            name : 'code',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '材料名称',
            name : 'name',
            width : 60,
            editable: true,
            align : 'left'
        }, {
            label : '材料描述',
            name : 'describes',
            width : 200,
            editable: true,
            align : 'left'
        } ],
        editurl : WEB_ROOT + '/basedata/material/save.json',
        delurl : WEB_ROOT + '/basedata/material/delete.json',
        fullediturl : WEB_ROOT + '/basedata/material/inputTabs.htm'
    });
});
