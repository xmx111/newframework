<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<form class="form-horizontal form-bordered form-label-stripped form-validation form-project-contract-contract-inputBasic"
	action="${ctx}/project/contract/save.json" method="post" >
	<input type="hidden" name="id" value="${clone eq true ? '' : dto.id}" />
    <div class="form-actions">
        <button class="btn blue" type="submit" data-grid-reload=".grid-project-contract-contract-index">
            <i class="fa fa-check"></i> 保存
        </button>
        <button class="btn default btn-cancel" type="button">取消</button>
    </div>
	<div class="form-body">
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">合同编号</label>
					<div class="controls">
		                <input class="form-control" ${dto.id ne null ? "readonly" : ""} name="code" value="${dto.code}" id="code" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">合同名称</label>
					<div class="controls">
		                <input class="form-control" name="name" value="${dto.name}" id="name" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">合同类型</label>
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
                    <label class="control-label">客户编号</label>
                    <div class="controls">
                        <div class="input-icon right">
                            <i class="fa fa-ellipsis-h custom-select"></i>
                            <input class="form-control custom-select" name="custom.code" value="${dto.custom.code}" id="custom_code" readonly="readonly" type="text"  placeholder="选择客户" />
                            <input name="custom.id" id="custom_id" value="${dto.custom.id}" type="hidden">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">客户姓名</label>
                    <div class="controls">
                        <input class="form-control" value="${dto.custom.name}" id="custom_name" readonly="readonly" type="text" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">联系电话</label>
                    <div class="controls">
                        <input class="form-control" name="customPhone" value="${dto.customPhone}" id="custom_phone" type="text" />
                    </div>
                </div>
            </div>
        </div>
		<div class="row">
			<div class="col-md-6">
				<div class="form-group">
					<label class="control-label">工程编号</label>
					<div class="controls">
						<input class="form-control" readonly name="engineeringCode" value="${dto.id eq null ? engineeringCode : dto.engineeringCode}" id="engineeringCode" type="text">
					</div>
				</div>
			</div>
		</div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">工程名称</label>
					<div class="controls">
		                <input class="form-control" name="engineeringName" value="${dto.engineeringName}" id="engineeringName" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">工程小区</label>
					<div class="controls">
		                <input class="form-control" name="engineeringCommunity" value="${dto.engineeringCommunity}" id="engineeringCommunity" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">工程小区地址</label>
					<div class="controls">
		                <input class="form-control" name="engineeringCommunityAddress" value="${dto.engineeringCommunityAddress}" id="engineeringCommunityAddress" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">业务员</label>
                    <div class="controls">
                        <input class="form-control employee-select" readonly value="${dto.employee.name}" id="employee_name" type="text">
                        <input name="employee.id" value="${dto.employee.id}" id="employee_id" type="hidden">
                    </div>
                </div>
            </div>
        </div>
	</div>
	<div class="form-actions right">
		<button class="btn blue" type="submit" data-grid-reload=".grid-project-contract-contract-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
</form>
<script src="${ctx}/resources/script/project/contract/contract-inputBasic.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>