const DataTable = () => { //expressão lambda (atribuindo a variável NavBar a função sem nome)
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01/11/2021</td>
                        <td>Jim Halpert</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>01/11/2021</td>
                        <td>Dwight Schrute</td>
                        <td>33</td>
                        <td>24</td>
                        <td>14000.00</td>
                    </tr>
                    <tr>
                        <td>01/11/2021</td>
                        <td>Stanley Hudson</td>
                        <td>25</td>
                        <td>15</td>
                        <td>10000.00</td>
                    </tr>
                    <tr>
                        <td>01/11/2021</td>
                        <td>Ryan Howard</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;