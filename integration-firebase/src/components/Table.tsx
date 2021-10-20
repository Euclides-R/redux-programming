import Cliente from "../core/Cliente";
import Btn from "./Btn";
import { IconEdit, IconTrash } from "./Icones";

interface TabelaProps {
    clientes: Cliente[];
    clientSelect?: (cliente: Cliente) => void
    clientDelete?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const showActions = props.clientSelect || props.clientDelete;

    function rendezirarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                { showActions ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente , i) => {
            return (
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-puple-200' : 'bg-puyple-100'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {renderizarActions(cliente)}
                </tr>
            )
        })
    }

    function renderizarActions (cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clientSelect ? (
                <button
                    onClick={() => props.clientSelect?.(cliente)}
                    className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {IconEdit}
                </button>) : false}
                {props.clientDelete ? (
                <button
                    onClick={() => props.clientDelete?.(cliente)}
                    className={`
                        flex justify-center items-center
                        text-red-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                    {IconTrash}
                </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {rendezirarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )

}