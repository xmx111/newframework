<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<div class="form-horizontal form-bordered form-label-stripped div-engineering-special-special-info-view" >
	<input type="hidden" id="id" value="${dto.id}" />
	<div class="form-actions">
		<button class="btn blue" type="submit" data-grid-reload=".grid-engineering-special-special-info-index">
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
						<label style="padding-top: 5px;font-size: 14px;">${dto.contract.engineeringCode}&nbsp;</label>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label class="control-label">工程名称</label>
					<div class="controls">
						<label style="padding-top: 5px;font-size: 14px;">${dto.contract.engineeringName}&nbsp;</label>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="form-group">
					<label class="control-label">采集时间</label>
					<div class="controls">
						<label style="padding-top: 5px;font-size: 14px;">${dto.time}&nbsp;</label>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label class="control-label">采集人账号</label>
					<div class="controls">
						<label style="padding-top: 5px;font-size: 14px;">${dto.collector.loginName}&nbsp;</label>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="form-group">
					<label class="control-label">采集人姓名</label>
					<div class="controls">
						<label style="padding-top: 5px;font-size: 14px;">${dto.collector.name}&nbsp;</label>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="form-group">
					<label class="control-label">文字描述</label>
					<div class="controls">
						<label style="padding-top: 5px;font-size: 14px;">${dto.describes}&nbsp;</label>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="form-group">
					<label class="control-label">现场照片</label>
					<div class="controls">
						<c:forEach items="${dto.images}" var="image" varStatus="status">
							<img src="${ctx}/${image.url}">
						</c:forEach>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="form-group">
					<label class="control-label">录音资料</label>
					<div class="controls">
						<div class="controls" style="padding-top: 7px">
							<embed src="${dto.video}" type="video/x-ms-asf-plugin" width="500" height="380" autostart="false" loop="true" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="form-actions right">
		<button class="btn blue" type="submit" data-grid-reload=".grid-engineering-special-special-info-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
</div>
<script src="${ctx}/resources/script/engineering/special/special-info-viewBasic.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>