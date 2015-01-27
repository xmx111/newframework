$(function() {
    $(".form-basedata-news-news-inputBasic").data("formOptions", {
        bindEvents : function() {
            var $form = $(this);
        }
    });
    Tools.EnumUnitList('TypeEnum', 'type');
});