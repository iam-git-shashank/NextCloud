import { useList } from '@refinedev/core';
import React from 'react'

export default function AllPost() {
    
    const { data, isLoading, isError } = useList({ resource: "companies" });
    
  if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading companies.</p>;
    console.log(data)
  return (
    <div>AllPost</div>
  )
}
