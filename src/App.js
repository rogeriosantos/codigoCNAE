import TableData from './components/table.cnae';
import Container from '@mui/material/Container';

export default function App() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setResults(search);
  // };

  return (
    <>
      <Container maxWidth='false'>
        <TableData />
      </Container>
    </>
  );
}
