import React, { useEffect } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import '../../styles/responsive-table.css'
export default function TableExample(props) {
    useEffect(() => {

    }, [])
    return (
        <Table>
            <Thead>
                <Tr>
                    {props.head.map((h) => (
                        <Th>{h}</Th>
                    ))}
                </Tr>
            </Thead>
            <Tbody>
                {props.rows.map((row) => (
                    < Tr >
                        {row.map((column)=>(
                            <Td>{column}</Td>
                        ))}
                    </Tr>
                ))}
            </Tbody>
        </Table >
    )
}