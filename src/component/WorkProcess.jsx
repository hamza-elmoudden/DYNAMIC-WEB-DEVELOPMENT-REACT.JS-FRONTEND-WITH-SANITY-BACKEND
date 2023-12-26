import React, { useState ,useEffect,useRef, forwardRef} from 'react'
import { client } from '../Client';
import { Link } from 'react-router-dom';
import { boten } from './Nav';

function WorkProcess(props) {
    const [allPostsData, setAllPosts] = useState(null);
    const {btn} = props
    useEffect(() => {
        client
          .fetch(
            `*[_type == "post"]{
            title,
            slug,
            text,
            body[0]{
              "id":_key,
              children[0]{
                  text
              }
          },
            mainImage{
              asset->{
              _id,
              url
            }
          }
        }[0...6]`
        )
        .then((data) => setAllPosts(data))
        .catch(console.error);
  
      }, []);
  return (
    <>
    <section className="bg-slate-100 py-10" id="work" ref={btn} >
      <div className="container mx-auto">
        <div className="space-y-4  md:space-y-0 gap-8 flex flex-wrap items-center justify-center flex-col md:flex-row">
        
          {allPostsData && allPostsData.map((data)=>{
            return(
              <>
              <div className="md:w-1/4 sm:w-full  border border-spacing-8 rounded-sm cursor-pointer space-y-5 hover:shadow-lg  bg-white hover:-translate-y-2" key={data.body.id}>
              <div className="">
              <img className="rounded-sm sm:w-full" src={data.mainImage.asset.url} alt="" />
              </div>
              <div className="p-3 flex flex-col space-y-4">
              <div className="space-y-2 capitalize">
                <h1 className="text-lg font-bold line-clamp-1">{data.title}</h1>
                <p className="text-orange-200">May 28, 2022 | Marketing, Social Media</p>
              </div>
              <div className="capitalize opacity-40">
                <p className="line-clamp-6">{data.text}</p>
              </div>
              <div className="text-lg capitalize">
                <Link className="text-sky-400" to={data.slug.current}>Read More</Link>
              </div>
              </div>
              </div>
              </>
            )
          })}
        </div>
      </div>
   </section>
    </>
  )
}

export default forwardRef(WorkProcess)