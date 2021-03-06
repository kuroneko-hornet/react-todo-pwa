import { AuthProvider } from './providers/AuthProvider';
import './App.css';
import './service/firebase';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ToDoList from './components/ToDoList';
import Footer from './components/Footer';

function App() {
    return (
        <AuthProvider>
            <Header />
            <Dashboard />
            <Footer />
        </AuthProvider>
    );
}

export default App;
