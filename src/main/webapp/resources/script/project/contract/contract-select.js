$(function() {
    $(".grid-contract-select-index").data("gridOptions", {
        url : WEB_ROOT + '/project/contract/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true
        }, {
            label : '合同编号',
            name : 'code',
            width : 20,
            editable: true,
            align : 'left'
        }, {
            label : '合同名称',
            name : 'name',
            width : 30,
            editable: true,
            align : 'left'
        }, {
            label : '工程编号',
            name : 'engineeringCode',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '工程名称',
            name : 'engineeringName',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '客户编号',
            name : 'custom.code',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '客户姓名',
            name : 'custom.name',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '联系电话',
            name : 'custom.phone',
            width : 40,
            editable: true,
            align : 'left'
        } ],
        multiboxonly : false,
        onSelectRow : function(id) {
            var $grid = $(this);
            var $dialog = $grid.closest(".modal");
            $dialog.modal("hide");
            var callback = $dialog.data("callback");
            if (callback) {
                var rowdata = $grid.jqGrid("getRowData", id);
                rowdata.id = id;
                callback.call($grid, rowdata);
            }
        }
    });
});
