package com.example.WorkShop7_v2;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import model.Customer;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/customer")
public class CustomerService {

//--------Bing He -----------------------------------------------------------------
//--------listCustomers with customerId,firstname and lastname function -----------
//--------the following code is duplicate with Gabriel's code, may need to be deleted later
//--------but leave for now in case it's needed later
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
    //--------Gabriel -----------------------------------------------------------------
    //--------getAllCustomers function -----------------------------------------------------------------
    @GET
    @Path("/getcustomerslist")
    @Produces(MediaType.APPLICATION_JSON)
    public String getCusts() {
        EntityManagerFactory factory = Persistence.createEntityManagerFactory("default");
        EntityManager em = factory.createEntityManager();
        Query query = em.createQuery("select a from Customer a");
        List<String> a = query.getResultList();
        em.close();
        factory.close();
        Gson gson = new Gson();

        return gson.toJson(a);
    }
    //---- Bing He -------------------------------------------------------------------
    //---- update customer function -------------------------------------------------------------------
    @POST
    @Path("/updatecustomer")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String postCustomer(String jsonString)
    {
        EntityManagerFactory factory = Persistence.createEntityManagerFactory("default");
        EntityManager em = factory.createEntityManager();
        Gson gson = new Gson();
        Customer customer = gson.fromJson(jsonString, Customer.class);
        System.out.println(customer);
        em.getTransaction().begin();
        Customer result = em.merge(customer);
        em.getTransaction().commit();
        if (result != null)
        {
            return "{ 'message':'Update Successful' }";
        }
        else
        {
            return "{ 'message':'Update Failed' }";
        }
    }
}