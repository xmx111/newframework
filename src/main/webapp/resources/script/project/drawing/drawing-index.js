$(function() {
    $('.drawing-search-div').find('#search_engineeringName').select2({
        openOnEnter: false,
//        placeholder: '请选择工程名称',
        width: '169px',
        selectOnBlur: true,
        formatSearching: function(){
            return '搜索中...';
        },
        initSelection : function (element, callback) {
            var data = {id: $('.drawing-search-div').find('#init_engineeringId').val(), name: $('.drawing-search-div').find('#init_engineeringName').val()};
            callback(data);
        },
        ajax: {
            url: WEB_ROOT + '/project/contract/select.json',
            dataType: 'json',
            quietMillis: 250,
            data: function (term, page) { // page is the one-based page number tracked by Select2
                return {
                    engineeringName: term, //search term
                    page: page // page number
                };
            },
            results: function (data, page) {
                console.log(data);
                if (!data.content){
                    return {results : {}};
                }
                var results = $.map(data.content, function(n) {
                    return {
                        id : n.id,
                        name : n.engineeringName
                    };
                });
                return {
                    results : results
                };
            }
        },
        formatResult: function (item) {
            return item.name;
        }, // 选择结果中的显示
        formatSelection: function (item) { return item.name; }//,  // 搜索列表中的显示
    });

    $('.drawing-search-div').find("#search_version").select2({
        openOnEnter: false,
        placeholder: '请选择版本号',
        width: '169px',
        selectOnBlur: true,
        formatSearching: function(){
            return '搜索中...';
        },
//        initSelection : function (element, callback) {
//            var data = {id: $(newOrder.div).find('#courseIdSelect2').val(),cardTypeId: $(newOrder.div).find('#cardTypeId').val(),  name: $(newOrder.div).find('#courseName').val(), canOrderDate: $(newOrder.div).find('#canOrderDate').val(), startDate: $(newOrder.div).find('#startDate').val(), endDate: $(newOrder.div).find('#endDate').val()};
//            callback(data);
//        },
        ajax: {
            url: WEB_ROOT + '/project/drawing/selectVersion.json',
            dataType: 'json',
            quietMillis: 250,
            data: function (term, page) { // page is the one-based page number tracked by Select2
                return {
                    contractId: !!$('.drawing-search-div').find("#search_engineeringName").val() ? $('.drawing-search-div').find("#search_engineeringName").val() : $('.drawing-search-div').find("#init_engineeringId").val(), //search term
                    type: $('.drawing-search-div').find("#search_type").val(), //search term
                    page: page // page number
                };
            },
            results: function (data, page) {
                if (!data){
                    return {results : {}};
                }
                var results = $.map(data, function(n) {
                    return {
                        id : n,
                        name : n
                    };
                });
                return {
                    results : results
                };
            }
        },
        formatResult: function (item) {
            return item.name;
        }, // 选择结果中的显示
        formatSelection: function (item) { return item.name; }//,  // 搜索列表中的显示
    });

    $('.drawing-search-div').find(".hidden-inline-xs").click(function(){
        $('.drawing-search-div').find("#search_version").select2('val', '');
    });

    $(".grid-project-drawing-drawing-index").data("gridOptions", {
        url : WEB_ROOT + '/project/drawing/findByPage.json',
        colModel : [ {
            label : '流水号',
            name : 'id',
            hidden : true
        }, {
            label : '工程编号',
            name : 'contract.engineeringCode',
            width : 40,
            editable: true,
            align : 'left'
        }, {
            label : '工程名称',
            name : 'contract.engineeringName',
            width : 50,
            editable: true,
            align : 'left'
        }, {
            label : '图纸类别',
            name : 'type',
            formatter : 'select',
            searchoptions : {
                value : Util.getCacheEnumsByType('DrawingEnum')
            },
            width : 40,
            editable: true,
            align : 'center'
        }, {
            label : '设计版本号',
            name : 'version',
            width : 30,
            editable: true,
            align : 'right'
        }, {
            label : '图纸编号',
            name : 'code',
            width : 30,
            editable: true,
            align : 'right'
        }, {
            label : '图纸名称',
            name : 'name',
            width : 60,
            editable: true,
            align : 'left'
        }, {
            label : '图纸描述',
            name : 'describes',
            width : 80,
            editable: true,
            align : 'left'
        }, {
            label : '设计师姓名',
            name : 'designer',
            width : 30,
            editable: true,
            align : 'left'
        } ],
        editurl : WEB_ROOT + '/project/drawing/save.json',
        delurl : WEB_ROOT + '/project/drawing/delete.json',
        fullediturl : WEB_ROOT + '/project/drawing/inputTabs.htm'
    });
});
