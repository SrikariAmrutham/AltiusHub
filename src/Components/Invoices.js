import React from 'react';
import { TablePagination } from 'react-pagination-table';
 
const Invoices = () =>{
    const data = [{id : 1, date : 2020-2-12, shippingaddress : "abc", name : "john" , invoicenumber: 23, items :[]},
{id : 2, date : 2020-2-12, shippingaddress : "abc", name : "adam" , invoicenumber: 23, items :[]},
{id : 3, date : 2020-2-12, shippingaddress : "abc", name : "joey" , invoicenumber: 23, items :[]}

];

    const Header = ["Id", "Date", "ShippindAddress",  "BillingAddress", "CustomerName", "InvoiceNumber", "Items"];

    return (
    <div>
        <TablePagination
            title="Invoices"
            headers={ Header }
            data={ data }
            columns="name.age.size.phone.gender"
            perPageItemCount={ 5 }
            totalCount={ data.length }
            arrayOption={ [["size", 'all', ' ']] }
        />
    </div>
    );
}
export default Invoices;