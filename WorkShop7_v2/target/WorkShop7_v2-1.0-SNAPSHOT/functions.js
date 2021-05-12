/*function loadCust()
{
    $.get("api/customer/getcustomers", function (cust)
    {
        var custTable = document.getElementById("customers-table");

        for (i = 0; i < cust.length; i++)
        {
            var row = document.createElement("td");
            row.text = cust[i].custFirstName;
            custTable.add(row);
        }
    }, "json");
}*/
var mode = 0;

document.addEventListener("DOMContentLoaded",() => (loadCustomers()))
//const tableBody = document.querySelector("#customers-table > tbody");

function loadCustomers()
{
        try{
            fetch("api/customer/getcustomerslist").then(res=>{res.json().then(data=> populateCustTable(data))})
        }
        catch(e){
            console.warn("Could not load customers!");
        }
}

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

function selectCust(){
    var table = document.getElementById('customers-table-body');
    for(var i = 0; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function ()
        {
            document.getElementById("custid").value = this.cells[0].innerHTML;
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
    for (i = 0; i < divChildren.length; i++)
    {
        divChildren[i].value = "";
        divChildren[i].readOnly = false;
    }
}

function editBtn()
{
    var divChildren = $("#inputField input");
    for (i = 1; i < divChildren.length; i++)
    {
        divChildren[i].readOnly = false;
    }
    mode = 2;
}

//when submit button is clicked
function saveBtn()
{
    alert("mode: " + mode);
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
    alert("you clicked create");

    //get a collection of the child nodes inside the div of fields in the customerManagement.html file
    var divChildren = $("#inputField input");

    //create a JSON object shell
    var myinsert = {};

    //loop though the fields and add the field name and value to the object
    for (i = 0; i < divChildren.length; i++)
    {
        myinsert[divChildren[i].id] = divChildren[i].value;
    }

    //console.log(JSON.stringify(myinsert));
    alert(JSON.stringify(myinsert));

    $.ajax({
        url: "api/customer/putcustomer",
        type: "PUT",
        data: JSON.stringify(myinsert),
        complete: function(req,stat){ $("#error").html(stat); },
        success: function(data){ $("#message").html(data); },
        dataType: "text",
        contentType: "application/json; charset=UTF-8"
    });
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
    alert(JSON.stringify(myinsert));
    $.ajax({
        url: "api/customer/updatecustomer",
        type: "POST",
        data: JSON.stringify(myinsert),
        complete: function(req,stat){ $("#error").html(stat); },
        success: function(data){ $("#message").html(data); },
        dataType: "text",
        contentType: "application/json; charset=UTF-8"
    });
}

//delete function
function deleteCust(customerId) {
    alert("in deleteCustomer id:" + customerId);

    $.ajax({
        url:"api/customer/deletecustomer/" + customerId,
        type:"DELETE",
        complete:function(req,stat){ $("#error").html(stat); },
        success:function(data){ $("#message").html(data); },
        dataType:"text",
        contentType:"application/json; charset=UTF-8"
    });

}

<!--    function SaveCustomer()-->
<!--    {-->
<!--        document.getElementById("Fname").value;-->
<!--        document.getElementById("Lname").value;-->
<!--        document.getElementById("address").value;-->
<!--        document.getElementById("city").value;-->
<!--        document.getElementById("prov").value;-->
<!--        document.getElementById("postal").value;-->
<!--        document.getElementById("country").value;-->
<!--        document.getElementById("homeph").value;-->
<!--        document.getElementById("busph").value;-->
<!--        document.getElementById("email").value;-->

<!--        Connection conn = new DBConnectionManager().getConnection();-->
<!--        switch (mode[0]){​​​​​-->
<!--            case "edit":-->
<!--                String sql_edit = "UPDATE `customers` SET `CustFirstName`=?,`CustLastName`=?,`CustAddress`=?,`CustCity`=?,"-->
<!--                + "`CustProv`=?,`CustPostal`=?,`CustCountry`=?,`CustHomePhone`=?,`CustBusPhone`=?,`CustEmail`=?,"-->
<!--                + "`AgentId`=? WHERE CustomerId=?";-->
<!--    }-->
