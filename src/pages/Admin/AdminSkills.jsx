import React, { useState } from 'react'

const AdminSkills = () => {
          const [title, setTitle] = useState('');
      const [content, setContent] = useState('');
  return (
<>
            <input
              type="text"
              placeholder="Skill 1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="text"
              placeholder="Skill 2"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="text"
              placeholder="Skill 3"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </>
  )
}

export default AdminSkills
