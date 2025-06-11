import React from 'react'

const BlogTableItem = ({blog,fetchBlogs, index}) => {
    const {title, createdAt} = blog;
    const BlogDate = new Date(createdAt)
    return (
    <div>
      <tr className='border-y border-gray-300'>
        <th className='px-2 py-4'>{ index }</th>
        <td className='px-2 py-4'>{ title }</td>
        <td className='px-2 py-4 max-sm:hidden'>{BlogDate.toDateString()}</td>
        <td className='px-2 py-4 max-sm:hidden'>
            <p>{blog.isPublished? 'Published':'Unpublished'}</p>
        </td>
      </tr>
    </div>
  )
}

export default BlogTableItem
