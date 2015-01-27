$(function() {
    imageRowMap = {};
    $(".form-engineering-order-order-inputBasic").data("formOptions", {
        bindEvents : function() {
            var $form = $(this);
            $('.date').datetimepicker({
                language:'zh-cn',
                format:"YYYY-MM-DD HH:mm:ss",
                showToday: true
            });
            $form.find('.contract-select').click(function() {
                $(this).popupDialog({
                    url : WEB_ROOT + '/project/contract/select.htm',
                    callback : function(rowdata) {
                        $('#engineering_code').val(rowdata.engineeringCode).attr('readonly','readonly');
                        $('#engineering_name').val(rowdata.engineeringName);
                        $('#contract_id').val(rowdata.id);
                    }
                })
            });
            $form.find('.supplier-select').click(function() {
                $(this).popupDialog({
                    url : WEB_ROOT + '/ucenter/supplier/select.htm',
                    callback : function(rowdata) {
                        $('#supplier_code').val(rowdata.code);
                        $('#supplier_name').val(rowdata.name);
                        $('#supplier_contacts').val(rowdata.contacts);
                        $('#supplier_tel').val(rowdata.tel);
                        $('#supplier_id').val(rowdata.id);
                    }
                })
            });

            var uploadbutton = KindEditor.uploadbutton({
                button : $('#upload-input')[0],
                fieldName : 'imgFile',
                url : WEB_ROOT + '/upload.json',
                afterUpload : function(data) {
                    var $grid = $(".grid-order-material-details");
                    var $subgrid = $('#' + $('.form-engineering-order-order-inputBasic').closest('div').find('#subgrid-id').val());
                    var subrowid = $('.form-engineering-order-order-inputBasic').closest('div').find('#subgrid-sel-rowid').val();
                    $subgrid.jqGrid('setRowData', subrowid, {'url':data.url});
                    $subgrid.find('tr#' + subrowid).find('img').attr('src', data.url);
                    imageRowMap[subrowid] = data.url;
                    var rowdata = $grid.jqGrid("getEditingRowdata");
                    var imageUrl = '';
                    for (var key in imageRowMap) {
                        if (!!imageRowMap[key] && imageRowMap[key] != '')
                            imageUrl = imageUrl + imageRowMap[key]+',';
                    }
                    rowdata['imagesUrl'] = imageUrl;
                    $grid.jqGrid("setEditingRowdata", rowdata);
                }
            });
            uploadbutton.fileBox.change(function(e) {
                uploadbutton.submit();
            });
        }
    });

    $(".grid-order-material-details").data("gridOptions", {
        batchEntitiesPrefix : "orderDetails",
        url : function() {
            var pk = $(this).attr("data-pk");
            if (pk) {
                return WEB_ROOT + "/engineering/order/details/getOrderDetails.json?id=" + pk;
            }
        },
        colModel : [{
            label : '所属订单主键',
            name : 'order.id',
            hidden : true,
            hidedlg : true,
            editable : true,
            formatter : function(cellValue, options, rowdata, action) {
                var pk = $(this).attr("data-pk");
                return pk ? pk : "";
            }
        }, {
            label : '材料id',
            name : 'material.id',
            hidden : true,
            hidedlg : true,
            editable : true
        }, {
            label : '材料编号',
            name : 'material.code',
            editable : true,
            editrules : {
                required : true
            },
            editoptions : {
//                placeholder : '输入编码、名称过滤...',
                readonly : true,
                dataInit : function(elem) {
                    var $grid = $(this);
                    var $elem = $(elem);

                    $elem.wrap('<div class="input-icon right"/>');
                    $elem.before('<i class="fa fa-ellipsis-h fa-select-material"></i>');
                    $elem.before('<i class="fa fa-times fa-clear-material"></i>');
                    var code = $elem.attr("name");
                    var id = code.replace(".code", ".id");
                    var name = code.replace(".code", ".name");
                    var selectMaterial = function(item) {
                        var rowdata = $grid.jqGrid("getEditingRowdata");
                        // 强制覆盖已有值
                        rowdata[id] = item.id, rowdata[code] = item.code, rowdata[name] = item.name;
                        $grid.jqGrid("setEditingRowdata", rowdata);
                        // 如果没有值才覆盖
                        $grid.jqGrid("setEditingRowdata", {
                            'num' : 1
                        }, false);

                    };
                    $elem.parent().find(".fa-clear-material").click(function() {
                        var rowdata = $grid.jqGrid("getEditingRowdata");
                        // 强制覆盖已有值
                        rowdata[id] = '', rowdata[code] = '', rowdata[name] = '';
                        $grid.jqGrid("setEditingRowdata", rowdata);
                    });
                    $elem.parent().find(".fa-select-material").click(function() {
                        $(this).popupDialog({
                            url : WEB_ROOT + '/basedata/material/select.htm',
                            title : '选取材料',
                            callback : function(item) {
                                $elem.attr("title", item.name);
                                selectMaterial.call($elem, item);
                            }
                        })
                    });
                }
            },
            width : 100,
            align : 'left'
        }, {
            label : '材料名称',
            name : 'material.name',
            editable : true,
            width : 100,
            editoptions : {
                readonly : true
            },
            editrules : {
                required : true
            },
            align : 'left'
        }, {
            label : '材料参数要求',
            name : 'requireParameter',
            width : 120,
            editable : true
        }, {
            label : '数量要求',
            name : 'requireNum',
            width : 60,
            editable : true
        }, {
            label : '生产厂家',
            name : 'manufacturers',
            width : 100,
            editable : true
        }, {
            label : '生产批次',
            name : 'batch',
            width : 60,
            editable : true
        }, {
            label : '实际材料参数',
            name : 'actParameter',
            width : 100,
            editable : true
        }, {
            label : '收货验收状态',
            name : 'acceptanceStatus',
            width : 60,
            editable : true,
            editrules : {
                required : true
            },
            stype : 'select',
            searchoptions : {
                value : Tools.getCacheEnumsByType('AcceptanceEnum')
            }
        }, {
            label : '实际材料参数',
            name : 'actParameter',
            width : 100,
            editable : true
        }, {
            label : '操作',
            name : 'upload',
            width : 60,
            formatter : function(cellValue, options, rowdata, action) {
                var result = '<a href="javascript:;" class="acceptance-upload-photo"><botton class="btn btn-primary">上传图片</botton></a>';
                return result;
            },
            align : 'center',
            editable : false
        }, {
            label : '图片',
            name : 'imagesUrl',
            hidden : true,
            hidedlg : true,
            editable : true
        } ],
        onCellSelect : function(rowid, index, contents, event){
            if (index == 13){
                var $grid = $(this);
                if ($grid.find('tr#' + rowid).find('.ui-icon-plus').length == 1)
                    $grid.find('tr#' + rowid).find('.ui-icon-plus').trigger('click');
                else
                    $grid.find('tr#' + rowid).find('.ui-icon-minus').trigger('click');
            }
        },
        ExpandColumn:'upload',
//        gridComplete : function(){
//            var $grid = $(this);
//            $grid.find('.acceptance-upload-photo').off('click').on('click', function(){
//                $(".form-engineering-order-order-inputBasic").closest('div').find('#upload-input').prev().find('.ke-upload-file').trigger('click');
//            });
//        },
        subGrid : true,
        subGridRowExpanded : function(subgrid_id, row_id) {
            var $grid = $(this);
            var rowdata = $grid.getRowData(row_id);
            Grid.initSubGrid(subgrid_id, row_id, {
                batchEntitiesPrefix : "images",
                url : WEB_ROOT + "/engineering/order/acceptanceimage/findByPage.json?search[\'EQ_orderDetails.id\']=" + (!!rowdata.id ? rowdata.id : 0),
                colModel : [{
                    label : '收货验收照片',
                    name : 'url',
                    hidden : true,
                    editable : true
                }, {
                    label : '收货验收照片',
                    name : 'image',
                    edittype : 'image',
                    formatter : function(cellValue, options, rowdata, action) {
                        var imgurl = WEB_ROOT + '/resources/images/upload-def2.jpg';
                        if (!!rowdata.url){
                            imgurl = WEB_ROOT + rowdata.url;
                            imageRowMap[options.rowId] = rowdata.url;
                        }
                        var result = '<a href="javascript:uploadClick(' + options.rowId + ');" class="acceptance-upload-photo"><img src="' + imgurl + '" /></a>';
                        return result;
                    },
                    align : 'center',
                    editable : false
                } ],
                //onSelectRow : function(rowid,status){
                //    var $grid = $(this);
                //    $(".form-engineering-order-order-inputBasic").closest('div').find('#subgrid-id').val($grid.attr('id'));
                //    $(".form-engineering-order-order-inputBasic").closest('div').find('#subgrid-sel-rowid').val(rowid);
                //    $(".form-engineering-order-order-inputBasic").closest('div').find('#upload-input').prev().find('.ke-upload-file').trigger('click');
                //},
                gridComplete : function(){
                    //var $grid = $(this);
                    //var dataIds = $grid.jqGrid('getDataIDs');
                    //for (var i = 0; i < dataIds.length; i ++){
                    //    console.log($grid.jqGrid("getRowData", dataIds[i]));
                    //    console.log('dataIds[' + i + ']=' + dataIds[i] + ' ' + $grid.jqGrid("getRowData", dataIds[i]).url);
                    //    imageRowMap[dataIds[i]] = !!$grid.jqGrid("getRowData", dataIds[i]) ? $grid.jqGrid("getRowData", dataIds[i]).url : '';
                    //}
                    //console.log(imageRowMap);
                },
                afterInlineDeleteRow : function(rowid){
                    delete imageRowMap[rowid];
                    var $grid = $(".grid-order-material-details");
                    var rowdata = $grid.jqGrid("getEditingRowdata");
                    var imageUrl = '';
                    for (var key in imageRowMap) {
                        if (!!imageRowMap[key] && imageRowMap[key] != '')
                            imageUrl = imageUrl + imageRowMap[key]+',';
                    }
                    rowdata['imagesUrl'] = imageUrl;
                    $grid.jqGrid("setEditingRowdata", rowdata);

                },
                appendAddNullRow: 1,
                loadonce : true
            }, 'items');
        }
    });

    Tools.EnumUnitList('OrderStatusEnum', 'status');
    Tools.EnumUnitList('OrderTypeEnum', 'type');
//    Tools.EnumUnitList('ExpressStatusEnum', 'express-status');
});

function uploadClick(rowid) {
    var $grid = $('.grid-order-material-details');
    $(".form-engineering-order-order-inputBasic").closest('div').find('#subgrid-id').val($grid.attr('id'));
    $(".form-engineering-order-order-inputBasic").closest('div').find('#subgrid-sel-rowid').val(rowid);
    $(".form-engineering-order-order-inputBasic").closest('div').find('#upload-input').prev().find('.ke-upload-file').trigger('click');
}