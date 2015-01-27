package com.ufo.appi.core;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.Serializable;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.joda.time.DateTime;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.MultiValueMap;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.ufo.appi.context.SessionContext;
import com.ufo.core.entity.PersistableEntity;
import com.ufo.core.service.impl.ResourceContextHolder;
import com.ufo.core.utils.FileUtils;
import com.ufo.core.web.PersistableController;

/**
 * APPI的公共控制基类
 * 
 * @author appdev
 *
 */
public abstract class AppiBaseController<T extends PersistableEntity<ID>, ID extends Serializable>
		extends PersistableController<T, ID> {

    @Autowired
    protected ResourceContextHolder resourceContextHolder;

    protected SessionContext ctx=SessionContext.instance();
    
    protected Logger logger = LoggerFactory.getLogger(getClass());

	/**
	 * 获取请求数据包对象
	 * 
	 * @param request
	 * @return
	 */
	public AppiRequestPacket getRequestPacket(HttpServletRequest request) {
		AppiRequestPacket packet = new AppiRequestPacket(request);
		System.out.println(packet);
		return packet;
	}
	
	/**
	 * 获取成功的数据包
	 * @param message
	 * @return
	 */
	public AppiResponsePacket succ(String message){
		AppiResponsePacket packet = new AppiResponsePacket();
		packet.setSstatuscode("200");
		packet.setSmessage(message);
		return packet;
	}

	/**
	 * 构造失败返回报文
	 * 
	 * @param message
	 * @return
	 */
	public AppiResponsePacket fail(String message) {
		AppiResponsePacket packet = new AppiResponsePacket();
		packet.setSstatuscode("300");
		packet.setSmessage(message);
		return packet;
	}

	/**
	 * 构造异常返回报文
	 * 
	 * @param message
	 * @param t
	 * @return
	 */
	public AppiResponsePacket excep(String message, java.lang.Throwable t) {
		AppiResponsePacket packet = new AppiResponsePacket();
		packet.setSstatuscode("300");
		packet.setSmessage(message);
		if (t != null) {
			// todo:加入异常的处理
			t.printStackTrace();
		}
		return packet;
	}

    protected String saveFile(HttpServletRequest request, String paramName) throws IOException {
        String filePath = null;
        if (request instanceof MultipartHttpServletRequest) {
            MultiValueMap<String, MultipartFile> map = ((MultipartHttpServletRequest)request).getMultiFileMap();
            String name = map.getFirst(paramName).getOriginalFilename();
            String prefix = checkFile(name);
            if ("jpg,gif,bmp,png".indexOf(prefix.toLowerCase()) == -1){
                throw new RuntimeException("文件格式[jpg,gif,bmp,png]不正确");
            }
            if (map.getFirst(paramName).getSize() > resourceContextHolder.getImageSize() * 1024 * 1024){
                throw new RuntimeException("图片大小不能超过" + resourceContextHolder.getImageSize() + "M");
            }
            InputStream input = map.getFirst(paramName).getInputStream();

            //生成目标文件
            ServletContext context = request.getSession().getServletContext();
            final String absolutePath = FileUtils.getAbsolutePath(context, "appi");
            final String upath = FileUtils.normalizePath(absolutePath);
            String path = makeFile(upath, prefix);
            if (logger.isDebugEnabled()) {
                logger.debug("上传文件为" + upath + path);
            }
            //end

            File dest = new File(upath + path);
            FileCopyUtils.copy(input, new FileOutputStream(dest));

            filePath = "/appi/" + (path.startsWith("/") ? path.substring(1) : path);
        }
        return filePath;
    }

    protected String checkFile(String name) {
        final int idx = name.lastIndexOf(".");
        String prefix = "";
        if (idx != -1) {
            prefix = name.substring(idx + 1);
        }
        return prefix;
    }

    private String makeFile(String root, String prefix) throws IOException {
        StringBuffer path = new StringBuffer();
        //生成日期目录
        DateTime now = new DateTime();
        StringBuilder sb = new StringBuilder();
        int year = now.getYear();
        sb.append("/" + year);
        String month = "";
        int monthOfYear = now.getMonthOfYear();
        if (monthOfYear < 10) {
            month = "0" + monthOfYear;
        } else {
            month = "" + monthOfYear;
        }
        String day = "";
        int dayOfMonth = now.getDayOfMonth();
        if (dayOfMonth < 10) {
            day = "0" + dayOfMonth;
        } else {
            day = "" + dayOfMonth;
        }
        sb.append("/" + month);
        sb.append("/" + day);
        final String separator = "/";

        path.append(separator);
        path.append(sb);
        path.append(separator);
        FileUtils.createDirectoryIfNecessary(root + path.toString());
        //end
        //生成文件名
        path.append(separator);
        path.append(FileUtils.getRandomFileName(prefix));
        return path.toString().replaceAll("//", separator);
    }
}
