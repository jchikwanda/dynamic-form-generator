import { TablePagination } from '@mui/material';
import React, { useState } from 'react'
import { 
    tableStyles, 
    theadStyles, 
    thStyles, 
    setTrStyles,
    tdStyles
} from './styles'

const Grid = ({rows = [], columns = []}) => {

    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    return (
        <div className='relative'>
            <table className={tableStyles}>
                <thead className={theadStyles}>
                    <tr>
                        {
                            columns.map((column) => (
                                <th className={thStyles} key={`${column.title}`}>
                                    {column.title}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        (
                            rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map((row, index) => (
                            <tr key={`${row.id}`} className={setTrStyles(index)}>
                                {
                                    Object.keys(row).map((key, index2) => (
                                        <td key={`${index}_${index2}`} className={tdStyles}>
                                            {row[key]}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={columns.length}>
                            <TablePagination
                                component="div"
                                count={rows.length}
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            />
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Grid