import { format } from "date-fns"

    export const left = [
        {
          Header: "S.No.",
          Cell: ({ row }) => (
              <div style={{ textAlign: "center" , width:"50px" }}>{row.index + 1}</div>
          ),
        },
        {
        Header: "Vou. No.", accessor: "VouNo",
          Cell: ({ row }) => (
              <div style={{ textAlign: "center" , width:"80px" }}>{row.original.VouNo}</div>
          ),
         },
        {
          Header: "Date", accessor: "RoDate",
          Cell: ({ row }) => (
              <div style={{ textAlign: "center", width: "100px" }}>
                {format(new Date(row.original.RoDate), "dd/MM/yyyy")}
              </div>
            ),
         },
        { Header: "Inv. No.", accessor: "InvNo",
          Cell: ({ row }) => (
              <div style={{ textAlign: "left" , width:"130px" }}>{row.original.InvNo}</div>
            ),
         },
        { Header: "Type of Repair", accessor: "TOR",
          Cell: ({ row }) => (
              <div style={{ textAlign: "center" , width:"130px" }}>{row.original.TOR}</div>
            ),
         },
        { Header: "Model", accessor: "MName",
          Cell: ({ row }) => (
              <div style={{ textAlign: "center" , width:"120px" }}>{row.original.MName}</div>
            ),
         },
        { Header: "Reg.No.", accessor: "RegNo",
          Cell: ({ row }) => (
              <div style={{ textAlign: "center" , width:"100px" }}>{row.original.RegNo}</div>
            ),
         },
        { Header: "Customer Name", accessor: "Customer",
          Cell: ({ row }) => (
              <div style={{ textAlign: "left" , width:"220px" }}>{row.original.Customer}</div>
            ),
         },
]
    
    export const right = [
        { Header: "Total", accessor: "Total1",
          Cell: ({ row }) => (
              <div style={{ textAlign: "right" , width:"70px" }}>{row.original.Total1.toFixed(2)}</div>
            ),
         },
        { Header: "GST", accessor: "GSTAmt",
          Cell: ({ row }) => (
              <div style={{ textAlign: "right" , width:"70px" }}>{row.original.GSTAmt.toFixed(2)}</div>
            ),
         },
        { Header: "Grand Total", accessor: "Total2",
          Cell: ({ row }) => (
              <div style={{ textAlign: "right" , width:"100px" }}>{row.original.Total2.toFixed(2)}</div>
            ),
         },
        { Header: "Discount", accessor: "Discount",
          Cell: ({ row }) => (
              <div style={{ textAlign: "right" , width:"70px" }}>{row.original.Discount.toFixed(2)}</div>
            ),
         },
        { Header: "Net.Amt.", accessor: "NetAmt",
          Cell: ({ row }) => (
              <div style={{ textAlign: "right" , width:"70px" }}>{row.original.NetAmt.toFixed(2)}</div>
            ),
         },
        { Header: "Advance", accessor: "AdvAmt",
          Cell: ({ row }) => (
              <div style={{ textAlign: "right" , width:"70px" }}>{row.original.AdvAmt.toFixed(2)}</div>
            ),
         },
        { Header: "Cash Recd.", accessor: "CashRecd",
          Cell: ({ row }) => (
              <div style={{ textAlign: "right" , width:"90px" }}>{row.original.CashRecd.toFixed(2)}</div>
            ),
         },
        { Header: "Cust.Bal.", accessor: "BalAmt",
          Cell: ({ row }) => (
              <div style={{ textAlign: "right" , width:"70px" }}>{row.original.BalAmt.toFixed(2)}</div>
            ),
         },
        { Header: "Ins.Bal.", accessor: "InsAmt",
          Cell: ({ row }) => (
              <div style={{ textAlign: "right" , width:"70px" }}>{row.original.InsAmt.toFixed(2)}</div>
            ),
         },
]

    export const BookingStatusColumns = [
          {
            Header: "S No",
            Cell: ({ row }) => (
              <div style={{ textAlign: "center" , width:"50px" }}>{row.index + 1}</div>
            ),
          },
          {
            Header: "Salesman",
            accessor: "AName",
            Cell: ({ row }) => (
              <div style={{ textAlign: "center" , width:"100px" }}>{row.original.AName}</div>
            ),
           },
          { Header: "Booking No", accessor: "Booking_No" },
          {
              Header: "Booking Date",
              accessor: "Booking_Date",
              Cell: ({ row }) => (
              <div style={{ textAlign: "center", width: "120px" }}>
                {format(new Date(row.original.Booking_Date), "dd/MM/yyyy")}
              </div>
            ),
          },
          {
            Header: "Model",
            accessor: "Model",
            Cell: ({ row }) => (
              <div style={{ textAlign: "center" , width:"120px" }}>{row.original.Model}</div>
            ),
          },
          {
            Header: "Variant",
            accessor: "Variant",
            Cell: ({ row }) => (
              <div style={{ textAlign: "center" , width:"80px" }}>{row.original.Variant}</div>
            ),
          },
          {
            Header: "Color",
            accessor: "Color",
            Cell: ({ row }) => (
              <div style={{ textAlign: "center" , width:"130px" }}>{row.original.Color}</div>
            ),
          },
          {
            Header: "Customer Name",
            accessor: "CustomerName",
            Cell: ({ row }) => (
                    <div style={{ textAlign: "left" , width:"200px" }}>{row.original.CustomerName}</div>
            ),
          },
          {
            Header: "Mobile No",
            accessor: "MobileNo",
            Cell: ({ row }) => (
                    <div style={{ textAlign: "center" , width:"100px" }}>{row.original.MobileNo}</div>
              ),
          },
        {
          Header: "Credit",
          accessor: "Balance",
          Cell: ({ row }) => (
                        <div style={{ textAlign: "right" , width:"100px" }}>{row.original.Balance.toFixed(2)}</div>
              ),
        },
        {
          Header: "Engine No",
          accessor: "EngineNo",
          Cell: ({ row }) => (
                        <div style={{ textAlign: "center" , width:"100px" }}>{row.original.EngineNo}</div>
              ),
        },
          { Header: "Remark", accessor: "Remark" },
];