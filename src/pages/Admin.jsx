import React, { useState } from 'react';
import AdminAbout from './Admin/AdminAbout';
import AdminSkills from './Admin/AdminSkills';
import AdminProjects from './Admin/AdminProjects';
import AdminWorkExperience from './Admin/AdminWorkExperience';
import AdminBlog from './Admin/AdminBlog';

function Admin() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [pageType, setPageType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPage = { title, content, pageType };

    // Simulate POST request to add new page
    console.log('New page data:', newPage);

    // Clear form inputs after submission
    setTitle('');
    setContent('');
    setPageType('');
  };

  const handlePageTypeChange = (e) => {
    setPageType(e.target.value);
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add New Page</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Page Type Dropdown */}
        <div>
          <label className="block mb-1 font-semibold">Select Page Type</label>
          <select
            value={pageType}
            onChange={handlePageTypeChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select Page Type</option>
            <option value="About">About</option>
            <option value="Skills">Skills</option>
            <option value="Projects">Projects</option>
            <option value="Work-Experience">Work Experience</option>
            <option value="Blog">Blog</option>
            <option value="Contact">Contact</option>
          </select>
        </div>

        {pageType === 'About' && (
          <>
            <AdminAbout/>
          </>
        )}

        {pageType === 'Skills' && (
          <>
            <AdminSkills/>
          </>
        )}
        
        {pageType === 'Projects' && (
          <>
            <AdminProjects/>
          </>
        )}
        
        {pageType === 'Work-Experience' && (
          <>
            <AdminWorkExperience/>
          </>
        )}
        
        {pageType === 'Blog' && (
          <>
            <AdminBlog/>
          </>
        )}
        
        {pageType === 'Contact' && (
          <>
            <AdminWorkExperience/>
          </>
        )}

        {/* Add Page Button */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Add Page
        </button>
      </form>
    </div>
  );
}

export default Admin;
