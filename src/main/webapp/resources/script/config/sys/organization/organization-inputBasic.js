$(function() {
    $(".form-config-sys-organization-inputBasic").data("formOptions", {
        bindEvents : function() {
            var $form = $(this);
        }
    });
    
    Tools.EnumUnitList('OrganizationTypeEnum','typeOrg');//机构类型
});