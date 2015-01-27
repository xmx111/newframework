$(function() {
    $(".grid-order-material-details-view").data("gridOptions", {
        url : WEB_ROOT + "/engineering/order/details/getOrderDetails.json?id=" + $('.div-order-view #id').val(),
        height: 'auto',
        colModel : [ {
            label : '材料id',
            name : 'material.id',
            hidden : true,
            hidedlg : true,
            editable : true
        }, {
            label : '材料编号',
            name : 'material.code',
            editable : true,
            width : 100,
            align : 'left'
        }, {
            label : '材料名称',
            name : 'material.name',
            editable : true,
            width : 100,
            align : 'left'
        }, {
            label : '材料参数要求',
            name : 'requireParameter',
            width : 120,
            editable : true
        }, {
            label : '数量要求',
            name : 'requireNum',
            width : 60,
            editable : true
        }, {
            label : '生产厂家',
            name : 'manufacturers',
            width : 100,
            editable : true
        }, {
            label : '生产批次',
            name : 'batch',
            width : 60,
            editable : true
        }, {
            label : '实际材料参数',
            name : 'actParameter',
            width : 100,
            editable : true
        }, {
            label : '收货验收状态',
            name : 'acceptanceStatus',
            width : 60,
            editable : true,
            editrules : {
                required : true
            },
            stype : 'select',
            searchoptions : {
                value : Tools.getCacheEnumsByType('AcceptanceEnum')
            }
        }, {
            label : '实际材料参数',
            name : 'actParameter',
            width : 100,
            editable : true
        }, {
            label : '收货验收照片',
            name : 'acceptanceUrl',
            hidden : true,
            hidedlg : true,
            editable : true
        }, {
            label : '收货验收照片',
            name : 'photo',
            width : 80,
            formatter : function(cellValue, options, rowdata, action) {
                var result = "";
                for (var i = 0; i < rowdata.images.length; i ++){
                    result += '<a href="' + rowdata.images[i].url + '" target="_blank"><img src="' + rowdata.images[i].url + '" width="105" height="75" /><a/>';
                    if (i != rowdata.images.length - 1)
                        result += '<br/>'
                }
                return result;
            },
            align : 'center',
            editable : false
        } ],
        multiselect : false
    });

    $(".grid-order-express-details").data("gridOptions", {
        url : WEB_ROOT + '/engineering/order/expressway/findByPage.json?search["EQ_express.id"]=' +  + $('.div-order-view #express_id').val(),
        height: 'auto',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true
        }, {
            label : '更新时间',
            name : 'createTime',
            width : 200,
            editable: false,
            align : 'left'
        }, {
            label : '更新状态',
            name : 'way',
            width : 200,
            editable: false,
            align : 'left'
        } ],
        multiselect : false
    });

    Tools.EnumUnitList('OrderStatusEnum', 'status');
    Tools.EnumUnitList('OrderTypeEnum', 'type');
//    Tools.EnumUnitList('ExpressStatusEnum', 'express-status');
});