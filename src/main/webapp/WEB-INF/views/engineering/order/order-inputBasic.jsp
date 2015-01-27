<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<form class="form-horizontal form-bordered form-label-stripped form-validation form-engineering-order-order-inputBasic"
	action="${ctx}/engineering/order/save.json" method="post" >
	<input type="hidden" name="id" value="${clone eq true ? '' : dto.id}" />
	<div class="form-actions">
		<button class="btn blue" type="submit" data-grid-reload=".grid-engineering-order-order-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
	<div class="form-body">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">工程编号</label>
                    <div class="controls">
                        <div class="input-icon right">
                            <i class="fa fa-ellipsis-h contract-select"></i>
                            <input class="form-control contract-select" required="required" value="${dto.contract.engineeringCode}" id="engineering_code" readonly="readonly" type="text"  placeholder="选择合同" />
                            <input type="hidden" id="contract_id" value="${dto.contract.id}" name="contract.id" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">工程名称</label>
                    <div class="controls">
                        <div class="input-icon right">
                            <i class="fa fa-ellipsis-h contract-select"></i>
                            <input class="form-control contract-select" required="required" value="${dto.contract.engineeringName}" id="engineering_name" readonly="readonly" type="text"  placeholder="选择合同" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">订单编号</label>
					<div class="controls">
		                <input class="form-control" readonly name="code" value="${dto.id eq null ? orderCode : dto.code}" id="code" type="text">
					</div>
				</div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">订单名称</label>
                    <div class="controls">
                        <input class="form-control" name="name" value="${dto.name}" id="name" type="text">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">订单时间</label>
                    <div class="controls">
                        <div class='input-group date' id='datetimepicker1'>
                            <input type='text' class="form-control"  value="<fmt:formatDate value="${dto.id eq null ? orderTime : dto.time}" pattern="yyyy-MM-dd HH:mm:ss"/>" name="time" type="text" id="time" required="required"/>
                            <span class="input-group-addon">
                            <span class="glyphicon glyphicon-calendar"></span>
						    </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">订单说明</label>
					<div class="controls">
		                <input class="form-control" name="explains" value="${dto.explains}" id="explains" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">下单人</label>
					<div class="controls" style="padding-top: 9px;font-size: 15px;">
                        <span>${operatorName}</span>
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">订单状态</label>
					<div class="controls">
                        <input type="hidden" id="statusKey" value="${dto.status}">
                        <select name="status" id="status"></select>
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">供货商编号</label>
                    <div class="controls">
                        <div class="input-icon right">
                            <i class="fa fa-ellipsis-h supplier-select"></i>
                            <input class="form-control supplier-select" required="required" value="${dto.supplier.code}" id="supplier_code" readonly="readonly" type="text"  placeholder="选择供货商" />
                            <input type="hidden" id="supplier_id" value="${dto.supplier.id}" name="supplier.id" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">供货商名称</label>
                    <div class="controls">
                        <div class="input-icon right">
                            <i class="fa fa-ellipsis-h supplier-select"></i>
                            <input class="form-control supplier-select" required="required" value="${dto.supplier.name}" id="supplier_name" readonly="readonly" type="text"  placeholder="选择供货商" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">供货商联系人</label>
                    <div class="controls">
                        <input class="form-control" value="${dto.supplierContacts}" id="supplier_contacts" type="text" />
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">供货商联系电话</label>
                    <div class="controls">
                        <input class="form-control" value="${dto.supplierTel}" id="supplier_tel" type="text" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label class="control-label">订单种类</label>
                    <div class="controls">
                        <input type="hidden" id="typeKey" value="${dto.type}">
                        <select name="type" id="type"></select>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel panel-primary">
            <div class="panel-heading">
                订单材料明细
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="grid-order-material-details" data-grid="items" data-pk='${dto.id}'></table>
            </div>
        </div>
	</div>
	<div class="form-actions right">
		<button class="btn blue" type="submit" data-grid-reload=".grid-engineering-order-order-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
</form>
<input class="hide" type="hidden" id="upload-input">
<input class="hide" type="hidden" id="subgrid-id">
<input class="hide" type="hidden" id="subgrid-sel-rowid">
<script src="${ctx}/resources/script/engineering/order/order-inputBasic.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>