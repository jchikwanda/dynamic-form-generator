import { Chip } from "@mui/material"

export const COLUMNS = [
    // {
    //     headerName: 'ID',
    //     field: 'id',
    // },
    {
        headerName: 'First Name',
        field: 'first_name',
        width: 150
    },
    {
        headerName: 'Last Name',
        field: 'last_name',
        width: 150
    },
    {
        headerName: 'Email',
        field: 'email',
        width: 150
    },
    {
        headerName: 'Town',
        field: 'town',
        width: 150
    },
    {
        headerName: 'Age',
        field: 'age',
        width: 150,
        Cell: ({ cell, row }) => {console.log('Cell', row)}
    },
]

export const COLUMNS2 = [
    // {
    //     header: 'ID',
    //     accessorKey: 'id',
    // },
    {
        header: 'First Name',
        accessorKey: 'first_name',
    },
    {
        header: 'Last Name',
        accessorKey: 'last_name',
    },
    {
        header: 'Email',
        accessorKey: 'email',
    },
    {
        header: 'Town',
        accessorKey: 'town',
    },
    {
        header: 'Age',
        accessorKey: 'age',
        Cell: ({ cell, row }) => (
            <Chip label={row.original.id} variant={'outlined'} />
        )
    },
]