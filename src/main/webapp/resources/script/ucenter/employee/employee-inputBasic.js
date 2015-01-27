$(function() {
    $(".form-ucenter-employee-employee-inputBasic").data("formOptions", {
        bindEvents : function() {
            var $form = $(this);

            $('.date').datetimepicker({
                language:'zh-cn',
                pickTime: false,
                format:"YYYY-MM-DD"
            });

            $form.find('#image_url').on('click', function(){
                $form.closest('div').find('#upload-input').prev().find('.ke-upload-file').trigger('click');
            });
            var uploadbutton = KindEditor.uploadbutton({
                button : $('#upload-input')[0],
                fieldName : 'headFile',
                url : WEB_ROOT + '/upload.json',
                afterUpload : function(data) {
                    $form.find('#image_url').attr('src', data.url);
                    $form.find('#headUrl').val(data.url);
                }
            });
            uploadbutton.fileBox.change(function(e) {
                uploadbutton.submit();
            });
        }
    });
    Tools.EnumUnitList('SexEnum', 'sex');
    Tools.EnumUnitList('EmployeeEnum', 'type');
    Tools.EnumUnitList('StationEnum', 'station');
    Tools.EnumUnitList('EmployeeStatusEnum', 'status');
});