$(function() {
    $(".grid-project-engineering-engineering-info-index").data("gridOptions", {
        url : WEB_ROOT + '/project/engineering/engineeringinfo/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true                          
        }, {
            label : '工程编号',
            name : 'contract.engineeringCode',
            width : 80,
            editable: true,
            align : 'left'
        }, {
            label : '工程名称',
            name : 'contract.engineeringName',
            width : 100,
            editable: true,
            align : 'left'
        }, {
            label : '编辑状态',
            name : 'type',
            formatter : 'select',
            searchoptions : {
                value : Util.getCacheEnumsByType('EditTypeEnum')
            },
            width : 80,
            editable: true,
            align : 'center'
        }, {
            label : '编辑时间',
            name : 'updateTime',
            width : 100,
            editable: true,
            align : 'left'
        }, {
            label : '编辑操作员姓名',
            name : 'updateOperator.name',
            width : 100,
            editable: true,
            align : 'left'
//        }, {
//            label : '操作',
//            width : 100,
//            editable: true,
//            align : 'center',
//            formatter : function(cellValue, options, rowdata, action) {
//                var url = WEB_ROOT + '/project/engineering/engineeringinfo/viewBasic.htm?id=' + rowdata.id;
//                return '<a href="' + url + '" data-toggle="modal-ajaxify" title="工程关联信息预览"><button class="btn btn-info">预览</button></a>';
//            }
        } ],
        editurl : WEB_ROOT + '/project/engineering/engineeringinfo/save.json',
        delurl : WEB_ROOT + '/project/engineering/engineeringinfo/delete.json',
        fullediturl : WEB_ROOT + '/project/engineering/engineeringinfo/inputTabs.htm'
    });
});
