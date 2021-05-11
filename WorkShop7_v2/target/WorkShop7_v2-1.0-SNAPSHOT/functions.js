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
            temp += "<td>"+c.CustFirstName+"</td>";
            temp += "<td>"+c.CustLastName+"</td>";
            temp += "<td>"+c.CustAddress+"</td>";
            temp += "<td>"+c.CustCity+"</td>";
            temp += "<td>"+c.CustProv+"</td>";
            temp += "<td>"+c.CustPostal+"</td>";
            temp += "<td>"+c.CustCountry+"</td>";
            temp += "<td>"+c.CustHomePhone+"</td>";
            temp += "<td>"+c.CustBusPhone+"</td>";
            temp += "<td>"+c.CustEmail+"</td></tr>";
            /*temp += "<td>"+c.agentId+"</td></tr>";*/
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
            document.getElementById("Fname").value = this.cells[1].innerHTML;
            document.getElementById("Lname").value = this.cells[2].innerHTML;
            document.getElementById("address").value = this.cells[3].innerHTML;
            document.getElementById("city").value = this.cells[4].innerHTML;
            document.getElementById("prov").value = this.cells[5].innerHTML;
            document.getElementById("postal").value = this.cells[6].innerHTML;
            document.getElementById("country").value = this.cells[7].innerHTML;
            document.getElementById("homeph").value = this.cells[8].innerHTML;
            document.getElementById("busph").value = this.cells[9].innerHTML;
            document.getElementById("email").value = this.cells[10].innerHTML;
        }
    }
}




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
