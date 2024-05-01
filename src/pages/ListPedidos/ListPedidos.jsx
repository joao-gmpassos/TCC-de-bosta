import React from "react";
import './ListPedidosStyle.css'
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap"

const Lispd = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Lista de Pedidos</h1></div>
                <div className="listpd">
                    <Table className="tabelapd">
                        <tread>
                            <tr>
                                <th>
                                    test
                                </th>
                            </tr>
                        </tread>
                    </Table>
                    <Link className="botaolistpd" to='/login'>Modificar</Link>
                    <Link className="botaolistpd" to='/login'>Cadastrar</Link>
                    <Link className="botaolistpd" to='/login'>Deletar</Link>
                </div>
        </div>
    )
}


export default Lispd;