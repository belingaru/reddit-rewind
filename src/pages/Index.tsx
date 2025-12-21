import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar";
import PostCard from "@/components/PostCard";
import FeedFilter from "@/components/FeedFilter";
import CreatePostBar from "@/components/CreatePostBar";
import { posts } from "@/data/posts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="flex gap-6">
          <Sidebar />
          
          {/* Main Feed */}
          <div className="flex-1 min-w-0 max-w-2xl">
            <CreatePostBar />
            <FeedFilter />
            
            <div className="space-y-3">
              {posts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
          </div>

          <RightSidebar />
        </div>
      </main>
    </div>
  );
};

export default Index;
