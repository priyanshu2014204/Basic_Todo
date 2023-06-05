import React, { useEffect, useState } from 'react';
import { Table, Pagination, IconButton } from 'rsuite';
import { countTask } from '../api/Task.api';
// import { ChevronLeft, ChevronRight } from 'rsuite-icons';

const { Column, HeaderCell, Cell } = Table;

const Page = ({getData}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [data, setData] = useState(
    // Your data array
   JSON.parse(localStorage.getItem('key'))
  );
  const [count,SetCount]=useState(3)

  const handlePageChange = (page) => {
    setCurrentPage(page);
    getData(page)
  };

  useEffect(()=>{
    countTask(SetCount)
 
  })

  const handleSizeChange = (size) => {
    setCurrentPage(1);
    setPageSize(size);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(count / pageSize);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div
       style={{
        display:"grid",
        placeItems:"center"
       }}
    >
      <Table data={paginatedData}>
        {/* Define your table columns here */}
      </Table>
      <div className="pagination-container">
        {/* <IconButton
          icon={<ChevronLeft />}
          appearance="subtle"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        /> */}
        <Pagination
          prev
          next
          first
          last
          size="md"
          pages={Math.ceil(count/ pageSize)}
          activePage={currentPage}
          onSelect={handlePageChange} // Updated event name to onSelect
          onSizeChange={handleSizeChange}
          total={data.length}
        />
        {/* <IconButton
          icon={<ChevronRight />}
          appearance="subtle"
          disabled={currentPage === Math.ceil(data.length / pageSize)}
          onClick={handleNextPage}
        /> */}
      </div>
    </div>
  );
};

export default Page;
