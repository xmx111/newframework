$(function() {
    $(".grid-ucenter-custom-custom-index").data("gridOptions", {
        url : WEB_ROOT + '/ucenter/custom/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true                          
        }, {
            label : '客户编号',
            name : 'code',
            width : 30,
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
            width : 30,
            editable: true,
            align : 'left'
        }, {
            label : '客户联系电话',
            name : 'phone',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '客户邮箱',
            name : 'email',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '客户QQ号',
            name : 'qq',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '客户家庭住址',
            name : 'address',
            width : 120,
            editable: true,
            align : 'left'
        }, {
            label : '配偶姓名',
            name : 'spouseName',
            width : 30,
            editable: true,
            align : 'left'
        }, {
            label : '配偶联系电话',
            name : 'spousePhone',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '配偶邮箱',
            name : 'spouseEmail',
            width : 50,
            editable: true,
            align : 'left'
        }, {
            label : '配偶QQ号',
            name : 'spouseQq',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '注册方式',
            name : 'registerType',
            formatter : 'select',
            searchoptions : {
                value : Util.getCacheEnumsByType('RegisterEnum')
            },
            width : 40,
            editable: true,
            align : 'left'
        } ],
        editurl : WEB_ROOT + '/ucenter/custom/save.json',
        delurl : WEB_ROOT + '/ucenter/custom/delete.json',
        fullediturl : WEB_ROOT + '/ucenter/custom/inputTabs.htm'
    });
});
