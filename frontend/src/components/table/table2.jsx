import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import * as API from "../../ruta";

function Table2() {

    API.get_users();

    const [lista, setUsers] = useState([]);
    useEffect(() => {
      API.get_users().then(setUsers);
    }, []);

    const columns = [
        {
        name: "nombre",
        selector: (row) => row.nombre,
        sortable: true
        },
        {
        name: "apellido",
        selector: (row) => row.apelllido,
        sortable: true
        },
        {
        name: "edad",
        selector: (row) => row.edad,
        sortable: true
        },
        
    ];

    const data = [
        {
            nombre: "jose",
            apelllido: "ricardo",
            edad: "20",
        },
        {
            nombre: "maria",
            apelllido: "fernanda",
            edad: "21",
        },
        {
            nombre: "juanjo",
            apelllido: "lopez",
            edad: "22",
        },
        {
            nombre: "enrique",
            apelllido: "iglecias",
            edad: "23",
        },
        {
            nombre: "juan luis",
            apelllido: "guerra",
            edad: "24",
        },
    ];


    const [record, setRecors] = useState(data)


    const handLeChange = (e) => {
        const filteredRecords= data.filter(record =>{
            return record.nombre.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
        })
        setRecors(filteredRecords)
    }

    return (
        <>
        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid px-4">
                    <h1 class="mt-4">Tables</h1>
                    <div class="card mb-4">
                        <div class="card-header">
                            <i class="fas fa-table me-1"></i>
                            Estado de Solicitud
                        </div>
                        <div class="card-header">
                            <input type="text" onChange={handLeChange} />
                        </div>

                        <div class=" ms-5">
                            <DataTable 
                            columns={columns} 
                            data={record}
                            pagination
                            paginationPerPage={3}
                            fixedHeader
                             />
                        </div>
                        
                    </div>
                </div>
            </main>
        </div>
        </>
    );
}

export default Table2;
