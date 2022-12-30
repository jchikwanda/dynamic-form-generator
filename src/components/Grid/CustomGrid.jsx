import React, { useMemo, useState } from 'react'
import MaterialReactTable from 'material-react-table';
import { Button } from '@mui/material';

const CustomGrid = ({columns, rows}) => {

    columns = useMemo(() => columns, []);
    const [rowSelection, setRowSelection] = useState({})

    const handleSelection = (selection) => {
        setRowSelection(selection);
    }

    return (
        <div>
            <MaterialReactTable
                columns={columns}
                data={rows}
                enableRowSelection
                onRowSelectionChange={handleSelection}
                state={{rowSelection, isLoading: false}}
                getRowId={(row) => row.id}
                enableGrouping
                enableEditing
                renderTopToolbarCustomActions={() => (
                    <div>
                        <Button>
                            Add
                        </Button>
                        <Button>
                            Delete
                        </Button>
                    </div>
                )}
            />
        </div>
    )
}

export default CustomGrid