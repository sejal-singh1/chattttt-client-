import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Chat App",
  description = "this is that chat App called ChatterBox",
  icon = "https://files.oaiusercontent.com/file-MwRY6PpRWJDkHxbwsUu5Uudb?se=2024-10-27T06%3A26%3A10Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D564f4398-8e19-469f-8e94-96b698830d46.webp&sig=mvBzz/20EaawpAqJivcOIYPNi2yzM3iLX2%2BOUvVHiMw%3D", 
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;