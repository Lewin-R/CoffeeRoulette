import * as React from 'react';

//Airtable api
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keywYCUyR9kqDZFEQ'}).base('appu6bIZxhUt7Bwng');

export function getUsers() {
    return (
        base('Users').select({
            // Selecting the first 3 records in Grid view:
            maxRecords: 3,
            view: "Grid view"
        }).eachPage(function page(records: any[], fetchNextPage: () => void) {
            // This function (`page`) will get called for each page of records.

            records.forEach(function (record) {
                console.log('Retrieved');
                return (
                    <tr>
                        <th scope="row">1</th>
                        <th>{record.get('UserID')}</th>
                        <th>{record.get('Benutzername')}</th>
                        <td>{record.get('E-Mail')}</td>
                        <td>{record.get('Name')}</td>
                        <td>@{record.get('Telefon')}</td>

                    </tr>
                );
            });

            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();

        }, function done(err: any) {
            if (err) {
                console.error(err);
                return;
            }
        })
);
}

