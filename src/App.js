import TableData from './components/table.cnae';
import Container from '@mui/material/Container';
import Headerbar from './components/header.bar';

export default function App() {
  return (
    <>
      <Container maxWidth='false'>
        <Headerbar />
        <TableData />
      </Container>
    </>
  );
}
