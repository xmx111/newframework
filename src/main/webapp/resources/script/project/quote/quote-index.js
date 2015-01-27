$(function() {
    $(".grid-project-quote-quote-index").data("gridOptions", {
        url : WEB_ROOT + '/project/quote/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true                          
        }, {
            label : '工程编号',
            name : 'contract.engineeringCode',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '工程名称',
            name : 'contract.engineeringName',
            width : 50,
            editable: true,
            align : 'left'
        }, {
            label : '报价编号',
            name : 'code',
            width : 60,
            editable: true,
            align : 'right'
        }, {
            label : '报价名称',
            name : 'name',
            width : 30,
            editable: true,
            align : 'left'
        }, {
            label : '报价描述',
            name : 'describes',
            width : 200,
            editable: true,
            align : 'left'
        }, {
            label : '报价人姓名',
            name : 'quoter',
            width : 30,
            editable: true,
            align : 'left'
        } ],
        editurl : WEB_ROOT + '/project/quote/save.json',
        delurl : WEB_ROOT + '/project/quote/delete.json',
        fullediturl : WEB_ROOT + '/project/quote/inputTabs.htm'
    });
});
