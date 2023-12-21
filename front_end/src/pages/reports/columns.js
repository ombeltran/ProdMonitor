export const columns = [
    {
        name: "Type",
        selector: row => row.type,
        sortable: true,
        maxWidth: "60px"
    },
    {
        name: "Model",
        selector: row => row.model,
        sortable: true,
        width: "130px"
    },
    {
        name: "Serial_number",
        selector: row => row.serial_number,
        sortable: true,
        width: "150px"
    },
    {
        name: "Category",
        selector: row => row.category,
        sortable: true,
        width: "120px"
    },
    {
        name: "Comment",
        selector: row => row.comment,
        width: "180px",
        cell: (row) => (
            <div>
                {row.comment.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
            </div>
        ),
    },
    {
        name: "Date",
        selector: row => row.date,
        sortable: true
    },
];