import { useState } from 'react'
import { fetchEmployees } from './api/fetchEmployees';
import { SearchFilter } from './components/SearchFilter';
import { Employee } from './model/Employee';

const API_URL = 'https://dummy.restapiexample.com/api/v1/employees'
const dummyData = await fetchEmployees<Employee[]>(API_URL);

export function App() {
  const [filterList, setFilterList] = useState(dummyData);

  const handleQuerySearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setFilterList(dummyData);
      return;
    }

    const filteredValues = dummyData.filter(
      (item) =>
        item.employee_name
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
    );
    setFilterList(filteredValues);
  }

  return (
    <div className='flex flex-1 flex-col gap-1 items-center'>
      <SearchFilter
        handleChange={handleQuerySearch}
        name='employees'
        placeholder='type a name...'
      />

      {
        filterList && filterList.map(
          (item, index) => (
            <button key={index}
              className='p-1 m-1 border-2 border-zinc-700 min-w-[220px]
              rounded-sm hover:bg-zinc-900 focus:outline-none focus:ring-rose-300 
              focus:ring-offset-1 focus:ring-offset-rose-300 focus:ring-2 transition-colors'
            >
              {item.employee_name}
            </button>
          )
        )
      }
    </div>
  )
}
