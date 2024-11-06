import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value),
    width: '30%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Roll No',
    dataIndex: 'roll',
  
  },
  {
    title: 'Address',
    dataIndex: 'address',
  
    width: '40%',
  },
  
];
const data = [
  {
    key: '1',
    name: 'Abdul Qadir',
    age: 22,
    roll: 1342,
    address: 'Shah Faisal Colony, Karachi',
  },
  {
    key: '1',
    name: 'Abdul Malik',
    age: 42,
    roll: 12432,
    address: 'Shah Faisal Colony, Karachi',
  },
  {
    key: '3',
    name: 'Abdul Ahad',
    age: 24,
    roll: 23453234,
    address: 'Shah Faisal Colony, Karachi',
  },
  
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const StudentTable = () => <Table columns={columns} dataSource={data} onChange={onChange} />;
export default StudentTable;