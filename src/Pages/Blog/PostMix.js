import React from 'react'
import Footer from '../../Components/Footer.js'
import LayoutServibev from '../../Components/LayoutServibev'
import { BlogHeader } from '../../Components/BlogHeader.js'

const PostMix = () => {
    return (
        <div style={{backgroundColor:'#f1f2f5'}}>
            <LayoutServibev>
            <BlogHeader/>
            <div style={{display:'flex',flexDirection:'column', alignItems:'center',width:'100%' }}>
                <article style={{display:'flex',flexDirection:'row', alignItems:'center', width:'70%', height:'80vh', marginTop:'40px', backgroundColor:'white', borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.09)'}}>
                    <img src='../../postmix.png' style={{width:'450px', position:'relative', bottom:'0px', right:'30px', borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)',}}/>
                    <div style={{width:'40%', marginLeft:'40px'}}>
                        <h1> Cómo distinguir calidad</h1>           
                        <p>Dolor sit quis laboris consequat exercitation minim reprehenderit proident amet. Deserunt non consectetur et amet duis dolore ut sint dolor sit enim. Fugiat est id ex officia nostrud velit labore minim culpa mollit voluptate.</p>
                        <p>Dolor sit quis laboris consequat exercitation minim reprehenderit proident amet. Deserunt non consectetur et amet duis dolore ut sint dolor sit enim. Fugiat est id ex officia nostrud velit labore minim culpa mollit voluptate.</p>
                        <p>Dolor sit quis laboris consequat exercitation minim reprehenderit proident amet. Deserunt non consectetur et amet duis dolore ut sint dolor sit enim. Fugiat est id ex officia nostrud velit labore minim culpa mollit voluptate.</p>
                        <p>Dolor sit quis laboris consequat exercitation minim reprehenderit proident amet. Deserunt non consectetur et amet duis dolore ut sint dolor sit enim. Fugiat est id ex officia nostrud velit labore minim culpa mollit voluptate.</p>

                    </div>
                </article>
            </div>
            </LayoutServibev>
            <Footer/>
        </div>
    )
}
export default PostMix