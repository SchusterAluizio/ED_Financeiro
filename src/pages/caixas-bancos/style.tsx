import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Breadcrumb = styled.span`
  font-weight: bold;
`;

export const Selector = styled.select`
  padding: 5px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 4px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Tab = styled.button<{ 'data-active'?: boolean }>`
  padding: 5px 10px;
  background-color: ${(props) => (props['data-active'] ? '#3498db' : '#ecf0f1')};
  color: ${(props) => (props['data-active'] ? 'white' : 'black')};
  border: none;
  border-radius: 4px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
`;

export const SidePanel = styled.aside`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonGreen = styled.button`
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
`;

export const Summary = styled.div`
  background-color: #f4f4f9;
  padding: 10px;
  border-radius: 4px;
`;
