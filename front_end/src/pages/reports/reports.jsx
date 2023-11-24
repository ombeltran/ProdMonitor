import DataTable from "react-data-table-component";
import './reports.css';
import { Card } from "../../components";
import { useReport } from "../../context/ReportContext";
import { useEffect, useState } from "react";

const Reports = () => {
    const { report, loadReports } = useReport();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        loadReports();
    }, []);

    const columns = [
        {
            name: "Type",
            selector: row => row.type,
            sortable: true
        },
        {
            name: "Model",
            selector: row => row.model,
            sortable: true
        },
        {
            name: "Serial_number",
            selector: row => row.serial_number,
            sortable: true
        },
        {
            name: "Category",
            selector: row => row.category,
            sortable: true
        },
        {
            name: "Comment",
            selector: row => row.comment,
            sortable: true
        },
        {
            name: "Date",
            selector: row => row.date,
            sortable: true
        },
    ];

    const [filterText, setFilterText] = useState('');

    const filteredData = report.filter(row => {
        return Object.values(row).some(value =>
            value.toString().toLowerCase().includes(filterText.toLowerCase())
        );
    });

    const tableCustomStyles = {
        headCells: {
          style: {
            fontSize: '15px',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: 'black',
          },
        },
      }

    return (
        <div className="reportPadre">
            <Card>
                <div className="reports">
                    <div>
                        <h2>Reports</h2>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={filterText}
                            onChange={(e) => setFilterText(e.target.value)}
                        />
                    </div>

                    <DataTable
                        columns={columns}
                        data={filteredData}
                        selectableRows
                        fixedHeader
                        fixedHeaderScrollHeight="400px"
                        pagination
                        dense
                        customStyles={tableCustomStyles}
                    />
                </div>
            </Card>
        </div>
    );
}

export default Reports;
