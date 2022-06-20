//STEP 3: WE NEED TO CREATE A TABLE INSTANCE
//this is where we are going to make use of the react table library
//to create a new table component we need to import 3 things

import React, {useMemo} from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from "./MOCK_DATA (1).json";//the mock data that we created
import {COLUMNS} from "./columns";//the array of columns that we have just defined in columns
import "./table.css";

export const BasicTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);
    // console.log("hello");

    //CREATE A TABLE INSTANCE
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    }    = useTable({//useTable hook.. We pass in an object as argument 
        // columns: COLUMNS,//we specify two properties, columns and rows
        // data: MOCK_DATA

        columns,//shorthand 
        data
    })

    //STEP 5: we need to use the table instance with our jsx to render all necessary UI
    //we begin by destructuring a couple of properties and methods from the table instance
    //AT THE END HE DELETED THIS BELOW AND ADDED THE FUNCTIONS ABOVE.

    // const {//these are basically functions and arrays that the useTable hook from react table package has given to us to eanle easy table creation
    //     getTableProps,//this is a function that needs to be destructured on the table tag
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     prepareRow,
    // } = tableInstance

    return (
      //STEP 4: define a basick table structure just using html
        //with in both the thead and the tbody, we need a tr to specify a row
        //in the thead the data is wrapped with a th tag and in the body, the data is wrapped with td tag
    <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    ))}
                </tr>    
            ))}
            <tr>
                <th></th>
            </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                        })}
                    </tr>
                )
            })}
            <tr>
                <td></td>
            </tr>
        </tbody>
    </table>      
    );
}

// export default BasicTable;
