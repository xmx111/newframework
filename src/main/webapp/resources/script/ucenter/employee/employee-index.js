$(function() {
    $(".grid-ucenter-employee-employee-index").data("gridOptions", {
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
            label : '员工姓名',
            name : 'name',
            width : 30,
            editable: true,
            align : 'left'
        }, {
            label : '员工性别',
            name : 'sex',
            formatter : 'select',
            searchoptions : {
                value : Util.getCacheEnumsByType('SexEnum')
            },
            width : 30,
            editable: true,
            align : 'left'
        }, {
            label : '员工联系电话',
            name : 'phone',
            width : 30,
            editable: true,
            align : 'left'
        }, {
            label : '员工邮箱',
            name : 'email',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '员工类型',
            name : 'type',
            formatter : 'select',
            searchoptions : {
                value : Util.getCacheEnumsByType('EmployeeEnum')
            },
            width : 50,
            editable: true,
            align : 'left'
        }, {
            label : '员工岗位',
            name : 'station',
            formatter : 'select',
            searchoptions : {
                value : Util.getCacheEnumsByType('StationEnum')
            },
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '员工状态',
            name : 'status',
            formatter : 'select',
            searchoptions : {
                value : Util.getCacheEnumsByType('EmployeeStatusEnum')
            },
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '入职时间',
            name : 'dutyDate',
            width : 90,
            formatter: 'date',
            editable: true,
            align : 'left'
        }, {
            label : '离职时间',
            name : 'leaveDate',
            width : 90,
            formatter: 'date',
            editable: true,
            align : 'left'
        } ],
        editurl : WEB_ROOT + '/ucenter/employee/save.json',
        delurl : WEB_ROOT + '/ucenter/employee/delete.json',
        fullediturl : WEB_ROOT + '/ucenter/employee/inputTabs.htm'
    });
});
