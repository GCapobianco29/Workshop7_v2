

function getCustomer(customerId) {
    $.get("api/customer/getcustomer/" + customerId, function (customer){
        var customerdiv = document.getElementById("customerdiv");
        customerdiv.innerHTML = "CustomerId: " + customer.CustomerId + "<br />"
            + "CustFirstName:" + customer.CustFirstName + "<br />"
            + "CustLastName:" + customer.CustLastName + "<br />"
            + "CustAddress" + customer.CustAddress + "<br />"
            + "CustCity:" + customer.CustCity + "<br />"
            + "CustProv:" + customer.CustProv + "<br />"
            + "CustPostal:" + customer.CustPostal + "<br />"
            + "CustCountry:" + customer.CustCountry + "<br />"
            + "CustHomePhone :" + customer.CustHomePhone + "<br />"
            + "CustBusPhone:" + customer.CustBusPhone + "<br />"
            + "CustEmail:" + customer.CustEmail + "<br />"
            + "AgentId:" + customer.AgentId + "<br />"
    }, "json");

}

//---------Bing He---------------------------------------------
function updateCustomer(customerId) {
    $.get("api/customer/updatecustomer/" + customerId, function (customer){
        var customerdiv = document.getElementById("customerdiv");
        customerdiv.innerHTML = "CustomerId: " + customer.CustomerId + "<br />"
            + "CustFirstName:" + customer.CustFirstName + "<br />"
            + "CustLastName:" + customer.CustLastName + "<br />"
            + "CustAddress" + customer.CustAddress + "<br />"
            + "CustCity:" + customer.CustCity + "<br />"
            + "CustProv:" + customer.CustProv + "<br />"
            + "CustPostal:" + customer.CustPostal + "<br />"
            + "CustCountry:" + customer.CustCountry + "<br />"
            + "CustHomePhone :" + customer.CustHomePhone + "<br />"
            + "CustBusPhone:" + customer.CustBusPhone + "<br />"
            + "CustEmail:" + customer.CustEmail + "<br />"
            + "AgentId:" + customer.AgentId + "<br />"
    }, "json");

}





