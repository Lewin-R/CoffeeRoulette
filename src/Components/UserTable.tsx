import * as React from 'react';
import {getUsers} from "./CRUD";
import "react-table";
import {ColumnDef} from "@tanstack/react-table";

// Define your row shape
type User = {
    ID: number
    Benutzername: string
    EMail: string
    Name: string
    Telefon: number
}

// Define your row shape
type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
    status: string
    progress: number
}

// Make some columns!
const defaultColumns: ColumnDef<Person>[] = [
    // Display Column
    {
        id: 'actions',
        /*cell: props => <RowActions row={props.row} />,*/
    },
    // Grouping Column
    {
        header: 'Name',
        footer: props => props.column.id,
        columns: [
            // Data Column
            {
                accessorKey: 'firstName',
                cell: info => info.getValue(),
                footer: props => props.column.id,
            },
            // Data Column
            {
                accessorFn: row => row.lastName,
                id: 'lastName',
                cell: info => info.getValue(),
                header: () => <span>Last Name</span>,
                footer: props => props.column.id,
            },
        ],
    },
    // Grouping Column
    {
        header: 'Info',
        footer: props => props.column.id,
        columns: [
            // Data Column
            {
                accessorKey: 'age',
                header: () => 'Age',
                footer: props => props.column.id,
            },
            // Grouping Column
            {
                header: 'More Info',
                columns: [
                    // Data Column
                    {
                        accessorKey: 'visits',
                        header: () => <span>Visits</span>,
                        footer: props => props.column.id,
                    },
                    // Data Column
                    {
                        accessorKey: 'status',
                        header: 'Status',
                        footer: props => props.column.id,
                    },
                    // Data Column
                    {
                        accessorKey: 'progress',
                        header: 'Profile Progress',
                        footer: props => props.column.id,
                    },
                ],
            },
        ],
    },
]

const UserTable = () =>{
    return(
        <table className="table">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Benutzername</th>
                <th scope="col">E-Mail</th>
                <th scope="col">Name</th>
                <th scope="col">Telefon</th>
            </tr>
            </thead>
            <tbody>
            {getUsers()}
            </tbody>
        </table>
    )
}

export default UserTable;