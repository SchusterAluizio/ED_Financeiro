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
  SideLink,
  SummaryItem,
  SlidePanel
} from "./style";

const CaixasEBancos: React.FC = () => {
  const [tab, setTab] = useState<string>("movimentacoes");
  const [showLaunch, setShowLaunch] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);

  const rows = [
    {
      id: 1,
      data: '01/06/2025',
      historico: 'Ref. ao pedido de venda nº 12345 | Método de pagamento: PIX',
      cliente: 'Fulano LTDA',
      conta: '02 - Mercado Livre (Ebazarr)',
      valor: 'V 100,00',
      type: 'entrada' as const,
    },
    {
      id: 2,
      data: '02/06/2025',
      historico: 'Pagamento recebido via transferência',
      cliente: 'Beltrano ME',
      conta: '01 - Conta Corrente',
      valor: 'V 80,00',
      type: 'entrada' as const,
    },
    {
      id: 3,
      data: '03/06/2025',
      historico: 'Pagamento de boleto',
      cliente: 'Fornecedor X',
      conta: '01 - Conta Corrente',
      valor: 'R$ 50,00',
      type: 'saida' as const,
    },
    {
      id: 4,
      data: '04/06/2025',
      historico: 'Compra de materiais',
      cliente: 'Fornecedor Y',
      conta: '02 - Mercado Livre (Ebazarr)',
      valor: 'R$ 30,00',
      type: 'saida' as const,
    },
  ];

  const filteredRows = rows.filter((r) => {
    if (tab === 'entradas') return r.type === 'entrada';
    if (tab === 'saidas') return r.type === 'saida';
    return true;
  });

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
        <Actions>
          <button>Imprimir saldos</button>
          <button>Exportar extrato</button>
        </Actions>
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
              {filteredRows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{row.data}</td>
                  <td></td>
                  <td>{row.historico}</td>
                  <td>{row.cliente}</td>
                  <td>{row.conta}</td>
                  <td style={{ color: row.type === 'entrada' ? 'green' : 'red' }}>
                    {row.valor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrapper>
      </div>
      <SidePanel>
        <ButtonGreen onClick={() => setShowLaunch(true)}>Incluir lançamento</ButtonGreen>
        <SideLink onClick={() => setShowTransfer(true)}>Transferência entre contas</SideLink>
        <Summary>
          <SummaryItem>
            Quantidade de registros:
            <strong>4</strong>
          </SummaryItem>
          <SummaryItem>
            Saldo atual da conta:
            <strong>R$ 100,00</strong>
          </SummaryItem>
          <SummaryItem style={{ color: "green" }}>
            Entradas:
            <strong>R$ 180,00</strong>
          </SummaryItem>
          <SummaryItem style={{ color: "red" }}>
            Saídas:
            <strong>R$ 80,00</strong>
          </SummaryItem>
          <div style={{ marginTop: "10px" }}>
            <strong>Saldos</strong>
          </div>
          <div>Conta 1 - R$ 70,00</div>
          <div>Conta 2 - R$ 30,00</div>
        </Summary>
      </SidePanel>
      <SlidePanel open={showLaunch}>
        <button onClick={() => setShowLaunch(false)}>Fechar</button>
        <h3>Novo lançamento</h3>
      </SlidePanel>
      <SlidePanel open={showTransfer}>
        <button onClick={() => setShowTransfer(false)}>Fechar</button>
        <h3>Transferência entre contas</h3>
      </SlidePanel>
    </Container>
  );
};

export default CaixasEBancos;
