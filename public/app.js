// Reddit Clone - Static JavaScript

// Posts data
const posts = [
  {
    id: 1,
    subreddit: "r/gaming",
    author: "u/gamer2024",
    timeAgo: "5h",
    title: "After 200 hours, I finally completed the game on the hardest difficulty",
    content: "It took me countless tries and a lot of frustration, but I finally did it. The sense of accomplishment is unreal.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    upvotes: 15200,
    comments: 842
  },
  {
    id: 2,
    subreddit: "r/pics",
    author: "u/photographer_jane",
    timeAgo: "8h",
    title: "Caught this amazing sunset yesterday at the beach",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    upvotes: 28400,
    comments: 1203
  },
  {
    id: 3,
    subreddit: "r/technology",
    author: "u/tech_enthusiast",
    timeAgo: "3h",
    title: "New breakthrough in quantum computing could revolutionize cryptography",
    content: "Researchers have achieved a major milestone that brings us closer to practical quantum computers. This could have massive implications for data security.",
    upvotes: 8900,
    comments: 567
  },
  {
    id: 4,
    subreddit: "r/aww",
    author: "u/pet_lover",
    timeAgo: "12h",
    title: "My rescue dog on her first day home vs one year later",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800",
    upvotes: 45600,
    comments: 2100
  },
  {
    id: 5,
    subreddit: "r/science",
    author: "u/sciencegeek",
    timeAgo: "6h",
    title: "Study finds that regular exercise can reduce symptoms of depression by 40%",
    content: "A comprehensive meta-analysis of over 100 studies confirms the powerful mental health benefits of physical activity.",
    upvotes: 12300,
    comments: 890
  },
  {
    id: 6,
    subreddit: "r/food",
    author: "u/homechef",
    timeAgo: "2h",
    title: "Made homemade ramen from scratch - 12 hours of work but totally worth it",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
    upvotes: 9800,
    comments: 423
  }
];

// Track vote states
const voteStates = {};

// Format numbers
function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num.toString();
}

// Toggle sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');
}

// Toggle section
function toggleSection(sectionId) {
  const content = document.getElementById(sectionId);
  const chevron = document.querySelector(`[data-section="${sectionId}"] .chevron`);
  content.classList.toggle('collapsed');
  if (chevron) {
    chevron.style.transform = content.classList.contains('collapsed') ? 'rotate(-90deg)' : 'rotate(0deg)';
  }
}

// Handle upvote
function handleUpvote(postId, event) {
  event.stopPropagation();
  const post = posts.find(p => p.id === postId);
  const currentState = voteStates[postId];
  
  if (currentState === 'up') {
    voteStates[postId] = null;
  } else {
    if (currentState === 'down') {
      post.upvotes += 1;
    }
    voteStates[postId] = 'up';
    post.upvotes += 1;
  }
  
  if (currentState === 'up') {
    post.upvotes -= 1;
  }
  
  updatePostVotes(postId);
}

// Handle downvote
function handleDownvote(postId, event) {
  event.stopPropagation();
  const post = posts.find(p => p.id === postId);
  const currentState = voteStates[postId];
  
  if (currentState === 'down') {
    voteStates[postId] = null;
    post.upvotes += 1;
  } else {
    if (currentState === 'up') {
      post.upvotes -= 1;
    }
    voteStates[postId] = 'down';
    post.upvotes -= 1;
  }
  
  updatePostVotes(postId);
}

// Update post votes display
function updatePostVotes(postId) {
  const post = posts.find(p => p.id === postId);
  const state = voteStates[postId];
  
  const upButton = document.querySelector(`[data-post="${postId}"] .upvote-btn`);
  const downButton = document.querySelector(`[data-post="${postId}"] .downvote-btn`);
  const voteCount = document.querySelector(`[data-post="${postId}"] .vote-count`);
  
  upButton.classList.remove('upvoted');
  downButton.classList.remove('downvoted');
  voteCount.classList.remove('upvoted', 'downvoted');
  
  if (state === 'up') {
    upButton.classList.add('upvoted');
    voteCount.classList.add('upvoted');
  } else if (state === 'down') {
    downButton.classList.add('downvoted');
    voteCount.classList.add('downvoted');
  }
  
  voteCount.textContent = formatNumber(post.upvotes);
}

// Render posts
function renderPosts() {
  const container = document.getElementById('posts-container');
  container.innerHTML = posts.map(post => `
    <article class="post-card" data-post="${post.id}">
      <div class="post-header">
        <div class="subreddit-icon"></div>
        <span class="subreddit-name">${post.subreddit}</span>
        <span class="post-meta">• ${post.author} • ${post.timeAgo}</span>
      </div>
      <h2 class="post-title">${post.title}</h2>
      ${post.content ? `<p class="post-content">${post.content}</p>` : ''}
      ${post.image ? `<img src="${post.image}" alt="${post.title}" class="post-image">` : ''}
      <div class="post-actions">
        <div class="vote-container">
          <button class="vote-button upvote-btn" onclick="handleUpvote(${post.id}, event)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </button>
          <span class="vote-count">${formatNumber(post.upvotes)}</span>
          <button class="vote-button downvote-btn" onclick="handleDownvote(${post.id}, event)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
        </div>
        <button class="action-button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          ${formatNumber(post.comments)}
        </button>
        <button class="action-button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
          </svg>
          Share
        </button>
      </div>
    </article>
  `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderPosts();
});
