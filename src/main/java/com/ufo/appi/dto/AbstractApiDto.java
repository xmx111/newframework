package com.ufo.appi.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ufo.core.utils.DateUtils;
import com.ufo.core.utils.ReflectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.Timestamp;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * 类名称:
 * 类描述:
 * <p/>
 * 创建人: hekang
 * 创建时间: 上午9:10
 *
 * @verion 1.0
 */
public abstract class AbstractApiDto {

    /**
     * 源属性
     * @return
     */
    protected abstract String[] sourceStrs();

    /**
     * 目标属性
     * @return
     */
    protected abstract String[] targetStrs();

    /**
     * 把sourceObjct中getObjectToObjectPropertyMap()里设置的属性设置到targetObject里
     * @param sourceObjct
     * @param targetObject
     */
    @JsonIgnore
    public void transformObject(Object sourceObjct, Object targetObject) {
        Map<String, String> map = getObjectToObjectPropertyMap();
        for (String getProperty : map.keySet()){
            try {
                Object value = getGetObject(sourceObjct, getProperty);

                setSetObject(targetObject, map.get(getProperty), value);
            } catch (Exception e){
                System.out.println(e);
            }
        }
    }

    /**
     * 取源的值
     * @param sourceObjct
     * @param getProperty
     * @return
     */
    @JsonIgnore
    public Object getGetObject(Object sourceObjct, String getProperty) {
        Object object = sourceObjct;
        Object before = object;
        String currProp = getProperty;
        if (getProperty.indexOf(".") != -1){
            String[] properties = getProperty.split("\\.");
            for (int i = 0; i < properties.length; i ++) {
                currProp = properties[i];
                object = ReflectionUtils.invokeGetterMethod(object, currProp);
                if (object == null) {
                    break;
                }
                if (i != properties.length - 1)
                    before = object;
            }
        } else {
            object = ReflectionUtils.invokeGetterMethod(sourceObjct, getProperty);
        }
        Class clazzGet = ReflectionUtils.getGetterMethodType(before, currProp);
        if (object == null && clazzGet.getName().equals("java.lang.String")) {
            object = "";
        }
        return object;
    }

    /**
     * 设置目标值
     * @param targetObject
     * @param getProperty
     * @return
     */
    @JsonIgnore
    public void setSetObject(Object targetObject, String getProperty, Object value) throws Exception {
        // String为空则设""
        Object obj = value;
        Class clazzGet = value.getClass();
        Class clazzSet = ReflectionUtils.getGetterMethodType(targetObject, getProperty);
        if (value != null && !clazzGet.equals(clazzSet)) {
            if (clazzGet.getName().equals("java.util.Date")) {
                obj = DateUtils.formatDate((Date)value);
            } else if (clazzGet.getName().equals("java.sql.Timestamp")) {
                obj = DateUtils.format((Timestamp) value, DateUtils.FT_LONG_DATE_TIME);
            }
        }
        ReflectionUtils.invokeSetterMethod(targetObject, getProperty, obj);
    }



    /**
     * 取对应的属性Map，key为get的属性，value为set的属性
     * @return
     */
    @JsonIgnore
    protected Map<String, String> getObjectToObjectPropertyMap() {
        Map<String, String> map = new HashMap<String, String>();
        String[] source = sourceStrs();
        String[] target = targetStrs();
        for (int i = 0; i < sourceStrs().length; i ++){
            map.put(source[i], target[i]);
        }
        return map;
    }

}
