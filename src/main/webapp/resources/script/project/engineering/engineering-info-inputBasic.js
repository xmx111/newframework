$(function() {
    $(".form-project-engineering-engineering-info-inputBasic").data("formOptions", {
        bindEvents : function() {
            var $form = $(this);
            $form.find(".contract-select").click(function() {
                $(this).popupDialog({
                    url : WEB_ROOT + '/project/contract/select.htm',
                    callback : function(rowdata) {
                        $("#engineering_code").val(rowdata.engineeringCode).attr("readonly","readonly");
                        $("#engineering_name").val(rowdata.engineeringName);
                        $("#contract_id").val(rowdata.id);
                    }
                })
            });

            $form.find('#estate_img').on("click", function(){
                $form.closest('div').find('#upload-button0').prev().find('.ke-upload-file').trigger("click");
            });
            $form.find('#designer_img').on("click", function(){
                $form.closest('div').find('#upload-button1').prev().find('.ke-upload-file').trigger("click");
            });
            $form.find('#input-designer-upload-video').on("click", function(){
                $form.closest('div').find('#upload-button1-video').prev().find('.ke-upload-file').trigger("click");
            });
            $form.find('#projectmanager_img').on("click", function(){
                $form.closest('div').find('#upload-button2').prev().find('.ke-upload-file').trigger("click");
            });
            $form.find('#projectbutler_img').on("click", function(){
                $form.closest('div').find('#upload-button3').prev().find('.ke-upload-file').trigger("click");
            });
            $form.find('#deependesigner_img').on("click", function(){
                $form.closest('div').find('#upload-button4').prev().find('.ke-upload-file').trigger("click");
            });
            $form.find('#input-group-upload-video').on("click", function(){
                $form.closest('div').find('#upload-button-video').prev().find('.ke-upload-file').trigger("click");
            });
            var uploadbuttonVideo = KindEditor.uploadbutton({
                button : $('#upload-button-video')[0],
                fieldName : 'videoFile',
                url : WEB_ROOT + '/upload.json',
                afterUpload : function(data) {
                    $('#video').val(data.name);
                    $('#videoUrl').val(data.url);
                }
            });
            uploadbuttonVideo.fileBox.change(function(e) {
                uploadbuttonVideo.submit();
            });
            var uploadbutton0 = KindEditor.uploadbutton({
                button : $('#upload-button0')[0],
                fieldName : 'headFile',
                url : WEB_ROOT + '/upload.json',
                afterUpload : function(data) {
                    $('#estate_img').attr('src', data.url);
                    $('#estate_photo').val(data.url);
                }
            });
            uploadbutton0.fileBox.change(function(e) {
                uploadbutton0.submit();
            });
            var uploadbutton1 = KindEditor.uploadbutton({
                button : $('#upload-button1')[0],
                fieldName : 'headFile',
                url : WEB_ROOT + '/upload.json',
                afterUpload : function(data) {
                    $('#designer_img').attr('src', data.url);
                    $('#designer_photo').val(data.url);
                }
            });
            uploadbutton1.fileBox.change(function(e) {
                uploadbutton1.submit();
            });
            var uploadbutton1Video = KindEditor.uploadbutton({
                button : $('#upload-button1-video')[0],
                fieldName : 'videoFile',
                url : WEB_ROOT + '/upload.json',
                afterUpload : function(data) {
                    $('#designer_video').val(data.url);
                }
            });
            uploadbutton1Video.fileBox.change(function(e) {
                uploadbutton1Video.submit();
            });
            var uploadbutton2 = KindEditor.uploadbutton({
                button : $('#upload-button2')[0],
                fieldName : 'headFile',
                url : WEB_ROOT + '/upload.json',
                afterUpload : function(data) {
                    $('#projectmanager_img').attr('src', data.url);
                    $('#projectmanager_photo').val(data.url);
                }
            });
            uploadbutton2.fileBox.change(function(e) {
                uploadbutton2.submit();
            });
            var uploadbutton3 = KindEditor.uploadbutton({
                button : $('#upload-button3')[0],
                fieldName : 'headFile',
                url : WEB_ROOT + '/upload.json',
                afterUpload : function(data) {
                    $('#projectbutler_img').attr('src', data.url);
                    $('#projectbutler_photo').val(data.url);
                }
            });
            uploadbutton3.fileBox.change(function(e) {
                uploadbutton3.submit();
            });
            var uploadbutton4 = KindEditor.uploadbutton({
                button : $('#upload-button4')[0],
                fieldName : 'headFile',
                url : WEB_ROOT + '/upload.json',
                afterUpload : function(data) {
                    $('#deependesigner_img').attr('src', data.url);
                    $('#deependesigner_photo').val(data.url);
                }
            });
            uploadbutton4.fileBox.change(function(e) {
                uploadbutton4.submit();
            });
        }
    });
});