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
            temp += "<td>"+c.CustEmail+"</td>";
            /*temp += "<td>"+c.agentId+"</td></tr>";*/
        })
        document.getElementById("customers-table").innerHTML = temp;
    }
}

document.addEventListener("DOMContentLoaded",() => (loadCustomers()))