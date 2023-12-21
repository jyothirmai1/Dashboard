import React, { Component } from 'react'
import BlogCard from './BlogCard'

export class BlogOverview extends Component {
  render() {
    return (
      <div className='blog-section__parent'>
        <div className='blog-title-sm'>DASHBOARD</div>
        <div className='blog-title-lg blog-margin-sm'>Blog Overview</div>
        <div className='blog-card__parent-container'>
          <BlogCard heading="POSTS" number="2,390" percentage="4.7%"/>
          <BlogCard heading="PAGES" number="182" percentage="12.4%"/>
          <BlogCard heading="COMMENTS" number="8,147" percentage="3.8%"/>
          <BlogCard heading="USERS" number="2,413" percentage="12.4%"/>
          <BlogCard heading="SUBSCRIBERS" number="17,281" percentage="2.4%"/>
        </div>
    </div>
    )
  }
}

export default BlogOverview