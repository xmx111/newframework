$(function() {
    $(".grid-custom-select-index").data("gridOptions", {
        url : WEB_ROOT + '/ucenter/custom/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true
        }, {
            label : '客户编号',
            name : 'code',
            width : 20,
            editable: true,
            align : 'left'
        }, {
            label : '客户姓名',
            name : 'name',
            width : 30,
            editable: true,
            align : 'left'
        }, {
            label : '客户性别',
            name : 'sex',
            formatter : 'select',
            searchoptions : {
                value : Util.getCacheEnumsByType('SexEnum')
            },
            width : 80,
            editable: true,
            align : 'center'
        }, {
            label : '客户联系电话',
            name : 'phone',
            width : 20,
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
