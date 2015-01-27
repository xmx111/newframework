<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<div class="container-fluid data-view">
    <div class="well form-horizontal">
        <div class="row-fluid">
            <div class="span6">
	            <div class="form-group">
					<label class="control-label">deleted</label>
					<div class="controls">
						<label class="radio-inline">
							<input name="deleted" id="typeFalse" checked="checked" value="false" type="radio">否
						</label>
						<label class="radio-inline">
							<input name="deleted" id="typeTrue" value="true" type="radio">是
						</label>
	                </div>
		        </div>
            </div>
        </div>
        <div class="row-fluid">
            <div class="span6">
	            <div class="form-group">
					<label class="control-label">上级部门</label>
					<div class="controls">
		                <input class="form-control" name="parent" value="" id="parent" type="text">
	                </div>
		        </div>
            </div>
        </div>
        <div class="row-fluid">
            <div class="span6">
	            <div class="form-group">
					<label class="control-label">描述</label>
					<div class="controls">
		                <input class="form-control" name="description" value="" id="description" type="text">
	                </div>
		        </div>
            </div>
        </div>
        <div class="row-fluid">
            <div class="span6">
	            <div class="form-group">
					<label class="control-label">名称</label>
					<div class="controls">
		                <input class="form-control" name="name" value="" id="name" type="text">
	                </div>
		        </div>
            </div>
        </div>
    </div>    
</div>