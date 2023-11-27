import './reports.css';
import { Card } from "../../components";
import { useReport } from "../../context/ReportContext";
import { useEffect, useState } from "react";
import { columns } from "./columns";
import { Table } from "../../components";

const Reports = () => {
    const { report, loadReports } = useReport();

    useEffect(() => {
        loadReports();
    }, []);

    const [filterText, setFilterText] = useState('');

    const filteredData = report.filter(row => {
        return Object.values(row).some(value =>
            value.toString().toLowerCase().includes(filterText.toLowerCase())
        );
    });

    return (
        <div className="reportPadre">
            <Card>
                <div className="reports">
                    <div>
                        <h2>Report</h2>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={filterText}
                            onChange={(e) => setFilterText(e.target.value)}
                        />
                    </div>

                    <Table
                        columns={columns}
                        data={filteredData}
                        fixedHeaderScrollHeight="300px"
                    />
                </div>
            </Card>
        </div>
    );
}

export default Reports;
