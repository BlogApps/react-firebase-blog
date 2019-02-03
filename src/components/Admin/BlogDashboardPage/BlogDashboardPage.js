import React from 'react'
import NoteListContainer from './NoteList/NoteList.container'
import NoteListFiltersContainer from './NoteListFilters/NoteListFilters.container'

const BlogDashboardPage = () => (
  <div>
    <NoteListFiltersContainer />
    <NoteListContainer />
  </div>
)

export default BlogDashboardPage
