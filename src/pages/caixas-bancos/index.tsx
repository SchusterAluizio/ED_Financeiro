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
  SlidePanel,
  PanelForm,
  FieldRow,
  TextInput,
  SelectInput,
  TextArea,
  PanelActions
} from "./style";

const CaixasEBancos: React.FC = () => {
  const [tab, setTab] = useState<string>("movimentacoes");
  const [showLaunch, setShowLaunch] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("entrada");
  const [competencia, setCompetencia] = useState("");
  const [account, setAccount] = useState("");
  const [historico, setHistorico] = useState("");

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
        <h3>Lançamento de caixa</h3>
        <PanelForm
          onSubmit={(e) => {
            e.preventDefault();
            console.log({ category, date, value, type, competencia, account, historico });
          }}
        >
          <SelectInput
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Selecione a categoria
            </option>
            <option value="venda">Venda</option>
            <option value="servico">Serviço</option>
            <option value="salario">Salário</option>
            <option value="impostos">Impostos</option>
            <option value="outros">Outros</option>
          </SelectInput>
          <FieldRow>
            <TextInput
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <TextInput
              type="number"
              placeholder="Valor (R$)"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <SelectInput value={type} onChange={(e) => setType(e.target.value)}>
              <option value="entrada">Entrada</option>
              <option value="saida">Saída</option>
            </SelectInput>
          </FieldRow>
          <FieldRow>
            <TextInput
              placeholder="Competência"
              value={competencia}
              onChange={(e) => setCompetencia(e.target.value)}
            />
            <SelectInput
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            >
              <option value="" disabled>
                Conta
              </option>
              <option value="1">Conta 1</option>
              <option value="2">Conta 2</option>
            </SelectInput>
          </FieldRow>
          <TextArea
            rows={3}
            placeholder="Histórico"
            value={historico}
            onChange={(e) => setHistorico(e.target.value)}
          />
          <PanelActions>
            <button type="button" onClick={() => setShowLaunch(false)}>
              Cancelar
            </button>
            <ButtonGreen type="submit">Salvar</ButtonGreen>
          </PanelActions>
        </PanelForm>
      </SlidePanel>
      <SlidePanel open={showTransfer}>
        <button onClick={() => setShowTransfer(false)}>Fechar</button>
        <h3>Transferência entre contas</h3>
      </SlidePanel>
    </Container>
  );
};

export default CaixasEBancos;
