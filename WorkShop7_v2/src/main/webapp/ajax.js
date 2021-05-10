//--------Bing He -----------------------------------------------------------------
//--------the following code is duplicate with Gabriel's code, may need to be deleted later
//--------but leave for now in case it's needed later
function loadAllCustomers() {
    $.get("api/customer/getallcustnames/", function (customers) {
        var customerList = document.getElementById("CustList");
        //customerList.innerHTML = " ";
        for (i = 0; i < customers.length; i++) {
            var li = document.createElement("li");
            li.textContent = customers[i].CustFirstName + customers[i].CustLastName;
            li.className="cust";
            li.value = i+1;
            li.localName = "li.value";
            customerList.append(li);
        }
    }, "json");
}

//---------Bing He---------------------------------------------
//-------- the following code needs to be modified according to customerlist.html
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



