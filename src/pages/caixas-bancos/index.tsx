import React, { useState } from "react";
import {
  Container,
  Breadcrumb,
  Header,
  Selector,
  SearchInput,
  Tabs,
  Tab,
  TableWrapper,
  Actions,
  SidePanel,
  ButtonGreen,
  Summary,
  SideLink
} from "./style";

const CaixasEBancos: React.FC = () => {
  const [tab, setTab] = useState<string>("movimentacoes");

  return (
    <Container>
      <div style={{ flex: 1 }}>
        <Header>
          <Breadcrumb>... &gt; Caixas e Bancos</Breadcrumb>
          <Selector defaultValue="all">
            <option value="all">Todas contas ⏷</option>
            <option value="1">Conta 1</option>
            <option value="2">Conta 2</option>
          </Selector>
        </Header>
        <SearchInput placeholder="Pesquise por nome ou histórico" />
        <Tabs>
          <Tab
            onClick={() => setTab("movimentacoes")}
            data-active={tab === "movimentacoes"}
          >
            Movimentações
          </Tab>
          <Tab onClick={() => setTab("entradas")} data-active={tab === "entradas"}>
            Entradas
          </Tab>
          <Tab onClick={() => setTab("saidas")} data-active={tab === "saidas"}>
            Saídas
          </Tab>
        </Tabs>
        <Actions>
          <button>Imprimir saldos</button>
          <button>Exportar extrato</button>
        </Actions>
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Data</th>
                <th>Categoria</th>
                <th>Histórico</th>
                <th>Cliente/Fornecedor</th>
                <th>Conta</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>01/06/2025</td>
                <td></td>
                <td>Ref. ao pedido de venda nº 12345 | Método de pagamento: PIX</td>
                <td>Fulano LTDA</td>
                <td>02 - Mercado Livre (Ebazarr)</td>
                <td style={{ color: "green" }}>V 100,00</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>02/06/2025</td>
                <td></td>
                <td>Pagamento recebido via transferência</td>
                <td>Beltrano ME</td>
                <td>01 - Conta Corrente</td>
                <td style={{ color: "green" }}>V 80,00</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>03/06/2025</td>
                <td></td>
                <td>Pagamento de boleto</td>
                <td>Fornecedor X</td>
                <td>01 - Conta Corrente</td>
                <td style={{ color: "red" }}>R$ 50,00</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>04/06/2025</td>
                <td></td>
                <td>Compra de materiais</td>
                <td>Fornecedor Y</td>
                <td>02 - Mercado Livre (Ebazarr)</td>
                <td style={{ color: "red" }}>R$ 30,00</td>
              </tr>
            </tbody>
          </table>
        </TableWrapper>
      </div>
      <SidePanel>
        <ButtonGreen>Incluir lançamento</ButtonGreen>
        <SideLink>Transferência entre contas</SideLink>
        <Summary>
          <div>
            Quantidade de registros:
            <strong>4</strong>
          </div>
          <div>
            Saldo atual da conta:
            <strong>R$ 100,00</strong>
          </div>
          <div style={{ color: "green" }}>
            Entradas:
            <strong> R$ 180,00</strong>
          </div>
          <div style={{ color: "red" }}>
            Saídas:
            <strong> R$ 80,00</strong>
          </div>
          <div style={{ marginTop: "10px" }}>
            <strong>Saldos</strong>
          </div>
          <div>Conta 1 - R$ 70,00</div>
          <div>Conta 2 - R$ 30,00</div>
        </Summary>
      </SidePanel>
    </Container>
  );
};

export default CaixasEBancos;
