import {Link, outlet} from "react-router";

const Header = () => (
    <header className="p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">My CMS Project</h1>
    </header>
);

const Footer = () => (
    <footer className="p-4 bg-gray-100 text-center">
        <small>&copy; {new Date().getFullYear()} Our CMS Project</small>
    </footer>
);

const BasicLayouts = () => (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-8">
            <Outlet />
        </main>
        <Footer />
    </div>
);

export default BasicLayouts;