$(function() {
    $(".grid-material-select-index").data("gridOptions", {
        url : WEB_ROOT + '/basedata/material/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true
        }, {
            label : '材料编号',
            name : 'code',
            width : 60,
            editable: true,
            align : 'left'
        }, {
            label : '材料名称',
            name : 'name',
            width : 80,
            editable: true,
            align : 'left'
        }, {
            label : '材料描述',
            name : 'describes',
            width : 150,
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
