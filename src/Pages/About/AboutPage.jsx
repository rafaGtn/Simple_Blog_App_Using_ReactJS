export default function AboutPage() {
    return (
        <div style={{maxWidth: '800px', margin: '0 auto', padding: '20px'}}>
            <h1>About This Blog</h1>
            
            <section style={{marginTop: '30px'}}>
                <h2>Purpose</h2>
                <p>
                    Welcome to Simple Blog! This is a React-based blogging platform 
                    designed to share knowledge about React, web development, and modern 
                    JavaScript frameworks.
                </p>
            </section>

            <section style={{marginTop: '30px'}}>
                <h2>Features</h2>
                <ul style={{lineHeight: '2'}}>
                    <li>📝 Browse blog posts about React and web development</li>
                    <li>❤️ Like your favorite posts (powered by Redux)</li>
                    <li>💬 Add comments to engage with content</li>
                    <li>🧭 Smooth navigation with React Router</li>
                </ul>
            </section>

            <section style={{marginTop: '30px'}}>
                <h2>Technologies Used</h2>
                <ul style={{lineHeight: '2'}}>
                    <li><strong>React</strong> - UI library for building components</li>
                    <li><strong>React Router</strong> - Client-side routing</li>
                    <li><strong>Redux Toolkit</strong> - State management for likes</li>
                    <li><strong>Vite</strong> - Fast build tool and dev server</li>
                </ul>
            </section>

            <section style={{marginTop: '30px'}}>
                <h2>Setup</h2>
                <p>
                    This blog was created as part of an EPAM React course project. 
                    It demonstrates key React concepts including component architecture, 
                    state management (both local and global), routing, and user interactions.
                </p>
            </section>

            <section style={{marginTop: '30px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px'}}>
                <h2>Project Structure</h2>
                <p>The application follows a clean component-based architecture:</p>
                <ul style={{lineHeight: '1.8'}}>
                    <li><strong>Components</strong> - Reusable UI elements (AppHeader, AppPost, AppButton)</li>
                    <li><strong>Pages</strong> - Route-specific components (Home, Post, About)</li>
                    <li><strong>Redux</strong> - Global state management for likes</li>
                    <li><strong>Assets</strong> - Static data and resources</li>
                </ul>
            </section>
        </div>
    );
}