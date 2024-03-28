import React from "react";
import './ListPedidosStyle.css'
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap"

const Listp = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Lista de Pedidos</h1></div>
                <div className="listus">
                    <Table className="tabelaus">
                        <tread>
                            <tr>
                                <th>
                                    gay
                                </th>
                            </tr>
                        </tread>
                    </Table>
                    <Link className="botaolistus" to='/login'>Modificar</Link>
                    <Link className="botaolistus" to='/login'>Cadastrar</Link>
                    <Link className="botaolistus" to='/login'>Deletar</Link>
                </div>
        </div>
    )
}


export default Listp;