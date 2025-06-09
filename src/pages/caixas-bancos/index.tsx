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
  Summary
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
            </tbody>
          </table>
        </TableWrapper>
      </div>
      <SidePanel>
        <ButtonGreen>Incluir lançamento</ButtonGreen>
        <ButtonGreen>Transferência entre contas</ButtonGreen>
        <Summary>
          <p>Quantidade de registros: 1</p>
          <p>Saldo atual da conta: R$ 100,00</p>
          <p>Entradas: R$ 100,00</p>
          <p>Saídas: R$ 0,00</p>
        </Summary>
      </SidePanel>
    </Container>
  );
};

export default CaixasEBancos;
