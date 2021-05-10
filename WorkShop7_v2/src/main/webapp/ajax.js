
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




