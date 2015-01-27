$(function() {
    Tools.EnumUnitList('ManagerEnum','type');
    $(".form-config-sys-manager-inputBasic").data("formOptions", {
        bindEvents : function() {
            var $form = $(this);
        }
    });
    Tools.AjaxUnitList('/config/sys/department/findByPage.json','department');
});