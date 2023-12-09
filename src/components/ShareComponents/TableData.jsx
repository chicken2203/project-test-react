import React from 'react';
import { connect } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const TableData = (props) => {
    const { data, columns, options } = props;
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {columns.map((value, index) => (
                            <TableCell
                                key={index}
                                align="center"
                                sx={{ ...options?.headerStyle, ...value?.headerStyle, width: value?.width }}
                            >
                                {value?.title}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                                ...options?.rowStyle(row, index),
                            }}
                        >
                            {columns.map((value, indexC) => (
                                <TableCell
                                    key={indexC}
                                    align={value?.align}
                                    sx={{ ...options?.cellStyle, ...value?.cellStyle, width: value?.width }}
                                >
                                    {value.render ? value.render(row, index) : row[value.field]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TableData);
