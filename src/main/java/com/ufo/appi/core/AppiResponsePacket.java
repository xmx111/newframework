package com.ufo.appi.core;

import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;

import com.ufo.appi.dto.ApiParam;
import com.ufo.core.utils.DateUtils;

import net.sf.json.JSON;
import net.sf.json.JSONSerializer;
import net.sf.json.JsonConfig;

/**
 * 手机端响应协议包对象 定义公共返回协议字段
 * 
 * @author appdev
 *
 */
public class AppiResponsePacket {
	/**
	 * 用于存储SDATA返回业务数据
	 */
	private LinkedHashMap<String, Object> sdataMap = new LinkedHashMap<String, Object>(
			5);

	// 参数 参数名称 类型（长度） 参数说明 是否为空 样例
	// sstatuscode 状态码 Integer 200：操作成功
	private String sstatuscode;
	// 201：客户端版本过旧，可继续使用
	// 202：客户端版本过旧，禁止使用
	// 300：操作失败
	// 可由业务模块设置。
	// 当出现系统异常时，自动设置代码为300.并设置异常文本为smessage的值。
	// 业务模块未设置值时，自动取200操作成功。
	// 400~500：各业务模块自定义代码，根据手机端逻辑定义。 否 200
	// smessage 返回信息 String 返回操作后的信息
	private String smessage;
	// 可由业务模块设置。 否 操作成功
	// stime 响应时间 String 服务器当前的系统时间。
	private String stime;

	// 格式为：yyyyMMddhhMMss 否 20140101120131
	// sdata 返回对象数组 json 根据各接口需求返回相应的数据对象。
	// 可由业务模块设置。 {"Id":3, "name":
	// 史文超……}
	// private Object sdata;

	public AppiResponsePacket() {
		setStime(DateUtils.format(new Date(), "yyyyMMddHHmmss"));
	}

	public String getSstatuscode() {
		return sstatuscode;
	}

	public void setSstatuscode(String sstatuscode) {
		this.sstatuscode = sstatuscode;
	}

	public String getSmessage() {
		return smessage;
	}

	public void setSmessage(String smessage) {
		this.smessage = smessage;
	}

	public String getStime() {
		return stime;
	}

	public void setStime(String stime) {
		this.stime = stime;
	}

	// public Object getSdata() {
	// return sdata;
	// }
	//
	// public void setSdata(Object sdata) {
	// this.sdata = sdata;
	// }

	/**
	 * 构造JSONP对象 jsonp
	 * ({"sstatuscode":200,"smessage":"操作成功","stime":"20140101120131"
	 * ,"sdata":{}})
	 * 
	 * @return
	 */
	public String buildJson(String jsonP) {
		StringBuilder sBuild = new StringBuilder();
		if (jsonP != null && !"".equals(jsonP)) {
			sBuild.append(jsonP);
			sBuild.append("(");
		}

		LinkedHashMap<String, Object> hm = new LinkedHashMap<String, Object>();
		if ("200".equalsIgnoreCase(getSstatuscode())) {
			hm.put("success", true);
		} else {
			hm.put("failure", true);
		}
		hm.put("sstatuscode", getSstatuscode());
		hm.put("sstatuscode", getSstatuscode());
		hm.put("smessage", getSmessage());
		hm.put("stime", getStime());
		hm.put("sdata", sdataMap);
		JsonConfig jsonConfig = new JsonConfig();
		JSON json = JSONSerializer.toJSON(hm, jsonConfig);
		sBuild.append(json.toString());

		if (jsonP != null && !"".equals(jsonP)) {
			sBuild.append(")");
		}
		return sBuild.toString();
	}

	// public static void main(String[] args){
	//
	// ApiParam ap=new ApiParam();
	// ap.setSappid("1821");
	// ap.setSsessionid("aasdfasd");
	//
	// AppiResponsePacket packet=new AppiResponsePacket();
	// packet.setSstatuscode("200");
	// packet.setSmessage("操作失败！！！！！\r\n");
	// packet.setStime(DateUtils.format(new Date(),"yyyyMMddHHmmss"));
	// packet.setSdata(ap);
	//
	// System.out.println( packet.buildJson("Ext.ab.aa.callback"));
	//
	// }
	/**
	 * 添加Sdata中的数据项目
	 * 
	 * @param key
	 * @param value
	 */
	public void putSdata(String key, Object value) {
		if (sdataMap.containsKey(key)) {
			sdataMap.remove(key);
		}
		if (value == null) {
			sdataMap.put(key, "");
		} else {
			sdataMap.put(key, value);
		}
	}

	/**
	 * 删除已经存在的sdata项
	 * 
	 * @param key
	 * @return
	 */
	public Object removeSdata(String key) {
		return sdataMap.remove(key);
	}
}
