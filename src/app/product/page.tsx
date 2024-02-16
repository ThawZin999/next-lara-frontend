'use client'
import { Button } from '@/components/ui/button'
import axios from '../../lib/axios'
import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

const ProductPage = () => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        axios.get('/api/product').then(res => {
            const data = res.data.data
            setProducts(data)
        })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <div className="container flex justify-center mx-auto mt-3">
                <div className="flex flex-col">
                    <Table>
                        <TableCaption>Product Table</TableCaption>
                        <TableHeader>
                            <TableRow className="bg-blue-200">
                                <TableHead>Name</TableHead>
                                <TableHead>Buy Price</TableHead>
                                <TableHead>Sell Price</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map(p => (
                                <TableRow key={p.id}>
                                    <TableCell>{p?.name}</TableCell>
                                    <TableCell>{p?.buyPrice}</TableCell>
                                    <TableCell>{p?.sellPrice}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className="container flex justify-center mx-auto mt-3">
                <div className="flex flex-col">
                    <div className="w-full">
                        <div className="border-b border-gray-200 shadow">
                            <table className="divide-y divide-gray-300 ">
                                <thead className="bg-slate-200">
                                    <tr>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Name
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Buy Price
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Sell Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-300">
                                    {products.map(p => (
                                        <tr
                                            key={p?.id}
                                            className="whitespace-nowrap">
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-900">
                                                    {p?.name}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-500">
                                                    {p?.buyPrice}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-500">
                                                    {p?.sellPrice}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Button size="sm" variant="destructive">
                                Add
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage
