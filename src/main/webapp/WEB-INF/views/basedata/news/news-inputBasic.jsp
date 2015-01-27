<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<form class="form-horizontal form-bordered form-label-stripped form-validation form-basedata-news-news-inputBasic"
	action="${ctx}/basedata/news/save.json" method="post" >
	<input type="hidden" name="id" value="${clone eq true ? '' : dto.id}" />
	<div class="form-actions">
		<button class="btn blue" type="submit" data-grid-reload=".grid-basedata-news-news-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
	<div class="form-body">
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">类型</label>
					<div class="controls">
						<input type="hidden" id="typeKey" value="${dto.type}">
                        <select name="type" id="type"></select>
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">标题</label>
					<div class="controls">
		                <input class="form-control" name="title" value="${dto.title}" id="title" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
				<div class="form-group">
					<label class="control-label">详细内容</label>
					<div class="controls">
		                <textarea name="content" cols="" rows="" id="content" data-height="300px" data-htmleditor="kindeditor">${dto.content}</textarea>
					</div>
				</div>
            </div>
        </div>
	</div>
	<div class="form-actions right">
		<button class="btn blue" type="submit" data-grid-reload=".grid-basedata-news-news-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
</form>
<script src="${ctx}/resources/script/basedata/news/news-inputBasic.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>