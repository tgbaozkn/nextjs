import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getSortedPostsData() {
    const res = await fetch('https://opentdb.com/api.php?amount=20&difficulty=easy');
    const allPostsData = res.json();
    
    return allPostsData;
}