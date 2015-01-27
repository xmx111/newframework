$(function() {
    $(".grid-engineering-order-express-way-index").data("gridOptions", {
        url : WEB_ROOT + '/engineering/order/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true                          
        }, {
            label : 'way',
            name : 'way',
            width : 200,
            editable: true,
            align : 'left'
        }, {
            label : '是否删除',
            name : 'deleted',
            formatter : 'select',
            searchoptions : {
                value : Util.getCacheEnumsByType('DeleteTypeEnum')
            },
            width : 80,
            editable: true,
            align : 'center'
        } ],
        editurl : WEB_ROOT + '/engineering/order/save.json',
        delurl : WEB_ROOT + '/engineering/order/delete.json',
        fullediturl : WEB_ROOT + '/engineering/order/inputTabs.htm'
    });
});
