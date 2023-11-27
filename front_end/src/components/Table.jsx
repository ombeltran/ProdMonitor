import DataTable from "react-data-table-component";

export const Table = ( props ) => {
    
    const tableCustomStyles = {
        headCells: {
            style: {
                fontSize: '15px',
                fontWeight: 'bold',
                backgroundColor: 'cornflowerblue',
            },
        },
    }

    return (
        <div className="reportPadre">
            <div className="reports">
                <DataTable
                    {...props}
                    selectableRows
                    fixedHeader
                    pagination
                    dense
                    customStyles={tableCustomStyles}
                />
            </div>
        </div>
    );
}

