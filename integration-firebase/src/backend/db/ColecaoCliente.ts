import Cliente from '../../core/Cliente';
import RepositoryClient from '../../core/RepositoryClient';

export default class ColecaoCliente implements RepositoryClient {

    #conversor = {
        toFirestore(cliente: Cliente){
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    async save(cliente: Cliente): Promise<Cliente> {
        if (cliente?.id) {
            await this.colecao().doc(cliente.id).set(cliente);
            return cliente;
        } else {
            const docRef = await this.colecao().add(cliente);
            const doc = await docRef.get();
            return doc.data();
        }
    }
    
    async clear(cliente: Cliente): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }
    
    async allClient(): Promise<Cliente[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return firebase
            .firestore()
            .collection('clientes')
            .withConverter(this.#conversor)
    }
    
}