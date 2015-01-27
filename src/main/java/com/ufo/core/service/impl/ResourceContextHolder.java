package com.ufo.core.service.impl;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;

@Service
public class ResourceContextHolder {

    private final Logger logger = LoggerFactory.getLogger(ResourceContextHolder.class);

//    @Value("${resource.path}")
    private String uploadPath = "files";

//    @Value("${resource.downloadPath}")
    private String downloadPath = "";

    @Value("${web.domain}")
    private String webDomain;

    @Value("${image.size}")
    private Integer imageSize;

    @Value("${video.size}")
    private Integer videoSize;

    @Value("${headimage.size}")
    private Integer headSize;

    @Value("${headimage.width}")
    private Integer headImageWidth;

    @Value("${headimage.height}")
    private Integer headImageHeight;

    /** 
     * 上传文件根目录 
    * @return
    */
    public String getUploadPath() {
        return StringUtils.isBlank(uploadPath) ? "files" : uploadPath;
    }

    /** 
     * 下载文件路径 
    * @return
    */
    public String getDownloadUrl() {
        return StringUtils.trimToEmpty(downloadPath);
    }

    private static String staticFileUploadDir;

    /**
     * 获取文件上传根目录：优先取cfg.file.upload.dir参数值，如果没有定义则取当前用户主目录${user.home}/attachments
     * @return
     */
    public String getFileUploadRootDir() {
        if (staticFileUploadDir == null) {
            staticFileUploadDir = getUploadPath();
            if (org.apache.commons.lang3.StringUtils.isBlank(staticFileUploadDir)) {
                staticFileUploadDir = System.getProperty("user.home") + File.separator + "attachments";
            }
            if (staticFileUploadDir.endsWith(File.separator)) {
                staticFileUploadDir = staticFileUploadDir.substring(0, staticFileUploadDir.length() - 2);
            }
            logger.info("Setup file upload root dir:  {}", staticFileUploadDir);
        }
        return staticFileUploadDir;
    }
    
    /**
     * 替换富文本框上传图片路径
     * @param content
     * @return
     */
    public String replaceContent(String content){
        if(StringUtils.isNotBlank(content)){
            content=content.replaceAll("/upload/image", getWebDomain()+"/upload/image");
        }
        return content;
    }

    public String getWebDomain() {
        return StringUtils.isBlank(uploadPath) ? "http://localhost" : webDomain;
    }

    public Integer getImageSize() {
        return imageSize == null || imageSize != Integer.MIN_VALUE ? 20 : imageSize;
    }

    public Integer getVideoSize() {
        return videoSize == null || videoSize != Integer.MIN_VALUE ? 20 : videoSize;
    }

    public Integer getHeadSize() {
        return headSize == null || headSize != Integer.MIN_VALUE ? 20 : headSize;
    }

    public Integer getHeadImageHeight() {
        return headImageHeight;
    }

    public Integer getHeadImageWidth() {
        return headImageWidth;
    }
}
