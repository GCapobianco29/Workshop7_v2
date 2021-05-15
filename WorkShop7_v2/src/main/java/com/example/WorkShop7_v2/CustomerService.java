/**
 * Author: (Group 1) Bing He, Gabriel Capobianco, Angelito Tuguinay, Oluseyi Adepoju
 * Date: May 15, 2021
 * Course: Threaded Project for OOSD (PROJ-207-A) Term 3
 * Project: Workshop 7 --- CPRG220 JSP/Servlets
 * Purpose: This file is CustomerService.java, which provides CRUD methods
 */

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
    //------Bing He-----------------------------------------------------------------------------------------------------
    // (GET Request) getCustNames() method is for WorkShop8 Android app to use as data service for lvCustomer listview -
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
    //-------Gabriel Capobianco Rey------------------------------------------------------------------------------------
    // (GET Request) getCusts() method is for WorkShop7 to use as data service for listAllCustomer table---------------
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

    //------------------Oluseyi Adepoju---------------------------------------------------------------------------------
    // (GET Request) getCustomer() method is to get a single customer detail data --------------------------------------
    @GET
    @Path("/getcustomer/{ customerId }")
    @Produces(MediaType.APPLICATION_JSON)
    public String getCustomer(@PathParam("customerId") int customerId)
    {
        EntityManagerFactory factory = Persistence.createEntityManagerFactory("default");
        EntityManager em = factory.createEntityManager();
        Customer Customer = em.find(Customer.class, customerId);
        Gson gson = new Gson();
        return gson.toJson(Customer);
    }

    //--------Angelito Tuguinay-----------------------------------------------------------------------------------------
    // (PUT request) add new data into database-------------------------------------------------------------------------
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

    //------Bing He-----------------------------------------------------------------------------------------------------
    // (POST request) Update data for the selected Customer  -----------------------------------------------------------
    @POST
    @Path("/updatecustomer")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String updateCustomer(String jsonString)
    {
        EntityManagerFactory factory = Persistence.createEntityManagerFactory("default");
        EntityManager em = factory.createEntityManager();
        Gson gson = new Gson();
        Customer custinfo = gson.fromJson(jsonString, Customer.class);
        System.out.println(custinfo);
        em.getTransaction().begin();
        Customer result = em.merge(custinfo);
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

    //--------Angelito Tuguinay-----------------------------------------------------------------------------------------
    // (DELETE request) delete data from database-----------------------------------------------------------------------
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
}