import React, { useState } from 'react'

const Table = () => {
    const [formData, setFormData] = useState({
        name: '',
        job: '',
        age: '',
        city: '',
        salary: ''
      });
    
      const [formDataList, setFormDataList] = useState([]);
    
      
    
      const handleSubmit = () => {
        setFormDataList([...formDataList, formData]);
        setFormData({
          name: '',
          job: '',
          age: '',
          city: '',
          salary: ''
        });
      };
    
      return (
        <div className="max-w-md mx-auto mt-5">
          <h1 className="text-center text-2xl font-bold mb-5">Enter Details</h1>
          <form>
          
          </form>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
    
        
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-2">Form Data Table</h2>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Job</th>
                  <th className="px-4 py-2">Age</th>
                  <th className="px-4 py-2">City</th>
                  <th className="px-4 py-2">Salary</th>
                </tr>
              </thead>
              <tbody>
                {formDataList.map((data, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{data.name}</td>
                    <td className="border px-4 py-2">{data.job}</td>
                    <td className="border px-4 py-2">{data.age}</td>
                    <td className="border px-4 py-2">{data.city}</td>
                    <td className="border px-4 py-2">{data.salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  )
}

export default Table