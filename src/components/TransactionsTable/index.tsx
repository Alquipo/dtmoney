import { Container } from "./styles";

export function TransactionsTable(){
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>31/03/2021</td>
          </tr>

          <tr>
            <td>Alugue</td>
            <td className="withdraw">-R$1.100</td>
            <td>Casa</td>
            <td>30/03/2021</td>
          </tr>


        </tbody>
      </table>
    </Container>
  )
}
