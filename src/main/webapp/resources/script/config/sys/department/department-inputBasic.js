$(function() {
    $(".form-config-sys-department-inputBasic").data("formOptions", {
        bindEvents : function() {
            var $form = $(this);
            
            var $el = $form.find("input[name='parent.id']");
            var $ajaxCacheContainer = $el.closest(".panel-content");
            var url = $el.attr("data-optionsurl");
            $el.select2({
                minimumInputLength : 0,
                ajax : {
                    cache : $ajaxCacheContainer.data(url) ? true : false,
                    url : url,
                    dataType : 'json',
                    results : function(data, page) {
                        $ajaxCacheContainer.data(url, "cached");
                        var results = $.map(data.content, function(n) {
                        	if (n.id == $form.find("input[name='id']").val())
                        		return ;
                        	var sp = "";
                        	if (!!n.parent){
                        		sp+="[" + n.parent.name + "]";
                        		if (!!n.parent.parent){
                        			sp+="[" + n.parent.name + "]";
	                        		if (!!n.parent.parent.parent)
	                        			sp+="[" + n.parent.name + "]";
                        		}
                        	}
                            return {
                                id : n.id,
                                text : sp + n.name
                            };
                        });
                        return {
                            results : results
                        };
                    }
                },
                initSelection : function(element, callback) {
                    callback({
                        id : $(element).val(),
                        text : $(element).attr("data-display")
                    });
                }
            });
        }
    });
    
});