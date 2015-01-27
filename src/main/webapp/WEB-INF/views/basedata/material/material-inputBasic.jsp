<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<form class="form-horizontal form-bordered form-label-stripped form-validation form-basedata-material-material-inputBasic"
	action="${ctx}/basedata/material/save.json" method="post" >
	<input type="hidden" name="id" value="${clone eq true ? '' : dto.id}" />
	<div class="form-actions">
		<button class="btn blue" type="submit" data-grid-reload=".grid-basedata-material-material-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
	<div class="form-body">
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">材料编号</label>
					<div class="controls">
		                <input class="form-control" ${dto.id ne null ? "readonly" : ""} name="code" value="${dto.code}" id="code" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">材料名称</label>
					<div class="controls">
		                <input class="form-control" name="name" value="${dto.name}" id="name" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">材料描述</label>
					<div class="controls">
                        <textarea class="form-control" name="describes" id="describes">${dto.describes}</textarea>
					</div>
				</div>
            </div>
        </div>
	</div>
	<div class="form-actions right">
		<button class="btn blue" type="submit" data-grid-reload=".grid-basedata-material-material-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
</form>
<script src="${ctx}/resources/script/basedata/material/material-inputBasic.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>