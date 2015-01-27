$(function() {
    $(".grid-employee-select-index").data("gridOptions", {
        url : WEB_ROOT + '/ucenter/employee/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true
        }, {
            label : '员工编号',
            name : 'code',
            width : 30,
            editable: true,
            align : 'left'
        }, {
            label : '员工名称',
            name : 'name',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '员工电话',
            name : 'phone',
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
