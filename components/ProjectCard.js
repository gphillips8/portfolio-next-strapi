import Link from 'next/link'
import Image from 'next/image'
import { motion} from "framer-motion";
import React from "react";

export default function ProjectCard({ project, strapiURL }) {

    const { Title, Slug, Thumbnail, Skills } = project;

    return (
        <motion.div
            key={project.id}
            className="card"
            initial="pageInitial"
            animate="pageAnimate"
            exit="exit"
            variants={{
                pageInitial: {
                    opacity: 0,
                    x: '100vw'
                },
                pageAnimate: {
                    opacity: 1,
                    x: 0
                },
                exit: {
                    x: '-100vw',
                    transition: { ease: 'easeInOut'}
                }}
            }
            transition={{delay: 0.3, type:'spring', stiffness: 223}}
        >
            <Link href={'/projects/' + Slug}>
                <div className="content">
                    <div className="content-overlay"></div>
                    <img
                        src={strapiURL + Thumbnail.formats.small.url}
                        alt={Thumbnail.name}
                        width={Thumbnail.formats.small.width}
                        height={Thumbnail.formats.small.height}
                    />

                    <div className="content-details details-top fadeIn-top">
                        <h3 className="content-title">{Title}</h3>
                    </div>
                    <div className="content-details details-bottom fadeIn-bottom">
                        {/*{skills.map(ing => (*/}
                        {/*    <span className="skills-item" key={ing}>{ing}</span>*/}
                        {/*))}*/}
                        {Skills}
                    </div>

                </div>
            </Link>
            <style jsx>{`
    
           .content {
             position: relative;
             width: 100%;
             max-width: 400px;
             margin: auto;
             overflow: hidden;
           }
    
           .content .content-overlay {
             background: rgba(51,51,51,0.8);
             position: absolute;
             height: 99%;
             width: 100%;
             left: 0;
             top: 0;
             bottom: 0;
             right: 0;
             opacity: 0;
             transition: all 0.4s ease-in-out 0s;
             z-index: 1;
           }
    
           .content:hover .content-overlay{
             opacity: 1;
           }
    
           .content-image{
             width: 100%;
           }
    
           .content-details {
             position: absolute;
             text-align: center;
             width: 100%;
             left: 50%;
             opacity: 0;
             transform: translate(-50%, -50%);
             transition: all 0.3s ease-in-out 0s;
              z-index: 1;
           }
    
           .content-details span::after {
             content: ", ";
           }
    
           .content-details span:last-child::after {
             content: ".";
           }
    
           .details-top {
             top: 50%;
           }
    
           .details-bottom {
             top: 10%;
           }
    
           .content:hover .content-details,
           .content:hover .content-title{
             left: 50%;
             opacity: 1;
             transition: all 0.3s ease-in-out 2ms;
           }
    
           .content:hover .fadeIn-top {
             top: 33%;
             transition: all 0.3s ease-in-out 0s;
           }
    
           .content:hover .fadeIn-bottom {
             padding: 0 3px;
             top: 66%;
             transition: all 0.3s ease-in-out 0s;
           }
    
           .content-details h3 {
             color: #fff;
             font-weight: 500;
             letter-spacing: 0.15em;
             margin-bottom: 0.5em;
             text-transform: uppercase;
             transition: all 0.3s ease-in-out 0s;
           }
    
           .content-details p {
             color: #fff;
             font-size: 0.8em;
             transition: all 0.3s ease-in-out 0s;
           }
    
    
         `}</style>
        </motion.div>
    )
    // return (
    //   <motion.div
    //       key={project.id}
    //       className="card"
    //       initial="pageInitial"
    //       animate="pageAnimate"
    //       exit="exit"
    //       variants={{
    //           pageInitial: {
    //               opacity: 0,
    //               x: '100vw'
    //           },
    //           pageAnimate: {
    //               opacity: 1,
    //               x: 0
    //           },
    //           exit: {
    //               x: '-100vw',
    //               transition: { ease: 'easeInOut'}
    //           }}
    //       }
    //       transition={{delay: 0.3, type:'spring', stiffness: 223}}
    //       >
    //       <Link href={'/projects/' + Slug}>
    //           <div className="content">
    //               <div className="content-overlay"></div>
    //               {/*<Image*/}
    //               {/*    src={'https:' + Thumbnail.url}*/}
    //               {/*    width={Thumbnail.width}*/}
    //               {/*    height={Thumbnail.height}*/}
    //               {/*/>*/}
    //
    //               <div className="content-details details-top fadeIn-top">
    //                   <h3 className="content-title">{Title}</h3>
    //               </div>
    //               <div className="content-details details-bottom fadeIn-bottom">
    //                       {/*{skills.map(ing => (*/}
    //                       {/*    <span className="skills-item" key={ing}>{ing}</span>*/}
    //                       {/*))}*/}
    //                   {Skills}
    //               </div>
    //
    //           </div>
    //       </Link>
    //
    //     <style jsx>{`
    //
    //       .content {
    //         position: relative;
    //         width: 100%;
    //         max-width: 400px;
    //         margin: auto;
    //         overflow: hidden;
    //       }
    //
    //       .content .content-overlay {
    //         background: rgba(51,51,51,0.8);
    //         position: absolute;
    //         height: 99%;
    //         width: 100%;
    //         left: 0;
    //         top: 0;
    //         bottom: 0;
    //         right: 0;
    //         opacity: 0;
    //         transition: all 0.4s ease-in-out 0s;
    //         z-index: 1;
    //       }
    //
    //       .content:hover .content-overlay{
    //         opacity: 1;
    //       }
    //
    //       .content-image{
    //         width: 100%;
    //       }
    //
    //       .content-details {
    //         position: absolute;
    //         text-align: center;
    //         width: 100%;
    //         left: 50%;
    //         opacity: 0;
    //         transform: translate(-50%, -50%);
    //         transition: all 0.3s ease-in-out 0s;
    //          z-index: 1;
    //       }
    //
    //       .content-details span::after {
    //         content: ", ";
    //       }
    //
    //       .content-details span:last-child::after {
    //         content: ".";
    //       }
    //
    //       .details-top {
    //         top: 50%;
    //       }
    //
    //       .details-bottom {
    //         top: 10%;
    //       }
    //
    //       .content:hover .content-details,
    //       .content:hover .content-title{
    //         left: 50%;
    //         opacity: 1;
    //         transition: all 0.3s ease-in-out 2ms;
    //       }
    //
    //       .content:hover .fadeIn-top {
    //         top: 33%;
    //         transition: all 0.3s ease-in-out 0s;
    //       }
    //
    //       .content:hover .fadeIn-bottom {
    //         top: 66%;
    //         transition: all 0.3s ease-in-out 0s;
    //       }
    //
    //       .content-details h3 {
    //         color: #fff;
    //         font-weight: 500;
    //         letter-spacing: 0.15em;
    //         margin-bottom: 0.5em;
    //         text-transform: uppercase;
    //         transition: all 0.3s ease-in-out 0s;
    //       }
    //
    //       .content-details p {
    //         color: #fff;
    //         font-size: 0.8em;
    //         transition: all 0.3s ease-in-out 0s;
    //       }
    //
    //
    //     `}</style>
    //   </motion.div>
    // )
}
