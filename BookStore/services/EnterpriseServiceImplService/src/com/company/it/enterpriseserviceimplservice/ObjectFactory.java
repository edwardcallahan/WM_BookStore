
package com.company.it.enterpriseserviceimplservice;

import javax.xml.bind.annotation.XmlRegistry;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.company.it.enterpriseserviceimplservice package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {


    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.company.it.enterpriseserviceimplservice
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link CheckByEmailResponse }
     * 
     */
    public CheckByEmailResponse createCheckByEmailResponse() {
        return new CheckByEmailResponse();
    }

    /**
     * Create an instance of {@link CheckByIDResponse }
     * 
     */
    public CheckByIDResponse createCheckByIDResponse() {
        return new CheckByIDResponse();
    }

    /**
     * Create an instance of {@link CheckByID }
     * 
     */
    public CheckByID createCheckByID() {
        return new CheckByID();
    }

    /**
     * Create an instance of {@link CheckByEmail }
     * 
     */
    public CheckByEmail createCheckByEmail() {
        return new CheckByEmail();
    }

}
