// C O N F I G 

const piriod = 3;
const apiKey = "084ed31e437d0f124e6548e9f96117";
const affID= "145071";
// ---------------------------------------------------


// -----------------
var currentDate = new Date();
//modify date with moment substraction
let modifiedDate = moment(currentDate).subtract(piriod, 'days');

//formatting current date
let formattedcurrentDate =moment(currentDate).format("MM/DD/YYYY hh:mm:ss");

//formatting Modified date
let formattedModifiedDate =moment(modifiedDate).format("MM/DD/YYYY hh:mm:ss");

// document.write(formattedcurrentDate);
// document.write('<br>')
// document.write(formattedModifiedDate);

// ------ BUILDING API CALLS ------------
let convAPI= `https://cors-anywhere.herokuapp.com/https://partners.clickdealer.com/affiliates/api/1/reports.asmx/Conversions?api_key=${apiKey}&affiliate_id=${affID}&start_date=${formattedModifiedDate}&end_date=${formattedcurrentDate}&row_limit=1000`
// ----------------

var dataArray = [];
var row1 = "row";
function randomAPI() {
  $.ajax({
    // url: "https://cors-anywhere.herokuapp.com/https://partners.clickdealer.com/affiliates/api/1/reports.asmx/Conversions?api_key=084ed31e437d0f124e6548e9f96117&affiliate_id=145071&start_date=08%2F01%2F2021%2000%3A00%3A00&end_date=08%2F27%2F2021%2000%3A00%3A00&include_tests=True&row_limit=100¤cy_id=All&disposition_type=All&conversion_type=All&update_filter=False&test=swagger_affiliate_portal",
    url: convAPI,
    dataType: "json",
    success: function (data) {
      // console.log(data);
      // console.log(typeof (data));
      dataArray = data.conversions;
      // console.log(dataArray);
      // buildTable(dataArray);

      convTable(dataArray);
      // generateTable(table, data.conversions);
    },
  });
}

function convTable(conv) {
  console.log(dataArray);
  var table = document.getElementById("table_body");
  for (var i = 0; i < conv.length; i++) {
    var row = `<tr> 
                    <td>${dataArray[i].conversion_date}</td>
                    <td>${dataArray[i].conversion_id}</td>
                    <td>${dataArray[i].transaction_id}</td>
                    <td>${dataArray[i].smartlink_name}</td>
                    <td>${dataArray[i].smartlink_id}</td>
                    <td>${dataArray[i].price_usd}</td>
                    <td>${dataArray[i].price_currency}</td>
                    <td>${dataArray[i].order_total}</td>
                    <td>${dataArray[i].order_total_usd}</td>
                    <td>${dataArray[i].event_name}</td>
                    <td>${dataArray[i].subid_1}</td>
                    <td>${dataArray[i].country}</td>
                    <td>${dataArray[i].device}</td>
                    <td>${dataArray[i].disposition}</td>
                    <td>${dataArray[i].click_ip}</td>
                    </tr>`;
    table.innerHTML += row;
    console.log(dataArray[i].subid_1);
    // https://www.valentinog.com/blog/html-table/
  }
}


function load() {
  console.log("Developed By Arifuzzaman Tusar");
}

function addictionalData() {
    document.getElementById("showTimeInterval").innerHTML="Last "+ piriod+" Days";
   
}

window.onload = addictionalData;
// window.onload = xmlMethod;
// window.onload =
