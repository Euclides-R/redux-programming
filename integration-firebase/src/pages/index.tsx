import { useState } from 'react';
import Btn from '../components/Btn';
import Form from '../components/Formulation';
import Layout from '../components/Layout'
import Tabela from '../components/Table'
import Cliente from '../core/Cliente'

export default function Home() {

  const clientes = [
    new Cliente('Verônica', 23, '1'),
    new Cliente('Euclides', 21, '2'),
    new Cliente('Maria', 25, '3'),
    new Cliente('João', 29, '4'),
  ]

  function clientSelect(cliente: Cliente) {
    console.log(client)
    setClient(client);
    setVisible('form');
  }

  function clientDelete(cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`)  
  }

  function newClient(cliente: Cliente) {
    console.log(cliente);
    setVisible('table');
  }

  const [client, setClient] = useState<Cliente>(Cliente.vazio());
  const [visible, setVisible] = useState<'table' | 'form'>('table');
  
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-br from-blue-500 to-purple-600
      text-white
      `}>
        <Layout titulo="Cadastro Simples">
          {visible === 'table' ? (
            <>
            <div className="flex justify-end">
              <Btn
                cor='green'
                onClick={() => setVisible('form')}
                className="mb-4">
                  Novo Cliente
              </Btn>
            </div>
            <Tabela
              clientes={clientes}
              clientSelect={clientSelect}
              clientDelete={clientDelete}
            />
          </>
          ) : (
            <Form 
              cliente={client}
              cancel={() => setVisible('table')}
              alterClient={() => newClient}
              />
          )}
        </Layout>
    </div>
  )
}