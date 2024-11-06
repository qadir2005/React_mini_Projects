import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';
const NewStudent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <div className=' mt-3 mb-3 flex w-[90%] m-auto justify-end'>
      <Button type="primary" onClick={showModal}>
        Add New Student
      </Button>
      <Modal title="Student Detail" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
         <Input className='mb-3' placeholder='Name'/>
         <Input className='mb-3' placeholder='Age'/>
         <Input className='mb-3' placeholder='Roll Number'/>
         <Input className='mb-3' placeholder='Address'/>
      </Modal>
    </div>
    </>
  );
};
export default NewStudent;