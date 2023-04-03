import React, {useState} from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true},
    { field: 'name', headerName: 'Contact Name', width: 90, flex: 1},
    { field: 'email', headerName: 'Email', width: 90, flex: 1},
    { field: 'phone_number', headerName: 'Phone Number', width: 90, flex: 1},
    { field: 'address', headerName: 'Address', width: 90, flex: 2}
]


function DataTable() {
    const [open, setOpen] = useState(false);
    const {contactData, getData} = useGetData();
    const [ selectionModel, setSelectionModel] = useState<string[]>([])
    //TODO: write useGetData hook and selection model state change content

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClosed = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData()
        console.log(`Selection Model: ${selectionModel}`)
        setTimeout( () => {window.location.reload() }, 5000)
    }
    //TODO: add delete f(x) to button

    return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose = {handleClosed}
        />
        <div className='flex flex-row'>
            <div>
                <button className='p-3 bg-purple-300 m-3 rounded hover:bg-slate-800 hover:text-white'
                onClick={() => handleOpen()}>
                    Create New Contact
                </button>
            </div>
            <Button onClick={handleOpen} className='p-3 bg-purple-300 m-3 rounded hover:bg-slate-800 hover:text-white'>
                Update
            </Button>
            <Button onClick={deleteData} className='p-3 bg-purple-300 m-3 rounded hover:bg-slate-800 hover:text-white'>
                Delete
            </Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{height: 400, width: '100%'}}>
                <h2 className='p-3 bg-slate-300 my-2 rounded'>My Contacts</h2>
                <DataGrid rows={contactData} columns={columns} rowsPerPageOptions={[5]}
                checkboxSelection = {true}
                onSelectionModelChange = { (item: any) => {
                    setSelectionModel(item)
            }} 
            />
        </div>
        </>
    )
}

export default DataTable