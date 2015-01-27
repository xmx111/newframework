<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<form class="form-horizontal form-bordered form-label-stripped form-validation form-basedata-region-region-inputBasic"
	action="${ctx}/basedata/region/save.json" method="post" >
	<input type="hidden" name="id" value="${clone eq true ? '' : dto.id}" />
	<div class="form-actions">
		<button class="btn blue" type="submit" data-grid-reload=".grid-basedata-region-region-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
	<div class="form-body">
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">区域编号</label>
					<div class="controls">
		                <input class="form-control" ${dto.id ne null ? "readonly" : ""} name="code" value="${dto.code}" id="code" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">区域名称</label>
					<div class="controls">
		                <input class="form-control" name="name" value="${dto.name}" id="name" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">负责人</label>
                    <div class="controls">
                        <div class="input-icon right">
                            <i class="fa fa-ellipsis-h employee-select"></i>
                            <input class="form-control employee-select" name="employee.name" value="${dto.employee.name}" id="employee_name" readonly="readonly" type="text"  placeholder="选择负责人" />
                            <input name="employee.id" id="employee_id" value="${dto.employee.id}" type="hidden">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">所在省</label>
					<div class="controls">
		                <input class="form-control" name="province" value="${dto.province eq null ? '湖南省' : dto.province}" id="province" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">所在市</label>
					<div class="controls">
		                <input class="form-control" name="city" value="${dto.city eq null ? '长沙市' : dto.city}" id="city" type="text">
					</div>
				</div>
            </div>
        </div>
	</div>
	<div class="form-actions right">
		<button class="btn blue" type="submit" data-grid-reload=".grid-basedata-region-region-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
</form>
<script src="${ctx}/resources/script/basedata/region/region-inputBasic.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>