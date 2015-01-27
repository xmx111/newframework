package com.ufo.appi.core;

import javax.servlet.http.HttpServletRequest;

/**
 * 与手机端的请求数据包
 * 
 * @author appdev
 *
 */
public class AppiRequestPacket {

	private HttpServletRequest request;

	// 参数 参数名称 类型（长度） 参数说明 允许为空 样例
	// sappid 应用标识 Integer 0：未知
	private String sappid;
	// 1：采集APP
	// 2：客户APP
	// 3：物流APP 否 1
	// sappver 应用版本号 String 手机APP的版本号
	private String sappver;
	// 用于后台控制最低版本接入 否 1.1
	// splatform 应用类型 Integer 1:android
	private String splatform;
	// 2:ios 否 1
	// ssessionid 会话标识 String 用户第一次打开APP时，由后台分配的唯一会话标识。 是 111111
	private String ssessionid;
	// sjsonp 回调函数 String 客户端的回调函数名。如果客户端不传入回调函数，则 是 Login_callback
	private String sjsonp;
	// stime 请求时间 String 手机端当前的系统时间。
	// 格式为：yyyyMMddhhMMss 否 20140101120131
	private String stime;

	public String toString() {
		StringBuilder builder = new StringBuilder("AppiRequestPacket{");
		// builder.append("sappid:").append(getSappid()).append(";");
		// builder.append("sappver:").append(getSappver()).append(";");
		// builder.append("splatform:").append(getSplatform()).append(";");
		// builder.append("ssessionid:").append(getSsessionid()).append(";");
		// builder.append("sjsonp:").append(getSjsonp()).append(";");
		// builder.append("stime:").append(getStime()).append(";");
		if (request != null) {
			java.util.Enumeration<java.lang.String> pm = request
					.getParameterNames();
			if (pm != null) {
				// 处理条件构造
				while (pm.hasMoreElements()) {
					String par = pm.nextElement();
					if (par == null)
						continue;
					builder.append(par).append(":")
							.append(request.getParameter(par)).append(";");
				}
			}
		}
		builder.append("}");
		return builder.toString();
	}

	public AppiRequestPacket(HttpServletRequest request) {
		this.request = request;
		this.sappid = getParameter("sappid");
		this.sappver = getParameter("sappver");
		this.splatform = getParameter("splatform");
		this.ssessionid = getParameter("ssessionid");
		this.sjsonp = getParameter("sjsonp");
		this.stime = getParameter("stime");
	}

	public HttpServletRequest getHttpRequest() {
		return this.request;
	}

	public String getParameter(String parName) {
		if (parName == null)
			return "";
		if (getHttpRequest() == null)
			return "";
		String tmp = getHttpRequest().getParameter(parName);
		if (tmp == null)
			return "";
		return tmp.trim();
	}

	public String getSappid() {
		return sappid;
	}

	public void setSappid(String sappid) {
		this.sappid = sappid;
	}

	public String getSappver() {
		return sappver;
	}

	public void setSappver(String sappver) {
		this.sappver = sappver;
	}

	public String getSplatform() {
		return splatform;
	}

	public void setSplatform(String splatform) {
		this.splatform = splatform;
	}

	public String getSsessionid() {
		return ssessionid;
	}

	public void setSsessionid(String ssessionid) {
		this.ssessionid = ssessionid;
	}

	public String getSjsonp() {
		return sjsonp;
	}

	public void setSjsonp(String sjsonp) {
		this.sjsonp = sjsonp;
	}

	public String getStime() {
		return stime;
	}

	public void setStime(String stime) {
		this.stime = stime;
	}

}
