$(function() {
    $(".grid-supplier-select-index").data("gridOptions", {
        url : WEB_ROOT + '/ucenter/supplier/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true
        }, {
            label : '供货商编号',
            name : 'code',
            width : 20,
            editable: true,
            align : 'left'
        }, {
            label : '供货商姓名',
            name : 'name',
            width : 30,
            editable: true,
            align : 'left'
        }, {
            label : '供货商联系人',
            name : 'contacts',
            width : 20,
            editable: true,
            align : 'left'
        }, {
            label : '供货商联系电话',
            name : 'tel',
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
