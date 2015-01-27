$(function() {
    $('.form-project-drawing-drawing-inputBasic').data('formOptions', {
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
            $form.find('.max-version').on('click', function(){
                var cid = $('#contract_id').val();
                if (cid == ''){
                    Global.notify('error','请先选择工程');
                    return false;
                }
                $.ajax({
                    type: 'POST',
                    cache: false,
                    url: WEB_ROOT+'/project/drawing/getMaxVersion.json',
                    data: {id : cid},
                    dataType: 'json',
                    success: function (res) {
                        if (res == 0){
                            Global.notify('error','请先选择工程');
                        } else {
                            $form.find('#version').val(res);
                        }

                    }
                });
            });
            $form.find('.max-code').on('click', function(){
                var cid = $('#contract_id').val();
                if (cid == ''){
                    Global.notify('error','请先选择工程');
                    return false;
                }
                $.ajax({
                    type: 'POST',
                    cache: false,
                    url: WEB_ROOT+'/project/drawing/getMaxCode.json',
                    data: {id : cid},
                    dataType: 'json',
                    success: function (res) {
                        if (res == 0){
                            Global.notify('error','请先选择工程');
                        } else {
                            $form.find('#code').val(res);
                        }
                    }
                });
            });
            $form.find('#drawing_url').on('click', function(){
                $form.closest('div').find('#upload-drawing').prev().find('.ke-upload-file').trigger('click');
            });
            var uploadbutton = KindEditor.uploadbutton({
                button : $('#upload-drawing')[0],
                fieldName : 'drawingFile',
                url : WEB_ROOT + '/upload.json',
                afterUpload : function(data) {
                    $('#drawing_url').attr('src', data.url);
                    $('#url').val(data.url);
                }
            });
            uploadbutton.fileBox.change(function(e) {
                uploadbutton.submit();
            });
        }
    });
    Tools.EnumUnitList('DrawingEnum', 'type');
});