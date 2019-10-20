import React, { useEffect } from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableRow,
    TableCell,
    TablePagination,
    TableHead,
    createStyles,
    makeStyles,
    Typography,
} from '@material-ui/core';

import { getAddresses, AddressResult } from '../shared';

const useStyles = makeStyles(
    (theme) => createStyles({
        paper: {
            width: '100%',
            marginBottom: theme.spacing(2),
            padding: 16,
        },
        tableWrapper: {
            overflowX: 'auto',
        },
        table: {
            minWidth: 750,
        },
    }),
);

export const Addresses: React.FC = () => {
    const classes = useStyles();

    const init: AddressResult[] = [];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = React.useState({
        value: init,
    });

    useEffect(() => {
        getAddresses(page * rowsPerPage, rowsPerPage).then((result) => {
            // tslint:disable-next-line:no-console
            console.log({result});
            if (Array.isArray(result)) {
                setRows({
                    value: result,
                });
            }
        }).catch();
    });

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <Paper className={classes.paper}>
                <Typography variant='h4'>
                    Address Database
                </Typography>
                <div className={classes.tableWrapper}>
                    <Table
                        className={classes.table}
                        size='medium'
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Address
                                </TableCell>
                                <TableCell align='right'>
                                    Count
                                </TableCell>
                                <TableCell align='right'>
                                    Total Score
                                </TableCell>
                                <TableCell align='right'>
                                    Average Score
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                rows.value.map((row, index) => {
                                    return (
                                        <TableRow
                                            hover
                                            tabIndex={-1}
                                            key={index}
                                        >
                                            <TableCell component='th' scope='row' padding='none'>
                                                {row.address}
                                            </TableCell>
                                            <TableCell align='right'>
                                                {row.count}
                                            </TableCell>
                                            <TableCell align='right'>
                                                {row.totalScore}
                                            </TableCell>
                                            <TableCell align='right'>
                                                {row.count > 0 ? row.totalScore / row.count : 0}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })
                            }
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component='div'
                    count={rows.value.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'previous page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'next page',
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
};
