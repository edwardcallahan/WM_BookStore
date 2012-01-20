
package com.ip2location.api.ip2location;

import java.util.HashMap;
import java.util.Map;
import javax.xml.namespace.QName;
import com.wavemaker.runtime.ws.BindingProperties;
import com.wavemaker.runtime.ws.RESTService;


/**
 *  Operations for service "ip2location"
 *  01/19/2012 16:30:08
 * 
 */
public class Ip2Location {

    public java.lang.String serviceId = "ip2location";
    private QName ip2LocationQName = new QName("http://api.ip2location.com/", "ip2location");
    private BindingProperties bindingProperties;
    private java.lang.String parameterizedURI = "http://api.ip2location.com/?ip={ip}&key=demo";
    private RESTService restService;

    public Ip2Location() {
        restService = new RESTService(serviceId, ip2LocationQName, parameterizedURI);
    }

    public java.lang.String getLocation(java.lang.String ip) {
        Map<String, Object> inputMap = new HashMap<String, Object>();
        inputMap.put("ip", ip);
        restService.setBindingProperties(bindingProperties);
        String result = restService.invoke(inputMap, java.lang.String.class);
        return ((String) result);
    }

    public BindingProperties getBindingProperties() {
        return bindingProperties;
    }

    public void setBindingProperties(BindingProperties bindingProperties) {
        this.bindingProperties = bindingProperties;
    }

}
