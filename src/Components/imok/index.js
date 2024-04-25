import React, { useState, useEffect } from 'react';
import './style.css'
export default function Imok() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        fetchRows();
    }, []); // Fetch rows on component mount

    const fetchRows = async () => {
        try {
            const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:QMm5lsNL/imok');
            const data = await response.json();
            setRows(data);
        } catch (error) {
            console.error('Error fetching rows:', error);
        }
    };

    const addRow = async () => {
        try {
            const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:QMm5lsNL/imok', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({}) // You can add data to be saved here if needed
            });
            const newRow = await response.json();
            setRows([...rows, newRow]); // Add the new row to the existing list
        } catch (error) {
            console.error('Error adding row:', error);
        }
    };

    return (
        <div>
            <h1>imok</h1>
            <button id="imok" onClick={addRow}>I'm OK</button>
    
            <h3>List</h3>
            <div>
            {rows.map(row => (
                <div className="row" id={`row-${row.id}`} key={row.id}>
                    <p>{row.id}</p>
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric'
                    }).format(new Date(row.created_at))}
                </div>
            ))}
            </div>
        </div>
    );
}
