<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<form class="form-horizontal form-bordered form-label-stripped form-validation form-basedata-publicity-publicity-inputBasic"
	action="${ctx}/basedata/publicity/save.json" method="post" >
	<input type="hidden" name="id" value="${dto.id}" />
	<input type="hidden" name="publicityType" value="${publicityType}" />
    <div class="form-actions">
        <button class="btn blue" type="submit">
            <i class="fa fa-check"></i> 保存
        </button>
        <button class="btn default btn-cancel" type="button">取消</button>
    </div>
	<div class="form-body">
        <div class="row" style="text-align: center;font-weight: bold;">${title}</div>
        <c:if test="${publicityType eq 'INTRODUCE'}">
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label class="control-label">公司简介</label>
                    <div class="controls">
                        <textarea name="content" cols="" rows="" id="content" data-height="500px" data-htmleditor="kindeditor">${dto.content}</textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label class="control-label">创始人简介</label>
                    <div class="controls">
                        <textarea name="content1" cols="" rows="" id="content1" data-height="500px" data-htmleditor="kindeditor">${dto.content1}</textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label class="control-label">运营模式</label>
                    <div class="controls">
                        <textarea name="content2" cols="" rows="" id="content2" data-height="500px" data-htmleditor="kindeditor">${dto.content2}</textarea>
                    </div>
                </div>
            </div>
        </div>
        </c:if>
        <c:if test="${publicityType eq 'CORPORATE'}">
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label class="control-label">总经理致辞</label>
                    <div class="controls">
                        <textarea name="content" cols="" rows="" id="content" data-height="500px" data-htmleditor="kindeditor">${dto.content}</textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label class="control-label">文化篇</label>
                    <div class="controls">
                        <textarea name="content1" cols="" rows="" id="content1" data-height="500px" data-htmleditor="kindeditor">${dto.content1}</textarea>
                    </div>
                </div>
            </div>
        </div>
        </c:if>
        <c:if test="${publicityType eq 'RESOURCES'}">
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label class="control-label">签约设计师</label>
                    <div class="controls">
                        <textarea name="content" cols="" rows="" id="content" data-height="500px" data-htmleditor="kindeditor">${dto.content}</textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label class="control-label">签约装修公司</label>
                    <div class="controls">
                        <textarea name="content1" cols="" rows="" id="content1" data-height="500px" data-htmleditor="kindeditor">${dto.content1}</textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label class="control-label">签约品牌商</label>
                    <div class="controls">
                        <textarea name="content2" cols="" rows="" id="content2" data-height="500px" data-htmleditor="kindeditor">${dto.content2}</textarea>
                    </div>
                </div>
            </div>
        </div>
        </c:if>
    </div>
	</div>
	<div class="form-actions right">
		<button class="btn blue" type="submit">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
</form>
<script src="${ctx}/resources/script/basedata/publicity/publicity-inputBasic.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>