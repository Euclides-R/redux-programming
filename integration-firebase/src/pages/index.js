import Layout from '../components/Layout'
import Tabela from '../components/Table'
import Cliente from '../core/Clinte'

export default function Home() {

  const clientes = [
    new Cliente('Verônica', 23, '1'),
    new Cliente('Euclides', 21, '2'),
    new Cliente('Maria', 25, '3'),
    new Cliente('João', 29, '4'),
  ]

  function clientSelect(cliente) {
    console.log(cliente.nome); 
  }

  function clientDelete(cliente) {
    console.log(cliente.nome);    
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-br from-blue-500 to-purple-600
      text-white
      `}>
        <Layout titulo="Cadastro Simples">
          <Tabela clientes={clientes} clientSelect={clientSelect} clientDelete={clientDelete}></Tabela>
        </Layout>
    </div>
  )
}