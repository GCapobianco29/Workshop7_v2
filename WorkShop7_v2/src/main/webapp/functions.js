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

const tableBody = document.querySelector("#customers-table > tbody");

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
            temp += "<tr>";
            temp += "<td onclick='clicked()' id='customerId'>"+c.CustomerId+"</td>";
            temp += "<td>"+c.CustFirstName+"</td>";
            temp += "<td>"+c.CustLastName+"</td>";
            temp += "<td>"+c.CustAddress+"</td>";
            temp += "<td>"+c.CustCity+"</td>";
            temp += "<td>"+c.CustProv+"</td>";
            temp += "<td>"+c.CustPostal+"</td>";
            temp += "<td>"+c.CustCountry+"</td>";
            temp += "<td>"+c.CustHomePhone+"</td>";
            temp += "<td>"+c.CustBusPhone+"</td>";
<<<<<<< Updated upstream
            temp += "<td>"+c.CustEmail+"</td>";
            /*temp += "<td>"+c.agentId+"</td></tr>";*/
        })
        document.getElementById("customers-table").innerHTML = temp;
=======
            temp += "<td>"+c.CustEmail+"</td></tr>";
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
        }
>>>>>>> Stashed changes
    }
}

<<<<<<< Updated upstream
document.addEventListener("DOMContentLoaded",() => (loadCustomers()))
=======
document.addEventListener("DOMContentLoaded",() => (loadCustomers()))

/*function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}*/

//add function from customerManagement.html
function createCust()
{
    alert("you clicked create");

    //get a collection of the child nodes insde the div of fields in the customerManagement.html file
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

//test onclick
function clicked(){
    alert("clicked" + document.getElementById("customerId").innerText);
    document.getElementById("custId").value = document.getElementById("customerId").innerText;
}
>>>>>>> Stashed changes
