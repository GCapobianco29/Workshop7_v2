/**
* Author: Gabriel Capobianco
* Date: May 2021
* Course: Threaded Project for OOSD (PROJ-207-A) Term 3
* Project: Workshop 7 ----; CPRG220 JSP/Servlets
*/

var mode = 0;
document.addEventListener("DOMContentLoaded",() => (loadCustomers()))

// Load customers details from data base
function loadCustomers()
{
        try{
            fetch("api/customer/getcustomerslist").then(res=>{res.json().then(data=> populateCustTable(data))})
        }
        catch(e){
            console.warn("Could not load customers!");
        }
}

// Populate the customer details table
function populateCustTable(json)
{
    if(json.length > 0)
    {
        var temp = "";
        json.forEach((c) =>{
            temp += "<tr onclick='selectCust()' style='cursor: pointer;'>";
            temp += "<td>"+c.CustomerId+"</td>";
            temp += "<td class='td'>"+c.CustFirstName+"</td>";
            temp += "<td>"+c.CustLastName+"</td>";
            temp += "<td>"+c.CustAddress+"</td>";
            temp += "<td>"+c.CustCity+"</td>";
            temp += "<td>"+c.CustProv+"</td>";
            temp += "<td>"+c.CustPostal+"</td>";
            temp += "<td>"+c.CustCountry+"</td>";
            temp += "<td>"+c.CustHomePhone+"</td>";
            temp += "<td>"+c.CustBusPhone+"</td>";
            temp += "<td>"+c.CustEmail+"</td>";
            temp += "<td>"+c.AgentId+"</td></tr>";
        })
        document.getElementById("customers-table-body").innerHTML = temp;
    }
}

//  Display all the selected customer info
function selectCust(){
    var table = document.getElementById('customers-table-body');
    for(var i = 0; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function ()
        {
            document.getElementById("CustomerId").value = this.cells[0].innerHTML;
            document.getElementById("CustFirstName").value = this.cells[1].innerHTML;
            document.getElementById("CustLastName").value = this.cells[2].innerHTML;
            document.getElementById("CustAddress").value = this.cells[3].innerHTML;
            document.getElementById("CustCity").value = this.cells[4].innerHTML;
            document.getElementById("CustProv").value = this.cells[5].innerHTML;
            document.getElementById("CustPostal").value = this.cells[6].innerHTML;
            document.getElementById("CustCountry").value = this.cells[7].innerHTML;
            document.getElementById("CustHomePhone").value = this.cells[8].innerHTML;
            document.getElementById("CustBusPhone").value = this.cells[9].innerHTML;
            document.getElementById("CustEmail").value = this.cells[10].innerHTML;
            document.getElementById("AgentId").value = this.cells[11].innerHTML;

            var divChildren = $("#inputField input");
            for (i = 0; i < divChildren.length; i++)
            {
                divChildren[i].readOnly = true;
            }
        }
    }
}



// Filter the customers table by name with a search bar
function custFilter() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("customers-table-body");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByClassName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

//make the fields empty and set mode to 2
function createBtn()
{
    //set mode to 2
    mode = 1;

    //clear all fields
    var divChildren = $("#inputField input");
    for (i = 1; i < divChildren.length; i++)
    {
        divChildren[i].value = "";
        divChildren[i].readOnly = false;
    }
    document.getElementById("CustFirstName").focus();
}

function editBtn()
{
    var divChildren = $("#inputField input");
    for (i = 1; i < divChildren.length; i++)
    {
        divChildren[i].readOnly = false;
    }
    mode = 2;
    document.getElementById("CustFirstName").focus();

}

//when submit button is clicked
function saveBtn()
{
    //if or case statement
    if(mode == 1)
    {
        addCust();
    }
    else
    {
        editCust();
    }
}

//add function from customerManagement.html
function addCust()
{

    //get a collection of the child nodes inside the div of fields in the customerManagement.html file
    var divChildren = $("#inputField input");

    //create a JSON object shell
    var myinsert = {};

    //loop though the fields and add the field name and value to the object
    for (i = 1; i < divChildren.length; i++)
    {
        myinsert[divChildren[i].id] = divChildren[i].value;
    }

    $.ajax({
        url: "api/customer/putcustomer",
        type: "PUT",
        data: JSON.stringify(myinsert),
        complete: function(req,stat){ $("#error").html(stat); },
        success: function(data){ $("#message").html(data); },
        dataType: "text",
        contentType: "application/json; charset=UTF-8"
    });

    alert("New Customer created successfully!");
}

// Edit function
function editCust()
{
    //get a collection of the child nodes inside the div of fields in the customerManagement.html file
    var divChildren = $("#inputField input");

    //create a JSON object shell
    var myinsert = {};

    //loop though the fields and add the field name and value to the object
    for (i = 0; i < divChildren.length; i++)
    {
        myinsert[divChildren[i].id] = divChildren[i].value;
    }

    var test = $.ajax({
        url: "api/customer/updatecustomer",
        type: "POST",
        data: JSON.stringify(myinsert),
        complete: function(req,stat){ $("#error").html(stat); },
        success: function(data){ $("#message").html(data); },
        dataType: "text",
        contentType: "application/json; charset=UTF-8"
    });
    alert("Customer modified successfully!");
}

//delete function
function deleteCust(customerId) {

    if (customerId == ""){
        alert("You have not selected a Customer to delete");

    }
    else{
        if(confirm("Are you sure you want to delete Customer: " + customerId)){
            $.ajax({
                url:"api/customer/deletecustomer/" + customerId,
                type:"DELETE",
                complete:function(req,stat){ $("#error").html(stat); },
                success:function(data){ $("#message").html(data); },
                dataType:"text",
                contentType:"application/json; charset=UTF-8"
            });
            alert("Customer: " + customerId + " has been deleted successfully");
        }
        else{
            document.getElementById("CustFirstName").focus();
        }

    }


}

