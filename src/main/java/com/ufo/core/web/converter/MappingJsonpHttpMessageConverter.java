package com.ufo.core.web.converter;

import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.springframework.http.HttpOutputMessage;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageNotWritableException;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.ufo.appi.core.AppiResponsePacket;

public class MappingJsonpHttpMessageConverter extends MappingJackson2HttpMessageConverter {

    @Override
    protected void writeInternal(Object o, HttpOutputMessage outputMessage) throws IOException,
            HttpMessageNotWritableException {
    	
    	//by huangyijun 20150121 //支持自定义对象转
    	if(o!=null && o instanceof AppiResponsePacket){
    		AppiResponsePacket packet=(AppiResponsePacket)o;
    		ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
            HttpServletRequest request = attr.getRequest();
            String jsonpcallback = ServletRequestUtils.getStringParameter(request, "sjsonp", null);
            outputMessage.getHeaders().setContentType(MediaType.parseMediaType("text/javascript"));
            OutputStream out = outputMessage.getBody();
            out.write(packet.buildJson(jsonpcallback).getBytes("utf-8"));
            out.flush();
    		return;
    	}
    	
        ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = attr.getRequest();
        String jsonpcallback = ServletRequestUtils.getStringParameter(request, "sjsonp", null);
        if (StringUtils.isNotBlank(jsonpcallback)) {
            outputMessage.getHeaders().setContentType(MediaType.parseMediaType("text/javascript"));
            OutputStream out = outputMessage.getBody();
            out.write(jsonpcallback.getBytes());
            out.write("(".getBytes());
            super.writeInternal(o, outputMessage);
            out.write(")".getBytes());
            out.flush();
        } else {
            super.writeInternal(o, outputMessage);
        }
    }

}
