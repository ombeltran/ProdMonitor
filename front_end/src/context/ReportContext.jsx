import { createContext, useState, useContext } from "react";
import {
    getAllReportRequest,
    createReportRequest
} from "../api/report.api";


const ReportContext = createContext();

export const useReport = () => {
    const context = useContext(ReportContext)
    if (!context) {
        throw new Error('useReport have to be into ReportProvider provider')
    }
    return context
};

export const ReportProvider = ({ children }) => {

    const [report, setReport] = useState([]);
    const [errors, setErrors] = useState([]);

    const loadReports = async () => {
        const res = await getAllReportRequest()
        setReport(res.data);
    };

    const createReport = async (report) => {
        try {
            const res = await createReportRequest(report);
            setReport([...report, res.data]);
            return res.data;
        } catch (error) {
            if (error.response) {
                setErrors([error.response.data.message]);
            }
        }
    };

    return <ReportContext.Provider
        value={{
            report,
            loadReports,
            createReport,
            errors
        }}
    >
        {children}
    </ReportContext.Provider>

}
