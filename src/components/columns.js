//STEP 1: WAS MAKING OUR MOCK DATA
//STEP 2: DEFINING THE COLUMNS FOR OUR DATA TABLE
//export a const 

export const COLUMNS = [//this is an array of objects
    //each column is represented by an object in this array
    {
        Header: 'JUDGE',//we need a way to associate each column with the rows of data, for that we need to specify the accessor property for each column
        accessor: 'JUDGE'
    },

    {
        Header: 'DEPUTY_COUNTY_CLERK',
        accessor: 'DEPUTY_COUNTY_CLERK'

    },
    
    {
        Header: 'ROOM',
        accessor: 'ROOM'
    },

    {
        Header: 'PHONE',
        accessor: 'PHONE'
    },

    {
        Header: 'DEPARTMENT',
        accessor: 'DEPARTMENT'
    },
];