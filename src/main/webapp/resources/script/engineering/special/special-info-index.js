$(function() {
    $(".grid-engineering-special-special-info-index").data("gridOptions", {
        url : WEB_ROOT + '/engineering/special/findByPage.json',
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
            label : '采集时间',
            name : 'time',
            width : 50,
            editable: true,
            align : 'left'
        }, {
            label : '采集人账号',
            name : 'collector.loginName',
            width : 50,
            editable: true,
            align : 'left'
        }, {
            label : '采集人姓名',
            name : 'collector.name',
            width : 50,
            editable: true,
            align : 'left'
        }, {
            label : '文字描述',
            name : 'describes',
            width : 150,
            editable: true,
            align : 'left'
        }, {
            label : '操作',
            name : 'opt',
            formatter : function(cellValue, options, rowdata, action) {
                var urldetail = WEB_ROOT + '/engineering/special/view.htm?id='+rowdata.id;
                var result = '<a data-toggle="dynamic-tab" data-url="'+urldetail+'"  href="javascript:;" title="查看详情"><button type="button" class="btn btn-primary">查看详情</button></a>&nbsp;';
                return result;
            },
            width : 45,
            editable: false,
            sortable: false,
            align : 'left'
        } ]
    });
});
