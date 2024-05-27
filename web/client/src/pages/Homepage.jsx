/* eslint-disable react-hooks/exhaustive-deps */
import {CollectionCard} from "../components/CollectionCard";
import { useEffect, useState } from "react";
import { serverApiJsonGet } from "../api/API";
import { ROUTE, goToNXCollection } from "../AppRoute";
import { useNavigate } from "react-router-dom";
import { scrollToZero } from "../utility/ScrollToZero";

const url_parser = (formattedJsonURLpath) => {
  if (formattedJsonURLpath.type === 'nx'){
    return goToNXCollection(formattedJsonURLpath.path, formattedJsonURLpath.x);
  }
}

function Homepage() {
  const [contents, setContent] = useState([]);
  const [contentLength, setContentLength] = useState([]);
  const [loadingContent, setLoadingContent] = useState(true);
  const navigate = useNavigate();

  const updateContentData = (data) => {
    setContent(data);
    setContentLength(data.length);
    setLoadingContent(false);
  }
  
  const title = (judul) => {
    return (
      <div className="flex justify-center items-center py-5">
        <h1 className="text-black uppercase text-lg md:text-2xl font-inter-light ">
        {judul}
        </h1>
      </div>
    )
  }

  useEffect(() => {
    const getContents = async () => {
      const response = await serverApiJsonGet('/web/homepage');
      if (response.status === 500) navigate(ROUTE.not_found);
      const responseJson = await response.json();
      updateContentData(responseJson.data);
    };
    scrollToZero();
    getContents();
  }, []);

  const renderContent = () => {
    const elements = [];
    for (let i = 0; i < contentLength; i++) {
      const contentItem = contents[i];
      // Push title element
      elements.push(title(contentItem.title));

      // Create a container div for CollectionCards
      const contentElements = [];
      for (const data of contentItem.data) {
        if (contentItem.type == 'collection'){
          contentElements.push(
            <CollectionCard
              title={data.title}
              link={url_parser(data.link)}
              imageUrl={data.imageUrl}
              font={data.font}
              fontSize={data.fontSize}
              height={data.height}
              scaleTransition={data.scaleTransition}
              opacityTransition={data.opacityTransition}
              uppercase={data.uppercase}
              titleWithImage= {data.titleWithImage}
              titleWithImageHeight={data.titleWithImageHeight}
              titleWithImageWidth={data.titleWithImageWidth}
            />
          )
        }
      }
      elements.push(
        <div key={i} className={contentItem.layout_config}>
          {contentElements}
        </div>
      );
    }
    return (
      <div className="justify-center my-12">
        {elements}
      </div>
    );
  };

  return (
    <>
      <section id="content" className={`mx-20 my-20 $ ${loadingContent? 'h-screen' : ''}`}>
          {renderContent()}
      </section>
    </>
  );
}

export default Homepage;