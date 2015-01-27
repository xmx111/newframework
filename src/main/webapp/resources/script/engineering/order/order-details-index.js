$(function() {
    $(".grid-engineering-order-order-details-index").data("gridOptions", {
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
            label : '收货验收照片',
            name : 'acceptanceUrl',
            width : 100,
            editable: true,
            align : 'left'
        }, {
            label : '材料要求参数',
            name : 'requireParameter',
            width : 200,
            editable: true,
            align : 'left'
        }, {
            label : '数量要求',
            name : 'num',
            width : 60,
            editable: true,
            align : 'right'
        }, {
            label : '生产厂家',
            name : 'manufacturers',
            width : 100,
            editable: true,
            align : 'left'
        }, {
            label : '生产批次',
            name : 'batch',
            width : 20,
            editable: true,
            align : 'left'
        }, {
            label : '实际材料参数',
            name : 'actParameter',
            width : 200,
            editable: true,
            align : 'left'
        }, {
            label : '收货验收状态',
            name : 'acceptanceStatus',
            formatter : 'select',
            searchoptions : {
                value : Util.getCacheEnumsByType('AcceptanceEnum')
            },
            width : 80,
            editable: true,
            align : 'center'
        }, {
            label : '收货验收说明',
            name : 'acceptanceExplain',
            width : 200,
            editable: true,
            align : 'left'
        } ],
        editurl : WEB_ROOT + '/engineering/order/save.json',
        delurl : WEB_ROOT + '/engineering/order/delete.json',
        fullediturl : WEB_ROOT + '/engineering/order/inputTabs.htm'
    });
});
