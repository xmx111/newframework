$(function() {
    $(".grid-engineering-order-express-index").data("gridOptions", {
        url : WEB_ROOT + '/engineering/order/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true                          
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
        }, {
            label : '物流状态',
            name : 'status',
            formatter : 'select',
            searchoptions : {
                value : Util.getCacheEnumsByType('ExpressStatusEnum')
            },
            width : 80,
            editable: true,
            align : 'center'
        }, {
            label : '物流时间',
            name : 'date',
            width : 90,
            formatter: 'date',
            editable: true,
            align : 'center'
        }, {
            label : '物流联系电话',
            name : 'phone',
            width : 20,
            editable: true,
            align : 'left'
        }, {
            label : '物流名称',
            name : 'name',
            width : 80,
            editable: true,
            align : 'left'
        }, {
            label : '物流单号',
            name : 'no',
            width : 50,
            editable: true,
            align : 'left'
        }, {
            label : '物流联系人',
            name : 'sender',
            width : 20,
            editable: true,
            align : 'left'
        } ],
        editurl : WEB_ROOT + '/engineering/order/save.json',
        delurl : WEB_ROOT + '/engineering/order/delete.json',
        fullediturl : WEB_ROOT + '/engineering/order/inputTabs.htm'
    });
});
