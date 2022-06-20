//STEP 3: WE NEED TO CREATE A TABLE INSTANCE
//this is where we are going to make use of the react table library
//to create a new table component we need to import 3 things

import React from 'react';
import {useTable} from "react-table";
import MOCK_DATA from "./MOCK_DATA (1).json";
import {COLUMNS} from "./columns";

export const BasicTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    useTable({
        columns: COLUMNS,
        data: MOCK_DATA
    })

    return (
        <div>
            
        </div>
    );
}

export default BasicTable;
