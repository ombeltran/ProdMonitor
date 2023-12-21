import React, { useEffect, useState } from "react";
import { Card, Table } from "../../components";
import { useReport } from "../../context/ReportContext";
import { format, parseISO } from 'date-fns';
import { columns } from "./columns";
import './reports.css';

const Reports = () => {
    const { report, loadReports } = useReport();

    useEffect(() => {
        loadReports();
    }, []);

    const [filterText, setFilterText] = useState('');

    const filteredData = report.map(row => {
        return Object.entries(row).reduce((acc, [key, value]) => {
            if (key === "date" && typeof value === 'string') {
                acc[key] = format(parseISO(value), 'MM-dd-yyyy');
            } else {
                acc[key] = value;
            }
            return acc;
        }, {});
    }).filter(row => {
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
