import FeaturedBlog from "./FeaturedBlog"
import RelatedBlog from "./RelatedBlog"

const BlogSidebar = () => {
    return (
        <div className='sidebar w-[30%]'>
          <RelatedBlog></RelatedBlog>  
          <hr className="my-5"></hr>
          <FeaturedBlog></FeaturedBlog> 
        </div>
    )
}

export default BlogSidebar