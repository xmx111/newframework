$(function() {
    $(".grid-project-engineering-related-personal-index").data("gridOptions", {
        url : WEB_ROOT + '/project/engineering/relatedpersonal/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true                          
        }, {
            label : '是否删除',
            name : 'deleted',
            formatter : 'select',
            searchoptions : {
                value : Util.getCacheEnumsByType('DeleteTypeEnum')
            },
            width : 80,
            editable: true,
            align : 'center'
        }, {
            label : '姓名',
            name : 'name',
            width : 80,
            editable: true,
            align : 'left'
        }, {
            label : '类型',
            name : 'type',
            formatter : 'select',
            searchoptions : {
                value : Util.getCacheEnumsByType('RelatedPersonelEnum')
            },
            width : 80,
            editable: true,
            align : 'center'
        }, {
            label : '电话',
            name : 'phone',
            width : 20,
            editable: true,
            align : 'left'
        }, {
            label : '照片',
            name : 'photo',
            width : 60,
            editable: true,
            align : 'left'
        }, {
            label : '介绍',
            name : 'introduce',
            width : 200,
            editable: true,
            align : 'left'
        } ],
        editurl : WEB_ROOT + '/project/engineering/relatedpersonal/save.json',
        delurl : WEB_ROOT + '/project/engineering/relatedpersonal/delete.json',
        fullediturl : WEB_ROOT + '/project/engineering/relatedpersonal/inputTabs.htm'
    });
});
