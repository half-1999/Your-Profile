import  { useState } from 'react'

const AdminWorkExperience = () => {
          const [title, setTitle] = useState('');
      const [content, setContent] = useState('');
  return (
    <div>
       <input
              type="text"
              placeholder="Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
            <textarea
              placeholder="Description"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded-md"
              rows="4"
              required
            ></textarea>
    </div>
  )
}

export default AdminWorkExperience
