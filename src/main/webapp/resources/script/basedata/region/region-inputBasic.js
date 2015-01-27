$(function() {
    $(".form-basedata-region-region-inputBasic").data("formOptions", {
        bindEvents : function() {
            var $form = $(this);
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
});