import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useAppContext } from "../../contexts/AppContext";
import {
  Loading,
  SearchResults,
  ImageResults,
  NewsResults,
  VideoResults,
} from "../../components";

const Results = () => {
  const { results, isLoading, searchTerm, getResults } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/video" || location.pathname === "/image") {
        getResults(`${location.pathname}/q=${searchTerm}`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return <SearchResults results={results?.results} />;

    case "/image":
      return <ImageResults results={results?.image_results} />;

    case "/news":
      return <NewsResults results={results} />;

    case "/video":
      return <VideoResults results={results?.results} />;

    default:
      return "ERROR";
  }
};
export default Results;
