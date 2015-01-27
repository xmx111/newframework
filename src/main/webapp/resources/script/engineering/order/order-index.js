$(function() {
    $(".grid-engineering-order-order-index").data("gridOptions", {
        url : WEB_ROOT + '/engineering/order/findByPage.json',
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
            label : '订单编号',
            name : 'code',
            width : 20,
            editable: true,
            align : 'left'
        }, {
            label : '订单名称',
            name : 'name',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '订单日期',
            name : 'date',
            width : 50,
            formatter: 'date',
            editable: true,
            align : 'center'
        }, {
            label : '订单状态',
            name : 'status',
            formatter : 'select',
            searchoptions : {
                value : Util.getCacheEnumsByType('OrderStatusEnum')
            },
            width : 40,
            editable: true,
            align : 'center'
        }, {
            label : '供货商名称',
            name : 'supplier.name',
            width : 80,
            editable: true,
            align : 'left'
        }, {
            label : '供货商联系电话',
            name : 'supplier.tel',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '操作',
            name : 'opt',
            formatter : function(cellValue, options, rowdata, action) {
                var urldetail = WEB_ROOT + '/engineering/order/view.htm?id='+rowdata.id;
                var result = '<a data-toggle="dynamic-tab" data-url="'+urldetail+'"  href="javascript:;" title="订单详情"><button type="button" class="btn btn-primary">订单详情</button></a>&nbsp;';
                return result;
            },
            width : 45,
            editable: false,
            sortable: false,
            align : 'left'
        } ],
        editurl : WEB_ROOT + '/engineering/order/save.json',
        delurl : WEB_ROOT + '/engineering/order/delete.json',
        fullediturl : WEB_ROOT + '/engineering/order/inputTabs.htm'
    });
});
