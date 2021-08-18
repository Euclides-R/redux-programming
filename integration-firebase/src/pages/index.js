import Layout from '../components/Layout'

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-br from-blue-500 to-purple-600
      text-white
      `}>
        <Layout titulo="Cadastro Simples">
          <span>Conteúdo</span>
        </Layout>
    </div>
  )
}