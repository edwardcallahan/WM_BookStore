package com.vmware.demo;

import java.math.BigDecimal;

import com.wavemaker.runtime.RuntimeAccess;

import com.company.it.enterpriseserviceimplservice.*;

/**
 * This is a client-facing service class.  All
 * public methods will be exposed to the client.  Their return
 * values and parameters will be passed to the client or taken
 * from the client, respectively.  This will be a singleton
 * instance, shared between all requests. 
 * 
 * To log, call the superclass method log(LOG_LEVEL, String) or log(LOG_LEVEL, String, Exception).
 * LOG_LEVEL is one of FATAL, ERROR, WARN, INFO and DEBUG to modify your log level.
 * For info on these levels, look for tomcat/log4j documentation
 */
public class WMJavaSvc extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    /* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public WMJavaSvc() {
       super(INFO);
    }

    /**
     *  Get IP address of client
     *  Takes Integer to specify return for demo purposes
     **/
   public String getClientIP(Integer country) {
       String result  = "0:0:0:0:0";
        try {
         if (country == null || country == 0) {    
          result = RuntimeAccess.getInstance().getRequest().getRemoteAddr();
         }
         else if (country == 1){
           result = "110.232.96.128"; //KR
         }
         else if (country == 2 || result.contains("0:0:0:0:0")){
             result = "212.58.244.58"; //UK
         }   
            log(INFO, "Now serving: " +  result);  
       } catch(Exception e) {
          log(ERROR, "There was a problem getting client IP address", e);
       }
       return result;
    }
    
    /**
     *  Example of server side 'mash up'
     *  Returns true if it is ok to download the book
     *  Might return download URL in app truly concerned with access control 
     **/
    public Integer okToDownload(Long custId){
        this.getClientIP(1);
        EnterpriseServiceImplService SOAPSrvc=(EnterpriseServiceImplService)RuntimeAccess.getInstance().getServiceBean("EnterpriseServiceImplService");
        CheckByID cid = new CheckByID();
        cid.setArg0(custId);
        CheckByIDResponse response = SOAPSrvc.checkByID(cid);
        BigDecimal credLim = response.getReturn();
        if (credLim.compareTo(BigDecimal.ZERO) > 0)
                return 1;
        else
                return 0;
    }


}
