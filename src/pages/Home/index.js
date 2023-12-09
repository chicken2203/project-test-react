import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Grid } from '@mui/material';

import Navigations from '~/components/ShareComponents/Navigations';
import ActionBar from '~/components/ShareComponents/ActionBar';

import { readData } from '~/redux/productsSlice';
import { useDispatch } from 'react-redux';
import TableData from '~/components/ShareComponents/TableData';
import withAuth from '~/components/api/withAuth';

function Home(props) {
    const { listProducts } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(readData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const columns = [
        {
            title: 'STT',
            field: 'custom',
            align: 'center',
            width: '150',
            headerStyle: {
                minWidth: '50px',
                paddingLeft: '10px',
                paddingRight: '10px',
            },
            cellStyle: {
                minWidth: '50px',
                paddingLeft: '10px',
                paddingRight: '10px',
            },
            render: (rowData, index) => index + 1,
        },
        {
            title: 'Ten San Pham',
            field: 'title',
            align: 'left',
            width: '150',
            headerStyle: {
                minWidth: '200px',
                paddingLeft: '10px',
                paddingRight: '10px',
            },
            cellStyle: {
                minWidth: '200px',
                paddingLeft: '10px',
                paddingRight: '10px',
            },
        },
        {
            title: 'Danh muc',
            field: 'category',
            align: 'center',
            width: '150',
            headerStyle: {
                minWidth: '150px',
                paddingLeft: '10px',
                paddingRight: '10px',
            },
            cellStyle: {
                minWidth: '150px',
                paddingLeft: '10px',
                paddingRight: '10px',
            },
            render: (rowData) => rowData?.category?.name,
        },
        {
            title: 'Gia tien',
            field: 'price',
            align: 'right',
            width: '150',
            headerStyle: {
                minWidth: '100px',
                paddingLeft: '10px',
                paddingRight: '10px',
            },
            cellStyle: {
                minWidth: '100px',
                paddingLeft: '10px',
                paddingRight: '10px',
            },
        },
        {
            title: 'Mo ta',
            field: 'description',
            align: 'left',
            width: '150',
            headerStyle: {
                minWidth: '300px',
                paddingLeft: '10px',
                paddingRight: '10px',
            },
            cellStyle: {
                minWidth: '300px',
                paddingLeft: '10px',
                paddingRight: '10px',
            },
        },
        {
            title: 'Hanh dong',
            field: 'action',
            align: 'center',
            width: '150',
            headerStyle: {
                minWidth: '100px',
                paddingLeft: '10px',
                paddingRight: '10px',
            },
            cellStyle: {
                minWidth: '100px',
                paddingLeft: '10px',
                paddingRight: '10px',
            },
            render: (rowData) => <Button>{'xoa'}</Button>,
        },
    ];
    return (
        <div className="home">
            <Navigations />
            <Grid>
                <ActionBar />
            </Grid>
            <Grid className="px-20">
                {/* <MaterialTable
                    title={'List'}
                    data={data}
                    columns={columns}
                    localization={{
                        body: {
                            emptyDataSourceMessage: `${'general.emptyDataMessageTable'}`,
                        },
                    }}
                /> */}
                <TableData
                    data={listProducts}
                    columns={columns}
                    options={{
                        rowStyle: (rowData, index) => ({
                            backgroundColor: index % 2 === 1 ? '#EEE' : '#FFF',
                        }),
                        headerStyle: {
                            backgroundColor: '#358600',
                            color: '#fff',
                            border: '1px solid #EEE',
                            fontWeight: 'bold',
                        },
                        cellStyle: {
                            border: '1px solid #EEE',
                        },
                    }}
                />
            </Grid>
        </div>
    );
}

const mapStateToProps = (state) => ({
    listProducts: state.products.listProducts,
    loading: state.products.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Home));
