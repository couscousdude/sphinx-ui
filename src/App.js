import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Root from "./routes/Root";
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';
import NotFound from './routes/NotFound';
import Terms from './routes/Terms';
import PrivacyPolicy from './routes/PrivacyPolicy';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
