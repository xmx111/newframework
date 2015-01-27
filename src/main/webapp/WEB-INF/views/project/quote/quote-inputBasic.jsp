<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<form class="form-horizontal form-bordered form-label-stripped form-validation form-project-quote-quote-inputBasic"
	action="${ctx}/project/quote/save.json" method="post" >
	<input type="hidden" name="id" value="${clone eq true ? '' : dto.id}" />
	<div class="form-actions">
		<button class="btn blue" type="submit" data-grid-reload=".grid-project-quote-quote-index">
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
		</div>
		<div class="row">
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
					<label class="control-label">报价编号</label>
					<div class="controls">
						<c:if test="${dto.id eq null}">
							<div class="input-group">
								<input class="form-control digits" name="code" value="${dto.code}" id="code" type="text">
								<span style="cursor: pointer;" class="input-group-addon max-code">最新编号</span>
							</div>
						</c:if>
						<c:if test="${dto.id ne null}">
							<input class="form-control digits" name="code" value="${dto.code}" id="code" type="text">
						</c:if>
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">报价名称</label>
					<div class="controls">
		                <input class="form-control" name="name" value="${dto.name}" id="name" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">报价描述</label>
					<div class="controls">
		                <textarea class="form-control" name="describes" rows="4" id="describes">${dto.describes}</textarea>
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">报价图片</label>
					<div class="controls">
						<c:if test="${dto.url eq null}">
							<img style="cursor:pointer;" id="quote_url" src="${ctx}/resources/images/upload-def2.jpg" />
						</c:if>
						<c:if test="${dto.url ne null}">
							<img style="cursor:pointer;" id="quote_url" src="${ctx}${dto.url}" />
						</c:if>
						<input type="hidden" name="url" id="url" value="${dto.url}">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">报价人姓名</label>
					<div class="controls">
		                <input class="form-control" name="quoter" value="${dto.quoter}" id="quoter" type="text">
					</div>
				</div>
            </div>
        </div>
	</div>
	<div class="form-actions right">
		<button class="btn blue" type="submit" data-grid-reload=".grid-project-quote-quote-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
</form>
<input class="hide" type="hidden" id="upload-quote">
<script src="${ctx}/resources/script/project/quote/quote-inputBasic.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>