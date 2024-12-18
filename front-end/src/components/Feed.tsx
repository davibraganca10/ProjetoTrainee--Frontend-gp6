import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import FeedDeslogado from "@/pages/feed";
import FeedLogado from "@/pages/feed/feed.logado";

const Feed: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <FeedLogado /> : <FeedDeslogado />;
};

export default Feed;