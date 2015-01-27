<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<form class="form-horizontal form-bordered form-label-stripped form-validation form-engineering-order-express-inputBasic"
	action="${ctx}/engineering/order/save.json" method="post" >
	<input type="hidden" name="id" value="${clone eq true ? '' : dto.id}" />
	<div class="form-actions">
		<button class="btn blue" type="submit" data-grid-reload=".grid-engineering-order-express-index">
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
					<label class="control-label">物流状态</label>
					<div class="controls">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">物流时间</label>
					<div class="controls">
		                <div data-date-viewmode="years" data-date-format="yyyy-mm-dd" class="input-group  date date-picker">
							<input name="date" id="date" class="form-control" value="${dto.date}" dateinputclass="" format="yyyy-MM-dd" type="text">
							<span class="input-group-btn">
								<button type="button" class="btn default date-set">
									<i class="fa fa-calendar"></i>
								</button>
							</span>
						</div>
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">物流联系电话</label>
					<div class="controls">
		                <input class="form-control" name="phone" value="${dto.phone}" id="phone" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">物流名称</label>
					<div class="controls">
		                <input class="form-control" name="name" value="${dto.name}" id="name" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">物流单号</label>
					<div class="controls">
		                <input class="form-control" name="no" value="${dto.no}" id="no" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">物流联系人</label>
					<div class="controls">
		                <input class="form-control" name="sender" value="${dto.sender}" id="sender" type="text">
					</div>
				</div>
            </div>
        </div>
	</div>
	<div class="form-actions right">
		<button class="btn blue" type="submit" data-grid-reload=".grid-engineering-order-express-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
</form>
<script src="${ctx}/resources/script/engineering/order/express-inputBasic.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>