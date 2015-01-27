$(function() {
    $(".grid-basedata-news-news-index").data("gridOptions", {
        url : WEB_ROOT + '/basedata/news/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true                          
        }, {
            label : '类型',
            name : 'type',
            formatter : 'select',
            searchoptions : {
                value : Util.getCacheEnumsByType('TypeEnum')
            },
            width : 80,
            editable: true,
            align : 'center'
        }, {
            label : '标题',
            name : 'title',
            width : 255,
            editable: true,
            align : 'left'
        }, {
            label : '发布时间',
            name : 'createTime',
            width : 200,
            editable: true,
            align : 'left'
        } ],
        editurl : WEB_ROOT + '/basedata/news/save.json',
        delurl : WEB_ROOT + '/basedata/news/delete.json',
        fullediturl : WEB_ROOT + '/basedata/news/inputTabs.htm'
    });

    $('#search_type').select2();
//    Tools.EnumUnitList('TypeEnum', 'search_type');
});
