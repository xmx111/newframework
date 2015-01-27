<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<div class="row">
	<div class="col-md-12">
		<div class="container-fluid data-view">
			<div class="well form-horizontal">
				<div class="row">
					<div class="col-md-4">
						<div class="form-group">
							<label class="control-label">工程编号</label>
							<div class="controls" style="padding-top: 7px">
								${dto.contract.engineeringCode}
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="form-group">
							<label class="control-label">工程名称</label>
							<div class="controls" style="padding-top: 7px">
								${dto.contract.engineeringName}
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label class="control-label">项目概况</label>
							<div class="controls" style="padding-top: 7px">
								${dto.about}
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label class="control-label">效果图</label>
							<div class="controls" style="padding-top: 7px">
								${dto.drawing}
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label class="control-label">资金规划</label>
							<div class="controls" style="padding-top: 7px">
								${dto.planning}
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label class="control-label">特殊要求</label>
							<div class="controls" style="padding-top: 7px">
								${dto.special}
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label class="control-label">业主寄语</label>
							<div class="controls" style="padding-top: 7px">
								${dto.word}
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label class="control-label">业主寄语录像</label>
							<div class="controls" style="padding-top: 7px">
								<embed src="${dto.videoUrl}" type="video/x-ms-asf-plugin" width="500" height="380" autostart="false" loop="true" />
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label class="control-label">相关信息</label>
							<div class="controls" style="padding-top: 7px">
								<table class="table table-bordered">
									<thead>
										<th width="13%">信息名称</th>
										<th width="14%">名称(姓名)</th>
										<th width="13%">联系电话</th>
										<th width="20%">照片</th>
										<th width="40%">作品介绍</th>
									</thead>
									<tbody>
										<tr>
											<td>物业信息</td>
											<td>${dto.estate.name}</td>
											<td>${dto.estate.phone}</td>
											<td>
												<c:if test="${dto.estate.photo eq null}">
													<img src="${ctx}/resources/images/head.jpg" width="100" height="110">
												</c:if>
												<c:if test="${dto.estate.photo ne null}">
													<img src="${ctx}${dto.estate.photo}" width="100" height="110">
												</c:if>
											</td>
											<td>${dto.estate.introduce}</td>
										</tr>
										<tr>
											<td>设计师信息</td>
											<td>${dto.designer.name}</td>
											<td>${dto.designer.phone}</td>
											<td>
												<c:if test="${dto.designer.photo eq null}">
													<img src="${ctx}/resources/images/head.jpg" width="100" height="110">
												</c:if>
												<c:if test="${dto.designer.photo ne null}">
													<img src="${ctx}${dto.designer.photo}" width="100" height="110">
												</c:if>
												<br />
												<embed src="${dto.designer.video}" type="video/x-ms-asf-plugin" width="100" height="110" autostart="false" loop="true" />
											</td>
											<td>${dto.designer.introduce}</td>
										</tr>
										<tr>
											<td>项目经理信息</td>
											<td>${dto.projectmanager.name}</td>
											<td>${dto.projectmanager.phone}</td>
											<td>
												<c:if test="${dto.projectmanager.photo eq null}">
													<img src="${ctx}/resources/images/head.jpg" width="100" height="110">
												</c:if>
												<c:if test="${dto.projectmanager.photo ne null}">
													<img src="${ctx}${dto.projectmanager.photo}" width="100" height="110">
												</c:if>
											</td>
											<td>${dto.projectmanager.introduce}</td>
										</tr>
										<tr>
											<td>项目管家信息</td>
											<td>${dto.projectbutler.name}</td>
											<td>${dto.projectbutler.phone}</td>
											<td>
												<c:if test="${dto.projectbutler.photo eq null}">
													<img src="${ctx}/resources/images/head.jpg" width="100" height="110">
												</c:if>
												<c:if test="${dto.projectbutler.photo ne null}">
													<img src="${ctx}${dto.projectbutler.photo}" width="100" height="110">
												</c:if>
											</td>
											<td>${dto.projectbutler.introduce}</td>
										</tr>
										<tr>
											<td>深化设计师信息</td>
											<td>${dto.muddydesigner.name}</td>
											<td>${dto.muddydesigner.phone}</td>
											<td>
												<c:if test="${dto.muddydesigner.photo eq null}">
													<img src="${ctx}/resources/images/head.jpg" width="100" height="110">
												</c:if>
												<c:if test="${dto.muddydesigner.photo ne null}">
													<img src="${ctx}${dto.muddydesigner.photo}" width="100" height="110">
												</c:if>
											</td>
											<td>${dto.muddydesigner.introduce}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
