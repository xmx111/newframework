$(function() {
    $(".grid-ucenter-supplier-supplier-index").data("gridOptions", {
        url : WEB_ROOT + '/ucenter/supplier/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true                          
        }, {
            label : '供货商编号',
            name : 'code',
            width : 30,
            editable: true,
            align : 'left'
        }, {
            label : '供货商名称',
            name : 'name',
            width : 80,
            editable: true,
            align : 'left'
        }, {
            label : '供货商联系人',
            name : 'contacts',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '供货商联系电话',
            name : 'tel',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '供货商地址',
            name : 'address',
            width : 170,
            editable: true,
            align : 'left'
        } ],
        editurl : WEB_ROOT + '/ucenter/supplier/save.json',
        delurl : WEB_ROOT + '/ucenter/supplier/delete.json',
        fullediturl : WEB_ROOT + '/ucenter/supplier/inputTabs.htm'
    });
});
