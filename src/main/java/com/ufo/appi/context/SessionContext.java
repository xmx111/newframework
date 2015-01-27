package com.ufo.appi.context;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

/**
 * 手机APP的会话管理容器
 * 
 * 1.后台在处理手机登录成功时，调用loginNewSession创建新的会话。
 * 2.后台在处理手机退出登录时，调用logoutDelSession删除会话。
 * 3.后台在处理需要校验登录身份的接口时，调用checkSession检查会话是否有效。 4.存储一个对象到当前会话中 5.从当前会话对象中获取存储的对象
 * 4.存储一个对象到当前会话中 作用类似于：request.getSession().setAttribute(arg0, arg1);
 * 5.从当前会话对象中获取存储的对象 作用类似于：request.getSession().getAttribute(arg0);
 * 6.根据会话标识查询并返回会话对象
 * 
 * @author appdev
 *
 */
public class SessionContext {
	private static SessionContext instance = null;
	private final static Object LOCK = new Object();

	public static SessionContext instance() {
		if (instance == null) {
			synchronized (LOCK) {
				if (instance == null) {
					instance = new SessionContext();
				}
			}
		}
		return instance;
	}

	/**
	 * 存储会话的容器
	 */
	private HashMap<String, AppiSession> sessionMap;
	/**
	 * 会话窗口的锁
	 */
	private final Object sessionMapLock = new Object();
	/**
	 * 系统最大允许活动的会话数
	 */
	private int maxSessionSize;

	/**
	 * 构造函数
	 */
	private SessionContext() {
		this.maxSessionSize = 100;
		this.sessionMap = new HashMap<String, AppiSession>(this.maxSessionSize);
	}

	/**
	 * 1.后台在处理手机登录成功时，调用loginNewSession创建新的会话。
	 * 
	 * @param request
	 *            允许传入NULL
	 * @return 新的会话标识
	 */
	public synchronized AppiSession loginNewSession(HttpServletRequest request) {
		try {
			AppiSession session = checkSession(request);
			if (session != null) {// 当前会话中已经存在旧的会话,先删除旧会话,再创建新的会话
				remove(session.getSessionid());
				session.release();
			}

		} catch (SessionCheckException se) {
			// NULL
		}
		// 判断会话MAP是否已达到限制大小
		if (this.sessionMap.size() >= this.maxSessionSize) {
			// todo:移除最老的会话
			removeOldder();
		}
		// 创建新的会话
		String sessionId = "APPI" + request.getSession().getId();
		AppiSession session = new AppiSession(sessionId);
		put(sessionId, session);
		return session;
	}

	/**
	 * 2.后台在处理手机退出登录时，调用logoutDelSession删除会话。
	 * 
	 * @param request
	 *            允许传入NULL
	 */
	public void logoutDelSession(HttpServletRequest request) {
		try {
			AppiSession session = checkSession(request);
			if (session != null) {
				remove(session.getSessionid());
				session.release();
			}

		} catch (SessionCheckException se) {
			// NULL
		}
	}

	/**
	 * 3.后台在处理需要校验登录身份的接口时，调用checkSession检查会话是否有效。
	 * 
	 * @param request
	 *            允许传入NULL
	 */
	public AppiSession checkSession(HttpServletRequest request)
			throws SessionCheckException {
		String ssessionid = request.getParameter("ssessionid");
		if (ssessionid == null || "".equalsIgnoreCase(ssessionid)) {
			throw new SessionCheckException("没有会话或会话已失效！");
		}
		AppiSession session = get(ssessionid);
		if (session == null)
			throw new SessionCheckException("没有会话或会话已失效！");
		return session;
	}

	/**
	 * 4.存储一个对象到当前会话中 作用类似于：request.getSession().setAttribute(arg0, arg1);
	 * 
	 * @param request
	 * @param key
	 * @return
	 */
	public void setAttribute(HttpServletRequest request, String key,
			Object value) {
		try {
			AppiSession session = checkSession(request);
			if (session != null) {
				session.setAttribute(key, value);
			}

		} catch (SessionCheckException se) {
			// NULL
		}

	}

	/**
	 * 5.从当前会话对象中获取存储的对象 作用类似于：request.getSession().getAttribute(arg0);
	 * 
	 * @param request
	 * @param key
	 * @return
	 */
	public Object getAttribute(HttpServletRequest request, String key) {
		try {
			AppiSession session = checkSession(request);
			if (session == null) {
				return null;
			}
			return session.getAttribute(key);

		} catch (SessionCheckException se) {
			// NULL
		}
		return null;
	}

	/**
	 * 6.根据会话标识查询并返回会话对象
	 * 
	 * @param sessionid
	 *            会话标识
	 * @return 会话不存在时，返回NULL
	 */
	public AppiSession getSession(String sessionid) {
		return get(sessionid);
	}

	/**
	 * 针对会话MAP的原子操作
	 * 
	 * @param key
	 * @param obj
	 */
	private void put(String key, AppiSession value) {
		synchronized (sessionMapLock) {
			sessionMap.put(key, value);
		}
	}

	/**
	 * 针对会话MAP的原子操作
	 * 
	 * @param key
	 * @return
	 */
	private AppiSession remove(String key) {
		synchronized (sessionMapLock) {
			return sessionMap.remove(key);
		}
	}

	/**
	 * 会话MAP的读操作
	 * 
	 * @param key
	 * @return
	 */
	private AppiSession get(String key) {
		return sessionMap.get(key);
	}

	/**
	 * 删除最老的会话
	 */
	private synchronized void removeOldder() {
		String[] keys;
		synchronized (sessionMapLock) {
			keys = new String[sessionMap.keySet().size()];
			keys = sessionMap.keySet().toArray(keys);
		}
		AppiSession oldSession=null;
		if (keys != null && keys.length > 0) {
			for (String key : keys) {
				AppiSession session = get(key);
				if (session == null)
					continue;
				if(oldSession==null){
					oldSession=session;
					continue;
				}else{
					if(oldSession.getAccessTime()>session.getAccessTime()){
						oldSession=session;
					}
				}

			}
		}
		if(oldSession!=null){
			remove(oldSession.getSessionid());			
		}
	}
}
