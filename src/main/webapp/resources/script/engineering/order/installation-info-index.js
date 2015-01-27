$(function() {
    $(".grid-engineering-order-installation-info-index").data("gridOptions", {
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
            label : '安装状态',
            name : 'status',
            formatter : 'select',
            searchoptions : {
                value : Util.getCacheEnumsByType('InstallationStatusEnum')
            },
            width : 80,
            editable: true,
            align : 'center'
        }, {
            label : '安装人',
            name : 'installer',
            width : 20,
            editable: true,
            align : 'left'
        }, {
            label : '安装人电话',
            name : 'phone',
            width : 20,
            editable: true,
            align : 'left'
        }, {
            label : '安装情况说明',
            name : 'explain',
            width : 200,
            editable: true,
            align : 'left'
        } ],
        editurl : WEB_ROOT + '/engineering/order/save.json',
        delurl : WEB_ROOT + '/engineering/order/delete.json',
        fullediturl : WEB_ROOT + '/engineering/order/inputTabs.htm'
    });
});
