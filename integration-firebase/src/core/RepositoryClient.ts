import Cliente from "./Cliente";

export default interface RepositoryClient {
    save(cliente: Cliente): Promise<Cliente>
    clear(cliente: Cliente): Promise<void>
    allClient(): Promise<Cliente[]>
}