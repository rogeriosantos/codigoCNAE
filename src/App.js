import { useState, useEffect } from 'react';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function App() {
  // const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  //   console.log(search);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setResults(search);
  // };

  const getData = () => {
    return fetch('https://servicodados.ibge.gov.br/api/v2/cnae/classes/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'description', headerName: 'Descrição', width: 700 },
  ];

  const rows = results.map((item) => {
    return {
      id: item.id,
      description: item.descricao,
    };
  });

  return (
    <>
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </>
  );
}
