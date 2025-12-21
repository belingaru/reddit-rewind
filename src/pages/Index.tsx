import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import PostCard from "@/components/PostCard";
import FeedFilter from "@/components/FeedFilter";
import { posts } from "@/data/posts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        {/* Main Feed */}
        <main className="flex-1 max-w-2xl mx-auto border-x border-border min-h-[calc(100vh-48px)]">
          <FeedFilter />
          
          <div>
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </main>

        {/* Right spacer for symmetry */}
        <div className="hidden xl:block w-64 shrink-0" />
      </div>
    </div>
  );
};

export default Index;
