package com.ufo.appi.context;

import java.util.HashMap;

import com.ufo.appi.core.AppiUserInfo;

/**
 * 手机客户端的会话对象 作用类似于Web会话中的HttpSession
 * 
 * @author appdev
 *
 */
public class AppiSession {
	/**
	 * 存储会话属性数据
	 */
	private HashMap<String, Object> attributes;
	/**
	 * 会话创建的时间
	 * 
	 */
	private long createTime;
	/**
	 * 会话最后一次访问时间
	 */
	private long accessTime;
	/**
	 * 唯一的会话标识
	 */
	private final String sessionid;
	/**
	 * 会话用户对象
	 */
	private AppiUserInfo userInfo;

	/**
	 * 构造函数
	 * 
	 * @param sessionid
	 *            为当前会话分配的唯一SessionId
	 */
	public AppiSession(String sessionid) {
		this.sessionid = sessionid;
		this.attributes = new HashMap<String, Object>(2);
		this.createTime = System.currentTimeMillis();
		this.accessTime = this.createTime;
		this.userInfo=new AppiUserInfo();
	}

	/**
	 * 获取会话ID
	 * 
	 * @return
	 */
	public String getSessionid() {
		return this.sessionid;
	}
	/**
	 * 获取访问时间
	 * @return
	 */
	public long getAccessTime(){
		return this.accessTime;
	}

	/**
	 * 更新访问时间
	 */
	public void access() {
		this.accessTime = System.currentTimeMillis();
	}

	/**
	 * 获取会话的属性数据项
	 * 
	 * @param key
	 * @return
	 */
	public Object getAttribute(String key) {
		if (key == null)
			return null;
		return this.attributes.get(key);
	}

	/**
	 * 设置会话的属性数据
	 * 
	 * @param key
	 * @param value
	 */
	public void setAttribute(String key, Object value) {
		if (key == null || value == null)
			return;
		this.attributes.put(key, value);
	}

	/**
	 * 释放会话
	 */
	public void release() {
		this.attributes.clear();
		this.attributes = null;
	}
	
	/**
	 * 获取会话的用户对象 
	 * @return
	 */
	public AppiUserInfo getUserInfo(){
		return this.userInfo;
	}

}
