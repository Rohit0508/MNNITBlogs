import { useEffect, useState } from "react";
import Blogview from "./Blogview";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        getAllBlogs();
    }, [])

    const getAllBlogs = async () => {
        let data = await fetch('http://localhost:4500/api/v1/auth/getpost');
        let result = await data.json();
        if (result && result.post && Array.isArray(result.post)) {
            console.log("array");
            setBlogs(result.post);
            console.log(getDateTime(result.post[0].createdAt));
        }
    }

    const getDateTime = (isoTimestamp) => {
        const date = new Date(isoTimestamp);
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        // Formatting options
        // const options = {  year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US'); // Adjust based on your needs
        const formattedTime = date.toLocaleTimeString();
        let ind = Number(formattedDate[0]) - 1;
        let val = month[ind] + ' ' + formattedDate.substring(formattedDate.length - 2)
        return val;
    }

    return (
        <>
            <NavBar />
            {
                blogs.length > 0 ? blogs.map((item) =>
                    <div key={item._id}>
                        <Blogview title={item.title} posttime={getDateTime(item.createdAt)} content={item.content}
                            image={item.banner}
                        />

                    </div>

                ) : <h1>nothing found</h1>
            }
            <Footer />
        </>
    )
}

export default Blogs;

