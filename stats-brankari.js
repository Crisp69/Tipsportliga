let sortDirection = false;
let personData = [
       
        // BARDEJOV //
      /*{'flag':'<img src="img/nat/kaz.gif" height="12">', 'name':'Serikbek Abilkasanov ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 30,'rating': 448,
                                                          'zapasy':1,'uspesnost':84.7, 'goals':1}, 

        {'flag':'<img src="img/nat/can.gif" height="12">', 'name':'Jonathan Tolson', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 32,'rating': 366,
                                                          'zapasy':1,'uspesnost':88.9, 'goals':2}, */

        // BYSTRICA //                                                                                                           
      /*{'flag':'<img src="img/nat/lot.gif" height="12">', 'name':'Valdis Misjūns  ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 36,'rating': 365,
                                                           'zapasy':1,'uspesnost':71.4, 'goals':4}, */

        {'flag':'<img src="img/nat/nem.gif" height="12">', 'name':'Alex Dopp ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 34,'rating': 417,
                                                           'zapasy':11,'uspesnost':91.40, 'goals':29},

        // DETVA //                                                                                                           
        {'flag':'<img src="img/nat/isr.gif" height="12">', 'name':'Gedi Chernyakhovskiy ', 'club':'<img src=img/small/detva-small.png> Detva','age': 22,'rating': 285,
                                                         'zapasy':11,'uspesnost':89.98, 'goals':35},

        // KOSICE //                                                                                                           
        {'flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Jan Cihlář ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 35,'rating': 406,
                                                        'zapasy':12,'uspesnost':87.28, 'goals':39},

      /*{'flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Petr Kameník ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 35,'rating': 406,
                                                        'zapasy':1,'uspesnost':87.5, 'goals':3}, */                                                     
        
        // MICHALOVCE //
        {'flag':'<img src="img/nat/ir.gif" height="12">', 'name':' Harry Hurst ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 25,'rating': 325,
                                                         'zapasy':10,'uspesnost':92.70, 'goals':26},    

        // MIKULÁŠ //
        {'flag':'<img src="img/nat/fin.gif" height="12">', 'name':' Pentti Toimela ', 'club':'<img src=img/small/mikulas-small.png> Mikuláš','age': 33,'rating': 398,
                                                        'zapasy':10,'uspesnost':88.42, 'goals':47},


        // NITRA //
       /* {'flag':'<img src="img/nat/lot.gif" height="12">', 'name':' Gatis Ādamsons  ', 'club':'<img src=img/small/nitra-small.png> Nitra','age': 33,'rating': 481,
                                                        'zapasy':2,'uspesnost':85.00, 'goals':10},*/

        {'flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Alan Černošek   ', 'club':'<img src=img/small/nitra-small.png> Nitra','age': 33,'rating': 481,
                                                        'zapasy':6,'uspesnost':88.87, 'goals':12}, 

        // PIEŠŤANY //
        {'flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Martin Puška ', 'club':'<img src=img/small/piestany-small.png> Piešťany','age': 33,'rating': 519,
                                                        'zapasy':8,'uspesnost':91.64, 'goals':19},

        // POPRAD //
        {'flag':'<img src="img/nat/cz.gif" height="12">', 'name':'  Martin Horák ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 33,'rating': 519,
                                                        'zapasy':9,'uspesnost':90.83, 'goals':19},

       /* {'flag':'<img src="img/nat/uk.gif" height="12">', 'name':'  Ashley Owen ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 33,'rating': 519,
                                                        'zapasy':2,'uspesnost':87.3, 'goals':6}, */


         // SKALICA //
         {'flag':'<img src="img/nat/lot.gif" height="12">', 'name':' Edijs Ēķis  ', 'club':'<img src=img/small/skalica-small.png> Skalica','age': 32,'rating': 403,
                                                        'zapasy':12,'uspesnost':89.23, 'goals':33},


         // SLOVAN //
         {'flag':'<img src="img/nat/nem.gif" height="12">', 'name':' Mario Mennemeyer  ', 'club':'<img src=img/small/slovan-small.png> Slovan','age': 32,'rating': 370,
                                                        'zapasy':10,'uspesnost':84.74, 'goals':46},

         // SPIŠSKÁ //
       /*  {'flag':'<img src="img/nat/est.gif" height="12">', 'name':' Erik Torp ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 30,'rating': 407,
                                                        'zapasy':2,'uspesnost':82.20, 'goals':2}, */

         {'flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Elemír Malenec ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 30,'rating': 407,
                                                        'zapasy':8,'uspesnost':89.33, 'goals':25}, 


         // ZVOLEN /
         {'flag':'<img src="img/nat/fin.gif" height="12">', 'name':' Torsti Vilppola ', 'club':'<img src=img/small/zvolen-small.png> Zvolen','age': 31,'rating': 385,
                                                        'zapasy':11,'uspesnost':87.40, 'goals':51},


         // ŽILINA //                                                                                                        
         {'flag':'<img src="img/nat/hr.gif" height="12">', 'name':' Izidor Piragić  ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 33,'rating': 396,
                                                        'zapasy':11,'uspesnost':86.04, 'goals':54},

    
 
    ];

    window.onload = () => {
        loadTableData(personData);
    };

 

    function loadTableData(personData) {
        const tableBody = document.getElementById('tableData');
        let dataHtml = '';

        for(let person of personData){
            dataHtml +=  `<tr>
                            <td class="meno-hraca" style="font-weight: bold; padding-left: 3px; padding-bottom:2.5px;">${person.flag}</td>
                            <td class="meno-hraca" style="font-weight: bold; padding-left: 3px;">${person.name}</td>
                            <td class="meno-klubu" style="font-size: 14px; padding-top: 2px; padding-bottom: 2px;">${person.club}</td>
                            <td style="text-align: center; color: black;">${person.age}</td>
                            <td style="text-align: center; color: black; font-weight: bold;">${person.rating}</td>
                            <td style="text-align: center;">${person.zapasy}</td> 
                            <td style="font-weight: bold; text-align: center;">${person.uspesnost}</td>
                            <td style="text-align: center;">${person.goals}</td>                            
                      </tr>`
        }
    
        tableBody.innerHTML = dataHtml;
    }



    function sortColumn(columnName){
        const dataType = typeof personData[0][columnName];
        sortDirection = !sortDirection;

        switch(dataType) {
            case 'number':
            sortNumberColumn(sortDirection, columnName);
            break;
        }
        
        loadTableData(personData);
    }

    function sortNumberColumn(sort, columnName){
        personData = personData.sort((p1, p2) => {
            return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]
        });
    }


