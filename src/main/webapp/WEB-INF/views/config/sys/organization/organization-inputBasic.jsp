<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<form class="form-horizontal form-bordered form-label-stripped form-validation form-config-sys-organization-inputBasic"
	action="${ctx}/config/sys/organization/save.json" method="post" >
	<input type="hidden" name="id" value="${clone eq true ? '' : dto.id}" />
	<div class="form-body">
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">机构名称</label>
					<div class="controls">
		                <input autocomplete="off" class="form-control" name="name" value="${dto.name}" id="name" type="text" required="required">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">电话总机</label>
					<div class="controls">
		                <input autocomplete="off" class="form-control" name="phone" value="${dto.phone}" id="phone" type="text" required="required">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">邮编</label>
					<div class="controls">
		                <input autocomplete="off" class="form-control" name="zipcode" value="${dto.zipcode}" id="zipcode" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">地址</label>
					<div class="controls">
		                <input autocomplete="off" class="form-control" name="address" value="${dto.address}" id="address" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">名称</label>
					<div class="controls">
		                <input autocomplete="off" class="form-control" name="website" value="${dto.website}" id="website" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">描述</label>
					<div class="controls">
		                <input autocomplete="off" class="form-control" name="description" value="${dto.description}" id="description" type="text">
					</div>
				</div>
            </div>
        </div>
	</div>
	<div class="form-actions right">
		<button class="btn blue" type="submit" data-grid-reload=".grid-config-sys-organization-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
</form>
<script src="${ctx}/resources/script/config/sys/organization/organization-inputBasic.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>