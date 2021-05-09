package com.example.WorkShop7_v2;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import model.Customer;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/customer")
public class CustomerService {
    @GET
    @Path("/getallcustnames")
    @Produces(MediaType.APPLICATION_JSON)
    public String getCustNames() {

        EntityManagerFactory factory = Persistence.createEntityManagerFactory("default"); //where the mapping is
        EntityManager em = factory.createEntityManager();
        Query query = em.createQuery("select c from Customer c");
        List<Customer> list = query.getResultList();
        JsonArray jsonArray = new JsonArray();
        for (Customer c : list) {
            JsonObject customer = new JsonObject();
            customer.addProperty("CustomerId", c.getCustomerId());
            customer.addProperty("CustFirstName", c.getCustFirstName());
            customer.addProperty("CustLastName", c.getCustLastName());
            jsonArray.add(customer);
        }

        return jsonArray.toString();
    }
}