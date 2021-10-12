export default function Client(req, res) {
    res.status(200).json({
        id: 3,
        nome: 'Maria',
        idade: 33
    })
}