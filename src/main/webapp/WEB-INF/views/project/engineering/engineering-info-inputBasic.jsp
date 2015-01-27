<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<form class="form-horizontal form-bordered form-label-stripped form-validation form-project-engineering-engineering-info-inputBasic"
	action="${ctx}/project/engineering/engineeringinfo/save.json" method="post" >
	<input type="hidden" name="id" value="${clone eq true ? '' : dto.id}" />
	<div class="form-actions">
		<button class="btn blue" type="submit" data-grid-reload=".grid-project-engineering-engineering-info-index">
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
		</div>
        <div class="row">
            <div class="col-md-12">
				<div class="form-group">
					<label class="control-label">项目概况</label>
					<div class="controls">
						<textarea name="about" cols="" rows="" id="about" data-height="200px" data-htmleditor="kindeditor">${dto.about}</textarea>
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
				<div class="form-group">
					<label class="control-label">效果图</label>
					<div class="controls">
						<textarea name="drawing" cols="" rows="" maxlength="2000" id="drawing" data-height="200px" data-htmleditor="kindeditor">${dto.drawing}</textarea>
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
				<div class="form-group">
					<label class="control-label">资金规划</label>
					<div class="controls">
						<textarea name="planning" cols="" rows="" maxlength="2000" id="planning" data-height="200px" data-htmleditor="kindeditor">${dto.planning}</textarea>
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
				<div class="form-group">
					<label class="control-label">特殊要求</label>
					<div class="controls">
						<textarea name="special" cols="" rows="" maxlength="2000" id="special" data-height="200px" data-htmleditor="kindeditor">${dto.special}</textarea>
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
				<div class="form-group">
					<label class="control-label">业主寄语</label>
					<div class="controls">
						<textarea name="word" cols="" rows="" maxlength="2000" id="word" data-height="200px" data-htmleditor="kindeditor">${dto.word}</textarea>
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">业主寄语录像</label>
					<div class="controls">
						<div class="input-group">
							<input class="form-control" name="videoUrl" value="${dto.videoUrl}" id="videoUrl" type="hidden">
							<input class="form-control" name="video" readonly value="${dto.video}" id="video" type="text">
							<span id="input-group-upload-video" style="cursor:pointer;" class="input-group-addon">上传录像</span>
						</div>
					</div>
				</div>
            </div>
        </div>
		<div class="row">
			<div class="col-md-4">
				<div class="form-group">
					<label class="control-label">物业名称</label>
					<div class="controls">
						<input class="form-control" name="relatedPersonals[0].name" value="${dto.estate.name}" id="estate_name" type="text">
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label class="control-label">物业电话</label>
					<div class="controls">
						<input class="form-control phone" name="relatedPersonals[0].phone" value="${dto.estate.phone}" id="estate_phone" type="text">
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label class="control-label">照片</label>
					<div class="controls">
						<c:if test="${dto.estate.photo eq null}">
							<img class="img-photo" style="cursor:pointer;" id="estate_img" src="${ctx}/resources/images/head3.jpg">
						</c:if>
						<c:if test="${dto.estate.photo ne null}">
							<img class="img-photo" style="cursor:pointer;" id="estate_img" src="${ctx}${dto.estate.photo}" width="120" height="120"
						</c:if>
						<input type="hidden" name="relatedPersonals[0].photo" id="estate_photo" value="${dto.estate.photo}">
						<input type="hidden" name="relatedPersonals[0].type" value="ESTATE">
					</div>
				</div>
			</div>
		</div>
		<div class="row hide">
			<div class="col-md-12">
				<div class="form-group">
					<label class="control-label">作品介绍</label>
					<div class="controls">
						<textarea name="relatedPersonals[0].introduce" cols="" rows="" id="estate_introduce" data-height="180px" data-htmleditor="kindeditor">${dto.estate.introduce}</textarea>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-md-4">
				<div class="form-group">
					<label class="control-label">设计师姓名</label>
					<div class="controls">
						<input class="form-control" name="relatedPersonals[1].name" value="${dto.designer.name}" id="designer_name" type="text">
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label class="control-label">设计师电话</label>
					<div class="controls">
						<input class="form-control phone" name="relatedPersonals[1].phone" value="${dto.designer.phone}" id="designer_phone" type="text">
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label class="control-label">照片</label>
					<div class="controls">
						<c:if test="${dto.designer.photo eq null}">
							<img class="img-photo" style="cursor:pointer;" id="designer_img" src="${ctx}/resources/images/head3.jpg">
						</c:if>
						<c:if test="${dto.designer.photo ne null}">
							<img class="img-photo" style="cursor:pointer;" id="designer_img" src="${ctx}${dto.designer.photo}" width="120" height="120">
						</c:if>
						<input type="hidden" name="relatedPersonals[1].photo" id="designer_photo" value="${dto.designer.photo}">
						<input type="hidden" name="relatedPersonals[1].type" value="DESIGNER">
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="form-group">
					<label class="control-label">设计师作品介绍</label>
					<div class="controls">
						<textarea name="relatedPersonals[1].introduce" cols="" rows="" id="designer_introduce" data-height="180px" data-htmleditor="kindeditor">${dto.designer.introduce}</textarea>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="form-group">
					<label class="control-label">作品视频</label>
					<div class="controls">
						<input class="form-control" readonly value="${dto.designer.video}" id="designer_video" type="text">
						<span id="input-designer-upload-video" style="cursor:pointer;" class="input-group-addon">上传录像</span>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-md-4">
				<div class="form-group">
					<label class="control-label">项目经理名称</label>
					<div class="controls">
						<input class="form-control" name="relatedPersonals[2].name" value="${dto.projectmanager.name}" id="projectmanager_name" type="text">
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label class="control-label">项目经理电话</label>
					<div class="controls">
						<input class="form-control phone" name="relatedPersonals[2].phone" value="${dto.projectmanager.phone}" id="projectmanager_phone" type="text">
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label class="control-label">照片</label>
					<div class="controls">
						<c:if test="${dto.projectmanager.photo eq null}">
							<img class="img-photo" style="cursor:pointer;" id="projectmanager_img" src="${ctx}/resources/images/head3.jpg">
						</c:if>
						<c:if test="${dto.projectmanager.photo ne null}">
							<img class="img-photo" style="cursor:pointer;" id="projectmanager_img" src="${ctx}${dto.projectmanager.photo}">
						</c:if>
						<input type="hidden" name="relatedPersonals[2].photo" id="projectmanager_photo" value="${dto.projectmanager.photo}">
						<input type="hidden" name="relatedPersonals[2].type" value="PROJECTMANAGER">
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="form-group">
					<label class="control-label">项目经理作品介绍</label>
					<div class="controls">
						<textarea name="relatedPersonals[2].introduce" cols="" rows="" id="projectmanager_introduce" data-height="180px" data-htmleditor="kindeditor">${dto.projectmanager.introduce}</textarea>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-md-4">
				<div class="form-group">
					<label class="control-label">项目管家名称</label>
					<div class="controls">
						<input class="form-control" name="relatedPersonals[3].name" value="${dto.projectbutler.name}" id="projectbutler_name" type="text">
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label class="control-label">项目管家电话</label>
					<div class="controls">
						<input class="form-control phone" name="relatedPersonals[3].phone" value="${dto.projectbutler.phone}" id="projectbutler_phone" type="text">
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label class="control-label">照片</label>
					<div class="controls">
						<c:if test="${dto.projectbutler.photo eq null}">
							<img class="img-photo" style="cursor:pointer;" id="projectbutler_img" src="${ctx}/resources/images/head3.jpg">
						</c:if>
						<c:if test="${dto.projectbutler.photo ne null}">
							<img class="img-photo" style="cursor:pointer;" id="projectbutler_img" src="${ctx}${dto.projectbutler.photo}">
						</c:if>
						<input type="hidden" name="relatedPersonals[3].photo" id="projectbutler_photo" value="${dto.projectbutler.photo}">
						<input type="hidden" name="relatedPersonals[3].type" value="PROJECTBUTLER">
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="form-group">
					<label class="control-label">项目管家作品介绍</label>
					<div class="controls">
						<textarea name="relatedPersonals[3].introduce" cols="" rows="" id="projectbutler_introduce" data-height="200px" data-htmleditor="kindeditor">${dto.projectbutler.introduce}</textarea>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-md-4">
				<div class="form-group">
					<label class="control-label">深化设计师名称</label>
					<div class="controls">
						<input class="form-control" name="relatedPersonals[4].name" value="${dto.deependesigner.name}" id="deependesigner_name" type="text">
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label class="control-label">深化设计师电话</label>
					<div class="controls">
						<input class="form-control phone" name="relatedPersonals[4].phone" value="${dto.deependesigner.phone}" id="deependesigner_phone" type="text">
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label class="control-label">照片</label>
					<div class="controls">
						<c:if test="${dto.deependesigner.photo eq null}">
							<img class="img-photo" style="cursor:pointer;" id="deependesigner_img" src="${ctx}/resources/images/head3.jpg">
						</c:if>
						<c:if test="${dto.deependesigner.photo ne null}">
							<img class="img-photo" style="cursor:pointer;" id="deependesigner_img" src="${ctx}${dto.deependesigner.photo}">
						</c:if>
						<input type="hidden" name="relatedPersonals[4].photo" id="deependesigner_photo" value="${dto.deependesigner.photo}">
						<input type="hidden" name="relatedPersonals[4].type" value="DEEPENDESIGNER">
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="form-group">
					<label class="control-label">深化设计师作品介绍</label>
					<div class="controls">
						<textarea name="relatedPersonals[4].introduce" cols="" rows="" id="deepensigner_introduce" data-height="200px" data-htmleditor="kindeditor">${dto.deependesigner.introduce}</textarea>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="form-actions right">
		<button class="btn blue" type="submit" data-grid-reload=".grid-project-engineering-engineering-info-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
</form>
<input class="hide" type="hidden" id="upload-button-video">
<input class="hide" type="hidden" id="upload-button0">
<input class="hide" type="hidden" id="upload-button1">
<input class="hide" type="hidden" id="upload-button1-video">
<input class="hide" type="hidden" id="upload-button2">
<input class="hide" type="hidden" id="upload-button3">
<input class="hide" type="hidden" id="upload-button4">
<script src="${ctx}/resources/script/project/engineering/engineering-info-inputBasic.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>