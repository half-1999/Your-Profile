// For Chetak
export const BCategory = 1
export const BCode = 'B01'

export const User = JSON.parse(localStorage.getItem('userInfo'))
export const LogID = localStorage.getItem('LogID')
export const Token = sessionStorage.getItem('token')

export default function formatDate(inputDate) {
        const date = new Date(inputDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so we add 1
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}${month}${day}`;
}

export const transformDynamicColumns = (columns) => {
    return columns.map((col) => ({
      Header: col.SAbbr,
      accessor: col.Scode,
      Cell: ({ row }) => (
        <div style={{ textAlign: 'right', width: '70px' }}>
          {row.original[col.Scode] 
            ? parseFloat(row.original[col.Scode]).toFixed(2)
            : '0.00'}
        </div>
      ),
    }));
};

export const getYesterdayDate = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString().split('T')[0];
};

export const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
};