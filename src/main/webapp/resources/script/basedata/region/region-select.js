$(function() {
    $(".grid-region-select-index").data("gridOptions", {
        url : WEB_ROOT + '/basedata/region/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true
        }, {
            label : '区域编号',
            name : 'code',
            width : 20,
            editable: true,
            align : 'left'
        }, {
            label : '区域名称',
            name : 'name',
            width : 30,
            editable: true,
            align : 'left'
        }, {
            label : '区域负责人',
            name : 'employee.name',
            width : 30,
            editable: true,
            align : 'left'
        }, {
            label : '所在省',
            name : 'province',
            width : 30,
            editable: true,
            align : 'left'
        }, {
            label : '长沙市',
            name : 'city',
            width : 30,
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
