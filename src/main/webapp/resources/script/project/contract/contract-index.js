$(function() {
    $(".grid-project-contract-contract-index").data("gridOptions", {
        url : WEB_ROOT + '/project/contract/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true                          
        }, {
            label : '合同编号',
            name : 'code',
            width : 30,
            editable: true,
            align : 'left'
        }, {
            label : '合同名称',
            name : 'name',
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
            name : 'customPhone',
            width : 40,
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
            label : '合同类型',
            name : 'type',
            formatter : 'select',
            searchoptions : {
                value : Util.getCacheEnumsByType('ContractEnum')
            },
            width : 40,
            editable: true,
            align : 'center'
        }, {
            label : '创建时间',
            name : 'createTime',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '创建人',
            name : 'createOperatorName',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '修改时间',
            name : 'updateTime',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '修改人',
            name : 'updateOperatorName',
            width : 40,
            editable: true,
            align : 'left'
        } ],
        editurl : WEB_ROOT + '/project/contract/save.json',
        delurl : WEB_ROOT + '/project/contract/delete.json',
        fullediturl : WEB_ROOT + '/project/contract/inputTabs.htm'
    });


    $(function () {
        $('.date').datetimepicker({
            language: 'zh-cn',
            pickTime: false,
            format: "YYYY-MM-DD"
        });
    });
});
