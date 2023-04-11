import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()
 
 
  return {
   
    props: {
      allPostsData
    },
   
  }
}

export default function Home({allPostsData : {results}}) {
  return (
    <Layout home>
      <Head>
        <title  >{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Questions</h2>
       
          {results?.map(({ category,incorrect_answers,question,correct_answer }) => (
             <ul className={utilStyles.list}>
            <li className={utilStyles.listItem} key={Date.now()+correct_answer}>
              {question.replace('&quot;','').replace('&quot;','').replace('&#039;','')}
                <ol>
                  
                    {incorrect_answers.map((i)=>(
                      <li>
                        {i}
                        </li>
                    ))}
                    <li className={utilStyles.correctAnswer}>
                      {correct_answer.replace('&','').replace(';r','') }
                    </li>
                  
                </ol>
         
              
           
            </li>
            </ul>
          ))}
      
      </section>
    </Layout>
  );
}
