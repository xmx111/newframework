$(function() {
    $(".form-project-contract-contract-inputBasic").data("formOptions", {
        bindEvents : function() {
            var $form = $(this);
            $form.find(".custom-select").click(function() {
                $(this).popupDialog({
                    url : WEB_ROOT + '/ucenter/custom/select.htm',
                    callback : function(rowdata) {
                        $("#custom_code").val(rowdata.code).attr("readonly","readonly");
                        $("#custom_name").val(rowdata.name).attr("readonly","readonly");
                        $("#custom_phone").val(rowdata.phone);
                        $("#custom_id").val(rowdata.id);
                    }
                })
            });
            $form.find(".employee-select").click(function() {
                $(this).popupDialog({
                    url : WEB_ROOT + '/ucenter/employee/select.htm',
                    callback : function(rowdata) {
                        $("#employee_name").val(rowdata.name).attr("readonly","readonly");
                        $("#employee_id").val(rowdata.id);
                    }
                })
            });
        }
    });
    Tools.EnumUnitList('ContractEnum', 'type');
});