
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Button from "../components/Button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <div className="glass-morphism p-12 rounded-xl text-center max-w-md">
        <h1 className="text-8xl font-bold text-gradient mb-6">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button href="/" icon={<Home className="w-4 h-4" />} iconPosition="left">
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
