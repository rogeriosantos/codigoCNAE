import { useState, useEffect } from 'react';

import useCnae from '../hooks/useCnae';
import { DataGrid } from '@mui/x-data-grid';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Tablecnae() {
  const results = useCnae();
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'description', headerName: 'Descrição', width: 700 },
  ];

  const rows = results.map((item) => {
    return {
      id: item.id,
      description: item.descricao,
      grupo: item.grupo.descricao,
    };
  });

  const filteredRows = rows.filter((row) => {
    return (
      row.description.toLowerCase().includes(search.toLowerCase()) ||
      row.id.toLowerCase().includes(search.toLowerCase()) ||
      row.grupo.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <div className='top'>
        <div className='left'>
          <TextField
            fullWidth
            id='outlined-basic'
            label='Search'
            variant='outlined'
            placeholder={search}
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div className='right'>
          <Button
            variant='contained'
            onClick={() => {
              setSearch('');
            }}
          >
            Reset
          </Button>
        </div>
      </div>
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={13}
          rowsPerPageOptions={[13]}
          onRowClick={(e) => console.log(e)}
        />
      </div>
    </>
  );
}
