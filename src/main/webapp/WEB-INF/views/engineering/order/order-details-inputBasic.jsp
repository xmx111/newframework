<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<form class="form-horizontal form-bordered form-label-stripped form-validation form-engineering-order-order-details-inputBasic"
	action="${ctx}/engineering/order/save.json" method="post" >
	<input type="hidden" name="id" value="${clone eq true ? '' : dto.id}" />
	<div class="form-actions">
		<button class="btn blue" type="submit" data-grid-reload=".grid-engineering-order-order-details-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
	<div class="form-body">
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">是否删除</label>
					<div class="controls">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">收货验收照片</label>
					<div class="controls">
		                <input class="form-control" name="acceptanceUrl" value="${dto.acceptanceUrl}" id="acceptanceUrl" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">材料要求参数</label>
					<div class="controls">
		                <input class="form-control" name="requireParameter" value="${dto.requireParameter}" id="requireParameter" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">数量要求</label>
					<div class="controls">
		                <input class="form-control" name="num" value="${dto.num}" id="num" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">生产厂家</label>
					<div class="controls">
		                <input class="form-control" name="manufacturers" value="${dto.manufacturers}" id="manufacturers" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">生产批次</label>
					<div class="controls">
		                <input class="form-control" name="batch" value="${dto.batch}" id="batch" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">实际材料参数</label>
					<div class="controls">
		                <input class="form-control" name="actParameter" value="${dto.actParameter}" id="actParameter" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">收货验收状态</label>
					<div class="controls">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">收货验收说明</label>
					<div class="controls">
		                <input class="form-control" name="acceptanceExplain" value="${dto.acceptanceExplain}" id="acceptanceExplain" type="text">
					</div>
				</div>
            </div>
        </div>
	</div>
	<div class="form-actions right">
		<button class="btn blue" type="submit" data-grid-reload=".grid-engineering-order-order-details-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
</form>
<script src="${ctx}/resources/script/engineering/order/order-details-inputBasic.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>