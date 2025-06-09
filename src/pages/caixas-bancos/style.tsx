import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
  gap: 10px;
`;

export const Breadcrumb = styled.span`
  font-weight: bold;
`;

export const Selector = styled.select`
  padding: 5px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
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
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 8px;
    text-align: left;
  }
`;

export const SidePanel = styled.aside`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ButtonGreen = styled.button`
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
`;

export const Summary = styled.div`
  background-color: #f4f4f9;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SideLink = styled.a`
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #e8e8ec;
  }
`;

export const SlidePanel = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(${(p) => (p.open ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 10;
`;

export const PanelForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

export const FieldRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const TextInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  flex: 1;
`;

export const SelectInput = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  flex: 1;
`;

export const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
`;

export const PanelActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
