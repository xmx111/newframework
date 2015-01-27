$(function() {
    $(".form-project-quote-quote-inputBasic").data("formOptions", {
        bindEvents : function() {
            var $form = $(this);
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
            $form.find('.max-code').on('click', function(){
                var cid = $('#contract_id').val();
                if (cid == ''){
                    Global.notify('error','请先选择工程');
                    return false;
                }
                $.ajax({
                    type: 'POST',
                    cache: false,
                    url: WEB_ROOT+'/project/quote/getMaxCode.json',
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
            $form.find('#quote_url').on('click', function(){
                $form.closest('div').find('#upload-quote').prev().find('.ke-upload-file').trigger('click');
            });
            var uploadbutton = KindEditor.uploadbutton({
                button : $('#upload-quote')[0],
                fieldName : 'drawingFile',
                url : WEB_ROOT + '/upload.json',
                afterUpload : function(data) {
                    $('#quote_url').attr('src', data.url);
                    $('#url').val(data.url);
                }
            });
            uploadbutton.fileBox.change(function(e) {
                uploadbutton.submit();
            });
        }
    });
});