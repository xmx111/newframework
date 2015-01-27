<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<form class="form-horizontal form-bordered form-label-stripped form-validation form-ucenter-employee-employee-inputBasic"
	action="${ctx}/ucenter/employee/save.json" method="post" >
	<input type="hidden" name="id" value="${clone eq true ? '' : dto.id}" />
	<div class="form-actions">
		<button class="btn blue" type="submit" data-grid-reload=".grid-ucenter-employee-employee-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
	<div class="form-body">
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">员工编号</label>
					<div class="controls">
		                <input class="form-control" startWith="Y" ${dto.id ne null ? "readonly" : ""} name="code" value="${dto.code}" id="code" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">员工姓名</label>
					<div class="controls">
		                <input class="form-control" ${dto.id ne null ? 'readonly' : ''} name="name" value="${dto.name}" id="name" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">员工性别</label>
					<div class="controls">
                        <input type="hidden" id="sexKey" value="${dto.sex}">
                        <select name="sex" id="sex"></select>
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">员工联系电话</label>
					<div class="controls">
		                <input class="form-control" name="phone" value="${dto.phone}" id="phone" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">员工邮箱</label>
					<div class="controls">
		                <input class="form-control" name="email" value="${dto.email}" id="email" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">员工类型</label>
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
					<label class="control-label">员工岗位</label>
					<div class="controls">
                        <input type="hidden" id="stationKey" value="${dto.station}">
                        <select name="station" id="station"></select>
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">员工状态</label>
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
					<label class="control-label">入职时间</label>
					<div class="controls">
                        <div class='input-group date' id='datetimepicker1'>
                            <input type='text' class="form-control"  value="${dto.dutyDate}" name="dutyDate" type="text" id="dutyDate"/>
                            <span class="input-group-addon">
                            <span class="glyphicon glyphicon-calendar"></span>
						    </span>
                        </div>
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">离职时间</label>
					<div class="controls">
                        <div class='input-group date' id='datetimepicker2'>
                            <input type='text' class="form-control"  value="${dto.leaveDate}" name="leaveDate" type="text" id="leaveDate"/>
                            <span class="input-group-addon">
                            <span class="glyphicon glyphicon-calendar"></span>
						    </span>
                        </div>
					</div>
				</div>
            </div>
        </div>
		<div class="row">
			<div class="col-md-6">
				<div class="form-group">
					<label class="control-label">头像</label>
					<div class="controls">
						<c:if test="${dto.headUrl eq null || dto.headUrl eq ''}">
							<img style="cursor:pointer;" id="image_url" src="${ctx}/resources/images/head3.jpg" />
						</c:if>
						<c:if test="${dto.headUrl ne null &&  dto.headUrl ne ''}">
							<img style="cursor:pointer;" id="image_url" src="${ctx}${dto.headUrl}" />
						</c:if>
						<input class="form-control" name="headUrl" value="${dto.headUrl}" id="headUrl" type="hidden">
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="form-group">
					<label class="control-label">昵称</label>
					<div class="controls">
						<input class="form-control" name="nickName" value="${dto.nickName}" id="nickName" type="text">
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="form-actions right">
		<button class="btn blue" type="submit" data-grid-reload=".grid-ucenter-employee-employee-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
</form>
<input class="hide" type="hidden" id="upload-input">
<script src="${ctx}/resources/script/ucenter/employee/employee-inputBasic.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>