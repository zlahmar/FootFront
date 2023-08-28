import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { COLOR } from '../../data/Constants';
import { PLAYERS, NATIONALITIES } from '../../data/Api';
import { Container, Stack, Button } from '@mui/material';
import {Link} from "react-router-dom";

const columns = [
    {
        field: 'id', headerName: 'ID', width: 70
    },
    {
        field: 'image',
        headerName: 'Image',
        width: 70,
        editable: false,
        renderCell: (value) => <img src={PLAYERS.IMG+'/'+value.id} />
    },
    {
        field: 'name', headerName: 'Nom', width: 300
    },
    {
        field: 'position', headerName: 'Position', width: 200
    },
    {
        field: 'nationality', 
        headerName: 'Nationalité', 
        width: 200, 
        valueFormatter: ({ value }) => value.name_original
    },
    {
        field: 'nationality_photo', 
        headerName: 'Nationalité_Img', 
        width: 65, 
        editable: false,
        renderCell: (value) => {
            const nationality = value.row.nationality.name_original;    
        return (<img src={NATIONALITIES.IMG+'/'+nationality} />);
        },
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 150,
        sortable: true,
        disableClickEventBubbling: true,
        
        renderCell: (params) => {
            return (
              <Stack direction="row">
                <Button href={`/joueurs/${params.row.id}`} variant="outlined" color="primary" size="small">Savoir Plus</Button>
              </Stack>
            );
        },
      }
]

export default function Joueurs() {

    const [pageState, setPageState] = useState({
        isLoading: false,
        data: [],
        total: 0,
        page: 0,
        pageSize: 100
    });

    useEffect(() => {
        const fetchApiJoueurs = async () => {
            setPageState(old => ({ ...old, isLoading: true }))
            const response = await fetch(PLAYERS.DATA+'?page='+pageState.page+'&size='+pageState.pageSize);
            const json = await response.json()
            setPageState(old => ({ ...old, isLoading: false, data: json.content, total: json.totalElements }))
        }
        fetchApiJoueurs();
    }, [pageState.page, pageState.pageSize])
    
    return (
        <div className=" w-full flex flex-col h-full justify-center items-center">
            <Container style={{ marginTop: 50, marginBottom: 50, height:850 }}>
                <DataGrid
                        columns={columns}
                        rows={pageState.data}
                        rowCount={pageState.total}
                        loading={pageState.isLoading}
                        pagination
                        page={pageState.page}
                        pageSize={pageState.pageSize}
                        paginationMode="server"
                        pageSizeOptions={[pageState.pageSize]}
                        onPaginationModelChange={(newPageState) => {
                            setPageState(old => ({ ...old, page: newPageState.page }))
                        }}
                        sx={{
                            '& .MuiDataGrid-main, & .MuiDataGrid-columnHeader, & .MuiDataGrid-cell, & .MuiDataGrid-footerContainer, & .MuiTablePagination-root': {
                            backgroundColor: COLOR.EERIEBLACK,
                            color: COLOR.WHITE,
                            fontWeight: 700 
                            },
                            '& .MuiDataGrid-main, & .MuiDataGrid-columnHeader': {
                                backgroundColor: COLOR.TIFFANYBLUE,
                                color: COLOR.GREY,
                                fontWeight: 700 
                                },
                            }}
                />
            </Container>
        </div>
    )
}