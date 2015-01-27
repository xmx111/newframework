$(function() {
    $(".grid-config-sys-organization-index").data("gridOptions", {
        url : WEB_ROOT + '/config/sys/organization/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true                          
        }, {
            label : '机构名称',
            name : 'name',
            width : 160,
            editable: true,
            align : 'left'
        }, {
            label : '电话总机',
            name : 'phone',
            width : 100,
            editable: true,
            align : 'left'
        }, {
            label : '邮编',
            name : 'zipcode',
            width : 100,
            editable: true,
            align : 'left'
        }, {
            label : '地址',
            name : 'address',
            width : 160,
            editable: true,
            align : 'left'
        } ],
        editurl : WEB_ROOT + '/config/sys/organization/save.json',
        delurl : WEB_ROOT + '/config/sys/organization/delete.json',
        fullediturl : WEB_ROOT + '/config/sys/organization/edit.htm'
    });
});
