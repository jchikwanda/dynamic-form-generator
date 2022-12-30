import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React from 'react'

const Grid2 = ({rows=[], columns=[], height=650}) => {

    const [pageSize, setPageSize] = React.useState(10);

    return (
        <Box sx={{ height, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            pagination
            components={{ Toolbar: GridToolbar }}
            rowsPerPageOptions={[5, 10, 20]}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            checkboxSelection
            onSelectionModelChange={(selection) => console.log(selection)}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
        />
        </Box>
    )
}

export default Grid2