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
//------Bing He--------the following is for WorkShop8 Android app to use as data service for listAllCustomer view ------
@Path("/customer")
public class CustomerService {
    @GET
    @Path("/getallcustnames")
    @Produces(MediaType.APPLICATION_JSON)
    public String getCustNames() {

        EntityManagerFactory factory = Persistence.createEntityManagerFactory("default");
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
//-------Gabriel---------the following is for WorkShop7 to use as data service for listAllCustomer table---------------
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

//------------------Sheyi---------used to get customer--------------------------------
    @GET
    @Path("/getcustomer/{ customerId }")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAgent(@PathParam("customerId") int customerId)
    {
        EntityManagerFactory factory = Persistence.createEntityManagerFactory("default");
        EntityManager em = factory.createEntityManager();
        Customer Customer = em.find(Customer.class, CustomerId);
        Gson gson = new Gson();
        return gson.toJson(Customer);
}

//--------Angelito---------------------------------------------------------
    //add new data into database (PUT request)
    @PUT
    @Path("/putcustomer")
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.APPLICATION_JSON)
    public String putCustomer(String jsonString) {
        String response = "";
        EntityManagerFactory factory = Persistence.createEntityManagerFactory("default");
        EntityManager em = factory.createEntityManager();
        Gson gson = new Gson();
        Customer cust = gson.fromJson(jsonString, Customer.class);
        System.out.println(cust);
        em.getTransaction().begin();
        em.persist(cust);
        em.getTransaction().commit();
        if(em.contains(cust))
        {
            response = "Customer inserted to DB";
        }
        else
        {
            response = "Customer insert failed";
        }
        em.close();
        factory.close();

        return response;
    }
//--------Angelito---------------------------------------------------------
    //delete data from database (DELETE request)
    @DELETE
    @Path("/deletecustomer/{ customerId }")
    public String deleteCustomer(@PathParam("customerId") int customerId)
    {
        String response = "";
        EntityManagerFactory factory = Persistence.createEntityManagerFactory("default");
        EntityManager em = factory.createEntityManager();
        Customer cust = em.find(Customer.class, customerId);
        em.getTransaction().begin();
        em.remove(cust);
        if(em.contains(cust))
        {
            em.getTransaction().rollback();
            response = "Customer deletion failed";
        }
        else
        {
            em.getTransaction().commit();
            response = "Customer deleted";
        }
        em.close();
        factory.close();

        return response;
    }

















    @POST
    @Path("/updatecustomer")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String updateCustomer(String jsonString)
    {
        EntityManagerFactory factory = Persistence.createEntityManagerFactory("default");
        EntityManager em = factory.createEntityManager();
        Gson gson = new Gson();
        Customer Customer = gson.fromJson(jsonString, Customer.class);
        System.out.println(Customer);
        em.getTransaction().begin();
        Customer result = em.merge(Customer);
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