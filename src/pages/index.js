import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from 'gatsby';

import TopAndLoading from "../components/TopAndLoading/TopAndLoading";
import Feature from "../components/Feature/Feature";

import Service from "../components/Service/Service";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";
import QuadraticSolver from "../components/math/math";

const Index = () => {
    return (
        
      <QuadraticSolver />
            
           
        
    );
};

export default Index;

export const Head = () => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `)
    return (
      <>
       <title>{data.site.siteMetadata.title}</title>
       <meta name="description" content={data.site.siteMetadata.description} />
      </>
    );
  }
