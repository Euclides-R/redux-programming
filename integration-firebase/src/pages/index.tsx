import { useEffect, useState } from 'react';
import ColecaoCliente from '../backend/db/ColecaoCliente';
import Btn from '../components/Btn';
import Form from '../components/Formulation';
import Layout from '../components/Layout'
import Tabela from '../components/Table'
import Cliente from '../core/Cliente'
import RepositoryClient from '../core/RepositoryClient';

export default function Home() {
  
  const repo: RepositoryClient = new ColecaoCliente();

  const [client, setClient] = useState<Cliente>(Cliente.vazio());
  const [clients, setClients] = useState<Cliente[]>([])
  const [visible, setVisible] = useState<'table' | 'form'>('table');

  useEffect(allClients, [])

  function allClients() {
    repo.allClient().then(clients => {
      setClients(clients);
      setVisible('table');
    })
  }

  function clientSelect(cliente: Cliente) {
    setClient(cliente);
    setVisible('form');
  }

  function clientDelete(cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`)  
  }

  async function newClient() {
    await repo.save(client)
    allClients()
  }

  
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
                onClick={newClient}
                className="mb-4">
                  Novo Cliente
              </Btn>
            </div>
            <Tabela
              clientes={clients}
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