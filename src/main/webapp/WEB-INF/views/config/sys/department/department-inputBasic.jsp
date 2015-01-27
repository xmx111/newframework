<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<form class="form-horizontal form-bordered form-label-stripped form-validation form-config-sys-department-inputBasic"
	action="${ctx}/config/sys/department/save.json" method="post" >
	<input type="hidden" name="id" value="${clone eq true ? '' : dto.id}" />
	<div class="form-body">
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">名称</label>
					<div class="controls">
		                <input class="form-control" name="name" value="${dto.name}" required="required" id="name" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">上级部门</label>
					<div class="controls">
						<input id="departParentId" name="parent.id" type="text" data-optionsurl="${ctx}/config/sys/department/findByPage.json" data-display="${dto.parent.name}" value="${dto.parent.id}" />
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">描述</label>
					<div class="controls">
		                <input class="form-control" name="description" value="${dto.description}" id="description" type="text">
					</div>
				</div>
            </div>
        </div>
	</div>
	<div class="form-actions right">
		<button class="btn blue" type="submit" data-grid-reload=".grid-config-sys-department-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
</form>
<script src="${ctx}/resources/script/config/sys/department/department-inputBasic.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>