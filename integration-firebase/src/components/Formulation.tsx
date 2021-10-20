import { useState } from "react";
import Cliente from '../core/Cliente'
import Btn from "./Btn";
import SignIn from "./SignIn";

interface FormulationProps {
    cliente: Cliente
    cancel?: () => void
}

export default function Formulation(props: FormulationProps) {

    const id = props.cliente?.id;
    const [name, setName] = useState(props.cliente?.nome);
    const [age, setAge] = useState(props.cliente?.idade ?? 0)

    return(
        <div>
            { id ? (
                <SignIn 
                    readOnly
                    text="Código"
                    valueIn={id}
            />) : false}
            <SignIn
                text="Nome"
                valueIn={name}
                valueAlter={setName}
            />
            <SignIn
                text="Idade"
                type="number"
                valueIn={age}
                valueAlter={setAge}
            />
            <div className="flex justify-end mt-7">
                <Btn cor='blue' className="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Btn>
                <Btn cor='gray' onClick={props.cancel}>
                    Cancelar
                </Btn>
            </div>
        </div>
    )
}
