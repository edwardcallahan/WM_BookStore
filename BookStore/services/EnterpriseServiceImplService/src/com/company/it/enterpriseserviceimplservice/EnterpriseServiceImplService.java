
package com.company.it.enterpriseserviceimplservice;

import java.io.IOException;
import java.net.URL;
import javax.xml.namespace.QName;
import javax.xml.ws.BindingProvider;
import com.wavemaker.runtime.ws.BindingProperties;
import com.wavemaker.runtime.ws.jaxws.SOAPBindingResolver;
import org.springframework.core.io.ClassPathResource;


/**
 *  Operations for service "EnterpriseServiceImplService"
 *  01/19/2012 16:28:35
 * 
 */
public class EnterpriseServiceImplService {

    public String serviceId = "EnterpriseServiceImplService";
    private QName enterpriseServiceImplServiceQName = new QName("http://it.company.com/", "EnterpriseServiceImplService");
    private BindingProperties bindingProperties;
    private EnterpriseService enterpriseServiceService;

    public EnterpriseServiceImplService() {
        EnterpriseServiceImplServiceClient enterpriseServiceImplServiceClient;
        try {
            URL wsdlLocation = new ClassPathResource("com/company/it/enterpriseserviceimplservice/EnterpriseServiceImplService.wsdl").getURL();
            enterpriseServiceImplServiceClient = new EnterpriseServiceImplServiceClient(wsdlLocation, enterpriseServiceImplServiceQName);
        } catch (IOException e) {
            enterpriseServiceImplServiceClient = new EnterpriseServiceImplServiceClient();
        }
        enterpriseServiceService = enterpriseServiceImplServiceClient.getEnterpriseServiceImplPort();
    }

    public CheckByEmailResponse checkByEmail(CheckByEmail parameters) {
        CheckByEmailResponse response;
        SOAPBindingResolver.setBindingProperties(((BindingProvider) enterpriseServiceService), bindingProperties);
        response = enterpriseServiceService.checkByEmail(parameters);
        return response;
    }

    public CheckByIDResponse checkByID(CheckByID parameters) {
        CheckByIDResponse response;
        SOAPBindingResolver.setBindingProperties(((BindingProvider) enterpriseServiceService), bindingProperties);
        response = enterpriseServiceService.checkByID(parameters);
        return response;
    }

    public BindingProperties getBindingProperties() {
        return bindingProperties;
    }

    public void setBindingProperties(BindingProperties bindingProperties) {
        this.bindingProperties = bindingProperties;
    }

}
